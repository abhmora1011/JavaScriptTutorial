// Inheritance is the Main Pillar in Object Oriented Programming
// one class can inherit/acquire the properties, Methods of another class
// The class which inherits the properties of other is known as subclass (derived class, child clas)
// the class whose properties are inherited is known as superclass

const Person = require("./basics7");

class Pet extends Person{

    get location() // Overrides the location of the parent class
    {
        return 'Blue Cross'
    }

    constructor(firstName,lastName)
    {
        // call parent class constructor by using super keyword
        super(firstName, lastName) 
    }

}

let pet = new Pet("Gako","Aguas")
pet.fullName() // fullName function is from the parent class
console.log(pet.location)