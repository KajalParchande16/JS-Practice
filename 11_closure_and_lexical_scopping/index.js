// function outer()
// {
//     let name="Smriti";
//     function inner()
//     {
//         console.log(name);
//     }
//    return inner; //this inner return whole lexical scope of outer function also
// }
// const newFun=outer();
// newFun();
function outer()
{
    let name="Smriti";
    function inner()
    {
        console.log(name);
    }
    inner();
}
// const newFun=outer();
outer();

// document.getElementById('orange').onclick=function(){
//     document.body.style.backgroundColor="orange"
// }
// document.getElementById('green').onclick=function(){
//     document.body.style.backgroundColor="green"
// }

// this will work if we have to change only 1-2 colors but what if want to multiple colors
// so in that case we can use event handler


function clickHandler(color){
    return function()
    {
        document.body.style.backgroundColor=`${color}`
    }

}
document.getElementById('green').onclick=clickHandler('green')
document.getElementById('orange').onclick=clickHandler('orange')