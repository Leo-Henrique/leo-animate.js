var u = Object.defineProperty;
var d = (r, t, s) => t in r ? u(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var l = (r, t, s) => (d(r, typeof t != "symbol" ? t + "" : t, s), s);
const m = {
  infinite: !1,
  multipleElementsDelay: 400,
  transitions: {
    duration: "600ms",
    timingFunction: "ease"
  }
};
class f {
  constructor(t = m, s = "data-animate", i = "--animated") {
    l(this, "cancel", ({ boundingClientRect: t, intersectionRatio: s, target: i }) => {
      const n = +s.toFixed(1), e = t.top > 0;
      n == this.ratio[0] && e && (i.style.removeProperty("transition-delay"), i.classList.remove(this.animated));
    });
    l(this, "animate", ({ intersectionRatio: t, target: s }, i) => {
      const n = () => {
        const { multipleElementsDelay: e } = this.options, { syncDelay: o } = this.sync(s);
        e && o && (s.style.transitionDelay = o), s.classList.add(this.animated);
      };
      this.options.infinite ? +t.toFixed(1) >= this.ratio[1] && n() : (n(), i.unobserve(s));
    });
    l(this, "watch", (t, s) => {
      const i = () => {
        t.reduce((e, { isIntersecting: o, target: a }) => {
          const { hasSync: c } = this.sync(a), { multipleElementsDelay: h } = this.options;
          return o ? c ? e : (e && (a.style.transitionDelay = `${e}ms`), e + h) : 0;
        }, 0);
      }, n = () => {
        t.forEach((e) => {
          e.isIntersecting ? this.animate(e, s) : this.cancel(e);
        });
      };
      i(), n();
    });
    this.options = t, this.attribute = s, this.animated = i, this.init();
  }
  get ratio() {
    return this.options.infinite ? [0, 0.5] : 0.5;
  }
  sync(t) {
    const s = `${this.attribute}-sync`, i = `${this.attribute}-id`, e = t.hasAttribute(s) && t.getAttribute(s);
    return {
      hasSync: e,
      get syncDelay() {
        let o, a;
        if (e)
          return o = document.querySelector(`[${i}="${e}"]`), a = getComputedStyle(o).transitionDelay, `${+a.slice(0, -1) * 1e3}ms`;
      }
    };
  }
  setTransitions(t) {
    const { transitions: s } = this.options, i = Object.keys(s), n = (e) => e.slice(0, 1).toUpperCase() + e.slice(1);
    i.forEach((e) => {
      const o = `${this.attribute}-${e}`, a = `transition${n(e)}`, c = (h) => t.style[a] = h;
      t.hasAttribute(o) ? c(t.getAttribute(o)) : c(s[e]);
    });
  }
  init() {
    const t = matchMedia("(prefers-reduced-motion: no-preference)"), s = () => {
      if (t.matches) {
        const i = document.querySelectorAll(`[${this.attribute}]`), n = new IntersectionObserver(this.watch, { threshold: this.ratio });
        i.forEach((e) => {
          this.setTransitions(e), n.observe(e);
        });
      }
    };
    s(), t.addEventListener("change", s);
  }
}
export {
  f as default
};
