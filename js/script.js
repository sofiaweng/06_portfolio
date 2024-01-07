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
/*const tema02 = document.querySelectorAll(".grid_1fr-2fr");
const tema03 = document.querySelector("#tema03");
const tema04 = document.querySelector("#tema04");
const tema05 = document.querySelector("#tema05");*/

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
  //tilføjer eventlistener på hero-button
  button.addEventListener("mouseover", herobutton_mouseover);
  button.addEventListener("mouseout", herobutton_mouseout);
  //tilføjer animation på tekst på forsiden
  herotext.classList.add("flyvop");
  button.classList.add("flyvop", "delay2");

  /*tilføjer animation på temaerne på portfolio
   tema02.classList.add("flyvop");*/
}
function herobutton_mouseover() {
  button.classList.add("buttonhover");
  buttontext.classList.add("hoveronp");
}
function herobutton_mouseout() {
  button.classList.remove("buttonhover");
  buttontext.classList.remove("hoveronp");
}
