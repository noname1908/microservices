FROM node:8

WORKDIR /usr/src

COPY package.json .

RUN npm install --only=production

COPY . .

EXPOSE 3333

CMD ["npm", "start"]