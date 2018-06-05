FROM node

LABEL author: "Shahab Khalid"
LABEL version: "v0.1"
LABEL description: "Sample react-app ready to be use as your app template."

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app 

RUN npm i

EXPOSE 3000/tcp

ENTRYPOINT [ "npm", "start"]
