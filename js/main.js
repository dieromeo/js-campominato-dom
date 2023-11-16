'use strict';

// fragment

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
            clicked(cell, 'yellow');
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
    }
    else if (difficulty === 'Normal') {
        createNcells(board, 81, 'cell-9');
    }
    else if (difficulty === 'Hard') {
        createNcells(board, 49, 'cell-7');
    }
}

function campoMinato() {
    if (!state) { // se è falso rimuove gli elementi del dom e lo imposta a vero per un reset 
        board.remove();
        state = true;
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




// end function

const startButton = document.getElementById('start'); // variabile bottone
const boardContainer = document.querySelector('.board-container'); // variabile board container
let state = true; // variabile di stato
let board;
const infoUtente = document.getElementById('info'); // h2 da nascondere al click


startButton.addEventListener('click', campoMinato);

