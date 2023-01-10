var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 300, "two");
});


Promise.all(
  [promise1, promise2, promise3]) 
    .then(result => {   console.log(result) }) 
    .catch(error => console.log(`Error in promises ${error}`))