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

document.addEventListener("DOMContentLoaded", function () {

  const servicesToggle =
    document.getElementById("servicesToggle");

  const additionalServices =
    document.getElementById("additionalServices");

  if (!servicesToggle || !additionalServices) {
    return;
  }

  servicesToggle.addEventListener("click", function () {

    const isOpen =
      additionalServices.classList.toggle("show");

    servicesToggle.classList.toggle(
      "active",
      isOpen
    );

    servicesToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    const buttonText =
      servicesToggle.querySelector("span:first-child");

    if (buttonText) {
      buttonText.textContent =
        isOpen
          ? "SHOW LESS"
          : "VIEW ALL SERVICES";
    }

  });

});
