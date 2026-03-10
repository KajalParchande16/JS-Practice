const obj1 = {
    name: 'Aman',
    age: 20,
    greet: function () {
        console.log(`Hello,${this.name}`);
    }
};
const obj2 = {
    name: 'Harman',
    age: 20,
    greet: function () {
        console.log(`Hello,${this.name}`);
    }
}
const obj3 = {
    name: 'Jemi',
    age: 20,
    greet: function () {
        console.log(`Hello,${this.name}`);
    }
}

console.log(obj1.name);
// but here greet is common function but still repeated
// so we can remove repeated code for object using class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

// class is bluprint of object how it will look 
// constructor used to initialize values

const person1 = new Person('Amruta', 23);
const person2 = new Person('Vibha', 22);

person1.sayHi();
console.log(person1);
console.log(obj1);