function multiBy5(num) {
    return num * 5
}
multiBy5.power = 5;
console.log(multiBy5(4));
console.log(multiBy5.power);
console.log(multiBy5.prototype)//{}

// means multiBy5.prototype gives object so object can hold propeties & methods
// thats why we added like this.name & this.score are propeties of that prototype
// means function ki bhi koi property hogi so this.name & this.score are basically property of function
// function User(name,score)
// {
//     this.name=name;
//     this.score=score;
// }


// this means everthing in js if object function also

function CreateUser(name, score) {
    this.name = name;
    this.score = score;
}

CreateUser.prototype.makeScore = function () {
    // this means jisne bhi call kiya uska score ko point kro
    // like users1 hai to uska score increase kro user2 hai to uska score
    //    return  this.score++;
    this.score++;
    console.log(`${this.name} new score is ${this.score}`)
}

const user1 = new CreateUser('Smriti', 100);
const user2 = CreateUser('Harman', 170);
// console.log(user1.makeScore());
console.log(user2); //we can't access this without new keyword
// new keyword used to access function propties
user1.makeScore()
