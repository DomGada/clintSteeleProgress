let max = parseInt(prompt("Enter the max Number"));
const targNum = Math.floor(Math.random() * max) + 1;
while (!max) {
    parseInt(prompt("Enter the max Number"));
}
console.log(targNum);
let numGuess = 1;
let guess = prompt("enter your first guess!")
while (parseInt(guess) !== targNum) {

    if (guess === "q") {
        break;
    }
    if (guess > targNum) {
        guess = prompt("Too high! Enter a new guess: ")
    } else {
        guess = prompt("Too low! Enter a new guess: ")
    }
    numGuess++
}

console.log("You got it chief.")