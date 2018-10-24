/* function showMenu() {
 var openMenu = document.getElementsByClassName("desktopNav");
 console.log();
 openMenu.style.visibility="visible";

}

*/

/*
function showMenu() {
 var openMenu = document.getElementById("desktopNav");
 console.log();
 openMenu.style.display= "block";
}

function hideMenu() {
 var closeMenu = document.getElementById("desktopNav");
 console.log();
 closeMenu.style.display= "none";
}

function navOverlay() {
 var menuOverlay = document.getElementById("topNav");
 console.log();
 menuOverlay.style.position= "static";
 menuOverlay.style.maxHeight= "100vh";
 menuOverlay.style.height= "auto";
}
*/




function showMenu() {
    // i is finding the ID desktopNav in the HTML
    var i = document.getElementById("desktopNav");
    // this says if the showMenu function is active mainNav is present
    if (i.className === "mainNav")
    //== means if the class equal mainNav
    {
        i.className += " responsive";
    //+= the responsive css class to it, which makes the element display on click
    }

    else {
        i.className = "mainNav";
    }
    //turns the display off
}
