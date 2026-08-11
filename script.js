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

window.addEventListener("load", function () {

  const button = document.getElementById("servicesToggle");
  const services = document.getElementById("additionalServices");

  if (!button || !services) {
    console.log("Services button or services section not found.");
    return;
  }

  button.onclick = function () {

    services.classList.toggle("show");
    button.classList.toggle("active");

    const open = services.classList.contains("show");

    button.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

    const text = button.querySelector("span:first-child");

    if (text) {
      text.textContent =
        open ? "SHOW LESS" : "VIEW ALL SERVICES";
    }
  };

});
