// function callAPI()
// {
//     console.log("API call");
// }

let counter = 0;
function callAPI() {
    console.log("API call", counter++);
}

// const btnclick=document.querySelector('button');
// btnclick.addEventListener('click',()=>{
//     console.log("API call");

// })
let apiCall = false;
const throttle = (fu, timer) => {
    if (apiCall) return;
    apiCall = true;
    setTimeout(() => {
        fu();
        apiCall = false;

    }, timer);

}

const sendMsg=()=>{
    throttle(()=>{
        console.log("Kajal",counter++)
    },500)
}

function throttleFun(fn, delay) {
  let lastCall = 0;

  return function () {
    const now = new Date().getTime();
    console.log(now);

    if (now - lastCall >= delay) {
      lastCall = now;
      fn();
    }
  };
}

const newTest = throttleFun(() => {
  console.log("Harman", counter++);
}, 500);