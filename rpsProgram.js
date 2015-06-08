var winCount = 0;
var loseCount = 0;
var tieCount = 0;

function input(choice) {
    var userChoice = choice;
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "Rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    document.getElementById('comp').innerHTML = userChoice + " vs. " + computerChoice;
    document.getElementById('outcome').innerHTML = compare(userChoice, computerChoice);
    document.getElementById('winCounter').innerHTML = "Wins: " + winCount;
    document.getElementById('loseCounter').innerHTML = "Losses: " + loseCount;
    document.getElementById('tieCounter').innerHTML = "Ties: " + tieCount;
}

function compare(user, comp) {
    if (user === comp) {
        tieCount++;
        return "You tie!";
    } else {
        if (user === "Rock") {
            if (comp === "Scissors") {
                winCount++;
                return "You win!";
            } else {
                loseCount++;
                return "You lose!";
            }
        } else {
            if (user === "Paper") {
                if (comp === "Rock") {
                    winCount++;
                    return "You win!";
                } else {
                    loseCount++;
                    return "You lose!";
                }
            } else {
                if (user === "Scissors") {
                    if (comp === "Rock") {
                        loseCount++;
                        return "You lose!";
                    } else {
                        winCount++;
                        return "You win!";
                    }
                }
            }
        }
    }
}