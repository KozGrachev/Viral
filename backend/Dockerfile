# Pull node image from docker hub
FROM node:14

# Set working directory
RUN mkdir /Vital_Docker

WORKDIR /Vital_Docker

# install and cache app dependencies
COPY package*.json /Vital_Docker

# install all dependencies
RUN npm install --also=dev
#
# Copy existing application directory contents
COPY . /Vital_Docker

EXPOSE 3002
CMD [ "node",  "index.js" ]

