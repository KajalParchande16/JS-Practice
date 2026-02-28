const addNum=(a,b)=>{
    return a+b;
}
console.log(addNum(10,20));

const addNum1=(a,b)=>a+b;
console.log(addNum1(40,50));

const greeting=()=>{
    let user={
        name:'Kajal',
        role:'Admin'
    }
    return user;
}
console.log(greeting());

const greeting1=()=>{
     return {
        name:'Namita',
        role:'User'
    }
}
console.log(greeting1());

// if we have return statement but don;t want to add return then use ()
const greeting2=()=>( { name:'Rani', role:'Student' })

console.log(greeting2());


// if we have only 1 parameter then don;t need to use ()
const squareNum=n=>n*n;
console.log(squareNum(6));
