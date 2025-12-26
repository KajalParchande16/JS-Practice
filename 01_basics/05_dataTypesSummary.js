// based on how data store & retrive from memory we have dif dataType like 
// Primitive & Non-Primitive

// Primitive=>call by value
// Call by Values means=>jab bhi aap isko kahise kahi copy krte hai to inka jo reference hota hai memory ka wo nahi diya jata to copy krke diya jata hai
// or isme jo bhi hum changes krte hai to copy me change hota hai



// 7 types string,boolean,number,null,undefined,symbol,bigInt

let score=189;
let scroreDec=200.3;
let team="India";
let oppositeTeam=null;

let id=Symbol('123');
let anotherId=Symbol('123');
console.log(id ===anotherId);

let bigNumber=123456789n;


// Non-Premitive (Reference Type)

// Array,Object,Function

let players=['Harman','Smriti','Shaifali','Deepti','Jemi'];

const captain={
    name:'HarmanPreet',
    jercyNo:23
}

let myFun=function(){
    console.log("Lets Start")
}
console.log(typeof id)

console.log(typeof players)

console.log(typeof myFun);

// js is dynamically typedclanguage
// variable type are determined at runtime & not need to declare before using it
// in c we have to declare like this string name="Js";


// ++++++++++++++++++++++++++++++  Memory  +++++++++++++++

// Stack(Primitive) ,Heap(Non-Primitive)

let playIn11="IndianTeam";
let reversedTeam=playIn11;
reversedTeam="NewTeam";
console.log(playIn11);
console.log(reversedTeam);

// means primitive datatype stored copied data not actual data

let bestPlayers={
    name:'Jemi',
    jercyNo:5
}

let newPlayers=bestPlayers;

newPlayers.name="Shaifali";
console.log(bestPlayers)
console.log(newPlayers)