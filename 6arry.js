// let values=[10,20,30,40,50];
// console.log(typeof values);
// console.log(values[0]);
// console.log(values[1]);
// console.log(values[2]);
// console.log(values[3]);


// values[0]="100";
// values[4]=400;

// console.log(values);



// let values1=[];
// console.log(values1);
// values1[0]='nitish';
// values1[2]='kumar';
// values[21]="ram";

// console.log(values1);
// console.log(values1.length);
// console.log(values1[values1.length-1]);

// let numbers=[1,2,3];
// let array2=["a","b","c"];
// let value3=[true,false];

// let combineAnd=value1.concat(value2,value3);
// console.log(combineAnd)


//push and pop
//push method in javascript is used to add one or more elements to the end of the array
// let numbers = [1, 2, 3, 4];
// numbers.push(500);
// numbers.push(1000);
// console.log(numbers)
// let mobiles = ['LG', "IPHONE", "BPL", "VIVO"];
// mobiles.push("SAMSUNG", "OPPO");
// console.log(mobiles)
//normal way of inserting elements into an array
// let values = [];
// values[0] = 10;
// values[1] = 20;
// console.log(values);
//using push
// let values = [];
// values.push(10, 20, 30, 40);
// console.log(values);
// let values = [1, 2];
// console.log(values); //1, 2
// values.push(3, 4); //to existing and i wanted to push/add the new elements
// console.log(values)
// let values1 = [1, 2, 3, 5]; //concat combining
// let values2 = [2, 3, 5, 6];
//pop: is used to remove the last element from an array and returns the removed element
let mobiles = ['LG', "IPHONE", "BPL", "VIVO"];
console.log(mobiles);
// let removMobile1 = mobiles.pop();
let removMobile2 = mobiles.pop();
console.log(mobiles)
let numbers = [1, 2, 3, 4, 5];
let lastNumber = numbers.pop(); //5
console.log(numbers);
console.log(lastNumber);
let mixedArr = [1, "string", {value: 10}];
let removedMixedElement = mixedArr.pop(); //
console.log(mixedArr);
// 0 = 1;
// 1 = "string";
// 2 = {value: 10}
