FROM node:19.3-alpine3.16
EXPOSE 3000
WORKDIR /app-timesheet-frontend
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]