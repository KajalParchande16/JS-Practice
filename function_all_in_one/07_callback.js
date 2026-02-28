function greet()
{
    console.log("Hello, Kaise ho ");
}

function meet()
{
    console.log("Im going to market")
}
// meet();
// greet();
// meet(greet()); //first greet call & then meet call

// but you have to decide when 1 st call use callback

function meet1(callback)
{
    console.log("Im going to market");
    callback();
}
meet1(greet) // just pass reference not call function directly

function zomatoOrder()
{
    console.log("Zomato Order Placed...")
}

function blinkitOrder()
{
    console.log("Blinkit Order Placed...")
}

function payment(amount,callback)
{
    console.log(`${amount} payment is initializing`);
    console.log("Payment is received");
    callback();
}

payment(500,zomatoOrder);
payment(700,blinkitOrder);