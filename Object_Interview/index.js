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

let Object1= {name: "Bittu", age: 24};
let Object2= Object.create(Object1);
Object2.city="BLR";
console.log(Object1);
console.log(Object2); //name & age present in prototype

console.log("name" in Object2);
console.log("city" in Object1);

console.log(Object1.hasOwnProperty("name"));  
console.log(Object2.hasOwnProperty("name"));