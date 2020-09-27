FROM node:12.13.1
ARG REACT_APP_API

RUN mkdir -p /app
WORKDIR /app
RUN npm install -g yarn

COPY package.json ./

COPY . .

ENV REACT_APP_API=$REACT_APP_API

EXPOSE 3000

#Install and Build
RUN yarn install --ignore-optional
RUN yarn build

# Main command
CMD yarn start
