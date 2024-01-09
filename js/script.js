//----------------burgermenu---------------
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
//sikrer at menuknap forsvinder
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

const pil = document.querySelector(".pil");
const button = document.querySelector(".button");
const buttontext = document.querySelector(".buttontext");
const herotext = document.querySelector(".hero-text");
//const image = document.querySelectorAll("image");
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
  //tilføjer animation på tekst på forsiden
  herotext.classList.add("flyvop");
  button.classList.add("flyvop", "delay2");
  /**
  //tilføjer addeventlistener på alle img
  image.addEventListener("mousedown", clickimg);
   */
}
/** 
function clickimg() {
  console.log("clickimg");
  img.classList.add(imgclick);
}*/
