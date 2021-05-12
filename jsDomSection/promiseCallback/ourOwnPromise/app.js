new Promise((resolve, reject) => {
    resolve(); // this will immediately throw a resolved promise
    reject(); // this will immediately throw a rejected promise
    // if nothing is passed in then you will have a pending promise.

})
// a promise should have a resolve and reject passed into it
// resolve keyword changed to fullfilled from resolved
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


fakeRequest('/dogs/1')
    .then((data) => {
        console.log("Done with Req");
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("Oh No!", err)
    })

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
// from before we had the callBack Hell which was incredibly had to read and look at.
// and it will split up the delay
// we dont even need to throw a fail