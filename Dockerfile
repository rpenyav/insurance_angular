# 1. Stage - Build the Angular app
FROM node:20 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --no-optional

COPY . .

RUN npm run build

# 2. Stage - Serve the app with Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/insurance /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
