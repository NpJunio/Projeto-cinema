FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli
COPY . .
CMD ["node", "dist/main"]
EXPOSE 3001
