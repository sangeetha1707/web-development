document.addEventListener("DOMContentLoaded", () => {
    const score = localStorage.getItem("score") || 0;
    const wrongAnswers = JSON.parse(localStorage.getItem("wrongAnswers")) || [];
    const totalQuestions = localStorage.getItem("totalQuestions") || 20;

    document.getElementById("score").textContent = `Your Score: ${score}/${totalQuestions}`;

    const wrongContainer = document.getElementById("wrong-answers");

    if (wrongAnswers.length > 0) {
        wrongAnswers.forEach(wrong => {
            const div = document.createElement("div");
            div.innerHTML = `<p><strong>Q:</strong> ${wrong.question}<br><strong>Correct Answer:</strong> ${wrong.correct}</p>`;
            wrongContainer.appendChild(div);
        });
    } else {
        wrongContainer.innerHTML = "<p>No wrong answers! Well done!</p>";
    }
});

function restartQuiz() {
    localStorage.clear();
    window.location.href = "quiz.html";
}
