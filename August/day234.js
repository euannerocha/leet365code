function scaryMessage() {
    const messages = [
        "You're not alone...",
        "Someone is watching you.",
        "The light is slowly fading.",
        "Look behind you.",
        "What you think is real... is not."
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

const interval = 5000;

setInterval(scaryMessage, interval);


// ABOUT THE CODE

// This JavaScript code creates a simple program that displays a random scary message in the console at regular intervals. 
// The code defines a function called scaryMessage, which contains an array of creepy messages. 
// At a specified interval (in this case, every 5 seconds), a random message is selected from the array and logged to the console using console.log.

// The interval is controlled by setInterval, which calls the scaryMessage function repeatedly, creating an eerie effect as the messages are displayed over time.