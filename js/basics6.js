// Object is a collection of properties
// Property can be 

let person = {
    firstName : "Abe",
    lastName : "Ora",
    age : 24,
    fullName : function(){
        console.log(this.firstName + " " + this.lastName) // this keyword is used to access the property of the object
    }
}

console.log(person.lastName)
console.log(person['lastName'])

person.firstName = 'Clarisse'
console.log(person.firstName)

person.fullName()

person.gender = 'Male' // To add a property

console.log(person)

delete person.gender // to delete a property

console.log(person)

console.log('gender' in person) // To check if the property is present to the object

for(let key in person){
    console.log(person[key])
}

