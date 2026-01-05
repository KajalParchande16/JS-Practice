let myTeam = ['Smriti', 'Jemi', 'Deepti'];
const user = {
    name: 'Harman',
    score: 171,

    getAllDetails: function () {
        console.log(`Indian Womens Cricket Team Captain is ${this.name}`)
    }
}
Object.prototype.capatain = function () {
    console.log("Harman is present in all objects");
}


Array.prototype.heyCaptain = function () {
    console.log("Hello this is captain of Indian cricket team")
}
// console.log(user.getAllDetails());

user.capatain();
myTeam.capatain();
// console.log("In Object",user.capatain());
// console.log("In Array",myTeam.capatain());
myTeam.heyCaptain();
// user.heyCaptain();//bcoz only array have heycaptain prototye


// inheritance
const User = {
    name: 'Shaifali',
    email: 'Shaifali234@yopmail.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSuppot = {
    isAvailable: true

}

const TASupport = {
    makingAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSuppot
    // TASupport can accessing property of TeachingSupport

}

Teacher.__proto__ = User;
console.log(Teacher.name);
console.log(TASupport.isAvailable);

// mordern way to prototy inheritance

Object.setPrototypeOf(TeachingSuppot,User);
console.log(TeachingSuppot.email)
