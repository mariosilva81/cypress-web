# Testes Web com Cypress

Este repositório contém testes Web utilizando o framework Cypress para o site https://automationpratice.com.br. Os testes foram desenvolvidos para validar o comportamento da página em diferentes cenários (login e cadastro) e garantir sua integridade e funcionalidade.

## Requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Configuração

1. Clone este repositório para sua máquina local:

```
git@github.com:mariosilva81/cypress-web.git
```

2. Navegue até o diretório do projeto:

```
cd cypress-web
```

3. Instale as dependências do projeto:

```
npm install
```

## Executando os Testes

Para executar os testes, utilize os seguintes comandos:

```bash
# roda no navegador
npx cypress open

# roda no terminal
npx cypress run
```

Isso abrirá a interface do Cypress, onde você poderá selecionar os testes que deseja executar.

## Estrutura do Projeto

- **cypress/e2e**: Contém os arquivos de teste escritos em JavaScript usando o framework Cypress.
- **cypress/support**: Contém arquivos de suporte, como comandos personalizados ou configurações globais.
- **cypress/fixtures**: Contém dados estáticos para serem utilizados nos testes.

## Contribuindo

Sinta-se à vontade para contribuir com novos testes, melhorias ou correções de bugs. Basta fazer um fork deste repositório, fazer suas alterações e enviar um pull request.

## Recursos Adicionais

Para mais informações sobre o framework Cypress, consulte a [documentação oficial](https://docs.cypress.io/).
```