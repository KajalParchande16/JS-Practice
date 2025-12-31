// const userEmail="user123@gmail.com";
// const userEmail="";
const userEmail=[];


if(userEmail)
{
    console.log("Email is available");
}
else{
    console.log("Don't have user email");

}

// falsy values

// false, 0 , -0, bigInt 0n, "" , null , undefined ,Nan

// truthy values

// "0", 'false', " " ,[], {}, function(){} ,

if(userEmail.length===0)
{
    console.log("Array is empty")
}

const myObj={};

if(Object.keys(myObj).length===0)
{
    console.log("Object is empty")
}

// false ==0 =>true;
// false==""=>true;
// false==''=>true;