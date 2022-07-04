FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4000

EXPOSE 27017

CMD [ "node", "server.js" ]