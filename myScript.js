const container = document.querySelector("#container");
        const pscore = document.querySelector("#playerScore");
        const cscore = document.querySelector("#computerScore");
        const rockbtn = document.querySelector("#rock");
        const paperbtn = document.querySelector("#paper");
        const scissorsbtn = document.querySelector("#scissors");

        function computerPlay() {
            let n = Math.floor(Math.random() * 3);
            return (n === 0) ? "rock" : (n === 1) ? "paper" : "scissors";
        }

        let computerScore = 0;
        let playerScore = 0;
        function playRound(playerSelection, computerSelection) {
            let x;
            if (playerSelection.toLowerCase() == computerSelection) {
                x = "It's a tie!"
            }
            else if (playerSelection.toLowerCase() == "rock") {
                computerSelection == "paper" ? (x = "You lose! Paper beats rock.", computerScore++) : (x = "You win! Rock beats scissors.", playerScore++);
            }
            else if (playerSelection.toLowerCase() == "paper") {
                computerSelection == "scissors" ? (x = "You lose! Scissors beats paper.", computerScore++) : (x = "You win! Paper beats rock.", playerScore++);
            }
            else if (playerSelection.toLowerCase() == "scissors") {
                computerSelection == "rock" ? (x = "You lose! Rock beats scissors.", computerScore++) : (x = "You win! Scissors beats paper.", playerScore++);
            }
            else {
                x = "Please enter rock, paper, or scissors";
            }

            const round = document.createElement("div");
            round.textContent = x;
            round.className = "round";
            container.appendChild(round);

            if (playerScore > 4) {
                alert(`You won the match ${playerScore} - ${computerScore}!`);
                playerScore = 0;
                computerScore = 0;
                container.innerHTML = "";
            }
            if (computerScore > 4) {
                alert(`You lost the match ${computerScore} - ${playerScore}.`);
                playerScore = 0;
                computerScore = 0;
                container.innerHTML = "";
            }

            pscore.innerHTML = `Player: ${playerScore}`;
            cscore.innerHTML = `Computer: ${computerScore}`;
        }

        rockbtn.addEventListener("click", () => {
            playRound("rock", computerPlay())
        });
        paperbtn.addEventListener("click", () => {
            playRound("paper", computerPlay())
        }); 
        scissorsbtn.addEventListener("click", () => {
            playRound("scissors", computerPlay())
        });        