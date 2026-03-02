let arr=["Sonal","Arpita","Divya","Charu","Kajal","Praju","Radha"];
console.log(arr.sort());
console.log(arr.reverse());
let arr2=[100,23,56,38,66,30,18,22,116,94,45];
console.log(arr2.sort());//this will not work properly
// because it check like this "100" ,"23"=>1st element 100=>"1" is smaller tahen "2"

console.log(arr2.sort((a,b)=>a-b)); //assending order
// let a=100;
// let b=23;
// 100-23=>77 +ve the it will return 2nd element 23
// 23-56=>-33 -ve no so it will return 1st element 23

console.log(arr2.sort((a,b)=>b-a)); //decending order

let newArr=[10,'Kajal',true,"Priya","Uma",44];
console.log(newArr.sort());
// console.log(newArr.sort((a,b)=>a-b));