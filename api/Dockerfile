FROM php:8.2-cli

RUN apt-get update && apt-get install -y unzip libsqlite3-dev \
    && docker-php-ext-install pdo pdo_sqlite

WORKDIR /var/www/html

COPY . .

RUN chown -R www-data:www-data storage bootstrap/cache

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

EXPOSE 8000

RUN php artisan key:generate

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
