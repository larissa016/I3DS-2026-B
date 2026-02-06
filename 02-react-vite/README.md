# React + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (ou [oxc](https://oxc.rs) quando usado em [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Compilador React

O Compilador React atualmente não é compatível com SWC. Veja [este problema](https://github.com/vitejs/vite-plugin-react/issues/428) para acompanhar o progresso.

## Expansão da configuração do ESLint

Se você está desenvolvendo uma aplicação para produção, recomendamos o uso do TypeScript com regras de linting baseadas em tipos habilitadas. Confira o [template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para informações sobre como integrar TypeScript e [`typescript-eslint`](https://typescript-eslint.io) em seu projeto.

## Recursos Adicionados

- Adicionado package.json com dependências para React, ReactDOM e Vite.
- Incluído SVG do logo do Vite no diretório público.
- Criado App.css para estilizar a aplicação.
- Desenvolvido App.jsx como o componente principal da aplicação.
- Adicionado SVG do logo do React no diretório de assets.
- Criado index.css para estilos globais.
- Implementado main.jsx para renderizar o componente App.
- Configurado o Vite com vite.config.js para suporte ao React.
