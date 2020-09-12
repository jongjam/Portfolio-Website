# pull official base image
FROM node:14.10.1-alpine3.10

# set working directory
WORKDIR /my-app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /my-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3001

# add app
COPY . ./

# start app
CMD ["npm", "start"]