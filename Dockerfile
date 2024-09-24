# For using the official image of Node.js
FROM node:18-alpine

# Set the work enviroment on the container
WORKDIR /app

# Copy all dependencies
COPY package.json ./
COPY package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest od the application
COPY . .

# Expose the app on the port 3001
EXPOSE 3001

# Start the app
CMD ["npm", "start"]
