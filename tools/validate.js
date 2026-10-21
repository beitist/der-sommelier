// ============================================================
// DER SOMMELIER — Datenprüfung
// Prüft Wein-/Gast-/Bild-Verweise und Fragenstruktur.
// Aufruf: node tools/validate.js   (Exit-Code 1 bei Problemen)
// ============================================================
const fs=require('fs'),vm=require('vm'),path=require('path');
const base=process.argv[2]||path.join(__dirname,'..','outputs','der-sommelier'); const js=base+'/js/';
const ctx={console}; vm.createContext(ctx);
let src=['data.js','questions_lv0.js','questions_lv1.js','questions_lv2.js','questions_lv3.js','questions_lv4.js'].map(f=>fs.readFileSync(js+f,'utf8')).join('\n');
src+='\n;globalThis.__d={CONFIG,WINES,REGIONS,GUESTS,CHEFS,CHEF_COMMENTS,CHEF_HINT_INTROS,LEVEL_INTROS,QUESTIONS};';
vm.runInContext(src,ctx);
const {CONFIG,WINES,REGIONS,GUESTS,CHEFS,CHEF_COMMENTS,CHEF_HINT_INTROS,LEVEL_INTROS,QUESTIONS}=ctx.__d;
const P=[];const p=(...a)=>P.push(a.join(' '));
const ex=f=>fs.existsSync(path.join(base,f));
// assets
Object.values(WINES).forEach(w=>{if(!ex(w.label))p('MISSING wine label',w.id,w.label); if(!REGIONS[w.region])p('wine bad region',w.id); if(!REGIONS[w.region]?.wines.includes(w.id))p('wine not in region list',w.id,w.region);});
Object.values(REGIONS).forEach(r=>r.wines.forEach(id=>{if(!WINES[id])p('region refs unknown wine',r.id,id)}));
CONFIG.levels.forEach((l,i)=>{if(l.logo&&!ex(l.logo))p('MISSING logo',l.logo);['hintergrund_4x3.png','theke.png'].forEach(f=>{if(!ex('assets/'+l.bgKey+'/'+f))p('MISSING bg',l.bgKey,f)});if(!CHEFS[l.id])p('no chef',l.id);if(!CHEF_COMMENTS[l.id])p('no chef comments',l.id);if(!CHEF_HINT_INTROS[l.id])p('no hint intros',l.id);if(!LEVEL_INTROS[l.id])p('no level intro',l.id);if(!QUESTIONS[l.id])p('no questions',l.id); l.unlockRegions.forEach(r=>{if(!REGIONS[r])p('unlock unknown region',r)});});
Object.values(CHEFS).forEach(c=>{if(!ex(c.sprite))p('MISSING chef sprite',c.sprite)});
const allGuestIds=new Set();
GUESTS.recurring.forEach(g=>{allGuestIds.add(g.id);Object.values(g.sprites).forEach(s=>{if(!ex(s))p('MISSING sprite',s)})});
Object.entries(GUESTS.byLevel).forEach(([lv,gs])=>gs.forEach(g=>{if(allGuestIds.has(g.id))p('dup guest id',g.id);allGuestIds.add(g.id);if(!ex(g.sprite))p('MISSING sprite',g.sprite)}));
if(!ex('assets/map/weltkarte.png'))p('MISSING map');
// regions unlocked vs wines level
const unlockLevel={};CONFIG.levels.forEach((l,i)=>l.unlockRegions.forEach(r=>unlockLevel[r]=i));
Object.values(WINES).forEach(w=>{if(unlockLevel[w.region]===undefined)p('wine region never unlocked',w.id,w.region);else if(unlockLevel[w.region]>w.level)p('wine level',w.level,'< region unlock',unlockLevel[w.region],w.id)});
// questions
const ids=new Map();
const stats={};
CONFIG.levels.forEach((l,li)=>{const Q=QUESTIONS[l.id]||{};stats[l.id]={};
 const lvWines=Object.values(WINES).filter(w=>w.level===li).map(w=>w.id);
 Object.entries(Q).forEach(([type,arr])=>{stats[l.id][type]=arr.length;
  if(!['food_pairing','preference','besserwisser','weinwissen','blindtasting','beratung'].includes(type))p('UNKNOWN type',l.id,type);
  arr.forEach(q=>{const where=`${l.id}/${type}/${q.id}`;
   if(!q.id)p('no id',where); if(ids.has(q.id))p('DUP id',q.id,'in',ids.get(q.id),'and',where); ids.set(q.id,where);
   if(q.guestId&&!allGuestIds.has(q.guestId))p('UNKNOWN guestId',where,q.guestId);
   if(!q.guestId)p('no guestId (random guest)',where);
   const checkOpts=(opts,w)=>{ if(!opts){p('no options',w);return;}
     opts.forEach(o=>{if(o.wineId&&!WINES[o.wineId])p('UNKNOWN wineId',w,o.wineId); if(o.wineId&&WINES[o.wineId]&&WINES[o.wineId].level>li)p('wine from HIGHER level (not learned yet)',w,o.wineId,'lv'+WINES[o.wineId].level); if(o.correct&&o.acceptable)p('correct+acceptable',w,o.wineId)});
     const c=opts.filter(o=>o.correct).length; if(c===0)p('NO correct option',w);
     const fav=opts.filter(o=>o.favorite); fav.forEach(f=>{if(!f.correct)p('favorite not correct',w,f.wineId)});
     const dupW=opts.map(o=>o.wineId).filter((x,i,a)=>x&&a.indexOf(x)!==i); if(dupW.length)p('dup wine in options',w,dupW);
   };
   if(type==='food_pairing'||type==='preference'){checkOpts(q.options,where); if(!q.scenario||!q.question)p('missing scenario/question',where);
     // wines in options not in level pool (would be added)
   }
   if(type==='blindtasting'){checkOpts(q.options,where); if(!q.clues||!q.clues.appearance||!q.clues.nose||!q.clues.palate)p('missing clues',where); if(!q.explanation)p('no explanation',where);}
   if(type==='weinwissen'){ if(!q.options)p('no opts',where); else {const c=q.options.filter(o=>o.correct).length; if(c!==1)p('weinwissen correct count',c,where); q.options.forEach(o=>{if(!o.text)p('opt no text',where)})} if(!q.explanation)p('no explanation',where); if(!q.question)p('no question',where);}
   if(type==='besserwisser'){ if(typeof q.isCorrect!=='boolean')p('isCorrect not bool',where,q.isCorrect); if(!q.statement)p('no statement',where); if(!q.correction)p('no correction',where);}
   if(type==='beratung'){ if(!q.intro)p('no intro',where); if(!q.steps||q.steps.length!==3)p('steps!=3',where,q.steps&&q.steps.length); else {q.steps.slice(0,2).forEach((s,i)=>{if(!s.choices)p('step no choices',where,i); else s.choices.forEach(c=>{if(!c.text||!c.guestResponse)p('choice missing text/resp',where,i)})}); checkOpts(q.steps[2].options,where+'/step3');}}
   // unknown keys
   const known=['id','guestId','mood','scenario','question','options','statement','isCorrect','correction','explanation','clues','intro','steps','summary','difficulty','tags'];
   Object.keys(q).forEach(k=>{if(!known.includes(k))p('extra key',where,k)});
  });
 });
});
console.log('Fragen pro Level:',JSON.stringify(stats));
if(P.length){console.log(P.join('\n'));process.exit(1);}else console.log('OK – keine Probleme gefunden.');
