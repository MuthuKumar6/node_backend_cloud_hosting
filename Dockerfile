# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 5000
# CMD ["npm", "start"]


# Use a lightweight Node.js base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the code
COPY . .

# Expose the port your app runs on (e.g., 3000 for Express)
EXPOSE 5000

# Start command
CMD ["node", "server.js"]  # Replace with your start script, e.g., "npm start"