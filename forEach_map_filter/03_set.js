let arr=[10,15,20,10,25,30,15,20];
let arr1=new Set(arr);
console.log(arr1);
arr1.add(40);
console.log(arr1);
arr1.delete(30);
console.log(arr1);
arr1.clear();
console.log(arr1);


let users=["Kajal","Admin","Saniya","Admin","Riya","Kajal"];
let s1=new Set(users); //but set give us data as object format
console.log(s1);
for (const element of s1) {
    console.log("element",element);
    
}

// but we need it in array format
let s2=[...new Set(users)];
console.log(s2);
for (const key in s2) {
    console.log("keys",s2[key])
    
}
for (const element of s2) {
    console.log("s2",element);
    
}
let s3=new Map([
    [ "Kajal",18],
    [2,"Sneh"],
    [true,23],
    [10,20,30,"Harman"]
]);
console.log(s3);