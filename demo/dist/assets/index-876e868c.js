var f=Object.defineProperty;var h=(o,e,n)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;var l=(o,e,n)=>(h(o,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}})();const u="/leo-animate.js/assets/javascript-18ff07a6.svg";function m(){return`
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
    `}const p={infinite:!1,multipleElementsDelay:400,transitions:{duration:"600ms",timingFunction:"ease"}};class y{constructor(e=p,n="data-animate",s="--animated"){l(this,"cancel",({boundingClientRect:e,intersectionRatio:n,target:s})=>{const i=+n.toFixed(1),t=e.top>0;i==this.ratio[0]&&t&&(s.style.removeProperty("transition-delay"),s.classList.remove(this.animated))});l(this,"animate",({intersectionRatio:e,target:n},s)=>{const i=()=>{const{multipleElementsDelay:t}=this.options,{syncDelay:a}=this.sync(n);t&&a&&(n.style.transitionDelay=a),n.classList.add(this.animated)};this.options.infinite?+e.toFixed(1)>=this.ratio[1]&&i():(i(),s.unobserve(n))});l(this,"watch",(e,n)=>{const s=()=>{e.reduce((t,{isIntersecting:a,target:r})=>{const{hasSync:c}=this.sync(r),{multipleElementsDelay:d}=this.options;return a?c?t:(t&&(r.style.transitionDelay=`${t}ms`),t+d):0},0)},i=()=>{e.forEach(t=>{t.isIntersecting?this.animate(t,n):this.cancel(t)})};s(),i()});this.options=e,this.attribute=n,this.animated=s,this.init()}get ratio(){return this.options.infinite?[0,.5]:.5}sync(e){const n=`${this.attribute}-sync`,s=`${this.attribute}-id`,t=e.hasAttribute(n)&&e.getAttribute(n);return{hasSync:t,get syncDelay(){let a,r;if(t)return a=document.querySelector(`[${s}="${t}"]`),r=getComputedStyle(a).transitionDelay,`${+r.slice(0,-1)*1e3}ms`}}}setTransitions(e){const{transitions:n}=this.options,s=Object.keys(n),i=t=>t.slice(0,1).toUpperCase()+t.slice(1);s.forEach(t=>{const a=`${this.attribute}-${t}`,r=`transition${i(t)}`,c=d=>e.style[r]=d;e.hasAttribute(a)?c(e.getAttribute(a)):c(n[t])})}init(){const e=matchMedia("(prefers-reduced-motion: no-preference)"),n=()=>{if(e.matches){const s=document.querySelectorAll(`[${this.attribute}]`),i=new IntersectionObserver(this.watch,{threshold:this.ratio});s.forEach(t=>{this.setTransitions(t),i.observe(t)})}};n(),e.addEventListener("change",n)}}function g(){return setTimeout(()=>new y),`
        <div class="app__icon"
        data-animate="fadeDown"
        data-animate-md="fadeDown">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="external noopener noreferrer">
                <img src=${u}
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
            href="https://github.com/Leo-Henrique/leo-animate.js"
            target="_blank">
                <span>${m()}</span>

                <span>Get Started</span>
            </a>
        </div>
    `}const v=document.getElementById("app");v.innerHTML=g();
