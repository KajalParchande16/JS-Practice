const grandParent=document.getElementById('grandparent');
grandParent.addEventListener('click',()=>{
console.log("GrandParent Clicked")
},true);

const Parent=document.getElementById('parent');
Parent.addEventListener('click',()=>{
console.log("Parent Clicked")
});

const child=document.getElementById('child');
child.addEventListener('click',(e)=>{
// console.log("child Clicked");
console.log(e);
e.stopPropagation();
},true);