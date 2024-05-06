# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (or package-lock.json if not using pnpm)
COPY package.json pnpm-lock.yaml ./

# Install dependencies including devDependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build application using the local TypeScript compiler from node_modules
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["pnpm", "start"]