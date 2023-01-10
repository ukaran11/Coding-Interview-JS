// let printLoop = () => {
//   {
//     var baz = 0;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     var baz = 1;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     var baz = 2;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   console.log(baz);
// }

//---------------------------------------------------//
//---------------------------------------------------//
// let printLoop = () => {
//   {
//     let baz = 0;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     let baz = 1;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     let baz = 2;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   // console.log(baz); // Error: baz is not defined
// }
//--------------------------------------------------------//
//--------------------------------------------------------//

// let printLoop = () => {
//   let baz = 0;
//   {
//     baz = 0;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     baz = 1;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     baz = 2;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   console.log(baz);
// }
//--------------------------------------------------------//
//--------------------------------------------------------//

// let printLoop = () => {
//   let baz = 0;
//   console.log(baz);
//   {
//     let baz = 0;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     let baz = 1;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
//   {
//     let baz = 2;
//     setTimeout(() => {
//       console.log(baz);
//     }, 1000)
//   }
// }

//--------------------------------------------------------//
//--------------------------------------------------------//


let printLoop = () => {
  let baz = 0;
  console.log(baz);
  {
    var val = 10;
    let baz = 0;
    setTimeout(() => {
      console.log(baz + ++val);
    }, 1000)
  }
  {
    var val = 10;
    let baz = 1;
    setTimeout(() => {
      console.log(baz + ++val);
    }, 1000)
  }
  {
    var val = 10;
    let baz = 2;
    setTimeout(() => {
      console.log(baz + ++val);
    }, 1000)
  }
}
printLoop();