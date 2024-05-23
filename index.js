import inquirer from "inquirer";
const prompt = await inquirer.prompt([
    {
        name: "para",
        message: "enter para",
        type: "string",
        // validate: (para) => {
        //    if(para == "  "){
        //     console.log("space is not allow");
        //    }
        // }
    }
]);
let trimid = prompt.para.trim();
let logic = trimid.split(" ");
console.log(logic);
logic.forEach((word, i) => {
    console.log(`[${i + 1}] ${word}`);
});
