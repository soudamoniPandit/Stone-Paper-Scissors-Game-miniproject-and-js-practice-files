let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranInx= Math.floor(Math.random()*3);
    return options[ranInx];
};


const drawGame=(userChoice)=>{
    console.log("game was draw.");
    msg.innerHTML="<i>Game Draw! Try Again</i>;"
    msg.style.backgroundColor="pink";
};


const showWinner=(userWin , userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.textContent =userScore;
        console.log("congratulations YOU win!");
        msg.innerHTML=`<i>congratulations You Win! Your ${userChoice} beats ${compChoice}</i> `;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.textContent =compScore;
        console.log("COMP win!");
        msg.innerHTML=`<i> You Lose!${compChoice} beats Your ${userChoice} !Better Luck Next Time!<i/>`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);
    if( userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="spaper"?false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false : true;
        }else if (userChoice==="scissors"){
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin ,userChoice,compChoice)
    }      
      
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});