let num=7121;
console.log(num);
let num1=new Number(3428);
console.log(num1);
console.log(typeof num1);

// num to string
let numToStr=num1.toString();
console.log(typeof numToStr);
console.log(numToStr.length);

console.log(num1.toFixed(2));

let num2=new Number(1606.8567);
console.log(num2.toPrecision(4));
console.log(num2.toLocaleString())
console.log(num2.toLocaleString('en-In'))

let num3=100000;
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-In'));


// *********************** Maths *************************

console.log(Math);

console.log(Math.abs(-6)) //it convert -ve value to positive
console.log(Math.round(4.6));
console.log(Math.ceil(6.1));// it take highest value 
console.log(Math.floor(6.1));// it take lowest value 

console.log(Math.min(6,2,5,8,9));
console.log(Math.max(6,2,5,8,9));


console.log(Math.random()*10)
console.log(Math.floor((Math.random()*10)+1));

// dice game 
let max=6;
let min=1;

console.log(Math.floor(Math.random()*(max-min+1)+min));

