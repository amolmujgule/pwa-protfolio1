import {  modeBtn, shareBtn,  } from "./constant.js";

modeBtn.addEventListener("click", () => {
  const h = document.querySelector("html");
  // h.removeAttribute("data-bs-theme")

  if (h.hasAttribute("data-bs-theme")) {
    h.removeAttribute("data-bs-theme");
    modeBtn.innerHTML = `<i class="bi bi-brightness-high"></i>`;
    modeBtn.classList.remove("btn-dark");
    modeBtn.classList.add("btn-light");
  } else {
    h.setAttribute("data-bs-theme", "dark");
    modeBtn.innerHTML = `<i class="bi bi-moon-stars"></i>`;
    modeBtn.classList.remove("btn-light");
    modeBtn.classList.add("btn-dark");
  }
});
shareBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title:"Awesome PWA Camera App",
      text:"Switch , Capture,Share Moments ",
      url:""
    })
  }
});
