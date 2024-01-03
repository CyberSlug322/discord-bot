FROM node:18

WORKDIR /usr/src/app

COPY ./package*.json .

RUN apt update && apt install -y ffmpeg
RUN npm install

COPY . .
CMD [ "npm", "run", "start" ]
