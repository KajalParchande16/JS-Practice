// function x() {
//     setTimeout(() => {
//         console.log("hello...");

//     }, 1000);
//     console.log("Namaste Javascript....")
// }
// x();

// print 1-5 no after event current no of time delay if 1->1sec if 2->2sec
function numDelay() {
    for (let i = 1; i <= 5; i++) {
        // as var is function scope so it iterate last value i becomes 6 so o/p get 666666
        // for getting currect o/p we can use let instaed of var
        // if don't need to user let use closure as function
        function k(n) {
            setTimeout(() => {
                console.log(n);
            }, n * 1000);
        }
        k(i)



    }
}
numDelay();
