# Use the latest Puppeteer image from ghcr.io
FROM ghcr.io/puppeteer/puppeteer:latest

# Set the working directory
VOLUME /env
RUN chmod -R a+rw /env
WORKDIR /app
RUN chmod -R a+rw .
RUN chmod -R a+rw /app
# Copy the package.json and package-lock.json or yarn.lock first
# This ensures that npm ci or yarn install runs optimally and layers cache efficiently
COPY package.json ./
# Install dependencies
RUN npm i
RUN npx puppeteer install chrome

# Copy the remaining application code
COPY src ./src
COPY .swrc ./.swrc
COPY .env ./.env
USER root

COPY cronfile /etc/cron.d/cronfile
RUN chmod 0644 /etc/cron.d/cronfile
RUN apt-get update 
RUN apt-get install -y cron
RUN crontab /etc/cron.d/cronfile

# Expose port if necessary (e.g., 3000 for typical web applications)
EXPOSE 3000

# Command to run the application
CMD ["cron", "-f"]
