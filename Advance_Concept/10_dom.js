const h1 = document.getElementById('first');

h1.addEventListener('click', function () {
    console.log(this);
})

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log(this);
    // arraow function point to lexical scope (outer scope)=>window object
})
