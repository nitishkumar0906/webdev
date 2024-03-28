// for(let i=0;i<10;i++){
//     console.log(i)
// }

// const mobiles=[""]








// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

// const mobiles=["lg","iphone","oppo","vivo"];
// for(let i=0;i<mobiles.length;i++){
//     console.log(mobiles[i])
// }

// for(let i=5;i>0;i--)
// {
//     console.log(i)
// }

// reverse the value
// const mobiles=["lg","iphone","oppo","vivo"];
// for(let i=mobiles.length-1;i>-0;i--)
// {
//     console.log(mobiles[i])
// }


//finding the values
// let numbers=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<numbers.length;i++)
// {
//     sum +=numbers[i];
// }
// console.log("sum is: "+sum);


//looping arrays of objects
// const mobiles=[
//     { name:'lg', price:10000},
//     { name:'vivo', price:9000},
//     { name:'oppo', price:16000},
//     { name:'iq', price:2000},
// ]
// for(let mobilesData of mobiles){
//     console.log(mobilesData.name+" is "+mobilesData.price)
// }

//for in loop

// let person={
//     name:"nitish",
//     place:"bihar",
//     country:"india"
// }
// for(let properties in person){
//     console.log(properties+" :"+person[properties])
// }


// let colors=["red","green","orange"];
// for(let index in colors){
//     console.log(index+" : "+colors[index])
// }

// let name="nitish";
// for(let index in name){
//     console.log(index+" : "+name[index])
// }


//for of

// let colors=["red","green","orange"];
// for(let localcolor of colors)
// {
//     console.log(localcolor)
// }

// let name="nitish";
// for(let index of name){
//     console.log(index)
// }



//while loop
// let count=0;
// while(count <5){
//     console.log(count)
//     count++;
// }


//looping over the array of element using the while loop

// const mobiles=["lg","iphone","oppo","vivo"];
// let index=0;
// while(index<mobiles.length)
// {
//     console.log(mobiles[index])
//     index++;
// }


// let password="welcome";
// let attempts=3;
// while(attempts>0)
// {
//     let userInput=prompt("enter the password: ");
//          alert("incorrect password")
//     }
// }


//do while loop
let count=0;
do{
    console.log(count);
    count++;
}while(count<5)


// let password="welcome";
// let attempts=3;
// do{ if(userInput===password)
//       break;
//     else{
//         attempts--;
//   
//     let userInput=prompt("enter the password:");
//     if(userInput===password){
//         alert("password is correct, access given");
//         break;
//     }
//     else{
//         attempts--;
//         alert("incorrect password")
//     }
// }while(attempts >0)