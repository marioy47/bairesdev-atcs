FROM node:lts-alpine

COPY client/ /app

WORKDIR /app

RUN set -eux \
	&& yarn install \
	&& yarn build

