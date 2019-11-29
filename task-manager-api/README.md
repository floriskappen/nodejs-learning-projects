# Task Manager API with Node.js & MongoDB
This is part of a series of small projects I did in an effort to learn Node.js & Mongoose.js design patterns. The goal of this project was to build a real world API that you can interact with.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install Task Manager API.

```bash
npm install
```

## Project Breakdown

**db/**
Connection with MongoDB is made.

**emails/**
A quick example of integrating an existing API (sendgrid).

**middleware/**
The *auth.js* checks if the incoming request contains a Bearer header with the right authorization code. This logs the user in to the account.

**models/**
This contains the mongoose models for the Tasks and the Users. The user model makes sure no sensitive/unnecessary info like the tokens, password and avatar is returned. It also contains other functions, like the one to actually generate the Authentication token.

**routers/**
As the folder name implies, here live the routers that make the API usable.