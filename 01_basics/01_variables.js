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