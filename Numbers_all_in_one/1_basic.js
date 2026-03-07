let a=15;
let b=184.2856;
console.log(a.toString());
console.log(typeof a.toString());
console.log(b.toFixed(2));
console.log(b.toFixed(3)); //it does not change original numbers
console.log(b);
console.log(typeof b.toFixed(3));

console.log(b.toPrecision(4));
console.log(b.toPrecision(5));
console.log(b.toPrecision(9));//it will take original no & added 00 of extra precision

console.log(b.toLocaleString());
// console.log(b.toExponential())


let c=new Number(20);
let d=new Number(20);
console.log(c===d);
// what ever we created with new it will treated as object
// so object always copy reference not value
let e=c;
// here e refer to c so it will refer same reference
console.log(e===c);//we direcly pointing same values

let obj1={
    name:"Kajal"
}

let obj2={
    name:"Kajal"
}

console.log(obj1===obj2);//both obje have diff reference
let obj3=obj1;
console.log(obj3===obj1);//both object have same reference

console.log("Number Conversions")
console.log(Boolean(0));
console.log(Boolean(10));
console.log("Number Conversions check for new");
console.log(Boolean(new Number(0)));

console.log(Boolean({}));
console.log(Boolean([]))

console.log({}=={});
console.log(![]==[]);
