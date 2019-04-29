function Hangman(word) { 
    var lifes;
    var letters;
    var wrongLetter;
    var guessedLetters;

    function initGame() {
        lifes = 6; 
        letters = word.split(''); 
        wrongLetter = []; 
        guessedLetters = letters.map(function(a) {
            return '_';
        });
    };

    initGame();
    
    this.getGuessedString = function() {
        return guessedLetters.join('');
    };	
    
    this.getErrorsLeft = function() { 
        return lifes; 
    };
    
    this.getWrongSymbols = function() { 
        return wrongLetter; 
    };
    
    this.guess = function(letter) { 
        var lt = letter.toLowerCase(); 
        var from = 0; 
        
        if (lifes !== 0) { 
            if (letters.indexOf(lt, from) === -1 ) { 
                lifes--; 
                wrongLetter.push(lt); 
                console.log('wrong letter, errors left ' + lifes + ' | ' + wrongLetter.join(',')); 
            } else {
                while (letters.indexOf(lt, from) !== -1) {
                    guessedLetters[letters.indexOf(lt, from)] = lt;
                    from = letters.indexOf(lt, from) + 1;
                }

                if (guessedLetters.indexOf('_') !== -1) {
                    console.log(guessedLetters.join(''));
                } else {
                    console.log(guessedLetters.join('') + ' | You won!');
                }
            }
        } else { 
            console.log('You lost((('); 
        } 
        
        return this; 
    };
    
    this.getStatus = function() {
        console.log(guessedLetters.join('') + ' | errors left ' + lifes);

        return this;
    };
    
    this.startAgain = function() {
        initGame();
        
        return this;
    };
}

var hangman = new Hangman('webpurple');

module.exports = hangman;