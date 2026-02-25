const obj = {};
obj.a = 10;
obj['a'] = 20;
console.log(obj);

const user = {
  name: 'A',
  1: 'Active',
};

console.log(user[1]);
console.log(user['1']);

const user1 = { name: 'Sonali' };
const user2 = user1;

user2.email = 'test@gmail.com';

console.log(user1);

const obj1 = {};
obj1['1'] = 'one';
obj1[1] = 'ONE';

console.log(obj1);

const obj2 = {};
obj2[{}] = 'object';
obj2['[object Object]'] = 'string';

console.log(obj2);

let a = { x: 1 };
let b = { ...a };

b.x = 5;

console.log(a.x);
console.log(b.x);

const obj3 = { a: 1 };

delete obj3.a;

console.log(obj3.a);

const obj4 = { a: undefined };

console.log(obj4.a);
console.log(obj4.hasOwnProperty('a'));

const obj5 = {};
obj5[null] = 'x';

console.log(obj5);
const obj6 = { a: 1 };

delete obj6.a;

console.log(obj6.a);

const obj7 = {};
obj7['a'] = 1;
obj7['a'] = 2;
console.log(obj7);
