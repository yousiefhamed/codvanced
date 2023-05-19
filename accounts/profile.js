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

let tail = document.querySelector(".tail");
if (localStorage.length > 0) {
  tail.innerHTML = `
    <a href="#" id="logOut" class="btn">Log out</a>
  `;
  let logOut = document.getElementById("logOut");
  logOut.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html";
  });
}

let profileData = JSON.parse(localStorage.getItem("profileData"));
document.querySelector(
  "head title"
).innerHTML += `${profileData.firstName} ${profileData.lastName}`;
if (profileData.gender == "male") {
  let imgSrc = document.getElementById("profileImg");
  imgSrc.src = "imgs/man.png";
} else if (profileData.gender == "female") {
  let imgSrc = document.getElementById("profileImg");
  imgSrc.src = "imgs/woman.png";
}
let name = document.querySelector(".name");
name.innerHTML = `Welcome Mr.${profileData.firstName} ${profileData.lastName} <img class="happy" src="imgs/happy.gif" alt="happy">`;
let track_res = document.querySelector(".trackResult");
let track;
let roadmap;
switch (profileData.track_res) {
  case "Front-End":
    track =
      "<a href='../Questions/result/front-track/front.html' target='_blank'>Frontend Developer</a>";
    roadmap = "https://roadmap.sh/frontend";
    break;
  case "Back-End":
    track =
      "<a href='../Questions/result/back-track/back.html' target='_blank'>Backend Developer</a>";
    roadmap = "https://roadmap.sh/backend";
    break;
  case "Mobile-Development":
    track =
      "<a href='../Questions/result/mobile-track/mobile.html' target='_blank'>Mobile Developer</a>";
    roadmap = "https://roadmap.sh/android";
    break;
  case "Data-Science":
    track =
      "<a href='../Questions/result/datascience-track/datascience.html' target='_blank'>Data Scientist</a>";
    roadmap =
      "https://www.freecodecamp.org/news/data-science-learning-roadmap/";
    break;
  default:
    track =
      "<a href='../Questions/questions.html'>The Test has not taken place yet.<br>take the test now</a>";
    roadmap = "#";
    break;
}
track_res.innerHTML = track;
document.querySelector("#userData #data").innerHTML = `
  <p><b>email: </b>${profileData.email}</p>
  <p><b>gender: </b>${profileData.gender}</p>
  <p><b>country: </b>${profileData.country}</p>
`;
let links = document.querySelector("#links");
links.innerHTML = `
  <a href="${roadmap}" target="_blank">
    <i class="fa-solid fa-map-location-dot"></i> Roadmap
  </a>
  <a href="../CodVancedChat/chat.html" target="_blank">
    <i class="fa-solid fa-comments"></i> Community chat
  </a>
`;
