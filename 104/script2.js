const today = new Date();

let value=today;

value=today.getMonth();
value=today.getDay();

let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(days[value]);

value = today.getFullYear;
console.log(value);

value=today.getDate();
console.log(value);

value=today.getHours();
console.log(value);

value=today.getMinutes();
console.log(value);

value=today.getSeconds();
console.log(value);

const score=1000;
const logged= true;

/* if(logged){
    console.log("the user is logged");
    else{
        console.log("you must log in");
    }
} */

//console.log(logged ? "must be logged in";




const payMethod = "cash";
// switch - case
switch(payMethod){
    case "cash": console.log(`you pay with ${payMethod} ... ` ); break;
    case "credit": console.log(`you pay with ${payMethod} ... processing ` ); break;
    case "debit": console.log(`you pay with ${payMethod} ... waiting process` ); break;
    default: console.log("invalid option... ");
    break;

}


//random number


// dices

//console.log(Math.random()*10);

//document.getElementById

/* for(let i=0; i<10; i++){
    console.log(Math.ceil(Math.random()*6));
}

for(let i=0; i<10; i++){
    console.log(Math.ceil(Math.random()*6));
}
*/


//console.log(Math.random()*6);
//console.log(result);











