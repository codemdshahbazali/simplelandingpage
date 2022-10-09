var navbar = document.querySelector(".header");
var btn = document.querySelector(".buttonRad");
var globeWhite = document.getElementById("globe-white");
var globeGrey = document.getElementById("globe-grey");
var globeWhiteMob = document.getElementById("globe-white-mob");
var globeGreyMob = document.getElementById("globe-grey-mob");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("navOnScroll");
    btn.classList.add("buttonOnScroll");
    globeWhite.style.display = "none";
    globeWhiteMob.style.display = "none";
    globeGrey.style.display = "initial";
    globeGreyMob.style.display = "initial";
  } else {
    navbar.classList.remove("navOnScroll");
    btn.classList.remove("buttonOnScroll");
    globeWhite.style.display = "initial";
    globeWhiteMob.style.display = "initial";
    globeGrey.style.display = "none";
    globeGreyMob.style.display = "none";
  }
};
