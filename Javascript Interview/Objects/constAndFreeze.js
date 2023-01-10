// const applies to bindings ('variables"). It creates an immmutable binding i.e. you cannot assign a new value to the binding

// Object.freeze works on values, and more specifically, object values. It makes an object immutable, .i.e. you cannot change its propertiies


const person = {
  name:'Leonardo'
}

let animal = {
  species: 'snake'
}

// person = animal; // TypeError: Assignment to constant variable.
// animal = person;
Object.freeze(person)
person.name = 'lima'
console.log('person', person);
console.log('animal', animal);