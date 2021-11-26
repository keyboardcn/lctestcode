# Higher version will need 
# "start": "react-scripts --openssl-legacy-provider start"
# in package.json
# otherwise, will result in Error: digital envelope routines::unsupported

From node:12.16.3-alpine 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]