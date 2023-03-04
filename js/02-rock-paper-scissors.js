function rockPaperScissors() {
    // Get user's choice
    let userChoice;
    do {
        userChoice = prompt("Rock, paper or scissors?").toLowerCase();
    } while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors");

    // Get computer's choice
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch (computerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        default:
            computerChoice = "scissors";
    }

    // Determine winner
    if (userChoice === computerChoice) {
        return alert("It's a tie!");
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return alert("Computer wins!");
        } else {
            return alert("You win!");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return alert("You win!");
        } else {
            return alert("Computer wins!");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return alert("You win!");
        } else {
            return alert("Computer wins!")
        }
    }
}

rockPaperScissors();