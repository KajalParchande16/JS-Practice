function addNum(...num)
{
    let sum=0;
    for (const element of num) {
        
        sum+=element;
    }
    console.log(sum)
}
addNum(5,6);
addNum(10,20,30)
addNum(10,20,30,40)