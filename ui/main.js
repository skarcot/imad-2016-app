console.log('Loaded!');

// change the text of the  main-text div
var element = document.getElementById('main-text');
element.innerHTML='changed main text from main js';

// move the image madi
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight()
{
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
};
img.onclick = function()
{
    var interval = setInterval(moveRight, 100);
};
