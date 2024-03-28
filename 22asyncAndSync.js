// sync 

// console.log("hi, hell0");
// console.log("hi,hello1")
// console.log("hi,hello2")
// console.log("hi,hello3")

// calculate();
// console.log("hi,hello4")
// console.log("hi,hello5")
// console.log("hi,hello6")

// function calculate(){
//     let sum=0;
//     for(let i=0;i<1000000000;i++){
//         sum +=i;
//     }
//     console.log('wait ',sum);
// }



//async

console.log('hi, hello')
console.log('hi, hello2')
console.log('hi, hello')
console.log('hi, hello')
//this setTimeout function is helpful for performing async operations not blocking code

setTimeout(() =>{
    calculate();
},1000); //1000 mill seconds =1sec
//calculate

console.log("hi,hello")
console.log("hi,hello")
console.log("hi,hello")
console.log("hi,hello10")

function calculate(){
    let sum=0;
    for(let i=0;i<1000000000;i++){
        sum +=i;
    }
    console.log('wait ',sum);
}