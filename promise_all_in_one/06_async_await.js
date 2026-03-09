// fetch("https://api.github.com/users")
// .then((res)=>(res.json())
// .then((data)=>console.log(data)));

// same code can be written like this
// const api=fetch("https://api.github.com/users");
// const res=api.json();
// console.log(res);

// but it can't direclty execute 
// so need to use await

// const api=await fetch("https://api.github.com/users");
// const res=await api.json();
// console.log(res);
// but what if we have another function/console to exexcute
// console.log("Lets start next function");
// so this console wait until above code is exexcute 
// this is also wrong 

// so that's why we use async

async function gitHub() {
    console.log("hello coder");
    const api = await fetch("https://api.github.com/users");
    const res = await api.json();
    console.log(res);
}

gitHub();
console.log("Lets start next function");