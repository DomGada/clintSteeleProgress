const login = async (username, password) => {
    if (!username || !password) throw 'Missing Creds'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}
// this will show us if the passowrd is correct and return a fulfilled or rejected promise

//this will be rejected because there is no password
login('asfdsfasd')
    .then(msg => {
        console.log("Logged in")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })


login('asfdsfasd', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged in")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })
// this will be accepted because the correct password is there, fulfilled promise return.
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
// if you want to use the await function it will work without having to call the .then()
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
}
// no more needing to return promises or use .then() and it will only continue on a fulfilled return from the promise.

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < .7) {
                resolve("your fake data here");
            }
            reject("reuqest error!");
        }, 1000)
    })
}

//Async version of the above.


// THis one is without any errors being thrown, lets adapt it
// async function makeTwoRequests() {
//     let data1 = await fakeRequest('/page1');
//     console.log(data1);
// } 


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("Caught an Error")
        console.log("error is:", e)
    }

}