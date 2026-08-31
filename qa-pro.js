const fs=require('fs'),path=require('path'),child=require('child_process');
const root=path.resolve(__dirname,'..');
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts=[...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1]).filter(x=>x.startsWith('js/'));
const assets=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]).filter(x=>x.startsWith('assets/'));
for(const f of scripts){assert(fs.existsSync(path.join(root,f)),'Missing script '+f);child.execFileSync(process.execPath,['--check',path.join(root,f)],{stdio:'ignore'});}
for(const f of assets){assert(fs.existsSync(path.join(root,f)),'Missing asset '+f);}
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
for(const f of [...sw.matchAll(/'([^']+)'/g)].map(m=>m[1]).filter(x=>x.startsWith('./'))){assert(fs.existsSync(path.join(root,f.slice(2))),'SW missing '+f);}
assert(/user-scalable=no/.test(html),'Mobile viewport policy missing');
assert(/dvh/.test(fs.readFileSync(path.join(root,'css/style.css'),'utf8')),'Dynamic viewport CSS missing');
assert(/prefers-reduced-motion/.test(fs.readFileSync(path.join(root,'css/style.css'),'utf8')),'Reduced motion missing');
assert(/LEGACY_KEYS/.test(fs.readFileSync(path.join(root,'js/save.js'),'utf8')),'Legacy save detection missing');
console.log('SLYWORD V7.1 PROFESSIONAL QA PASS');
console.log(JSON.stringify({scripts:scripts.length,htmlAssets:assets.length,serviceWorker:'validated',syntax:'validated',responsive:true,reducedMotion:true,legacySave:true},null,2));
