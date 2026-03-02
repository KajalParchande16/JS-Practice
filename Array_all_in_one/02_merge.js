let arr=[10,20,30,40];
let arr2=[1,2,3,4];

// arr.push(arr2);
console.log(arr); // [ 10, 20, 30, 40, [ 1, 2, 3, 4 ] ];
let arr3=arr.concat(arr2);
console.log(arr3); //[ 10, 20, 30, 40, 1,  2,  3,  4]
// console.log(arr);
let arr4=[arr,arr2];
console.log("modify arr",arr4);

let arr6=[...arr,...arr2];
console.log("Spread Operator",arr6);
const arr5 = [1, 2];
const result = arr5.concat(3);

console.log(result); // ?

const result2 = [...arr5, 3];
console.log(result2);

const user = { name: 'Sonali' };
const updated = Object.assign({}, user, { age: 21 });

console.log(updated);