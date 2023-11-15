FROM postgres

ENV database_username = 'postgresql'
    

RUN apt-get update && apt-get install -y \
    apt-get install npm \
    npm install -y

WORKDIR /database-files

COPY database .

CMD 'npx sequelize-c db:migrate'
