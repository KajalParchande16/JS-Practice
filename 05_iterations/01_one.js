// for

for (let i = 1; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`${element} is best number`)
    }
    console.log(element)

}

for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log("outer Loop", i);

    for (let j = 1; j <= 10; j++) {
        // console.log("Inner Loop", j);
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

let myTeam = ['Harman', 'Smriti', 'Shaifali', 'Deepti', 'Jemi'];
for (let i = 0; i < myTeam.length; i++) {
    const element = myTeam[i];
    console.log(element);

}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`detected ${i}`);
        break;
    }
    console.log(`value of i is ${i}`)
}
// break it will break the execution immediatly

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log(`detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`)
}