const wheelElements = document.querySelectorAll('div.wheel > div');

const text = document.querySelector('h1');

document.querySelector('i.fas').addEventListener('click', function(){
 location.reload();
});

wheelElements.forEach(function(element){
 element.addEventListener('click', changeColor);
})

function changeColor() {
 document.body.className = this.className;
 text.textContent = 'You picked: ' + this.className;
}