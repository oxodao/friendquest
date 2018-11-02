FROM php:7.2.4-fpm-alpine3.7

RUN apk update && \
    apk add --no-cache php7-pdo_pgsql>7.2 postgresql-dev php7>7.2 &&\
    docker-php-ext-install pdo_pgsql &&\
    apk add --no-cache freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev && docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-png-dir=/usr/include/ --with-jpeg-dir=/usr/include/ &&\
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) &&\
  docker-php-ext-install -j${NPROC} gd &&\
  apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev postgresql-dev

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

RUN sed -i "s/user = www-data/user = root/g" /usr/local/etc/php-fpm.d/www.conf && sed -i "s/group = www-data/group = root/g" /usr/local/etc/php-fpm.d/www.conf

USER root
WORKDIR /www

CMD ["php-fpm", "-R"]

