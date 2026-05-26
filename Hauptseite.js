/* ==============================
   SMOOTH SCROLL NAVIGATION
   ============================== */

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


/* ==============================
   GALLERY SLIDER
   ============================== */

const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

if (slider && next && prev) {

  next.addEventListener("click", () => {
    slider.scrollLeft += 450;
  });

  prev.addEventListener("click", () => {
    slider.scrollLeft -= 450;
  });

}