# Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose application port
EXPOSE 8080

# Run the application
CMD ["npm", "start"]