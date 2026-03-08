// food order project

function placeOrder(callback)
{
    console.log("Payment is in progress...");
    setTimeout(() => {
        console.log("Payment is received & order get placed...");
        callback();
    }, 3000);
}

function preparingOrder(callback)
{
    console.log("Order preaparation started...");
    setTimeout(() => {
        console.log("Order is now prepared...");
        callback();
    }, 3000);
}

// 3
function pickUpOrder(callback)
{
    console.log("Delivery boy on the way to pickUp order");
    setTimeout(() => {
        console.log("I have picked Up order");
        callback();
    }, 3000);
}

// 4
function deliverOrder()
{
    console.log("I am on the way to deliver order");
    setTimeout(() => {
        console.log("Order deliver successfully");
    }, 3000);
}
// 1. this is totally wrong
// placeOrder();
// preparingOrder();

// 2. use callback
// placeOrder(preparingOrder) //this is best 

// 3 what if another function has to call
// placeOrder(preparingOrder(pickUpOrder)) 
//this will not work bacoz we thinh we just pass calback to preparingOrder but
// for placeOrder  we call preparingOrder() direclty we are not passing reference of preparingOrder for call pickUpOrder as callback we call preparingOrder
// so this will not work

// 4. we cau user callback hell
// 1st check remove callback from preparingOrder()
placeOrder(()=>{
    preparingOrder(()=>{
        pickUpOrder(()=>{
            deliverOrder();
        });
    });
})

// this is called calback hell 
// callback ke andar callback -----