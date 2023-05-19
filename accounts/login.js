window.addEventListener("load", () => {
  //get all users http://localhost:8073/users/getallusers
  let users = [];
  fetch("https://codvancedbackend-production.up.railway.app/users/getallusers")
    .then((res) => res.json())
    .then((data) => {
      users = data;
    })
    .catch((error) => console.log(error));

  let sign = document.getElementById("sign");
  let noOfTries = 0;
  sign.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password");
    passwordValue = password.value;
    if (users.find((x) => x.email == email)) {
      if (users.find((x) => x.password == passwordValue)) {
        let adduser = users.find((x) => x.email == email);
        localStorage.setItem("profileData", JSON.stringify(adduser));
        if (adduser.track_res == null) {
          if (localStorage.getItem("result") != null) {
            adduser.track_res = localStorage.getItem("result");
            //update user
            let id = adduser.id;
            let user = {
              email: adduser.email,
              password: adduser.password,
              gender: adduser.gender,
              country: adduser.country,
              track_res: adduser.track_res,
              test_id: null,
              lastName: adduser.lastName,
              firstName: adduser.firstName,
            };
            fetch(
              "https://codvancedbackend-production.up.railway.app/users/updateuser/" +
                id,
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
          }
        }
        document.location.href = "profile.html";
      } else {
        noOfTries++;
        if (noOfTries <= 3) {
          password.value = "password is incorrect";
          password.type = "text";
          password.style.color = "red";
          password.onfocus = () => {
            password.type = "password";
            password.style.color = "black";
            password.value = "";
          };
        } else {
          alert(
            'you have entered wrong password 3 times. click "forgot the password?"'
          );
          document.location.href = "resetPassword.html";
        }
      }
    } else {
      alert("you're not registered yet, please register now :)");
      document.location.href = "register.html";
    }
  });
  document.getElementById("resetPassword").addEventListener("click", () => {
    document.location.href = "resetPassword.html";
  });
});
