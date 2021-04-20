FROM node:14
COPY package*.json ./
RUN npm install & npm install --save express
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
