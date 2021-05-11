const btn = document.querySelector('#rando')
const h1 = document.querySelector('h1')
btn.addEventListener('click', function () {
    // const r = Math.floor(Math.random() * 256)
    // const g = Math.floor(Math.random() * 256)
    // const b = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = makeRandColor()
    h1.textContent = makeRandColor()
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}