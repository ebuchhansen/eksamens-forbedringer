let hashTags = [
  ["<div>"+"#Projetk 10"+"</div>"],
  ["<div>"+"#Projekt 4"+"</div>"],
  ["<div>"+"#Designere"+"</div>"],
];

for (var i = 0; i < hashTags.length; i++) {
  for (var j = 0; j < hashTags[i].length; j++) {
    document.getElementById("hashtagknapper").innerHTML += hashTags[i][j];
  }
}

// Sæt ind i html
// <div id="hashtagknapper"></div>
