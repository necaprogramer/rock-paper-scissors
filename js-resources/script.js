/*
    The purpose of this program is for the user to be able to make a selection (either rock, paper or scissors) and play rock paper scissors against a computer. The game will keep track of games played, and once either the computer, or the user wins the fifth game the game stops, and either the user or the computer has won.

    The game, at this stage anyways, will be played inside the console of the browser, so there isn't a need for user interface quite yet.
    The user will be able to enter in string format the desired option (rock, paper or scissors).
    The desired output is to register and store user's option inside of a variable and then compare it against the computer's randomised option. If the user's option compared to the computer's results in a win, then that win will be added to the user's scoreboard, and vice-versa. The user, and the computer can play 'till the fifth win of either or, and whoever wins the fifth game is the overall winner of the game.

    Given your inputs, what are the steps necessary to return the desired output?:
    //FIRST VERSION
        // 1. User is given a message, enter your option:
        // 2. The user must enter either rock, paper or scissors, regardless of the case (it can be upper-case, lower-case, or mix of the both)
        // 3. Once the user has entered his option it is stored in a string variable with the name userOption
        // 4. Computer's option will be randomised between rock, paper or scissors with the help of randomised number (eg. if random number is 1 then the computer's choice equals to rock, 2 equals to paper, and 3 equals to scissors)
        // 5. The options between the user and the computer will be compared:
        //     - if user's option is rock, and computer's option is paper - computer wins
        //     - if user's option is paper, and computer's option is scissors - computer wins
        //     - if user's option is scissors, and computer's option is rock - computer wins
        //     - if the options between the user and the computer are the same - it's a draw
        //     - else - user wins
        // 6. If the user wins then his win is stored inside of userScore integer variable
        // 7. If the computer wins then its win is stored inside of computerScore integer variable
        // 8. The number of games is increased with each game played
        // 9. Once userScore, or computerScore reaches five, the game is ended

    //SECOND VERSION
        1. User is displayed a message -> "In order to play rock-paper-scissors you must choose one of the options below"
        2. User is presented with three buttons with icons for rock, paper and scissors
        3. Once the user click one of those buttons,  the user option will be stored in a string variable with the name userOption and the round is played
        4. Computer's option is randomised between rock, paper or scissors with the help of a randomised number
        5. The options between the user and the computer are compared
        7. If the user wins then the win is stored inside of userScore integer variable
        8. If the computer wins then te win is stored insided of the computerScore integer variable
        9. The number of games is increased with each game played
        10. Once userScore, or computerScore variable reaches integer number five, the game is ended
        11. The winner of the game is announced with a separate div
        12. If the user is the winner the div will contain a message -> "Oh thou, user you are truly mighty!"
        13. If the computer is the winner the div will contain a message -> "MUHAHAHA! You really thought you could beat a computer!?"
*/


/* SETTING NEEDED VARIABLES */
let drawCount = 0;
let userWonCount = 0;
let computerWonCount = 0;
/* SETTING NEEDED VARIABLES */

/* SETTING NEEDED HTML ELEMENTS IN DOM */
let outcome = document.getElementById('outcome');
let currentResult = document.createElement('p');
outcome.appendChild(currentResult);

let winnerAnnouncement = document.createElement('p');
outcome.appendChild(winnerAnnouncement);

let targetText = document.getElementById('text-to-appear');

let welcomeMessage = `If you think you can beat a computer, come and play a game of rock-paper-scissors`;
/* SETTING NEEDED HTML ELEMENTS IN DOM */

appereanceOfText(targetText, welcomeMessage, 50);

function appereanceOfText(textTarget, message, speed){
    let i = 0;
    let interval = setInterval(() => {
        textTarget.innerHTML += message.charAt(i);
        i++;
        if(i > message.length){
            clearInterval(interval);
        }
    }, speed)
};

playRound();

function annoucingOfWinner(){
    if(userWonCount == 5){
        outcome.removeChild(currentResult);
        let winnerText = `Oh thou, user you are truly mighty!`;
        return appereanceOfText(winnerAnnouncement, winnerText, 100);
    }else if(computerWonCount == 5){
        outcome.removeChild(currentResult);
        let winnerText = `MUHAHAHA! You really thought you could beat a computer!?`;
        return appereanceOfText(winnerAnnouncement, winnerText, 100);
    }
}

function displayOfResults(){
    currentResult.innerText = `The current score is: Draw: ${drawCount}, User: ${userWonCount}, Computer: ${computerWonCount}`;
}

function playRound(){
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');

    rock.addEventListener('click', () => {
        accessingScore('rock', generationOfComputerOption());
        displayOfResults();
        annoucingOfWinner();
    });
    paper.addEventListener('click', () => {
        accessingScore('paper', generationOfComputerOption());
        displayOfResults();
        annoucingOfWinner();
    });
    scissors.addEventListener('click', () => {
        accessingScore('scissors', generationOfComputerOption());
        displayOfResults();
        annoucingOfWinner();
    });
}

function generationOfComputerOption(){
    let optionGenerated = Math.floor((Math.random() * 11));
    if(optionGenerated <= 3){
        let weaponIsRock = 'rock';
        return weaponIsRock;
    }else if(optionGenerated <= 6){
        let weaponIsPaper = 'paper';
        return weaponIsPaper;
    }else{
        let weaponIsScissors = 'scissors';
        return weaponIsScissors;
    }
}

function accessingScore(userOption, computerOption){
    if(userOption == computerOption){
        drawCount += 1;
    }else if((userOption == 'rock') && (computerOption == 'paper')){
        computerWonCount += 1;
    }else if((userOption == 'paper') && (computerOption == 'scissors')){
        computerWonCount += 1;
    }else if((userOption == 'scissors') && (computerOption == 'rock')){
        computerWonCount += 1;
    }else if(userOption == false){
        drawCount += 1;
    }else{
        userWonCount += 1;
    }
}