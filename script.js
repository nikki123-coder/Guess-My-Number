'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/


let secretNumber= Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//When there is no input

    if(!guess) {
       // document.querySelector('.message').textContent =  '🚫 No Number!';
    displayMessage( '🚫 No Number!');
    }

   // When player wins
    else if(guess === secretNumber)
    {

       // document.querySelector('.message').textContent = '🎉 Correct Number!';
       displayMessage('🎉 Correct Number!');
       document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('body').style.background= 'linear-gradient(150deg, #60b347,  #080808)';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }

//When Guess is wrong
else if(guess !== secretNumber){
    if(score > 1){
            
        //document.querySelector('.message').textContent =  guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        }  
        else{
           // document.querySelector('.message').textContent = '🥺 You Lost The GAME!';   
           displayMessage(' 🥺 You lost the game!');
           document.querySelector('.score').textContent = 0;
           document.querySelector('body').style.background= 'linear-gradient(150deg, #470101 , #2e0e0a )';
          

        }
        
    }
/*
// When guess is too high

    else if(guess> secretNumber){
        if(score > 1){
            
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
        }  
        else{
            document.querySelector('.message').textContent = '🥺 You Lost The GAME!';   
            document.querySelector('.score').textContent = 0;
        }
        
    }

// When guess is too low

    else if(guess< secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '🥺 You Lost The GAME!';   
            document.querySelector('.score').textContent = 0;
        }   
    }
    //we have to define  number*/

});
document.querySelector('.again').addEventListener('click', function() {
     secretNumber= Math.trunc(Math.random() * 20)+ 1;
     score = 20;
     //document.querySelector('.message').textContent = '⌛ Start guessing...';
    displayMessage('⌛ Start guessing...');
     document.querySelector('.score').textContent = score;  
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = ' ';
     document.querySelector('body').style.background= 'linear-gradient(150deg, #080808 , #2b0a2e )';
    document.querySelector('.number').style.width = '15rem';

});