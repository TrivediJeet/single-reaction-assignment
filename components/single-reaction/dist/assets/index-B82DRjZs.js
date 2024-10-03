(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,K=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),ee=new WeakMap;let de=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(t,e))}return e}toString(){return this.cssText}};const ye=r=>new de(typeof r=="string"?r:r+"",void 0,G),B=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new de(t,r,G)},Ce=(r,e)=>{if(K)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=T.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},te=K?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ye(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:be,getOwnPropertyDescriptor:Ee,getOwnPropertyNames:Se,getOwnPropertySymbols:we,getPrototypeOf:Pe}=Object,_=globalThis,se=_.trustedTypes,xe=se?se.emptyScript:"",V=_.reactiveElementPolyfillSupport,w=(r,e)=>r,N={toAttribute(r,e){switch(e){case Boolean:r=r?xe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},J=(r,e)=>!Ae(r,e),ie={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:J};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&be(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=Ee(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,i=[...Se(t),...we(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(te(s))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ce(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:N).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:N;this._$Em=s,this[s]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??J)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,V==null||V({ReactiveElement:A}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,L=P.trustedTypes,re=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+$,Oe=`<${ue}>`,y=document,x=()=>y.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,je=r=>Q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,ne=/>/g,g=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,fe=/^(?:script|style|textarea|title)$/i,Me=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),C=Me(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ce=new WeakMap,v=y.createTreeWalker(y,129);function $e(r,e){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Ue=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=S;for(let l=0;l<t;l++){const a=r[l];let h,p,c=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=oe:p[1]!==void 0?n=ne:p[2]!==void 0?(fe.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?g:p[3]==='"'?le:ae):n===le||n===ae?n=g:n===oe||n===ne?n=S:(n=g,s=void 0);const f=n===g&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+Oe:c>=0?(i.push(h),a.slice(0,c)+pe+a.slice(c)+$+f):a+$+(c===-2?l:f)}return[$e(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class j{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[h,p]=Ue(e,t);if(this.el=j.createElement(h,i),v.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(pe)){const u=p[n++],f=s.getAttribute(c).split($),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:H[2],strings:f,ctor:H[1]==="."?Re:H[1]==="?"?He:H[1]==="@"?Te:I}),s.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(fe.test(s.tagName)){const c=s.textContent.split($),u=c.length-1;if(u>0){s.textContent=L?L.emptyScript:"";for(let f=0;f<u;f++)s.append(c[f],x()),v.nextNode(),a.push({type:2,index:++o});s.append(c[u],x())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)a.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function E(r,e,t=r,i){var n,l;if(e===b)return e;let s=i!==void 0?(n=t.o)==null?void 0:n[i]:t.l;const o=O(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t.o??(t.o=[]))[i]=s:t.l=s),s!==void 0&&(e=E(r,s._$AS(r,e.values),s,i)),e}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??y).importNode(t,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new k(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new Ne(o,this,e)),this._$AV.push(h),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=v.nextNode(),n++)}return v.currentNode=y,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=j.createElement($e(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new ke(s,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new j(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new k(this.O(x()),this.O(x()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this.v=e,(t=this._$AP)==null||t.call(this,e))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==b,n&&(this._$AH=e);else{const l=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=E(this,l[i+a],t,a),h===b&&(h=this._$AH[a]),n||(n=!O(h)||h!==this._$AH[a]),h===d?e=d:e!==d&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Re extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class He extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Te extends I{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===b)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const F=P.litHtmlPolyfillSupport;F==null||F(j,k),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.0");const Le=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new k(e.insertBefore(x(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return b}}var he;m._$litElement$=!0,m.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:m});const q=globalThis.litElementPolyfillSupport;q==null||q({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:J},ze=(r=De,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(i==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function R(r){return(e,t)=>typeof t=="object"?ze(r,e,t):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(r){return R({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Be(r,e,t){return r?e(r):t==null?void 0:t(r)}const me={Happy:"😀","Heart Eyes":"😍",Joy:"🤣",Celebrate:"🎉",Thinking:"🤔",Indifferent:"😐",Embarrassed:"😳",Sad:"😢",Wow:"😮",Shocked:"😱",Distressed:"😫",Pleading:"🥺","Thumbs Up":"👍","Thumbs Down":"👎","Thank you":"🙏",Wave:"👋","Raised Hands":"🙌",Strong:"💪",Eyes:"👀",Rainbow:"🌈",Luck:"🍀",Love:"❤️",Sparkles:"✨",Unicorn:"🦄",Fire:"🔥",Money:"💵",Idea:"💡",Done:"✅","Not Done":"❌",Caution:"⚠️"},Ie=new Map(Object.entries(me).map(([r,e])=>[r,{unicode:e,count:0,reacted:!1}]));var Ze=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,Y=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ve(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ze(e,t,s),s};let M=class extends m{constructor(){super(...arguments),this.count=0,this.emojiList=Object.entries(me)}_onEmojiSelected(r){this.dispatchEvent(new CustomEvent("emoji-selected",{detail:{name:r},bubbles:!0,composed:!0}))}render(){return C`
      <div class="emoji-grid">
        ${this.emojiList.map(([r,e])=>C`
            <span
              class="emoji"
              title="${r}"
              @click=${()=>this._onEmojiSelected(r)}
            >
              ${e}
            </span>
          `)}
      </div>
    `}};M.styles=B`
    :host {
      background-color: blue;
      position: relative;
    }
    .emoji-grid {
      position: absolute;
      bottom: 0;
      max-width: 264px;
      min-width: 192px;
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 12px;
      border-radius: 4px;
      margin-bottom: 2px;
    }
    .emoji {
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }
    .emoji:hover {
      background-color: #d4eff9;
    }
  `;Y([R({type:Number})],M.prototype,"count",2);Y([_e()],M.prototype,"emojiList",2);M=Y([Z("emoji-picker")],M);var We=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,ge=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&We(e,t,s),s};let D=class extends m{constructor(){super(...arguments),this.count=0}render(){return C`
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
    `}};D.styles=B`
    :host {
      display: contents;
    }
    svg:hover .update-stroke {
      stroke: #027baf;
    }
    svg:hover .update-fill {
      fill: #027baf;
    }
  `;ge([R({type:Number})],D.prototype,"count",2);D=ge([Z("picker-svg")],D);function qe(r){const t=[{divider:1,suffix:""},{divider:1e3,suffix:"K"},{divider:1e6,suffix:"M"}].find(i=>r<i.divider*1e3);if(t){let i=(r/t.divider).toFixed(r%(t.divider*1e3)===0?0:1);return i=i.replace(/\.0$/,""),i.startsWith("1000")&&t.suffix==="K"?(i="1",i+"M"):i+t.suffix}return""}var Ke=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,ve=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ge(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ke(e,t,s),s};let z=class extends m{constructor(){super(...arguments),this.reactions={}}_onTogglePicker(){this.dispatchEvent(new CustomEvent("toggle-picker",{bubbles:!0,composed:!0}))}_onReactionSelected(r){this.dispatchEvent(new CustomEvent("reaction-selected",{detail:{name:r},bubbles:!0,composed:!0}))}render(){return C`
      <div class="container">
        <div class="emoji-pill" @click=${this._onTogglePicker}>
          <picker-svg></picker-svg>
        </div>
        ${Array.from(this.reactions.entries()).map(([r,e])=>C`
              <div class="emoji-pill" @click=${()=>this._onReactionSelected(r)}>
                <span class="emoji"> ${e.unicode} </span>
                <span class="count"> ${qe(e.count)} </span>
              </div>
            `)}
      </div>
    `}};z.styles=B`
    .container {
      width: 672px;
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
      display: inline-flex;
      gap: 4px;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border: 1px solid #cccccc;
      border-radius: 80px;
      background-color: #fafafa;
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
  `;ve([R({type:Map})],z.prototype,"reactions",2);z=ve([Z("reaction-pills")],z);var Je=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,X=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Je(e,t,s),s};let U=class extends m{constructor(){super(...arguments),this.reactions=this._initializeReactions(),this._showEmojiPicker=!1}_initializeReactions(){return Ie}_togglePicker(){this._showEmojiPicker=!this._showEmojiPicker}render(){const r=new Map(Array.from(this.reactions.entries()).filter(([e,t])=>t.count>0));return C`
      <div class="container">
        ${Be(this._showEmojiPicker,()=>C`
            <emoji-picker
              @emoji-selected=${this._onEmojiSelected}
            ></emoji-picker>
          `)}

        <reaction-pills
          .reactions=${r}
          @toggle-picker=${this._togglePicker}
          @reaction-selected=${this._onReactionSelected}
        ></reaction-pills>
      </div>
    `}_onEmojiSelected(r){const{name:e}=r.detail;this._updateReactionCount(e),this._togglePicker()}_onReactionSelected(r){const{name:e}=r.detail;this._updateReactionCount(e)}_updateReactionCount(r){this.reactions=new Map(this.reactions);const e=this.reactions.get(r);if(e){const t=e.reacted?e.count-1:e.count+1;this.reactions.set(r,{...e,count:t,reacted:!e.reacted})}}};U.styles=B`
    .container {
      margin-top: 50vh;
    }
  `;X([R({type:Map})],U.prototype,"reactions",2);X([_e()],U.prototype,"_showEmojiPicker",2);U=X([Z("single-reaction")],U);
