class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        return `${this.userName}`;
    }

   static createdId(){
            return `1234`;
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New Course added by ${this.userName}`)
    }
}

const principlle = new Teacher('Ratan', 'ratan22@gmail.com', 6543);
principlle.addCourse();
console.log(principlle.logMe());

const userOne = new User("Rashmika");
// console.log(userOne.addCourse())//can't access 
console.log(userOne.logMe());

console.log(principlle instanceof Teacher);
console.log(principlle instanceof User);
console.log(userOne instanceof Teacher);
console.log(userOne instanceof User);

// static property
console.log(principlle.createdId()); //can't access static propety of parent class



