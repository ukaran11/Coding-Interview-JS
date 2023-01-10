//-------------------------------------------------------------------------------------------------------//
// Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = {firstName: 'Utsav', lastName: 'Karan'}
var employee2 = {firstName: 'Divya', lastName: 'Karan'}

function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

invite.call(employee1, "Hello", "How are you?")    // Hello Utsav Karan, How are you?
invite.call(employee2, "Hello", "How are you?")    // Hello Divya Karan, How are you?

//-------------------------------------------------------------------------------------------------------//

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee1 = {firstName: 'Utsav', lastName: 'Karan'}
var employee2 = {firstName: 'Divya', lastName: 'Karan'}

function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

invite.apply(employee1, ["Hello", "How are you?"])    // Hello Utsav Karan, How are you?
invite.apply(employee2, ["Hello", "How are you?"])    // Hello Divya Karan, How are you?

//-------------------------------------------------------------------------------------------------------//

// bind: returns a new function, allowing you to pass any number of arguments

var employee1 = {firstName: 'Utsav', lastName: 'Karan'}
var employee2 = {firstName: 'Divya', lastName: 'Karan'}

function invite(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?")  // Hello Utsav Karan, How are you?
inviteEmployee2("Hello", "How are you?")  // Hello Divya Karan, How are you?
