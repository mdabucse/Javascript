//  Questions
let questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "Capital of India?",
        options: ["Chennai", "Delhi", "Mumbai"],
        answer: "Delhi"
    },
    {
        question: "Sun rises in?",
        options: ["West", "East", "North"],
        answer: "East"
    }
];

//  Track progress
let currentIndex = 0;
let score = 0;

//  Get elements
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");
let nextBtn = document.getElementById("next-btn");
let resultBox = document.getElementById("result");
let scoreEl = document.getElementById("score");

// Load question
function loadQuestion() {
    let currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;

    optionsEl.innerHTML = ""; 

    //  Create buttons
    currentQ.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;

        //  FIX: pass btn also
        btn.addEventListener("click", () => {
            checkAnswer(option, btn);
        });

        optionsEl.appendChild(btn);
    });
}

//  Check answer
function checkAnswer(selected, clickedBtn) {
    let correct = questions[currentIndex].answer;
    let buttons = document.querySelectorAll("#options button");

    // disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    // highlight selected
    clickedBtn.classList.add("selected");

    // check answer
    if (selected === correct) {
        clickedBtn.classList.add("correct");
        score++;
    } else {
        clickedBtn.classList.add("wrong");

        // show correct answer
        buttons.forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add("correct");
            }
        });
    }
}

//  Next question
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

//  Show result
function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    resultBox.style.display = "block";
    scoreEl.textContent = score + " / " + questions.length;
}

//  Start app
loadQuestion();