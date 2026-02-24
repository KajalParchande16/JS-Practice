let user={
    name:"Rohit",
    age:20,
    email:"rogit@gmail.com",
    amount:3500
}

// const name=user.name;
// const age=user.age;

// console.log(name,age);
// we also modify it with destructure in short
const {name,age}=user;
 console.log(name,age);

 const{name:username,age:userage,role='User'}=user;
 console.log(username,userage,role);


 let userProfile={
    profile:{
        isAdmin:true
    }
 }
 const {profile:{isAdmin}}=userProfile;
 console.log(isAdmin);


 const arr=[10,20,30];
 const [first,,third]=arr;
 console.log(first,third);
