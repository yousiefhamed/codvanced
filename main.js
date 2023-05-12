// handle displaying the main menu
let btnM = document.getElementById("main-menu");
let m = document.getElementById("main-nav");
if (window.innerWidth < 850) {
  if (m.classList.contains("nav")) {
    m.classList.remove("nav");
    m.classList.add("set-Menu");
  }
}
btnM.addEventListener("click", () => {
  if (m.classList.contains("nav")) {
    m.classList.remove("nav");
    m.classList.add("set-Menu");
  } else {
    m.classList.remove("set-Menu");
    m.classList.add("nav");
  }
});
window.onresize = () => {
  if (window.innerWidth >= 850) {
    if (!m.classList.contains("nav")) {
      m.classList.remove("set-Menu");
      m.classList.add("nav");
    }
  } else if (window.innerWidth < 850) {
    if (m.classList.contains("nav")) {
      m.classList.remove("nav");
      m.classList.add("set-Menu");
    }
  }
};

//up
let btnUp = document.getElementById("up");
window.onscroll = () => {
  if (window.scrollY >= 600) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
};
btnUp.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

//handle contact send
let btnSend = document.getElementById("btn-send");
let email = document.getElementById("email");
let textarea = document.getElementById("textarea");
btnSend.onclick = () => {
  email.value = "";
  textarea.value = "";
};
