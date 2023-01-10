function Welcome(name) {
  var greetingInfo = function(message) {
    console.log(message + " " + name);
  }
  return greetingInfo;
}

var myFunction = Welcome("John");
console.log(myFunction);
myFunction("Welcome");
myFunction("Hello");

