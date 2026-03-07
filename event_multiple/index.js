// const child1=document.getElementById('child1');
// child1.addEventListener('click',()=>{
// child1.textContent="Event clicked"
// })

const parent=document.getElementById('parent');

console.log(parent.children);
// for (const child of parent.children) {
//     child.addEventListener('click',()=>{
//         child.textContent="Event Clicked for child"
//     })
    
// }

// callback function to handle event listner 
function handleEvent(e)
{
    e.target.textContent="Event Clicked for child";
    // for remove event listner
    // so event trigger for only 1 time then it will removed
    parent.removeEventListener('click',handleEvent);
}
// parent.addEventListener('click',(e)=>{
//     e.target.textContent="Event Clicked for child";
// })
// no need to add event on each child use e.target
// how to remove event listner

// parent.removeEventListener('click',(e)=>{
//     console.log("Event removed");
//     e.target.textContent="Event removed"
// })
// but this will not valid bcause both function contain diff memory
// instread of this make 1 callback function 
parent.addEventListener('click',handleEvent);
// parent.removeEventListener('click',handleEvent);//here event direcly removed
// so this is not best way to remove event listner instead of here we can remove it from hnsdler function callback function

