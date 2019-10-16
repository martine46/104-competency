//let name=prompt("name: ");

//let name; //declaration

//et status= false;

//const address="Cal Tech";

//alert("welcome + name");

//console.log(name + " " + " " + status);


//let x=10;
//let y=3;


// let x = parseInt(prompt("number 1: "));
// let y = parseInt(prompt("number 2: "));

// console.log(x+y);

//loops

//for(var i=0; i< 10 ; i ++){
    //console.log("Hello :) ");

    //if(i==5){
       // console.log('yes ');
  //  }
  //  else{
   //     console.log("legolas..");
   // }
//}





//let name=prompt("name: ");

//document.getElementById("message").innerHTML=`<h1> Welcome ${name} </h1>`

//function declaration
//function greeting(){
   // console.log("HI");
//}

//greeting();

//function expression

//const sum=function(){
   // console.log(1+3);
//}
 
    //sum();
    const sum=function(num1,num2){
        return num1+num2;
    }
    
    const multi= function(a){
        return a*5;
    }
    
    let result=sum(10,20);
    
    console.log(result);
    
    result=multi(5);
    
    console.log(result);
    
    (function(){
        console.log("I am here ... learning ");
    
    })('JS');
    
    let traveling = destination =>
      //  return "traveling to + destination";
    
    
    //traveling("Italy");
    
    let travel;
    
    travel = traveling("rome");
    
    travel = traveling("napoli");
    console.log(travel);
    
    