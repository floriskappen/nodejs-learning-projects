# Chatbox App with Node.js & Socket.io
This is part of a series of small projects I did in an effort to learn Node.js & Mongoose.js design patterns. The goal of this project was to build a simple chat application using the socket.io framework. Its' functions being that a user can set a username, and type the room name they want to join. They can see other users in the room and chat with them.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install Chatbox App.

```bash
npm install
```

## Project Breakdown

**public/**
The frontend lives in this folder. It wasn't the focus of this project at all, so any styling etc is purely to make it usable.
The *chat.js* file in /js/ checks if any messages are being received or if any users are joining. It then renders the correct information to the user. It also emits the right event when a message is sent by the user.

**src/index.js**
This is the entry point. It takes care of the socket.io connection and this is where the logic lives to execute functions like sendMessage, sendLocation.

**src/utils/**
*users.js* holds the users in a room and all the logic that has to do with adding, removing and getting users.
*messages.js* is where the logic related to generating messages lives.
