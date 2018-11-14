// Highlight Panteg Park in tables
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "Panteg Park") {
        cells[i].style.fontWeight = "bold";
        cells[i].style.fontFamily = "Poppins";
        cells[i].style.color = "#691C2E";
        cells[i].style.backgroundImage = "linear-gradient(270deg, rgba(255,250,238,0) 0%, #FFF3D8 100%)";
      }
}
