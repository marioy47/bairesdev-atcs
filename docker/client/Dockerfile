FROM node:lts-alpine

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY client/package.json ./
COPY client/package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY client ./

# start app
CMD ["npm", "start"]
