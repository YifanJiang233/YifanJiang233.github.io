const navbar = document.querySelector(".navbar-nav");
const navLinks = navbar.querySelectorAll(".nav-link");
const activeNavItem = navbar.querySelector(".nav-item.active > .nav-link");

let start_pos = navLinks[0].offsetLeft;
let active_nav_width = activeNavItem.offsetWidth;
let active_nav_offset = activeNavItem.offsetLeft;

function setUnderlineStyles(width, offset) {
  navbar.style.setProperty("--underline-width", `${0.9 * width}px`);
  navbar.style.setProperty("--underline-offset-x", `${offset - start_pos + 0.05 * width}px`);
}

function updateUnderlineStyles() {
  setUnderlineStyles(active_nav_width, active_nav_offset);
}

function handleNavbarMouseover(event) {
  if (event.target.classList.contains("nav-link")) {
    setUnderlineStyles(event.target.offsetWidth, event.target.offsetLeft);
  }
}

function handleNavbarMouseleave() {
  updateUnderlineStyles();
}

function handleWindowResize() {
  start_pos = navLinks[0].offsetLeft;
  active_nav_width = activeNavItem.offsetWidth;
  active_nav_offset = activeNavItem.offsetLeft;
  updateUnderlineStyles();
}

// Initial setup
updateUnderlineStyles();

// Event listeners
navbar.addEventListener("mouseover", handleNavbarMouseover);
navbar.addEventListener("mouseleave", handleNavbarMouseleave);
window.addEventListener("resize", handleWindowResize);