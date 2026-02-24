let user={
    name:"Rohit",
    age:20,
    email:"rogit@gmail.com",
    amount:3500
}

// we can't apply direct for of loop on object
for (const element of Object.keys(user)) {
    console.log(element);
}

for (const element of Object.values(user)) {
    console.log(element)
}
for (const element of Object.entries(user)) {
    console.log(element)
    
}
// as we seen we can destructure array also here with entries we got an array for both keys & values
// so we can destructure array

const arr=[10,20,30];
 const [first,second]=arr;
 console.log(first,second);
//  [ 'name', 'Rohit' ]
// [ 'age', 20 ]
// [ 'email', 'rogit@gmail.com' ]
// [ 'amount', 3500 ]
for (const [keys,values] of Object.entries(user)) {
    console.log(keys,values)
    
}