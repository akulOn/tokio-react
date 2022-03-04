# Stage 1: Use yarn to build the app
FROM node:14 as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install
CMD ["npm", "run", "build"]

# Stage 2: Copy the JS React SPA into the Nginx HTML directory
FROM bitnami/nginx:latest
COPY --from=builder /usr/src/app/build /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
