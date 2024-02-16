let score = 0;
const choices = ["rock", "paper", "scissors", "dynamite"];

function adjustScore(result) {
  if (result === "win") {
    score += 1;
  } else if (result === "lose") {
    score = Math.max(0, score - 1);
  } else if (result === "tie") {
    return;
  }
}

function getName() {
  let username = prompt(
    `Welcome to ${choices.join(", ")} Please enter your name to start playing`
  );

  while (
    username === null ||
    username.trim() === "" ||
    !/^[a-zA-Z]/.test(username)
  ) {
    if (username !== null) {
      alert("Please enter a valid username that starts with a letter");
    }
    username = prompt(
      `Welcome to ${choices.join(", ")} Please enter your name to start playing`
    );
  }
  return username;
}

function getPlayerChoice() {
  let getPlayerChoice = prompt(`Enter your choice ${choices.join(", ")}:`);

  while (
    getPlayerChoice === null ||
    getPlayerChoice.trim() === "" ||
    !choices.includes(getPlayerChoice.toLowerCase())
  ) {
    if (getPlayerChoice !== null) {
      alert(`Please enter a valid choice, either ${choices.join(", ")}`);
    }
    getPlayerChoice = prompt(`Enter your choice ${choices.join(", ")}:`);
  }

  return getPlayerChoice;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playersChoice, computerChoice, username) {
  if (playersChoice === computerChoice) {
    return ["tie", `You tied with the computer, unlucky!`];
  }

  if (
    (playersChoice === "rock" && computerChoice === "scissors") ||
    (playersChoice === "scissors" && computerChoice === "paper") ||
    (playersChoice === "paper" && computerChoice === "rock") ||
    (playersChoice === "dynamite" && computerChoice === "rock") ||
    computerChoice === "scissors" ||
    computerChoice === "paper"
  ) {
    return ["win", `Congratulations ${username}, you beat the computer!`];
  } else {
    return ["lose", `Bad luck ${username}, the computer beat you!`];
  }
}

function playRPSWithPrompt(getName) {
  const username = getName();
  let playAgain = true;

  while (playAgain) {
    let playersChoice = getPlayerChoice().toLowerCase();

    const computerChoice = getComputerChoice();
    const [result, message] = determineWinner(
      playersChoice,
      computerChoice,
      username
    );

    adjustScore(result);

    const resultMessage =
      `Players choice: ${playersChoice}\nComputers choice: ${computerChoice}\n` +
      `${message}\n` +
      `Your score is: ${score}`;
    alert(resultMessage);
    playAgain = confirm("Do you want to play again?");
  }

  if (!playAgain) {
    alert(
      `Thank you for playing ${choices.join(
        ", "
      )}, ${username}\nYour final score was ${score}`
    );
  }
}

playRPSWithPrompt(getName);
