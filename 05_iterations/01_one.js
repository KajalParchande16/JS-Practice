// for

for (let i = 1; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`${element} is best number`)
    }
    console.log(element)

}

for (let i = 1; i < 10; i++) {
    // const element = i;
    // console.log("outer Loop", i);

    for (let j = 1; j < 10; j++) {
        // console.log("Inner Loop", j);
        console.log(i + '*' + j + ' = ' + i * j);
    }
}