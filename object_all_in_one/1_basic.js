let obj={
    name:"Kajal",
    role:"Angular Developer",
    salary:60000,
    "home address":"pune"
}

console.log(obj);
console.log(obj.name);
console.log(obj['role']);
console.log(obj['home address'])


// behind the screen object stored as
// let obj={
//     "name":"Kajal",
//     "role":"Angular Developer"

// }
// thst's why we calling in string like this
// console.log(obj['role']);
console.log(typeof obj);
// CRUD=>
    obj.aadhar=5432345;
obj.salary=75000;
console.log(obj);

delete obj.aadhar;
console.log(obj);
