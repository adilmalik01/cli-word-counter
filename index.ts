

import inquirer from "inquirer";


const prompt = await inquirer.prompt([
    {
        name: "para",
        message: "Enter you sentence do you count word.",
        type: "string",
    }
])
console.log(prompt.para);

const options = await inquirer.prompt([
    {
        name: "count",
        message: "Do you count the words in this sentence",
        type: "confirm",
        default: "yes"
    }
])

let condition = true

while (condition) {
    switch (options.count) {
        case true:
            let trimid = prompt.para.trim()
            let logic: any[] = trimid.split(" ")
            console.log(logic);
        case false:
            condition = !condition
    }
}



