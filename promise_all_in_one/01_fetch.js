console.log("Start")
const p1 = fetch("https://jsonplaceholder.typicode.com/users");

const p2 = p1.then((res) => {
    // console.log(res.json());
    return res.json();
});
// it will give 
// Start
// end
// Promise { <pending> }
// but we want actualr result

p2.then((res) => {
    console.log(res)
})
console.log("end")
