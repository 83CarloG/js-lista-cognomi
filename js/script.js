// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
// Vi ricordo che oggi pomeriggio alle 16:30 avete il recap sui cicli e condizioni!

// Lista Cognomi
let cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
let lista = document.getElementById('lista');
// Chiedere all’utente il cognome
let nuovo_cognome = prompt("Inserisici nuovo cognome")
let contatore = 1;
// inserirlo in un array con altri cognomi
cognomi.push(nuovo_cognome);

// ordino alfabeticamente la Lista
cognomi.sort();

// stampo la lista ordinata alfebeticamente

for (var i = 0; i < cognomi.length; i++) {
   lista.innerHTML += "<li>" + contatore++ + " " + cognomi[i] + "</li>";  
}
