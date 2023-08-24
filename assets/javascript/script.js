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


//Get element ids
const quizTitle = document.getElementById('quiz0-title');
const description = document.querySelector("p");
const startButton = document.getElementById("start-button");
const timer = document.getElementById("time");
const containerEl = document.getElementById("quiz-container")
const quizPrompt = document.getElementById("quiz-prompt");
const quizPossible = document.getElementById("quiz-possible-answers");


//Questions and Answers

const questions = [
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



//initail position

let currentQuestion = 0;
let score = 0;
let timeLeft = 90;


//Quiz function
function startQuiz() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        secondsLeftEl.textContent = secondsLeft + " seconds left";
        if (secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        }
    }, 1000);
    //make container disappear
    containerEl.classList.add("hidden");
    // make question container appear
    questionsEl.classList.remove("hidden");
    // call question function
    getQuestion();
    }
startButton.addEventListener("click",startQuiz);