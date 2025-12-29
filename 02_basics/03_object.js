// normal object are not singleton
// object created from constructor are singleton

const mySym=Symbol('key1');
const myObj={
    name:'Smriti',
    "full Name":'Smriti Madhana',
    age:29,
    occupation:'Cricketer',
    location:'Sangali',
    isCaptain:false,
    lastMatchPaled:['WorldCup2025','IndvsSL'],
    [mySym]:"mykey1"
}
// console.log(myObj);
console.log(myObj.name);
console.log(myObj['name']);
console.log(myObj['full Name']);
console.log(myObj[mySym]);
console.log(myObj[mySym]);

myObj.occupation="Vice Captain of India";

console.log(myObj.occupation);
// Object.freeze(myObj);
// console.log(myObj);

myObj.greeting=function()
{
    console.log("Hello Captain");
}

console.log(myObj.greeting);//function reference not calling
console.log(myObj.greeting());

myObj.greetingTwo=function()
{
    console.log(`Hello Captain ${this["full Name"]}`);
}

console.log(myObj.greetingTwo());


