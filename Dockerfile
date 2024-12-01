# Step 1: Build the SvelteKit App
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variable for build
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

# Build the production version of the app
RUN npm run build

# Step 2: Run the SvelteKit SSR Server
FROM node:18-alpine

WORKDIR /app

# Copy the build from the previous step
COPY --from=builder /app/build /app/build
COPY --from=builder /app/package*.json /app/

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port the server will use
EXPOSE 3000

# Start the server
CMD ["node", "build"]
