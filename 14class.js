//classes in javascipt
//classes is basically for inheritance purpose, we can easily create the constructor and create the objects with shared method and properties
//we have the class using the "class" keyword
class Person {
    constructor(name, location) {
        this.name1 = name;
        this.location1 = location
    }
    hello(){
        console.log(this.name1, this.location1)
    }
}
//create an object
let something = new Person("Nitish", "bihar");
something.hello()
//constructor is a special method/function for initializing new instance(object) of a class, it is automatically called when the new object is created
//today completed this : Functions, arrow functions, sets, maps, classes, constructor, object


class Book{
    constructor(title,author,publicationYear){
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear
    }
    displayInfo(){
        console.log(this.title,this.author,this.publicationYear)
    }
}

let book1=new Book("Devops",'xyz','12345')
book1.displayInfo()