let scrore = "100abc";

console.log(typeof scrore);
console.log(typeof (scrore));


// 1 convert string to Number
let valueInNumber = Number(scrore);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isActive = true;
console.log(typeof (isActive));
console.log(Number(isActive));

let value = null;
console.log(Number(value));
console.log(value);

// "100"=>100
// "100abc"=>NaN
// true=>1,
// false=>0

// number to bollean
let isLoggedIn = 1;

let isBooleanLoggedIn = Boolean(isLoggedIn);
console.log(isBooleanLoggedIn);

// 1=>true, 0=>false
// "" =>false
// "test" =>true

// number to string

let someVal = 33;
let strToNum = String(someVal);
console.log(typeof strToNum);


// *****************_Operators_***********************

let val = 3;
console.log(-val);

// console.log(2+3);
// console.log(2-3);
// console.log(2/3);
// console.log(2*3);
// console.log(2**3);
// console.log(2%3);

let str = "Js";
let str2 = " Angular";

console.log(str + str2);

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);


console.log(+true)
console.log(+"");

let Counter=100;
Counter++;
console.log(Counter);

// study for prefix & postfix
