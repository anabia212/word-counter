#! /usr/bin/env node
import inquirer from "inquirer"
const answers:
{
    sentence:string
}= await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "enter your sentence to count the word:"
}])
const words= answers.sentence.trim()
console.log(words)

console.log(`your sentence word count is ${words.length}`);