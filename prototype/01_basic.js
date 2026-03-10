const obj1 = {
    name: 'Aman',
    age: 20,
    greet: function () {
        console.log(`Hello,${this.name}`);
    }
}

console.log(obj1.hasOwnProperty('name'));
console.log(obj1.hasOwnProperty('names'));
console.log(obj1.__proto__);

let arr = [10, 20, 30];
console.log(arr.toString());
console.log(Array.prototype)
console.log(Object.prototype)
console.log(Function.prototype)
console.log(arr.__proto__.__proto__);