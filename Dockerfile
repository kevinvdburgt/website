# Generate the static files using Node 11
FROM node:11-alpine AS build
WORKDIR /app
COPY package*.json .npmrc /app/
RUN npm install
COPY . /app/
RUN npm run export

# Create a nginx container with the static files from the build
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
