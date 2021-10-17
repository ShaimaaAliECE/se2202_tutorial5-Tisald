let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game


// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPlayer1 = document.querySelector("#next-lbl");
nextPlayer1.innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard

    let boxes = document.querySelectorAll("td");
    let squareBrackets = `<button id='edit-btn'>[ ]</button>`;
   
    for( let i = 0; i<boxes.length;i++){
        boxes[i].innerHTML = squareBrackets;
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let buttonClicked = event.target;

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    if(buttonClicked.innerText === "[ ]"){


        if(nextPlayer === 'X'){

        buttonClicked.innerText = "[" + nextPlayer + "]";
        nextPlayer = "O";
        buttonClicked.disabled = true;
        nextPlayer1.innerHTML = nextPlayer;
        }

        else if(nextPlayer === 'O'){
            buttonClicked.innerText = "[" + nextPlayer + "]";
            nextPlayer = "X";
            buttonClicked.disabled = true;
            nextPlayer1.innerText = nextPlayer;
        }
    
    }

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gOverLabel = document.querySelector("#game-over-lbl");
        gOverLabel.innerHTML = `<h1>Game Over</h1>`;
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let disBtnCount = 0;

    for (i in btns){
        if(btns[i].disabled === true){
            disBtnCount++;
        }
    }
        if(disBtnCount == 9){
            return true;
        }
        else{
            return false;
        }
    
   
}
