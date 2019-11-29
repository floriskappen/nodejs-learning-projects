# Weather API with Node.js & MongoDB
This is part of a series of small projects I did in an effort to learn Node.js & Mongoose.js design patterns. The goal of this project was to build a simple frontend that interacts with a third party API.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install Task Manager API.

```bash
npm install
```

## Project Breakdown

**public/ & templates/**
The frontend lives in these folders. It's making use of templates but it really wasn't the focus of this project. The minimal styling is purely to make the web application usable.

**src/app.js**
This is the entry point. It makes sure the frontend is rendered using express routes and calls the necessary functions to get the weather.

**src/utils/**
*geocodes.js* simply geocodes an address with the mapbox API.
*forecast.js* receives the latitude and longitude and uses the darksky API to get the temperatures.