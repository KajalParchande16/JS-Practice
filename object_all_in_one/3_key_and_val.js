let user={
    name:"Rohit",
    age:20,
    email:"rogit@gmail.com",
    amount:3500
}

// get object keys
console.log(Object.keys(user));
console.log(Object.values(user));

// getting both 
console.log(Object.entries(user));

for (const keys in user) {
    console.log(keys);
    console.log(user[keys]);
    // console.log(user[keys]);
    
}