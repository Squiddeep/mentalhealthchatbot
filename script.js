// Sample responses for the chatbot (expanded)
const responses = {
    sad: "I'm really sorry to hear that you're feeling sad. Sometimes, talking about it can help. Would you like some suggestions to feel better?",
    happy: "It's great to hear you're feeling happy! Do you want to share more about what's bringing you joy today?",
    anxious: "Anxiety can be tough. Let's take a deep breath together. Would you like some tips to manage anxiety?",
    stressed: "Feeling stressed can be overwhelming. Remember, it's okay to take breaks. Can I suggest some ways to relax?",
    tired: "It sounds like you're feeling tired. Make sure to rest and recharge. I can suggest some calming activities.",
    motivationalQuotes: [
        "Believe you can and you're halfway there.",
        "You are stronger than you think.",
        "Every day is a second chance.",
        "You are capable of amazing things.",
        "You are enough just as you are.",
        "It's okay not to be okay."
    ],
    default: "I'm here to listen. Can you tell me more about how you're feeling?"
};

// Function to get a bot response
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput === "quit") {
        return "Thank you for chatting with me. Remember, you're not alone. Take care!";
    } else if (lowerInput.includes("sad") || lowerInput.includes("depressed")) {
        return responses.sad;
    } else if (lowerInput.includes("happy") || lowerInput.includes("good")) {
        return responses.happy;
    } else if (lowerInput.includes("anxious") || lowerInput.includes("nervous")) {
        return responses.anxious;
    } else if (lowerInput.includes("stressed") || lowerInput.includes("overwhelmed")) {
        return responses.stressed;
    } else if (lowerInput.includes("tired") || lowerInput.includes("exhausted")) {
        return responses.tired;
    } else if (lowerInput.includes("suggestion") || lowerInput.includes("advice")) {
        const randomQuote = responses.motivationalQuotes[Math.floor(Math.random() * responses.motivationalQuotes.length)];
        return `Here's a thought: "${randomQuote}"`;
    } else {
        return responses.default;
    }
}

// Function to append a message to the chatbox
function appendMessage(sender, text) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Handling user input and bot response
document.getElementById('sendBtn').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        // Add user message
        appendMessage('user', userInput);

        // Clear input field
        document.getElementById('userInput').value = '';

        // Get bot response
        const botResponse = getBotResponse(userInput);

        // Add bot message after a delay
        setTimeout(() => appendMessage('bot', botResponse), 500);

        // Quit the chat if the user types 'quit'
        if (userInput.toLowerCase() === "quit") {
            document.getElementById('userInput').disabled = true;
            document.getElementById('sendBtn').disabled = true;
        }
    }
});
