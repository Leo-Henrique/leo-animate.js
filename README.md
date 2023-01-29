# leo-animate.js

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/215304446-eb6bfa8e-c96b-4f03-9691-d8d08faa3ee7.gif"
	alt="Captura de tela da demonstração do leo-animate.js" />
</div>

<div align="center">
	<a href="https://sass-lang.com/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
		alt="SASS logo"
		width="65" />
	</a>
    <a href="https://pt-br.reactjs.org/"
	target="_blank"
	rel="external referrer noopener"
	style="display: inline-block; padding: 8px">
		<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
		alt="JavaScript logo"
		width="65" />
	</a>
</div>

<!-- [![en](https://img.shields.io/badge/idioma-en-red.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/idioma-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README-pt-BR.md) -->

## 🔎 Introdução

`leo-animate.js` se trata de uma classe JavaScript que utiliza a [API IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) para aplicar animações na página conforme os elementos estão visíveis na viewport.

leo-animate.js é uma alternativa moderna para aplicar **animações ao scroll e animações ao entrar na página** de forma assíncrona, garantindo que o usuário veja as transições definidas. 


## 🚀 Iniciando

Este repositório é distribuído com o [npm](https://www.npmjs.com/). Efetue a [instalação do NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) após a instalação do [Node.js](https://nodejs.org/pt-br/) ou utilize os links via CDN caso não deseja instalar leo-animate.js.

### Instalação

```bash
npm install leo-animate.js
```

### Incluir os ativos (CSS)

No `<head>` do seu HTML, incorpore via NPM:

```html
<link rel="stylesheet" href="/node_modules/leo-animate.js/dist/leo-animate.css" />
```

Ou via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leo-animate.js/dist/leo-animate.css" />
```

### Incluir os ativos (JavaScript)

Antes da tag de fechamento `<body>` do seu HTML, incorpore via NPM:

```html
<script src="/node_modules/leo-animate.js/dist/leo-animate.js" /></script>
```

Ou via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/leo-animate.js/dist/leo-animate.js" /></script>
```

### Instancie a classe

O construtor se chama **LeoAnimate**:
```js
new LeoAnimate();
```

Em React, envolva sobre um `useEffect` hook:
```js
React.useEffect(() => new LeoAnimate());
```

### Uso

Pronto! Você já pode utilizar o atributo `data-animate` no elemento que você deseja animar com os valores padrão: `fadeDown`, `fadeUp`, `fadeRight` e `fadeLeft`.

```html
<h1 data-animate="fadeRight">
    leo-animate.js
</h1>
```

Os atributos responsivos também estão disponíveis: `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<p data-animate="fadeRight"
data-animate-lg="fadeDown">
    leo-animate.js
</p>
```

## 💻 Recursos

### Descarte o evento `onscroll`

Como leo-animate.js utiliza a API IntersectionObserver para observar quando um elemento estiver visível na viewport para só então executar algo, o evento `onscroll` é totalmente dispensável, tornando desnecessário a execução de uma função diversas vezes conforme o scroll do usuário.

### Garanta a visibilidade da animação

O uso de IntersectionObserver também garante que a animação não execute caso o usuário entre na página mas minimize a janela ou alterne de guia no seu navegador.

![Exemplo da alternância de guia](https://user-images.githubusercontent.com/72027449/215306960-7ff4f802-57c2-49e9-9198-39bca3b157e6.gif)

### Totalmente responsivo

leo-animate.js utiliza um atributo personalizado chamado `data-animate` para aplicar as animações. Esse atributo pode conter várias variações para  breakpoints específicos, possibilitando utilizar animações distintas dependendo do media query desejado.

Setando as animações no HTML:
```jsx
<h1 class="app__title"
data-animate="fadeRight"
data-animate-md="fadeDown">
    leo-animate.js
</h1>
```

CSS gerado:
```css
[data-animate=fadeRight] {
    transform: translate3d(-15px, 0, 0);
    opacity: 0;
}
@media (max-width: 767.98px) {
    [data-animate-md=fadeDown] {
    transform: translate3d(0, -15px, 0);
    opacity: 0;
    }
}
```

Este é um exemplo de uso com as configurações padrão de leo-animate.js, mas você pode [configurar tanto o media query em si tanto como o nome do media query](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README-SASS-config.md) para usar no atributo (data-animate-*custom*).

### Destaque cada elemento

Caso haja mais de um elemento visível em que a animação seria executada ao mesmo tempo que de outro elemento, um delay é automaticamente aplicado na animação.

No gif abaixo por exemplo, NÃO foi setado de forma manual um delay específico para a animação de cada elemento:

![Demonstração do delay aplicado automático](https://user-images.githubusercontent.com/72027449/215304446-eb6bfa8e-c96b-4f03-9691-d8d08faa3ee7.gif)


### Adaptável as preferências de movimento reduzido

leo-animate.js garante que nenhum estilo das animações e o próprio JavaScript seja omitido com quem prefere anular animações.

![Demonstração das animações ativada e desativada no Windows](https://user-images.githubusercontent.com/72027449/215307198-768eb3fb-a1a2-4486-8ce7-c5395f02c161.gif)

## 📋 Opções do construtor

O construtor `LeoAnimate` recebe um objeto opcional como argumento que permite configurar como as animações irão ocorrer. Se você deseja configurar outros tipos de animações ou personalizar os breakpoints, [configure o SASS de leo-animate.js](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README-SASS-config.md).

No objeto `LeoAnimate`, as seguintes propriedades estão disponíveis:

| Propriedade                | Tipo       | Descrição |
| ------------------------- | --------- | ----------- |
| infinite                        | boolean | Define se as animações ocorrerão novamente após a página ter sido rolada para cima. O valor padrão é `false`.
| multipleElementsDelay | number | Define um atraso em milissegundos para a animação ocorrer entre elementos que são exibidos ao mesmo tempo. Definir um número positivo permite utilizar um [atributo especial de sincronização](#atributo-especial-de-sincronização) nos elementos. O valor padrão é `400`.
| transitions                   | object   | Objeto contendo as propriedades de transição CSS que serão aplicadas para todos os elementos. Veja [personalizando transições](#personalizando-transições).


### Atributo especial de sincronização

#### `data-animate-sync` e `data-animate-id`

Quando a propriedade `multipleElementsDelay` do construtor estiver com um número positivo, é possível utilizar o atributo `data-animate-sync` para aplicar a um elemento o mesmo delay da animação de outro elemento.

Utilize `data-animate-id` para dar um nome único ao elemento que você deseja copiar o atraso da animação. Agora basta dar ao elemento que você vai sincronizar o delay o mesmo id como valor de `data-animate-sync`.

Para ser mais claro, considere o seguinte exemplo:

![Demonstração sem atributo de sincronização](https://user-images.githubusercontent.com/72027449/215314942-a4fe61ee-3d2f-4439-8b74-cccfb3cdbbb1.gif)

Agora veja o mesmo exemplo onde o primeiro elemento / célula de cada coluna possui `data-animate-id` com um id único e cada elemento abaixo possui `data-animate-sync` apontando ao respectivo id.

![Demonstração sem atributo de sincronização](https://user-images.githubusercontent.com/72027449/215315773-83af3e43-af1e-47d0-aeef-1d0ca58d2125.gif)

### Personalizando transições

#### `transitions` e `data-animate-{transition}`

O objeto `transitions` do construtor aplica as transições mencionadas abaixo a todos os elementos. No entanto você também pode utilizar os mesmos nomes das chaves no atributo `data-animate` em um elemento específico para substituir a transição global definida no construtor.

Todos os valores recebem uma **string** que deve representar um valor **CSS válido**.

| Propriedade     | Atributo equivalente | Descrição |
| -----------------| -----------------------| ----------- |
| duration          | data-animate-duration          | Define o tempo que a(s) animação(s) leva para ser concluída. O valor padrão é `"600ms"`.
| timingFunction | data-animate-timingFunction | Define a função de temporização da(s) animação(s). O valor padrão é `"ease"`.

