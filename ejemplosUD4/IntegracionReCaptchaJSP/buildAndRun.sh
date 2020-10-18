#!/bin/sh
mvn clean package && docker build -t com.mycompany/IntegracionReCaptchaJava .
docker rm -f IntegracionReCaptchaJava || true && docker run -d -p 9080:9080 -p 9443:9443 --name IntegracionReCaptchaJava com.mycompany/IntegracionReCaptchaJava