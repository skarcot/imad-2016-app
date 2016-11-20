// counter code:
var button = document.getElementById('counter');

button.onclick = function() {
    // create a req object
    reqCounter = new XMLHttpRequest();
    
    // capture the resp & store it in a var
    // check whether the req's on ready state has changed?
    reqCounter.onreadystatechange = function(){
        // check whether req's ready state is DONE(it cud be - unsent, opened, headers-received, loading, done)
        if(reqCounter.readyState == XMLHttpRequest.DONE) {
            // check whether response code is OK(200)
            if(reqCounter.status == 200) {
                var counter = reqCounter.responseText;
                //render the var in the correct span
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // not done yet
    };
    
    // make the req to the counter endpoint
    reqCounter.open('GET', 'http://skarcot.imad.hasura-app.io/counter', true);
    reqCounter.send(null);
};

// submit name:
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    // make a req to server & send the name
    
    // capture a list of names & render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i < names.length; i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var nameList = document.getElementById('namelist');
    nameList.innerHtml = list;
}

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