FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE $PORT

CMD ["npm", "run", "build", "&&", "npm", "run", "start"]



