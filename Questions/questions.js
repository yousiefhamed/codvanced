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
class NavigationUtils {
  static redirectToResultPage() {
    window.location.href = "result/result.html";
  }
}
class Question {
  constructor(question) {
    this.question = question;
  }

  getQuestion() {
    return this.question;
  }
}

class RadioButtonQuestion extends Question {
  constructor(question, options, track) {
    super(question);
    this.options = options;
    this.track = track;
  }

  getOptions() {
    return this.options;
  }
  getTrack() {
    return this.track;
  }
}

class RadioButtonQuiz {
  constructor(questions = [], containerId = "", buttonId = "") {
    this.questions = questions.map(
      (question) =>
        new RadioButtonQuestion(
          question.question,
          question.options,
          question.track
        )
    );
    this.container = document.getElementById(containerId);
    this.button = document.getElementById(buttonId);

    this.createQuestions();
    this.setupCalculateScoreButton();
  }

  setQuestions(questions = []) {
    this.questions = questions.map(
      (question) =>
        new RadioButtonQuestion(
          question.question,
          question.options,
          question.track
        )
    );
  }

  getQuestions() {
    return this.questions;
  }

  createRadioButtons(name, options) {
    const radioButtons = [];

    for (let i = 0; i < options.length; i++) {
      const id = `${name}${i}`;
      const label = options[i].toUpperCase();
      const input = document.createElement("input");
      input.type = "radio";
      input.id = id;
      input.name = name;
      input.value = options[i];
      radioButtons.push(input);

      const radioButtonLabel = document.createElement("label");
      radioButtonLabel.setAttribute("for", id);
      radioButtonLabel.innerText = label;
      radioButtons.push(radioButtonLabel);
    }

    return radioButtons;
  }

  createQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];

      const questionElement = document.createElement("p");
      questionElement.innerText = `${i + 1} - ${question.getQuestion()}`;
      this.container.appendChild(questionElement);

      if (question instanceof RadioButtonQuestion) {
        const radioButtons = this.createRadioButtons(
          `question${i + 1}`,
          question.getOptions()
        );
        radioButtons.forEach((radioButton) => {
          this.container.appendChild(radioButton);
        });
      }
    }
  }

  setupCalculateScoreButton() {
    this.button.addEventListener("click", () => {
      this.calculateScore();
    });
  }

  calculateScore() {
    let totalPointsA = 0;
    let totalPointsB = 0;
    let totalPointsC = 0;
    let totalPointsD = 0;

    for (let i = 1; i <= this.questions.length; i++) {
      const selectedOption = document.querySelector(
        `input[name="question${i}"]:checked`
      );
      const question = this.questions[i - 1];
      if (question.getTrack()[0] === "Data Science") {
        if (selectedOption) {
          const question = this.questions[i - 1];

          if (question instanceof RadioButtonQuestion) {
            const options = question.getOptions();

            switch (selectedOption.value) {
              case options[0]:
                totalPointsA += 3;
                break;
              case options[1]:
                totalPointsA += 2;
                break;
              case options[2]:
                totalPointsA += 1;
                break;
            }
          }
        } else {
          alert(`Please answer question ${i}`);
          return;
        }
      }
      if (question.getTrack()[0] === "Mobile Development") {
        if (selectedOption) {
          const question = this.questions[i - 1];

          if (question instanceof RadioButtonQuestion) {
            const options = question.getOptions();

            switch (selectedOption.value) {
              case options[0]:
                totalPointsB += 3;
                break;
              case options[1]:
                totalPointsB += 2;
                break;
              case options[2]:
                totalPointsB += 1;
                break;
            }
          }
        } else {
          alert(`Please answer question ${i}`);
          return;
        }
      }
      if (question.getTrack()[0] === "Front End") {
        if (selectedOption) {
          const question = this.questions[i - 1];

          if (question instanceof RadioButtonQuestion) {
            const options = question.getOptions();

            switch (selectedOption.value) {
              case options[0]:
                totalPointsC += 3;
                break;
              case options[1]:
                totalPointsC += 2;
                break;
              case options[2]:
                totalPointsC += 1;
                break;
            }
          }
        } else {
          alert(`Please answer question ${i}`);
          return;
        }
      }
      if (question.getTrack()[0] === "Back End") {
        if (selectedOption) {
          const question = this.questions[i - 1];

          if (question instanceof RadioButtonQuestion) {
            const options = question.getOptions();

            switch (selectedOption.value) {
              case options[0]:
                totalPointsD += 3;
                break;
              case options[1]:
                totalPointsD += 2;
                break;
              case options[2]:
                totalPointsD += 1;
                break;
            }
          }
        } else {
          alert(`Please answer question ${i}`);
          return;
        }
      }
    }
    // alert(`Your score for track A is ${totalPointsA}`);
    // alert(`Your score for track B is ${totalPointsB}`);
    // alert(`Your score for track C is ${totalPointsC}`);
    // alert(`Your score for track D is ${totalPointsD}`);
    const maxPoints = Math.max(
      totalPointsA,
      totalPointsB,
      totalPointsC,
      totalPointsD
    );

    if (maxPoints === totalPointsA) {
      localStorage.setItem("result", "Data-Science");
    } else if (maxPoints === totalPointsB) {
      localStorage.setItem("result", "Mobile-Development");
    } else if (maxPoints === totalPointsC) {
      localStorage.setItem("result", "Front-End");
    } else if (maxPoints === totalPointsD) {
      localStorage.setItem("result", "Back-End");
    }

    // Redirect to the result page
    NavigationUtils.redirectToResultPage();
  }
}

const radioButtonQuestions = [
  {
    question:
      "Do you want to work with large datasets and extract meaningful insights from them ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Would you like to create beautiful and engaging websites that people enjoy using ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Do you want to create apps that people will use every day on their phones and tablets ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Do you want to create fast and reliable backend systems that power applications ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Are you curious about what machine learning algorithms can do and how they're used to solve real-world problems ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Are you interested in learning how to use CSS to make websites look professional and polished ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Are you excited about designing user interfaces (The graphical, visual, and interactive part of a software application) that are intuitive and beautiful ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Do you prefer working on how the website works behind the scenes ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it be interesting to use data visualization tools like Matplotlib and ggplot to help communicate insights from data ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Would it be exciting to learn how to make web pages that work on any device with responsive design ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Are you interested in working with databases and data modeling ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it feel great to see an app you developed being used by thousands or even millions of people around the world ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Do you want to create models that can make predictions or automate decision-making based on data ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Do you want to learn how to use JavaScript to add interactivity and functionality to web pages ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Do you want to learn to use server-side languages like Python, Ruby, or PHP ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it feel great to know that you have created a model that has a real-world impact, such as predicting disease outbreaks or helping businesses make better decisions ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Would it be rewarding to develop apps that integrate with third-party APIs, such as social media or payment gateways ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Do you enjoy working on the visual aspects of a project (e.g., designing interfaces, creating layouts, etc.) ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Would it be helpful to learn how to use version control tools like Git to keep track of your code changes and collaborate with other developers ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it be exciting to learn about the cutting-edge field of deep learning, which is revolutionizing many industries ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Do you want to learn how to program in languages like Java or Swift, which are in high demand by employers ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Would it feel great to see a website you developed online being used by others ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Would it be rewarding to be part of a team that builds robust and scalable back-end systems for growing applications ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it be fulfilling to work with other data scientists and machine learning engineers to solve complex problems ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Data Science"],
  },
  {
    question:
      "Do you want to be part of a team that develops mobile apps for different platforms like iOS and Android ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
  {
    question:
      "Do You Like Looking At New Website Designs And Want To Learn How To Make Them ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Front End"],
  },
  {
    question:
      "Would it feel great to know that you have built a system that is critical to an application's success ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Back End"],
  },
  {
    question:
      "Would it be useful to learn how to use debugging tools like Xcode and Android Studio to find and fix issues in your code ?",
    options: ["Agree", "Don't Know", "Disagree"],
    track: ["Mobile Development"],
  },
];

const radioButtonQuiz = new RadioButtonQuiz(
  radioButtonQuestions,
  "radio-button-container",
  "calculate-score-button"
);
