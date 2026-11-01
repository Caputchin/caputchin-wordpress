"use strict";
var Caputchin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

  // ../../node_modules/.pnpm/@cap.js+widget@0.1.53/node_modules/@cap.js/widget/cap.min.js
  var require_cap_min = __commonJS({
    "../../node_modules/.pnpm/@cap.js+widget@0.1.53/node_modules/@cap.js/widget/cap.min.js"(exports, module) {
      "use strict";
      (() => {
        var _e, _t, _i, _s, _r, _n, _a, _o, _l, _c, _h, _d, _p, _u, _g, _h_instances, v_get, m_fn, b_fn, w_fn, f_fn, k_fn, y_fn, x_fn, __fn, E_fn, A_fn, _C, T_fn, S_fn;
        const e = "vibrate" in navigator && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if ("undefined" == typeof window) return;
        const t = (e2, t2 = {}) => window?.CAP_CUSTOM_FETCH ? window.CAP_CUSTOM_FETCH(e2, t2) : fetch(e2, t2);
        function i(e2, t2) {
          let i2 = (function(e3) {
            let t3 = 2166136261;
            for (let i3 = 0; i3 < e3.length; i3++) t3 ^= e3.charCodeAt(i3), t3 += (t3 << 1) + (t3 << 4) + (t3 << 7) + (t3 << 8) + (t3 << 24);
            return t3 >>> 0;
          })(e2), s2 = "";
          function r2() {
            return i2 ^= i2 << 13, i2 ^= i2 >>> 17, i2 ^= i2 << 5, i2 >>> 0;
          }
          for (; s2.length < t2; ) {
            s2 += r2().toString(16).padStart(8, "0");
          }
          return s2.substring(0, t2);
        }
        let s = null;
        async function r(e2) {
          const t2 = ((e3) => {
            const t3 = atob(e3), i3 = new Uint8Array(t3.length);
            for (let e4 = 0; e4 < t3.length; e4++) i3[e4] = t3.charCodeAt(e4);
            return i3;
          })(e2), i2 = new TextDecoder().decode(await (async function(e3) {
            if ("undefined" != typeof DecompressionStream) try {
              const t3 = new DecompressionStream("deflate-raw"), i3 = t3.writable.getWriter(), s2 = t3.readable.getReader();
              i3.write(e3).then(() => i3.close()).catch(() => {
              });
              const r2 = [];
              for (; ; ) {
                const { done: e4, value: t4 } = await s2.read();
                if (e4) break;
                r2.push(t4);
              }
              let n2 = 0;
              for (const e4 of r2) n2 += e4.length;
              const a2 = new Uint8Array(n2);
              let o2 = 0;
              for (const e4 of r2) a2.set(e4, o2), o2 += e4.length;
              return a2;
            } catch {
            }
            return s || (s = new Promise((e4, t3) => {
              const i3 = window.CAP_PAKO_URL || "https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako_inflate.min.js", r2 = document.createElement("script");
              r2.src = i3;
              const n2 = window.CAP_SCRIPT_NONCE || window.CAP_CSS_NONCE;
              n2 && r2.setAttribute("nonce", n2), r2.onload = () => {
                window.pako?.inflateRaw ? e4(window.pako) : t3(new Error("[cap] pako loaded but inflateRaw is missing"));
              }, r2.onerror = () => {
                s = null, t3(new Error(`[cap] failed to load pako fallback from ${i3}`));
              }, document.head.appendChild(r2);
            })), (await s).inflateRaw(e3);
          })(t2));
          return new Promise((e3) => {
            var t3 = setTimeout(() => {
              n2(), e3({ __timeout: true });
            }, 2e4), s2 = document.createElement("iframe");
            s2.setAttribute("sandbox", "allow-scripts"), s2.setAttribute("aria-hidden", "true"), s2.style.cssText = "position:absolute;width:1px;height:1px;top:-9999px;left:-9999px;border:none;opacity:0;pointer-events:none;";
            var r2 = false;
            function n2() {
              r2 || (r2 = true, clearTimeout(t3), window.removeEventListener("message", a2), s2.parentNode && s2.parentNode.removeChild(s2));
            }
            function a2(t4) {
              if (s2.contentWindow && t4.source === s2.contentWindow) {
                var i3 = t4.data;
                i3 && "object" == typeof i3 && ("cap:instr" === i3.type ? (n2(), i3.blocked ? e3({ __blocked: true, blockReason: i3.blockReason || "automated_browser" }) : i3.result ? e3(i3.result) : e3({ __timeout: true })) : "cap:error" === i3.type && (n2(), e3({ __timeout: true })));
              }
            }
            window.addEventListener("message", a2);
            const o2 = window.CAP_SCRIPT_NONCE || window.CAP_CSS_NONCE, l2 = o2 ? ` nonce="${String(o2).replace(/"/g, "&quot;")}"` : "";
            s2.srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><script' + l2 + ">" + i2 + "\n</script></body></html>", document.body.appendChild(s2);
          });
        }
        let n = null;
        const a = () => {
          if (n) return n;
          const e2 = window.CAP_CUSTOM_WASM_URL || "https://cdn.jsdelivr.net/npm/@cap.js/wasm@0.0.7/browser/cap_wasm_bg.wasm";
          return n = fetch(e2).then((e3) => {
            if (!e3.ok) throw new Error(`Failed to fetch wasm: ${e3.status}`);
            return e3.arrayBuffer();
          }).then((e3) => WebAssembly.compile(e3)).catch((e3) => {
            throw n = null, e3;
          }), n;
        };
        "object" == typeof WebAssembly && "function" == typeof WebAssembly.compile && a().catch(() => {
        });
        let o = null;
        function l() {
          return o || (o = URL.createObjectURL(new Blob(['(()=>{const e=async({salt:e,target:t})=>{let n=0;const o=new TextEncoder,r=4*t.length,s=Math.floor(r/8),a=r%8,l=t.length%2==0?t:`${t}0`,i=l.length/2,c=new Uint8Array(i);for(let e=0;e<i;e++)c[e]=parseInt(l.substring(2*e,2*e+2),16);const f=a>0?255<<8-a&255:0;for(;;)try{for(let t=0;t<5e4;t++){const t=e+n,r=o.encode(t),l=await crypto.subtle.digest("SHA-256",r),i=new Uint8Array(l);let g=!0;for(let e=0;e<s;e++)if(i[e]!==c[e]){g=!1;break}if(g&&a>0&&(i[s]&f)!==(c[s]&f)&&(g=!1),g)return void self.postMessage({nonce:n,found:!0});n++}}catch(e){return console.error("[cap worker]",e),void self.postMessage({found:!1,error:e.message})}},t=e=>{const t=BigInt("0x"+e.N);let n=BigInt("0x"+e.x);const o=0|e.t,r=Math.max(64,Math.floor(o/50)),s=performance.now();for(let e=0;e<o;e+=r){const s=Math.min(o,e+r);for(let o=e;o<s;o++)n=n*n%t;s<o&&self.postMessage({progress:s/o})}self.postMessage({found:!0,y:n.toString(16),durationMs:(performance.now()-s).toFixed(2)})};if("object"!=typeof WebAssembly||"function"!=typeof WebAssembly?.instantiate)return console.warn("[cap worker] wasm not supported, falling back to alternative solver. this will be significantly slower."),void(self.onmessage=async({data:n})=>"rsw"===n?.kind?t(n):e({salt:n.salt,target:n.target}));let n=null;self.onmessage=async({data:o})=>{if("rsw"===o?.kind)return t(o);const{salt:r,target:s,wasmModule:a}=o;if(a instanceof WebAssembly.Module&&null===n){const t=(e=>{try{let t,o=0,r=null;const s=()=>(null!==r&&0!==r.byteLength||(r=new Uint8Array(t.memory.buffer)),r),a=new TextEncoder,l=(e,t,n)=>{if(void 0===n){const n=a.encode(e),r=t(n.length,1)>>>0;return s().subarray(r,r+n.length).set(n),o=n.length,r}let r=e.length,l=t(r,1)>>>0;const i=s();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;i[l+c]=t}if(c!==r){0!==c&&(e=e.slice(c));const t=c+3*e.length;l=n(l,r,t,1)>>>0,r=t;const o=s().subarray(l+c,l+r),{written:i}=a.encodeInto(e,o);c+=i,l=n(l,r,c,1)>>>0}return o=c,l},i={wbg:{}};i.wbg.__wbindgen_init_externref_table=()=>{const e=t.__wbindgen_export_0,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)};const c=new WebAssembly.Instance(e,i);return t=c.exports,t.__wbindgen_start&&t.__wbindgen_start(),n=(e,n)=>{const r=l(e,t.__wbindgen_malloc,t.__wbindgen_realloc),s=o,a=l(n,t.__wbindgen_malloc,t.__wbindgen_realloc),i=o;return BigInt.asUintN(64,t.solve_pow(r,s,a,i))},!0}catch(e){return console.error("[cap worker] failed to init wasm from module:",e),!1}})(a);if(!t)return console.warn("[cap worker] wasm init failed, falling back to JS solver."),e({salt:r,target:s})}if(null===n)return console.warn("[cap worker] no wasm module provided, falling back to JS solver."),e({salt:r,target:s});try{const e=performance.now(),t=n(r,s),o=performance.now();self.postMessage({nonce:Number(t),found:!0,durationMs:(o-e).toFixed(2)})}catch(e){console.error("[cap worker]",e),self.postMessage({found:!1,error:e.message||String(e)})}},self.onerror=e=>{self.postMessage({found:!1,error:e})}})();'], { type: "application/javascript" })), o);
        }
        class c {
          constructor(e2) {
            this._size = e2, this._workers = [], this._idle = [], this._queue = [], this._wasmModule = null, this._spawnFailures = 0;
          }
          setWasm(e2) {
            this._wasmModule = e2;
          }
          _spawn() {
            const e2 = l(), t2 = new Worker(e2);
            return t2._busy = false, this._workers.push(t2), this._idle.push(t2), t2;
          }
          _replaceWorker(e2) {
            const t2 = this._workers.indexOf(e2);
            -1 !== t2 && this._workers.splice(t2, 1);
            const i2 = this._idle.indexOf(e2);
            -1 !== i2 && this._idle.splice(i2, 1);
            try {
              e2.terminate();
            } catch {
            }
            return this._spawnFailures++, this._spawnFailures > 3 ? (console.error("[cap] worker spawn failed repeatedly, not retrying"), null) : this._spawn();
          }
          _ensureSize(e2) {
            for (; this._workers.length < e2; ) this._spawn();
          }
          run(e2, t2) {
            return new Promise((i2, s2) => {
              this._queue.push({ salt: e2, target: t2, resolve: i2, reject: s2 }), this._dispatch();
            });
          }
          runMsg(e2, t2) {
            return new Promise((i2, s2) => {
              this._queue.push({ msg: e2, onProgress: t2, resolve: i2, reject: s2 }), this._dispatch();
            });
          }
          _dispatch() {
            for (; this._idle.length > 0 && this._queue.length > 0; ) {
              const e2 = this._idle.shift(), t2 = this._queue.shift(), { resolve: i2, reject: s2 } = t2, r2 = void 0 !== t2.msg;
              let n2 = false;
              const a2 = ({ data: l2 }) => {
                if (!n2) {
                  if (!l2 || "number" != typeof l2.progress || l2.found) n2 = true, e2.removeEventListener("message", a2), e2.removeEventListener("error", o2), this._spawnFailures = 0, this._idle.push(e2), l2.found ? i2(r2 ? l2 : l2.nonce) : s2(new Error(l2.error || "worker failed")), this._dispatch();
                  else if (t2.onProgress) try {
                    t2.onProgress(l2.progress);
                  } catch {
                  }
                }
              }, o2 = (t3) => {
                if (n2) return;
                n2 = true, e2.removeEventListener("message", a2), e2.removeEventListener("error", o2);
                const i3 = this._replaceWorker(e2);
                s2(t3), i3 && this._dispatch();
              };
              e2.addEventListener("message", a2), e2.addEventListener("error", o2), r2 ? e2.postMessage(t2.msg) : this._wasmModule ? e2.postMessage({ salt: t2.salt, target: t2.target, wasmModule: this._wasmModule }, []) : e2.postMessage({ salt: t2.salt, target: t2.target });
            }
          }
          terminate() {
            for (const e2 of this._workers) try {
              e2.terminate();
            } catch {
            }
            this._workers = [], this._idle = [], this._queue = [];
          }
        }
        class h extends HTMLElement {
          constructor() {
            super();
            __privateAdd(this, _h_instances);
            __privateAdd(this, _e, null);
            __privateAdd(this, _t, navigator.hardwareConcurrency || 8);
            __publicField(this, "token", null);
            __privateAdd(this, _i);
            __privateAdd(this, _s);
            __privateAdd(this, _r);
            __privateAdd(this, _n);
            __privateAdd(this, _a);
            __privateAdd(this, _o);
            __privateAdd(this, _l, false);
            __privateAdd(this, _c);
            __privateAdd(this, _h);
            __privateAdd(this, _d, null);
            __privateAdd(this, _p, null);
            __privateAdd(this, _u, null);
            __privateAdd(this, _g, null);
            __privateAdd(this, _C, () => {
              if (__privateGet(this, _s)) {
                try {
                  this.scrollIntoView({ behavior: "smooth", block: "center" });
                } catch {
                  this.scrollIntoView();
                }
                __privateGet(this, _s).classList.remove("invalid"), __privateGet(this, _s).offsetWidth, __privateGet(this, _s).classList.add("invalid"), setTimeout(() => __privateGet(this, _s)?.classList.remove("invalid"), 1500);
              }
            });
            __privateGet(this, _c) && __privateGet(this, _c).forEach((e2, t2) => {
              this.removeEventListener(t2.slice(2), e2);
            }), __privateSet(this, _c, /* @__PURE__ */ new Map()), this.boundHandleProgress = this.handleProgress.bind(this), this.boundHandleSolve = this.handleSolve.bind(this), this.boundHandleError = this.handleError.bind(this), this.boundHandleReset = this.handleReset.bind(this);
            try {
              __privateSet(this, _h, this.attachInternals());
            } catch {
            }
          }
          getI18nText(e2, t2) {
            return this.getAttribute(`data-cap-i18n-${e2}`) || t2;
          }
          static get observedAttributes() {
            return ["onsolve", "onprogress", "onreset", "onerror", "data-cap-worker-count", "data-cap-i18n-initial-state", "required"];
          }
          initialize() {
            l(), __privateGet(this, _d) || __privateSet(this, _d, __privateMethod(this, _h_instances, m_fn).call(this)), __privateGet(this, _u) || (__privateSet(this, _u, new c(1)), __privateGet(this, _u)._spawn());
          }
          attributeChangedCallback(e2, t2, i2) {
            if (e2.startsWith("on")) {
              const t3 = e2.slice(2), s2 = __privateGet(this, _c).get(e2);
              if (s2 && this.removeEventListener(t3, s2), i2) {
                const i3 = (t4) => {
                  const i4 = this.getAttribute(e2);
                  "function" == typeof window[i4] && window[i4].call(this, t4);
                };
                __privateGet(this, _c).set(e2, i3), this.addEventListener(t3, i3);
              }
            }
            "data-cap-worker-count" === e2 && this.setWorkersCount(parseInt(i2, 10)), "data-cap-i18n-initial-state" === e2 && __privateGet(this, _s) && __privateGet(this, _s)?.querySelector(".label.active") && this.animateLabel(this.getI18nText("initial-state", "Verify you're human")), "required" === e2 && __privateMethod(this, _h_instances, A_fn).call(this);
          }
          async connectedCallback() {
            __privateSet(this, _o, this), this.shadowRoot ? __privateSet(this, _i, this.shadowRoot) : __privateSet(this, _i, this.attachShadow({ mode: "open" })), __privateGet(this, _s) || __privateSet(this, _s, document.createElement("div")), this.createUI(), this.addEventListeners(), this.initialize(), __privateGet(this, _r).removeAttribute("disabled");
            const e2 = this.getAttribute("data-cap-worker-count"), t2 = e2 ? parseInt(e2, 10) : null;
            this.setWorkersCount(t2 || navigator.hardwareConcurrency || 8);
            const i2 = this.getAttribute("data-cap-hidden-field-name") || "cap-token";
            __privateGet(this, _o).innerHTML = `<input type="hidden" name="${i2}">`, __privateMethod(this, _h_instances, f_fn).call(this), __privateMethod(this, _h_instances, A_fn).call(this), this.addEventListener("invalid", __privateGet(this, _C));
          }
          async solve() {
            if (!__privateGet(this, _l)) {
              __privateMethod(this, _h_instances, S_fn).call(this);
              try {
                __privateSet(this, _l, true), this.updateUI("verifying", this.getI18nText("verifying-label", "Verifying..."), true), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("verifying-aria-label", "Verifying you're a human, please wait")), this.dispatchEvent("progress", { progress: 0 });
                try {
                  let e2, s2, n2 = this.getAttribute("data-cap-api-endpoint");
                  if (!n2 && window?.CAP_CUSTOM_FETCH) n2 = "/";
                  else if (!n2) throw new Error("Missing API endpoint. Either custom fetch or an API endpoint must be provided.");
                  if (n2.endsWith("/") || (n2 += "/"), "done" === __privateGet(this, _d).state && __privateGet(this, _d).token && __privateGet(this, _d).tokenExpires && Date.now() < __privateGet(this, _d).tokenExpires) {
                    this.dispatchEvent("progress", { progress: 100 });
                    const e3 = this.getAttribute("data-cap-hidden-field-name") || "cap-token";
                    this.querySelector(`input[name='${e3}']`) && (this.querySelector(`input[name='${e3}']`).value = __privateGet(this, _d).token), this.dispatchEvent("solve", { token: __privateGet(this, _d).token }), this.token = __privateGet(this, _d).token;
                    const t2 = __privateGet(this, _d).tokenExpires - Date.now();
                    return __privateGet(this, _e) && clearTimeout(__privateGet(this, _e)), __privateSet(this, _e, setTimeout(() => this.reset(), t2)), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("verified-aria-label", "We have verified you're a human, you may now continue")), __privateGet(this, _h_instances, v_get) && navigator.vibrate([10, 50, 20, 30, 40]), __privateMethod(this, _h_instances, b_fn).call(this), __privateSet(this, _l, false), { success: true, token: this.token };
                  }
                  if ("done" === __privateGet(this, _d).state) e2 = __privateGet(this, _d).results, s2 = __privateGet(this, _d).challengeResp, this.dispatchEvent("progress", { progress: 100 });
                  else if ("solving" === __privateGet(this, _d).state || "redeeming" === __privateGet(this, _d).state || "fetching" === __privateGet(this, _d).state || "waiting" === __privateGet(this, _d).state) {
                    "waiting" === __privateGet(this, _d).state && (__privateGet(this, _p) && (clearTimeout(__privateGet(this, _p)), __privateSet(this, _p, null)), __privateGet(this, _d).state = "waiting", __privateMethod(this, _h_instances, x_fn).call(this)), __privateGet(this, _d).pendingPromotion = __privateGet(this, _t), __privateGet(this, _d).promoteFn && __privateGet(this, _d).promoteFn(__privateGet(this, _t));
                    const t2 = setInterval(() => {
                      const e3 = __privateGet(this, _d).state;
                      if ("done" === e3 || "error" === e3) return void clearInterval(t2);
                      const i2 = __privateGet(this, _d).challenges ? __privateGet(this, _d).challenges.length : 1, s3 = __privateGet(this, _d).completedCount, r2 = "redeeming" === e3 ? 99 : "fetching" === e3 || "waiting" === e3 ? 0 : Math.min(98, Math.round(s3 / i2 * 100));
                      this.dispatchEvent("progress", { progress: r2 });
                    }, 150);
                    if (await new Promise((e3) => __privateGet(this, _d).onSettled(e3)), clearInterval(t2), "idle" === __privateGet(this, _d).state && 2 === __privateGet(this, _d).challengeResp?.format && Array.isArray(__privateGet(this, _d).challengeResp.challenges)) s2 = __privateGet(this, _d).challengeResp, __privateGet(this, _d).challengeResp = null, e2 = await this.solveChallengesV2(s2.challenges);
                    else {
                      if ("done" !== __privateGet(this, _d).state) throw new Error("Speculative solve failed \u2013 please try again");
                      if (__privateGet(this, _d).token && __privateGet(this, _d).tokenExpires && Date.now() < __privateGet(this, _d).tokenExpires) {
                        this.dispatchEvent("progress", { progress: 100 });
                        const e3 = this.getAttribute("data-cap-hidden-field-name") || "cap-token";
                        this.querySelector(`input[name='${e3}']`) && (this.querySelector(`input[name='${e3}']`).value = __privateGet(this, _d).token), this.dispatchEvent("solve", { token: __privateGet(this, _d).token }), this.token = __privateGet(this, _d).token;
                        const t3 = __privateGet(this, _d).tokenExpires - Date.now();
                        return __privateGet(this, _e) && clearTimeout(__privateGet(this, _e)), __privateSet(this, _e, setTimeout(() => this.reset(), t3)), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("verified-aria-label", "We have verified you're a human, you may now continue")), __privateGet(this, _h_instances, v_get) && navigator.vibrate([10, 50, 20, 30, 40]), __privateMethod(this, _h_instances, b_fn).call(this), __privateSet(this, _l, false), { success: true, token: this.token };
                      }
                      e2 = __privateGet(this, _d).results, s2 = __privateGet(this, _d).challengeResp, this.dispatchEvent("progress", { progress: 100 });
                    }
                  } else {
                    const r2 = __privateGet(this, _d).challengeResp;
                    if (2 === r2?.format && Array.isArray(r2.challenges)) s2 = r2, __privateGet(this, _d).challengeResp = null;
                    else {
                      const e3 = await t(`${n2}challenge`, { method: "POST" });
                      try {
                        s2 = await e3.json();
                      } catch {
                        throw new Error("Failed to parse challenge response from server");
                      }
                      if (s2.error) throw new Error(s2.error);
                    }
                    if (2 === s2.format && Array.isArray(s2.challenges)) e2 = await this.solveChallengesV2(s2.challenges);
                    else {
                      const { challenge: t2, token: r3 } = s2;
                      let n3 = t2;
                      if (!Array.isArray(n3)) {
                        let e3 = 0;
                        n3 = Array.from({ length: t2.c }, () => (e3++, [i(`${r3}${e3}`, t2.s), i(`${r3}${e3}d`, t2.d)]));
                      }
                      e2 = await this.solveChallenges(n3);
                    }
                  }
                  const a2 = s2.instrumentation ? r(s2.instrumentation) : Promise.resolve(null), o2 = await a2;
                  if (o2?.__timeout || o2?.__blocked) {
                    t(`${n2}redeem`, { method: "POST", body: JSON.stringify({ token: s2.token, solutions: e2, ...o2.__blocked && { instr_blocked: true }, ...o2.__timeout && { instr_timeout: true } }), headers: { "Content-Type": "application/json" } }).catch(() => {
                    }), this.updateUIBlocked(this.getI18nText("error-label", "Error"), o2?.__blocked), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("error-aria-label", "An error occurred, please try again")), this.removeEventListener("error", this.boundHandleError);
                    const i2 = new CustomEvent("error", { bubbles: true, composed: true, detail: { isCap: true, message: "Instrumentation failed" } });
                    return super.dispatchEvent(i2), this.addEventListener("error", this.boundHandleError), this.executeAttributeCode("onerror", i2), console.error("[cap]", "Instrumentation failed"), void __privateSet(this, _l, false);
                  }
                  const { token: l2 } = s2, c2 = await t(`${n2}redeem`, { method: "POST", body: JSON.stringify({ token: l2, solutions: e2, ...o2 && { instr: o2 } }), headers: { "Content-Type": "application/json" } });
                  let h2;
                  try {
                    h2 = await c2.json();
                  } catch {
                    throw new Error("Failed to parse server response");
                  }
                  if (this.dispatchEvent("progress", { progress: 100 }), !h2.success) throw new Error(h2.error || "Invalid solution");
                  const d2 = this.getAttribute("data-cap-hidden-field-name") || "cap-token";
                  this.querySelector(`input[name='${d2}']`) && (this.querySelector(`input[name='${d2}']`).value = h2.token), this.dispatchEvent("solve", { token: h2.token }), this.token = h2.token, __privateMethod(this, _h_instances, b_fn).call(this), __privateGet(this, _e) && clearTimeout(__privateGet(this, _e));
                  const p = new Date(h2.expires).getTime() - Date.now();
                  return p > 0 && p < 864e5 ? __privateSet(this, _e, setTimeout(() => this.reset(), p)) : this.error("Invalid expiration time"), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("verified-aria-label", "We have verified you're a human, you may now continue")), __privateGet(this, _h_instances, v_get) && navigator.vibrate([10, 50, 20, 30, 40]), { success: true, token: this.token };
                } catch (e2) {
                  throw __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("error-aria-label", "An error occurred, please try again")), this.error(e2.message), e2;
                }
              } finally {
                __privateSet(this, _l, false);
              }
            }
          }
          async solveChallengesV2(e2) {
            const t2 = e2.length;
            let i2 = 0;
            const s2 = new Array(e2.length);
            for (let t3 = 0; t3 < e2.length; t3++) {
              const i3 = e2[t3];
              if (!i3 || "object" != typeof i3 || "sha256-pow" !== i3.protocol && "rsw" !== i3.protocol && "instrumentation" !== i3.protocol) throw new Error(`[cap] unsupported format-2 protocol '${i3?.protocol}'`);
            }
            let n2 = null;
            if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) try {
              n2 = await a();
            } catch (e3) {
              console.warn("[cap] wasm unavailable, falling back to JS solver:", e3);
            }
            const o2 = Math.max(1, Math.min(__privateGet(this, _t), e2.length)), l2 = new c(o2);
            l2.setWasm(n2), l2._ensureSize(o2);
            const h2 = (e3, t3) => Promise.race([e3, new Promise((e4, i3) => setTimeout(() => i3(new Error(`[cap] ${t3} timed out after 60000ms`)), 6e4))]), d2 = new Array(e2.length).fill(0), p = () => {
              const e3 = d2.reduce((e4, t3) => e4 + t3, 0) + i2, s3 = Math.min(99, Math.round(e3 / t2 * 100));
              this.dispatchEvent("progress", { progress: s3 });
            };
            try {
              await Promise.all(e2.map((e3, t3) => "sha256-pow" === e3.protocol ? h2(l2.run(e3.payload.salt, e3.payload.target), `sha256-pow worker #${t3}`).then((e4) => {
                s2[t3] = { nonce: Number(e4) }, d2[t3] = 0, i2++, p();
              }) : "rsw" === e3.protocol ? h2(l2.runMsg({ kind: "rsw", N: e3.payload.N, x: e3.payload.x, t: 0 | e3.payload.t }, (e4) => {
                d2[t3] = e4, p();
              }), `rsw worker #${t3}`).then((e4) => {
                s2[t3] = { y: e4.y }, d2[t3] = 0, i2++, p();
              }) : r(e3.payload.blob).then((e4) => {
                s2[t3] = e4?.__timeout ? { timeout: true } : e4?.__blocked ? { blocked: true } : { instr: e4 }, d2[t3] = 0, i2++, p();
              })));
            } finally {
              l2.terminate();
            }
            return s2;
          }
          async solveChallenges(e2) {
            const t2 = e2.length;
            let i2 = 0;
            let s2 = null;
            const r2 = "object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate;
            if (r2) try {
              s2 = await a();
            } catch (e3) {
              console.warn("[cap] wasm unavailable, falling back to JS solver:", e3);
            }
            if (!r2 && !__privateGet(this, _i).querySelector(".warning")) {
              const e3 = document.createElement("div");
              e3.className = "warning", e3.style.cssText = "width:var(--cap-widget-width,230px);background:rgb(237,56,46);color:white;padding:4px 6px;padding-bottom:calc(var(--cap-border-radius,14px) + 5px);font-size:10px;box-sizing:border-box;font-family:system-ui;border-top-left-radius:8px;border-top-right-radius:8px;text-align:center;user-select:none;margin-bottom:-35.5px;opacity:0;transition:margin-bottom .3s,opacity .3s;", e3.innerText = this.getI18nText("wasm-disabled", "Enable WASM for significantly faster solving"), __privateGet(this, _i).insertBefore(e3, __privateGet(this, _i).firstChild), setTimeout(() => {
                e3.style.marginBottom = "calc(-1 * var(--cap-border-radius, 14px))", e3.style.opacity = 1;
              }, 10);
            }
            const n2 = new c(__privateGet(this, _t));
            n2.setWasm(s2), n2._ensureSize(__privateGet(this, _t));
            const o2 = [];
            try {
              for (let s3 = 0; s3 < e2.length; s3 += __privateGet(this, _t)) {
                const r3 = e2.slice(s3, Math.min(s3 + __privateGet(this, _t), e2.length)), a2 = await Promise.all(r3.map(([e3, s4]) => n2.run(e3, s4).then((e4) => {
                  i2++;
                  const s5 = Math.min(99, Math.round((0 + i2) / t2 * 100));
                  return this.dispatchEvent("progress", { progress: s5 }), e4;
                })));
                o2.push(...a2);
              }
            } finally {
              n2.terminate();
            }
            return o2;
          }
          setWorkersCount(e2) {
            const t2 = parseInt(e2, 10), i2 = Math.min(navigator.hardwareConcurrency || 8, 16);
            __privateSet(this, _t, !Number.isNaN(t2) && t2 > 0 && t2 <= i2 ? t2 : navigator.hardwareConcurrency || 8);
          }
          createUI() {
            __privateGet(this, _s).classList.add("captcha"), __privateGet(this, _s).setAttribute("role", "group"), __privateGet(this, _s).setAttribute("aria-label", this.getI18nText("group-aria-label", "Cap verification")), __privateSet(this, _r, document.createElement("div")), __privateGet(this, _r).className = "captcha-trigger", __privateGet(this, _r).setAttribute("part", "trigger"), __privateGet(this, _r).setAttribute("role", "button"), __privateGet(this, _r).setAttribute("tabindex", "0"), __privateGet(this, _r).setAttribute("aria-label", this.getI18nText("verify-aria-label", "Click to verify you're a human")), __privateGet(this, _r).setAttribute("aria-live", "polite"), __privateGet(this, _r).setAttribute("disabled", "true"), __privateGet(this, _r).innerHTML = `<div class="checkbox" part="checkbox" aria-hidden="true"><svg class="progress-ring" viewBox="0 0 32 32" aria-hidden="true"><circle class="progress-ring-bg" cx="16" cy="16" r="14"></circle><circle class="progress-ring-circle" cx="16" cy="16" r="14"></circle></svg></div><p part="label" class="label-wrapper"><span class="label active">${this.getI18nText("initial-state", "Verify you're human")}</span></p>`, __privateGet(this, _s).appendChild(__privateGet(this, _r)), __privateSet(this, _a, document.createElement("a")), __privateGet(this, _a).className = "cap-troubleshoot-link", __privateGet(this, _a).setAttribute("part", "troubleshoot"), __privateGet(this, _a).setAttribute("target", "_blank"), __privateGet(this, _a).setAttribute("rel", "noopener"), __privateGet(this, _a).hidden = true, __privateGet(this, _s).appendChild(__privateGet(this, _a)), __privateSet(this, _n, document.createElement("a")), __privateGet(this, _n).className = "credits", __privateGet(this, _n).setAttribute("aria-label", "Secured by Cap"), __privateGet(this, _n).setAttribute("href", "https://trycap.dev"), __privateGet(this, _n).setAttribute("target", "_blank"), __privateGet(this, _n).setAttribute("title", "Secured by Cap: The self-hosted CAPTCHA for the modern web."), __privateGet(this, _n).textContent = "Cap", __privateGet(this, _s).appendChild(__privateGet(this, _n)), __privateGet(this, _i).innerHTML = `<style${window.CAP_CSS_NONCE ? ` nonce=${window.CAP_CSS_NONCE}` : ""}>:host{display:inline-block}@media (prefers-reduced-motion:reduce){.captcha,.captcha *{transition:none!important;animation:none!important}.label{filter:none!important;opacity:1!important;transition:none!important;transform:none!important}.label:not(.active),.label.exit{display:none!important}}.captcha,.captcha *{box-sizing:border-box}.captcha{width:var(--cap-widget-width,260px);height:var(--cap-widget-height,58px);background-color:var(--cap-background,#fdfdfd);border:1px solid var(--cap-border-color,#dddddd8f);border-radius:var(--cap-border-radius,14px);-webkit-user-select:none;user-select:none;cursor:pointer;-webkit-tap-highlight-color:#fff0;color:var(--cap-color,#212121);font-family:var(--cap-font,system, -apple-system, "BlinkMacSystemFont", ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", "Ubuntu", "arial", sans-serif);transition:filter .2s,transform .2s,height .2s;display:inline-block;position:relative;overflow:hidden}.captcha.has-troubleshoot{height:calc(var(--cap-widget-height,58px) + 26px)}.captcha.has-troubleshoot .captcha-trigger{inset-block-end:26px}.captcha:not([data-state]):active{transform:scale(.97)}.captcha:hover{filter:brightness(98%)}.captcha-trigger{padding:var(--cap-widget-padding,14px);align-items:center;gap:var(--cap-gap,15px);border-radius:inherit;transition:inset .2s;display:flex;position:absolute;inset:0}.captcha-trigger:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:-3px}.checkbox{width:var(--cap-checkbox-size,25px);height:var(--cap-checkbox-size,25px);border:var(--cap-checkbox-border,1px solid #aaaaaad1);border-radius:var(--cap-checkbox-border-radius,6px);background-color:var(--cap-checkbox-background,#fafafa91);margin-top:var(--cap-checkbox-margin,2px);margin-bottom:var(--cap-checkbox-margin,2px);flex-shrink:0;transition:opacity .2s}.captcha p{-webkit-user-select:none;user-select:none;margin:0;font-size:15px;font-weight:500}.label-wrapper{flex:1;align-items:center;min-width:0;height:2em;display:flex;position:relative;overflow:hidden}.label-wrapper:before,.label-wrapper:after{content:"";pointer-events:none;z-index:1;width:100%;height:.6em;position:absolute;inset-inline-start:0}.label-wrapper:before{background:linear-gradient(to bottom, var(--cap-background,#fdfdfd), transparent);top:0}.label-wrapper:after{background:linear-gradient(to top, var(--cap-background,#fdfdfd), transparent);bottom:0}.label{white-space:nowrap;opacity:0;filter:blur(2px);transition:transform .5s cubic-bezier(.25,1,.5,1),opacity .5s,filter .5s;position:absolute;transform:translateY(100%)}.label.active{opacity:1;filter:none;transform:translateY(0)}.label.exit{opacity:0;filter:blur(2px);transform:translateY(-100%)}.checkbox .progress-ring{width:100%;height:100%;display:none;transform:rotate(-90deg)}.checkbox .progress-ring-bg{fill:none;stroke:var(--cap-spinner-background-color,#eee);stroke-width:var(--cap-spinner-thickness,3)}.checkbox .progress-ring-circle{fill:none;stroke:var(--cap-spinner-color,#000);stroke-width:var(--cap-spinner-thickness,3);stroke-linecap:round;stroke-dasharray:87.96;stroke-dashoffset:87.96px;transition:stroke-dashoffset .3s}.captcha[data-state=verifying] .checkbox{background:0 0;border:none;border-radius:50%;justify-content:center;align-items:center;display:flex;transform:scale(1.1)}.captcha[data-state=verifying] .checkbox .progress-ring{display:block}.captcha[data-state=done] .checkbox{background-image:var(--cap-checkmark,url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E%40keyframes%20anim%7B0%25%7Bstroke-dashoffset%3A23.21320343017578px%7Dto%7Bstroke-dashoffset%3A0%7D%7D%3C%2Fstyle%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%2300a67d%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m5%2012%205%205L20%207%22%20style%3D%22stroke-dashoffset%3A0%3Bstroke-dasharray%3A23.21320343017578px%3Banimation%3Aanim%20.5s%20ease%22%2F%3E%3C%2Fsvg%3E));background-size:cover;border:1px solid #0000}.captcha[data-state=done] .checkbox .progress-ring{display:none}.captcha[data-state=error] .checkbox{background-image:var(--cap-error-cross,url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24'%3E%3Cpath fill='%23f55b50' d='M11 15h2v2h-2zm0-8h2v6h-2zm1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8'/%3E%3C%2Fsvg%3E"));background-size:cover;border:1px solid #0000}.captcha[data-state=error] .checkbox .progress-ring{display:none}.captcha.invalid{border-color:var(--cap-invalid-border-color,#f55b50);box-shadow:0 0 0 3px var(--cap-invalid-ring-color,#f55b5033);animation:.5s cubic-bezier(.36,.07,.19,.97) cap-shake}@keyframes cap-shake{10%,90%{transform:translate(-1px)}20%,80%{transform:translate(2px)}30%,50%,70%{transform:translate(-4px)}40%,60%{transform:translate(4px)}}@media (prefers-reduced-motion:reduce){.captcha.invalid{animation:none!important}}.captcha-trigger[disabled]{cursor:not-allowed}.captcha[data-state=verifying] .captcha-trigger{cursor:progress}.captcha[data-state=done] .captcha-trigger{cursor:default}.credits{color:var(--cap-color,#212121);text-underline-offset:.18em;z-index:2;border-radius:4px;justify-content:flex-end;align-items:center;min-width:24px;min-height:24px;padding:4px 6px;text-decoration:underline;text-decoration-thickness:.08em;position:absolute;inset-block-end:4px;inset-inline-end:4px;opacity:.8!important;font-size:12px!important;display:inline-flex!important}.captcha .credits{visibility:visible!important;pointer-events:all!important;display:inline-flex!important}.credits:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:2px;opacity:1!important}.cap-troubleshoot-link{min-width:24px;min-height:24px;color:var(--cap-troubleshoot-color,#0050a0);text-underline-offset:.15em;cursor:pointer;z-index:2;border-radius:4px;align-items:center;padding:4px 6px;font-size:13px;font-weight:500;text-decoration:underline;text-decoration-thickness:.08em;display:inline-flex;position:absolute;inset-block-end:4px;inset-inline-start:14px}.cap-troubleshoot-link[hidden]{display:none}.cap-troubleshoot-link:hover{opacity:.85}.cap-troubleshoot-link:focus-visible{outline:2px solid var(--cap-focus-ring,#06c);outline-offset:2px}@media (forced-colors:active){.captcha,.checkbox{border-color:canvastext}:is(.captcha-trigger:focus-visible,.credits:focus-visible,.cap-troubleshoot-link:focus-visible){outline-color:highlight}.progress-ring-bg{stroke:graytext}.progress-ring-circle{stroke:canvastext}.captcha.invalid{box-shadow:none;border-color:mark}.credits{opacity:1!important}}</style>`, __privateGet(this, _i).appendChild(__privateGet(this, _s)), __privateMethod(this, _h_instances, S_fn).call(this), setTimeout(() => __privateMethod(this, _h_instances, S_fn).call(this), 100);
          }
          addEventListeners() {
            __privateGet(this, _r) && (__privateGet(this, _n).addEventListener("click", (e2) => {
              e2.preventDefault(), window.open(`https://trycap.dev/?${new URLSearchParams({ utm_source: "cap_widget", utm_medium: "referral", utm_campaign: "widget", utm_content: window.CAP_DISABLE_WIDGET_REF ? "" : location.hostname, ref: window.CAP_DISABLE_WIDGET_REF ? "" : location.href || "", sub: window.CAP_DISABLE_WIDGET_REF ? "" : document.referrer || "" }).toString()}`, "_blank");
            }), __privateGet(this, _r).addEventListener("click", () => {
              __privateGet(this, _r).hasAttribute("disabled") || this.solve();
            }), __privateGet(this, _r).addEventListener("mousedown", () => {
              !__privateGet(this, _r).hasAttribute("disabled") && __privateGet(this, _h_instances, v_get) && navigator.vibrate(5);
            }), __privateGet(this, _r).addEventListener("keydown", (e2) => {
              e2.target === __privateGet(this, _r) && ("Enter" !== e2.key && " " !== e2.key || __privateGet(this, _r).hasAttribute("disabled") || (e2.preventDefault(), e2.stopPropagation(), this.solve()));
            }), this.addEventListener("progress", this.boundHandleProgress), this.addEventListener("solve", this.boundHandleSolve), this.addEventListener("error", this.boundHandleError), this.addEventListener("reset", this.boundHandleReset));
          }
          animateLabel(e2) {
            if (!__privateGet(this, _r)) return;
            const t2 = __privateGet(this, _r).querySelector(".label-wrapper");
            if (!t2) return;
            if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
              const i3 = t2.querySelector(".label.active");
              if (i3) i3.textContent = e2;
              else {
                const i4 = document.createElement("span");
                i4.className = "label active", i4.textContent = e2, t2.appendChild(i4);
              }
              return;
            }
            const i2 = t2.querySelector(".label.active"), s2 = document.createElement("span");
            s2.className = "label", s2.textContent = e2, t2.appendChild(s2), s2.offsetWidth, s2.classList.add("active"), i2 && (i2.classList.remove("active"), i2.classList.add("exit"), i2.addEventListener("transitionend", () => i2.remove(), { once: true }));
          }
          updateUI(e2, t2, i2 = false) {
            __privateGet(this, _s) && __privateGet(this, _r) && (__privateGet(this, _s).setAttribute("data-state", e2), __privateGet(this, _s).classList.remove("has-troubleshoot"), this.animateLabel(t2), __privateGet(this, _a) && (__privateGet(this, _a).hidden = true), i2 ? __privateGet(this, _r).setAttribute("disabled", "true") : __privateGet(this, _r).removeAttribute("disabled"));
          }
          updateUIBlocked(e2, t2 = false) {
            if (__privateGet(this, _s) && __privateGet(this, _r) && (__privateGet(this, _s).setAttribute("data-state", "error"), __privateGet(this, _r).removeAttribute("disabled"), this.animateLabel(e2), __privateGet(this, _a))) if (t2) {
              const e3 = this.getAttribute("data-cap-troubleshooting-url") || "https://trycap.dev/guide/troubleshooting/instrumentation.html";
              __privateGet(this, _a).setAttribute("href", e3), __privateGet(this, _a).textContent = this.getI18nText("troubleshooting-label", "Troubleshoot"), __privateGet(this, _a).hidden = false, __privateGet(this, _s).classList.add("has-troubleshoot");
            } else __privateGet(this, _a).hidden = true, __privateGet(this, _s).classList.remove("has-troubleshoot");
          }
          handleProgress(e2) {
            if (!__privateGet(this, _r)) return;
            const t2 = __privateGet(this, _r).querySelector(".progress-ring-circle");
            if (t2) {
              const i3 = 2 * Math.PI * 14, s2 = i3 - e2.detail.progress / 100 * i3;
              t2.style.strokeDashoffset = s2;
            }
            const i2 = __privateGet(this, _r).querySelector(".label-wrapper");
            if (i2) {
              const e3 = i2.querySelector(".label.active");
              e3 && (e3.textContent = `${this.getI18nText("verifying-label", "Verifying...")}`);
            }
            this.executeAttributeCode("onprogress", e2);
          }
          handleSolve(e2) {
            this.updateUI("done", this.getI18nText("solved-label", "You're a human"), true), this.executeAttributeCode("onsolve", e2), __privateGet(this, _h)?.setValidity?.({}), __privateGet(this, _s)?.classList.remove("invalid");
          }
          handleError(e2) {
            this.updateUI("error", this.getI18nText("error-label", "Error. Try again.")), this.executeAttributeCode("onerror", e2), __privateGet(this, _h_instances, v_get) && navigator.vibrate([10, 40, 10]);
          }
          handleReset(e2) {
            this.updateUI("", this.getI18nText("initial-state", "I'm a human")), this.executeAttributeCode("onreset", e2), __privateMethod(this, _h_instances, A_fn).call(this);
          }
          executeAttributeCode(e2, t2) {
            const i2 = this.getAttribute(e2);
            i2 && (console.error("[cap] using `onxxx='\u2026'` is strongly discouraged and will be deprecated soon. please use `addEventListener` callbacks instead."), new Function("event", i2).call(this, t2));
          }
          error(e2 = "Unknown error") {
            console.error("[cap]", e2), this.dispatchEvent("error", { isCap: true, message: e2 });
          }
          dispatchEvent(e2, t2 = {}) {
            const i2 = new CustomEvent(e2, { bubbles: true, composed: true, detail: t2 });
            super.dispatchEvent(i2);
          }
          reset() {
            __privateGet(this, _e) && (clearTimeout(__privateGet(this, _e)), __privateSet(this, _e, null)), this.token = null, this.dispatchEvent("reset");
            const e2 = this.getAttribute("data-cap-hidden-field-name") || "cap-token";
            this.querySelector(`input[name='${e2}']`) && (this.querySelector(`input[name='${e2}']`).value = "");
          }
          get tokenValue() {
            return this.token;
          }
          disconnectedCallback() {
            this.removeEventListener("progress", this.boundHandleProgress), this.removeEventListener("solve", this.boundHandleSolve), this.removeEventListener("error", this.boundHandleError), this.removeEventListener("reset", this.boundHandleReset), __privateGet(this, _c).forEach((e2, t2) => {
              this.removeEventListener(t2.slice(2), e2);
            }), __privateGet(this, _c).clear(), __privateGet(this, _i) && (__privateGet(this, _i).innerHTML = ""), this.reset(), this.cleanup();
          }
          cleanup() {
            __privateGet(this, _e) && (clearTimeout(__privateGet(this, _e)), __privateSet(this, _e, null)), __privateMethod(this, _h_instances, w_fn).call(this), __privateGet(this, _p) && (clearTimeout(__privateGet(this, _p)), __privateSet(this, _p, null)), __privateGet(this, _u) && (__privateGet(this, _u).terminate(), __privateSet(this, _u, null)), __privateGet(this, _d) && (__privateGet(this, _d).state = "error", __privateGet(this, _d).notify(), __privateSet(this, _d, null));
          }
        }
        _e = new WeakMap();
        _t = new WeakMap();
        _i = new WeakMap();
        _s = new WeakMap();
        _r = new WeakMap();
        _n = new WeakMap();
        _a = new WeakMap();
        _o = new WeakMap();
        _l = new WeakMap();
        _c = new WeakMap();
        _h = new WeakMap();
        _d = new WeakMap();
        _p = new WeakMap();
        _u = new WeakMap();
        _g = new WeakMap();
        _h_instances = new WeakSet();
        v_get = function() {
          return e && !window.CAP_DISABLE_HAPTICS && !this.hasAttribute("data-cap-disable-haptics");
        };
        m_fn = function() {
          return { state: "idle", challengeResp: null, challenges: null, results: [], completedCount: 0, solvePromise: null, promoteFn: null, _listeners: [], pendingPromotion: null, token: null, tokenExpires: null, notify() {
            for (const e2 of this._listeners) e2();
            this._listeners = [];
          }, onSettled(e2) {
            "done" === this.state || "error" === this.state ? e2() : this._listeners.push(e2);
          } };
        };
        b_fn = function() {
          __privateSet(this, _d, __privateMethod(this, _h_instances, m_fn).call(this)), __privateMethod(this, _h_instances, f_fn).call(this);
        };
        w_fn = function() {
          __privateGet(this, _g) && (window.removeEventListener("mousemove", __privateGet(this, _g)), window.removeEventListener("touchstart", __privateGet(this, _g)), window.removeEventListener("keydown", __privateGet(this, _g)), __privateSet(this, _g, null));
        };
        f_fn = function() {
          __privateMethod(this, _h_instances, w_fn).call(this);
          const e2 = () => {
            __privateMethod(this, _h_instances, w_fn).call(this), __privateMethod(this, _h_instances, y_fn).call(this);
          };
          __privateSet(this, _g, e2), window.addEventListener("mousemove", e2, { passive: true }), window.addEventListener("touchstart", e2, { passive: true }), window.addEventListener("keydown", e2, { passive: true });
        };
        k_fn = function() {
          return "function" == typeof this.checkVisibility ? this.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true }) : !!(this.offsetParent || this.getClientRects().length > 0);
        };
        y_fn = function() {
          "idle" === __privateGet(this, _d).state && __privateMethod(this, _h_instances, k_fn).call(this) && (__privateGet(this, _d).state = "waiting", __privateSet(this, _p, setTimeout(() => {
            __privateMethod(this, _h_instances, x_fn).call(this);
          }, 2500)));
        };
        x_fn = async function() {
          if ("waiting" !== __privateGet(this, _d).state) return;
          __privateGet(this, _d).state = "fetching";
          let e2 = this.getAttribute("data-cap-api-endpoint");
          if (!e2 && window?.CAP_CUSTOM_FETCH && (e2 = "/"), e2) {
            e2.endsWith("/") || (e2 += "/");
            try {
              const s2 = await t(`${e2}challenge`, { method: "POST" });
              let r2;
              try {
                r2 = await s2.json();
              } catch {
                throw new Error("Failed to parse speculative challenge response");
              }
              if (r2.error) throw new Error(r2.error);
              if (r2._apiEndpoint = e2, __privateGet(this, _d).challengeResp = r2, 2 === r2.format && Array.isArray(r2.challenges)) return __privateGet(this, _d).state = "idle", void __privateGet(this, _d).notify();
              const { challenge: n2, token: a2 } = r2;
              let o2 = n2;
              if (!Array.isArray(o2)) {
                let e3 = 0;
                o2 = Array.from({ length: n2.c }, () => (e3++, [i(`${a2}${e3}`, n2.s), i(`${a2}${e3}d`, n2.d)]));
              }
              __privateGet(this, _d).challenges = o2, __privateGet(this, _d).state = "solving", __privateGet(this, _d).solvePromise = __privateMethod(this, _h_instances, __fn).call(this, o2);
            } catch (e3) {
              console.warn("[cap] speculative challenge fetch failed:", e3), __privateGet(this, _d).state = "error", __privateGet(this, _d).notify();
            }
          } else __privateGet(this, _d).state = "idle";
        };
        __fn = async function(e2) {
          l();
          let t2 = null;
          try {
            t2 = await a();
          } catch {
          }
          __privateGet(this, _u) || (__privateSet(this, _u, new c(1)), __privateGet(this, _u)._spawn()), __privateGet(this, _u).setWasm(t2);
          const i2 = e2.length, s2 = new Array(i2);
          let r2 = 1, n2 = false;
          __privateGet(this, _d).promoteFn = (e3) => {
            n2 || (n2 = true, r2 = e3, __privateGet(this, _u)._size = e3, __privateGet(this, _u)._ensureSize(e3));
          }, null !== __privateGet(this, _d).pendingPromotion && (__privateGet(this, _d).promoteFn(__privateGet(this, _d).pendingPromotion), __privateGet(this, _d).pendingPromotion = null);
          let o2 = 0;
          for (; o2 < i2; ) {
            const t3 = r2, a2 = [], l2 = [];
            for (let s3 = 0; s3 < t3 && o2 < i2; s3++) l2.push(o2), a2.push(e2[o2]), o2++;
            __privateGet(this, _u)._ensureSize(Math.max(r2, t3));
            const c2 = await Promise.all(a2.map((e3) => __privateGet(this, _u).run(e3[0], e3[1]).then((e4) => (__privateGet(this, _d).completedCount++, e4))));
            for (let e3 = 0; e3 < l2.length; e3++) s2[l2[e3]] = c2[e3];
            !n2 && o2 < i2 && await new Promise((e3) => setTimeout(e3, 120));
          }
          return __privateGet(this, _d).results = s2, __privateGet(this, _d).state = "redeeming", __privateMethod(this, _h_instances, E_fn).call(this, s2), s2;
        };
        E_fn = async function(e2) {
          try {
            const i2 = __privateGet(this, _d).challengeResp, s2 = i2._apiEndpoint;
            if (!s2) throw new Error("[cap] speculative redeem: missing apiEndpoint");
            let n2 = null;
            if (i2.instrumentation && (n2 = await r(i2.instrumentation), n2?.__timeout || n2?.__blocked)) return __privateGet(this, _d).state = "done", void __privateGet(this, _d).notify();
            const a2 = await t(`${s2}redeem`, { method: "POST", body: JSON.stringify({ token: i2.token, solutions: e2, ...n2 && { instr: n2 } }), headers: { "Content-Type": "application/json" } });
            let o2;
            try {
              o2 = await a2.json();
            } catch {
              throw new Error("Failed to parse speculative redeem response");
            }
            if (!o2.success) throw new Error(o2.error || "Speculative redeem failed");
            __privateGet(this, _d).token = o2.token, __privateGet(this, _d).tokenExpires = new Date(o2.expires).getTime(), __privateGet(this, _d).state = "done", __privateGet(this, _d).notify();
          } catch (e3) {
            console.warn("[cap] speculative redeem failed (will redo on click):", e3), __privateGet(this, _d).state = "done", __privateGet(this, _d).notify();
          }
        };
        A_fn = function() {
          __privateGet(this, _h)?.setValidity && (this.hasAttribute("required") && !this.token ? __privateGet(this, _h).setValidity({ valueMissing: true }, this.getI18nText("required-label", "Please verify you're human"), __privateGet(this, _s) || this) : __privateGet(this, _h).setValidity({}));
        };
        _C = new WeakMap();
        T_fn = function() {
          if (!__privateGet(this, _o)) return false;
          const e2 = __privateGet(this, _o).getBoundingClientRect();
          if (0 === e2.width && 0 === e2.height) return true;
          const t2 = window.getComputedStyle(__privateGet(this, _o));
          return "none" === t2.display || "hidden" === t2.visibility;
        };
        S_fn = function() {
          __privateGet(this, _n) && __privateGet(this, _s) && !__privateMethod(this, _h_instances, T_fn).call(this) && (__privateGet(this, _n).isConnected && __privateGet(this, _n).parentNode === __privateGet(this, _s) || __privateGet(this, _s).appendChild(__privateGet(this, _n)), __privateGet(this, _n).textContent && __privateGet(this, _n).textContent.trim() || (__privateGet(this, _n).textContent = "Cap"), "https://trycap.dev" !== __privateGet(this, _n).getAttribute("href") && __privateGet(this, _n).setAttribute("href", "https://trycap.dev"), __privateGet(this, _n).style.cssText = ["display: inline-flex !important", "visibility: visible !important", "opacity: 0.8 !important", "pointer-events: all !important", "font-size: 12px !important", "transform: none !important", "clip-path: none !important", "filter: none !important", "position: absolute !important"].join("; "));
        };
        __publicField(h, "formAssociated", true);
        class d {
          constructor(e2 = {}, t2) {
            const i2 = t2 || document.createElement("cap-widget");
            if (Object.entries(e2).forEach(([e3, t3]) => {
              i2.setAttribute(e3, t3);
            }), !e2.apiEndpoint && !window?.CAP_CUSTOM_FETCH) throw i2.remove(), new Error("Missing API endpoint. Either custom fetch or an API endpoint must be provided.");
            e2.apiEndpoint && i2.setAttribute("data-cap-api-endpoint", e2.apiEndpoint), t2 || i2.hasAttribute("data-cap-disable-haptics") || i2.setAttribute("data-cap-disable-haptics", ""), this.widget = i2, this.solve = this.widget.solve.bind(this.widget), this.reset = this.widget.reset.bind(this.widget), this.addEventListener = this.widget.addEventListener.bind(this.widget), Object.defineProperty(this, "token", { get: () => i2.token, configurable: true, enumerable: true }), t2 || (i2.style.display = "none", document.documentElement.appendChild(i2));
          }
        }
        window.Cap = d, customElements.get("cap-widget") || window?.CAP_DONT_SKIP_REDEFINE ? customElements.get("cap-widget") && console.warn("[cap] the cap-widget element has already been defined, skipping re-defining it.\nto prevent this, set window.CAP_DONT_SKIP_REDEFINE to true") : customElements.define("cap-widget", h), "object" == typeof exports && "undefined" != typeof module ? module.exports = d : "function" == typeof define && define.amd && define([], () => d), "undefined" != typeof exports && (exports.default = d);
      })();
    }
  });

  // src/cap/asset-urls.ts
  function setCapAssetUrlsFrom(baseUrl) {
    if (typeof window === "undefined" || !baseUrl) return;
    window.CAP_CUSTOM_WASM_URL ?? (window.CAP_CUSTOM_WASM_URL = new URL("./cap_wasm_bg.wasm", baseUrl).href);
    window.CAP_PAKO_URL ?? (window.CAP_PAKO_URL = new URL("./pako_inflate.min.js", baseUrl).href);
  }

  // src/cap/wasm-host-iife.ts
  if (typeof document !== "undefined") {
    setCapAssetUrlsFrom(document.currentScript?.src);
  }

  // src/token.ts
  function assembleWrappedToken(platformField) {
    return {
      token: platformField.token,
      score: platformField.score ?? null,
      durationMs: platformField.durationMs ?? null
    };
  }

  // src/clearance-store.ts
  var COOKIE_NAME = "__cptr";
  var DEFAULT_MAX_AGE_S = 600;
  var memoryClearance = null;
  function readCookie() {
    if (typeof document === "undefined") return null;
    for (const part of document.cookie.split("; ")) {
      const eq = part.indexOf("=");
      if (eq === -1) continue;
      if (part.slice(0, eq) !== COOKIE_NAME) continue;
      const value = decodeURIComponent(part.slice(eq + 1));
      return value || null;
    }
    return null;
  }
  function isSecureOrigin() {
    if (typeof window === "undefined") return false;
    return window.location.protocol === "https:" || window.isSecureContext === true;
  }
  function writeCookie(clearance, reuseWindowMs) {
    if (typeof document === "undefined") return;
    const maxAgeS = typeof reuseWindowMs === "number" && reuseWindowMs > 0 ? Math.round(reuseWindowMs / 1e3) : DEFAULT_MAX_AGE_S;
    const secure = isSecureOrigin() ? "; Secure" : "";
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(clearance)}; SameSite=Strict; Path=/; Max-Age=${maxAgeS}${secure}`;
  }
  function readClearance() {
    return readCookie() ?? memoryClearance;
  }
  function writeClearance(clearance, persist, reuseWindowMs) {
    if (persist) {
      writeCookie(clearance, reuseWindowMs);
    } else {
      memoryClearance = clearance;
    }
  }

  // src/cap/custom-fetch.ts
  var GATE_TIMEOUT_MS = 5 * 60 * 1e3;
  var seedGates = /* @__PURE__ */ new Map();
  function armSeedGate(id) {
    let resolve;
    const promise = new Promise((res) => {
      resolve = res;
    });
    const timer = setTimeout(() => settleSeedGate(id, null), GATE_TIMEOUT_MS);
    seedGates.set(id, { promise, resolve, timer });
  }
  function settleSeedGate(id, seed) {
    const gate = seedGates.get(id);
    if (!gate) return;
    clearTimeout(gate.timer);
    gate.resolve(seed);
  }
  function resolveSeedGate(id) {
    settleSeedGate(id, null);
  }
  function awaitSeed(id) {
    return seedGates.get(id)?.promise ?? Promise.resolve(null);
  }
  var sessionContexts = /* @__PURE__ */ new Map();
  var sessionIds = /* @__PURE__ */ new Map();
  var redeemGates = /* @__PURE__ */ new Map();
  var CPT_ROUTE_PREFIX = "__cpt";
  var ROUTE_RE = /\/__cpt\/([^/]+)\/(challenge|redeem)$/;
  function registerSession(id, ctx) {
    sessionContexts.set(id, ctx);
    armSeedGate(id);
  }
  function unregisterSession(id) {
    const gate = redeemGates.get(id);
    if (gate) clearTimeout(gate.timer);
    settleSeedGate(id, null);
    seedGates.delete(id);
    redeemGates.delete(id);
    sessionContexts.delete(id);
    sessionIds.delete(id);
  }
  function armRedeemGate(id) {
    const existing = redeemGates.get(id);
    if (existing) clearTimeout(existing.timer);
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    promise.catch(() => {
    });
    const timer = setTimeout(() => {
      redeemGates.delete(id);
      resolve({});
    }, GATE_TIMEOUT_MS);
    redeemGates.set(id, { promise, resolve, reject, timer });
  }
  function releaseRedeemGate(id, platform) {
    const gate = redeemGates.get(id);
    if (!gate) return;
    clearTimeout(gate.timer);
    gate.resolve(platform);
  }
  function abortRedeemGate(id, reason) {
    const gate = redeemGates.get(id);
    if (!gate) return;
    clearTimeout(gate.timer);
    gate.reject(reason);
  }
  function parseBody(init) {
    if (!init?.body || typeof init.body !== "string") return {};
    try {
      return JSON.parse(init.body);
    } catch {
      return {};
    }
  }
  function toUrlStr(input) {
    if (typeof input === "string") return input;
    if (input instanceof URL) return input.href;
    return input.url;
  }
  var customFetchInstalled = false;
  function installCustomFetch() {
    if (customFetchInstalled) return;
    customFetchInstalled = true;
    window.CAP_CUSTOM_FETCH = async (input, init) => {
      const urlStr = toUrlStr(input);
      const match = urlStr.match(ROUTE_RE);
      if (!match) return window.fetch(input, init);
      const widgetId = match[1];
      const op = match[2];
      const apiHost = "https://verify.caputchin.com";
      const ctx = sessionContexts.get(widgetId);
      const parsedBody = parseBody(init);
      const merged = new Headers(init?.headers);
      merged.set("content-type", "application/json");
      const headers = Object.fromEntries(merged.entries());
      if (op === "challenge") {
        const body = JSON.stringify(
          ctx?.platform ? { ...parsedBody, platform: ctx.platform } : parsedBody
        );
        const startResponse = await window.fetch(`${apiHost}/v1/verify/start`, {
          ...init,
          method: "POST",
          body,
          headers
        });
        if (startResponse.ok) {
          try {
            const data = await startResponse.clone().json();
            if (typeof data?.platform?.sessionId === "string") {
              sessionIds.set(widgetId, data.platform.sessionId);
            }
            if (data?.platform?.cleared === true && typeof data.platform.wrappedToken === "string") {
              ctx?.onWrappedToken(assembleWrappedToken({ token: data.platform.wrappedToken }));
              ctx?.onCleared();
              settleSeedGate(widgetId, null);
              return new Response(JSON.stringify({ error: "reuse-cleared" }), {
                status: 200,
                headers: { "content-type": "application/json" }
              });
            }
            const seed = data?.platform?.seed;
            const validSeed = Array.isArray(seed) && seed.length === 4 && seed.every((n) => typeof n === "number");
            settleSeedGate(widgetId, validSeed ? seed : null);
          } catch {
            settleSeedGate(widgetId, null);
          }
        } else {
          settleSeedGate(widgetId, null);
        }
        return startResponse;
      }
      if (!sessionContexts.has(widgetId)) {
        return new Response(JSON.stringify({ success: false, error: "widget-disposed" }), {
          status: 410,
          headers: { "content-type": "application/json" }
        });
      }
      let platform = {};
      const gate = redeemGates.get(widgetId);
      if (gate) platform = await gate.promise;
      const sessionId = sessionIds.get(widgetId);
      if (sessionId) platform = { ...platform, sessionId };
      const response = await window.fetch(`${apiHost}/v1/verify/pass`, {
        ...init,
        method: "POST",
        body: JSON.stringify({ ...parsedBody, platform }),
        headers
      });
      if (ctx && response.ok) {
        try {
          const data = await response.clone().json();
          const wrapped = data?.platform?.wrappedToken;
          if (typeof wrapped === "string") {
            ctx.onWrappedToken(assembleWrappedToken({ token: wrapped }));
          }
          const clearance = data?.platform?.clearance;
          if (typeof clearance === "string") {
            const persist = data?.platform?.persist === true;
            const reuseWindowMs = typeof data?.platform?.reuseWindowMs === "number" ? data.platform.reuseWindowMs : void 0;
            writeClearance(clearance, persist, reuseWindowMs);
          }
        } catch {
        }
      }
      return response;
    };
  }

  // src/config/shared.ts
  var BLOCKED_SCHEMES = /^(javascript|data|vbscript):/i;
  var UNSAFE_CHARS = /["'`;,<>\s\x00-\x1f]/;
  var TRIGGERS = ["auto", "click", "form-submit", "manual"];
  var WIDTH_ENUM = ["auto", "full"];
  var SIZES = ["normal", "compact"];
  function parsePixelValue(raw) {
    const trimmed = raw.replace(/px$/i, "").trim();
    const n = Number(trimmed);
    if (!Number.isFinite(n) || n <= 0) return null;
    return Math.floor(n);
  }
  function validateGameUrl(url) {
    if (BLOCKED_SCHEMES.test(url)) return `game-src blocked scheme: "${url}"`;
    if (UNSAFE_CHARS.test(url)) return `game-src contains unsafe characters: "${url}"`;
    if (url.startsWith("/") && !url.startsWith("//")) return null;
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return `game-src is not a valid URL: "${url}"`;
    }
    if (parsed.protocol === "https:") return null;
    if (parsed.protocol === "http:" && (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1" || parsed.hostname === "[::1]")) {
      return null;
    }
    return `game-src must be HTTPS: "${url}"`;
  }
  function canonicalizeGameUrl(url) {
    if (url.startsWith("/") && !url.startsWith("//") && typeof location !== "undefined") {
      return location.origin + url;
    }
    return url;
  }
  function isTrigger(v) {
    return v !== null && TRIGGERS.includes(v);
  }
  function isSize(v) {
    return v !== null && SIZES.includes(v);
  }
  function parseWidthAttr(raw, label, issues) {
    if (raw === null || raw === "") return "auto";
    if (WIDTH_ENUM.includes(raw)) return raw;
    const px = parsePixelValue(raw);
    if (px === null) {
      issues.push({ message: `${label}="${raw}" is invalid; expected auto|full or a positive pixel value; falling back to "auto"` });
      return "auto";
    }
    return px;
  }
  function parseHeightAttr(raw, label, issues) {
    if (raw === null || raw === "") return null;
    if (raw === "full") return "full";
    const px = parsePixelValue(raw);
    if (px === null) {
      issues.push({ message: `${label}="${raw}" is invalid; expected full or a positive pixel value; ignoring` });
      return null;
    }
    return px;
  }
  function parseCommonAttrs(el, issues) {
    const rawTrigger = el.getAttribute("trigger");
    const rawSize = el.getAttribute("size");
    let trigger;
    if (rawTrigger === null || rawTrigger === "") trigger = "auto";
    else if (isTrigger(rawTrigger)) trigger = rawTrigger;
    else {
      issues.push({ message: `trigger="${rawTrigger}" is invalid; falling back to "auto"` });
      trigger = "auto";
    }
    const width = parseWidthAttr(el.getAttribute("width"), "width", issues);
    const height = parseHeightAttr(el.getAttribute("height"), "height", issues);
    let size;
    if (rawSize === null || rawSize === "") size = "normal";
    else if (isSize(rawSize)) size = rawSize;
    else {
      issues.push({ message: `size="${rawSize}" is invalid; expected normal|compact; falling back to "normal"` });
      size = "normal";
    }
    return { trigger, width, height, size };
  }

  // src/config/widget.ts
  function inspectWidgetConfig(el) {
    const issues = [];
    const sitekey = el.getAttribute("sitekey") ?? "";
    const invisible = el.hasAttribute("invisible");
    const common = parseCommonAttrs(el, issues);
    let trigger = common.trigger;
    if (invisible && trigger === "click") {
      issues.push({ message: 'trigger="click" is incompatible with the invisible widget (no UI to click); falling back to "auto"' });
      trigger = "auto";
    }
    let inert = false;
    if (!sitekey) {
      issues.push({ message: "sitekey attribute is required; widget will not activate" });
      inert = true;
    }
    const rawLocale = el.getAttribute("locale");
    const locale = rawLocale !== null && rawLocale.trim().length > 0 ? rawLocale : null;
    const rawSkin = el.getAttribute("skin");
    const skin = rawSkin !== null && rawSkin.trim().length > 0 ? rawSkin : null;
    return {
      config: { sitekey, invisible, trigger, width: common.width, height: common.height, size: common.size, locale, skin },
      issues,
      inert
    };
  }

  // src/errors.ts
  var DEFAULT_SEVERITY = {
    "invalid-config": "warn",
    "invalid-call": "warn",
    "verification-failed": "error",
    "game-load-failed": "error",
    // Server gave an authoritative 409 at bootstrap (the gated key cannot supply
    // a valid game). The widget cannot run a round, so this is a hard error.
    "gate-unavailable": "error",
    "game-error-relayed": "error"
  };
  var IFRAME_GAME_RELAY = /* @__PURE__ */ new Set([
    "game-error-relayed"
  ]);
  var IFRAME_LOAD_RAW = /* @__PURE__ */ new Set([
    "iframe-load-failed",
    "iframe-script-blocked",
    "game-not-registered"
  ]);
  function mapIframeErrorCode(rawCode) {
    if (IFRAME_LOAD_RAW.has(rawCode)) {
      return { code: "game-load-failed", originalCode: rawCode };
    }
    if (IFRAME_GAME_RELAY.has(rawCode)) {
      return { code: "game-error-relayed" };
    }
    return { code: "game-error-relayed", originalCode: rawCode };
  }
  function fireError(el, code, message, originalCode) {
    const detail = {
      code,
      message,
      severity: DEFAULT_SEVERITY[code]
    };
    if (originalCode !== void 0) detail.originalCode = originalCode;
    el.dispatchEvent(
      new CustomEvent("error", {
        detail,
        bubbles: true,
        composed: true
      })
    );
  }

  // src/locale/widget-shell.ts
  var HARDCODED_FALLBACK = {
    simpleVerify: "Verify",
    simpleVerifying: "Verifying\u2026",
    simpleVerified: "Verified",
    simpleFailed: "Failed",
    brandName: "Caputchin",
    brandTag: "see no data",
    simpleAriaCheckbox: "Verify you are human",
    simpleAriaStatus: "Caputchin verification status",
    overlayClose: "Close",
    frameTitle: "Caputchin verification challenge"
  };
  function toStrings(resolved) {
    if (!resolved) return HARDCODED_FALLBACK;
    const out = { ...HARDCODED_FALLBACK };
    for (const key of Object.keys(HARDCODED_FALLBACK)) {
      const value = resolved[key];
      if (typeof value === "string") out[key] = value;
    }
    return out;
  }
  function buildWidgetShell(resolved) {
    return {
      direction: resolved?._direction ?? "ltr",
      lang: resolved?._lang ?? "en",
      strings: toStrings(resolved),
      issues: []
    };
  }

  // caputchin.json
  var caputchin_default = {
    locales: {
      schema: {
        simpleVerify: {
          name: "Verify label (idle)",
          description: "Text shown next to the shield before verification starts."
        },
        simpleVerifying: {
          name: "Verify label (in progress)",
          description: "Text shown while the proof-of-work and Cap redeem are running."
        },
        simpleVerified: {
          name: "Verify label (success)",
          description: "Text shown after verification succeeds."
        },
        simpleFailed: {
          name: "Verify label (failure)",
          description: "Text shown when verification fails."
        },
        brandName: {
          name: "Brand wordmark",
          description: "Product name shown next to the leaf logo in the brand block."
        },
        brandTag: {
          name: "Brand tagline",
          description: "Small tagline under the wordmark linking to the legal page."
        },
        simpleAriaCheckbox: {
          name: "Checkbox aria-label",
          description: "Screen-reader label for the clickable verify shield. Used when trigger=click."
        },
        simpleAriaStatus: {
          name: "Status aria-label",
          description: "Screen-reader label for the non-interactive status shield. Used for auto / form-submit triggers."
        },
        overlayClose: {
          name: "Close button aria-label",
          description: "Screen-reader label for the close (x) button on the fullscreen game dialog."
        },
        frameTitle: {
          name: "Challenge frame title",
          description: "Accessible name (title attribute) for the iframe running the challenge game. Announced when a screen reader enters the frame."
        }
      },
      presets: {
        English: {
          _lang: "en",
          _default: true,
          simpleVerify: "Verify",
          simpleVerifying: "Verifying\u2026",
          simpleVerified: "Verified",
          simpleFailed: "Failed",
          brandName: "Caputchin",
          brandTag: "see no data",
          simpleAriaCheckbox: "Verify you are human",
          simpleAriaStatus: "Caputchin verification status",
          overlayClose: "Close",
          frameTitle: "Caputchin verification challenge"
        },
        Arabic: {
          _lang: "ar",
          _default: true,
          simpleVerify: "\u062A\u062D\u0642\u0642",
          simpleVerifying: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642\u2026",
          simpleVerified: "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
          simpleFailed: "\u0641\u0634\u0644",
          brandName: "\u0643\u0627\u0628\u0648\u062A\u0634\u0646",
          brandTag: "\u0623\u0639\u064A\u0646\u0646\u0627 \u0645\u063A\u0645\u0636\u0629",
          simpleAriaCheckbox: "\u062A\u062D\u0642\u0651\u0642 \u0645\u0646 \u0623\u0646\u0643 \u0625\u0646\u0633\u0627\u0646",
          simpleAriaStatus: "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0643\u0627\u0628\u0648\u062A\u0634\u0646",
          overlayClose: "\u0625\u063A\u0644\u0627\u0642",
          frameTitle: "\u062A\u062D\u062F\u0651\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0643\u0627\u0628\u0648\u062A\u0634\u0646"
        },
        "Chinese (Simplified)": {
          _lang: "zh-Hans",
          _default: true,
          simpleVerify: "\u9A8C\u8BC1",
          simpleVerifying: "\u9A8C\u8BC1\u4E2D\u2026",
          simpleVerified: "\u5DF2\u9A8C\u8BC1",
          simpleFailed: "\u5931\u8D25",
          brandName: "Caputchin",
          brandTag: "\u89C6\u800C\u4E0D\u89C1",
          simpleAriaCheckbox: "\u9A8C\u8BC1\u60A8\u662F\u771F\u4EBA",
          simpleAriaStatus: "Caputchin \u9A8C\u8BC1\u72B6\u6001",
          overlayClose: "\u5173\u95ED",
          frameTitle: "Caputchin \u9A8C\u8BC1\u6311\u6218"
        },
        Spanish: {
          _lang: "es",
          _default: true,
          simpleVerify: "Verificar",
          simpleVerifying: "Verificando\u2026",
          simpleVerified: "Verificado",
          simpleFailed: "Error",
          brandName: "Caputchin",
          brandTag: "ojos que no ven",
          simpleAriaCheckbox: "Verifica que eres humano",
          simpleAriaStatus: "Estado de verificaci\xF3n de Caputchin",
          overlayClose: "Cerrar",
          frameTitle: "Desaf\xEDo de verificaci\xF3n de Caputchin"
        },
        Portuguese: {
          _lang: "pt",
          _default: true,
          simpleVerify: "Verificar",
          simpleVerifying: "Verificando\u2026",
          simpleVerified: "Verificado",
          simpleFailed: "Falhou",
          brandName: "Caputchin",
          brandTag: "de olhos fechados",
          simpleAriaCheckbox: "Verifique que voc\xEA \xE9 humano",
          simpleAriaStatus: "Status de verifica\xE7\xE3o do Caputchin",
          overlayClose: "Fechar",
          frameTitle: "Desafio de verifica\xE7\xE3o do Caputchin"
        },
        French: {
          _lang: "fr",
          _default: true,
          simpleVerify: "V\xE9rifier",
          simpleVerifying: "V\xE9rification\u2026",
          simpleVerified: "V\xE9rifi\xE9",
          simpleFailed: "\xC9chec",
          brandName: "Caputchin",
          brandTag: "les yeux ferm\xE9s",
          simpleAriaCheckbox: "V\xE9rifiez que vous \xEAtes humain",
          simpleAriaStatus: "\xC9tat de v\xE9rification Caputchin",
          overlayClose: "Fermer",
          frameTitle: "D\xE9fi de v\xE9rification Caputchin"
        },
        German: {
          _lang: "de",
          _default: true,
          simpleVerify: "Best\xE4tigen",
          simpleVerifying: "Wird best\xE4tigt\u2026",
          simpleVerified: "Best\xE4tigt",
          simpleFailed: "Fehlgeschlagen",
          brandName: "Caputchin",
          brandTag: "Augen zu",
          simpleAriaCheckbox: "Best\xE4tige, dass du ein Mensch bist",
          simpleAriaStatus: "Caputchin-Verifizierungsstatus",
          overlayClose: "Schlie\xDFen",
          frameTitle: "Caputchin-Verifizierungsaufgabe"
        },
        Russian: {
          _lang: "ru",
          _default: true,
          simpleVerify: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C",
          simpleVerifying: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u2026",
          simpleVerified: "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
          simpleFailed: "\u041E\u0448\u0438\u0431\u043A\u0430",
          brandName: "Caputchin",
          brandTag: "\u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u043C \u0433\u043B\u0430\u0437\u0430",
          simpleAriaCheckbox: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
          simpleAriaStatus: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 Caputchin",
          overlayClose: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
          frameTitle: "\u041F\u0440\u043E\u0432\u0435\u0440\u043E\u0447\u043D\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 Caputchin"
        },
        Japanese: {
          _lang: "ja",
          _default: true,
          simpleVerify: "\u78BA\u8A8D",
          simpleVerifying: "\u78BA\u8A8D\u4E2D\u2026",
          simpleVerified: "\u78BA\u8A8D\u6E08\u307F",
          simpleFailed: "\u5931\u6557",
          brandName: "Caputchin",
          brandTag: "\u898B\u306A\u3044\u7D04\u675F",
          simpleAriaCheckbox: "\u4EBA\u9593\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D",
          simpleAriaStatus: "Caputchin \u78BA\u8A8D\u30B9\u30C6\u30FC\u30BF\u30B9",
          overlayClose: "\u9589\u3058\u308B",
          frameTitle: "Caputchin \u8A8D\u8A3C\u30C1\u30E3\u30EC\u30F3\u30B8"
        },
        Korean: {
          _lang: "ko",
          _default: true,
          simpleVerify: "\uD655\uC778",
          simpleVerifying: "\uD655\uC778 \uC911\u2026",
          simpleVerified: "\uD655\uC778\uB428",
          simpleFailed: "\uC2E4\uD328",
          brandName: "Caputchin",
          brandTag: "\uB208\uC744 \uAC10\uC2B5\uB2C8\uB2E4",
          simpleAriaCheckbox: "\uC0AC\uB78C\uC778\uC9C0 \uD655\uC778",
          simpleAriaStatus: "Caputchin \uC778\uC99D \uC0C1\uD0DC",
          overlayClose: "\uB2EB\uAE30",
          frameTitle: "Caputchin \uC778\uC99D \uCC4C\uB9B0\uC9C0"
        },
        Indonesian: {
          _lang: "id",
          _default: true,
          simpleVerify: "Verifikasi",
          simpleVerifying: "Memverifikasi\u2026",
          simpleVerified: "Terverifikasi",
          simpleFailed: "Gagal",
          brandName: "Caputchin",
          brandTag: "kami tutup mata",
          simpleAriaCheckbox: "Verifikasi bahwa Anda manusia",
          simpleAriaStatus: "Status verifikasi Caputchin",
          overlayClose: "Tutup",
          frameTitle: "Tantangan verifikasi Caputchin"
        }
      }
    },
    skins: {
      schema: {
        primary: {
          type: "color",
          name: "Primary action",
          description: "Verify button, shield verified state, focus outline, brand link colors."
        },
        primary_hover: {
          type: "color",
          name: "Primary hover",
          description: "Darker variant of primary used on hover for brand links."
        },
        surface_bg: {
          type: "color",
          name: "Surface background",
          description: "Card / dialog background. Frames the verify checkbox and game dialog."
        },
        text_primary: {
          type: "color",
          name: "Primary text",
          description: "Verify checkbox text, close button text."
        },
        text_label: {
          type: "color",
          name: "State label",
          description: "The Verify / Verifying / Verified / Failed label color."
        },
        text_muted: {
          type: "color",
          name: "Muted text",
          description: "Brand tag, shield outline in interactive idle state, separator dots."
        },
        text_passive: {
          type: "color",
          name: "Passive text",
          description: "Shield outline in passive (auto / form-submit) idle state."
        },
        separator: {
          type: "color",
          name: "Compact separator",
          description: "Color of the dot separator (\xB7) injected between the brand wordmark and tag in compact-mode brand strips. Sits lighter than text_muted so the dot reads as decoration, not active text."
        },
        border: {
          type: "color",
          name: "Border",
          description: "Card outline, frame divider, badge slot divider."
        },
        glyph: {
          type: "color",
          name: "Glyph",
          description: "Checkmark / error glyph fill rendered on top of the shield."
        },
        error: {
          type: "color",
          name: "Error",
          description: "Shield stroke + fill when verification fails."
        },
        shadow: {
          type: "color",
          name: "Modal shadow",
          description: "Drop shadow on the modal dialog."
        },
        modal_backdrop: {
          type: "color",
          name: "Modal backdrop",
          description: "Backdrop wash behind the modal dialog."
        },
        fullscreen_backdrop: {
          type: "color",
          name: "Fullscreen backdrop",
          description: "Backdrop wash behind the fullscreen dialog."
        },
        close_btn_bg: {
          type: "color",
          name: "Close button bg",
          description: "Background of the close (x) button on the fullscreen dialog."
        },
        brand_text: {
          type: "color",
          name: "Brand text",
          description: "Color of the Caputchin wordmark + home link in the brand strip. Pairs with brand_logo so wordmark + leaf match."
        },
        brand_text_hover: {
          type: "color",
          name: "Brand text hover",
          description: "Color of the brand wordmark + tag links on hover/focus."
        },
        brand_logo: {
          type: "image",
          name: "Brand logo",
          description: "Leaf monogram rendered at the start of the brand strip. Asset must match the skin mode (light/dark variant)."
        }
      },
      presets: {
        light: {
          _theme: "light",
          _default: true,
          primary: "#2F6640",
          primary_hover: "#1f4a2c",
          surface_bg: "#ffffff",
          text_primary: "#1a1917",
          text_label: "#3d2a5e",
          text_muted: "#6e7681",
          text_passive: "#b8bec5",
          border: "#d0d7de",
          glyph: "#ffffff",
          error: "#c2410c",
          shadow: "rgba(0,0,0,0.25)",
          modal_backdrop: "rgba(0,0,0,0.45)",
          fullscreen_backdrop: "rgba(0,0,0,0.8)",
          close_btn_bg: "rgba(255,255,255,0.9)",
          brand_text: "#2F6640",
          brand_text_hover: "#1f4a2c",
          separator: "#c0c0c0"
        },
        dark: {
          _theme: "dark",
          _default: true,
          primary: "#4E9B65",
          primary_hover: "#3A7D4F",
          surface_bg: "#182518",
          text_primary: "#F7F5F2",
          text_label: "#9ACE9B",
          text_muted: "#9ACE9B",
          text_passive: "#243526",
          border: "#2F6640",
          glyph: "#0F1810",
          error: "#FCA5A5",
          shadow: "rgba(0,0,0,0.6)",
          modal_backdrop: "rgba(0,0,0,0.65)",
          fullscreen_backdrop: "rgba(0,0,0,0.85)",
          close_btn_bg: "rgba(36,53,38,0.92)",
          brand_text: "#F7F5F2",
          brand_text_hover: "#9ACE9B",
          separator: "#3A7D4F"
        }
      }
    },
    configurations: {
      schema: {
        home_link: {
          type: "link",
          name: "Brand home link",
          description: "External URL the leaf + Caputchin wordmark in the brand strip links to."
        },
        legal_link: {
          type: "link",
          name: "Brand legal link",
          description: "External URL the small tagline under the wordmark links to. Typically the privacy / legal page."
        }
      },
      presets: {
        default: {
          _default: true,
          home_link: "https://caputchin.com",
          legal_link: "https://caputchin.com/legal"
        }
      }
    }
  };

  // src/assets/logo-light.svg
  var logo_light_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="213 213 600 600" enable-background="new 213 213 600 600" xml:space="preserve">%0A  <path fill="%231A2E22" opacity="1.000000" stroke="none" d=" M582.860107,745.019165   C551.045105,757.049683 510.717316,758.786865 501.040802,754.513855   C501.171967,753.523071 501.983612,753.170654 502.733368,752.880432   C516.815063,747.430603 528.150452,737.824219 539.676636,728.506470   C540.453735,727.878235 541.192505,727.202942 541.957275,726.559143   C549.126099,720.524292 556.480652,717.770630 565.524170,723.332825   C570.635681,726.476562 576.562988,727.954651 582.798035,725.945007   C585.065308,725.214172 587.521667,724.504700 588.924866,722.753601   C594.902222,715.294128 600.757935,707.644531 603.461853,698.297241   C604.153320,695.906616 604.643127,693.560669 605.914185,691.367920   C610.820740,682.904175 609.852905,675.519226 602.788635,668.842468   C600.498840,666.678223 599.169495,664.425171 598.630798,661.232544   C597.261108,653.115356 591.763000,648.342712 584.212402,646.282776   C571.736877,642.879272 559.104431,641.528748 546.293884,644.932068   C538.162231,647.092285 531.725830,652.084167 525.085205,656.811768   C523.680359,657.811829 522.708496,659.750244 519.949219,659.048035   C520.675903,652.376587 521.482361,645.672668 522.124023,638.953003   C524.157776,617.654297 524.455627,596.540283 518.254456,575.644592   C512.950806,557.772827 495.703491,541.079102 473.624420,541.110840   C472.664490,541.112183 471.704163,540.856262 470.791718,540.726929   C470.011292,538.381042 471.760437,537.541199 472.948395,536.551392   C480.909271,529.917969 487.995453,522.402283 494.931824,514.746826   C497.694885,511.697266 501.014740,509.570099 504.704102,507.970642   C513.548035,504.136505 521.325867,498.870300 527.641907,491.509491   C532.445496,485.911285 538.378723,482.252594 545.675598,480.570435   C549.694519,479.643921 553.673340,478.150940 557.373657,476.315399   C565.441650,472.313324 568.953125,464.471832 566.753418,455.991272   C566.158997,453.699738 566.423035,451.824677 567.764893,449.883606   C572.384033,443.201996 571.706177,436.414490 567.780029,429.732788   C566.671997,427.847137 565.830688,426.058899 565.526306,423.797333   C564.247620,414.295807 558.802002,408.722321 549.331421,407.523193   C546.263367,407.134705 544.130920,405.980988 542.038879,403.878662   C535.521484,397.329224 527.419373,396.365204 519.854187,401.402618   C513.908447,405.361664 507.622589,408.922028 502.656281,414.195221   C500.657166,416.317841 499.024628,416.064117 496.623718,414.537506   C487.410004,408.678894 478.154449,411.085175 473.121033,420.862366   C466.658997,433.414551 459.824860,445.881073 459.242157,460.554504   C459.085022,464.511230 456.683746,466.852966 452.275848,467.321198   C450.677582,459.923431 450.699860,452.199646 447.605072,445.437927   C443.151215,435.706787 442.748932,427.446259 449.866241,418.169983   C454.986542,411.496490 457.083099,402.513275 457.796570,393.740723   C458.022156,390.966888 459.361267,389.190216 461.621368,387.723450   C487.962067,370.628937 492.815765,327.807037 475.643799,305.279877   C469.649323,297.416046 462.037292,291.850708 452.815613,289.043304   C446.943878,287.255737 444.332611,283.193878 441.708466,278.695740   C442.421875,276.631104 444.227692,276.371094 445.695679,275.723541   C470.963257,264.577759 494.435181,250.379044 516.453613,233.781876   C519.906982,231.178787 522.225159,230.742218 525.927917,233.520081   C557.602905,257.283478 592.047974,275.886780 629.764038,288.199524   C632.873352,289.214569 633.732300,290.652679 633.466431,293.946869   C631.353882,320.124451 639.009399,342.753998 659.242554,360.101349   C691.525452,387.779694 739.993652,379.204163 759.251404,341.456177   C760.281067,339.437805 760.778503,337.039673 763.672546,334.960907   C764.178955,339.621124 764.844055,343.723297 765.038025,347.847595   C766.509705,379.143463 767.144287,410.464264 765.079956,441.740967   C762.987366,473.446106 759.395020,504.980835 752.324463,536.048950   C743.142761,576.393555 728.244080,614.357971 704.422241,648.321777   C677.465454,686.755127 643.506714,717.425049 600.802551,737.746399   C595.102661,740.458740 589.091797,742.517639 582.860107,745.019165  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M494.915833,743.233765   C491.330566,744.487305 487.973053,744.694580 484.664764,744.742981   C475.440369,744.878113 469.322571,740.117126 466.077393,730.380005   C462.386871,719.306702 460.042145,707.897156 458.135071,696.410889   C455.327728,679.502502 452.943878,662.547485 453.790802,645.311646   C453.989868,641.260376 455.540192,637.210144 454.140930,632.777039   C451.832062,633.639282 451.746674,635.517883 451.254639,637.176392   C448.040802,648.010193 446.470612,659.324585 448.195648,670.261780   C451.559326,691.588684 440.522919,704.935242 425.346893,716.607483   C419.378876,721.197571 412.933014,724.998169 405.654053,727.212036   C404.249420,727.639282 402.722076,727.940308 401.893097,729.579041   C403.764740,732.725098 407.107849,734.098877 409.974487,735.975525   C437.440948,753.957214 467.496490,765.324524 500.009491,769.439331   C535.087524,773.878723 568.784851,767.249695 600.900452,753.277283   C647.956421,732.804871 685.055664,699.982666 714.661133,658.457214   C741.572083,620.710938 758.220459,578.535522 767.652649,533.353027   C774.738831,499.408569 778.326782,465.064545 780.003967,430.442291   C781.498230,399.597534 780.574951,368.830872 778.536133,338.077545   C777.733643,325.971741 776.032532,313.910339 772.576904,302.218140   C766.808838,282.701691 756.383728,266.870117 737.041931,258.295715   C719.587036,250.557755 699.803345,254.714447 685.716309,269.079010   C672.100159,282.963409 668.300720,303.491608 676.240479,320.276733   C682.739807,334.016693 698.558533,340.740082 712.201904,335.554626   C717.624268,333.493744 721.518005,329.922211 723.569641,324.374969   C726.574524,316.250031 723.256470,309.682770 714.900024,307.463623   C707.282104,305.440552 702.974060,300.404724 703.796631,294.484314   C704.662781,288.249939 711.023804,283.487610 718.472839,283.623688   C727.932800,283.796539 735.681458,287.874420 741.223755,295.266785   C759.504883,319.650269 745.110535,349.322784 721.294861,358.306458   C688.497192,370.678284 655.271118,348.777313 648.790527,315.691010   C640.670349,274.233582 672.393799,230.114929 718.980469,230.702271   C753.385620,231.136032 775.932922,249.552628 790.003845,279.449646   C799.350891,299.309601 802.067688,320.839996 803.300964,342.537811   C804.349915,360.991547 805.396973,379.450134 805.204407,397.946381   C804.841919,432.753693 802.751587,467.402557 797.631897,501.901123   C792.607971,535.754333 785.306763,568.983704 772.986511,600.929749   C759.771851,635.194885 741.815796,666.771973 717.934998,694.872375   C695.300171,721.506653 669.322693,744.186096 639.068665,761.736572   C599.154175,784.891174 556.298523,797.388367 509.861603,795.154358   C470.048248,793.239014 432.423706,782.591980 397.135956,764.152527   C356.582092,742.961243 322.479645,714.199097 296.602356,676.181824   C272.506561,640.781799 255.367096,602.306152 247.968704,560.027527   C240.610580,517.979004 244.440109,476.503265 257.250732,435.826050   C258.999786,430.272369 260.653656,424.688660 262.513672,418.587097   C260.546692,420.062103 259.502930,419.235413 258.429230,417.531372   C252.641830,408.346527 248.609589,398.596191 248.725510,387.555603   C248.758804,384.385132 247.908707,382.565765 244.887878,380.927582   C227.167496,371.318268 221.326569,355.171783 221.294266,336.198120   C221.282272,329.146484 222.872543,322.340912 226.374207,316.072754   C231.681335,306.572815 239.870499,300.933350 250.353546,298.947418   C254.081299,298.241211 256.283142,296.610657 258.100800,293.571259   C270.845245,272.260864 289.229279,257.731842 312.473907,249.487610   C353.039001,235.100235 400.273285,246.288666 428.960785,281.716553   C432.311279,285.854340 435.736481,289.990906 438.099518,294.809845   C439.380280,297.421661 441.586334,298.228699 444.122742,298.604187   C464.205750,301.577026 472.847656,316.623810 474.265198,334.777740   C475.186737,346.579407 472.387115,357.574768 465.971863,367.599304   C462.384613,373.204742 457.895447,377.954346 451.630219,380.324738   C447.100067,382.038666 446.363495,385.267578 446.402100,389.292419   C446.510315,400.575989 441.717682,410.130524 436.309082,419.298523   C434.034546,419.372650 433.860260,417.765533 433.151733,416.745270   C431.859955,414.885254 430.992676,412.248383 427.946503,413.226074   C425.799683,413.915131 423.826752,419.744232 424.952332,421.968872   C426.304169,424.640686 427.840454,427.223907 429.384216,429.793060   C436.703003,441.972992 439.376007,455.448883 440.133270,469.367981   C440.555817,477.135742 439.901947,477.485260 432.134003,476.191193   C430.546539,481.258911 432.531830,486.106018 432.462738,490.995514   C435.318420,491.356995 436.873413,489.897064 438.557190,488.970673   C445.708496,485.036224 452.648193,480.685516 459.957001,477.078125   C466.853821,473.674072 470.297363,468.347900 470.617432,460.946228   C471.186005,447.798431 477.415619,436.754181 483.393799,425.601257   C484.192596,424.111023 485.430573,422.839752 487.316315,422.908783   C489.399231,422.985016 490.569977,424.412903 491.342743,426.178894   C492.745178,429.383789 492.467194,432.615845 491.698639,435.952454   C491.085449,438.614471 489.257538,441.018311 489.673615,444.771210   C495.085663,440.824982 498.801331,436.174683 502.265198,431.414978   C508.477539,422.878662 516.583618,416.625122 525.397095,411.112274   C528.148987,409.391022 530.978271,408.369568 533.493164,411.228149   C536.166931,414.267242 534.630432,417.019745 532.508911,419.700775   C530.710449,421.973663 528.290039,423.454193 526.093933,425.223694   C522.469421,428.144226 518.820740,431.033936 516.915161,435.674713   C522.111633,432.666199 526.710754,428.738403 532.092529,426.043518   C536.408936,423.882080 540.479492,421.104736 545.192932,419.951447   C548.129822,419.232941 551.702271,418.226105 553.502808,422.144653   C555.160706,425.753021 552.471741,427.924042 550.130737,429.625671   C546.235596,432.456970 542.003296,434.828094 537.887146,437.350769   C534.474121,439.442474 531.239868,441.755524 527.655396,445.227356   C535.676697,441.871857 542.834534,438.873047 549.996277,435.883636   C553.242920,434.528442 556.810486,433.486664 558.746826,437.378723   C560.687683,441.279724 558.140625,444.101410 554.877625,445.964691   C549.239136,449.184418 543.472107,452.178558 537.769653,455.286926   C535.889648,456.311737 533.872253,457.147888 532.084412,459.279083   C535.943298,459.906738 538.950867,457.758911 542.238220,457.467224   C544.715210,457.247467 547.143677,456.368713 549.616638,456.246552   C551.877258,456.134857 554.654053,456.034912 555.614319,458.727936   C556.620544,461.549774 555.243164,463.940552 552.980713,465.696533   C550.419556,467.684418 547.330383,468.524078 544.238586,469.202240   C534.526245,471.332581 526.291748,475.657166 519.674988,483.425385   C513.675903,490.468353 506.097656,495.695068 497.150177,498.598724   C492.776581,500.018036 490.093109,503.505737 487.141602,506.628113   C462.893127,532.280334 435.737854,553.884766 403.467804,568.885315   C392.655243,573.911560 382.859253,574.282776 371.979492,569.569824   C357.292023,563.207336 342.635162,556.896729 329.012543,548.410522   C327.653900,547.564148 326.257996,546.542297 324.079620,546.865173   C326.633820,552.412781 331.461487,555.833923 336.077881,558.452026   C346.656403,564.451416 352.971130,572.825012 356.578217,584.446594   C359.787079,594.785278 367.191803,602.860840 375.739197,609.523743   C378.235260,611.469421 378.583221,613.186707 377.374451,615.865662   C374.434998,622.380432 372.421356,629.180786 372.112488,636.647888   C373.795837,633.877075 375.500488,631.118958 377.159241,628.333496   C395.569580,597.418823 419.597260,572.406250 452.716919,557.185486   C463.126282,552.401672 474.100616,550.991333 485.269470,554.798767   C499.773163,559.742981 505.852875,571.605164 509.145538,585.167236   C513.400146,602.691528 512.612427,620.459473 510.690948,638.277100   C509.139923,652.659790 507.289673,666.994385 505.385956,681.328491   C505.182159,682.862732 504.517578,684.633911 506.055237,686.124573   C508.450806,686.267639 509.956940,684.529297 511.551636,683.209106   C518.608215,677.367554 525.741272,671.602356 532.545410,665.475098   C547.615051,651.904358 564.706421,652.085693 582.670410,657.673340   C585.822144,658.653625 588.026489,660.706909 587.317688,664.334595   C586.634583,667.830322 583.702881,668.647583 580.770142,668.365906   C575.657593,667.874695 570.607910,666.726074 565.494934,666.244446   C561.776306,665.894104 557.920715,665.714355 554.486633,668.171753   C567.186157,664.721497 578.382751,669.991882 589.790894,673.938232   C591.038025,674.369568 592.190125,675.090393 593.362183,675.721680   C596.640198,677.487366 598.692505,680.145264 597.290039,683.866516   C595.892334,687.575134 592.624512,687.386963 589.248535,686.744385   C583.812683,685.709717 578.643921,683.837708 573.507996,681.921631   C569.161316,680.299988 564.792297,680.033569 560.236023,680.593140   C569.937378,680.796326 578.140930,685.346436 586.478333,689.487976   C587.362427,689.927185 588.198853,690.531982 588.927734,691.201172   C591.215271,693.301392 593.407715,695.655701 591.460327,698.954407   C589.735657,701.875854 586.819153,702.685852 583.622559,701.673462   C579.340637,700.317444 575.102722,698.813782 570.883728,697.270081   C566.189209,695.552307 561.579895,693.497253 556.235596,694.834167   C564.842712,695.552063 572.081787,699.546753 579.248230,703.853394   C582.557312,705.842102 584.504272,708.348450 582.912537,712.003418   C581.374817,715.534302 578.118713,715.701904 574.788391,714.531860   C571.493164,713.374084 568.042480,712.504517 564.960815,710.922607   C556.402161,706.529175 548.359924,707.833801 540.959229,713.141724   C533.118103,718.765503 525.776062,725.080200 518.024414,730.835144   C511.066498,736.000854 503.800690,740.727600 494.915833,743.233765  M243.494095,313.942596   C233.802399,321.496765 232.291794,331.943359 233.327423,343.183746   C234.574371,356.717438 243.721909,371.172485 257.919861,372.709839   C261.032684,373.046906 260.824738,374.982239 260.626770,377.410370   C260.111084,383.736359 259.514191,390.133270 262.362946,396.386749   C265.547424,392.671082 267.237915,388.089661 271.657318,385.937622   C274.229889,388.632538 273.116455,391.717133 273.790222,394.377533   C278.527466,413.082550 289.905945,426.806580 306.143280,436.372498   C318.321930,443.547333 331.204742,449.519989 343.680756,456.202026   C346.700745,457.819489 349.298187,457.530975 352.183289,456.166687   C364.992676,450.109436 377.798981,443.930511 389.755127,436.390594   C407.315002,425.316711 419.831207,410.218689 423.030853,388.840973   C423.115509,388.275269 423.690979,387.783081 423.994171,387.322571   C428.285065,388.282898 428.702179,394.063965 433.565613,394.398743   C436.695221,389.455872 435.728912,384.008698 435.592957,378.801239   C435.495300,375.063385 436.398163,373.070862 440.380310,372.155151   C448.851868,370.207123 454.918274,364.850922 458.636505,357.087921   C462.395630,349.239563 463.717529,340.769806 462.423737,332.231262   C460.281982,318.096191 452.281097,309.937286 439.248566,309.980957   C435.479553,309.993591 433.123749,308.038269 431.197327,305.011108   C419.213013,286.178528 401.407806,281.833466 380.728973,285.072662   C370.497162,286.675476 361.407379,291.255585 352.942383,296.998108   C349.268860,299.490204 346.513977,299.604187 342.669006,296.930054   C333.869019,290.809784 324.223022,286.274658 313.433044,284.751373   C294.379883,282.061584 274.030914,286.502991 263.432953,306.508179   C262.008759,309.196594 259.845764,310.245667 256.885803,310.106415   C252.273499,309.889404 247.938004,310.819550 243.494095,313.942596  M393.206879,447.783844   C379.965668,455.519379 365.938904,461.727844 352.362732,468.811523   C349.113251,470.506958 346.173737,470.372345 342.933014,468.555603   C337.562592,465.544952 332.028107,462.816071 326.490234,460.117249   C313.014191,453.549927 299.443726,447.189484 287.796570,437.464417   C283.217896,433.641296 279.571136,428.933472 274.881805,423.913177   C269.183167,439.241699 266.601074,453.865997 269.942108,469.187103   C274.255890,469.352112 274.172882,464.113312 278.155579,463.986328   C278.066528,480.669281 281.252441,496.181519 292.343475,510.010590   C296.002014,503.987091 293.534943,497.304291 297.678070,491.950317   C304.773041,507.479645 313.092316,521.372559 327.108673,530.951111   C330.398895,527.440796 326.236908,523.944702 328.425049,520.941284   C330.750061,521.213318 331.782806,523.097351 333.105499,524.486389   C342.186401,534.022339 352.745789,541.438660 364.771820,546.776123   C366.263916,547.438293 367.930695,548.603333 369.408508,547.197754   C370.936432,545.744446 369.601807,544.099548 369.038300,542.608093   C367.675018,539.000000 365.174774,535.769043 365.061798,531.312805   C369.564850,532.133667 372.383545,535.176086 375.805969,537.039856   C381.020294,539.879578 382.921387,538.998718 382.576324,533.001648   C381.580566,515.693909 378.061218,499.075073 368.227386,484.321198   C367.128021,482.671844 365.321625,481.153931 365.573242,478.723877   C367.997894,478.308960 369.167999,480.035004 370.586426,480.991669   C379.509888,487.010101 387.183716,494.410187 393.436127,503.138824   C396.006805,506.727600 398.615417,507.252594 402.328430,505.468292   C406.830933,503.304626 411.378998,501.222839 415.987823,499.298401   C418.595734,498.209473 419.907013,496.456451 420.194794,493.696777   C420.939697,486.554077 421.138336,479.389923 420.149109,472.286804   C419.382965,466.785675 418.029663,461.366302 416.949585,455.971466   C418.743317,455.292145 419.951935,455.842072 421.157806,456.394440   C422.642487,457.074554 424.223419,458.456024 425.779633,457.241516   C427.520599,455.882812 426.576355,453.878265 426.127716,452.140930   C424.536438,445.978699 422.016113,440.190247 419.036438,434.583405   C417.172363,431.075928 415.145660,430.611450 412.068909,433.490082   C406.470856,438.727753 400.458099,443.483795 393.206879,447.783844  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M385.613281,394.979248   C383.103638,391.804871 385.227875,391.717041 387.314789,391.902313   C392.107849,392.327820 394.612823,395.847321 394.570770,401.908783   C392.605988,403.123260 392.313843,400.383759 390.629791,400.339996   C380.562042,414.601166 366.102295,420.241180 349.020660,420.362122   C332.007019,420.482635 317.361237,415.135071 306.588501,401.716034   C304.447327,401.607880 304.225006,403.858154 302.539948,404.139038   C300.648254,402.965912 301.601685,401.196472 301.962311,399.772705   C303.214508,394.828278 306.693848,393.093384 312.637604,394.505310   C311.116364,397.399353 311.931824,399.509888 314.454468,401.642944   C333.185974,417.481903 365.848877,416.857605 383.477112,400.144440   C384.850647,398.842194 386.943817,397.775848 385.613281,394.979248  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M389.657837,352.313049   C388.584534,354.008514 387.696411,355.383881 386.789673,356.788116   C388.081055,359.552063 391.702362,358.759552 394.105896,362.555328   C382.795685,360.381500 372.447144,359.713470 362.322418,365.195648   C362.284821,358.617310 361.685364,352.974548 362.591980,347.212006   C364.446259,335.426270 377.675140,329.731812 387.307892,336.801239   C392.044312,340.277283 392.732330,344.399841 389.657837,352.313049  M370.812469,343.285339   C371.762268,345.487610 373.274506,346.405365 375.354248,344.806793   C376.728058,343.750824 376.841339,342.167297 375.361542,341.085938   C373.261444,339.551239 371.740906,340.414124 370.812469,343.285339  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M317.926971,333.725891   C328.139526,335.197357 332.841187,341.214905 333.329315,352.754669   C333.481903,356.362396 332.488525,360.031281 333.988708,364.330383   C323.662964,359.293427 313.236267,359.149292 301.613434,363.309265   C303.586853,359.098724 306.835205,359.317017 308.825989,357.193359   C305.598907,352.065796 301.135132,346.721436 304.733826,340.183807   C307.320221,335.485260 312.288300,334.010895 317.926971,333.725891  M313.733826,339.803162   C311.565338,340.795868 310.498260,342.277222 312.350128,344.328552   C313.382874,345.472504 315.188354,345.999115 316.212708,344.485260   C317.640442,342.375183 316.454895,340.810272 313.733826,339.803162  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M257.311523,335.331726   C254.408722,341.082855 260.080597,339.143097 262.093475,341.047577   C258.745331,347.015442 255.393265,352.990265 251.579910,359.787323   C245.129700,350.665161 247.536697,341.348877 240.147629,336.760803   C237.920776,331.993134 240.774979,325.030334 246.094269,322.348175   C251.242157,319.752472 256.398621,320.336639 261.515991,322.600769   C264.243530,323.807526 264.357269,325.464905 262.682953,327.692841   C260.885040,330.085297 259.203308,332.565063 257.311523,335.331726  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M442.985596,320.754761   C453.160217,322.301575 457.166565,327.138611 456.443909,336.591705   C453.760498,337.308838 453.490143,334.452820 451.952606,333.510834   C450.507935,332.625793 449.003540,331.530090 447.364502,332.577393   C445.730011,333.621826 446.642944,335.237823 447.039825,336.647827   C449.231384,344.433319 448.877472,351.890747 444.036346,360.101288   C440.549408,353.415405 437.562012,347.687378 434.677826,342.157227   C435.753662,339.888275 438.087219,341.282135 439.375397,339.593628   C439.502594,333.639862 434.608978,329.973694 431.442322,325.254211   C434.885834,322.287842 438.513672,321.023956 442.985596,320.754761  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M339.828796,393.264435   C335.934448,390.176025 332.164398,386.969452 328.759430,383.413330   C327.367279,381.959351 327.231873,379.741882 328.923248,378.019989   C330.408356,376.508057 332.093842,376.666901 333.930359,377.433685   C339.927582,379.937714 342.582550,386.562500 339.828796,393.264435  z"/>%0A  <path fill="%233A7D4F" opacity="1.000000" stroke="none" d=" M355.555115,382.871521   C357.077393,380.145294 358.994141,378.369720 361.494049,377.254120   C363.528687,376.346191 365.470673,376.577332 366.925262,378.288666   C368.539337,380.187592 367.878235,382.323975 366.265900,383.603668   C362.522949,386.574341 358.952271,389.641357 356.910156,394.540100   C352.959381,390.500366 354.343689,386.844360 355.555115,382.871521  z"/>%0A</svg>%0A';

  // src/assets/logo-dark.svg
  var logo_dark_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="213 213 600 600" enable-background="new 213 213 600 600" xml:space="preserve">%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M494.915833,743.233765   C491.330566,744.487305 487.973053,744.694580 484.664764,744.742981   C475.440369,744.878113 469.322571,740.117126 466.077393,730.380005   C462.386871,719.306702 460.042145,707.897156 458.135071,696.410889   C455.327728,679.502502 452.943878,662.547485 453.790802,645.311646   C453.989868,641.260376 455.540192,637.210144 454.140930,632.777039   C451.832062,633.639282 451.746674,635.517883 451.254639,637.176392   C448.040802,648.010193 446.470612,659.324585 448.195648,670.261780   C451.559326,691.588684 440.522919,704.935242 425.346893,716.607483   C419.378876,721.197571 412.933014,724.998169 405.654053,727.212036   C404.249420,727.639282 402.722076,727.940308 401.893097,729.579041   C403.764740,732.725098 407.107849,734.098877 409.974487,735.975525   C437.440948,753.957214 467.496490,765.324524 500.009491,769.439331   C535.087524,773.878723 568.784851,767.249695 600.900452,753.277283   C647.956421,732.804871 685.055664,699.982666 714.661133,658.457214   C741.572083,620.710938 758.220459,578.535522 767.652649,533.353027   C774.738831,499.408569 778.326782,465.064545 780.003967,430.442291   C781.498230,399.597534 780.574951,368.830872 778.536133,338.077545   C777.733643,325.971741 776.032532,313.910339 772.576904,302.218140   C766.808838,282.701691 756.383728,266.870117 737.041931,258.295715   C719.587036,250.557755 699.803345,254.714447 685.716309,269.079010   C672.100159,282.963409 668.300720,303.491608 676.240479,320.276733   C682.739807,334.016693 698.558533,340.740082 712.201904,335.554626   C717.624268,333.493744 721.518005,329.922211 723.569641,324.374969   C726.574524,316.250031 723.256470,309.682770 714.900024,307.463623   C707.282104,305.440552 702.974060,300.404724 703.796631,294.484314   C704.662781,288.249939 711.023804,283.487610 718.472839,283.623688   C727.932800,283.796539 735.681458,287.874420 741.223755,295.266785   C759.504883,319.650269 745.110535,349.322784 721.294861,358.306458   C688.497192,370.678284 655.271118,348.777313 648.790527,315.691010   C640.670349,274.233582 672.393799,230.114929 718.980469,230.702271   C753.385620,231.136032 775.932922,249.552628 790.003845,279.449646   C799.350891,299.309601 802.067688,320.839996 803.300964,342.537811   C804.349915,360.991547 805.396973,379.450134 805.204407,397.946381   C804.841919,432.753693 802.751587,467.402557 797.631897,501.901123   C792.607971,535.754333 785.306763,568.983704 772.986511,600.929749   C759.771851,635.194885 741.815796,666.771973 717.934998,694.872375   C695.300171,721.506653 669.322693,744.186096 639.068665,761.736572   C599.154175,784.891174 556.298523,797.388367 509.861603,795.154358   C470.048248,793.239014 432.423706,782.591980 397.135956,764.152527   C356.582092,742.961243 322.479645,714.199097 296.602356,676.181824   C272.506561,640.781799 255.367096,602.306152 247.968704,560.027527   C240.610580,517.979004 244.440109,476.503265 257.250732,435.826050   C258.999786,430.272369 260.653656,424.688660 262.513672,418.587097   C260.546692,420.062103 259.502930,419.235413 258.429230,417.531372   C252.641830,408.346527 248.609589,398.596191 248.725510,387.555603   C248.758804,384.385132 247.908707,382.565765 244.887878,380.927582   C227.167496,371.318268 221.326569,355.171783 221.294266,336.198120   C221.282272,329.146484 222.872543,322.340912 226.374207,316.072754   C231.681335,306.572815 239.870499,300.933350 250.353546,298.947418   C254.081299,298.241211 256.283142,296.610657 258.100800,293.571259   C270.845245,272.260864 289.229279,257.731842 312.473907,249.487610   C353.039001,235.100235 400.273285,246.288666 428.960785,281.716553   C432.311279,285.854340 435.736481,289.990906 438.099518,294.809845   C439.380280,297.421661 441.586334,298.228699 444.122742,298.604187   C464.205750,301.577026 472.847656,316.623810 474.265198,334.777740   C475.186737,346.579407 472.387115,357.574768 465.971863,367.599304   C462.384613,373.204742 457.895447,377.954346 451.630219,380.324738   C447.100067,382.038666 446.363495,385.267578 446.402100,389.292419   C446.510315,400.575989 441.717682,410.130524 436.309082,419.298523   C434.034546,419.372650 433.860260,417.765533 433.151733,416.745270   C431.859955,414.885254 430.992676,412.248383 427.946503,413.226074   C425.799683,413.915131 423.826752,419.744232 424.952332,421.968872   C426.304169,424.640686 427.840454,427.223907 429.384216,429.793060   C436.703003,441.972992 439.376007,455.448883 440.133270,469.367981   C440.555817,477.135742 439.901947,477.485260 432.134003,476.191193   C430.546539,481.258911 432.531830,486.106018 432.462738,490.995514   C435.318420,491.356995 436.873413,489.897064 438.557190,488.970673   C445.708496,485.036224 452.648193,480.685516 459.957001,477.078125   C466.853821,473.674072 470.297363,468.347900 470.617432,460.946228   C471.186005,447.798431 477.415619,436.754181 483.393799,425.601257   C484.192596,424.111023 485.430573,422.839752 487.316315,422.908783   C489.399231,422.985016 490.569977,424.412903 491.342743,426.178894   C492.745178,429.383789 492.467194,432.615845 491.698639,435.952454   C491.085449,438.614471 489.257538,441.018311 489.673615,444.771210   C495.085663,440.824982 498.801331,436.174683 502.265198,431.414978   C508.477539,422.878662 516.583618,416.625122 525.397095,411.112274   C528.148987,409.391022 530.978271,408.369568 533.493164,411.228149   C536.166931,414.267242 534.630432,417.019745 532.508911,419.700775   C530.710449,421.973663 528.290039,423.454193 526.093933,425.223694   C522.469421,428.144226 518.820740,431.033936 516.915161,435.674713   C522.111633,432.666199 526.710754,428.738403 532.092529,426.043518   C536.408936,423.882080 540.479492,421.104736 545.192932,419.951447   C548.129822,419.232941 551.702271,418.226105 553.502808,422.144653   C555.160706,425.753021 552.471741,427.924042 550.130737,429.625671   C546.235596,432.456970 542.003296,434.828094 537.887146,437.350769   C534.474121,439.442474 531.239868,441.755524 527.655396,445.227356   C535.676697,441.871857 542.834534,438.873047 549.996277,435.883636   C553.242920,434.528442 556.810486,433.486664 558.746826,437.378723   C560.687683,441.279724 558.140625,444.101410 554.877625,445.964691   C549.239136,449.184418 543.472107,452.178558 537.769653,455.286926   C535.889648,456.311737 533.872253,457.147888 532.084412,459.279083   C535.943298,459.906738 538.950867,457.758911 542.238220,457.467224   C544.715210,457.247467 547.143677,456.368713 549.616638,456.246552   C551.877258,456.134857 554.654053,456.034912 555.614319,458.727936   C556.620544,461.549774 555.243164,463.940552 552.980713,465.696533   C550.419556,467.684418 547.330383,468.524078 544.238586,469.202240   C534.526245,471.332581 526.291748,475.657166 519.674988,483.425385   C513.675903,490.468353 506.097656,495.695068 497.150177,498.598724   C492.776581,500.018036 490.093109,503.505737 487.141602,506.628113   C462.893127,532.280334 435.737854,553.884766 403.467804,568.885315   C392.655243,573.911560 382.859253,574.282776 371.979492,569.569824   C357.292023,563.207336 342.635162,556.896729 329.012543,548.410522   C327.653900,547.564148 326.257996,546.542297 324.079620,546.865173   C326.633820,552.412781 331.461487,555.833923 336.077881,558.452026   C346.656403,564.451416 352.971130,572.825012 356.578217,584.446594   C359.787079,594.785278 367.191803,602.860840 375.739197,609.523743   C378.235260,611.469421 378.583221,613.186707 377.374451,615.865662   C374.434998,622.380432 372.421356,629.180786 372.112488,636.647888   C373.795837,633.877075 375.500488,631.118958 377.159241,628.333496   C395.569580,597.418823 419.597260,572.406250 452.716919,557.185486   C463.126282,552.401672 474.100616,550.991333 485.269470,554.798767   C499.773163,559.742981 505.852875,571.605164 509.145538,585.167236   C513.400146,602.691528 512.612427,620.459473 510.690948,638.277100   C509.139923,652.659790 507.289673,666.994385 505.385956,681.328491   C505.182159,682.862732 504.517578,684.633911 506.055237,686.124573   C508.450806,686.267639 509.956940,684.529297 511.551636,683.209106   C518.608215,677.367554 525.741272,671.602356 532.545410,665.475098   C547.615051,651.904358 564.706421,652.085693 582.670410,657.673340   C585.822144,658.653625 588.026489,660.706909 587.317688,664.334595   C586.634583,667.830322 583.702881,668.647583 580.770142,668.365906   C575.657593,667.874695 570.607910,666.726074 565.494934,666.244446   C561.776306,665.894104 557.920715,665.714355 554.486633,668.171753   C567.186157,664.721497 578.382751,669.991882 589.790894,673.938232   C591.038025,674.369568 592.190125,675.090393 593.362183,675.721680   C596.640198,677.487366 598.692505,680.145264 597.290039,683.866516   C595.892334,687.575134 592.624512,687.386963 589.248535,686.744385   C583.812683,685.709717 578.643921,683.837708 573.507996,681.921631   C569.161316,680.299988 564.792297,680.033569 560.236023,680.593140   C569.937378,680.796326 578.140930,685.346436 586.478333,689.487976   C587.362427,689.927185 588.198853,690.531982 588.927734,691.201172   C591.215271,693.301392 593.407715,695.655701 591.460327,698.954407   C589.735657,701.875854 586.819153,702.685852 583.622559,701.673462   C579.340637,700.317444 575.102722,698.813782 570.883728,697.270081   C566.189209,695.552307 561.579895,693.497253 556.235596,694.834167   C564.842712,695.552063 572.081787,699.546753 579.248230,703.853394   C582.557312,705.842102 584.504272,708.348450 582.912537,712.003418   C581.374817,715.534302 578.118713,715.701904 574.788391,714.531860   C571.493164,713.374084 568.042480,712.504517 564.960815,710.922607   C556.402161,706.529175 548.359924,707.833801 540.959229,713.141724   C533.118103,718.765503 525.776062,725.080200 518.024414,730.835144   C511.066498,736.000854 503.800690,740.727600 494.915833,743.233765  M243.494095,313.942596   C233.802399,321.496765 232.291794,331.943359 233.327423,343.183746   C234.574371,356.717438 243.721909,371.172485 257.919861,372.709839   C261.032684,373.046906 260.824738,374.982239 260.626770,377.410370   C260.111084,383.736359 259.514191,390.133270 262.362946,396.386749   C265.547424,392.671082 267.237915,388.089661 271.657318,385.937622   C274.229889,388.632538 273.116455,391.717133 273.790222,394.377533   C278.527466,413.082550 289.905945,426.806580 306.143280,436.372498   C318.321930,443.547333 331.204742,449.519989 343.680756,456.202026   C346.700745,457.819489 349.298187,457.530975 352.183289,456.166687   C364.992676,450.109436 377.798981,443.930511 389.755127,436.390594   C407.315002,425.316711 419.831207,410.218689 423.030853,388.840973   C423.115509,388.275269 423.690979,387.783081 423.994171,387.322571   C428.285065,388.282898 428.702179,394.063965 433.565613,394.398743   C436.695221,389.455872 435.728912,384.008698 435.592957,378.801239   C435.495300,375.063385 436.398163,373.070862 440.380310,372.155151   C448.851868,370.207123 454.918274,364.850922 458.636505,357.087921   C462.395630,349.239563 463.717529,340.769806 462.423737,332.231262   C460.281982,318.096191 452.281097,309.937286 439.248566,309.980957   C435.479553,309.993591 433.123749,308.038269 431.197327,305.011108   C419.213013,286.178528 401.407806,281.833466 380.728973,285.072662   C370.497162,286.675476 361.407379,291.255585 352.942383,296.998108   C349.268860,299.490204 346.513977,299.604187 342.669006,296.930054   C333.869019,290.809784 324.223022,286.274658 313.433044,284.751373   C294.379883,282.061584 274.030914,286.502991 263.432953,306.508179   C262.008759,309.196594 259.845764,310.245667 256.885803,310.106415   C252.273499,309.889404 247.938004,310.819550 243.494095,313.942596  M393.206879,447.783844   C379.965668,455.519379 365.938904,461.727844 352.362732,468.811523   C349.113251,470.506958 346.173737,470.372345 342.933014,468.555603   C337.562592,465.544952 332.028107,462.816071 326.490234,460.117249   C313.014191,453.549927 299.443726,447.189484 287.796570,437.464417   C283.217896,433.641296 279.571136,428.933472 274.881805,423.913177   C269.183167,439.241699 266.601074,453.865997 269.942108,469.187103   C274.255890,469.352112 274.172882,464.113312 278.155579,463.986328   C278.066528,480.669281 281.252441,496.181519 292.343475,510.010590   C296.002014,503.987091 293.534943,497.304291 297.678070,491.950317   C304.773041,507.479645 313.092316,521.372559 327.108673,530.951111   C330.398895,527.440796 326.236908,523.944702 328.425049,520.941284   C330.750061,521.213318 331.782806,523.097351 333.105499,524.486389   C342.186401,534.022339 352.745789,541.438660 364.771820,546.776123   C366.263916,547.438293 367.930695,548.603333 369.408508,547.197754   C370.936432,545.744446 369.601807,544.099548 369.038300,542.608093   C367.675018,539.000000 365.174774,535.769043 365.061798,531.312805   C369.564850,532.133667 372.383545,535.176086 375.805969,537.039856   C381.020294,539.879578 382.921387,538.998718 382.576324,533.001648   C381.580566,515.693909 378.061218,499.075073 368.227386,484.321198   C367.128021,482.671844 365.321625,481.153931 365.573242,478.723877   C367.997894,478.308960 369.167999,480.035004 370.586426,480.991669   C379.509888,487.010101 387.183716,494.410187 393.436127,503.138824   C396.006805,506.727600 398.615417,507.252594 402.328430,505.468292   C406.830933,503.304626 411.378998,501.222839 415.987823,499.298401   C418.595734,498.209473 419.907013,496.456451 420.194794,493.696777   C420.939697,486.554077 421.138336,479.389923 420.149109,472.286804   C419.382965,466.785675 418.029663,461.366302 416.949585,455.971466   C418.743317,455.292145 419.951935,455.842072 421.157806,456.394440   C422.642487,457.074554 424.223419,458.456024 425.779633,457.241516   C427.520599,455.882812 426.576355,453.878265 426.127716,452.140930   C424.536438,445.978699 422.016113,440.190247 419.036438,434.583405   C417.172363,431.075928 415.145660,430.611450 412.068909,433.490082   C406.470856,438.727753 400.458099,443.483795 393.206879,447.783844  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M582.860107,745.019165   C551.045105,757.049683 510.717316,758.786865 501.040802,754.513855   C501.171967,753.523071 501.983612,753.170654 502.733368,752.880432   C516.815063,747.430603 528.150452,737.824219 539.676636,728.506470   C540.453735,727.878235 541.192505,727.202942 541.957275,726.559143   C549.126099,720.524292 556.480652,717.770630 565.524170,723.332825   C570.635681,726.476562 576.562988,727.954651 582.798035,725.945007   C585.065308,725.214172 587.521667,724.504700 588.924866,722.753601   C594.902222,715.294128 600.757935,707.644531 603.461853,698.297241   C604.153320,695.906616 604.643127,693.560669 605.914185,691.367920   C610.820740,682.904175 609.852905,675.519226 602.788635,668.842468   C600.498840,666.678223 599.169495,664.425171 598.630798,661.232544   C597.261108,653.115356 591.763000,648.342712 584.212402,646.282776   C571.736877,642.879272 559.104431,641.528748 546.293884,644.932068   C538.162231,647.092285 531.725830,652.084167 525.085205,656.811768   C523.680359,657.811829 522.708496,659.750244 519.949219,659.048035   C520.675903,652.376587 521.482361,645.672668 522.124023,638.953003   C524.157776,617.654297 524.455627,596.540283 518.254456,575.644592   C512.950806,557.772827 495.703491,541.079102 473.624420,541.110840   C472.664490,541.112183 471.704163,540.856262 470.791718,540.726929   C470.011292,538.381042 471.760437,537.541199 472.948395,536.551392   C480.909271,529.917969 487.995453,522.402283 494.931824,514.746826   C497.694885,511.697266 501.014740,509.570099 504.704102,507.970642   C513.548035,504.136505 521.325867,498.870300 527.641907,491.509491   C532.445496,485.911285 538.378723,482.252594 545.675598,480.570435   C549.694519,479.643921 553.673340,478.150940 557.373657,476.315399   C565.441650,472.313324 568.953125,464.471832 566.753418,455.991272   C566.158997,453.699738 566.423035,451.824677 567.764893,449.883606   C572.384033,443.201996 571.706177,436.414490 567.780029,429.732788   C566.671997,427.847137 565.830688,426.058899 565.526306,423.797333   C564.247620,414.295807 558.802002,408.722321 549.331421,407.523193   C546.263367,407.134705 544.130920,405.980988 542.038879,403.878662   C535.521484,397.329224 527.419373,396.365204 519.854187,401.402618   C513.908447,405.361664 507.622589,408.922028 502.656281,414.195221   C500.657166,416.317841 499.024628,416.064117 496.623718,414.537506   C487.410004,408.678894 478.154449,411.085175 473.121033,420.862366   C466.658997,433.414551 459.824860,445.881073 459.242157,460.554504   C459.085022,464.511230 456.683746,466.852966 452.275848,467.321198   C450.677582,459.923431 450.699860,452.199646 447.605072,445.437927   C443.151215,435.706787 442.748932,427.446259 449.866241,418.169983   C454.986542,411.496490 457.083099,402.513275 457.796570,393.740723   C458.022156,390.966888 459.361267,389.190216 461.621368,387.723450   C487.962067,370.628937 492.815765,327.807037 475.643799,305.279877   C469.649323,297.416046 462.037292,291.850708 452.815613,289.043304   C446.943878,287.255737 444.332611,283.193878 441.708466,278.695740   C442.421875,276.631104 444.227692,276.371094 445.695679,275.723541   C470.963257,264.577759 494.435181,250.379044 516.453613,233.781876   C519.906982,231.178787 522.225159,230.742218 525.927917,233.520081   C557.602905,257.283478 592.047974,275.886780 629.764038,288.199524   C632.873352,289.214569 633.732300,290.652679 633.466431,293.946869   C631.353882,320.124451 639.009399,342.753998 659.242554,360.101349   C691.525452,387.779694 739.993652,379.204163 759.251404,341.456177   C760.281067,339.437805 760.778503,337.039673 763.672546,334.960907   C764.178955,339.621124 764.844055,343.723297 765.038025,347.847595   C766.509705,379.143463 767.144287,410.464264 765.079956,441.740967   C762.987366,473.446106 759.395020,504.980835 752.324463,536.048950   C743.142761,576.393555 728.244080,614.357971 704.422241,648.321777   C677.465454,686.755127 643.506714,717.425049 600.802551,737.746399   C595.102661,740.458740 589.091797,742.517639 582.860107,745.019165  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M385.613281,394.979248   C383.103638,391.804871 385.227875,391.717041 387.314789,391.902313   C392.107849,392.327820 394.612823,395.847321 394.570770,401.908783   C392.605988,403.123260 392.313843,400.383759 390.629791,400.339996   C380.562042,414.601166 366.102295,420.241180 349.020660,420.362122   C332.007019,420.482635 317.361237,415.135071 306.588501,401.716034   C304.447327,401.607880 304.225006,403.858154 302.539948,404.139038   C300.648254,402.965912 301.601685,401.196472 301.962311,399.772705   C303.214508,394.828278 306.693848,393.093384 312.637604,394.505310   C311.116364,397.399353 311.931824,399.509888 314.454468,401.642944   C333.185974,417.481903 365.848877,416.857605 383.477112,400.144440   C384.850647,398.842194 386.943817,397.775848 385.613281,394.979248  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M389.657837,352.313049   C388.584534,354.008514 387.696411,355.383881 386.789673,356.788116   C388.081055,359.552063 391.702362,358.759552 394.105896,362.555328   C382.795685,360.381500 372.447144,359.713470 362.322418,365.195648   C362.284821,358.617310 361.685364,352.974548 362.591980,347.212006   C364.446259,335.426270 377.675140,329.731812 387.307892,336.801239   C392.044312,340.277283 392.732330,344.399841 389.657837,352.313049  M370.812469,343.285339   C371.762268,345.487610 373.274506,346.405365 375.354248,344.806793   C376.728058,343.750824 376.841339,342.167297 375.361542,341.085938   C373.261444,339.551239 371.740906,340.414124 370.812469,343.285339  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M317.926971,333.725891   C328.139526,335.197357 332.841187,341.214905 333.329315,352.754669   C333.481903,356.362396 332.488525,360.031281 333.988708,364.330383   C323.662964,359.293427 313.236267,359.149292 301.613434,363.309265   C303.586853,359.098724 306.835205,359.317017 308.825989,357.193359   C305.598907,352.065796 301.135132,346.721436 304.733826,340.183807   C307.320221,335.485260 312.288300,334.010895 317.926971,333.725891  M313.733826,339.803162   C311.565338,340.795868 310.498260,342.277222 312.350128,344.328552   C313.382874,345.472504 315.188354,345.999115 316.212708,344.485260   C317.640442,342.375183 316.454895,340.810272 313.733826,339.803162  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M257.311523,335.331726   C254.408722,341.082855 260.080597,339.143097 262.093475,341.047577   C258.745331,347.015442 255.393265,352.990265 251.579910,359.787323   C245.129700,350.665161 247.536697,341.348877 240.147629,336.760803   C237.920776,331.993134 240.774979,325.030334 246.094269,322.348175   C251.242157,319.752472 256.398621,320.336639 261.515991,322.600769   C264.243530,323.807526 264.357269,325.464905 262.682953,327.692841   C260.885040,330.085297 259.203308,332.565063 257.311523,335.331726  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M442.985596,320.754761   C453.160217,322.301575 457.166565,327.138611 456.443909,336.591705   C453.760498,337.308838 453.490143,334.452820 451.952606,333.510834   C450.507935,332.625793 449.003540,331.530090 447.364502,332.577393   C445.730011,333.621826 446.642944,335.237823 447.039825,336.647827   C449.231384,344.433319 448.877472,351.890747 444.036346,360.101288   C440.549408,353.415405 437.562012,347.687378 434.677826,342.157227   C435.753662,339.888275 438.087219,341.282135 439.375397,339.593628   C439.502594,333.639862 434.608978,329.973694 431.442322,325.254211   C434.885834,322.287842 438.513672,321.023956 442.985596,320.754761  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M339.828796,393.264435   C335.934448,390.176025 332.164398,386.969452 328.759430,383.413330   C327.367279,381.959351 327.231873,379.741882 328.923248,378.019989   C330.408356,376.508057 332.093842,376.666901 333.930359,377.433685   C339.927582,379.937714 342.582550,386.562500 339.828796,393.264435  z"/>%0A<path fill="%23FDFCFB" opacity="1.000000" stroke="none" d=" M355.555115,382.871521   C357.077393,380.145294 358.994141,378.369720 361.494049,377.254120   C363.528687,376.346191 365.470673,376.577332 366.925262,378.288666   C368.539337,380.187592 367.878235,382.323975 366.265900,383.603668   C362.522949,386.574341 358.952271,389.641357 356.910156,394.540100   C352.959381,390.500366 354.343689,386.844360 355.555115,382.871521  z"/>%0A</svg>%0A';

  // src/skin/widget-shell-skin.ts
  var PRESETS = caputchin_default.skins?.presets ?? {};
  var HARDCODED_LIGHT = {
    ...PRESETS["light"] ?? {},
    brand_logo: logo_light_default
  };
  var BRAND_LOGO_BY_THEME = {
    light: logo_light_default,
    dark: logo_dark_default
  };
  function toPalette(resolved, theme) {
    if (!resolved) return { ...HARDCODED_LIGHT, brand_logo: BRAND_LOGO_BY_THEME[theme] };
    const out = { ...HARDCODED_LIGHT };
    for (const key of Object.keys(HARDCODED_LIGHT)) {
      const value = resolved[key];
      if (typeof value === "string") out[key] = value;
    }
    if (typeof resolved["brand_logo"] !== "string") {
      out.brand_logo = BRAND_LOGO_BY_THEME[theme];
    }
    return out;
  }
  function buildWidgetShellSkin(resolved) {
    const theme = resolved?._theme ?? "light";
    return { theme, palette: toPalette(resolved, theme), issues: [] };
  }

  // src/skin/css-vars.ts
  function applySkinVars(target, palette) {
    const styleHost = isShadowRoot(target) ? target.host : target;
    if (!styleHost) return;
    for (const [key, value] of Object.entries(palette)) {
      styleHost.style.setProperty(`--cpt-skin-${key}`, value);
    }
  }
  function isShadowRoot(node) {
    return typeof node.host !== "undefined" && node.host instanceof Element;
  }

  // src/configurations/widget-shell-config.ts
  var PRESETS2 = caputchin_default.configurations?.presets ?? {};
  var DEFAULT_PRESET = PRESETS2["default"] ?? {};
  var HARDCODED_DEFAULT = {
    home_link: typeof DEFAULT_PRESET["home_link"] === "string" ? DEFAULT_PRESET["home_link"] : "https://caputchin.com",
    legal_link: typeof DEFAULT_PRESET["legal_link"] === "string" ? DEFAULT_PRESET["legal_link"] : "https://caputchin.com/legal"
  };
  function toShellConfig(resolved) {
    if (!resolved) return { ...HARDCODED_DEFAULT };
    const out = { ...HARDCODED_DEFAULT };
    if (typeof resolved["home_link"] === "string") out.home_link = resolved["home_link"];
    if (typeof resolved["legal_link"] === "string") out.legal_link = resolved["legal_link"];
    return out;
  }
  function buildWidgetShellConfig(resolved) {
    return { values: toShellConfig(resolved), issues: [] };
  }

  // src/modes/invisible.ts
  function createInvisiblePresentation() {
    return {
      mount() {
      },
      unmount() {
      },
      setState(_state) {
      },
      onActivate(_handler) {
        return () => {
        };
      },
      // No DOM, so skin/locale/geometry swaps are no-ops (verification still runs headless).
      applySkin(_skin) {
      },
      applyLocale(_shell) {
      },
      applyGeometry(_geometry) {
      }
    };
  }

  // src/modes/simple.ts
  function createSimplePresentation(input) {
    const { host, root: renderRoot, trigger, shellConfig } = input;
    let shell = input.shell;
    let skin = input.skin;
    let width = input.width;
    let height = input.height;
    let size = input.size;
    const isInteractive = trigger === "click" || trigger === "form-submit";
    const labelFor = (state) => ({
      idle: shell.strings.simpleVerify,
      verifying: shell.strings.simpleVerifying,
      verified: shell.strings.simpleVerified,
      error: shell.strings.simpleFailed
    })[state];
    let root = null;
    let indicator = null;
    let label = null;
    let brand = null;
    let logoImg = null;
    let wordmark = null;
    let tag = null;
    let current = "idle";
    const activateListeners = [];
    function onPointer() {
      for (const h of activateListeners) h();
    }
    function onKey(e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        onPointer();
      }
    }
    function buildBrand() {
      const container = document.createElement("div");
      container.setAttribute("part", "simple-brand");
      const homeLink = document.createElement("a");
      homeLink.setAttribute("part", "simple-brand-home");
      homeLink.href = shellConfig.values.home_link;
      homeLink.target = "_blank";
      homeLink.rel = "noopener noreferrer";
      homeLink.style.cssText = "display:contents;color:var(--cpt-skin-brand_text)";
      const logoSpan = document.createElement("span");
      logoSpan.setAttribute("part", "simple-brand-logo");
      logoSpan.setAttribute("aria-hidden", "true");
      logoSpan.style.cssText = "display:inline-flex;line-height:0";
      logoImg = document.createElement("img");
      logoImg.src = skin.palette.brand_logo;
      logoImg.alt = "";
      logoImg.style.cssText = "width:100%;height:100%;display:block";
      logoSpan.appendChild(logoImg);
      wordmark = document.createElement("span");
      wordmark.setAttribute("part", "simple-brand-name");
      wordmark.textContent = shell.strings.brandName;
      wordmark.style.cssText = "font-weight:600;color:inherit";
      homeLink.appendChild(logoSpan);
      homeLink.appendChild(wordmark);
      tag = document.createElement("a");
      tag.setAttribute("part", "simple-brand-tag");
      tag.href = shellConfig.values.legal_link;
      tag.target = "_blank";
      tag.rel = "noopener noreferrer";
      tag.textContent = shell.strings.brandTag;
      tag.style.cssText = "color:var(--cpt-skin-text_muted)";
      container.appendChild(homeLink);
      container.appendChild(tag);
      return container;
    }
    function applySizing() {
      var _a;
      if (!root) return;
      const full = width === "full";
      const pxW = typeof width === "number" ? width : null;
      const pxH = typeof height === "number" ? height : null;
      if (size === "compact") root.setAttribute("data-size", "compact");
      else root.removeAttribute("data-size");
      root.style.boxSizing = "border-box";
      root.style.width = full ? "100%" : "fit-content";
      root.style.minWidth = full ? "" : "min(18rem,100%)";
      root.style.height = "";
      host.style.display = "";
      host.style.width = "";
      host.style.height = "";
      if (full) {
        host.style.display = "block";
        host.style.width = "100%";
      } else if (pxW !== null) {
        host.style.display = "block";
        host.style.width = `${pxW}px`;
        root.style.width = "100%";
      }
      if (pxH !== null) {
        (_a = host.style).display || (_a.display = "block");
        host.style.height = `${pxH}px`;
        root.style.height = "100%";
      }
    }
    return {
      mount() {
        if (root) return;
        ensureStyles(renderRoot);
        root = document.createElement("div");
        root.setAttribute("part", "simple-checkbox");
        if (shell.direction === "rtl") root.setAttribute("dir", "rtl");
        root.style.cssText = [
          "display:flex",
          "align-items:center",
          "padding:0.5rem 0.75rem",
          "border:1px solid var(--cpt-skin-border)",
          "border-radius:0.5rem",
          "background:var(--cpt-skin-surface_bg)",
          'font:14px system-ui, -apple-system, "Segoe UI", sans-serif',
          "color:var(--cpt-skin-text_primary)",
          "user-select:none",
          "box-sizing:border-box",
          "max-width:100%",
          "flex-wrap:wrap",
          "gap:0.75rem"
        ].join(";");
        indicator = createShieldIndicator({ interactive: isInteractive, onPointer, onKey, strings: shell.strings, palette: skin.palette });
        label = document.createElement("span");
        label.setAttribute("part", "simple-checkbox-label");
        label.setAttribute("aria-live", "polite");
        label.style.cssText = "flex:0 0 auto;text-align:start";
        root.appendChild(indicator.el);
        root.appendChild(label);
        brand = buildBrand();
        brand.style.marginInlineStart = "auto";
        root.appendChild(brand);
        applySizing();
        renderRoot.appendChild(root);
        this.setState("idle");
      },
      unmount() {
        if (!root) return;
        indicator?.dispose();
        indicator = null;
        host.style.display = "";
        host.style.width = "";
        host.style.height = "";
        root.remove();
        root = null;
        label = null;
        brand = null;
        activateListeners.length = 0;
      },
      setState(state) {
        current = state;
        if (!indicator || !label) return;
        indicator.setState(state);
        label.textContent = labelFor(state);
      },
      onActivate(handler) {
        activateListeners.push(handler);
        return () => {
          const idx = activateListeners.indexOf(handler);
          if (idx >= 0) activateListeners.splice(idx, 1);
        };
      },
      applySkin(newSkin) {
        skin = newSkin;
        if (!root) return;
        indicator?.applyPalette(newSkin.palette);
        if (logoImg) logoImg.src = newSkin.palette.brand_logo;
      },
      applyLocale(newShell) {
        shell = newShell;
        if (!root) return;
        if (label) label.textContent = labelFor(current);
        if (wordmark) wordmark.textContent = newShell.strings.brandName;
        if (tag) tag.textContent = newShell.strings.brandTag;
        indicator?.applyStrings(newShell.strings);
        if (newShell.direction === "rtl") root.setAttribute("dir", "rtl");
        else root.removeAttribute("dir");
      },
      applyGeometry(geometry) {
        width = geometry.width;
        height = geometry.height;
        if (geometry.size !== void 0) size = geometry.size;
        applySizing();
      }
    };
  }
  var SVG_NS = "http://www.w3.org/2000/svg";
  var SHIELD_PATH = "M12 1 L22 4 V12 C22 18 17.5 22.5 12 23.5 C6.5 22.5 2 18 2 12 V4 Z";
  function createShieldIndicator(input) {
    const { interactive, onPointer, onKey, strings } = input;
    let palette = input.palette;
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("part", "simple-shield-box");
    svg.setAttribute("viewBox", "0 0 24 24");
    if (interactive) {
      svg.setAttribute("data-interactive", "");
      svg.setAttribute("role", "checkbox");
      svg.setAttribute("aria-checked", "false");
      svg.setAttribute("aria-label", strings.simpleAriaCheckbox);
      svg.tabIndex = 0;
      svg.addEventListener("click", onPointer);
      svg.addEventListener("keydown", onKey);
    } else {
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", strings.simpleAriaStatus);
    }
    const shield = document.createElementNS(SVG_NS, "path");
    shield.setAttribute("d", SHIELD_PATH);
    shield.setAttribute("stroke-width", "1");
    shield.setAttribute("stroke-linejoin", "round");
    svg.appendChild(shield);
    const spinner = document.createElementNS(SVG_NS, "circle");
    spinner.setAttribute("part", "simple-shield-spinner");
    spinner.setAttribute("cx", "12");
    spinner.setAttribute("cy", "13");
    spinner.setAttribute("r", "4.5");
    spinner.setAttribute("fill", "none");
    spinner.setAttribute("stroke", palette.primary);
    spinner.setAttribute("stroke-width", "2");
    spinner.setAttribute("stroke-linecap", "round");
    spinner.setAttribute("stroke-dasharray", "14 28");
    spinner.setAttribute("opacity", "0");
    svg.appendChild(spinner);
    const glyph = document.createElementNS(SVG_NS, "text");
    glyph.setAttribute("x", "12");
    glyph.setAttribute("y", "17");
    glyph.setAttribute("text-anchor", "middle");
    glyph.setAttribute("font-size", "13");
    glyph.setAttribute("font-weight", "700");
    glyph.setAttribute("font-family", "system-ui, sans-serif");
    glyph.setAttribute("fill", palette.glyph);
    svg.appendChild(glyph);
    let indState = "idle";
    function paint(state) {
      indState = state;
      glyph.textContent = "";
      spinner.setAttribute("opacity", "0");
      svg.removeAttribute("data-state");
      svg.setAttribute("data-state", state);
      switch (state) {
        case "idle":
          shield.setAttribute("stroke", interactive ? palette.text_muted : palette.text_passive);
          shield.setAttribute("fill", "transparent");
          if (interactive) svg.setAttribute("aria-checked", "false");
          break;
        case "verifying":
          shield.setAttribute("stroke", palette.primary);
          shield.setAttribute("fill", "transparent");
          spinner.setAttribute("opacity", "1");
          if (interactive) svg.setAttribute("aria-checked", "mixed");
          break;
        case "verified":
          shield.setAttribute("stroke", palette.primary);
          shield.setAttribute("fill", palette.primary);
          glyph.textContent = "\u2713";
          glyph.setAttribute("fill", palette.glyph);
          if (interactive) svg.setAttribute("aria-checked", "true");
          break;
        case "error":
          shield.setAttribute("stroke", palette.error);
          shield.setAttribute("fill", palette.error);
          glyph.textContent = "!";
          glyph.setAttribute("fill", palette.glyph);
          if (interactive) svg.setAttribute("aria-checked", "false");
          break;
      }
    }
    return {
      el: svg,
      setState: paint,
      applyPalette(newPalette) {
        palette = newPalette;
        spinner.setAttribute("stroke", palette.primary);
        paint(indState);
      },
      applyStrings(newStrings) {
        svg.setAttribute("aria-label", interactive ? newStrings.simpleAriaCheckbox : newStrings.simpleAriaStatus);
      },
      dispose() {
        if (interactive) {
          svg.removeEventListener("click", onPointer);
          svg.removeEventListener("keydown", onKey);
        }
      }
    };
  }
  var stylesInjectedSet = /* @__PURE__ */ new WeakSet();
  function ensureStyles(root) {
    if (stylesInjectedSet.has(root)) return;
    stylesInjectedSet.add(root);
    const style = document.createElement("style");
    style.textContent = [
      "@keyframes caputchin-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}",
      // Spinner arc inside the shield: rotates around the shield's visual center.
      // transform-origin set in viewBox user units (matches cx/cy of the circle).
      '[part="simple-shield-spinner"]{transform-origin:12px 13px;animation:caputchin-spin 0.8s linear infinite}',
      // --- shield SVG: only indicator on this widget; sized to read at a glance ---
      '[part="simple-shield-box"]{width:2rem;height:2rem;flex:0 0 auto;display:block;outline:none;transition:transform 120ms ease,stroke 180ms ease,fill 180ms ease}',
      // Interactive idle: pointer cursor + hover/focus scale-up.
      // Once the click fires, data-state flips away from "idle" → no more
      // hover scale (selector stops matching) + color transitions to verifying
      // green via the SVG attribute swap.
      '[part="simple-shield-box"][data-interactive][data-state="idle"]{cursor:pointer}',
      '[part="simple-shield-box"][data-interactive][data-state="idle"]:hover,[part="simple-shield-box"][data-interactive][data-state="idle"]:focus-visible{transform:scale(1.12)}',
      '[part="simple-shield-box"][data-interactive]:focus-visible{outline:2px solid var(--cpt-skin-primary);outline-offset:2px;border-radius:0.25rem}',
      // Reduced motion: drop the scale lift; keep cursor + focus ring + color transitions.
      "@media (prefers-reduced-motion:reduce){",
      '[part="simple-shield-box"]{transition:none !important}',
      '[part="simple-shield-box"][data-interactive][data-state="idle"]:hover,[part="simple-shield-box"][data-interactive][data-state="idle"]:focus-visible{transform:none}',
      "}",
      // --- label: width locked to fit "Verifying…" so state changes don't reflow ---
      '[part="simple-checkbox-label"]{color:var(--cpt-skin-text_label);font-size:0.85rem;min-width:5rem;display:inline-block;text-align:start}',
      // --- brand block: normal layout (2-col grid, logo spans 2 rows) ---
      '[part="simple-brand"]{display:grid;grid-template-columns:auto auto;grid-template-rows:auto auto;column-gap:0.25rem;row-gap:0;align-items:center;line-height:1.2;flex:0 0 auto}',
      '[part="simple-brand-logo"]{grid-column:1;grid-row:1 / span 2;align-self:center;width:32px;height:32px}',
      '[part="simple-brand-logo"] img{width:100%;height:100%;display:block}',
      '[part="simple-brand-name"]{grid-column:2;grid-row:1;place-self:center;text-align:center;font-size:0.85rem}',
      '[part="simple-brand-tag"]{grid-column:2;grid-row:2;place-self:center;text-align:center;font-size:0.65rem}',
      '[part="simple-brand-home"],[part="simple-brand-tag"]{text-decoration:none;transition:color 0.15s ease}',
      '[part="simple-brand-home"]:hover,[part="simple-brand-home"]:focus-visible{color:var(--cpt-skin-brand_text_hover);text-decoration:underline;outline:none}',
      '[part="simple-brand-tag"]:hover,[part="simple-brand-tag"]:focus-visible{color:var(--cpt-skin-brand_text_hover);text-decoration:underline;outline:none}',
      // --- size="compact": single-row inline strip, dialed down ---
      '[data-size="compact"][part="simple-checkbox"]{padding:0.2rem 0.4rem;gap:0.35rem;border-radius:0.35rem;flex-wrap:nowrap;min-width:0 !important}',
      '[data-size="compact"] [part="simple-shield-box"]{width:1.1rem;height:1.1rem}',
      '[data-size="compact"] [part="simple-checkbox-label"]{font-size:0.65rem;color:var(--cpt-skin-text_label);white-space:nowrap;min-width:3.6rem}',
      '[data-size="compact"] [part="simple-brand"]{display:flex;flex-direction:row;align-items:center;column-gap:0.25rem}',
      '[data-size="compact"] [part="simple-brand-logo"]{grid-column:auto;grid-row:auto;align-self:center;width:14px;height:14px}',
      '[data-size="compact"] [part="simple-brand-name"]{grid-column:auto;grid-row:auto;place-self:auto;font-size:0.6rem}',
      '[data-size="compact"] [part="simple-brand-tag"]{grid-column:auto;grid-row:auto;place-self:auto;font-size:0.5rem}',
      '[data-size="compact"] [part="simple-brand-name"]::after{content:" \xB7 ";color:var(--cpt-skin-separator);margin-inline-start:0.1rem}',
      // --- phone viewports (≤28rem): reclaim the row, float the tagline ---
      // The full brand block (logo + wordmark + tagline) can't sit beside the
      // verify row on a phone without wrapping onto a second line (the "broken"
      // stacked look). Keep the verify row on ONE line and the logo at FULL size
      // on the trailing edge; hide the wordmark; float the tagline into the
      // bottom-trailing corner (absolute, so it never pushes the row and may
      // overlap the logo, like Friendly Captcha's corner brand). Scoped away from
      // the game's compact brand strip.
      "@media (max-width:28rem){",
      // !important on flex-wrap + min-width: the root sets flex-wrap:wrap and
      // min-width:min(18rem,100%) as INLINE styles (root.style.cssText), which a
      // plain rule can't beat (the compact rule uses !important for the same
      // reason). Without it the row still wraps on a narrow phone / long label.
      '[part="simple-checkbox"]:not([data-size="compact"]){position:relative;flex-wrap:nowrap!important;min-width:0!important}',
      '[part="simple-checkbox"]:not([data-size="compact"]) [part="simple-brand-name"]{display:none}',
      // Tagline floats in the bottom-trailing corner, on top of the full-size
      // logo (which stays in flow, trailing-aligned, at its 32px base size).
      '[part="simple-checkbox"]:not([data-size="compact"]) [part="simple-brand-tag"]{position:absolute;bottom:0.2rem;inset-inline-end:0.4rem;font-size:0.6rem;line-height:1;z-index:1}',
      // Compact strip (the game brand footer): a single right-aligned row, so
      // there is no corner to float into. Just hide the wordmark (its "·"
      // separator goes with it via ::after), leaving logo + tagline trailing.
      '[data-size="compact"] [part="simple-brand-name"]{display:none}',
      "}"
    ].join("");
    root.appendChild(style);
  }

  // src/modes/index.ts
  function createPresentation(invisible, input) {
    return invisible ? createInvisiblePresentation() : createSimplePresentation(input);
  }

  // src/triggers/auto.ts
  function createAutoTrigger() {
    let started = false;
    function start(ctx) {
      if (started) return;
      started = true;
      ctx.runVerification().catch(() => {
      });
    }
    return {
      activate(ctx) {
        start(ctx);
      },
      deactivate() {
        started = false;
      },
      forceStart(ctx) {
        start(ctx);
      }
    };
  }

  // src/triggers/click.ts
  function createClickTrigger() {
    let cleanup = null;
    let started = false;
    return {
      activate(ctx) {
        cleanup = ctx.presentation.onActivate(() => {
          if (started) return;
          started = true;
          ctx.runVerification().catch(() => {
          });
        });
      },
      deactivate() {
        cleanup?.();
        cleanup = null;
        started = false;
      },
      forceStart(ctx) {
        if (started) return;
        started = true;
        ctx.runVerification().catch(() => {
        });
      }
    };
  }

  // src/form.ts
  function findEnclosingForm(el) {
    let node = el.parentElement;
    while (node) {
      if (node instanceof HTMLFormElement) return node;
      node = node.parentElement;
    }
    return null;
  }
  function injectHiddenInput(form, token) {
    const existing = form.querySelector('input[name="caputchin-token"]');
    if (existing) {
      existing.value = token;
      return;
    }
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "caputchin-token";
    input.value = token;
    form.appendChild(input);
  }

  // src/triggers/form-submit.ts
  function createFormSubmitTrigger() {
    let activateCleanup = null;
    let submitHandler = null;
    let form = null;
    let started = false;
    let settled = false;
    let pendingSubmit = false;
    function runVerify(ctx) {
      if (started) return;
      started = true;
      ctx.runVerification().then(() => {
        settled = true;
        if (pendingSubmit) {
          pendingSubmit = false;
          form?.requestSubmit();
        }
      }).catch(() => {
        settled = true;
        pendingSubmit = false;
      });
    }
    return {
      activate(ctx) {
        activateCleanup = ctx.presentation.onActivate(() => runVerify(ctx));
        form = findEnclosingForm(ctx.el);
        if (!form) return;
        submitHandler = (e) => {
          if (settled) return;
          e.preventDefault();
          e.stopImmediatePropagation();
          pendingSubmit = true;
          runVerify(ctx);
        };
        form.addEventListener("submit", submitHandler, true);
      },
      deactivate() {
        activateCleanup?.();
        activateCleanup = null;
        if (form && submitHandler) {
          form.removeEventListener("submit", submitHandler, true);
        }
        submitHandler = null;
        form = null;
        started = false;
        settled = false;
        pendingSubmit = false;
      },
      forceStart(ctx) {
        runVerify(ctx);
      }
    };
  }

  // src/triggers/manual.ts
  function createManualTrigger() {
    let started = false;
    return {
      activate(_ctx) {
      },
      deactivate() {
        started = false;
      },
      forceStart(ctx) {
        if (started) return;
        started = true;
        ctx.runVerification().catch(() => {
        });
      }
    };
  }

  // src/triggers/index.ts
  function createTriggerStrategy(trigger) {
    switch (trigger) {
      case "auto":
        return createAutoTrigger();
      case "click":
        return createClickTrigger();
      case "form-submit":
        return createFormSubmitTrigger();
      case "manual":
        return createManualTrigger();
    }
  }

  // src/verify/state.ts
  function createInitialState() {
    return {
      config: null,
      widgetId: null,
      presentation: null,
      capClient: null,
      trigger: null,
      triggerCtx: null,
      lockedToken: null,
      connected: false,
      bootstrapAbort: null,
      gamePresentation: null,
      iframeHost: null,
      gameStartedEmitted: false,
      gameErrored: false,
      firstPassFired: false,
      gameResolved: null,
      gamePreferred: null,
      gameBundle: null,
      requiresGame: false,
      gateTicket: null
    };
  }

  // src/verify/methods-widget.ts
  function installWidgetMethods(el, state) {
    Object.defineProperty(el, "start", {
      value: () => {
        if (!state.config) return;
        state.trigger?.forceStart?.(state.triggerCtx);
      },
      configurable: true,
      writable: false,
      enumerable: false
    });
  }

  // src/cap/client.ts
  var import_widget = __toESM(require_cap_min(), 1);
  function createCapClient(widgetId, apiHost, ctx) {
    let cleared = false;
    const onSessionCleared = ctx.onCleared;
    ctx.onCleared = () => {
      cleared = true;
      onSessionCleared();
    };
    registerSession(widgetId, ctx);
    const cap = new import_widget.default({ apiEndpoint: `${apiHost}/${CPT_ROUTE_PREFIX}/${widgetId}/` });
    const widgetForOverride = cap.widget;
    if (widgetForOverride?.error) {
      const originalError = widgetForOverride.error.bind(widgetForOverride);
      widgetForOverride.error = function(message) {
        if (!widgetForOverride.isConnected) return;
        if (cleared) return;
        originalError(message);
      };
    }
    armRedeemGate(widgetId);
    return {
      async solve() {
        const result = await cap.solve();
        if (!result) throw new Error("Cap solve returned no result");
        if (!result.success) throw new Error("Cap solve failed");
      },
      releaseGate(platform) {
        releaseRedeemGate(widgetId, platform);
      },
      abortGate(reason) {
        abortRedeemGate(widgetId, reason);
      },
      reset() {
        cap.reset();
      },
      dispose() {
        unregisterSession(widgetId);
        cap.reset();
        const widgetEl = cap.widget;
        if (widgetEl?.parentNode) widgetEl.parentNode.removeChild(widgetEl);
      }
    };
  }

  // src/verify/events.ts
  function emitDegraded(el, reason) {
    el.dispatchEvent(new CustomEvent("degraded", {
      detail: { reason },
      bubbles: true,
      composed: true
    }));
  }
  function emitStart(el, gameId) {
    el.dispatchEvent(new CustomEvent("start", {
      detail: { gameId },
      bubbles: true,
      composed: true
    }));
  }
  function emitPass(el, detail) {
    el.dispatchEvent(new CustomEvent("pass", {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  function emitDialogShown(el, layout) {
    el.dispatchEvent(new CustomEvent("dialog-shown", {
      detail: { layout },
      bubbles: true,
      composed: true
    }));
  }
  function emitDialogHidden(el, layout) {
    el.dispatchEvent(new CustomEvent("dialog-hidden", {
      detail: { layout },
      bubbles: true,
      composed: true
    }));
  }

  // src/verify/form.ts
  function injectTokenIntoEnclosingForm(el, token) {
    const form = el.closest("form");
    if (form instanceof HTMLFormElement) {
      injectHiddenInput(form, token);
    }
  }

  // src/pool.ts
  function pickFromGamesAttr(csv) {
    const ids = csv.split(",").map((s) => s.trim()).filter(Boolean);
    if (ids.length === 0) return null;
    return ids[Math.floor(Math.random() * ids.length)];
  }

  // src/verify/id.ts
  var widgetIdCounter = 0;
  function makeWidgetId() {
    widgetIdCounter += 1;
    return `cpt_${widgetIdCounter}_${Math.random().toString(36).slice(2, 10)}`;
  }
  function resolveGameId(input) {
    if (input.games) return pickFromGamesAttr(input.games);
    return input.game ?? null;
  }

  // src/verify/cap-session.ts
  function setupCapSession(state, apiHost, sitekey, gameId, ticket = null) {
    let wrappedToken = null;
    let cleared = false;
    const platform = { sitekey, gameId };
    if (ticket) platform.ticket = ticket;
    const clearance = readClearance();
    if (clearance) platform.clearance = clearance;
    const sessionCtx = {
      platform,
      onWrappedToken: (token) => {
        wrappedToken = token;
      },
      onCleared: () => {
        cleared = true;
      }
    };
    if (!state.widgetId) state.widgetId = makeWidgetId();
    const client = createCapClient(state.widgetId, apiHost, sessionCtx);
    state.capClient = client;
    if (state.triggerCtx) state.triggerCtx.capClient = client;
    const widgetId = state.widgetId;
    return {
      client,
      getWrappedToken: () => wrappedToken,
      awaitSeed: () => awaitSeed(widgetId),
      isCleared: () => cleared
    };
  }
  function reachSolved(el, state, presentation, wrappedToken) {
    const { token, score, durationMs } = wrappedToken;
    injectTokenIntoEnclosingForm(el, token);
    presentation?.setState("verified");
    state.lockedToken = token;
    emitPass(el, { token, score, durationMs });
  }
  async function awaitCapAndEmitPass(el, state, client, getWrappedToken, presentation, isCleared) {
    try {
      await client.solve();
    } catch (err) {
      if (state.widgetId) resolveSeedGate(state.widgetId);
      if (!state.connected) return;
      if (isCleared()) {
        const wrappedToken2 = getWrappedToken();
        if (wrappedToken2) {
          reachSolved(el, state, presentation, wrappedToken2);
          return;
        }
      }
      if (!state.gameErrored) {
        fireError(el, "verification-failed", String(err), "cap-solve-failed");
      }
      presentation?.setState("error");
      return;
    }
    if (!state.connected) return;
    if (state.gameErrored) {
      presentation?.setState("error");
      return;
    }
    const wrappedToken = getWrappedToken();
    if (!wrappedToken) {
      fireError(el, "verification-failed", "No wrapped token received from platform", "cap-redeem-failed");
      presentation?.setState("error");
      return;
    }
    reachSolved(el, state, presentation, wrappedToken);
  }

  // src/verify/run-cap.ts
  async function runCap(el, state, apiHost) {
    if (!state.config) return;
    state.presentation?.setState("verifying");
    const { client, getWrappedToken, isCleared } = setupCapSession(state, apiHost, state.config.sitekey, null);
    client.releaseGate({});
    emitStart(el, null);
    await awaitCapAndEmitPass(el, state, client, getWrappedToken, state.presentation, isCleared);
  }

  // src/bootstrap/client.ts
  var BOOTSTRAP_DEFAULT_TIMEOUT_MS = 2e3;
  var BOOTSTRAP_ATTEMPT_TIMEOUT_MS = 8e3;
  var BOOTSTRAP_MANDATORY_ATTEMPTS = 3;
  var BOOTSTRAP_MANDATORY_BACKOFF_MS = 400;
  var GATE_ERROR_CODES = /* @__PURE__ */ new Set([
    "gate-misconfigured",
    "gate-game-not-installed"
  ]);
  async function fetchBootstrap(input) {
    const timeoutMs = input.timeoutMs === void 0 ? BOOTSTRAP_DEFAULT_TIMEOUT_MS : input.timeoutMs;
    const url = buildBootstrapUrl(input);
    const { signal, cancel } = buildTimeoutSignal(timeoutMs, input.signal);
    try {
      const res = await fetch(url, signal ? { signal } : {});
      if (res.ok) {
        let raw;
        try {
          raw = await res.json();
        } catch {
          return { kind: "degrade", reason: "malformed" };
        }
        const response = validateBootstrapResponse(raw);
        return response ? { kind: "ok", response } : { kind: "degrade", reason: "malformed" };
      }
      if (res.status === 409) {
        const gate = await parseGateError(res);
        if (gate) return { kind: "gate", error: gate };
      }
      return { kind: "degrade", reason: "http" };
    } catch (err) {
      const aborted = err?.name === "AbortError";
      return { kind: "degrade", reason: aborted ? "timeout" : "network" };
    } finally {
      cancel();
    }
  }
  async function parseGateError(res) {
    let body;
    try {
      body = await res.json();
    } catch {
      return null;
    }
    if (typeof body !== "object" || body === null) return null;
    const obj = body;
    const code = obj["error"];
    if (typeof code !== "string" || !GATE_ERROR_CODES.has(code)) return null;
    const message = typeof obj["message"] === "string" ? obj["message"] : "";
    return { code, message };
  }
  function buildTimeoutSignal(ms, external) {
    if (ms === null && !external) return { signal: null, cancel: () => {
    } };
    const ctrl = new AbortController();
    const cleanups = [];
    if (external) {
      if (external.aborted) ctrl.abort();
      else {
        const onAbort = () => ctrl.abort();
        external.addEventListener("abort", onAbort, { once: true });
        cleanups.push(() => external.removeEventListener("abort", onAbort));
      }
    }
    if (ms !== null && !ctrl.signal.aborted) {
      const timer = setTimeout(() => ctrl.abort(), ms);
      cleanups.push(() => clearTimeout(timer));
    }
    return { signal: ctrl.signal, cancel: () => {
      for (const c of cleanups) c();
    } };
  }
  async function fetchBootstrapResilient(input, opts = {}) {
    const attempts = Math.max(1, opts.attempts ?? BOOTSTRAP_MANDATORY_ATTEMPTS);
    const backoffMs = opts.backoffMs ?? BOOTSTRAP_MANDATORY_BACKOFF_MS;
    const attemptTimeoutMs = opts.attemptTimeoutMs === void 0 ? BOOTSTRAP_ATTEMPT_TIMEOUT_MS : opts.attemptTimeoutMs;
    const baseDelay = opts.delayFn ?? ((ms) => new Promise((r) => setTimeout(r, ms)));
    const delay = (ms) => new Promise((resolve) => {
      const sig = input.signal;
      if (sig?.aborted) {
        resolve();
        return;
      }
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        sig?.removeEventListener("abort", done);
        resolve();
      };
      sig?.addEventListener("abort", done, { once: true });
      void baseDelay(ms).then(done);
    });
    let last = { kind: "degrade", reason: "network" };
    for (let attempt = 0; attempt < attempts; attempt++) {
      if (input.signal?.aborted) return last;
      last = await fetchBootstrap({ ...input, timeoutMs: attemptTimeoutMs });
      if (last.kind !== "degrade" || last.reason === "timeout") return last;
      if (input.signal?.aborted) return last;
      if (attempt < attempts - 1 && backoffMs > 0) await delay(backoffMs * 2 ** attempt);
    }
    return last;
  }
  var INLINE_AXIS_PREFIX = "b64.";
  function encodeInlineAxis(value) {
    const trimmed = value.trimStart();
    if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return value;
    const bytes = new TextEncoder().encode(value);
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    const b64url = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    return `${INLINE_AXIS_PREFIX}${b64url}`;
  }
  function buildBootstrapUrl(input) {
    const params = new URLSearchParams();
    if (input.sitekey) params.set("sitekey", input.sitekey);
    if (input.game) params.set("game", input.game);
    if (input.games) params.set("games", input.games);
    if (input.locale) params.set("locale", encodeInlineAxis(input.locale));
    if (input.skin) params.set("skin", encodeInlineAxis(input.skin));
    return `${input.apiHost}/v1/widget/bootstrap?${params.toString()}`;
  }
  function validateBootstrapResponse(raw) {
    if (typeof raw !== "object" || raw === null) return null;
    const obj = raw;
    const widget = obj["widget"];
    const game = obj["game"];
    if (widget !== null && widget !== void 0 && (typeof widget !== "object" || Array.isArray(widget))) {
      return null;
    }
    if (game !== null && game !== void 0 && (typeof game !== "object" || Array.isArray(game))) {
      return null;
    }
    return {
      widget: widget ?? null,
      game: game ?? null,
      // Server gate fields. requiresGame coerced to a strict boolean; gameId /
      // ticket are opaque strings the widget echoes back (the server re-validates
      // the ticket signature), so a loose pass-through is safe here.
      requiresGame: obj["requiresGame"] === true,
      gameId: typeof obj["gameId"] === "string" ? obj["gameId"] : void 0,
      ticket: typeof obj["ticket"] === "string" ? obj["ticket"] : void 0
    };
  }

  // src/bootstrap/signals.ts
  function readNavLang() {
    if (typeof navigator === "undefined") return null;
    if (navigator.languages && navigator.languages.length > 0) return navigator.languages[0];
    return navigator.language || null;
  }
  function readPrefersDark() {
    return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function isAttrMissing(attr) {
    if (attr === null || attr === void 0) return true;
    const trimmed = attr.trim();
    return trimmed === "" || trimmed.toLowerCase() === "auto";
  }
  function resolveLocaleSignal(attr) {
    if (!isAttrMissing(attr)) return attr;
    return readNavLang();
  }
  function resolveSkinSignal(attr) {
    if (!isAttrMissing(attr)) return attr;
    return readPrefersDark() ? "dark" : "light";
  }

  // src/elements/widget.ts
  var CaputchinWidget = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __publicField(this, "state", createInitialState());
      /** API host captured at mount so a live reskin can refetch bootstrap without
       *  re-deriving it. */
      __publicField(this, "apiHost", "");
      /** Observed attributes changed since the last microtask flush; coalesced so a
       *  `skin`+`locale` pair set in one tick triggers ONE refetch. */
      __publicField(this, "dirtyAttrs", /* @__PURE__ */ new Set());
      __publicField(this, "reinitScheduled", false);
      /** Monotonic reskin id. A resolved refetch only applies when it is still the
       *  latest (a rapid second change bumps this and aborts the prior fetch), so
       *  the newest theme always wins. Element-private (not on the state bag) so it
       *  never disturbs the solved token / cap session. */
      __publicField(this, "reskinEpoch", 0);
      __publicField(this, "reskinAbort", null);
      /** OS color-scheme tracker, installed only when `skin` is auto/absent. */
      __publicField(this, "skinMedia", null);
      /** OS light/dark flip → live reskin, but only while `skin` is auto/absent
       *  (an explicit skin attribute wins and is handled by its own attr change). */
      __publicField(this, "onSkinMediaChange", () => {
        if (!this.skinIsAuto()) return;
        this.markAttrDirty("skin");
      });
    }
    /** @internal Custom Element lifecycle; the browser calls this on mount. */
    connectedCallback() {
      const state = this.state;
      state.connected = true;
      installWidgetMethods(this, state);
      const inspection = inspectWidgetConfig(this);
      for (const issue of inspection.issues) {
        fireError(this, "invalid-config", issue.message);
      }
      if (inspection.inert) return;
      state.config = inspection.config;
      const apiHostAttr = this.getAttribute("api-host");
      const apiHost = apiHostAttr && apiHostAttr.trim() ? apiHostAttr.trim() : "https://verify.caputchin.com";
      this.apiHost = apiHost;
      this.shadowRoot ?? this.attachShadow({ mode: "open" });
      const abort = new AbortController();
      state.bootstrapAbort = abort;
      void fetchBootstrap({
        apiHost,
        sitekey: state.config.sitekey,
        locale: resolveLocaleSignal(state.config.locale),
        skin: resolveSkinSignal(state.config.skin),
        signal: abort.signal
      }).then((result) => {
        if (this.state !== state || !this.state.connected || !this.state.config) return;
        if (result.kind === "gate") {
          const reason = result.error.message || "This site key requires a game to verify, but the server could not supply one.";
          console.warn(`[caputchin] ${reason}`);
          fireError(this, "gate-unavailable", reason, result.error.code);
          this.completeMount(apiHost, null);
          return;
        }
        if (result.kind === "degrade") {
          console.warn(`[caputchin] bootstrap degraded (${result.reason}); rendering widget with bundled defaults`);
          emitDegraded(this, result.reason);
        }
        const bootstrap = result.kind === "ok" ? result.response : null;
        if (bootstrap?.requiresGame === true) {
          fireError(this, "invalid-config", "This site key requires a game; use <caputchin-game> instead of <caputchin-widget>");
        }
        this.completeMount(apiHost, bootstrap?.widget?.resolved ?? null);
      });
    }
    completeMount(apiHost, resolved) {
      const state = this.state;
      if (!state.config) return;
      const shadow = this.shadowRoot;
      if (!shadow) return;
      const shell = buildWidgetShell(resolved?.locale ?? null);
      if (shell.direction === "rtl") this.setAttribute("dir", "rtl");
      const skin = buildWidgetShellSkin(resolved?.skin ?? null);
      this.setAttribute("data-skin-theme", skin.theme);
      applySkinVars(this, skin.palette);
      const shellConfig = buildWidgetShellConfig(resolved?.config ?? null);
      state.presentation = createPresentation(state.config.invisible, {
        host: this,
        root: shadow,
        trigger: state.config.trigger,
        width: state.config.width,
        height: state.config.height,
        size: state.config.size,
        shell,
        skin,
        shellConfig
      });
      state.presentation.mount();
      state.trigger = createTriggerStrategy(state.config.trigger);
      state.triggerCtx = {
        el: this,
        presentation: state.presentation,
        runVerification: () => runCap(this, state, apiHost),
        capClient: null
      };
      state.trigger.activate(state.triggerCtx);
      this.installSkinMedia();
      if (this.dirtyAttrs.size > 0) this.applyAttrChanges();
    }
    /** @internal Custom Element lifecycle; the browser calls this on removal. */
    disconnectedCallback() {
      const s = this.state;
      s.bootstrapAbort?.abort();
      this.teardownSkinMedia();
      this.reskinAbort?.abort();
      this.reskinAbort = null;
      this.dirtyAttrs.clear();
      this.reinitScheduled = false;
      s.trigger?.deactivate();
      s.presentation?.unmount();
      s.capClient?.dispose();
      s.config = null;
      s.bootstrapAbort = null;
      s.trigger = null;
      s.triggerCtx = null;
      s.capClient = null;
      s.presentation = null;
      s.widgetId = null;
      s.lockedToken = null;
      s.connected = false;
      this.state = createInitialState();
    }
    /** @internal Custom Element lifecycle; the browser calls this on attr change. */
    attributeChangedCallback(name, oldValue, newValue) {
      if (!this.state.connected || oldValue === newValue) return;
      if (name === "skin" || name === "locale" || name === "width" || name === "height" || name === "size") {
        this.markAttrDirty(name);
        return;
      }
      console.warn(`[caputchin] attribute "${name}" changed after mount and was ignored; remove and re-add the element to apply it`);
    }
    /** Queue an attribute for the next microtask flush so several attrs set in
     *  one tick coalesce into a single refetch. */
    markAttrDirty(name) {
      this.dirtyAttrs.add(name);
      if (this.reinitScheduled) return;
      this.reinitScheduled = true;
      queueMicrotask(() => this.applyAttrChanges());
    }
    /** `skin` is auto when the attribute is missing, empty, or literally `auto`. */
    skinIsAuto() {
      const attr = this.getAttribute("skin");
      if (attr === null) return true;
      const t = attr.trim().toLowerCase();
      return t === "" || t === "auto";
    }
    installSkinMedia() {
      if (this.skinMedia || typeof window === "undefined" || typeof window.matchMedia !== "function") return;
      if (!this.skinIsAuto()) return;
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", this.onSkinMediaChange);
      this.skinMedia = mq;
    }
    teardownSkinMedia() {
      this.skinMedia?.removeEventListener("change", this.onSkinMediaChange);
      this.skinMedia = null;
    }
    /** Keep the OS tracker in sync when `skin` flips between explicit and auto at
     *  runtime: install when it becomes auto, tear down when it becomes explicit. */
    syncSkinMedia() {
      if (this.skinIsAuto()) this.installSkinMedia();
      else this.teardownSkinMedia();
    }
    applyAttrChanges() {
      this.reinitScheduled = false;
      if (!this.state.connected || !this.state.config) {
        this.dirtyAttrs.clear();
        return;
      }
      if (!this.state.presentation) return;
      const dirty = new Set(this.dirtyAttrs);
      this.dirtyAttrs.clear();
      if (dirty.size === 0) return;
      if (dirty.has("skin")) this.syncSkinMedia();
      if (dirty.has("skin") || dirty.has("locale")) this.reskinRefetch();
      if (dirty.has("width") || dirty.has("height") || dirty.has("size")) this.applyGeometryChange();
    }
    /** Live-resize the presentation in place from the current attributes. No
     *  refetch (geometry does not feed bootstrap) and no session touch (a solved
     *  token + verified visual survive). */
    applyGeometryChange() {
      const state = this.state;
      if (!state.config) return;
      const inspection = inspectWidgetConfig(this);
      if (inspection.inert || !inspection.config) return;
      state.config = inspection.config;
      state.presentation?.applyGeometry({
        width: state.config.width,
        height: state.config.height,
        size: state.config.size
      });
    }
    /** Refetch bootstrap with the new signals, then apply the resolved skin/locale
     *  in place. The solved token + cap session are never touched; on any
     *  non-`ok` result we keep the current theme (no flash to bundled). */
    reskinRefetch() {
      const state = this.state;
      if (!state.config) return;
      const inspection = inspectWidgetConfig(this);
      if (inspection.inert || !inspection.config) return;
      state.config = inspection.config;
      this.reskinEpoch += 1;
      const epoch = this.reskinEpoch;
      this.reskinAbort?.abort();
      const abort = new AbortController();
      this.reskinAbort = abort;
      void fetchBootstrap({
        apiHost: this.apiHost,
        sitekey: state.config.sitekey,
        locale: resolveLocaleSignal(state.config.locale),
        skin: resolveSkinSignal(state.config.skin),
        signal: abort.signal
      }).then((result) => {
        if (epoch !== this.reskinEpoch || this.state !== state || !this.state.connected || !this.state.config) return;
        if (result.kind !== "ok") return;
        this.applyResolvedAxes(result.response.widget?.resolved ?? null);
      });
    }
    applyResolvedAxes(resolved) {
      const shell = buildWidgetShell(resolved?.locale ?? null);
      const skin = buildWidgetShellSkin(resolved?.skin ?? null);
      this.setAttribute("data-skin-theme", skin.theme);
      if (shell.direction === "rtl") this.setAttribute("dir", "rtl");
      else this.removeAttribute("dir");
      applySkinVars(this, skin.palette);
      this.state.presentation?.applySkin(skin);
      this.state.presentation?.applyLocale(shell);
    }
  };
  /** @internal Custom Element observed attributes. */
  __publicField(CaputchinWidget, "observedAttributes", ["sitekey", "invisible", "trigger", "width", "height", "size", "locale", "skin", "api-host"]);

  // src/layout.ts
  function isLayout(v) {
    return v === "inline" || v === "modal" || v === "fullscreen";
  }
  function isLayoutAttr(v) {
    return isLayout(v) || v === "auto";
  }

  // src/config/game.ts
  function inspectGameConfig(el) {
    const issues = [];
    const rawSitekey = el.getAttribute("sitekey");
    const sitekey = rawSitekey && rawSitekey.length > 0 ? rawSitekey : null;
    const noVerify = el.hasAttribute("no-verify");
    let game = el.getAttribute("game");
    let games = el.getAttribute("games");
    let gameSrc = el.getAttribute("game-src");
    const rawLayout = el.getAttribute("layout");
    const rawTrigger = el.getAttribute("trigger");
    const rawSize = el.getAttribute("size");
    const common = parseCommonAttrs(el, issues);
    const overlayWidth = parseWidthAttr(el.getAttribute("overlay-width"), "overlay-width", issues);
    const overlayHeight = parseHeightAttr(el.getAttribute("overlay-height"), "overlay-height", issues);
    let trigger = null;
    if (rawTrigger !== null && rawTrigger !== "") {
      if (rawTrigger === "manual") {
        trigger = "manual";
      } else {
        issues.push({ message: `trigger="${rawTrigger}" is ignored on <caputchin-game>; only "manual" is settable; auto/click are derived from layout (inline \u2192 auto, modal/fullscreen \u2192 click)` });
      }
    }
    if (rawSize !== null && rawSize !== "") {
      issues.push({ message: `size="${rawSize}" is ignored on <caputchin-game>; size is derived from layout (inline \u2192 compact, modal/fullscreen \u2192 normal)` });
    }
    if (trigger === "manual") {
      if (game !== null || games !== null || gameSrc !== null) {
        issues.push({ message: 'game / games / game-src are ignored when trigger="manual"; customer slots custom game DOM via <caputchin-game> children' });
        game = null;
        games = null;
        gameSrc = null;
      }
    }
    if (gameSrc !== null) {
      const urlErr = validateGameUrl(gameSrc);
      if (urlErr) {
        issues.push({ message: urlErr });
        gameSrc = null;
      }
    }
    let layout = "auto";
    if (rawLayout !== null && rawLayout !== "") {
      if (!isLayoutAttr(rawLayout)) {
        issues.push({ message: `layout="${rawLayout}" is invalid; expected inline|modal|fullscreen|auto; falling back to "auto"` });
      } else {
        layout = rawLayout;
      }
    }
    const rawLocale = el.getAttribute("locale");
    const locale = rawLocale !== null && rawLocale.trim().length > 0 ? rawLocale : null;
    const rawSkin = el.getAttribute("skin");
    const skin = rawSkin !== null && rawSkin.trim().length > 0 ? rawSkin : null;
    return {
      config: {
        sitekey,
        noVerify,
        trigger,
        width: common.width,
        height: common.height,
        overlayWidth,
        overlayHeight,
        game,
        games,
        gameSrc,
        layout,
        locale,
        skin
      },
      issues,
      inert: false
    };
  }
  function shouldVerify(cfg) {
    return cfg.sitekey !== null && !cfg.noVerify;
  }

  // src/modes/game.ts
  function createGamePresentation(input) {
    if (input.layout === "inline") return createInlineGame(input);
    return createOverlayGame(input);
  }
  function createInlineGame(input) {
    const { host, root: renderRoot, width, height, manual, shell, skin, shellConfig } = input;
    const isFullWidth = width === "full";
    const isFullHeight = height === "full";
    const pxWidth = typeof width === "number" ? width : null;
    const pxHeight = typeof height === "number" ? height : null;
    let frame = null;
    let iframeSlot = null;
    let badgeSlot = null;
    let subSimple = null;
    return {
      mount() {
        var _a, _b;
        if (frame) return;
        ensureGameStyles(renderRoot);
        frame = document.createElement("div");
        frame.setAttribute("part", "game-frame");
        frame.dataset.layout = "inline";
        if (isFullWidth) frame.dataset.width = "full";
        iframeSlot = document.createElement("div");
        iframeSlot.setAttribute("part", "game-iframe-slot");
        if (manual) {
          const slot = document.createElement("slot");
          slot.setAttribute("part", "game-slot");
          iframeSlot.appendChild(slot);
        }
        badgeSlot = document.createElement("div");
        badgeSlot.setAttribute("part", "game-badge-slot");
        frame.appendChild(iframeSlot);
        frame.appendChild(badgeSlot);
        renderRoot.appendChild(frame);
        subSimple = createSimplePresentation({
          host,
          root: badgeSlot,
          trigger: "auto",
          skin,
          shellConfig,
          // Full-width so the strip spans the game-frame edge to edge, flush
          // with the iframe panel above. Brand still hugs the trailing edge
          // via the margin-inline-start:auto rule in simple.ts (flips under
          // dir="rtl" automatically).
          width: "full",
          size: "compact",
          shell
        });
        subSimple.mount();
        if (isFullWidth) {
          host.style.display = "block";
          host.style.width = "100%";
          iframeSlot.dataset.fillX = "true";
        } else if (pxWidth !== null) {
          host.style.display = "block";
          host.style.width = `${pxWidth}px`;
          frame.style.width = "100%";
          iframeSlot.dataset.fill = "true";
        } else {
          host.style.display = "";
          host.style.width = "";
        }
        if (isFullHeight) {
          (_a = host.style).display || (_a.display = "block");
          host.style.height = "100%";
          frame.style.height = "100%";
          iframeSlot.style.flex = "1 1 auto";
          iframeSlot.style.minHeight = "0";
          iframeSlot.style.overflow = "hidden";
          iframeSlot.dataset.fillY = "true";
        } else if (pxHeight !== null) {
          (_b = host.style).display || (_b.display = "block");
          host.style.height = `${pxHeight}px`;
          frame.style.height = "100%";
          iframeSlot.style.flex = "1 1 auto";
          iframeSlot.style.minHeight = "0";
          iframeSlot.style.overflow = "hidden";
          iframeSlot.dataset.fill = "true";
        }
      },
      unmount() {
        if (!frame) return;
        subSimple?.unmount();
        frame.remove();
        if (isFullWidth || isFullHeight || pxWidth !== null || pxHeight !== null) {
          host.style.display = "";
          host.style.width = "";
          host.style.height = "";
        }
        frame = null;
        iframeSlot = null;
        badgeSlot = null;
        subSimple = null;
      },
      setState(state) {
        subSimple?.setState(state);
      },
      onActivate(_handler) {
        return () => {
        };
      },
      applySkin(newSkin) {
        subSimple?.applySkin(newSkin);
      },
      applyLocale(newShell) {
        subSimple?.applyLocale(newShell);
      },
      // Geometry is applied by re-mounting the game element (recreating the iframe
      // at the new footprint), not in place, so this is a no-op.
      applyGeometry(_geometry) {
      },
      getIframeSlot() {
        return iframeSlot;
      },
      open() {
      },
      close() {
      }
    };
  }
  var dialogIdCounter = 0;
  function signalVisibility(slot, visible) {
    if (!slot) return;
    const iframe = slot.querySelector("iframe");
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage({ kind: "visibility", seq: 0, visible }, "*");
    } catch {
    }
  }
  function createOverlayGame(input) {
    const { host, root: renderRoot, layout, manual, width, height, footprintWidth, footprintHeight, shell, skin, shellConfig } = input;
    let container = null;
    let checkboxSlot = null;
    let dialog = null;
    let iframeSlot = null;
    let subSimple = null;
    let closeBtn = null;
    const activateListeners = [];
    let backdropWired = false;
    let firstActivationFired = false;
    let logicalState = "idle";
    function fireActivate() {
      for (const h of activateListeners) h();
    }
    return {
      mount() {
        if (container) return;
        ensureGameStyles(renderRoot);
        container = document.createElement("div");
        container.setAttribute("part", "game-overlay-host");
        checkboxSlot = document.createElement("div");
        checkboxSlot.setAttribute("part", "game-overlay-checkbox");
        container.appendChild(checkboxSlot);
        dialog = document.createElement("dialog");
        dialog.setAttribute("part", "game-overlay-dialog");
        dialog.dataset.layout = layout;
        dialog.id = `cpt-overlay-${++dialogIdCounter}`;
        if (shell.direction === "rtl") dialog.setAttribute("dir", "rtl");
        if (footprintWidth === "full") dialog.dataset.fillX = "true";
        if (footprintHeight === "full") dialog.dataset.fillY = "true";
        if (layout === "fullscreen") {
          closeBtn = document.createElement("button");
          closeBtn.type = "button";
          closeBtn.setAttribute("part", "game-overlay-close");
          closeBtn.setAttribute("aria-label", shell.strings.overlayClose);
          closeBtn.textContent = "\xD7";
          closeBtn.addEventListener("click", () => this.close());
          dialog.appendChild(closeBtn);
        }
        iframeSlot = document.createElement("div");
        iframeSlot.setAttribute("part", "game-iframe-slot");
        if (manual) {
          const slot = document.createElement("slot");
          slot.setAttribute("part", "game-slot");
          iframeSlot.appendChild(slot);
        }
        dialog.appendChild(iframeSlot);
        dialog.addEventListener("close", () => {
          signalVisibility(iframeSlot, false);
          if (logicalState === "verifying") {
            subSimple?.setState("idle");
          }
          emitDialogHidden(host, layout);
        });
        container.appendChild(dialog);
        renderRoot.appendChild(container);
        subSimple = createSimplePresentation({
          host,
          root: checkboxSlot,
          trigger: "click",
          width,
          height,
          // Overlay (modal / fullscreen) always uses the normal checkbox.
          // Inline uses compact (hardcoded in createInlineGame).
          size: "normal",
          shell,
          skin,
          shellConfig
        });
        subSimple.mount();
        if (width === "full") {
          container.style.display = "block";
          container.style.width = "100%";
          checkboxSlot.style.display = "block";
          checkboxSlot.style.width = "100%";
        } else if (typeof width === "number") {
          container.style.display = "block";
          container.style.width = `${width}px`;
          checkboxSlot.style.display = "block";
          checkboxSlot.style.width = `${width}px`;
        }
        if (height === "full") checkboxSlot.style.height = "100%";
        else if (typeof height === "number") checkboxSlot.style.height = `${height}px`;
        subSimple.onActivate(() => {
          this.open();
          if (!firstActivationFired) {
            firstActivationFired = true;
            fireActivate();
          }
        });
      },
      unmount() {
        if (!container) return;
        subSimple?.unmount();
        this.close();
        container.remove();
        container = null;
        checkboxSlot = null;
        dialog = null;
        iframeSlot = null;
        subSimple = null;
        closeBtn = null;
        activateListeners.length = 0;
        backdropWired = false;
      },
      setState(state) {
        logicalState = state;
        subSimple?.setState(state);
        if (state === "verified" || state === "error") {
          setTimeout(() => this.close(), 600);
        }
      },
      onActivate(handler) {
        activateListeners.push(handler);
        return () => {
          const idx = activateListeners.indexOf(handler);
          if (idx >= 0) activateListeners.splice(idx, 1);
        };
      },
      applySkin(newSkin) {
        subSimple?.applySkin(newSkin);
      },
      applyLocale(newShell) {
        subSimple?.applyLocale(newShell);
        if (dialog) {
          if (newShell.direction === "rtl") dialog.setAttribute("dir", "rtl");
          else dialog.removeAttribute("dir");
        }
        closeBtn?.setAttribute("aria-label", newShell.strings.overlayClose);
      },
      // Geometry is applied by re-mounting the game element, not in place → no-op.
      applyGeometry(_geometry) {
      },
      getIframeSlot() {
        return iframeSlot;
      },
      open() {
        if (!dialog) return;
        const d = dialog;
        if (typeof d.showModal === "function") {
          try {
            d.showModal();
          } catch {
            dialog.setAttribute("open", "");
          }
        } else {
          dialog.setAttribute("open", "");
        }
        if (layout === "modal" && !backdropWired) {
          dialog.addEventListener("click", (e) => {
            if (e.target === dialog) this.close();
          });
          backdropWired = true;
        }
        if (logicalState === "verifying") subSimple?.setState("verifying");
        signalVisibility(iframeSlot, true);
        emitDialogShown(host, layout);
      },
      close() {
        if (!dialog) return;
        const d = dialog;
        let fired = false;
        if (typeof d.close === "function") {
          try {
            d.close();
            fired = true;
          } catch {
          }
        }
        if (!fired) {
          dialog.removeAttribute("open");
          dialog.dispatchEvent(new Event("close"));
        }
      }
    };
  }
  var gameStylesInjected = /* @__PURE__ */ new WeakSet();
  function ensureGameStyles(root) {
    if (gameStylesInjected.has(root)) return;
    gameStylesInjected.add(root);
    const style = document.createElement("style");
    style.textContent = [
      // Host defaults to shrink-to-content so width="auto" matches the
      // inner game-frame's intrinsic width. Without this, a parent that
      // stretches block children (flex column with align-items:stretch,
      // grid cell, plain block layout) would balloon the host while the
      // inner frame stayed compact, leaving a gap between the iframe and
      // the host edges. width:fit-content opts out of cross-axis stretch
      // in flex containers (inline-block alone doesn't - flex items get
      // computed display:block-equivalent regardless of source). Customer
      // overrides (width="full" or pixel width) still set display:block +
      // an explicit width at mount time, which wins by inline-style
      // specificity.
      ":host{display:inline-block;width:fit-content}",
      // --- inline frame ---
      // One unified bordered card containing the iframe + a brand strip below.
      // The simple widget inside the badge slot has its own border/radius/bg
      // stripped so the outer frame border reads as the only edge.
      '[part="game-frame"][data-layout="inline"]{display:flex;flex-direction:column;border:1px solid var(--cpt-skin-border);border-radius:0.5rem;background:var(--cpt-skin-surface_bg);overflow:hidden;width:fit-content;max-width:100%;box-sizing:border-box}',
      '[part="game-frame"][data-layout="inline"][data-width="full"]{width:100%}',
      '[part="game-iframe-slot"]{display:flex;flex-direction:column}',
      '[part="game-iframe-slot"] iframe{display:block;border:0;background:var(--cpt-skin-surface_bg)}',
      // When the customer pins the inline frame size (width/height attr), the
      // iframe stretches to fill the slot instead of staying at the game's
      // manifest preferred size.
      '[part="game-iframe-slot"][data-fill="true"] iframe{width:100%!important;height:100%!important;flex:1 1 auto}',
      // Inline `width="full"` / `height="full"`: clamp the iframe to the slot
      // on the filled axis WHEN the slot has a definite size, but let it grow
      // to content when the slot is auto-sized. `min:100%`+`max:100%` does both.
      // The iframe-runtime auto-measure (grow-only) writes a content-pixel
      // inline width/height. Against a DEFINITE slot, min+max:100% pin the
      // iframe to the slot: it fills when content is smaller, reflows/caps when
      // content is larger, and tracks the slot in BOTH directions on resize (so
      // a shrunk container can't leave a stale-big iframe overflowing past it).
      // Against an AUTO / shrink-to-fit slot, percentage min/max resolve to
      // no-constraint during intrinsic sizing, so the inline content size wins
      // and the iframe grows. Contrast data-fill (px-pinned shell) which uses
      // width/height:100%!important - a hard cap that would collapse the iframe
      // to its replaced-default in an auto parent, breaking the grow case.
      '[part="game-iframe-slot"][data-fill-x="true"] iframe{min-width:100%;max-width:100%;flex:1 1 auto}',
      '[part="game-iframe-slot"][data-fill-y="true"] iframe{min-height:100%;max-height:100%;flex:1 1 auto}',
      // Badge slot: thin separator line between iframe and brand strip.
      '[part="game-badge-slot"]{display:flex;border-top:1px solid var(--cpt-skin-border);background:var(--cpt-skin-surface_bg)}',
      // Strip the embedded simple widget of its own border/radius/bg so it
      // visually merges with the outer game-frame card.
      '[part="game-badge-slot"] [part="simple-checkbox"]{border:none !important;border-radius:0 !important;background:transparent !important}',
      // --- overlay (modal / fullscreen) ---
      '[part="game-overlay-host"]{display:inline-block}',
      '[part="game-overlay-checkbox"]{display:inline-block}',
      '[part="game-overlay-dialog"]{padding:0;border:0;background:transparent;max-width:none;max-height:none;box-sizing:border-box}',
      '[part="game-overlay-dialog"][open]{display:flex;flex-direction:column}',
      // Modal: shrink-wrap to the iframe so neither white space nor scrollbars
      // appear. The iframe is sized to the game's manifest dimensions (or the
      // 400x300 default); the dialog hugs that plus its own padding. Capped to
      // 90vw / 90dvh (box-sizing:border-box from the base rule folds the 1rem
      // padding INTO that cap) so the dialog never exceeds the viewport; an
      // over-wide game is then clamped by max-width:100% on the iframe below.
      // dvh (dynamic viewport height) tracks the mobile address-bar; vh is the
      // fallback for browsers without dvh.
      '[part="game-overlay-dialog"][data-layout="modal"]{border-radius:0.75rem;background:var(--cpt-skin-surface_bg);padding:1rem;width:fit-content;height:fit-content;max-width:90vw;max-height:90vh;max-height:90dvh;box-shadow:0 20px 50px var(--cpt-skin-shadow)}',
      // Modal + fill: switch the dialog off shrink-wrap on the filled axis so
      // the iframe inside actually has a definite size to stretch into. Pinned
      // to 90vw / 90vh (matching the existing max-* cap) so the modal still
      // reads as a dialog with backdrop, not as a fullscreen overlay.
      '[part="game-overlay-dialog"][data-layout="modal"][data-fill-x="true"]{width:90vw}',
      '[part="game-overlay-dialog"][data-layout="modal"][data-fill-y="true"]{height:90vh;height:90dvh}',
      '[part="game-overlay-dialog"][data-layout="modal"]::backdrop{background:var(--cpt-skin-modal_backdrop)}',
      '[part="game-overlay-dialog"][data-layout="fullscreen"]{width:100vw;height:100vh;height:100dvh;max-width:100vw;max-height:100vh;max-height:100dvh;background:var(--cpt-skin-surface_bg)}',
      '[part="game-overlay-dialog"][data-layout="fullscreen"]::backdrop{background:var(--cpt-skin-fullscreen_backdrop)}',
      // Overlay (modal + fullscreen): iframe stays at its manifest preferred
      // size (set by applyIframeSize); slot fills the dialog interior and
      // centers the iframe both axes. Matters most for fullscreen; the
      // dialog is 100vw/100dvh, the game might be 280x160, and we want it
      // centered with backdrop space rather than stretched and pixelated.
      // For modal the dialog shrink-wraps to the iframe so centering is a
      // no-op there but stays consistent.
      // max-width:100% clamps the iframe WIDTH to the dialog interior: a game
      // whose preferred width exceeds the capped dialog (90vw modal / 100vw
      // fullscreen) shrinks to fit instead of overflowing the viewport (the mobile
      // horizontal-scroll bug). Against a shrink-wrapped (auto) modal the
      // percentage resolves to no-constraint, so a small game keeps its size and
      // stays centered. max-height:100% only caps height where the slot has a
      // DEFINITE height (fullscreen / height="full"); in a shrink-wrapped modal a
      // taller-than-viewport game still centers and clips top/bottom (a
      // pre-existing limit; a real vertical fit needs object-fit-style scaling).
      '[part="game-overlay-dialog"] [part="game-iframe-slot"]{flex:1 1 auto;display:flex;align-items:center;justify-content:center;min-width:0;min-height:0}',
      '[part="game-overlay-dialog"] [part="game-iframe-slot"] iframe{border:0;max-width:100%;max-height:100%;box-sizing:border-box}',
      // width="full" / height="full" on a game widget in overlay layout: the
      // iframe stretches along that axis to fill the dialog interior. Per-axis
      // so a customer can fill one axis and letterbox the other. `align-items`
      // / `justify-content: stretch` opt the flex centering out on the filled
      // axis so the iframe actually grows; the iframe itself takes width/height
      // 100% via inline style from applyIframeSize (host.setSize), with
      // !important here as a belt-and-braces against future inline-style
      // collisions.
      '[part="game-overlay-dialog"][data-fill-x="true"] [part="game-iframe-slot"]{justify-content:stretch}',
      '[part="game-overlay-dialog"][data-fill-x="true"] [part="game-iframe-slot"] iframe{width:100%!important}',
      '[part="game-overlay-dialog"][data-fill-y="true"] [part="game-iframe-slot"]{align-items:stretch}',
      '[part="game-overlay-dialog"][data-fill-y="true"] [part="game-iframe-slot"] iframe{height:100%!important}',
      '[part="game-overlay-close"]{position:absolute;top:0.5rem;inset-inline-end:0.75rem;width:2rem;height:2rem;border:0;border-radius:50%;background:var(--cpt-skin-close_btn_bg);color:var(--cpt-skin-text_primary);font-size:1.5rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:1}',
      // --- show / hide animation (CSS @starting-style + transition-behavior:allow-discrete) ---
      // Modal: 180ms scale + fade. Fullscreen: 220ms slide-up + fade.
      // Older browsers (lacking @starting-style + allow-discrete) pop in/out
      // exactly like before; feature degrades cleanly.
      '[part="game-overlay-dialog"]{opacity:0;transition:opacity 180ms ease,transform 180ms ease,overlay 180ms ease allow-discrete,display 180ms ease allow-discrete}',
      '[part="game-overlay-dialog"][data-layout="modal"]{transform:scale(0.95)}',
      '[part="game-overlay-dialog"][data-layout="fullscreen"]{transform:translateY(24px);transition-duration:220ms}',
      '[part="game-overlay-dialog"][open]{opacity:1;transform:none}',
      "@starting-style{",
      '[part="game-overlay-dialog"][data-layout="modal"][open]{opacity:0;transform:scale(0.95)}',
      '[part="game-overlay-dialog"][data-layout="fullscreen"][open]{opacity:0;transform:translateY(24px)}',
      "}",
      '[part="game-overlay-dialog"]::backdrop{opacity:0;transition:opacity 180ms ease,overlay 180ms ease allow-discrete,display 180ms ease allow-discrete}',
      '[part="game-overlay-dialog"][open]::backdrop{opacity:1}',
      '@starting-style{[part="game-overlay-dialog"][open]::backdrop{opacity:0}}',
      // Respect reduced-motion: drop the transition window so it falls back to instant.
      "@media (prefers-reduced-motion:reduce){",
      '[part="game-overlay-dialog"],[part="game-overlay-dialog"]::backdrop{transition-duration:0ms}',
      "}"
    ].join("");
    root.appendChild(style);
  }

  // src/config/effective-size.ts
  function resolvePresentationSize(config, preferred) {
    const width = config.width === "auto" && preferred?.width === "full" ? "full" : config.width;
    const height = config.height === null && preferred?.height === "full" ? "full" : config.height;
    return { width, height };
  }
  function resolveGameSizing(config, preferred, layout) {
    if (layout === "inline") {
      const folded = resolvePresentationSize(config, preferred);
      return { entry: folded, footprint: folded };
    }
    return {
      entry: { width: config.width, height: config.height },
      footprint: resolvePresentationSize(
        { width: config.overlayWidth, height: config.overlayHeight },
        preferred
      )
    };
  }

  // src/verify/methods-game.ts
  function installGameMethods(el, state) {
    Object.defineProperty(el, "pass", {
      value: (payload) => {
        if (!state.config) return;
        if (state.config.trigger !== "manual") {
          fireError(el, "invalid-call", 'pass() only callable when trigger="manual"');
          return;
        }
        const trace = typeof payload?.trace === "string" ? payload.trace : "";
        if (!shouldVerify(state.config)) {
          emitPass(el, { token: null, score: null, durationMs: null });
          state.gamePresentation?.setState("verified");
          return;
        }
        if (!state.capClient) {
          fireError(el, "invalid-call", "pass() called before verification started; open the dialog first");
          return;
        }
        if (!state.firstPassFired) {
          state.firstPassFired = true;
          state.capClient.releaseGate({ trace });
        }
      },
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(el, "fail", {
      value: (payload) => {
        if (!state.config) return;
        if (state.config.trigger !== "manual") {
          fireError(el, "invalid-call", 'fail() only callable when trigger="manual"');
          return;
        }
        const code = typeof payload?.code === "string" ? payload.code : "game-failed";
        const message = typeof payload?.message === "string" ? payload.message : "Customer game reported failure";
        if (shouldVerify(state.config) && !state.capClient) {
          fireError(el, "invalid-call", "fail() called before verification started; open the dialog first");
          return;
        }
        state.gameErrored = true;
        fireError(el, "game-error-relayed", message, code);
        state.capClient?.abortGate(new Error(`game-failed: ${code}`));
        state.gamePresentation?.setState("error");
      },
      configurable: true,
      writable: false,
      enumerable: false
    });
    Object.defineProperty(el, "setNickname", {
      value: (_letters) => {
        throw new Error("setNickname is not implemented in this build (Post-MVP)");
      },
      configurable: true,
      writable: false,
      enumerable: false
    });
  }

  // src/iframe/srcdoc.ts
  var INTEGRITY_RE = /^sha384-[A-Za-z0-9+/=]{60,100}$/;
  var ASSET_ORIGIN_RE = /^https?:\/\/[a-z0-9.-]+(?::\d{1,5})?$/i;
  function escapeAttr(s) {
    return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function buildSrcdoc(opts) {
    const { gameId, gameUrl, integrity, runtimeJs, runtimeSha256, assetOrigins } = opts;
    const safeRuntimeSha256 = escapeAttr(runtimeSha256);
    let scriptSrc = `'sha256-${safeRuntimeSha256}' 'wasm-unsafe-eval'`;
    let gameScriptTag = "";
    if (gameUrl) {
      const urlErr = validateGameUrl(gameUrl);
      if (urlErr) {
        throw new Error(`buildSrcdoc: invalid gameUrl; ${urlErr}`);
      }
      const resolvedUrl = canonicalizeGameUrl(gameUrl);
      const safeGameUrl = escapeAttr(resolvedUrl);
      scriptSrc += ` ${safeGameUrl}`;
      const integrityAttr = integrity && INTEGRITY_RE.test(integrity) ? ` integrity="${escapeAttr(integrity)}" crossorigin="anonymous"` : "";
      gameScriptTag = `<script src="${safeGameUrl}"${integrityAttr}></script>`;
    }
    const safeGameId = gameId !== null ? escapeAttr(gameId) : "";
    const safeAssetSrc = (assetOrigins ?? []).filter((o) => ASSET_ORIGIN_RE.test(o)).map((o) => ` ${o}`).join("");
    return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src ${scriptSrc}; connect-src 'none'; img-src data:${safeAssetSrc}; media-src data:${safeAssetSrc}; font-src data:; style-src 'unsafe-inline'"><style>html,body{margin:0;padding:0}</style></head><body><div id="cpt-root"></div><script data-game-id="${safeGameId}">${runtimeJs}</script>${gameScriptTag}</body></html>`;
  }

  // src/protocol/messages.ts
  var IFRAME_KINDS = /* @__PURE__ */ new Set(["game-started", "game-pass", "game-error", "dimensions-measured"]);
  function isIframeToWidget(msg) {
    if (typeof msg !== "object" || msg === null) return false;
    const m = msg;
    return IFRAME_KINDS.has(m["kind"]) && typeof m["seq"] === "number";
  }

  // src/protocol/channel.ts
  function send(iframe, msg) {
    iframe.contentWindow?.postMessage(msg, "*");
  }
  function listen(iframe, _el, cb) {
    function handler(event) {
      if (event.source !== iframe.contentWindow) return;
      if (event.origin !== "null") {
        console.warn(`[caputchin] ignored postMessage from unexpected origin: "${event.origin}"`);
        return;
      }
      if (!isIframeToWidget(event.data)) return;
      cb(event.data);
    }
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }

  // src/iframe/host.ts
  var KICKOFF_ACK_TIMEOUT_MS = 1e4;
  var IframeHost = class {
    constructor(gameUrl, integrity, gameId, hostEl, onMessage, assetOrigins = []) {
      __publicField(this, "gameUrl");
      __publicField(this, "integrity");
      __publicField(this, "gameId");
      __publicField(this, "onMessage");
      __publicField(this, "hostEl");
      __publicField(this, "assetOrigins");
      __publicField(this, "iframe", null);
      __publicField(this, "unlisten", null);
      __publicField(this, "kickoffAckTimer", null);
      __publicField(this, "onLoadFailed", null);
      // Resolves on the iframe document's `load` event (set up in build()). kickoff
      // waits on it so the runtime's message listener (and the game factory) exist
      // before the kickoff postMessage is sent. Otherwise a synchronous kickoff
      // (the no-verify / no-sitekey mount, which skips the bootstrap round trip that
      // would otherwise delay it) races ahead of the srcdoc parse and the message is
      // dropped. srcdoc iframes ALWAYS fire `load` (see top), so this never hangs.
      __publicField(this, "frameLoaded", null);
      this.gameUrl = gameUrl;
      this.integrity = integrity;
      this.gameId = gameId;
      this.hostEl = hostEl;
      this.onMessage = onMessage;
      this.assetOrigins = assetOrigins;
    }
    build() {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("sandbox", "allow-scripts");
      iframe.style.border = "none";
      iframe.style.display = "block";
      iframe.title = buildWidgetShell(null).strings.frameTitle;
      this.frameLoaded = new Promise((resolve) => {
        iframe.addEventListener("load", () => resolve(), { once: true });
      });
      iframe.srcdoc = buildSrcdoc({
        gameId: this.gameId,
        gameUrl: this.gameUrl,
        integrity: this.integrity,
        runtimeJs: '"use strict";var _CaputchinRuntime=(()=>{var G="__caputchin_default__";(function(){window.Caputchin={games:{}};let N=window,T=[],I=!1;function A(t){let e=window[t];if(typeof e!="function")return;let o=function(...h){let r=new e(...h);if(T.push(r),I)try{r.suspend?.()}catch{}return r};o.prototype=e.prototype,window[t]=o}A("AudioContext"),A("webkitAudioContext");function q(t){I=t;for(let e of T)try{t?e.suspend?.():e.resume?.()}catch{}}let F=!1,z=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){if(!(!F&&!document.hasFocus()))return z.call(this,e)};let E=()=>{F=!0};document.addEventListener("pointerdown",E,{once:!0,capture:!0}),document.addEventListener("keydown",E,{once:!0,capture:!0}),document.addEventListener("focusin",E,{once:!0,capture:!0});let W=4e3,j=16,x=[],C=!1,P=0,_=-1/0,O=0,Y=0;function V(){C||(C=!0,P=performance.now())}function l(){return Math.round(performance.now()-P)}function m(t){!C||x.length>=W||x.push(t)}function H(t){let e=0;for(let o=0;o<t.length;o++)e=Math.imul(e,31)+t.charCodeAt(o)|0;return e&65535}function L(t){return document.pointerLockElement!=null?(O+=t.movementX,Y+=t.movementY,[Math.round(O),Math.round(Y)]):[Math.round(t.clientX),Math.round(t.clientY)]}document.addEventListener("pointerdown",t=>{let[e,o]=L(t);m([l(),0,e,o])},{capture:!0,passive:!0}),document.addEventListener("pointerup",t=>{let[e,o]=L(t);m([l(),1,e,o])},{capture:!0,passive:!0}),document.addEventListener("pointermove",t=>{let e=l();if(e-_<j)return;_=e;let[o,h]=L(t);m([e,2,o,h])},{capture:!0,passive:!0}),document.addEventListener("keydown",t=>{m([l(),3,H(t.code)])},{capture:!0,passive:!0}),document.addEventListener("keyup",t=>{m([l(),4,H(t.code)])},{capture:!0,passive:!0});function X(){return JSON.stringify({v:1,e:x})}let K=document.querySelector("script[data-game-id]"),S=K?K.getAttribute("data-game-id"):null,te=S&&S.length>0?S:null,s=-1,R,v=null,U=null,u=null,p=null;function f(t){window.parent.postMessage(t,"*")}function a(t,e){f({kind:"game-error",seq:s,code:t,message:e})}window.addEventListener("message",async t=>{if(t.source!==window.parent)return;let e=t.data;if(!(typeof e!="object"||e===null)){if(e.kind==="layout-context"){let r=e.layout;(r==="inline"||r==="modal"||r==="fullscreen")&&(U=r);return}if(e.kind==="visibility"){q(e.visible===!1);return}if(e.kind==="kickoff"){let M=function(n,i,k){let c=Math.max(1,Math.round(n)),d=Math.max(1,Math.round(i));if(k==="auto"&&g>0&&y>0){if(c<=g&&d<=y)return;c=Math.max(c,g),d=Math.max(d,y)}c===g&&d===y||(g=c,y=d,f({kind:"dimensions-measured",seq:s,width:c,height:d,source:k}))},b=function(){let n=document.documentElement,i=Math.max(n.scrollWidth,document.body?.scrollWidth??0),k=Math.max(n.scrollHeight,document.body?.scrollHeight??0);i>0&&k>0&&M(i,k,"auto")};var o=M,h=b;s=e.seq,v=e.gameId??null;let r=e.seed??null,$=e.locale??null,J=e.skin??null,Q=e.config??null,B=document.getElementById("cpt-root");if(!B){a("game-not-registered","cpt-root element missing");return}if(v===null){f({kind:"game-started",seq:s});return}let D=()=>{let n=(N.Caputchin||{}).games||{};return n[v]??n[G]},w=D();if(!w&&document.readyState==="loading"&&(await new Promise(n=>document.addEventListener("DOMContentLoaded",()=>n(),{once:!0})),w=D()),!w){a("game-not-registered",`No game registered for id "${v}"`);return}let g=-1,y=-1,Z={pass({trace:n}){f({kind:"game-pass",seq:s,trace:n,inputTrace:X()})},error({code:n,message:i}){a(n,i??"")},setSize(n,i){M(n,i,"explicit")},get layout(){return U}},ee={seed:r,locale:$,skin:J,config:Q};try{R=w(B,Z,ee)}catch(n){a("game-error-relayed",String(n));return}typeof ResizeObserver=="function"&&(u=new ResizeObserver(()=>b()),u.observe(document.documentElement),document.body&&u.observe(document.body)),typeof MutationObserver=="function"&&document.body&&(p=new MutationObserver(()=>b()),p.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]})),requestAnimationFrame(()=>requestAnimationFrame(b)),V(),f({kind:"game-started",seq:s});return}if(e.kind==="dispose"){if(u&&(u.disconnect(),u=null),p&&(p.disconnect(),p=null),typeof R=="function")try{R()}catch{}return}}}),document.addEventListener("securitypolicyviolation",t=>{let e=`${t.violatedDirective}: ${t.blockedURI}`.slice(0,200);a("iframe-script-blocked",e)}),window.addEventListener("error",t=>{let e=t.message?String(t.message).slice(0,200):"Script error";a("game-error-relayed",e)}),window.addEventListener("unhandledrejection",t=>{let e=t.reason?String(t.reason).slice(0,200):"Unhandled rejection";a("game-error-relayed",e)})})();})();\n',
        runtimeSha256: "ecEV9cRVfgDErJo+UNuGkTfbhATf1QG92y8A/Rdx7cU=",
        assetOrigins: this.assetOrigins
      });
      this.iframe = iframe;
      return iframe;
    }
    /**
     * Apply width/height to the iframe. Pass `null` for an axis to keep
     * whatever was previously set (or the default). Pixel numbers become
     * `${n}px`; the special string `'100%'` is passed through (used by
     * width="full" / height="full" in game presentation).
     */
    setSize(width, height) {
      if (!this.iframe) return;
      if (width !== null) {
        this.iframe.style.width = typeof width === "number" ? `${width}px` : width;
      }
      if (height !== null) {
        this.iframe.style.height = typeof height === "number" ? `${height}px` : height;
      }
    }
    mount(container, onLoadFailed, onGameStarted) {
      if (!this.iframe) this.build();
      const iframe = this.iframe;
      this.onLoadFailed = onLoadFailed;
      this.unlisten = listen(iframe, this.hostEl, (msg) => {
        if (msg.kind === "dimensions-measured") {
          this.setSize(msg.width, msg.height);
          return;
        }
        if (msg.kind === "game-started") {
          this.clearKickoffAckTimer();
          onGameStarted?.();
        }
        this.onMessage(msg);
      });
      container.appendChild(iframe);
    }
    /** Returns the iframe element for re-parenting by external presenters. */
    getIframe() {
      return this.iframe;
    }
    setLayoutContext(layout) {
      if (!this.iframe) return;
      send(this.iframe, { kind: "layout-context", seq: 0, layout });
    }
    /** Tell the iframe runtime the dialog visibility changed. The runtime
     *  suspends every AudioContext it has created when visible=false (and
     *  resumes them on visible=true) so the hidden dialog can't leak sound.
     *  Game logic keeps running regardless. */
    setVisibility(visible) {
      if (!this.iframe) return;
      send(this.iframe, { kind: "visibility", seq: 0, visible });
    }
    kickoff(seq, seed = null, locale = null, skin = null, config = null) {
      if (!this.iframe) return;
      this.iframe.title = buildWidgetShell(locale).strings.frameTitle;
      const dispatch = () => {
        if (!this.iframe) return;
        send(this.iframe, {
          kind: "kickoff",
          seq,
          gameId: this.gameId,
          seed,
          locale,
          skin,
          config
        });
        this.kickoffAckTimer = setTimeout(() => {
          this.kickoffAckTimer = null;
          this.onLoadFailed?.("iframe-load-failed", "Game did not send game-started within 10s");
        }, KICKOFF_ACK_TIMEOUT_MS);
      };
      if (this.frameLoaded) void this.frameLoaded.then(dispatch);
      else dispatch();
    }
    clearKickoffAckTimer() {
      if (this.kickoffAckTimer !== null) {
        clearTimeout(this.kickoffAckTimer);
        this.kickoffAckTimer = null;
      }
    }
    dispose() {
      this.clearKickoffAckTimer();
      if (this.iframe) {
        send(this.iframe, { kind: "dispose", seq: -1 });
        this.iframe.remove();
        this.iframe = null;
      }
      if (this.unlisten) {
        this.unlisten();
        this.unlisten = null;
      }
    }
  };

  // src/bootstrap/asset-origins.ts
  var ASSET_ORIGIN_RE2 = /^https?:\/\/[a-z0-9.-]+(?::\d{1,5})?$/i;
  function collectSkinAssetOrigins(skin) {
    if (!skin) return [];
    const origins = /* @__PURE__ */ new Set();
    for (const value of Object.values(skin)) {
      if (typeof value !== "string" || !/^https?:\/\//i.test(value)) continue;
      let origin;
      try {
        origin = new URL(value).origin;
      } catch {
        continue;
      }
      if (ASSET_ORIGIN_RE2.test(origin)) origins.add(origin);
    }
    return [...origins];
  }

  // src/resolver.ts
  async function fetchMarketplaceResolution(id, apiHost, sitekey) {
    const params = new URLSearchParams({ game: id });
    if (sitekey) params.set("sitekey", sitekey);
    const url = `${apiHost}/v1/widget/bootstrap?${params.toString()}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        return {
          ok: false,
          code: "resolve-failed",
          message: `Widget bootstrap returned ${res.status} for game "${id}"`
        };
      }
      const raw = await res.json();
      const game = raw.game ?? null;
      if (!game || typeof game.url !== "string" || typeof game.integrity !== "string") {
        return {
          ok: false,
          code: "resolve-failed",
          message: `Widget bootstrap returned no marketplace bundle for game "${id}"`
        };
      }
      return { ok: true, url: game.url, integrity: game.integrity };
    } catch (err) {
      return {
        ok: false,
        code: "resolve-failed",
        message: `Network error resolving game "${id}": ${String(err)}`
      };
    }
  }

  // src/verify/install-game-frame.ts
  var DEFAULT_W = 400;
  var DEFAULT_H = 300;
  async function installGameFrame(el, gp, layout, footprint, host, onLoadFailed, onGameStarted, resolved, preferred, awaitSeed2) {
    if (!gp) {
      fireError(el, "game-load-failed", "game presentation not built", "iframe-load-failed");
      return;
    }
    const slot = gp.getIframeSlot();
    if (!slot) {
      fireError(el, "game-load-failed", "game-frame slot missing", "iframe-load-failed");
      return;
    }
    try {
      host.mount(slot, onLoadFailed, onGameStarted);
    } catch (err) {
      onLoadFailed("iframe-load-failed", err instanceof Error ? err.message : String(err));
      return;
    }
    const iframe = host.getIframe();
    if (!iframe) {
      fireError(el, "game-load-failed", "IframeHost.build() returned no iframe", "iframe-load-failed");
      return;
    }
    applyIframeSize(host, footprint, preferred);
    host.setLayoutContext(layout);
    const seed = awaitSeed2 ? await awaitSeed2() : null;
    host.kickoff(1, seed, resolved?.locale ?? null, resolved?.skin ?? null, resolved?.config ?? null);
  }
  function applyIframeSize(host, footprint, preferred) {
    const dim = (v, pref, dflt) => v === "full" ? "100%" : typeof v === "number" ? v : typeof pref === "number" ? pref : dflt;
    host.setSize(dim(footprint.width, preferred?.width, DEFAULT_W), dim(footprint.height, preferred?.height, DEFAULT_H));
  }

  // src/verify/run-game.ts
  async function runGame(el, state, apiHost) {
    if (!state.config) return;
    try {
      if (shouldVerify(state.config)) {
        await runGameWithVerify(el, state, apiHost);
      } else {
        await runGameOnly(el, state, apiHost);
      }
    } catch (err) {
      if (!state.gameErrored) {
        fireError(el, "verification-failed", err instanceof Error ? err.message : String(err));
      }
    }
  }
  async function resolveGameUrl(el, cfg, apiHost, onError, prefetched = null) {
    const gameId = resolveGameId(cfg);
    let url = cfg.gameSrc;
    let integrity = null;
    if (gameId && !url) {
      const bundle = prefetched && prefetched.gameId === gameId ? prefetched : null;
      if (bundle) {
        if (!bundle.url) {
          fireError(el, "game-load-failed", `Widget bootstrap returned no marketplace bundle for game "${gameId}"`, "resolve-failed");
          onError();
          return { url: null, integrity: null, gameId };
        }
        url = bundle.url;
        integrity = bundle.integrity;
      } else {
        const resolution = await fetchMarketplaceResolution(gameId, apiHost, cfg.sitekey);
        if (!resolution.ok) {
          fireError(el, "game-load-failed", resolution.message, resolution.code);
          onError();
          return { url: null, integrity: null, gameId };
        }
        url = resolution.url;
        integrity = resolution.integrity;
      }
    }
    return { url, integrity, gameId };
  }
  async function runGameWithVerify(el, state, apiHost) {
    const cfg = state.config;
    state.gamePresentation?.setState("verifying");
    const resolved = await resolveGameUrl(el, cfg, apiHost, () => {
      state.gamePresentation?.setState("error");
    }, state.gameBundle ?? null);
    if (resolved.url === null && resolved.gameId !== null) return;
    const { url: gameUrl, integrity, gameId } = resolved;
    const { client, getWrappedToken, awaitSeed: awaitSeed2, isCleared } = setupCapSession(state, apiHost, cfg.sitekey, gameId, state.gateTicket ?? null);
    const dispatchStart = () => emitStart(el, gameId);
    const presentation = state.gamePresentation ?? null;
    if (gameId === null && gameUrl === null) {
      console.warn("[caputchin] game widget mounted without game configured; verification will run but no iframe will mount");
      client.releaseGate({});
      dispatchStart();
      await awaitCapAndEmitPass(el, state, client, getWrappedToken, presentation, isCleared);
      return;
    }
    const passing = awaitCapAndEmitPass(el, state, client, getWrappedToken, presentation, isCleared);
    await awaitSeed2();
    if (isCleared()) {
      dispatchStart();
      await passing;
      return;
    }
    let firstPassSeen = false;
    const host = new IframeHost(gameUrl, integrity, gameId, el, (msg) => {
      if (msg.kind === "game-pass") {
        if (!firstPassSeen) {
          firstPassSeen = true;
          client.releaseGate({ trace: msg.trace, inputTrace: msg.inputTrace });
        }
      } else if (msg.kind === "game-error") {
        const { code, originalCode } = mapIframeErrorCode(msg.code);
        fireError(el, code, msg.message, originalCode);
        state.gameErrored = true;
        client.abortGate(new Error(`game-error: ${msg.code}`));
      }
    }, collectSkinAssetOrigins(state.gameResolved?.skin ?? null));
    state.iframeHost = host;
    await installGameFrame(
      el,
      presentation,
      state.resolvedLayout ?? "inline",
      state.gameFootprint ?? { width: "auto", height: null },
      host,
      (code, message) => {
        fireError(el, "game-load-failed", message, code);
        state.gameErrored = true;
        client.abortGate(new Error(`game-load-failed: ${code}`));
        presentation?.setState("error");
        state.iframeHost = null;
      },
      () => {
        if (state.gameStartedEmitted) return;
        state.gameStartedEmitted = true;
        dispatchStart();
      },
      state.gameResolved ?? null,
      state.gamePreferred ?? null,
      awaitSeed2
    );
    await passing;
  }
  async function runGameOnly(el, state, apiHost) {
    const cfg = state.config;
    const resolved = await resolveGameUrl(el, cfg, apiHost, () => {
      state.gamePresentation?.setState("error");
    }, state.gameBundle ?? null);
    if (resolved.url === null && resolved.gameId !== null) return;
    const { url: gameUrl, integrity, gameId } = resolved;
    if (gameId === null && gameUrl === null) {
      console.warn("[caputchin] game widget mounted without sitekey + without game configured; widget is inert");
      return;
    }
    state.gamePresentation?.setState("verifying");
    const dispatchStart = () => {
      if (state.gameStartedEmitted) return;
      state.gameStartedEmitted = true;
      emitStart(el, gameId);
    };
    const host = new IframeHost(gameUrl, integrity, gameId, el, (msg) => {
      if (msg.kind === "game-pass") {
        state.gamePresentation?.setState("verified");
        emitPass(el, { token: null, score: null, durationMs: null });
      } else if (msg.kind === "game-error") {
        const { code, originalCode } = mapIframeErrorCode(msg.code);
        fireError(el, code, msg.message, originalCode);
        state.gamePresentation?.setState("error");
      }
    }, collectSkinAssetOrigins(state.gameResolved?.skin ?? null));
    state.iframeHost = host;
    await installGameFrame(
      el,
      state.gamePresentation ?? null,
      state.resolvedLayout ?? "inline",
      state.gameFootprint ?? { width: "auto", height: null },
      host,
      (code, message) => {
        fireError(el, "game-load-failed", message, code);
        state.gamePresentation?.setState("error");
        state.iframeHost = null;
      },
      dispatchStart,
      state.gameResolved ?? null,
      state.gamePreferred ?? null
    );
  }

  // src/verify/run-manual.ts
  function runManual(el, state, apiHost) {
    if (!state.config) return;
    const cfg = state.config;
    state.gamePresentation?.setState("verifying");
    const dispatchStart = () => {
      if (state.gameStartedEmitted) return;
      state.gameStartedEmitted = true;
      emitStart(el, null);
    };
    if (!shouldVerify(cfg)) {
      dispatchStart();
      return;
    }
    const { client, getWrappedToken, isCleared } = setupCapSession(state, apiHost, cfg.sitekey, resolveGameId(cfg));
    dispatchStart();
    void awaitCapAndEmitPass(el, state, client, getWrappedToken, state.gamePresentation ?? null, isCleared);
  }

  // src/elements/game.ts
  var CaputchinGame = class extends HTMLElement {
    constructor() {
      super(...arguments);
      __publicField(this, "state", createInitialState());
      /** API host captured at mount so a live reskin can refetch bootstrap. */
      __publicField(this, "apiHost", "");
      /** Last server-resolved WIDGET axes (shell skin/locale), kept so a geometry
       *  re-mount rebuilds the shell at the CURRENT theme instead of bundled. */
      __publicField(this, "lastWidgetResolved", null);
      /** Observed attributes changed since the last microtask flush; coalesced so a
       *  `skin`+`locale` pair set in one tick triggers ONE refetch. */
      __publicField(this, "dirtyAttrs", /* @__PURE__ */ new Set());
      __publicField(this, "reinitScheduled", false);
      /** Monotonic reskin id; only the latest resolved refetch applies. Kept
       *  element-private so it never disturbs the solved token / cap session. */
      __publicField(this, "reskinEpoch", 0);
      __publicField(this, "reskinAbort", null);
      /** OS color-scheme tracker, installed only when `skin` is auto/absent. */
      __publicField(this, "skinMedia", null);
      __publicField(this, "onSkinMediaChange", () => {
        if (!this.skinIsAuto()) return;
        this.markAttrDirty("skin");
      });
    }
    /** @internal Custom Element lifecycle; the browser calls this on mount. */
    connectedCallback() {
      const state = this.state;
      state.connected = true;
      installGameMethods(this, state);
      const inspection = inspectGameConfig(this);
      for (const issue of inspection.issues) {
        fireError(this, "invalid-config", issue.message);
      }
      if (inspection.inert) return;
      state.config = inspection.config;
      const apiHostAttr = this.getAttribute("api-host");
      const apiHost = apiHostAttr && apiHostAttr.trim() ? apiHostAttr.trim() : "https://verify.caputchin.com";
      this.apiHost = apiHost;
      this.shadowRoot ?? this.attachShadow({ mode: "open" });
      const isManual = state.config.trigger === "manual";
      if (!isManual && this.childElementCount > 0) {
        fireError(this, "invalid-config", 'Light DOM children on <caputchin-game> are ignored unless trigger="manual"');
      }
      if (state.config.sitekey === null && state.config.game === null && state.config.games === null) {
        this.completeMount(apiHost, null);
        return;
      }
      if (state.config.trigger !== "manual") this.showLoadingSkeleton();
      const abort = new AbortController();
      state.bootstrapAbort = abort;
      const signals = {
        apiHost,
        sitekey: state.config.sitekey,
        game: state.config.game ?? null,
        games: state.config.games ?? null,
        locale: resolveLocaleSignal(state.config.locale),
        skin: resolveSkinSignal(state.config.skin),
        signal: abort.signal
      };
      void fetchBootstrapResilient(signals).then((result) => {
        if (this.state !== state || !this.state.connected || !this.state.config) return;
        if (result.kind === "gate") {
          const reason = result.error.message || "This site key requires a game to verify, but the server could not supply one.";
          this.completeMount(apiHost, null, {
            code: "gate-unavailable",
            message: reason,
            originalCode: result.error.code
          });
          return;
        }
        if (result.kind === "degrade") {
          console.warn(`[caputchin] bootstrap degraded (${result.reason}); rendering game with bundled defaults`);
          emitDegraded(this, result.reason);
        }
        const bootstrap = result.kind === "ok" ? result.response : null;
        this.state.gameResolved = bootstrap?.game?.resolved ?? null;
        this.state.gamePreferred = bootstrap?.game?.preferred ?? null;
        const requiresGame = bootstrap?.requiresGame === true;
        this.state.requiresGame = requiresGame;
        this.state.gateTicket = bootstrap?.ticket ?? null;
        if (requiresGame && bootstrap?.gameId) {
          this.state.config.game = bootstrap.gameId;
        }
        this.state.gameBundle = bootstrap?.game ? { gameId: this.state.config.game, url: bootstrap.game.url, integrity: bootstrap.game.integrity } : null;
        this.completeMount(apiHost, bootstrap?.widget?.resolved ?? null);
      });
    }
    completeMount(apiHost, resolved, gateError) {
      this.removeLoadingSkeleton();
      const state = this.state;
      if (!state.config) return;
      const shadow = this.shadowRoot;
      if (!shadow) return;
      const isManual = state.config.trigger === "manual";
      const layout = resolveLayout(state.config.layout, state.gamePreferred?.layout ?? null);
      const derivedTrigger = layout === "inline" ? "auto" : "click";
      if (state.requiresGame) {
        if (isManual) {
          fireError(this, "invalid-config", 'trigger="manual" is not supported on a site key that requires a game; use the default game presentation');
        } else if (state.config.gameSrc) {
          const pickedCustomReplayable = state.gameBundle != null && state.gameBundle.url === null;
          if (!pickedCustomReplayable) {
            fireError(this, "invalid-config", "game-src is ignored on a site key that requires a game; the site's installed game is used instead");
            state.config.gameSrc = null;
          }
        }
      }
      this.lastWidgetResolved = resolved;
      const shell = buildWidgetShell(resolved?.locale ?? null);
      if (shell.direction === "rtl") this.setAttribute("dir", "rtl");
      const skin = buildWidgetShellSkin(resolved?.skin ?? null);
      this.setAttribute("data-skin-theme", skin.theme);
      applySkinVars(this, skin.palette);
      const shellConfig = buildWidgetShellConfig(resolved?.config ?? null);
      const { entry, footprint } = resolveGameSizing(state.config, state.gamePreferred ?? null, layout);
      state.resolvedLayout = layout;
      state.gameFootprint = footprint;
      if (layout === "inline" && (state.config.overlayWidth !== "auto" || state.config.overlayHeight !== null)) {
        fireError(this, "invalid-config", "overlay-width / overlay-height are ignored in inline layout; they size the dialog + iframe in modal/fullscreen only");
      }
      const gp = createGamePresentation({
        host: this,
        root: shadow,
        trigger: derivedTrigger,
        width: entry.width,
        height: entry.height,
        footprintWidth: footprint.width,
        footprintHeight: footprint.height,
        layout,
        manual: isManual,
        shell,
        skin,
        shellConfig
      });
      state.gamePresentation = gp;
      gp.mount();
      if (gateError) {
        console.warn(`[caputchin] ${gateError.message}`);
        fireError(this, gateError.code, gateError.message, gateError.originalCode);
        gp.setState("error");
        return;
      }
      state.trigger = createTriggerStrategy(derivedTrigger);
      state.triggerCtx = {
        el: this,
        presentation: gp,
        runVerification: () => {
          if (isManual) {
            runManual(this, state, apiHost);
            return Promise.resolve();
          }
          return runGame(this, state, apiHost);
        },
        capClient: null
      };
      state.trigger.activate(state.triggerCtx);
      this.installSkinMedia();
      if (this.dirtyAttrs.size > 0) this.applyAttrChanges();
    }
    /** Paint a neutral loading skeleton into the empty shadow while the bootstrap
     *  is in flight. Without it a bootstrap-sourced game shows an empty sized box
     *  for the whole (un-aborted) bootstrap window, which reads as broken. Torn
     *  down by `removeLoadingSkeleton` the moment `completeMount` paints the real
     *  presentation. No-op if one is already present. */
    showLoadingSkeleton() {
      const shadow = this.shadowRoot;
      if (!shadow || shadow.querySelector('[part="loading"]')) return;
      this.applyLoadingHostSize();
      const style = document.createElement("style");
      style.dataset["cptLoading"] = "";
      style.textContent = LOADING_SKELETON_CSS;
      const box = document.createElement("div");
      box.setAttribute("part", "loading");
      box.setAttribute("aria-hidden", "true");
      const layout = this.state.config?.layout;
      if (layout === "modal" || layout === "fullscreen") box.dataset["overlay"] = "";
      const w = this.state.config?.width;
      if (w === "full" || typeof w === "number") box.dataset["sized"] = "";
      const spinner = document.createElement("div");
      spinner.setAttribute("part", "loading-spinner");
      box.appendChild(spinner);
      shadow.append(style, box);
    }
    /** Provisionally size the host from the embed's width/height attributes so the
     *  loading skeleton occupies the eventual box. Mirrors the full / pixel sizing
     *  the resolved presentation applies later; an `auto` width or unset height is
     *  left alone so the skeleton's min-size fallback governs that axis. */
    applyLoadingHostSize() {
      const config = this.state.config;
      if (!config) return;
      const fullW = config.width === "full";
      const fullH = config.height === "full" && config.layout === "inline";
      const pxW = typeof config.width === "number" ? config.width : null;
      const pxH = typeof config.height === "number" ? config.height : null;
      if (fullW || fullH || pxW !== null || pxH !== null) this.style.display = "block";
      if (fullW) this.style.width = "100%";
      else if (pxW !== null) this.style.width = `${pxW}px`;
      if (fullH) this.style.height = "100%";
      else if (pxH !== null) this.style.height = `${pxH}px`;
    }
    /** Remove the loading skeleton (box + its scoped style). Safe to call when
     *  none is present. */
    removeLoadingSkeleton() {
      const shadow = this.shadowRoot;
      if (!shadow) return;
      shadow.querySelectorAll('[part="loading"],style[data-cpt-loading]').forEach((n) => n.remove());
    }
    /** @internal Custom Element lifecycle; the browser calls this on removal. */
    disconnectedCallback() {
      const s = this.state;
      s.bootstrapAbort?.abort();
      this.teardownSkinMedia();
      this.reskinAbort?.abort();
      this.reskinAbort = null;
      this.dirtyAttrs.clear();
      this.reinitScheduled = false;
      this.removeLoadingSkeleton();
      s.trigger?.deactivate();
      s.gamePresentation?.unmount();
      s.capClient?.dispose();
      s.iframeHost?.dispose();
      s.config = null;
      s.bootstrapAbort = null;
      s.trigger = null;
      s.triggerCtx = null;
      s.capClient = null;
      s.iframeHost = null;
      s.gamePresentation = null;
      s.widgetId = null;
      s.lockedToken = null;
      s.gameStartedEmitted = false;
      s.gameErrored = false;
      s.firstPassFired = false;
      s.connected = false;
      this.state = createInitialState();
    }
    /** @internal Custom Element lifecycle; the browser calls this on attr change. */
    attributeChangedCallback(name, oldValue, newValue) {
      if (!this.state.connected || oldValue === newValue) return;
      if (name === "skin" || name === "locale" || name === "width" || name === "height" || name === "overlay-width" || name === "overlay-height") {
        this.markAttrDirty(name);
        return;
      }
      console.warn(`[caputchin] attribute "${name}" changed after mount and was ignored; remove and re-add the element to apply it`);
    }
    /** Queue an attribute for the next microtask flush so several attrs set in
     *  one tick coalesce into a single refetch. */
    markAttrDirty(name) {
      this.dirtyAttrs.add(name);
      if (this.reinitScheduled) return;
      this.reinitScheduled = true;
      queueMicrotask(() => this.applyAttrChanges());
    }
    /** `skin` is auto when the attribute is missing, empty, or literally `auto`. */
    skinIsAuto() {
      const attr = this.getAttribute("skin");
      if (attr === null) return true;
      const t = attr.trim().toLowerCase();
      return t === "" || t === "auto";
    }
    installSkinMedia() {
      if (this.skinMedia || typeof window === "undefined" || typeof window.matchMedia !== "function") return;
      if (!this.skinIsAuto()) return;
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", this.onSkinMediaChange);
      this.skinMedia = mq;
    }
    teardownSkinMedia() {
      this.skinMedia?.removeEventListener("change", this.onSkinMediaChange);
      this.skinMedia = null;
    }
    /** Keep the OS tracker in sync when `skin` flips between explicit and auto at
     *  runtime: install when it becomes auto, tear down when it becomes explicit. */
    syncSkinMedia() {
      if (this.skinIsAuto()) this.installSkinMedia();
      else this.teardownSkinMedia();
    }
    applyAttrChanges() {
      this.reinitScheduled = false;
      if (!this.state.connected || !this.state.config) {
        this.dirtyAttrs.clear();
        return;
      }
      if (!this.state.gamePresentation) return;
      const dirty = new Set(this.dirtyAttrs);
      this.dirtyAttrs.clear();
      if (dirty.size === 0) return;
      if (dirty.has("skin")) this.syncSkinMedia();
      if (dirty.has("skin") || dirty.has("locale")) this.reskinRefetch();
      if (dirty.has("width") || dirty.has("height") || dirty.has("overlay-width") || dirty.has("overlay-height")) {
        this.remountGame();
      }
    }
    /** Re-inspect the game config from the current attributes, then re-pin the
     *  server-picked gated gameId. A gated key carries NO `game` attribute (the
     *  server picks it at bootstrap and stashes it in gameBundle), so an
     *  attribute-only re-inspection would drop it; the game-load path reads
     *  `config.game` (`resolveGameId`), so a later kickoff (an overlay opened after
     *  a live reskin, or a geometry re-mount) would otherwise go gameless / re-pick
     *  from `games` and the gated round would fail closed. Returns null when the
     *  re-inspected config is inert. */
    reinspectGameConfig() {
      const inspection = inspectGameConfig(this);
      if (inspection.inert || !inspection.config) return null;
      const cfg = inspection.config;
      if (this.state.requiresGame && this.state.gameBundle?.gameId != null) {
        cfg.game = this.state.gameBundle.gameId;
      }
      return cfg;
    }
    /** Live-resize the game by re-mounting it at the new geometry: tear down the
     *  shell + iframe + cap session and re-run the mount, which recomputes sizing
     *  from the new attributes and recreates the iframe at the new footprint. The
     *  game restarts (accepted for a cosmetic resize). A CAP-VERIFIED game
     *  (`lockedToken` set, i.e. the cap+game gate released after a solve) is left
     *  alone: re-mounting would re-challenge a solved verification. A no-verify /
     *  game-only / manual mount has no token to protect, so it restarts like any
     *  resize (and may re-emit `pass` on replay). No refetch (geometry does not
     *  feed bootstrap); the shell rebuilds at the remembered theme. */
    remountGame() {
      const state = this.state;
      if (!state.config || !state.gamePresentation) return;
      if (state.lockedToken !== null) return;
      const cfg = this.reinspectGameConfig();
      if (!cfg) return;
      state.trigger?.deactivate();
      state.gamePresentation?.unmount();
      state.iframeHost?.dispose();
      state.capClient?.dispose();
      state.gamePresentation = null;
      state.iframeHost = null;
      state.trigger = null;
      state.triggerCtx = null;
      state.capClient = null;
      state.widgetId = null;
      state.gameStartedEmitted = false;
      state.gameErrored = false;
      state.firstPassFired = false;
      state.config = cfg;
      this.completeMount(this.apiHost, this.lastWidgetResolved);
    }
    /** Refetch bootstrap with the new signals, then re-theme the shell in place.
     *  The embedded game's own theme rides the NEXT kickoff (state.gameResolved is
     *  refreshed here); a live in-progress iframe is left untouched (D2). On any
     *  non-`ok` result we keep the current theme (no flash to bundled). */
    reskinRefetch() {
      const state = this.state;
      if (!state.config) return;
      if (state.config.sitekey === null && state.config.game === null && state.config.games === null) return;
      const cfg = this.reinspectGameConfig();
      if (!cfg) return;
      state.config = cfg;
      this.reskinEpoch += 1;
      const epoch = this.reskinEpoch;
      this.reskinAbort?.abort();
      const abort = new AbortController();
      this.reskinAbort = abort;
      void fetchBootstrap({
        apiHost: this.apiHost,
        sitekey: state.config.sitekey,
        game: state.config.game ?? null,
        games: state.config.games ?? null,
        locale: resolveLocaleSignal(state.config.locale),
        skin: resolveSkinSignal(state.config.skin),
        signal: abort.signal
      }).then((result) => {
        if (epoch !== this.reskinEpoch || this.state !== state || !this.state.connected || !this.state.config) return;
        if (result.kind !== "ok") return;
        this.applyResolvedAxes(result.response);
      });
    }
    applyResolvedAxes(response) {
      this.lastWidgetResolved = response.widget?.resolved ?? this.lastWidgetResolved;
      const shell = buildWidgetShell(response.widget?.resolved?.locale ?? null);
      const skin = buildWidgetShellSkin(response.widget?.resolved?.skin ?? null);
      this.setAttribute("data-skin-theme", skin.theme);
      if (shell.direction === "rtl") this.setAttribute("dir", "rtl");
      else this.removeAttribute("dir");
      applySkinVars(this, skin.palette);
      this.state.gamePresentation?.applySkin(skin);
      this.state.gamePresentation?.applyLocale(shell);
      this.state.gameResolved = response.game?.resolved ?? this.state.gameResolved;
    }
  };
  /** @internal Custom Element observed attributes. */
  __publicField(CaputchinGame, "observedAttributes", ["sitekey", "no-verify", "trigger", "width", "height", "overlay-width", "overlay-height", "game", "games", "game-src", "layout", "locale", "skin", "api-host"]);
  function resolveLayout(attr, preferred) {
    if (attr !== "auto") return attr;
    return preferred !== null && isLayout(preferred) ? preferred : "inline";
  }
  var LOADING_SKELETON_CSS = [
    '[part="loading"]{',
    "display:flex;align-items:center;justify-content:center;box-sizing:border-box;",
    "width:100%;height:100%;min-width:180px;min-height:120px;",
    "background:var(--cpt-skin-surface_bg,#f4f4f5);",
    "border:1px solid var(--cpt-skin-border,#e4e4e7);border-radius:0.5rem;",
    "}",
    // Overlay (modal / fullscreen) entry: compact, checkbox-entry-sized placeholder
    // instead of the tall game-frame box, so it matches the small entry it becomes.
    // Auto width: hug content with the SAME min-width floor the real normal
    // checkbox uses (min(18rem,100%) in simple.ts), so an auto entry's skeleton
    // doesn't pop wider on load.
    '[part="loading"][data-overlay]{width:fit-content;height:auto;min-width:min(18rem,100%);min-height:3rem}',
    // Pinned width (full / pixel): the host was reserved at that width by
    // applyLoadingHostSize - fill it so the skeleton spans the same box the entry
    // will occupy (kills the narrow-flash that pops to full / pixel width on load).
    '[part="loading"][data-overlay][data-sized]{width:100%}',
    '[part="loading"][data-overlay] [part="loading-spinner"]{width:22px;height:22px}',
    '[part="loading-spinner"]{',
    "width:28px;height:28px;border-radius:50%;",
    "border:3px solid var(--cpt-skin-border,#d4d4d8);",
    "border-top-color:var(--cpt-skin-text,#71717a);",
    "animation:cpt-skel-spin 0.8s linear infinite;",
    "}",
    "@keyframes cpt-skel-spin{to{transform:rotate(360deg)}}",
    '@media (prefers-reduced-motion:reduce){[part="loading-spinner"]{animation:none}}'
  ].join("");

  // src/register.ts
  function defineCaputchinElements() {
    if (typeof window === "undefined") return;
    const registry = window.customElements;
    if (!registry) {
      throw new Error(
        "[caputchin] Custom Elements are not supported in this browser; <caputchin-widget> and <caputchin-game> cannot be registered."
      );
    }
    installCustomFetch();
    if (!registry.get("caputchin-widget")) {
      registry.define("caputchin-widget", CaputchinWidget);
    }
    if (!registry.get("caputchin-game")) {
      registry.define("caputchin-game", CaputchinGame);
    }
  }

  // src/entries/widget.ts
  defineCaputchinElements();
})();
