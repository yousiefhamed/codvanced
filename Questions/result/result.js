const open = document.getElementById("open");
const close = document.getElementById("close");
const active = document.querySelector(".active");

open.addEventListener("click", () => {
  if (open.classList.contains("fa-bars")) {
    open.classList.remove("fa-bars");
    open.classList.add("fa-chevron-up");
    active.classList.add("show-nav");
  } else if (open.classList.contains("fa-chevron-up")) {
    open.classList.remove("fa-chevron-up");
    open.classList.add("fa-bars");
    active.classList.remove("show-nav");
  }
});

const result = localStorage.getItem("result");
if (localStorage.getItem("profileData") != null) {
  let profileData = JSON.parse(localStorage.getItem("profileData"));
  if (profileData.track_res == null) {
    if (localStorage.getItem("track") == undefined) {
      profileData.track_res = result;
    }
  }
  localStorage.setItem("profileData", JSON.stringify(profileData));
  //update user
  let id = profileData.id;
  let user = {
    email: profileData.email,
    password: profileData.password,
    gender: profileData.gender,
    country: profileData.country,
    track_res: profileData.track_res,
    test_id: null,
    lastName: profileData.lastName,
    firstName: profileData.firstName,
  };
  fetch(
    "https://codvancedbackend-production.up.railway.app/users/updateuser/" + id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} else {
  alert("Please Register now to save your Test Result");
}

if (result != null) {
  const DataScience = document.getElementById("datascience");
  const MobileDev = document.getElementById("mobiledevelopment");
  const FrontEnd = document.getElementById("frontend");
  const BackEnd = document.getElementById("backend");
  switch (result) {
    case "Data-Science":
      DataScience.classList.remove("hidden");
      break;
    case "Mobile-Development":
      MobileDev.classList.remove("hidden");
      break;
    case "Front-End":
      FrontEnd.classList.remove("hidden");
      break;
    case "Back-End":
      BackEnd.classList.remove("hidden");
      break;
  }
} else {
  window.location.pathname = "../questions.html";
}
