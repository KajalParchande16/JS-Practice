const h2=document.createElement('h2');
h2.id="second";
// h2.className="team";
// h2.className+=" list";
h2.classList.add('team')
h2.classList.add('list')
h2.textContent="Team List";
console.log(h2);
const first=document.getElementById('first');
first.after(h2);

const list1=document.createElement('li');
list1.textContent="Jemi";

const list2=document.createElement('li');
list2.textContent="Harman";


const ul=document.getElementById('unorderList');
ul.append(list1);
ul.prepend(list2);


const arr=["Radha","Richa","Sneh","Renuka","Pratika"];

const ul1=document.createElement('ul');
console.log(ul1)

for (const element of arr) {

    const li=document.createElement('li');
    li.textContent=element;
    ul1.append(li);
    
}
document.body.append(ul1);