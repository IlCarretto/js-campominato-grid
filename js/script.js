// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Collegare il bottone Play in modo compaia la griglia quando viene premuto
const grid = document.querySelector(".grid");
const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", function() {
    grid.classList.add("display");
})

// Creare gli square da inserire nella griglia in base alla difficoltà scelta dall'utente e creare il contatore di numeri
let = squareNumbers = minMaxNumber(1, 100);

let difficultySquares = 100;
if (difficultyInput.value === "medium") {
    difficultySquares = 81;
} else if (difficultyInput.value === "hard") {
    difficultySquares = 49;
} else {
    difficultySquares;
}

for (let i = 0; i < difficultySquares; i++) {
    let squares = squareGenerator(squareNumbers[i]);
    if (difficultyInput.value === "medium") {
        squareNumbers = minMaxNumber(1, 81);
    } else if (difficultyInput.value === "hard") {
        squareNumbers = minMaxNumbers(1, 49);
    } else {
        squareNumbers;
    }
    grid.append(squares);
    // Aggiungere l'evento ad ogni cella per cui si colora di azzurro ed emette il messaggio in console
    squares.addEventListener("click", function() {
        squares.classList.toggle("light-blue");
        console.log(`${squareNumbers[i]}`);
    })
}

// FUNCTIONS
// Funzione per creare minimo e massimo
function minMaxNumber (min, max) {
    let numbersArray = [];
    for (let i = min; i <= max; i++) {
        numbersArray.push(i);
    }
    return numbersArray;
}

// Funzione per creare squares con dentro i numeri
function squareGenerator (insideNumber) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = insideNumber;
    return square;
}
