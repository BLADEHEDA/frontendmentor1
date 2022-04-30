//let btn = document.getElementById('btn4');
/*let btn = document.querySelectorAll('#btn');

let index = 0;

let colors = ['hsl(25, 97%, 53%)', ' hsl(216, 12%, 54%)'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
 // btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});  */
var count = 1;
document.querySelectorAll('button').forEach(function(a){
a.addEventListener('click', setColor)
})

var col = [ 'hsl(207, 13%, 14%)', ' hsl(216, 12%, 54%)'];
function setColor() {
this.dataset.count= this.dataset.count >= 0 ? ++this.dataset.count : 0;
   this.style.backgroundColor = col[this.dataset.count%col.length] 
}                                                                                 