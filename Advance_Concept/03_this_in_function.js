const user = {
    name: "Rohit",
    age: 20,
    greet: function () {
        console.log(`hi ${user.name}`);
        // if we pass user.name (hard code value) 
        // if we pass this function to another object it will take same value 
    }
}

// this ==user;
// this refer to user object

user.greet();
const user2 = {
    name: "Mogit",
    age: 24
}

user.greet=user.greet;
console.log(user.greet());