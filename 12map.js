//map

// let myMap=new Map([
//     ['lg',10000],
//     ['iq',20000],
//     ['vivo',30000]
// ]);
// console.log(myMap)


//set method to add the values into map

// let countries =new Map();
// console.log(countries);
// countries.set('India','150cr population');
// countries.set("usa",'15cr population');
// countries.set("uk",'5cr population');
// console.log(countries)

// countries.delete('uk')
// console.log(countries)


let register=new Map([
    ["username",'nitsih'],
    ['mobile','123456789']
]);
console.log(register)

for(let[key,value] of register){
    console.log(value)
}