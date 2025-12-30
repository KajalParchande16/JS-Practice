function one() {
    let captainName = "HarmanPreet"

    function two() {
        let viceCaptain = "Smriti";
        console.log(captainName);
    }
    // console.log(viceCaptain);
    two();
}
one();

// this is aslo kind of clouser 
// means inner function can access outer function variable
// but outer function can't access inner function variable


if (true) {
    let userName = "Jemi";
    if (userName == 'Jemi') {
        let highestScore = 127;
        console.log(`highestScore of ${userName} is ${highestScore}`)
    }
    // console.log(highestScore);
}
// console.log(userName);
// *************************** Interesting ***********************

// Function Expression
console.log(addOne(5));

function addOne(num)
{
    return num+1;
}
// console.log(addOne(5));

console.log(addTwo(6)); //we can't access function stored in const variable before declaration of function

// function expression =>function stored in variable
const addTwo = function (num) {
    return num+1
}
// console.log(addTwo(6));