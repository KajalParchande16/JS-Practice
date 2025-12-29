function sayHi() //function decelartion
{
    console.log("H");
    console.log("r");
    console.log("M");
    console.log("a");
    console.log("n");

}
sayHi;//function reference
sayHi();//function call

function addTwoNum(num1,num2)//parameters
{
    console.log(num1 + num2);
    console.log(arguments)
}
addTwoNum(2,3);//arguments

function loggedInUser(userName)
{
    if(!!userName)
    {

        return (`${userName} just logged in`);
    }
    
    return ("Please Enter UserName");
}

console.log(loggedInUser('Smriti'));

// ""=>false
// undefined =>false

function calculateCarPrice(val1,val2,...num)
{
    return num;

}
console.log(calculateCarPrice(100,200,300,400,500));


// function with object

let user={
    name:'Deepti',
    wickets:150

}

function getPlayerofMatch(bestPlayer)
{
    return `${bestPlayer.name}`
}

console.log(getPlayerofMatch(user));
console.log(getPlayerofMatch({
    name:'HarmanPreet Kaur',
    occupation:' Captain'
}))

let numbers=[10,20,30];

function getNumbers(nums)
{
    return nums[1]
}

console.log(getNumbers(numbers))