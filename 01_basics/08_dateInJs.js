let date=new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());


let newDate=new Date("2022-1-15");
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());

let myCreatedDate=new Date("01-14-2023");
console.log(myCreatedDate);

// ********** Timestamp **********************

let myTimestamp=Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());

let currentDate=new Date();
console.log(currentDate);
console.log(currentDate.getDay());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getTime());

console.log(currentDate.toLocaleString('default',{
         weekday:"long"
}))




