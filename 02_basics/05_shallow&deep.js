let originalObj={
    name:'Smriti',
    address:{
        city:'Snagali'
    }

}
let newObj=Object.assign({},originalObj);
console.log(newObj);
let shallowCopy={...originalObj};
console.log(shallowCopy);

let deepCopy=JSON.parse(JSON.stringify(originalObj))
originalObj.address.city="Mumbail";
console.log(originalObj);
console.log("shallowCopy",shallowCopy);
console.log("deepCopy",deepCopy);

let myArr=[1,2,[3,4]];
let newArr=myArr.slice();
let deepArray=JSON.parse(JSON.stringify(myArr));
myArr[2][0]=99;
console.log(myArr);
// console.log(newArr);

console.log("deepArray",deepArray)



