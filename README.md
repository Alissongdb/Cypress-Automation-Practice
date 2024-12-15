# Projeto de Testes em Cypress com Padrão Page Object

Este é um projeto de automação de testes da pagina 'https://practice.automationtesting.in',
utilizando **Cypress** e o padrão **Page Object**. O objetivo é garantir a funcionalidade do sistema através de testes automatizados, organizando os testes de forma clara e reutilizável usando o padrão Page Object para gerenciar interações com as páginas da aplicação.

## Estrutura do Projeto

O projeto é organizado utilizando o padrão Page Object, onde cada página do sistema é representada por uma classe separada. Isso torna os testes mais limpos, reutilizáveis e fáceis de manter.

### Arquivos principais

- `loginpage.js`: Contém os métodos de interação com a página de login.
- `login.js`: Define os testes de login utilizando os métodos da `loginpage.js`.
- `registerpage.js`: Contém os métodos de interação com a página de registro.
- `register.js`: Define os testes de registro utilizando os métodos da `registerpage.js`.

Mais testes serão adicionados em breve à medida que novas funcionalidades forem desenvolvidas.

## Configuração

Para começar a usar o projeto, siga as etapas abaixo:

### 1. Instalar dependências

Clone este repositório e instale as dependências necessárias:

git clone https://github.com/Alissongdb/Cypress-Automation-Practice.git
npm install

# Para rodar os testes, utilize o seguinte comando:

npx cypress open

### Como Funciona

Page Object: Cada página do sistema é representada por uma classe, que contém os métodos para interagir com os elementos da página (clicar, preencher campos, verificar mensagens, etc.). Isso facilita a reutilização e manutenção dos testes.

Testes: Cada arquivo de teste define um ou mais cenários de teste e utiliza os métodos definidos nas classes de objetos de página para realizar as ações necessárias.

