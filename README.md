Projeto de Gestão de Produtos


Este é um projeto em React para gerenciar uma lista de produtos, permitindo ao usuário adicionar novos produtos, visualizar a lista de produtos cadastrados e ordenar a lista por valor.

Funcionalidades
Adicionar Produto: O usuário pode adicionar um novo produto através de um formulário.
Exibir Lista de Produtos: Após adicionar um produto, a lista é exibida de forma ordenada, com base no valor de cada produto.
Ordenação dos Produtos: A lista de produtos é automaticamente ordenada por valor de forma crescente.
Controle de Exibição do Formulário: O formulário de adição de produtos pode ser exibido ou ocultado dependendo da interação do usuário.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
CSS: Estilos para o layout da aplicação.
React Hooks: Uso de hooks como useState e useEffect para gerenciar o estado e os efeitos colaterais.
Estrutura do Projeto
O projeto é composto por três principais componentes React:

App: Componente principal que gerencia o estado dos produtos e a lógica de exibição da lista de produtos ou o formulário de adição.
ListaProdutos: Componente responsável por exibir a lista de produtos ordenados por valor.
FormularioProduto: Componente que contém o formulário para adicionar um novo produto.
Arquivos
App.js: Componente principal, onde o estado dos produtos é gerido e a lógica de ordenação e exibição do formulário é implementada.
ListaProdutos.js: Componente que recebe a lista de produtos como props e exibe-os em ordem crescente de valor.
FormularioProduto.js: Componente responsável por capturar os dados de um novo produto através de um formulário.
Como Usar
Instalação
Clone este repositório:
bash
Copiar
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:
bash
Copiar
cd nome-do-repositorio
Instale as dependências:
bash
Copiar
npm install
Executando o Projeto
Inicie o servidor de desenvolvimento:
bash
Copiar
npm start
Abra o navegador e acesse o endereço:
arduino
Copiar
http://localhost:3000
Fluxo de Uso
Adicionar Produto: Ao carregar a página, o formulário para adicionar um novo produto será exibido. Preencha o formulário e clique no botão de adicionar.
Exibir Lista: Após adicionar o produto, a lista de produtos será exibida automaticamente, e o formulário será ocultado.
Ordenação: Os produtos serão exibidos em ordem crescente de valor.
Mostrar Formulário: A qualquer momento, o usuário pode clicar para mostrar novamente o formulário de adição de produtos.
Funcionalidade do Código
useState: Usado para gerenciar o estado dos produtos, a exibição do formulário e a lista de produtos ordenados.
useEffect: Atualiza a lista de produtos sempre que o estado de produtos é alterado, ordenando-os por valor.
handleAdicionarProduto: Função responsável por adicionar um novo produto à lista e ocultar o formulário.
Contribuições
Contribuições são bem-vindas! Para contribuir com o projeto, por favor siga estas etapas:

Fork o repositório.
Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
Faça as alterações desejadas e commit suas mudanças (git commit -am 'Adiciona nova funcionalidade').
Push para a branch (git push origin feature/nome-da-feature).
Abra um Pull Request.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
