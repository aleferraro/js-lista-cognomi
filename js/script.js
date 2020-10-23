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
  olEl.innerHTML += '<li>' + surnameList[i] + '</li>';

  if (surnameList[i] == userSurname){
    userPosition = i;
  }
}

document.getElementById('userPosition').innerHTML += (userPosition+1);
