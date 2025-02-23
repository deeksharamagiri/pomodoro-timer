let timer;
let timeLeft = 25 * 60;
let isRunning = false;
let mode = "pomodoro";

const durations = { pomodoro: 25 * 60, shortBreak: 5 * 60, longBreak: 15 * 60 };

function setMode(newMode) {
    mode = newMode;
    timeLeft = durations[mode];
    updateTimerDisplay();
    resetProgress();
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").textContent = "Start";
    } else {
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startPause").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
        updateProgress();
    } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startPause").textContent = "Start";
        alert("Time's up!");
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateProgress() {
    const progress = (timeLeft / durations[mode]) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = durations[mode];
    updateTimerDisplay();
    resetProgress();
    document.getElementById("startPause").textContent = "Start";
}

function resetProgress() {
    document.getElementById("progress").style.width = "100%";
}
