# Use an official Node runtime as the base image
FROM node:19

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY client/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of your application's code into the working directory
COPY client/ .

# Make the application's port accessible outside of the Docker container
EXPOSE 5000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
