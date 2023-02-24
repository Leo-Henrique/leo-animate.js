# 📋 SASS config

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/docs/SASS-config.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/docs/SASS-config-pt-BR.md)

**⚠️ Warning**

This readme was written primarily with Google Translate. I'll be happy if you make an exception for any grammatical errors!

You can declare some variables in SASS to define the breakpoints you want to use in your animations or define other types of animations that suit you best.

After installing the package with NPM, import the scss file:

```scss
@import "/node_modules/leo-animate.js/dist/leo-animate.scss";
```

You must define the variables mentioned below only **before** importing the previous file.

## `$leoAnimate-breakpoints`

A map containing the media query definitions that will be available for use with the `data-animate` attribute.

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

Property used for all media queries.

### `sizes`

Each key in this map will have its name compiled with the `data-animate` attribute (data-animate-*key*) within the media query specified in the value.

The compilation of breakpoints will be compiled in the order they are set. If you use `min-width` in media queries you might want to reverse their order.

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

Map that influences compilation of the pure `data-animate` attribute (no values specified), along with the final class added to animate the elements.

```scss
$leoAnimate-global: (
    responsive: true,
    properties: (transform, opacity)
) !default;
```

#### `responsive`

Boolean for whether or not there will be responsive variations of `data-animate`.

**OBS:** **If you are going to use any breakpoint, this option must be *true*** to apply the transitions as mentioned below in the responsive variations of the attribute.

#### `properties`

List or map containing all properties that will be animated. This will generate the selector with the `data-animate` attribute (and responsive variations if `responsive` is true) containing the `transition-property` property with the list values.

**NOTE:** The list values are also used to generate the final class that animates the elements. Therefore **every unique property that was used in any animation must be specified here.**

```css
[data-animate],
[data-animate-sm],
[data-animate-md],
[data-animate-lg],
[data-animate-xl],
[data-animate-xxl] {
    transition-property: transform, opacity;
}
/* final class */
.--animated {
    transform: initial;
    opacity: initial;
}
```

If a map is passed as key and value in `properties`, the keys will also be set as selector properties.

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

Map that groups each desired animation and influences the compilation of the `data-animate` attribute with specified value.

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

The key represents the name of the value in the `data-animate.` attribute.

#### `$leoAnimate: (key: (responsive: value))`
Boolean for whether or not there will be responsive variations of `data-animate="value"`.

#### `$leoAnimate: (key: (properties: (property: value)))`

Each property and value that will be used in the set animation.

The variable shown above influences the following compilation:
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