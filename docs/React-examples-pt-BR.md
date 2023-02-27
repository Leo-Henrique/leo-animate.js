# Exemplos de uso com React

## Utilização no componente principal

Como leo-animate.js usa *seleção de elementos através do `document`*, você precisa utilizar o hook `useEffect` do React no componente que deseja utilizar as animações. 

Este componente geralmente será seu componente principal (normalmente chamado `App`):

```jsx
const App = () => {
    React.useEffect(() => {new LeoAnimate()}, []);
    // ...
}
```

Dessa forma, você garante que todos os elementos que utilizaram o atributo especial `data-animate` dentro do componente em questão sejam obtidos pelo JavaScript.

## Animação na mudança de rotas

Se você deseja que uma animação ocorra na *mudanças de rota com o `React Router`*, utilize o `useLocation` como dependência do useEffect no seu componente principal:

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

Dessa forma, a animação será exibida conforme a utilização do atributo especial nos elementos desejados, sempre que uma nova rota for requisitada e renderizada.