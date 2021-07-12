FROM node:15-alpine AS base
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS build
COPY . ./
RUN npm run build

# run
CMD ["npm", "start"]
