# Multi stage Dockerfile to build and run the Next.js app

# Stage 1: Build the app with Node.js as builder
# 
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json before other files to working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# -------------------------------------------------------------------------------------

# Stage 2: Production
# Create a new image from the base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json before other files to working directory
COPY --from=builder /app/package.json /app/package-lock.json ./

# Install dependencies for production only
RUN npm install --only=production

# Copy the built app from the builder image
COPY --from=builder /app/.next ./.next

# Copy the public folder
COPY --from=builder /app/public ./public

# Copy the .env file
# COPY .env.local /app/.env.local

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]