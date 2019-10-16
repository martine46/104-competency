class Character{
    constructor(name,energy,hitPoints,id){
        this.name=name;
        this.energy=energy;
        this.hitPoints=hitPoints;
        this.id=id;
    }

   
display = function(){
        document.getElementById(this.id).innerHTML=`Name ${this.name} <br> Energy ${this.energy} <br> Hit Points ${this.hitPoints}`;

} 

attack = function(opponent,item){
    let newEnergy = opponent.energy - this.hitPoints;
    opponent.energy=newEnergy; 
    opponent.display();

if(opponent.energy == 0){
    document.getElementById(opponent.id).innerHTML="You lost";
    document.getElementById(this.id).innerHTML="You won";
}
document.getElementById('console').innerHTML=`${this.name} used ${item.img}`;



}





    
                }

const c1 = new Character ("Arcanine",100,20,"c1");
const c2 = new Character ("Pikachu",100,20,"c2");

c1.display();
c2.display();

class Item{
    constructor(iName,iHitPoints,img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }

    

}

/* class Move{
    constructor(mName,mHitPoints,img){
        this.mHitPoints=mHitPoints;
        this.mName=mName;
        this.img=img;
    }

    

}  */

const item1=new Item("Flamethrower",20,'<img class="item" src="img/flamethrower.png">');
const item2=new Item("Fire Spin",20,'<img class="item" src="img/firespin.png">');
const item3=new Item("Fire Blast",20,'<img class="item" src="img/fireblast.jpg">');
const item4=new Item("Quick Attack",20,'<img class="move" src="img/quickattack.png">');
const item5=new Item("Thunderbolt",20,'<img class="move" src="img/thunderbolt.jpg">');
const item6=new Item("Zap Cannon",20,'<img class="move" src="img/zapcannon.png">');

const pikachuMoves=[item4,item5,item6];
const arcanineMoves=[item1,item2,item3];



function selectItems(){
    let selection = Math.floor(Math.random()*3);
    return pikachuMoves[selection];
} 

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return arcanineMoves[selection];
}



