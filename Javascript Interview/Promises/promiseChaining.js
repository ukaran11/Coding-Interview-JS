new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then(res => {
    console.log(res);
    return res*2;
  })
  .then(res => {
    console.log(res);
    return res*3;
  })
  .then(res => {
    console.log(res);
    return res*4
  });
