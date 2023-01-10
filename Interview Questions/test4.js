// magicFunction = (n) => {
//   let i = 1
// 	while(i <=  n){
// 			setTimeout(() => {
//         console.log(i)
//         i++;
//     	}, 1000)
//   }
// }
// magicFunction(5)

const printNumbersForEvery2Sec = (n)=>{
    for (let i = 1; i <= n; i++) {
      setTimeout(console.log, i * 1000,i) 
    }
  }

printNumbersForEvery2Sec(5);