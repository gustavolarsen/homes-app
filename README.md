# Angular Homes App

Sistema desenvolvido seguindo o passo-a-passo da documentação oficial do Angular, [first-app](https://angular.dev/tutorials/first-app). 

#### Modificações em relação ao projeto original
- Neste meu projeto eu fiz a substituição das `Promises` por `Observables`, nas requisições **http**.

## Como rodar o sistema

- Instalar o Angular se você ainda não tiver

  `npm install -g @angular/cli`

- Instalar o JSON-SERVER para ter acesso ao mock da api

  `npm install -g json-server`

- Clonar o repositório

  `git clone https://github.com/gustavolarsen/homes-app.git`

- Acesse a pasta do projeto via terminal

  `cd homes-app`

- Instale as dependências

  `npm install`

- Execute o mock da api e deixe-o rodando

  `json-server --watch db.json`

- Rode a aplicação

  Em um segudo terminal, acesse a pasta do projeto `homes-app` e rode o comando `ng serve`

## Interface do sistema

![image](https://github.com/gustavolarsen/homes-app/assets/55494775/d54071a1-4f0d-4fc5-955c-63571b31bb0a)
