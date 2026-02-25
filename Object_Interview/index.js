
// Q.1
var fullName= "Bittu";
var obj= {
    fullName: "Rahul",
    prop: {
        fullName: "Suraj",
        getFullName: function(){
            return this.fullName;
        }
    }
};

console.log(obj.prop.getFullName());  

const getName= obj.prop.getFullName();
console.log(getName)   

// Q 2
let Object1= {name: "Bittu", age: 24};
let Object2= Object.create(Object1);
Object2.city="BLR";
console.log(Object1);
console.log(Object2); //name & age present in prototype

console.log("name" in Object2);
console.log("city" in Object1);

console.log(Object1.hasOwnProperty("name"));  
console.log(Object2.hasOwnProperty("name"));

// Q 3
const a= {};
const b= {key: "b"};
const c= {key: "c"};
a[b]= 123;
a[c]= 456;
a[1]=890;
a[2]=567;
console.log(a[b]);//456
console.log(a[1]);
console.log(a[2]);


// // Object keys are automatically converted into strings
console.log(a.toString()); 
// means every plain object .toSytring() converted into [object Object]
// so a[b] becoms a["[object Object]"] = 123;
// and a[c] becoms a["[object Object]"] = 456;
// so whole a become like this
// a = {
//   "[object Object]": 456,
//   "1": 890,
//   "2": 567
// }
// thats why for a[b] getiing 456