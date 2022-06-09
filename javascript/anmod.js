/*Hover over knapper*/

let colors = ["#4E3B66","#DCBCFD"];

function changeColor(element, color) {
  element.style.backgroundColor = color;
}



/*anmod om abonnement*/

function myFunction() {
  let navn = document.getElementById('navn');
  let defaultNavn = navn.defaultValue;
  let currentNavn = navn.value;

  let email = document.getElementById('beskrivelse');
  let defaultBeskrivelse = beskrivelse.defaultValue;
  let currentBeskrivelse = beskrivelse.value;

  let emne = document.getElementById('email');
  let defaultEmail = email.defaultValue;
  let currentEmail = email.value;

  let besked = document.getElementById('password');
  let defaultPassword = password.defaultValue;
  let currentPassword = password.value;

  let pris = document.getElementById('pris');
  let defaultPris = pris.defaultValue;
  let currentPris = pris.value;

  let kort = document.getElementById('kortnr');
  let defaultKort = kort.defaultValue;
  let currentKort = kort.value;


  if (defaultNavn == currentNavn || defaultBeskrivelse == currentBeskrivelse || defaultEmail == currentEmail || defaultPassword == currentPassword || defaultPris == currentPris || defaultKort == currentKort) {
    alert('Udfyld alt!');
  }


  else {
    alert('Din anmodning om at oprette nyt abonnement er sendt.');
  }
}




/*Onfocus*/

function myOnfocus1() {
  let onfocus = document.getElementById('navn');
  onfocus.value = "";
}

function myOnfocus2() {
  let onfocus = document.getElementById('beskrivelse');
  onfocus.value = "";
}

function myOnfocus3() {
  let onfocus = document.getElementById('email');
  onfocus.value = "";
}

function myOnfocus4() {
  let onfocus = document.getElementById('password');
  onfocus.value = "";
}

function myOnfocus5() {
  let onfocus = document.getElementById('pris');
  onfocus.value = "";
}

function myOnfocus6() {
  let onfocus = document.getElementById('kortnr');
  onfocus.value = "";
}




/*Onblur*/

function myOnblur1() {
  let onblur = document.getElementById('navn');

  if (onblur.value == "" ) {
    onblur.value = "Angiv navn...";

  }
}

function myOnblur2() {
  let onblur = document.getElementById('beskrivelse');

  if (onblur.value == "" ) {
    onblur.value = "Beskrivelse...";

  }
}

function myOnblur3() {
  let onblur = document.getElementById('email');

  if (onblur.value == "" ) {
    onblur.value = "E-mail...";

  }
}

function myOnblur4() {
  let onblur = document.getElementById('password');

  if (onblur.value == "" ) {
    onblur.value = "Password...";

  }
}

function myOnblur5() {
  let onblur = document.getElementById('pris');

  if (onblur.value == "" ) {
    onblur.value = "Pris...";

  }
}

function myOnblur6() {
  let onblur = document.getElementById('kortnr');

  if (onblur.value == "" ) {
    onblur.value = "Kort nr...";

  }
}


/*Hashtags*/

let hashTags = [
  ["<div>"+"#Projekt 7"+"</div>"],
  ["<div>"+"#Designere"+"</div>"],
  ["<div>"+"#Projektledere"+"</div>"],
];

for (var i = 0; i < hashTags.length; i++) {
  for (var j = 0; j < hashTags[i].length; j++) {
    document.getElementById("hashtagknapper").innerHTML += hashTags[i][j];
  }
}
