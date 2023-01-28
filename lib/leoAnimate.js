const defaultOptions = {
    infinite: false,
    multipleElementsDelay: 400,
    transitions: {
        duration: "600ms",
        timingFunction: "ease",
    }
}

export default class LeoAnimate {
    constructor(
        options = defaultOptions, 
        attribute = "data-animate",
        animated = "--animated"
    ) {
        this.options = options;
        this.attribute = attribute;
        this.animated = animated;
        this.init();
    }
    get ratio() {
        const hideIn = 0;
        const showIn = 0.5;

        return this.options.infinite ? [hideIn, showIn] : showIn;
    }
    sync(target) { 
        const attrSync = `${this.attribute}-sync`;
        const attrId = `${this.attribute}-id`;
        const hasAttr = target.hasAttribute(attrSync);
        const hasSync = hasAttr && target.getAttribute(attrSync);

        return {
            hasSync,
            get syncDelay() {
                let syncTarget, delay;

                if (hasSync) {
                    syncTarget = document.querySelector(`[${attrId}="${hasSync}"]`);
                    delay = getComputedStyle(syncTarget).transitionDelay;

                    return `${+delay.slice(0, -1) * 1000}ms`;
                }
            } 
        }
    }
    cancel = ({ boundingClientRect, intersectionRatio, target }) => {
        const currentRatio = +intersectionRatio.toFixed(1);
        const beforeScrolling = boundingClientRect.top > 0;

        if ((currentRatio == this.ratio[0] && beforeScrolling)) {
            target.style.removeProperty("transition-delay");
            target.classList.remove(this.animated);
        }
    }
    animate = ({ intersectionRatio, target }, observer) => {
        const handleSync = () => {
            const { multipleElementsDelay } = this.options;
            const { syncDelay } = this.sync(target);

            if (multipleElementsDelay && syncDelay)
                target.style.transitionDelay = syncDelay;

           target.classList.add(this.animated);
        }
 
        if (!this.options.infinite) {
            handleSync();
            observer.unobserve(target);

        } else if (+intersectionRatio.toFixed(1) >= this.ratio[1]) handleSync();
    }
    watch = (entries, observer) => {
        const applyDelay = () => {
            entries.reduce((delay, { isIntersecting, target }) => {
                const { hasSync } = this.sync(target);
                const { multipleElementsDelay } = this.options;

                if (isIntersecting) {
                    if (!hasSync) {
                        if (delay) target.style.transitionDelay = `${delay}ms`;
                        return delay + multipleElementsDelay;
    
                    } else return delay;
                } else return 0;
            }, 0);
        }
        const applyAnimate = () => {
            entries.forEach(entry => {
                if (entry.isIntersecting) 
                    this.animate(entry, observer);
                else
                    this.cancel(entry);
            });
        }
        
        applyDelay();
        applyAnimate();
    }
    setTransitions(element) {
        const { transitions } = this.options;
        const properties = Object.keys(transitions);
        const formatted = (property) => {
            const firstLetter = property.slice(0, 1).toUpperCase();

            return firstLetter + property.slice(1);
        }

        properties.forEach(key => {
            const attr = `${this.attribute}-${key}`;
            const property = `transition${formatted(key)}`;
            const setTransition = value => element.style[property] = value;

            if (element.hasAttribute(attr))
                setTransition(element.getAttribute(attr));
            else
                setTransition(transitions[key]);
        });
    }
    init() {
        const mediaQuery = matchMedia("(prefers-reduced-motion: no-preference)");
        const active = () => {
            if (mediaQuery.matches) {
                const elements = document.querySelectorAll(`[${this.attribute}]`);
                const observer = new IntersectionObserver(this.watch, { threshold: this.ratio});
    
                elements.forEach(element => {
                    this.setTransitions(element);
                    observer.observe(element);
                });
            }
        }
        
        active();
        mediaQuery.addEventListener("change", active);
    }
}