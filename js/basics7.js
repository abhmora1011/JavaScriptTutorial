// Classes
// export class first so that you can inherit it to others
// module.exports is necessary if you will inherit the class to others

module.exports = class Person{
    age = 25
    // location = 'canada'
    get location(){ // Another way to declare a property in a class is to use getter method
        return "canada"
    }

    // Constructor
    constructor(firstNAme, lastName){
        this.firstNAme = firstNAme
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstNAme + " " + this.lastName)
    }

}

// NOTE : DO NOT EXPORT IF YOU HAVE CREATED AN OBJECT INSIDE A CLASS THAT YOU WILL INHERIT

// let person = new Person('Abe','Ora');
// let person1 = new Person('Gale','Ora');

// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())