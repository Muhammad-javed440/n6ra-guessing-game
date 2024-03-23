import inquirer from "inquirer";
// 1-compter will generate a random number
// 2-user input for guessing number
// 3-compare user input with computer gentating number and show resulte
const randomNumber=Math.floor(Math.random()*(5-1)+1)
const answer =await inquirer.prompt([
{
    name:"userGuessNumber",
    type:"number",
    message:"Please guess a number between 1 to 5  = "
}
]);
if(answer.userGuessNumber===randomNumber){
    console.log("Congratulation! you won the game.Thanks to play game. ");
}
else{
    console.log("You lose the game,Try again.Thanks to play game.");
}