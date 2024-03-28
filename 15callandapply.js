//call 
let person={
    fullNmae: function(city,country){
        return this.firstName+' '+this.lastName+' '+city+' '+country;
    }
}

let person1={
    firstName:'Nitish',
    latName:"Kumar"
}

let fullNmae=person.fullNmae.call(person1,'bihar','India');

console.log(fullNmae)

//apply
let fullname1=person.fullNmae.apply(person,["bihar","India"]);
console.log(fullNmae1)


//bind
let person2=person.fullName.bind(person1,'bihar','India');
