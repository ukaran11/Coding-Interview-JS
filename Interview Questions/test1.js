let isComplete = false

setTimeout(() => {
  console.log("Completed")
  isComplete = true
}, 1000)

while(!isComplete) {
  console.log("In Progress!")
}