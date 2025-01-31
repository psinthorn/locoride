# # Dockerfile for Next.js frontend
# FROM node:14-alpine

# WORKDIR /app

# COPY package.json ./app
# RUN npm install

# COPY . .

# RUN  build

# EXPOSE 3000

# CMD ["yarn", "start"]

# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
# COPY package*.json ./



# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]