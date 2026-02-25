let userName="Amruta";
let user1=userName;

user1="Varsha";
console.log(userName);
console.log(user1);

// Primitive->Stack->they alwayd store copy of other variable so that will not change
// Non-primitive->they always store reference of other variable so it will change

let teamdata={
    name:'Indian Team',
    Players:11
}

let newTeam=teamdata;
newTeam.name="Indian Team A"
console.log(teamdata);
console.log(newTeam);

let user={
    name:'Pratiksha',
    role:'user'
}
// deep copy
let user2=JSON.parse(JSON.stringify(user));
user2.name="Mrunal";
console.log(user2);
console.log(user);

const user3 = {
  name: 'A',
  address: { city: 'Pune' },
};

const copy = { ...user3 };

copy.address.city = 'Mumbai';

console.log(user3.address.city); 


const user4 = {
  name: 'A',
  skills: ['JS', 'Angular'],
};

const copy1 = { ...user4 };
copy1.skills.push('Node');

console.log(user4.skills);