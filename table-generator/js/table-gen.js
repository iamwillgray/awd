var request = new XMLHttpRequest();
// set request up
request.open('GET', 'data.csv', true);
// what to do when it loads
request.onload = function () {
  // check if it has loaded properly
  if (request.status >= 200 && request.status < 400) {
    parseTxt(request.responseText)
  } else {
    // if load error ie from the server
    console.log("We reached our target server, but it returned an error");
  }
};
// if request error ie cant reach server
request.onerror = function () {
  console.log("There was a connection error of some sort");
};
// send request
request.send();

function parseTxt(text) {
  var rows = text.split('\n');  // each line is separated ny a cr
  console.log(rows.length)
  // write header from first row
  var table = "<thead><tr>"
  var cols = rows[0].split(','); // each row is separated by a ,
  for (var i = 0; i < cols.length; i++) {
    console.log(cols[i])
    table += "<th>" + cols[i] + "</th>"
  }

  // create bulk of table
  table += "</tr></thead><tbody>"
  for (var i = 1; i < rows.length; i++) {
    table += "<tr>"
    cols = rows[i].split(',');
    for (var j = 0; j < cols.length; j++) {
      table += "<td>" + cols[j] + "</td>"
    }
    table += "</tr>"
  }
  table += "<tbody>"
  // add the inner table to the table
  document.getElementById("testTable").innerHTML = table;
}
document.addEventListener('DOMContentLoaded', function() {
   // your code here

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

}, false);
