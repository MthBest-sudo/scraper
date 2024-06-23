# Use the latest Puppeteer image from ghcr.io
FROM ghcr.io/puppeteer/puppeteer:latest

# Set the working directory
WORKDIR /app
RUN chmod -R a+rw .
RUN chmod -R a+rw /app

# Copy the package.json and package-lock.json or yarn.lock first
# This ensures that npm ci or yarn install runs optimally and layers cache efficiently
COPY package.json ./
# Install dependencies
RUN npm i

# Copy the remaining application code
COPY src ./src
COPY .swrc ./.swrc
COPY .env ./.env
RUN touch /var/log/cron.log
RUN (crontab -l ; echo "0 8-20 * * * cd /app && npm run start >> /var/log/cron.log") | crontab

# Expose port if necessary (e.g., 3000 for typical web applications)
EXPOSE 3000

# Command to run the application
CMD cron && tail -f /var/log/cron.log
