// Get elements
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Set initial time (25 minutes = 1500 seconds)
let timeLeft = 25 * 60;
let timerId = null;

// Function to format and display the time
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
}

// Start countdown
function startTimer() {
  if (timerId) return; // prevent multiple timers
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerId);
      timerId = null;
      alert("⏰ Time's up! Take a break 🎉");
    }
  }, 1000);
}

// Pause countdown
function pauseTimer() {
  clearInterval(timerId);
  timerId = null;
}

// Reset countdown
function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateDisplay();
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
