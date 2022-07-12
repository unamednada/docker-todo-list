# Docker Todo List

Projeto realizado configurando Dockerfile para cada componente integrante (front-end, back-end e tests) e um docker-compose para o deploy local da aplicação.

Para o deploy público da aplicação, ela foi dividida em duas: o cliente e o servidor. Deploy feito no Heroku em dois conteineres:
  - [Frontend](https://unamednada-todo-front.herokuapp.com/)
  - [Backend](https://unamednada-todo-back.herokuapp.com/)

**LISTA DE ENDPOINTS**:

  - `GET /tasks`;
  - `POST /task`;
  - `GET /task/<id>`;
  - `DELETE /task/<id>`;
  - `PUT /task/<id>`;

Para ver as mudanças necessárias ao deploy no Heroku, verifique [as branches](https://github.com/unamednada/docker-todo-list/branches) correspondentes às aplicações aqui mesmo no repositório principal.


Projeto incentivado pela Trybe, no módulo de back-end do curso de Desenvolvimento Web.

---

# Habilidades

  - Usar comandos dockers no CLI - Interface de linha de comando

  - Criar um contêiner Docker para uma aplicação de front-end

  - Criar um contêiner Docker para uma aplicação de back-end

  - Criar um contêiner Docker para uma aplicação de testes

  - Orquestrar os três contêineres utilizando o Docker compose


### 🗒 PARA RODAR O DOCKER-TODO-LIST LOCALMENTE:

1. Clone o repositório
  * `git clone git@github.com:unamednada/docker-todo-list.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd docker-todo-list`

2. Faça o build das images dos respectivos componentes integrantes:
  * Entre na pasta do componente:
    * `cd todo-app/back-end`
  * Faça o build da imagem de acordo com o comando abaixo (verifique o docker-compose.yml na raiz do projeto para maiores informações):
    * `docker build -t todoback .`
  * Repita o processo seguindo as instruções do docker-compose.yml na raiz para os outros dois componentes:
    * A partir da pasta back-end:
      * `cd ../front-end && docker build -t todofront .`
    * Finalizando a partir da pasta fron-end:
      * `cd ../tests && docker build -t todotests .`

3. Orquestre os três componentes (agora imagens geradoras de conteineres) com o docker-compose:
  * Na raíz do projeto, digite:
    * `docker-compose up`

4. Vá até a porta 3000 do seu localhost no navegador para ver a aplicação rodando:
  * Na barra de endereços, digite:
    * `http://localhost:3000`

### 🗒 PARA CONTRIBUIR COM O DOCKER-TODO-LIST:

1. Clone o repositório
  * `git clone git@github.com:unamednada/docker-todo-list.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd docker-todo-list`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-feat-descricao`
    * Exemplo: `git checkout -b mariazinha-feat-mobile-design`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'Feat: mobile responsive design'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-feat-mobile-design`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/unamednada/docker-todo-list/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[MARIAZINHA][FEAT]Mobile design`
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/unamednada/docker-todo-list/pulls) e confira que o seu _Pull Request_ está criado

---

**⚠️ Aguarde review do seu PR ⚠️**

Depois que as mudanças forem revisadas, elas poderão ser incorporadas, ou você pode ter que fazer uma mudança pra que elas sejam revisadas novamente. Fique de olho!

---
