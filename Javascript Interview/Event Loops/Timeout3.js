// SetTimeout/clearTimeout function
const greeting = () => {
  console.log('Good Morning');
}

const start = () => {
  msg = setTimeout(greeting, 2000);
}

const stop = () => {
  clearTimeout(msg)
}

start();
// stop();
