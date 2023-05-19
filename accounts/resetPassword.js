window.addEventListener("load", () => {
  //get all users http://localhost:8073/users/getallusers
  let users = [];
  fetch("https://codvancedbackend-production.up.railway.app/users/getallusers")
    .then((res) => res.json())
    .then((data) => {
      users = data;
    })
    .catch((error) => console.log(error));

  let resetPassword = document.getElementById("resetPassword");
  resetPassword.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");

    if (users.find((x) => x.email == email)) {
      if (password.value === repeatPassword.value) {
        let userTargeted = users.find((x) => x.email == email);
        //update user
        let id = userTargeted.id;
        let user = {
          email: email,
          password: password.value,
          gender: userTargeted.gender,
          country: userTargeted.country,
          track_res: userTargeted.track_res,
          test_id: userTargeted.test_id,
          lastName: userTargeted.lastName,
          firstName: userTargeted.firstName,
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
        document.location.href = "login.html";
      } else {
        repeatPassword.value = "passwords must match";
        repeatPassword.type = "text";
        repeatPassword.style.color = "red";
        repeatPassword.onfocus = () => {
          repeatPassword.type = "Password";
          repeatPassword.style.color = "black";
          repeatPassword.value = "";
        };
      }
    } else {
      alert("you're not registered yet, please register now :)");
      document.location.href = "register.html";
    }
  });
});
