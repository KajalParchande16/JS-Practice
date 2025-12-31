let myObj={
    js:'javascript',
    py:"python",
    rb:"rubby"
}

for (const key in myObj) {
    
    const element = myObj[key];
    console.log(key, ":", element)
    
    
}

let myArr=['Harman','Smriti','Jemi','Sneh','Deepti','Renuka','Shafali'];

for (const element in myArr) {
    // console.log(element);//it will give keys mean index of array
    console.log(myArr[element])
    // 
}

let map=new Map();
map.set('In','India');
map.set('USA','United State');
map.set('SL',' Shrilanka');
map.set('In','India');

for (const key in map) {
    
    const element = map[key];
    console.log(element);

    // it will not work bcoz Map is non-irritable
    
}
