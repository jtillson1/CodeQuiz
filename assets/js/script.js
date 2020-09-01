var startButton = document.querySelector("#start-button");
var timeLeft = document.querySelector("#timer");
var questionSpan = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var rightWrong = document.querySelector("#rightWrong");

var showHighScoreInitials = document.querySelector("#highScoreInitials");
showHighScoreInitials.textContent = localStorage.getItem("highScoreInitials");
var showLastScoreInitials = document.querySelector("#lastScoreInitials");
showLastScoreInitials.textContent = localStorage.getItem("lastScoreInitials");

var showHighScore = document.querySelector("#highScore");
showHighScore.textContent = localStorage.getItem("highScore");
var showLastScore = document.querySelector("#lastScore");
showLastScore.textContent = localStorage.getItem("lastScore");

var currentQuestion = 0;
var time = "";

// Array that holds the quiz questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: { a: '<scripting>', b: '<js>', c: '<javascript>', d: '<script>' },
        correct: '<script>'
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML of something?',
        answers: { a: '.innerHTML', b: 'document.prompt', c: 'html.change', d: '<html>' },
        correct: '.innerHTML'
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: { a: 'the <head> section', b: 'the <body> section', c: 'in the style sheet', d: 'It does not matter' },
        correct: 'the <body> section'
    },
    {
        question: 'What is the correct syntax for referring to an external script called “geek.js"?',
        answers: { a: '<script href="geek.js">', b: '<script src="geek.js">', c: '<script tag="geek.js">', d: '<script name="geek.js">' },
        correct: '<script src="geek.js">'
    },
    {
        question: 'Should the external JavaScript file contain the <script> tag?',
        answers: { a: 'Yes, always', b: 'Only if you include the correct ID', c: 'No, you should not do this', d: 'It does not matter.' },
        correct: 'No, you should not do this'
    },
    {
        question: 'How do you write "NEWS FLASH- You are a nerd" in an alert box?',
        answers: { a: 'alertBox("NEWS FLASH- You are a nerd");', b: 'msg("NEWS FLASH- You are a nerd");', c: 'alert("NEWS FLASH- You are a nerd");', d: 'msgBox("NEWS FLASH- You are a nerd");' },
        correct: 'alert("NEWS FLASH- You are a nerd");'
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: { a: 'function = myFunction()', b: 'function myFunction()', c: 'function:myFunction()', d: 'all of these will work' },
        correct: 'function myFunction()'
    }
];

var startQuiz = function () {
    currentQuestion = 0;
    time = 60;
    // Countdown timer Loop
    var timeInterval = setInterval(function () {
        // When time is greater than 0 or there are still questions left
        if (time > 0 && currentQuestion < questions.length) {
            time--;
            timeLeft.textContent = time;
        }
        // When time is up or there are no more questions, end the quiz with quizEnd()
        else {
            clearInterval(timeInterval);
            quizEnd();
        }
    }, 1000);
    // Enables multiple choice buttons and disables start button and sets the first question
    startButton.setAttribute("disabled", "disabled");
    answer1.removeAttribute("disabled");
    answer2.removeAttribute("disabled");
    answer3.removeAttribute("disabled");
    answer4.removeAttribute("disabled");
    setNewQuestion();
};

var setNewQuestion = function () {
    // If there are still questions left in the array, then load the button's text with the responses from the array
    if (currentQuestion < questions.length) {
        var newQuestion = questions[currentQuestion].question;
        var answerA = questions[currentQuestion].answers.a;
        var answerB = questions[currentQuestion].answers.b;
        var answerC = questions[currentQuestion].answers.c;
        var answerD = questions[currentQuestion].answers.d;

        questionSpan.textContent = newQuestion;
        answer1.textContent = answerA;
        answer2.textContent = answerB;
        answer3.textContent = answerC;
        answer4.textContent = answerD;
    }
};

var checkAnswer1 = function () {
    var text = answer1.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

var checkAnswer2 = function () {
    var text = answer2.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

var checkAnswer3 = function () {
    var text = answer3.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

var checkAnswer4 = function () {
    var text = answer4.textContent
    // If the button's text content = the question's correct answer then display correct and setNewQuestion()
    if (questions[currentQuestion].correct === text) {
        rightWrong.textContent = "RIGHT!"
    }
    // Else display WRONG and subtract 2 from time
    else {
        rightWrong.textContent = "WRONG!"
        time = time - 2;
    }
    // Then set a new question
    currentQuestion++;
    setNewQuestion();
};

var quizEnd = function () {

    // Disable answer choices and display text letting the user know the game is over and what to do to restart
    questionSpan.textContent = "Quiz Over!";
    answer1.textContent = "Press";
    answer2.textContent = "start";
    answer3.textContent = "to try";
    answer4.textContent = "again!";
    rightWrong.textContent = "Thanks for playing!"
    startButton.removeAttribute("disabled");
    answer1.setAttribute("disabled", "disabled");
    answer2.setAttribute("disabled", "disabled");
    answer3.setAttribute("disabled", "disabled");
    answer4.setAttribute("disabled", "disabled");

    window.alert("Quiz Finished!");
    var score = time;

};

answer1.addEventListener("click", checkAnswer1);
answer2.addEventListener("click", checkAnswer2);
answer3.addEventListener("click", checkAnswer3);
answer4.addEventListener("click", checkAnswer4);
startButton.addEventListener("click", startQuiz);