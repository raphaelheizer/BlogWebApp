# FrameworkDigitalBlogWebApp

Este projeto utiliza a versão 8.3.29 do Angular. (LTS)

## Observações

**MUITO IMPORTANTE: A aplicação, infelizmente, não está finalizada neste instante, por motivos de falta de tempo hábil para tal.**

Não é possível adicionar conteúdo, apenas navegar pelo que já está criado.

Executando o comando `ng serve` do NPM deve ser suficiente para executar a aplicação, *mas* é importante frisar que nas configurações do arquivo angular.json adicionei um arquivo de proxy, remapeando as conexões locais feitas do localhost:8080 (servidor Java, que deve estar rodando em background) para evitar possíveis erros de cross-origin (que são comuns no Angular).

Mas, se por algum motivo, `ng serve` não for suficiente e a aplicação não estabelecer comunicação com o back-end, execute `ng serve --proxy-config proxy.conf.json`. Isso fará com que a comunicação com o servidor (localhost:8080) seja remapeada para o caminho localhost:400/api/* sem problemas.

A aplicação será executada, como default, em localhost:4200

Não utilize build de produção. Não testei a build com --prod.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
