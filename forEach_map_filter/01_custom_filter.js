let arr = [10, 24, 76, 33, 23, 60, 22, 26];

arr.filter((num) => num > 25);
console.log(arr);
// but how to creat custom filter method

arr.customFilter = function (callback) {
    const newArr = [];
    for (const num of arr) {
        if (callback(num)) {
            newArr.push(num)
        }
    }
    return newArr;
};

var newCallBack = function (num) {
    return num > 25
}
console.log("custom Filter", arr.customFilter(newCallBack));
console.log("custom Filter with normal calback", arr.customFilter((num) => num > 25));

