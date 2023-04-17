FROM node:18

# Criação do diretório de trabalho do aplicativo
WORKDIR /app

RUN apt-get update && \
    apt-get install -y openssl

RUN git config --global --add safe.directory /app

CMD npm install && yarn install && yarn $YARN_COMMAND
