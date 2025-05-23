# OJN-Portfolio

## 👋 Olá! Este é o meu Portfólio Pessoal

Este projeto é onde mostro um pouco sobre mim, os projetos que já desenvolvi e as tecnologias que estou a aprender e a usar. Pense nele como um cartão de visita digital, feito para que outras pessoas, como recrutadores ou colegas desenvolvedores, possam conhecer melhor o meu trabalho e as minhas habilidades.

## 🎯 Para que serve este Portfólio?

O objetivo principal é simples:

*   **Apresentar quem eu sou:** Um pouco da minha história e paixão por desenvolvimento.
*   **Mostrar meus projetos:** Alguns dos trabalhos que já fiz, para dar uma ideia do que sou capaz de construir.
*   **Listar minhas habilidades:** As linguagens de programação, ferramentas e tecnologias que domino ou estou a aprender.
*   **Facilitar o contato:** Um jeito fácil para quem quiser conversar sobre projetos, oportunidades ou apenas trocar uma ideia.

## 🛠️ Como este Portfólio foi construído?

Para criar este site, usei algumas tecnologias e ferramentas bem legais do mundo do desenvolvimento web:

*   **Vite:** É uma ferramenta de construção moderna que torna o desenvolvimento mais rápido. Diferente do Create React App, o Vite carrega as páginas quase instantaneamente e faz o site funcionar mais rápido.
*   **React:** É como o cérebro do site. É uma biblioteca JavaScript que ajuda a construir interfaces de utilizador de forma organizada, dividindo tudo em pequenos pedaços chamados "componentes" (como o menu de navegação, a secção "Sobre Mim", etc.).
*   **Bootstrap:** Usei um pouquinho do Bootstrap para ajudar com o visual e garantir que o site fique bonito e funcional em diferentes tamanhos de ecrã (como celulares, tablets e computadores).
*   **HTML5 e CSS3:** São a base de qualquer site. O HTML estrutura o conteúdo e o CSS dá o estilo visual.
*   **JavaScript (JS):** É a linguagem que adiciona interatividade ao site. O React é feito em JavaScript, e também usei JS para algumas funcionalidades específicas, como o menu que aparece no telemóvel.
*   **AOS (Animate On Scroll):** Uma biblioteca que usei para criar aquelas animações que acontecem quando você rola a página (os elementos aparecendo suavemente).
*   **Vanta.js:** É a biblioteca responsável por aquele fundo animado com as linhas que se mexem na secção inicial do portfólio.

## 🚀 Como rodar este projeto no seu computador

Se quiser ver o código em ação ou até mesmo fazer algumas modificações para aprender, siga estes passos:

1.  **Descarregue o código:**
    *   Se recebeu um ficheiro `.zip`, descompacte-o numa pasta no seu computador.

2.  **Tenha o Node.js e o npm instalados:**
    *   O React e o Vite precisam do Node.js para funcionar. Se ainda não tem, pode descarregá-lo e instalá-lo a partir do site oficial: [nodejs.org](https://nodejs.org/).

3.  **Abra o Terminal (ou PowerShell/Linha de Comandos):**
    *   Navegue até à pasta onde descompactou o projeto. Por exemplo, se a pasta se chama `OJN-Portfolio-Vite` e está nos seus Downloads, o comando seria algo como:
        ```bash
        cd Downloads/OJN-Portfolio-Vite
        ```

4.  **Instale as dependências:**
    *   Dentro da pasta do projeto, no terminal, execute o comando:
        ```bash
        npm install
        ```
    *   Este comando vai descarregar todas as bibliotecas que o projeto precisa. Pode levar alguns minutinhos.

5.  **Inicie o projeto:**
    *   Depois que o `npm install` terminar, execute o comando:
        ```bash
        npm run dev
        ```
    *   Isso vai iniciar o servidor de desenvolvimento do Vite. O site abrirá automaticamente no seu navegador no endereço `http://localhost:3000`.
    *   Agora você pode ver o portfólio a funcionar e, se quiser, editar os ficheiros para ver as alterações em tempo real!

## 📂 Estrutura básica das pastas

Para se localizar no código:

*   `public/`: Contém ficheiros estáticos como imagens, fontes, etc.
*   `src/`: É onde fica o código principal! Aqui estão os componentes (`App.jsx`), o CSS principal (`main.css`), etc.
*   `index.html`: A página HTML principal onde o React "injeta" o site.
*   `package.json`: Lista todas as dependências do projeto e os scripts (como `npm run dev`).

## 🔄 Diferenças entre esta versão e a anterior

Esta versão do portfólio usa Vite em vez de Create React App, o que traz algumas vantagens:

*   **Desenvolvimento mais rápido:** O Vite carrega as páginas quase instantaneamente durante o desenvolvimento.
*   **Builds mais eficientes:** Quando o site estiver pronto para publicação, o Vite gera arquivos menores e mais otimizados.
*   **Configuração mais simples:** O Vite tem uma configuração mais moderna e direta.

Todas as funcionalidades do portfólio original foram mantidas, incluindo:
*   Menu responsivo para telemóveis
*   Animações ao rolar a página
*   Fundo animado na secção inicial
*   Formulário de contato funcional

## ✨ Autor

Feito por Oneir Júnior!

---

Espero que este README ajude a entender melhor o projeto! 
