////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.");
  return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
      return 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors' ||
      playerMove === 'scissors' && computerMove === 'paper' || playerMove ===
      'paper' && computerMove === 'rock') {
      return 'player';
    } else {
      return 'computer';
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0,
        computerWins = 0,
        winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
    console.log("Let's play Rock, Paper, Scissors");
    winner = getWinner(getPlayerMove(), getComputerMove());
    if (winner === 'player') {
      console.log('Player wins!');
      playerWins++;
      console.log('Player has ' + playerWins + ' win(s)');
    } else if (winner === 'computer') {
      console.log('Computer wins!');
      computerWins++;
      console.log('Computer has ' + computerWins + ' win(s)');
    } else {
      console.log("It's a tie!");
    }
  }
  console.log('Player: ' + playerWins + ' <=> ' + 'Computer:' + ' ' +
    computerWins);
  return [playerWins, computerWins];
}

playToFive();