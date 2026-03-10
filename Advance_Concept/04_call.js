// 'use strict';
function greet() {
    console.log(this.name);
    // without strict mode it point to global object but in name is not defined
    // with strict it will give error
    // as we know use strict mode give undefine =>undefine.name=>error
}

greet();

function sayHi() {
    console.log(this.name);
}

const user1 = {
    name: 'Rohit',
    age: 22
}

const user2 = {
    name: 'Mohit',
    age: 24
}

// how to pass same function to both object

// user1.sayHi(); //not possible

sayHi.call(user1);
sayHi.call(user2);

function incrementAge(val, name) {
    this.age += val;
    this.name = name;
    console.log(this.age, this.name);
}

incrementAge.call(user1, 3, "Gunjan");

incrementAge.apply(user2, [2, 'Rachana']);

const inc = incrementAge.bind(user2, 5, 'Supriya');
console.log("bind", inc);//this will not print directly it will just bound the function
inc();