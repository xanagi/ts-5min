FROM node:8-jessie

RUN npm install -g typescript

RUN mkdir /app
WORKDIR /app
