## Requisitos

- node `^12.18.0`
- npm `^6.0.0`

## Executando o projeto

1. Clone o projeto: `git clone git@github.com:monteiromarceloc/simple-react-form.git` (ou com HTTPS: `git clone https://github.com/monteiromarceloc/simple-react-form.git`)
1. Instale as dependencias: `cd simple-react-form && npm i`
1. Inicie o development server: `npm start`

## Executando os testes

## Sobre o projeto

O projeto foi iniciado a partir do create-react-app e consiste em um formulário com validação nos campos. Há uma função exclusiva para validar as regras definidas para a senha. Caso novas regras surjam, podem ser acrescentadas lá. 

Como há apenas uma tela, não foi implementada nenhuma estratégia para rotas, mas pode ser implementada facilmente se necessário, pois o arquivo pages/Router.js pode assumir essa função. Para estilizacão, foi utilizado CSS convencional e padrão BEM.

Poderiam ter sido utilizadas blibliotecas como: react-router-dom, yup, axios, styled-components para proporcionar maior escalabilidade, mas optou-se por não utiliza-las para minimizar a quantidade de boilerplate code no projeto.