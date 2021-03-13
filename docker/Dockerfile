FROM php:7-apache

EXPOSE 80

RUN set -ex \
	&& apt-get -qq update \
	&& apt-get install -qq -y --no-install-recommends \
        git libpcre3-dev libzip-dev \
        # libfreetype6-dev libjpeg-dev libmagickwand-dev libpng-dev libzip-dev \
    && docker-php-ext-install -j "$(nproc)" \
		bcmath exif mysqli zip \
    && pecl channel-update pecl.php.net \
    && pecl install psr \
	&& docker-php-ext-enable psr

RUN cd /tmp \
    && git clone --depth=1 https://github.com/phalcon/cphalcon \
    && cd cphalcon/build \
    && ./install \
	&& docker-php-ext-enable phalcon

ADD --chmod=755 docker/docker-entrypoint.sh /usr/local/bin/ 
COPY --chown=www-data:www-data src/ /var/www/html/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]

