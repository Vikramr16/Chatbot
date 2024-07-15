function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to respond to your message!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is chatbot and it's nice to respond to your message.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the teacher wear sunglasses to school ?\nBecause her students were so btight.";
    } else if (input.includes("thank")) {
        output = "You're welcome!";
    } else {
        output = "Sorry, I don't understand your response.";
    }
    return output;
}

// Display user message on chat
function displayusermessage(message) {
    let chat = document.querySelector(".chat");
    let usermessage = document.createElement("div");
    usermessage.classList.add("message", "user");
    let useravatar = document.createElement("div");
    useravatar.classList.add("avatar");
    let usertext = document.createElement("div");
    usertext.classList.add("text");
    usertext.innerHTML = message;
    usermessage.appendChild(useravatar);
    usermessage.appendChild(usertext);
    chat.appendChild(usermessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display bot message on chat
function displaybotmessage(message) {
    let chat = document.querySelector(".chat");
    let botmessage = document.createElement("div");
    botmessage.classList.add("message", "bot");
    let botavatar = document.createElement("div");
    botavatar.classList.add("avatar");
    let bottext = document.createElement("div");
    bottext.classList.add("text");
    bottext.innerHTML = message;
    botmessage.appendChild(botavatar);
    botmessage.appendChild(bottext);
    chat.appendChild(botmessage);
    chat.scrollTop = chat.scrollHeight;
}

function sendmessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayusermessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displaybotmessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendmessage);

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendmessage();
    }
});
