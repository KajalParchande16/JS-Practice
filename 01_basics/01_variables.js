let name='Kajal';
const accountNumber=12345;
var city='Pune';
stateName='Maharashtra';
let accountState;

// accountNumber=567890; not allowed
// we can't redeclar or deassign const variable
/*
prefer not to use var due to block scope & functional scope
*/
console.log(accountNumber);
console.table([name,accountNumber,accountState,city,stateName]);

if(true)
{
    var a=20;
}
console.log(a);

for (var i = 0; i < 5; i++) {
    
}
console.log(i);
let j = 1;
while (j <= 3) {
  var x = j * 2;
  console.log(x);
  j++;
}
console.log(x);
let b=10;
let c=b;
b=20;
console.log(b,c);