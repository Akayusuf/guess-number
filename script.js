'use strict';
    let secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';

    let score = 20;
    let highscore = 0;
 
    function displayMessage(message){
        document.querySelector('.message').textContent = message;
    } 

        document.querySelector('.check').addEventListener('click', function(){
        const guess = Number(document.querySelector('.guess',) .value);
        console.log(guess, typeof guess);

        if (!guess){
            displayMessage('No guess'); 
        }else if (guess === secretNumber){
            displayMessage('correct number');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber;

            if(score > highscore){
                highscore=score;
                document.querySelector('.highscore').textContent = highscore;
            }


    }else if (guess !== secretNumber){
        if(score > 1){
            displayMessage(
            guess > secretNumber ? 'too high' : 'too low'
            );
            score--
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost');
            document.querySelector('.score').textContent = 0;
        }
    }
    });  