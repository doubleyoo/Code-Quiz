var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");
var result = document.querySelector("#result")
var questionNumber = 0
var correctAnswers = 0
var buttonOne = document.querySelector("#one")
buttonOne.addEventListener("click", function(){selectChoice(1)}, false) 
var buttonTwo = document.querySelector("#two")
buttonTwo.addEventListener("click", function(){selectChoice(2)}, false) 
var buttonThree = document.querySelector("#three")
buttonThree.addEventListener("click", function(){selectChoice(3)}, false) 
var buttonFour = document.querySelector("#four")
buttonFour.addEventListener("click", function(){selectChoice(4)}, false) 

var questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["Manchester", "Birmingham", "London", "Birmingham"],
        answer: 3
    },

    {
        question: "What is the capital of United States?",
        choices: ["D.C.", "New York", "Miami", "Florida"],
        answer: 1
    },
    {
        question: "What is the capital Canada",
        choices: ["Manchester", "Birmingham", "Ottowa", "Birmingham"],
        answer: 3
    },
    {
        question: "What is the capital of Brasil",
        choices: ["California", "New York", "Miami", "Brasilia"],
        answer: 4
    }
]


startButton.addEventListener("click", startQuiz);
function startQuiz() {
    timerCount = 75
    startButton.style.display = "none"
    var i
    var answerButtons = document.getElementsByClassName("answer-btn");
    for (i = 0; i < answerButtons.length; i++) {
        answerButtons[i].style.display = "inline"
    }
    showQuestion(0)

}
function showQuestion(i) {
    document.getElementById("large-font").textContent = questions[i].question
    document.getElementById("one").textContent = questions[i].choices[0]
    document.getElementById("two").textContent = questions[i].choices[1]
    document.getElementById("three").textContent = questions[i].choices[2]
    document.getElementById("four").textContent = questions[i].choices[3]
}
function selectChoice(i) {
    console.log(i)
    if (i===questions[0].answer) {
        document.getElementById("result").textContent = "Correct!";
        correctAnswers += 1
    }  
    else {
        document.getElementById("result").textContent = "Naw, doc..."
    } 

}


var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

