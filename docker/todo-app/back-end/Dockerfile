FROM node:14-alpine AS todoback
WORKDIR /todo-app/back-end
ADD node_modules.tar.gz .
COPY . .
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3001
