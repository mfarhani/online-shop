FROM node:18-slim

WORKDIR /app

COPY . .

RUN yarn install

RUN npm install

RUN npm run build

EXPOSE 3000
# RUN npm run start

CMD ["npm","run","start"]

