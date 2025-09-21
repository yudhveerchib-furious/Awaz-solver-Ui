function printAIMessage(message) {
    const box = document.getElementById("outputBox");

    // create message <p>
    const msgElement = document.createElement("p");
    msgElement.style.margin = "8px 0"; // spacing between messages
    box.appendChild(msgElement);

    let i = 0;
    function typeChar() {
        if (i < message.length) {
            msgElement.textContent += message.charAt(i);
            i++;
            box.scrollTop = box.scrollHeight; // auto-scroll
            setTimeout(typeChar, 20);
        }
    }
    typeChar();
}

// Example usage
printAIMessage("Hello! This is your AI output appearing here.");
printAIMessage("It types line by line and scrolls automatically when overflow occurs.");
