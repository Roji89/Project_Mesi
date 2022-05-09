FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4000
CMD [ "node", "server.js" ]