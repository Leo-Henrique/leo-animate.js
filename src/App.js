import "./scss/style.scss";
import IMGJavaScript from "./assets/javascript.svg";
import SVGGitHub from "./assets/svg-github";

export default function App() {
    return /*html*/ `
        <div class="app__icon">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="external noopener noreferrer">
                <img src=${IMGJavaScript}
                alt="JavaScript logo" />
            </a>
        </div>

        <h1 class="app__title"
        translate="no">
            leo-animate.js
        </h1>

        <a class="btn"
        href="https://github.com/Leo-Henrique/leo-react-app"
        target="_blank">
            <span>${SVGGitHub()}</span>

            <span>Get Started</span>
        </a>
    `;
}
