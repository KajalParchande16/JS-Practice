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