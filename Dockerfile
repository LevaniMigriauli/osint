# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Step 4: Copy the rest of your application files
COPY . .

# Step 5: Build the application
RUN npm run build

# Step 6: Serve the built app with a simple static file server
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expose the port where the app will run
EXPOSE 3000
