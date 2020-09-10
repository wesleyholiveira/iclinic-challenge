FROM node:alpine

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Bundle app source
COPY . .

# Install dependencies
COPY package.json .
RUN npm install

# Exports
EXPOSE 3001
CMD [ "npm", "run", "start" ]