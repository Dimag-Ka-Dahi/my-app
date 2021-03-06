# build environment
FROM node:13.8.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
COPY . .
# RUN npm ci --silent
# RUN npm install react-scripts@3.0.1 -g --silent
# COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# docker build -t example:prod .
# docker run -it --rm -p 1337:80 example:prod