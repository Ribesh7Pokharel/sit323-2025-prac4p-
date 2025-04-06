# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# App runs on port 3000 (adjust if different)
EXPOSE 3000

# Start the service
CMD ["node", "microservice.js"]
