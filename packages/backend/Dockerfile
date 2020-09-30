FROM node:12.13.1

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g yarn

COPY . .
ARG PUBLIC_KEY
ARG HASH

ENV NODE_ENV=production
ENV PUBLIC_KEY=$PUBLIC_KEY
ENV HASH=$HASH

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD yarn start

