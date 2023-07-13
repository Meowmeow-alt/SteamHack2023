const questions = [
     {
          question: "When Le Hong Phong high school was found?",
          answer: [
               { text: "1922", correct: false },
               { text: "1927", correct: true },
               { text: "1933", correct: false },
               { text: "1925", correct: false },
          ]
     },
     {
          question: "What is the location of Le Hong Phong high school?",
          answer: [
               { text: "Thanh Hoa", correct: false },
               { text: "Hue", correct: false },
               { text: "Ha Noi", correct: false },
               { text: "Ho Chi Minh city", correct: true },
          ]
     },
     {
          question: "How many major choices for students?",
          answer: [
               { text: "12 classes for majors", correct: true },
               { text: "8 classes for majors", correct: false },
               { text: "15 classes for majors", correct: false },
               { text: "5 classes for majors", correct: false },
          ]
     },
     {
          question: "Who is the head master of Le Hong Phong highschool?",
          answer: [
               { text: "Tran Thi Minh Man", correct: false },
               { text: "Nguyen Xuan Mai", correct: false },
               { text: "Pham Thi Be Hien", correct: true },
               { text: "Ngo Manh Duc", correct: false },
          ]
     },
     {
          question: "Who is a famous Le Hong Phong's alumni?",
          answer: [
               { text: "Karik", correct: false },
               { text: "Toc Tien", correct: true },
               { text: "TLinh", correct: false },
               { text: "Hieu Thu Hai", correct: false },
          ]
     },
     {
          question: "What was Le Hong Phong high school original name?",
          answer: [
               { text: "Lyree Audior Valorie", correct: false },
               { text: "Collège Salam Ngo Dinh Diem", correct: false },
               { text: "Collège Chasseloup-Laubat", correct: false },
               { text: "Lycée Petrus Trương Vĩnh Ký", correct: true },
          ]
     },
     {
          question: "How many students does the school have?",
          answer: [
               { text: "1036", correct: false },
               { text: "2045", correct: true },
               { text: "3084", correct: false },
               { text: "4022", correct: false },
          ]
     },
     {
          question: "Who is the designer of the school building?",
          answer: [
               { text: "Ernest Hebrard de Villeneuve", correct: true },
               { text: "Bernard Tschumi", correct: false },
               { text: "Hector Guimard", correct: false },
               { text: "Christian de Portzamparc", correct: false },
          ]
     }
];

const questionElement = document.getElementById("questionToAsk");
const answerButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function takeQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion() {
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNumber = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNumber + ". " + currentQuestion.
     question;

     currentQuestion.answer.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButton.appendChild(button);
          if(answer.correct) {
               button.dataset.correct = answer.correct;
          }
          button.addEventListener("click",chooseAnswer);
     });
}

function resetState() {
     nextButton.style.display = "none";
     while(answerButton.firstChild) {
          answerButton.removeChild(answerButton.firstChild);
     }
}

function chooseAnswer(choice) {
     const selectedButton = choice.target;
     const correctAnswer = selectedButton.dataset.correct === "true";
     if(correctAnswer) {
          selectedButton.classList.add("correct");
          score++;
     }else{
          selectedButton.classList.add("incorrect");
     }
     Array.from(answerButton.children).forEach(button => {
          if(button.dataset.correct === "true") {
               button.classList.add("correct");
          }
          button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore() {
     resetState();
     questionElement.innerHTML = `You got ${score} points out of ${questions.length} :> You can ask Chatbot questions that you answered wrong.`;
     nextButton.innerHTML = "Play again? ^-^";
     nextButton.style.display = "block"
}

function showNextButton() {
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length) {
          showQuestion();
     }else {
          showScore();
     }
}

nextButton.addEventListener("click", () => {
     if(currentQuestionIndex < questions.length) {
          showNextButton();
     }else {
          takeQuiz();
     }
});

takeQuiz();