/*Hashtags*/

let hashTags = [
  ["<div>"+"#Hashtag"+"</div>"],
  ["<div>"+"#Hashtag"+"</div>"],
  ["<div>"+"#Hashtag"+"</div>"],
];

for (var i = 0; i < hashTags.length; i++) {
  for (var j = 0; j < hashTags[i].length; j++) {
    document.getElementById("hashtagknapper").innerHTML += hashTags[i][j];
  }
}

// Sæt ind i html
// <div id="hashtagknapper"></div>



/*hover over knapper*/

let colors = ["#4E3B66","#DCBCFD"];

function changeColor(element, color) {
  element.style.backgroundColor = color;
}

// Sæt ind i html
// onmouseover="changeColor(this, colors[0])" onmouseout="changeColor(this, colors[1])"
//<script type="text/javascript" src="javascript/modal.js" defer></script>
