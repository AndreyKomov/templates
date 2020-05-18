const LEFTBTN = document.querySelector(".left");
const RIGHTBTN = document.querySelector(".right");
const RIGHTBTNSECOND = document.querySelector(".right_second");
const LEFTBTNSECOND = document.querySelector(".left_second");

debugger
LEFTBTN.addEventListener("click", function() {
  document.querySelectorAll(".hidden").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".first").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".left").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".right").forEach(el=>el.classList.add("hidden"));
});

RIGHTBTN.addEventListener("click", function() {
  document.querySelectorAll(".hidden").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".first").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".left").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".right").forEach(el=>el.classList.add("hidden"));
});

RIGHTBTNSECOND.addEventListener("click", function () {
  document.querySelectorAll(".first").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".left").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".right").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".second").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".left_second").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".right_second").forEach(el=>el.classList.add("hidden"));
});

LEFTBTNSECOND.addEventListener("click", function() {
  document.querySelectorAll(".first").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".left").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".right").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".second").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".left_second").forEach(el=>el.classList.add("hidden"));
  document.querySelectorAll(".right_second").forEach(el=>el.classList.add("hidden"));
})