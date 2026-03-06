// const child1=document.getElementById('child1');
// child1.addEventListener('click',()=>{
// child1.textContent="Event clicked"
// })

const parent=document.getElementById('parent');

console.log(parent.children);
for (const child of parent.children) {
    child.addEventListener('click',()=>{
        child.textContent="Event Clicked for child"
    })
    
}