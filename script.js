let gameNumber = Math.floor(Math.random() * 100) + 1;
do {
    let n= prompt("Guess the number between 1 to 100");
    if (n === gameNumber) {
        break;
    }
    if (n < gameNumber) {
     alert("Too Low. Try again!")
    } else {
     alert("Too High. Try again!")
    }
} while (n !== gameNumber);
alert("Congratualtions! You guessed the correct number.");