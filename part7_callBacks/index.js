function func1(name, callBackFn) {
  console.log(name);
  callBackFn();
}

function callBackFn() {
  console.log('india');
}

func1('kaif',callBackFn);
