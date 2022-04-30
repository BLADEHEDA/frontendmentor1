const btn = document.getElementById('btn4');

let index = 0;

const colors = ['hsl(25, 97%, 53%)', ' hsl(216, 12%, 54%)'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
 // btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});