function one()
{
    let email="renukasingh@gmail.com";
    console.log(this.email);//can't access variable like this
    console.log(this);
}
// one();

const two=function ()
{
    console.log(this);
}
// two();

const three=()=>{
console.log(this);
}

three();

// const users={
//     getUsers:function (){
//     console.log(this)
//     }
// }
// users.getUsers();

// explictly =>added return  keyword 
const addTwo=(num1,num2)=>{
    return num1+num2;
};
console.log(addTwo(2,3));


// implict =>maens asume not need to add { }
const addNum=(num1,num2)=> num1+num2;
console.log(addNum(4,8));

// if add {} the you should need to add return keyword
// if you don't wnat to  add return keyword then use ()

const additionOfNumbers=(num1,num2)=>(num1+num2);
console.log(additionOfNumbers(5,10));

const addNums=(num1,num2)=>({username:'Richa'});
console.log(addNums(3,4));

