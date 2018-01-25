FROM node:8.9

RUN mkdir /app
RUN chmod 777 /app/

COPY . /app/
RUN chmod 777 -R /app

EXPOSE 3000

WORKDIR /app

RUN npm install

CMD node index.js