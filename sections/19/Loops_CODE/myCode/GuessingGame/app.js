let maximum = parseInt(prompt("Enter the maximum number!"));


while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess."));
let attempts = 1;

while (guess !== targetNum) {
    if (guess === 'q') break;
  attempts++;
  if (guess > targetNum) {
    guess = parseInt(prompt("Guess is high"));
  } else {
    guess = parseInt(prompt("Guess is low"));
  }
    
}

if (guess === 'q') {
    console.log('OK, You quit')
}
else {
    console.log("You win")
    console.log(
        `${targetNum} is the correct guess. It took you ${attempts} guesses.`
    );
}