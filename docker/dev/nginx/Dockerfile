FROM node:9.11.1-alpine AS node
FROM nginx:1.13.12-alpine

RUN apk update \
	&& apk add libstdc++ \
	&& rm -rf /tmp/* /var/cache/apk/*

RUN rm -rf /etc/nginx/conf.d \
 && mkdir -p /etc/nginx/sites-available \
 && mkdir -p /etc/nginx/sites-enabled

ADD nginx.conf /etc/nginx/nginx.conf
ADD www.conf /etc/nginx/sites-available/www.conf
RUN ln -s /etc/nginx/sites-available/www.conf /etc/nginx/sites-enabled/www.conf

# NodeJS copy from node image
COPY --from=node /usr/local/share/doc/node /usr/local/share/doc/node
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/include/node /usr/local/include/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /opt/yarn-* /opt/yarn
RUN ln -vs /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
		&& ln -vs /opt/yarn/bin/yarn /usr/local/bin/yarn \
		&& ln -vs /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg

WORKDIR /www

ENTRYPOINT ["nginx"]

