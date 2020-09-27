FROM node:12.13.1

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g yarn

COPY . .

RUN yarn install
RUN yarn build

EXPOSE 4000

CMD yarn start

