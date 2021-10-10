var ele=document.body.querySelector(".main")

var damage = 0;

var list=[{attack:"fire",dam:"3"}, {attack: "ice",dam:"1"}, {attack: "poison",dam:"4"}];

function renderList(){
    ele.innerHTML=""
    makeEle("Dragon Damage: " + damage);
        if (damage >= 10){
            makeEle("aha you won :) pog");
        }
}
function makeEle (attack){
    var dragEle=document.createElement("div");
    dragEle.innerHTML=attack;
    ele.appendChild(dragEle);
}
// function typeAttack(){
//     if (document.body.querySelector(".fire")){
//         damage= -1;
//     }
//     if (document.body.querySelector(".ice")){
//         damage= +1;
//     }
// }

renderList();
makeEle();
// typeAttack();

document.body.querySelector(".fire").addEventListener("click", function(){
    damage=damage+3;
    renderList();
    // typeAttack();
})
document.body.querySelector(".ice").addEventListener("click", function(){
    damage=damage+1;
    renderList();
    // typeAttack();
})
document.body.querySelector(".poison").addEventListener("click", function(){
    damage=damage+4;
    renderList();
})
