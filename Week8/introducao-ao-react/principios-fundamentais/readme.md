# Princípios Fundamentais e como criar um App React com CRA

# Introdução

O React é uma biblioteca de Javascript que auxilia na criação de interfaces front-end e se baseia em 3 princípios (pilares) fundamentais:

1. **Componentização**
2. **Propriedades**
3. **Reatividade**

Assista ao vídeo para entender melhor!

[porque-react.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f96a4e97-4571-48b5-8438-de3eee3d3b16/porque-react.mp4)

# Criando um app React

O único requisito é possuir o Node instalado no sistema, pois é ele junto com seu gerenciador de pacotes npm que nos possibilitará instalar, rodar, gerar builds e deployar aplicações.

- **`build`** é o termo usado para a versão utilizada por clientes finais do nosso negócio
- **`deploy`** é o termo usado para o processo de disponibilização do aplicativo para o mundo externo (normalmente via internet)

Para criar o aplicativo basta rodar o comando:

```bash
**npx create-react-app nome-do-seu-app**
```

O comando acima **cria uma pasta** com o nome escolhido e joga todos os arquivos do template **CRA (create-react-app)** para dentro dela.

- esse processo pode demorar alguns minutos dependendo da sua máquina e internet

- _Por quê **não iniciamos** com o **next.js** em vez do **CRA** (create-react-app)?_
  > Atualmente o React recomenda o next.js na criação de novos aplicativos, porém seu uso requer conhecimentos solidificados em full stack (front e back ao mesmo tempo).
  Nesse início de jornada é importante aprendermos as bases de programação e do React, pois o next.js é apenas um dos múltiplos frameworks mais completos que existem hoje no mercado. Outros exemplos famosos: remix e gatsby.
  Iniciar os estudos em React pelo CRA oferece uma base sólida e essencial que facilitará o aprendizado de ferramentas mais avançadas. Tentar iniciar por esses frameworks pode gerar uma confusão entre o que é específico da ferramenta e o que é próprio do React.
  Mas não se preocupe! Vamos disponibilizar ao longo do curso um material complementar abordando o uso do next.js para que você possa se alinhar ao mercado e voar pelos processos seletivos! Bora codar!
  >
- _Mas eu **li posts** e **assisti vídeos** de pessoas falando que o **CRA** não funciona mais_
  > O CRA não morreu, ele apenas deixou de receber atualizações. Suas ferramentas ainda funcionam e o time do React já publicou que tem planos para atualizá-lo: ele só não é prioridade nesse momento.
  O que recomendam oficialmente é utilizar o next.js no lugar do CRA para **novos projetos** **reais**. Nossa prática de React em projetos de estudo não será afetada por conta do CRA estar desatualizado. Os aplicativos funcionarão normalmente para casos de estudo e aprendizado.
  Pratique no CRA e aprenda a base essencial do React. Quando você tiver construído múltiplos projetos e entendido como o React e o back-end funciona, aí sim faça a movimentação para o next.js, estudando o material complementar que será disponibilizado ao longo do curso.
  >

# Rodando o app

Assim que o comando de criação finalizar, basta entrar no terminal e rodar os seguintes comandos:

```bash
**cd nome-da-pasta-criada-pelo-cra**
```

```bash
**npm run start**
```

Seu sistema irá abrir um navegador automaticamente no endereço **`http://localhost:3000`** e você verá o template CRA!

- é só uma logo do React com alguns textos

Você também pode abri-lo manualmente em seu navegador acessando o localhost na porta 3000.

Tome cuidado para não fechar nem tentar utilizar o terminal que rodou o script de start. Ele ficará ocupado enquanto sua aplicação estiver rodando.

- para encerrar a execução, basta estar no terminal e digitar **`Ctrl + C`**
  - dentro do terminal, **`Ctrl + C`** e **`Ctrl + V`** não são copia e cola!
    - **`Ctrl + C`** é o atalho para interromper qualquer execução
    - **`Ctrl + V`** é o atalho para imprimir o próximo atalho digitado sem executá-lo
    - se você quer utilizar copia e cola, a melhor saída é selecionar com o mouse e utilizar o seu botão direito

Por ora focaremos apenas nos arquivos **App.js** e **App.css**, que ficam dentro da pasta **src**

# Resumo

1. O React possui três princípios fundamentais: componentização, propriedades e reatividade.
2. É possível criar um aplicativo React usando o comando **`npx create-react-app nome-do-seu-app`**.
3. Para rodar o aplicativo criado com o CRA, basta usar o comando **`npm run start`**.
4. É importante começar a aprender React com o CRA antes de passar para frameworks mais completos, como o Next.js.
5. O CRA ainda funciona para projetos de estudo e aprendizado, apesar de ter deixado de receber atualizações.
