//1.  Write a JavaScript program that takes an array of objects and returns an object containing the frequency of each property across all objects.
// console.log(getPropertyFrequency(data))  // { a: 2, b: 3, c: 1 }

let arr=[
    {a:1,b:4},
    {b:6,c:7},
    {a:5,b:9}
]

function getFrequencyOfKey(arr)
{
    let frequency={};
    arr.forEach((obj)=>{
        for (const key in obj) {
           if(frequency[key])
            {
                frequency[key]++
            }
            else{

                frequency[key]=1;
            }
           
        }
    })
    return frequency

}
console.log(getFrequencyOfKey(arr))