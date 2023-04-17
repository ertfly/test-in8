# Periodo de desenvolvimento
- Início: 16/04/2022
- Fim: 16/04/2022

# Requisitos
- Docker
- Docker Compose (aceite version '2')

# Instruções de instalação #
- Acesse a pasta onde irá clonar o projeto

- Faça o pull da imagem **ertfly/php8.1-apache-buster**
```
$ docker pull ertfly/php8.1-apache-buster
```
> **_NOTA:_**  A imagem foi criado por mim e pode validar o Dockerfile no link https://github.com/ertfly/dockerfile-php8.1-apache-buster

- Escolha uma pasta de preferência e clone o projeto
```
$ git clone https://github.com/ertfly/test-in8.git
ou
$ git clone git@github.com:ertfly/test-in8.git
```

- Acesse a pasta do projeto
```
$ cd test-in8
```

# Entendendo a estrutura 
```
.
+-- front (desenvolvimento front)
+-- back (desenvolvimento back)
```

- Copie o arquivo **docker-compose-sample.yml** renomeando para **docker-compose.yml**
```
$ cp docker-compose-sample.yml docker-compose.yml
```
> **_NOTA:_**  Os arquivos copiados estão aplicados no .gitignore, e não causará efeitos de modificação

- Acesse a pasta do backend.
```
$ cd back
```

- Copie o arquivo **.env.example** renomeando para **.env**
```
$ cp .env.example .env
```

- Volte a pasta raíz do projeto.
```
$ cd ../
```

- Acesse a pasta do front.
```
$ cd front
```

- Copie o arquivo **.env.sample** renomeando para **.env**
```
$ cp .env.sample .env
```

- Volte a pasta raíz do projeto.
```
$ cd ../
```

- Criei o network dos containers
```
$ docker network create dev-net
```
> **_NOTA:_**  Se a rede dev-net já existir ignore.

- Caso tenha necessidade pode alterar as portas no arquivo **docker-compose.yml**  sua máquina.
```
    ...
    ports:
      - '3000:80'
    ...
    ...
    ports:
      - '8031:80'
    ...
    ...
    ports:
      - '3306:3306'
    ...
``` 

- Uma vez alterado o arquivo **docker-compose.yml** vamos utilizar o docker-compose para criar os containers
```
$ docker-compose up -d --build
```
> **_NOTA:_**  O comando reflete a versão do docker que não tem o docker-compose imbutido.

- Aguarde finalizar a instalação do npm install e yarn install, pode demorar alguns minutos, você pode acompanhar pelo comando
```
$ docker logs test.in8.back -f
```

- Ao finalizar vamos instalar os pacotes das dependências
```
$ docker exec -it test.in8.back composer install
```

## Se sua máquina for linux ou mac leia
- No caso desses sitemas operacionais, as pastas do laravel **storage** ficam sem permissão de escrita, caso for execute os comandos abaixo.
```
$ sh chmod.sh
```
> **_NOTA:_**  O arquivo **chmod.sh** é um bash aplicando chmod nas pastas necessárias

## Rodando a aplicação
- Na porta externa configurada no container **test.in8.front** utilize para acessar o sistema http://localhost:{porta_configurada}/, caso não tenha alterado as portas basta acessar a parte default da configuração http://localhost:3000

## O que foi criado
- 