// Function Expression
console.log(addOne(5));

function addOne(num)
{
    return num+1;
}
// console.log(addOne(5));

// console.log(addTwo(6)); //we can't access function stored in const variable before declaration of function


//Function Expression=> function stored in variable
const addTwo = function (num) {
    return num+1 
}
console.log(addTwo(6));