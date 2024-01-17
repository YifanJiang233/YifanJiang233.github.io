const navbar = document.querySelector(".navbar-nav");
const first_nav = navbar.querySelector(".nav-link");

if (navbar) {
  navbar.addEventListener("mouseover", (event) => {
    start_pos = first_nav.offsetLeft;
    if (event.target.classList.contains("nav-link")) {
      navbar.style.setProperty("--underline-width", `${0.9 * event.target.offsetWidth}px`);
      navbar.style.setProperty("--underline-offset-x", `${event.target.offsetLeft - start_pos + 0.05 * event.target.offsetWidth}px`);
    }
  });

  navbar.addEventListener("mouseleave", () => navbar.style.setProperty("--underline-width", "0"));
}
