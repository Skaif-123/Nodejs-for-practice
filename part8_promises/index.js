// function dealyFn(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// }

// console.log("Using Promises");
// dealyFn(2000).then(() => {
//   console.log("this is delayFn working after 2sceonds");
// });
// console.log("end");

// -------------------------------------------------------------------------------------------
function divdeFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("eroor erooer!!!!");
    } else {
      setTimeout(()=>{resolve(num1 / num2)},5000);
    }
  });
}

divdeFn(10, 5)
  .then((result) => {
    console.log("answer is ", result);
  })
  .catch((error) => {
    console.log(error);
  });
