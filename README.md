# Sistema de Cadastro de Clientes

Este projeto é um sistema de cadastro de clientes com uma interface frontend em HTML/CSS/JavaScript e um backend em NestJS.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. `web`: Contém o frontend da aplicação.
2. `api`: Contém o backend da aplicação.

### Frontend (web)

O frontend é uma aplicação web simples que permite aos usuários:

- Visualizar uma lista de clientes
- Adicionar novos clientes
- Editar clientes existentes
- Excluir clientes

Tecnologias utilizadas:
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

### Backend (api)

O backend é uma API RESTful construída com NestJS que oferece endpoints para:

- Listar todos os clientes
- Buscar um cliente por ID
- Salvar um novo cliente
- Atualizar um cliente existente
- Excluir um cliente

Tecnologias utilizadas:
- NestJS
- TypeORM
- MySQL

## Configuração e Instalação

### Pré-requisitos

- Node.js
- MySQL

### Passos para instalação

1. Clone o repositório:
```sh
git clone https://github.com/Brayham-Carvalho/api-restful.git
```

3. Instale as dependências do backend:
```sh
cd api
```
5. Configure o banco de dados MySQL no arquivo `app.module.ts`.

6. Inicie o servidor backend:
```sh
npm run start
```

8. Abra o arquivo `index.html` da pasta `web` em um navegador web.

## Uso

Após iniciar o servidor backend e abrir o frontend no navegador, você poderá:

1. Ver a lista de clientes cadastrados.
2. Adicionar um novo cliente preenchendo o formulário e clicando em "Registrar".
3. Editar um cliente existente clicando no ícone de lápis.
4. Excluir um cliente clicando no ícone de lixeira.

## Contribuição

Contribuições são bem-vindas! Por favor, sinta-se à vontade para submeter um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
