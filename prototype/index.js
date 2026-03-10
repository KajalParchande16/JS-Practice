const obj={
    name:'smriti',
    jercyNo:10
};
console.log(obj.toString());
console.log(obj);

const obj2={
team:"India"
};
// obj2 try to access name property from obj

console.log(obj2.name); //it will give undefined
obj2.__proto__=obj;
console.log(obj2.name);//with the help of proto type obj2  access property of ojb


