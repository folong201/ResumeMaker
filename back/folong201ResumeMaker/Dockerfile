FROM php:8.1-apache


RUN apt-get update && \
    apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev


RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


WORKDIR /public

COPY . .


RUN composer install --no-interaction --no-plugins --no-scripts


RUN chown -R www-data:www-data storage && \
    chown -R www-data:www-data bootstrap/cache && \
    chmod -R 775 storage && \
    chmod -R 775 bootstrap/cache


COPY docker/apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite


EXPOSE 80


CMD ["apache2-foreground","php artisan serve"]
