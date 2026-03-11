const stopWatch=
{
    second:0,
    start:function()
    {
        setInterval(function () {
            this.second++;
            console.log(this);//if setTinterval refer normal function this point to setInterval 
            console.log(this.second)
        }, 1000);
    }
}
// stopWatch.start();

const stopWatch1=
{
    second:0,
    start:function()
    {
        setInterval(()=> {
            this.second++;
            console.log(this);//if setTinterval refer normal function this point to setInterval 
            console.log(this.second)
        }, 1000);
    }
}
stopWatch1.start();