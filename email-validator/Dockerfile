# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript app
RUN npx tsc

# Make the container's port 5000 available to the outside
EXPOSE 5000

# Run the app
CMD ["node", "dist/index.js"]
