let user={
    firstName:"Renuka",
    role:'blower'
}

let user2=Object.create(user);
user2.firstName="Sneh";
console.log("user2",user2);
console.log("user",user);
