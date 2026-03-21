let isAdmin = true;
let name = "Kajal";
let num = 20;

console.log(isAdmin && name);

// 1. if 1st val->is true =>print 2nd value;
// 2.if 1st val is false =>return 1st val;

let a = "";
let b = 20;
console.log(a && b);

let c = false;
let d = "Tina";
console.log(c && d);

// falsy values
// 0 , "",false,null,undefined,NaN

let e = [];
let f = 10;
console.log(e && f);

let a1 = 0;
let b1 = 20;
console.log(a1 && b1);

let a2;
let b2 = 22;
console.log(a2 && b2);

let username = "admin";
let password = "secret";
let loginSuccess = username === "admin" && password === "secret";
console.log("check", username && password);
console.log(loginSuccess);

let val1 = true;
let name1 = "Rani";
console.log(val1 && name1);

console.log(0 && 5);
console.log(10 && 50);

console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);

let a3 = (name1 * 10);
let b3 = 0;
console.log(a3 && b3);


