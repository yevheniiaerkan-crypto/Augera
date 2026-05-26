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


/* SLIDER */

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


/* LIGHT / DARK MODE */

if (window.matchMedia("(prefers-color-scheme: light)").matches) {

  document.body.classList.add("light-mode");

}