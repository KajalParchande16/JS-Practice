console.log("Start..");
setTimeout(() => {
    console.log("SetTimeout Internal")
}, 2000);
fetch("https://jsonplaceholder.typicode.com/todos").then(()=>{
    console.log("API called")
})
Promise.resolve().then(()=>console.log("Promise resolved..."))
console.log("End");