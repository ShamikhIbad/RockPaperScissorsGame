let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const gerCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
  const randomIdx =  Math.floor(Math.random()*3);
  return options[randomIdx];
}
 
const drawgame = ()=>{
    msg.innerText  = "Game Draw!";
    msg.style.backgroundColor = "yellow";
}


const showWiner = (userWin, userChoice , compChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
   msg.innerText = `you Win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor = "lightgreen";

}else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";

}
}



const playGame = (userChoice) => {


    //TO  Generate Computer Choice
 const compChoice = gerCompChoice();
 




 if(userChoice === compChoice){
    drawgame();
 }else {

    let userWin = true;

    if(userChoice === "rock"){
        //comp = scissors . paper
      userWin =  compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        //comp = scissors rock
      userWin =  compChoice === "scissor" ? false : true;
    }else{
        //comp = rock paper
        userWin = compChoice === "rock" ? false : true;
    }
    
    showWiner(userWin , userChoice , compChoice );
 }
}



choices.forEach((choice) => {
  
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
})