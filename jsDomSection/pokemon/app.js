const container = document.querySelector('#container');



for (let i = 1; i <= 151; i++) {
    const pokeFrame = document.createElement('div')
    pokeFrame.classList.add('pokemon')
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokeFrame.appendChild(newImg)
    const body = document.querySelector('body')
    body.appendChild(pokeFrame);
}