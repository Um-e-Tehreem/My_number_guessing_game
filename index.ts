#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor (Math.random() * 20 + 1)
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 5-10: "
    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guessed right number")

}else{
    console.log("You guessed wrong number")
}