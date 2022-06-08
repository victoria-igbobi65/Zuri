const recurse = (range = 0) => {
    console.log(`\n--------- STAGE ${range - 1} ------- \n`)
  
    // generate a random number between the range for each stages 
    computerNumber = Math.floor((Math.random() * range) + 1)
    userGuess = Number(prompt(`Enter number between 1 and ${range}`))
  
    //A try block that validates user input against current range
    while (true) {
      try {
  
        // An if statement to check if user guess falls within the range
        if (userGuess < 1 || userGuess > range) throw new Error("wrong input!!!")
        else break
      }
      catch (e) {
        console.log("-------------------------  --------------------------\n")
        userGuess = Number(prompt(`Number is out of range!!! Enter number between 1 and ${range}`))
      }
    }
  
    // base case
    //Checking if user guess is incorrect
    if (userGuess != computerNumber) {
      console.log(`\n-------------------------  --------------------------\nWrong answer ❌!!! The correct answer is ${computerNumber}\n\nGame Over!!! ${username[0].toUpperCase() + username.slice(1)} you scored ${range - 2} out of the ${range - 1} stages\n\n-------------------------  --------------------------`)
      return
    }
    
    // if user guess is correct call the recurse function
    console.log("\n--------------> Awesome 👍! You guessed correctly <-------------")
    recurse(range + 1)
  }
  
  // A Guessing game program Using recursion
  const username = prompt('Enter Username ')
  let range = 2;
  while (true) {
    
    // calling and implementing the recurse function
    recurse(range)
  
    // prompting user to continue game or quit game
    continueGame = prompt('Do you want to continue (y/n) ?? ').toLowerCase()
  
    // Try block that validates user input
    while (true) {
      try {
        if (continueGame === 'n' || continueGame === 'y') break
        else throw new Error('Invalid input!')
      }
      catch (e) {
        continueGame = prompt('\nInvalid input!! Do you want to continue (y/n) ?? ').toLowerCase()
      }
    }
  
    // A condition that continues the game or end it finally
    if (continueGame === 'y') {
      continue;
    }
    else {
      console.log("\n--------------> EXITING PROGRAM, BYE 🖐️!!! <-------------")
      break
    }
  }
  
