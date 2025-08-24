
document.addEventListener("DOMContentLoaded", function () {
  const tagline = document.querySelector(".tagline");
  const text = "Passionate about designing and developing intelligent systems, innovative AI solutions, and dynamic web applications.";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      tagline.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(typeEffect, 40); 
    }
  }

  tagline.textContent = ""; 
  typeEffect();
});


const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 15px #6a11cb";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "none";
  });
});

document.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const speed = 0.009; 
  if (window.innerWidth > 768) {
    document.querySelector(".parallax").style.transform = `translateY(${-(scrolled * speed)}px)`;
  }
});
