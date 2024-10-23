function getComputerChoice(){
   let choice = Math.floor(Math.random() * 3);
   if (choice == 0){
        return 'Rock'
   }  else if(choice == 1){
        return 'Paper'
   } else if(choice == 2){
        return 'Scissor'
   }
}

function getPlayerChoice(){
    let choice = prompt("Choose Rock, Paper or Scissors?");
    if (choice.toLowerCase() == 'rock'){
        return 'Rock'
    } else if(choice.toLowerCase() == 'paper'){
        return 'Paper'
    } else if(choice.toLowerCase() == 'scissors'){
        return 'Scissors'
    }
}

console.log(getPlayerChoice())
