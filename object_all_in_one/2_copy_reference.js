let user1={
    name:"Rohit",
    age:20,
    email:"rogit@gmail.com"
}

let user2=user1;
console.log("before",user1);

user2.age=22;
console.log("after",user1);
console.log(user2);
// because obj are non-primitive type stored in heap memory
// in heap memory copy reference so it points to same reference