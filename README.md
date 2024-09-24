# LTVCo Shortener - URL Shortening Application
This project is a URL shortening application built using React as the part two of the LTVCo Challenge. It allows users to shorten long URLs and access them via a shorter link. The frontend is bootstrapped with Create React App.

## Getting Started
To get the project up and running, follow the instructions below.

### Prerequisites
Ensure you have the following installed on your machine:

Node.js (version 14 or higher)
npm (usually installed with Node.js)
Docker (if you want to run the project in a containerized environment)

## Installing Dependencies
Before running the project, install the required dependencies by navigating to the project directory and running:

>npm install
This will install all necessary libraries listed in package.json.

## Running the Project
There are two ways to run the project: directly in development mode with npm or inside a Docker container using docker-compose.

### Option 1: Run Locally with npm
To start the project in development mode:

>npm start

This will run the app in development mode on http://localhost:5173. The page will reload automatically if you make changes to the code. You can also check the console for lint errors.

### Option 2: Run with Docker Compose
If you prefer to run the project in a Docker container, use docker-compose:

docker-compose up
This command builds the Docker image and starts the application inside a container. Make sure Docker is running on your machine before executing this command.

With docker-compose, there’s no need to manually install dependencies or run npm install. Docker will take care of everything based on the configuration in the docker-compose.yml file.

### Final Note: Deprecation Warning

As of the latest updates, **Create React App** is considered deprecated, which means you may encounter some warnings when installing packages or dependencies. While this doesn't prevent the project from running, it's recommended to look for more up-to-date alternatives in the future.