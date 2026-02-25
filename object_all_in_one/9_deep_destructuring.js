let user={
    name:'Sneh',
    role:'all-rounder'
}
// const {name,role}=user;
// console.log(name,role);

let user1={name:undefined};
let {role1='Wk'}=user1;
console.log(user1); //role1 will not be key of user it's just variable aaded to user
// console.log(role1)
// means if property not available in object then it just 
// Default values in destructuring apply ONLY when the property value is undefined.
// it's like
// const age  = user.age  === undefined ? 20 : user.age;
// const role1 = user.role1 === undefined ? 'Admin' : user.role1;

const {name="Renuka"}=user1;
console.log(name);

const user3 = { age: undefined };

const { age = 20 } = user3;

console.log(age);
console.log(user3);

const user4 = { name: 'Sonali' };

const { name: userName } = user4;

console.log(userName);
console.log(user4);