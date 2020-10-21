FROM node:12.18.4

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN npm install --silent
RUN npm install react-scripts -g --silent

# add app
COPY . .

# start app
CMD ["npm", "start"]