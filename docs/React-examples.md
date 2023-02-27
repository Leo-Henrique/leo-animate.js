# Usage examples with React

**⚠️ Warning**

This readme was written primarily with Google Translate. I'll be happy if you make an exception for any grammatical errors!

## Usage in the main component

As leo-animate.js uses *element selection through `document`*, you need to use React`s `useEffect` hook in the component you want to use animations.

This component will usually be your main component (usually named `App`):

```jsx
const App = () => {
    React.useEffect(() => {new LeoAnimate()}, []);
    // ...
}
```

This way, you guarantee that all elements that used the special attribute `data-animate` inside the component in question are obtained by JavaScript.

## Animation on changing routes

If you want an animation to occur on *route changes with `React Router`*, use `useLocation` as a useEffect dependency in your main component:

`src/index.jsx`
```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

`src/App.jsx`
```jsx
import React from "react";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();

    React.useEffect(() => {new LeoAnimate(); }, [location]);
    // ...
}
```

This way, the animation will be displayed according to the use of the special attribute in the desired elements, whenever a new route is requested and rendered.