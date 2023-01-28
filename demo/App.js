import "./scss/style.scss";
import IMGJavaScript from "./assets/javascript.svg";
import SVGGitHub from "./assets/svg-github";
import LeoAnimate from "../lib/leoAnimate";

export default function App() {
    setTimeout(() => new LeoAnimate());

    return /*html*/ `
        <div class="app__icon"
        data-animate="fadeDown"
        data-animate-md="fadeDown">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="external noopener noreferrer">
                <img src=${IMGJavaScript}
                alt="JavaScript logo" />
            </a>
        </div>

        <h1 class="app__title"
        translate="no"
        data-animate="fadeRight"
        data-animate-md="fadeDown">
            leo-animate.js
        </h1>

        <div class="btn"
        data-animate="fadeUp"
        data-animate-md="fadeDown">
            <a class="btn__anchor"
            href="https://github.com/Leo-Henrique/leo-react-app"
            target="_blank">
                <span>${SVGGitHub()}</span>

                <span>Get Started</span>
            </a>
        </div>
    `;
}
