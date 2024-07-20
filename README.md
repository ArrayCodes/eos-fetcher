# EOS Fetcher

## Описание

EOS Fetcher - это приложение на Node.js, которое каждые 60 секунд отправляет POST-запрос на `https://eos.greymass.com/v1/history/get_actions` и сохраняет полученные данные о действиях в базу данных MongoDB. Приложение гарантирует уникальность записей в базе данных, ориентируясь по полю `trx_id`.

## Требования

- Node.js
- Docker
- MongoDB

## Установка и запуск

### Без Docker

1. Клонируйте репозиторий:

    ```sh
    git clone https://github.com/ваш-username/eos-fetcher.git
    cd eos-fetcher
    ```

2. Установите зависимости:

    ```sh
    npm install
    ```

3. Создайте файл `.env` в корне проекта и добавьте строку подключения к MongoDB:

    ```env
    MONGO_URI=mongodb://127.0.0.1:27017/eos-fetch
    ```

4. Запустите приложение:

    ```sh
    npx ts-node src/index.ts
    ```

### С Docker

1. Клонируйте репозиторий:

    ```sh
    git clone https://github.com/ваш-username/eos-fetcher.git
    cd eos-fetcher
    ```

2. Убедитесь, что Docker и Docker Compose установлены на вашем компьютере.

3. Запустите контейнеры:

    ```sh
    docker-compose up --build
    ```

## Использование

Приложение будет автоматически отправлять запросы к API и сохранять полученные действия в базу данных MongoDB каждые 60 секунд. 

Для проверки данных в MongoDB вы можете использовать MongoDB Compass или любой другой клиент MongoDB, подключившись к базе данных по адресу `mongodb://localhost:27017/eos-fetch`.

### Пример запроса к API

Приложение отправляет следующий запрос:

- **URL**: `https://eos.greymass.com/v1/history/get_actions`
- **Метод**: `POST`
- **Тело запроса**:
    ```json
    {
      "account_name": "eosio",
      "pos": -1,
      "offset": -100
    }
    ```
