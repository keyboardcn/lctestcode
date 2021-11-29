# Higher version will need 
# "start": "react-scripts --openssl-legacy-provider start"
# in package.json
# otherwise, will result in Error: digital envelope routines::unsupported

From node:12.16.3-alpine as react-builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY ./ .

RUN npm run build

From nginx:1.19.1 as production-stage
RUN mkdir /app
COPY --from=react-builder /app/build/. /app

COPY nginx.conf /etc/nginx/nginx.conf
