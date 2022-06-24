let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.ceil(Math.random() * 9);
}

function compareGuesses(humanScore, computerScore, st){
  // console.log(Math.abs(humanScore- st));
  // console.log(Math.abs(computerScore- st));
  // console.log(Math.abs(humanScore));
  // console.log(Math.abs(computerScore));
  // console.log(st);
if(Math.abs(humanScore- st) < Math.abs(computerScore- st)){
  return true;
}else{
  return false;
}
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
  
}

function advanceRound(){
  currentRoundNumber++;
}


console.log(compareGuesses(humanScore, computerScore, generateTarget()));