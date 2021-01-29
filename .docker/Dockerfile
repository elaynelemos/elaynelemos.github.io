FROM node:14.15-buster-slim

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /home/app

RUN apt-get update \
  && apt-get upgrade -y \
  && apt-get install -y apt-utils

RUN apt-get install -y \
  software-properties-common \
  bash-completion \
  ca-certificates \
  curl \
  wget \
  unzip \
  git

RUN yarn global add vue http-server
