# Project Related To DOM

## Project Links
[click here](https://stackblitz.com/edit/stackblitz-starters-1j7e6vfz?file=index.html)

# solution code

## project1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    let color = e.target.id;
    console.log(color);
    switch (color) {
      case 'red':
        body.style.backgroundColor = '#ef4444';
        break;
      case 'yellow':
        body.style.backgroundColor = '#eab308';
        break;
      case 'purple':
        body.style.backgroundColor = '#8b5cf6';
        break;
      case 'orange':
        body.style.backgroundColor = '#f97316';
        break;
      case 'blue':
        body.style.backgroundColor = '#3b82f6';
        break;
    }
  });
});


```