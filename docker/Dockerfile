FROM php:7-apache

EXPOSE 80

COPY docker/apache-site-atcs.conf /etc/apache2/sites-available/atcs.conf

RUN set -eux \
	&& apt-get -qq update \
    && pecl channel-update pecl.php.net \
	&& apt-get install -qq -y --no-install-recommends git libpcre3-dev libzip-dev \
    && docker-php-ext-install -j "$(nproc)" bcmath exif mysqli zip \
    && pecl install psr \
    && docker-php-ext-enable psr \
	&& a2enmod rewrite expires \
    && a2dissite 000-default \
    && mkdir /var/www/atcs \
    && chmod ugo+rx /var/www/atcs \
    && a2ensite atcs

RUN set -eux \
    cd /tmp \
    && git clone --depth=1 https://github.com/phalcon/cphalcon \
    && cd cphalcon/build \
    && ./install \
	&& docker-php-ext-enable phalcon \
    && rm -rf /tmp/cphalcon \
    && apt-get -y autoremove

RUN set -eux \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY --chmod=755 docker/docker-entrypoint.sh /usr/local/bin/ 
COPY . /var/www/atcs

WORKDIR /var/www/atcs
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]

