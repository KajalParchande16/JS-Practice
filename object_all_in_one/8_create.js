let user = {
  role: 'Admin',
  email:'user@gmail.com'
};
let user2 =user;
user2.name = 'Pratiksha';
user2.role="User";

// console.log(user);
// console.log(user.hasOwnProperty('name'));
// console.log(user2.hasOwnProperty('email'));
// console.log(user.hasOwnProperty('name'));
console.log('role' in user2);


// if we just normally assign object to another object  that object keys become it's own keys

let team={
    name:'India'
}
let teamA=Object.create(team);
teamA.name="India Team A";
teamA.players=11;
console.log(team);
console.log(team.hasOwnProperty('players'));
console.log(teamA.hasOwnProperty('name'));

console.log('players' in team);

console.log(Object.keys(team));
console.log(Object.keys(teamA));

// console.log(Object.prototype.hasOwnProperty.call(team, 'players'));
// console.log(Object.hasOwn(team,'players'));
// console.log(Object.hasOwn(teamA,'name'));
