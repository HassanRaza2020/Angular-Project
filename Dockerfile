# Stage 1: Build the Angular application
FROM node:18.20.0 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:1.25.1-alpine AS production-stage
COPY --from=build-stage /app/dist/my-angular-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
