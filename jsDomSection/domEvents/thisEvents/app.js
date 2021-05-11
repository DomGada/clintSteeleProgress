const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}


const buttons = document.querySelectorAll('button');

const h1s = document.querySelectorAll('h1');

// for (let btn of buttons) {
//     btn.addEventListener('click', function () {
//         this.style.backgroundColor = makeRandColor();
//         this.style.color = makeRandColor();
//     })
// }
// THESE two for loops were the WORSE way of doing it
// for (let h of h1s) {
//     h.addEventListener('click', function () {
//         this.style.backgroundColor = makeRandColor();
//         this.style.color = makeRandColor();
//     })
// }


// BETTER WAY 
// Use the this. keyword!

for (let btn of buttons) {
    btn.addEventListener('click', colorize);
}
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}