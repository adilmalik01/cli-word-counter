#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
import showBanner from "node-banner"


let red = chalk.red.italic
let blue = chalk.blue.italic
let green = chalk.green.italic
let yellow = chalk.yellow.italic


async function ShowAppName() {
    await showBanner('Word Counter', 'This App Made by Adil Malik 😊💕 \n');
}
await ShowAppName()








const prompt = await inquirer.prompt([
    {
        name: "para",
        message: yellow("Please enter your paragraph:"),
        type: "input",
        validate(para) {
            if (para.trim() === "") {
                return red("Paragraph cannot be empty.");
            }
            return true;
        }
    }
]);
prompt.para = prompt.para.trim().replace(/\s+/g, ' ')
console.log(blue(`\n${prompt.para}\n`));

const options = await inquirer.prompt([
    {
        name: "count",
        message: yellow("Do you wanna count the words in this paragraph ?"),
        type: "confirm",
        default: "yes",
    }
])

let condition = true
while (condition) {
    switch (options.count) {
        case true:
            let logic = prompt.para.split(" ")
            console.log(logic);
            await listSequence(logic)
            condition = !condition
            break;
        case false:
            console.log(blue("This for using this app ! 😊"));
            condition = !condition
            break
        default:
            console.log(chalk.red('Invalid command!'));
            break;
    }
}
async function listSequence(logic: string[]) {
    const byLine = await inquirer.prompt([
        {
            name: "check",
            message: yellow("Do you wanna convert this words in sequence ?"),
            type: "confirm",
            default: "yes"
        }
    ])
    if (byLine.check == true) {
        logic.forEach((word: string, i: number) => {
            console.log(`[${i + 1}]${word}`);
        });
        return
    } else {
        console.log(blue("This for using this app ! 😊"));
    }

}


