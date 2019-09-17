let computerScore= 0;
let userScore= 0;
const userScore_span= document.getElementById("user-score")
const computerScore_span= document.getElementById("computer-score")
const scoreBoardDiv= document.querySelector(".score-board")
const result_p= document.querySelector(".result > p")
const pierreDiv= document.getElementById("p")
const feuilleDiv= document.getElementById("f")
const ciseauxDiv= document.getElementById("c")

function getComputerChoice() {
    const choices = ["p", "f", "c"]
    const randomNumbers= (Math.floor(Math.random()*3))
    return choices[randomNumbers];
}

function convertToWord(letter){
    if (letter === "p") return "rock";
    if (letter === "f") return "paper";
    return "scisors";

    }


function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv= document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! "`
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() =>  userChoiceDiv.classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv= document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost! "`
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() =>  userChoiceDiv.classList.remove('red-glow'), 300)
    console.log("LOSE");
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv= document.getElementById(userChoice)
    result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. it's a draw!! "`
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('grey-glow'), 300)
    console.log("DRAW"); 
}

function game(userChoice){
const computerChoice = getComputerChoice()
switch (userChoice + computerChoice) {
    case "pc":
    case "fp":
    case "cf": 
    win(userChoice , computerChoice)
    break;
    case "pf": 
    case "fc": 
    case "cp":    
    lose(userChoice , computerChoice)
    break;
    case "pp": 
    case "ff": 
    case "cc":    
    draw(userChoice , computerChoice)
}
}

function main(){
pierreDiv.addEventListener ('click', ()=>
    game("p")
   )

feuilleDiv.addEventListener ('click', ()=>
    game("f")
   
)

ciseauxDiv.addEventListener ('click', ()=>
    game("c")
    
)

}
main();