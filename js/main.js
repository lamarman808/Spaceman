/*----- state variables -----*/

const string = "MOZART";
let maxGuesses = 6
let userGuesses = 0
let board;
let victory = document.getElementById("winLoss");
let ltr = document.getElementById("input1");
let wrd = document.getElementById("input2");

//Body Elements
let body = document.getElementById("body");
body.style.opacity = 0;
let head = document.getElementById("head");
head.style.opacity = 0;
let torso = document.getElementById("torso");
torso.style.opacity = 0;
let lefty = document.getElementById("lefty");
lefty.style.opacity = 0;
let righty = document.getElementById("righty");
lefty.style.opacity = 0;
let leftLeg = document.getElementById("leggy");
leggy.style.opacity = 0;
let rightLeg = document.getElementById("leggo");
leggo.style.opacity = 0;


//Guess Storage
let capWord = null;
let wrongGuess = document.getElementById("fails");
let badGuess = [];

let guesses = document.getElementById("guesses");
let allGuess = [];

let rightGuess = document.getElementById("solved");
let goodGuess = [];

	/*----- cached elements  -----*/
let playArea = document.getElementById("playarea");
    
	//BUTTONS BELOW!

//Letter Entry Button!
    const button = document.getElementById("letter");
    button.addEventListener("click", function() {
        let letterspaces = playArea.querySelectorAll(".letterspace");
        let capButton = ltr.value.toUpperCase()
        if (string.indexOf(capButton) >= 0) {
            goodGuess ++;
            solved.innerHTML = goodGuess;
            
            allGuess ++;
            guesses.innerHTML = allGuess;
            
            for (let i = 0; i < string.length; i++) {
                if (capButton === string[i]) {
                    letterspaces[i].innerText =  capButton;
                    goodGuess[i] = capButton;
                    let guessedString = "";
                    letterspaces.forEach(function(space) {
                        guessedString += space.innerHTML;
                    })
                    if (guessedString === string) {
                        victory.style.opacity = 1;
                        victory.innerHTML = "Wow. It seems you actually know a little history and English Congrats!";
                        victory.style.color = 'green';
                    }
                } 
                    badGuess ++;
                    fails.innerHTML = badGuess; 
                    
            }
            
        }

        allGuess ++;
        guesses.innerHTML = allGuess;
        ltr.value = "";
        userGuesses += 1;
        checkWin();
    });

//Solution Entry Button!
    const clicker = document.getElementById("solution");
    clicker.addEventListener("click", function() {
        let letterspaces = playArea.querySelectorAll(".letterspace");
        capWord = wrd.value.toUpperCase()
        if (string === capWord) {
            victory.style.opacity = 1;
            
        } else if (string !== capWord) {
            body.style.opacity = 1;

            
        }

        allGuess = userGuesses.value;
        guesses.innerHTML = userGuesses.value;
        ltr.value = "";
        userGuesses += 1;
        checkWin();
    });

    function checkWin() {
        if (string === goodGuess && userGuesses <= maxGuesses) {
            victory.style.opacity = 1;
        } else if (userGuesses > maxGuesses && fails >= maxGuesses) {
            victory.style.opacity = 1;
            victory
            victory.innerHTML = "Sorry, Loser. You Totes LOSE!"
        }
        if (userGuesses > maxGuesses && fails >= maxGuesses) {
            victory.innerHTML = "Sorry, Loser. You Totes LOSE!";
            victory.style.color = 'red';
        }
    }



 function render() {
    for (let entry of string) {
        let div = document.createElement("div");
        div.value = entry;
        div.setAttribute("class", "letterspace");
        if (entry === " ") {
            div.innerText = " ";

        } else {
            div.innerText = '_';
        }
        
        playArea.appendChild(div);
    };
 }
render();