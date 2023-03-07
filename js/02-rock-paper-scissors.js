function user() {
    let user;
    do {
        user = prompt("Rock, paper or scissors?").toLowerCase();
    } while (user != "rock" && user != "paper" && user != "scissors");
    return user;
}

function computer() {
    let computer = Math.floor(Math.random() * 3 + 1);
    switch (computer) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        default:
            computer = "scissors";
    }
    return computer;
}

function winner(player1, player2) {
    if (player1 === player2) {
        return alert("It's a tie!");
    } else if (player1 === "rock") {
        if (player2 === "paper") {
            return alert("Computer wins!");
        } else {
            return alert("You win!");
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            return alert("You win!");
        } else {
            return alert("Computer wins!");
        }
    } else if (player1 === "scissors") {
        if (player2 === "paper") {
            return alert("You win!");
        } else {
            return alert("Computer wins!");
        }
    }
}

function rockPaperScissors() {
    let userChoice = user();
    let computerChoice = computer();
    console.log(userChoice, computerChoice);
    winner(userChoice, computerChoice);
}

rockPaperScissors();