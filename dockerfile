# Step 1: Build the React frontend
FROM node:16 AS build-frontend

# Set working directory for the frontend
WORKDIR /Poortfolio/frontend

# Copy the frontend package files and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend files and build the React app
COPY frontend/ ./
RUN npm run build

# Step 2: Set up the Node.js backend
FROM node:16

# Set working directory for the backend
WORKDIR /app/backend

# Copy the backend package files and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY backend/ ./

# Copy the built React frontend into the backend's public directory
COPY --from=build-frontend /app/frontend/build ./public

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
