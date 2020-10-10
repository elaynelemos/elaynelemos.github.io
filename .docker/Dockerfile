FROM node:12.19-buster-slim

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /home/app

RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y apt-utils

RUN apt-get install -y \
  software-properties-common \
  bash-completion \
  ca-certificates \
  net-tools \
  curl \
  wget \
  unzip \
  htop \
  git

RUN yarn global add vue http-server
