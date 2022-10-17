// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// Creare il contatore di numeri da 1 a 100
const squareNumbers = minMaxNumber(1, 100);
console.log(squareNumbers);

const grid = document.querySelector(".grid");
console.log(grid);
// Creare gli square da inserire nella griglia
for (let i = 0; i < 100; i++) {
    const squares = squareGenerator(squareNumbers[i]);
    grid.append(squares);
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
