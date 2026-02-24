let user={
    name:"Rohit",
    age:20,
    email:"rogit@gmail.com",
    amount:3500,
    address:{
        city:"Sangali",
        state:"Maharashtra"
    }
}
console.log(user.address.city);

// let user2=user;
// as we know user2 copy reference of user
// but we want diff copy for user2 & user
// user spread ... operator

// let user2={...user}; //shallow copy
// user2.name="Mohit";
// console.log(user2);
// console.log(user);
// user2.address.city="Pune";
// console.log(user2);
// console.log(user);
// but ... spread can't handle nested object reference 
// so remove this user structuredClone deep copy


let user2=structuredClone(user);
user2.address.city="Pune";
console.log(user2);
console.log(user);

let team={
    1:'Smriti',
    2:'Pratika',
    3:'Shaifali',
    4:'HarmanPreet'
}
console.log(team[1]);
console.log(team['2']);