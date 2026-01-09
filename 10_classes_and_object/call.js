function setUserName(username) {
    console.log("called")
    this.username = username;
}

function createUser(username, email, password) {
    // setUserName(username); username not set to this.username of function because we just passing reference not actual value
    // so passing value need to set using call
    // setUserName.call(username); //still not set username because username does not set to this.username
    setUserName.call(this, username);
    // call used to passing reference of current context
    this.email = email;
    this.password = password;
}

const userOne = new createUser('Rhushika', 'rushika123@yopmail.com', 123);
console.log(userOne);