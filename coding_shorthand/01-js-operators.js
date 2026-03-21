// 1. Ternary Operator
let a = 10;
let b = 5;
console.log(a > b ? 'a is greater' : 'b is greater');

// 2.Object Destructuring
let user = {
    name: "Sanket",
    age: 20,
    profile: {
        isAdmin: true
    }
}
const { name, age: userAge, role = 'User' } = user;
console.log(name, userAge, role);
console.log(user);

const { profile: { isAdmin } } = user;
console.log(isAdmin);

// 3 Array Destructuring
let data = [10, 20, 30, 40, 50];
const [first, , third] = data;
console.log(first, third);

// 4.Optional Chaining
let user1 = {
    age: 20,
    profile: {
        // name: "Sanket",
        isAdmin: true
    }
}
const userName = user1?.profile?.name;
console.log(userName);
// console.log(userName ?? 'Name is not available');

// 5. Nullish coalescing operator ( ?? )
const myName2 = user?.profile?.name ?? 'Name is not available'
console.log(myName2);
