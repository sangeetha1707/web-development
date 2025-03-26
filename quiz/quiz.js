const quizData = [
    { question: "What is the largest planet?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: "Jupiter" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Jupiter", "Mars", "Venus"], answer: "Mars" },
    { question: "What is the name of Earth's only natural satellite?", options: ["Moon", "Phobos", "Deimos", "Titan"], answer: "Moon" },
    { question: "Which planet has the most extensive ring system?", options: ["Mars", "Venus", "Saturn", "Neptune"], answer: "Saturn" },
    { question: "What is the closest star to Earth?", options: ["Sirius", "Alpha Centauri", "Sun", "Betelgeuse"], answer: "Sun" },
    { question: "Which planet is famous for its Great Red Spot?", options: ["Earth", "Jupiter", "Uranus", "Mercury"], answer: "Jupiter" },
    { question: "Which planet is known as the Morning Star or Evening Star?", options: ["Mars", "Mercury", "Venus", "Saturn"], answer: "Venus" },
    { question: "What is the smallest planet in the Solar System?", options: ["Mercury", "Mars", "Neptune", "Earth"], answer: "Mercury" },
    { question: "What celestial event occurs when the Moon moves between the Earth and the Sun?", options: ["Lunar Eclipse", "Solar Eclipse", "Meteor Shower", "Supernova"], answer: "Solar Eclipse" },
    { question: "Which space agency successfully landed the first humans on the Moon?", options: ["NASA", "ISRO", "ESA", "Roscosmos"], answer: "NASA" },
    { question: "What is the hottest planet in our Solar System?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus" },
    { question: "Which planet rotates on its side?", options: ["Neptune", "Uranus", "Jupiter", "Saturn"], answer: "Uranus" },
    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
    { question: "What is the name of the first artificial satellite launched into space?", options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"], answer: "Sputnik 1" },
    { question: "What is the densest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Earth" },
    { question: "What is the name of the galaxy that contains our Solar System?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], answer: "Milky Way" },
    { question: "What kind of celestial body is Pluto classified as?", options: ["Planet", "Asteroid", "Dwarf Planet", "Comet"], answer: "Dwarf Planet" },
    { question: "Which space telescope was launched in 1990 and has provided breathtaking images of the universe?", options: ["James Webb", "Hubble", "Kepler", "Chandra"], answer: "Hubble" },
    { question: "Which astronaut was the first human to walk on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong" }
];

let score = 0;
let wrongAnswers = [];
let timer=0;
let timeleft=15;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizData.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("quiz-question");
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.options.forEach(option => {
            div.innerHTML += `<input type='radio' name='q${index}' value='${option}'> ${option}<br>`;
        });
        quizContainer.appendChild(div);
    });
}

function submitQuiz() {
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name='q${index}']:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        } else {
            wrongAnswers.push({ question: q.question, correct: q.answer });
        }
    });
    localStorage.setItem("score", score);
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
    window.location.href = "result.html";
}

loadQuiz();