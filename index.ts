

import inquirer from "inquirer";


const prompt = await inquirer.prompt([
    {
        name: "para",
        message: "enter para",
        type: "string",
    }
])
let trimid = prompt.para.trim()
let logic: any[] = trimid.split(" ")
console.log(logic);


