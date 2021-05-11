const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
// when you dont pass anything into a promise it's pending, 
// when it goes through you get resolved
// and when it fails you get rejected.

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("Worked (page1)")
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("It worked (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page2')
                    .then(() => {
                        console.log("it worked (page3)")

                    })
                    .catch(() => {
                        console.log("Error on page 3 resolve")
                    })
            })
            .catch(() => {
                console.log("Error on page 2 resolve")
            })
    })
    .catch(() => {
        console.log("Error on page 1 resolve")
    })

//As you can see this is better slightly than nesting a shit load of call backs, however it still looks incredibly messy.

//HOWEVER, instead of using a tone of catches and nestings we can use a single catch for an end point failure
// and we can use return instead.


fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("worked for (page1)")
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("worked for (page2)")
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("worked for (page3)")
    })
    .catch(() => {
        console.log("One request has failed!")
    })

//This works exactly the same as the above code, requires less lines, and gets rid of the ugly call back hell syntax