// for of 

// ["","",""];
// [{},{},{}];

let myArr=['Harman','Smriti','Jemi','Sneh','Deepti','Renuka','Shafali'];

for (const element of myArr) {
    console.log(element)
    
}

let str="World Champions";
for (const element of str) {
    console.log(element);
    
}

let map=new Map();
map.set('In','India');
map.set('USA','United State');
map.set('SL',' Shrilanka');
map.set('In','India');

// set methos do not add duplicate element
console.log(map);

for (const [key,val] of map) {
    console.log(key ,":-", val)
    
}