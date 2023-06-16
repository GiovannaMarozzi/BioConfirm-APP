FROM node:18-alpine
LABEL AUTHOR="Giovanna Marozzi"
WORKDIR /code
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "server.js" ]