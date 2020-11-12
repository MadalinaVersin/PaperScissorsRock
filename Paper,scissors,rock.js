let userScore = 0;
let computerScore = 0;
const userScoreSpanTag = document.getElementById("user-score");
const computerScoreSpanTag = document.getElementById("computer-score");
const scoreBoardDivTag = document.querySelector(".score-board");
const resultDivTag = document.querySelector(".result > p");
const rockDivTag = document.getElementById("rock");
const scissorsDivTag = document.getElementById("scissors");
const paperDivTag = document.getElementById("paper");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber];
    
}

function transformWord (word) {
    if (word === "rock") return "Rock";
    if (word === "scissors") return "Scissors";
    return "Paper";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDivTag.innerHTML = `${transformWord(userChoice)} beats ${transformWord(computerChoice)}. You win!!!`;
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout( () => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDivTag.innerHTML = `${transformWord(userChoice)} loses to ${transformWord(computerChoice)}. You lost!!!`;
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout( () => document.getElementById(userChoice).classList.remove('red-glow'), 1000);


}

function draw(userChoice, computerChoice) {
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDivTag.innerHTML = `${transformWord(userChoice)} equals ${transformWord(computerChoice)}. It is a draw!!!`;
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout( () => document.getElementById(userChoice).classList.remove('gray-glow'), 1000);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;      
    }

}

function restartGame(){
    userScore = 0;
    computerScore = 0;
    userScoreSpanTag.innerHTML = userScore;
    computerScoreSpanTag.innerHTML = computerScore;
    resultDivTag.innerHTML = "Make you move!"
}

function main() {
    rockDivTag.addEventListener('click', () => game("rock"));

    scissorsDivTag.addEventListener('click', () => game("scissors"));

    paperDivTag.addEventListener('click', () => game("paper"));
}

main();