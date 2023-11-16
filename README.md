# Campo Minato

Creo una fuzione che prenda in input un valore (difficoltà selezionata) e che crei un array con 16 numeri casuali che vanno da 1 al valore inserito. Inoltre la funzione dovrà pushare nell'array il numero solo se non già presente.

Aggiungiamo al click sulle celle una verifica tramite `contain` che il valore della cella non sia presente nell'array di bombe.
Se presente, aggiungiamo alla cella una classe per il colore rosso e terminiamo l'esecuzione restituendo il punteggio.
Se il numero non è contenuto :
- si verifica che non sia presente in un altro array (inizialmente vuoto) contenente le celle già cliccate
- se non è presente, la cella si colora di azzurro e si incrementa una variabile punteggio 

Se il punteggio raggiunge il numero di celle - 16 allora l'utente ha vinto e la partita termina.