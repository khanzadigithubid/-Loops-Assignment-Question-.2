//2. Guessing Game (Using while loop )

//Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.
//Steps to Follow:
//1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
//2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
//3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
//4. Simulate user guesses: Use an array to store a series of predefined guesses.
//5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.
//6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.

// 1. Set a maximum value
let maxValue: number = 100;

// 2. Generate a random number
let randomNumber: number = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random number (for development purposes): ${randomNumber}`); 

// 3. Track the guess status
let isCorrectGuessed: boolean = false;

// 4. Simulate user guesses
let guesses: number[] = [45, 78, 22, 89, 50, 13, 95, 6, 62, 100];

// 5. Iterate over guesses
let index: number = 0;
while (!isCorrectGuessed && index < guesses.length) {
  let currentGuess: number = guesses[index];
  console.log(`Guess #${index + 1}: ${currentGuess}`);

  // 6. Check the user's guess
  if (currentGuess === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
    isCorrectGuessed = true;
  } else if (currentGuess > randomNumber) {
    console.log("Your guess is too high.");
  } else {
    console.log("Your guess is too low. Try again!");
  }
  index++;
}
if (!isCorrectGuessed) {
  console.log(`Sorry, you didn't guess the correct number: The number was: ${randomNumber}`);
}