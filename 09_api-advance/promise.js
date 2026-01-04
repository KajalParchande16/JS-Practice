const promiseTask=new Promise(function(resolve,reject){
// DB connection
setTimeout(() => {
    console.log("Async task is completed");
    resolve();
}, 1000);
});
promiseTask.then(function(){
    console.log("Promise is cosumed")
});

new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("Async Task 2");
        res();
    }, 2000);
}).then(()=>{
    console.log("Promise is comsumed by then")
})