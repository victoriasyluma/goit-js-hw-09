function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");document.querySelector(".form").addEventListener("submit",(async t=>{t.preventDefault();const{delay:n,step:o,amount:i}=t.target.elements,l=Number(n.value),a=Number(o.value),s=Number(i.value);let u=l;const d=({position:t,delay:n})=>function(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{const r={position:e,delay:t};n?o(r):i(r)}),t)}))}(t,n).then((()=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${u}ms`)})).catch((()=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${u}ms`)})).finally((()=>{u+=a}));await d({position:1,delay:l});for(let e=2;e<=s;e++)await d({position:e,delay:a})}));
//# sourceMappingURL=03-promises.b22464f0.js.map