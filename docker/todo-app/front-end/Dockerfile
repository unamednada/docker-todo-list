FROM node:14-alpine AS todofront
WORKDIR /todo-app/front-end
ADD node_modules.tar.gz .
COPY . .
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000
