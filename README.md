# Analisador de Sentimentos com Emojis

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app) e utiliza a [API de Sentimentos da API Ninjas](https://api-ninjas.com/api/sentiment) para analisar frases em inglês e retornar um emoji correspondente ao sentimento expresso. É uma maneira envolvente de visualizar o sentimento de textos através de emojis.

## Começando

Para executar este projeto localmente em sua máquina, siga estes passos:

### Pré-requisitos

- Você precisa ter o [Node.js](https://nodejs.org/en/download/) instalado em seu sistema.

### Instalação

1. Clone o repositório para a sua máquina local:
    ```bash
    git clone <https://github.com/SolanoOliveira/Emotocrom>
    ```
2. Navegue até o diretório do projeto e instale as dependências:
    ```bash
    npm install
    ```
3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API de Sentimentos da API Ninjas:
    ```env
    REACT_APP_API_KEY=sua_chave_aqui
    ```
    Substitua `sua_chave_aqui` pela sua chave de API real obtida de [API Ninjas](https://api-ninjas.com/api/sentiment).

### Executando o Projeto

No diretório do projeto, você pode executar vários comandos:

#### `npm start`

Executa o aplicativo no modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador. A página será recarregada se você fizer edições.

## Usando o Analisador de Sentimentos

Basta inserir uma frase em inglês no campo de entrada e submetê-la. O aplicativo, então, exibirá um emoji correspondente ao sentimento da frase analisada.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do repositório, fazer alterações e enviar pull requests.
