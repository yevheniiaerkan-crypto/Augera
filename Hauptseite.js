const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetID = this.getAttribute("href");

    const targetSection = document.querySelector(targetID);

    if(targetSection){

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});