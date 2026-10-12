# Padroes de Projeto Criacionais em um Sistema de Streaming

Este repositorio contem a implementacao pratica dos cinco padroes de projeto criacionais (Design Patterns da GoF). O objetivo do projeto e testar e demonstrar como esses padroes resolvem problemas de criacao de objetos simulando o cenario real de uma plataforma de streaming de video (como Netflix ou Prime Video), utilizando TypeScript.

O foco principal e isolar e estruturar a forma como as instancias do sistema sao criadas, garantindo baixo acoplamento e flexibilidade.

---

## Padroes Implementados

### 1. Singleton (Classe Catalogo)
* O que resolve: Garante que uma classe tenha apenas uma unica instancia rodando na aplicacao inteira e cria um ponto de acesso global para ela.
* No projeto: Centraliza o catalogo de midias para que o sistema nao fique criando varias copias desnecessarias na memoria.

### 2. Builder (Classe ConteudoStreaming)
* O que resolve: Permite construir objetos complexos passo a passo, evitando criar aquele construtor gigante cheio de parametros opcionais que confunde o codigo.
* No projeto: Ajuda a montar as informacoes de filmes e series (titulo, tipo, qualidade, idioma) de forma bem flexivel.

### 3. Factory Method (Classe CriadorStreaming)
* O que resolve: Define uma interface ou classe abstrata para criar um objeto, mas deixa as subclasses decidirem qual classe concreta sera instanciada.
* No projeto: As subclasses ProdutoFilme e ProdutoSerie decidem se vao instanciar um Filme ou uma Serie, deixando o fluxo principal separado das classes concretas.

### 4. Abstract Factory (Classe FabricaPlanos)
* O que resolve: Permite criar familias de objetos que estao relacionados entre si sem a necessidade de especificar as classes concretas deles diretamente.
* No projeto: Agrupa a criacao de tudo o que compoe um plano (Qualidade de video, Limite de telas e Politica de anuncios) dependendo se o usuario escolheu o Plano Padrao ou o Premium.

### 5. Prototype (Classe PrototipoUsuario)
* O que resolve: Permite clonar ou copiar objetos que ja existem sem fazer com que o codigo dependa diretamente da classe do objeto que esta sendo copiado.
* No projeto: Cria um metodo simples para duplicar os dados de um Usuario a partir de um perfil que ja foi criado antes.

---

## Tecnologias Utilizadas

* TypeScript
* Node.js

---

## Como Rodar o Projeto

1. Clone o repositorio:
   ```bash
   git clone https://github.com
   ```
2. Instale as dependencias:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```

