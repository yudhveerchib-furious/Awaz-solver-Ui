 // Check if browser supports SpeechRecognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById("micBtn");
  const inputBox = document.getElementById("voiceInput");
  const status = document.getElementById("status");

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;  // stop after one sentence
    recognition.interimResults = false; // only final result
    recognition.lang = "en-US"; // change language if needed

    micBtn.addEventListener("click", () => {
      recognition.start();
      status.textContent = "🎙️ Listening...";
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      inputBox.value = transcript;
      status.textContent = "✅ Done";
    };

    recognition.onerror = (event) => {
      status.textContent = "❌ Error: " + event.error;
    };

    recognition.onend = () => {
      status.textContent = "Mic off";
    };
  } else {
    status.textContent = "❌ Speech Recognition not supported in this browser.";
    micBtn.disabled = true;
  }