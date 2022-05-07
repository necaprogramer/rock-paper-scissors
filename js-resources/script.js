/*
    The purpose of this program is for the user to be able to make a selection (either rock, paper or scissors) and play rock paper scissors against a computer. The game will keep track of games played, and once either the computer, or the user wins the fifth game the game stops, and either the user or the computer has won.

    The game, at this stage anyways, will be played inside the console of the browser, so there isn't a need for user interface quite yet.
    The user will be able to enter in string format the desired option (rock, paper or scissors).
    The desired output is to register and store user's option inside of a variable and then compare it against the computer's randomised option. If the user's option compared to the computer's results in a win, then that win will be added to the user's scoreboard, and vice-versa. The user, and the computer can play 'till the fifth win of either or, and whoever wins the fifth game is the overall winner of the game.

    Given your inputs, what are the steps necessary to return the desired output?:
        1. User is given a message, enter your option:
        2. The user must enter either rock, paper or scissors, regardless of the case (it can be upper-case, lower-case, or mix of the both)
        3. Once the user has entered his option it is stored in a string variable with the name userOption
        4. Computer's option will be randomised between rock, paper or scissors with the help of randomised number (eg. if random number is 1 then the computer's choice equals to rock, 2 equals to paper, and 3 equals to scissors)
        5. The options between the user and the computer will be compared:
            - if user's option is rock, and computer's option is paper - computer wins
            - if user's option is paper, and computer's option is scissors - computer wins
            - if user's option is scissors, and computer's option is rock - computer wins
            - if the options between the user and the computer are the same - it's a draw
            - else - user wins
        6. If the user wins then his win is stored inside of userScore integer variable
        7. If the computer wins then its win is stored inside of computerScore integer variable
        8. The number of games is increased with each game played
        9. Once userScore, or computerScore reaches five, the game is ended
*/


//console.log(userOption);

let draw = 0;
let userWon = 0;
let computerWon = 0;

let computerOption = generationOfComputerOption();
console.log(computerOption);

let winnersCicle = whoWon(userOption, computerOption);
console.log(winnersCicle);

function generationOfUserOption(){
    let userOption = prompt('You\'re weapon of choice?');
    userOption.toLowerCase();
    if((userOption != 'rock') && (userOption != 'paper') && (userOption != 'scissors')){
        alert('You didn\'t choose a valid weapon! Fear thee, thou I might smight thee!');
        return false;
    }else{
        return true;
    }
}

function generationOfComputerOption(){
    let option = Math.floor((Math.random() * 11));
    //console.log(option);
    if(option <= 3){
        let weaponIsRock = 'rock';
        return weaponIsRock;
    }else if(option <= 6){
        let weaponIsPaper = 'paper';
        return weaponIsPaper;
    }else{
        let weaponIsScissors = 'scissors';
        return weaponIsScissors;
    }
}

function whoWon(uOption, cOption){
    if(uOption == cOption){
        return draw += 1;
    }else if((uOption == 'rock') && (cOption == 'paper')){
        return computerWon += 1;
    }else if((uOption == 'paper') && (cOption == 'scissors')){
        return computerWon += 1;
    }else if((uOption == 'scissors') && (cOption == 'rock')){
        return computerWon += 1;
    }else if(uOption == false){
        return draw += 1;
    }else{
        return userWon += 1;
    }
}

function game(){
    while((userWon < 5) && (computerWon < 5)){
        let userOption = generationOfUserOption();
        
        let computerOption = generationOfComputerOption();

        whoWon(userOption, computerOption);
    }
    if(userWon == 5){
        alert('Congradulations! You are truly mighty user!');
    }else if(computerOption == 5){
        alert('Huh, did you really think you could beat a computer!? MUHAHAHAHA!');
    }
}