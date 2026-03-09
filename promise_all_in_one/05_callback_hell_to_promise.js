// food order project

orderDetails = {
    id: 1823,
    food: ["Pizza", "Coffee", "biryani"],
    cost: 720,
    customer_name: 'Kajal',
    customer_location: 'Pune',
    restaturant_location: 'Deccan'

}

function placeOrder(userDetails) {
    console.log(`${userDetails.cost} Payment is in progress`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(Math.random());
           if(Math.random()>0.9)
           {
             console.log("Payment is received & order get placed...");
            userDetails.status = true;
            resolve(userDetails);
           }
           else{
            reject("Payment is failed")
           }
            // callback(userDetails);
        }, 3000);
    })
}

function preparingOrder(userDetails) {
    // console.log("updated data",userDetails);
    console.log(`Order preaparation ${userDetails.food.join(',')} started...`);
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Order is now prepared...");
            userDetails.token = 123;
            // callback(userDetails);
            res(userDetails);
        }, 3000);
    })
}

// 3
function pickUpOrder(userDetails) {
    console.log(`Delivery boy on the way to pickUp order for ${userDetails.token}`);
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("I have picked Up order");
            // callback(userDetails);
            userDetails.order_PickedUP = true;
            res(userDetails);
        }, 3000);
    })
}

// 4
function deliverOrder(userDetails) {
    console.log(`I am on the way to deliver order on ${userDetails.customer_location} location `);
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Order deliver successfully");
            userDetails.order_Deliver=true;
            res(userDetails);
        }, 3000);
    })
}

// placeOrder(orderDetails, (orderDetails) => {
//     preparingOrder(orderDetails, (orderDetails) => {
//         pickUpOrder(orderDetails, (orderDetails) => {
//             deliverOrder(orderDetails);
//         })

//     }); 
// })
// this is callback hell 
// now we can handle it with promise

// placeOrder(orderDetails);
// preparingOrder(orderDetails);
// pickUpOrder(orderDetails);
// deliverOrder(orderDetails);


// for this we have to return promise from every functions
placeOrder(orderDetails)
    .then((orderDetails) => preparingOrder(orderDetails))
    .then((orderDetails) => pickUpOrder(orderDetails))
    .then((orderDetails) => deliverOrder(orderDetails))
    .then(orderDetails=>console.log(orderDetails))
    .catch((error)=>{
        console.log("Error:",error);
    })
    .finally(()=>{
        console.log("I'm doing cleanUp")
    })