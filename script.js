var options = [
    "Rock",
    "Paper",
    "Scissors"
];

function play(player1, player2) {
    if (player1 === "Rock") {
        if (player2 === "Rock") {
            console.log("Draw");
        } else if (player2 === "Paper") {
            console.log("Lose");
        } else {
            console.log("Win");
        }
    } else if (player1 === "Paper") {
        if (player2 === "Rock") {
            console.log("Win");
        } else if (player2 === "Paper") {
            console.log("Draw");
        } else {
            console.log("Lose");
        }
    } else {
        if (player2 === "Rock") {
            console.log("Lose");
        } else if (player2 === "Paper") {
            console.log("Win");
        } else {
            console.log("Draw");
        }
    }

}

function computer() {
    return options[Math.floor(Math.random()*options.length)];
}

function player() {
    return prompt("Rock, Paper or Scissors");
}

let rounds = prompt("How many rounds?");

for (i = 1; i <= rounds; i++) {
    play(player(), computer(), 5);
}