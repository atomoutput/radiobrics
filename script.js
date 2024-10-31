// Set up the audio element to play the Icecast stream
const audio = new Audio("http://radiobrics.hopto.org:8000/stream");
audio.volume = 0.5; // Default volume

// Select elements
const playPauseButton = document.getElementById("playPauseButton");
const volumeSlider = document.getElementById("volumeSlider");
const loadingIndicator = document.getElementById("loadingIndicator");

// Update play/pause button based on audio status
function updatePlayPauseButton() {
  if (audio.paused) {
    playPauseButton.textContent = "▶️"; // Play symbol
  } else {
    playPauseButton.textContent = "⏸️"; // Pause symbol
  }
}

// Play/pause button functionality
playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    loadingIndicator.classList.remove("hidden");
    audio.play();
  } else {
    audio.pause();
  }
});

// Update the volume when slider changes
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Hide loading indicator once the audio starts playing
audio.addEventListener("playing", () => {
  loadingIndicator.classList.add("hidden");
  updatePlayPauseButton();
});

// Show loading indicator when audio is buffering
audio.addEventListener("waiting", () => {
  loadingIndicator.classList.remove("hidden");
});

// Update the play/pause button on audio pause
audio.addEventListener("pause", updatePlayPauseButton);
