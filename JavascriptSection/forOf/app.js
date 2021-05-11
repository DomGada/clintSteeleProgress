const nums = [1, 2, 3, 4, 5]

function print(ele) {
    console.log(ele)
}
nums.forEach(print)
// this is an odd way of using it
// it is more common to define the function in the forEach

nums.forEach(
    function (el) {
        console.log(el)
    }
)
// these are going to be replaced by for of.

// Now if we work with objects

let movies = [{
        name: "star wars",
        score: 40
    },
    {
        name: "shrek",
        score: 100
    },
    {
        name: "shark tales",
        score: 100
    },
    {
        name: "nemo",
        score: 100
    }
]
// Now how would we call them?

movies.forEach(
    function (movie) {
        console.log(`${movie.title}: ${movie.score}/100`)
    }
)