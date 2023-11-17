'use strict';

// Function 

function myCreateDomElement(tag, className, content) { // funzione che crea un elemento html con contenuto

    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerHTML = content;

    return newElement;
}

function createNcells(htmlElement, num, className) { // funzione che crea n elementi cella e li appende a un elemento dato come valore di input

    for (let i = 1; i <= num; i++) {
        const cell = myCreateDomElement('div', className, i);
        htmlElement.append(cell);
        cell.addEventListener('click', function () { // aggiunge evento click sulle celle
            if (!gameOver) {
                if (valoriBombe.includes(parseInt(cell.innerHTML))) {
                    console.log('sono una bomba');
                    cell.classList.add('red');
                    gameOver = true;
                }

                else if (!alreadyClicked.includes(parseInt(cell.innerHTML))) {
                    alreadyClicked.push(parseInt(cell.innerHTML));
                    clicked(cell, 'yellow');
                    contatore++;
                }

                punteggioUtente.classList.remove('inactive');
                punteggioUtente.textContent = `Il tuo punteggio è: ${contatore}`;

                if (contatore === (num - 16)) {
                    board.classList.add('inactive');
                    infoUtente.classList.remove('inactive');
                    infoUtente.innerText = `Hai vinto con un punteggio di: ${contatore}`;
                    punteggioUtente.classList.add('inactive');
                }

            }
        })
    }
}

function clicked(htmlElement, tag) {  // funzione che aggiunge una classe e stampa il contenuto di un elemento
    htmlElement.classList.add(tag);
    console.log(htmlElement.innerHTML);
}

function createByDifficulty(difficulty) {  // funzione che richiama ceateNcells e a seconda della difficoltà inserità ne stampa un numero determinato
    if (difficulty === 'Easy') {
        createNcells(board, 100, 'cell-10');
        randomArray(100);
        valoriBombe = randomArray(100);
        console.log(valoriBombe);
    }
    else if (difficulty === 'Normal') {
        createNcells(board, 81, 'cell-9');
        randomArray(81);
        valoriBombe = randomArray(81);
        console.log(valoriBombe);
    }
    else if (difficulty === 'Hard') {
        createNcells(board, 49, 'cell-7');
        randomArray(49);
        valoriBombe = randomArray(49);
        console.log(valoriBombe);
    }
}

function campoMinato() {
    if (!state) { // se è falso rimuove gli elementi del dom e lo imposta a vero per un reset 
        board.remove();
        state = true;
        gameOver = false;
        contatore = 0;
        alreadyClicked = [];
    }

    if (state) { // crea e aggiunge gli elementi al dom e imposta state a false per un successivo click

        const select = document.getElementById('difficulty').value;
        board = myCreateDomElement('div', 'board', '')
        boardContainer.append(board);
        createByDifficulty(select);
        infoUtente.classList.add('inactive');

        state = false;
    }
}

function randomArray(difficulty) { // funzione che restituisce un array di numeri casuali diversi fino a difficulty
    const arrayCasuale = [];
    while (arrayCasuale.length < numeroBombe) {
        const arrayElement = Math.floor(Math.random() * difficulty + 1);
        if (!arrayCasuale.includes(arrayElement)) {
            arrayCasuale.push(arrayElement);
        }
    }
    return arrayCasuale;
}



// end function

const numeroBombe = 16;
const startButton = document.getElementById('start'); // variabile bottone
const boardContainer = document.querySelector('.board-container'); // variabile board container
let state = true; // variabile di stato
let board;
const infoUtente = document.getElementById('info'); // h2 da nascondere al click
let valoriBombe;
let alreadyClicked = []; // array dove inserire celle già cliccate
let contatore = 0;  // contatore per il punteggio
const punteggioUtente = document.getElementById('punteggio');
let gameOver = false;
let winner = false;

startButton.addEventListener('click', campoMinato);

