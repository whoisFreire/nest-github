FROM node:18-alpine
WORKDIR /nest-github
COPY . .
RUN npm install && npm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000