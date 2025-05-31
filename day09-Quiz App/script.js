const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "22", "5"],
    answer: "4"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  document.getElementById('options').innerHTML = q.options.map(opt => `
    <label><input type="radio" name="option" value="${opt}"> ${opt}</label>
  `).join('');
}

document.getElementById('submit').addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return;

  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button onclick="resetQuiz()">Restart Quiz</button>
  `;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('quiz-container').innerHTML = `
    <h2 id="question"></h2>
    <div id="options"></div>
    <button id="submit">Submit</button>
  `;
  loadQuestion();

  //== Re-attach event listener
  document.getElementById('submit').addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return;

    const answer = selected.value;
    if (answer === questions[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
}

loadQuestion();
