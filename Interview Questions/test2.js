function a() {
  console.log(name) // undefined
  var name = "ABCD"
  console.log(name) // ABCD
  function b() {
  	console.log(name) // undefined
    var name = "EFGH"
  	console.log(name) // EFGH
  }
  b()
}
a()