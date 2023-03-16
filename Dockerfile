FROM node:14-alpine AS BUILD_IMAGE

WORKDIR /nest

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]
