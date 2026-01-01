const myNums=[1,2,3];

const myTotal=myNums.reduce(function(acc,curr){
    console.log(`acc: ${acc} and curr :${curr}`);
    return acc+curr;
},0);
console.log(myTotal);

let shoppingCard=[
    {
        course:'Js',
        price:299
    },
    {
        course:'react',
        price:699
    },
    {
        course:'python',
        price:399
    },
    {
        course:'angular',
        price:599
    },
    {
        course:'data-science',
        price:1299
    },
]

const totalToPay=shoppingCard.reduce((acc,item)=>{
return acc+item.price;
},0);

console.log(totalToPay);
