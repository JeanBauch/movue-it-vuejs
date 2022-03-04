<h1 align="center">
  Movue.it
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

## Features

<p align="center">
	<img alt="Gif Demo" width="60%" src="https://user-images.githubusercontent.com/61170558/156807241-6c782568-c560-481b-a71f-fc5572b3d329.gif">
</p>

- [x] Desenvolvimento de tela unica englobando todos os `componentes`:
  - [x] Componente para a `ExperienceBar`, responsável pela logica de armazear xp do usuário;
  - [x] Componente para `Profile`, responsável pelas informações e foto do usuário, assim como seu nível atual;
  - [x] Componente `CompletedChallenge`, responsável por exibir a quantidade total de desafios completados pelo usuário;
  - [x] Compoente `Countdown`, responsável pelo lógica de cronometrar os 25minutos e dar gatilhos de ação pros demais componentes;
  - [x] Componente `Card`, responsável pela lógica de englobar outros Componentes, puxar novos desafios e suas respectivas ações;
- [x] Desenvolvimento de estados globais com TypeScript:
  - [x] Colocando as devidas tipagens;
  - [x] Desenvolvimento das stors Challenges e Countdown;
  - [x] Mapeamentos dos `States`, `Getters` e `Mutations`;
- [x] Estruturação da arquitetura seguindo o <a href="https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c" target="_blank">`AtomicDesign`</a>;
- [x] Utilização do Tailwind para orgnização do `Design system`;
- [x] Testes unitários com o `Jest`;

## Plus para o próximo passo
- [ ] Desenvolvimento de um BackEnd para fornecer os desafios via API Rest;
- [ ] Tema Dark;

<div style="display: inline_block" align="center"><br>
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-01.png">
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-02.png">
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-03.png">
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-04.png">
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-05.png">
  <img align="center" alt="telaMobile" width="16%" src=".github/images/img-06.png">
</div>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nuxt](https://nuxtjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/pt-BR/)

## 💻 Projeto

O move.it é um app que une a técnica de Pomodoro com a realização de exercícios físicos para quem passa muito tempo na frente do computador.

#### 💻 O que é a técnica de Pomodoro?

O método Pomodoro é simples e dura duas horas. Primeiro, você realiza uma atividade durante 25 minutos. Quando acabar o tempo, descansa 5 minutos. Assim sucessivamente até que complete as duas horas.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://movue-it-jeanbauch-jeanbauch.vercel.app/).

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn` ou `npm install`
- Inicie o servidor com `npm run dev`
- Enjoy

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
