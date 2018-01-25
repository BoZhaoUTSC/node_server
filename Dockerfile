FROM node:8.9

RUN mkdir /root/server
RUN chmod 777 /root/server/

COPY . /root/server/
RUN chmod 777 -R /root/server

EXPOSE 3000

WORKDIR /root/server

RUN npm install

CMD sleep 10000000