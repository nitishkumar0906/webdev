function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

export {add,substract,multiply,divide};
export default function hi(name){
    console.log(`hello, ${name}`)
}

//single export or default export allow us to export only one value,function or class as the default export of that module

export const COUNTRY='INDIA'
export const state="Delhi"

const COUNTRY1='India'
const state1='bihar'
const name="Nitish"
export {COUNTRY1,state1,name}