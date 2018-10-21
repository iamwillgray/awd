// function clickText() {
//  var textElement = document.getElementById('target');
//  console.log(textElement);
//  textElement.style.backgroundColor = 'red';
//  textElement.style.color = 'white';
//  textElement.style.padding = '20px';
//  textElement.style.marginLeft = '30px';
//  textElement.innerHTML += 'Will';
// }


function slideOut() {
  var menuOpen = document.getElementById("mobMenu");
  console.log(menuOpen);
  menuOpen.style.width="0px";
}
function slideIn() {
  var menuOpen = document.getElementById("mobMenu");
  console.log(menuOpen);
  menuOpen.style.width="320px";
}

function doSomething() {
  var addText = document.getElementById("mobMenu");
  console.log(addText);
  addText.innerHTML += 'Who\'s there?';
}
