const menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let scrollUp = document.querySelector(".scroll-up");
menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  let links = document.querySelectorAll(".navbar a");

  links.forEach((element) => {
    element.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUp.style.right = "50px";
    scrollUp.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else {
    scrollUp.style.right = "-50px";
  }
});
