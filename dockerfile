# Use the latest Puppeteer image from ghcr.io
FROM node:20@sha256:cb7cd40ba6483f37f791e1aace576df449fc5f75332c19ff59e2c6064797160e

# Configure default locale (important for chrome-headless-shell). 
ENV LANG en_US.UTF-8
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true


# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chrome that Puppeteer
# installs, work.
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

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
