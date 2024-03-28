// every method in js is used to check if all the elemts in an array pass a specific condition

// const numbers=[5,10,15,-8];
// const posetiveno=numbers.every(number => number >0);
// console.log(posetiveno)

// const mobiles=['lgs','samsung','bpl','iphone'];
// const allMobiles=mobiles.every(mobile => mobile.length >2);
// console.log(allMobiles);

// const ages=[11,20,60,55];
// const allages=ages.every(age => age >=10);
// console.log(allages);

// const temp=[18,22,25,20];
// const tempAll=temp.every(temp => temp >=18 && temp <= 25);
// console.log(tempAll)




// some method in js is used to check if at least one element is an array satisfies the given condition

// const numbers=[1,3,4,34,9];
// const no=numbers.some(num => num %2===0);
// console.log(no);

// let num=[40,90,101,60];
// let checkNum=num.some(num => num>100);
// console.log('check num >100',checkNum);



// filter method is used to create a new array containing elemnts that satisfy a specific condition

const numbers=[1,2,3,4,5,6];
console.log(numbers);
const evenNumbers=numbers.filter(num => num %2===0)
console.log(evenNumbers)


const students=[
    {fname:'omkar',grade:90},
    {fname:'chinmay',grade:50},
    {fname:'viswa',grade:60},
    {fname:'nitish',grade:80},
];

const highGrade=students.filter(student => student.grade > 70);
console.log(highGrade)


const business=[
    {site:'flipkart',business:90},
    {site:'amazont',business:60},
    {site:'myntra',business:50},
    {site:'fab',business:80},
];
const offers=business.filter(business => business.business>70);
console.log(offers)


//shift and unshift

let values=[1,2,3,4,5];
let removeFirst=values.shift();//will remove the first element
 console.log(values)

  values=[1,2,3,4,5];
 values.unshift(400,4090);
 console.log(values)

 values.push(700,400);
 console.log(values);