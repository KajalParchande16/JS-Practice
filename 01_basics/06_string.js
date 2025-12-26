let Player='HarmanPreet Kaur';
let score=187;

console.log(`my fav palayer is ${Player} & her highest scrore is ${score}`);

let str=new String('Smriti');
console.log(str);
console.log(str[0]);
console.log(str.__proto__);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.charAt(2));
console.log(str.indexOf('m'));

console.log(str.substring(0,4));
console.log(str.slice(-5,4));

let newStr="   Jemi   ";
console.log(newStr.trim());

let url="https://indianWomensTeam.com%20icc";
let newUrl=url.replace('%20','-');
console.log(newUrl);
console.log(newUrl.includes('Womens'))

let team="ICC-Womens-Team";

console.log(team.split('-'));
// split used to convert string to array
