# 📋 SASS config

Você pode declarar algumas variáveis no SASS para definir os breakpoints que deseja utilizar nas suas animações ou definir outros tipos de animações que mais lhe convém.

Após ter instalado o pacote com o NPM, importe o arquivo scss:

```scss
@import "/node_modules/leo-animate.js/dist/leo-animate.scss;
```

Você deve definir as variáveis citadas a seguir somente **antes** da importação do arquivo anterior.

## `$leoAnimate-breakpoints`

Um mapa contendo as definições dos media queries que estarão disponíveis para serem usados com o atributo `data-animate`.

```scss
$leoAnimate-breakpoints: (
    property: max-width,
    sizes: (
        xxl: 1399.98px,
        xl: 1199.98px,
        lg: 991.98px,
        md: 767.98px,
        sm: 575.98px,
    ),
) !default;
```

### `property`

Propriedade utilizada para todos os media queries.

### `sizes`

Cada chave deste mapa terá seu nome compilado com o atributo `data-animate` (data-animate-*key*) dentro do media query especificado no valor.

A compilação dos breakpoints irá ser compilada na ordem que eles estão setados. Se você utiliza `min-width` nos media queries talvez você possa querer inverter a ordem deles.

```css
@media (max-width: 1399.98px) {
    [data-animate-xxl="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 1199.98px) {
    [data-animate-xl="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 991.98px) {
    [data-animate-lg="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 767.98px) {
    [data-animate-md="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 575.98px) {
    [data-animate-sm="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
```

### `$leoAnimate-global`

Mapa que influencia a compilação do atributo `data-animate` puro (sem valores especificados), junto com a classe final adicionada para animar os elementos.

```scss
$leoAnimate-global: (
    responsive: true,
    properties: (transform, opacity)
) !default;
```

#### `responsive`

Booleano para caso haverá ou não variações responsivas de `data-animate`.

#### `properties`

Lista ou mapa contendo todas as propriedades que serão animadas. Isso irá gerar o seletor com o atributo `data-animate` (e variações responsivas caso `responsive` for true) contendo a propriedade `transition-property` com os valores da lista.


```css
[data-animate],
[data-animate-sm],
[data-animate-md],
[data-animate-lg],
[data-animate-xl],
[data-animate-xxl] {
    transition-property: transform, opacity;
}
.--animated {
    transform: initial;
    opacity: initial;
}
```

Se um mapa for passado como chave e valor em `properties`, as chaves também serão setadas como propriedades do seletor.

**scss**
```scss
$leoAnimate-global: (
    responsive: true,
    properties: (transform: translate3d(0, -15px, 0), opacity: 0)
) !default;
```

**css**
```css
[data-animate],
[data-animate-sm],
[data-animate-md],
[data-animate-lg],
[data-animate-xl],
[data-animate-xxl] {
    transition-property: transform, opacity;
    transform: translate3d(0, -15px, 0);
    opacity: 0;
}
```

### `$leoAnimate`

Mapa que agrupa cada animação desejada e influencia a compilação do atributo `data-animate` com valor especificado.

```scss
$leoAnimate: (

    fadeDown: (
        responsive: true,
        properties: (
            transform: translate3d(0, -15px, 0),
            opacity: 0,
        )
    ),
    fadeUp: (
        properties: (
            transform: translate3d(0, 15px, 0),
            opacity: 0,
        )
    ),
    fadeRight: (
        properties: (
            transform: translate3d(-15px, 0, 0),
            opacity: 0,
        )
    ),
    fadeLeft: (
        properties: (
            transform: translate3d(15px, 0, 0),
            opacity: 0,
        )
    ),
) !default;
```
#### `$leoAnimate: (key: value)`

A chave representa o nome do valor no atributo `data-animate.`

#### `$leoAnimate: (key: (responsive: value))`
Booleano para caso haverá ou não variações responsivas de `data-animate="value"`. 

#### `$leoAnimate: (key: (properties: (property: value)))`

Cada propriedade e valor que será utilizado na animação setada.


```css
[data-animate="fadeDown"] {
    transform: translate3d(0, -15px, 0);
    opacity: 0;
}

[data-animate="fadeUp"] {
    transform: translate3d(0, 15px, 0);
    opacity: 0;
}

[data-animate="fadeRight"] {
    transform: translate3d(-15px, 0, 0);
    opacity: 0;
}

[data-animate="fadeLeft"] {
    transform: translate3d(15px, 0, 0);
    opacity: 0;
}

@media (max-width: 1399.98px) {
    [data-animate-xxl="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 1199.98px) {
    [data-animate-xl="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 991.98px) {
    [data-animate-lg="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 767.98px) {
    [data-animate-md="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
@media (max-width: 575.98px) {
    [data-animate-sm="fadeDown"] {
        transform: translate3d(0, -15px, 0);
        opacity: 0;
    }
}
```