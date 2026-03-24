# Real-Time Chat Simulator

A simple front-end chat application built using HTML, CSS, and JavaScript.
This project simulates a real-time chat interface with user messages and automated bot replies.

## Features

* Send messages using button or Enter key
* Random bot responses
* Chat bubble UI (user & bot)
* Timestamp for each message
* Auto scroll to latest message

## Project Structure

```
project/
│── index.html
│── style.css
│── script.js
```

## How It Works

* User types a message in the input field
* On clicking **Send** or pressing **Enter**, the message is displayed
* After a short delay, the bot sends a random reply
* Messages are dynamically created and added to the chat window

## JavaScript Functions

### `getTime()`

* Returns the current time in `HH:MM` format
* Used to display timestamp for each message

### `addMessage(text, isUser)`

* Creates a message element dynamically
* Applies different styles for user and bot
* Adds message text and timestamp
* Appends the message to the chat container
* Automatically scrolls to the latest message

### `sendMessage()`

* Reads input value from the user
* Prevents sending empty messages
* Calls `addMessage()` to display user message
* Clears the input field
* Generates a bot reply after a short delay



## Notes

This is a front-end simulation only.
No backend or real-time server is used.


