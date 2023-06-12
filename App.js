const questions = [
  {
    q: "Brain tumors can be located using an isotope of",
    a: [
      { text: "carbon -14", correct: false },
      { text: "uranium 235", correct: false },
      { text: "iodine 131", correct: true },
    ],
  },
  {
    q: "The following are Ores of metals EXCEPT ?",
    a: [
      { text: "graphite", correct: true },
      { text: "dolomite", correct: false },
      { text: "bauxite", correct: false },
    ],
  },
  {
    q: "Ptotal = P1 + P2 + ......Pn, is an expression of law",
    a: [
      { text: "Charles law", correct: false },
      { text: "Dalton law", correct: true },
      { text: "Gay Lussac law", correct: false },
    ],
  },
  {
    q: "All the following belong to the same family EXCEPT",
    a: [
      { text: "polyethene", correct: false },
      { text: "nylon", correct: false },
      { text: "glycerol", correct: true },
    ],
  },
  {
    q: "How many atoms of chlorine are required to saturate the double bonds of a compound containing a triene?",
    a: [
      { text: "6", correct: true },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    q: "Which of the following gases is absorbed from the air during photosynthesis?",
    a: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: true },
    ],
  },
  {
    q: "Non-polar molecules are held together by",
    a: [
      { text: "Covalent bond", correct: false },
      { text: "Van der Waals forces", correct: true },
      { text: "Hydrogen bond", correct: false },
    ],
  },
  {
    q: "Which of the following is a solid at room temperature?",
    a: [
      { text: "Iodine", correct: true },
      { text: "Chlorine", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    q: "The greenhouse effect is a climatic condition associated with the presence of excess",
    a: [
      { text: "Carbon dioxide", correct: false },
      { text: "Hydrogen sulfide", correct: true },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    q: "Which of the following metals is not extracted by electrolysis?",
    a: [
      { text: "Aluminium", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Iron", correct: true },
    ],
  },
  {
  q: "Chlorine water is used as a bleaching agent because it is",
    a: [
      { text: "an acidic solution", correct: false },
      { text: "reducing agent", correct: false },
      { text: "an oxidizing agent", correct: true },
    ],
  },
  {
    q: "Amino acids are obtained from proteins by",
    a: [
      { text: "hydrolysis", correct: true },
      { text: "oxidation", correct: false },
      { text: "polymerization", correct: false },
    ],
  },
  {
    q: "Ripening of fruits is hastened by using",
    a: [
      { text: "ethanol", correct: false },
      { text: "ethene", correct: true },
      { text: "ethane", correct: false },
    ],
  },
  {
    q: "The compound that makes palm wine taste sour after exposure to the air for few days is",
    a: [
      { text: "ethanol", correct: false },
      { text: "methanol", correct: false },
      { text: "ethanoic acid", correct: true },
    ],
  },
  {
    q: "A consequence of global warming is",
    a: [
      { text: "flooding", correct: true },
      { text: "water pollution", correct: false },
      { text: "increased humidity", correct: false },
    ],
  },
  {
    q: "The alkanol obtained from the production of soap is",
    a: [
      { text: "dihydric alkanol", correct: false },
      { text: "monohydric alkanol", correct: false },
      { text: "trihydric alkanol", correct: true },
    ],
  },
  {
    q: "The negatively charged particle in an atom is the",
    a: [
      { text: "proton", correct: false },
      { text: "electron", correct: true },
      { text: "proton", correct: false },
    ],
  },
  {
    q: "The Van der Waals forces are dominant intermolecular forces in ______",
    a: [
      { text: "chlorine", correct: true },
      { text: "water", correct: false },
      { text: "ammonium chloride", correct: false },
    ],
  },
  {
    q: "The shape of a molecule of water is ______",
    a: [
      { text: "octahedral", correct: false },
      { text: "non-linear", correct: true },
      { text: "tetrahedral", correct: false },
    ],
  },
  {
    q: "The gas given off when ethanol reacts with sodium ",
    a: [
      { text: "Aluminium", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Iron", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  // to display current question
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.q;
// to display current answer option
  currentQuestion.a.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      selectAnswer(answer.correct);
    });
    answerButtons.appendChild(button);
  });
}
// this will reset question and answer
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(correct) {
  // to select answer
  if (correct) {
    score++;
  }
  // to select answer among the options
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    if (correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  nextButton.style.display = "block";
}
//restart quiz
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }


function showScore() {
  resetState();
  //  replay and display score
  questionElement.innerHTML = `Your score: ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Replay";
  nextButton.style.display = "block";
}
 //to showcase score or another question
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
});

startQuiz();
