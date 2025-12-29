// let newObj=new Object() singleton object

const myObj={};
myObj.id="123abc";
myObj.name="Jemi";

console.log(myObj);

let Users={
    id:1,
    email:'jemi05@gmail.com',
    fullName:{
        userName:{
            name:'Jemi',
            No:5
        }
    }
}

console.log(Users?.fullName?.userName?.name);

// ?. optinal chaning used to remove error if key not present in object
console.log(Users?.fullName?.userName?.email);//email not available

let obj1={1:'a',2:'b'};
let obj2={3:'c',4:'d'};

// combine two object 
let obj3=Object.assign({},obj1,obj2);
console.log(obj3);

let obj4={...obj1,...obj2}
console.log(obj4);


const users=[
    {
        id:1,
        email:'user1@gmail.com'
    },
     {
        id:2,
        email:'user1@gmail.com'
    }, {
        id:3,
        email:'user1@gmail.com'
    }, {
        id:4,
        email:'user1@gmail.com'
    },
]

console.log(users[1].email);

console.log(Object.keys(Users));
console.log(Object.values(Users));
console.log(Object.entries(Users));

console.log(Object.hasOwnProperty('emails'));

// object destructuring

const Course={
    courseName:'Angular',
    price:3499,
    duration:'3 Months'
};

// console.log(Course.courseName);
// console.log(Course.price);
// console.log(Course.duration);

// instead of this we can create destructure object
const {courseName:name,price,duration}=Course;
console.log(name,price,duration);


// const navbar=({course})=>{

// };
// navbar(course='Angular');