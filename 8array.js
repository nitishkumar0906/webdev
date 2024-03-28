//sorting in js

//ascending order sorting
//descending order sorting
//if we wanted to sort we have use sort method
let numbers=[7,8,9,6,5,1];
let sorting=numbers.sort();
console.log(sorting)



let alphabet=['a','b','c','d'];
let sortingnames=alphabet.sort();
console.log(sortingnames);



let numb1=[2,5,1,10,50,100,300,2000];
console.log(numb1.sort());
 //op=  [1, 10, 100, 2, 2000, 300, 5, 50]
 let x=numb1.sort((a,b)=>a-b);
console.log(x);


let students=[
    {name:'alice',age:22},
    {name:'bob',age:62},
    {name:'charlie',age:92},
]
console.log(students);
let sorted=students.sort((a,b)=>b.age-a.age);


const arr=[1,[2,3],4,5,6];
console.log(arr);
console.log(arr.flat);


const array=new Array(5).fill(10);
console.log(array);

const array1=[1,2,3,4,5];
array1.fill('nitish',1,4);
console.log(array1);


const person={fname:'nitish',loc:'delhi'};
const fillperson=new Array(3).fill(person);
console.log(fillperson)


//join

let mobiles=['lg','iphone',,'oppo','vivo']
console.log(mobiles);
let joinMob=mobiles.join("**");
console.log(joinMob);


//tostring() method is used to convert an object or array into the strung representation
let mobilesh=['lg','iphone',,'oppo','vivo']
console.log(mobilesh);
let joinMobs=mobiles.toString;
console.log(joinMobs,length);
