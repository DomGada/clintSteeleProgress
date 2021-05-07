let option = prompt("What would you like to do?")
let list = []

while (option !== 'quit') {
    if (option == 'new') {
        list.push(prompt("What task would you like to add?"))
    } else if (option == 'list') {
        console.log("*******")
        let i = 1;
        for (let task of list) {
            console.log(`Task ${i}: ${task}.`)
            i += 1;
        }
        console.log("*******")
    } else if (option == 'delete') {
        let deleteChoice = parseInt(prompt("Please enter the number of the task you wish to delete:"))
        while (deleteChoice == NaN) {
            deleteChoice = parseInt(prompt("Incorrect input please enter the number of the task: "))
        }
        list.splice(deleteChoice - 1, 1);
    }
    option = prompt("What would you like to do?");
}