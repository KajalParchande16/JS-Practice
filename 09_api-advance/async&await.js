const promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {

            res({ name: 'Jemi', score: 127 })
        }
        else {
            rej("Error:Something went wrong")
        }
    }, 1000);
});
// async function consumePromise(){
//    const resonse= await promiseOne;
//     console.log(resonse)
// }


// async await does not handle error so need to use try catch

async function consumePromise() {
    try {

        const resonse = await promiseOne;
        console.log(resonse)
    }
    catch (error) {
        console.log(error);
    }
}
consumePromise();

// api example

async function getAllUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // let data = response.json();
        // here response.json() also take time for converting data into json so need to add await
        let data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}

getAllUser();


// same api call using then&catch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })