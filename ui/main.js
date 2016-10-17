// counter code:
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
// make a req to the counter endpoint

//capture the resp & store it in a var

//render the var in the correct span
counter++;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};

/*
console.log('Loaded!');

// change the text of the  main-text div
var element = document.getElementById('main-text');
element.innerHTML='changed main text from main js';

// move the image madi
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight()
{
    marginLeft += 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight, 50);
};
*/