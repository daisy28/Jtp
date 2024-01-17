const quizForm: HTMLElement = document.querySelector(".quiz_form")!;
let answers: string[] = [];

type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: QuestionText;
  id: string;
};

type QuestionText = {
  text: string;
};

const getQuestions = () => {
  fetch("https://the-trivia-api.com/v2/questions")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      displayQuestions(data);
      data.map((item: Question) => {
        answers.push(item.correctAnswer);
      });
    });
};

const displayQuestions = (questions: Question[]) => {
  let html = ``;
  questions.map((question) => {

    const answers: string[] = [];
    question.incorrectAnswers.map(incorrectAnswer => answers.push(incorrectAnswer));
    answers.push(question.correctAnswer);
    
    html += `
     <div class="question_div">
      <p class="question">${question.question.text}</p>

      <div class="answer_input_div">
      <div class="answer_input">
        <input type="radio" name=${question.id} id="firstAnswer"
        value=${answers[0]}>
        <label for="firstAnswer">${answers[0]}</label>
      </div>

      <div class="answer_input">
        <input type="radio" name=${question.id} id="secondAnswer"
        value=${answers[1]}>
        <label for="secondAnswer">${answers[1]}</label>
      </div>

      <div class="answer_input">
        <input type="radio" name=${question.id} id="thirdAnswer"
        value=${answers[2]}>
        <label for="thirdAnswer">${answers[2]}</label>
      </div>

      <div class="answer_input">
        <input type="radio" name=${question.id} id="fourthAnswer"
        value=${answers[3]}>
        <label for="fourthAnswer">${answers[3]}</label>
      </div>
      </div>
  </div>
     `;
  });
  quizForm.innerHTML = html;
  quizForm.innerHTML += `<button type="submit" class="quiz_btn">submit</button>`;
};

getQuestions();
console.log(answers)
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const options = quizForm.querySelectorAll("input");
  
  const allOptions = Array.from(options);
  let score = 0;
  answers.map(answer => {
    allOptions.filter(options => {
      if (answer === options.value) {
        // console.log(options.value)
        // console.log(options.checked)
        // console.log(answer)
        score += 10;
      }
    });
  });
  console.log(score)
});



