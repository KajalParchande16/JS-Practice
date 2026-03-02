let arr=[10,20,30];
arr=[40,50,60];
console.log("before",arr);

const arr1=[1,2,3,4,5];
// arr1=[11,12,13,14]; //not possible
console.log(arr1);

let arr2=arr;
arr2.push(100);//non-primitive(object) are mutable 
console.log("after",arr);

arr.pop();
console.log(arr);
arr.unshift(12);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.slice(1,2));
console.log(arr);

let newArr=[1,2,3,4,5,6,7,8];
newArr.splice(0,3,"Kajal");
console.log(newArr);


