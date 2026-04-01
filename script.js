// let gameNumber = Math.floor(Math.random() * 100) + 1;
let gameNumber = 77; // For testing purposes, you can set a fixed number
let n= prompt("Guess the number between 1 to 100");
while (n != gameNumber) {
    if (n < gameNumber) {
     n = prompt("Too Low. Try again!")
    } else {
     n = prompt("Too High. Try again!")
    }
} 
alert("Congratualtions! You guessed the correct number.");