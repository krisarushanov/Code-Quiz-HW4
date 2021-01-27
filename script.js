// Set variables

var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("questions");
var answerButton = document.getElementById("answerButtons");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");


//Event listener added to start button

document.addEventListener('DOMContentLoaded', function(event) {

  startButton.addEventListener('click',  startQuiz); {
  console.log("start")
  }
  
  function startQuiz() {
  startButton.classList.add('hide')
  quizContainer.classList.remove('hide')  
  showQuestions()  
  }

  
function showQuestions(question) {
  questionElement.innerText = question.question


// Quiz questions
var questions = [
  {
      question: "What is a syntax error?",
      a: "Logic Mistake",
      b: "Grammatical Mistake",
      c: "Unfixable Error",
      answer: "b"
    },
  {
      question: "What is addEventListener",
      a: "string",
      b: "method",
      c: "boolean",
      answer: "b"
    },
  {
      question: "What is JSON?",
      a: "Javascript Object Notation",
      b: "Javascript Obvious Notice",
      c: "Jave Series Object News",
      answer: "A"
    }
 
  ];

}
});
