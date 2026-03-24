// Get elements
let input = document.getElementById("messageInput");
let button = document.getElementById("sendBtn");
let messages = document.getElementById("messages");

// Bot replies
let replies = ["Okay 👍", "Nice!", "Tell me more...", "Interesting 🤔", "Got it!"];

// Format time (HH:MM)
function getTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();

    if (m < 10) m = "0" + m;

    return h + ":" + m;
}

// Create message
function addMessage(text, isUser) {
    let msg = document.createElement("div");
    msg.className = isUser ? "msg user" : "msg bot";

    // message text
    let content = document.createElement("div");
    content.innerText = text;

    // time
    let time = document.createElement("div");
    time.className = "time";
    time.innerText = getTime();

    msg.appendChild(content);
    msg.appendChild(time);

    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// Send message
function sendMessage() {
    let text = input.value.trim();
    if (text === "") return;

    addMessage(text, true);
    input.value = "";

    setTimeout(() => {
        let reply = replies[Math.floor(Math.random() * replies.length)];
        addMessage(reply, false);
    }, 600);
}

// Events
button.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Welcome
addMessage("Hi! Send me a message 👋", false);