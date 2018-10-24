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
    var x = document.getElementById("desktopNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}
