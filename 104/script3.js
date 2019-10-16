function dices(){

    let dice1= Math.ceil.random()*6
    let dice2= Math.ceil.random()*6

    console.log(dice1);
    console.log(dice2);

    document.getElementById('dice1').innerHTML= ` <img class= "dice-img src="img/${dice1}.png" `;
    document.getElementById('dice2').innerHTML= ` <img class= "dice-img src="img/${dice2}.png" `;

}


    /* switch(dice1){
        case 1:document.getElementById('dice1').innerHTML= ' <img src="img/one.png" ';
        break;
        default: document.getElementById('dice1').innerHTML="<p> its different from 1 </p>";
    } */
//}

//dices();