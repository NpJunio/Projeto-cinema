FROM node:18

WORKDIR /app

COPY package*.json ./


RUN npm install -g @nestjs/cli

CMD ["npm", "run", "start:dev"]

EXPOSE 3001
