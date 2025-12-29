let myArr= new Array(1,2,3,4,5);
console.log(myArr);
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(10);
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(6));
console.log(myArr.indexOf(6));
console.log(myArr.indexOf(4));

// slice & splice
console.log("A=>",myArr);
console.log(myArr.slice(1,3));
console.log("After Slice ",myArr);

let arrJoin=myArr.join();
console.log("Join",arrJoin);
console.log(typeof arrJoin);
// slice method does not change original array

console.log("B=>",myArr);
console.log(myArr.splice(1,3));
console.log("After Splice ",myArr);

// splice method mutate original array










