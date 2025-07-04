# Step 1: Use Node.js as the base image
FROM node:16-alpine

# Step 2: Set the working directory
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the project (compile TypeScript to JavaScript)
RUN npm run build

# Step 7: Expose port (NestJS default port)
EXPOSE 3000

# Step 8: Run the application in production mode
# CMD ["npm", "run", "start:prod"]
CMD ["node", "dist/main.js"]