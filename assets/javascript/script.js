// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//initail position

let currentQuestion = 0;
let score = 0;
let timeLeft = 90;


//Get element ids
let quizTitle = document.getElementById('quiz0-title');
let description = document.querySelector("p");
let startButton = document.getElementById("start-button");
let timer = document.getElementById("time");
let start = document.getElementById("start")
let containerEl = document.getElementById("quiz-container")
let quizPrompt = document.getElementById("quiz-prompt");
let quizPossible = document.getElementById("quiz-possible-answers");


//Questions and Answers

const quizData = [
    {
        prompt: "In what year did the Premier League begin?",
        possibleAnswers: ["1990","1991","1992","1993",],
        correctAnswer: "1992",
    },
    {
        prompt: "How many teams are there in the Premier League each season?",
        possibleAnswers: ["15","20","25","30",],
        correctAnswer: "20",
    },
    {
        prompt: "Who is the all time leading scorer in the Premier League?",
        possibleAnswers: ["Harry Kane","Wayne Rooney","Erling Haaland","Alan Shearer",],
        correctAnswer: "Alan Shearer",
    },
    {
        prompt: "Who has lifted the Premier League trophy the most times in the past decade? (6 times!)",
        possibleAnswers: ["Manchester City","Liverpool","Manchester United","Chelsea",],
        correctAnswer: "Manchester City",
    },
    {
        prompt: "How many games are there in a modern Premier League Season?",
        possibleAnswers: ["36","38","40","42",],
        correctAnswer: "38",
    },
    {
        prompt: "Who holds the record for most goals in a single Premier League Season?",
        possibleAnswers: ["Alan Shearer","Harry Kane","Mohamed Salah","Erling Haaland",],
        correctAnswer: "Erling Haaland",
    }
];

startButton.addEventListener("click",startQuiz);



//Quiz function
function startQuiz() {
        start.style.display = "none";
        containerEl.style.display = "block";
      showQuestion();
      startTimer();
    }

function startTimer() {
    const timerInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time Left: " + timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerInterval); 
      }
      if (currentQuestion === quizData.length) {
        clearInterval(timerInterval);
      }
 
    }, 1000);
  }
  function showQuestion() {
    let question = quizData[currentQuestion];
    quizPrompt.innerText = question.prompt;
    quizPossible.innerHTML = "";
    
    for (let i = 0; i < question.possibleAnswers.length; i++) {
      const answer = document.createElement("button");
      answer.innerText = question.possibleAnswers[i];
      answer.addEventListener("click", function () {
        checkAnswer();
      });
      quizPossible.appendChild(option);
    }
  }
