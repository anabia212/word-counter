import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word:"
    }]);
const words = answers.sentence.trim();
console.log(words);
console.log(`your sentence word count is ${words.length}`);
