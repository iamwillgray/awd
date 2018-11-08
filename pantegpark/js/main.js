// Menu
function showMenu() {
    // i is finding the ID desktopNav in the HTML
    var i = document.getElementById("topNav");
    // this says if the showMenu function is active mainNav is present
    if (i.className === "navbar")
    //== means if the class equal mainNav
    {
        i.className += " responsive";
    //+= the responsive css class to it, which makes the element display on click
    }

    else {
        i.className = "navbar";
    }
    //turns the display off
}
///////////////////////////////////////////

// Dropdown
function openDropdown() {
    document.getElementById("navDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
///////////////////////////////////////////

// Scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
///////////////////////////////////////////

// Tabs JS
function openLeague(evt, leagueTable) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(leagueTable).style.display = "block";
    evt.currentTarget.className += " active";
}
///////////////////////////////////////////

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
///////////////////////////////////////////

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
///////////////////////////////////////////

// Dropdown
function openTabs() {
    document.getElementById("tabDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.tabButton')) {

    var dropdowns = document.getElementsByClassName("tab-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

///////////////////////////////////////////
