// // this is the native version of requesting data, however we will be using axios.
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("data parsed", data)
//     })
//     .catch(e => {
//         console.log("OH NO ! ERROR!", e)
//     })
// // fetch is the way to request from an api, it returns a promise
// const fetchBitcoinPrice = async () => {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     const data = await res.json();
//     console.log(data.ticker.price);
// }

//axios intro.
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error!", err)
//     })
// // axios is promoise based, but it allows things to be just a little bitch shorter.

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log("ERROR!", e)
//     }
// }


const jokes = document.querySelector('#jokes')

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li')
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "No jokes avail" // the await in add new joke will actually append the error text in case of failure.

    }

}
const button = document.querySelector('button')
button.addEventListener('click', addNewJoke)