# Desafio - Ionic, Laravel

App de listagem de cartões e transações financeiras realizadas. Possui 4 usuários com favoritos distintos e um dos
usuários inativo

---

## Preparar o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/wandersonsangreal/gs3
   ```
2. Versão ideal do php e node
    ```
    php8.2+
    ```
    ```
    node 22
    ```

2. Instale as dependências do projeto laravel:
   ```
    cd api
    ```
    ```
    composer install
    ```
   Copie o .env
    ```
    cp .env.example .env
    ```
   Gere uma chave
    ```
    php artisan key:generate
    ```
   Caso esteja utilizando Linux, dê as seguintes permissões:
    ```
    chgrp -R www-data storage bootstrap/cache && chmod -R ug+rwx storage bootstrap/cache
    ```
   Rodar Migrations:
    ```
    php artisan migrate --seed
    ```
   Iniciar Servidor:
    ```
    php artisan serve
    ```

2. Instale as dependências do projeto ionic:
   ```
    cd app
    ```
    ```
    npm install -g @ionic/cli
    ```
    ```
    npm install
    ```
   Roda o App
    ```
    ionic serve
    ```
   Acessar no navegador:
    ```
    http://localhost:8100
    ```

## Usuários e "Perfis" (favoritos)

1. Existem 4 usuários fakes cadastrados:
   ```
    123.456.789-78, ativo, [Cartão virtual, Cartão adicional]
    123.456.789-45, ativo, [Seguros, Pacotes]
    123.456.789-12, ativo, [Cartão virtual, Cartão adicional, Seguros, Pacotes]
    123.456.789-32, inativo, []
    ```
   A senha para todos os usuários é ``password``, todos os usuários tem seus próprios cartões e cada cartão têm seus
   lançamentos

---

## Rodar o Projeto

3. Outra forma de rodar o projeto é através do docker
    ```
    docker compose up --build
    ```
   Acessar no navegador:
   ```
   http://localhost:8100
   ```
