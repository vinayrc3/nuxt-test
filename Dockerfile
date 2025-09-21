# Use Node LTS image
FROM node:22-slim

# Set working directory
WORKDIR /usr/src/app

# Copy only package files first (cache deps)
COPY package*.json ./

# Install dependencies (include devDependencies for dev)
RUN npm install

# Copy the rest of the code
COPY . .

# Expose dev server port
EXPOSE 3000

# Default command for dev server
CMD ["npm", "run", "dev"]
