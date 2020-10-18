@echo off
call mvn clean package
call docker build -t com.mycompany/IntegracionReCaptchaJava .
call docker rm -f IntegracionReCaptchaJava
call docker run -d -p 9080:9080 -p 9443:9443 --name IntegracionReCaptchaJava com.mycompany/IntegracionReCaptchaJava