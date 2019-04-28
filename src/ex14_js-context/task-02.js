function Hangman(word) { 
    this.errors = 6; 
    this.letters = word.split(''); 
    this.wrongLetter = []; 
    this.guessedLetters = this.letters.map(function(a) {
        return '_';
    });
    
    this.getGuessedString = function() {
        return this.guessedLetters.join('');
    };	
    
    this.getErrorsLeft = function() { 
        return this.errors; 
    };
    
    this.getWrongSymbols = function() { 
        return this.wrongLetter; 
    };
    
    this.guess = function(letter) { 
        var lt = letter.toLowerCase(); 
        var from = 0; 
        
        if (this.errors !== 0) { 
            if (this.letters.indexOf(lt, from) === -1 ) { 
                this.errors--; 
                this.wrongLetter.push(lt); 
                console.log('wrong letter, errors left ' + this.errors + ' | ' + this.wrongLetter.join(',')); 
            } else {
                while (this.letters.indexOf(lt, from) !== -1) {
                    this.guessedLetters[this.letters.indexOf(lt, from)] = lt;
                    from = this.letters.indexOf(lt, from) + 1;
                }

                if (this.guessedLetters.indexOf('_') !== -1) {
                    console.log(this.guessedLetters.join(''));
                } else {
                    console.log(this.this.guessedLetters.join('') + ' | You won!');
                }
            }
        } else { 
            console.log('You lost((('); 
        } 
        
        return this; 
    };
    
    this.getStatus = function() {
        console.log(this.guessedLetters.join('') + ' | errors left ' + this.errors);

        return this;
    };
    
    this.startAgain = function(newWord) {
        this.errors = 6; 
        this.letters = newWord.split(''); 
        this.wrongLetter = []; 
        this.guessedLetters = this.letters.map(function(a) {
            return '_';
        });
        
        return this;
    };
}

var hangman = new Hangman('webpurple');

module.exports = hangman;