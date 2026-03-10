 const user= {
name:"Rohit",
age:20,
greet:function()
{
    console.log(`hi ${this.name}`);
}
}

// this ==user;
// this refer to user object

user.greet();