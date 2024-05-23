let compScore=0;
let userScore=0;
const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score");
const choices=document.querySelectorAll(".choice");
const msgIs=document.querySelector("#msg")

let gameDraw=()=>{
   msgIs.innerText="Game was Draw. Play again.";
   msgIs.style.backgroundColor = "#081b31";
}



const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
return( options[randIdx]);

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
    userScore ++;

    userScorePara.innerText= userScore;
    msgIs.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
    msgIs.style.backgroundColor= "green";
    }
    else{
        compScore ++;

        compScorePara.innerText=userScore;
    msgIs.innerText= `You lost. ${compChoice} beats your ${userChoice}`;
    msgIs.style.backgroundColor= "red";
    }


}


const playGame=(userChoice)=>{
    // generated comp choice
    const compChoice=getCompChoice();
    if (userChoice===compChoice){
        
        gameDraw();

    }else {
       let  userWin=true;
        if(userChoice==="rock"){
            //compchoice:- paper ,scissors
            userWin=compChoice==="paper" ? false : true ;
           
        } else if(userChoice==="paper"){
            //compchoice:- rock,scissors
            userWin=compChoice==="scissors" ? false : true ;
           
        }else {
            //compchoice:- rock,paper
            userWin=compChoice==="rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);

    }


};





choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
      const userChoice = choice.getAttribute("id");
     
      
      playGame(userChoice)

    });
});

