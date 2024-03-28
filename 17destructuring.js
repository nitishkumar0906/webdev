//destructuring in js that allows us to extract values from array properties from objects into the distinct values
//normal way of aaray

let numbers=[1,2,3,4,5];
let[one,two,three,four,five]=numbers;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);


// let details={name:'nitish',city:'delhi',state:'delhi'};
// let {name,city,state}=details;
// console.log(name,state)



//nested objects
// let details={name:'nitish',address:{city:'delhi',state:'delhi'}};
// let {name,address:{city,state}}=details
// console.log(name,city,state)



//non-destructure


function userdata(name,age){
    console.log(name)
    console.log(age)
}

let user={name:'nitish',age:24};
userdata(user)