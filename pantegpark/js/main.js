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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown() {
    document.getElementById("navDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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


/* // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementsByClassName("ppLogo").style.top = "0";
  } else {
    document.getElementsByClassName("ppLogo").style.top = "-200px";
  }
} */
