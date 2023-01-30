(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=""+new URL("javascript-18ff07a6.svg",import.meta.url).href;function p(){return`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <g clip-path="url(#a)">
                <path fill="#1E1E1E" fill-rule="evenodd" d="M12 .957C5.747.957.677 6.026.677 12.28c0 5.002 3.245 9.246 7.743 10.744.566.105.774-.246.774-.545 0-.27-.01-1.162-.016-2.108-3.15.685-3.814-1.336-3.814-1.336-.515-1.309-1.257-1.657-1.257-1.657-1.028-.702.077-.688.077-.688 1.137.08 1.736 1.167 1.736 1.167 1.01 1.73 2.649 1.23 3.295.941.101-.731.395-1.231.719-1.514-2.515-.286-5.16-1.257-5.16-5.595 0-1.237.443-2.247 1.167-3.04-.117-.285-.505-1.436.11-2.996 0 0 .95-.304 3.114 1.16A10.85 10.85 0 0 1 12 6.433c.962.004 1.931.13 2.836.381 2.161-1.465 3.11-1.16 3.11-1.16.617 1.559.23 2.71.112 2.996.726.793 1.165 1.803 1.165 3.04 0 4.348-2.648 5.305-5.17 5.586.407.351.768 1.04.768 2.097 0 1.515-.013 2.734-.013 3.107 0 .301.204.654.778.543 4.496-1.499 7.737-5.741 7.737-10.742C23.323 6.026 18.253.957 12 .957Z" clip-rule="evenodd"/>
                <path fill="#181616" d="M4.966 17.214c-.025.056-.114.073-.194.034-.083-.036-.129-.113-.102-.17.024-.058.113-.074.195-.035.082.037.13.115.1.17Zm.458.511c-.053.05-.159.027-.23-.052-.075-.079-.089-.184-.034-.235.056-.05.158-.026.233.052.074.08.088.185.032.236Zm.447.652c-.07.049-.183.004-.253-.097s-.07-.222.002-.27c.07-.049.182-.005.253.095.069.102.069.223-.002.272Zm.611.63c-.061.069-.194.05-.29-.043-.1-.091-.127-.22-.065-.29.063-.068.196-.049.293.044.1.091.129.221.063.29Zm.844.366c-.027.089-.154.13-.283.091-.128-.038-.212-.142-.186-.232.027-.09.155-.131.284-.09.128.038.212.141.185.231Zm.927.068c.003.093-.106.17-.24.172-.136.004-.245-.072-.247-.164 0-.094.107-.17.242-.173.135-.003.245.072.245.165Zm.862-.147c.016.091-.077.185-.211.21-.131.024-.253-.033-.27-.123-.016-.093.08-.187.21-.21.134-.024.254.03.271.123Z"/>
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
        </svg>
    `}var y=Object.defineProperty,g=(c,i,n)=>i in c?y(c,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[i]=n,d=(c,i,n)=>(g(c,typeof i!="symbol"?i+"":i,n),n);const b={infinite:!1,multipleElementsDelay:400,transitions:{duration:"600ms",timingFunction:"ease"}};class v{constructor(i=b,n="data-animate",r="--animated"){d(this,"cancel",({boundingClientRect:e,intersectionRatio:t,target:a})=>{const o=+t.toFixed(1),s=e.top>0;o==this.ratio[0]&&s&&(a.style.removeProperty("transition-delay"),a.classList.remove(this.animated))}),d(this,"animate",({intersectionRatio:e,target:t},a)=>{const o=()=>{const{multipleElementsDelay:s}=this.options,{syncDelay:l}=this.sync(t);s&&l&&(t.style.transitionDelay=l),t.classList.add(this.animated)};this.options.infinite?+e.toFixed(1)>=this.ratio[1]&&o():(o(),a.unobserve(t))}),d(this,"watch",(e,t)=>{const a=()=>{e.reduce((s,{isIntersecting:l,target:u})=>{const{hasSync:h}=this.sync(u),{multipleElementsDelay:m}=this.options;return l?h?s:(s&&(u.style.transitionDelay=`${s}ms`),s+m):0},0)},o=()=>{e.forEach(s=>{s.isIntersecting?this.animate(s,t):this.cancel(s)})};a(),o()}),this.options=i,this.attribute=n,this.animated=r,this.init()}get ratio(){return this.options.infinite?[0,.5]:.5}sync(i){const n=`${this.attribute}-sync`,r=`${this.attribute}-id`,e=i.hasAttribute(n)&&i.getAttribute(n);return{hasSync:e,get syncDelay(){let t,a;if(e)return t=document.querySelector(`[${r}="${e}"]`),a=getComputedStyle(t).transitionDelay,`${+a.slice(0,-1)*1e3}ms`}}}setTransitions(i){const{transitions:n}=this.options,r=Object.keys(n),e=t=>t.slice(0,1).toUpperCase()+t.slice(1);r.forEach(t=>{const a=`${this.attribute}-${t}`,o=`transition${e(t)}`,s=l=>i.style[o]=l;i.hasAttribute(a)?s(i.getAttribute(a)):s(n[t])})}init(){const i=matchMedia("(prefers-reduced-motion: no-preference)"),n=()=>{if(i.matches){const r=document.querySelectorAll(`[${this.attribute}]`),e=new IntersectionObserver(this.watch,{threshold:this.ratio});r.forEach(t=>{this.setTransitions(t),e.observe(t)})}};n(),i.addEventListener("change",n)}}function w(){return setTimeout(()=>new v),`
        <div class="app__icon"
        data-animate="fadeDown"
        data-animate-md="fadeDown">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="external noopener noreferrer">
                <img src=${f}
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
            href="https://github.com/Leo-Henrique/leo-animate.js#-get-started"
            target="_blank">
                <span>${p()}</span>

                <span>Get Started</span>
            </a>
        </div>
    `}const D=document.getElementById("app");D.innerHTML=w();
