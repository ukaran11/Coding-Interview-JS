// let i=0;
// for(let i = 0; i< 3; i++) {
//   let val = 10;
//   setTimeout(function log() {
//     console.log(i + ++val);
//   }, 1000);
// }

//----------------------------------------//
//----------------------------------------//

// let i=0;
// for(let i = 0; i< 3; i++) {
//   var val = 10;
//   setTimeout(function log() {
//     console.log(i + ++val);
//   }, 1000);
// }

//----------------------------------------//
//----------------------------------------//


for(var i = 0; i< 3; i++) {
  var val = 10;
  setTimeout(function log() {
    console.log(i + ++val);
  }, 1000);
}