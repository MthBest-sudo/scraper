# Use the latest Puppeteer image from ghcr.io
FROM ghcr.io/puppeteer/puppeteer:latest

# Set the working directory
WORKDIR /app
RUN chmod -R a+rw .
# Copy the package.json and package-lock.json or yarn.lock first
# This ensures that npm ci or yarn install runs optimally and layers cache efficiently
COPY package.json ./
COPY package-lock.json ./
COPY node_modules ./
# Install dependencies
RUN npm i
# Uncomment the following line if you are using yarn
# RUN yarn install

# Copy the remaining application code
COPY src ./src
COPY .swrc ./.swrc
COPY .env ./.env

# Expose port if necessary (e.g., 3000 for typical web applications)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]