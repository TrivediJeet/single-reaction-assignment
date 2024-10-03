/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
const t$1 = globalThis, e$1 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), o$2 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$1 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$2.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$2.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$3 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s), i$1 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$3(o2, t2, s);
}, S$1 = (s2, o2) => {
  if (e$1) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$1.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$1 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$3(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i, defineProperty: e, getOwnPropertyDescriptor: r$2, getOwnPropertyNames: h$2, getOwnPropertySymbols: o$1, getPrototypeOf: n$2 } = Object, a = globalThis, c$1 = a.trustedTypes, l = c$1 ? c$1.emptyScript : "", p = a.reactiveElementPolyfillSupport, d = (t2, s2) => t2, u = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$2 = (t2, s2) => !i(t2, s2), y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f$2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = y) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), r2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== r2 && e(this.prototype, t2, r2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: h2 } = r$2(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get() {
      return e2 == null ? void 0 : e2.call(this);
    }, set(s3) {
      const r2 = e2 == null ? void 0 : e2.call(this);
      h2.call(this, s3), this.requestUpdate(t2, r2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t3 = this.properties, s2 = [...h$2(t3), ...o$1(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$EC(t2, s2) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const r2 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u).toAttribute(s2, i2.type);
      this._$Em = t2, null == r2 ? this.removeAttribute(e2) : this.setAttribute(e2, r2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a2;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), r2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u;
      this._$Em = e2, this[e2] = r2.fromAttribute(s2, t3.type), this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2) {
    if (void 0 !== t2) {
      if (i2 ?? (i2 = this.constructor.getPropertyOptions(t2)), !(i2.hasChanged ?? f$2)(this[t2], s2)) return;
      this.P(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t2, s2, i2) {
    this._$AL.has(t2) || this._$AL.set(t2, s2), true === i2.reflect && this._$Em !== t2 && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t2);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) true !== i2.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i2);
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (s3) {
      throw t2 = false, this._$EU(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t3) => this._$EC(t3, this[t3]))), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p == null ? void 0 : p({ ReactiveElement: b }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = globalThis, c = n$1.trustedTypes, h$1 = c ? c.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, f$1 = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, m = "?" + v, _ = `<${m}>`, w = document, lt = () => w.createComment(""), st = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, g = Array.isArray, $ = (t2) => g(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), x = "[ 	\n\f\r]", T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, E = /-->/g, k = />/g, O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), S = /'/g, j = /"/g, M = /^(?:script|style|textarea|title)$/i, P = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), ke = P(1), R = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), V = /* @__PURE__ */ new WeakMap(), I = w.createTreeWalker(w, 129);
function N(t2, i2) {
  if (!g(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== h$1 ? h$1.createHTML(i2) : i2;
}
const U = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let h2, o2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", n3 = T;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let r2, l2, c2 = -1, a2 = 0;
    for (; a2 < s3.length && (n3.lastIndex = a2, l2 = n3.exec(s3), null !== l2); ) a2 = n3.lastIndex, n3 === T ? "!--" === l2[1] ? n3 = E : void 0 !== l2[1] ? n3 = k : void 0 !== l2[2] ? (M.test(l2[2]) && (h2 = RegExp("</" + l2[2], "g")), n3 = O) : void 0 !== l2[3] && (n3 = O) : n3 === O ? ">" === l2[0] ? (n3 = h2 ?? T, c2 = -1) : void 0 === l2[1] ? c2 = -2 : (c2 = n3.lastIndex - l2[2].length, r2 = l2[1], n3 = void 0 === l2[3] ? O : '"' === l2[3] ? j : S) : n3 === j || n3 === S ? n3 = O : n3 === E || n3 === k ? n3 = T : (n3 = O, h2 = void 0);
    const u2 = n3 === O && t2[i3 + 1].startsWith("/>") ? " " : "";
    o2 += n3 === T ? s3 + _ : c2 >= 0 ? (e2.push(r2), s3.slice(0, c2) + f$1 + s3.slice(c2) + v + u2) : s3 + v + (-2 === c2 ? i3 : u2);
  }
  return [N(t2, o2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class B {
  constructor({ strings: t2, _$litType$: i2 }, s2) {
    let e2;
    this.parts = [];
    let h2 = 0, o2 = 0;
    const n3 = t2.length - 1, r2 = this.parts, [l2, a2] = U(t2, i2);
    if (this.el = B.createElement(l2, s2), I.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (e2 = I.nextNode()) && r2.length < n3; ) {
      if (1 === e2.nodeType) {
        if (e2.hasAttributes()) for (const t3 of e2.getAttributeNames()) if (t3.endsWith(f$1)) {
          const i3 = a2[o2++], s3 = e2.getAttribute(t3).split(v), n4 = /([.?@])?(.*)/.exec(i3);
          r2.push({ type: 1, index: h2, name: n4[2], strings: s3, ctor: "." === n4[1] ? Y : "?" === n4[1] ? Z : "@" === n4[1] ? q : G }), e2.removeAttribute(t3);
        } else t3.startsWith(v) && (r2.push({ type: 6, index: h2 }), e2.removeAttribute(t3));
        if (M.test(e2.tagName)) {
          const t3 = e2.textContent.split(v), i3 = t3.length - 1;
          if (i3 > 0) {
            e2.textContent = c ? c.emptyScript : "";
            for (let s3 = 0; s3 < i3; s3++) e2.append(t3[s3], lt()), I.nextNode(), r2.push({ type: 2, index: ++h2 });
            e2.append(t3[i3], lt());
          }
        }
      } else if (8 === e2.nodeType) if (e2.data === m) r2.push({ type: 2, index: h2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = e2.data.indexOf(v, t3 + 1)); ) r2.push({ type: 7, index: h2 }), t3 += v.length - 1;
      }
      h2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = w.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function z(t2, i2, s2 = t2, e2) {
  var _a2, _b;
  if (i2 === R) return i2;
  let h2 = void 0 !== e2 ? (_a2 = s2.o) == null ? void 0 : _a2[e2] : s2.l;
  const o2 = st(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2.o ?? (s2.o = []))[e2] = h2 : s2.l = h2), void 0 !== h2 && (i2 = z(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class F {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? w).importNode(i2, true);
    I.currentNode = e2;
    let h2 = I.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new et(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new K(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h2 = I.nextNode(), o2++);
    }
    return I.currentNode = w, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class et {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this.v;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this.v = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = z(this, t2, i2), st(t2) ? t2 === D || null == t2 || "" === t2 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t2 !== this._$AH && t2 !== R && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : $(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(w.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a2;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = B.createElement(N(s2.h, s2.h[0]), this.options)), s2);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new F(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = V.get(t2.strings);
    return void 0 === i2 && V.set(t2.strings, i2 = new B(t2)), i2;
  }
  k(t2) {
    g(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new et(this.O(lt()), this.O(lt()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this.v = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class G {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = D;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = z(this, t2, i2, 0), o2 = !st(t2) || t2 !== this._$AH && t2 !== R, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = z(this, e3[s2 + n3], i2, n3), r2 === R && (r2 = this._$AH[n3]), o2 || (o2 = !st(r2) || r2 !== this._$AH[n3]), r2 === D ? t2 = D : t2 !== D && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class Y extends G {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === D ? void 0 : t2;
  }
}
class Z extends G {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== D);
  }
}
class q extends G {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = z(this, t2, i2, 0) ?? D) === R) return;
    const s2 = this._$AH, e2 = t2 === D && s2 !== D || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== D && (s2 === D || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class K {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    z(this, t2);
  }
}
const Re = n$1.litHtmlPolyfillSupport;
Re == null ? void 0 : Re(B, et), (n$1.litHtmlVersions ?? (n$1.litHtmlVersions = [])).push("3.2.0");
const Q = (t2, i2, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h2 = new et(i2.insertBefore(lt(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class h extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t2 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const e2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this.o = Q(e2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this.o) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this.o) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return R;
  }
}
h._$litElement$ = true, h["finalized"] = true, (_a = globalThis.litElementHydrateSupport) == null ? void 0 : _a.call(globalThis, { LitElement: h });
const f = globalThis.litElementPolyfillSupport;
f == null ? void 0 : f({ LitElement: h });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f$2 }, r$1 = (t2 = o, e2, r2) => {
  const { kind: n3, metadata: i2 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n4, t2);
    }, init(e3) {
      return void 0 !== e3 && this.P(o2, void 0, t2), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n4, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$1(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, r2 ? { ...t3, wrapped: true } : t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return n2({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function nn(n3, r2, t2) {
  return n3 ? r2(n3) : t2 == null ? void 0 : t2(n3);
}
const unicodeEmojiMapping = {
  Happy: "😀",
  "Heart Eyes": "😍",
  Joy: "🤣",
  Celebrate: "🎉",
  Thinking: "🤔",
  Indifferent: "😐",
  Embarrassed: "😳",
  Sad: "😢",
  Wow: "😮",
  Shocked: "😱",
  Distressed: "😫",
  Pleading: "🥺",
  "Thumbs Up": "👍",
  "Thumbs Down": "👎",
  "Thank you": "🙏",
  Wave: "👋",
  "Raised Hands": "🙌",
  Strong: "💪",
  Eyes: "👀",
  Rainbow: "🌈",
  Luck: "🍀",
  Love: "❤️",
  Sparkles: "✨",
  Unicorn: "🦄",
  Fire: "🔥",
  Money: "💵",
  Idea: "💡",
  Done: "✅",
  "Not Done": "❌",
  Caution: "⚠️"
};
const reactions = new Map(
  Object.entries(unicodeEmojiMapping).map(([name, unicode]) => [
    name,
    {
      unicode,
      count: 0,
      reacted: false
    }
  ])
);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let EmojiPicker = class extends h {
  constructor() {
    super(...arguments);
    this.count = 0;
    this.emojiList = Object.entries(unicodeEmojiMapping);
  }
  _onEmojiSelected(name) {
    this.dispatchEvent(
      new CustomEvent("emoji-selected", {
        detail: { name },
        bubbles: true,
        composed: true
      })
    );
  }
  render() {
    return ke`
      <div class="emoji-grid">
        ${this.emojiList.map(
      ([name, emoji]) => ke`
            <span
              class="emoji"
              title="${name}"
              @click=${() => this._onEmojiSelected(name)}
            >
              ${emoji}
            </span>
          `
    )}
      </div>
    `;
  }
};
EmojiPicker.styles = i$1`
    :host {
      position: relative;
    }
    .emoji-grid {
      position: absolute;
      bottom: 0;
      max-width: 264px;
      min-width: 192px;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
      gap: 12px;
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 2px;
      border: 1px solid #cccccc;
    }
    .emoji {
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .emoji:hover {
      background-color: #d4eff9;
    }
  `;
__decorateClass$3([
  n2({ type: Number })
], EmojiPicker.prototype, "count", 2);
__decorateClass$3([
  r()
], EmojiPicker.prototype, "emojiList", 2);
EmojiPicker = __decorateClass$3([
  t("emoji-picker")
], EmojiPicker);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
let PickerSvg = class extends h {
  constructor() {
    super(...arguments);
    this.count = 0;
  }
  render() {
    return ke`
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_19_5557)">
          <path
            class="update-fill"
            d="M13.75 0.75C13.75 0.473858 13.5261 0.25 13.25 0.25C12.9739 0.25 12.75 0.473858 12.75 0.75V2.5L11 2.5C10.7239 2.5 10.5 2.72386 10.5 3C10.5 3.27614 10.7239 3.5 11 3.5L12.75 3.5V5.25C12.75 5.52614 12.9739 5.75 13.25 5.75C13.5261 5.75 13.75 5.52614 13.75 5.25V3.5L15.5 3.5C15.7761 3.5 16 3.27614 16 3C16 2.72386 15.7761 2.5 15.5 2.5L13.75 2.5V0.75Z"
            fill="black"
          />
          <path
            d="M9.76241 1.09861C10.0358 1.18529 10.0912 1.55158 9.95225 1.80247C9.84264 2.00041 9.60941 2.13285 9.3931 2.06649C8.79411 1.88274 8.15839 1.78382 7.5 1.78382C3.93464 1.78382 1.03382 4.68464 1.03382 8.25C1.03382 11.8154 3.93464 14.7162 7.5 14.7162C11.0654 14.7162 13.9662 11.8154 13.9662 8.25C13.9662 7.77212 13.9141 7.30618 13.8152 6.85757C13.7632 6.62157 13.9408 6.38517 14.1663 6.29838C14.421 6.20037 14.7467 6.29477 14.8082 6.56067C14.9337 7.10379 15 7.66929 15 8.25C15 12.3856 11.6356 15.75 7.5 15.75C3.36441 15.75 0 12.3856 0 8.25C0 4.11441 3.36441 0.75 7.5 0.75C8.28813 0.75 9.04825 0.872187 9.76241 1.09861Z"
            fill="black"
          />
          <path
            class="update-fill"
            d="M4.93952 6.67197C5.35334 6.67197 5.6892 6.33637 5.6892 5.92229C5.6892 5.50845 5.35336 5.17261 4.93952 5.17261C4.52544 5.17261 4.18984 5.50846 4.18984 5.92229C4.18984 6.33636 4.52545 6.67197 4.93952 6.67197Z"
            fill="black"
          />
          <path
            class="update-fill"
            d="M10.8101 5.92229C10.8101 6.33637 10.4743 6.67197 10.0605 6.67197C9.64638 6.67197 9.31077 6.33636 9.31077 5.92229C9.31077 5.50846 9.64637 5.17261 10.0605 5.17261C10.4743 5.17261 10.8101 5.50845 10.8101 5.92229Z"
            fill="black"
          />
          <path
            class="update-fill"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.50001 12.6892C5.29618 12.6892 3.50366 10.8966 3.50366 8.69281C3.50366 8.40747 3.73497 8.1759 4.02057 8.1759H10.9792C11.2648 8.1759 11.4961 8.40747 11.4961 8.69281C11.4961 10.8966 9.70362 12.6892 7.50001 12.6892ZM4.58258 9.20971C4.82795 10.5976 6.04299 11.6553 7.50003 11.6553C8.95706 11.6553 10.1719 10.5976 10.4172 9.20971H4.58258ZM10.4779 9.15839C10.3441 10.0173 9.84632 10.7573 9.14783 11.2153C9.83234 10.7665 10.324 10.0467 10.4694 9.20971C10.4724 9.19264 10.4752 9.17556 10.4779 9.15839Z"
            fill="black"
          />
          <path
            class="update-stroke"
            d="M4.58258 8.70971H4.0037C4.00368 8.70408 4.00366 8.69844 4.00366 8.69281C4.00366 8.68958 4.00422 8.68774 4.00479 8.6864C4.00549 8.68473 4.00674 8.68274 4.00863 8.68084C4.01053 8.67894 4.0125 8.67771 4.01415 8.67701C4.01547 8.67646 4.01731 8.6759 4.02057 8.6759H10.9792C10.9825 8.6759 10.9843 8.67646 10.9856 8.67701C10.9864 8.67733 10.9872 8.67776 10.9881 8.67831C10.9891 8.67897 10.9901 8.67981 10.9912 8.68084C10.9931 8.68274 10.9943 8.68473 10.995 8.6864C10.9956 8.68774 10.9961 8.68958 10.9961 8.69281C10.9961 8.69844 10.9961 8.70408 10.9961 8.70971H10.4172H4.58258ZM7.50001 12.1892C5.61492 12.1892 4.07317 10.6891 4.00595 8.82008L4.09022 9.29676C4.37701 10.919 5.79584 12.1553 7.50003 12.1553C8.19874 12.1553 8.84944 11.9475 9.39381 11.5905L9.41219 11.6185C8.86232 11.9792 8.20518 12.1892 7.50001 12.1892ZM10.9938 8.82026C10.9888 8.95995 10.9755 9.09757 10.9545 9.23266L10.9218 9.22757L10.9938 8.82026ZM7.5 1.25C8.20277 1.25 8.88094 1.35398 9.52037 1.54709C9.51857 1.55264 9.51658 1.55711 9.51484 1.56026C9.51217 1.56508 9.5078 1.57104 9.50196 1.57667C9.50187 1.57676 9.50178 1.57684 9.5017 1.57693C8.86697 1.3862 8.19482 1.28382 7.5 1.28382C3.6585 1.28382 0.533818 4.4085 0.533818 8.25C0.533818 12.0915 3.6585 15.2162 7.5 15.2162C11.3415 15.2162 14.4662 12.0915 14.4662 8.25C14.4662 7.74921 14.413 7.26011 14.3118 6.78823C14.3145 6.78546 14.3177 6.78252 14.3214 6.77955C14.3288 6.77364 14.336 6.76941 14.3419 6.7667C14.4454 7.24455 14.5 7.74077 14.5 8.25C14.5 12.1094 11.3595 15.25 7.5 15.25C3.64055 15.25 0.5 12.1094 0.5 8.25C0.5 4.39055 3.64055 1.25 7.5 1.25ZM5.1892 5.92229C5.1892 6.06011 5.07731 6.17197 4.93952 6.17197C4.80159 6.17197 4.68984 6.06021 4.68984 5.92229C4.68984 5.78449 4.80169 5.67261 4.93952 5.67261C5.07721 5.67261 5.1892 5.78459 5.1892 5.92229ZM10.3101 5.92229C10.3101 6.06011 10.1982 6.17197 10.0605 6.17197C9.92252 6.17197 9.81077 6.06021 9.81077 5.92229C9.81077 5.78449 9.92262 5.67261 10.0605 5.67261C10.1981 5.67261 10.3101 5.78459 10.3101 5.92229Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_19_5557"
            x="-4"
            y="0.25"
            width="24"
            height="23.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_19_5557"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_19_5557"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    `;
  }
};
PickerSvg.styles = i$1`
    :host {
      display: contents;
    }
    svg {
      margin-left: 1px;
    }
    svg:hover .update-stroke {
      stroke: #027baf;
    }
    svg:hover .update-fill {
      fill: #027baf;
    }
  `;
__decorateClass$2([
  n2({ type: Number })
], PickerSvg.prototype, "count", 2);
PickerSvg = __decorateClass$2([
  t("picker-svg")
], PickerSvg);
function formatCount(count) {
  const ranges = [
    { divider: 1, suffix: "" },
    { divider: 1e3, suffix: "K" },
    { divider: 1e6, suffix: "M" }
    // Add more ranges for B (billions), T (trillions), etc. if needed
  ];
  const range = ranges.find((range2) => count < range2.divider * 1e3);
  if (range) {
    let formattedCount = (count / range.divider).toFixed(
      count % (range.divider * 1e3) === 0 ? 0 : 1
    );
    formattedCount = formattedCount.replace(/\.0$/, "");
    if (formattedCount.startsWith("1000") && range.suffix === "K") {
      formattedCount = "1";
      return formattedCount + "M";
    }
    return formattedCount + range.suffix;
  }
  return "";
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let ReactionPills = class extends h {
  constructor() {
    super(...arguments);
    this.reactions = {};
  }
  _onTogglePicker() {
    this.dispatchEvent(
      new CustomEvent("toggle-picker", {
        bubbles: true,
        composed: true
      })
    );
  }
  _onReactionSelected(name) {
    this.dispatchEvent(
      new CustomEvent("reaction-selected", {
        detail: { name },
        bubbles: true,
        composed: true
      })
    );
  }
  render() {
    return ke`
      <div class="container">
        <div class="emoji-pill picker" @click=${this._onTogglePicker}>
          <picker-svg></picker-svg>
        </div>
        ${Array.from(this.reactions.entries()).map(
      ([name, reaction]) => ke`
              <div
                class="emoji-pill"
                @click=${() => this._onReactionSelected(name)}
              >
                <span class="emoji"> ${reaction.unicode} </span>
                <span class="count"> ${formatCount(reaction.count)} </span>
              </div>
            `
    )}
      </div>
    `;
  }
};
ReactionPills.styles = i$1`
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #cccccc;
      padding: 16px;
      font-size: 12px;
    }
    .emoji-pill {
      user-select: none;
      display: grid;
      grid-template-columns: auto auto;
      align-items: end;
      gap: 4px;
      justify-content: center;
      padding: 8px 12px;
      border: 1px solid #cccccc;
      border-radius: 80px;
      background-color: #fafafa;
    }
    .emoji-pill.picker {
        gap: 0;
        grid-template-columns: auto;
    }
    .emoji-pill:active {
      background-color: #e9f7fc;
      border-color: #027baf;
      color: #027baf;
    }
    .emoji-pill:hover {
      color: red;
      background-color: #ffffff;
      cursor: pointer;
    }
    .emoji {
      display: inline-block;
    }
    .count {
      color: #484848;
    }
  `;
__decorateClass$1([
  n2({ attribute: false })
], ReactionPills.prototype, "reactions", 2);
ReactionPills = __decorateClass$1([
  t("reaction-pills")
], ReactionPills);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let SingleReaction = class extends h {
  constructor() {
    super(...arguments);
    this.reactions = this._initializeReactions();
    this._showEmojiPicker = false;
  }
  // TODO: Elegant approach to consolidate with data returned from server
  _initializeReactions() {
    return reactions;
  }
  _togglePicker() {
    this._showEmojiPicker = !this._showEmojiPicker;
  }
  render() {
    const filteredReactions = new Map(
      Array.from(this.reactions.entries()).filter(
        ([_2, reaction]) => reaction.count > 0
      )
    );
    return ke`
        ${nn(
      this._showEmojiPicker,
      () => ke`
            <emoji-picker
              @emoji-selected=${this._onEmojiSelected}
            ></emoji-picker>
          `
    )}

        <reaction-pills
          .reactions=${filteredReactions}
          @toggle-picker=${this._togglePicker}
          @reaction-selected=${this._onReactionSelected}
        ></reaction-pills>
    `;
  }
  _onEmojiSelected(event) {
    const { name } = event.detail;
    this._updateReactionCount(name);
    this._togglePicker();
  }
  _onReactionSelected(event) {
    const { name } = event.detail;
    this._updateReactionCount(name);
  }
  _updateReactionCount(name) {
    this.reactions = new Map(this.reactions);
    const mapEntry = this.reactions.get(name);
    if (mapEntry) {
      const newCount = mapEntry.reacted ? mapEntry.count - 1 : mapEntry.count + 1;
      this.reactions.set(name, {
        ...mapEntry,
        count: newCount,
        reacted: !mapEntry.reacted
      });
    }
  }
};
SingleReaction.styles = i$1`
    .container {
      display: inline-block;
    }
  `;
__decorateClass([
  n2({ attribute: false })
], SingleReaction.prototype, "reactions", 2);
__decorateClass([
  r()
], SingleReaction.prototype, "_showEmojiPicker", 2);
SingleReaction = __decorateClass([
  t("single-reaction")
], SingleReaction);
export {
  SingleReaction
};
