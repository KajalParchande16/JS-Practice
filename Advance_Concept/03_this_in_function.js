'use strict';
const user = {
    name: "Rohit",
    age: 20,
    greet: function () {
        console.log(`hi ${this.name}`);
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

user2.greet=user.greet;
user2.greet();

function sayHi()
{
    console.log(this);//without use scrict this will point global object
}
sayHi();
// but with use strict it will give undefined