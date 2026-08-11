/* =====================================================
   2GOSPOTLESS WEBSITE FUNCTIONALITY

   You normally DON'T need to edit this file.
===================================================== */


// =====================================================
// MOBILE MENU
// =====================================================

const menuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

  mobileMenu.classList.toggle("open");

});


// Close mobile menu after clicking a link

const mobileLinks =
  document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileMenu.classList.remove("open");

  });

});


// =====================================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================================

document.getElementById("year").textContent =
  new Date().getFullYear();
