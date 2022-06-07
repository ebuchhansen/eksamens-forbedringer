let kollegaListe = [
  ["<div class='kollegaer-liste'> <img src='img/palle-img.jpg'> <p>Palle Henriksen</p><p>Programmør</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
  ["<div class='kollegaer-liste'> <img src='img/kollega-img.jpg'> <p>Sybil Crawley</p><p>Projekt-manager</p> </div>"],
];

// loop the outer array
for (let i = 0; i < kollegaListe.length; i++) {
    // loop the inner array
    for (let j = 0; j < kollegaListe[i].length; j++) {
      if (j==1){
        document.getElementById("kollega-liste").innerHTML += "<img src='" + kollegaListe[i][j] + "'>";
      } else {
        document.getElementById("kollega-liste").innerHTML += kollegaListe[i][j];
      }
    }
}

