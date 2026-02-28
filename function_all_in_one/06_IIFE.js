// ()()
(function getName(){
    console.log("Kajal");
})();

(function addNum(a,b){
    console.log(a+b)
})(10,20);

// IIEF with arrow function

(()=>console.log("Arrow Function..."))();

console.log((num=>num*num)(6));