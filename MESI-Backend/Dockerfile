#Preparing base that can be used for development
FROM node:16-alpine as base

ENV NODE_ENV=production
ENV PORT=4000
ENV NODE_USER_PATH=/home/node/
ENV APP_PATH=/home/node/app/
ENV NPM_CACHE_PATH=/home/node/npm_temporary_cache/

RUN apk add git
RUN npm i -g npm@8

RUN mkdir -p $APP_PATH $NPM_CACHE_PATH
RUN chown -R node:node $NODE_USER_PATH

COPY --chown=node:node . $APP_PATH

USER node
WORKDIR $APP_PATH

RUN npm install -f --cache $NPM_CACHE_PATH
RUN rm -rf $NPM_CACHE_PATH

EXPOSE $PORT

CMD ["npm", "start"]

#########################################################
#########################################################
#########################################################
#Build stage that create production ready files
FROM base as build

ENV NODE_ENV=production

RUN npm run build
RUN npm prune -f

#########################################################
#########################################################
#########################################################
#Production stage to serve files threw nginx
FROM node:16-alpine as serve

RUN npm i -g npm@8 serve
ENV APP_PATH=/home/node/app/

RUN mkdir -p $APP_PATH
RUN chown -R node:node $APP_PATH

COPY --chown=node:node --from=build /home/node/app/build $APP_PATH

USER node
WORKDIR $APP_PATH

EXPOSE 4000

CMD ["serve"]
