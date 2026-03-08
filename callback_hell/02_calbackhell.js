// food order project

orderDetails = {
    id: 1823,
    food: ["Pizza", "Coffee", "biryani"],
    cost: 720,
    customer_name: 'Kajal',
    customer_location: 'Pune',
    restaturant_location: 'Deccan'

}

function placeOrder(userDetails, callback) {
    console.log(`${userDetails.cost} Payment is in progress`);
    setTimeout(() => {
        console.log("Payment is received & order get placed...");
        userDetails.status = true;
        callback(userDetails);
    }, 3000);
}

function preparingOrder(userDetails, callback) {
    // console.log("updated data",userDetails);
    console.log(`Order preaparation ${userDetails.food.join(',')} started...`);
    setTimeout(() => {
        console.log("Order is now prepared...");
        userDetails.token = 123;
        callback(userDetails);
    }, 3000);
}

// 3
function pickUpOrder(userDetails, callback) {
    console.log(`Delivery boy on the way to pickUp order for ${userDetails.token}`);
    setTimeout(() => {
        console.log("I have picked Up order");
        callback(userDetails);
    }, 3000);
}

// 4
function deliverOrder(userDetails) {
    console.log(`I am on the way to deliver order on ${userDetails.customer_location} location `);
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
placeOrder(orderDetails, (orderDetails) => {
    preparingOrder(orderDetails, (orderDetails) => {
        pickUpOrder(orderDetails, (orderDetails) => {
            deliverOrder(orderDetails);
        })

    }); //but her we direcly passing  orderDetails
})

// this is called calback hell 
// callback ke andar callback -----