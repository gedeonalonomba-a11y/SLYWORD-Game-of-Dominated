(function(){
function unlocked(s,id){return s.unlockedTech.includes(id)}
SLY.Tech={
 unlock(id){const s=SLY.State.get(),t=s.technologies[id];if(!t||unlocked(s,id)||s.techPoints<t.cost||(t.req&&!unlocked(s,t.req)))return false;s.techPoints-=t.cost;s.unlockedTech.push(id);SLY.Events.news('Technologie débloquée',t.name+' devient opérationnelle.','technology');SLY.Audio.play('tech');return true},
 unlockMilitary(id){const s=SLY.State.get(),t=s.militaryTech[id];if(!t||s.unlockedMilitaryTech.includes(id)||s.techPoints<t.cost)return false;s.techPoints-=t.cost;s.unlockedMilitaryTech.push(id);SLY.Events.news('Doctrine militaire',t.name+' est désormais active.','military');SLY.Audio.play('tech');return true},
 productBonus(id,p){const s=SLY.State.get();let q=0,d=0,costPct=0,capacity=0,stability=0;Object.entries(s.technologies).forEach(([tid,t])=>{if(!unlocked(s,tid))return;const b=t.bonus||{};if(!b.products||b.products.includes(id)){q+=b.quality||0;d+=b.demand||0;}costPct+=b.cost||0;capacity+=b.saleCapacity||0;stability+=b.stability||0;});return{quality:q,demand:d,costPct,capacity,stability}}
};
})();
