FROM nginx:latest

ADD sources.list /etc/apt/

RUN apt-get clean

RUN apt-get update \
    && apt-get install net-tools -y \
	&& apt-get install -y procps \
	&& apt-get install curl -y \
	&& apt-get install iputils-ping -y \
	&& cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime