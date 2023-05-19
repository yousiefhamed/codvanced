//get all courses https://codvancedbackend-production.up.railway.app/courses
let courses = [];
fetch("https://codvancedbackend-production.up.railway.app/courses")
  .then((res) => res.json())
  .then((data) => {
    courses = data;
    let coursesContainer = document.querySelector(".courses-container");
    let track;
    if (coursesContainer.classList.contains("frontend")) {
      track = "frontend";
    } else if (coursesContainer.classList.contains("backend")) {
      track = "backend";
    } else if (coursesContainer.classList.contains("mobile")) {
      track = "mobile";
    } else if (coursesContainer.classList.contains("data")) {
      track = "data";
    }
    coursesContainer.innerHTML = ``;
    courses.map((x) => {
      if (x.track_name == track) {
        coursesContainer.innerHTML += `
    <div class="course-card">
      <img src="imgs/${x.course_name}.jpg" alt="${x.course_name}">
      <h2>${x.course_name}</h2>
      <h4>Course hours = ${x.course_hours} h</h4>
      <a href="${x.platform}" target="_blank" rel="noopener noreferrer">Acess the Course</a>
    </div>
    `;
      }
    });
  })
  .catch((error) => console.log(error));
