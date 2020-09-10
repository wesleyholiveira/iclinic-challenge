# Objetivo
O projeto em questão tem como objetivo fazer integração com os serviços da iClinic.

# Tecnologias
- Node.JS (v.12+)
- Express
- Joi
- Jest
- Sequelize (ORM)
- Postgres
- Docker

# Configurações
As configurações do projeto como credenciais, URLs dos serviços da iClinic e dados do banco de dados devem ser preenchidos em um arquivo **.env**. O arquivo **.env.example** já possui a estrutura, basta apenas renomeá-lo para **.env** e preencher as informações.
O arquivo **.env.test** é utilizado no **Jest** para execução dos testes, o driver configurado para teste é o sqlite.

**IMPORTANTE:** O nome do host no banco de dados tem que ser o mesmo do serviço do banco de dados declarado no **docker-compose.yml**.

# Rodando o projeto
Para rodar o projeto é bem simples, primeiramente deve se instalar o **sequelize-cli** para rodar as migrations e os seeders:

```npm install --save-dev sequelize-cli```

Em segundo lugar, devemos rodar as migrations e os seeders:
```
npx sequelize db:migrate
npx sequelize db:seed:all
```

E em terceiro lugar, construimos as imagens da aplicação e rodamos os containers:
```
docker-compose build
docker-compose up -d
```