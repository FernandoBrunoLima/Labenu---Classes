# JSX: A diferença entre a sintaxe do React e o HTML

# Introdução

O **JSX** é muito parecido com o **HTML** e não é por coincidência:

- sua sintaxe foi criada pelo **React** para transformar código **Javascript** em código **HTML**
  - isso permite que trabalhemos 100% dentro do ambiente **Javascript**, melhorando a organização do projeto e a eficiência de fluxo de dados

Compare o arquivo **App.js** gerado pelo CRA com seus conhecimentos em HTML:

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // ------------ início do JSX ------------------
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // ------------ final do JSX ------------------
  );
}

export default App;
```

- a função **App** é o componente
  - seu retorno é **JSX (quase idêntico à um HTML)**

# Diferenças entre JSX e HTML

Os nomes das tags continuam os mesmos (div é div, button é button, h1 é h1, etc).

Veja abaixo as diferenças:

## 1. Nome de atributos

Em regra geral, alguns **atributos** se tornam **camelCase**:

- onclick vira **onClick**
- onchange vira **onChange**

E outros simplesmente mudam por completo:

- class se torna **className**
- for se torna **htmlFor**

Você pode checar o nome do atributo [**aqui**](https://react.dev/reference/react-dom/components/common#common-props:~:text=These%20standard%20DOM%20props%20are%20also%20supported%20for%20all%20built%2Din%20components%3A) na doc do React!

**Exemplo com onClick:**

```jsx
import logo from './logo.svg';
import './App.css';

function Botao() {

		**// podemos criar funções nesse escopo e utilizá-las no JSX**
		const funcaoCriadaPorMim = () => {
				console.log("Botão foi clicado")
		}

	  return (
			// ------------ início do JSX ------------------
	    **<div className={"botao"}>
					<button onClick={funcaoCriadaPorMim}>Clique aqui</button>
			</div>**
			// ------------ final do JSX ------------------
	  );
}

export default Botao;
```

- analise o código sem executá-lo e interprete o que irá acontecer caso o botão seja clicado
  - resultado (só abra depois de analisar)
    aparecerá no console a frase: “Botão foi clicado”

## 2. Imagens locais

No HTML podíamos passar o **path** (caminho) da imagem para o atributo **src** da tag **img.**

No JSX é preciso **importá-la no topo do arquivo**, e só então passá-la para o **src** entre **{** chaves **}.**

**Exemplo:**

- volte no código do App.js e analise os **imports** e a **tag img**

```jsx
**import logo from './logo.svg';**

// resto do código...

<img **src={logo}** className="App-logo" alt="logo" />

// resto do código...
```

- o arquivo **logo.svg** está sendo importado baseado em seu caminho relativo (veja que existe um arquivo **logo.svg** na mesma pasta onde se encontra o **App.js**)
  - e damos um nome arbitrário, que no caso foi **logo**, para a variável que irá guardar o arquivo importado
  - o atributo **alt** serve para leitores de tela e quando a imagem não é carregada
    - por coincidência ele também guarda a string “**logo**”
- atribuímos a variável **logo entre chaves** para o atributo **src** da tag **img**

## 3. Funções de eventos

No HTML era possível declarar funções em um arquivo JS e referenciá-las no arquivo HTML, através dos atributos de evento.

- essas funções eram chamadas entre aspas e com parênteses:

```html
<-- HTML PURO --> <button **onclick="minhaFuncao()" **>Clique aqui</button>
```

No JSX podemos declarar a função **no próprio componente**, antes do **return,** como visto no botão do **exemplo 1.**

- e como regra, não podemos utilizar os parênteses chamando a função diretamente no JSX, por isso colocamos somente a referência da função (**nome da variável**) e entre **{ chaves }**

```jsx
// JSX
<button **onClick={minhaFuncao}**>Clique aqui</button>
```

## 4. Regra do pai único

Todas as expressões **JSX** devem possuir **um único pai**, ou seja, estar envoltas por algum elemento como **div**, **section**, **article** e outras tags HTML, ou envoltas por um **React Fragment** **`<> </>` .**

**Estrutura incorreta:**

```jsx
import logo from './logo.svg';

function Header() {
  return (
			**// ERRO! A expressão JSX retorna 2 elementos irmãos (img e nav)**
			**<img src={logo} className="App-logo" alt="logo" />

			<nav>
					<button onClick={funcaoQueAtivaProjects}>Projects</button>
					<button onClick={funcaoQueAtivaAbout}>About</button>
					<button onClick={funcaoQueAtivaContact}>Contact</button>
			</nav>**
  );
}

export default Header;
```

**Estrutura correta:**

```jsx
import logo from './logo.svg';

function Header() {
  return (
		**// CORRETO! A expressão JSX retorna um único pai (header)
    <header>
				<img src={logo} className="App-logo" alt="logo" />

				<nav>
						<button onClick={funcaoQueAtivaProjects}>Projects</button>
						<button onClick={funcaoQueAtivaAbout}>About</button>
						<button onClick={funcaoQueAtivaContact}>Contact</button>
				</nav>
    </header>**
  );
}

export default Header;
```

**Estrutura correta (outra alternativa):**

- quando você não quiser criar um elemento apenas para ser pai, pode usar o fragmento!
  - ele diminui a poluição de tags desnecessárias

```jsx
import logo from './logo.svg';

function Header() {
  return (
		**// CORRETO! A expressão JSX retorna um único pai (React.Fragment <></>)
    <>
				<img src={logo} className="App-logo" alt="logo" />

				<nav>
						<button onClick={funcaoQueAtivaProjects}>Projects</button>
						<button onClick={funcaoQueAtivaAbout}>About</button>
						<button onClick={funcaoQueAtivaContact}>Contact</button>
				</nav>
    </>**
  );
}

export default Header;
```

## 5. Expressões JavaScript

Podemos usar expressões Javascript no meio do código **JSX** através das **chaves { }.**

> Relembrando: uma expressão é uma sequência de código que se resolve em **um único valor** (como dica: se entra no console.log então é uma expressão)**.**

**Exemplo:**

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  const titulo = "Boas vindas ao meu App!"; // titulo é uma variável que guarda expressão

  return (
    <div>
      <h1>**{titulo}**</h1>
      <p>Esse é meu app React criado pelo CRA.</p>
    </div>
  );
}

export default App;
```

## 6. Self-closing Tags

Elementos (tags e componentes) que não possuem filhos devem sempre se encerrar com self-closing. Normalmente são tags como img, inputs controlados, hr, br e outras tags, e também componentes sendo chamados dentro de outros componentes (que veremos ao longo dos estudos).

O nome self-closing (autofechamento) vem do uso do **/** ao final da tag de abertura do elemento:

- `**<tagComSelfClosing />**`
- `**<ComponenteComSelfClosing />**`

**Exemplos:**

```jsx
**<img src={logo} className="App-logo" alt="logo" />

<App />

<AindaVeremosComoCriarComponentes />

<br />

<hr />

<input value={aindaVeremosInputsControlados} onChange={funcaoDeControle} />**
```

# Vídeo guia

[video4174317845.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab9e0e64-a2e4-4be3-b2c2-0280bf6a96ca/video4174317845.mp4)

# Resumo

1. O JSX foi criado pelo React para transformar código Javascript em HTML, permitindo que trabalhemos 100% dentro do ambiente Javascript;
2. A função App é um componente, seu retorno é JSX (quase idêntico à um HTML);
3. O nome de alguns atributos em JSX se tornam camelCase, como onClick em vez de onclick, e alguns simplesmente mudam por completo, como className em vez de class;
4. Em JSX é preciso importar imagens no topo do arquivo e só então passá-las para o src entre chaves, diferentemente do HTML, que podíamos passar o caminho da imagem direto no atributo src;
5. No JSX, podemos declarar a função no próprio componente, antes do return, como visto no botão do exemplo 1. É possível referenciá-las com o nome da variável entre chaves, como em onClick={minhaFuncao};
6. Toda expressão JSX deve possuir um único pai.
