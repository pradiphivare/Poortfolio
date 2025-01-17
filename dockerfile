# Build the frontend
FROM node:16 AS build-frontend
WORKDIR /Poortfolio/frontend

# Install dependencies and build the frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Set up the backend
FROM node:16 AS stage-1
WORKDIR /Poortfolio/backend

# Install backend dependencies
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Copy built frontend into the backend
COPY --from=build-frontend /Poortfolio/frontend/dist ./public

# Expose backend port
EXPOSE 3000
CMD ["npm", "start"]
