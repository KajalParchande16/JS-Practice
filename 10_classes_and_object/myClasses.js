class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abcd`;
    }

    capitalizename() {
        return `${this.userName.toUpperCase()}`
    }
}

const userOne = new User('pratika', 'pratika22@gmail.com', 334455);
console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.capitalizename());



// same implemented with function also

function myUser(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

// add method on function using prototype
myUser.prototype.encryptPassword = function () {
    return `${this.password}pqrs`;
}

myUser.prototype.capitalizename = function () {
    return `${this.userName.toUpperCase()}`;
}

const userTwo = new myUser('shaifali', 'shaifu43@gmail.com', 1718);
console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.capitalizename());