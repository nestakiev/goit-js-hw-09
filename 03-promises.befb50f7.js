var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");function i(e,o){(function(e,o){const t=Math.random()>.3;return new Promise(((n,r)=>setTimeout((()=>{t?n({position:e,delay:o}):r({position:e,delay:o})}),o)))})(e,o).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:o,step:t,amount:n}}=e.currentTarget;let r=0,l=0;for(let e=0;e<n.value;e+=1)l+=1,r=Number(o.value)+Number(t.value)*Number(e),i(l,r)}));
//# sourceMappingURL=03-promises.befb50f7.js.map