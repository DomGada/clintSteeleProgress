const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("Hopefully it Worked")
}

function scream() {
    console.log("GO AWAY")
}
btn.onmouseenter = scream;


const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("clicked!");
})


const tasbtn = document.querySelector('#tas');

function shout() {
    console.log('shout')
}

function twist() {
    console.log('twist')
}


tasbtn.addEventListener('click', twist)
tasbtn.addEventListener('click', shout)