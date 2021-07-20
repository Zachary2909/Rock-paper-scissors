const computerPlay = computerPLay()
    
    function computerPLay() {var numb = Math.floor(Math.random() * 3) + 1;
    
        if(numb === 1) {var computerpick = "rock" }

    else if(numb === 2) {var computerpick = "paper" }

    else { computerpick = "scissors" }

    
    return computerpick
    }


    function playerpick() {let picking = prompt( );

    let playerSelc = picking.toLowerCase()

    if (playerSelc === "rock") {return pick}

    else if (playerSelc === "scissors") {return pick}

    else if (playerSelc === "paper") {return pick}

    else { return "not vaild pick please pick rock, paper, or scissors" }

    



}
const playerSelc = "paper"
const computerSelc = computerPlay


function game(playerSelc,computerSelc) {
  

  
  //rock results 
  if      (playerSelc === "rock",computerSelc === "rock") {return "Rock ties with Rock"}
  else if (playerSelc === "rock",computerSelc === "paper") {return "Rock loses to Paper"}
  else if (playerSelc === "rock",computerSelc === "scissors") {return "Rock beats scissors"}
  // paper results
  else if (playerSelc === "paper",computerSelc === "paper") {return "Paper ties with Paper"}
  else if (playerSelc === "paper",computerSelc === "rock") {return "Paper beats Rock"}
  else if (playerSelc === "paper",computerSelc === "scissors") {return "Paper loses to scissors"}
  // scissors results 
  else if (playerSelc === "scissors",computerSelc === "scissors") {return "Scissors ties with Scissors"}
  else if (playerSelc === "scissors",computerSelc === "paper") {return "Scissors beats Paper"}
  else if (playerSelc === "scissors",computerSelc === "rock") {return "Scissors loses to Rock"}
 
 
  else return "something went bad"

return playerSelc + " " + computerSelc

  



}


 