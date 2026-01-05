// Constructor Function
// need of new keyword

function Players(name, jerseyNo, score) {
    return {
        name: name,
        jerseyNo: jerseyNo,
        score: score
    }
    // we can retun like that also with this keyword

}
const players1 = Players('Harman', 23, 171);
console.log(players1);
const players2 = Players('Smriti', 18, 100);
console.log(players2);


function newTeam(name, jerseyNo, score) {
    this.name = name;
    this.jerseyNo = jerseyNo;
    this.score = score;
    // return this

    this.getAllDetails=function()
    {
        console.log(`getting All Details ${this.name} ${this.jerseyNo}`);
        // return (`getting All Details ${this.name}`);
    }
}

const newPlayer1 = new newTeam('Vaishnavi', 2, 34);
console.log(newPlayer1);

const newPlayer2 =new  newTeam('Kamilini', 4, 54);
console.log(newPlayer2);
console.log(new newTeam());
console.log(newPlayer1.constructor)

console.log(newPlayer1 instanceof newTeam);
console.log(players1 instanceof newTeam);