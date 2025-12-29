let oldTeam=['Harman','Smriti','Deepti','Jemi'];
let newPlayers=['Aru','Vaishnavi','Sneh Rana'];
// oldTeam.push(newPlayers);
// console.log(oldTeam);

let newTeam=oldTeam.concat(newPlayers);
console.log(newTeam);

let newIndTeam=[...oldTeam,...newPlayers];
console.log(newIndTeam);

console.log(Array.isArray("Harman"));

// how to convert string to array using from method

console.log(Array.from('Harman'));

console.log(Array.from({name:'Smriti'})); //interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))

// array flat method

let newArr=[1,2,3,[4,5,6],7,[6,[4,5]]];
console.log(newArr);
console.log(newArr.flat(Infinity));

