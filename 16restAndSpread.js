// //rest and spread operators

// //rest operator(...)
// //rest operator allows us to represnt an indefinite number of arguments as an array within the function


// function sum(...num){
//     return num.reduce((total,num)=>total+num,0);
// }
// console.log(sum(6,23,56,86,12));


// function add(...numbers){
//     let total=0;
//     for(let num of numbers){
//         total +=num
//     }
//     return total;
// }

// console.log(sum(6,23,56,86,12,567,24));


// function sum1(...num1){
//     let total=0;
//     for(let i=0;i<num1.length;i++){
//         total +=num1[i]
//     }
//     return total;

// }
// console.log(sum1(6,23,56,86,12,567,2,9654));




// spread

const arr1=[1,2,3];
const arr2=[4,5,6];

console.log([...arr1, ...arr2])



const name={fname:'nitish',lname:'kr'};
const address={city:'delhi',state:'delhi'};
const secaddress={city1:'mbi',state1:'bihar'};
const fullobj={...name,...address,...secaddress};
console.log(fullobj)