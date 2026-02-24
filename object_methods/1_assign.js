let user={
    firstName:"Renuka",
    role:'blower'
}
let user2={
    firstName:"Sneh",
    role:'blower',
    runs:1568
};
console.log("before user",user)

Object.assign(user,user2);
console.log("ater user",user)
// console.log(user2);
