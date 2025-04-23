FROM ubuntu:latest

RUN apt-get update && \
    apt-get install nginx -y && \
    apt-get clean 

WORKDIR /Landing-Page-master
COPY . /var/www/html

RUN mv /var/www/html/index.nginx-debian.html indexOriginal.html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]