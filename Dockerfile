FROM node:hydrogen
WORKDIR /app
COPY package.json /app
COPY prisma /app/prisma
RUN npm i
COPY . /app
RUN npm run build
RUN npm install -g dotenv-cli