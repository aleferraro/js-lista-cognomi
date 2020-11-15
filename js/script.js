/*
Lista Cognomi
Chiedere all'utente il cognome
inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

// definisco la lista dei cognomi
var surnameList = ['Rossi', 'Verdi', 'Bianchi', 'Bianco'];

//raccolgo l'input dell'utente e lo aggiungo alla lista dei cognomi
var userSurname = prompt('Inserisci il tuo cognome');
surnameList.push(userSurname);

console.log(surnameList);

//ordino la lista in ordine alfabetico
surnameList.sort();

console.log(surnameList);

// vado a cercare l'elmento ol nell'html
var olEl = document.getElementById('surnameList');

// inserisco la lista dei cognomi nell'html e salvo in una variabile la posizione del cognome dell'utente
var userPosition = 0;

for (var i = 0; i < surnameList.length; i++) {
  //stampo a video la lista dei cognomi
  olEl.innerHTML += '<li>' + surnameList[i] + '</li>';

  if (surnameList[i] == userSurname){
    userPosition = i + 1;
  }
}

//stampo a video la posizione del cognome dell'utente
document.getElementById('userPosition').innerHTML += userPosition;
