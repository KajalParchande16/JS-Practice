let arr=[10,20,[30,40,[50,60,[70,80]]],90,100];

console.log(arr[2][2][2][1]);

console.log(arr.flat()); //it will flat at onlt 1 level
console.log(arr.flat(2));
// but what if you want flat whole array use infinity

console.log(arr.flat(Infinity));

let newArr=[10,20,30,40,50];
for (let i = 0; i < newArr.length; i++) {
    const element = newArr[i];
    console.log(element);
}
