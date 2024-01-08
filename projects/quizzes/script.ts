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
    html += `
     <div class="question_div">
                              <p class="question">${question.question.text}</p>

                              <div class="answer_input_div">
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="firstAnswer"
                                   value=${question.incorrectAnswers[1]}>
                                   <label for="firstAnswer">${question.incorrectAnswers[1]}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="secondAnswer"
                                   value=${question.incorrectAnswers[0]}>
                                   <label for="secondAnswer">${question.incorrectAnswers[0]}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="thirdAnswer"
                                   value=${question.correctAnswer}>
                                   <label for="thirdAnswer">${question.correctAnswer}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="fourthAnswer"
                                   value=${question.incorrectAnswers[2]}>
                                   <label for="fourthAnswer">${question.incorrectAnswers[2]}</label>
                              </div>
                              </div>
                              
                              
                              
                         </div>
     `;
  });
  quizForm.innerHTML = html;
  quizForm.innerHTML += `<button type="submit" class="quiz_btn">submit</button>`;
};

getQuestions();

const inputDiv = quizForm.querySelectorAll("input");
const ans = inputDiv.forEach((input) => {
  return `${input.value}`;
});
console.log(ans);
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
});



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
    html += `
     <div class="question_div">
                              <p class="question">${question.question.text}</p>

                              <div class="answer_input_div">
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="firstAnswer"
                                   value=${question.incorrectAnswers[1]}>
                                   <label for="firstAnswer">${question.incorrectAnswers[1]}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="secondAnswer"
                                   value=${question.incorrectAnswers[0]}>
                                   <label for="secondAnswer">${question.incorrectAnswers[0]}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="thirdAnswer"
                                   value=${question.correctAnswer}>
                                   <label for="thirdAnswer">${question.correctAnswer}</label>
                              </div>
                              <div class="answer_input">
                                   <input type="radio" name="answer" id="fourthAnswer"
                                   value=${question.incorrectAnswers[2]}>
                                   <label for="fourthAnswer">${question.incorrectAnswers[2]}</label>
                              </div>
                              </div>
                              
                              
                              
                         </div>
     `;
  });
  quizForm.innerHTML = html;
  quizForm.innerHTML += `<button type="submit" class="quiz_btn">submit</button>`;
};

getQuestions();

const inputDiv = quizForm.querySelectorAll("input");
const ans = inputDiv.forEach((input) => {
  return `${input.value}`;
});
console.log(ans);
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
