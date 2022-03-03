# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# copies package.json and package-lock.json to Docker environment
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# Installs all node packages
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Copies everything over to Docker environment
COPY . ./
EXPOSE 8080
# start app
CMD ["npm", "start"]