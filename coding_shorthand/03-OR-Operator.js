let a = 10;
let b = 20;
console.log(a || b);

let a1 = false;
let b1 = 'Kajal';
console.log(a1 || b1);

console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);

// || alway return truty value

console.log(10 || 20);   // 10
console.log(0 || 20);    // 20
console.log(null || 5);  // 5
console.log("Hi" || 0);  // "Hi"

// Real use case
// let userName = inputName || "Guest";
// // console.log(userName);
console.log(0 || "" || null || "Hello");

