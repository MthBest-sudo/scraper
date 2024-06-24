# Use the latest Puppeteer image from ghcr.io
FROM node:20@sha256:cb7cd40ba6483f37f791e1aace576df449fc5f75332c19ff59e2c6064797160e

# Configure default locale (important for chrome-headless-shell). 
ENV LANG en_US.UTF-8
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chrome that Puppeteer
# installs, work.
ARG CHROME_VERSION="126.0.6478.63"
RUN npx @puppeteer/browsers install chrome@${CHROME_VERSION}
RUN apt-get update && apt-get install cron -y

# Set the working directory
VOLUME /env
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
USER root

COPY cronfile /etc/cron.d/cronfile
RUN chmod 0644 /etc/cron.d/cronfile
RUN crontab /etc/cron.d/cronfile

# Expose port if necessary (e.g., 3000 for typical web applications)
EXPOSE 3000

# Command to run the application
CMD ["cron", "-f"]
