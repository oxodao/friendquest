FROM php:7.2.4-fpm-alpine3.7

RUN apk update && \
    apk add php7-pdo_pgsql>7.2 postgresql-dev php7>7.2 &&\
    docker-php-ext-install pdo_pgsql &&\
    apk del postgresql-dev && rm /var/cache/apk/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN sed -i "s/user = www-data/user = root/g" /usr/local/etc/php-fpm.d/www.conf && sed -i "s/group = www-data/group = root/g" /usr/local/etc/php-fpm.d/www.conf

USER root
WORKDIR /www

CMD ["php-fpm", "-R"]

