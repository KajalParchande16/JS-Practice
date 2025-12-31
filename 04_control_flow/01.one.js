let balance = 1000;
if (balance < 500) {
    console.log("less than")
}
else if (balance < 750) {
    console.log('less than 750')
}
else if (balance < 900) {
    console.log('less than 900')
}
else {
    console.log('less than 1200')

}

let userLoggedIn = true;
let debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard && 2 == 2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}


// Nullish Coalescing Operator (??) :null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 20;
val1 = null ?? 10 ?? 50;


console.log(val1);

// Terniery Operator

// condition ? true:false;

const coursePrice=2000;

coursePrice >=1000 ?console.log('Price is greater than 1000') :console.log("Less Price");

