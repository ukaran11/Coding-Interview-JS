let details = {
  firstName: 'Uday',
  checkTimer() {
    // console.log(this);
    console.log(this.firstName);
  }
}

// details.checkTimer()  //Normal call

// this inside checkTimer would be window object in this case
setTimeout(details.checkTimer, 1000) 

// to fix the above issue, we need to explicitly bind it to details object
setTimeout(details.checkTimer.bind(details), 1000)


