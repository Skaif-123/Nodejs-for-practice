// async function division(num1,num2){
//     try {
//         if(num2==0) throw new Error("Cannot Divide by Zero");
//         return num1/num2;
//     } catch (error) {
//         console.log("error is ",error);
//         return null;
//     }
// }

// async function mainFn(){
//       console.log(await division(10,2));
//       console.log(await division(10,0));
    
// }

// mainFn();



function delayFn(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    })
};


async function displayName(name){
    await delayFn(5000).then(()=>{
        console.log("Appun chalo hai na biddu\n appun ka naam hai ",name);
    })
}

displayName("Kaif");