var ele=document.body.querySelector(".main")

var damage = 0;

var attacks = [{attack:"fire",dam:"3"}, {attack: "ice",dam:"1"}, {attack: "poison",dam:"4"}];

function renderList(){
    ele.innerHTML=""
    makeEle("Dragon Damage: " + damage);
        if (damage >= 10){
            makeEle("aha you won :) pog");
        }
}
function makeEle (name){
    var dragEle=document.createElement("div");
    dragEle.innerHTML=name;
    ele.appendChild(dragEle);
}
function attackDragon(){
    damage=damage+attacks[i].dam;
}

renderList();
makeEle();
attackDragon();

document.body.querySelector(".fire").addEventListener("click", function(){
    attackDragon("fire");
    renderList();
}
document.body.querySelector(".ice").addEventListener("click", function(){
    attackDragon("ice");
    renderList();
}
document.body.querySelector(".poison").addEventListener("click", function(){
    attackDragon("poison");
    renderList();
}
