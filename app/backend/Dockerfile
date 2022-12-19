FROM node:19.3-alpine3.16
EXPOSE 3001
WORKDIR /app-timesheet-backend
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start", "dev" , "debug" ]