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
const boks = document.querySelectorAll(".boks");
const tema = document.querySelectorAll(".tema");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
  //tilføjer eventlistener på hero-button
  button.addEventListener("mouseover", herobutton_mouseover);
  button.addEventListener("mouseout", herobutton_mouseout);
  /**boks.addEventListener("mouseover", temaboks_mouseover);
  boks.addEventListener("mouseout", temaboks_mouseout);
  tema.addEventListener("mouseover", temaboks_mouseover);
  tema.addEventListener("mouseout", temaboks_mouseout);*/
  //tilføjer animation på tekst på forsiden
  herotext.classList.add("flyvop");
  button.classList.add("flyvop", "delay2");
}
function herobutton_mouseover() {
  button.classList.add("buttonhover");
  buttontext.classList.add("hoveronp");
}
function herobutton_mouseout() {
  button.classList.remove("buttonhover");
  buttontext.classList.remove("hoveronp");
}
/*function temaboks_mouseover() {
  tema.classList.add("temahover");
  boks.classList.add("bokshover");
}
function temaboks_mouseout() {
  tema.classList.remove("temahover");
  boks.classList.remove("bokshover");
}*/
