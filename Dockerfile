FROM node:23.11.1-alpine3.21

# set working directory inside the container
WORKDIR /app

# copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# install dependencies
RUN npm i

# copy the entire project (this will exclude files in .dockerignore)
COPY . .

# informs Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# start application
ENTRYPOINT ["node", "index.js"]