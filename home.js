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
let contactForm = document.getElementById("contact-form");
let email = document.getElementById("email");
let message = document.getElementById("message");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    email.value != "" &&
    message.value != "" &&
    email.value != "enter a valid email" &&
    message.value != "enter a valid message"
  ) {
    console.log(email.value);
    console.log(message.value);
    email.value = "";
    message.value = "";
  } else if (email.value == "" && message.value == "") {
    email.value = "enter a valid email";
    email.style.color = "red";
    message.value = "enter a valid message";
    message.style.color = "red";
    email.onfocus = () => {
      email.value = "";
      email.style.color = "#000";
    };
    message.onfocus = () => {
      message.value = "";
      message.style.color = "#000";
    };
  } else if (email.value == "") {
    email.value = "enter a valid email";
    email.style.color = "red";
    email.onfocus = () => {
      email.value = "";
      email.style.color = "#000";
    };
  } else if (message.value == "") {
    message.value = "enter a valid message";
    message.style.color = "red";
    message.onfocus = () => {
      message.value = "";
      message.style.color = "#000";
    };
  }
});

let tail = document.querySelector(".tail");
if (localStorage.getItem("profileData") != null) {
  let start = document.getElementById("startBtn");
  start.addEventListener("click", () => {
    document.location.href = "accounts/profile.html";
  });
  tail.innerHTML = `
    <a href="#" id="logOut" class="btn">Log out</a>
    <a href="accounts/profile.html" class="btn"><i class="fa-solid fa-user"></i></a>
  `;
  let logOut = document.getElementById("logOut");
  logOut.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
  });
  let tracks = document.querySelectorAll(".track-content");
  tracks.forEach((track) => {
    console.log(track.childNodes[1].textContent);
    if (track.childNodes[1].textContent == "FrontEnd Development") {
      track.innerHTML +=
        "<a href='Questions/result/front-track/front.html' target='_blank' class='second-type-ofBtn'>See more....</a>";
    } else if (track.childNodes[1].textContent == "BackEnd Development") {
      track.innerHTML +=
        "<a href='Questions/result/back-track/back.html' target='_blank' class='second-type-ofBtn'>See more....</a>";
    } else if (track.childNodes[1].textContent == "Android Development") {
      track.innerHTML +=
        "<a href='Questions/result/mobile-track/mobile.html' target='_blank' class='second-type-ofBtn'>See more....</a>";
    } else if (track.childNodes[1].textContent == "Data Science") {
      track.innerHTML +=
        "<a href='Questions/result/datascience-track/datascience.html' target='_blank' class='second-type-ofBtn'>See more....</a>";
    } else {
      track.innerHTML +=
        "<a href='Questions/questions.html' target='_blank' class='second-type-ofBtn'>See more....</a>";
    }
  });
} else {
  let start = document.getElementById("startBtn");
  start.addEventListener("click", () => {
    document.location.href = "Questions/questions.html";
  });
  tail.innerHTML = `
    <a href='accounts/register.html' class="btn">Join</a>
    <a href='accounts/login.html' class="btn">Log in</a>
  `;
  let tracks = document.querySelectorAll(".track-content");
  tracks.forEach((track) => {
    let Btn = document.createElement("button");
    track.appendChild(Btn);
    Btn.classList.add("second-type-ofBtn");
    Btn.innerHTML = "Get Started";
    Btn.onclick = () => {
      document.location.href = "Questions/questions.html";
    };
  });
}
