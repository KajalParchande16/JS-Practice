const promiseTask = new Promise(function (resolve, reject) {
    // DB connection
    setTimeout(() => {
        console.log("Async task is completed");
        resolve();
    }, 1000);
});
promiseTask.then(function () {
    console.log("Promise is cosumed")
});

new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async Task 2");
        res();
    }, 2000);
}).then(() => {
    console.log("Promise is comsumed by then")
});

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res({ name: 'HarmanPret', role: 'Captain', score: '3680' });
    }, 3000);
});
promiseThree.then((data) => {
    console.log(data);
});

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            res({ name: 'Smriti', role: 'Vice-Captain' });
        }
        else {
            rej("Error:Something went erong");
        }
    }, 4000);

});

// promise chaining
promiseFour.then((user) => {
    // console.log(user.name);
    // if we return something then again it work like promise
    return user.name;
})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finally promise is resolved or rejected")
    })