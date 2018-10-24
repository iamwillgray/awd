/* function showMenu() {
 var openMenu = document.getElementsByClassName("desktopNav");
 console.log();
 openMenu.style.visibility="visible";

}

*/


function showMenu() {
 var openMenu = document.getElementById("desktopNav");
 console.log();
 openMenu.style.display= "block";
}

function navOverlay() {
 var menuOverlay = document.getElementById("topNav");
 console.log();
 menuOverlay.style.position= "static";
 menuOverlay.style.height= "auto";
}


/* var mobileNav = true;

function showMenu() {
    if (mobile) {
      openMenu.style.display= "block";
        mobileNav = false;
    } else {
      openMenu.style.display= "none";
        mobileNav = true;
    }
} */
