/* // object literal

const p1 = {
    //attributes
    name:'Martin',
    lastName:'Arredondo',
    age:'28',
    job:'Electronics Technician',
    music:['Of Mice & Men', 'Dayshell', 'Linkin Park'],
    
 //     address:{
 //       street:'Dallas',
 //       number:75159
 //   } 

}

const p2 = {
   
    name:'Samantha',
    lastName:'Jimenez',
    age:'30',
    job:true,
    music:['REM', 'Coldplay', 'Oasis'],
}




// console.log(person.music); // powerful dot 

function Person(name,age){
    this.name=name;
    this.age=age;
}

const person1 = new Person("Martin",28);
const person2 = new Person("Samantha",30);

console.log(person1.name);
console.log(person2.age);

function Task (name,priority,date){
    this.name=name;
    this.priority=priority;
    this.date=date;

}

const task1=new Task('Exam','High Priority','17SEP19');
const task2=new Task('Homework','Medium Priority','17SEP19');
const task3=new Task('TTH','Low Priority','17SEP19');

const tasks = [task1,task2,task3];

// console.log(task1);
// console.log(task2);
// console.log(task3);

console.log(tasks.length)

// for(var i=0; i < tasks.length; i++){
//     console.log(tasks[i].name);
// }

var sentence="tasks";

for(var i=0; i < tasks.length; i++){
    sentence=sentence + "<br>" + tasks[i].name;
}


document.getElementById('tasks').innerHTML= `${sentence}`;

console.log(task1);
console.log(task2);
console.log(task3); */


/* const client={
    name:'John',
    type:'Premium',
    data:{
        location:{
            city:'Tijuana',
            country:'Mexico'
        },
            account:{
                date:'2019',
                credit:1000

            }

    }

}

//const clientName=client.name;

let {name}=client;
let {type}=client;

let{data:{location:{city}}}=client;

console.log(city);


// console.log(client.data.location.city); */

class Student{
    constructor(name,points,grade){
        this.name=name;
        this.points=points;
        this.grade=grade; 
    }
}

const s1 = new Student('Kevin',1000,'A');
const s2 = new Student('Will',990,'A');
const s3 = new Student('Oliver',600,'C+');
const s4 = new Student('Moein',800,'B+');
const s5 = new Student('Liz',1000,'A');
const s6 = new Student('Robert',1100,'OP');
const s7 = new Student('Noah',850,'A-');
const s8 = new Student('Sheldon',500,'F');

const students = [s1,,s2,s3,s4,s5,s6,s7,s8];

const best = students.filter(students => students.points>800);
console.log(best);

const total = students.reduce((total,students)=>total+students.points,0);
console.log("Cohort 5 Average " + total/students.length);


// const liz = students.find(students => students.name==='Liz');
// console.log(liz);