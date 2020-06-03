<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Aula conceitual de ReactJS
</h3>

## Por que usar React?

O react e responsavél por mostrar toda a parte que o usuário pode enxegar , 
no entanto no react tudo fica dentro do Javascript então usando 
a mesma linguagem podemos fazer o backend com nodeJS , front end com React 
e mobile com ReactNative.

Dentre suas vantagens , está a organização do código pelo conceito de componentização 
o que nos possibilita a divir as responsabilidades da aplicação , além disso 
o React usa programação declarativa, que é quando passamos qual resultado esperamos 
para nossa aplicação e ela se comporta de acordo com o estado que é passado. 


## Conceitos abordados

### Componentização
Tudo no React são componentes , então podemos dividir nossa aplicação  em funções que retornam HTML,CSS e javascript 
, colocando os codigos em arquivos separados (isolando cada funcionalidade),
 logo tudo que possa ser removido do arquivo principal e colocado em outro
sem alterar o principal é um componente . 

Chamamos um componente em outro arquivo como se fosse uma Tag fechada do HTML.
ex: `<Header/>`.

#### Fragments
Nunca devemos colocar um componente de baixo de outro sem ter algo os separando como uma "div", ou podemos usar o conceito de fragments que adiciona essa separação mas sem que a "div" apareça
em nosso codigo. Para isso usamos: `<>  </>` para separar os componentes. 

### Propriedades
São informações que podemos passar de um componente PAI para um componente FILHO. 

PAI: Passamos a propriedade "title" para o filho <Header/> .

    ```jsx
    import React from 'react';
    import Header from './components/Header';
    function App() {
	  return (
	    <>
	      <Header title="React"/>
	      <Header title="NodeJS"/>
	    </>)
	}
    export default App;
    ```
FILHO: Precisamos importar as propriedades passadas do PAI , utilizando (props) e criando a variavel {props.title}.

    ```jsx
    import React from 'react';
    export default function Header(props) {
    return( 
      <header> 
        <h1>{props.title}</h1> 
      </header>
      );
    }
    ```

### Estado 
Estado se assemelha a um array que contém informações sobre o estado atual do componente (parâmetros do componente). 
Usa-se a função useState para alterar os valores do estado. 

useState(): retorna um array com 2 posições a primeira é a variavel que guardaremos as informações e a segunda é uma função para alterar o estado. 
`const [projects,setProjects] = useState([])`.

Obs: Coloque um valor inicial no estado que seja do mesmo tipo da variavel, 
Se a variavel vai ser um array , inicialize o estado com array vazio [], como mostrado no exemplo acima.



### Imutabilidade
 O conceito de imutabilidade diz que não podemos mutar variaveis (incluir informações e excluir informaçõe de maneira direta) nós precisamos sempre recriar a informação aplicando as alterações que desejamos.

Então não podemos utilizar :
`.push()`

Devemos copiar a informação  do array e acrescentar a nova informação.
Em vez de : `projects.push(project)`
Usariamos: `setProjects([...projects, project])`


## Conceitos extras

#### Inserir variavel dentro de string

Trocamos "" por ` ` , por exemplo .
`Novo projeto ${Date.now()}`


#### Como acessar informações colocadas como conteudo do nosso componente? 

Para isso passamos o parametro "children" no componente , assim podemos acessar `<ul>` com varias `<li>` por exemplo, 
Obs: "children" significa o conteudo que  nosso componente recebeu.

Após passar o parametro devemos criar uma variavel {children} em nosso componente "Header".  


#### Axios e cors

axios: é o responsavel por fazer as chamadas APi no nosso fron end. 

Pasta services :  armazena qualquer tipo de arquivo que vai fazer a comunicação
com qualquer serviço externo. 

axios.create: cria uma instancia  , adiciona a baseURL do insominia.

Erro de cors: evita que outros backends se conectem com seu frontend 
mas em ambiente de desenvolvimento podemos instalar o cors (yarn add cors)
e usa-lo em nossa aplicação para podermos nós conectar ao nosso backend.

#### Novas funções e eventos aprendidos

.map(): percorre o array e retorna algo,

`{projects.map(project => <li key=()> {project}</li>)}` 
No entanto quando você tem uma interação no react que percorre um vetor ou lista , temos que  identificar
o primeiro elemento que vem no começo da interação informando a propriedade key=(), 
"key" significa qual é a informação que é unica para cada projeto .

`{projects.map(project => <li key=(project.id)> {project.title}</li>)}`

.useEffect(): Usamos para disparar funções sempre que houver alguma alteração na informação
ou quando a pagina recarregar.
`useEffect( () -> {} , [] )`

1º parametro : {} qual função você quer disparar.
2º parametro : [] quando você quer disparar a função.

onClick(): nome do evento que vai disparar uma função quando o usuario clicar nele.

.then : È uma promise , assim que ele receber a resposta ele vai guardar no response.
` api.get('projects').then(response => { console.log(response)})`



## Instalar dependências

Abra e execute o comando `yarn` no seu terminal para instalar todas as dependências.
