//  Q 1
(function(){
    var a1= b1= 5;

})();
console.log(b1);
// console.log(al);
// here b1=5; becomes global because no keyword defined for b1 so that will applicable outside the function also

// var a1=5 but var have function scope so it will not aloow to outside the function
// al=>undefined

// Q 2
function test(){
    return this.name;
}

var obj= {name: "Bittu"};
console.log(test());
console.log(test.call(obj));