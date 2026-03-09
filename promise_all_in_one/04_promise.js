const p1=new Promise((resolve,reject)=>{
    // resolve("Hello");
    // reject("Hello");
    resolve({
        name:'Team India',
        players:11
    })
});
console.log(p1); //only resolve promise will give output not for reject
// for rejected promise we need to handle with catch

p1.then((res)=>{
    console.log("Promise Resolved",res);
}).catch((error)=>{
    console.log("Promise Rejected",error);

})