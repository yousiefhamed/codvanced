window.addEventListener("load", () => {
  //get all users http://localhost:8073/users/getallusers
  let users = [];
  fetch("https://codvancedbackend-production.up.railway.app/users/getallusers")
    .then((res) => res.json())
    .then((data) => {
      users = data;
    })
    .catch((error) => console.log(error));

  let registration = document.getElementById("registration");
  registration.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    if (users.find((x) => x.email == email)) {
      alert("you're already hava an account ......... try to sign in :)");
      document.location.href = "login.html";
    } else {
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let password = document.getElementById("password").value;
      let countryValue;
      let genderValue;

      let country = document.getElementById("country");
      for (let i = 0; i < country.length; i++) {
        if (country[i].selected) {
          countryValue = country[i].value;
        }
      }

      let gender = document.getElementsByName("gender");
      for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
          genderValue = gender[i].value;
        }
      }

      //add user
      let adduser = {
        email: email,
        password: password,
        gender: genderValue,
        country: countryValue,
        track_res: null,
        test_id: null,
        lastName: lastName,
        firstName: firstName,
      };
      localStorage.clear();
      localStorage.setItem("profileData", JSON.stringify(adduser));
      fetch(
        "https://codvancedbackend-production.up.railway.app/users/adduser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(adduser),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      document.location.href = "profile.html";
    }
  });
});
