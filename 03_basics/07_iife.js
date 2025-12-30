// Immediate Invoked Function Expression (IIFE)

// for immediately db connection
// for global variable not conflict with functions 
// for reduce global scope pollution

// function getUser()
// {
//     console.log("Harleen");
// }
// getUser();

// as we see implict & explict return using () in arrow function
const users=()=>('AmanJot');
console.log(users());

(function getUser() //named IIFE
{
    console.log("Harleen");
})();

// add ; after 1st IIFE
(()=>{ //unknow IIFE
    console.log("ShreeCharani")
})();

((name)=>{ //parameterise IIFE
    console.log(name)
})('Shaifali');