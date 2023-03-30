# leo-animate.js

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/215304446-eb6bfa8e-c96b-4f03-9691-d8d08faa3ee7.gif"
	alt="Screenshot of the leo-animate.js demo" />
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

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/Leo-Henrique/leo-animate.js/blob/main/docs/README-pt-BR.md)

**⚠️ Warning**

This readme was written primarily with Google Translate. I'll be happy if you make an exception for any grammatical errors!

## 🔎 Introduction

`leo-animate.js` is a JavaScript module that uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to apply animations on the page according to the elements are visible in the viewport.

leo-animate.js is a modern alternative to apply **scroll animations and page enter animations** asynchronously, ensuring that the user sees the defined transitions.

## 🚀 Get started

This repository is distributed with the [npm package manager](https://www.npmjs.com/). Perform the [Installation of Node.js](https://nodejs.org/pt-br/) which already has npm as default package manager.

### Installation

```bash
npm i leo-animate.js
```

### Include the CSS

At the top of your stylesheet, include:

```css
@import "/node_modules/leo-animate.js/dist/leo-animate.css"
layer(leo-animate.js);
```

[layer()](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) is just to create a new cascade layer to identify the styles applied by leo-animate.js. **You must [delete it in production](https://caniuse.com/?search=%40import%20layer) or if you are importing the styles with SASS**.

### Include the JavaScript

At the top of your module-like script file, include:

```js
import LeoAnimate from "/node_modules/leo-animate.js/dist/leo-animate.js"
```

### Instantiate the class

```js
new LeoAnimate();
```

You might want to refer to some [usage examples with React!](https://github.com/Leo-Henrique/leo-animate.js/blob/main/docs/React-examples.md)

### Usage

Ready! You can already use the `data-animate` attribute on the element you want to animate with the default values: `fadeDown`, `fadeUp`, `fadeRight` and `fadeLeft`.

```html
<h1 data-animate="fadeRight">
    leo-animate.js
</h1>
```

Responsive attributes are also available: `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<p data-animate="fadeRight"
data-animate-lg="fadeDown">
    leo-animate.js
</p>
```

NOTE: If you want to use only the responsive attributes, you must specify at least `data-animate` with no value to apply the animations.

## 💻 Features

### Discard the `onscroll` event

As leo-animate.js uses the IntersectionObserver API to observe when an element is visible in the viewport and only then execute something, the `onscroll` event is completely unnecessary, making it unnecessary to execute a function several times according to the user's scroll.

### Ensure animation visibility

Using IntersectionObserver also ensures that the animation does not run if the user enters the page but minimizes the window or switches tabs in their browser.

![Tab switching example](https://user-images.githubusercontent.com/72027449/215306960-7ff4f802-57c2-49e9-9198-39bca3b157e6.gif)

### Fully Responsive

leo-animate.js uses a custom attribute called `data-animate` to apply the animations. This attribute can contain several variations for specific breakpoints, making it possible to use different animations depending on the desired media query.

Setting animations in HTML:
```jsx
<h1 class="app__title"
data-animate="fadeRight"
data-animate-md="fadeDown">
    leo-animate.js
</h1>
```

CSS compiled:
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

This is an example of using the default settings of leo-animate.js, but you can [configure both the media query itself and the name of the media query](https://github.com/Leo-Henrique/leo-animate.js/blob/main/README-SASS-config.md) to use in the (data-animate-*custom*) attribute.

### Highlight each element

If there is more than one visible element where the animation would run at the same time as another element, a delay is automatically applied to the animation.

In the gif below, for example, a specific delay was NOT manually set for the animation of each element:

![Demonstration of automatic applied delay](https://user-images.githubusercontent.com/72027449/215304446-eb6bfa8e-c96b-4f03-9691-d8d08faa3ee7.gif)


### Adaptable to reduced motion preferences

leo-animate.js ensures that none of the animations are styled and the JavaScript itself is omitted with those who prefer to override animations.

![Demonstration of animations on and off on Windows](https://user-images.githubusercontent.com/72027449/215307198-768eb3fb-a1a2-4486-8ce7-c5395f02c161.gif)

## 📋 Builder Options

The `LeoAnimate` constructor receives an optional object as an argument that allows configuring how the animations will occur. If you want to configure other types of animations or customize breakpoints, [configure SASS from leo-animate.js](https://github.com/Leo-Henrique/leo-animate.js/blob/main/docs/SASS-config.md).

In the `LeoAnimate` object, the following properties are available:

| Property | Type | Description |
| ------------------------- | --------- | ----------- |
| infinite | boolean | Sets whether animations will recur after the page has been scrolled up. The default value is `false`.
| multipleElementsDelay | number | Sets a delay in milliseconds for the animation to occur between elements that are displayed at the same time. Setting a positive number allows you to use a [sync-special-attribute](#sync-special-attribute) on elements. The default value is `400`.
| transitions | object | Object containing the CSS transition properties that will be applied to all elements. See [customizing transitions](#customizing-transitions).


### Sync special attribute

#### `data-animate-sync` e `data-animate-id`

When the constructor's `multipleElementsDelay` property has a positive number, it is possible to use the `data-animate-sync` attribute to apply the same animation delay to an element as another element.

Use `data-animate-id` to give a unique name to the element you want to copy the animation delay. Now just give the element that you are going to synchronize the delay with the same id as the value of `data-animate-sync`.

To be clearer, consider the following example:

![Demo without sync attribute](https://user-images.githubusercontent.com/72027449/215314942-a4fe61ee-3d2f-4439-8b74-cccfb3cdbbb1.gif)

Now see the same example where the first element / cell of each column has `data-animate-id` with a unique id and each element below has `data-animate-sync` pointing to the respective id.

![Demo without sync attribute](https://user-images.githubusercontent.com/72027449/215315773-83af3e43-af1e-47d0-aeef-1d0ca58d2125.gif)

### Customizing transitions

#### `transitions` e `data-animate-{transition}`

The `transitions` object of the constructor applies the transitions mentioned below to all elements. However, you can also use the same key names in the `data-animate` attribute on a specific element to override the global transition defined in the constructor.

All values are given a **string** that must represent a **valid CSS** value.

| Property | Equivalent attribute | Description |
| -----------------| -----------------------| ----------- |
| duration | data-animate-duration | Sets the time the animation(s) takes to complete. The default value is `"600ms"`.
| timingFunction | data-animate-timingFunction | Defines the timing function of the animation(s). The default value is `"ease"`.