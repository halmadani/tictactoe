import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */

const players = [ ];
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");
let currentPlayer = 0; // This is the index of the array of the currentplayer

const PlayerOne = new Player("John", "X");
const PlayerTwo = new Player("Betty", "O");
//Add both players to the players array
players.push(PlayerOne);
players.push(PlayerTwo);
/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */  console.log(fields);
for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    field.addEventListener('click' , function() {
        console.log("Hello");
        addSymbolToField(field)
      });  
    }     


/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetGame);


function addSymbolToField(field) {
    console.log(field);
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
        return;
    }

    /**
     * Assignment
     * Add the current player symbol to the field textContent
     * What more needs to be done here? Make a short todolist
     */

    field.textContent = players[currentPlayer].symbol;
    if (currentPlayer === 0) {
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }

}

function checkWinner() {
    let winner = false; //variable to see if someone has on

    //First horizontal check
    console.log("textContent+fields");
    if (fields[0].textContent+fields[1].textContent+fields[2].textContent === "XXX" ||
        fields[0].textContent+fields[1].textContent+fields[2].textContent === "OOO") {
            winner = true;
            //Diagonal bottom-left to top-right check
            winner = true;
        } else if (fields[3].textContent+fields[4].textContent+fields[5].textContent === "XXX" ||
                   fields[3].textContent+fields[4].textContent+fields[5].textContent === "OOO") {
            winner = true;
            //Third horizontal check 
        }  else if (fields[6].textContent+fields[7].textContent+fields[8].textContent === "XXX" ||
                    fields[6].textContent+fields[7].textContent+fields[8].textContent === "OOO") {
            winner = true;
            //First vertical check 
        }  else if (fields[6].textContent+fields[7].textContent+fields[8].textContent === "XXX" ||
                    fields[6]+fields[7]+fields[8] === "OOO") {
            winner = true;
            //Second vertical check
        }  else if (fields[1].textContent+fields[4].textContent+fields[7].textContent === "XXX" ||
                    fields[1].textContent+fields[4].textContent+fields[7].textContent === "OOO") {
            winner = true;
            //Thrid vertical check 
        }  else if (fields[2].textContent+fields[5].textContent+fields[8].textContent === "XXX" ||
                    fields[2].textContent+fields[5].textContent+fields[8].textContent === "OOO") {
            winner = true;
             //Diagonal bottom-left to top-right check
        }  else if (fields[0].textContent+fields[4].textContent+fields[8].textContent === "XXX" ||
                    fields[0].textContent+fields[4].textContent+fields[8].textContent === "OOO") {
            winner = true;
             //Diagonal bottom-left to top-right check
        }  else if (fields[2].textContent+fields[4].textContent+fields[6].textContent === "XXX" ||
                    fields[2].textContent+fields[4].textContent+fields[6].textContent === "OOO") {
            winner = true;
        }    

        // If we do not have a winner, check if 9 fields are checked at this stage (draw)
        if (!winner) {
            let filledFields = 0;
            for (let i = 0; i < fields.length; i ++) {
                if (fields[i].textContent === "X" || fields[i].textContent == "O"){
                    filledFields++;
                }
            } 
            if (filledFields === 9) {
                popup.querySelector('.winner-text').textContent = 'we do not have a winner';
                popup.querySelector('.winner-message').textContent = 'The game is a draw. 9 filled, no winner';
                popup.classlist.remove('.hidden');

            }
        } else {
            // Else we have a winner 
            const winnerName = players[currentPlayer].name;
            popup.querySelector('.winner-text').textContent = 'we have a winner';
            popup.querySelector('.winner-message').textContent = winnerName + 'has won this round...';
            popup.classlist.remove('.hidden');
        }

    
    /**
     * Assignment
     * Add an algorithm to check if someone has three in a row
     * Try to use Internet - if not found the teacher will give you one
     * Also make sure you check for a draw (gelijkspel)
     * Again what more needs to be done, make a short todolist
     */
}

function resetGame() {
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
    location.reload();
}

console.log('File loaded');