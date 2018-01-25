FROM node:8.9

RUN mkdir /root/server

COPY . /root/server/

EXPOSE 3000

CMD node /root/server/index.js