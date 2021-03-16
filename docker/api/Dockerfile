FROM php:7-apache

EXPOSE 80

COPY docker/api/apache-site-atcs.conf /etc/apache2/sites-available/atcs.conf

ENV DOCUMENT_ROOT=/var/www/atcs-api

# PHP 
RUN set -eux \
	&& apt-get -qq update \
	&& apt-get install -qq -y --no-install-recommends git libpcre3-dev libzip-dev \
    && docker-php-ext-install -j "$(nproc)" bcmath exif mysqli zip pdo pdo_mysql \
	&& a2enmod rewrite expires \
    && mkdir -p ${DOCUMENT_ROOT} \
    && chmod ugo+rx ${DOCUMENT_ROOT} \
    && a2dissite 000-default \
    && a2ensite atcs 

# Phalcon
RUN set -eux \
    && pecl channel-update pecl.php.net \
    && pecl install psr \
    && docker-php-ext-enable psr \
    && cd /tmp \
    && git clone --depth=1 https://github.com/phalcon/cphalcon \
    && cd cphalcon/build \
    && ./install \
	&& docker-php-ext-enable phalcon \
    && rm -rf /tmp/cphalcon \
    && apt-get -y autoremove

RUN set -eux \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY --chmod=755 docker/api/docker-entrypoint.sh /usr/local/bin/ 

WORKDIR ${DOCUMENT_ROOT}
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]

