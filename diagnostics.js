(function(){
const started=Date.now();
window.SLY=window.SLY||{};
SLY.Diagnostics={errors:0,lastError:null,started,report(){const s=SLY.State?.get?.();return{uptime:Date.now()-started,errors:this.errors,lastError:this.lastError,version:s?.version||null,online:navigator.onLine,screen:innerWidth+'x'+innerHeight,dpr:devicePixelRatio||1}}};
window.addEventListener('error',e=>{SLY.Diagnostics.errors++;SLY.Diagnostics.lastError=e.message||'Erreur inconnue';console.error('[SLYWORD]',e.error||e.message)});
window.addEventListener('unhandledrejection',e=>{SLY.Diagnostics.errors++;SLY.Diagnostics.lastError=String(e.reason||'Promise rejetée');console.error('[SLYWORD]',e.reason)});
})();
