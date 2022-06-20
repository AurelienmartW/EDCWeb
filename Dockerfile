From node:16.13.0

ADD . /app/
WORKDIR /app

RUN npm install

RUN npm install -g @angular/cli
RUN npm install http-server -g

EXPOSE 80
CMD http-server -p 80 -c-1 dist/EDCWeb