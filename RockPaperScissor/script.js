//Initializing Player and Machine score with Zero
let player = 0;
let  machine= 0;
let playerNumber;
let computerNumber;
let gameStatusText = "";
let gameStatus="";
// get player score 
let player_score = document.getElementById("player_score");
let machine_score = document.getElementById("machine_score");

// get buttons with id 
let rock_button = document.getElementById("rock_button");
let paper_button = document.getElementById("paper_button");
let scissor_button = document.getElementById("scissor_button");

// output elements 
let outputTextContainer = document.getElementById("outputTextContainer");
let machinechoice = document.getElementById("machinechoice");
let playerchoice = document.getElementById("playerchoice");
let resultText = document.getElementById("resultText");
// computer choice text 
let machinechoiceText = "";
let playerchoiceText = "";

//display initial score of player and computer by calling function updateScore();
function updateScore(){
    player_score.textContent = player;
    machine_score.textContent = machine;
}
updateScore();

function displayText(){
    outputTextContainer.style.display="block";
    //computer choice text 
    if(machinechoiceText==="Rock"){
        machinechoice.style.color="#FF33CE";
    }else if (machinechoiceText==="Paper"){
        machinechoice.style.color="#F8F004";
    }
    else if(machinechoiceText==="Scissors"){
        machinechoice.style.color = "#0499F8";
    } 
    machinechoice.textContent = machinechoiceText;
    // player choice text
    if(playerchoiceText==="Rock"){
        playerchoice.style.color="#FF33CE";
    }else if (playerchoiceText==="Paper"){
        playerchoice.style.color="#F8F004";
    }
    else if(playerchoiceText==="Scissors"){
        playerchoice.style.color = "#0499F8";
    }
    //game status text
    playerchoice.textContent = playerchoiceText;
    if(gameStatus === "tie"){
        resultText.style.color="#FFA500";
    }
    else if(gameStatus==="won"){
        resultText.style.color="#266150";
    }
    else{
        resultText.style.color="#932432";
    }
    resultText.textContent = gameStatusText;
}


// dont display output text initially 
outputTextContainer.style.display="none";
// assigning number to rock paper and sessior 
// rock is 1   
// paper is 2 
// sessior is 3


// onclick rock button function 
rock_button.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 1;
    playerchoiceText = "Rock";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3 
    if(playerNumber===computerNumber){
        machinechoiceText = "Rock";
        gameStatusText = "Game is a Tie !!"
        gameStatus = "tie";
    }
    else if (playerNumber===1 && computerNumber===2){
        machinechoiceText = "Paper";
        gameStatusText = "Machine Won !!"
        gameStatus = "lose";
        machine=machine+1;
    }
    else if(playerNumber===1 && computerNumber===3){
        machinechoiceText = "Scissors";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}

// onclick paper button function 
paper_button.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 2;
    playerchoiceText = "Paper";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3 
    if(playerNumber===computerNumber){
        console.log("tie")
        machinechoiceText = "Paper";
        gameStatusText = "Game is a Tie !!";
        gameStatus = "tie";
    }
    else if (playerNumber===2 && computerNumber==3){
        machinechoiceText = "Scissors";
        gameStatusText = "Machine Won !!";
        gameStatus = "lose";
        machine=machine+1;
    }
    else if(playerNumber===2 && computerNumber===1){
        machinechoiceText = "Rock";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}


// onclick sessior button function 
scissor_button.onclick = ()=>{
    outputTextContainer.style.display="none";
    playerNumber = 3;
    playerchoiceText = "Scissors";
    computerNumber = Math.floor(Math.random()*3)+1; // this random function generates only 1 or 2 or 3 
    if(playerNumber===computerNumber){
        machinechoiceText = "Scissors";
        gameStatusText = "Game is a Tie !!";
        gameStatus = "tie";
    }
    else if (playerNumber===3 && computerNumber===1){
        machinechoiceText = "Rock";
        gameStatusText = "Machine Won !!";
        gameStatus = "lose";
        machine=machine+1;
    }
    else if(playerNumber===3 && computerNumber===2){
        machinechoiceText = "Paper";
        gameStatusText = "Player Won !!";
        gameStatus = "won";
        player = player + 1;
    }
    displayText();
    updateScore();
}