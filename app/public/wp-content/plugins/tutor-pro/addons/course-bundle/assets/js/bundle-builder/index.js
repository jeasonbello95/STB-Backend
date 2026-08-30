(()=>{var e={6734:function(e,t,r){"use strict";// EXPORTS
r.d(t,{A:()=>/* binding */eI});// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var n=false;/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/function a(e){if(e.sheet){return e.sheet}// this weirdness brought to you by firefox
/* istanbul ignore next */for(var t=0;t<document.styleSheets.length;t++){if(document.styleSheets[t].ownerNode===e){return document.styleSheets[t]}}// this function should always return with a value
// TS can't understand it though so we make it stop complaining here
return undefined}function i(e){var t=document.createElement("style");t.setAttribute("data-emotion",e.key);if(e.nonce!==undefined){t.setAttribute("nonce",e.nonce)}t.appendChild(document.createTextNode(""));t.setAttribute("data-s","");return t}var o=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function e(e){var t=this;this._insertTag=function(e){var r;if(t.tags.length===0){if(t.insertionPoint){r=t.insertionPoint.nextSibling}else if(t.prepend){r=t.container.firstChild}else{r=t.before}}else{r=t.tags[t.tags.length-1].nextSibling}t.container.insertBefore(e,r);t.tags.push(e)};this.isSpeedy=e.speedy===undefined?!n:e.speedy;this.tags=[];this.ctr=0;this.nonce=e.nonce;// key is the value of the data-emotion attribute, it's used to identify different sheets
this.key=e.key;this.container=e.container;this.prepend=e.prepend;this.insertionPoint=e.insertionPoint;this.before=null}var t=e.prototype;t.hydrate=function e(e){e.forEach(this._insertTag)};t.insert=function e(e){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65e3:1)===0){this._insertTag(i(this))}var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=a(t);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
r.insertRule(e,r.cssRules.length)}catch(e){}}else{t.appendChild(document.createTextNode(e))}this.ctr++};t.flush=function e(){this.tags.forEach(function(e){var t;return(t=e.parentNode)==null?void 0:t.removeChild(e)});this.tags=[];this.ctr=0};return e}();// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */var s=Math.abs;/**
 * @param {number}
 * @return {string}
 */var u=String.fromCharCode;/**
 * @param {object}
 * @return {object}
 */var c=Object.assign;/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */function l(e,t){return v(e,0)^45?(((t<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}/**
 * @param {string} value
 * @return {string}
 */function f(e){return e.trim()}/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */function d(e,t){return(e=t.exec(e))?e[0]:e}/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */function h(e,t,r){return e.replace(t,r)}/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */function p(e,t){return e.indexOf(t)}/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */function v(e,t){return e.charCodeAt(t)|0}/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function m(e,t,r){return e.slice(t,r)}/**
 * @param {string} value
 * @return {number}
 */function g(e){return e.length}/**
 * @param {any[]} value
 * @return {number}
 */function y(e){return e.length}/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */function b(e,t){return t.push(e),e}/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */function _(e,t){return e.map(t).join("")};// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var w=1;var x=1;var E=0;var O=0;var S=0;var A="";/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */function T(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:w,column:x,length:o,return:""}}/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */function R(e,t){return c(T("",null,null,"",null,null,0),e,{length:-e.length},t)}/**
 * @return {number}
 */function k(){return S}/**
 * @return {number}
 */function C(){S=O>0?v(A,--O):0;if(x--,S===10)x=1,w--;return S}/**
 * @return {number}
 */function I(){S=O<E?v(A,O++):0;if(x++,S===10)x=1,w++;return S}/**
 * @return {number}
 */function P(){return v(A,O)}/**
 * @return {number}
 */function D(){return O}/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function M(e,t){return m(A,e,t)}/**
 * @param {number} type
 * @return {number}
 */function L(e){switch(e){// \0 \t \n \r \s whitespace token
case 0:case 9:case 10:case 13:case 32:return 5;// ! + , / > @ ~ isolate token
case 33:case 43:case 44:case 47:case 62:case 64:case 126:// ; { } breakpoint token
case 59:case 123:case 125:return 4;// : accompanied token
case 58:return 3;// " ' ( [ opening delimit token
case 34:case 39:case 40:case 91:return 2;// ) ] closing delimit token
case 41:case 93:return 1}return 0}/**
 * @param {string} value
 * @return {any[]}
 */function F(e){return w=x=1,E=g(A=e),O=0,[]}/**
 * @param {any} value
 * @return {any}
 */function N(e){return A="",e}/**
 * @param {number} type
 * @return {string}
 */function j(e){return f(M(O-1,z(e===91?e+2:e===40?e+1:e)))}/**
 * @param {string} value
 * @return {string[]}
 */function U(e){return N(B(F(e)))}/**
 * @param {number} type
 * @return {string}
 */function H(e){while(S=P())if(S<33)I();else break;return L(e)>2||L(S)>3?"":" "}/**
 * @param {string[]} children
 * @return {string[]}
 */function B(e){while(I())switch(L(S)){case 0:append(q(O-1),e);break;case 2:append(j(S),e);break;default:append(from(S),e)}return e}/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */function Y(e,t){while(--t&&I())// not 0-9 A-F a-f
if(S<48||S>102||S>57&&S<65||S>70&&S<97)break;return M(e,D()+(t<6&&P()==32&&I()==32))}/**
 * @param {number} type
 * @return {number}
 */function z(e){while(I())switch(S){// ] ) " '
case e:return O;// " '
case 34:case 39:if(e!==34&&e!==39)z(S);break;// (
case 40:if(e===41)z(e);break;// \
case 92:I();break}return O}/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */function V(e,t){while(I())// //
if(e+S===47+10)break;else if(e+S===42+42&&P()===47)break;return"/*"+M(t,O-1)+"*"+u(e===47?e:I())}/**
 * @param {number} index
 * @return {string}
 */function q(e){while(!L(P()))I();return M(e,O)};// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var W="-ms-";var $="-moz-";var G="-webkit-";var K="comm";var Q="rule";var X="decl";var J="@page";var Z="@media";var ee="@import";var et="@charset";var er="@viewport";var en="@supports";var ea="@document";var ei="@namespace";var eo="@keyframes";var es="@font-face";var eu="@counter-style";var ec="@font-feature-values";var el="@layer";// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function ef(e,t){var r="";var n=y(e);for(var a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function ed(e,t,r,n){switch(e.type){case el:if(e.children.length)break;case ee:case X:return e.return=e.return||e.value;case K:return"";case eo:return e.return=e.value+"{"+ef(e.children,n)+"}";case Q:e.value=e.props.join(",")}return g(r=ef(e.children,n))?e.return=e.value+"{"+r+"}":""};// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
/**
 * @param {function[]} collection
 * @return {function}
 */function eh(e){var t=y(e);return function(r,n,a,i){var o="";for(var s=0;s<t;s++)o+=e[s](r,n,a,i)||"";return o}}/**
 * @param {function} callback
 * @return {function}
 */function ep(e){return function(t){if(!t.root){if(t=t.return)e(t)}}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */function ev(e,t,r,n){if(e.length>-1){if(!e.return)switch(e.type){case DECLARATION:e.return=prefix(e.value,e.length,r);return;case KEYFRAMES:return serialize([copy(e,{value:replace(e.value,"@","@"+WEBKIT)})],n);case RULESET:if(e.length)return combine(e.props,function(t){switch(match(t,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case":read-only":case":read-write":return serialize([copy(e,{props:[replace(t,/:(read-\w+)/,":"+MOZ+"$1")]})],n);// :placeholder
case"::placeholder":return serialize([copy(e,{props:[replace(t,/:(plac\w+)/,":"+WEBKIT+"input-$1")]}),copy(e,{props:[replace(t,/:(plac\w+)/,":"+MOZ+"$1")]}),copy(e,{props:[replace(t,/:(plac\w+)/,MS+"input-$1")]})],n)}return""})}}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */function em(e){switch(e.type){case RULESET:e.props=e.props.map(function(t){return combine(tokenize(t),function(t,r,n){switch(charat(t,0)){// \f
case 12:return substr(t,1,strlen(t));// \0 ( + > ~
case 0:case 40:case 43:case 62:case 126:return t;// :
case 58:if(n[++r]==="global")n[r]="",n[++r]="\f"+substr(n[r],r=1,-1);// \s
case 32:return r===1?"":t;default:switch(r){case 0:e=t;return sizeof(n)>1?"":t;case r=sizeof(n)-1:case 2:return r===2?t+e+e:t+e;default:return t}}})})}};// CONCATENATED MODULE: ./node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
/**
 * @param {string} value
 * @return {object[]}
 */function eg(e){return N(ey("",null,null,null,[""],e=F(e),0,[0],e))}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */function ey(e,t,r,n,a,i,o,s,c){var l=0;var f=0;var d=o;var m=0;var y=0;var _=0;var w=1;var x=1;var E=1;var O=0;var S="";var A=a;var T=i;var R=n;var k=S;while(x)switch(_=O,O=I()){// (
case 40:if(_!=108&&v(k,d-1)==58){if(p(k+=h(j(O),"&","&\f"),"&\f")!=-1)E=-1;break}// " ' [
case 34:case 39:case 91:k+=j(O);break;// \t \n \r \s
case 9:case 10:case 13:case 32:k+=H(_);break;// \
case 92:k+=Y(D()-1,7);continue;// /
case 47:switch(P()){case 42:case 47:b(e_(V(I(),D()),t,r),c);break;default:k+="/"}break;// {
case 123*w:s[l++]=g(k)*E;// } ; \0
case 125*w:case 59:case 0:switch(O){// \0 }
case 0:case 125:x=0;// ;
case 59+f:if(E==-1)k=h(k,/\f/g,"");if(y>0&&g(k)-d)b(y>32?ew(k+";",n,r,d-1):ew(h(k," ","")+";",n,r,d-2),c);break;// @ ;
case 59:k+=";";// { rule/at-rule
default:b(R=eb(k,t,r,l,f,a,s,S,A=[],T=[],d),i);if(O===123)if(f===0)ey(k,t,R,R,A,i,d,s,T);else switch(m===99&&v(k,3)===110?100:m){// d l m s
case 100:case 108:case 109:case 115:ey(e,R,R,n&&b(eb(e,R,R,0,0,a,s,S,a,A=[],d),T),a,T,d,s,n?A:T);break;default:ey(k,R,R,R,[""],T,0,s,T)}}l=f=y=0,w=E=1,S=k="",d=o;break;// :
case 58:d=1+g(k),y=_;default:if(w<1){if(O==123)--w;else if(O==125&&w++==0&&C()==125)continue}switch(k+=u(O),O*w){// &
case 38:E=f>0?1:(k+="\f",-1);break;// ,
case 44:s[l++]=(g(k)-1)*E,E=1;break;// @
case 64:// -
if(P()===45)k+=j(I());m=P(),f=d=g(S=k+=q(D())),O++;break;// -
case 45:if(_===45&&g(k)==2)w=0}}return i}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */function eb(e,t,r,n,a,i,o,u,c,l,d){var p=a-1;var v=a===0?i:[""];var g=y(v);for(var b=0,_=0,w=0;b<n;++b)for(var x=0,E=m(e,p+1,p=s(_=o[b])),O=e;x<g;++x)if(O=f(_>0?v[x]+" "+E:h(E,/&\f/g,v[x])))c[w++]=O;return T(e,t,r,a===0?Q:u,c,l,d)}/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */function e_(e,t,r){return T(e,t,r,K,u(k()),m(e,2,-2),0)}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */function ew(e,t,r,n){return T(e,t,r,X,m(e,0,n),m(e,n+1,-1),n)};// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var ex=function e(e,t,r){var n=0;var a=0;while(true){n=a;a=P();// &\f
if(n===38&&a===12){t[r]=1}if(L(a)){break}I()}return M(e,O)};var eE=function e(e,t){// pretend we've started with a comma
var r=-1;var n=44;do{switch(L(n)){case 0:// &\f
if(n===38&&P()===12){// this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
t[r]=1}e[r]+=ex(O-1,t,r);break;case 2:e[r]+=j(n);break;case 4:// comma
if(n===44){// colon
e[++r]=P()===58?"&\f":"";t[r]=e[r].length;break}// fallthrough
default:e[r]+=u(n)}}while(n=I())return e};var eO=function e(e,t){return N(eE(F(e),t))};// WeakSet would be more appropriate, but only WeakMap is supported in IE11
var eS=/* #__PURE__ */new WeakMap;var eA=function e(e){if(e.type!=="rule"||!e.parent||// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
e.length<1){return}var t=e.value;var r=e.parent;var n=e.column===r.column&&e.line===r.line;while(r.type!=="rule"){r=r.parent;if(!r)return}// short-circuit for the simplest case
if(e.props.length===1&&t.charCodeAt(0)!==58&&!eS.get(r)){return}// if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
// then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
if(n){return}eS.set(e,true);var a=[];var i=eO(t,a);var o=r.props;for(var s=0,u=0;s<i.length;s++){for(var c=0;c<o.length;c++,u++){e.props[u]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}};var eT=function e(e){if(e.type==="decl"){var t=e.value;if(t.charCodeAt(0)===108&&// charcode for b
t.charCodeAt(2)===98){// this ignores label
e["return"]="";e.value=""}}};/* eslint-disable no-fallthrough */function eR(e,t){switch(l(e,t)){// color-adjust
case 5103:return G+"print-"+e+e;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+$+e+W+e+e;// flex, flex-direction
case 6828:case 4268:return G+e+W+e+e;// order
case 6165:return G+e+W+"flex-"+e+e;// align-items
case 5187:return G+e+h(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+W+"flex-$1$2")+e;// align-self
case 5443:return G+e+W+"flex-item-"+h(e,/flex-|-self/,"")+e;// align-content
case 4675:return G+e+W+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;// flex-shrink
case 5548:return G+e+W+h(e,"shrink","negative")+e;// flex-basis
case 5292:return G+e+W+h(e,"basis","preferred-size")+e;// flex-grow
case 6060:return G+"box-"+h(e,"-grow","")+G+e+W+h(e,"grow","positive")+e;// transition
case 4554:return G+h(e,/([^-])(transform)/g,"$1"+G+"$2")+e;// cursor
case 6187:return h(h(h(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;// background, background-image
case 5495:case 3959:return h(e,/(image-set\([^]*)/,G+"$1"+"$`$1");// justify-content
case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,G+"$1$2")+e;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(g(e)-1-t>6)switch(v(e,t+1)){// (m)ax-content, (m)in-content
case 109:// -
if(v(e,t+4)!==45)break;// (f)ill-available, (f)it-content
case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3"+"$1"+$+(v(e,t+3)==108?"$3":"$2-$3"))+e;// (s)tretch
case 115:return~p(e,"stretch")?eR(h(e,"stretch","fill-available"),t)+e:e}break;// position: sticky
case 4949:// (s)ticky?
if(v(e,t+1)!==115)break;// display: (flex|inline-flex)
case 6444:switch(v(e,g(e)-3-(~p(e,"!important")&&10))){// stic(k)y
case 107:return h(e,":",":"+G)+e;// (inline-)?fl(e)x
case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(v(e,14)===45?"inline-":"")+"box$3"+"$1"+G+"$2$3"+"$1"+W+"$2box$3")+e}break;// writing-mode
case 5936:switch(v(e,t+11)){// vertical-l(r)
case 114:return G+e+W+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;// vertical-r(l)
case 108:return G+e+W+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;// horizontal(-)tb
case 45:return G+e+W+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+W+e+e}return e}var ek=function e(e,t,r,n){if(e.length>-1){if(!e["return"])switch(e.type){case X:e["return"]=eR(e.value,e.length);break;case eo:return ef([R(e,{value:h(e.value,"@","@"+G)})],n);case Q:if(e.length)return _(e.props,function(t){switch(d(t,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case":read-only":case":read-write":return ef([R(e,{props:[h(t,/:(read-\w+)/,":"+$+"$1")]})],n);// :placeholder
case"::placeholder":return ef([R(e,{props:[h(t,/:(plac\w+)/,":"+G+"input-$1")]}),R(e,{props:[h(t,/:(plac\w+)/,":"+$+"$1")]}),R(e,{props:[h(t,/:(plac\w+)/,W+"input-$1")]})],n)}return""})}}};var eC=[ek];var eI=function e(e){var t=e.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(r,function(e){// we want to only move elements which have a space in the data-emotion attribute value
// because that indicates that it is an Emotion 11 server-side rendered style elements
// while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
// Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
// so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
// will not result in the Emotion 10 styles being destroyed
var t=e.getAttribute("data-emotion");if(t.indexOf(" ")===-1){return}document.head.appendChild(e);e.setAttribute("data-s","")})}var n=e.stylisPlugins||eC;var a={};var i;var s=[];{i=e.container||document.head;Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){var t=e.getAttribute("data-emotion").split(" ");for(var r=1;r<t.length;r++){a[t[r]]=true}s.push(e)})}var u;var c=[eA,eT];{var l;var f=[ed,ep(function(e){l.insert(e)})];var d=eh(c.concat(n,f));var h=function e(e){return ef(eg(e),d)};u=function e(e,t,r,n){l=r;h(e?e+"{"+t.styles+"}":t.styles);if(n){p.inserted[t.name]=true}}}var p={key:t,sheet:new o({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:u};p.sheet.hydrate(s);return p}},2517:function(e,t,r){"use strict";r.d(t,{C:()=>d,E:()=>A,T:()=>v,c:()=>E,h:()=>w,i:()=>l,w:()=>p});/* import */var n=r(1594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(6734);/* import */var o=r(3595);/* import */var s=r(5631);/* import */var u=r(5035);var c=false;var l=typeof document!=="undefined";var f=/* #__PURE__ */n.createContext(// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement!=="undefined"?/* #__PURE__ */(0,i/* ["default"] */.A)({key:"css"}):null);var d=f.Provider;var h=function e(){return useContext(f)};var p=function e(e){return/*#__PURE__*/(0,n.forwardRef)(function(t,r){// the cache will never be null in the browser
var a=(0,n.useContext)(f);return e(t,a,r)})};if(!l){p=function e(e){return function(t){var r=(0,n.useContext)(f);if(r===null){// yes, we're potentially creating this on every render
// it doesn't actually matter though since it's only on the server
// so there will only every be a single render
// that could change in the future because of suspense and etc. but for now,
// this works and i don't want to optimise for a future thing that we aren't sure about
r=(0,i/* ["default"] */.A)({key:"css"});return /*#__PURE__*/n.createElement(f.Provider,{value:r},e(t,r))}else{return e(t,r)}}}}var v=/* #__PURE__ */n.createContext({});var m=function e(){return React.useContext(v)};var g=function e(e,t){if(typeof t==="function"){var r=t(e);return r}return _extends({},e,t)};var y=/* #__PURE__ *//* unused pure expression or super */null&&weakMemoize(function(e){return weakMemoize(function(t){return g(e,t)})});var b=function e(e){var t=React.useContext(v);if(e.theme!==t){t=y(t)(e.theme)}return /*#__PURE__*/React.createElement(v.Provider,{value:t},e.children)};function _(e){var t=e.displayName||e.name||"Component";var r=/*#__PURE__*/React.forwardRef(function t(t,r){var n=React.useContext(v);return /*#__PURE__*/React.createElement(e,_extends({theme:n,ref:r},t))});r.displayName="WithTheme("+t+")";return hoistNonReactStatics(r,e)}var w={}.hasOwnProperty;var x="__EMOTION_TYPE_PLEASE_DO_NOT_USE__";var E=function e(e,t){var r={};for(var n in t){if(w.call(t,n)){r[n]=t[n]}}r[x]=e;// Runtime labeling is an opt-in feature because:
return r};var O=function e(e){var t=e.cache,r=e.serialized,a=e.isStringTag;(0,o/* .registerStyles */.SF)(t,r,a);var i=(0,u/* .useInsertionEffectAlwaysWithSyncFallback */.s)(function(){return(0,o/* .insertStyles */.sk)(t,r,a)});if(!l&&i!==undefined){var s;var c=r.name;var f=r.next;while(f!==undefined){c+=" "+f.name;f=f.next}return /*#__PURE__*/n.createElement("style",(s={},s["data-emotion"]=t.key+" "+c,s.dangerouslySetInnerHTML={__html:i},s.nonce=t.sheet.nonce,s))}return null};var S=/* #__PURE__ */p(function(e,t,r){var a=e.css;// so that using `css` from `emotion` and passing the result to the css prop works
// not passing the registered cache to serializeStyles because it would
// make certain babel optimisations not possible
if(typeof a==="string"&&t.registered[a]!==undefined){a=t.registered[a]}var i=e[x];var u=[a];var l="";if(typeof e.className==="string"){l=(0,o/* .getRegisteredStyles */.Rk)(t.registered,u,e.className)}else if(e.className!=null){l=e.className+" "}var f=(0,s/* .serializeStyles */.J)(u,undefined,n.useContext(v));l+=t.key+"-"+f.name;var d={};for(var h in e){if(w.call(e,h)&&h!=="css"&&h!==x&&!c){d[h]=e[h]}}d.className=l;if(r){d.ref=r}return /*#__PURE__*/n.createElement(n.Fragment,null,/*#__PURE__*/n.createElement(O,{cache:t,serialized:f,isStringTag:typeof i==="string"}),/*#__PURE__*/n.createElement(i,d))});var A=S},5757:function(e,t,r){"use strict";r.d(t,{AH:()=>p,i7:()=>v,mL:()=>h});/* import */var n=r(2517);/* import */var a=r(1594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(3595);/* import */var s=r(5035);/* import */var u=r(5631);/* import */var c=r(6734);/* import */var l=r(1035);/* import */var f=/*#__PURE__*/r.n(l);var d=function e(e,t){// eslint-disable-next-line prefer-rest-params
var r=arguments;if(t==null||!n.h.call(t,"css")){return a.createElement.apply(undefined,r)}var i=r.length;var o=new Array(i);o[0]=n.E;o[1]=(0,n.c)(e,t);for(var s=2;s<i;s++){o[s]=r[s]}return a.createElement.apply(null,o)};(function(e){var t;(function(e){})(t||(t=e.JSX||(e.JSX={})))})(d||(d={}));// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var h=/* #__PURE__ */(0,n.w)(function(e,t){var r=e.styles;var i=(0,u/* .serializeStyles */.J)([r],undefined,a.useContext(n.T));if(!n.i){var c;var l=i.name;var f=i.styles;var d=i.next;while(d!==undefined){l+=" "+d.name;f+=d.styles;d=d.next}var h=t.compat===true;var p=t.insert("",{name:l,styles:f},t.sheet,h);if(h){return null}return /*#__PURE__*/a.createElement("style",(c={},c["data-emotion"]=t.key+"-global "+l,c.dangerouslySetInnerHTML={__html:p},c.nonce=t.sheet.nonce,c))}// yes, i know these hooks are used conditionally
// but it is based on a constant that will never change at runtime
// it's effectively like having two implementations and switching them out
// so it's not actually breaking anything
var v=a.useRef();(0,s/* .useInsertionEffectWithLayoutFallback */.i)(function(){var e=t.key+"-global";// use case of https://github.com/emotion-js/emotion/issues/2675
var r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy});var n=false;var a=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');if(t.sheet.tags.length){r.before=t.sheet.tags[0]}if(a!==null){n=true;// clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
a.setAttribute("data-emotion",e);r.hydrate([a])}v.current=[r,n];return function(){r.flush()}},[t]);(0,s/* .useInsertionEffectWithLayoutFallback */.i)(function(){var e=v.current;var r=e[0],n=e[1];if(n){e[1]=false;return}if(i.next!==undefined){// insert keyframes
(0,o/* .insertStyles */.sk)(t,i.next,true)}if(r.tags.length){// if this doesn't exist then it will be null so the style element will be appended
var a=r.tags[r.tags.length-1].nextElementSibling;r.before=a;r.flush()}t.insert("",i,r,false)},[t,i.name]);return null});function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,u/* .serializeStyles */.J)(t)}function v(){var e=p.apply(void 0,arguments);var t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function e(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var m=function e(t){var r=t.length;var n=0;var a="";for(;n<r;n++){var i=t[n];if(i==null)continue;var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i)){o=e(i)}else{o="";for(var s in i){if(i[s]&&s){o&&(o+=" ");o+=s}}}break}default:{o=i}}if(o){a&&(a+=" ");a+=o}}return a};function g(e,t,r){var n=[];var a=getRegisteredStyles(e,n,r);if(n.length<2){return r}return a+t(n)}var y=function e(e){var t=e.cache,r=e.serializedArr;var n=useInsertionEffectAlwaysWithSyncFallback(function(){var e="";for(var n=0;n<r.length;n++){var a=insertStyles(t,r[n],false);if(!isBrowser&&a!==undefined){e+=a}}if(!isBrowser){return e}});if(!isBrowser&&n.length!==0){var a;return /*#__PURE__*/React.createElement("style",(a={},a["data-emotion"]=t.key+" "+r.map(function(e){return e.name}).join(" "),a.dangerouslySetInnerHTML={__html:n},a.nonce=t.sheet.nonce,a))}return null};var b=/* #__PURE__ *//* unused pure expression or super */null&&withEmotionCache(function(e,t){var r=false;var n=[];var a=function e(){if(r&&isDevelopment){throw new Error("css can only be used during render")}for(var e=arguments.length,a=new Array(e),i=0;i<e;i++){a[i]=arguments[i]}var o=serializeStyles(a,t.registered);n.push(o);// registration has to happen here as the result of this might get consumed by `cx`
registerStyles(t,o,false);return t.key+"-"+o.name};var i=function e(){if(r&&isDevelopment){throw new Error("cx can only be used during render")}for(var e=arguments.length,n=new Array(e),i=0;i<e;i++){n[i]=arguments[i]}return g(t.registered,a,m(n))};var o={css:a,cx:i,theme:React.useContext(ThemeContext)};var s=e.children(o);r=true;return /*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(y,{cache:t,serializedArr:n}),s)})},2025:function(e,t,r){"use strict";r.d(t,{FD:()=>h,FK:()=>f,Y:()=>d});/* import */var n=r(6070);/* import */var a=r(2517);/* import */var i=r(1594);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(6734);/* import */var u=r(1035);/* import */var c=/*#__PURE__*/r.n(u);/* import */var l=r(5035);var f=n.Fragment;var d=function e(e,t,r){if(!a.h.call(t,"css")){return n.jsx(e,t,r)}return n.jsx(a.E,(0,a.c)(e,t),r)};var h=function e(e,t,r){if(!a.h.call(t,"css")){return n.jsxs(e,t,r)}return n.jsxs(a.E,(0,a.c)(e,t),r)}},5631:function(e,t,r){"use strict";// EXPORTS
r.d(t,{J:()=>/* binding */y});// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function n(e){// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var t=0;// Mix 4 bytes at a time into the hash
var r,n=0,a=e.length;for(;a>=4;++n,a-=4){r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24;r=/* Math.imul(k, m): */(r&65535)*0x5bd1e995+((r>>>16)*59797<<16);r^=/* k >>> r: */r>>>24;t=/* Math.imul(k, m): */(r&65535)*0x5bd1e995+((r>>>16)*59797<<16)^/* Math.imul(h, m): */(t&65535)*0x5bd1e995+((t>>>16)*59797<<16)}// Handle the last few bytes of the input array
switch(a){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255;t=/* Math.imul(h, m): */(t&65535)*0x5bd1e995+((t>>>16)*59797<<16)}// Do a few final mixes of the hash to ensure the last few
// bytes are well-incorporated.
t^=t>>>13;t=/* Math.imul(h, m): */(t&65535)*0x5bd1e995+((t>>>16)*59797<<16);return((t^t>>>15)>>>0).toString(36)};// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var a={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function i(e){var t=Object.create(null);return function(r){if(t[r]===undefined)t[r]=e(r);return t[r]}};// CONCATENATED MODULE: ./node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var o=false;var s=/[A-Z]|^ms/g;var u=/_EMO_([^_]+?)_([^]*?)_EMO_/g;var c=function e(e){return e.charCodeAt(1)===45};var l=function e(e){return e!=null&&typeof e!=="boolean"};var f=/* #__PURE__ */i(function(e){return c(e)?e:e.replace(s,"-$&").toLowerCase()});var d=function e(e,t){switch(e){case"animation":case"animationName":{if(typeof t==="string"){return t.replace(u,function(e,t,r){g={name:t,styles:r,next:g};return t})}}}if(a[e]!==1&&!c(e)&&typeof t==="number"&&t!==0){return t+"px"}return t};var h="Component selectors can only be used in conjunction with "+"@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware "+"compiler transform.";function p(e,t,r){if(r==null){return""}var n=r;if(n.__emotion_styles!==undefined){return n}switch(typeof r){case"boolean":{return""}case"object":{var a=r;if(a.anim===1){g={name:a.name,styles:a.styles,next:g};return a.name}var i=r;if(i.styles!==undefined){var o=i.next;if(o!==undefined){// not the most efficient thing ever but this is a pretty rare case
// and there will be very few iterations of this generally
while(o!==undefined){g={name:o.name,styles:o.styles,next:g};o=o.next}}var s=i.styles+";";return s}return v(e,t,r)}case"function":{if(e!==undefined){var u=g;var c=r(e);g=u;return p(e,t,c)}break}}// finalize string values (regular strings and functions interpolated into css calls)
var l=r;if(t==null){return l}var f=t[l];return f!==undefined?f:l}function v(e,t,r){var n="";if(Array.isArray(r)){for(var a=0;a<r.length;a++){n+=p(e,t,r[a])+";"}}else{for(var i in r){var s=r[i];if(typeof s!=="object"){var u=s;if(t!=null&&t[u]!==undefined){n+=i+"{"+t[u]+"}"}else if(l(u)){n+=f(i)+":"+d(i,u)+";"}}else{if(i==="NO_COMPONENT_SELECTOR"&&o){throw new Error(h)}if(Array.isArray(s)&&typeof s[0]==="string"&&(t==null||t[s[0]]===undefined)){for(var c=0;c<s.length;c++){if(l(s[c])){n+=f(i)+":"+d(i,s[c])+";"}}}else{var v=p(e,t,s);switch(i){case"animation":case"animationName":{n+=f(i)+":"+v+";";break}default:{n+=i+"{"+v+"}"}}}}}}return n}var m=/label:\s*([^\s;{]+)\s*(;|$)/g;// this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var g;function y(e,t,r){if(e.length===1&&typeof e[0]==="object"&&e[0]!==null&&e[0].styles!==undefined){return e[0]}var a=true;var i="";g=undefined;var o=e[0];if(o==null||o.raw===undefined){a=false;i+=p(r,t,o)}else{var s=o;i+=s[0]}// we start at 1 since we've already handled the first arg
for(var u=1;u<e.length;u++){i+=p(r,t,e[u]);if(a){var c=o;i+=c[u]}}// using a global regex with .exec is stateful so lastIndex has to be reset each time
m.lastIndex=0;var l="";var f;// https://esbench.com/bench/5b809c2cf2949800a0f61fb5
while((f=m.exec(i))!==null){l+="-"+f[1]}var d=n(i)+l;return{name:d,styles:i,next:g}}},5035:function(e,t,r){"use strict";r.d(t,{i:()=>u,s:()=>s});/* import */var n=r(1594);/* import */var a=/*#__PURE__*/r.n(n);var i=function e(e){return e()};var o=n["useInsertion"+"Effect"]?n["useInsertion"+"Effect"]:false;var s=o||i;var u=o||n.useLayoutEffect},3595:function(e,t,r){"use strict";r.d(t,{Rk:()=>a,SF:()=>i,sk:()=>o});var n=true;function a(e,t,r){var n="";r.split(" ").forEach(function(r){if(e[r]!==undefined){t.push(e[r]+";")}else if(r){n+=r+" "}});return n}var i=function e(e,t,r){var a=e.key+"-"+t.name;if(// class name could be used further down
// the tree but if it's a string tag, we know it won't
// so we don't have to add it to registered cache.
// this improves memory usage since we can avoid storing the whole style string
(r===false||// we need to always store it if we're in compat mode and
// in node since emotion-server relies on whether a style is in
// the registered cache to know whether a style is global or not
// also, note that this check will be dead code eliminated in the browser
n===false)&&e.registered[a]===undefined){e.registered[a]=t.styles}};var o=function e(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(e.inserted[t.name]===undefined){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,true);a=a.next}while(a!==undefined)}}},4969:function(e,t,r){"use strict";r.d(t,{Gh:()=>$,HS:()=>K,Oi:()=>c,Rr:()=>v,TM:()=>u,pX:()=>ef,pb:()=>B,rc:()=>a,tH:()=>er,ue:()=>w,yD:()=>W});/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function n(){n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return n.apply(this,arguments)}////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */var a;(function(e){/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */e["Pop"]="POP";/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */e["Push"]="PUSH";/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */e["Replace"]="REPLACE"})(a||(a={}));const i="popstate";/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */function o(e){if(e===void 0){e={}}let{initialEntries:t=["/"],initialIndex:r,v5Compat:n=false}=e;let i;// Declare so we can access from createMemoryLocation
i=t.map((e,t)=>d(e,typeof e==="string"?null:e.state,t===0?"default":undefined));let o=c(r==null?i.length-1:r);let s=a.Pop;let u=null;function c(e){return Math.min(Math.max(e,0),i.length-1)}function f(){return i[o]}function d(e,t,r){if(t===void 0){t=null}let n=h(i?f().pathname:"/",e,t,r);l(n.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(e));return n}function m(e){return typeof e==="string"?e:p(e)}let g={get index(){return o},get action(){return s},get location(){return f()},createHref:m,createURL(e){return new URL(m(e),"http://localhost")},encodeLocation(e){let t=typeof e==="string"?v(e):e;return{pathname:t.pathname||"",search:t.search||"",hash:t.hash||""}},push(e,t){s=a.Push;let r=d(e,t);o+=1;i.splice(o,i.length,r);if(n&&u){u({action:s,location:r,delta:1})}},replace(e,t){s=a.Replace;let r=d(e,t);i[o]=r;if(n&&u){u({action:s,location:r,delta:0})}},go(e){s=a.Pop;let t=c(o+e);let r=i[t];o=t;if(u){u({action:s,location:r,delta:e})}},listen(e){u=e;return()=>{u=null}}};return g}/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */function s(e){if(e===void 0){e={}}function t(e,t){let{pathname:r,search:n,hash:a}=e.location;return h("",{pathname:r,search:n,hash:a},// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function r(e,t){return typeof t==="string"?t:p(t)}return m(t,r,null,e)}/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */function u(e){if(e===void 0){e={}}function t(e,t){let{pathname:r="/",search:n="",hash:a=""}=v(e.location.hash.substr(1));// Hash URL should always have a leading / just like window.location.pathname
// does, so if an app ends up at a route like /#something then we add a
// leading slash so all of our path-matching behaves the same as if it would
// in a browser router.  This is particularly important when there exists a
// root splat route (<Route path="*">) since that matches internally against
// "/*" and we'd expect /#something to 404 in a hash router app.
if(!r.startsWith("/")&&!r.startsWith(".")){r="/"+r}return h("",{pathname:r,search:n,hash:a},// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function r(e,t){let r=e.document.querySelector("base");let n="";if(r&&r.getAttribute("href")){let t=e.location.href;let r=t.indexOf("#");n=r===-1?t:t.slice(0,r)}return n+"#"+(typeof t==="string"?t:p(t))}function n(e,t){l(e.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}return m(t,r,n,e)}function c(e,t){if(e===false||e===null||typeof e==="undefined"){throw new Error(t)}}function l(e,t){if(!e){// eslint-disable-next-line no-console
if(typeof console!=="undefined")console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw new Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}function f(){return Math.random().toString(36).substr(2,8)}/**
 * For browser-based histories, we combine the state and key into an object
 */function d(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function h(e,t,r,a){if(r===void 0){r=null}let i=n({pathname:typeof e==="string"?e:e.pathname,search:"",hash:""},typeof t==="string"?v(t):t,{state:r,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||a||f()});return i}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function p(e){let{pathname:t="/",search:r="",hash:n=""}=e;if(r&&r!=="?")t+=r.charAt(0)==="?"?r:"?"+r;if(n&&n!=="#")t+=n.charAt(0)==="#"?n:"#"+n;return t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function v(e){let t={};if(e){let r=e.indexOf("#");if(r>=0){t.hash=e.substr(r);e=e.substr(0,r)}let n=e.indexOf("?");if(n>=0){t.search=e.substr(n);e=e.substr(0,n)}if(e){t.pathname=e}}return t}function m(e,t,r,o){if(o===void 0){o={}}let{window:s=document.defaultView,v5Compat:u=false}=o;let l=s.history;let f=a.Pop;let v=null;let m=g();// Index should only be null when we initialize. If not, it's because the
// user called history.pushState or history.replaceState directly, in which
// case we should log a warning as it will result in bugs.
if(m==null){m=0;l.replaceState(n({},l.state,{idx:m}),"")}function g(){let e=l.state||{idx:null};return e.idx}function y(){f=a.Pop;let e=g();let t=e==null?null:e-m;m=e;if(v){v({action:f,location:x.location,delta:t})}}function b(e,t){f=a.Push;let n=h(x.location,e,t);if(r)r(n,e);m=g()+1;let i=d(n,m);let o=x.createHref(n);// try...catch because iOS limits us to 100 pushState calls :/
try{l.pushState(i,"",o)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&e.name==="DataCloneError"){throw e}// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
s.location.assign(o)}if(u&&v){v({action:f,location:x.location,delta:1})}}function _(e,t){f=a.Replace;let n=h(x.location,e,t);if(r)r(n,e);m=g();let i=d(n,m);let o=x.createHref(n);l.replaceState(i,"",o);if(u&&v){v({action:f,location:x.location,delta:0})}}function w(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t=s.location.origin!=="null"?s.location.origin:s.location.href;let r=typeof e==="string"?e:p(e);// Treating this as a full URL will strip any trailing spaces so we need to
// pre-encode them since they might be part of a matching splat param from
// an ancestor route
r=r.replace(/ $/,"%20");c(t,"No window.location.(origin|href) available to create URL for href: "+r);return new URL(r,t)}let x={get action(){return f},get location(){return e(s,l)},listen(e){if(v){throw new Error("A history only accepts one active listener")}s.addEventListener(i,y);v=e;return()=>{s.removeEventListener(i,y);v=null}},createHref(e){return t(s,e)},createURL:w,encodeLocation(e){// Encode a Location the same way window.location would
let t=w(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:b,replace:_,go(e){return l.go(e)}};return x}//#endregion
var g;(function(e){e["data"]="data";e["deferred"]="deferred";e["redirect"]="redirect";e["error"]="error"})(g||(g={}));const y=new Set(["lazy","caseSensitive","path","id","index","children"]);function b(e){return e.index===true}// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function _(e,t,r,a){if(r===void 0){r=[]}if(a===void 0){a={}}return e.map((e,i)=>{let o=[...r,String(i)];let s=typeof e.id==="string"?e.id:o.join("-");c(e.index!==true||!e.children,"Cannot specify children on an index route");c(!a[s],'Found a route id collision on id "'+s+'".  Route '+"id's must be globally unique within Data Router usages");if(b(e)){let r=n({},e,t(e),{id:s});a[s]=r;return r}else{let r=n({},e,t(e),{id:s,children:undefined});a[s]=r;if(e.children){r.children=_(e.children,t,o,a)}return r}})}/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */function w(e,t,r){if(r===void 0){r="/"}return x(e,t,r,false)}function x(e,t,r,n){let a=typeof t==="string"?v(t):t;let i=B(a.pathname||"/",r);if(i==null){return null}let o=O(e);A(o);let s=null;for(let e=0;s==null&&e<o.length;++e){// Incoming pathnames are generally encoded from either window.location
// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
let t=H(i);s=F(o[e],t,n)}return s}function E(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function O(e,t,r,n){if(t===void 0){t=[]}if(r===void 0){r=[]}if(n===void 0){n=""}let a=(e,a,i)=>{let o={relativePath:i===undefined?e.path||"":i,caseSensitive:e.caseSensitive===true,childrenIndex:a,route:e};if(o.relativePath.startsWith("/")){c(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes.");o.relativePath=o.relativePath.slice(n.length)}let s=K([n,o.relativePath]);let u=r.concat(o);// Add the children before adding this route to the array, so we traverse the
// route tree depth-first and child routes appear before their parents in
// the "flattened" version.
if(e.children&&e.children.length>0){c(// Our types know better, but runtime JS may not!
// @ts-expect-error
e.index!==true,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".'));O(e.children,t,u,s)}// Routes without a path shouldn't ever match by themselves unless they are
// index routes, so don't add them to the list of possible branches.
if(e.path==null&&!e.index){return}t.push({path:s,score:M(s,e.index),routesMeta:u})};e.forEach((e,t)=>{var r;// coarse-grain check for optional params
if(e.path===""||!((r=e.path)!=null&&r.includes("?"))){a(e,t)}else{for(let r of S(e.path)){a(e,t,r)}}});return t}/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function S(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t;// Optional path segments are denoted by a trailing `?`
let a=r.endsWith("?");// Compute the corresponding required segment: `foo?` -> `foo`
let i=r.replace(/\?$/,"");if(n.length===0){// Intepret empty string as omitting an optional segment
// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return a?[i,""]:[i]}let o=S(n.join("/"));let s=[];// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
s.push(...o.map(e=>e===""?i:[i,e].join("/")));// Then, if this is an optional value, add all child versions without
if(a){s.push(...o)}// for absolute paths, ensure `/` instead of empty segment
return s.map(t=>e.startsWith("/")&&t===""?"/":t)}function A(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score// Higher score first
    :L(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}const T=/^:[\w-]+$/;const R=3;const k=2;const C=1;const I=10;const P=-2;const D=e=>e==="*";function M(e,t){let r=e.split("/");let n=r.length;if(r.some(D)){n+=P}if(t){n+=k}return r.filter(e=>!D(e)).reduce((e,t)=>e+(T.test(t)?R:t===""?C:I),n)}function L(e,t){let r=e.length===t.length&&e.slice(0,-1).every((e,r)=>e===t[r]);return r?// If two routes are siblings, we should try to match the earlier sibling
// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
e[e.length-1]-t[t.length-1]:// Otherwise, it doesn't really make sense to rank non-siblings by index,
// so they sort equally.
0}function F(e,t,r){if(r===void 0){r=false}let{routesMeta:n}=e;let a={};let i="/";let o=[];for(let e=0;e<n.length;++e){let s=n[e];let u=e===n.length-1;let c=i==="/"?t:t.slice(i.length)||"/";let l=j({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);let f=s.route;if(!l&&u&&r&&!n[n.length-1].route.index){l=j({path:s.relativePath,caseSensitive:s.caseSensitive,end:false},c)}if(!l){return null}Object.assign(a,l.params);o.push({// TODO: Can this as be avoided?
params:a,pathname:K([i,l.pathname]),pathnameBase:Q(K([i,l.pathnameBase])),route:f});if(l.pathnameBase!=="/"){i=K([i,l.pathnameBase])}}return o}/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/v6/utils/generate-path
 */function N(e,t){if(t===void 0){t={}}let r=e;if(r.endsWith("*")&&r!=="*"&&!r.endsWith("/*")){l(false,'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));r=r.replace(/\*$/,"/*")}// ensure `/` is added at the beginning if the path is absolute
const n=r.startsWith("/")?"/":"";const a=e=>e==null?"":typeof e==="string"?e:String(e);const i=r.split(/\/+/).map((e,r,n)=>{const i=r===n.length-1;// only apply the splat if it's the last segment
if(i&&e==="*"){const e="*";// Apply the splat
return a(t[e])}const o=e.match(/^:([\w-]+)(\??)$/);if(o){const[,e,r]=o;let n=t[e];c(r==="?"||n!=null,'Missing ":'+e+'" param');return a(n)}// Remove any optional markers from optional static segments
return e.replace(/\?$/g,"")})// Remove empty segments
.filter(e=>!!e);return n+i.join("/")}/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */function j(e,t){if(typeof e==="string"){e={path:e,caseSensitive:false,end:true}}let[r,n]=U(e.path,e.caseSensitive,e.end);let a=t.match(r);if(!a)return null;let i=a[0];let o=i.replace(/(.)\/+$/,"$1");let s=a.slice(1);let u=n.reduce((e,t,r)=>{let{paramName:n,isOptional:a}=t;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if(n==="*"){let e=s[r]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const u=s[r];if(a&&!u){e[n]=undefined}else{e[n]=(u||"").replace(/%2F/g,"/")}return e},{});return{params:u,pathname:i,pathnameBase:o,pattern:e}}function U(e,t,r){if(t===void 0){t=false}if(r===void 0){r=true}l(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[];let a="^"+e.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^${}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:([\w-]+)(\?)?/g,(e,t,r)=>{n.push({paramName:t,isOptional:r!=null});return r?"/?([^\\/]+)?":"/([^\\/]+)"});if(e.endsWith("*")){n.push({paramName:"*"});a+=e==="*"||e==="/*"?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$";// Don't include the / in params["*"]
}else if(r){// When matching to the end, ignore trailing slashes
a+="\\/*$"}else if(e!==""&&e!=="/"){// If our path is non-empty and contains anything beyond an initial slash,
// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
a+="(?:(?=\\/|$))"}else;let i=new RegExp(a,t?undefined:"i");return[i,n]}function H(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){l(false,'The URL path "'+e+'" could not be decoded because it is is a '+"malformed URL segment. This is probably due to a bad percent "+("encoding ("+t+")."));return e}}/**
 * @private
 */function B(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase())){return null}// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let r=t.endsWith("/")?t.length-1:t.length;let n=e.charAt(r);if(n&&n!=="/"){// pathname does not start with basename/
return null}return e.slice(r)||"/"}/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */function Y(e,t){if(t===void 0){t="/"}let{pathname:r,search:n="",hash:a=""}=typeof e==="string"?v(e):e;let i=r?r.startsWith("/")?r:z(r,t):t;return{pathname:i,search:X(n),hash:J(a)}}function z(e,t){let r=t.replace(/\/+$/,"").split("/");let n=e.split("/");n.forEach(e=>{if(e===".."){// Keep the root "" segment so the pathname starts at /
if(r.length>1)r.pop()}else if(e!=="."){r.push(e)}});return r.length>1?r.join("/"):"/"}function V(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function q(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function W(e,t){let r=q(e);// When v7_relativeSplatPath is enabled, use the full pathname for the leaf
// match so we include splat values for "." links.  See:
// https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
if(t){return r.map((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)}return r.map(e=>e.pathnameBase)}/**
 * @private
 */function $(e,t,r,a){if(a===void 0){a=false}let i;if(typeof e==="string"){i=v(e)}else{i=n({},e);c(!i.pathname||!i.pathname.includes("?"),V("?","pathname","search",i));c(!i.pathname||!i.pathname.includes("#"),V("#","pathname","hash",i));c(!i.search||!i.search.includes("#"),V("#","search","hash",i))}let o=e===""||i.pathname==="";let s=o?"/":i.pathname;let u;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(s==null){u=r}else{let e=t.length-1;// With relative="route" (the default), each leading .. segment means
// "go up one route" instead of "go up one URL segment".  This is a key
// difference from how <a href> works and a major reason we call this a
// "to" value instead of a "href".
if(!a&&s.startsWith("..")){let t=s.split("/");while(t[0]===".."){t.shift();e-=1}i.pathname=t.join("/")}u=e>=0?t[e]:"/"}let l=Y(i,u);// Ensure the pathname has a trailing slash if the original "to" had one
let f=s&&s!=="/"&&s.endsWith("/");// Or if this was a link to the current path which has a trailing slash
let d=(o||s===".")&&r.endsWith("/");if(!l.pathname.endsWith("/")&&(f||d)){l.pathname+="/"}return l}/**
 * @private
 */function G(e){// Empty strings should be treated the same as / paths
return e===""||e.pathname===""?"/":typeof e==="string"?v(e).pathname:e.pathname}/**
 * @private
 */const K=e=>e.join("/").replace(/\/\/+/g,"/");/**
 * @private
 */const Q=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");/**
 * @private
 */const X=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e;/**
 * @private
 */const J=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 *
 * @deprecated The `json` method is deprecated in favor of returning raw objects.
 * This method will be removed in v7.
 */const Z=function e(e,t){if(t===void 0){t={}}let r=typeof t==="number"?{status:t}:t;let a=new Headers(r.headers);if(!a.has("Content-Type")){a.set("Content-Type","application/json; charset=utf-8")}return new Response(JSON.stringify(e),n({},r,{headers:a}))};class ee{constructor(e,t){this.type="DataWithResponseInit";this.data=e;this.init=t||null}}/**
 * Create "responses" that contain `status`/`headers` without forcing
 * serialization into an actual `Response` - used by Remix single fetch
 */function et(e,t){return new ee(e,typeof t==="number"?{status:t}:t)}class er extends Error{}class en{constructor(e,t){this.pendingKeysSet=new Set;this.subscribers=new Set;this.deferredKeys=[];c(e&&typeof e==="object"&&!Array.isArray(e),"defer() only accepts plain objects");// Set up an AbortController + Promise we can race against to exit early
// cancellation
let r;this.abortPromise=new Promise((e,t)=>r=t);this.controller=new AbortController;let n=()=>r(new er("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",n);this.controller.signal.addEventListener("abort",n);this.data=Object.entries(e).reduce((e,t)=>{let[r,n]=t;return Object.assign(e,{[r]:this.trackPromise(r,n)})},{});if(this.done){// All incoming values were resolved
this.unlistenAbortSignal()}this.init=t}trackPromise(e,t){if(!(t instanceof Promise)){return t}this.deferredKeys.push(e);this.pendingKeysSet.add(e);// We store a little wrapper promise that will be extended with
// _data/_error props upon resolve/reject
let r=Promise.race([t,this.abortPromise]).then(t=>this.onSettle(r,e,undefined,t),t=>this.onSettle(r,e,t));// Register rejection listeners to avoid uncaught promise rejections on
// errors or aborted deferred values
r.catch(()=>{});Object.defineProperty(r,"_tracked",{get:()=>true});return r}onSettle(e,t,r,n){if(this.controller.signal.aborted&&r instanceof er){this.unlistenAbortSignal();Object.defineProperty(e,"_error",{get:()=>r});return Promise.reject(r)}this.pendingKeysSet.delete(t);if(this.done){// Nothing left to abort!
this.unlistenAbortSignal()}// If the promise was resolved/rejected with undefined, we'll throw an error as you
// should always resolve with a value or null
if(r===undefined&&n===undefined){let r=new Error('Deferred data for key "'+t+'" resolved/rejected with `undefined`, '+"you must resolve/reject with a value or `null`.");Object.defineProperty(e,"_error",{get:()=>r});this.emit(false,t);return Promise.reject(r)}if(n===undefined){Object.defineProperty(e,"_error",{get:()=>r});this.emit(false,t);return Promise.reject(r)}Object.defineProperty(e,"_data",{get:()=>n});this.emit(false,t);return n}emit(e,t){this.subscribers.forEach(r=>r(e,t))}subscribe(e){this.subscribers.add(e);return()=>this.subscribers.delete(e)}cancel(){this.controller.abort();this.pendingKeysSet.forEach((e,t)=>this.pendingKeysSet.delete(t));this.emit(true)}async resolveData(e){let t=false;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r);t=await new Promise(t=>{this.subscribe(n=>{e.removeEventListener("abort",r);if(n||this.done){t(n)}})})}return t}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){c(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds");return Object.entries(this.data).reduce((e,t)=>{let[r,n]=t;return Object.assign(e,{[r]:ei(n)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function ea(e){return e instanceof Promise&&e._tracked===true}function ei(e){if(!ea(e)){return e}if(e._error){throw e._error}return e._data}/**
 * @deprecated The `defer` method is deprecated in favor of returning raw
 * objects. This method will be removed in v7.
 */const eo=function e(e,t){if(t===void 0){t={}}let r=typeof t==="number"?{status:t}:t;return new en(e,r)};/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */const es=function e(e,t){if(t===void 0){t=302}let r=t;if(typeof r==="number"){r={status:r}}else if(typeof r.status==="undefined"){r.status=302}let a=new Headers(r.headers);a.set("Location",e);return new Response(null,n({},r,{headers:a}))};/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */const eu=(e,t)=>{let r=es(e,t);r.headers.set("X-Remix-Reload-Document","true");return r};/**
 * A redirect response that will perform a `history.replaceState` instead of a
 * `history.pushState` for client-side navigation redirects.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */const ec=(e,t)=>{let r=es(e,t);r.headers.set("X-Remix-Replace","true");return r};/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */class el{constructor(e,t,r,n){if(n===void 0){n=false}this.status=e;this.statusText=t||"";this.internal=n;if(r instanceof Error){this.data=r.toString();this.error=r}else{this.data=r}}}/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */function ef(e){return e!=null&&typeof e.status==="number"&&typeof e.statusText==="string"&&typeof e.internal==="boolean"&&"data"in e}const ed=["post","put","patch","delete"];const eh=new Set(ed);const ep=["get",...ed];const ev=new Set(ep);const em=new Set([301,302,303,307,308]);const eg=new Set([307,308]);const ey=/* unused pure expression or super */null&&{state:"idle",location:undefined,formMethod:undefined,formAction:undefined,formEncType:undefined,formData:undefined,json:undefined,text:undefined};const eb=/* unused pure expression or super */null&&{state:"idle",data:undefined,formMethod:undefined,formAction:undefined,formEncType:undefined,formData:undefined,json:undefined,text:undefined};const e_=/* unused pure expression or super */null&&{state:"unblocked",proceed:undefined,reset:undefined,location:undefined};const ew=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;const ex=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)});const eE="remix-router-transitions";//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */function eO(e){const t=e.window?e.window:typeof window!=="undefined"?window:undefined;const r=typeof t!=="undefined"&&typeof t.document!=="undefined"&&typeof t.document.createElement!=="undefined";const i=!r;c(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties){o=e.mapRouteProperties}else if(e.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
let t=e.detectErrorBoundary;o=e=>({hasErrorBoundary:t(e)})}else{o=ex}// Routes keyed by ID
let s={};// Routes in tree format for matching
let u=_(e.routes,o,undefined,s);let f;let d=e.basename||"/";let p=e.dataStrategy||eB;let v=e.patchRoutesOnNavigation;// Config driven behavior flags
let m=n({v7_fetcherPersist:false,v7_normalizeFormMethod:false,v7_partialHydration:false,v7_prependBasename:false,v7_relativeSplatPath:false,v7_skipActionErrorRevalidation:false},e.future);// Cleanup function for history
let y=null;// Externally-provided functions to call on all state changes
let b=new Set;// Externally-provided object to hold scroll restoration locations during routing
let O=null;// Externally-provided function to get scroll restoration keys
let S=null;// Externally-provided function to get current scroll position
let A=null;// One-time flag to control the initial hydration scroll restoration.  Because
// we don't get the saved positions from <ScrollRestoration /> until _after_
// the initial render, we need to manually trigger a separate updateState to
// send along the restoreScrollPosition
// Set to true if we have `hydrationData` since we assume we were SSR'd and that
// SSR did the initial scroll restoration.
let T=e.hydrationData!=null;let R=w(u,e.history.location,d);let k=false;let C=null;if(R==null&&!v){// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
let t=e2(404,{pathname:e.history.location.pathname});let{matches:r,route:n}=e1(u);R=r;C={[n.id]:t}}// In SPA apps, if the user provided a patchRoutesOnNavigation implementation and
// our initial match is a splat route, clear them out so we run through lazy
// discovery on hydration in case there's a more accurate lazy route match.
// In SSR apps (with `hydrationData`), we expect that the server will send
// up the proper matched routes so we don't want to run lazy discovery on
// initial hydration and want to hydrate into the splat route.
if(R&&!e.hydrationData){let t=tl(R,u,e.history.location.pathname);if(t.active){R=null}}let I;if(!R){I=false;R=[];// If partial hydration and fog of war is enabled, we will be running
// `patchRoutesOnNavigation` during hydration so include any partial matches as
// the initial matches so we can properly render `HydrateFallback`'s
if(m.v7_partialHydration){let t=tl(null,u,e.history.location.pathname);if(t.active&&t.matches){k=true;R=t.matches}}}else if(R.some(e=>e.route.lazy)){// All initialMatches need to be loaded before we're ready.  If we have lazy
// functions around still then we'll need to run them in initialize()
I=false}else if(!R.some(e=>e.route.loader)){// If we've got no loaders to run, then we're good to go
I=true}else if(m.v7_partialHydration){// If partial hydration is enabled, we're initialized so long as we were
// provided with hydrationData for every route with a loader, and no loaders
// were marked for explicit hydration
let t=e.hydrationData?e.hydrationData.loaderData:null;let r=e.hydrationData?e.hydrationData.errors:null;// If errors exist, don't consider routes below the boundary
if(r){let e=R.findIndex(e=>r[e.route.id]!==undefined);I=R.slice(0,e+1).every(e=>!eM(e.route,t,r))}else{I=R.every(e=>!eM(e.route,t,r))}}else{// Without partial hydration - we're initialized if we were provided any
// hydrationData - which is expected to be complete
I=e.hydrationData!=null}let P;let D={historyAction:e.history.action,location:e.history.location,matches:R,initialized:I,navigation:ey,// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:e.hydrationData!=null?false:null,preventScrollReset:false,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map};// -- Stateful internal variables to manage navigations --
// Current navigation in progress (to be committed in completeNavigation)
let M=a.Pop;// Should the current navigation prevent the scroll reset if scroll cannot
// be restored?
let L=false;// AbortController for the active navigation
let F;// Should the current navigation enable document.startViewTransition?
let N=false;// Store applied view transitions so we can apply them on POP
let j=new Map;// Cleanup function for persisting applied transitions to sessionStorage
let U=null;// We use this to avoid touching history in completeNavigation if a
// revalidation is entirely uninterrupted
let H=false;// Use this internal flag to force revalidation of all loaders:
//  - submissions (completed or interrupted)
//  - useRevalidator()
//  - X-Remix-Revalidate (from redirect)
let Y=false;// Use this internal array to capture routes that require revalidation due
// to a cancelled deferred on action submission
let z=[];// Use this internal array to capture fetcher loads that were cancelled by an
// action navigation and require revalidation
let V=new Set;// AbortControllers for any in-flight fetchers
let q=new Map;// Track loads based on the order in which they started
let W=0;// Track the outstanding pending navigation data load to be compared against
// the globally incrementing load when a fetcher load lands after a completed
// navigation
let $=-1;// Fetchers that triggered data reloads as a result of their actions
let G=new Map;// Fetchers that triggered redirect navigations
let K=new Set;// Most recent href/match for fetcher.load calls for fetchers
let Q=new Map;// Ref-count mounted fetchers so we know when it's ok to clean them up
let X=new Map;// Fetchers that have requested a delete when using v7_fetcherPersist,
// they'll be officially removed after they return to idle
let J=new Set;// Store DeferredData instances for active route matches.  When a
// route loader returns defer() we stick one in here.  Then, when a nested
// promise resolves we update loaderData.  If a new navigation starts we
// cancel active deferreds for eliminated routes.
let Z=new Map;// Store blocker functions in a separate Map outside of router state since
// we don't need to update UI state if they change
let ee=new Map;// Flag to ignore the next history update, so we can revert the URL change on
// a POP navigation that was blocked by the user without touching router state
let et=undefined;// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function er(){// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
y=e.history.listen(t=>{let{action:r,location:n,delta:a}=t;// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(et){et();et=undefined;return}l(ee.size===0||a!=null,"You are trying to use a blocker on a POP navigation to a location "+"that was not created by @remix-run/router. This will fail silently in "+"production. This can happen if you are navigating outside the router "+"via `window.history.pushState`/`window.location.hash` instead of using "+"router navigation APIs.  This can also happen if you are using "+"createHashRouter and the user manually changes the URL.");let i=e5({currentLocation:D.location,nextLocation:n,historyAction:r});if(i&&a!=null){// Restore the URL to match the current UI, but don't update router state
let t=new Promise(e=>{et=e});e.history.go(a*-1);// Put the blocker into a blocked state
eQ(i,{state:"blocked",location:n,proceed(){eQ(i,{state:"proceeding",proceed:undefined,reset:undefined,location:n});// Re-do the same POP navigation we just blocked, after the url
// restoration is also complete.  See:
// https://github.com/remix-run/react-router/issues/11613
t.then(()=>e.history.go(a))},reset(){let e=new Map(D.blockers);e.set(i,e_);ei({blockers:e})}});return}return ec(r,n)});if(r){// FIXME: This feels gross.  How can we cleanup the lines between
// scrollRestoration/appliedTransitions persistance?
ty(t,j);let e=()=>tb(t,j);t.addEventListener("pagehide",e);U=()=>t.removeEventListener("pagehide",e)}// Kick off initial data load if needed.  Use Pop to avoid modifying history
// Note we don't do any handling of lazy here.  For SPA's it'll get handled
// in the normal navigation flow.  For SSR it's expected that lazy modules are
// resolved prior to router creation since we can't go into a fallbackElement
// UI for SSR'd apps
if(!D.initialized){ec(a.Pop,D.location,{initialHydration:true})}return P}// Clean up a router and it's side effects
function en(){if(y){y()}if(U){U()}b.clear();F&&F.abort();D.fetchers.forEach((e,t)=>eL(t));D.blockers.forEach((e,t)=>eK(t))}// Subscribe to state updates for the router
function ea(e){b.add(e);return()=>b.delete(e)}// Update our state and notify the calling context of the change
function ei(e,t){if(t===void 0){t={}}D=n({},D,e);// Prep fetcher cleanup so we can tell the UI which fetcher data entries
// can be removed
let r=[];let a=[];if(m.v7_fetcherPersist){D.fetchers.forEach((e,t)=>{if(e.state==="idle"){if(J.has(t)){// Unmounted from the UI and can be totally removed
a.push(t)}else{// Returned to idle but still mounted in the UI, so semi-remains for
// revalidations and such
r.push(t)}}})}// Remove any lingering deleted fetchers that have already been removed
// from state.fetchers
J.forEach(e=>{if(!D.fetchers.has(e)&&!q.has(e)){a.push(e)}});// Iterate over a local copy so that if flushSync is used and we end up
// removing and adding a new subscriber due to the useCallback dependencies,
// we don't get ourselves into a loop calling the new subscriber immediately
[...b].forEach(e=>e(D,{deletedFetchers:a,viewTransitionOpts:t.viewTransitionOpts,flushSync:t.flushSync===true}));// Remove idle fetchers from state since we only care about in-flight fetchers.
if(m.v7_fetcherPersist){r.forEach(e=>D.fetchers.delete(e));a.forEach(e=>eL(e))}else{// We already called deleteFetcher() on these, can remove them from this
// Set now that we've handed the keys off to the data layer
a.forEach(e=>J.delete(e))}}// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function eo(t,r,i){var o,s;let{flushSync:c}=i===void 0?{}:i;// Deduce if we're in a loading/actionReload state:
// - We have committed actionData in the store
// - The current navigation was a mutation submission
// - We're past the submitting state and into the loading state
// - The location being loaded is not the result of a redirect
let l=D.actionData!=null&&D.navigation.formMethod!=null&&to(D.navigation.formMethod)&&D.navigation.state==="loading"&&((o=t.state)==null?void 0:o._isRedirect)!==true;let d;if(r.actionData){if(Object.keys(r.actionData).length>0){d=r.actionData}else{// Empty actionData -> clear prior actionData due to an action error
d=null}}else if(l){// Keep the current data if we're wrapping up the action reload
d=D.actionData}else{// Clear actionData on any other completed navigations
d=null}// Always preserve any existing loaderData from re-used routes
let h=r.loaderData?eJ(D.loaderData,r.loaderData,r.matches||[],r.errors):D.loaderData;// On a successful navigation we can assume we got through all blockers
// so we can start fresh
let p=D.blockers;if(p.size>0){p=new Map(p);p.forEach((e,t)=>p.set(t,e_))}// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
let v=L===true||D.navigation.formMethod!=null&&to(D.navigation.formMethod)&&((s=t.state)==null?void 0:s._isRedirect)!==true;// Commit any in-flight routes at the end of the HMR revalidation "navigation"
if(f){u=f;f=undefined}if(H);else if(M===a.Pop);else if(M===a.Push){e.history.push(t,t.state)}else if(M===a.Replace){e.history.replace(t,t.state)}let m;// On POP, enable transitions if they were enabled on the original navigation
if(M===a.Pop){// Forward takes precedence so they behave like the original navigation
let e=j.get(D.location.pathname);if(e&&e.has(t.pathname)){m={currentLocation:D.location,nextLocation:t}}else if(j.has(t.pathname)){// If we don't have a previous forward nav, assume we're popping back to
// the new location and enable if that location previously enabled
m={currentLocation:t,nextLocation:D.location}}}else if(N){// Store the applied transition on PUSH/REPLACE
let e=j.get(D.location.pathname);if(e){e.add(t.pathname)}else{e=new Set([t.pathname]);j.set(D.location.pathname,e)}m={currentLocation:D.location,nextLocation:t}}ei(n({},r,{actionData:d,loaderData:h,historyAction:M,location:t,initialized:true,navigation:ey,revalidation:"idle",restoreScrollPosition:ti(t,r.matches||D.matches),preventScrollReset:v,blockers:p}),{viewTransitionOpts:m,flushSync:c===true});// Reset stateful navigation vars
M=a.Pop;L=false;N=false;H=false;Y=false;z=[]}// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
async function es(t,r){if(typeof t==="number"){e.history.go(t);return}let i=eC(D.location,D.matches,d,m.v7_prependBasename,t,m.v7_relativeSplatPath,r==null?void 0:r.fromRouteId,r==null?void 0:r.relative);let{path:o,submission:s,error:u}=eI(m.v7_normalizeFormMethod,false,i,r);let c=D.location;let l=h(D.location,o,r&&r.state);// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
l=n({},l,e.history.encodeLocation(l));let f=r&&r.replace!=null?r.replace:undefined;let p=a.Push;if(f===true){p=a.Replace}else if(f===false);else if(s!=null&&to(s.formMethod)&&s.formAction===D.location.pathname+D.location.search){// By default on submissions to the current location we REPLACE so that
// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
p=a.Replace}let v=r&&"preventScrollReset"in r?r.preventScrollReset===true:undefined;let g=(r&&r.flushSync)===true;let y=e5({currentLocation:c,nextLocation:l,historyAction:p});if(y){// Put the blocker into a blocked state
eQ(y,{state:"blocked",location:l,proceed(){eQ(y,{state:"proceeding",proceed:undefined,reset:undefined,location:l});// Send the same navigation through
es(t,r)},reset(){let e=new Map(D.blockers);e.set(y,e_);ei({blockers:e})}});return}return await ec(p,l,{submission:s,// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:u,preventScrollReset:v,replace:r&&r.replace,enableViewTransition:r&&r.viewTransition,flushSync:g})}// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
function eu(){eT();ei({revalidation:"loading"});// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
if(D.navigation.state==="submitting"){return}// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
if(D.navigation.state==="idle"){ec(D.historyAction,D.location,{startUninterruptedRevalidation:true});return}// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
ec(M||D.historyAction,D.navigation.location,{overrideNavigation:D.navigation,// Proxy through any rending view transition
enableViewTransition:N===true})}// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
async function ec(t,r,a){// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
F&&F.abort();F=null;M=t;H=(a&&a.startUninterruptedRevalidation)===true;// Save the current scroll position every time we start a new navigation,
// and track whether we should reset scroll on completion
ta(D.location,D.matches);L=(a&&a.preventScrollReset)===true;N=(a&&a.enableViewTransition)===true;let i=f||u;let o=a&&a.overrideNavigation;let s=a!=null&&a.initialHydration&&D.matches&&D.matches.length>0&&!k?// `matchRoutes()` has already been called if we're in here via `router.initialize()`
D.matches:w(i,r,d);let c=(a&&a.flushSync)===true;// Short circuit if it's only a hash change and not a revalidation or
// mutation submission.
//
// Ignore on initial page loads because since the initial hydration will always
// be "same hash".  For example, on /page#hash and submit a <Form method="post">
// which will default to a navigation to /page
if(s&&D.initialized&&!Y&&e4(D.location,r)&&!(a&&a.submission&&to(a.submission.formMethod))){eo(r,{matches:s},{flushSync:c});return}let l=tl(s,i,r.pathname);if(l.active&&l.matches){s=l.matches}// Short circuit with a 404 on the root error boundary if we match nothing
if(!s){let{error:e,notFoundMatches:t,route:n}=e3(r.pathname);eo(r,{matches:t,loaderData:{},errors:{[n.id]:e}},{flushSync:c});return}// Create a controller/Request for this navigation
F=new AbortController;let h=e$(e.history,r,F.signal,a&&a.submission);let p;if(a&&a.pendingError){// If we have a pendingError, it means the user attempted a GET submission
// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
p=[e0(s).route.id,{type:g.error,error:a.pendingError}]}else if(a&&a.submission&&to(a.submission.formMethod)){// Call action if we received an action submission
let t=await el(h,r,a.submission,s,l.active,{replace:a.replace,flushSync:c});if(t.shortCircuited){return}// If we received a 404 from handleAction, it's because we couldn't lazily
// discover the destination route so we don't want to call loaders
if(t.pendingActionResult){let[e,n]=t.pendingActionResult;if(e9(n)&&ef(n.error)&&n.error.status===404){F=null;eo(r,{matches:t.matches,loaderData:{},errors:{[e]:n.error}});return}}s=t.matches||s;p=t.pendingActionResult;o=th(r,a.submission);c=false;// No need to do fog of war matching again on loader execution
l.active=false;// Create a GET request for the loaders
h=e$(e.history,h.url,h.signal)}// Call loaders
let{shortCircuited:v,matches:m,loaderData:y,errors:b}=await ed(h,r,s,l.active,o,a&&a.submission,a&&a.fetcherSubmission,a&&a.replace,a&&a.initialHydration===true,c,p);if(v){return}// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
F=null;eo(r,n({matches:m||s},eZ(p),{loaderData:y,errors:b}))}// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
async function el(e,t,r,n,i,o){if(o===void 0){o={}}eT();// Put us in a submitting state
let s=tp(t,r);ei({navigation:s},{flushSync:o.flushSync===true});if(i){let r=await t_(n,t.pathname,e.signal);if(r.type==="aborted"){return{shortCircuited:true}}else if(r.type==="error"){let e=e0(r.partialMatches).route.id;return{matches:r.partialMatches,pendingActionResult:[e,{type:g.error,error:r.error}]}}else if(!r.matches){let{notFoundMatches:e,error:r,route:n}=e3(t.pathname);return{matches:e,pendingActionResult:[n.id,{type:g.error,error:r}]}}else{n=r.matches}}// Call our action and get the result
let u;let c=tf(n,t);if(!c.route.action&&!c.route.lazy){u={type:g.error,error:e2(405,{method:e.method,pathname:t.pathname,routeId:c.route.id})}}else{let t=await eS("action",D,e,[c],n,null);u=t[c.route.id];if(e.signal.aborted){return{shortCircuited:true}}}if(te(u)){let t;if(o&&o.replace!=null){t=o.replace}else{// If the user didn't explicity indicate replace behavior, replace if
// we redirected to the exact same location we're currently at to avoid
// double back-buttons
let r=eW(u.response.headers.get("Location"),new URL(e.url),d);t=r===D.location.pathname+D.location.search}await eO(e,u,true,{submission:r,replace:t});return{shortCircuited:true}}if(e8(u)){throw e2(400,{type:"defer-action"})}if(e9(u)){// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=e0(n,c.route.id);// By default, all submissions to the current location are REPLACE
// navigations, but if the action threw an error that'll be rendered in
// an errorElement, we fall back to PUSH so that the user can use the
// back button to get back to the pre-submission form location to try
// again
if((o&&o.replace)!==true){M=a.Push}return{matches:n,pendingActionResult:[e.route.id,u]}}return{matches:n,pendingActionResult:[c.route.id,u]}}// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
async function ed(t,r,a,i,o,s,c,l,h,p,v){// Figure out the right navigation we want to use for data loading
let g=o||th(r,s);// If this was a redirect from an action we don't have a "submission" but
// we have it on the loading navigation so use that if available
let y=s||c||td(g);// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
// If we have partialHydration enabled, then don't update the state for the
// initial data load since it's not a "navigation"
let b=!H&&(!m.v7_partialHydration||!h);// When fog of war is enabled, we enter our `loading` state earlier so we
// can discover new routes during the `loading` state.  We skip this if
// we've already run actions since we would have done our matching already.
// If the children() function threw then, we want to proceed with the
// partial matches it discovered.
if(i){if(b){let e=eh(v);ei(n({navigation:g},e!==undefined?{actionData:e}:{}),{flushSync:p})}let e=await t_(a,r.pathname,t.signal);if(e.type==="aborted"){return{shortCircuited:true}}else if(e.type==="error"){let t=e0(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}else if(!e.matches){let{error:e,notFoundMatches:t,route:n}=e3(r.pathname);return{matches:t,loaderData:{},errors:{[n.id]:e}}}else{a=e.matches}}let _=f||u;let[w,x]=eD(e.history,D,a,y,r,m.v7_partialHydration&&h===true,m.v7_skipActionErrorRevalidation,Y,z,V,J,Q,K,_,d,v);// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
tt(e=>!(a&&a.some(t=>t.route.id===e))||w&&w.some(t=>t.route.id===e));$=++W;// Short circuit if we have no loaders to run
if(w.length===0&&x.length===0){let e=eH();eo(r,n({matches:a,loaderData:{},// Commit pending error if we're short circuiting
errors:v&&e9(v[1])?{[v[0]]:v[1].error}:null},eZ(v),e?{fetchers:new Map(D.fetchers)}:{}),{flushSync:p});return{shortCircuited:true}}if(b){let e={};if(!i){// Only update navigation/actionNData if we didn't already do it above
e.navigation=g;let t=eh(v);if(t!==undefined){e.actionData=t}}if(x.length>0){e.fetchers=ep(x)}ei(e,{flushSync:p})}x.forEach(e=>{eN(e.key);if(e.controller){// Fetchers use an independent AbortController so that aborting a fetcher
// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
q.set(e.key,e.controller)}});// Proxy navigation abort through to revalidation fetchers
let E=()=>x.forEach(e=>eN(e.key));if(F){F.signal.addEventListener("abort",E)}let{loaderResults:O,fetcherResults:S}=await eA(D,a,w,x,t);if(t.signal.aborted){return{shortCircuited:true}}// Clean up _after_ loaders have completed.  Don't clean up if we short
// circuited because fetchControllers would have been aborted and
// reassigned to new controllers for the next navigation
if(F){F.signal.removeEventListener("abort",E)}x.forEach(e=>q.delete(e.key));// If any loaders returned a redirect Response, start a new REPLACE navigation
let A=e6(O);if(A){await eO(t,A.result,true,{replace:l});return{shortCircuited:true}}A=e6(S);if(A){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
K.add(A.key);await eO(t,A.result,true,{replace:l});return{shortCircuited:true}}// Process and commit output from loaders
let{loaderData:T,errors:R}=eX(D,a,O,v,x,S,Z);// Wire up subscribers to update loaderData as promises settle
Z.forEach((e,t)=>{e.subscribe(r=>{// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
if(r||e.done){Z.delete(t)}})});// Preserve SSR errors during partial hydration
if(m.v7_partialHydration&&h&&D.errors){R=n({},D.errors,R)}let k=eH();let C=ez($);let I=k||C||x.length>0;return n({matches:a,loaderData:T,errors:R},I?{fetchers:new Map(D.fetchers)}:{})}function eh(e){if(e&&!e9(e[1])){// This is cast to `any` currently because `RouteData`uses any and it
// would be a breaking change to use any.
// TODO: v7 - change `RouteData` to use `unknown` instead of `any`
return{[e[0]]:e[1].data}}else if(D.actionData){if(Object.keys(D.actionData).length===0){return null}else{return D.actionData}}}function ep(e){e.forEach(e=>{let t=D.fetchers.get(e.key);let r=tv(undefined,t?t.data:undefined);D.fetchers.set(e.key,r)});return new Map(D.fetchers)}// Trigger a fetcher load/submit for the given fetcher key
function ev(e,t,r,n){if(i){throw new Error("router.fetch() was called during the server render, but it shouldn't be. "+"You are likely calling a useFetcher() method in the body of your component. "+"Try moving it to a useEffect or a callback.")}eN(e);let a=(n&&n.flushSync)===true;let o=f||u;let s=eC(D.location,D.matches,d,m.v7_prependBasename,r,m.v7_relativeSplatPath,t,n==null?void 0:n.relative);let c=w(o,s,d);let l=tl(c,o,s);if(l.active&&l.matches){c=l.matches}if(!c){ek(e,t,e2(404,{pathname:s}),{flushSync:a});return}let{path:h,submission:p,error:v}=eI(m.v7_normalizeFormMethod,true,s,n);if(v){ek(e,t,v,{flushSync:a});return}let g=tf(c,h);let y=(n&&n.preventScrollReset)===true;if(p&&to(p.formMethod)){em(e,t,h,g,c,l.active,a,y,p);return}// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
Q.set(e,{routeId:t,path:h});eE(e,t,h,g,c,l.active,a,y,p)}// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
async function em(t,r,n,a,i,o,s,l,h){eT();Q.delete(t);function p(e){if(!e.route.action&&!e.route.lazy){let e=e2(405,{method:h.formMethod,pathname:n,routeId:r});ek(t,r,e,{flushSync:s});return true}return false}if(!o&&p(a)){return}// Put this fetcher into it's submitting state
let v=D.fetchers.get(t);eR(t,tm(h,v),{flushSync:s});let g=new AbortController;let y=e$(e.history,n,g.signal,h);if(o){let e=await t_(i,new URL(y.url).pathname,y.signal,t);if(e.type==="aborted"){return}else if(e.type==="error"){ek(t,r,e.error,{flushSync:s});return}else if(!e.matches){ek(t,r,e2(404,{pathname:n}),{flushSync:s});return}else{i=e.matches;a=tf(i,n);if(p(a)){return}}}// Call the action for the fetcher
q.set(t,g);let b=W;let _=await eS("action",D,y,[a],i,t);let x=_[a.route.id];if(y.signal.aborted){// We can delete this so long as we weren't aborted by our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
if(q.get(t)===g){q.delete(t)}return}// When using v7_fetcherPersist, we don't want errors bubbling up to the UI
// or redirects processed for unmounted fetchers so we just revert them to
// idle
if(m.v7_fetcherPersist&&J.has(t)){if(te(x)||e9(x)){eR(t,tg(undefined));return}// Let SuccessResult's fall through for revalidation
}else{if(te(x)){q.delete(t);if($>b){// A new navigation was kicked off after our action started, so that
// should take precedence over this redirect navigation.  We already
// set isRevalidationRequired so all loaders for the new route should
// fire unless opted out via shouldRevalidate
eR(t,tg(undefined));return}else{K.add(t);eR(t,tv(h));return eO(y,x,false,{fetcherSubmission:h,preventScrollReset:l})}}// Process any non-redirect errors thrown
if(e9(x)){ek(t,r,x.error);return}}if(e8(x)){throw e2(400,{type:"defer-action"})}// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
let E=D.navigation.location||D.location;let O=e$(e.history,E,g.signal);let S=f||u;let A=D.navigation.state!=="idle"?w(S,D.navigation.location,d):D.matches;c(A,"Didn't find any matches after fetcher action");let T=++W;G.set(t,T);let R=tv(h,x.data);D.fetchers.set(t,R);let[k,C]=eD(e.history,D,A,h,E,false,m.v7_skipActionErrorRevalidation,Y,z,V,J,Q,K,S,d,[a.route.id,x]);// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
C.filter(e=>e.key!==t).forEach(e=>{let t=e.key;let r=D.fetchers.get(t);let n=tv(undefined,r?r.data:undefined);D.fetchers.set(t,n);eN(t);if(e.controller){q.set(t,e.controller)}});ei({fetchers:new Map(D.fetchers)});let I=()=>C.forEach(e=>eN(e.key));g.signal.addEventListener("abort",I);let{loaderResults:P,fetcherResults:L}=await eA(D,A,k,C,O);if(g.signal.aborted){return}g.signal.removeEventListener("abort",I);G.delete(t);q.delete(t);C.forEach(e=>q.delete(e.key));let N=e6(P);if(N){return eO(O,N.result,false,{preventScrollReset:l})}N=e6(L);if(N){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
K.add(N.key);return eO(O,N.result,false,{preventScrollReset:l})}// Process and commit output from loaders
let{loaderData:j,errors:U}=eX(D,A,P,undefined,C,L,Z);// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
if(D.fetchers.has(t)){let e=tg(x.data);D.fetchers.set(t,e)}ez(T);// If we are currently in a navigation loading state and this fetcher is
// more recent than the navigation, we want the newer data so abort the
// navigation and complete it with the fetcher data
if(D.navigation.state==="loading"&&T>$){c(M,"Expected pending action");F&&F.abort();eo(D.navigation.location,{matches:A,loaderData:j,errors:U,fetchers:new Map(D.fetchers)})}else{// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
ei({errors:U,loaderData:eJ(D.loaderData,j,A,U),fetchers:new Map(D.fetchers)});Y=false}}// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
async function eE(t,r,n,a,i,o,s,u,l){let f=D.fetchers.get(t);eR(t,tv(l,f?f.data:undefined),{flushSync:s});let d=new AbortController;let h=e$(e.history,n,d.signal);if(o){let e=await t_(i,new URL(h.url).pathname,h.signal,t);if(e.type==="aborted"){return}else if(e.type==="error"){ek(t,r,e.error,{flushSync:s});return}else if(!e.matches){ek(t,r,e2(404,{pathname:n}),{flushSync:s});return}else{i=e.matches;a=tf(i,n)}}// Call the loader for this fetcher route match
q.set(t,d);let p=W;let v=await eS("loader",D,h,[a],i,t);let m=v[a.route.id];// Deferred isn't supported for fetcher loads, await everything and treat it
// as a normal load.  resolveDeferredData will return undefined if this
// fetcher gets aborted, so we just leave result untouched and short circuit
// below if that happens
if(e8(m)){m=await tc(m,h.signal,true)||m}// We can delete this so long as we weren't aborted by our our own fetcher
// re-load which would have put _new_ controller is in fetchControllers
if(q.get(t)===d){q.delete(t)}if(h.signal.aborted){return}// We don't want errors bubbling up or redirects followed for unmounted
// fetchers, so short circuit here if it was removed from the UI
if(J.has(t)){eR(t,tg(undefined));return}// If the loader threw a redirect Response, start a new REPLACE navigation
if(te(m)){if($>p){// A new navigation was kicked off after our loader started, so that
// should take precedence over this redirect navigation
eR(t,tg(undefined));return}else{K.add(t);await eO(h,m,false,{preventScrollReset:u});return}}// Process any non-redirect errors thrown
if(e9(m)){ek(t,r,m.error);return}c(!e8(m),"Unhandled fetcher deferred data");// Put the fetcher back into an idle state
eR(t,tg(m.data))}/**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */async function eO(i,o,s,u){let{submission:l,fetcherSubmission:f,preventScrollReset:p,replace:v}=u===void 0?{}:u;if(o.response.headers.has("X-Remix-Revalidate")){Y=true}let m=o.response.headers.get("Location");c(m,"Expected a Location header on the redirect Response");m=eW(m,new URL(i.url),d);let g=h(D.location,m,{_isRedirect:true});if(r){let r=false;if(o.response.headers.has("X-Remix-Reload-Document")){// Hard reload if the response contained X-Remix-Reload-Document
r=true}else if(ew.test(m)){const n=e.history.createURL(m);r=// Hard reload if it's an absolute URL to a new origin
n.origin!==t.location.origin||// Hard reload if it's an absolute URL that does not match our basename
B(n.pathname,d)==null}if(r){if(v){t.location.replace(m)}else{t.location.assign(m)}return}}// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
F=null;let y=v===true||o.response.headers.has("X-Remix-Replace")?a.Replace:a.Push;// Use the incoming submission if provided, fallback on the active one in
// state.navigation
let{formMethod:b,formAction:_,formEncType:w}=D.navigation;if(!l&&!f&&b&&_&&w){l=td(D.navigation)}// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
let x=l||f;if(eg.has(o.response.status)&&x&&to(x.formMethod)){await ec(y,g,{submission:n({},x,{formAction:m}),// Preserve these flags across redirects
preventScrollReset:p||L,enableViewTransition:s?N:undefined})}else{// If we have a navigation submission, we will preserve it through the
// redirect navigation
let e=th(g,l);await ec(y,g,{overrideNavigation:e,// Send fetcher submissions through for shouldRevalidate
fetcherSubmission:f,// Preserve these flags across redirects
preventScrollReset:p||L,enableViewTransition:s?N:undefined})}}// Utility wrapper for calling dataStrategy client-side without having to
// pass around the manifest, mapRouteProperties, etc.
async function eS(e,t,r,n,a,i){let u;let c={};try{u=await eY(p,e,t,r,n,a,i,s,o)}catch(e){// If the outer dataStrategy method throws, just return the error for all
// matches - and it'll naturally bubble to the root
n.forEach(t=>{c[t.route.id]={type:g.error,error:e}});return c}for(let[e,t]of Object.entries(u)){if(e7(t)){let n=t.result;c[e]={type:g.redirect,response:eq(n,r,e,a,d,m.v7_relativeSplatPath)}}else{c[e]=await eV(t)}}return c}async function eA(t,r,n,a,i){let o=t.matches;// Kick off loaders and fetchers in parallel
let s=eS("loader",t,i,n,r,null);let u=Promise.all(a.map(async r=>{if(r.matches&&r.match&&r.controller){let n=await eS("loader",t,e$(e.history,r.path,r.controller.signal),[r.match],r.matches,r.key);let a=n[r.match.route.id];// Fetcher results are keyed by fetcher key from here on out, not routeId
return{[r.key]:a}}else{return Promise.resolve({[r.key]:{type:g.error,error:e2(404,{pathname:r.path})}})}}));let c=await s;let l=(await u).reduce((e,t)=>Object.assign(e,t),{});await Promise.all([ts(r,c,i.signal,o,t.loaderData),tu(r,l,a)]);return{loaderResults:c,fetcherResults:l}}function eT(){// Every interruption triggers a revalidation
Y=true;// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
z.push(...tt());// Abort in-flight fetcher loads
Q.forEach((e,t)=>{if(q.has(t)){V.add(t)}eN(t)})}function eR(e,t,r){if(r===void 0){r={}}D.fetchers.set(e,t);ei({fetchers:new Map(D.fetchers)},{flushSync:(r&&r.flushSync)===true})}function ek(e,t,r,n){if(n===void 0){n={}}let a=e0(D.matches,t);eL(e);ei({errors:{[a.route.id]:r},fetchers:new Map(D.fetchers)},{flushSync:(n&&n.flushSync)===true})}function eP(e){X.set(e,(X.get(e)||0)+1);// If this fetcher was previously marked for deletion, unmark it since we
// have a new instance
if(J.has(e)){J.delete(e)}return D.fetchers.get(e)||eb}function eL(e){let t=D.fetchers.get(e);// Don't abort the controller if this is a deletion of a fetcher.submit()
// in it's loading phase since - we don't want to abort the corresponding
// revalidation and want them to complete and land
if(q.has(e)&&!(t&&t.state==="loading"&&G.has(e))){eN(e)}Q.delete(e);G.delete(e);K.delete(e);// If we opted into the flag we can clear this now since we're calling
// deleteFetcher() at the end of updateState() and we've already handed the
// deleted fetcher keys off to the data layer.
// If not, we're eagerly calling deleteFetcher() and we need to keep this
// Set populated until the next updateState call, and we'll clear
// `deletedFetchers` then
if(m.v7_fetcherPersist){J.delete(e)}V.delete(e);D.fetchers.delete(e)}function eF(e){let t=(X.get(e)||0)-1;if(t<=0){X.delete(e);J.add(e);if(!m.v7_fetcherPersist){eL(e)}}else{X.set(e,t)}ei({fetchers:new Map(D.fetchers)})}function eN(e){let t=q.get(e);if(t){t.abort();q.delete(e)}}function eU(e){for(let t of e){let e=eP(t);let r=tg(e.data);D.fetchers.set(t,r)}}function eH(){let e=[];let t=false;for(let r of K){let n=D.fetchers.get(r);c(n,"Expected fetcher: "+r);if(n.state==="loading"){K.delete(r);e.push(r);t=true}}eU(e);return t}function ez(e){let t=[];for(let[r,n]of G){if(n<e){let e=D.fetchers.get(r);c(e,"Expected fetcher: "+r);if(e.state==="loading"){eN(r);G.delete(r);t.push(r)}}}eU(t);return t.length>0}function eG(e,t){let r=D.blockers.get(e)||e_;if(ee.get(e)!==t){ee.set(e,t)}return r}function eK(e){D.blockers.delete(e);ee.delete(e)}// Utility function to update blockers, ensuring valid state transitions
function eQ(e,t){let r=D.blockers.get(e)||e_;// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
c(r.state==="unblocked"&&t.state==="blocked"||r.state==="blocked"&&t.state==="blocked"||r.state==="blocked"&&t.state==="proceeding"||r.state==="blocked"&&t.state==="unblocked"||r.state==="proceeding"&&t.state==="unblocked","Invalid blocker state transition: "+r.state+" -> "+t.state);let n=new Map(D.blockers);n.set(e,t);ei({blockers:n})}function e5(e){let{currentLocation:t,nextLocation:r,historyAction:n}=e;if(ee.size===0){return}// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
if(ee.size>1){l(false,"A router only supports one blocker at a time")}let a=Array.from(ee.entries());let[i,o]=a[a.length-1];let s=D.blockers.get(i);if(s&&s.state==="proceeding"){// If the blocker is currently proceeding, we don't need to re-check
// it and can let this navigation continue
return}// At this point, we know we're unblocked/blocked so we need to check the
// user-provided blocker function
if(o({currentLocation:t,nextLocation:r,historyAction:n})){return i}}function e3(e){let t=e2(404,{pathname:e});let r=f||u;let{matches:n,route:a}=e1(r);// Cancel all pending deferred on 404s since we don't keep any routes
tt();return{notFoundMatches:n,route:a,error:t}}function tt(e){let t=[];Z.forEach((r,n)=>{if(!e||e(n)){// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
r.cancel();t.push(n);Z.delete(n)}});return t}// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function tr(e,t,r){O=e;A=t;S=r||null;// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(!T&&D.navigation===ey){T=true;let e=ti(D.location,D.matches);if(e!=null){ei({restoreScrollPosition:e})}}return()=>{O=null;A=null;S=null}}function tn(e,t){if(S){let r=S(e,t.map(e=>E(e,D.loaderData)));return r||e.key}return e.key}function ta(e,t){if(O&&A){let r=tn(e,t);O[r]=A()}}function ti(e,t){if(O){let r=tn(e,t);let n=O[r];if(typeof n==="number"){return n}}return null}function tl(e,t,r){if(v){if(!e){let e=x(t,r,d,true);return{active:true,matches:e||[]}}else{if(Object.keys(e[0].params).length>0){// If we matched a dynamic param or a splat, it might only be because
// we haven't yet discovered other routes that would match with a
// higher score.  Call patchRoutesOnNavigation just to be sure
let e=x(t,r,d,true);return{active:true,matches:e}}}}return{active:false,matches:null}}async function t_(e,t,r,n){if(!v){return{type:"success",matches:e}}let a=e;while(true){let e=f==null;let i=f||u;let c=s;try{await v({signal:r,path:t,matches:a,fetcherKey:n,patch:(e,t)=>{if(r.aborted)return;ej(e,t,i,c,o)}})}catch(e){return{type:"error",error:e,partialMatches:a}}finally{// If we are not in the middle of an HMR revalidation and we changed the
// routes, provide a new identity so when we `updateState` at the end of
// this navigation/fetch `router.routes` will be a new identity and
// trigger a re-run of memoized `router.routes` dependencies.
// HMR will already update the identity and reflow when it lands
// `inFlightDataRoutes` in `completeNavigation`
if(e&&!r.aborted){u=[...u]}}if(r.aborted){return{type:"aborted"}}let l=w(i,t,d);if(l){return{type:"success",matches:l}}let h=x(i,t,d,true);// Avoid loops if the second pass results in the same partial matches
if(!h||a.length===h.length&&a.every((e,t)=>e.route.id===h[t].route.id)){return{type:"success",matches:null}}a=h}}function tw(e){s={};f=_(e,o,undefined,s)}function tx(e,t){let r=f==null;let n=f||u;ej(e,t,n,s,o);// If we are not in the middle of an HMR revalidation and we changed the
// routes, provide a new identity and trigger a reflow via `updateState`
// to re-run memoized `router.routes` dependencies.
// HMR will already update the identity and reflow when it lands
// `inFlightDataRoutes` in `completeNavigation`
if(r){u=[...u];ei({})}}P={get basename(){return d},get future(){return m},get state(){return D},get routes(){return u},get window(){return t},initialize:er,subscribe:ea,enableScrollRestoration:tr,navigate:es,fetch:ev,revalidate:eu,// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:eP,deleteFetcher:eF,dispose:en,getBlocker:eG,deleteBlocker:eK,patchRoutes:tx,_internalFetchControllers:q,_internalActiveDeferreds:Z,// TODO: Remove setRoutes, it's temporary to avoid dealing with
// updating the tree while validating the update algorithm.
_internalSetRoutes:tw};return P}//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const eS=Symbol("deferred");function eA(e,t){c(e.length>0,"You must provide a non-empty routes array to createStaticHandler");let r={};let a=(t?t.basename:null)||"/";let i;if(t!=null&&t.mapRouteProperties){i=t.mapRouteProperties}else if(t!=null&&t.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
let e=t.detectErrorBoundary;i=t=>({hasErrorBoundary:e(t)})}else{i=ex}// Config driven behavior flags
let o=n({v7_relativeSplatPath:false,v7_throwAbortReason:false},t?t.future:null);let s=_(e,i,undefined,r);/**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */async function u(e,t){let{requestContext:r,skipLoaderErrorBubbling:i,dataStrategy:o}=t===void 0?{}:t;let u=new URL(e.url);let c=e.method;let l=h("",p(u),null,"default");let d=w(s,l,a);// SSR supports HEAD requests while SPA doesn't
if(!ti(c)&&c!=="HEAD"){let e=e2(405,{method:c});let{matches:t,route:r}=e1(s);return{basename:a,location:l,matches:t,loaderData:{},actionData:null,errors:{[r.id]:e},statusCode:e.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}else if(!d){let e=e2(404,{pathname:l.pathname});let{matches:t,route:r}=e1(s);return{basename:a,location:l,matches:t,loaderData:{},actionData:null,errors:{[r.id]:e},statusCode:e.status,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}let v=await f(e,l,d,r,o||null,i===true,null);if(tn(v)){return v}// When returning StaticHandlerContext, we patch back in the location here
// since we need it for React Context.  But this helps keep our submit and
// loadRouteData operating on a Request instead of a Location
return n({location:l,basename:a},v)}/**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */async function l(e,t){let{routeId:r,requestContext:n,dataStrategy:i}=t===void 0?{}:t;let o=new URL(e.url);let u=e.method;let c=h("",p(o),null,"default");let l=w(s,c,a);// SSR supports HEAD requests while SPA doesn't
if(!ti(u)&&u!=="HEAD"&&u!=="OPTIONS"){throw e2(405,{method:u})}else if(!l){throw e2(404,{pathname:c.pathname})}let d=r?l.find(e=>e.route.id===r):tf(l,c);if(r&&!d){throw e2(403,{pathname:c.pathname,routeId:r})}else if(!d){// This should never hit I don't think?
throw e2(404,{pathname:c.pathname})}let v=await f(e,c,l,n,i||null,false,d);if(tn(v)){return v}let m=v.errors?Object.values(v.errors)[0]:undefined;if(m!==undefined){// If we got back result.errors, that means the loader/action threw
// _something_ that wasn't a Response, but it's not guaranteed/required
// to be an `instanceof Error` either, so we have to use throw here to
// preserve the "error" state outside of queryImpl.
throw m}// Pick off the right state value to return
if(v.actionData){return Object.values(v.actionData)[0]}if(v.loaderData){var g;let e=Object.values(v.loaderData)[0];if((g=v.activeDeferreds)!=null&&g[d.route.id]){e[eS]=v.activeDeferreds[d.route.id]}return e}return undefined}async function f(e,t,r,a,i,o,s){c(e.signal,"query()/queryRoute() requests must contain an AbortController signal");try{if(to(e.method.toLowerCase())){let n=await d(e,r,s||tf(r,t),a,i,o,s!=null);return n}let u=await v(e,r,a,i,o,s);return tn(u)?u:n({},u,{actionData:null,actionHeaders:{}})}catch(e){// If the user threw/returned a Response in callLoaderOrAction for a
// `queryRoute` call, we throw the `DataStrategyResult` to bail out early
// and then return or throw the raw Response here accordingly
if(e3(e)&&tn(e.result)){if(e.type===g.error){throw e.result}return e.result}// Redirects are always returned since they don't propagate to catch
// boundaries
if(ta(e)){return e}throw e}}async function d(e,t,r,a,i,s,u){let c;if(!r.route.action&&!r.route.lazy){let t=e2(405,{method:e.method,pathname:new URL(e.url).pathname,routeId:r.route.id});if(u){throw t}c={type:g.error,error:t}}else{let n=await m("action",e,[r],t,u,a,i);c=n[r.route.id];if(e.signal.aborted){eR(e,u,o)}}if(te(c)){// Uhhhh - this should never happen, we should always throw these from
// callLoaderOrAction, but the type narrowing here keeps TS happy and we
// can get back on the "throw all redirect responses" train here should
// this ever happen :/
throw new Response(null,{status:c.response.status,headers:{Location:c.response.headers.get("Location")}})}if(e8(c)){let e=e2(400,{type:"defer-action"});if(u){throw e}c={type:g.error,error:e}}if(u){// Note: This should only be non-Response values if we get here, since
// isRouteRequest should throw any Response received in callLoaderOrAction
if(e9(c)){throw c.error}return{matches:[r],loaderData:{},actionData:{[r.route.id]:c.data},errors:null,// Note: statusCode + headers are unused here since queryRoute will
// return the raw Response or value
statusCode:200,loaderHeaders:{},actionHeaders:{},activeDeferreds:null}}// Create a GET request for the loaders
let l=new Request(e.url,{headers:e.headers,redirect:e.redirect,signal:e.signal});if(e9(c)){// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=s?r:e0(t,r.route.id);let o=await v(l,t,a,i,s,null,[e.route.id,c]);// action status codes take precedence over loader status codes
return n({},o,{statusCode:ef(c.error)?c.error.status:c.statusCode!=null?c.statusCode:500,actionData:null,actionHeaders:n({},c.headers?{[r.route.id]:c.headers}:{})})}let f=await v(l,t,a,i,s,null);return n({},f,{actionData:{[r.route.id]:c.data}},c.statusCode?{statusCode:c.statusCode}:{},{actionHeaders:c.headers?{[r.route.id]:c.headers}:{}})}async function v(e,t,r,a,i,s,u){let c=s!=null;// Short circuit if we have no loaders to run (queryRoute())
if(c&&!(s!=null&&s.route.loader)&&!(s!=null&&s.route.lazy)){throw e2(400,{method:e.method,pathname:new URL(e.url).pathname,routeId:s==null?void 0:s.route.id})}let l=s?[s]:u&&e9(u[1])?eP(t,u[0]):t;let f=l.filter(e=>e.route.loader||e.route.lazy);// Short circuit if we have no loaders to run (query())
if(f.length===0){return{matches:t,// Add a null for all matched routes for proper revalidation on the client
loaderData:t.reduce((e,t)=>Object.assign(e,{[t.route.id]:null}),{}),errors:u&&e9(u[1])?{[u[0]]:u[1].error}:null,statusCode:200,loaderHeaders:{},activeDeferreds:null}}let d=await m("loader",e,f,t,c,r,a);if(e.signal.aborted){eR(e,c,o)}// Process and commit output from loaders
let h=new Map;let p=eQ(t,d,u,h,i);// Add a null for any non-loader matches for proper revalidation on the client
let v=new Set(f.map(e=>e.route.id));t.forEach(e=>{if(!v.has(e.route.id)){p.loaderData[e.route.id]=null}});return n({},p,{matches:t,activeDeferreds:h.size>0?Object.fromEntries(h.entries()):null})}// Utility wrapper for calling dataStrategy server-side without having to
// pass around the manifest, mapRouteProperties, etc.
async function m(e,t,n,s,u,c,l){let f=await eY(l||eB,e,null,t,n,s,null,r,i,c);let d={};await Promise.all(s.map(async e=>{if(!(e.route.id in f)){return}let r=f[e.route.id];if(e7(r)){let n=r.result;// Throw redirects and let the server handle them with an HTTP redirect
throw eq(n,t,e.route.id,s,a,o.v7_relativeSplatPath)}if(tn(r.result)&&u){// For SSR single-route requests, we want to hand Responses back
// directly without unwrapping
throw r}d[e.route.id]=await eV(r)}));return d}return{dataRoutes:s,query:u,queryRoute:l}}//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */function eT(e,t,r){let a=n({},t,{statusCode:ef(r)?r.status:500,errors:{[t._deepestRenderedBoundaryId||e[0].id]:r}});return a}function eR(e,t,r){if(r.v7_throwAbortReason&&e.signal.reason!==undefined){throw e.signal.reason}let n=t?"queryRoute":"query";throw new Error(n+"() call aborted: "+e.method+" "+e.url)}function ek(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==undefined)}function eC(e,t,r,n,a,i,o,s){let u;let c;if(o){// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route
u=[];for(let e of t){u.push(e);if(e.route.id===o){c=e;break}}}else{u=t;c=t[t.length-1]}// Resolve the relative path
let l=$(a?a:".",W(u,i),B(e.pathname,r)||e.pathname,s==="path");// When `to` is not specified we inherit search/hash from the current
// location, unlike when to="." and we just inherit the path.
// See https://github.com/remix-run/remix/issues/927
if(a==null){l.search=e.search;l.hash=e.hash}// Account for `?index` params when routing to the current location
if((a==null||a===""||a===".")&&c){let e=tl(l.search);if(c.route.index&&!e){// Add one when we're targeting an index route
l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"}else if(!c.route.index&&e){// Remove existing ones when we're not
let e=new URLSearchParams(l.search);let t=e.getAll("index");e.delete("index");t.filter(e=>e).forEach(t=>e.append("index",t));let r=e.toString();l.search=r?"?"+r:""}}// If we're operating within a basename, prepend it to the pathname.  If
// this is a root navigation, then just use the raw basename which allows
// the basename to have full control over the presence of a trailing slash
// on root actions
if(n&&r!=="/"){l.pathname=l.pathname==="/"?r:K([r,l.pathname])}return p(l)}// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function eI(e,t,r,n){// Return location verbatim on non-submission navigations
if(!n||!ek(n)){return{path:r}}if(n.formMethod&&!ti(n.formMethod)){return{path:r,error:e2(405,{method:n.formMethod})}}let a=()=>({path:r,error:e2(400,{type:"invalid-body"})});// Create a Submission on non-GET navigations
let i=n.formMethod||"get";let o=e?i.toUpperCase():i.toLowerCase();let s=e5(r);if(n.body!==undefined){if(n.formEncType==="text/plain"){// text only support POST/PUT/PATCH/DELETE submissions
if(!to(o)){return a()}let e=typeof n.body==="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
Array.from(n.body.entries()).reduce((e,t)=>{let[r,n]=t;return""+e+r+"="+n+"\n"},""):String(n.body);return{path:r,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:undefined,json:undefined,text:e}}}else if(n.formEncType==="application/json"){// json only supports POST/PUT/PATCH/DELETE submissions
if(!to(o)){return a()}try{let e=typeof n.body==="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,formData:undefined,json:e,text:undefined}}}catch(e){return a()}}}c(typeof FormData==="function","FormData is not available in this environment");let u;let l;if(n.formData){u=eG(n.formData);l=n.formData}else if(n.body instanceof FormData){u=eG(n.body);l=n.body}else if(n.body instanceof URLSearchParams){u=n.body;l=eK(u)}else if(n.body==null){u=new URLSearchParams;l=new FormData}else{try{u=new URLSearchParams(n.body);l=eK(u)}catch(e){return a()}}let f={formMethod:o,formAction:s,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:l,json:undefined,text:undefined};if(to(f.formMethod)){return{path:r,submission:f}}// Flatten submission onto URLSearchParams for GET submissions
let d=v(r);// On GET navigation submissions we can drop the ?index param from the
// resulting location since all loaders will run.  But fetcher GET submissions
// only run a single loader so we need to preserve any incoming ?index params
if(t&&d.search&&tl(d.search)){u.append("index","")}d.search="?"+u;return{path:p(d),submission:f}}// Filter out all routes at/below any caught error as they aren't going to
// render so we don't need to load them
function eP(e,t,r){if(r===void 0){r=false}let n=e.findIndex(e=>e.route.id===t);if(n>=0){return e.slice(0,r?n+1:n)}return e}function eD(e,t,r,a,i,o,s,u,c,l,f,d,h,p,v,m){let g=m?e9(m[1])?m[1].error:m[1].data:undefined;let y=e.createURL(t.location);let b=e.createURL(i);// Pick navigation matches that are net-new or qualify for revalidation
let _=r;if(o&&t.errors){// On initial hydration, only consider matches up to _and including_ the boundary.
// This is inclusive to handle cases where a server loader ran successfully,
// a child server loader bubbled up to this route, but this route has
// `clientLoader.hydrate` so we want to still run the `clientLoader` so that
// we have a complete version of `loaderData`
_=eP(r,Object.keys(t.errors)[0],true)}else if(m&&e9(m[1])){// If an action threw an error, we call loaders up to, but not including the
// boundary
_=eP(r,m[0])}// Don't revalidate loaders by default after action 4xx/5xx responses
// when the flag is enabled.  They can still opt-into revalidation via
// `shouldRevalidate` via `actionResult`
let x=m?m[1].statusCode:undefined;let E=s&&x&&x>=400;let O=_.filter((e,r)=>{let{route:i}=e;if(i.lazy){// We haven't loaded this route yet so we don't know if it's got a loader!
return true}if(i.loader==null){return false}if(o){return eM(i,t.loaderData,t.errors)}// Always call the loader on new route instances and pending defer cancellations
if(eL(t.loaderData,t.matches[r],e)||c.some(t=>t===e.route.id)){return true}// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
let s=t.matches[r];let l=e;return eN(e,n({currentUrl:y,currentParams:s.params,nextUrl:b,nextParams:l.params},a,{actionResult:g,actionStatus:x,defaultShouldRevalidate:E?false:// Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
u||y.pathname+y.search===b.pathname+b.search||// Search params affect all loaders
y.search!==b.search||eF(s,l)}))});// Pick fetcher.loads that need to be revalidated
let S=[];d.forEach((e,i)=>{// Don't revalidate:
//  - on initial hydration (shouldn't be any fetchers then anyway)
//  - if fetcher won't be present in the subsequent render
//    - no longer matches the URL (v7_fetcherPersist=false)
//    - was unmounted but persisted due to v7_fetcherPersist=true
if(o||!r.some(t=>t.route.id===e.routeId)||f.has(i)){return}let s=w(p,e.path,v);// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
// currently only a use-case for Remix HMR where the route tree can change
// at runtime and remove a route previously loaded via a fetcher
if(!s){S.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});return}// Revalidating fetchers are decoupled from the route matches since they
// load from a static href.  They revalidate based on explicit revalidation
// (submission, useRevalidator, or X-Remix-Revalidate)
let c=t.fetchers.get(i);let d=tf(s,e.path);let m=false;if(h.has(i)){// Never trigger a revalidation of an actively redirecting fetcher
m=false}else if(l.has(i)){// Always mark for revalidation if the fetcher was cancelled
l.delete(i);m=true}else if(c&&c.state!=="idle"&&c.data===undefined){// If the fetcher hasn't ever completed loading yet, then this isn't a
// revalidation, it would just be a brand new load if an explicit
// revalidation is required
m=u}else{// Otherwise fall back on any user-defined shouldRevalidate, defaulting
// to explicit revalidations only
m=eN(d,n({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:r[r.length-1].params},a,{actionResult:g,actionStatus:x,defaultShouldRevalidate:E?false:u}))}if(m){S.push({key:i,routeId:e.routeId,path:e.path,matches:s,match:d,controller:new AbortController})}});return[O,S]}function eM(e,t,r){// We dunno if we have a loader - gotta find out!
if(e.lazy){return true}// No loader, nothing to initialize
if(!e.loader){return false}let n=t!=null&&t[e.id]!==undefined;let a=r!=null&&r[e.id]!==undefined;// Don't run if we error'd during SSR
if(!n&&a){return false}// Explicitly opting-in to running on hydration
if(typeof e.loader==="function"&&e.loader.hydrate===true){return true}// Otherwise, run if we're not yet initialized with anything
return!n&&!a}function eL(e,t,r){let n=// [a] -> [a, b]
!t||// [a, b] -> [a, c]
r.route.id!==t.route.id;// Handle the case that we don't have data for a re-used route, potentially
// from a prior error or from a cancelled pending deferred
let a=e[r.route.id]===undefined;// Always load if this is a net-new route or we don't yet have data
return n||a}function eF(e,t){let r=e.route.path;return(// param change for this match, /users/123 -> /users/456
e.pathname!==t.pathname||// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"])}function eN(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r==="boolean"){return r}}return t.defaultShouldRevalidate}function ej(e,t,r,n,a){var i;let o;if(e){let t=n[e];c(t,"No route found to patch children into: routeId = "+e);if(!t.children){t.children=[]}o=t.children}else{o=r}// Don't patch in routes we already know about so that `patch` is idempotent
// to simplify user-land code. This is useful because we re-call the
// `patchRoutesOnNavigation` function for matched routes with params.
let s=t.filter(e=>!o.some(t=>eU(e,t)));let u=_(s,a,[e||"_","patch",String(((i=o)==null?void 0:i.length)||"0")],n);o.push(...u)}function eU(e,t){// Most optimal check is by id
if("id"in e&&"id"in t&&e.id===t.id){return true}// Second is by pathing differences
if(!(e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive)){return false}// Pathless layout routes are trickier since we need to check children.
// If they have no children then they're the same as far as we can tell
if((!e.children||e.children.length===0)&&(!t.children||t.children.length===0)){return true}// Otherwise, we look to see if every child in the new route is already
// represented in the existing route's children
return e.children.every((e,r)=>{var n;return(n=t.children)==null?void 0:n.some(t=>eU(e,t))})}/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */async function eH(e,t,r){if(!e.lazy){return}let a=await e.lazy();// If the lazy route function was executed and removed by another parallel
// call then we can return - first lazy() to finish wins because the return
// value of lazy is expected to be static
if(!e.lazy){return}let i=r[e.id];c(i,"No route found in manifest");// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
//
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
let o={};for(let e in a){let t=i[e];let r=t!==undefined&&// This property isn't static since it should always be updated based
// on the route updates
e!=="hasErrorBoundary";l(!r,'Route "'+i.id+'" has a static property "'+e+'" '+"defined but its lazy function is also returning a value for this property. "+('The lazy route property "'+e+'" will be ignored.'));if(!r&&!y.has(e)){o[e]=a[e]}}// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(i,o);// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(i,n({},t(i),{lazy:undefined}))}// Default implementation of `dataStrategy` which fetches all loaders in parallel
async function eB(e){let{matches:t}=e;let r=t.filter(e=>e.shouldLoad);let n=await Promise.all(r.map(e=>e.resolve()));return n.reduce((e,t,n)=>Object.assign(e,{[r[n].route.id]:t}),{})}async function eY(e,t,r,a,i,o,s,u,c,l){let f=o.map(e=>e.route.lazy?eH(e.route,c,u):undefined);let d=o.map((e,r)=>{let o=f[r];let s=i.some(t=>t.route.id===e.route.id);// `resolve` encapsulates route.lazy(), executing the loader/action,
// and mapping return values/thrown errors to a `DataStrategyResult`.  Users
// can pass a callback to take fine-grained control over the execution
// of the loader/action
let u=async r=>{if(r&&a.method==="GET"&&(e.route.lazy||e.route.loader)){s=true}return s?ez(t,a,e,o,r,l):Promise.resolve({type:g.data,result:undefined})};return n({},e,{shouldLoad:s,resolve:u})});// Send all matches here to allow for a middleware-type implementation.
// handler will be a no-op for unneeded routes and we filter those results
// back out below.
let h=await e({matches:d,request:a,params:o[0].params,fetcherKey:s,context:l});// Wait for all routes to load here but 'swallow the error since we want
// it to bubble up from the `await loadRoutePromise` in `callLoaderOrAction` -
// called from `match.resolve()`
try{await Promise.all(f)}catch(e){// No-op
}return h}// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function ez(e,t,r,n,a,i){let o;let s;let u=n=>{// Setup a promise we can race against so that abort signals short circuit
let o;// This will never resolve so safe to type it as Promise<DataStrategyResult> to
// satisfy the function return value
let u=new Promise((e,t)=>o=t);s=()=>o();t.signal.addEventListener("abort",s);let c=a=>{if(typeof n!=="function"){return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+r.route.id+"]")))}return n({request:t,params:r.params,context:i},...a!==undefined?[a]:[])};let l=(async()=>{try{let e=await (a?a(e=>c(e)):c());return{type:"data",result:e}}catch(e){return{type:"error",result:e}}})();return Promise.race([l,u])};try{let a=r.route[e];// If we have a route.lazy promise, await that first
if(n){if(a){// Run statically defined handler in parallel with lazy()
let e;let[t]=await Promise.all([// If the handler throws, don't let it immediately bubble out,
// since we need to let the lazy() execution finish so we know if this
// route has a boundary that can handle the error
u(a).catch(t=>{e=t}),n]);if(e!==undefined){throw e}o=t}else{// Load lazy route module, then run any returned handler
await n;a=r.route[e];if(a){// Handler still runs even if we got interrupted to maintain consistency
// with un-abortable behavior of handler execution on non-lazy or
// previously-lazy-loaded routes
o=await u(a)}else if(e==="action"){let e=new URL(t.url);let n=e.pathname+e.search;throw e2(405,{method:t.method,pathname:n,routeId:r.route.id})}else{// lazy() route has no loader to run.  Short circuit here so we don't
// hit the invariant below that errors on returning undefined.
return{type:g.data,result:undefined}}}}else if(!a){let e=new URL(t.url);let r=e.pathname+e.search;throw e2(404,{pathname:r})}else{o=await u(a)}c(o.result!==undefined,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(e){// We should already be catching and converting normal handler executions to
// DataStrategyResults and returning them, so anything that throws here is an
// unexpected error we still need to wrap
return{type:g.error,result:e}}finally{if(s){t.signal.removeEventListener("abort",s)}}return o}async function eV(e){let{result:t,type:r}=e;if(tn(t)){let e;try{let r=t.headers.get("Content-Type");// Check between word boundaries instead of startsWith() due to the last
// paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
if(r&&/\bapplication\/json\b/.test(r)){if(t.body==null){e=null}else{e=await t.json()}}else{e=await t.text()}}catch(e){return{type:g.error,error:e}}if(r===g.error){return{type:g.error,error:new el(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}}return{type:g.data,data:e,statusCode:t.status,headers:t.headers}}if(r===g.error){if(tt(t)){var n,a;if(t.data instanceof Error){var i,o;return{type:g.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):undefined}}// Convert thrown data() to ErrorResponse instances
return{type:g.error,error:new el(((n=t.init)==null?void 0:n.status)||500,undefined,t.data),statusCode:ef(t)?t.status:undefined,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):undefined}}return{type:g.error,error:t,statusCode:ef(t)?t.status:undefined}}if(tr(t)){var s,u;return{type:g.deferred,deferredData:t,statusCode:(s=t.init)==null?void 0:s.status,headers:((u=t.init)==null?void 0:u.headers)&&new Headers(t.init.headers)}}if(tt(t)){var c,l;return{type:g.data,data:t.data,statusCode:(c=t.init)==null?void 0:c.status,headers:(l=t.init)!=null&&l.headers?new Headers(t.init.headers):undefined}}return{type:g.data,data:t}}// Support relative routing in internal redirects
function eq(e,t,r,n,a,i){let o=e.headers.get("Location");c(o,"Redirects returned/thrown from loaders/actions must have a Location header");if(!ew.test(o)){let s=n.slice(0,n.findIndex(e=>e.route.id===r)+1);o=eC(new URL(t.url),s,a,true,o,i);e.headers.set("Location",o)}return e}function eW(e,t,r){if(ew.test(e)){// Strip off the protocol+origin for same-origin + same-basename absolute redirects
let n=e;let a=n.startsWith("//")?new URL(t.protocol+n):new URL(n);let i=B(a.pathname,r)!=null;if(a.origin===t.origin&&i){return a.pathname+a.search+a.hash}}return e}// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function e$(e,t,r,n){let a=e.createURL(e5(t)).toString();let i={signal:r};if(n&&to(n.formMethod)){let{formMethod:e,formEncType:t}=n;// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
i.method=e.toUpperCase();if(t==="application/json"){i.headers=new Headers({"Content-Type":t});i.body=JSON.stringify(n.json)}else if(t==="text/plain"){// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
i.body=n.text}else if(t==="application/x-www-form-urlencoded"&&n.formData){// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
i.body=eG(n.formData)}else{// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
i.body=n.formData}}return new Request(a,i)}function eG(e){let t=new URLSearchParams;for(let[r,n]of e.entries()){// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
t.append(r,typeof n==="string"?n:n.name)}return t}function eK(e){let t=new FormData;for(let[r,n]of e.entries()){t.append(r,n)}return t}function eQ(e,t,r,n,a){// Fill in loaderData/errors from our loaders
let i={};let o=null;let s;let u=false;let l={};let f=r&&e9(r[1])?r[1].error:undefined;// Process loader results into state.loaderData/state.errors
e.forEach(r=>{if(!(r.route.id in t)){return}let d=r.route.id;let h=t[d];c(!te(h),"Cannot handle redirect results in processLoaderData");if(e9(h)){let t=h.error;// If we have a pending action error, we report it at the highest-route
// that throws a loader error, and then clear it out to indicate that
// it was consumed
if(f!==undefined){t=f;f=undefined}o=o||{};if(a){o[d]=t}else{// Look upwards from the matched route for the closest ancestor error
// boundary, defaulting to the root match.  Prefer higher error values
// if lower errors bubble to the same boundary
let r=e0(e,d);if(o[r.route.id]==null){o[r.route.id]=t}}// Clear our any prior loaderData for the throwing route
i[d]=undefined;// Once we find our first (highest) error, we set the status code and
// prevent deeper status codes from overriding
if(!u){u=true;s=ef(h.error)?h.error.status:500}if(h.headers){l[d]=h.headers}}else{if(e8(h)){n.set(d,h.deferredData);i[d]=h.deferredData.data;// Error status codes always override success status codes, but if all
// loaders are successful we take the deepest status code.
if(h.statusCode!=null&&h.statusCode!==200&&!u){s=h.statusCode}if(h.headers){l[d]=h.headers}}else{i[d]=h.data;// Error status codes always override success status codes, but if all
// loaders are successful we take the deepest status code.
if(h.statusCode&&h.statusCode!==200&&!u){s=h.statusCode}if(h.headers){l[d]=h.headers}}}});// If we didn't consume the pending action error (i.e., all loaders
// resolved), then consume it here.  Also clear out any loaderData for the
// throwing route
if(f!==undefined&&r){o={[r[0]]:f};i[r[0]]=undefined}return{loaderData:i,errors:o,statusCode:s||200,loaderHeaders:l}}function eX(e,t,r,a,i,o,s){let{loaderData:u,errors:l}=eQ(t,r,a,s,false// This method is only called client side so we always want to bubble
);// Process results from our revalidating fetchers
i.forEach(t=>{let{key:r,match:a,controller:i}=t;let s=o[r];c(s,"Did not find corresponding fetcher result");// Process fetcher non-redirect errors
if(i&&i.signal.aborted){// Nothing to do for aborted fetchers
return}else if(e9(s)){let t=e0(e.matches,a==null?void 0:a.route.id);if(!(l&&l[t.route.id])){l=n({},l,{[t.route.id]:s.error})}e.fetchers.delete(r)}else if(te(s)){// Should never get here, redirects should get processed above, but we
// keep this to type narrow to a success result in the else
c(false,"Unhandled fetcher revalidation redirect")}else if(e8(s)){// Should never get here, deferred data should be awaited for fetchers
// in resolveDeferredResults
c(false,"Unhandled fetcher deferred data")}else{let t=tg(s.data);e.fetchers.set(r,t)}});return{loaderData:u,errors:l}}function eJ(e,t,r,a){let i=n({},t);for(let n of r){let r=n.route.id;if(t.hasOwnProperty(r)){if(t[r]!==undefined){i[r]=t[r]}}else if(e[r]!==undefined&&n.route.loader){// Preserve existing keys not included in newLoaderData and where a loader
// wasn't removed by HMR
i[r]=e[r]}if(a&&a.hasOwnProperty(r)){break}}return i}function eZ(e){if(!e){return{}}return e9(e[1])?{// Clear out prior actionData on errors
actionData:{}}:{actionData:{[e[0]]:e[1].data}}}// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function e0(e,t){let r=t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e];return r.reverse().find(e=>e.route.hasErrorBoundary===true)||e[0]}function e1(e){// Prefer a root layout route if present, otherwise shim in a route object
let t=e.length===1?e[0]:e.find(e=>e.index||!e.path||e.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function e2(e,t){let{pathname:r,routeId:n,method:a,type:i,message:o}=t===void 0?{}:t;let s="Unknown Server Error";let u="Unknown @remix-run/router error";if(e===400){s="Bad Request";if(a&&r&&n){u="You made a "+a+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request."}else if(i==="defer-action"){u="defer() is not supported in actions"}else if(i==="invalid-body"){u="Unable to encode submission body"}}else if(e===403){s="Forbidden";u='Route "'+n+'" does not match URL "'+r+'"'}else if(e===404){s="Not Found";u='No route matches URL "'+r+'"'}else if(e===405){s="Method Not Allowed";if(a&&r&&n){u="You made a "+a.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request."}else if(a){u='Invalid request method "'+a.toUpperCase()+'"'}}return new el(e||500,s,new Error(u),true)}// Find any returned redirect errors, starting from the lowest match
function e6(e){let t=Object.entries(e);for(let e=t.length-1;e>=0;e--){let[r,n]=t[e];if(te(n)){return{key:r,result:n}}}}function e5(e){let t=typeof e==="string"?v(e):e;return p(n({},t,{hash:""}))}function e4(e,t){if(e.pathname!==t.pathname||e.search!==t.search){return false}if(e.hash===""){// /page -> /page#hash
return t.hash!==""}else if(e.hash===t.hash){// /page#hash -> /page#hash
return true}else if(t.hash!==""){// /page#hash -> /page#other
return true}// If the hash is removed the browser will re-perform a request to the server
// /page#hash -> /page
return false}function e3(e){return e!=null&&typeof e==="object"&&"type"in e&&"result"in e&&(e.type===g.data||e.type===g.error)}function e7(e){return tn(e.result)&&em.has(e.result.status)}function e8(e){return e.type===g.deferred}function e9(e){return e.type===g.error}function te(e){return(e&&e.type)===g.redirect}function tt(e){return typeof e==="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function tr(e){let t=e;return t&&typeof t==="object"&&typeof t.data==="object"&&typeof t.subscribe==="function"&&typeof t.cancel==="function"&&typeof t.resolveData==="function"}function tn(e){return e!=null&&typeof e.status==="number"&&typeof e.statusText==="string"&&typeof e.headers==="object"&&typeof e.body!=="undefined"}function ta(e){if(!tn(e)){return false}let t=e.status;let r=e.headers.get("Location");return t>=300&&t<=399&&r!=null}function ti(e){return ev.has(e.toLowerCase())}function to(e){return eh.has(e.toLowerCase())}async function ts(e,t,r,n,a){let i=Object.entries(t);for(let o=0;o<i.length;o++){let[s,u]=i[o];let c=e.find(e=>(e==null?void 0:e.route.id)===s);// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!c){continue}let l=n.find(e=>e.route.id===c.route.id);let f=l!=null&&!eF(l,c)&&(a&&a[c.route.id])!==undefined;if(e8(u)&&f){// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
await tc(u,r,false).then(e=>{if(e){t[s]=e}})}}}async function tu(e,t,r){for(let n=0;n<r.length;n++){let{key:a,routeId:i,controller:o}=r[n];let s=t[a];let u=e.find(e=>(e==null?void 0:e.route.id)===i);// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!u){continue}if(e8(s)){// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
c(o,"Expected an AbortController for revalidating fetcher deferred result");await tc(s,o.signal,true).then(e=>{if(e){t[a]=e}})}}}async function tc(e,t,r){if(r===void 0){r=false}let n=await e.deferredData.resolveData(t);if(n){return}if(r){try{return{type:g.data,data:e.deferredData.unwrappedData}}catch(e){// Handle any TrackedPromise._error values encountered while unwrapping
return{type:g.error,error:e}}}return{type:g.data,data:e.deferredData.data}}function tl(e){return new URLSearchParams(e).getAll("index").some(e=>e==="")}function tf(e,t){let r=typeof t==="string"?v(t).search:t.search;if(e[e.length-1].route.index&&tl(r||"")){// Return the leaf index route when index is present
return e[e.length-1]}// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
let n=q(e);return n[n.length-1]}function td(e){let{formMethod:t,formAction:r,formEncType:n,text:a,formData:i,json:o}=e;if(!t||!r||!n){return}if(a!=null){return{formMethod:t,formAction:r,formEncType:n,formData:undefined,json:undefined,text:a}}else if(i!=null){return{formMethod:t,formAction:r,formEncType:n,formData:i,json:undefined,text:undefined}}else if(o!==undefined){return{formMethod:t,formAction:r,formEncType:n,formData:undefined,json:o,text:undefined}}}function th(e,t){if(t){let r={state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return r}else{let t={state:"loading",location:e,formMethod:undefined,formAction:undefined,formEncType:undefined,formData:undefined,json:undefined,text:undefined};return t}}function tp(e,t){let r={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return r}function tv(e,t){if(e){let r={state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t};return r}else{let e={state:"loading",formMethod:undefined,formAction:undefined,formEncType:undefined,formData:undefined,json:undefined,text:undefined,data:t};return e}}function tm(e,t){let r={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:undefined};return r}function tg(e){let t={state:"idle",formMethod:undefined,formAction:undefined,formEncType:undefined,formData:undefined,json:undefined,text:undefined,data:e};return t}function ty(e,t){try{let r=e.sessionStorage.getItem(eE);if(r){let e=JSON.parse(r);for(let[r,n]of Object.entries(e||{})){if(n&&Array.isArray(n)){t.set(r,new Set(n||[]))}}}}catch(e){// no-op, use default empty object
}}function tb(e,t){if(t.size>0){let r={};for(let[e,n]of t){r[e]=[...n]}try{e.sessionStorage.setItem(eE,JSON.stringify(r))}catch(e){l(false,"Failed to save applied view transitions in sessionStorage ("+e+").")}}}//#endregion
//# sourceMappingURL=router.js.map
},1035:function(e,t,r){"use strict";var n=r(5959);/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var a={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true};var i={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var o={"$$typeof":true,render:true,defaultProps:true,displayName:true,propTypes:true};var s={"$$typeof":true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true};var u={};u[n.ForwardRef]=o;u[n.Memo]=s;function c(e){// React v16.11 and below
if(n.isMemo(e)){return s}// React v16.12 and above
return u[e["$$typeof"]]||a}var l=Object.defineProperty;var f=Object.getOwnPropertyNames;var d=Object.getOwnPropertySymbols;var h=Object.getOwnPropertyDescriptor;var p=Object.getPrototypeOf;var v=Object.prototype;function m(e,t,r){if(typeof t!=="string"){// don't hoist over string (html) components
if(v){var n=p(t);if(n&&n!==v){m(e,n,r)}}var a=f(t);if(d){a=a.concat(d(t))}var o=c(e);var s=c(t);for(var u=0;u<a.length;++u){var g=a[u];if(!i[g]&&!(r&&r[g])&&!(s&&s[g])&&!(o&&o[g])){var y=h(t,g);try{// Avoid failures from read-only properties
l(e,g,y)}catch(e){}}}}return e}e.exports=m},9576:function(e,t,r){"use strict";var n=r(5206);if(true){t.createRoot=n.createRoot;t.hydrateRoot=n.hydrateRoot}else{var a}},5843:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case f:case i:case s:case o:case h:return e;default:switch(e=e&&e.$$typeof,e){case c:case d:case m:case v:case u:return e;default:return t}}case a:return t}}}function x(e){return w(e)===f}t.AsyncMode=l;t.ConcurrentMode=f;t.ContextConsumer=c;t.ContextProvider=u;t.Element=n;t.ForwardRef=d;t.Fragment=i;t.Lazy=m;t.Memo=v;t.Portal=a;t.Profiler=s;t.StrictMode=o;t.Suspense=h;t.isAsyncMode=function(e){return x(e)||w(e)===l};t.isConcurrentMode=x;t.isContextConsumer=function(e){return w(e)===c};t.isContextProvider=function(e){return w(e)===u};t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n};t.isForwardRef=function(e){return w(e)===d};t.isFragment=function(e){return w(e)===i};t.isLazy=function(e){return w(e)===m};t.isMemo=function(e){return w(e)===v};t.isPortal=function(e){return w(e)===a};t.isProfiler=function(e){return w(e)===s};t.isStrictMode=function(e){return w(e)===o};t.isSuspense=function(e){return w(e)===h};t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===s||e===o||e===h||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===u||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===b||e.$$typeof===_||e.$$typeof===g)};t.typeOf=w},5959:function(e,t,r){"use strict";if(true){e.exports=r(5843)}else{}},3021:function(e,t,r){"use strict";r.d(t,{C5:()=>ed,Ix:()=>ev,V8:()=>eo,Ye:()=>R,Zp:()=>w,sv:()=>eh,zy:()=>m});/* import */var n=r(1594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(4969);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function o(){o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return o.apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const s=/*#__PURE__*/n.createContext(null);if(false){}const u=/*#__PURE__*/n.createContext(null);if(false){}const c=/*#__PURE__*/n.createContext(null);if(false){}/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */const l=/*#__PURE__*/n.createContext(null);if(false){}const f=/*#__PURE__*/n.createContext(null);if(false){}const d=/*#__PURE__*/n.createContext({outlet:null,matches:[],isDataRoute:false});if(false){}const h=/*#__PURE__*/n.createContext(null);if(false){}/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */function p(e,t){let{relative:r}=t===void 0?{}:t;!v()?false?0:UNSAFE_invariant(false):void 0;let{basename:n,navigator:a}=React.useContext(l);let{hash:i,pathname:o,search:s}=T(e,{relative:r});let u=o;// If we're operating within a basename, prepend it to the pathname prior
// to creating the href.  If this is a root navigation, then just use the raw
// basename which allows the basename to have full control over the presence
// of a trailing slash on root links
if(n!=="/"){u=o==="/"?n:joinPaths([n,o])}return a.createHref({pathname:u,search:s,hash:i})}/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */function v(){return n.useContext(f)!=null}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */function m(){!v()?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;return n.useContext(f).location}/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigation-type
 */function g(){return React.useContext(f).navigationType}/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-match
 */function y(e){!v()?false?0:UNSAFE_invariant(false):void 0;let{pathname:t}=m();return React.useMemo(()=>matchPath(e,UNSAFE_decodePath(t)),[t,e])}/**
 * The interface for the navigate() function returned from useNavigate().
 */const b=/* unused pure expression or super */null&&"You should call navigate() in a React.useEffect(), not when "+"your component is first rendered.";// Mute warnings for calls to useNavigate in SSR environments
function _(e){let t=n.useContext(l).static;if(!t){// We should be able to get rid of this once react 18.3 is released
// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
n.useLayoutEffect(e)}}/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */function w(){let{isDataRoute:e}=n.useContext(d);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?ee():x()}function x(){!v()?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;let e=n.useContext(s);let{basename:t,future:r,navigator:a}=n.useContext(l);let{matches:o}=n.useContext(d);let{pathname:u}=m();let c=JSON.stringify((0,i/* .UNSAFE_getResolveToMatches */.yD)(o,r.v7_relativeSplatPath));let f=n.useRef(false);_(()=>{f.current=true});let h=n.useCallback(function(r,n){if(n===void 0){n={}}false?0:void 0;// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(!f.current)return;if(typeof r==="number"){a.go(r);return}let o=(0,i/* .resolveTo */.Gh)(r,JSON.parse(c),u,n.relative==="path");// If we're operating within a basename, prepend it to the pathname prior
// to handing off to history (but only if we're not in a data router,
// otherwise it'll prepend the basename inside of the router).
// If this is a root navigation, then we navigate to the raw basename
// which allows the basename to have full control over the presence of a
// trailing slash on root links
if(e==null&&t!=="/"){o.pathname=o.pathname==="/"?t:(0,i/* .joinPaths */.HS)([t,o.pathname])}(!!n.replace?a.replace:a.push)(o,n.state,n)},[t,a,c,u,e]);return h}const E=/*#__PURE__*/n.createContext(null);/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/v6/hooks/use-outlet-context
 */function O(){return React.useContext(E)}/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/v6/hooks/use-outlet
 */function S(e){let t=n.useContext(d).outlet;if(t){return /*#__PURE__*/n.createElement(E.Provider,{value:e},t)}return t}/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/v6/hooks/use-params
 */function A(){let{matches:e}=React.useContext(d);let t=e[e.length-1];return t?t.params:{}}/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */function T(e,t){let{relative:r}=t===void 0?{}:t;let{future:n}=React.useContext(l);let{matches:a}=React.useContext(d);let{pathname:i}=m();let o=JSON.stringify(UNSAFE_getResolveToMatches(a,n.v7_relativeSplatPath));return React.useMemo(()=>resolveTo(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/v6/hooks/use-routes
 */function R(e,t){return k(e,t)}// Internal implementation with accept optional param for RouterProvider usage
function k(e,t,r,a){!v()?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;let{navigator:s}=n.useContext(l);let{matches:u}=n.useContext(d);let c=u[u.length-1];let h=c?c.params:{};let p=c?c.pathname:"/";let g=c?c.pathnameBase:"/";let y=c&&c.route;if(false){}let b=m();let _;if(t){var w;let e=typeof t==="string"?(0,i/* .parsePath */.Rr)(t):t;!(g==="/"||((w=e.pathname)==null?void 0:w.startsWith(g)))?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;_=e}else{_=b}let x=_.pathname||"/";let E=x;if(g!=="/"){// Determine the remaining pathname by removing the # of URL segments the
// parentPathnameBase has, instead of removing based on character count.
// This is because we can't guarantee that incoming/outgoing encodings/
// decodings will match exactly.
// We decode paths before matching on a per-segment basis with
// decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
// match what `window.location.pathname` would reflect.  Those don't 100%
// align when it comes to encoded URI characters such as % and &.
//
// So we may end up with:
//   pathname:           "/descendant/a%25b/match"
//   parentPathnameBase: "/descendant/a%b"
//
// And the direct substring removal approach won't work :/
let e=g.replace(/^\//,"").split("/");let t=x.replace(/^\//,"").split("/");E="/"+t.slice(e.length).join("/")}let O=(0,i/* .matchRoutes */.ue)(e,{pathname:E});if(false){}let S=M(O&&O.map(e=>Object.assign({},e,{params:Object.assign({},h,e.params),pathname:(0,i/* .joinPaths */.HS)([g,// Re-encode pathnames that were decoded inside matchRoutes
    s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase==="/"?g:(0,i/* .joinPaths */.HS)([g,// Re-encode pathnames that were decoded inside matchRoutes
    s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),u,r,a);// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
if(t&&S){return /*#__PURE__*/n.createElement(f.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:i/* .Action.Pop */.rc.Pop}},S)}return S}function C(){let e=K();let t=(0,i/* .isRouteErrorResponse */.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e);let r=e instanceof Error?e.stack:null;let a="rgba(200,200,200, 0.5)";let o={padding:"0.5rem",backgroundColor:a};let s={padding:"2px 4px",backgroundColor:a};let u=null;if(false){}return /*#__PURE__*/n.createElement(n.Fragment,null,/*#__PURE__*/n.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/n.createElement("h3",{style:{fontStyle:"italic"}},t),r?/*#__PURE__*/n.createElement("pre",{style:o},r):null,u)}const I=/*#__PURE__*/n.createElement(C,null);class P extends n.Component{constructor(e){super(e);this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
if(t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"){return{error:e.error,location:e.location,revalidation:e.revalidation}}// If we're not changing locations, preserve the location but still surface
// any new errors that may come through. We retain the existing error, we do
// this because the error provided from the app state may be cleared without
// the location changing.
return{error:e.error!==undefined?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==undefined?/*#__PURE__*/n.createElement(d.Provider,{value:this.props.routeContext},/*#__PURE__*/n.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D(e){let{routeContext:t,match:r,children:a}=e;let i=n.useContext(s);// Track how deep we got in our render pass to emulate SSR componentDidCatch
// in a DataStaticRouter
if(i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)){i.staticContext._deepestRenderedBoundaryId=r.route.id}return /*#__PURE__*/n.createElement(d.Provider,{value:t},a)}function M(e,t,r,a){var o;if(t===void 0){t=[]}if(r===void 0){r=null}if(a===void 0){a=null}if(e==null){var s;if(!r){return null}if(r.errors){// Don't bail if we have data router errors so we can render them in the
// boundary.  Use the pre-matched (or shimmed) matches
e=r.matches}else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0){// Don't bail if we're initializing with partial hydration and we have
// router matches.  That means we're actively running `patchRoutesOnNavigation`
// so we should render down the partial matches to the appropriate
// `HydrateFallback`.  We only do this if `parentMatches` is empty so it
// only impacts the root matches for `RouterProvider` and no descendant
// `<Routes>`
e=r.matches}else{return null}}let u=e;// If we have data errors, trim matches to the highest error boundary
let c=(o=r)==null?void 0:o.errors;if(c!=null){let e=u.findIndex(e=>e.route.id&&(c==null?void 0:c[e.route.id])!==undefined);!(e>=0)?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;u=u.slice(0,Math.min(u.length,e+1))}// If we're in a partial hydration mode, detect if we need to render down to
// a given HydrateFallback while we load the rest of the hydration data
let l=false;let f=-1;if(r&&a&&a.v7_partialHydration){for(let e=0;e<u.length;e++){let t=u[e];// Track the deepest fallback up until the first route without data
if(t.route.HydrateFallback||t.route.hydrateFallbackElement){f=e}if(t.route.id){let{loaderData:e,errors:n}=r;let a=t.route.loader&&e[t.route.id]===undefined&&(!n||n[t.route.id]===undefined);if(t.route.lazy||a){// We found the first route that's not ready to render (waiting on
// lazy, or has a loader that hasn't run yet).  Flag that we need to
// render a fallback and render up until the appropriate fallback
l=true;if(f>=0){u=u.slice(0,f+1)}else{u=[u[0]]}break}}}}return u.reduceRight((e,a,i)=>{// Only data routers handle errors/fallbacks
let o;let s=false;let d=null;let h=null;if(r){o=c&&a.route.id?c[a.route.id]:undefined;d=a.route.errorElement||I;if(l){if(f<0&&i===0){er("route-fallback",false,"No `HydrateFallback` element provided to render during initial hydration");s=true;h=null}else if(f===i){s=true;h=a.route.hydrateFallbackElement||null}}}let p=t.concat(u.slice(0,i+1));let v=()=>{let t;if(o){t=d}else if(s){t=h}else if(a.route.Component){// Note: This is a de-optimized path since React won't re-use the
// ReactElement since it's identity changes with each new
// React.createElement call.  We keep this so folks can use
// `<Route Component={...}>` in `<Routes>` but generally `Component`
// usage is only advised in `RouterProvider` when we can convert it to
// `element` ahead of time.
t=/*#__PURE__*/n.createElement(a.route.Component,null)}else if(a.route.element){t=a.route.element}else{t=e}return /*#__PURE__*/n.createElement(D,{match:a,routeContext:{outlet:e,matches:p,isDataRoute:r!=null},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return r&&(a.route.ErrorBoundary||a.route.errorElement||i===0)?/*#__PURE__*/n.createElement(P,{location:r.location,revalidation:r.revalidation,component:d,error:o,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:true}}):v()},null)}var L=/*#__PURE__*/function(e){e["UseBlocker"]="useBlocker";e["UseRevalidator"]="useRevalidator";e["UseNavigateStable"]="useNavigate";return e}(L||{});var F=/*#__PURE__*/function(e){e["UseBlocker"]="useBlocker";e["UseLoaderData"]="useLoaderData";e["UseActionData"]="useActionData";e["UseRouteError"]="useRouteError";e["UseNavigation"]="useNavigation";e["UseRouteLoaderData"]="useRouteLoaderData";e["UseMatches"]="useMatches";e["UseRevalidator"]="useRevalidator";e["UseNavigateStable"]="useNavigate";e["UseRouteId"]="useRouteId";return e}(F||{});function N(e){return e+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}function j(e){let t=n.useContext(s);!t?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;return t}function U(e){let t=n.useContext(u);!t?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;return t}function H(e){let t=n.useContext(d);!t?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;return t}// Internal version with hookName-aware debugging
function B(e){let t=H(e);let r=t.matches[t.matches.length-1];!r.route.id?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;return r.route.id}/**
 * Returns the ID for the nearest contextual route
 */function Y(){return B(F.UseRouteId)}/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */function z(){let e=U(F.UseNavigation);return e.navigation}/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */function V(){let e=j(L.UseRevalidator);let t=U(F.UseRevalidator);return React.useMemo(()=>({revalidate:e.router.revalidate,state:t.revalidation}),[e.router.revalidate,t.revalidation])}/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */function q(){let{matches:e,loaderData:t}=U(F.UseMatches);return React.useMemo(()=>e.map(e=>UNSAFE_convertRouteMatchToUiMatch(e,t)),[e,t])}/**
 * Returns the loader data for the nearest ancestor Route loader
 */function W(){let e=U(F.UseLoaderData);let t=B(F.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return undefined}return e.loaderData[t]}/**
 * Returns the loaderData for the given routeId
 */function $(e){let t=U(F.UseRouteLoaderData);return t.loaderData[e]}/**
 * Returns the action data for the nearest ancestor Route action
 */function G(){let e=U(F.UseActionData);let t=B(F.UseLoaderData);return e.actionData?e.actionData[t]:undefined}/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */function K(){var e;let t=n.useContext(h);let r=U(F.UseRouteError);let a=B(F.UseRouteError);// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
if(t!==undefined){return t}// Otherwise look for errors from our data router state
return(e=r.errors)==null?void 0:e[a]}/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */function Q(){let e=React.useContext(c);return e==null?void 0:e._data}/**
 * Returns the error from the nearest ancestor `<Await />` value
 */function X(){let e=React.useContext(c);return e==null?void 0:e._error}let J=0;/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */function Z(e){let{router:t,basename:r}=j(L.UseBlocker);let n=U(F.UseBlocker);let[a,i]=React.useState("");let s=React.useCallback(t=>{if(typeof e!=="function"){return!!e}if(r==="/"){return e(t)}// If they provided us a function and we've got an active basename, strip
// it from the locations we expose to the user to match the behavior of
// useLocation
let{currentLocation:n,nextLocation:a,historyAction:i}=t;return e({currentLocation:o({},n,{pathname:stripBasename(n.pathname,r)||n.pathname}),nextLocation:o({},a,{pathname:stripBasename(a.pathname,r)||a.pathname}),historyAction:i})},[r,e]);// This effect is in charge of blocker key assignment and deletion (which is
// tightly coupled to the key)
React.useEffect(()=>{let e=String(++J);i(e);return()=>t.deleteBlocker(e)},[t]);// This effect handles assigning the blockerFunction.  This is to handle
// unstable blocker function identities, and happens only after the prior
// effect so we don't get an orphaned blockerFunction in the router with a
// key of "".  Until then we just have the IDLE_BLOCKER.
React.useEffect(()=>{if(a!==""){t.getBlocker(a,s)}},[t,a,s]);// Prefer the blocker from `state` not `router.state` since DataRouterContext
// is memoized so this ensures we update on blocker state updates
return a&&n.blockers.has(a)?n.blockers.get(a):IDLE_BLOCKER}/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function ee(){let{router:e}=j(L.UseNavigateStable);let t=B(F.UseNavigateStable);let r=n.useRef(false);_(()=>{r.current=true});let a=n.useCallback(function(n,a){if(a===void 0){a={}}false?0:void 0;// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our router subscriber yet
if(!r.current)return;if(typeof n==="number"){e.navigate(n)}else{e.navigate(n,o({fromRouteId:t},a))}},[e,t]);return a}const et={};function er(e,t,r){if(!t&&!et[e]){et[e]=true;false?0:void 0}}const en=/* unused pure expression or super */null&&{};function ea(e,t){if(false){}}const ei=(e,t,r)=>ea(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+r+"."));function eo(e,t){if((e==null?void 0:e.v7_startTransition)===undefined){ei("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition")}if((e==null?void 0:e.v7_relativeSplatPath)===undefined&&(!t||t.v7_relativeSplatPath===undefined)){ei("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}if(t){if(t.v7_fetcherPersist===undefined){ei("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist")}if(t.v7_normalizeFormMethod===undefined){ei("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod")}if(t.v7_partialHydration===undefined){ei("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration")}if(t.v7_skipActionErrorRevalidation===undefined){ei("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation")}}}/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/const es="startTransition";const eu=n[es];/**
 * Given a Remix Router instance, render the appropriate UI
 */function ec(e){let{fallbackElement:t,router:r,future:n}=e;let[a,i]=React.useState(r.state);let{v7_startTransition:o}=n||{};let c=React.useCallback(e=>{if(o&&eu){eu(()=>i(e))}else{i(e)}},[i,o]);// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
React.useLayoutEffect(()=>r.subscribe(c),[r,c]);React.useEffect(()=>{false?0:void 0;// Only log this once on initial mount
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);let l=React.useMemo(()=>{return{createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:n==null?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:true,state:t,preventScrollReset:n==null?void 0:n.preventScrollReset})}},[r]);let f=r.basename||"/";let d=React.useMemo(()=>({router:r,navigator:l,static:false,basename:f}),[r,l,f]);React.useEffect(()=>eo(n,r.future),[r,n]);// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag
return /*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(s.Provider,{value:d},/*#__PURE__*/React.createElement(u.Provider,{value:a},/*#__PURE__*/React.createElement(ev,{basename:f,location:a.location,navigationType:a.historyAction,navigator:l,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},a.initialized||r.future.v7_partialHydration?/*#__PURE__*/React.createElement(el,{routes:r.routes,future:r.future,state:a}):t))),null)}function el(e){let{routes:t,future:r,state:n}=e;return k(t,undefined,n,r)}/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/v6/router-components/memory-router
 */function ef(e){let{basename:t,children:r,initialEntries:n,initialIndex:a,future:i}=e;let o=React.useRef();if(o.current==null){o.current=createMemoryHistory({initialEntries:n,initialIndex:a,v5Compat:true})}let s=o.current;let[u,c]=React.useState({action:s.action,location:s.location});let{v7_startTransition:l}=i||{};let f=React.useCallback(e=>{l&&eu?eu(()=>c(e)):c(e)},[c,l]);React.useLayoutEffect(()=>s.listen(f),[s,f]);React.useEffect(()=>eo(i),[i]);return /*#__PURE__*/React.createElement(ev,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:s,future:i})}/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/v6/components/navigate
 */function ed(e){let{to:t,replace:r,state:a,relative:o}=e;!v()?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;let{future:s,static:u}=n.useContext(l);false?0:void 0;let{matches:c}=n.useContext(d);let{pathname:f}=m();let h=w();// Resolve the path outside of the effect so that when effects run twice in
// StrictMode they navigate to the same place
let p=(0,i/* .resolveTo */.Gh)(t,(0,i/* .UNSAFE_getResolveToMatches */.yD)(c,s.v7_relativeSplatPath),f,o==="path");let g=JSON.stringify(p);n.useEffect(()=>h(JSON.parse(g),{replace:r,state:a,relative:o}),[h,g,o,r,a]);return null}/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/v6/components/outlet
 */function eh(e){return S(e.context)}/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/v6/components/route
 */function ep(e){false?0:UNSAFE_invariant(false)}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/v6/router-components/router
 */function ev(e){let{basename:t="/",children:r=null,location:a,navigationType:s=i/* .Action.Pop */.rc.Pop,navigator:u,static:c=false,future:d}=e;!!v()?false?0:(0,i/* .UNSAFE_invariant */.Oi)(false):void 0;// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let h=t.replace(/^\/*/,"/");let p=n.useMemo(()=>({basename:h,navigator:u,static:c,future:o({v7_relativeSplatPath:false},d)}),[h,d,u,c]);if(typeof a==="string"){a=(0,i/* .parsePath */.Rr)(a)}let{pathname:m="/",search:g="",hash:y="",state:b=null,key:_="default"}=a;let w=n.useMemo(()=>{let e=(0,i/* .stripBasename */.pb)(m,h);if(e==null){return null}return{location:{pathname:e,search:g,hash:y,state:b,key:_},navigationType:s}},[h,m,g,y,b,_,s]);false?0:void 0;if(w==null){return null}return /*#__PURE__*/n.createElement(l.Provider,{value:p},/*#__PURE__*/n.createElement(f.Provider,{children:r,value:w}))}/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/v6/components/routes
 */function em(e){let{children:t,location:r}=e;return R(ex(t),r)}/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */function eg(e){let{children:t,errorElement:r,resolve:n}=e;return /*#__PURE__*/React.createElement(e_,{resolve:n,errorElement:r},/*#__PURE__*/React.createElement(ew,null,t))}var ey=/*#__PURE__*/function(e){e[e["pending"]=0]="pending";e[e["success"]=1]="success";e[e["error"]=2]="error";return e}(ey||{});const eb=new Promise(()=>{});class e_ extends n.Component{constructor(e){super(e);this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props;let a=null;let o=ey.pending;if(!(r instanceof Promise)){// Didn't get a promise - provide as a resolved promise
o=ey.success;a=Promise.resolve();Object.defineProperty(a,"_tracked",{get:()=>true});Object.defineProperty(a,"_data",{get:()=>r})}else if(this.state.error){// Caught a render error, provide it as a rejected promise
o=ey.error;let e=this.state.error;a=Promise.reject().catch(()=>{});// Avoid unhandled rejection warnings
Object.defineProperty(a,"_tracked",{get:()=>true});Object.defineProperty(a,"_error",{get:()=>e})}else if(r._tracked){// Already tracked promise - check contents
a=r;o="_error"in a?ey.error:"_data"in a?ey.success:ey.pending}else{// Raw (untracked) promise - track it
o=ey.pending;Object.defineProperty(r,"_tracked",{get:()=>true});a=r.then(e=>Object.defineProperty(r,"_data",{get:()=>e}),e=>Object.defineProperty(r,"_error",{get:()=>e}))}if(o===ey.error&&a._error instanceof i/* .AbortedDeferredError */.tH){// Freeze the UI by throwing a never resolved promise
throw eb}if(o===ey.error&&!t){// No errorElement, throw to the nearest route-level error boundary
throw a._error}if(o===ey.error){// Render via our errorElement
return /*#__PURE__*/n.createElement(c.Provider,{value:a,children:t})}if(o===ey.success){// Render children with resolved value
return /*#__PURE__*/n.createElement(c.Provider,{value:a,children:e})}// Throw to the suspense boundary
throw a}}/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */function ew(e){let{children:t}=e;let r=Q();let n=typeof t==="function"?t(r):t;return /*#__PURE__*/React.createElement(React.Fragment,null,n)}///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/v6/utils/create-routes-from-children
 */function ex(e,t){if(t===void 0){t=[]}let r=[];React.Children.forEach(e,(e,n)=>{if(!/*#__PURE__*/React.isValidElement(e)){// Ignore non-elements. This allows people to more easily inline
// conditionals in their route config.
return}let a=[...t,n];if(e.type===React.Fragment){// Transparently support React.Fragment and its children.
r.push.apply(r,ex(e.props.children,a));return}!(e.type===ep)?false?0:UNSAFE_invariant(false):void 0;!(!e.props.index||!e.props.children)?false?0:UNSAFE_invariant(false):void 0;let i={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};if(e.props.children){i.children=ex(e.props.children,a)}r.push(i)});return r}/**
 * Renders the result of `matchRoutes()` into a React element.
 */function eE(e){return M(e)}function eO(e){let t={// Note: this check also occurs in createRoutesFromChildren so update
// there if you change this -- please and thank you!
hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};if(e.Component){if(false){}Object.assign(t,{element:/*#__PURE__*/React.createElement(e.Component),Component:undefined})}if(e.HydrateFallback){if(false){}Object.assign(t,{hydrateFallbackElement:/*#__PURE__*/React.createElement(e.HydrateFallback),HydrateFallback:undefined})}if(e.ErrorBoundary){if(false){}Object.assign(t,{errorElement:/*#__PURE__*/React.createElement(e.ErrorBoundary),ErrorBoundary:undefined})}return t}function eS(e,t){return createRouter({basename:t==null?void 0:t.basename,future:o({},t==null?void 0:t.future,{v7_prependBasename:true}),history:createMemoryHistory({initialEntries:t==null?void 0:t.initialEntries,initialIndex:t==null?void 0:t.initialIndex}),hydrationData:t==null?void 0:t.hydrationData,routes:e,mapRouteProperties:eO,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation}).initialize()}//# sourceMappingURL=index.js.map
},7462:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(1594),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;void 0!==r&&(c=""+r);void 0!==t.key&&(c=""+t.key);void 0!==t.ref&&(l=t.ref);for(n in t)o.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i;t.jsx=c;t.jsxs=c},6070:function(e,t,r){"use strict";if(true){e.exports=r(7462)}else{}},234:function(e,t){/*!
 * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var r;/**
 * Create a tokenizer object.
 *
 * This utility class is used by CSSJanus to protect strings by replacing them temporarily with
 * tokens and later transforming them back.
 *
 * @class
 * @constructor
 * @param {RegExp} regex Regular expression whose matches to replace by a token
 * @param {string} token Placeholder text
 */function n(e,t){var r=[],n=0;/**
	 * Add a match.
	 *
	 * @private
	 * @param {string} match Matched string
	 * @return {string} Token to leave in the matched string's place
	 */function a(e){r.push(e);return t}/**
	 * Get a match.
	 *
	 * @private
	 * @return {string} Original matched string to restore
	 */function i(){return r[n++]}return{/**
		 * Replace matching strings with tokens.
		 *
		 * @param {string} str String to tokenize
		 * @return {string} Tokenized string
		 */tokenize:function(t){return t.replace(e,a)},/**
		 * Restores tokens to their original values.
		 *
		 * @param {string} str String previously run through tokenize()
		 * @return {string} Original string
		 */detokenize:function(e){return e.replace(new RegExp("("+t+")","g"),i)}}}/**
 * Create a CSSJanus object.
 *
 * CSSJanus transforms CSS rules with horizontal relevance so that a left-to-right stylesheet can
 * become a right-to-left stylesheet automatically. Processing can be bypassed for an entire rule
 * or a single property by adding a / * @noflip * / comment above the rule or property.
 *
 * @class
 * @constructor
 */function a(){var // Tokens
e="`TMP`",t="`TMPLTR`",r="`TMPRTL`",a="`NOFLIP_SINGLE`",i="`NOFLIP_CLASS`",o="`COMMENT`",// Patterns
s="[^\\u0020-\\u007e]",u="(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)",c="(?:[0-9]*\\.[0-9]+|[0-9]+)",l="(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)",f="direction\\s*:\\s*",d="[!#$%&*-~]",h="['\"]?\\s*",p="(^|[^a-zA-Z])",v="[^\\}]*?",m="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",g="\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/",y="(?:"+u+"|\\\\[^\\r\\n\\f0-9a-f])",b="(?:[_a-z]|"+s+"|"+y+")",_="(?:[_a-z0-9-]|"+s+"|"+y+")",w="-?"+b+_+"*",x=c+"(?:\\s*"+l+"|"+w+")?",E="((?:-?"+x+")|(?:inherit|auto))",O="(?:-?"+c+"(?:\\s*"+l+")?)",S="(?:\\+|\\-|\\*|\\/)",A="(?:\\(|\\)|\\t| )",T="(?:"+A+"|"+O+"|"+S+"){3,}",R="(?:calc\\((?:"+T+")\\))",k="((?:-?"+x+")|(?:inherit|auto)|"+R+")",C="((?:margin|padding|border-width)\\s*:\\s*)",I="((?:-color|border-style)\\s*:\\s*)",P="(#?"+_+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",// The use of a lazy match ("*?") may cause a backtrack limit to be exceeded before finding
// the intended match. This affects 'urlCharsPattern' and 'lookAheadNotOpenBracePattern'.
// We have not yet found this problem on Node.js, but we have on PHP 7, where it was
// mitigated by using a possessive quantifier ("*+"), which are not supported in JS.
// See <https://phabricator.wikimedia.org/T215746#4944830>.
D="(?:"+d+"|"+s+"|"+y+")*?",M="(?![a-zA-Z])",L="(?!("+_+"|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|\"[^\"]*\"|"+o+")*?{)",F="(?!"+D+h+"\\))",N="(?="+D+h+"\\))",j="(\\s*(?:!important\\s*)?[;}])",// Regular expressions
U=/`TMP`/g,H=/`TMPLTR`/g,B=/`TMPRTL`/g,Y=new RegExp(g,"gi"),z=new RegExp("("+m+L+"[^;}]+;?)","gi"),V=new RegExp("("+m+v+"})","gi"),q=new RegExp("("+f+")ltr","gi"),W=new RegExp("("+f+")rtl","gi"),$=new RegExp(p+"(left)"+M+F+L,"gi"),G=new RegExp(p+"(right)"+M+F+L,"gi"),K=new RegExp(p+"(left)"+N,"gi"),Q=new RegExp(p+"(right)"+N,"gi"),X=/(:dir\( *)ltr( *\))/g,J=/(:dir\( *)rtl( *\))/g,Z=new RegExp(p+"(ltr)"+N,"gi"),ee=new RegExp(p+"(rtl)"+N,"gi"),et=new RegExp(p+"([ns]?)e-resize","gi"),er=new RegExp(p+"([ns]?)w-resize","gi"),en=new RegExp(C+k+"(\\s+)"+k+"(\\s+)"+k+"(\\s+)"+k+j,"gi"),ea=new RegExp(I+P+"(\\s+)"+P+"(\\s+)"+P+"(\\s+)"+P+j,"gi"),ei=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+x+")","gi"),eo=new RegExp("(background-position-x\\s*:\\s*)(-?"+c+"%)","gi"),// border-radius: <length or percentage>{1,4} [optional: / <length or percentage>{1,4} ]
es=new RegExp("(border-radius\\s*:\\s*)"+E+"(?:(?:\\s+"+E+")(?:\\s+"+E+")?(?:\\s+"+E+")?)?"+"(?:(?:(?:\\s*\\/\\s*)"+E+")(?:\\s+"+E+")?(?:\\s+"+E+")?(?:\\s+"+E+")?)?"+j,"gi"),eu=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+E,"gi"),ec=new RegExp("(text-shadow\\s*:\\s*)"+E+"(\\s*)"+P,"gi"),el=new RegExp("(text-shadow\\s*:\\s*)"+P+"(\\s*)"+E,"gi"),ef=new RegExp("(text-shadow\\s*:\\s*)"+E,"gi"),ed=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+E+"(\\s*\\))","gi"),eh=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+E+"((?:\\s*,\\s*"+E+"){0,2}\\s*\\))","gi");/**
	 * Invert the horizontal value of a background position property.
	 *
	 * @private
	 * @param {string} match Matched property
	 * @param {string} pre Text before value
	 * @param {string} value Horizontal value
	 * @return {string} Inverted property
	 */function ep(e,t,r){var n,a;if(r.slice(-1)==="%"){n=r.indexOf(".");if(n!==-1){// Two off, one for the "%" at the end, one for the dot itself
a=r.length-n-2;r=100-parseFloat(r);r=r.toFixed(a)+"%"}else{r=100-parseFloat(r)+"%"}}return t+r}/**
	 * Invert a set of border radius values.
	 *
	 * @private
	 * @param {Array} values Matched values
	 * @return {string} Inverted values
	 */function ev(e){switch(e.length){case 4:e=[e[1],e[0],e[3],e[2]];break;case 3:e=[e[1],e[0],e[1],e[2]];break;case 2:e=[e[1],e[0]];break;case 1:e=[e[0]];break}return e.join(" ")}/**
	 * Invert a set of border radius values.
	 *
	 * @private
	 * @param {string} match Matched property
	 * @param {string} pre Text before value
	 * @param {string} [firstGroup1]
	 * @param {string} [firstGroup2]
	 * @param {string} [firstGroup3]
	 * @param {string} [firstGroup4]
	 * @param {string} [secondGroup1]
	 * @param {string} [secondGroup2]
	 * @param {string} [secondGroup3]
	 * @param {string} [secondGroup4]
	 * @param {string} [post] Text after value
	 * @return {string} Inverted property
	 */function em(e,t){var r,n=[].slice.call(arguments),a=n.slice(2,6).filter(function(e){return e}),i=n.slice(6,10).filter(function(e){return e}),o=n[10]||"";if(i.length){r=ev(a)+" / "+ev(i)}else{r=ev(a)}return t+r+o}/**
	 * Flip the sign of a CSS value, possibly with a unit.
	 *
	 * We can't just negate the value with unary minus due to the units.
	 *
	 * @private
	 * @param {string} value
	 * @return {string}
	 */function eg(e){if(parseFloat(e)===0){// Don't mangle zeroes
return e}if(e[0]==="-"){return e.slice(1)}return"-"+e}/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} offset
	 * @return {string}
	 */function ey(e,t,r){return t+eg(r)}/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} prefix
	 * @param {string} offset
	 * @param {string} suffix
	 * @return {string}
	 */function eb(e,t,r,n,a){return t+r+eg(n)+a}/**
	 * @private
	 * @param {string} match
	 * @param {string} property
	 * @param {string} color
	 * @param {string} space
	 * @param {string} offset
	 * @return {string}
	 */function e_(e,t,r,n,a){return t+r+n+eg(a)}return{/**
		 * Transform a left-to-right stylesheet to right-to-left.
		 *
		 * @param {string} css Stylesheet to transform
		 * @param {Object} options Options
		 * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
		 * (e.g. 'ltr', 'rtl')
		 * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
		 * (e.g. 'left', 'right')
		 * @return {string} Transformed stylesheet
		 */"transform":function(s,u){// Use single quotes in this object literal key for closure compiler.
// Tokenizers
var c=new n(z,a),l=new n(V,i),f=new n(Y,o);// Tokenize
s=f.tokenize(l.tokenize(c.tokenize(// We wrap tokens in ` , not ~ like the original implementation does.
// This was done because ` is not a legal character in CSS and can only
// occur in URLs, where we escape it to %60 before inserting our tokens.
s.replace("`","%60"))));// Transform URLs
if(u.transformDirInUrl){// Replace 'ltr' with 'rtl' and vice versa in background URLs
s=s.replace(X,"$1"+t+"$2").replace(J,"$1"+r+"$2").replace(Z,"$1"+e).replace(ee,"$1ltr").replace(U,"rtl").replace(H,"ltr").replace(B,"rtl")}if(u.transformEdgeInUrl){// Replace 'left' with 'right' and vice versa in background URLs
s=s.replace(K,"$1"+e).replace(Q,"$1left").replace(U,"right")}// Transform rules
s=s// Replace direction: ltr; with direction: rtl; and vice versa.
.replace(q,"$1"+e).replace(W,"$1ltr").replace(U,"rtl")// Flip rules like left: , padding-right: , etc.
.replace($,"$1"+e).replace(G,"$1left").replace(U,"right")// Flip East and West in rules like cursor: nw-resize;
.replace(et,"$1$2"+e).replace(er,"$1$2e-resize").replace(U,"w-resize")// Border radius
.replace(es,em)// Shadows
.replace(eu,ey).replace(ec,e_).replace(el,e_).replace(ef,ey)// Translate
.replace(ed,eb).replace(eh,eb)// Swap the second and fourth parts in four-part notation rules
// like padding: 1px 2px 3px 4px;
.replace(en,"$1$2$3$8$5$6$7$4$9").replace(ea,"$1$2$3$8$5$6$7$4$9")// Flip horizontal background percentages
.replace(ei,ep).replace(eo,ep);// Detokenize
s=c.detokenize(l.detokenize(f.detokenize(s)));return s}}}/* Initialization */r=new a;/* Exports */if(true&&e.exports){/**
	 * Transform a left-to-right stylesheet to right-to-left.
	 *
	 * This function is a static wrapper around the transform method of an instance of CSSJanus.
	 *
	 * @param {string} css Stylesheet to transform
	 * @param {Object|boolean} [options] Options object, or transformDirInUrl option (back-compat)
	 * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
	 * (e.g. 'ltr', 'rtl')
	 * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
	 * (e.g. 'left', 'right')
	 * @param {boolean} [transformEdgeInUrl] Back-compat parameter
	 * @return {string} Transformed stylesheet
	 */t.transform=function(e,t,n){var a;if(typeof t==="object"){a=t}else{a={};if(typeof t==="boolean"){a.transformDirInUrl=t}if(typeof n==="boolean"){a.transformEdgeInUrl=n}}return r.transform(e,a)}}else if(typeof window!=="undefined"){/* global window */// Allow cssjanus to be used in a browser.
// eslint-disable-next-line dot-notation
window["cssjanus"]=r}},6129:function(e){"use strict";// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,a){r=r||"&";n=n||"=";var i={};if(typeof e!=="string"||e.length===0){return i}var o=/\+/g;e=e.split(r);var s=1e3;if(a&&typeof a.maxKeys==="number"){s=a.maxKeys}var u=e.length;// maxKeys <= 0 means that we should not limit keys count
if(s>0&&u>s){u=s}for(var c=0;c<u;++c){var l=e[c].replace(o,"%20"),f=l.indexOf(n),d,h,p,v;if(f>=0){d=l.substr(0,f);h=l.substr(f+1)}else{d=l;h=""}p=decodeURIComponent(d);v=decodeURIComponent(h);if(!t(i,p)){i[p]=v}else if(Array.isArray(i[p])){i[p].push(v)}else{i[p]=[i[p],v]}}return i}},8137:function(e){"use strict";// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,a){r=r||"&";n=n||"=";if(e===null){e=undefined}if(typeof e==="object"){return Object.keys(e).map(function(a){var i=encodeURIComponent(t(a))+n;if(Array.isArray(e[a])){return e[a].map(function(e){return i+encodeURIComponent(t(e))}).join(r)}else{return i+encodeURIComponent(t(e[a]))}}).filter(Boolean).join(r)}if(!a)return"";return encodeURIComponent(t(a))+n+encodeURIComponent(t(e))}},9919:function(e,t,r){"use strict";var n;n=/* unused reexport */r(6129);n=t.stringify=r(8137)},3856:function(e,t,r){"use strict";// EXPORTS
r.d(t,{_:()=>/* binding */i});// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/config/route-configs.ts
var n=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce((e,r)=>e.replace(":".concat(r),String(t[r])),e)};var a=e=>{return{template:e,buildLink:t=>n(e,t)}};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/config/route-configs.ts
var i={Home:a("/"),BundleBasics:a("/basics"),BundleAdditional:a("/additional")}},2868:function(e,t,r){"use strict";// EXPORTS
r.d(t,{A:()=>/* binding */eZ});// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var n=r(2025);// EXTERNAL MODULE: external "React"
var a=r(1594);var i=/*#__PURE__*/r.n(a);// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.30.1_react@18.3.1/node_modules/react-router/dist/index.js
var o=r(3021);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var s=r(3757);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/ErrorBoundary.tsx
var u=r(2506);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/RouteSuspense.tsx
var c=e=>{var{component:t}=e;var{pathname:r}=(0,o/* .useLocation */.zy)();return/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{children:/*#__PURE__*/(0,n/* .jsx */.Y)(a.Suspense,{fallback:/*#__PURE__*/(0,n/* .jsx */.Y)(s/* .LoadingOverlay */.p8,{}),children:t})},r)};/* export default */const l=c;// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var f=r(31);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var d=r(4206);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var h=r(8346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var p=r(5757);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/styles.ts
var v=r(7764);// EXTERNAL MODULE: external "wp.i18n"
var m=r(2470);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/SVGIcon.tsx
var g=r(4485);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Tooltip.tsx + 56 modules
var y=r(3909);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/ConfirmationModal.tsx
var b=r(4937);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/Modal.tsx
var _=r(2580);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var w=r(4336);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/constants.ts
var x=r(7461);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/typography.ts
var E=r(983);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/Show.tsx
var O=r(6025);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/style-utils.ts
var S=r(4958);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var A=r(3640);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 29 modules
var T=r(4421);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
var R=r(1736);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Button.tsx
var k=r(9878);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/BasicModalWrapper.tsx
var C=r(3241);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/SuccessModal.tsx
var I=e=>{var{title:t,description:r,image:a,image2x:i,imageAlt:o,closeModal:s,actions:u,wrapperCss:c,bodyCss:l}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(C/* ["default"] */.A,{onClose:()=>s({action:"CLOSE"}),entireHeader:/*#__PURE__*/(0,n/* .jsx */.Y)(n/* .Fragment */.FK,{children:" "}),maxWidth:408,children:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:[D.wrapper,c],children:[/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,n/* .jsx */.Y)("img",{src:a,srcSet:i?"".concat(a," 1x, ").concat(i," 2x"):undefined,alt:o,css:D.image})}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:[D.body,l],children:[/*#__PURE__*/(0,n/* .jsx */.Y)("h5",{css:E/* .typography.heading5 */.I.heading5("medium"),children:t}),/*#__PURE__*/(0,n/* .jsx */.Y)("p",{css:D.message,children:r})]}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:D.footer,children:/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:u,fallback:/*#__PURE__*/(0,n/* .jsx */.Y)(k/* ["default"] */.A,{onClick:()=>s({action:"CLOSE"}),size:"small",children:(0,m.__)("Ok","tutor-pro")}),children:u})})]})})};/* export default */const P=I;var D={wrapper:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";padding:",v/* .spacing["24"] */.YK["24"],";gap:",v/* .spacing["24"] */.YK["24"],";"),image:/*#__PURE__*/(0,p/* .css */.AH)("width:100%;height:auto;object-position:center;object-fit:contain;"),body:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",v/* .spacing["8"] */.YK["8"],";"),message:/*#__PURE__*/(0,p/* .css */.AH)(E/* .typography.caption */.I.caption(),";color:",v/* .colorTokens.text.subdued */.I6.text.subdued,";"),footer:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",v/* .spacing["16"] */.YK["16"],";padding-top:",v/* .spacing["8"] */.YK["8"],";")};// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var M=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var L=r(1303);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var F=r(2473);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var N=r(690);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/useAnimation.tsx + 1 modules
var j=r(203);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var U=r(2554);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/molecules/Popover.tsx
var H=r(370);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/DropdownButton.tsx
function B(){var e=(0,N._)(["\n      padding: "," ",";\n    "]);B=function t(){return e};return e}function Y(){var e=(0,N._)(["\n      font-size: ",";\n      line-height: ",";\n      padding: "," ",";\n    "]);Y=function t(){return e};return e}function z(){var e=(0,N._)(["\n        background-color: ",";\n        color: ",";\n\n        &:hover,\n        &:focus,\n        &:active {\n          background-color: ",";\n          color: ",";\n        }\n      "]);z=function t(){return e};return e}function V(){var e=(0,N._)(["\n      background-color: ",";\n      color: ",";\n\n      &:not(:disabled) {\n        &:hover,\n        &:focus {\n          background-color: ",";\n          color: ",";\n        }\n\n        &:active {\n          background-color: ",";\n          color: ",";\n        }\n      }\n\n      ","\n    "]);V=function t(){return e};return e}function q(){var e=(0,N._)(["\n        background-color: ",";\n        color: ",";\n      "]);q=function t(){return e};return e}function W(){var e=(0,N._)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      ","\n    "]);W=function t(){return e};return e}function $(){var e=(0,N._)(["\n        color: ",";\n        box-shadow: 0 0 0 1px ",";\n      "]);$=function t(){return e};return e}function G(){var e=(0,N._)(["\n      background-color: ",";\n      color: ",";\n      box-shadow: 0 0 0 1px ",";\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      ","\n    "]);G=function t(){return e};return e}function K(){var e=(0,N._)(["\n        color: ",";\n        box-shadow: 0 0 0 1px ",";\n      "]);K=function t(){return e};return e}function Q(){var e=(0,N._)(["\n      background-color: ",";\n      color: ",";\n      box-shadow: 0 0 0 1px ",";\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n        box-shadow: 0 0 0 1px ",";\n        z-index: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n        box-shadow: 0 0 0 1px ",";\n      }\n\n      ","\n    "]);Q=function t(){return e};return e}function X(){var e=(0,N._)(["\n        background-color: ",";\n        color: ",";\n      "]);X=function t(){return e};return e}function J(){var e=(0,N._)(["\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      ","\n    "]);J=function t(){return e};return e}function Z(){var e=(0,N._)(["\n        color: ",";\n\n        svg {\n          color: ",";\n        }\n      "]);Z=function t(){return e};return e}function ee(){var e=(0,N._)(["\n      background-color: transparent;\n      color: ",";\n      padding: "," ",";\n\n      svg {\n        color: ",";\n      }\n\n      &:hover:not(:disabled) {\n        text-decoration: underline;\n        color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n\n      &:active:not(:disabled) {\n        color: ",";\n      }\n\n      &:focus:not(:disabled) {\n        color: ",";\n        svg {\n          color: ",";\n        }\n      }\n\n      ","\n    "]);ee=function t(){return e};return e}function et(){var e=(0,N._)(["\n      color: transparent;\n    "]);et=function t(){return e};return e}function er(){var e=(0,N._)(["\n      margin-right: 0;\n      margin-left: ",";\n    "]);er=function t(){return e};return e}function en(){var e=(0,N._)(["\n      border-color: ",";\n    "]);en=function t(){return e};return e}function ea(){var e=(0,N._)(["\n      border-color: ",";\n    "]);ea=function t(){return e};return e}function ei(){var e=(0,N._)(["\n      border-color: ",";\n    "]);ei=function t(){return e};return e}function eo(){var e=(0,N._)(["\n      padding-inline: ",";\n\n      svg {\n        width: 30px;\n        height: 30px;\n      }\n    "]);eo=function t(){return e};return e}function es(){var e=(0,N._)(["\n      padding-inline: ",";\n\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n    "]);es=function t(){return e};return e}function eu(){var e=(0,N._)(["\n      color: ",";\n    "]);eu=function t(){return e};return e}function ec(){var e=(0,N._)(["\n      pointer-events: none;\n      color: ",";\n    "]);ec=function t(){return e};return e}var el=e=>{var{text:t,type:r="button",disabled:a=false,onClick:i,buttonContentCss:o,isDanger:s=false,icon:u}=e,c=(0,F._)(e,["text","type","disabled","onClick","buttonContentCss","isDanger","icon"]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("button",(0,L._)((0,M._)({type:r,css:ep.dropdownOption({disabled:a,isDanger:s}),disabled:a,onClick:i},c),{children:[u&&/*#__PURE__*/(0,n/* .jsx */.Y)(n/* .Fragment */.FK,{children:u}),/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:[ep.dropdownOptionContent,o],children:t})]}))};var ef=e=>{var{type:t="button",text:r,children:o,variant:s="primary",placement:u=U/* .POPOVER_PLACEMENTS.BOTTOM_RIGHT */.zA.BOTTOM_RIGHT,animationType:c=j/* .AnimationType.slideUp */.J6.slideUp,size:l="regular",icon:f,iconPosition:d="left",loading:h=false,disabled:p=false,tabIndex:v=-1,onClick:m,buttonCss:y,buttonContentCss:b,dropdownMaxWidth:_="140px",disabledDropdown:w=false}=e,x=(0,F._)(e,["type","text","children","variant","placement","animationType","size","icon","iconPosition","loading","disabled","tabIndex","onClick","buttonCss","buttonContentCss","dropdownMaxWidth","disabledDropdown"]);var E=(0,a.useRef)(null);var[O,S]=(0,a.useState)(false);return/*#__PURE__*/(0,n/* .jsxs */.FD)(n/* .Fragment */.FK,{children:[/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:ep.wrapper,children:[/*#__PURE__*/(0,n/* .jsxs */.FD)("button",(0,L._)((0,M._)({type:t,css:[ep.button({variant:s,size:l,loading:h,disabled:p}),y],onClick:m,tabIndex:v,disabled:p||h},x),{children:[h&&!p&&/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:ep.spinner,children:/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"spinner",width:18,height:18})}),/*#__PURE__*/(0,n/* .jsxs */.FD)("span",{css:[ep.buttonContent({loading:h,disabled:p}),b],children:[f&&d==="left"&&/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:ep.buttonIcon({iconPosition:d}),children:f}),r,f&&d==="right"&&/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:ep.buttonIcon({iconPosition:d}),children:f})]})]})),/*#__PURE__*/(0,n/* .jsx */.Y)("button",{"data-cy":"dropdown-trigger",ref:E,type:"button",disabled:p||w,css:[ep.button({variant:s,size:l,loading:false,disabled:p||w}),ep.dropdownButton({variant:s,size:l,disabled:p||w})],onClick:()=>S(!O),children:/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"chevronDown",width:24,height:24})})]}),/*#__PURE__*/(0,n/* .jsx */.Y)(H/* ["default"] */.A,{gap:4,maxWidth:_,placement:u,triggerRef:E,isOpen:O,closePopover:()=>S(false),animationType:c,children:/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:ep.dropdownWrapper,children:i().Children.map(o,e=>{if(/*#__PURE__*/i().isValidElement(e)){var t=(0,L._)((0,M._)({},e.props),{onClick:t=>{var r;S(false);(r=e.props)===null||r===void 0?void 0:r.onClick(t)}});return /*#__PURE__*/i().cloneElement(e,t)}return e})})})]})};ef.Item=el;/* export default */const ed=ef;var eh=/*#__PURE__*/(0,p/* .keyframes */.i7)("0%{transform:rotate(0);}100%{transform:rotate(360deg);}");var ep={wrapper:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),";align-items:center;border-radius:",v/* .borderRadius["6"] */.Vq["6"],";:focus-within{box-shadow:",v/* .shadow.focus */.r7.focus,";}"),button:e=>{var{variant:t,size:r,loading:n,disabled:a}=e;return/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",E/* .typography.caption */.I.caption("medium"),"    display:inline-block;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;color:",v/* .colorTokens.text.primary */.I6.text.primary,";border:0;padding:",v/* .spacing["8"] */.YK["8"]," ",v/* .spacing["16"] */.YK["16"],";border-radius:",v/* .borderRadius["6"] */.Vq["6"]," 0 0 ",v/* .borderRadius["6"] */.Vq["6"],";z-index:",v/* .zIndex.level */.fE.level,";transition-property:box-shadow,background-color,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;position:relative;",r==="large"&&(0,p/* .css */.AH)(B(),v/* .spacing["12"] */.YK["12"],v/* .spacing["32"] */.YK["32"])," ",r==="small"&&(0,p/* .css */.AH)(Y(),v/* .fontSize["13"] */.J["13"],v/* .lineHeight["20"] */.K_["20"],v/* .spacing["6"] */.YK["6"],v/* .spacing["16"] */.YK["16"]),"    \n    ",t==="primary"&&(0,p/* .css */.AH)(V(),v/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],v/* .colorTokens.text.white */.I6.text.white,v/* .colorTokens.action.primary.hover */.I6.action.primary.hover,v/* .colorTokens.text.white */.I6.text.white,v/* .colorTokens.action.primary.active */.I6.action.primary.active,v/* .colorTokens.text.white */.I6.text.white,(a||n)&&(0,p/* .css */.AH)(z(),v/* .colorTokens.action.primary.disable */.I6.action.primary.disable,v/* .colorTokens.text.disable */.I6.text.disable,v/* .colorTokens.action.primary.disable */.I6.action.primary.disable,v/* .colorTokens.text.disable */.I6.text.disable))," ",t==="secondary"&&(0,p/* .css */.AH)(W(),v/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],v/* .colorTokens.text.brand */.I6.text.brand,v/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,v/* .colorTokens.action.secondary.active */.I6.action.secondary.active,(a||n)&&(0,p/* .css */.AH)(q(),v/* .colorTokens.action.primary.disable */.I6.action.primary.disable,v/* .colorTokens.text.disable */.I6.text.disable))," ",t==="secondary"&&(0,p/* .css */.AH)(G(),v/* .colorTokens.action.outline["default"] */.I6.action.outline["default"],v/* .colorTokens.text.brand */.I6.text.brand,v/* .colorTokens.stroke.brand */.I6.stroke.brand,v/* .colorTokens.action.outline.hover */.I6.action.outline.hover,v/* .colorTokens.action.outline.active */.I6.action.outline.active,(a||n)&&(0,p/* .css */.AH)($(),v/* .colorTokens.text.disable */.I6.text.disable,v/* .colorTokens.action.outline.disable */.I6.action.outline.disable))," ",t==="tertiary"&&(0,p/* .css */.AH)(Q(),v/* .colorTokens.background.white */.I6.background.white,v/* .colorTokens.text.subdued */.I6.text.subdued,v/* .colorTokens.stroke["default"] */.I6.stroke["default"],v/* .colorTokens.background.hover */.I6.background.hover,v/* .colorTokens.stroke.hover */.I6.stroke.hover,v/* .zIndex.positive */.fE.positive,v/* .colorTokens.background.active */.I6.background.active,v/* .colorTokens.stroke.hover */.I6.stroke.hover,(a||n)&&(0,p/* .css */.AH)(K(),v/* .colorTokens.text.disable */.I6.text.disable,v/* .colorTokens.action.outline.disable */.I6.action.outline.disable))," ",t==="danger"&&(0,p/* .css */.AH)(J(),v/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,v/* .colorTokens.text.error */.I6.text.error,v/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,v/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,(a||n)&&(0,p/* .css */.AH)(X(),v/* .colorTokens.action.primary.disable */.I6.action.primary.disable,v/* .colorTokens.text.disable */.I6.text.disable))," ",t==="text"&&(0,p/* .css */.AH)(ee(),v/* .colorTokens.text.subdued */.I6.text.subdued,v/* .spacing["4"] */.YK["4"],v/* .spacing["8"] */.YK["8"],v/* .colorTokens.icon["default"] */.I6.icon["default"],v/* .colorTokens.text.primary */.I6.text.primary,v/* .colorTokens.icon.brand */.I6.icon.brand,v/* .colorTokens.text.title */.I6.text.title,v/* .colorTokens.text.title */.I6.text.title,v/* .colorTokens.icon.brand */.I6.icon.brand,(a||n)&&(0,p/* .css */.AH)(Z(),v/* .colorTokens.text.disable */.I6.text.disable,v/* .colorTokens.icon.disable */.I6.icon.disable)),":disabled{cursor:not-allowed;}")},buttonContent:e=>{var{loading:t,disabled:r}=e;return/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;",t&&!r&&(0,p/* .css */.AH)(et()))},buttonIcon:e=>{var{iconPosition:t}=e;return/*#__PURE__*/(0,p/* .css */.AH)("display:grid;place-items:center;margin-right:",v/* .spacing["6"] */.YK["6"],";",t==="right"&&(0,p/* .css */.AH)(er(),v/* .spacing["6"] */.YK["6"]))},spinner:/*#__PURE__*/(0,p/* .css */.AH)("position:absolute;visibility:visible;display:flex;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);& svg{animation:",eh," 1.5s linear infinite;}"),dropdownButton:e=>{var{variant:t,size:r,disabled:n}=e;return/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.flexCenter */.x.flexCenter(),"    padding-inline:",v/* .spacing["8"] */.YK["8"],";border-left:1px solid transparent;border-radius:0 ",v/* .borderRadius["6"] */.Vq["6"]," ",v/* .borderRadius["6"] */.Vq["6"]," 0;svg{width:24px;height:24px;}",t==="primary"&&(0,p/* .css */.AH)(en(),v/* .colorTokens.stroke.brand */.I6.stroke.brand)," ",t==="danger"&&(0,p/* .css */.AH)(ea(),v/* .colorTokens.stroke.danger */.I6.stroke.danger)," ",n&&(0,p/* .css */.AH)(ei(),v/* .colorTokens.stroke.disable */.I6.stroke.disable)," ",r==="large"&&(0,p/* .css */.AH)(eo(),v/* .spacing["12"] */.YK["12"])," ",r==="small"&&(0,p/* .css */.AH)(es(),v/* .spacing["6"] */.YK["6"]))},dropdownWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;flex-direction:column;padding-block:",v/* .spacing["6"] */.YK["6"],";"),dropdownOption:e=>{var{disabled:t,isDanger:r}=e;return/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",E/* .typography.body */.I.body(),";color:",v/* .colorTokens.text.primary */.I6.text.primary,";width:100%;padding:",v/* .spacing["6"] */.YK["6"]," ",v/* .spacing["16"] */.YK["16"]," ",v/* .spacing["6"] */.YK["6"]," ",v/* .spacing["20"] */.YK["20"],";transition:background-color 0.3s ease-in-out;cursor:pointer;display:flex;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";outline:2px solid transparent;outline-offset:-2px;",r&&(0,p/* .css */.AH)(eu(),v/* .colorTokens.text.error */.I6.text.error),":hover{background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";color:",r?v/* .colorTokens.text.error */.I6.text.error:v/* .colorTokens.text.title */.I6.text.title,";}:focus,:active{outline-color:",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,p/* .css */.AH)(ec(),v/* .colorTokens.text.disable */.I6.text.disable),"    svg:first-of-type{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}")},dropdownOptionContent:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;svg{flex-shrink:0;}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/util.ts + 4 modules
var ev=r(2927);// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/services/bundle.ts
var em=r(7419);// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/utils/utils.ts
var eg=r(81);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/review-submitted.webp
const ey=r.p+"images/review-submitted-edf6b690.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/review-submitted-2x.webp
const eb=r.p+"images/review-submitted-2x-e2f2f56c.webp";// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/header/HeaderActions.tsx
var e_=(0,eg/* .getBundleId */.w)();var ew=()=>{var e,t,r,i,o;var s=(0,h/* .useFormContext */.xW)();var{showModal:u}=(0,_/* .useModal */.h)();var c=(0,h/* .useWatch */.FH)({name:"post_status"});var l=(0,h/* .useWatch */.FH)({name:"visibility"});var y=(0,h/* .useWatch */.FH)({name:"preview_link"});var b=(0,h/* .useWatch */.FH)({name:"isScheduleEnabled"});var E=(0,h/* .useWatch */.FH)({name:"schedule_date"});var C=(0,h/* .useWatch */.FH)({name:"schedule_time"});var[I,D]=(0,a.useState)(c);var M=(0,em/* .useSaveCourseBundleMutation */.BT)();var L=s.formState.dirtyFields.schedule_date||s.formState.dirtyFields.schedule_time;var F=(e=w/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||e===void 0?void 0:e.includes(x/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var N=(t=w/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||t===void 0?void 0:t.includes(x/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var j=((r=w/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.instructor_can_delete_course)==="on"||F;var U=((i=w/* .tutorConfig.settings */.P.settings)===null||i===void 0?void 0:i.hide_admin_bar_for_users)==="off";var H=((o=w/* .tutorConfig.settings */.P.settings)===null||o===void 0?void 0:o.instructor_can_publish_course)==="on";var B=(e,t)=>(0,A._)(function*(){var r=(0,em/* .convertBundleFormDataToPayload */.r)(e);D(t);if(e_){var a=(0,ev/* .determinePostStatus */.q9)(t,l);var i=yield M.mutateAsync((0,f._)((0,d._)((0,f._)({},r,e_?{ID:e_}:{}),{post_status:a}),!e.isScheduleEnabled?{post_date:(0,T/* .format */.GP)(new Date,x/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H),post_date_gmt:(0,ev/* .convertToGMT */.dn)(new Date)}:{},e.isScheduleEnabled&&{edit_date:true}));if(!i.data){return}if(t==="pending"){u({component:P,props:{title:(0,m.__)("Course Bundle submitted for review","tutor-pro"),description:(0,m.__)("Thank you for submitting your course bundle. It will be reviewed by our team shortly.","tutor-pro"),image:ey,image2x:eb,imageAlt:(0,m.__)("Course Bundle submitted for review","tutor-pro"),wrapperCss:/*#__PURE__*/(0,p/* .css */.AH)("align-items:center;text-align:center;"),actions:/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:S/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,n/* .jsx */.Y)(k/* ["default"] */.A,{"data-cy":"back-to-course-bundles",onClick:()=>{if(window.location.href.includes("wp-admin")){window.location.href=w/* .tutorConfig.backend_bundle_list_url */.P.backend_bundle_list_url}else{window.location.href=w/* .tutorConfig.frontend_bundle_list_url */.P.frontend_bundle_list_url}},size:"small",children:(0,m.__)("Back to Course Bundles","tutor-pro")})})}})}return}})();var Y=()=>{if(!H&&!F&&N){return{text:(0,m.__)("Submit","tutor-pro"),action:"pending"}}var e=(0,R/* .isBefore */.Y)(new Date,new Date("".concat(E," ").concat(C)));var t=!e_||["pending","draft"].includes(c);if(t){var r=L&&b&&e;return{text:r?(0,m.__)("Schedule","tutor-pro"):(0,m.__)("Publish","tutor-pro"),action:r?"future":"publish"}}if(b){var n=L&&e;return{text:n?(0,m.__)("Schedule","tutor-pro"):(0,m.__)("Update","tutor-pro"),action:"future"}}return{text:(0,m.__)("Update","tutor-pro"),action:"publish"}};var z=()=>{var e={text:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:[S/* .styleUtils.display.flex */.x.display.flex(),{alignItems:"center"}],children:[(0,m.__)("Preview","tutor-pro"),/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"linkExternal",width:24,height:24})]}),onClick:!e_||c==="draft"&&e_?()=>window.open(y,"_blank","noopener"):ev/* .noop */.lQ,isDanger:false,dataCy:"preview-bundle"};var t={text:/*#__PURE__*/(0,n/* .jsx */.Y)(n/* .Fragment */.FK,{children:(0,m.__)("Move to Trash","tutor-pro")}),onClick:()=>(0,A._)(function*(){if(j){try{yield s.handleSubmit(e=>B(e,"trash"))()}finally{window.location.href=window.location.href.includes("wp-admin")?w/* .tutorConfig.backend_bundle_list_url */.P.backend_bundle_list_url:w/* .tutorConfig.frontend_bundle_list_url */.P.frontend_bundle_list_url}}})(),isDanger:true,dataCy:"move-to-trash"};var r={text:/*#__PURE__*/(0,n/* .jsx */.Y)(n/* .Fragment */.FK,{children:(0,m.__)("Switch to Draft","tutor-pro")}),onClick:s.handleSubmit(e=>B(e,"draft")),isDanger:false,dataCy:"switch-to-draft"};var a={text:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:[S/* .styleUtils.display.flex */.x.display.flex(),{alignItems:"center"}],children:[(0,m.__)("Legacy Mode","tutor-pro"),/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"linkExternal",width:24,height:24})]}),onClick:()=>{var e=e_?"".concat(w/* ["default"].TUTOR_SITE_URL */.A.TUTOR_SITE_URL,"/wp-admin/post.php?post=").concat(e_,"&action=edit"):"".concat(w/* ["default"].TUTOR_SITE_URL */.A.TUTOR_SITE_URL,"/wp-admin/post-new.php?post_type=courses");window.open(e,"_blank","noopener")},isDanger:false,dataCy:"back-to-legacy"};var i={text:/*#__PURE__*/(0,n/* .jsx */.Y)(n/* .Fragment */.FK,{children:(0,m.__)("Publish Immediately","tutor-pro")}),onClick:s.handleSubmit(e=>B((0,d._)((0,f._)({},e),{isScheduleEnabled:false}),"publish")),isDanger:false,dataCy:"publish-immediately"};var o=[e];if((F||H)&&b&&(0,R/* .isBefore */.Y)(new Date,new Date("".concat(E," ").concat(C)))){o.unshift(i)}if(e_&&c!=="draft"){o.pop();if(F||H){o.push(r)}}if(c!=="trash"&&(F||j)){o.push(t)}if(F||U){o.push(a)}return o};(0,a.useEffect)(()=>{if(M.isSuccess){s.reset(s.getValues())}// eslint-disable-next-line react-hooks/exhaustive-deps
},[M.isSuccess]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:ex.headerRight,children:[/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:c==="draft"&&l!=="private",fallback:/*#__PURE__*/(0,n/* .jsx */.Y)(k/* ["default"] */.A,{variant:"text",icon:/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"linkExternal",width:24,height:24}),iconPosition:"right",onClick:()=>window.open(y,"_blank","noopener"),disabled:!y,size:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?"regular":"small",children:/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop,children:(0,m.__)("Preview","tutor-pro")})}),children:/*#__PURE__*/(0,n/* .jsx */.Y)(k/* ["default"] */.A,{variant:"secondary",icon:/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"upload",width:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?24:20,height:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?24:20}),loading:I==="draft"&&M.isPending,iconPosition:"left",buttonCss:/*#__PURE__*/(0,p/* .css */.AH)("padding-inline:",v/* .spacing["16"] */.YK["16"],";"),onClick:s.handleSubmit(e=>B(e,"draft")),size:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?"regular":"small",children:/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop,children:(0,m.__)("Save as Draft","tutor-pro")})})}),/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:z().length>1,fallback:/*#__PURE__*/(0,n/* .jsx */.Y)(k/* ["default"] */.A,{"data-cy":"bundle-builder-submit-button",size:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?"regular":"small",loading:["publish","future","pending"].includes(I)&&M.isPending,onClick:s.handleSubmit(e=>B(e,Y().action)),children:Y().text}),children:/*#__PURE__*/(0,n/* .jsx */.Y)(ed,{"data-cy":"bundle-builder-submit-button",text:Y().text,size:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop?"regular":"small",variant:"primary",loading:["publish","future","pending"].includes(I)&&M.isPending,onClick:s.handleSubmit(e=>B(e,Y().action)),dropdownMaxWidth:b&&(0,R/* .isBefore */.Y)(new Date,new Date("".concat(E," ").concat(C)))?"190px":"164px",disabledDropdown:z().length===0,children:z().map((e,t)=>/*#__PURE__*/(0,n/* .jsx */.Y)(ed.Item,{text:e.text,onClick:e.onClick,isDanger:e.isDanger,"data-cy":e.dataCy},t))})})]})};var ex={headerRight:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["12"] */.YK["12"],";")};/* export default */const eE=ew;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/logo.svg
var eO,eS,eA;function eT(){return eT=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},eT.apply(null,arguments)}var eR=function e(e){return /*#__PURE__*/a.createElement("svg",eT({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 108 24"},e),eO||(eO=/*#__PURE__*/a.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M79.285 19.01h5.639v1.163H78.05V7.838h1.234V19.01ZM97.436 7.838v12.336h-1.234V9.706l-4.318 7.225h-.176l-4.317-7.225v10.468h-1.234V7.838h1.513l4.126 6.905 4.126-6.905zm5.991 12.548q-1.691 0-2.898-.802a4.18 4.18 0 0 1-1.683-2.212l1.057-.616q.335 1.146 1.234 1.788.898.644 2.308.643 1.374 0 2.141-.607.767-.608.767-1.613 0-.968-.705-1.463-.705-.493-2.326-1.021-1.92-.635-2.538-1.023-1.41-.845-1.41-2.45 0-1.567 1.093-2.476 1.092-.907 2.696-.907 1.445 0 2.503.749a4.55 4.55 0 0 1 1.568 1.912l-1.04.582q-.846-2.045-3.031-2.045-1.145 0-1.85.564-.705.565-.705 1.569 0 .916.635 1.374.634.459 2.096.934l.961.327q.291.097.846.316.555.221.82.388t.643.459q.379.29.546.581.168.292.299.705.133.414.132.89 0 1.57-1.145 2.51-1.145.944-3.014.944m-37.14-.202V8.099h2.337v1.207h.038c1.052-1.5 2.766-1.538 3.389-1.558v2.571a4.6 4.6 0 0 0-1.811.487c-.798.428-1.46 1.44-1.46 3.35v6.047l-2.493-.02Zm-3.635-6.034c0 2.055-1.659 3.727-3.698 3.727-2.04 0-3.698-1.672-3.698-3.728s1.659-3.727 3.698-3.727c2.04 0 3.698 1.672 3.698 3.727Zm.64-4.275a6.12 6.12 0 0 0-4.338-1.79 6.12 6.12 0 0 0-4.338 1.79 6 6 0 0 0-1.777 4.274 6 6 0 0 0 1.777 4.274 6.13 6.13 0 0 0 4.338 1.79 6.13 6.13 0 0 0 4.338-1.79 6 6 0 0 0 1.777-4.274c0-1.613-.63-3.13-1.777-4.274M50.087 20.174h-2.493V10.36h-1.81V8.082h1.81V2.906h2.493v5.176h2.18v2.278h-2.18zM34.8 8.082v5.666c0 3.292 1.46 4.168 3.31 4.168 2.065 0 3.486-1.325 3.486-4.245V8.082h2.493v12.093H41.81v-1.773h-.058c-.681 1.15-2.24 1.773-3.914 1.773-1.52 0-2.843-.487-3.797-1.325-1.11-.954-1.753-2.453-1.753-5.121V8.082zm-6.387 12.126H25.92v-9.856h-1.81V8.074h1.81V2.906h2.493v5.168h2.18v2.278h-2.18z",clipRule:"evenodd"})),eS||(eS=/*#__PURE__*/a.createElement("path",{fill:"#0049F8",fillRule:"evenodd",d:"M5.054 14.882a1.13 1.13 0 0 1-1.075-1.075V11.36c0-.592.482-1.075 1.075-1.075.592 0 1.075.483 1.075 1.075v2.447c0 .592-.445 1.075-1.002 1.075zm7.71 0c-.593 0-1.075-.444-1.075-1.037V11.36c0-.592.482-1.075 1.075-1.075.592 0 1.075.483 1.075 1.075v2.447a1.08 1.08 0 0 1-1.075 1.076Z",clipRule:"evenodd"})),eA||(eA=/*#__PURE__*/a.createElement("path",{fill:"#0049F8",fillRule:"evenodd",d:"M2.546 9.52c.48-1 1.44-1.64 2.56-1.68 1.598.04 2.88 1.398 2.841 3v5.404c.08.6.64 1 1.24.918.48-.08.88-.439.918-.918v-5.4c-.041-1.6 1.24-2.96 2.842-3.001 1.081 0 2.04.6 2.48 1.561 1.799 3.56.4 7.88-3.16 9.683a7.18 7.18 0 0 1-9.68-3.164c-1-2-1.038-4.4-.041-6.402ZM7.067 2.4h4.04v1.561A9 9 0 0 0 9.03 3.72c-.681 0-1.36.08-2 .2zm11.002 11.08c0-.24.04-.438.04-.721 0-3.28-1.76-6.281-4.64-7.881V2.4h1.761a1.18 1.18 0 0 0 1.202-1.202C16.432.518 15.91 0 15.23 0H2.946c-.68.041-1.198.559-1.198 1.24s.521 1.201 1.202 1.201h1.76v2.442c-4.363 2.396-6.003 7.88-3.603 12.239.12.2.2.359.321.558 3.4 5.722 12.521 6.281 15.602 6.32.28 0 .521-.12.76-.28.2-.2.28-.48.28-.76-.002.004-.002-9.48-.002-9.48Z",clipRule:"evenodd"})))};/* export default */const ek=eR;// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/header/Logo.tsx
var eC=()=>{var e;var t=!!w/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;return/*#__PURE__*/(0,n/* .jsx */.Y)("button",{type:"button",css:[S/* .styleUtils.resetButton */.x.resetButton,eI.logo],children:/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:t&&((e=w/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.course_builder_logo_url),fallback:/*#__PURE__*/(0,n/* .jsx */.Y)(ek,{width:108,height:24}),children:e=>/*#__PURE__*/(0,n/* .jsx */.Y)("img",{src:e,alt:"Tutor LMS"})})})};var eI={logo:/*#__PURE__*/(0,p/* .css */.AH)("padding-left:",v/* .spacing["32"] */.YK["32"],";cursor:default;img{max-height:24px;width:auto;object-fit:contain;object-position:center;}",v/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding-left:",v/* .spacing["24"] */.YK["24"],";}",v/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-area:logo;padding-left:",v/* .spacing["16"] */.YK["16"],";}")};/* export default */const eP=eC;// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var eD=r(599);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/For.tsx
var eM=r(7073);// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/contexts/BundleNavigatorContext.tsx
var eL=r(2353);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/Tracker.tsx
function eF(){var e=(0,eD._)(["\n      color: ",";\n    "]);eF=function t(){return e};return e}function eN(){var e=(0,eD._)(["\n      color: ",";\n      cursor: not-allowed;\n    "]);eN=function t(){return e};return e}function ej(){var e=(0,eD._)(["\n        border-color: ",";\n        border-color: ",";\n        background-color: ",";\n        color: ",";\n      "]);ej=function t(){return e};return e}var eU=()=>{var{steps:e}=(0,eL/* .useBundleNavigator */.h)();var t=(0,o/* .useNavigate */.Zp)();var r=(0,h/* .useFormContext */.xW)();var a=r.watch("post_title");var i=e=>(0,A._)(function*(){t(e.path)})();return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{"data-cy":"tutor-tracker",css:eB.wrapper,children:/*#__PURE__*/(0,n/* .jsx */.Y)(eM/* ["default"] */.A,{each:e,children:t=>/*#__PURE__*/(0,n/* .jsxs */.FD)("button",{type:"button",css:eB.element({isActive:t.isActive,isDisabled:t.id!=="basic"&&!a}),onClick:()=>i(t),disabled:t.id!=="basic"&&!a,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("span",{"data-element-id":true,children:t.indicator}),/*#__PURE__*/(0,n/* .jsx */.Y)("span",{"data-element-name":true,"data-isActive":t.isActive,children:t.label}),/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:t.indicator<e.length,children:/*#__PURE__*/(0,n/* .jsx */.Y)("span",{"data-element-indicator":true})})]},t.id)})})};/* export default */const eH=eU;var eB={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;"),element:e=>{var{isActive:t=false,isDisabled:r=false}=e;return/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",S/* .styleUtils.display.flex */.x.display.flex(),";",E/* .typography.small */.I.small(),";padding:",v/* .spacing["4"] */.YK["4"]," ",v/* .spacing["0"] */.YK["0"]," ",v/* .spacing["4"] */.YK["4"]," ",v/* .spacing["8"] */.YK["8"],";gap:",v/* .spacing["8"] */.YK["8"],";align-items:center;&:hover,&:focus{background:none;box-shadow:none;color:",v/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid ",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;border-radius:",v/* .borderRadius["4"] */.Vq["4"],";}&:is(:first-of-type){padding-left:0;}",t&&(0,p/* .css */.AH)(eF(),v/* .colorTokens.text.primary */.I6.text.primary)," ",r&&(0,p/* .css */.AH)(eN(),v/* .colorTokens.text.hints */.I6.text.hints),"    [data-element-id]{",S/* .styleUtils.display.flex */.x.display.flex(),";",E/* .typography.small */.I.small("bold"),";line-height:",v/* .lineHeight["20"] */.K_["20"],";width:24px;height:24px;border-radius:",v/* .borderRadius.circle */.Vq.circle,";justify-content:center;align-items:center;border:1px solid ",v/* .colorTokens.color.black["10"] */.I6.color.black["10"],";color:",v/* .colorTokens.text.hints */.I6.text.hints,";",t&&(0,p/* .css */.AH)(ej(),v/* .colorTokens.stroke.brand */.I6.stroke.brand,v/* .colorTokens.stroke.brand */.I6.stroke.brand,v/* .colorTokens.design.brand */.I6.design.brand,v/* .colorTokens.text.white */.I6.text.white),"}[data-element-indicator]{width:16px;height:2px;border-radius:",v/* .spacing["6"] */.YK["6"],";background-color:",v/* .colorTokens.stroke["default"] */.I6.stroke["default"],";margin-inline:4px;}",v/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-element-name]:not([data-isActive='true']){display:none;}}")}};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/header/Header.tsx
var eY=()=>{var e,t;var r=(0,h/* .useFormContext */.xW)();var{showModal:a}=(0,_/* .useModal */.h)();var i=(e=w/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||e===void 0?void 0:e.includes(x/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var o=((t=w/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.hide_admin_bar_for_users)==="off";var s=r.formState.isDirty;var u=()=>{if(s){a({component:b/* ["default"] */.A,props:{title:(0,m.__)("Do you want to exit without saving?","tutor-pro"),description:(0,m.__)("You’re about to leave the course bundle creation process without saving your changes.","tutor-pro"),confirmButtonText:(0,m.__)("Yes, exit without saving","tutor-pro"),confirmButtonVariant:"danger",cancelButtonText:(0,m.__)("Continue editing","tutor-pro"),maxWidth:445}}).then(e=>{if(e.action==="CONFIRM"){var t=window.location.href.includes("wp-admin");window.location.href=t?w/* .tutorConfig.backend_bundle_list_url */.P.backend_bundle_list_url:w/* .tutorConfig.frontend_bundle_list_url */.P.frontend_bundle_list_url}})}else{var e=window.location.href.includes("wp-admin");window.location.href=e?w/* .tutorConfig.backend_bundle_list_url */.P.backend_bundle_list_url:w/* .tutorConfig.frontend_bundle_list_url */.P.frontend_bundle_list_url}};return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:eV.wrapper(i||o),children:[/*#__PURE__*/(0,n/* .jsx */.Y)(eP,{}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:eV.container,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:eV.titleAndTackerWrapper,children:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:eV.titleAndTacker,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("h6",{css:eV.title,children:(0,m.__)("Course Bundle","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("span",{css:eV.divider,"data-title-divider":true}),/*#__PURE__*/(0,n/* .jsx */.Y)(eH,{})]})}),/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop,children:/*#__PURE__*/(0,n/* .jsx */.Y)(eE,{})})]}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:eV.closeButtonWrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)(O/* ["default"] */.A,{when:!x/* .CURRENT_VIEWPORT.isAboveDesktop */.vN.isAboveDesktop,children:/*#__PURE__*/(0,n/* .jsx */.Y)(eE,{})}),/*#__PURE__*/(0,n/* .jsx */.Y)(y/* ["default"] */.A,{delay:200,content:(0,m.__)("Exit","tutor-pro"),placement:"left",children:/*#__PURE__*/(0,n/* .jsx */.Y)("button",{type:"button",css:eV.closeButton,onClick:u,children:/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:32,height:32})})})]})]})};/* export default */const ez=eY;var eV={wrapper:e=>/*#__PURE__*/(0,p/* .css */.AH)("height:",v/* .headerHeight */.$A,"px;width:100%;background-color:",v/* .colorTokens.surface.navbar */.I6.surface.navbar,";border-bottom:1px solid ",v/* .colorTokens.stroke.divider */.I6.stroke.divider,";display:grid;grid-template-columns:1fr ",v/* .containerMaxWidth */.iL,"px 1fr;align-items:center;position:sticky;top:",e?x/* .WP_ADMIN_BAR_HEIGHT */.I4:"0px",";z-index:",v/* .zIndex.header */.fE.header,";",v/* .Breakpoint.tablet */.EA.tablet,"{grid-template-columns:auto 1fr auto;top:0;}",v/* .Breakpoint.smallMobile */.EA.smallMobile,"{height:auto;padding-block:",v/* .spacing["8"] */.YK["8"],";grid-template-areas:'logo closeButton'\n        'container container';row-gap:",v/* .spacing["8"] */.YK["8"],";}"),container:/*#__PURE__*/(0,p/* .css */.AH)("max-width:",v/* .containerMaxWidth */.iL,"px;width:100%;height:",v/* .headerHeight */.$A,"px;",S/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;",v/* .Breakpoint.tablet */.EA.tablet,"{[data-title-divider]{margin-left:",v/* .spacing["12"] */.YK["12"],";}}",v/* .Breakpoint.smallMobile */.EA.smallMobile,"{height:auto;grid-area:container;order:2;justify-content:center;[data-title-divider]{display:none;}}"),titleAndTackerWrapper:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;"),titleAndTacker:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",v/* .spacing["12"] */.YK["12"],";align-items:center;margin-right:",v/* .spacing["16"] */.YK["16"],";"),divider:/*#__PURE__*/(0,p/* .css */.AH)("width:2px;height:16px;background-color:",v/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",v/* .borderRadius["20"] */.Vq["20"],";"),title:/*#__PURE__*/(0,p/* .css */.AH)(E/* .typography.body */.I.body("medium"),";color:",v/* .colorTokens.text.subdued */.I6.text.subdued,";text-transform:none;letter-spacing:normal;",v/* .Breakpoint.tablet */.EA.tablet,"{display:none;[data-title-divider]{display:none;}}"),closeButtonWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;align-items:center;justify-content:flex-end;margin-right:",v/* .spacing["16"] */.YK["16"],";",v/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-area:closeButton;order:1;margin-right:",v/* .spacing["8"] */.YK["8"],";}"),closeButton:/*#__PURE__*/(0,p/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",S/* .styleUtils.flexCenter */.x.flexCenter(),";cursor:pointer;color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";margin-left:",v/* .spacing["4"] */.YK["4"],";border-radius:",v/* .borderRadius["4"] */.Vq["4"],";transition:all 0.2s ease-in-out;&:hover{background-color:",v/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,";color:",v/* .colorTokens.icon.error */.I6.icon.error,";}&:focus{box-shadow:",v/* .shadow.focus */.r7.focus,";}"),previewButton:/*#__PURE__*/(0,p/* .css */.AH)("color:",v/* .colorTokens.text.title */.I6.text.title,";svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),magicButton:/*#__PURE__*/(0,p/* .css */.AH)("display:inline-flex;align-items:center;gap:",v/* .spacing["4"] */.YK["4"],";padding-inline:",v/* .spacing["4"] */.YK["4"],";margin-left:",v/* .spacing["4"] */.YK["4"],";")};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/Layout.tsx
var eq=(0,eg/* .getBundleId */.w)();var eW=()=>{var e=(0,h/* .useForm */.mN)({defaultValues:em/* .defaultCourseBundleData */.jS,mode:"onChange",shouldFocusError:true});var t=(0,em/* .useGetBundleDetailsQuery */.CV)(eq);(0,a.useEffect)(()=>{if(t.data){var r=(0,em/* .convertBundleToFormData */.vs)(t.data);e.reset(r,{keepDirtyValues:true})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.data]);return/*#__PURE__*/(0,n/* .jsx */.Y)(h/* .FormProvider */.Op,(0,d._)((0,f._)({},e),{children:/*#__PURE__*/(0,n/* .jsx */.Y)(eL/* .BundleNavigatorProvider */.F,{children:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:eG.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)(ez,{}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:eG.contentWrapper,children:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* .Outlet */.sv,{})})]})})}))};/* export default */const e$=eW;var eG={wrapper:/*#__PURE__*/(0,p/* .css */.AH)("background-color:",v/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";"),contentWrapper:/*#__PURE__*/(0,p/* .css */.AH)("display:flex;max-width:",v/* .containerMaxWidth */.iL,"px;width:100%;min-height:calc(100vh - ",v/* .headerHeight */.$A,"px);margin:0 auto;",v/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding-inline:",v/* .spacing["12"] */.YK["12"],";padding-bottom:",v/* .spacing["56"] */.YK["56"],";}")};// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/config/route-configs.ts + 1 modules
var eK=r(3856);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/config/routes.tsx
var eQ,eX;if(false){}else{eQ=/*#__PURE__*/i().lazy(()=>{return r.e(/* import() | bundle-builder-basic */"421").then(r.bind(r,8523))});eX=/*#__PURE__*/i().lazy(()=>{return r.e(/* import() | bundle-builder-additional */"626").then(r.bind(r,3121))})}var eJ=[{path:eK/* .BundleBuilderRouteConfigs.Home.template */._.Home.template,element:/*#__PURE__*/(0,n/* .jsx */.Y)(e$,{}),children:[{index:true,element:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* .Navigate */.C5,{to:eK/* .BundleBuilderRouteConfigs.BundleBasics.template */._.BundleBasics.template,replace:true})},{path:eK/* .BundleBuilderRouteConfigs.BundleBasics.template */._.BundleBasics.template,element:/*#__PURE__*/(0,n/* .jsx */.Y)(l,{component:/*#__PURE__*/(0,n/* .jsx */.Y)(eQ,{})})},{path:eK/* .BundleBuilderRouteConfigs.BundleAdditional.template */._.BundleAdditional.template,element:/*#__PURE__*/(0,n/* .jsx */.Y)(l,{component:/*#__PURE__*/(0,n/* .jsx */.Y)(eX,{})})}]},{path:"*",element:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* .Navigate */.C5,{to:eK/* .BundleBuilderRouteConfigs.Home.template */._.Home.template,replace:true})}];/* export default */const eZ=eJ},2353:function(e,t,r){"use strict";r.d(t,{F:()=>_,h:()=>b});/* import */var n=r(31);/* import */var a=r(4206);/* import */var i=r(2025);/* import */var o=r(1594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var u=r(2470);/* import */var c=/*#__PURE__*/r.n(u);/* import */var l=r(1231);/* import */var f=r(8638);/* import */var d=r(2927);/* import */var h=r(3856);/* import */var p=r(2868);/* import */var v=r(7419);/* import */var m=r(81);var g=[{indicator:1,id:"basic",label:(0,u.__)("Basics","tutor-pro"),path:h/* .BundleBuilderRouteConfigs.BundleBasics.buildLink */._.BundleBasics.buildLink(),isDisabled:false,isActive:true},{indicator:2,id:"additional",label:(0,u.__)("Additional","tutor-pro"),path:h/* .BundleBuilderRouteConfigs.BundleAdditional.buildLink */._.BundleAdditional.buildLink(),isDisabled:true,isActive:false}];var y=/*#__PURE__*/s().createContext({steps:g,setSteps:d/* .noop */.lQ,updateStepByIndex:d/* .noop */.lQ,currentIndex:0,bundleContent:null});var b=()=>(0,o.useContext)(y);var _=e=>{var{children:t}=e;var[r,s]=(0,o.useState)(g);var u=(0,l/* .useCurrentPath */.G)(p/* ["default"] */.A);var c=(0,m/* .getBundleId */.w)();var d=(0,v/* .useGetBundleDetailsQuery */.CV)(Number(c));var h=(0,o.useMemo)(()=>{if(!d.data){return null}return d.data},[d.data]);var b=(0,o.useCallback)((e,t)=>{s(r=>{return r.map((r,a)=>{if(a===e){return(0,n._)({},r,t)}return r})})},[]);var _=(0,o.useMemo)(()=>{return r.findIndex(e=>e.path===u)},[r,u]);(0,o.useEffect)(()=>{s(e=>e.map((e,t)=>{return(0,a._)((0,n._)({},e),{isActive:t===_})}))},[_]);(0,o.useEffect)(()=>{if(!(0,f/* .isDefined */.O9)(h)){return}s(e=>e.map(e=>{return(0,a._)((0,n._)({},e),{isDisabled:false})}))},[h]);return/*#__PURE__*/(0,i/* .jsx */.Y)(y.Provider,{value:{steps:r,setSteps:s,updateStepByIndex:b,currentIndex:_,bundleContent:h},children:t})}},7419:function(e,t,r){"use strict";r.d(t,{BT:()=>R,CV:()=>A,YH:()=>C,jS:()=>x,r:()=>O,vs:()=>E});/* import */var n=r(3640);/* import */var a=r(31);/* import */var i=r(4206);/* import */var o=r(3819);/* import */var s=r(7933);/* import */var u=r(7947);/* import */var c=r(2470);/* import */var l=/*#__PURE__*/r.n(c);/* import */var f=r(1736);/* import */var d=r(6219);/* import */var h=r(4421);/* import */var p=r(6741);/* import */var v=r(3833);/* import */var m=r(4336);/* import */var g=r(7461);/* import */var y=r(6243);/* import */var b=r(7152);/* import */var _=r(8638);/* import */var w=r(2927);var x={post_name:"",post_title:"",post_date:"",post_content:"",post_status:"draft",post_password:"",post_modified:"",course_benefits:"",visibility:"publish",thumbnail:{id:0,url:"",title:""},ribbon_type:"in_percentage",schedule_date:"",schedule_time:"",showScheduleForm:false,isScheduleEnabled:false,course_selling_option:"one_time",preview_link:"",total_enrolled:0,editor_used:{name:"classic",label:(0,c.__)("Classic Editor","tutor-pro"),link:""},course_enrollment_period:false,enrollment_starts_date:"",enrollment_starts_time:"",enrollment_ends_date:"",enrollment_ends_time:"",pause_enrollment:false,maximum_students:null,enrollment_expiry:0,tax_on_single:true,tax_on_subscription:true,certificate_for_individual_courses:true,tutor_course_certificate_template:"none",course_certificates_templates:[],details:{overview:{total_courses:0,total_topics:0,total_quizzes:0,total_assignments:0,total_video_contents:0,total_video_duration:"",total_resources:0,total_duration:"",certificate:false},authors:[],courses:[],categories:[],subtotal_price:"",subtotal_sale_price:"",subtotal_raw_price:"",subtotal_raw_sale_price:"",course_ids:[]}};var E=e=>{var t,r,n,a;var i,o,s,u,c,l,v,m,y,b,x,E,O,S,A,T,R,k,C,I,P,D,M,L,F,N,j,U,H,B,Y;return{post_name:(i=e.post_name)!==null&&i!==void 0?i:"",post_title:(o=e.post_title)!==null&&o!==void 0?o:"",post_date:(s=e.post_date)!==null&&s!==void 0?s:"",post_content:(u=e.post_content)!==null&&u!==void 0?u:"",post_status:(c=e.post_status)!==null&&c!==void 0?c:"draft",post_password:(l=e.post_password)!==null&&l!==void 0?l:"",post_modified:e.post_modified,course_benefits:(v=e.course_benefits)!==null&&v!==void 0?v:"",maximum_students:(m=e.course_settings.maximum_students)!==null&&m!==void 0?m:0,enrollment_expiry:(y=e.course_settings.enrollment_expiry)!==null&&y!==void 0?y:0,visibility:(()=>{var t;if((t=e.post_password)===null||t===void 0?void 0:t.length){return"password_protected"}if(e.post_status==="private"){return"private"}return"publish"})(),thumbnail:{id:e.thumbnail_id,url:e.thumbnail,title:""},ribbon_type:(b=e.ribbon_type)!==null&&b!==void 0?b:"in_percentage",isScheduleEnabled:(0,f/* .isBefore */.Y)(new Date,new Date(e.post_date)),showScheduleForm:!(0,f/* .isBefore */.Y)(new Date,new Date(e.post_date)),schedule_date:!(0,f/* .isBefore */.Y)((0,d/* .parseISO */.H)(e.post_date),new Date)?(0,h/* .format */.GP)((0,d/* .parseISO */.H)(e.post_date),g/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",schedule_time:!(0,f/* .isBefore */.Y)((0,d/* .parseISO */.H)(e.post_date),new Date)?(0,h/* .format */.GP)((0,d/* .parseISO */.H)(e.post_date),g/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",course_selling_option:(x=e.course_selling_option)!==null&&x!==void 0?x:"one_time",preview_link:(E=e.preview_link)!==null&&E!==void 0?E:"",total_enrolled:(O=e.total_enrolled)!==null&&O!==void 0?O:0,editor_used:e.editor_used,course_enrollment_period:e.course_settings.course_enrollment_period==="yes",enrollment_starts_date:(0,p/* .isValid */.f)(new Date(e.course_settings.enrollment_starts_at))?(0,h/* .format */.GP)((0,w/* .convertGMTtoLocalDate */.g1)(e.course_settings.enrollment_starts_at),g/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",enrollment_starts_time:(0,p/* .isValid */.f)(new Date(e.course_settings.enrollment_starts_at))?(0,h/* .format */.GP)((0,w/* .convertGMTtoLocalDate */.g1)(e.course_settings.enrollment_starts_at),g/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",enrollment_ends_date:(0,p/* .isValid */.f)(new Date(e.course_settings.enrollment_ends_at))?(0,h/* .format */.GP)((0,w/* .convertGMTtoLocalDate */.g1)(e.course_settings.enrollment_ends_at),g/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",enrollment_ends_time:(0,p/* .isValid */.f)(new Date(e.course_settings.enrollment_ends_at))?(0,h/* .format */.GP)((0,w/* .convertGMTtoLocalDate */.g1)(e.course_settings.enrollment_ends_at),g/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",pause_enrollment:e.course_settings.pause_enrollment==="yes",tax_on_single:(0,_/* .isDefined */.O9)((t=e.tax_collection)===null||t===void 0?void 0:t.tax_on_single)?((r=e.tax_collection)===null||r===void 0?void 0:r.tax_on_single)==="1":true,tax_on_subscription:(0,_/* .isDefined */.O9)((n=e.tax_collection)===null||n===void 0?void 0:n.tax_on_subscription)?((a=e.tax_collection)===null||a===void 0?void 0:a.tax_on_subscription)==="1":true,certificate_for_individual_courses:e.certificate_for_individual_courses!=="0",tutor_course_certificate_template:(S=e.course_certificate_template)!==null&&S!==void 0?S:"none",course_certificates_templates:(A=e.course_certificates_templates)!==null&&A!==void 0?A:[],details:{overview:{total_courses:(T=e.details.overview.total_courses)!==null&&T!==void 0?T:0,total_topics:(R=e.details.overview.total_topics)!==null&&R!==void 0?R:0,total_quizzes:(k=e.details.overview.total_quizzes)!==null&&k!==void 0?k:0,total_assignments:(C=e.details.overview.total_assignments)!==null&&C!==void 0?C:0,total_video_contents:(I=e.details.overview.total_video_contents)!==null&&I!==void 0?I:0,total_video_duration:(P=e.details.overview.total_video_duration)!==null&&P!==void 0?P:"",total_resources:(D=e.details.overview.total_resources)!==null&&D!==void 0?D:0,total_duration:(M=e.details.overview.total_duration)!==null&&M!==void 0?M:"",certificate:(L=e.details.overview.certificate)!==null&&L!==void 0?L:false},authors:(F=e.details.authors)!==null&&F!==void 0?F:[],courses:(N=e.details.courses)!==null&&N!==void 0?N:[],categories:(j=e.details.categories)!==null&&j!==void 0?j:[],subtotal_price:(U=e.details.subtotal_price)!==null&&U!==void 0?U:"",subtotal_sale_price:(H=e.details.subtotal_sale_price)!==null&&H!==void 0?H:"",subtotal_raw_price:(B=e.details.subtotal_raw_price)!==null&&B!==void 0?B:"",subtotal_raw_sale_price:e.details.subtotal_raw_sale_price||"",course_ids:(Y=e.details.course_ids)!==null&&Y!==void 0?Y:[]}}};var O=e=>{var t,r;var n,o,s;return(0,i._)((0,a._)((0,i._)((0,a._)({},e.isScheduleEnabled&&{post_date:(0,h/* .format */.GP)(new Date("".concat(e.schedule_date," ").concat(e.schedule_time)),g/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H),post_date_gmt:(0,w/* .convertToGMT */.dn)(new Date("".concat(e.schedule_date," ").concat(e.schedule_time)))}),{post_name:e.post_name,post_title:e.post_title,post_content:e.post_content,post_status:e.visibility==="private"?"private":"publish",post_password:e.visibility==="password_protected"?e.post_password:"",post_modified:e.post_modified,course_benefits:e.course_benefits,thumbnail_id:(n=(t=e.thumbnail)===null||t===void 0?void 0:t.id)!==null&&n!==void 0?n:"-1",ribbon_type:e.ribbon_type,sale_price:e.details.subtotal_raw_sale_price.toString(),course_selling_option:e.course_selling_option,"course_settings[maximum_students]":(o=e.maximum_students)!==null&&o!==void 0?o:0,"course_settings[enrollment_expiry]":(s=e.enrollment_expiry)!==null&&s!==void 0?s:"","course_settings[course_enrollment_period]":e.course_enrollment_period?"yes":"no","course_settings[enrollment_starts_at]":(0,p/* .isValid */.f)(new Date("".concat(e.enrollment_starts_date," ").concat(e.enrollment_starts_time)))?(0,w/* .convertToGMT */.dn)(new Date("".concat(e.enrollment_starts_date," ").concat(e.enrollment_starts_time)),g/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H):"","course_settings[enrollment_ends_at]":(0,p/* .isValid */.f)(new Date("".concat(e.enrollment_ends_date," ").concat(e.enrollment_ends_time)))?(0,w/* .convertToGMT */.dn)(new Date("".concat(e.enrollment_ends_date," ").concat(e.enrollment_ends_time)),g/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H):"","course_settings[pause_enrollment]":e.pause_enrollment?"yes":"no",course_ids:e.details.courses.map(e=>e.id)}),!!((r=m/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.enable_individual_tax_control)&&{tax_on_single:e.tax_on_single?"1":"0",tax_on_subscription:e.tax_on_subscription?"1":"0"}),{certificate_for_individual_courses:e.certificate_for_individual_courses?"1":"0",tutor_course_certificate_template:e.tutor_course_certificate_template})};var S=e=>(0,n._)(function*(){return y/* .wpAjaxInstance.get */.b.get(b/* ["default"].GET_BUNDLE_DETAILS */.A.GET_BUNDLE_DETAILS,{params:{bundle_id:e}})})();var A=e=>{return(0,o/* .useQuery */.I)({queryKey:["CourseBundle",e],queryFn:()=>S(e).then(e=>e.data)})};var T=e=>(0,n._)(function*(){return y/* .wpAjaxInstance.post */.b.post(b/* ["default"].UPDATE_BUNDLE */.A.UPDATE_BUNDLE,e)})();var R=()=>{var{showToast:e}=(0,v/* .useToast */.d)();var t=(0,s/* .useQueryClient */.jE)();return(0,u/* .useMutation */.n)({mutationFn:T,onSuccess:r=>{e({message:r.message,type:"success"});var n=new URLSearchParams(window.location.search).get("id");if(n){t.invalidateQueries({queryKey:["CourseBundle",parseInt(n,10)]})}},onError:t=>{e({message:(0,w/* .convertToErrorMessage */.EL)(t),type:"danger"})}})};var k=e=>(0,n._)(function*(){return y/* .wpAjaxInstance.post */.b.post(b/* ["default"].ADD_REMOVE_COURSE_TO_BUNDLE */.A.ADD_REMOVE_COURSE_TO_BUNDLE,e)})();var C=()=>{var{showToast:e}=(0,v/* .useToast */.d)();var t=(0,s/* .useQueryClient */.jE)();return(0,u/* .useMutation */.n)({mutationFn:k,onSuccess:(r,n)=>{e({message:r.message,type:"success"});t.setQueryData(["CourseBundle",n.ID],e=>{return(0,i._)((0,a._)({},e),{details:(0,a._)({},e.details,r.data)})})},onError:t=>{e({message:(0,w/* .convertToErrorMessage */.EL)(t),type:"danger"})}})}},81:function(e,t,r){"use strict";r.d(t,{o:()=>o,w:()=>i});/* import */var n=r(4336);/* import */var a=r(2927);var i=()=>{var e=new URLSearchParams(window.location.search);var t=e.get("id");return Number(t)};var o=e=>{var t;// If from woocommerce convert the monetization data to appropriate format.
if(e&&((t=n/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.monetize_by)==="wc"){e.map(e=>{var t;// Remove the span html tags returned by woocommerce.
var r=e.regular_price.replace(/<\/?[^>]+(>|$)/g,"");var n;var i=(n=(t=e.sale_price)===null||t===void 0?void 0:t.replace(/<\/?[^>]+(>|$)/g,""))!==null&&n!==void 0?n:null;// Get the html encoded currency string and decode it.
e.regular_price=(0,a/* .decodeHtmlEntities */.jT)(r);e.sale_price=i?(0,a/* .decodeHtmlEntities */.jT)(i):"";return e})}return e}},7152:function(e,t,r){"use strict";r.d(t,{A:()=>a});var n={ADMIN_AJAX:"wp-admin/admin-ajax.php",TAGS:"course-tag",CATEGORIES:"course-category",USERS:"users",USERS_LIST:"tutor_user_list",ORDER_DETAILS:"tutor_order_details",ADMIN_COMMENT:"tutor_order_comment",ORDER_MARK_AS_PAID:"tutor_order_paid",ORDER_REFUND:"tutor_order_refund",ORDER_CANCEL:"tutor_order_cancel",ADD_ORDER_DISCOUNT:"tutor_order_discount",COURSE_LIST:"course_list",BUNDLE_LIST:"tutor_get_bundle_list",CATEGORY_LIST:"category_list",CREATED_COURSE:"tutor_create_course",TUTOR_INSTRUCTOR_SEARCH:"tutor_course_instructor_search",CREATE_DRAFT_COURSE:"tutor_create_new_draft_course",TUTOR_YOUTUBE_VIDEO_DURATION:"tutor_youtube_video_duration",TUTOR_UNLINK_PAGE_BUILDER:"tutor_unlink_page_builder",// AI CONTENT GENERATION
GENERATE_AI_IMAGE:"tutor_pro_generate_image",MAGIC_FILL_AI_IMAGE:"tutor_pro_magic_fill_image",MAGIC_TEXT_GENERATION:"tutor_pro_generate_text_content",MAGIC_AI_MODIFY_CONTENT:"tutor_pro_modify_text_content",USE_AI_GENERATED_IMAGE:"tutor_pro_use_magic_image",OPEN_AI_SAVE_SETTINGS:"tutor_pro_chatgpt_save_settings",GENERATE_COURSE_CONTENT:"tutor_pro_generate_course_content",GENERATE_COURSE_TOPIC_CONTENT:"tutor_pro_generate_course_topic_content",SAVE_AI_GENERATED_COURSE_CONTENT:"tutor_pro_ai_course_create",GENERATE_QUIZ_QUESTIONS:"tutor_pro_generate_quiz_questions",GENERATE_AI_QUIZ_QUESTIONS:"tutor_pro_ai_generate_questions",// SUBSCRIPTION
GET_SUBSCRIPTIONS_LIST:"tutor_subscription_plans",SAVE_SUBSCRIPTION:"tutor_subscription_plan_save",DELETE_SUBSCRIPTION:"tutor_subscription_plan_delete",DUPLICATE_SUBSCRIPTION:"tutor_subscription_plan_duplicate",SORT_SUBSCRIPTION:"tutor_subscription_plan_sort",UPDATE_SUBSCRIPTION_STATUS:"tutor_subscription_status_update",RESUME_SUBSCRIPTION:"tutor_subscription_resume",EARLY_RENEW_SUBSCRIPTION:"tutor_subscription_early_renew",// COURSE
GET_COURSE_DETAILS:"tutor_course_details",UPDATE_COURSE:"tutor_update_course",GET_COURSE_LIST:"tutor_course_list",RESET_COURSE_PROGRESS:"tutor_reset_course_progress",TUTOR_COMPLETE_COURSE:"tutor_complete_course",// WOO COMMERCE PRODUCTS
GET_WC_PRODUCTS:"tutor_get_wc_products",GET_WC_PRODUCT_DETAILS:"tutor_get_wc_product",// QUIZ
GET_QUIZ_DETAILS:"tutor_quiz_details",SAVE_QUIZ:"tutor_quiz_builder_save",QUIZ_IMPORT_DATA:"quiz_import_data",QUIZ_EXPORT_DATA:"quiz_export_data",DELETE_QUIZ:"tutor_quiz_delete",START_QUIZ:"tutor_start_quiz",QUIZ_ABANDON:"tutor_quiz_abandon",QUIZ_TIMEOUT:"tutor_quiz_timeout",QUIZ_ATTEMPT_SUBMIT:"tutor_answering_quiz_question",REVIEW_QUIZ_ANSWERS:"tutor_review_quiz_answers",INSTRUCTOR_FEEDBACK:"tutor_instructor_feedback",// ZOOM
GET_ZOOM_MEETING_DETAILS:"tutor_zoom_meeting_details",SAVE_ZOOM_MEETING:"tutor_zoom_save_meeting",DELETE_ZOOM_MEETING:"tutor_zoom_delete_meeting",ZOOM_SAVE_API:"tutor_save_zoom_api",ZOOM_SAVE_SETTINGS:"tutor_save_zoom_settings",// GOOGLE MEET
GET_GOOGLE_MEET_DETAILS:"tutor_google_meet_meeting_details",SAVE_GOOGLE_MEET:"tutor_google_meet_new_meeting",DELETE_GOOGLE_MEET:"tutor_google_meet_delete",UPLOAD_GOOGLE_MEET_CREDENTIALS:"tutor_pro_google_meet_credential_upload",RESET_GOOGLE_MEET_CREDENTIALS:"tutor_google_meet_reset_cred",UPDATE_GOOGLE_MEET_SETTINGS:"tutor_update_google_meet_settings",// TOPIC
GET_COURSE_CONTENTS:"tutor_course_contents",SAVE_TOPIC:"tutor_save_topic",DELETE_TOPIC:"tutor_delete_topic",DELETE_TOPIC_CONTENT:"tutor_delete_lesson",UPDATE_COURSE_CONTENT_ORDER:"tutor_update_course_content_order",DUPLICATE_CONTENT:"tutor_duplicate_content",ADD_CONTENT_BANK_CONTENT_TO_COURSE:"tutor_content_bank_add_content_to_course",DELETE_CONTENT_BANK_CONTENT_FROM_COURSE:"tutor_content_bank_remove_content_from_course",// LESSON
GET_LESSON_DETAILS:"tutor_lesson_details",SAVE_LESSON:"tutor_save_lesson",LOAD_LESSON_COMMENTS:"tutor_load_lesson_comments",CREATE_LESSON_COMMENT:"tutor_create_lesson_comment",UPDATE_LESSON_COMMENT:"tutor_update_lesson_comment",DELETE_LESSON_COMMENT:"tutor_delete_lesson_comment",REPLY_LESSON_COMMENT:"tutor_reply_lesson_comment",LOAD_COMMENT_REPLIES:"tutor_load_comment_replies",// Q&A
QNA_SINGLE_ACTION:"tutor_qna_single_action",DELETE_DASHBOARD_QNA:"tutor_delete_dashboard_question",CREATE_UPDATE_QNA:"tutor_qna_create_update",UPDATE_QNA:"tutor_qna_update",LOAD_QNA_REPLIES:"tutor_qna_load_replies",// ASSIGNMENT
GET_ASSIGNMENT_DETAILS:"tutor_assignment_details",SAVE_ASSIGNMENT:"tutor_assignment_save",ASSIGNMENT_SUBMIT:"tutor_assignment_submit",REMOVE_ATTACHMENT:"tutor_remove_assignment_attachment",REMOVE_ASSIGNMENT_ATTEMPT:"tutor_remove_assignment_attempt",// TAX SETTINGS
GET_TAX_SETTINGS:"tutor_get_tax_settings",GET_H5P_QUIZ_CONTENT:"tutor_h5p_list_quiz_contents",GET_H5P_LESSON_CONTENT:"tutor_h5p_list_lesson_contents",GET_H5P_QUIZ_CONTENT_BY_ID:"tutor_h5p_quiz_content_by_id",// PAYMENT SETTINGS
GET_PAYMENT_SETTINGS:"tutor_payment_settings",GET_PAYMENT_GATEWAYS:"tutor_payment_gateways",INSTALL_PAYMENT_GATEWAY:"tutor_install_payment_gateway",REMOVE_PAYMENT_GATEWAY:"tutor_remove_payment_gateway",// ADDON LIST
GET_ADDON_LIST:"tutor_get_all_addons",ADDON_ENABLE_DISABLE:"addon_enable_disable",// INSTALL PLUGIN
TUTOR_INSTALL_PLUGIN:"tutor_install_plugin",// COUPON
GET_COUPON_DETAILS:"tutor_coupon_details",CREATE_COUPON:"tutor_coupon_create",UPDATE_COUPON:"tutor_coupon_update",COUPON_APPLIES_TO:"tutor_coupon_applies_to_list",// ENROLLMENT
CREATE_ENROLLMENT:"tutor_enroll_bulk_student",GET_COURSE_BUNDLE_LIST:"tutor_course_bundle_list",GET_UNENROLLED_USERS:"tutor_unenrolled_users",// MEMBERSHIP
GET_MEMBERSHIP_PLANS:"tutor_membership_plans",SAVE_MEMBERSHIP_PLAN:"tutor_membership_plan_save",DUPLICATE_MEMBERSHIP_PLAN:"tutor_membership_plan_duplicate",DELETE_MEMBERSHIP_PLAN:"tutor_membership_plan_delete",// COURSE BUNDLE
GET_BUNDLE_DETAILS:"tutor_get_course_bundle_data",UPDATE_BUNDLE:"tutor_create_course_bundle",ADD_REMOVE_COURSE_TO_BUNDLE:"tutor_add_remove_course_to_bundle",// IMPORT EXPORT
GET_EXPORTABLE_CONTENT:"tutor_pro_exportable_contents",EXPORT_CONTENTS:"tutor_pro_export",EXPORT_SETTINGS_FREE:"tutor_export_settings",IMPORT_CONTENTS:"tutor_pro_import",IMPORT_SETTINGS_FREE:"tutor_import_settings",GET_IMPORT_EXPORT_HISTORY:"tutor_pro_export_import_history",DELETE_IMPORT_EXPORT_HISTORY:"tutor_pro_delete_export_import_history",// CONTENT BANK
GET_CONTENT_BANK_COLLECTIONS:"tutor_content_bank_collections",SAVE_CONTENT_BANK_COLLECTION:"tutor_content_bank_collection_save",DELETE_CONTENT_BANK_COLLECTION:"tutor_content_bank_collection_delete",GET_CONTENT_BANK_CONTENTS:"tutor_content_bank_contents",DELETE_CONTENT_BANK_CONTENTS:"tutor_content_bank_content_delete",GET_CONTENT_DETAILS:"tutor_pro_get_content_details",GET_CONTENT_BANK_LESSON_DETAILS:"tutor_content_bank_lesson_details",GET_CONTENT_BANK_ASSIGNMENT_DETAILS:"tutor_content_bank_assignment_details",SAVE_CONTENT_BANK_LESSON_CONTENT:"tutor_content_bank_lesson_save",SAVE_CONTENT_BANK_ASSIGNMENT_CONTENT:"tutor_content_bank_assignment_save",SAVE_QUESTION_CONTENT:"tutor_content_bank_question_save",GET_CONTENT_BANK_QUESTION_DETAILS:"tutor_content_bank_question_details",DUPLICATE_CONTENT_BANK_CONTENT:"tutor_content_bank_content_duplicate",MOVE_CONTENT_BANK_CONTENT:"tutor_content_bank_content_move",DUPLICATE_CONTENT_BANK_COLLECTION:"tutor_content_bank_collection_duplicate",IMPORT_FROM_COURSES:"tutor_content_bank_content_synchronize",// Calendar
GET_CALENDAR_EVENTS:"get_calendar_materials",// Announcement
CREATE_ANNOUNCEMENT:"tutor_announcement_create",DELETE_ANNOUNCEMENT:"tutor_announcement_delete",// Notifications
PUSH_NOTIFICATION_SAVE_SUBSCRIPTION:"tutor_pn_save_subscription",GET_ALL_NOTIFICATIONS:"tutor_get_all_notifications",MARK_ALL_NOTIFICATIONS_AS_READ:"toggle_all_notifications_status_as_read",MARK_SINGLE_NOTIFICATION_AS_READ:"toggle_single_notification_status_as_read",MARK_ALL_NOTIFICATIONS_AS_UNREAD:"tutor_mark_all_notifications_as_unread",//Reviews
PLACE_RATING:"tutor_place_rating",DELETE_REVIEW:"delete_tutor_review",CLEAR_REVIEW_POPUP_DATA:"tutor_clear_review_popup_data",// Settings
FETCH_COUNTRIES:"/assets/json/countries.json",UPLOAD_PROFILE_PHOTO:"tutor_user_photo_upload",REMOVE_PROFILE_PHOTO:"tutor_user_photo_remove",UPDATE_PROFILE:"tutor_update_profile",SAVE_SOCIAL_PROFILE:"tutor_social_profile",SAVE_BILLING_INFO:"tutor_save_billing_info",SAVE_WITHDRAW_METHOD:"tutor_save_withdraw_account",RESET_PASSWORD:"tutor_profile_password_reset",UPDATE_PROFILE_NOTIFICATION:"tutor_save_notification_preference",UPDATE_USER_PREFERENCES:"tutor_save_user_preferences",RESET_USER_PREFERENCES:"tutor_reset_user_preferences",REMOVE_DEVICE_MANUALLY:"tutor_remove_device_manually",REMOVE_ALL_ACTIVE_LOGINS:"tutor_remove_all_active_logins",// Withdrawals
MAKE_AN_WITHDRAW:"tutor_make_an_withdraw",// Certificate
VERIFY_CERTIFICATE:"tutor_verify_certificate",// Instructor Dashboard
SAVE_INSTRUCTOR_HOME_SECTIONS_ORDER:"tutor_save_instructor_home_sections_order",SAVE_INSTRUCTOR_HOME_SECTIONS_VISIBILITY:"tutor_save_instructor_home_sections_visibility",// Tour
COMPLETE_TOUR:"tutor_complete_tour"};/* export default */const a=n},9878:function(e,t,r){"use strict";r.d(t,{A:()=>w});/* import */var n=r(33);/* import */var a=r(1303);/* import */var i=r(2473);/* import */var o=r(690);/* import */var s=r(2025);/* import */var u=r(1594);/* import */var c=/*#__PURE__*/r.n(u);/* import */var l=r(5757);/* import */var f=r(4485);/* import */var d=r(7764);/* import */var h=r(983);/* import */var p=r(7367);/* import */var v=r(4958);function m(){var e=(0,o._)(["\n      color: transparent;\n    "]);m=function t(){return e};return e}function g(){var e=(0,o._)(["\n      margin-right: 0;\n      margin-left: ",";\n    "]);g=function t(){return e};return e}function y(){var e=(0,o._)(["\n      opacity: 0;\n    "]);y=function t(){return e};return e}function b(){var e=(0,o._)(["\n      margin-inline: 0;\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/c().forwardRef((e,t)=>{var{variant:r="primary",isOutlined:o=false,size:u="regular",loading:c=false,children:l,disabled:d=false,icon:h,iconPosition:p="left",buttonCss:v,buttonContentCss:m,as:g="button",tabIndex:y,isIconOnly:b=false}=e,_=(0,i._)(e,["variant","isOutlined","size","loading","children","disabled","icon","iconPosition","buttonCss","buttonContentCss","as","tabIndex","isIconOnly"]);var w=[S({variant:r,outlined:o?r:"none",size:u,isLoading:c?"true":"false",iconOnly:b?"true":"false"}),v];var x=/*#__PURE__*/(0,s/* .jsxs */.FD)(s/* .Fragment */.FK,{children:[c&&!d&&/*#__PURE__*/(0,s/* .jsx */.Y)("span",{css:O.spinner,children:/*#__PURE__*/(0,s/* .jsx */.Y)(f/* ["default"] */.A,{name:"spinner",width:18,height:18})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("span",{css:[O.buttonContent({loading:c,disabled:d}),m],children:[h&&p==="left"&&/*#__PURE__*/(0,s/* .jsx */.Y)("span",{css:O.buttonIcon({iconPosition:p,loading:c,hasChildren:!!l}),children:h}),l,h&&p==="right"&&/*#__PURE__*/(0,s/* .jsx */.Y)("span",{css:O.buttonIcon({iconPosition:p,loading:c,hasChildren:!!l}),children:h})]})]});if(g==="a"){var{href:E,target:A,rel:T,download:R,onClick:k}=_,C=(0,i._)(_,["href","target","rel","download","onClick"]);// Auto-add security attributes for external links
var I=typeof E==="string"&&(E.startsWith("http")||E.startsWith("//"));var P=A==="_blank"&&I?"".concat(T?"".concat(T," "):"","noopener noreferrer"):T;return/*#__PURE__*/(0,s/* .jsx */.Y)("a",(0,a._)((0,n._)({ref:t,css:w,href:d||c?undefined:E,target:d||c?undefined:A,rel:P,download:d||c?undefined:R,tabIndex:d||c?-1:y,"aria-disabled":d||c,onClick:d||c?e=>e.preventDefault():k,role:"button","data-size":u},C),{children:x}))}var{type:D="button",onClick:M,form:L,name:F,value:N}=_,j=(0,i._)(_,["type","onClick","form","name","value"]);return/*#__PURE__*/(0,s/* .jsx */.Y)("button",(0,a._)((0,n._)({ref:t,type:D,css:w,disabled:d||c,tabIndex:y,onClick:M,form:L,name:F,value:N,"data-size":u},j),{children:x}))});_.displayName="Button";/* export default */const w=_;var x=/*#__PURE__*/(0,l/* .keyframes */.i7)("0%{transform:rotate(0);}100%{transform:rotate(360deg);}");var E={notOutlined:/*#__PURE__*/(0,l/* .css */.AH)("&:disabled,&[aria-disabled='true']{background-color:",d/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";color:",d/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",d/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}"),outlined:/*#__PURE__*/(0,l/* .css */.AH)("&:disabled,&[aria-disabled='true']{background-color:transparent;border:none;box-shadow:inset 0px 0px 0px 1px ",d/* .colorTokens.action.outline.disable */.I6.action.outline.disable,";color:",d/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",d/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}"),text:/*#__PURE__*/(0,l/* .css */.AH)("&:disabled,&[aria-disabled='true']{color:",d/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",d/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};var O={base:/*#__PURE__*/(0,l/* .css */.AH)(v/* .styleUtils.resetButton */.x.resetButton,";",v/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),";justify-content:center;align-items:center;",h/* .typography.caption */.I.caption("medium"),";",v/* .styleUtils.text.align.center */.x.text.align.center,";color:",d/* .colorTokens.text.white */.I6.text.white,";text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:0;padding:",d/* .spacing["8"] */.YK["8"]," ",d/* .spacing["32"] */.YK["32"],";border-radius:",d/* .borderRadius["6"] */.Vq["6"],";z-index:",d/* .zIndex.level */.fE.level,";transition:all 150ms ease-in-out;position:relative;svg{color:",d/* .colorTokens.icon.white */.I6.icon.white,";}&:disabled,&[aria-disabled='true']{cursor:not-allowed;}&:not(:disabled):not([aria-disabled='true']){&:focus{box-shadow:",d/* .shadow.focus */.r7.focus,";}&:focus-visible{box-shadow:none;outline:2px solid ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}"),variant:{primary:/*#__PURE__*/(0,l/* .css */.AH)("background-color:",d/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";",E.notOutlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{color:",d/* .colorTokens.text.white */.I6.text.white,";background-color:",d/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";}&:active{background-color:",d/* .colorTokens.action.primary.active */.I6.action.primary.active,";color:",d/* .colorTokens.text.white */.I6.text.white,";svg{color:",d/* .colorTokens.icon.white */.I6.icon.white,";}}}"),secondary:/*#__PURE__*/(0,l/* .css */.AH)("background-color:",d/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",d/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";}",E.notOutlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";color:",d/* .colorTokens.text.brand */.I6.text.brand,";}&:active{background-color:",d/* .colorTokens.action.secondary.active */.I6.action.secondary.active,";color:",d/* .colorTokens.text.brand */.I6.text.brand,";}}"),tertiary:/*#__PURE__*/(0,l/* .css */.AH)("box-shadow:inset 0px 0px 0px 1px ",d/* .colorTokens.stroke["default"] */.I6.stroke["default"],";color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";svg{color:",d/* .colorTokens.icon.hints */.I6.icon.hints,";}",E.outlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.background.hover */.I6.background.hover,";box-shadow:inset 0px 0px 0px 1px ",d/* .colorTokens.stroke.hover */.I6.stroke.hover,";color:",d/* .colorTokens.text.title */.I6.text.title,";svg{color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:active{background-color:",d/* .colorTokens.background.active */.I6.background.active,";svg{color:",d/* .colorTokens.icon.hints */.I6.icon.hints,";}}}"),danger:/*#__PURE__*/(0,l/* .css */.AH)("background-color:",d/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,";color:",d/* .colorTokens.text.error */.I6.text.error,";svg{color:",d/* .colorTokens.icon.error */.I6.icon.error,";}",E.notOutlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus,&:active{background-color:",d/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,";color:",d/* .colorTokens.text.error */.I6.text.error,";}}"),WP:/*#__PURE__*/(0,l/* .css */.AH)("background-color:",d/* .colorTokens.action.primary.wp */.I6.action.primary.wp,";",E.notOutlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.action.primary.wp_hover */.I6.action.primary.wp_hover,";color:",d/* .colorTokens.text.white */.I6.text.white,";}&:active{background-color:",d/* .colorTokens.action.primary.wp */.I6.action.primary.wp,";}}"),text:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";padding:",d/* .spacing["8"] */.YK["8"],";svg{color:",d/* .colorTokens.icon.hints */.I6.icon.hints,";}",E.text,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:transparent;color:",d/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:active{background-color:transparent;color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";}}")},outlined:{primary:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;box-shadow:inset 0px 0px 0px 1px ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";color:",d/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";}",E.outlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{color:",d/* .colorTokens.text.white */.I6.text.white,";svg{color:",d/* .colorTokens.icon.white */.I6.icon.white,";}}}"),secondary:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;box-shadow:inset 0px 0px 0px 1px ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";color:",d/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";}",E.outlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}}"),tertiary:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;",E.outlined,";"),danger:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;border:1px solid ",d/* .colorTokens.stroke.danger */.I6.stroke.danger,";",E.outlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,";}}"),WP:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;border:1px solid ",d/* .colorTokens.action.primary.wp */.I6.action.primary.wp,";color:",d/* .colorTokens.action.primary.wp */.I6.action.primary.wp,";svg{color:",d/* .colorTokens.icon.wp */.I6.icon.wp,";}",E.outlined,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{background-color:",d/* .colorTokens.action.primary.wp_hover */.I6.action.primary.wp_hover,";color:",d/* .colorTokens.text.white */.I6.text.white,";svg{color:",d/* .colorTokens.icon.white */.I6.icon.white,";}}}"),text:/*#__PURE__*/(0,l/* .css */.AH)("background-color:transparent;border:none;color:",d/* .colorTokens.text.primary */.I6.text.primary,";",E.text,";&:not(:disabled):not([aria-disabled='true']){&:hover,&:focus{color:",d/* .colorTokens.text.brand */.I6.text.brand,";}}"),none:/*#__PURE__*/(0,l/* .css */.AH)()},size:{regular:/*#__PURE__*/(0,l/* .css */.AH)("padding:",d/* .spacing["8"] */.YK["8"]," ",d/* .spacing["32"] */.YK["32"],";",h/* .typography.caption */.I.caption("medium"),";color:",d/* .colorTokens.text.white */.I6.text.white,";min-height:40px;"),large:/*#__PURE__*/(0,l/* .css */.AH)("padding:",d/* .spacing["12"] */.YK["12"]," ",d/* .spacing["40"] */.YK["40"],";",h/* .typography.body */.I.body("medium"),";color:",d/* .colorTokens.text.white */.I6.text.white,";min-height:48px;"),small:/*#__PURE__*/(0,l/* .css */.AH)("padding:",d/* .spacing["6"] */.YK["6"]," ",d/* .spacing["16"] */.YK["16"],";",h/* .typography.small */.I.small("medium"),";color:",d/* .colorTokens.text.white */.I6.text.white,";min-height:32px;")},isIconOnly:{true:/*#__PURE__*/(0,l/* .css */.AH)("aspect-ratio:1 / 1;&[data-size='regular']{padding:",d/* .spacing["8"] */.YK["8"],";width:40px;}&[data-size='large']{padding:",d/* .spacing["12"] */.YK["12"],";width:48px;}&[data-size='small']{padding:",d/* .spacing["6"] */.YK["6"],";width:32px;}"),false:/*#__PURE__*/(0,l/* .css */.AH)()},isLoading:{true:/*#__PURE__*/(0,l/* .css */.AH)("opacity:0.8;cursor:wait;"),false:/*#__PURE__*/(0,l/* .css */.AH)()},iconWrapper:{left:/*#__PURE__*/(0,l/* .css */.AH)("order:-1;"),right:/*#__PURE__*/(0,l/* .css */.AH)("order:1;")},buttonContent:e=>{var{loading:t,disabled:r,isIconOnly:n}=e;return/*#__PURE__*/(0,l/* .css */.AH)(v/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",n&&"justify-content: center;"," ",t&&!r&&(0,l/* .css */.AH)(m()))},buttonIcon:e=>{var{iconPosition:t,loading:r,hasChildren:n=true}=e;return/*#__PURE__*/(0,l/* .css */.AH)("display:grid;place-items:center;margin-right:",d/* .spacing["4"] */.YK["4"],";",t==="right"&&(0,l/* .css */.AH)(g(),d/* .spacing["4"] */.YK["4"])," ",r&&(0,l/* .css */.AH)(y())," ",!n&&(0,l/* .css */.AH)(b()))},spinner:/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;visibility:visible;display:flex;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);& svg{animation:",x," 1s linear infinite;}")};var S=(0,p/* .createVariation */.s)({variants:{size:{regular:O.size.regular,large:O.size.large,small:O.size.small},isLoading:{true:O.isLoading.true,false:O.isLoading.false},iconOnly:{true:O.isIconOnly.true,false:O.isIconOnly.false},variant:{primary:O.variant.primary,secondary:O.variant.secondary,tertiary:O.variant.tertiary,danger:O.variant.danger,WP:O.variant.WP,text:O.variant.text},outlined:{primary:O.outlined.primary,secondary:O.outlined.secondary,tertiary:O.outlined.tertiary,danger:O.outlined.danger,WP:O.outlined.WP,text:O.outlined.text,none:O.outlined.none}},defaultVariants:{variant:"primary",outlined:"none",size:"regular",isLoading:"false",iconOnly:"false"}},O.base)},3757:function(e,t,r){"use strict";r.d(t,{Ay:()=>v,YE:()=>d,p8:()=>f});/* import */var n=r(2025);/* import */var a=r(5757);/* import */var i=r(7764);var o=/*#__PURE__*/(0,a/* .keyframes */.i7)("0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}");var s=/*#__PURE__*/(0,a/* .keyframes */.i7)("0%{stroke-dashoffset:180;transform:rotate(0deg);}50%{stroke-dashoffset:",180/4,";transform:rotate(135deg);}100%{stroke-dashoffset:180;transform:rotate(360deg);}");var u=/*#__PURE__*/(0,a/* .keyframes */.i7)("	0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}");var c={fullscreen:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;"),loadingOverlay:/*#__PURE__*/(0,a/* .css */.AH)("position:absolute;top:0;bottom:0;right:0;left:0;display:flex;align-items:center;justify-content:center;"),loadingSection:/*#__PURE__*/(0,a/* .css */.AH)("width:100%;height:100px;display:flex;justify-content:center;align-items:center;"),svg:/*#__PURE__*/(0,a/* .css */.AH)("animation:",o," 1.4s linear infinite;"),spinnerPath:/*#__PURE__*/(0,a/* .css */.AH)("stroke-dasharray:180;stroke-dashoffset:0;transform-origin:center;animation:",s," 1.4s linear infinite;"),spinGradient:/*#__PURE__*/(0,a/* .css */.AH)("transition:transform;transform-origin:center;animation:",u," 1s infinite linear;")};var l=e=>{var{size:t=30,color:r=i/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)("svg",{width:t,height:t,css:c.svg,viewBox:"0 0 86 86",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/(0,n/* .jsx */.Y)("circle",{css:c.spinnerPath,fill:"none",stroke:r,strokeWidth:"6",strokeLinecap:"round",cx:"43",cy:"43",r:"30"})})};var f=()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:c.loadingOverlay,children:/*#__PURE__*/(0,n/* .jsx */.Y)(l,{})})};var d=()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:c.loadingSection,children:/*#__PURE__*/(0,n/* .jsx */.Y)(l,{})})};var h=()=>{return /*#__PURE__*/_jsx("div",{css:c.fullscreen,children:/*#__PURE__*/_jsx(l,{})})};var p=e=>{var{size:t=24}=e;return /*#__PURE__*/_jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/_jsx("path",{d:"M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12",stroke:"url(#paint0_linear_2402_3559)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",css:c.spinGradient}),/*#__PURE__*/_jsx("defs",{children:/*#__PURE__*/_jsxs("linearGradient",{id:"paint0_linear_2402_3559",x1:"4.50105",y1:"12",x2:"21.6571",y2:"6.7847",gradientUnits:"userSpaceOnUse",children:[/*#__PURE__*/_jsx("stop",{stopColor:"#FF9645"}),/*#__PURE__*/_jsx("stop",{offset:"0.152804",stopColor:"#FF6471"}),/*#__PURE__*/_jsx("stop",{offset:"0.467993",stopColor:"#CF6EBD"}),/*#__PURE__*/_jsx("stop",{offset:"0.671362",stopColor:"#A477D1"}),/*#__PURE__*/_jsx("stop",{offset:"1",stopColor:"#3E64DE"})]})})]})};/* export default */const v=l},4485:function(e,t,r){"use strict";r.d(t,{A:()=>g});/* import */var n=r(33);/* import */var a=r(1303);/* import */var i=r(2473);/* import */var o=r(690);/* import */var s=r(2025);/* import */var u=r(1594);/* import */var c=/*#__PURE__*/r.n(u);/* import */var l=r(5757);/* import */var f=r(4336);/* import */var d=r(9612);function h(){var e=(0,o._)(["\n      filter: grayscale(100%);\n    "]);h=function t(){return e};return e}var p={};var v=e=>{var{name:t,width:r=16,height:o=16,style:c,isColorIcon:l=false,ignoreKids:f}=e,h=(0,i._)(e,["name","width","height","style","isColorIcon","ignoreKids"]);var v,g;var{supportKidsIcon:b}=(0,d/* .useSVGIconConfig */.J)();var _=f!==null&&f!==void 0?f:!b;var w=_?"".concat(t,"-ignoreKids"):t;var[x,E]=(0,u.useState)(((v=p[w])===null||v===void 0?void 0:v.icon)||null);var[O,S]=(0,u.useState)(!((g=p[w])===null||g===void 0?void 0:g.icon));(0,u.useEffect)(()=>{var e;if((e=p[w])===null||e===void 0?void 0:e.icon){E(p[w].icon);S(false);return}S(true);m(t,w,r,o,_).then(e=>{E(e)}).catch(()=>{E(null)}).finally(()=>{S(false)})},[t,r,o,_,w]);var A=(0,n._)({},l&&{"data-colorize":true},h);var T=x?x.viewBox:"0 0 ".concat(r," ").concat(o);var R=x?x.fill:"none";if(!x&&!O){return/*#__PURE__*/(0,s/* .jsx */.Y)("svg",{viewBox:T,children:/*#__PURE__*/(0,s/* .jsx */.Y)("rect",{width:r,height:o,fill:"transparent"})})}return/*#__PURE__*/(0,s/* .jsx */.Y)("svg",(0,a._)((0,n._)({css:[c,{width:r,height:o},y.svg({isColorIcon:l})],xmlns:"http://www.w3.org/2000/svg",viewBox:T,fill:R},A),{role:"presentation","aria-hidden":true,dangerouslySetInnerHTML:{__html:x?x.icon:""}}))};function m(e,t,r,n,a){var i,o,s;if((i=p[t])===null||i===void 0?void 0:i.icon){// Icon already loaded
return Promise.resolve(p[t].icon)}if((o=p[t])===null||o===void 0?void 0:o.promise){// Fetch already in progress, return existing promise
return p[t].promise}var u=e.trim().replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([a-zA-Z])(\d+)/g,"$1-$2").toLowerCase();var c=!a&&f/* .tutorConfig.is_kids_mode */.P.is_kids_mode&&((s=f/* .tutorConfig.kids_icons_registry */.P.kids_icons_registry)===null||s===void 0?void 0:s.includes(u));var l=c?"assets/icons/kids/":"assets/icons/";var d="".concat(f/* .tutorConfig.tutor_url */.P.tutor_url).concat(l).concat(u,".svg");var h=fetch(d).then(t=>{if(!t.ok){throw new Error("Failed to load icon: ".concat(e))}return t.text()}).then(e=>{var a=new DOMParser;var i=a.parseFromString(e,"image/svg+xml");var o=i.querySelector("svg");var s=(o===null||o===void 0?void 0:o.getAttribute("viewBox"))||"0 0 ".concat(r," ").concat(n);var u=(o===null||o===void 0?void 0:o.getAttribute("fill"))||"none";var c=(o===null||o===void 0?void 0:o.innerHTML)||"";var l={viewBox:s,fill:u,icon:c};p[t]={icon:l};return l}).catch(e=>{p[t]={error:e};throw e});p[t]={loading:true,promise:h};return h}v.displayName="SVGIcon";/* export default */const g=/*#__PURE__*/(0,u.memo)(v,(e,t)=>{var r,n;return e.name===t.name&&e.height===t.height&&e.width===t.width&&e.isColorIcon===t.isColorIcon&&e.ignoreKids===t.ignoreKids&&((r=e.style)===null||r===void 0?void 0:r.name)===((n=t.style)===null||n===void 0?void 0:n.name)});var y={svg:e=>{var{isColorIcon:t=false}=e;return/*#__PURE__*/(0,l/* .css */.AH)("transition:filter 0.3s ease-in-out;",t&&(0,l/* .css */.AH)(h()),";")}}},3833:function(e,t,r){"use strict";r.d(t,{A:()=>P,d:()=>C});/* import */var n=r(33);/* import */var a=r(1303);/* import */var i=r(690);/* import */var o=r(2025);/* import */var s=r(1594);/* import */var u=/*#__PURE__*/r.n(s);/* import */var c=r(5757);/* import */var l=r(8606);/* import */var f=r(7764);/* import */var d=r(983);/* import */var h=r(203);/* import */var p=r(8638);/* import */var v=r(2927);/* import */var m=r(9878);/* import */var g=r(4485);function y(){var e=(0,i._)(["\n      left: ",";\n      top: calc("," + 60px);\n    "]);y=function t(){return e};return e}function b(){var e=(0,i._)(["\n      right: ",";\n      top: calc("," + 60px);\n    "]);b=function t(){return e};return e}function _(){var e=(0,i._)(["\n      left: 50%;\n      top: calc("," + 60px);\n      transform: translateX(-50%);\n    "]);_=function t(){return e};return e}function w(){var e=(0,i._)(["\n      left: ",";\n      bottom: ",";\n    "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      right: ",";\n      bottom: ",";\n    "]);x=function t(){return e};return e}function E(){var e=(0,i._)(["\n      left: 50%;\n      bottom: ",";\n      transform: translateX(-50%);\n    "]);E=function t(){return e};return e}function O(){var e=(0,i._)(["\n      background: ",";\n    "]);O=function t(){return e};return e}function S(){var e=(0,i._)(["\n      background: ",";\n    "]);S=function t(){return e};return e}function A(){var e=(0,i._)(["\n      background: ",";\n    "]);A=function t(){return e};return e}function T(){var e=(0,i._)(["\n      background: ",";\n\n      h5 {\n        color: ",";\n      }\n\n      svg > path {\n        color: ",";\n      }\n    "]);T=function t(){return e};return e}var R={type:"dark",message:"",autoCloseDelay:3e3,position:"bottom-right"};var k=/*#__PURE__*/u().createContext({showToast:()=>{}});var C=()=>(0,s.useContext)(k);var I=e=>{var{children:t,position:r="bottom-right"}=e;var[i,u]=(0,s.useState)([]);var c=(0,l/* .useTransition */.pn)(i,{from:{opacity:0,y:-40},enter:{opacity:1,y:0},leave:{opacity:.5,y:100},config:{duration:300}});var f=(0,s.useCallback)(e=>{var t=(0,a._)((0,n._)({},R,e),{id:(0,v/* .nanoid */.Ak)()});u(e=>[t,...e]);var r;if(!(0,p/* .isBoolean */.Lm)(t.autoCloseDelay)&&t.autoCloseDelay){r=setTimeout(()=>{u(e=>e.slice(0,-1))},t.autoCloseDelay)}return()=>{clearTimeout(r)}},[]);return/*#__PURE__*/(0,o/* .jsxs */.FD)(k.Provider,{value:{showToast:f},children:[t,/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:D.toastWrapper(r),children:c((e,t)=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)(h/* .AnimatedDiv */.LK,{"data-cy":"tutor-toast",style:e,css:D.toastItem(t.type),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("h5",{css:D.message,children:t.message}),/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{variant:"text",onClick:()=>{u(e=>e.filter(e=>e.id!==t.id))},children:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"timesAlt",width:16,height:16})})]},t.id)})})]})};/* export default */const P=I;var D={toastWrapper:e=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",f/* .spacing["16"] */.YK["16"],";max-width:400px;position:fixed;z-index:",f/* .zIndex.toast */.fE.toast,";",e==="top-left"&&(0,c/* .css */.AH)(y(),f/* .spacing["20"] */.YK["20"],f/* .spacing["20"] */.YK["20"])," ",e==="top-right"&&(0,c/* .css */.AH)(b(),f/* .spacing["20"] */.YK["20"],f/* .spacing["20"] */.YK["20"])," ",e==="top-center"&&(0,c/* .css */.AH)(_(),f/* .spacing["20"] */.YK["20"])," ",e==="bottom-left"&&(0,c/* .css */.AH)(w(),f/* .spacing["20"] */.YK["20"],f/* .spacing["20"] */.YK["20"])," ",e==="bottom-right"&&(0,c/* .css */.AH)(x(),f/* .spacing["20"] */.YK["20"],f/* .spacing["20"] */.YK["20"])," ",e==="bottom-center"&&(0,c/* .css */.AH)(E(),f/* .spacing["20"] */.YK["20"])),toastItem:e=>/*#__PURE__*/(0,c/* .css */.AH)("width:100%;min-height:60px;display:flex;align-items:center;justify-content:space-between;gap:",f/* .spacing["16"] */.YK["16"],";border-radius:",f/* .borderRadius["6"] */.Vq["6"],";padding:",f/* .spacing["16"] */.YK["16"],";svg > path{color:",f/* .colorTokens.icon.white */.I6.icon.white,";}",e==="dark"&&(0,c/* .css */.AH)(O(),f/* .colorTokens.color.black.main */.I6.color.black.main)," ",e==="danger"&&(0,c/* .css */.AH)(S(),f/* .colorTokens.design.error */.I6.design.error)," ",e==="success"&&(0,c/* .css */.AH)(A(),f/* .colorTokens.design.success */.I6.design.success)," ",e==="warning"&&(0,c/* .css */.AH)(T(),f/* .colorTokens.color.warning["70"] */.I6.color.warning["70"],f/* .colorTokens.text.primary */.I6.text.primary,f/* .colorTokens.text.primary */.I6.text.primary)),message:/*#__PURE__*/(0,c/* .css */.AH)(d/* .typography.body */.I.body(),";color:",f/* .colorTokens.text.white */.I6.text.white,";"),timesIcon:/*#__PURE__*/(0,c/* .css */.AH)("path{color:",f/* .colorTokens.icon.white */.I6.icon.white,";}")}},3909:function(e,t,r){"use strict";// EXPORTS
r.d(t,{A:()=>/* binding */r0});// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var n=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(1303);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(690);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var o=r(2025);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var s=r(5757);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs + 4 modules
var u=r(8606);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function c(e){if(e==null){return window}if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function l(e){var t=c(e).Element;return e instanceof t||e instanceof Element}function f(e){var t=c(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function d(e){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==="undefined"){return false}var t=c(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var h=Math.max;var p=Math.min;var v=Math.round;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function m(){var e=navigator.userAgentData;if(e!=null&&e.brands&&Array.isArray(e.brands)){return e.brands.map(function(e){return e.brand+"/"+e.version}).join(" ")}return navigator.userAgent};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function g(){return!/^((?!chrome|android).)*safari/i.test(m())};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function y(e,t,r){if(t===void 0){t=false}if(r===void 0){r=false}var n=e.getBoundingClientRect();var a=1;var i=1;if(t&&f(e)){a=e.offsetWidth>0?v(n.width)/e.offsetWidth||1:1;i=e.offsetHeight>0?v(n.height)/e.offsetHeight||1:1}var o=l(e)?c(e):window,s=o.visualViewport;var u=!g()&&r;var d=(n.left+(u&&s?s.offsetLeft:0))/a;var h=(n.top+(u&&s?s.offsetTop:0))/i;var p=n.width/a;var m=n.height/i;return{width:p,height:m,top:h,right:d+p,bottom:h+m,left:d,x:d,y:h}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function b(e){var t=c(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function _(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function w(e){if(e===c(e)||!f(e)){return b(e)}else{return _(e)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function x(e){return e?(e.nodeName||"").toLowerCase():null};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function E(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((l(e)?e.ownerDocument:e.document)||window.document).documentElement};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function O(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return y(E(e)).left+b(e).scrollLeft};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function S(e){return c(e).getComputedStyle(e)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function A(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=S(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function T(e){var t=e.getBoundingClientRect();var r=v(t.width)/e.offsetWidth||1;var n=v(t.height)/e.offsetHeight||1;return r!==1||n!==1}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function R(e,t,r){if(r===void 0){r=false}var n=f(t);var a=f(t)&&T(t);var i=E(t);var o=y(e,a,r);var s={scrollLeft:0,scrollTop:0};var u={x:0,y:0};if(n||!n&&!r){if(x(t)!=="body"||// https://github.com/popperjs/popper-core/issues/1078
A(i)){s=w(t)}if(f(t)){u=y(t,true);u.x+=t.clientLeft;u.y+=t.clientTop}else if(i){u.x=O(i)}}return{x:o.left+s.scrollLeft-u.x,y:o.top+s.scrollTop-u.y,width:o.width,height:o.height}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function k(e){var t=y(e);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var r=e.offsetWidth;var n=e.offsetHeight;if(Math.abs(t.width-r)<=1){r=t.width}if(Math.abs(t.height-n)<=1){n=t.height}return{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function C(e){if(x(e)==="html"){return e}return(// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(d(e)?e.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
E(e)// fallback
)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function I(e){if(["html","body","#document"].indexOf(x(e))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return e.ownerDocument.body}if(f(e)&&A(e)){return e}return I(C(e))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function P(e,t){var r;if(t===void 0){t=[]}var n=I(e);var a=n===((r=e.ownerDocument)==null?void 0:r.body);var i=c(n);var o=a?[i].concat(i.visualViewport||[],A(n)?n:[]):n;var s=t.concat(o);return a?s:s.concat(P(C(o)))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function D(e){return["table","td","th"].indexOf(x(e))>=0};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function M(e){if(!f(e)||// https://github.com/popperjs/popper-core/issues/837
S(e).position==="fixed"){return null}return e.offsetParent}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function L(e){var t=/firefox/i.test(m());var r=/Trident/i.test(m());if(r&&f(e)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var n=S(e);if(n.position==="fixed"){return null}}var a=C(e);if(d(a)){a=a.host}while(f(a)&&["html","body"].indexOf(x(a))<0){var i=S(a);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none"){return a}else{a=a.parentNode}}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function F(e){var t=c(e);var r=M(e);while(r&&D(r)&&S(r).position==="static"){r=M(r)}if(r&&(x(r)==="html"||x(r)==="body"&&S(r).position==="static")){return t}return r||L(e)||t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var N="top";var j="bottom";var U="right";var H="left";var B="auto";var Y=[N,j,U,H];var z="start";var V="end";var q="clippingParents";var W="viewport";var $="popper";var G="reference";var K=/*#__PURE__*/Y.reduce(function(e,t){return e.concat([t+"-"+z,t+"-"+V])},[]);var Q=/*#__PURE__*/[].concat(Y,[B]).reduce(function(e,t){return e.concat([t,t+"-"+z,t+"-"+V])},[]);// modifiers that need to read the DOM
var X="beforeRead";var J="read";var Z="afterRead";// pure-logic modifiers
var ee="beforeMain";var et="main";var er="afterMain";// modifier with the purpose to write to the DOM (or write into a framework state)
var en="beforeWrite";var ea="write";var ei="afterWrite";var eo=[X,J,Z,ee,et,er,en,ea,ei];// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
// source: https://stackoverflow.com/questions/49875255
function es(e){var t=new Map;var r=new Set;var n=[];e.forEach(function(e){t.set(e.name,e)});// On visiting object, check for its dependencies and visit them recursively
function a(e){r.add(e.name);var i=[].concat(e.requires||[],e.requiresIfExists||[]);i.forEach(function(e){if(!r.has(e)){var n=t.get(e);if(n){a(n)}}});n.push(e)}e.forEach(function(e){if(!r.has(e.name)){// check for visited object
a(e)}});return n}function eu(e){// order based on dependencies
var t=es(e);// order based on phase
return eo.reduce(function(e,r){return e.concat(t.filter(function(e){return e.phase===r}))},[])};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function ec(e){var t;return function(){if(!t){t=new Promise(function(r){Promise.resolve().then(function(){t=undefined;r(e())})})}return t}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function el(e){var t=e.reduce(function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t;return e},{});// IE11 does not support Object.values
return Object.keys(t).map(function(e){return t[e]})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var ef={placement:"bottom",modifiers:[],strategy:"absolute"};function ed(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some(function(e){return!(e&&typeof e.getBoundingClientRect==="function")})}function eh(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,i=a===void 0?ef:a;return function e(e,t,r){if(r===void 0){r=i}var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ef,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}};var o=[];var s=false;var u={state:a,setOptions:function r(r){var o=typeof r==="function"?r(a.options):r;f();a.options=Object.assign({},i,a.options,o);a.scrollParents={reference:l(e)?P(e):e.contextElement?P(e.contextElement):[],popper:P(t)};// Orders the modifiers based on their dependencies and `phase`
// properties
var s=eu(el([].concat(n,a.options.modifiers)));// Strip out disabled modifiers
a.orderedModifiers=s.filter(function(e){return e.enabled});c();return u.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function e(){if(s){return}var e=a.elements,t=e.reference,r=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!ed(t,r)){return}// Store the reference and popper rects to be read by modifiers
a.rects={reference:R(t,F(r),a.options.strategy==="fixed"),popper:k(r)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
a.reset=false;a.placement=a.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var n=0;n<a.orderedModifiers.length;n++){if(a.reset===true){a.reset=false;n=-1;continue}var i=a.orderedModifiers[n],o=i.fn,c=i.options,l=c===void 0?{}:c,f=i.name;if(typeof o==="function"){a=o({state:a,options:l,name:f,instance:u})||a}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:ec(function(){return new Promise(function(e){u.forceUpdate();e(a)})}),destroy:function e(){f();s=true}};if(!ed(e,t)){return u}u.setOptions(r).then(function(e){if(!s&&r.onFirstUpdate){r.onFirstUpdate(e)}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function c(){a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,i=e.effect;if(typeof i==="function"){var s=i({state:a,name:t,instance:u,options:n});var c=function e(){};o.push(s||c)}})}function f(){o.forEach(function(e){return e()});o=[]}return u}}var ep=/*#__PURE__*//* unused pure expression or super */null&&eh();// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
// eslint-disable-next-line import/no-unused-modules
var ev={passive:true};function em(e){var t=e.state,r=e.instance,n=e.options;var a=n.scroll,i=a===void 0?true:a,o=n.resize,s=o===void 0?true:o;var u=c(t.elements.popper);var l=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(i){l.forEach(function(e){e.addEventListener("scroll",r.update,ev)})}if(s){u.addEventListener("resize",r.update,ev)}return function(){if(i){l.forEach(function(e){e.removeEventListener("scroll",r.update,ev)})}if(s){u.removeEventListener("resize",r.update,ev)}}}// eslint-disable-next-line import/no-unused-modules
/* export default */const eg={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:em,data:{}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function ey(e){return e.split("-")[0]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function eb(e){return e.split("-")[1]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function e_(e){return["top","bottom"].indexOf(e)>=0?"x":"y"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function ew(e){var t=e.reference,r=e.element,n=e.placement;var a=n?ey(n):null;var i=n?eb(n):null;var o=t.x+t.width/2-r.width/2;var s=t.y+t.height/2-r.height/2;var u;switch(a){case N:u={x:o,y:t.y-r.height};break;case j:u={x:o,y:t.y+t.height};break;case U:u={x:t.x+t.width,y:s};break;case H:u={x:t.x-r.width,y:s};break;default:u={x:t.x,y:t.y}}var c=a?e_(a):null;if(c!=null){var l=c==="y"?"height":"width";switch(i){case z:u[c]=u[c]-(t[l]/2-r[l]/2);break;case V:u[c]=u[c]+(t[l]/2-r[l]/2);break;default:}}return u};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function ex(e){var t=e.state,r=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[r]=ew({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const eE={name:"popperOffsets",enabled:true,phase:"read",fn:ex,data:{}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
// eslint-disable-next-line import/no-unused-modules
var eO={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function eS(e,t){var r=e.x,n=e.y;var a=t.devicePixelRatio||1;return{x:v(r*a)/a||0,y:v(n*a)/a||0}}function eA(e){var t;var r=e.popper,n=e.popperRect,a=e.placement,i=e.variation,o=e.offsets,s=e.position,u=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,d=e.isFixed;var h=o.x,p=h===void 0?0:h,v=o.y,m=v===void 0?0:v;var g=typeof f==="function"?f({x:p,y:m}):{x:p,y:m};p=g.x;m=g.y;var y=o.hasOwnProperty("x");var b=o.hasOwnProperty("y");var _=H;var w=N;var x=window;if(l){var O=F(r);var A="clientHeight";var T="clientWidth";if(O===c(r)){O=E(r);if(S(O).position!=="static"&&s==="absolute"){A="scrollHeight";T="scrollWidth"}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
O=O;if(a===N||(a===H||a===U)&&i===V){w=j;var R=d&&O===x&&x.visualViewport?x.visualViewport.height:O[A];m-=R-n.height;m*=u?1:-1}if(a===H||(a===N||a===j)&&i===V){_=U;var k=d&&O===x&&x.visualViewport?x.visualViewport.width:O[T];p-=k-n.width;p*=u?1:-1}}var C=Object.assign({position:s},l&&eO);var I=f===true?eS({x:p,y:m},c(r)):{x:p,y:m};p=I.x;m=I.y;if(u){var P;return Object.assign({},C,(P={},P[w]=b?"0":"",P[_]=y?"0":"",P.transform=(x.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",P))}return Object.assign({},C,(t={},t[w]=b?m+"px":"",t[_]=y?p+"px":"",t.transform="",t))}function eT(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,a=n===void 0?true:n,i=r.adaptive,o=i===void 0?true:i,s=r.roundOffsets,u=s===void 0?true:s;var c={placement:ey(t.placement),variation:eb(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,eA(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:u})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,eA(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:u})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const eR={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:eT,data:{}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function ek(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var a=t.elements[e];// arrow is optional + virtual elements
if(!f(a)||!x(a)){return}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(a.style,r);Object.keys(n).forEach(function(e){var t=n[e];if(t===false){a.removeAttribute(e)}else{a.setAttribute(e,t===true?"":t)}})})}function eC(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e];var a=t.attributes[e]||{};var i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);// Set all values to an empty string to unset them
var o=i.reduce(function(e,t){e[t]="";return e},{});// arrow is optional + virtual elements
if(!f(n)||!x(n)){return}Object.assign(n.style,o);Object.keys(a).forEach(function(e){n.removeAttribute(e)})})}}// eslint-disable-next-line import/no-unused-modules
/* export default */const eI={name:"applyStyles",enabled:true,phase:"write",fn:ek,effect:eC,requires:["computeStyles"]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
// eslint-disable-next-line import/no-unused-modules
function eP(e,t,r){var n=ey(e);var a=[H,N].indexOf(n)>=0?-1:1;var i=typeof r==="function"?r(Object.assign({},t,{placement:e})):r,o=i[0],s=i[1];o=o||0;s=(s||0)*a;return[H,U].indexOf(n)>=0?{x:s,y:o}:{x:o,y:s}}function eD(e){var t=e.state,r=e.options,n=e.name;var a=r.offset,i=a===void 0?[0,0]:a;var o=Q.reduce(function(e,r){e[r]=eP(r,t.rects,i);return e},{});var s=o[t.placement],u=s.x,c=s.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=u;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=o}// eslint-disable-next-line import/no-unused-modules
/* export default */const eM={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:eD};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var eL={left:"right",right:"left",bottom:"top",top:"bottom"};function eF(e){return e.replace(/left|right|bottom|top/g,function(e){return eL[e]})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var eN={start:"end",end:"start"};function ej(e){return e.replace(/start|end/g,function(e){return eN[e]})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function eU(e,t){var r=c(e);var n=E(e);var a=r.visualViewport;var i=n.clientWidth;var o=n.clientHeight;var s=0;var u=0;if(a){i=a.width;o=a.height;var l=g();if(l||!l&&t==="fixed"){s=a.offsetLeft;u=a.offsetTop}}return{width:i,height:o,x:s+O(e),y:u}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function eH(e){var t;var r=E(e);var n=b(e);var a=(t=e.ownerDocument)==null?void 0:t.body;var i=h(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0);var o=h(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);var s=-n.scrollLeft+O(e);var u=-n.scrollTop;if(S(a||r).direction==="rtl"){s+=h(r.clientWidth,a?a.clientWidth:0)-i}return{width:i,height:o,x:s,y:u}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function eB(e,t){var r=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t)){return true}else if(r&&d(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}// $FlowFixMe[prop-missing]: need a better way to handle this...
n=n.parentNode||n.host}while(n)}// Give up, the result is false
return false};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function eY(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function ez(e,t){var r=y(e,false,t==="fixed");r.top=r.top+e.clientTop;r.left=r.left+e.clientLeft;r.bottom=r.top+e.clientHeight;r.right=r.left+e.clientWidth;r.width=e.clientWidth;r.height=e.clientHeight;r.x=r.left;r.y=r.top;return r}function eV(e,t,r){return t===W?eY(eU(e,r)):l(t)?ez(t,r):eY(eH(E(e)))}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function eq(e){var t=P(C(e));var r=["absolute","fixed"].indexOf(S(e).position)>=0;var n=r&&f(e)?F(e):e;if(!l(n)){return[]}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return t.filter(function(e){return l(e)&&eB(e,n)&&x(e)!=="body"})}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function eW(e,t,r,n){var a=t==="clippingParents"?eq(e):[].concat(t);var i=[].concat(a,[r]);var o=i[0];var s=i.reduce(function(t,r){var a=eV(e,r,n);t.top=h(a.top,t.top);t.right=p(a.right,t.right);t.bottom=p(a.bottom,t.bottom);t.left=h(a.left,t.left);return t},eV(e,o,n));s.width=s.right-s.left;s.height=s.bottom-s.top;s.x=s.left;s.y=s.top;return s};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function e$(){return{top:0,right:0,bottom:0,left:0}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function eG(e){return Object.assign({},e$(),e)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function eK(e,t){return t.reduce(function(t,r){t[r]=e;return t},{})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
// eslint-disable-next-line import/no-unused-modules
function eQ(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=n===void 0?e.placement:n,i=r.strategy,o=i===void 0?e.strategy:i,s=r.boundary,u=s===void 0?q:s,c=r.rootBoundary,f=c===void 0?W:c,d=r.elementContext,h=d===void 0?$:d,p=r.altBoundary,v=p===void 0?false:p,m=r.padding,g=m===void 0?0:m;var b=eG(typeof g!=="number"?g:eK(g,Y));var _=h===$?G:$;var w=e.rects.popper;var x=e.elements[v?_:h];var O=eW(l(x)?x:x.contextElement||E(e.elements.popper),u,f,o);var S=y(e.elements.reference);var A=ew({reference:S,element:w,strategy:"absolute",placement:a});var T=eY(Object.assign({},w,A));var R=h===$?T:S;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var k={top:O.top-R.top+b.top,bottom:R.bottom-O.bottom+b.bottom,left:O.left-R.left+b.left,right:R.right-O.right+b.right};var C=e.modifiersData.offset;// Offsets can be applied only to the popper element
if(h===$&&C){var I=C[a];Object.keys(k).forEach(function(e){var t=[U,j].indexOf(e)>=0?1:-1;var r=[N,j].indexOf(e)>=0?"y":"x";k[e]+=I[r]*t})}return k};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function eX(e,t){if(t===void 0){t={}}var r=t,n=r.placement,a=r.boundary,i=r.rootBoundary,o=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,c=u===void 0?Q:u;var l=eb(n);var f=l?s?K:K.filter(function(e){return eb(e)===l}):Y;var d=f.filter(function(e){return c.indexOf(e)>=0});if(d.length===0){d=f}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var h=d.reduce(function(t,r){t[r]=eQ(e,{placement:r,boundary:a,rootBoundary:i,padding:o})[ey(r)];return t},{});return Object.keys(h).sort(function(e,t){return h[e]-h[t]})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
// eslint-disable-next-line import/no-unused-modules
function eJ(e){if(ey(e)===B){return[]}var t=eF(e);return[ej(e),t,ej(t)]}function eZ(e){var t=e.state,r=e.options,n=e.name;if(t.modifiersData[n]._skip){return}var a=r.mainAxis,i=a===void 0?true:a,o=r.altAxis,s=o===void 0?true:o,u=r.fallbackPlacements,c=r.padding,l=r.boundary,f=r.rootBoundary,d=r.altBoundary,h=r.flipVariations,p=h===void 0?true:h,v=r.allowedAutoPlacements;var m=t.options.placement;var g=ey(m);var y=g===m;var b=u||(y||!p?[eF(m)]:eJ(m));var _=[m].concat(b).reduce(function(e,r){return e.concat(ey(r)===B?eX(t,{placement:r,boundary:l,rootBoundary:f,padding:c,flipVariations:p,allowedAutoPlacements:v}):r)},[]);var w=t.rects.reference;var x=t.rects.popper;var E=new Map;var O=true;var S=_[0];for(var A=0;A<_.length;A++){var T=_[A];var R=ey(T);var k=eb(T)===z;var C=[N,j].indexOf(R)>=0;var I=C?"width":"height";var P=eQ(t,{placement:T,boundary:l,rootBoundary:f,altBoundary:d,padding:c});var D=C?k?U:H:k?j:N;if(w[I]>x[I]){D=eF(D)}var M=eF(D);var L=[];if(i){L.push(P[R]<=0)}if(s){L.push(P[D]<=0,P[M]<=0)}if(L.every(function(e){return e})){S=T;O=false;break}E.set(T,L)}if(O){// `2` may be desired in some cases – research later
var F=p?3:1;var Y=function e(e){var t=_.find(function(t){var r=E.get(t);if(r){return r.slice(0,e).every(function(e){return e})}});if(t){S=t;return"break"}};for(var V=F;V>0;V--){var q=Y(V);if(q==="break")break}}if(t.placement!==S){t.modifiersData[n]._skip=true;t.placement=S;t.reset=true}}// eslint-disable-next-line import/no-unused-modules
/* export default */const e0={name:"flip",enabled:true,phase:"main",fn:eZ,requiresIfExists:["offset"],data:{_skip:false}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function e1(e){return e==="x"?"y":"x"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function e2(e,t,r){return h(e,p(t,r))}function e6(e,t,r){var n=e2(e,t,r);return n>r?r:n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function e5(e){var t=e.state,r=e.options,n=e.name;var a=r.mainAxis,i=a===void 0?true:a,o=r.altAxis,s=o===void 0?false:o,u=r.boundary,c=r.rootBoundary,l=r.altBoundary,f=r.padding,d=r.tether,v=d===void 0?true:d,m=r.tetherOffset,g=m===void 0?0:m;var y=eQ(t,{boundary:u,rootBoundary:c,padding:f,altBoundary:l});var b=ey(t.placement);var _=eb(t.placement);var w=!_;var x=e_(b);var E=e1(x);var O=t.modifiersData.popperOffsets;var S=t.rects.reference;var A=t.rects.popper;var T=typeof g==="function"?g(Object.assign({},t.rects,{placement:t.placement})):g;var R=typeof T==="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T);var C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null;var I={x:0,y:0};if(!O){return}if(i){var P;var D=x==="y"?N:H;var M=x==="y"?j:U;var L=x==="y"?"height":"width";var B=O[x];var Y=B+y[D];var V=B-y[M];var q=v?-A[L]/2:0;var W=_===z?S[L]:A[L];var $=_===z?-A[L]:-S[L];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var G=t.elements.arrow;var K=v&&G?k(G):{width:0,height:0};var Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:e$();var X=Q[D];var J=Q[M];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var Z=e2(0,S[L],K[L]);var ee=w?S[L]/2-q-Z-X-R.mainAxis:W-Z-X-R.mainAxis;var et=w?-S[L]/2+q+Z+J+R.mainAxis:$+Z+J+R.mainAxis;var er=t.elements.arrow&&F(t.elements.arrow);var en=er?x==="y"?er.clientTop||0:er.clientLeft||0:0;var ea=(P=C==null?void 0:C[x])!=null?P:0;var ei=B+ee-ea-en;var eo=B+et-ea;var es=e2(v?p(Y,ei):Y,B,v?h(V,eo):V);O[x]=es;I[x]=es-B}if(s){var eu;var ec=x==="x"?N:H;var el=x==="x"?j:U;var ef=O[E];var ed=E==="y"?"height":"width";var eh=ef+y[ec];var ep=ef-y[el];var ev=[N,H].indexOf(b)!==-1;var em=(eu=C==null?void 0:C[E])!=null?eu:0;var eg=ev?eh:ef-S[ed]-A[ed]-em+R.altAxis;var ew=ev?ef+S[ed]+A[ed]-em-R.altAxis:ep;var ex=v&&ev?e6(eg,ef,ew):e2(v?eg:eh,ef,v?ew:ep);O[E]=ex;I[E]=ex-ef}t.modifiersData[n]=I}// eslint-disable-next-line import/no-unused-modules
/* export default */const e4={name:"preventOverflow",enabled:true,phase:"main",fn:e5,requiresIfExists:["offset"]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
// eslint-disable-next-line import/no-unused-modules
var e3=function e(e,t){e=typeof e==="function"?e(Object.assign({},t.rects,{placement:t.placement})):e;return eG(typeof e!=="number"?e:eK(e,Y))};function e7(e){var t;var r=e.state,n=e.name,a=e.options;var i=r.elements.arrow;var o=r.modifiersData.popperOffsets;var s=ey(r.placement);var u=e_(s);var c=[H,U].indexOf(s)>=0;var l=c?"height":"width";if(!i||!o){return}var f=e3(a.padding,r);var d=k(i);var h=u==="y"?N:H;var p=u==="y"?j:U;var v=r.rects.reference[l]+r.rects.reference[u]-o[u]-r.rects.popper[l];var m=o[u]-r.rects.reference[u];var g=F(i);var y=g?u==="y"?g.clientHeight||0:g.clientWidth||0:0;var b=v/2-m/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var _=f[h];var w=y-d[l]-f[p];var x=y/2-d[l]/2+b;var E=e2(_,x,w);// Prevents breaking syntax highlighting...
var O=u;r.modifiersData[n]=(t={},t[O]=E,t.centerOffset=E-x,t)}function e8(e){var t=e.state,r=e.options;var n=r.element,a=n===void 0?"[data-popper-arrow]":n;if(a==null){return}// CSS selector
if(typeof a==="string"){a=t.elements.popper.querySelector(a);if(!a){return}}if(!eB(t.elements.popper,a)){return}t.elements.arrow=a}// eslint-disable-next-line import/no-unused-modules
/* export default */const e9={name:"arrow",enabled:true,phase:"main",fn:e7,effect:e8,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function te(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tt(e){return[N,U,j,H].some(function(t){return e[t]>=0})}function tr(e){var t=e.state,r=e.name;var n=t.rects.reference;var a=t.rects.popper;var i=t.modifiersData.preventOverflow;var o=eQ(t,{elementContext:"reference"});var s=eQ(t,{altBoundary:true});var u=te(o,n);var c=te(s,a,i);var l=tt(u);var f=tt(c);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:f};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}// eslint-disable-next-line import/no-unused-modules
/* export default */const tn={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:tr};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var ta=[eg,eE,eR,eI,eM,e0,e4,e9,tn];var ti=/*#__PURE__*/eh({defaultModifiers:ta});// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/headless/dist/tippy-headless.esm.js
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/var to='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';var ts="tippy-content";var tu="tippy-backdrop";var tc="tippy-arrow";var tl="tippy-svg-arrow";var tf={passive:true,capture:true};var td=function e(){return document.body};function th(e,t){return({}).hasOwnProperty.call(e,t)}function tp(e,t,r){if(Array.isArray(e)){var n=e[t];return n==null?Array.isArray(r)?r[t]:r:n}return e}function tv(e,t){var r=({}).toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function tm(e,t){return typeof e==="function"?e.apply(void 0,t):e}function tg(e,t){// Avoid wrapping in `setTimeout` if ms is 0 anyway
if(t===0){return e}var r;return function(n){clearTimeout(r);r=setTimeout(function(){e(n)},t)}}function ty(e,t){var r=Object.assign({},e);t.forEach(function(e){delete r[e]});return r}function tb(e){return e.split(/\s+/).filter(Boolean)}function t_(e){return[].concat(e)}function tw(e,t){if(e.indexOf(t)===-1){e.push(t)}}function tx(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function tE(e){return e.split("-")[0]}function tO(e){return[].slice.call(e)}function tS(e){return Object.keys(e).reduce(function(t,r){if(e[r]!==undefined){t[r]=e[r]}return t},{})}function tA(){return document.createElement("div")}function tT(e){return["Element","Fragment"].some(function(t){return tv(e,t)})}function tR(e){return tv(e,"NodeList")}function tk(e){return tv(e,"MouseEvent")}function tC(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function tI(e){if(tT(e)){return[e]}if(tR(e)){return tO(e)}if(Array.isArray(e)){return e}return tO(document.querySelectorAll(e))}function tP(e,t){e.forEach(function(e){if(e){e.style.transitionDuration=t+"ms"}})}function tD(e,t){e.forEach(function(e){if(e){e.setAttribute("data-state",t)}})}function tM(e){var t;var r=t_(e),n=r[0];// Elements created via a <template> have an ownerDocument with no reference to the body
return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function tL(e,t){var r=t.clientX,n=t.clientY;return e.every(function(e){var t=e.popperRect,a=e.popperState,i=e.props;var o=i.interactiveBorder;var s=tE(a.placement);var u=a.modifiersData.offset;if(!u){return true}var c=s==="bottom"?u.top.y:0;var l=s==="top"?u.bottom.y:0;var f=s==="right"?u.left.x:0;var d=s==="left"?u.right.x:0;var h=t.top-n+c>o;var p=n-t.bottom-l>o;var v=t.left-r+f>o;var m=r-t.right-d>o;return h||p||v||m})}function tF(e,t,r){var n=t+"EventListener";// some browsers apparently support `transition` (unprefixed) but only fire
// `webkitTransitionEnd`...
["transitionend","webkitTransitionEnd"].forEach(function(t){e[n](t,r)})}/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */function tN(e,t){var r=t;while(r){var n;if(e.contains(r)){return true}r=r.getRootNode==null?void 0:(n=r.getRootNode())==null?void 0:n.host}return false}var tj={isTouch:false};var tU=0;/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */function tH(){if(tj.isTouch){return}tj.isTouch=true;if(window.performance){document.addEventListener("mousemove",tB)}}/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */function tB(){var e=performance.now();if(e-tU<20){tj.isTouch=false;document.removeEventListener("mousemove",tB)}tU=e}/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */function tY(){var e=document.activeElement;if(tC(e)){var t=e._tippy;if(e.blur&&!t.state.isVisible){e.blur()}}}function tz(){document.addEventListener("touchstart",tH,tf);window.addEventListener("blur",tY)}var tV=typeof window!=="undefined"&&typeof document!=="undefined";var tq=tV?!!window.msCrypto:false;function tW(e){var t=e==="destroy"?"n already-":" ";return[e+"() was called on a"+t+"destroyed instance. This is a no-op but","indicates a potential memory leak."].join(" ")}function t$(e){var t=/[ \t]{2,}/g;var r=/^[ \t]*/gm;return e.replace(t," ").replace(r,"").trim()}function tG(e){return t$("\n  %ctippy.js\n\n  %c"+t$(e)+"\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  ")}function tK(e){return[tG(e),"color: #00C584; font-size: 1.3em; font-weight: bold;","line-height: 1.5","color: #a6a095;"]}// Assume warnings and errors never have the same message
var tQ;if(false){}function tX(){tQ=new Set}function tJ(e,t){if(e&&!tQ.has(t)){var r;tQ.add(t);(r=console).warn.apply(r,tK(t))}}function tZ(e,t){if(e&&!tQ.has(t)){var r;tQ.add(t);(r=console).error.apply(r,tK(t))}}function t0(e){var t=!e;var r=Object.prototype.toString.call(e)==="[object Object]"&&!e.addEventListener;tZ(t,["tippy() was passed","`"+String(e)+"`","as its targets (first) argument. Valid types are: String, Element,","Element[], or NodeList."].join(" "));tZ(r,["tippy() was passed a plain object which is not supported as an argument","for virtual positioning. Use props.getReferenceClientRect instead."].join(" "))}var t1={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var t2={allowHTML:false,animation:"fade",arrow:true,content:"",inertia:false,maxWidth:350,role:"tooltip",theme:"",zIndex:9999};var t6=Object.assign({appendTo:td,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function e(){},onBeforeUpdate:function e(){},onCreate:function e(){},onDestroy:function e(){},onHidden:function e(){},onHide:function e(){},onMount:function e(){},onShow:function e(){},onShown:function e(){},onTrigger:function e(){},onUntrigger:function e(){},onClickOutside:function e(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:"mouseenter focus",triggerTarget:null},t1,t2);var t5=Object.keys(t6);var t4=function e(e){/* istanbul ignore else */if(false){}var t=Object.keys(e);t.forEach(function(t){t6[t]=e[t]})};function t3(e){var t=e.plugins||[];var r=t.reduce(function(t,r){var n=r.name,a=r.defaultValue;if(n){var i;t[n]=e[n]!==undefined?e[n]:(i=t6[n])!=null?i:a}return t},{});return Object.assign({},e,r)}function t7(e,t){var r=t?Object.keys(t3(Object.assign({},t6,{plugins:t}))):t5;var n=r.reduce(function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n){return t}if(r==="content"){t[r]=n}else{try{t[r]=JSON.parse(n)}catch(e){t[r]=n}}return t},{});return n}function t8(e,t){var r=Object.assign({},t,{content:tm(t.content,[e])},t.ignoreAttributes?{}:t7(e,t.plugins));r.aria=Object.assign({},t6.aria,r.aria);r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content};return r}function t9(e,t){if(e===void 0){e={}}if(t===void 0){t=[]}var r=Object.keys(e);r.forEach(function(e){var r=ty(t6,Object.keys(t1));var n=!th(r,e);// Check if the prop exists in `plugins`
if(n){n=t.filter(function(t){return t.name===e}).length===0}tJ(n,["`"+e+"`","is not a valid prop. You may have spelled it incorrectly, or if it's","a plugin, forgot to pass it in an array as props.plugins.","\n\n","All props: https://atomiks.github.io/tippyjs/v6/all-props/\n","Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "))})}function re(e){var t=e.firstElementChild;var r=tO(t.children);return{box:t,content:r.find(function(e){return e.classList.contains(ts)}),arrow:r.find(function(e){return e.classList.contains(tc)||e.classList.contains(tl)}),backdrop:r.find(function(e){return e.classList.contains(tu)})}}var rt=1;var rr=[];// Used by `hideAll()`
var rn=[];function ra(e,t){var r=t8(e,Object.assign({},t6,t3(tS(t))));// ===========================================================================
// 🔒 Private members
// ===========================================================================
var n;var a;var i;var o=false;var s=false;var u=false;var c=false;var l;var f;var d;var h=[];var p=tg(Q,r.interactiveDebounce);var v;// ===========================================================================
// 🔑 Public members
// ===========================================================================
var m=rt++;var g=null;var y=tx(r.plugins);var b={// Is the instance currently enabled?
isEnabled:true,// Is the tippy currently showing and not transitioning out?
isVisible:false,// Has the instance been destroyed?
isDestroyed:false,// Is the tippy currently mounted to the DOM?
isMounted:false,// Has the tippy finished transitioning in?
isShown:false};var _={// properties
id:m,reference:e,popper:tA(),popperInstance:g,props:r,state:b,plugins:y,// methods
clearDelayTimeouts:eu,setProps:ec,setContent:el,show:ef,hide:ed,hideWithInteractivity:eh,enable:eo,disable:es,unmount:ep,destroy:ev};// TODO: Investigate why this early return causes a TDZ error in the tests —
// it doesn't seem to happen in the browser
/* istanbul ignore if */if(!r.render){if(false){}return _}// ===========================================================================
// Initial mutations
// ===========================================================================
var w=r.render(_),x=w.popper,E=w.onUpdate;x.setAttribute("data-tippy-root","");x.id="tippy-"+_.id;_.popper=x;e._tippy=_;x._tippy=_;var O=y.map(function(e){return e.fn(_)});var S=e.hasAttribute("aria-expanded");$();F();D();M("onCreate",[_]);if(r.showOnCreate){ea()}// Prevent a tippy with a delay from hiding if the cursor left then returned
// before it started hiding
x.addEventListener("mouseenter",function(){if(_.props.interactive&&_.state.isVisible){_.clearDelayTimeouts()}});x.addEventListener("mouseleave",function(){if(_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0){C().addEventListener("mousemove",p)}});return _;// ===========================================================================
// 🔒 Private methods
// ===========================================================================
function A(){var e=_.props.touch;return Array.isArray(e)?e:[e,0]}function T(){return A()[0]==="hold"}function R(){var e;// @ts-ignore
return!!((e=_.props.render)!=null&&e.$$tippy)}function k(){return v||e}function C(){var e=k().parentNode;return e?tM(e):document}function I(){return re(x)}function P(e){// For touch or keyboard input, force `0` delay for UX reasons
// Also if the instance is mounted but not visible (transitioning out),
// ignore delay
if(_.state.isMounted&&!_.state.isVisible||tj.isTouch||l&&l.type==="focus"){return 0}return tp(_.props.delay,e?0:1,t6.delay)}function D(e){if(e===void 0){e=false}x.style.pointerEvents=_.props.interactive&&!e?"":"none";x.style.zIndex=""+_.props.zIndex}function M(e,t,r){if(r===void 0){r=true}O.forEach(function(r){if(r[e]){r[e].apply(r,t)}});if(r){var n;(n=_.props)[e].apply(n,t)}}function L(){var t=_.props.aria;if(!t.content){return}var r="aria-"+t.content;var n=x.id;var a=t_(_.props.triggerTarget||e);a.forEach(function(e){var t=e.getAttribute(r);if(_.state.isVisible){e.setAttribute(r,t?t+" "+n:n)}else{var a=t&&t.replace(n,"").trim();if(a){e.setAttribute(r,a)}else{e.removeAttribute(r)}}})}function F(){if(S||!_.props.aria.expanded){return}var t=t_(_.props.triggerTarget||e);t.forEach(function(e){if(_.props.interactive){e.setAttribute("aria-expanded",_.state.isVisible&&e===k()?"true":"false")}else{e.removeAttribute("aria-expanded")}})}function N(){C().removeEventListener("mousemove",p);rr=rr.filter(function(e){return e!==p})}function j(t){// Moved finger to scroll instead of an intentional tap outside
if(tj.isTouch){if(u||t.type==="mousedown"){return}}var r=t.composedPath&&t.composedPath()[0]||t.target;// Clicked on interactive popper
if(_.props.interactive&&tN(x,r)){return}// Clicked on the event listeners target
if(t_(_.props.triggerTarget||e).some(function(e){return tN(e,r)})){if(tj.isTouch){return}if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0){return}}else{M("onClickOutside",[_,t])}if(_.props.hideOnClick===true){_.clearDelayTimeouts();_.hide();// `mousedown` event is fired right before `focus` if pressing the
// currentTarget. This lets a tippy with `focus` trigger know that it
// should not show
s=true;setTimeout(function(){s=false});// The listener gets added in `scheduleShow()`, but this may be hiding it
// before it shows, and hide()'s early bail-out behavior can prevent it
// from being cleaned up
if(!_.state.isMounted){Y()}}}function U(){u=true}function H(){u=false}function B(){var e=C();e.addEventListener("mousedown",j,true);e.addEventListener("touchend",j,tf);e.addEventListener("touchstart",H,tf);e.addEventListener("touchmove",U,tf)}function Y(){var e=C();e.removeEventListener("mousedown",j,true);e.removeEventListener("touchend",j,tf);e.removeEventListener("touchstart",H,tf);e.removeEventListener("touchmove",U,tf)}function z(e,t){q(e,function(){if(!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)){t()}})}function V(e,t){q(e,t)}function q(e,t){var r=I().box;function n(e){if(e.target===r){tF(r,"remove",n);t()}}// Make callback synchronous if duration is 0
// `transitionend` won't fire otherwise
if(e===0){return t()}tF(r,"remove",f);tF(r,"add",n);f=n}function W(t,r,n){if(n===void 0){n=false}var a=t_(_.props.triggerTarget||e);a.forEach(function(e){e.addEventListener(t,r,n);h.push({node:e,eventType:t,handler:r,options:n})})}function $(){if(T()){W("touchstart",K,{passive:true});W("touchend",X,{passive:true})}tb(_.props.trigger).forEach(function(e){if(e==="manual"){return}W(e,K);switch(e){case"mouseenter":W("mouseleave",X);break;case"focus":W(tq?"focusout":"blur",J);break;case"focusin":W("focusout",J);break}})}function G(){h.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,a=e.options;t.removeEventListener(r,n,a)});h=[]}function K(e){var t;var r=false;if(!_.state.isEnabled||Z(e)||s){return}var n=((t=l)==null?void 0:t.type)==="focus";l=e;v=e.currentTarget;F();if(!_.state.isVisible&&tk(e)){// If scrolling, `mouseenter` events can be fired if the cursor lands
// over a new target, but `mousemove` events don't get fired. This
// causes interactive tooltips to get stuck open until the cursor is
// moved
rr.forEach(function(t){return t(e)})}// Toggle show/hide when clicking click-triggered tooltips
if(e.type==="click"&&(_.props.trigger.indexOf("mouseenter")<0||o)&&_.props.hideOnClick!==false&&_.state.isVisible){r=true}else{ea(e)}if(e.type==="click"){o=!r}if(r&&!n){ei(e)}}function Q(e){var t=e.target;var n=k().contains(t)||x.contains(t);if(e.type==="mousemove"&&n){return}var a=en().concat(x).map(function(e){var t;var n=e._tippy;var a=(t=n.popperInstance)==null?void 0:t.state;if(a){return{popperRect:e.getBoundingClientRect(),popperState:a,props:r}}return null}).filter(Boolean);if(tL(a,e)){N();ei(e)}}function X(e){var t=Z(e)||_.props.trigger.indexOf("click")>=0&&o;if(t){return}if(_.props.interactive){_.hideWithInteractivity(e);return}ei(e)}function J(e){if(_.props.trigger.indexOf("focusin")<0&&e.target!==k()){return}// If focus was moved to within the popper
if(_.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)){return}ei(e)}function Z(e){return tj.isTouch?T()!==e.type.indexOf("touch")>=0:false}function ee(){et();var t=_.props,r=t.popperOptions,n=t.placement,a=t.offset,i=t.getReferenceClientRect,o=t.moveTransition;var s=R()?re(x).arrow:null;var u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e;var c={name:"$$tippy",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t=e.state;if(R()){var r=I(),n=r.box;["placement","reference-hidden","escaped"].forEach(function(e){if(e==="placement"){n.setAttribute("data-placement",t.placement)}else{if(t.attributes.popper["data-popper-"+e]){n.setAttribute("data-"+e,"")}else{n.removeAttribute("data-"+e)}}});t.attributes.popper={}}}};var l=[{name:"offset",options:{offset:a}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},c];if(R()&&s){l.push({name:"arrow",options:{element:s,padding:3}})}l.push.apply(l,(r==null?void 0:r.modifiers)||[]);_.popperInstance=ti(u,x,Object.assign({},r,{placement:n,onFirstUpdate:d,modifiers:l}))}function et(){if(_.popperInstance){_.popperInstance.destroy();_.popperInstance=null}}function er(){var e=_.props.appendTo;var t;// By default, we'll append the popper to the triggerTargets's parentNode so
// it's directly after the reference element so the elements inside the
// tippy can be tabbed to
// If there are clipping issues, the user can specify a different appendTo
// and ensure focus management is handled correctly manually
var r=k();if(_.props.interactive&&e===td||e==="parent"){t=r.parentNode}else{t=tm(e,[r])}// The popper element needs to exist on the DOM before its position can be
// updated as Popper needs to read its dimensions
if(!t.contains(x)){t.appendChild(x)}_.state.isMounted=true;ee();/* istanbul ignore else */if(false){}}function en(){return tO(x.querySelectorAll("[data-tippy-root]"))}function ea(e){_.clearDelayTimeouts();if(e){M("onTrigger",[_,e])}B();var t=P(true);var r=A(),a=r[0],i=r[1];if(tj.isTouch&&a==="hold"&&i){t=i}if(t){n=setTimeout(function(){_.show()},t)}else{_.show()}}function ei(e){_.clearDelayTimeouts();M("onUntrigger",[_,e]);if(!_.state.isVisible){Y();return}// For interactive tippies, scheduleHide is added to a document.body handler
// from onMouseLeave so must intercept scheduled hides from mousemove/leave
// events when trigger contains mouseenter and click, and the tip is
// currently shown as a result of a click.
if(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&o){return}var t=P(false);if(t){a=setTimeout(function(){if(_.state.isVisible){_.hide()}},t)}else{// Fixes a `transitionend` problem when it fires 1 frame too
// late sometimes, we don't want hide() to be called.
i=requestAnimationFrame(function(){_.hide()})}}// ===========================================================================
// 🔑 Public methods
// ===========================================================================
function eo(){_.state.isEnabled=true}function es(){// Disabling the instance should also hide it
// https://github.com/atomiks/tippy.js-react/issues/106
_.hide();_.state.isEnabled=false}function eu(){clearTimeout(n);clearTimeout(a);cancelAnimationFrame(i)}function ec(t){/* istanbul ignore else */if(false){}if(_.state.isDestroyed){return}M("onBeforeUpdate",[_,t]);G();var r=_.props;var n=t8(e,Object.assign({},r,tS(t),{ignoreAttributes:true}));_.props=n;$();if(r.interactiveDebounce!==n.interactiveDebounce){N();p=tg(Q,n.interactiveDebounce)}// Ensure stale aria-expanded attributes are removed
if(r.triggerTarget&&!n.triggerTarget){t_(r.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")})}else if(n.triggerTarget){e.removeAttribute("aria-expanded")}F();D();if(E){E(r,n)}if(_.popperInstance){ee();// Fixes an issue with nested tippies if they are all getting re-rendered,
// and the nested ones get re-rendered first.
// https://github.com/atomiks/tippyjs-react/issues/177
// TODO: find a cleaner / more efficient solution(!)
en().forEach(function(e){// React (and other UI libs likely) requires a rAF wrapper as it flushes
// its work in one
requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})}M("onAfterUpdate",[_,t])}function el(e){_.setProps({content:e})}function ef(){/* istanbul ignore else */if(false){}// Early bail-out
var e=_.state.isVisible;var t=_.state.isDestroyed;var r=!_.state.isEnabled;var n=tj.isTouch&&!_.props.touch;var a=tp(_.props.duration,0,t6.duration);if(e||t||r||n){return}// Normalize `disabled` behavior across browsers.
// Firefox allows events on disabled elements, but Chrome doesn't.
// Using a wrapper element (i.e. <span>) is recommended.
if(k().hasAttribute("disabled")){return}M("onShow",[_],false);if(_.props.onShow(_)===false){return}_.state.isVisible=true;if(R()){x.style.visibility="visible"}D();B();if(!_.state.isMounted){x.style.transition="none"}// If flipping to the opposite side after hiding at least once, the
// animation will use the wrong placement without resetting the duration
if(R()){var i=I(),o=i.box,s=i.content;tP([o,s],0)}d=function e(){var e;if(!_.state.isVisible||c){return}c=true;// reflow
void x.offsetHeight;x.style.transition=_.props.moveTransition;if(R()&&_.props.animation){var t=I(),r=t.box,n=t.content;tP([r,n],a);tD([r,n],"visible")}L();F();tw(rn,_);// certain modifiers (e.g. `maxSize`) require a second update after the
// popper has been positioned for the first time
(e=_.popperInstance)==null?void 0:e.forceUpdate();M("onMount",[_]);if(_.props.animation&&R()){V(a,function(){_.state.isShown=true;M("onShown",[_])})}};er()}function ed(){/* istanbul ignore else */if(false){}// Early bail-out
var e=!_.state.isVisible;var t=_.state.isDestroyed;var r=!_.state.isEnabled;var n=tp(_.props.duration,1,t6.duration);if(e||t||r){return}M("onHide",[_],false);if(_.props.onHide(_)===false){return}_.state.isVisible=false;_.state.isShown=false;c=false;o=false;if(R()){x.style.visibility="hidden"}N();Y();D(true);if(R()){var a=I(),i=a.box,s=a.content;if(_.props.animation){tP([i,s],n);tD([i,s],"hidden")}}L();F();if(_.props.animation){if(R()){z(n,_.unmount)}}else{_.unmount()}}function eh(e){/* istanbul ignore else */if(false){}C().addEventListener("mousemove",p);tw(rr,p);p(e)}function ep(){/* istanbul ignore else */if(false){}if(_.state.isVisible){_.hide()}if(!_.state.isMounted){return}et();// If a popper is not interactive, it will be appended outside the popper
// tree by default. This seems mainly for interactive tippies, but we should
// find a workaround if possible
en().forEach(function(e){e._tippy.unmount()});if(x.parentNode){x.parentNode.removeChild(x)}rn=rn.filter(function(e){return e!==_});_.state.isMounted=false;M("onHidden",[_])}function ev(){/* istanbul ignore else */if(false){}if(_.state.isDestroyed){return}_.clearDelayTimeouts();_.unmount();G();delete e._tippy;_.state.isDestroyed=true;M("onDestroy",[_])}}function ri(e,t){if(t===void 0){t={}}var r=t6.plugins.concat(t.plugins||[]);/* istanbul ignore else */if(false){}tz();var n=Object.assign({},t,{plugins:r});var a=tI(e);/* istanbul ignore else */if(false){var i,o}var s=a.reduce(function(e,t){var r=t&&ra(t,n);if(r){e.push(r)}return e},[]);return tT(e)?s[0]:s}ri.defaultProps=t6;ri.setDefaultProps=t4;ri.currentInput=tj;var ro=function e(e){var t=e===void 0?{}:e,r=t.exclude,n=t.duration;rn.forEach(function(e){var t=false;if(r){t=tC(r)?e.reference===r:e.popper===r.popper}if(!t){var a=e.props.duration;e.setProps({duration:n});e.hide();if(!e.state.isDestroyed){e.setProps({duration:a})}}})};// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var rs=Object.assign({},eI,{effect:function e(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}// intentionally return no cleanup function
// return () => { ... }
}});var ru=function e(e,t){var r;if(t===void 0){t={}}/* istanbul ignore else */if(false){}var n=e;var a=[];var i=[];var o;var s=t.overrides;var u=[];var c=false;function l(){i=n.map(function(e){return t_(e.props.triggerTarget||e.reference)}).reduce(function(e,t){return e.concat(t)},[])}function f(){a=n.map(function(e){return e.reference})}function d(e){n.forEach(function(t){if(e){t.enable()}else{t.disable()}})}function h(e){return n.map(function(t){var r=t.setProps;t.setProps=function(n){r(n);if(t.reference===o){e.setProps(n)}};return function(){t.setProps=r}})}// have to pass singleton, as it maybe undefined on first call
function p(e,t){var r=i.indexOf(t);// bail-out
if(t===o){return}o=t;var u=(s||[]).concat("content").reduce(function(e,t){e[t]=n[r].props[t];return e},{});e.setProps(Object.assign({},u,{getReferenceClientRect:typeof u.getReferenceClientRect==="function"?u.getReferenceClientRect:function(){var e;return(e=a[r])==null?void 0:e.getBoundingClientRect()}}))}d(false);f();l();var v={fn:function e(){return{onDestroy:function e(){d(true)},onHidden:function e(){o=null},onClickOutside:function e(e){if(e.props.showOnCreate&&!c){c=true;o=null}},onShow:function e(e){if(e.props.showOnCreate&&!c){c=true;p(e,a[0])}},onTrigger:function e(e,t){p(e,t.currentTarget)}}}};var m=ri(tA(),Object.assign({},ty(t,["overrides"]),{plugins:[v].concat(t.plugins||[]),triggerTarget:i,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((r=t.popperOptions)==null?void 0:r.modifiers)||[],[rs])})}));var g=m.show;m.show=function(e){g();// first time, showOnCreate or programmatic call with no params
// default to showing first instance
if(!o&&e==null){return p(m,a[0])}// triggered from event (do nothing as prepareInstance already called by onTrigger)
// programmatic call with no params when already visible (do nothing again)
if(o&&e==null){return}// target is index of instance
if(typeof e==="number"){return a[e]&&p(m,a[e])}// target is a child tippy instance
if(n.indexOf(e)>=0){var t=e.reference;return p(m,t)}// target is a ReferenceElement
if(a.indexOf(e)>=0){return p(m,e)}};m.showNext=function(){var e=a[0];if(!o){return m.show(0)}var t=a.indexOf(o);m.show(a[t+1]||e)};m.showPrevious=function(){var e=a[a.length-1];if(!o){return m.show(e)}var t=a.indexOf(o);var r=a[t-1]||e;m.show(r)};var y=m.setProps;m.setProps=function(e){s=e.overrides||s;y(e)};m.setInstances=function(e){d(true);u.forEach(function(e){return e()});n=e;d(false);f();l();u=h(m);m.setProps({triggerTarget:i})};u=h(m);return m};var rc=/* unused pure expression or super */null&&{mouseover:"mouseenter",focusin:"focus",click:"click"};/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */function rl(e,t){/* istanbul ignore else */if(false){}var r=[];var n=[];var a=false;var i=t.target;var o=ty(t,["target"]);var s=Object.assign({},o,{trigger:"manual",touch:false});var u=Object.assign({touch:t6.touch},o,{showOnCreate:true});var c=ri(e,s);var l=t_(c);function f(e){if(!e.target||a){return}var r=e.target.closest(i);if(!r){return}// Get relevant trigger with fallbacks:
// 1. Check `data-tippy-trigger` attribute on target node
// 2. Fallback to `trigger` passed to `delegate()`
// 3. Fallback to `defaultProps.trigger`
var o=r.getAttribute("data-tippy-trigger")||t.trigger||t6.trigger;// @ts-ignore
if(r._tippy){return}if(e.type==="touchstart"&&typeof u.touch==="boolean"){return}if(e.type!=="touchstart"&&o.indexOf(rc[e.type])<0){return}var s=ri(r,u);if(s){n=n.concat(s)}}function d(e,t,n,a){if(a===void 0){a=false}e.addEventListener(t,n,a);r.push({node:e,eventType:t,handler:n,options:a})}function h(e){var t=e.reference;d(t,"touchstart",f,tf);d(t,"mouseover",f);d(t,"focusin",f);d(t,"click",f)}function p(){r.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,a=e.options;t.removeEventListener(r,n,a)});r=[]}function v(e){var t=e.destroy;var r=e.enable;var i=e.disable;e.destroy=function(e){if(e===void 0){e=true}if(e){n.forEach(function(e){e.destroy()})}n=[];p();t()};e.enable=function(){r();n.forEach(function(e){return e.enable()});a=false};e.disable=function(){i();n.forEach(function(e){return e.disable()});a=true};h(e)}l.forEach(v);return c}var rf=/* unused pure expression or super */null&&{name:"animateFill",defaultValue:false,fn:function e(e){var t;// @ts-ignore
if(!((t=e.props.render)!=null&&t.$$tippy)){if(false){}return{}}var r=re(e.popper),n=r.box,a=r.content;var i=e.props.animateFill?rd():null;return{onCreate:function t(){if(i){n.insertBefore(i,n.firstElementChild);n.setAttribute("data-animatefill","");n.style.overflow="hidden";e.setProps({arrow:false,animation:"shift-away"})}},onMount:function e(){if(i){var e=n.style.transitionDuration;var t=Number(e.replace("ms",""));// The content should fade in after the backdrop has mostly filled the
// tooltip element. `clip-path` is the other alternative but is not
// well-supported and is buggy on some devices.
a.style.transitionDelay=Math.round(t/10)+"ms";i.style.transitionDuration=e;tD([i],"visible")}},onShow:function e(){if(i){i.style.transitionDuration="0ms"}},onHide:function e(){if(i){tD([i],"hidden")}}}}};function rd(){var e=tA();e.className=tu;tD([e],"hidden");return e}var rh=/* unused pure expression or super */null&&{clientX:0,clientY:0};var rp=/* unused pure expression or super */null&&[];function rv(e){var t=e.clientX,r=e.clientY;rh={clientX:t,clientY:r}}function rm(e){e.addEventListener("mousemove",rv)}function rg(e){e.removeEventListener("mousemove",rv)}var ry=/* unused pure expression or super */null&&{name:"followCursor",defaultValue:false,fn:function e(e){var t=e.reference;var r=tM(e.props.triggerTarget||t);var n=false;var a=false;var i=true;var o=e.props;function s(){return e.props.followCursor==="initial"&&e.state.isVisible}function u(){r.addEventListener("mousemove",f)}function c(){r.removeEventListener("mousemove",f)}function l(){n=true;e.setProps({getReferenceClientRect:null});n=false}function f(r){// If the instance is interactive, avoid updating the position unless it's
// over the reference element
var n=r.target?t.contains(r.target):true;var a=e.props.followCursor;var i=r.clientX,o=r.clientY;var s=t.getBoundingClientRect();var u=i-s.left;var c=o-s.top;if(n||!e.props.interactive){e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){var e=t.getBoundingClientRect();var r=i;var n=o;if(a==="initial"){r=e.left+u;n=e.top+c}var s=a==="horizontal"?e.top:n;var l=a==="vertical"?e.right:r;var f=a==="horizontal"?e.bottom:n;var d=a==="vertical"?e.left:r;return{width:l-d,height:f-s,top:s,right:l,bottom:f,left:d}}})}}function d(){if(e.props.followCursor){rp.push({instance:e,doc:r});rm(r)}}function h(){rp=rp.filter(function(t){return t.instance!==e});if(rp.filter(function(e){return e.doc===r}).length===0){rg(r)}}return{onCreate:d,onDestroy:h,onBeforeUpdate:function t(){o=e.props},onAfterUpdate:function t(t,r){var i=r.followCursor;if(n){return}if(i!==undefined&&o.followCursor!==i){h();if(i){d();if(e.state.isMounted&&!a&&!s()){u()}}else{c();l()}}},onMount:function t(){if(e.props.followCursor&&!a){if(i){f(rh);i=false}if(!s()){u()}}},onTrigger:function e(e,t){if(tk(t)){rh={clientX:t.clientX,clientY:t.clientY}}a=t.type==="focus"},onHidden:function t(){if(e.props.followCursor){l();c();i=true}}}}};function rb(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(e){var r=e.name;return r!==t.name}),[t])})}}var r_=/* unused pure expression or super */null&&{name:"inlinePositioning",defaultValue:false,fn:function e(e){var t=e.reference;function r(){return!!e.props.inlinePositioning}var n;var a=-1;var i=false;var o=[];var s={name:"tippyInlinePositioning",enabled:true,phase:"afterWrite",fn:function t(t){var a=t.state;if(r()){if(o.indexOf(a.placement)!==-1){o=[]}if(n!==a.placement&&o.indexOf(a.placement)===-1){o.push(a.placement);e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){return u(a.placement)}})}n=a.placement}}};function u(e){return rw(tE(e),t.getBoundingClientRect(),tO(t.getClientRects()),a)}function c(t){i=true;e.setProps(t);i=false}function l(){if(!i){c(rb(e.props,s))}}return{onCreate:l,onAfterUpdate:l,onTrigger:function t(t,r){if(tk(r)){var n=tO(e.reference.getClientRects());var i=n.find(function(e){return e.left-2<=r.clientX&&e.right+2>=r.clientX&&e.top-2<=r.clientY&&e.bottom+2>=r.clientY});var o=n.indexOf(i);a=o>-1?o:a}},onHidden:function e(){a=-1}}}};function rw(e,t,r,n){// Not an inline element, or placement is not yet known
if(r.length<2||e===null){return t}// There are two rects and they are disjoined
if(r.length===2&&n>=0&&r[0].left>r[1].right){return r[n]||t}switch(e){case"top":case"bottom":{var a=r[0];var i=r[r.length-1];var o=e==="top";var s=a.top;var u=i.bottom;var c=o?a.left:i.left;var l=o?a.right:i.right;var f=l-c;var d=u-s;return{top:s,bottom:u,left:c,right:l,width:f,height:d}}case"left":case"right":{var h=Math.min.apply(Math,r.map(function(e){return e.left}));var p=Math.max.apply(Math,r.map(function(e){return e.right}));var v=r.filter(function(t){return e==="left"?t.left===h:t.right===p});var m=v[0].top;var g=v[v.length-1].bottom;var y=h;var b=p;var _=b-y;var w=g-m;return{top:m,bottom:g,left:y,right:b,width:_,height:w}}default:{return t}}}var rx=/* unused pure expression or super */null&&{name:"sticky",defaultValue:false,fn:function e(e){var t=e.reference,r=e.popper;function n(){return e.popperInstance?e.popperInstance.state.elements.reference:t}function a(t){return e.props.sticky===true||e.props.sticky===t}var i=null;var o=null;function s(){var t=a("reference")?n().getBoundingClientRect():null;var u=a("popper")?r.getBoundingClientRect():null;if(t&&rE(i,t)||u&&rE(o,u)){if(e.popperInstance){e.popperInstance.update()}}i=t;o=u;if(e.state.isMounted){requestAnimationFrame(s)}}return{onMount:function t(){if(e.props.sticky){s()}}}}};function rE(e,t){if(e&&t){return e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}return true}ri.setDefaultProps({animation:false});/* export default */const rO=ri;//# sourceMappingURL=tippy-headless.esm.js.map
// EXTERNAL MODULE: external "React"
var rS=r(1594);var rA=/*#__PURE__*/r.n(rS);// EXTERNAL MODULE: external "ReactDOM"
var rT=r(5206);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@tippyjs+react@4.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tippyjs/react/headless/dist/tippy-react-headless.esm.js
function rR(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,i;for(i=0;i<n.length;i++){a=n[i];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}var rk=typeof window!=="undefined"&&typeof document!=="undefined";function rC(e,t){if(e){if(typeof e==="function"){e(t)}if(({}).hasOwnProperty.call(e,"current")){e.current=t}}}function rI(){return rk&&document.createElement("div")}function rP(e){var t={"data-placement":e.placement};if(e.referenceHidden){t["data-reference-hidden"]=""}if(e.escaped){t["data-escaped"]=""}return t}function rD(e,t){if(e===t){return true}else if(typeof e==="object"&&e!=null&&typeof t==="object"&&t!=null){if(Object.keys(e).length!==Object.keys(t).length){return false}for(var r in e){if(t.hasOwnProperty(r)){if(!rD(e[r],t[r])){return false}}else{return false}}return true}else{return false}}function rM(e){var t=[];e.forEach(function(e){if(!t.find(function(t){return rD(e,t)})){t.push(e)}});return t}function rL(e,t){var r,n;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:rM([].concat(((r=e.popperOptions)==null?void 0:r.modifiers)||[],((n=t.popperOptions)==null?void 0:n.modifiers)||[]))})})}var rF=rk?rS.useLayoutEffect:rS.useEffect;function rN(e){// Using refs instead of state as it's recommended to not store imperative
// values in state due to memory problems in React(?)
var t=(0,rS.useRef)();if(!t.current){t.current=typeof e==="function"?e():e}return t.current}function rj(e,t,r){r.split(/\s+/).forEach(function(r){if(r){e.classList[t](r)}})}var rU={name:"className",defaultValue:"",fn:function e(e){var t=e.popper.firstElementChild;var r=function t(){var t;return!!((t=e.props.render)==null?void 0:t.$$tippy)};function n(){if(e.props.className&&!r()){if(false){}return}rj(t,"add",e.props.className)}function a(){if(r()){rj(t,"remove",e.props.className)}}return{onCreate:n,onBeforeUpdate:a,onAfterUpdate:n}}};function rH(e){function t(t){var r=t.children,n=t.content,a=t.visible,i=t.singleton,o=t.render,s=t.reference,u=t.disabled,c=u===void 0?false:u,l=t.ignoreAttributes,f=l===void 0?true:l,d=t.__source,h=t.__self,p=rR(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"]);var v=a!==undefined;var m=i!==undefined;var g=(0,rS.useState)(false),y=g[0],b=g[1];var _=(0,rS.useState)({}),w=_[0],x=_[1];var E=(0,rS.useState)(),O=E[0],S=E[1];var A=rN(function(){return{container:rI(),renders:1}});var T=Object.assign({ignoreAttributes:f},p,{content:A.container});if(v){if(false){}T.trigger="manual";T.hideOnClick=false}if(m){c=true}var R=T;var k=T.plugins||[];if(o){R=Object.assign({},T,{plugins:m&&i.data!=null?[].concat(k,[{fn:function e(){return{onTrigger:function e(e,t){var r=i.data.children.find(function(e){var r=e.instance;return r.reference===t.currentTarget});e.state.$$activeSingletonInstance=r.instance;S(r.content)}}}}]):k,render:function e(){return{popper:A.container}}})}var C=[s].concat(r?[r.type]:[]);// CREATE
rF(function(){var t=s;if(s&&s.hasOwnProperty("current")){t=s.current}var r=e(t||A.ref||rI(),Object.assign({},R,{plugins:[rU].concat(T.plugins||[])}));A.instance=r;if(c){r.disable()}if(a){r.show()}if(m){i.hook({instance:r,content:n,props:R,setSingletonContent:S})}b(true);return function(){r.destroy();i==null?void 0:i.cleanup(r)}},C);// UPDATE
rF(function(){var e;// Prevent this effect from running on 1st render
if(A.renders===1){A.renders++;return}var t=A.instance;t.setProps(rL(t.props,R));// Fixes #264
(e=t.popperInstance)==null?void 0:e.forceUpdate();if(c){t.disable()}else{t.enable()}if(v){if(a){t.show()}else{t.hide()}}if(m){i.hook({instance:t,content:n,props:R,setSingletonContent:S})}});rF(function(){var e;if(!o){return}var t=A.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat((((e=t.props.popperOptions)==null?void 0:e.modifiers)||[]).filter(function(e){var t=e.name;return t!=="$$tippyReact"}),[{name:"$$tippyReact",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t;var r=e.state;var n=(t=r.modifiersData)==null?void 0:t.hide;// WARNING: this is a high-risk path that can cause an infinite
// loop. This expression _must_ evaluate to false when required
if(w.placement!==r.placement||w.referenceHidden!==(n==null?void 0:n.isReferenceHidden)||w.escaped!==(n==null?void 0:n.hasPopperEscaped)){x({placement:r.placement,referenceHidden:n==null?void 0:n.isReferenceHidden,escaped:n==null?void 0:n.hasPopperEscaped})}r.attributes.popper={}}}])})})},[w.placement,w.referenceHidden,w.escaped].concat(C));return /*#__PURE__*/rA().createElement(rA().Fragment,null,r?/*#__PURE__*/(0,rS.cloneElement)(r,{ref:function e(e){A.ref=e;rC(r.ref,e)}}):null,y&&/*#__PURE__*/(0,rT.createPortal)(o?o(rP(w),O,A.instance):n,A.container))}return t}function rB(e){return function t(t){var r=t===void 0?{}:t,n=r.disabled,a=n===void 0?false:n,i=r.overrides,o=i===void 0?[]:i;var s=useState(false),u=s[0],c=s[1];var l=rN({children:[],renders:1});rF(function(){if(!u){c(true);return}var t=l.children,r=l.sourceData;if(!r){if(false){}return}var n=e(t.map(function(e){return e.instance}),Object.assign({},r.props,{popperOptions:r.instance.props.popperOptions,overrides:o,plugins:[rU].concat(r.props.plugins||[])}));l.instance=n;if(a){n.disable()}return function(){n.destroy();l.children=t.filter(function(e){var t=e.instance;return!t.state.isDestroyed})}},[u]);rF(function(){if(!u){return}if(l.renders===1){l.renders++;return}var e=l.children,t=l.instance,r=l.sourceData;if(!(t&&r)){return}var n=r.props,i=n.content,s=rR(n,["content"]);t.setProps(rL(t.props,Object.assign({},s,{overrides:o})));t.setInstances(e.map(function(e){return e.instance}));if(a){t.disable()}else{t.enable()}});return useMemo(function(){var e={data:l,hook:function e(e){l.sourceData=e;l.setSingletonContent=e.setSingletonContent},cleanup:function e(){l.sourceData=null}};var t={hook:function e(e){var t,r;l.children=l.children.filter(function(t){var r=t.instance;return e.instance!==r});l.children.push(e);if(((t=l.instance)==null?void 0:t.state.isMounted)&&((r=l.instance)==null?void 0:r.state.$$activeSingletonInstance)===e.instance){l.setSingletonContent==null?void 0:l.setSingletonContent(e.content)}if(l.instance&&!l.instance.state.isDestroyed){l.instance.setInstances(l.children.map(function(e){return e.instance}))}},cleanup:function e(e){l.children=l.children.filter(function(t){return t.instance!==e});if(l.instance&&!l.instance.state.isDestroyed){l.instance.setInstances(l.children.map(function(e){return e.instance}))}}};return[e,t]},[])}}var rY=function(e,t){return/*#__PURE__*/(0,rS.forwardRef)(function r(r,n){var a=r.children,i=rR(r,["children"]);return(/*#__PURE__*/// If I spread them separately here, Babel adds the _extends ponyfill for
// some reason
rA().createElement(e,Object.assign({},t,i),a?/*#__PURE__*/(0,rS.cloneElement)(a,{ref:function e(e){rC(n,e);rC(a.ref,e)}}):null))})};var rz=/*#__PURE__*//* unused pure expression or super */null&&rB(createSingleton);var rV=/*#__PURE__*/rY(/*#__PURE__*/rH(rO),{render:function e(){return""}});/* export default */const rq=rV;//# sourceMappingURL=tippy-react-headless.esm.js.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/styles.ts
var rW=r(7764);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/useAnimation.tsx + 1 modules
var r$=r(203);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Tooltip.tsx
function rG(){var e=(0,i._)(["\n        bottom: auto;\n        left: -4px;\n        top: 50%;\n        transform: translateY(-50%) rotate(45deg);\n      "]);rG=function t(){return e};return e}function rK(){var e=(0,i._)(["\n        bottom: auto;\n        top: -4px;\n        left: 50%;\n        transform: translateX(-50%) rotate(45deg);\n      "]);rK=function t(){return e};return e}function rQ(){var e=(0,i._)(["\n        bottom: auto;\n        top: 50%;\n        left: auto;\n        right: -4px;\n        transform: translateY(-50%) rotate(45deg);\n      "]);rQ=function t(){return e};return e}var rX={opacity:0,transform:"scale(0.8)"};var rJ={tension:300,friction:15};var rZ=e=>{var{children:t,content:r,allowHTML:i,placement:s="top",hideOnClick:c,delay:l=0,disabled:f=false,visible:d,wrapperCss:h}=e;var[p,v]=(0,u/* .useSpring */.zh)(()=>rX);if(f)return t;var m=()=>{v.start({opacity:1,transform:"scale(1)",config:rJ})};var g=e=>{var{unmount:t}=e;v.start((0,a._)((0,n._)({},rX),{onRest:t,config:(0,a._)((0,n._)({},rJ),{clamp:true})}))};return/*#__PURE__*/(0,o/* .jsx */.Y)(rq,{render:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(r$/* .AnimatedDiv */.LK,(0,a._)((0,n._)({style:p,hideOnOverflow:false},e),{css:r1.contentBox(s),children:r}))},animation:true,onMount:m,onHide:g,allowHTML:i,delay:[l,100],hideOnClick:c,placement:s,visible:d,zIndex:rW/* .zIndex.highest */.fE.highest,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:h,children:t})})};/* export default */const r0=rZ;var r1={contentBox:e=>/*#__PURE__*/(0,s/* .css */.AH)("max-width:250px;width:100%;background-color:",rW/* .colorTokens.color.black.main */.I6.color.black.main,";color:",rW/* .colorTokens.text.white */.I6.text.white,";border-radius:",rW/* .borderRadius["6"] */.Vq["6"],";padding:",rW/* .spacing["4"] */.YK["4"]," ",rW/* .spacing["8"] */.YK["8"],";font-size:",rW/* .fontSize["15"] */.J["15"],";line-height:",rW/* .lineHeight["20"] */.K_["20"],";position:relative;&::before{content:'';height:8px;width:8px;background-color:",rW/* .colorTokens.color.black.main */.I6.color.black.main,";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%) rotate(45deg);",e==="right"&&(0,s/* .css */.AH)(rG())," ",e==="bottom"&&(0,s/* .css */.AH)(rK())," ",e==="left"&&(0,s/* .css */.AH)(rQ()),"}")}},2506:function(e,t,r){"use strict";r.d(t,{A:()=>o});/* import */var n=r(2025);var a;if(false){}else{// eslint-disable-next-line @typescript-eslint/no-require-imports
a=r(5570)/* ["default"] */.A}var i=e=>{var{children:t}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(a,{children:t})};/* export default */const o=i},5570:function(e,t,r){"use strict";// EXPORTS
r.d(t,{A:()=>/* binding */g});// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var n=r(2025);// EXTERNAL MODULE: external "React"
var a=r(1594);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var i=r(5757);// EXTERNAL MODULE: external "wp.i18n"
var o=r(2470);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Button.tsx
var s=r(9878);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/SVGIcon.tsx
var u=r(4485);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var c=r(4336);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/styles.ts
var l=r(7764);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/typography.ts
var f=r(983);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/Show.tsx
var d=r(6025);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/style-utils.ts
var h=r(4958);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/production-error.webp
const p=r.p+"images/production-error-24158233.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/production-error-2x.webp
const v=r.p+"images/production-error-2x-dc6519df.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/ErrorBoundaryProd.tsx
class m extends a.Component{static getDerivedStateFromError(){return{hasError:true}}componentDidCatch(e,t){// eslint-disable-next-line no-console
console.error(e,t)}render(){if(this.state.hasError){return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:y.container,children:/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:y.productionErrorWrapper,children:[/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:y.productionErrorHeader,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("img",{src:p,srcSet:"".concat(v," 2x"),alt:(0,o.__)("Error","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("h5",{css:f/* .typography.heading5 */.I.heading5("medium"),children:(0,o.__)("Oops! Something went wrong","tutor-pro")}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:y.instructions,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("p",{children:(0,o.__)("Try the following steps to resolve the issue:","tutor-pro")}),/*#__PURE__*/(0,n/* .jsxs */.FD)("ul",{children:[/*#__PURE__*/(0,n/* .jsx */.Y)("li",{children:(0,o.__)("Refresh the page.","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("li",{children:(0,o.__)("Clear your browser cache.","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)(d/* ["default"] */.A,{when:c/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url,children:/*#__PURE__*/(0,n/* .jsx */.Y)("li",{children:(0,o.__)("Ensure the Free and Pro plugins are on the same version.","tutor-pro")})})]})]})]}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:y.productionFooter,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{variant:"secondary",icon:/*#__PURE__*/(0,n/* .jsx */.Y)(u/* ["default"] */.A,{name:"refresh",height:24,width:24}),onClick:()=>window.location.reload(),children:(0,o.__)("Reload","tutor-pro")})}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:y.support,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("span",{children:(0,o.__)("Still having trouble?","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("span",{children:(0,o.__)("Contact","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("a",{href:c/* ["default"].TUTOR_SUPPORT_PAGE_URL */.A.TUTOR_SUPPORT_PAGE_URL,children:(0,o.__)("Support","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)("span",{children:(0,o.__)("for assistance.","tutor-pro")})]})]})]})})}return this.props.children}constructor(e){super(e);this.state={hasError:false}}}/* export default */const g=m;var y={container:/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:auto;display:flex;justify-content:center;align-items:center;"),productionErrorWrapper:/*#__PURE__*/(0,i/* .css */.AH)(h/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["20"] */.YK["20"],";max-width:500px;width:100%;"),productionErrorHeader:/*#__PURE__*/(0,i/* .css */.AH)(h/* .styleUtils.display.flex */.x.display.flex("column"),";align-items:center;padding:",l/* .spacing["32"] */.YK["32"],";background:",l/* .colorTokens.background.white */.I6.background.white,";border-radius:",l/* .borderRadius["12"] */.Vq["12"],";box-shadow:0px -4px 0px 0px #ff0000;gap:",l/* .spacing["16"] */.YK["16"],";h5{text-align:center;}img{height:104px;width:101px;object-position:center;object-fit:contain;}"),instructions:/*#__PURE__*/(0,i/* .css */.AH)("width:100%;max-width:333px;p{width:100%;",f/* .typography.caption */.I.caption(),";margin-bottom:",l/* .spacing["4"] */.YK["4"],";}ul{padding-left:",l/* .spacing["16"] */.YK["16"],";li{",f/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";list-style:unset;margin-bottom:",l/* .spacing["2"] */.YK["2"],";&::marker{color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";}}}"),productionFooter:/*#__PURE__*/(0,i/* .css */.AH)(h/* .styleUtils.display.flex */.x.display.flex("column"),";align-items:center;gap:",l/* .spacing["12"] */.YK["12"],";"),support:/*#__PURE__*/(0,i/* .css */.AH)(h/* .styleUtils.flexCenter */.x.flexCenter("row"),";text-align:center;flex-wrap:wrap;gap:",l/* .spacing["4"] */.YK["4"],";",f/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.title */.I6.text.title,";a{color:",l/* .colorTokens.text.brand */.I6.text.brand,";text-decoration:none;}")}},3979:function(e,t,r){"use strict";r.d(t,{A:()=>o});/* import */var n=r(1594);/* import */var a=/*#__PURE__*/r.n(n);var i=e=>{var{children:t,blurPrevious:r=false}=e;var a=(0,n.useRef)(null);var i=(0,n.useRef)(null);(0,n.useEffect)(()=>{var e=a.current;if(!e){return}i.current=document.activeElement;if(r&&i.current&&i.current!==document.body){i.current.blur()}var t=e=>{if(!e||!e.isConnected){return false}var t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&!e.hidden&&e.offsetParent!==null};var n=()=>{var r='a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';return Array.from(e.querySelectorAll(r)).filter(e=>{return!e.hasAttribute("disabled")&&t(e)})};var o=()=>{var t=document.querySelectorAll('[data-focus-trap="true"]');return t.length>0&&t[t.length-1]===e};var s=t=>{if(!o()||t.key!=="Tab"){return}var r=n();if(r.length===0){return}var a=r[0];var i=r[r.length-1];var s=document.activeElement;if(!e.contains(s)&&document.body!==s){t.preventDefault();a.focus();return}if(t.shiftKey&&s===a){t.preventDefault();i.focus();return}if(!t.shiftKey&&s===i){t.preventDefault();a.focus();return}};document.addEventListener("keydown",s,true);return()=>{document.removeEventListener("keydown",s,true);if(i.current&&t(i.current)){i.current.focus()}};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n.cloneElement)(n.Children.only(t),{ref:a,"data-focus-trap":"true",tabIndex:-1})};/* export default */const o=i},3241:function(e,t,r){"use strict";r.d(t,{A:()=>b});/* import */var n=r(690);/* import */var a=r(2025);/* import */var i=r(5757);/* import */var o=r(4485);/* import */var s=r(2506);/* import */var u=r(3979);/* import */var c=r(7461);/* import */var l=r(7764);/* import */var f=r(983);/* import */var d=r(6025);/* import */var h=r(6039);/* import */var p=r(4958);function v(){var e=(0,n._)(["\n      max-width: 100vw;\n      width: 100vw;\n      height: 95vh;\n    "]);v=function t(){return e};return e}function m(){var e=(0,n._)(["\n      position: absolute;\n      right: ",";\n      top: ",";\n    "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n      height: calc(100% - ","px);\n    "]);g=function t(){return e};return e}var y=e=>{var{children:t,onClose:r,title:n,subtitle:i,icon:l,entireHeader:f,actions:p,fullScreen:v,modalStyle:m,maxWidth:g=c/* .modal.BASIC_MODAL_MAX_WIDTH */.yl.BASIC_MODAL_MAX_WIDTH,isCloseAble:y=true,blurTriggerElement:b=true}=e;(0,h/* .useScrollLock */.K$)();return/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{blurPrevious:b,children:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[_.container({isFullScreen:v}),m],style:{maxWidth:"".concat(g,"px")},children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.header({hasEntireHeader:!!f}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:!f,fallback:f,children:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.headerContent,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.iconWithTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:l,children:l}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:_.title,children:n})})]}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:_.subtitle,children:i})})]})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.actionsWrapper({hasEntireHeader:!!f}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:p,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:y,children:/*#__PURE__*/(0,a/* .jsx */.Y)("button",{"data-cy":"close-modal",type:"button",css:_.closeButton,onClick:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)(o/* ["default"] */.A,{name:"timesThin",width:24,height:24})})}),children:p})})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.content({isFullScreen:v}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{children:t})})]})})};/* export default */const b=y;var _={container:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:relative;background:",l/* .colorTokens.background.white */.I6.background.white,";box-shadow:",l/* .shadow.modal */.r7.modal,";border-radius:",l/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;top:50%;left:50%;transform:translate(-50%,-50%);",t&&(0,i/* .css */.AH)(v())," ",l/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:100%;height:",!t?"".concat(c/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT,"px"):"auto",";background:",l/* .colorTokens.background.white */.I6.background.white,";border-bottom:",!t?"1px solid ".concat(l/* .colorTokens.stroke.divider */.I6.stroke.divider):"none",";padding-inline:",l/* .spacing["16"] */.YK["16"],";")},headerContent:/*#__PURE__*/(0,i/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",l/* .spacing["12"] */.YK["12"],";"),iconWithTitle:/*#__PURE__*/(0,i/* .css */.AH)("display:inline-flex;align-items:center;gap:",l/* .spacing["4"] */.YK["4"],";color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,i/* .css */.AH)(f/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.title */.I6.text.title,";"),subtitle:/*#__PURE__*/(0,i/* .css */.AH)(p/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",f/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";"),actionsWrapper:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("place-self:center end;display:inline-flex;gap:",l/* .spacing["16"] */.YK["16"],";",t&&(0,i/* .css */.AH)(m(),l/* .spacing["16"] */.YK["16"],l/* .spacing["16"] */.YK["16"]))},closeButton:/*#__PURE__*/(0,i/* .css */.AH)(p/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background:",l/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",l/* .colorTokens.background.white */.I6.background.white,";}svg{color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",l/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",l/* .shadow.focus */.r7.focus,";}"),content:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("background-color:",l/* .colorTokens.background.white */.I6.background.white,";overflow-y:auto;max-height:90vh;",t&&(0,i/* .css */.AH)(g(),c/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT))}}},4937:function(e,t,r){"use strict";r.d(t,{A:()=>f});/* import */var n=r(2025);/* import */var a=r(5757);/* import */var i=r(2470);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(9878);/* import */var u=r(3241);/* import */var c=r(7764);var l=e=>{var{title:t,description:r,confirmButtonText:a,cancelButtonText:o,confirmButtonVariant:c,closeModal:l,onConfirm:f,isLoading:h=false,icon:p,maxWidth:v=460}=e;return/*#__PURE__*/(0,n/* .jsxs */.FD)(u/* ["default"] */.A,{icon:p,onClose:()=>l({action:"CLOSE"}),title:t,maxWidth:v,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("div",{css:d.content,children:r!==null&&r!==void 0?r:(0,i.__)("Once you perform this action this can’t be undone.","tutor-pro")}),/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:d.footerWrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{variant:"text",onClick:()=>l({action:"CLOSE"}),size:"small",children:o!==null&&o!==void 0?o:(0,i.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{variant:c!==null&&c!==void 0?c:"danger",size:"small",loading:h,onClick:()=>{if(f){f()}else{l({action:"CONFIRM"})}},children:a!==null&&a!==void 0?a:(0,i.__)("Delete","tutor-pro")})]})]})};/* export default */const f=l;var d={content:/*#__PURE__*/(0,a/* .css */.AH)("font-size:",c/* .fontSize["14"] */.J["14"],";line-height:",c/* .lineHeight["20"] */.K_["20"],";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";padding:",c/* .spacing["20"] */.YK["20"],";"),footerWrapper:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:end;gap:",c/* .spacing["8"] */.YK["8"],";padding:",c/* .spacing["12"] */.YK["12"]," ",c/* .spacing["16"] */.YK["16"],";box-shadow:",c/* .shadow.dividerTop */.r7.dividerTop,";")}},2580:function(e,t,r){"use strict";r.d(t,{Z:()=>g,h:()=>m});/* import */var n=r(33);/* import */var a=r(1303);/* import */var i=r(690);/* import */var o=r(2025);/* import */var s=r(1594);/* import */var u=/*#__PURE__*/r.n(s);/* import */var c=r(5757);/* import */var l=r(7764);/* import */var f=r(203);/* import */var d=r(2927);function h(){var e=(0,i._)(["\n      background: linear-gradient(\n        73.09deg,\n        rgba(255, 150, 69, 0.4) 18.05%,\n        rgba(255, 100, 113, 0.4) 30.25%,\n        rgba(207, 110, 189, 0.4) 55.42%,\n        rgba(164, 119, 209, 0.4) 71.66%,\n        rgba(62, 100, 222, 0.4) 97.9%\n      );\n      opacity: 1;\n      backdrop-filter: blur(10px);\n    "]);h=function t(){return e};return e}var p={backdrop:e=>{var{magicAi:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:fixed;background-color:",l/* .colorTokens.background.modal */.I6.background.modal,";opacity:0.7;inset:0;z-index:",l/* .zIndex.negative */.fE.negative,";",t&&(0,c/* .css */.AH)(h()))},container:/*#__PURE__*/(0,c/* .css */.AH)("z-index:",l/* .zIndex.highest */.fE.highest,";position:fixed;display:flex;justify-content:center;top:0;left:0;width:100%;height:100%;")};var v=/*#__PURE__*/u().createContext({showModal:()=>Promise.resolve({action:"CLOSE"}),closeModal:d/* .noop */.lQ,updateModal:d/* .noop */.lQ,hasModalOnStack:false});var m=()=>(0,s.useContext)(v);var g=e=>{var{children:t}=e;var[r,i]=(0,s.useState)({modals:[]});var c=(0,s.useCallback)(e=>{var{component:t,props:r,closeOnOutsideClick:o=false,closeOnEscape:s=true,isMagicAi:u=false,depthIndex:c=l/* .zIndex.modal */.fE.modal,id:f}=e;return new Promise(e=>{i(i=>(0,a._)((0,n._)({},i),{modals:[...i.modals,{component:t,props:r,resolve:e,closeOnOutsideClick:o,closeOnEscape:s,id:f||(0,d/* .nanoid */.Ak)(),depthIndex:c,isMagicAi:u}]}))})},[]);var h=(0,s.useCallback)(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{action:"CLOSE"};i(t=>{var r=t.modals[t.modals.length-1];r===null||r===void 0?void 0:r.resolve(e);return(0,a._)((0,n._)({},t),{modals:t.modals.slice(0,t.modals.length-1)})})},[]);var m=(0,s.useCallback)((e,t)=>{i(r=>{var i=r.modals.findIndex(t=>t.id===e);if(i===-1)return r;var o=[...r.modals];var s=o[i];o[i]=(0,a._)((0,n._)({},s),{props:(0,n._)({},s.props,t)});return(0,a._)((0,n._)({},r),{modals:o})})},[]);var{transitions:g}=(0,f/* .useAnimation */.sM)({keys:e=>e.id,data:r.modals,animationType:f/* .AnimationType.slideUp */.J6.slideUp,animationDuration:250});var y=(0,s.useMemo)(()=>{return r.modals.length>0},[r.modals]);(0,s.useEffect)(()=>{var e=e=>{var t;var n=document.querySelectorAll(".tutor-portal-popover");var a=!!document.body.classList.contains("modal-open");if(e.key==="Escape"&&((t=r.modals[r.modals.length-1])===null||t===void 0?void 0:t.closeOnEscape)&&!n.length&&!a){h({action:"CLOSE"})}};if(r.modals.length>0){document.addEventListener("keydown",e,true)}return()=>{document.removeEventListener("keydown",e,true)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[r.modals.length,h]);return/*#__PURE__*/(0,o/* .jsxs */.FD)(v.Provider,{value:{showModal:c,closeModal:h,updateModal:m,hasModalOnStack:y},children:[t,g((e,t,r,i)=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{"data-cy":"tutor-modal",css:[p.container,{zIndex:t.depthIndex||l/* .zIndex.modal */.fE.modal+i}],children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .AnimatedDiv */.LK,{style:(0,a._)((0,n._)({},e),{width:"100%"}),hideOnOverflow:false,children:/*#__PURE__*/u().createElement(t.component,(0,a._)((0,n._)({},t.props),{closeModal:h}))}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:p.backdrop({magicAi:t.isMagicAi}),onKeyUp:d/* .noop */.lQ,tabIndex:-1,// This is not ideal to attach a click event on a non-interactive element like div,
// but in this case we have to do it.
onClick:()=>{if(t.closeOnOutsideClick){h({action:"CLOSE"})}}})]},t.id)})]})}},4336:function(e,t,r){"use strict";r.d(t,{A:()=>u,P:()=>o});/* eslint-disable @typescript-eslint/no-explicit-any */var n,a;var i={ID:0,ajaxurl:"",site_url:"",home_url:"",site_title:"",base_path:"",tutor_url:"",tutor_pro_url:"",dashboard_url:"",nonce_key:"",_tutor_nonce:"",loading_icon_url:"",placeholder_img_src:"",enable_lesson_classic_editor:"",tutor_frontend_dashboard_url:"",backend_course_list_url:"",backend_bundle_list_url:"",frontend_course_list_url:"",frontend_bundle_list_url:"",wp_date_format:"",wp_rest_nonce:"",is_admin:"",is_admin_bar_showing:"",max_upload_size:"",content_change_event:"",is_tutor_course_edit:"",assignment_max_file_allowed:"",current_page:"",quiz_answer_display_time:"",is_ssl:"",course_list_page_url:"",course_post_type:"",local:"",tutor_pn_vapid_key:"",tutor_pn_client_id:"",tutor_pn_subscription_saved:"",difficulty_levels:[],supported_video_sources:[],edd_products:[],bp_groups:[],timezones:{},addons_data:[],kids_icons_registry:[],is_kids_mode:false,user_preferences:{auto_play_next:false,contrast:"",font_scale:1,learning_mood:"modern",motion_effects:"auto",theme:"light",vision:"normal"},is_legacy_learning_mode:false,current_user:{data:{id:"",user_login:"",user_pass:"",user_nicename:"",user_email:"",user_url:"",user_registered:"",user_activation_key:"",user_status:"",display_name:""},caps:{},cap_key:"",roles:[],allcaps:{},filter:null},settings:{learning_mode:"",monetize_by:"tutor",enable_course_marketplace:"off",course_permalink_base:"",supported_video_sources:"",enrollment_expiry_enabled:"off",enable_q_and_a_on_course:"off",instructor_can_delete_course:"off",instructor_can_change_course_author:"off",instructor_can_manage_co_instructors:"off",chatgpt_enable:"off",course_builder_logo_url:"",chatgpt_key_exist:false,hide_admin_bar_for_users:"off",enable_redirect_on_course_publish_from_frontend:"off",instructor_can_publish_course:"off",youtube_api_key_exist:false,membership_only_mode:false,enable_tax:false,enable_individual_tax_control:false,is_tax_included_in_price:false,pagination_per_page:10,has_active_membership_plans:false},tutor_currency:{symbol:"",currency:"",position:"",thousand_separator:"",decimal_separator:"",no_of_decimal:""},visibility_control:{course_builder:{}}};var o=window._tutorobject||i;window.ajaxurl=o.ajaxurl;var s={TUTOR_SITE_URL:o.site_url,WP_AJAX_BASE_URL:o.ajaxurl,WP_API_BASE_URL:"".concat(((n=window.wpApiSettings)===null||n===void 0?void 0:n.root)||"").concat(((a=window.wpApiSettings)===null||a===void 0?void 0:a.versionString)||""),VIDEO_SOURCES_SETTINGS_URL:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor_settings&tab_page=course#field_supported_video_sources"),MONETIZATION_SETTINGS_URL:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor_settings&tab_page=monetization"),TUTOR_PRICING_PAGE:"https://tutorlms.com/pricing/",TUTOR_ADDONS_PAGE:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor-addons"),CHATGPT_PLATFORM_URL:"https://platform.openai.com/account/api-keys",TUTOR_MY_COURSES_PAGE_URL:"".concat(o.tutor_frontend_dashboard_url,"/my-courses"),TUTOR_SUPPORT_PAGE_URL:"https://tutorlms.com/support",TUTOR_SUBSCRIPTIONS_PAGE:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor-subscriptions"),TUTOR_ENROLLMENTS_PAGE:"".concat(o.site_url,"/wp-admin/admin.php?page=enrollments"),TUTOR_COUPONS_PAGE:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor_coupons"),TUTOR_IMPORT_EXPORT_PAGE:"".concat(o.site_url,"/wp-admin/admin.php?page=tutor-tools&sub_page=import_export")};/* export default */const u=s},7461:function(e,t,r){"use strict";r.d(t,{I4:()=>g,UA:()=>S,V8:()=>m,gt:()=>E,oW:()=>A,re:()=>c,tv:()=>R,vN:()=>_,yl:()=>w});/* import */var n=r(2470);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(7764);var o=/* unused pure expression or super */null&&5*1024*1024;var s=/* unused pure expression or super */null&&["image/jpeg","image/png","image/gif"];var u=10;var c=10;var l=48;var f=7;var d=3;var h="/product";var p="/category";var v="/tag";var m=document.dir==="rtl";var g="32px";var y="46px";var b=window.innerWidth;var _={isAboveDesktop:b>=i/* .DesktopBreakpoint */.cH,isAboveTablet:b>=i/* .TabletBreakpoint */.uh,isAboveMobile:b>=i/* .MobileBreakpoint */.G2,isAboveSmallMobile:b>=i/* .SmallMobileBreakpoint */.PB};var w={HEADER_HEIGHT:56,MARGIN_TOP:88,BASIC_MODAL_HEADER_HEIGHT:50,BASIC_MODAL_MAX_WIDTH:1218};var x=/* unused pure expression or super */null&&{MIN_NOTEBOOK_HEIGHT:430,MIN_NOTEBOOK_WIDTH:360,NOTEBOOK_HEADER:50};var E={ADMINISTRATOR:"administrator",TUTOR_INSTRUCTOR:"tutor_instructor",SUBSCRIBER:"subscriber"};var O=/*#__PURE__*//* unused pure expression or super */null&&function(e){e["notebook"]="tutor_course_builder_notebook";return e}({});var S=/*#__PURE__*/function(e){e["day"]="dd";e["month"]="MMM";e["year"]="yyyy";e["yearMonthDay"]="yyyy-LL-dd";e["monthDayYear"]="MMM dd, yyyy";e["hoursMinutes"]="hh:mm a";e["yearMonthDayHourMinuteSecond"]="yyyy-MM-dd hh:mm:ss";e["yearMonthDayHourMinuteSecond24H"]="yyyy-MM-dd HH:mm:ss";e["monthDayYearHoursMinutes"]="MMM dd, yyyy, hh:mm a";e["localMonthDayYearHoursMinutes"]="PPp";e["activityDate"]="MMM dd, yyyy hh:mm aa";e["validityDate"]="dd MMMM yyyy";e["dayMonthYear"]="do MMMM, yyyy";return e}({});var A=/*#__PURE__*/function(e){e["COURSE_BUNDLE"]="course-bundle";e["SUBSCRIPTION"]="subscription";e["SOCIAL_LOGIN"]="social-login";e["CONTENT_DRIP"]="content-drip";e["TUTOR_MULTI_INSTRUCTORS"]="tutor-multi-instructors";e["TUTOR_ASSIGNMENTS"]="tutor-assignments";e["TUTOR_COURSE_PREVIEW"]="tutor-course-preview";e["TUTOR_COURSE_ATTACHMENTS"]="tutor-course-attachments";e["TUTOR_GOOGLE_MEET_INTEGRATION"]="google-meet";e["TUTOR_REPORT"]="tutor-report";e["EMAIL"]="tutor-email";e["CALENDAR"]="calendar";e["NOTIFICATIONS"]="tutor-notifications";e["GOOGLE_CLASSROOM_INTEGRATION"]="google-classroom";e["TUTOR_ZOOM_INTEGRATION"]="tutor-zoom";e["QUIZ_EXPORT_IMPORT"]="quiz-import-export";e["ENROLLMENT"]="enrollments";e["TUTOR_CERTIFICATE"]="tutor-certificate";e["GRADEBOOK"]="gradebook";e["TUTOR_PREREQUISITES"]="tutor-prerequisites";e["BUDDYPRESS"]="buddypress";e["WOOCOMMERCE_SUBSCRIPTIONS"]="wc-subscriptions";e["PAID_MEMBERSHIPS_PRO"]="pmpro";e["RESTRICT_CONTENT_PRO"]="restrict-content-pro";e["WEGLOT"]="tutor-weglot";e["WPML_MULTILINGUAL_CMS"]="tutor-wpml";e["H5P_INTEGRATION"]="h5p";e["CONTENT_BANK"]="content-bank";return e}({});var T=/* unused pure expression or super */null&&{YOUTUBE:/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,VIMEO:/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,// eslint-disable-next-line no-useless-escape
EXTERNAL_URL:/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,SHORTCODE:/^\[.*\]$/};var R=[{label:(0,n.__)("Public","tutor-pro"),value:"publish"},{label:(0,n.__)("Password Protected","tutor-pro"),value:"password_protected"},{label:(0,n.__)("Private","tutor-pro"),value:"private"}];var k={COURSE_BUILDER:{BASICS:{FEATURED_IMAGE:"course_builder.basics_featured_image",INTRO_VIDEO:"course_builder.basics_intro_video",SCHEDULING_OPTIONS:"course_builder.basics_scheduling_options",PRICING_OPTIONS:"course_builder.basics_pricing_options",CATEGORIES:"course_builder.basics_categories",TAGS:"course_builder.basics_tags",AUTHOR:"course_builder.basics_author",INSTRUCTORS:"course_builder.basics_instructors",OPTIONS:{GENERAL:"course_builder.basics_options_general",CONTENT_DRIP:"course_builder.basics_options_content_drip",ENROLLMENT:"course_builder.basics_options_enrollment"}},CURRICULUM:{LESSON:{FEATURED_IMAGE:"course_builder.curriculum_lesson_featured_image",VIDEO:"course_builder.curriculum_lesson_video",VIDEO_PLAYBACK_TIME:"course_builder.curriculum_lesson_video_playback_time",EXERCISE_FILES:"course_builder.curriculum_lesson_exercise_files",LESSON_PREVIEW:"course_builder.curriculum_lesson_lesson_preview"}},ADDITIONAL:{COURSE_BENEFITS:"course_builder.additional_course_benefits",COURSE_TARGET_AUDIENCE:"course_builder.additional_course_target_audience",TOTAL_COURSE_DURATION:"course_builder.additional_total_course_duration",COURSE_MATERIALS_INCLUDES:"course_builder.additional_course_material_includes",COURSE_REQUIREMENTS:"course_builder.additional_course_requirements",CERTIFICATES:"course_builder.additional_certificate",ATTACHMENTS:"course_builder.additional_attachments",SCHEDULE_LIVE_CLASS:"course_builder.additional_schedule_live_class"}}};var C=/* unused pure expression or super */null&&{NEW:"new",UPDATE:"update",NO_CHANGE:"no_change"};var I=/* unused pure expression or super */null&&{name:"checkbox",// eslint-disable-next-line @typescript-eslint/no-explicit-any
value:"",onChange:()=>{},onBlur:()=>{},ref:()=>{}};var P=/* unused pure expression or super */null&&{invalid:false,isTouched:false,isDirty:false,isValidating:false,error:undefined}},7764:function(e,t,r){"use strict";r.d(t,{$A:()=>n,EA:()=>_,G2:()=>g,I6:()=>s,J:()=>c,K_:()=>f,PB:()=>m,Vq:()=>p,Wy:()=>l,YK:()=>u,cH:()=>b,fE:()=>v,iL:()=>w,mw:()=>o,r7:()=>h,uh:()=>y});var n=64;var a=355;var i=56;var o={inter:"'Inter', sans-serif;",roboto:"'Roboto', sans-serif;",sfProDisplay:"'SF Pro Display', sans-serif;"};var s={brand:{blue:"#0049f8",black:"#092844"},ai:{gradient_1:"linear-gradient(73.09deg, #FF9645 18.05%, #FF6471 30.25%, #CF6EBD 55.42%, #A477D1 71.66%, #3E64DE 97.9%)",gradient_1_rtl:"linear-gradient(73.09deg, #3E64DE 97.9%, #A477D1 28.34%, #CF6EBD 44.58%, #FF6471 69.75%, #FF9645 81.95%)",gradient_2:"linear-gradient(71.97deg, #FF9645 18.57%, #FF6471 63.71%, #CF6EBD 87.71%, #9B62D4 107.71%, #3E64DE 132.85%)",gradient_2_rtl:"linear-gradient(71.97deg, #3E64DE -67.15%, #9B62D4 -92.29%, #CF6EBD 87.71%, #FF6471 36.29%, #FF9645 81.43%)"},text:{primary:"#212327",title:"#41454f",subdued:"#5b616f",hints:"#767c8e",disable:"#a4a8b2",white:"#ffffff",brand:"#3a62e0",success:"#239c46",warning:"#bd7e00",error:"#f44337",status:{processing:"#007a66",pending:"#a8710d",failed:"#cc1213",completed:"#097336",onHold:"#ac0640",cancelled:"#6f7073",primary:"#3e64de"},wp:"#2271b1",magicAi:"#484F66",ai:{purple:"#9D50FF",gradient:"linear-gradient(73.09deg, #FF9645 18.05%, #FF6471 30.25%, #CF6EBD 55.42%, #A477D1 71.66%, #3E64DE 97.9%)"}},surface:{tutor:"#ffffff",wordpress:"#f1f1f1",navbar:"#F5F5F5",courseBuilder:"#F8F8F8"},background:{brand:"#3e64de",white:"#ffffff",black:"#000000",default:"#f4f6f9",hover:"#f5f6fa",active:"#f0f1f5",disable:"#ebecf0",modal:"#161616",dark10:"#212327",dark20:"#31343b",dark30:"#41454f",null:"#ffffff",success:{fill30:"#F5FBF7",fill40:"#E5F5EB"},warning:{fill40:"#FDF4E3"},status:{success:"#e5f5eb",warning:"#fdf4e3",drip:"#e9edfb",onHold:"#fae8ef",processing:"#e5f9f6",errorFail:"#ffebeb",cancelled:"#eceef2",refunded:"#e5f5f5"},magicAi:{default:"#FBF6FF",skeleton:"#FEF4FF",8:"rgba(201, 132, 254, 0.08)"}},icon:{default:"#9197a8",hover:"#4b505c",subdued:"#7e838f",hints:"#b6b9c2",disable:{default:"#b8bdcc",background:"#cbced6",muted:"#dedede"},white:"#ffffff",brand:"#446ef5",wp:"#007cba",error:"#f55e53",warning:"#ffb505",success:"#22a848",drop:"#4761b8",processing:"#00a388"},stroke:{default:"#c3c5cb",hover:"#9095a3",bold:"#41454f",disable:"#dcdfe5",divider:"#e0e2ea",border:"#cdcfd5",white:"#ffffff",brand:"#577fff",neutral:"#7391f0",success:{default:"#4eba6d",fill70:"#6AC088"},warning:"#f5ba63",danger:"#ff9f99",status:{success:"#c8e5d2",warning:"#fae5c5",processing:"#c3e5e0",onHold:"#f1c1d2",cancelled:"#e1e1e8",refunded:"#ccebea",fail:"#fdd9d7"},magicAi:"#C984FE"},border:{neutral:"#C8C8C8",tertiary:"#F5F5F5"},action:{primary:{default:"#3e64de",hover:"#3a5ccc",focus:"#00cceb",active:"#3453b8",disable:"#e3e6eb",wp:"#2271b1",wp_hover:"#135e96"},secondary:{default:"#e9edfb",hover:"#d6dffa",active:"#d0d9f2",gray:"#f0f1f1"},outline:{default:"#ffffff",hover:"#e9edfb",active:"#e1e7fa",disable:"#cacfe0"}},wordpress:{primary:"#2271b1",primaryLight:"#007cba",hoverShape:"#7faee6",sidebarChildText:"#4ea2e6",childBg:"#2d3337",mainBg:"#1e2327",text:"#b5bcc2"},design:{dark:"#1a1b1e",grey:"#41454f",white:"#ffffff",brand:"#3e64de",success:"#24a148",warning:"#ed9700",error:"#f44337"},primary:{main:"#3e64de",100:"#28408e",90:"#395bca",80:"#6180e4",70:"#95aaed",60:"#bdcaf1",50:"#d2dbf5",40:"#e9edfb",30:"#f6f8fd"},color:{black:{main:"#212327",100:"#0b0c0e",90:"#1a1b1e",80:"#31343b",70:"#41454f",60:"#5b616f",50:"#727889",40:"#9ca0ac",30:"#b4b7c0",20:"#c0c3cb",10:"#cdcfd5",8:"#e3e6eb",5:"#eff1f6",3:"#f4f6f9",2:"#fcfcfd",0:"#ffffff"},danger:{main:"#f44337",100:"#c62828",90:"#e53935",80:"#ef5350",70:"#e57373",60:"#fbb4af",50:"#fdd9d7",40:"#feeceb",30:"#fff7f7"},success:{main:"#24a148",100:"#075a2a",90:"#007a38",80:"#3aaa5a",70:"#6ac088",60:"#99d4ae",50:"#cbe9d5",40:"#e5f5eb",30:"#f5fbf7"},warning:{main:"#ed9700",100:"#895800",90:"#e08e00",80:"#f3a33c",70:"#f5ba63",60:"#f9d093",50:"#fce7c7",40:"#fdf4e3",30:"#fefbf4"}},bg:{gray20:"#e3e5eb",white:"#ffffff",error:"#f46363",success:"#24a148",light:"#f9fafc",brand:"#E6ECFF"},ribbon:{red:"linear-gradient(to bottom, #ee0014 0%,#c10010 12.23%,#ee0014 100%)",orange:"linear-gradient(to bottom, #ff7c02 0%,#df6c00 12.23%,#f78010 100%)",green:"linear-gradient(to bottom, #02ff49 0%,#00bb35 12.23%,#04ca3c 100%)",blue:"linear-gradient(to bottom, #0267ff 3.28%,#004bbb 12.23%,#0453ca 100%)"},additionals:{lightMint:"#ebfffb",lightPurple:"#f4e8f8",lightRed:"#ffebeb",lightYellow:"#fffaeb",lightCoffee:"#fcf4ee",lightPurple2:"#f7ebfe",lightBlue:"#edf1fd"}};var u={0:"0",2:"2px",4:"4px",6:"6px",8:"8px",10:"10px",12:"12px",16:"16px",20:"20px",24:"24px",28:"28px",32:"32px",36:"36px",40:"40px",48:"48px",56:"56px",64:"64px",72:"72px",96:"96px",128:"128px",256:"256px",512:"512px"};var c={10:"0.625rem",11:"0.688rem",12:"0.75rem",13:"0.813rem",14:"0.875rem",15:"0.938rem",16:"1rem",18:"1.125rem",20:"1.25rem",24:"1.5rem",28:"1.75rem",30:"1.875rem",32:"2rem",36:"2.25rem",40:"2.5rem",48:"3rem",56:"3.5rem",60:"3.75rem",64:"4rem",80:"5rem"};var l={thin:100,extraLight:200,light:300,regular:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900};var f={12:"0.5rem",14:"0.75rem",15:"0.90rem",16:"1rem",18:"1.125rem",20:"1.25rem",21:"1.313rem",22:"1.375rem",24:"1.5rem",26:"1.625rem",28:"1.75rem",32:"2rem",30:"1.875rem",34:"2.125rem",36:"2.25rem",40:"2.5rem",44:"2.75rem",48:"3rem",56:"3.5rem",58:"3.625rem",64:"4rem",70:"4.375rem",81:"5.063rem"};var d=/* unused pure expression or super */null&&{tight:"-0.05em",normal:"0",wide:"0.05em",extraWide:"0.1em"};var h={focus:"0px 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 0px 3px rgba(0, 73, 248, 0.9)",button:"0px 1px 0.25px rgba(17, 18, 19, 0.08), inset 0px -1px 0.25px rgba(17, 18, 19, 0.24)",combinedButton:"0px 1px 0px rgba(0, 0, 0, 0.05), inset 0px -1px 0px #bcbfc3, inset 1px 0px 0px #bbbfc3, inset 0px 1px 0px #bbbfc3",combinedButtonExtend:"0px 1px 0px rgba(0, 0, 0, 0.05), inset 0px -1px 0px #bcbfc3, inset 1px 0px 0px #bbbfc3, inset 0px 1px 0px #bbbfc3, inset -1px 0px 0px #bbbfc3",insetButtonPressed:"inset 0px 2px 0px rgba(17, 18, 19, 0.08)",card:"0px 2px 1px rgba(17, 18, 19, 0.05), 0px 0px 1px rgba(17, 18, 19, 0.25)",popover:"0px 6px 22px rgba(17, 18, 19, 0.08), 0px 4px 10px rgba(17, 18, 19, 0.1)",modal:"0px 0px 2px rgba(17, 18, 19, 0.2), 0px 30px 72px rgba(17, 18, 19, 0.2)",base:"0px 1px 3px rgba(17, 18, 19, 0.15)",input:"0px 1px 0px rgba(17, 18, 19, 0.05)",switch:"0px 2px 4px 0px #0000002A",tabs:"inset 0px -1px 0px #dbdcdf",dividerTop:"inset 0px 1px 0px #E4E5E7",underline:"0px 1px 0px #C9CBCF",drag:"3px 7px 8px 0px #00000014",dropList:"0px 6px 20px 0px rgba(28, 49, 104, 0.1)",notebook:"0 0 4px 0 rgba(0, 30, 43, 0.16)",scrollable:"0px -2px 2px 0px #00000014",footer:"0px 1px 0px 0px #E4E5E7 inset"};var p={2:"2px",4:"4px",5:"5px",6:"6px",8:"8px",10:"10px",12:"12px",14:"14px",20:"20px",24:"24px",30:"30px",40:"40px",50:"50px",54:"54px",circle:"50%",card:"8px",min:"4px",input:"6px"};var v={negative:-1,positive:1,dropdown:2,level:0,sidebar:9,header:10,footer:10,modal:25,notebook:1e5,highest:99999,toast:100001};var m=480;var g=782;var y=992;var b=1280;var _={smallMobile:"@media(max-width: ".concat(m,"px)"),mobile:"@media(max-width: ".concat(g,"px)"),smallTablet:"@media(max-width: ".concat(y-1,"px)"),tablet:"@media(max-width: ".concat(b-1,"px)"),desktop:"@media(min-width: ".concat(b,"px)")};var w=1006},983:function(e,t,r){"use strict";r.d(t,{I:()=>i});/* import */var n=r(5757);/* import */var a=r(7764);var i={heading1:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["80"] */.J["80"],";line-height:",a/* .lineHeight["81"] */.K_["81"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},heading2:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["60"] */.J["60"],";line-height:",a/* .lineHeight["70"] */.K_["70"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},heading3:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["40"] */.J["40"],";line-height:",a/* .lineHeight["48"] */.K_["48"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},heading4:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["30"] */.J["30"],";line-height:",a/* .lineHeight["40"] */.K_["40"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},heading5:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["24"] */.J["24"],";line-height:",a/* .lineHeight["34"] */.K_["34"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},heading6:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["20"] */.J["20"],";line-height:",a/* .lineHeight["30"] */.K_["30"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},body:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["16"] */.J["16"],";line-height:",a/* .lineHeight["26"] */.K_["26"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},caption:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["15"] */.J["15"],";line-height:",a/* .lineHeight["24"] */.K_["24"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},small:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["13"] */.J["13"],";line-height:",a/* .lineHeight["18"] */.K_["18"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")},tiny:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"regular";return/*#__PURE__*/(0,n/* .css */.AH)("font-size:",a/* .fontSize["11"] */.J["11"],";line-height:",a/* .lineHeight["16"] */.K_["16"],";color:",a/* .colorTokens.text.primary */.I6.text.primary,";font-weight:",a/* .fontWeight */.Wy[e],";font-family:",a/* .fontFamily.inter */.mw.inter,";")}}},9612:function(e,t,r){"use strict";r.d(t,{J:()=>u,j:()=>c});/* import */var n=r(2025);/* import */var a=r(1594);/* import */var i=/*#__PURE__*/r.n(a);var o={supportKidsIcon:false};var s=/*#__PURE__*/i().createContext(o);var u=()=>(0,a.useContext)(s);var c=e=>{var{children:t,supportKidsIcon:r=false}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(s.Provider,{value:{supportKidsIcon:r},children:t})}},7073:function(e,t,r){"use strict";r.d(t,{A:()=>a});var n=e=>{var{each:t,children:r,fallback:n=null}=e;if(t.length===0){return n}return t.map((e,t)=>{return r(e,t)})};/* export default */const a=n},6025:function(e,t,r){"use strict";r.d(t,{A:()=>o});/* import */var n=r(8638);var a=e=>{return(0,n/* .isDefined */.O9)(e)&&!!e};var i=e=>{var{when:t,children:r,fallback:n=null}=e;var i=a(t);if(i){return typeof r==="function"?r(t):r}return n};/* export default */const o=i},203:function(e,t,r){"use strict";// EXPORTS
r.d(t,{J6:()=>/* binding */m,sM:()=>/* binding */y,LK:()=>/* binding */b});// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var n=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(1303);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var i=r(2473);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var o=r(2025);// EXTERNAL MODULE: external "React"
var s=r(1594);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-use-measure@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use-measure/dist/index.js
function u(e,t){let r;return(...n)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...n),t)}}function c({debounce:e,scroll:t,polyfill:r,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const a=r||(typeof window=="undefined"?class{}:window.ResizeObserver);if(!a)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[i,o]=(0,s.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),h=(0,s.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:i,orientationHandler:null}),v=e?typeof e=="number"?e:e.scroll:null,m=e?typeof e=="number"?e:e.resize:null,g=(0,s.useRef)(!1);(0,s.useEffect)(()=>(g.current=!0,()=>void(g.current=!1)));const[y,b,_]=(0,s.useMemo)(()=>{const e=()=>{if(!h.current.element)return;const{left:e,top:t,width:r,height:a,bottom:i,right:s,x:u,y:c}=h.current.element.getBoundingClientRect(),l={left:e,top:t,width:r,height:a,bottom:i,right:s,x:u,y:c};h.current.element instanceof HTMLElement&&n&&(l.height=h.current.element.offsetHeight,l.width=h.current.element.offsetWidth),Object.freeze(l),g.current&&!p(h.current.lastBounds,l)&&o(h.current.lastBounds=l)};return[e,m?u(e,m):e,v?u(e,v):e]},[o,n,v,m]);function w(){h.current.scrollContainers&&(h.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",_,!0)),h.current.scrollContainers=null),h.current.resizeObserver&&(h.current.resizeObserver.disconnect(),h.current.resizeObserver=null),h.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",h.current.orientationHandler))}function x(){h.current.element&&(h.current.resizeObserver=new a(_),h.current.resizeObserver.observe(h.current.element),t&&h.current.scrollContainers&&h.current.scrollContainers.forEach(e=>e.addEventListener("scroll",_,{capture:!0,passive:!0})),h.current.orientationHandler=()=>{_()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",h.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",h.current.orientationHandler))}const E=e=>{!e||e===h.current.element||(w(),h.current.element=e,h.current.scrollContainers=d(e),x())};return f(_,!!t),l(b),(0,s.useEffect)(()=>{w(),x()},[t,_,b]),(0,s.useEffect)(()=>w,[]),[E,i,y]}function l(e){(0,s.useEffect)(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function f(e,t){(0,s.useEffect)(()=>{if(t){const t=e;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[e,t])}function d(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:n,overflowY:a}=window.getComputedStyle(e);return[r,n,a].some(e=>e==="auto"||e==="scroll")&&t.push(e),[...t,...d(e.parentElement)]}const h=["x","y","top","bottom","left","right","width","height"],p=(e,t)=>h.every(r=>e[r]===t[r]);//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs + 4 modules
var v=r(8606);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useAnimation.tsx
var m=/*#__PURE__*/function(e){e[e["slideDown"]=0]="slideDown";e[e["slideUp"]=1]="slideUp";e[e["slideLeft"]=2]="slideLeft";e[e["slideRight"]=3]="slideRight";e[e["collapseExpand"]=4]="collapseExpand";e[e["zoomIn"]=5]="zoomIn";e[e["zoomOut"]=6]="zoomOut";e[e["fadeIn"]=7]="fadeIn";e[e["sidebar"]=8]="sidebar";return e}({});var g=100;var y=e=>{var{data:t,animationType:r=4,slideThreshold:a=20,animationDuration:i=150,minOpacity:o=0,maxOpacity:s=1,easing:u=v/* .easings.easeInOutQuad */.le.easeInOutQuad,debounceMeasure:l=false,keys:f}=e;var d=Array.isArray(t)?t.length>0:!!t;var[h,p]=c({debounce:l?i+g:0});var m=(0,v/* .useSpring */.zh)({from:{height:0,opacity:o,y:0},to:{height:d?p.height:0,opacity:d?s:o,y:d?0:a*-1},config:{duration:i,easing:u}});var y=(0,v/* .useSpring */.zh)({from:{x:0},to:{x:d?0:a*-1},config:{duration:i,easing:u}});var b={x:0,y:0};switch(r){case 0:b.y=a*-1;b.x=0;break;case 1:b.y=a;b.x=0;break;case 2:b.x=a;b.y=0;break;case 3:b.x=a*-1;b.y=0;break}var _=(0,v/* .useTransition */.pn)(t,{keys:f||(e=>{return e}),from:(0,n._)({opacity:o},b,r===5&&{transform:"scale(0.8)"},r===6&&{transform:"scale(1.2)"},r===7&&{opacity:0}),enter:(0,n._)({opacity:s,x:0,y:0},r===5&&{transform:"scale(1)"},r===6&&{transform:"scale(1)"},r===7&&{opacity:1}),leave:(0,n._)({opacity:o},b,r===5&&{transform:"scale(0.8)"},r===6&&{transform:"scale(1.2)"},r===7&&{opacity:0}),config:{duration:i,easing:u}});return{animationStyle:r===8?y:m,ref:h,transitions:_}};var b=e=>{var{children:t,style:r,hideOnOverflow:s=true}=e,u=(0,i._)(e,["children","style","hideOnOverflow"]);return/*#__PURE__*/(0,o/* .jsx */.Y)(v/* .animated.div */.CS.div,(0,a._)((0,n._)({},u),{style:(0,a._)((0,n._)({},r),{overflow:s?"hidden":"initial"}),children:t}))}},1231:function(e,t,r){"use strict";r.d(t,{G:()=>o});/* import */var n=r(3021);/* import */var a=r(4969);/* import */var i=r(8638);var o=e=>{var t=(0,n/* .useLocation */.zy)();var r=(0,a/* .matchRoutes */.ue)(e,t);if(!(0,i/* .isDefined */.O9)(r)){return t.pathname}var o=r.find(e=>e.pathname===t.pathname);return(o===null||o===void 0?void 0:o.route.path)||""}},2554:function(e,t,r){"use strict";r.d(t,{ZL:()=>I,tP:()=>C,ym:()=>x,zA:()=>w});/* import */var n=r(33);/* import */var a=r(1303);/* import */var i=r(2025);/* import */var o=r(1594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var u=r(5206);/* import */var c=/*#__PURE__*/r.n(u);/* import */var l=r(5757);/* import */var f=r(3979);/* import */var d=r(2580);/* import */var h=r(7461);/* import */var p=r(7764);/* import */var v=r(203);/* import */var m=r(6039);/* import */var g=r(4958);/* import */var y=r(2927);var b={SAFE_MARGIN:12,MAX_OFFSET_VERTICAL:6,MAX_OFFSET_HORIZONTAL:12,CENTER_OFFSET:8};var _=4;var w={TOP:"top",TOP_LEFT:"topLeft",TOP_RIGHT:"topRight",RIGHT:"right",RIGHT_TOP:"rightTop",RIGHT_BOTTOM:"rightBottom",BOTTOM:"bottom",BOTTOM_LEFT:"bottomLeft",BOTTOM_RIGHT:"bottomRight",LEFT:"left",LEFT_TOP:"leftTop",LEFT_BOTTOM:"leftBottom",MIDDLE:"middle",ABSOLUTE_CENTER:"absoluteCenter"};var x=e=>{var t={[w.TOP]:w.TOP,[w.TOP_LEFT]:w.TOP_RIGHT,[w.TOP_RIGHT]:w.TOP_LEFT,[w.RIGHT]:w.LEFT,[w.RIGHT_TOP]:w.LEFT_TOP,[w.RIGHT_BOTTOM]:w.LEFT_BOTTOM,[w.BOTTOM]:w.BOTTOM,[w.BOTTOM_LEFT]:w.BOTTOM_RIGHT,[w.BOTTOM_RIGHT]:w.BOTTOM_LEFT,[w.LEFT]:w.RIGHT,[w.LEFT_TOP]:w.RIGHT_TOP,[w.LEFT_BOTTOM]:w.RIGHT_BOTTOM,[w.MIDDLE]:w.MIDDLE,[w.ABSOLUTE_CENTER]:w.ABSOLUTE_CENTER};return t[e]||e};var E=e=>{return{top:e.top,left:-e.left}};var O=(e,t)=>{var{width:r,height:n}=t;return{top:e.top<0,bottom:e.top+n>window.innerHeight,left:e.left<0,right:e.left+r>window.innerWidth}};var S=(e,t)=>{return e.startsWith("top")&&t.top||e.startsWith("bottom")&&t.bottom||e.startsWith("left")&&t.left||e.startsWith("right")&&t.right};var A=(e,t,r,n,a)=>{var{width:i,height:o}=r;var{top:s,left:u}=a;var c=t.left+t.width/2-i/2;var l=t.top+t.height/2-o/2;var f={[w.TOP]:{top:t.top-o-n,left:c},[w.TOP_LEFT]:{top:t.top-o-n,left:t.left},[w.TOP_RIGHT]:{top:t.top-o-n,left:t.right-i},[w.BOTTOM]:{top:t.bottom+n,left:c},[w.BOTTOM_LEFT]:{top:t.bottom+n,left:t.left},[w.BOTTOM_RIGHT]:{top:t.bottom+n,left:t.right-i},[w.LEFT]:{top:l,left:t.left-i-n},[w.LEFT_TOP]:{top:t.top,left:t.left-i-n},[w.LEFT_BOTTOM]:{top:t.bottom-o,left:t.left-i-n},[w.RIGHT]:{top:l,left:t.right+n},[w.RIGHT_TOP]:{top:t.top,left:t.right+n},[w.RIGHT_BOTTOM]:{top:t.bottom-o,left:t.right+n},[w.MIDDLE]:{top:l,left:c},[w.ABSOLUTE_CENTER]:{top:window.innerHeight/2-o/2,left:window.innerWidth/2-i/2}};var d=f[e]||f[w.BOTTOM];return{top:d.top+s,left:d.left+u}};var T=(e,t,r,n,a,i)=>{var o={[w.TOP]:w.BOTTOM,[w.TOP_LEFT]:w.BOTTOM_LEFT,[w.TOP_RIGHT]:w.BOTTOM_RIGHT,[w.BOTTOM]:w.TOP,[w.BOTTOM_LEFT]:w.TOP_LEFT,[w.BOTTOM_RIGHT]:w.TOP_RIGHT,[w.LEFT]:w.RIGHT,[w.LEFT_TOP]:w.RIGHT_TOP,[w.LEFT_BOTTOM]:w.RIGHT_BOTTOM,[w.RIGHT]:w.LEFT,[w.RIGHT_TOP]:w.LEFT_TOP,[w.RIGHT_BOTTOM]:w.LEFT_BOTTOM,[w.MIDDLE]:w.MIDDLE,[w.ABSOLUTE_CENTER]:w.ABSOLUTE_CENTER};var s=O(e,r);var u=S(t,s);if(!u){return{position:e,placement:t}}// Try opposite placement
var c=o[t];var l=A(c,n,r,a,i);var f=O(l,r);var d=S(c,f);if(!d){return{position:l,placement:c}}return{position:e,placement:t}};var R=(e,t,r,n)=>{var{width:a,height:i}=n;// Skip arrow for covered triggers or special placements
var o=[w.MIDDLE,w.ABSOLUTE_CENTER].includes(e);var s=r.left<t.left+b.SAFE_MARGIN&&r.left+a>t.right-b.SAFE_MARGIN&&r.top<t.top+b.SAFE_MARGIN&&r.top+i>t.bottom-b.SAFE_MARGIN;if(o||s)return{};var u=e.startsWith("top")||e.startsWith("bottom");var c=e.startsWith("left")||e.startsWith("right");if(u){var l=t.left+t.width/2;var f=Math.max(b.SAFE_MARGIN,Math.min(a-b.MAX_OFFSET_VERTICAL,l-r.left))-b.CENTER_OFFSET;if(h/* .isRTL */.V8){f=a-f-b.CENTER_OFFSET*2}return{arrowLeft:f}}if(c){var d=t.top+t.height/2;var p=Math.max(b.SAFE_MARGIN,Math.min(i-b.MAX_OFFSET_HORIZONTAL,d-r.top))-b.CENTER_OFFSET;return{arrowTop:p}}return{}};var k=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:_;var{width:n,height:a}=t;return{left:Math.max(r,Math.min(window.innerWidth-n-r,e.left)),top:Math.max(r,Math.min(window.innerHeight-a-r,e.top))}};var C=e=>{var{isOpen:t,triggerRef:r,placement:i=w.BOTTOM,arrow:s=false,gap:u=10,autoAdjustOverflow:c=true,positionModifier:l={top:0,left:0},dependencies:f=[]}=e;var d=(0,o.useMemo)(()=>r||{current:null},[r]);var p=(0,o.useRef)(null);var[v,m]=(0,o.useState)(0);var[g,y]=(0,o.useState)({left:0,top:0,placement:w.BOTTOM});var b=(0,o.useMemo)(()=>{return h/* .isRTL */.V8?x(i):i},[i]);var _=(0,o.useMemo)(()=>{return h/* .isRTL */.V8?E(l):l},[l]);(0,o.useEffect)(()=>{if(!d.current)return;m(d.current.getBoundingClientRect().width)},[d]);(0,o.useEffect)(()=>{if(!t||!d.current||!p.current)return;var e=d.current.getBoundingClientRect();var r=p.current.getBoundingClientRect();var i={width:r.width||e.width,height:r.height};var o=A(b,e,i,u,_);var l=b;if(c){var f=T(o,b,i,e,u,_);o=f.position;l=f.placement}o=k(o,i);var h=s?R(l,e,o,i):{};y((0,n._)((0,a._)((0,n._)({},o),{placement:l}),h))},[d,p,t,b,_,u,s,c,// eslint-disable-next-line react-hooks/exhaustive-deps
...f]);return{position:g,triggerWidth:v,triggerRef:d,popoverRef:p}};var I=e=>{var{isOpen:t,children:r,onClickOutside:n,onEscape:a,animationType:s=v/* .AnimationType.slideDown */.J6.slideDown}=e;var{hasModalOnStack:c}=(0,d/* .useModal */.h)();(0,m/* .useScrollLock */.K$)(t);(0,o.useEffect)(()=>{var e=e=>{if(e.key==="Escape"){a===null||a===void 0?void 0:a()}};if(!t)return;document.addEventListener("keydown",e,true);return()=>{document.removeEventListener("keydown",e,true)}},[t,c,a]);var{transitions:l}=(0,v/* .useAnimation */.sM)({data:t,animationType:s});return l((e,t)=>{if(!t){return null}return/*#__PURE__*/(0,u.createPortal)(/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .AnimatedDiv */.LK,{css:P.wrapper,style:e,children:/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{className:"tutor-portal-popover",role:"presentation",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:P.backdrop,onKeyUp:y/* .noop */.lQ,onClick:e=>{e.stopPropagation();n===null||n===void 0?void 0:n()}}),r]})})}),document.body)})};var P={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("position:fixed;z-index:",p/* .zIndex.highest */.fE.highest,";inset:0;"),backdrop:/*#__PURE__*/(0,l/* .css */.AH)(g/* .styleUtils.centeredFlex */.x.centeredFlex,";position:fixed;inset:0;z-index:",p/* .zIndex.negative */.fE.negative,";")}},6039:function(e,t,r){"use strict";r.d(t,{K$:()=>p});/* import */var n=r(1594);/* import */var a=/*#__PURE__*/r.n(n);var i=null;var o=[];var s=null;var u=()=>{if(i!==null)return i;var e=document.createElement("div");e.style.visibility="hidden";e.style.overflow="scroll";e.style.width="100px";document.body.appendChild(e);var t=document.createElement("div");t.style.width="100%";e.appendChild(t);i=e.offsetWidth-t.offsetWidth;document.body.removeChild(e);return i};var c=()=>{if(s){return}var e=u();var t=window.innerWidth>document.documentElement.clientWidth;s={overflow:document.body.style.overflow,paddingRight:document.body.style.paddingRight};document.body.style.overflow="hidden";if(t&&e>0){var r=parseInt(window.getComputedStyle(document.body).paddingRight||"0",10);document.body.style.paddingRight="".concat(r+e,"px")}};var l=()=>{if(!s){return}document.body.style.overflow=s.overflow;document.body.style.paddingRight=s.paddingRight;s=null};var f=()=>{var e=Symbol("scroll-lock");o.push(e);if(o.length===1){c()}return e};var d=new Set;var h=e=>{var t=o.indexOf(e);if(t===-1){return}o.splice(t,1);d.delete(e);if(o.length===0&&d.size===0){l()}};var p=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:true;var t=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!e){if(t.current){h(t.current);t.current=null}return}t.current=f();return()=>{if(t.current){var e=t.current;t.current=null;d.add(e);requestAnimationFrame(()=>{h(e)})}}},[e])}},370:function(e,t,r){"use strict";r.d(t,{A:()=>g});/* import */var n=r(690);/* import */var a=r(2025);/* import */var i=r(5757);/* import */var o=r(7461);/* import */var s=r(7764);/* import */var u=r(203);/* import */var c=r(2554);function l(){var e=(0,n._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-top: 8px solid ",";\n              border-bottom: none;\n              left: ",";\n              bottom: -8px;\n              transform: ",";\n            "]);l=function t(){return e};return e}function f(){var e=(0,n._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-bottom: 8px solid ",";\n              border-top: none;\n              left: ",";\n              top: -8px;\n              transform: ",";\n            "]);f=function t(){return e};return e}function d(){var e=(0,n._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-left: 8px solid ",";\n              border-right: none;\n              right: -8px;\n              top: ",";\n              transform: ",";\n            "]);d=function t(){return e};return e}function h(){var e=(0,n._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-right: 8px solid ",";\n              border-left: none;\n              left: -8px;\n              top: ",";\n              transform: ",";\n            "]);h=function t(){return e};return e}function p(){var e=(0,n._)(["\n            content: '';\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n            ","\n            ","\n            ","\n            ","\n          "]);p=function t(){return e};return e}var v=e=>{var{children:t,placement:r=c/* .POPOVER_PLACEMENTS.BOTTOM */.zA.BOTTOM,triggerRef:n,isOpen:i,gap:s,maxWidth:l,closePopover:f,closeOnEscape:d=true,animationType:h=u/* .AnimationType.slideLeft */.J6.slideLeft,arrow:p=false,border:v=false,autoAdjustOverflow:g=true,positionModifier:y={top:0,left:0},dependencies:b=[]}=e;var{position:_,triggerWidth:w,popoverRef:x}=(0,c/* .usePortalPopover */.tP)({triggerRef:n,isOpen:i,autoAdjustOverflow:g,placement:r,arrow:p,gap:s,positionModifier:y,dependencies:b});return/*#__PURE__*/(0,a/* .jsx */.Y)(c/* .Portal */.ZL,{isOpen:i,onClickOutside:f,animationType:h,onEscape:d?f:undefined,children:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:m.wrapper({placement:o/* .isRTL */.V8?(0,c/* .getMirroredPlacement */.ym)(_.placement):_.placement,hideArrow:!p||_.arrowLeft===undefined&&_.arrowTop===undefined,arrowLeft:_.arrowLeft,arrowTop:_.arrowTop}),style:{left:_.left,top:_.top,maxWidth:l!==null&&l!==void 0?l:w},ref:x,children:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:m.content({border:v}),children:t})})})};var m={wrapper:e=>{var{placement:t,hideArrow:r,arrowLeft:n,arrowTop:a}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;width:100%;z-index:",s/* .zIndex.dropdown */.fE.dropdown,";&::before{",t&&!r?(0,i/* .css */.AH)(p(),t.startsWith("top")&&(0,i/* .css */.AH)(l(),s/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("bottom")&&(0,i/* .css */.AH)(f(),s/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("left")&&(0,i/* .css */.AH)(d(),s/* .colorTokens.stroke.white */.I6.stroke.white,a!==undefined?"".concat(a,"px"):"50%",a===undefined?"translateY(-50%)":"none"),t.startsWith("right")&&(0,i/* .css */.AH)(h(),s/* .colorTokens.stroke.white */.I6.stroke.white,a!==undefined?"".concat(a,"px"):"50%",a===undefined?"translateY(-50%)":"none")):"","}")},content:e=>{var{border:t=false}=e;return/*#__PURE__*/(0,i/* .css */.AH)("background-color:",s/* .colorTokens.background.white */.I6.background.white,";box-shadow:",s/* .shadow.popover */.r7.popover,";border-radius:",s/* .borderRadius["6"] */.Vq["6"],";border:",t?"1px solid ".concat(s/* .colorTokens.stroke.divider */.I6.stroke.divider):"none",";::-webkit-scrollbar{background-color:",s/* .colorTokens.background.white */.I6.background.white,";width:10px;}::-webkit-scrollbar-thumb{background-color:",s/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",s/* .borderRadius["6"] */.Vq["6"],";}")}};/* export default */const g=v},6243:function(e,t,r){"use strict";// EXPORTS
r.d(t,{b:()=>/* binding */rd,v:()=>/* binding */rf});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/common/utils.js
var n={};r.r(n);r.d(n,{hasBrowserEnv:()=>eH,hasStandardBrowserEnv:()=>eY,hasStandardBrowserWebWorkerEnv:()=>ez,navigator:()=>eB,origin:()=>eV});// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var a=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var i=r(1303);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/bind.js
/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */function o(e,t){return function r(){return e.apply(t,arguments)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/utils.js
// utils is a library of generic helper functions non-specific to axios
const{toString:s}=Object.prototype;const{getPrototypeOf:u}=Object;const{iterator:c,toStringTag:l}=Symbol;const f=(e=>t=>{const r=s.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null));const d=e=>{e=e.toLowerCase();return t=>f(t)===e};const h=e=>t=>typeof t===e;/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */const{isArray:p}=Array;/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */const v=h("undefined");/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function m(e){return e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */const g=d("ArrayBuffer");/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function y(e){let t;if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){t=ArrayBuffer.isView(e)}else{t=e&&e.buffer&&g(e.buffer)}return t}/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */const b=h("string");/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */const _=h("function");/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */const w=h("number");/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */const x=e=>e!==null&&typeof e==="object";/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */const E=e=>e===true||e===false;/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */const O=e=>{if(f(e)!=="object"){return false}const t=u(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(l in e)&&!(c in e)};/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */const S=e=>{// Early return for non-objects or Buffers to prevent RangeError
if(!x(e)||m(e)){return false}try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch(e){// Fallback for any other objects that might cause RangeError with Object.keys()
return false}};/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */const A=d("Date");/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */const T=d("File");/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */const R=d("Blob");/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */const k=d("FileList");/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */const C=e=>x(e)&&_(e.pipe);/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */const I=e=>{let t;return e&&(typeof FormData==="function"&&e instanceof FormData||_(e.append)&&((t=f(e))==="formdata"||// detect form-data instance
t==="object"&&_(e.toString)&&e.toString()==="[object FormData]"))};/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */const P=d("URLSearchParams");const[D,M,L,F]=["ReadableStream","Request","Response","Headers"].map(d);/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */const N=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function j(e,t,{allOwnKeys:r=false}={}){// Don't bother if no value provided
if(e===null||typeof e==="undefined"){return}let n;let a;// Force an array if not already something iterable
if(typeof e!=="object"){/*eslint no-param-reassign:0*/e=[e]}if(p(e)){// Iterate over array values
for(n=0,a=e.length;n<a;n++){t.call(null,e[n],n,e)}}else{// Buffer check
if(m(e)){return}// Iterate over object keys
const a=r?Object.getOwnPropertyNames(e):Object.keys(e);const i=a.length;let o;for(n=0;n<i;n++){o=a[n];t.call(null,e[o],o,e)}}}function U(e,t){if(m(e)){return null}t=t.toLowerCase();const r=Object.keys(e);let n=r.length;let a;while(n-- >0){a=r[n];if(t===a.toLowerCase()){return a}}return null}const H=(()=>{/*eslint no-undef:0*/if(typeof globalThis!=="undefined")return globalThis;return typeof self!=="undefined"?self:typeof window!=="undefined"?window:global})();const B=e=>!v(e)&&e!==H;/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function Y(){const{caseless:e,skipUndefined:t}=B(this)&&this||{};const r={};const n=(n,a)=>{const i=e&&U(r,a)||a;if(O(r[i])&&O(n)){r[i]=Y(r[i],n)}else if(O(n)){r[i]=Y({},n)}else if(p(n)){r[i]=n.slice()}else if(!t||!v(n)){r[i]=n}};for(let e=0,t=arguments.length;e<t;e++){arguments[e]&&j(arguments[e],n)}return r}/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */const z=(e,t,r,{allOwnKeys:n}={})=>{j(t,(t,n)=>{if(r&&_(t)){e[n]=o(t,r)}else{e[n]=t}},{allOwnKeys:n});return e};/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */const V=e=>{if(e.charCodeAt(0)===65279){e=e.slice(1)}return e};/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */const q=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n);e.prototype.constructor=e;Object.defineProperty(e,"super",{value:t.prototype});r&&Object.assign(e.prototype,r)};/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */const W=(e,t,r,n)=>{let a;let i;let o;const s={};t=t||{};// eslint-disable-next-line no-eq-null,eqeqeq
if(e==null)return t;do{a=Object.getOwnPropertyNames(e);i=a.length;while(i-- >0){o=a[i];if((!n||n(o,e,t))&&!s[o]){t[o]=e[o];s[o]=true}}e=r!==false&&u(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t};/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */const $=(e,t,r)=>{e=String(e);if(r===undefined||r>e.length){r=e.length}r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r};/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */const G=e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!w(t))return null;const r=new Array(t);while(t-- >0){r[t]=e[t]}return r};/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */// eslint-disable-next-line func-names
const K=(e=>{// eslint-disable-next-line func-names
return t=>{return e&&t instanceof e}})(typeof Uint8Array!=="undefined"&&u(Uint8Array));/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */const Q=(e,t)=>{const r=e&&e[c];const n=r.call(e);let a;while((a=n.next())&&!a.done){const r=a.value;t.call(e,r[0],r[1])}};/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */const X=(e,t)=>{let r;const n=[];while((r=e.exec(t))!==null){n.push(r)}return n};/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */const J=d("HTMLFormElement");const Z=e=>{return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function e(e,t,r){return t.toUpperCase()+r})};/* Creating a function that will check if an object has a property. */const ee=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype);/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */const et=d("RegExp");const er=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e);const n={};j(r,(r,a)=>{let i;if((i=t(r,a,e))!==false){n[a]=i||r}});Object.defineProperties(e,n)};/**
 * Makes all methods read-only
 * @param {Object} obj
 */const en=e=>{er(e,(t,r)=>{// skip restricted props in strict mode
if(_(e)&&["arguments","caller","callee"].indexOf(r)!==-1){return false}const n=e[r];if(!_(n))return;t.enumerable=false;if("writable"in t){t.writable=false;return}if(!t.set){t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}}})};const ea=(e,t)=>{const r={};const n=e=>{e.forEach(e=>{r[e]=true})};p(e)?n(e):n(String(e).split(t));return r};const ei=()=>{};const eo=(e,t)=>{return e!=null&&Number.isFinite(e=+e)?e:t};/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function es(e){return!!(e&&_(e.append)&&e[l]==="FormData"&&e[c])}const eu=e=>{const t=new Array(10);const r=(e,n)=>{if(x(e)){if(t.indexOf(e)>=0){return}//Buffer check
if(m(e)){return e}if(!("toJSON"in e)){t[n]=e;const a=p(e)?[]:{};j(e,(e,t)=>{const i=r(e,n+1);!v(i)&&(a[t]=i)});t[n]=undefined;return a}}return e};return r(e,0)};const ec=d("AsyncFunction");const el=e=>e&&(x(e)||_(e))&&_(e.then)&&_(e.catch);// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const ef=((e,t)=>{if(e){return setImmediate}return t?((e,t)=>{H.addEventListener("message",({source:r,data:n})=>{if(r===H&&n===e){t.length&&t.shift()()}},false);return r=>{t.push(r);H.postMessage(e,"*")}})(`axios@${Math.random()}`,[]):e=>setTimeout(e)})(typeof setImmediate==="function",_(H.postMessage));const ed=typeof queueMicrotask!=="undefined"?queueMicrotask.bind(H):typeof process!=="undefined"&&process.nextTick||ef;// *********************
const eh=e=>e!=null&&_(e[c]);/* export default */const ep={isArray:p,isArrayBuffer:g,isBuffer:m,isFormData:I,isArrayBufferView:y,isString:b,isNumber:w,isBoolean:E,isObject:x,isPlainObject:O,isEmptyObject:S,isReadableStream:D,isRequest:M,isResponse:L,isHeaders:F,isUndefined:v,isDate:A,isFile:T,isBlob:R,isRegExp:et,isFunction:_,isStream:C,isURLSearchParams:P,isTypedArray:K,isFileList:k,forEach:j,merge:Y,extend:z,trim:N,stripBOM:V,inherits:q,toFlatObject:W,kindOf:f,kindOfTest:d,endsWith:$,toArray:G,forEachEntry:Q,matchAll:X,isHTMLForm:J,hasOwnProperty:ee,hasOwnProp:ee,reduceDescriptors:er,freezeMethods:en,toObjectSet:ea,toCamelCase:Z,noop:ei,toFiniteNumber:eo,findKey:U,global:H,isContextDefined:B,isSpecCompliantForm:es,toJSONObject:eu,isAsyncFn:ec,isThenable:el,setImmediate:ef,asap:ed,isIterable:eh};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/AxiosError.js
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function ev(e,t,r,n,a){Error.call(this);if(Error.captureStackTrace){Error.captureStackTrace(this,this.constructor)}else{this.stack=new Error().stack}this.message=e;this.name="AxiosError";t&&(this.code=t);r&&(this.config=r);n&&(this.request=n);if(a){this.response=a;this.status=a.status?a.status:null}}ep.inherits(ev,Error,{toJSON:function e(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:ep.toJSONObject(this.config),code:this.code,status:this.status}}});const em=ev.prototype;const eg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{eg[e]={value:e}});Object.defineProperties(ev,eg);Object.defineProperty(em,"isAxiosError",{value:true});// eslint-disable-next-line func-names
ev.from=(e,t,r,n,a,i)=>{const o=Object.create(em);ep.toFlatObject(e,o,function e(e){return e!==Error.prototype},e=>{return e!=="isAxiosError"});const s=e&&e.message?e.message:"Error";// Prefer explicit code; otherwise copy the low-level error's code (e.g. ECONNREFUSED)
const u=t==null&&e?e.code:t;ev.call(o,s,u,r,n,a);// Chain the original error on the standard field; non-enumerable to avoid JSON noise
if(e&&o.cause==null){Object.defineProperty(o,"cause",{value:e,configurable:true})}o.name=e&&e.name||"Error";i&&Object.assign(o,i);return o};/* export default */const ey=ev;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* export default */const eb=null;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/toFormData.js
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function e_(e){return ep.isPlainObject(e)||ep.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function ew(e){return ep.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function ex(e,t,r){if(!e)return t;return e.concat(t).map(function e(e,t){// eslint-disable-next-line no-param-reassign
e=ew(e);return!r&&t?"["+e+"]":e}).join(r?".":"")}/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */function eE(e){return ep.isArray(e)&&!e.some(e_)}const eO=ep.toFlatObject(ep,{},null,function e(e){return/^is[A-Z]/.test(e)});/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function eS(e,t,r){if(!ep.isObject(e)){throw new TypeError("target must be an object")}// eslint-disable-next-line no-param-reassign
t=t||new(eb||FormData);// eslint-disable-next-line no-param-reassign
r=ep.toFlatObject(r,{metaTokens:true,dots:false,indexes:false},false,function e(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!ep.isUndefined(t[e])});const n=r.metaTokens;// eslint-disable-next-line no-use-before-define
const a=r.visitor||l;const i=r.dots;const o=r.indexes;const s=r.Blob||typeof Blob!=="undefined"&&Blob;const u=s&&ep.isSpecCompliantForm(t);if(!ep.isFunction(a)){throw new TypeError("visitor must be a function")}function c(e){if(e===null)return"";if(ep.isDate(e)){return e.toISOString()}if(ep.isBoolean(e)){return e.toString()}if(!u&&ep.isBlob(e)){throw new ey("Blob is not supported. Use a Buffer instead.")}if(ep.isArrayBuffer(e)||ep.isTypedArray(e)){return u&&typeof Blob==="function"?new Blob([e]):Buffer.from(e)}return e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function l(e,r,a){let s=e;if(e&&!a&&typeof e==="object"){if(ep.endsWith(r,"{}")){// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2);// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e)}else if(ep.isArray(e)&&eE(e)||(ep.isFileList(e)||ep.endsWith(r,"[]"))&&(s=ep.toArray(e))){// eslint-disable-next-line no-param-reassign
r=ew(r);s.forEach(function e(e,n){!(ep.isUndefined(e)||e===null)&&t.append(// eslint-disable-next-line no-nested-ternary
o===true?ex([r],n,i):o===null?r:r+"[]",c(e))});return false}}if(e_(e)){return true}t.append(ex(a,r,i),c(e));return false}const f=[];const d=Object.assign(eO,{defaultVisitor:l,convertValue:c,isVisitable:e_});function h(e,r){if(ep.isUndefined(e))return;if(f.indexOf(e)!==-1){throw Error("Circular reference detected in "+r.join("."))}f.push(e);ep.forEach(e,function e(e,n){const i=!(ep.isUndefined(e)||e===null)&&a.call(t,e,ep.isString(n)?n.trim():n,r,d);if(i===true){h(e,r?r.concat(n):[n])}});f.pop()}if(!ep.isObject(e)){throw new TypeError("data must be an object")}h(e);return t}/* export default */const eA=eS;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function eT(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function e(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function eR(e,t){this._pairs=[];e&&eA(e,this,t)}const ek=eR.prototype;ek.append=function e(e,t){this._pairs.push([e,t])};ek.toString=function e(e){const t=e?function(t){return e.call(this,t,eT)}:eT;return this._pairs.map(function e(e){return t(e[0])+"="+t(e[1])},"").join("&")};/* export default */const eC=eR;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/buildURL.js
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function eI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */function eP(e,t,r){/*eslint no-param-reassign:0*/if(!t){return e}const n=r&&r.encode||eI;if(ep.isFunction(r)){r={serialize:r}}const a=r&&r.serialize;let i;if(a){i=a(t,r)}else{i=ep.isURLSearchParams(t)?t.toString():new eC(t,r).toString(n)}if(i){const t=e.indexOf("#");if(t!==-1){e=e.slice(0,t)}e+=(e.indexOf("?")===-1?"?":"&")+i}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/InterceptorManager.js
class eD{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:false,runWhen:r?r.runWhen:null});return this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */eject(e){if(this.handlers[e]){this.handlers[e]=null}}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){if(this.handlers){this.handlers=[]}}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){ep.forEach(this.handlers,function t(t){if(t!==null){e(t)}})}}/* export default */const eM=eD;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/defaults/transitional.js
/* export default */const eL={silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
/* export default */const eF=typeof URLSearchParams!=="undefined"?URLSearchParams:eC;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/browser/classes/FormData.js
/* export default */const eN=typeof FormData!=="undefined"?FormData:null;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/browser/classes/Blob.js
/* export default */const ej=typeof Blob!=="undefined"?Blob:null;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/browser/index.js
/* export default */const eU={isBrowser:true,classes:{URLSearchParams:eF,FormData:eN,Blob:ej},protocols:["http","https","file","blob","url","data"]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/common/utils.js
const eH=typeof window!=="undefined"&&typeof document!=="undefined";const eB=typeof navigator==="object"&&navigator||undefined;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const eY=eH&&(!eB||["ReactNative","NativeScript","NS"].indexOf(eB.product)<0);/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */const ez=(()=>{return typeof WorkerGlobalScope!=="undefined"&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&typeof self.importScripts==="function"})();const eV=eH&&window.location.href||"http://localhost";// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/platform/index.js
/* export default */const eq={...n,...eU};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/toURLEncodedForm.js
function eW(e,t){return eA(e,new eq.classes.URLSearchParams,{visitor:function(e,t,r,n){if(eq.isNode&&ep.isBuffer(e)){this.append(t,e.toString("base64"));return false}return n.defaultVisitor.apply(this,arguments)},...t})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/formDataToJSON.js
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */function e$(e){// foo[x][y][z]
// foo.x.y.z
// foo-x-y-z
// foo x y z
return ep.matchAll(/\w+|\[(\w*)]/g,e).map(e=>{return e[0]==="[]"?"":e[1]||e[0]})}/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function eG(e){const t={};const r=Object.keys(e);let n;const a=r.length;let i;for(n=0;n<a;n++){i=r[n];t[i]=e[i]}return t}/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function eK(e){function t(e,r,n,a){let i=e[a++];if(i==="__proto__")return true;const o=Number.isFinite(+i);const s=a>=e.length;i=!i&&ep.isArray(n)?n.length:i;if(s){if(ep.hasOwnProp(n,i)){n[i]=[n[i],r]}else{n[i]=r}return!o}if(!n[i]||!ep.isObject(n[i])){n[i]=[]}const u=t(e,r,n[i],a);if(u&&ep.isArray(n[i])){n[i]=eG(n[i])}return!o}if(ep.isFormData(e)&&ep.isFunction(e.entries)){const r={};ep.forEachEntry(e,(e,n)=>{t(e$(e),n,r,0)});return r}return null}/* export default */const eQ=eK;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/defaults/index.js
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function eX(e,t,r){if(ep.isString(e)){try{(t||JSON.parse)(e);return ep.trim(e)}catch(e){if(e.name!=="SyntaxError"){throw e}}}return(r||JSON.stringify)(e)}const eJ={transitional:eL,adapter:["xhr","http","fetch"],transformRequest:[function e(e,t){const r=t.getContentType()||"";const n=r.indexOf("application/json")>-1;const a=ep.isObject(e);if(a&&ep.isHTMLForm(e)){e=new FormData(e)}const i=ep.isFormData(e);if(i){return n?JSON.stringify(eQ(e)):e}if(ep.isArrayBuffer(e)||ep.isBuffer(e)||ep.isStream(e)||ep.isFile(e)||ep.isBlob(e)||ep.isReadableStream(e)){return e}if(ep.isArrayBufferView(e)){return e.buffer}if(ep.isURLSearchParams(e)){t.setContentType("application/x-www-form-urlencoded;charset=utf-8",false);return e.toString()}let o;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1){return eW(e,this.formSerializer).toString()}if((o=ep.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return eA(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}if(a||n){t.setContentType("application/json",false);return eX(e)}return e}],transformResponse:[function e(e){const t=this.transitional||eJ.transitional;const r=t&&t.forcedJSONParsing;const n=this.responseType==="json";if(ep.isResponse(e)||ep.isReadableStream(e)){return e}if(e&&ep.isString(e)&&(r&&!this.responseType||n)){const r=t&&t.silentJSONParsing;const a=!r&&n;try{return JSON.parse(e,this.parseReviver)}catch(e){if(a){if(e.name==="SyntaxError"){throw ey.from(e,ey.ERR_BAD_RESPONSE,this,null,this.response)}throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:eq.classes.FormData,Blob:eq.classes.Blob},validateStatus:function e(e){return e>=200&&e<300},headers:{common:{"Accept":"application/json, text/plain, */*","Content-Type":undefined}}};ep.forEach(["delete","get","head","post","put","patch"],e=>{eJ.headers[e]={}});/* export default */const eZ=eJ;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/parseHeaders.js
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const e0=ep.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 *//* export default */const e1=e=>{const t={};let r;let n;let a;e&&e.split("\n").forEach(function e(e){a=e.indexOf(":");r=e.substring(0,a).trim().toLowerCase();n=e.substring(a+1).trim();if(!r||t[r]&&e0[r]){return}if(r==="set-cookie"){if(t[r]){t[r].push(n)}else{t[r]=[n]}}else{t[r]=t[r]?t[r]+", "+n:n}});return t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/AxiosHeaders.js
const e2=Symbol("internals");function e6(e){return e&&String(e).trim().toLowerCase()}function e5(e){if(e===false||e==null){return e}return ep.isArray(e)?e.map(e5):String(e)}function e4(e){const t=Object.create(null);const r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;while(n=r.exec(e)){t[n[1]]=n[2]}return t}const e3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function e7(e,t,r,n,a){if(ep.isFunction(n)){return n.call(this,t,r)}if(a){t=r}if(!ep.isString(t))return;if(ep.isString(n)){return t.indexOf(n)!==-1}if(ep.isRegExp(n)){return n.test(t)}}function e8(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>{return t.toUpperCase()+r})}function e9(e,t){const r=ep.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,a){return this[n].call(this,t,e,r,a)},configurable:true})})}class te{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function a(e,t,r){const a=e6(t);if(!a){throw new Error("header name must be a non-empty string")}const i=ep.findKey(n,a);if(!i||n[i]===undefined||r===true||r===undefined&&n[i]!==false){n[i||t]=e5(e)}}const i=(e,t)=>ep.forEach(e,(e,r)=>a(e,r,t));if(ep.isPlainObject(e)||e instanceof this.constructor){i(e,t)}else if(ep.isString(e)&&(e=e.trim())&&!e3(e)){i(e1(e),t)}else if(ep.isObject(e)&&ep.isIterable(e)){let r={},n,a;for(const t of e){if(!ep.isArray(t)){throw TypeError("Object iterator must return a key-value pair")}r[a=t[0]]=(n=r[a])?ep.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(r,t)}else{e!=null&&a(t,e,r)}return this}get(e,t){e=e6(e);if(e){const r=ep.findKey(this,e);if(r){const e=this[r];if(!t){return e}if(t===true){return e4(e)}if(ep.isFunction(t)){return t.call(this,e,r)}if(ep.isRegExp(t)){return t.exec(e)}throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){e=e6(e);if(e){const r=ep.findKey(this,e);return!!(r&&this[r]!==undefined&&(!t||e7(this,this[r],r,t)))}return false}delete(e,t){const r=this;let n=false;function a(e){e=e6(e);if(e){const a=ep.findKey(r,e);if(a&&(!t||e7(r,r[a],a,t))){delete r[a];n=true}}}if(ep.isArray(e)){e.forEach(a)}else{a(e)}return n}clear(e){const t=Object.keys(this);let r=t.length;let n=false;while(r--){const a=t[r];if(!e||e7(this,this[a],a,e,true)){delete this[a];n=true}}return n}normalize(e){const t=this;const r={};ep.forEach(this,(n,a)=>{const i=ep.findKey(r,a);if(i){t[i]=e5(n);delete t[a];return}const o=e?e8(a):String(a).trim();if(o!==a){delete t[a]}t[o]=e5(n);r[o]=true});return this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);ep.forEach(this,(r,n)=>{r!=null&&r!==false&&(t[n]=e&&ep.isArray(r)?r.join(", "):r)});return t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);t.forEach(e=>r.set(e));return r}static accessor(e){const t=this[e2]=this[e2]={accessors:{}};const r=t.accessors;const n=this.prototype;function a(e){const t=e6(e);if(!r[t]){e9(n,e);r[t]=true}}ep.isArray(e)?e.forEach(a):a(e);return this}}te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);// reserved names hotfix
ep.reduceDescriptors(te.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}});ep.freezeMethods(te);/* export default */const tt=te;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/transformData.js
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */function tr(e,t){const r=this||eZ;const n=t||r;const a=tt.from(n.headers);let i=n.data;ep.forEach(e,function e(e){i=e.call(r,i,a.normalize(),t?t.status:undefined)});a.normalize();return i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/cancel/isCancel.js
function tn(e){return!!(e&&e.__CANCEL__)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/cancel/CanceledError.js
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ta(e,t,r){// eslint-disable-next-line no-eq-null,eqeqeq
ey.call(this,e==null?"canceled":e,ey.ERR_CANCELED,t,r);this.name="CanceledError"}ep.inherits(ta,ey,{__CANCEL__:true});/* export default */const ti=ta;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/settle.js
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */function to(e,t,r){const n=r.config.validateStatus;if(!r.status||!n||n(r.status)){e(r)}else{t(new ey("Request failed with status code "+r.status,[ey.ERR_BAD_REQUEST,ey.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/parseProtocol.js
function ts(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/speedometer.js
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function tu(e,t){e=e||10;const r=new Array(e);const n=new Array(e);let a=0;let i=0;let o;t=t!==undefined?t:1e3;return function s(s){const u=Date.now();const c=n[i];if(!o){o=u}r[a]=s;n[a]=u;let l=i;let f=0;while(l!==a){f+=r[l++];l=l%e}a=(a+1)%e;if(a===i){i=(i+1)%e}if(u-o<t){return}const d=c&&u-c;return d?Math.round(f*1e3/d):undefined}}/* export default */const tc=tu;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/throttle.js
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */function tl(e,t){let r=0;let n=1e3/t;let a;let i;const o=(t,n=Date.now())=>{r=n;a=null;if(i){clearTimeout(i);i=null}e(...t)};const s=(...e)=>{const t=Date.now();const s=t-r;if(s>=n){o(e,t)}else{a=e;if(!i){i=setTimeout(()=>{i=null;o(a)},n-s)}}};const u=()=>a&&o(a);return[s,u]}/* export default */const tf=tl;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/progressEventReducer.js
const td=(e,t,r=3)=>{let n=0;const a=tc(50,250);return tf(r=>{const i=r.loaded;const o=r.lengthComputable?r.total:undefined;const s=i-n;const u=a(s);const c=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:undefined,bytes:s,rate:u?u:undefined,estimated:u&&o&&c?(o-i)/u:undefined,event:r,lengthComputable:o!=null,[t?"download":"upload"]:true};e(l)},r)};const th=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]};const tp=e=>(...t)=>ep.asap(()=>e(...t));// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/isURLSameOrigin.js
/* export default */const tv=eq.hasStandardBrowserEnv?((e,t)=>r=>{r=new URL(r,eq.origin);return e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)})(new URL(eq.origin),eq.navigator&&/(msie|trident)/i.test(eq.navigator.userAgent)):()=>true;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/cookies.js
/* export default */const tm=eq.hasStandardBrowserEnv?// Standard browser envs support document.cookie
{write(e,t,r,n,a,i,o){if(typeof document==="undefined")return;const s=[`${e}=${encodeURIComponent(t)}`];if(ep.isNumber(r)){s.push(`expires=${new Date(r).toUTCString()}`)}if(ep.isString(n)){s.push(`path=${n}`)}if(ep.isString(a)){s.push(`domain=${a}`)}if(i===true){s.push("secure")}if(ep.isString(o)){s.push(`SameSite=${o}`)}document.cookie=s.join("; ")},read(e){if(typeof document==="undefined")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:// Non-standard browser env (web workers, react-native) lack needed support.
{write(){},read(){return null},remove(){}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/isAbsoluteURL.js
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */function tg(e){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/combineURLs.js
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */function ty(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/buildFullPath.js
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */function tb(e,t,r){let n=!tg(t);if(e&&(n||r==false)){return ty(e,t)}return t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/mergeConfig.js
const t_=e=>e instanceof tt?{...e}:e;/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */function tw(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};const r={};function n(e,t,r,n){if(ep.isPlainObject(e)&&ep.isPlainObject(t)){return ep.merge.call({caseless:n},e,t)}else if(ep.isPlainObject(t)){return ep.merge({},t)}else if(ep.isArray(t)){return t.slice()}return t}// eslint-disable-next-line consistent-return
function a(e,t,r,a){if(!ep.isUndefined(t)){return n(e,t,r,a)}else if(!ep.isUndefined(e)){return n(undefined,e,r,a)}}// eslint-disable-next-line consistent-return
function i(e,t){if(!ep.isUndefined(t)){return n(undefined,t)}}// eslint-disable-next-line consistent-return
function o(e,t){if(!ep.isUndefined(t)){return n(undefined,t)}else if(!ep.isUndefined(e)){return n(undefined,e)}}// eslint-disable-next-line consistent-return
function s(r,a,i){if(i in t){return n(r,a)}else if(i in e){return n(undefined,r)}}const u={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,r)=>a(t_(e),t_(t),r,true)};ep.forEach(Object.keys({...e,...t}),function n(n){const i=u[n]||a;const o=i(e[n],t[n],n);ep.isUndefined(o)&&i!==s||(r[n]=o)});return r};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/resolveConfig.js
/* export default */const tx=e=>{const t=tw({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:s}=t;t.headers=o=tt.from(o);t.url=eP(tb(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer);// HTTP basic authentication
if(s){o.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")))}if(ep.isFormData(r)){if(eq.hasStandardBrowserEnv||eq.hasStandardBrowserWebWorkerEnv){o.setContentType(undefined);// browser handles it
}else if(ep.isFunction(r.getHeaders)){// Node.js FormData (like form-data package)
const e=r.getHeaders();// Only set safe headers to avoid overwriting security headers
const t=["content-type","content-length"];Object.entries(e).forEach(([e,r])=>{if(t.includes(e.toLowerCase())){o.set(e,r)}})}}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(eq.hasStandardBrowserEnv){n&&ep.isFunction(n)&&(n=n(t));if(n||n!==false&&tv(t.url)){// Add xsrf header
const e=a&&i&&tm.read(i);if(e){o.set(a,e)}}}return t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/adapters/xhr.js
const tE=typeof XMLHttpRequest!=="undefined";/* export default */const tO=tE&&function(e){return new Promise(function t(t,r){const n=tx(e);let a=n.data;const i=tt.from(n.headers).normalize();let{responseType:o,onUploadProgress:s,onDownloadProgress:u}=n;let c;let l,f;let d,h;function p(){d&&d();// flush events
h&&h();// flush events
n.cancelToken&&n.cancelToken.unsubscribe(c);n.signal&&n.signal.removeEventListener("abort",c)}let v=new XMLHttpRequest;v.open(n.method.toUpperCase(),n.url,true);// Set the request timeout in MS
v.timeout=n.timeout;function m(){if(!v){return}// Prepare the response
const n=tt.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders());const a=!o||o==="text"||o==="json"?v.responseText:v.response;const i={data:a,status:v.status,statusText:v.statusText,headers:n,config:e,request:v};to(function e(e){t(e);p()},function e(e){r(e);p()},i);// Clean up request
v=null}if("onloadend"in v){// Use onloadend if available
v.onloadend=m}else{// Listen for ready state to emulate onloadend
v.onreadystatechange=function e(){if(!v||v.readyState!==4){return}// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
if(v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)){return}// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(m)}}// Handle browser request cancellation (as opposed to a manual cancellation)
v.onabort=function t(){if(!v){return}r(new ey("Request aborted",ey.ECONNABORTED,e,v));// Clean up request
v=null};// Handle low level network errors
v.onerror=function t(t){// Browsers deliver a ProgressEvent in XHR onerror
// (message may be empty; when present, surface it)
// See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
const n=t&&t.message?t.message:"Network Error";const a=new ey(n,ey.ERR_NETWORK,e,v);// attach the underlying event for consumers who want details
a.event=t||null;r(a);v=null};// Handle timeout
v.ontimeout=function t(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const a=n.transitional||eL;if(n.timeoutErrorMessage){t=n.timeoutErrorMessage}r(new ey(t,a.clarifyTimeoutError?ey.ETIMEDOUT:ey.ECONNABORTED,e,v));// Clean up request
v=null};// Remove Content-Type if data is undefined
a===undefined&&i.setContentType(null);// Add headers to the request
if("setRequestHeader"in v){ep.forEach(i.toJSON(),function e(e,t){v.setRequestHeader(t,e)})}// Add withCredentials to request if needed
if(!ep.isUndefined(n.withCredentials)){v.withCredentials=!!n.withCredentials}// Add responseType to request if needed
if(o&&o!=="json"){v.responseType=n.responseType}// Handle progress if needed
if(u){[f,h]=td(u,true);v.addEventListener("progress",f)}// Not all browsers support upload events
if(s&&v.upload){[l,d]=td(s);v.upload.addEventListener("progress",l);v.upload.addEventListener("loadend",d)}if(n.cancelToken||n.signal){// Handle cancellation
// eslint-disable-next-line func-names
c=t=>{if(!v){return}r(!t||t.type?new ti(null,e,v):t);v.abort();v=null};n.cancelToken&&n.cancelToken.subscribe(c);if(n.signal){n.signal.aborted?c():n.signal.addEventListener("abort",c)}}const g=ts(n.url);if(g&&eq.protocols.indexOf(g)===-1){r(new ey("Unsupported protocol "+g+":",ey.ERR_BAD_REQUEST,e));return}// Send the request
v.send(a||null)})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/composeSignals.js
const tS=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r=new AbortController;let n;const a=function(e){if(!n){n=true;o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ey?t:new ti(t instanceof Error?t.message:t))}};let i=t&&setTimeout(()=>{i=null;a(new ey(`timeout ${t} of ms exceeded`,ey.ETIMEDOUT))},t);const o=()=>{if(e){i&&clearTimeout(i);i=null;e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)});e=null}};e.forEach(e=>e.addEventListener("abort",a));const{signal:s}=r;s.unsubscribe=()=>ep.asap(o);return s}};/* export default */const tA=tS;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/trackStream.js
const tT=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0;let a;while(n<r){a=n+t;yield e.slice(n,a);n=a}};const tR=async function*(e,t){for await(const r of tk(e)){yield*tT(r,t)}};const tk=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e){break}yield r}}finally{await t.cancel()}};const tC=(e,t,r,n)=>{const a=tR(e,t);let i=0;let o;let s=e=>{if(!o){o=true;n&&n(e)}};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await a.next();if(t){s();e.close();return}let o=n.byteLength;if(r){let e=i+=o;r(e)}e.enqueue(new Uint8Array(n))}catch(e){s(e);throw e}},cancel(e){s(e);return a.return()}},{highWaterMark:2})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/adapters/fetch.js
const tI=64*1024;const{isFunction:tP}=ep;const tD=(({Request:e,Response:t})=>({Request:e,Response:t}))(ep.global);const{ReadableStream:tM,TextEncoder:tL}=ep.global;const tF=(e,...t)=>{try{return!!e(...t)}catch(e){return false}};const tN=e=>{e=ep.merge.call({skipUndefined:true},tD,e);const{fetch:t,Request:r,Response:n}=e;const a=t?tP(t):typeof fetch==="function";const i=tP(r);const o=tP(n);if(!a){return false}const s=a&&tP(tM);const u=a&&(typeof tL==="function"?(e=>t=>e.encode(t))(new tL):async e=>new Uint8Array(await new r(e).arrayBuffer()));const c=i&&s&&tF(()=>{let e=false;const t=new r(eq.origin,{body:new tM,method:"POST",get duplex(){e=true;return"half"}}).headers.has("Content-Type");return e&&!t});const l=o&&s&&tF(()=>ep.isReadableStream(new n("").body));const f={stream:l&&(e=>e.body)};a&&(()=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!f[e]&&(f[e]=(t,r)=>{let n=t&&t[e];if(n){return n.call(t)}throw new ey(`Response type '${e}' is not supported`,ey.ERR_NOT_SUPPORT,r)})})})();const d=async e=>{if(e==null){return 0}if(ep.isBlob(e)){return e.size}if(ep.isSpecCompliantForm(e)){const t=new r(eq.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}if(ep.isArrayBufferView(e)||ep.isArrayBuffer(e)){return e.byteLength}if(ep.isURLSearchParams(e)){e=e+""}if(ep.isString(e)){return(await u(e)).byteLength}};const h=async(e,t)=>{const r=ep.toFiniteNumber(e.getContentLength());return r==null?d(t):r};return async e=>{let{url:a,method:o,data:s,signal:u,cancelToken:d,timeout:p,onDownloadProgress:v,onUploadProgress:m,responseType:g,headers:y,withCredentials:b="same-origin",fetchOptions:_}=tx(e);let w=t||fetch;g=g?(g+"").toLowerCase():"text";let x=tA([u,d&&d.toAbortSignal()],p);let E=null;const O=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let S;try{if(m&&c&&o!=="get"&&o!=="head"&&(S=await h(y,s))!==0){let e=new r(a,{method:"POST",body:s,duplex:"half"});let t;if(ep.isFormData(s)&&(t=e.headers.get("content-type"))){y.setContentType(t)}if(e.body){const[t,r]=th(S,td(tp(m)));s=tC(e.body,tI,t,r)}}if(!ep.isString(b)){b=b?"include":"omit"}// Cloudflare Workers throws when credentials are defined
// see https://github.com/cloudflare/workerd/issues/902
const t=i&&"credentials"in r.prototype;const u={..._,signal:x,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:s,duplex:"half",credentials:t?b:undefined};E=i&&new r(a,u);let d=await (i?w(E,_):w(a,u));const p=l&&(g==="stream"||g==="response");if(l&&(v||p&&O)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=d[t]});const t=ep.toFiniteNumber(d.headers.get("content-length"));const[r,a]=v&&th(t,td(tp(v),true))||[];d=new n(tC(d.body,tI,r,()=>{a&&a();O&&O()}),e)}g=g||"text";let A=await f[ep.findKey(f,g)||"text"](d,e);!p&&O&&O();return await new Promise((t,r)=>{to(t,r,{data:A,headers:tt.from(d.headers),status:d.status,statusText:d.statusText,config:e,request:E})})}catch(t){O&&O();if(t&&t.name==="TypeError"&&/Load failed|fetch/i.test(t.message)){throw Object.assign(new ey("Network Error",ey.ERR_NETWORK,e,E),{cause:t.cause||t})}throw ey.from(t,t&&t.code,e,E)}}};const tj=new Map;const tU=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:a}=t;const i=[n,a,r];let o=i.length,s=o,u,c,l=tj;while(s--){u=i[s];c=l.get(u);c===undefined&&l.set(u,c=s?new Map:tN(t));l=c}return c};const tH=tU();/* export default */const tB=/* unused pure expression or super */null&&tH;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/adapters/adapters.js
/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 * 
 * @type {Object<string, Function|Object>}
 */const tY={http:eb,xhr:tO,fetch:{get:tU}};// Assign adapter names for easier debugging and identification
ep.forEach(tY,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});/**
 * Render a rejection reason string for unknown or unsupported adapters
 * 
 * @param {string} reason
 * @returns {string}
 */const tz=e=>`- ${e}`;/**
 * Check if the adapter is resolved (function, null, or false)
 * 
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */const tV=e=>ep.isFunction(e)||e===null||e===false;/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 * 
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */function tq(e,t){e=ep.isArray(e)?e:[e];const{length:r}=e;let n;let a;const i={};for(let o=0;o<r;o++){n=e[o];let r;a=n;if(!tV(n)){a=tY[(r=String(n)).toLowerCase()];if(a===undefined){throw new ey(`Unknown adapter '${r}'`)}}if(a&&(ep.isFunction(a)||(a=a.get(t)))){break}i[r||"#"+o]=a}if(!a){const e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(t===false?"is not supported by the environment":"is not available in the build"));let t=r?e.length>1?"since :\n"+e.map(tz).join("\n"):" "+tz(e[0]):"as no adapter specified";throw new ey(`There is no suitable adapter to dispatch the request `+t,"ERR_NOT_SUPPORT")}return a}/**
 * Exports Axios adapters and utility to resolve an adapter
 *//* export default */const tW={/**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */getAdapter:tq,/**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */adapters:tY};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/dispatchRequest.js
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function t$(e){if(e.cancelToken){e.cancelToken.throwIfRequested()}if(e.signal&&e.signal.aborted){throw new ti(null,e)}}/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */function tG(e){t$(e);e.headers=tt.from(e.headers);// Transform request data
e.data=tr.call(e,e.transformRequest);if(["post","put","patch"].indexOf(e.method)!==-1){e.headers.setContentType("application/x-www-form-urlencoded",false)}const t=tW.getAdapter(e.adapter||eZ.adapter,e);return t(e).then(function t(t){t$(e);// Transform response data
t.data=tr.call(e,e.transformResponse,t);t.headers=tt.from(t.headers);return t},function t(t){if(!tn(t)){t$(e);// Transform response data
if(t&&t.response){t.response.data=tr.call(e,e.transformResponse,t.response);t.response.headers=tt.from(t.response.headers)}}return Promise.reject(t)})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/env/data.js
const tK="1.13.2";// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/validator.js
const tQ={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tQ[e]=function r(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tX={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */tQ.transitional=function e(e,t,r){function n(e,t){return"[Axios v"+tK+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,a,i)=>{if(e===false){throw new ey(n(a," has been removed"+(t?" in "+t:"")),ey.ERR_DEPRECATED)}if(t&&!tX[a]){tX[a]=true;// eslint-disable-next-line no-console
console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))}return e?e(r,a,i):true}};tQ.spelling=function e(e){return(t,r)=>{// eslint-disable-next-line no-console
console.warn(`${r} is likely a misspelling of ${e}`);return true}};/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function tJ(e,t,r){if(typeof e!=="object"){throw new ey("options must be an object",ey.ERR_BAD_OPTION_VALUE)}const n=Object.keys(e);let a=n.length;while(a-- >0){const i=n[a];const o=t[i];if(o){const t=e[i];const r=t===undefined||o(t,i,e);if(r!==true){throw new ey("option "+i+" must be "+r,ey.ERR_BAD_OPTION_VALUE)}continue}if(r!==true){throw new ey("Unknown option "+i,ey.ERR_BAD_OPTION)}}}/* export default */const tZ={assertOptions:tJ,validators:tQ};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/core/Axios.js
const t0=tZ.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class t1{constructor(e){this.defaults=e||{};this.interceptors={request:new eM,response:new eM}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;// slice off the Error: ... line
const r=t.stack?t.stack.replace(/^.+\n/,""):"";try{if(!e.stack){e.stack=r;// match without the 2 top stack lines
}else if(r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))){e.stack+="\n"+r}}catch(e){// ignore the case where "stack" is an un-writable property
}}throw e}}_request(e,t){/*eslint no-param-reassign:0*/// Allow for axios('example/url'[, config]) a la fetch API
if(typeof e==="string"){t=t||{};t.url=e}else{t=e||{}}t=tw(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:a}=t;if(r!==undefined){tZ.assertOptions(r,{silentJSONParsing:t0.transitional(t0.boolean),forcedJSONParsing:t0.transitional(t0.boolean),clarifyTimeoutError:t0.transitional(t0.boolean)},false)}if(n!=null){if(ep.isFunction(n)){t.paramsSerializer={serialize:n}}else{tZ.assertOptions(n,{encode:t0.function,serialize:t0.function},true)}}// Set config.allowAbsoluteUrls
if(t.allowAbsoluteUrls!==undefined){// do nothing
}else if(this.defaults.allowAbsoluteUrls!==undefined){t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls}else{t.allowAbsoluteUrls=true}tZ.assertOptions(t,{baseUrl:t0.spelling("baseURL"),withXsrfToken:t0.spelling("withXSRFToken")},true);// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let i=a&&ep.merge(a.common,a[t.method]);a&&ep.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]});t.headers=tt.concat(i,a);// filter out skipped interceptors
const o=[];let s=true;this.interceptors.request.forEach(function e(e){if(typeof e.runWhen==="function"&&e.runWhen(t)===false){return}s=s&&e.synchronous;o.unshift(e.fulfilled,e.rejected)});const u=[];this.interceptors.response.forEach(function e(e){u.push(e.fulfilled,e.rejected)});let c;let l=0;let f;if(!s){const e=[tG.bind(this),undefined];e.unshift(...o);e.push(...u);f=e.length;c=Promise.resolve(t);while(l<f){c=c.then(e[l++],e[l++])}return c}f=o.length;let d=t;while(l<f){const e=o[l++];const t=o[l++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=tG.call(this,d)}catch(e){return Promise.reject(e)}l=0;f=u.length;while(l<f){c=c.then(u[l++],u[l++])}return c}getUri(e){e=tw(this.defaults,e);const t=tb(e.baseURL,e.url,e.allowAbsoluteUrls);return eP(t,e.params,e.paramsSerializer)}}// Provide aliases for supported request methods
ep.forEach(["delete","get","head","options"],function e(e){/*eslint func-names:0*/t1.prototype[e]=function(t,r){return this.request(tw(r||{},{method:e,url:t,data:(r||{}).data}))}});ep.forEach(["post","put","patch"],function e(e){/*eslint func-names:0*/function t(t){return function r(r,n,a){return this.request(tw(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}t1.prototype[e]=t();t1.prototype[e+"Form"]=t(true)});/* export default */const t2=t1;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/cancel/CancelToken.js
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class t6{constructor(e){if(typeof e!=="function"){throw new TypeError("executor must be a function.")}let t;this.promise=new Promise(function e(e){t=e});const r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;while(t-- >0){r._listeners[t](e)}r._listeners=null});// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
const n=new Promise(e=>{r.subscribe(e);t=e}).then(e);n.cancel=function e(){r.unsubscribe(t)};return n};e(function e(e,n,a){if(r.reason){// Cancellation has already been requested
return}r.reason=new ti(e,n,a);t(r.reason)})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason){throw this.reason}}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}if(this._listeners){this._listeners.push(e)}else{this._listeners=[e]}}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners){return}const t=this._listeners.indexOf(e);if(t!==-1){this._listeners.splice(t,1)}}toAbortSignal(){const e=new AbortController;const t=t=>{e.abort(t)};this.subscribe(t);e.signal.unsubscribe=()=>this.unsubscribe(t);return e.signal}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;const t=new t6(function t(t){e=t});return{token:t,cancel:e}}}/* export default */const t5=t6;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/spread.js
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */function t4(e){return function t(t){return e.apply(null,t)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/isAxiosError.js
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */function t3(e){return ep.isObject(e)&&e.isAxiosError===true};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/helpers/HttpStatusCode.js
const t7={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(t7).forEach(([e,t])=>{t7[t]=e});/* export default */const t8=t7;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/axios@1.13.2/node_modules/axios/lib/axios.js
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t9(e){const t=new t2(e);const r=o(t2.prototype.request,t);// Copy axios.prototype to instance
ep.extend(r,t2.prototype,t,{allOwnKeys:true});// Copy context to instance
ep.extend(r,t,null,{allOwnKeys:true});// Factory for creating new instances
r.create=function t(t){return t9(tw(e,t))};return r}// Create the default instance to be exported
const re=t9(eZ);// Expose Axios class to allow class inheritance
re.Axios=t2;// Expose Cancel & CancelToken
re.CanceledError=ti;re.CancelToken=t5;re.isCancel=tn;re.VERSION=tK;re.toFormData=eA;// Expose AxiosError class
re.AxiosError=ey;// alias for CanceledError for backward compatibility
re.Cancel=re.CanceledError;// Expose all/spread
re.all=function e(e){return Promise.all(e)};re.spread=t4;// Expose isAxiosError
re.isAxiosError=t3;// Expose mergeConfig
re.mergeConfig=tw;re.AxiosHeaders=tt;re.formToJSON=e=>eQ(ep.isHTMLForm(e)?new FormData(e):e);re.getAdapter=tW.getAdapter;re.HttpStatusCode=t8;re.default=re;// this module should only have a default export
/* export default */const rt=re;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/querystring@0.2.1/node_modules/querystring/index.js
var rr=r(9919);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var rn=r(4336);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/types.ts
var ra=r(8638);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/form.ts
var ri=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.keys(e).reduce((r,n)=>{var a=e[n];if(typeof a==="object"&&!isPrimitivesArray(a)&&!isFileOrBlob(a)){return _object_spread({},r,ri(_object_spread({},a),"".concat(t).concat(n,".")))}return _object_spread_props(_object_spread({},r),{["".concat(t).concat(n)]:a})},{})};var ro=(e,t)=>{var r=e;if(r.status===404||r.status===403||r.status===500){return{nonFieldErrors:["Unexpected error!"]}}var n=ri(t);var a=ri(r.data);var{non_field_errors:i}=a,o=_object_without_properties(a,["non_field_errors"]);var s=isStringArray(i)?i:[];for(var u of Object.keys(o)){if(!(u in n)){var c=a[u];if(isStringArray(c)){s.push(...c)}}}return{nonFieldErrors:s.map(translateBeErrorMessage),fieldErrors:Object.keys(a).filter(e=>e in n).reduce((e,t)=>{var r=a[t];if(isStringArray(r)){return _object_spread_props(_object_spread({},e),{[t]:r.map(translateBeErrorMessage)})}return e},{})}};var rs=(e,t,r)=>{if(!isAxiosError(e)||!e.response){throw e}var{fieldErrors:n,nonFieldErrors:a}=ro(e.response,r);if(a===null||a===void 0?void 0:a.length){t.setSubmitError(a[0])}if(n){for(var i of Object.keys(n)){var o=n[i];if(o.length>0){t.setError(i,{message:o[0]})}}}};var ru=(e,t)=>{return r=>_async_to_generator(function*(){e.setSubmitError(undefined);try{yield t(r)}catch(t){rs(t,e,r)}})()};var rc=(e,t)=>{var r=function(t){var r=e[t];if(Array.isArray(r)){r.forEach((e,r)=>{if((0,ra/* .isFileOrBlob */.$X)(e)||(0,ra/* .isString */.Kg)(e)){n.append("".concat(t,"[").concat(r,"]"),e)}else if((0,ra/* .isBoolean */.Lm)(e)||(0,ra/* .isNumber */.Et)(e)){n.append("".concat(t,"[").concat(r,"]"),e.toString())}else if(typeof e==="object"&&e!==null){n.append("".concat(t,"[").concat(r,"]"),JSON.stringify(e))}else{n.append("".concat(t,"[").concat(r,"]"),e)}})}else{if((0,ra/* .isFileOrBlob */.$X)(r)||(0,ra/* .isString */.Kg)(r)){n.append(t,r)}else if((0,ra/* .isBoolean */.Lm)(r)){n.append(t,r.toString())}else if((0,ra/* .isNumber */.Et)(r)){n.append(t,"".concat(r))}else if(typeof r==="object"&&r!==null){n.append(t,JSON.stringify(r))}else{n.append(t,r)}}};var n=new FormData;for(var a of Object.keys(e))r(a);n.append("_method",t.toUpperCase());return n};var rl=e=>{var t={};for(var r in e){var n=e[r];if(!(0,ra/* .isDefined */.O9)(n)){t[r]="null"}else if((0,ra/* .isBoolean */.Lm)(n)){t[r]=n===true?"true":"false"}else{t[r]=n}}return t};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/api.ts
rt.defaults.paramsSerializer=e=>{return rr.stringify(e)};var rf=rt.create({baseURL:rn/* ["default"].WP_API_BASE_URL */.A.WP_API_BASE_URL});rf.interceptors.request.use(e=>{var t;(t=e).headers||(t.headers={});e.headers["X-WP-Nonce"]=rn/* .tutorConfig.wp_rest_nonce */.P.wp_rest_nonce;if(e.method&&["post","put","patch"].includes(e.method.toLocaleLowerCase())){if(e.data){e.data=rc(e.data,e.method)}if(["put","patch"].includes(e.method.toLowerCase())){e.method="POST"}}if(e.params){e.params=rl(e.params)}if(e.method&&["get","delete"].includes(e.method.toLowerCase())){e.params=(0,i._)((0,a._)({},e.params),{_method:e.method})}return e},e=>{return Promise.reject(e)});rf.interceptors.response.use(e=>{return Promise.resolve(e).then(e=>e)});var rd=rt.create({baseURL:rn/* ["default"].WP_AJAX_BASE_URL */.A.WP_AJAX_BASE_URL});rd.interceptors.request.use(e=>{var t,r;(t=e).headers||(t.headers={});// config.headers['X-WP-Nonce'] = tutorConfig._tutor_nonce;
// We will use REST methods while using but wp ajax only sent via post method.
e.method="POST";if(e.params){e.params=rl(e.params)}(r=e).data||(r.data={});var n=rn/* .tutorConfig.nonce_key */.P.nonce_key;var o=rn/* .tutorConfig._tutor_nonce */.P._tutor_nonce;e.data=(0,i._)((0,a._)({},e.data,e.params),{action:e.url,[n]:o});e.data=rc(e.data,e.method);e.params={};e.url=undefined;return e},e=>Promise.reject(e));rd.interceptors.response.use(e=>Promise.resolve(e).then(e=>e.data))},7367:function(e,t,r){"use strict";r.d(t,{s:()=>i});/* import */var n=r(8638);/* import */var a=r(2927);var i=(e,t)=>{return r=>{var{variants:i,defaultVariants:o}=e;var s=[];if((0,n/* .isDefined */.O9)(t)){s.push(t)}var u=(0,a/* .getObjectKeys */.Co)(i).map(e=>{var t=r[e];var n=o[e];if(t===null){return null}var a=t||n;return i[e][a]});s.push(...u.filter(n/* .isDefined */.O9));return s}}},4958:function(e,t,r){"use strict";r.d(t,{v:()=>l,x:()=>f});/* import */var n=r(690);/* import */var a=r(5757);/* import */var i=r(7764);/* import */var o=r(983);function s(){var e=(0,n._)(["\n      flex-direction: column;\n    "]);s=function t(){return e};return e}function u(){var e=(0,n._)(["\n      background-color: ",";\n    "]);u=function t(){return e};return e}function c(){var e=(0,n._)(["\n      cursor: grabbing;\n    "]);c=function t(){return e};return e}var l=()=>/*#__PURE__*/(0,a/* .css */.AH)("body.tutor-backend-tutor-content-bank{@media screen and (max-width:600px){#wpadminbar{position:fixed;}}}*,::after,::before{box-sizing:border-box;}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;font-family:",i/* .fontFamily.inter */.mw.inter,";height:100%;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;&:hover{color:inherit;}}li{list-style:none;margin:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;height:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}:is(h1,h2,h3,h4,h5,h6,p){padding:0;margin:0;text-transform:unset;}table{th{text-align:-webkit-match-parent;}}");var f={centeredFlex:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:center;align-items:center;width:100%;height:100%;"),flexCenter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"row";return/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:center;align-items:center;flex-direction:row;",e==="column"&&(0,a/* .css */.AH)(s()))},boxReset:/*#__PURE__*/(0,a/* .css */.AH)("padding:0;"),ulReset:/*#__PURE__*/(0,a/* .css */.AH)("list-style:none;padding:0;margin:0;"),resetButton:/*#__PURE__*/(0,a/* .css */.AH)("background:none;border:none;outline:none;box-shadow:none;padding:0;margin:0;text-align:inherit;font-family:",i/* .fontFamily.inter */.mw.inter,";cursor:pointer;"),cardInnerSection:/*#__PURE__*/(0,a/* .css */.AH)("padding:",i/* .spacing["20"] */.YK["20"]," ",i/* .spacing["20"] */.YK["20"]," ",i/* .spacing["24"] */.YK["24"]," ",i/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",i/* .spacing["24"] */.YK["24"],";"),fieldGroups:e=>/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;gap:",i/* .spacing */.YK[e],";"),titleAliasWrapper:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;gap:",i/* .spacing["12"] */.YK["12"],";"),inlineSwitch:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;"),overflowYAuto:/*#__PURE__*/(0,a/* .css */.AH)("overflow-y:auto;scrollbar-gutter:stable;::-webkit-scrollbar{background-color:",i/* .colorTokens.primary["40"] */.I6.primary["40"],";width:3px;}::-webkit-scrollbar-thumb{background-color:",i/* .colorTokens.design.brand */.I6.design.brand,";border-radius:",i/* .borderRadius["30"] */.Vq["30"],";}"),overflowXAuto:/*#__PURE__*/(0,a/* .css */.AH)("overflow-x:auto;scrollbar-gutter:stable;::-webkit-scrollbar{background-color:",i/* .colorTokens.primary["40"] */.I6.primary["40"],";height:3px;}::-webkit-scrollbar-thumb{background-color:",i/* .colorTokens.design.brand */.I6.design.brand,";border-radius:",i/* .borderRadius["30"] */.Vq["30"],";}"),textEllipsis:/*#__PURE__*/(0,a/* .css */.AH)("text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"),container:/*#__PURE__*/(0,a/* .css */.AH)("width:",i/* .containerMaxWidth */.iL,"px;margin:0 auto;"),display:{flex:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"row";return/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:",e,";")},inlineFlex:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"row";return/*#__PURE__*/(0,a/* .css */.AH)("display:inline-flex;flex-direction:",e,";")},none:/*#__PURE__*/(0,a/* .css */.AH)("display:none;"),block:/*#__PURE__*/(0,a/* .css */.AH)("display:block;"),inlineBlock:/*#__PURE__*/(0,a/* .css */.AH)("display:inline-block;")},text:{ellipsis:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return/*#__PURE__*/(0,a/* .css */.AH)("white-space:normal;display:-webkit-box;-webkit-line-clamp:",e,";-webkit-box-orient:vertical;overflow:hidden;-webkit-box-pack:end;")},align:{center:/*#__PURE__*/(0,a/* .css */.AH)("text-align:center;"),left:/*#__PURE__*/(0,a/* .css */.AH)("text-align:left;"),right:/*#__PURE__*/(0,a/* .css */.AH)("text-align:right;"),justify:/*#__PURE__*/(0,a/* .css */.AH)("text-align:justify;")}},inputFocus:/*#__PURE__*/(0,a/* .css */.AH)("box-shadow:none;border-color:",i/* .colorTokens.stroke["default"] */.I6.stroke["default"],";outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;"),dateAndTimeWrapper:/*#__PURE__*/(0,a/* .css */.AH)("display:grid;grid-template-columns:5.5fr 4.5fr;border-radius:",i/* .borderRadius["6"] */.Vq["6"],";position:relative;&::before{content:'';position:absolute;top:0;left:0;right:0;height:40px;outline:2px solid transparent;outline-offset:1px;border-radius:",i/* .borderRadius["6"] */.Vq["6"],";pointer-events:none;z-index:1;transition:outline-color 0.2s ease-in-out;}&:focus-within::before{outline-color:",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";}> div{&:first-of-type{input{border-top-right-radius:0;border-bottom-right-radius:0;&:focus{box-shadow:none;outline:none;}}}&:last-of-type{input{border-top-left-radius:0;border-bottom-left-radius:0;border-left:none;&:focus{box-shadow:none;outline:none;}}}}"),inputCurrencyStyle:/*#__PURE__*/(0,a/* .css */.AH)("font-size:",i/* .fontSize["18"] */.J["18"],";color:",i/* .colorTokens.icon.subdued */.I6.icon.subdued,";"),crossButton:/*#__PURE__*/(0,a/* .css */.AH)("border:none;outline:none;padding:0;margin:0;text-align:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",i/* .borderRadius.circle */.Vq.circle,";background:",i/* .colorTokens.background.white */.I6.background.white,";transition:opacity 0.3s ease-in-out;svg{color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",i/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",i/* .shadow.focus */.r7.focus,";}"),aiGradientText:/*#__PURE__*/(0,a/* .css */.AH)("background:",i/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;"),actionButton:/*#__PURE__*/(0,a/* .css */.AH)("background:none;border:none;outline:none;padding:0;margin:0;text-align:inherit;color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;cursor:pointer;transition:color 0.3s ease-in-out;:hover:not(:disabled),:focus:not(:disabled),:active:not(:disabled){background:none;color:",i/* .colorTokens.icon.brand */.I6.icon.brand,";}:disabled{color:",i/* .colorTokens.icon.disable.background */.I6.icon.disable.background,";cursor:not-allowed;}:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;border-radius:",i/* .borderRadius["2"] */.Vq["2"],";}"),backButton:/*#__PURE__*/(0,a/* .css */.AH)("background-color:transparent;width:32px;height:32px;padding:0;margin:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;border:1px solid ",i/* .colorTokens.border.neutral */.I6.border.neutral,";border-radius:",i/* .borderRadius["4"] */.Vq["4"],";outline:none;color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;cursor:pointer;:hover{color:",i/* .colorTokens.icon.hover */.I6.icon.hover,";}&:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),optionCheckButton:/*#__PURE__*/(0,a/* .css */.AH)("background:none;border:none;outline:none;padding:0;margin:0;text-align:inherit;font-family:",i/* .fontFamily.inter */.mw.inter,";cursor:pointer;height:32px;width:32px;border-radius:",i/* .borderRadius.circle */.Vq.circle,";opacity:0;:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),optionCounter:e=>{var{isEditing:t,isSelected:r=false}=e;return/*#__PURE__*/(0,a/* .css */.AH)("height:",i/* .spacing["24"] */.YK["24"],";width:",i/* .spacing["24"] */.YK["24"],";border-radius:",i/* .borderRadius.min */.Vq.min,";",o/* .typography.caption */.I.caption("medium"),";color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";background-color:",i/* .colorTokens.background["default"] */.I6.background["default"],";text-align:center;",r&&!t&&(0,a/* .css */.AH)(u(),i/* .colorTokens.bg.white */.I6.bg.white))},optionDragButton:e=>{var{isOverlay:t}=e;return/*#__PURE__*/(0,a/* .css */.AH)("background:none;border:none;outline:none;padding:0;margin:0;text-align:inherit;font-family:",i/* .fontFamily.inter */.mw.inter,";cursor:grab;display:flex;align-items:center;justify-content:center;transform:rotate(90deg);color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";cursor:grab;place-self:center center;border-radius:",i/* .borderRadius["2"] */.Vq["2"],";&:focus,&:active,&:hover{background:none;color:",i/* .colorTokens.icon["default"] */.I6.icon["default"],";}:focus-visible{outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,a/* .css */.AH)(c()))},optionInputWrapper:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;width:100%;gap:",i/* .spacing["12"] */.YK["12"],";input,textarea{background:none;border:none;outline:none;padding:0;margin:0;text-align:inherit;font-family:",i/* .fontFamily.inter */.mw.inter,";",o/* .typography.caption */.I.caption(),";flex:1;color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";padding:",i/* .spacing["4"] */.YK["4"]," ",i/* .spacing["10"] */.YK["10"],";border:1px solid ",i/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",i/* .borderRadius["6"] */.Vq["6"],";resize:vertical;cursor:text;&:focus{box-shadow:none;border-color:",i/* .colorTokens.stroke["default"] */.I6.stroke["default"],";outline:2px solid ",i/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}"),objectFit:function(){var{fit:e,position:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{fit:"cover",position:"center"};return/*#__PURE__*/(0,a/* .css */.AH)("object-fit:",e,";object-position:",t,";")},inputClearButton:/*#__PURE__*/(0,a/* .css */.AH)("position:absolute;top:50%;right:",i/* .spacing["4"] */.YK["4"],";transform:translateY(-50%);background-color:",i/* .colorTokens.background.white */.I6.background.white,";border-radius:",i/* .borderRadius["2"] */.Vq["2"],";&:not(:disabled):not([aria-disabled='true']):hover,&:not(:disabled):not([aria-disabled='true']):focus{background-color:",i/* .colorTokens.background.hover */.I6.background.hover,";}")}},8638:function(e,t,r){"use strict";r.d(t,{$X:()=>d,Et:()=>c,Gv:()=>f,Kg:()=>o,Lm:()=>l,O9:()=>i});var n=(e,t)=>{return t in e};var a=e=>{return e.isAxiosError};var i=e=>{return e!==undefined&&e!==null};function o(e){return typeof e==="string"||e instanceof String}function s(e){return!!e&&Array.isArray(e)&&(!e.length||typeof e[0]!=="object")}function u(e){return s(e)&&(!e.length||typeof e[0]==="string"||e[0]instanceof String)}function c(e){return typeof e==="number"||e instanceof Number}function l(e){return typeof e==="boolean"||e instanceof Boolean}function f(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}var d=e=>{return e instanceof Blob||e instanceof File};var h=/* unused pure expression or super */null&&{NEW:"new",UPDATE:"update",NO_CHANGE:"no_change"}},2927:function(e,t,r){"use strict";// EXPORTS
r.d(t,{dn:()=>/* binding */J,lQ:()=>/* binding */E,Ak:()=>/* binding */R,y1:()=>/* binding */O,qz:()=>/* binding */eo,g1:()=>/* binding */Z,q9:()=>/* binding */ea,TW:()=>/* binding */V,ww:()=>/* binding */M,EL:()=>/* binding */er,tw:()=>/* binding */I,G0:()=>/* binding */N,GR:()=>/* binding */ei,Co:()=>/* binding */G,oj:()=>/* binding */L,lW:()=>/* binding */et,jT:()=>/* binding */eu});// UNUSED EXPORTS: covertSecondsToHMS, getFileExtensionFromName, formatSeconds, findSlotFields, wait, getObjectEntries, assertIsDefined, arrayIntersect, fetchImageUrlAsBase64, getValueInArray, getObjectValues, extractIdOnly, formatBytes, makeFirstCharacterUpperCase, mapInBetween, generateCouponCode, throttle, isFileOrBlob, normalizeLineEndings, formatSubscriptionRepeatUnit, jsonParse, objectToQueryParams, transformParams, formatReadAbleBytesToBytes, hasDuplicateEntries, arrayRange
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var n=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(1303);// EXTERNAL MODULE: external "wp.i18n"
var i=r(2470);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMinutes.js
var o=r(9872);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 6 modules
var s=r(8956);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
const u=typeof crypto!=="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);/* export default */const c={randomUUID:u};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let l;const f=new Uint8Array(16);function d(){// lazy load so that environments that need to polyfill have a chance to do so
if(!l){// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
l=typeof crypto!=="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto);if(!l){throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")}}return l(f)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */const h=[];for(let e=0;e<256;++e){h.push((e+256).toString(16).slice(1))}function p(e,t=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]}function v(e,t=0){const r=p(e,t);// Consistency check for valid UUID.  If this throws, it's likely due to one
// of the following:
// - One or more input array values don't map to a hex octet (leading to
// "undefined" in the uuid)
// - Invalid input values for the RFC `version` or `variant` fields
if(!validate(r)){throw TypeError("Stringified UUID is invalid")}return r}/* export default */const m=/* unused pure expression or super */null&&v;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function g(e,t,r){if(c.randomUUID&&!t&&!e){return c.randomUUID()}e=e||{};const n=e.random||(e.rng||d)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
n[6]=n[6]&15|64;n[8]=n[8]&63|128;// Copy bytes to buffer, if provided
if(t){r=r||0;for(let e=0;e<16;++e){t[r+e]=n[e]}return t}return p(n)}/* export default */const y=g;// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var b=r(4336);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/constants.ts
var _=r(7461);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/types.ts
var w=r(8638);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/util.ts
function x(e,t){if(e===undefined||e===null){throw new Error(t)}}var E=()=>{};var O=e=>Array.from(Array(e).keys());var S=(e,t)=>Array.from({length:t-e},(t,r)=>r+e);var A=e=>{return e instanceof Blob||e instanceof File};var T=e=>{return Array.isArray(e)?e:e?[e]:[]};// Generate unique id
var R=()=>y();// Generate coupon code
var k=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;var t=e;var r="MSOP0123456789ABCDEFGHNRVUKYTJLZXIW";var n="";while(t--){n+=r[Math.random()*35|0]}return n};// Useful for mock api call
var C=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return new Promise(t=>setTimeout(t,e))};/**
 * Move one array item from one index to another index
 * (don't change the original array) instead return a new one.
 *
 * @param arr Array
 * @param fromIndex Number
 * @param toIndex Number
 * @returns new Array
 */var I=(e,t,r)=>{var n=[...e];var a=t;var i=r;if(t<0){a=e.length+t}if(t>=0&&t<e.length){if(r<0){i=e.length+r}var[o]=n.splice(a,1);if(o){n.splice(i,0,o)}}return n};var P=e=>{var t=e.split(".");var r=t.pop();return r?".".concat(r):""};var D=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:true;var n={};for(var a of e){var i,o;var s=t(a);s=r?s:s.toString().toLowerCase();(i=n)[o=s]||(i[o]=0);n[s]++;var u=n[s];if(u&&u>1){return true}}return false};var M=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:new Set;var i=new Set(e.map(e=>e.id));var o=e.filter(e=>{if(r.has(e.id)){return false}if(t===0){return e.parent===0||!i.has(e.parent)}return e.parent===t});return o.reduce((t,i)=>{r.add(i.id);var o=M(e,i.id,r);return[...t,(0,a._)((0,n._)({},i),{children:o})]},[])};var L=(e,t)=>{var r="0";if(!e){r="100%"}else if(e&&t>0){if(t>1){r="".concat(23+32*(t-1),"px")}else{r="23px"}}return r};var F=e=>{var t,r;var n=((t=e.sort)===null||t===void 0?void 0:t.direction)==="desc"?"-":"";return _object_spread({limit:e.limit,offset:e.offset,sort:((r=e.sort)===null||r===void 0?void 0:r.property)&&"".concat(n).concat(e.sort.property)},e.filter)};var N=(e,t)=>Math.floor(Math.random()*(t-e))+e;var j=(e,t,r,n,a)=>{return(e-t)*(a-n)/(r-t)+n};var U=e=>{return e.map(e=>e.id)};var H=(e,t)=>{var r=new Set(e);var n=new Set(t);var a=[];for(var i of r){if(n.has(i)){a.push(i)}}return a};var B=e=>{if(!e)return e;var t=e.charAt(0).toUpperCase();var r=e.slice(1);return"".concat(t).concat(r)};var Y=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;if(!e||e<=1){return __("0 Bytes","tutor-pro")}var r=1024;var n=Math.max(0,t);var a=[__("Bytes","tutor-pro"),__("KB","tutor-pro"),__("MB","tutor-pro"),__("GB","tutor-pro"),__("TB","tutor-pro"),__("PB","tutor-pro"),__("EB","tutor-pro"),__("ZB","tutor-pro"),__("YB","tutor-pro")];var i=Math.floor(Math.log(e)/Math.log(r));return"".concat(Number.parseFloat((e/r**i).toFixed(n))," ").concat(a[i])};var z=e=>{if(!e||typeof e!=="string"){return 0}var[t,r]=e.split(" ");var n=parseFloat(t);var a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"];var i=a.indexOf(r);if(i===-1){return 0}return n*1024**i};var V=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:false,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:false;return e.replace(r?t?/[^0-9-]/g:/[^0-9]/g:t?/[^0-9.-]/g:/[^0-9.]/g,"").replace(/(?!^)-/g,"").replace(r?/\./g:/(\..*)\./g,"$1")};var q=(e,t)=>{var r=false;return function n(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++){a[i]=arguments[i]}if(!r){e.apply(this,a);r=true;setTimeout(()=>{r=false},t)}}};var W=e=>{return JSON.parse(e)};var $=e=>{var t=Math.floor(e/3600).toString().padStart(2,"0");var r=Math.floor(e%3600/60).toString().padStart(2,"0");var n=Math.floor(e%60);if(t==="00"){return"".concat(r,":").concat(n," mins")}return"".concat(t,":").concat(r,":").concat(n," hrs")};var G=e=>{if(!(0,w/* .isDefined */.O9)(e)||!(0,w/* .isObject */.Gv)(e)){return[]}return Object.keys(e)};var K=e=>{return Object.values(e)};var Q=e=>{return Object.entries(e)};function X(e){var t=new URLSearchParams;for(var r in e){if(r in e){t.append(r,e[r])}}return t.toString()}var J=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H;var r=e.getTimezoneOffset();var n=(0,o/* .addMinutes */.z)(e,r);return(0,s/* .format */.GP)(n,t)};var Z=e=>{var t=new Date(e);var r=t.getTimezoneOffset();return(0,o/* .addMinutes */.z)(t,-r)};var ee=e=>{return(e||"").replace(/\r\n/g,"\n")};var et=e=>{return new Promise((t,r)=>{if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(e).then(()=>t()).catch(e=>r(e))}else{var n=document.createElement("textarea");n.value=e;document.body.appendChild(n);n.select();try{// if navigator.clipboard is not available, use document.execCommand('copy')
document.execCommand("copy");t()}catch(e){r(e)}finally{document.body.removeChild(n);// Clean up
}}})};var er=e=>{if(!e||!e.response||!e.response.data){return(0,i.__)("Something went wrong","tutor-pro")}var t=e.response.data.message;if(e.response.data.status_code===422&&e.response.data.data){t=e.response.data.data[Object.keys(e.response.data.data)[0]]}return t||(0,i.__)("Something went wrong","tutor-pro")};var en=e=>_async_to_generator(function*(){try{var t=yield fetch(e);var r=yield t.blob();var n=new FileReader;return new Promise((e,t)=>{n.readAsDataURL(r);n.onload=()=>e(n.result);n.onerror=e=>t(e)})}catch(e){throw new Error("Failed to fetch and convert image: ".concat(e))}})();var ea=(e,t)=>{if(e==="trash"){return"trash"}if(t==="private"){return"private"}if(e==="future"){return"future"}if(t==="password_protected"&&e!=="draft"){return"publish"}return e};var ei=e=>{var t;return!!((t=b/* .tutorConfig.addons_data.find */.P.addons_data.find(t=>t.base_name===e))===null||t===void 0?void 0:t.is_enabled)};var eo=e=>{if(!e||typeof e!=="string"){return""}return e.normalize("NFKD")// Normalize accented characters into base forms + diacritics
.replace(/[\u0300-\u036f]/g,"")// Remove combining diacritical marks
.toLowerCase()// Remove special characters !~@#$%^&*(){}[]|\;:"',./?
// Remove characters that are NOT:
// - Basic Latin letters and numbers (a-z, 0-9)
// - Spaces and hyphens
// - Latin Extended (À-ž, etc.)
// - Greek and Coptic (Α-ω)
// - Cyrillic (А-я)
// - Hebrew (א-ת)
// - Arabic (ا-ي)
// - Devanagari (Hindi)
// - Thai
// - Tamil
// - Georgian
// - Hangul Jamo (Korean building blocks)
// - Hiragana (Japanese)
// - Katakana (Japanese)
// - CJK Unified Ideographs (Chinese/Japanese/Korean characters)
// - Hangul Syllables (Korean)
// - Hangul Compatibility Jamo
// - Hangul Jamo Extended-A
// - Hangul Jamo Extended-B
.replace(/[^a-z0-9\s\-\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0E00-\u0E7F\u0B80-\u0BFF\u10A0-\u10FF\u1100-\u11FF\u3130-\u318F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,"").replace(/\s+/g,"-")// Replace multiple spaces with single dash
.replace(/-+/g,"-")// Replace multiple dashes with single dash
.replace(/^-+|-+$/g,"")// Remove leading and trailing dashes
};var es=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=[];t.forEach(e=>{if(e.slotKey){e.fields[e.slotKey].forEach(e=>{n.push(e.name)})}else{Object.keys(e.fields).forEach(t=>{e.fields[t].forEach(e=>{n.push(e.name)})})}});return n};var eu=e=>{var t=new DOMParser;var r=t.parseFromString(e,"text/html");return r.body.textContent||""};var ec=e=>{var{unit:t="hour",value:r,useLySuffix:n=false,capitalize:a=true,showSingular:i=false}=e;if(t==="until_cancellation"){var o=__("Until Cancellation","tutor-pro");return a?el(o):o}var s={hour:{// translators: %d: number of hours
plural:__("%d hours","tutor-pro"),// translators: %d: number of hours
singular:__("%d hour","tutor-pro"),suffix:__("hourly","tutor-pro"),base:__("hour","tutor-pro")},day:{// translators: %d: number of days
plural:__("%d days","tutor-pro"),// translators: %d: number of days
singular:__("%d day","tutor-pro"),suffix:__("daily","tutor-pro"),base:__("day","tutor-pro")},week:{// translators: %d is the number of weeks
plural:__("%d weeks","tutor-pro"),// translators: %d is the number of weeks
singular:__("%d week","tutor-pro"),suffix:__("weekly","tutor-pro"),base:__("week","tutor-pro")},month:{// translators: %d is the number of months
plural:__("%d months","tutor-pro"),// translators: %d is the number of months
singular:__("%d month","tutor-pro"),suffix:__("monthly","tutor-pro"),base:__("month","tutor-pro")},year:{// translators: %d is the number of years
plural:__("%d years","tutor-pro"),// translators: %d is the number of years
singular:__("%d year","tutor-pro"),suffix:__("yearly","tutor-pro"),base:__("year","tutor-pro")}};if(!s[t]){return""}var u="";if(r>1){u=sprintf(s[t].plural,r)}else if(i){u=sprintf(s[t].singular,r)}else if(n){u=s[t].suffix}else{u=s[t].base}return a?el(u):u};var el=e=>{return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")};var ef=e=>{var t=Math.floor(e/3600);var r=Math.floor(e%3600/60);var n=e%60;return{hours:t,minutes:r,seconds:n}}},1594:function(e){"use strict";e.exports=React},5206:function(e){"use strict";e.exports=ReactDOM},2470:function(e){"use strict";e.exports=wp.i18n},3640:function(e,t,r){"use strict";r.d(t,{_:()=>a});function n(e,t,r,n,a,i,o){try{var s=e[i](o);var u=s.value}catch(e){r(e);return}if(s.done)t(u);else Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function s(e){n(o,a,i,s,u,"next",e)}function u(e){n(o,a,i,s,u,"throw",e)}s(undefined)})}}},31:function(e,t,r){"use strict";// EXPORTS
r.d(t,{_:()=>/* binding */a});// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_define_property.js
function n(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else e[t]=r;return e};// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};var a=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}a.forEach(function(t){n(e,t,r[t])})}return e}},4206:function(e,t,r){"use strict";r.d(t,{_:()=>a});function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t){n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,n)}return r}function a(e,t){t=t!=null?t:{};if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(t));else{n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},599:function(e,t,r){"use strict";r.d(t,{_:()=>n});function n(e,t){if(!t)t=e.slice(0);return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},5465:function(e,t,r){"use strict";r.d(t,{m:()=>o});/* import */var n=r(6887);/* import */var a=r(9005);// src/focusManager.ts
var i=class extends n/* .Subscribable */.Q{#e;#t;#r;constructor(){super();this.#r=e=>{if(!a/* .isServer */.S$&&window.addEventListener){const t=()=>e();window.addEventListener("visibilitychange",t,false);return()=>{window.removeEventListener("visibilitychange",t)}}return}}onSubscribe(){if(!this.#t){this.setEventListener(this.#r)}}onUnsubscribe(){if(!this.hasListeners()){this.#t?.();this.#t=void 0}}setEventListener(e){this.#r=e;this.#t?.();this.#t=e(e=>{if(typeof e==="boolean"){this.setFocused(e)}else{this.onFocus()}})}setFocused(e){const t=this.#e!==e;if(t){this.#e=e;this.onFocus()}}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){if(typeof this.#e==="boolean"){return this.#e}return globalThis.document?.visibilityState!=="hidden"}};var o=new i;//# sourceMappingURL=focusManager.js.map
},9609:function(e,t,r){"use strict";r.d(t,{$:()=>s,s:()=>o});/* import */var n=r(3276);/* import */var a=r(6957);/* import */var i=r(649);// src/mutation.ts
var o=class extends a/* .Removable */.k{#n;#a;#i;constructor(e){super();this.mutationId=e.mutationId;this.#a=e.mutationCache;this.#n=[];this.state=e.state||s();this.setOptions(e.options);this.scheduleGc()}setOptions(e){this.options=e;this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){if(!this.#n.includes(e)){this.#n.push(e);this.clearGcTimeout();this.#a.notify({type:"observerAdded",mutation:this,observer:e})}}removeObserver(e){this.#n=this.#n.filter(t=>t!==e);this.scheduleGc();this.#a.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){if(!this.#n.length){if(this.state.status==="pending"){this.scheduleGc()}else{this.#a.remove(this)}}}continue(){return this.#i?.continue()??// continuing a mutation assumes that variables are set, mutation must have been dehydrated before
this.execute(this.state.variables)}async execute(e){this.#i=(0,i/* .createRetryer */.II)({fn:()=>{if(!this.options.mutationFn){return Promise.reject(new Error("No mutationFn found"))}return this.options.mutationFn(e)},onFail:(e,t)=>{this.#o({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#a.canRun(this)});const t=this.state.status==="pending";const r=!this.#i.canStart();try{if(!t){this.#o({type:"pending",variables:e,isPaused:r});await this.#a.config.onMutate?.(e,this);const t=await this.options.onMutate?.(e);if(t!==this.state.context){this.#o({type:"pending",context:t,variables:e,isPaused:r})}}const n=await this.#i.start();await this.#a.config.onSuccess?.(n,e,this.state.context,this);await this.options.onSuccess?.(n,e,this.state.context);await this.#a.config.onSettled?.(n,null,this.state.variables,this.state.context,this);await this.options.onSettled?.(n,null,e,this.state.context);this.#o({type:"success",data:n});return n}catch(t){try{await this.#a.config.onError?.(t,e,this.state.context,this);await this.options.onError?.(t,e,this.state.context);await this.#a.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this);await this.options.onSettled?.(void 0,t,e,this.state.context);throw t}finally{this.#o({type:"error",error:t})}}finally{this.#a.runNext(this)}}#o(e){const t=t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:true};case"continue":return{...t,isPaused:false};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:false};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:false,status:"error"}}};this.state=t(this.state);n/* .notifyManager.batch */.j.batch(()=>{this.#n.forEach(t=>{t.onMutationUpdate(e)});this.#a.notify({mutation:this,type:"updated",action:e})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:false,status:"idle",variables:void 0,submittedAt:0}}//# sourceMappingURL=mutation.js.map
},3276:function(e,t,r){"use strict";r.d(t,{j:()=>a});// src/notifyManager.ts
function n(){let e=[];let t=0;let r=e=>{e()};let n=e=>{e()};let a=e=>setTimeout(e,0);const i=n=>{if(t){e.push(n)}else{a(()=>{r(n)})}};const o=()=>{const t=e;e=[];if(t.length){a(()=>{n(()=>{t.forEach(e=>{r(e)})})})}};return{batch:e=>{let r;t++;try{r=e()}finally{t--;if(!t){o()}}return r},/**
     * All calls to the wrapped function will be batched.
     */batchCalls:e=>{return(...t)=>{i(()=>{e(...t)})}},schedule:i,/**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */setNotifyFunction:e=>{r=e},/**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */setBatchNotifyFunction:e=>{n=e},setScheduler:e=>{a=e}}}var a=n();//# sourceMappingURL=notifyManager.js.map
},4030:function(e,t,r){"use strict";r.d(t,{t:()=>o});/* import */var n=r(6887);/* import */var a=r(9005);// src/onlineManager.ts
var i=class extends n/* .Subscribable */.Q{#s=true;#t;#r;constructor(){super();this.#r=e=>{if(!a/* .isServer */.S$&&window.addEventListener){const t=()=>e(true);const r=()=>e(false);window.addEventListener("online",t,false);window.addEventListener("offline",r,false);return()=>{window.removeEventListener("online",t);window.removeEventListener("offline",r)}}return}}onSubscribe(){if(!this.#t){this.setEventListener(this.#r)}}onUnsubscribe(){if(!this.hasListeners()){this.#t?.();this.#t=void 0}}setEventListener(e){this.#r=e;this.#t?.();this.#t=e(this.setOnline.bind(this))}setOnline(e){const t=this.#s!==e;if(t){this.#s=e;this.listeners.forEach(t=>{t(e)})}}isOnline(){return this.#s}};var o=new i;//# sourceMappingURL=onlineManager.js.map
},860:function(e,t,r){"use strict";r.d(t,{X:()=>s,k:()=>u});/* import */var n=r(9005);/* import */var a=r(3276);/* import */var i=r(649);/* import */var o=r(6957);// src/query.ts
var s=class extends o/* .Removable */.k{#u;#c;#l;#i;#f;#d;constructor(e){super();this.#d=false;this.#f=e.defaultOptions;this.setOptions(e.options);this.observers=[];this.#l=e.cache;this.queryKey=e.queryKey;this.queryHash=e.queryHash;this.#u=c(this.options);this.state=e.state??this.#u;this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){this.options={...this.#f,...e};this.updateGcTime(this.options.gcTime)}optionalRemove(){if(!this.observers.length&&this.state.fetchStatus==="idle"){this.#l.remove(this)}}setData(e,t){const r=(0,n/* .replaceData */.pl)(this.state.data,e,this.options);this.#o({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual});return r}setState(e,t){this.#o({type:"setState",state:e,setStateOptions:t})}cancel(e){const t=this.#i?.promise;this.#i?.cancel(e);return t?t.then(n/* .noop */.lQ).catch(n/* .noop */.lQ):Promise.resolve()}destroy(){super.destroy();this.cancel({silent:true})}reset(){this.destroy();this.setState(this.#u)}isActive(){return this.observers.some(e=>(0,n/* .resolveEnabled */.Eh)(e.options.enabled,this)!==false)}isDisabled(){if(this.getObserversCount()>0){return!this.isActive()}return this.options.queryFn===n/* .skipToken */.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){if(this.state.isInvalidated){return true}if(this.getObserversCount()>0){return this.observers.some(e=>e.getCurrentResult().isStale)}return this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!(0,n/* .timeUntilStale */.j3)(this.state.dataUpdatedAt,e)}onFocus(){const e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:false});this.#i?.continue()}onOnline(){const e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:false});this.#i?.continue()}addObserver(e){if(!this.observers.includes(e)){this.observers.push(e);this.clearGcTimeout();this.#l.notify({type:"observerAdded",query:this,observer:e})}}removeObserver(e){if(this.observers.includes(e)){this.observers=this.observers.filter(t=>t!==e);if(!this.observers.length){if(this.#i){if(this.#d){this.#i.cancel({revert:true})}else{this.#i.cancelRetry()}}this.scheduleGc()}this.#l.notify({type:"observerRemoved",query:this,observer:e})}}getObserversCount(){return this.observers.length}invalidate(){if(!this.state.isInvalidated){this.#o({type:"invalidate"})}}fetch(e,t){if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&t?.cancelRefetch){this.cancel({silent:true})}else if(this.#i){this.#i.continueRetry();return this.#i.promise}}if(e){this.setOptions(e)}if(!this.options.queryFn){const e=this.observers.find(e=>e.options.queryFn);if(e){this.setOptions(e.options)}}if(false){}const r=new AbortController;const a=e=>{Object.defineProperty(e,"signal",{enumerable:true,get:()=>{this.#d=true;return r.signal}})};const o=()=>{const e=(0,n/* .ensureQueryFn */.ZM)(this.options,t);const r={queryKey:this.queryKey,meta:this.meta};a(r);this.#d=false;if(this.options.persister){return this.options.persister(e,r,this)}return e(r)};const s={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};a(s);this.options.behavior?.onFetch(s,this);this.#c=this.state;if(this.state.fetchStatus==="idle"||this.state.fetchMeta!==s.fetchOptions?.meta){this.#o({type:"fetch",meta:s.fetchOptions?.meta})}const u=e=>{if(!((0,i/* .isCancelledError */.wm)(e)&&e.silent)){this.#o({type:"error",error:e})}if(!(0,i/* .isCancelledError */.wm)(e)){this.#l.config.onError?.(e,this);this.#l.config.onSettled?.(this.state.data,e,this)}this.scheduleGc()};this.#i=(0,i/* .createRetryer */.II)({initialPromise:t?.initialPromise,fn:s.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(e===void 0){if(false){}u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(e)}catch(e){u(e);return}this.#l.config.onSuccess?.(e,this);this.#l.config.onSettled?.(e,this.state.error,this);this.scheduleGc()},onError:u,onFail:(e,t)=>{this.#o({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>true});return this.#i.start()}#o(e){const t=t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...u(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:false,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;if((0,i/* .isCancelledError */.wm)(r)&&r.revert&&this.#c){return{...this.#c,fetchStatus:"idle"}}return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:true};case"setState":return{...t,...e.state}}};this.state=t(this.state);a/* .notifyManager.batch */.j.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()});this.#l.notify({query:this,type:"updated",action:e})})}};function u(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,i/* .canFetch */.v_)(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function c(e){const t=typeof e.initialData==="function"?e.initialData():e.initialData;const r=t!==void 0;const n=r?typeof e.initialDataUpdatedAt==="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:false,status:r?"success":"pending",fetchStatus:"idle"}}//# sourceMappingURL=query.js.map
},6957:function(e,t,r){"use strict";r.d(t,{k:()=>a});/* import */var n=r(9005);// src/removable.ts
var a=class{#h;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout();if((0,n/* .isValidTimeout */.gn)(this.gcTime)){this.#h=setTimeout(()=>{this.optionalRemove()},this.gcTime)}}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(n/* .isServer */.S$?Infinity:5*60*1e3))}clearGcTimeout(){if(this.#h){clearTimeout(this.#h);this.#h=void 0}}};//# sourceMappingURL=removable.js.map
},649:function(e,t,r){"use strict";r.d(t,{II:()=>f,v_:()=>u,wm:()=>l});/* import */var n=r(5465);/* import */var a=r(4030);/* import */var i=r(6449);/* import */var o=r(9005);// src/retryer.ts
function s(e){return Math.min(1e3*2**e,3e4)}function u(e){return(e??"online")==="online"?a/* .onlineManager.isOnline */.t.isOnline():true}var c=class extends Error{constructor(e){super("CancelledError");this.revert=e?.revert;this.silent=e?.silent}};function l(e){return e instanceof c}function f(e){let t=false;let r=0;let l=false;let f;const d=(0,i/* .pendingThenable */.T)();const h=t=>{if(!l){b(new c(t));e.abort?.()}};const p=()=>{t=true};const v=()=>{t=false};const m=()=>n/* .focusManager.isFocused */.m.isFocused()&&(e.networkMode==="always"||a/* .onlineManager.isOnline */.t.isOnline())&&e.canRun();const g=()=>u(e.networkMode)&&e.canRun();const y=t=>{if(!l){l=true;e.onSuccess?.(t);f?.();d.resolve(t)}};const b=t=>{if(!l){l=true;e.onError?.(t);f?.();d.reject(t)}};const _=()=>{return new Promise(t=>{f=e=>{if(l||m()){t(e)}};e.onPause?.()}).then(()=>{f=void 0;if(!l){e.onContinue?.()}})};const w=()=>{if(l){return}let n;const a=r===0?e.initialPromise:void 0;try{n=a??e.fn()}catch(e){n=Promise.reject(e)}Promise.resolve(n).then(y).catch(n=>{if(l){return}const a=e.retry??(o/* .isServer */.S$?0:3);const i=e.retryDelay??s;const u=typeof i==="function"?i(r,n):i;const c=a===true||typeof a==="number"&&r<a||typeof a==="function"&&a(r,n);if(t||!c){b(n);return}r++;e.onFail?.(r,n);(0,o/* .sleep */.yy)(u).then(()=>{return m()?void 0:_()}).then(()=>{if(t){b(n)}else{w()}})})};return{promise:d,cancel:h,continue:()=>{f?.();return d},cancelRetry:p,continueRetry:v,canStart:g,start:()=>{if(g()){w()}else{_().then(w)}return d}}}//# sourceMappingURL=retryer.js.map
},6887:function(e,t,r){"use strict";r.d(t,{Q:()=>n});// src/subscribable.ts
var n=class{constructor(){this.listeners=/* @__PURE__ */new Set;this.subscribe=this.subscribe.bind(this)}subscribe(e){this.listeners.add(e);this.onSubscribe();return()=>{this.listeners.delete(e);this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};//# sourceMappingURL=subscribable.js.map
},6449:function(e,t,r){"use strict";r.d(t,{T:()=>n});// src/thenable.ts
function n(){let e;let t;const r=new Promise((r,n)=>{e=r;t=n});r.status="pending";r.catch(()=>{});function n(e){Object.assign(r,e);delete r.resolve;delete r.reject}r.resolve=t=>{n({status:"fulfilled",value:t});e(t)};r.reject=e=>{n({status:"rejected",reason:e});t(e)};return r}//# sourceMappingURL=thenable.js.map
},9005:function(e,t,r){"use strict";r.d(t,{Cp:()=>p,EN:()=>h,Eh:()=>c,F$:()=>d,MK:()=>l,S$:()=>n,ZM:()=>A,ZZ:()=>O,Zw:()=>i,d2:()=>u,f8:()=>m,gn:()=>o,hT:()=>S,j3:()=>s,lQ:()=>a,nJ:()=>f,pl:()=>w,rX:()=>x,y9:()=>E,yy:()=>_});// src/utils.ts
var n=typeof window==="undefined"||"Deno"in globalThis;function a(){}function i(e,t){return typeof e==="function"?e(t):e}function o(e){return typeof e==="number"&&e>=0&&e!==Infinity}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function u(e,t){return typeof e==="function"?e(t):e}function c(e,t){return typeof e==="function"?e(t):e}function l(e,t){const{type:r="all",exact:n,fetchStatus:a,predicate:i,queryKey:o,stale:s}=e;if(o){if(n){if(t.queryHash!==d(o,t.options)){return false}}else if(!p(t.queryKey,o)){return false}}if(r!=="all"){const e=t.isActive();if(r==="active"&&!e){return false}if(r==="inactive"&&e){return false}}if(typeof s==="boolean"&&t.isStale()!==s){return false}if(a&&a!==t.state.fetchStatus){return false}if(i&&!i(t)){return false}return true}function f(e,t){const{exact:r,status:n,predicate:a,mutationKey:i}=e;if(i){if(!t.options.mutationKey){return false}if(r){if(h(t.options.mutationKey)!==h(i)){return false}}else if(!p(t.options.mutationKey,i)){return false}}if(n&&t.state.status!==n){return false}if(a&&!a(t)){return false}return true}function d(e,t){const r=t?.queryKeyHashFn||h;return r(e)}function h(e){return JSON.stringify(e,(e,t)=>y(t)?Object.keys(t).sort().reduce((e,r)=>{e[r]=t[r];return e},{}):t)}function p(e,t){if(e===t){return true}if(typeof e!==typeof t){return false}if(e&&t&&typeof e==="object"&&typeof t==="object"){return!Object.keys(t).some(r=>!p(e[r],t[r]))}return false}function v(e,t){if(e===t){return e}const r=g(e)&&g(t);if(r||y(e)&&y(t)){const n=r?e:Object.keys(e);const a=n.length;const i=r?t:Object.keys(t);const o=i.length;const s=r?[]:{};let u=0;for(let a=0;a<o;a++){const o=r?a:i[a];if((!r&&n.includes(o)||r)&&e[o]===void 0&&t[o]===void 0){s[o]=void 0;u++}else{s[o]=v(e[o],t[o]);if(s[o]===e[o]&&e[o]!==void 0){u++}}}return a===o&&u===a?e:s}return t}function m(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length){return false}for(const r in e){if(e[r]!==t[r]){return false}}return true}function g(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!b(e)){return false}const t=e.constructor;if(t===void 0){return true}const r=t.prototype;if(!b(r)){return false}if(!r.hasOwnProperty("isPrototypeOf")){return false}if(Object.getPrototypeOf(e)!==Object.prototype){return false}return true}function b(e){return Object.prototype.toString.call(e)==="[object Object]"}function _(e){return new Promise(t=>{setTimeout(t,e)})}function w(e,t,r){if(typeof r.structuralSharing==="function"){return r.structuralSharing(e,t)}else if(r.structuralSharing!==false){if(false){}return v(e,t)}return t}function x(e){return e}function E(e,t,r=0){const n=[...e,t];return r&&n.length>r?n.slice(1):n}function O(e,t,r=0){const n=[t,...e];return r&&n.length>r?n.slice(0,-1):n}var S=Symbol();function A(e,t){if(false){}if(!e.queryFn&&t?.initialPromise){return()=>t.initialPromise}if(!e.queryFn||e.queryFn===S){return()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))}return e.queryFn}//# sourceMappingURL=utils.js.map
},7933:function(e,t,r){"use strict";r.d(t,{Ht:()=>s,jE:()=>o});/* import */var n=r(1594);/* import */var a=r(6070);"use client";// src/QueryClientProvider.tsx
var i=n.createContext(void 0);var o=e=>{const t=n.useContext(i);if(e){return e}if(!t){throw new Error("No QueryClient set, use QueryClientProvider to set one")}return t};var s=({client:e,children:t})=>{n.useEffect(()=>{e.mount();return()=>{e.unmount()}},[e]);return/* @__PURE__ */(0,a.jsx)(i.Provider,{value:e,children:t})};//# sourceMappingURL=QueryClientProvider.js.map
},7947:function(e,t,r){"use strict";// EXPORTS
r.d(t,{n:()=>/* binding */f});// EXTERNAL MODULE: external "React"
var n=r(1594);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/mutation.js
var a=r(9609);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var i=r(3276);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/subscribable.js
var o=r(6887);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/utils.js
var s=r(9005);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
// src/mutationObserver.ts
var u=class extends o/* .Subscribable */.Q{#p;#v=void 0;#m;#g;constructor(e,t){super();this.#p=e;this.setOptions(t);this.bindMethods();this.#y()}bindMethods(){this.mutate=this.mutate.bind(this);this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.#p.defaultMutationOptions(e);if(!(0,s/* .shallowEqualObjects */.f8)(this.options,t)){this.#p.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#m,observer:this})}if(t?.mutationKey&&this.options.mutationKey&&(0,s/* .hashKey */.EN)(t.mutationKey)!==(0,s/* .hashKey */.EN)(this.options.mutationKey)){this.reset()}else if(this.#m?.state.status==="pending"){this.#m.setOptions(this.options)}}onUnsubscribe(){if(!this.hasListeners()){this.#m?.removeObserver(this)}}onMutationUpdate(e){this.#y();this.#b(e)}getCurrentResult(){return this.#v}reset(){this.#m?.removeObserver(this);this.#m=void 0;this.#y();this.#b()}mutate(e,t){this.#g=t;this.#m?.removeObserver(this);this.#m=this.#p.getMutationCache().build(this.#p,this.options);this.#m.addObserver(this);return this.#m.execute(e)}#y(){const e=this.#m?.state??(0,a/* .getDefaultState */.$)();this.#v={...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset}}#b(e){i/* .notifyManager.batch */.j.batch(()=>{if(this.#g&&this.hasListeners()){const t=this.#v.variables;const r=this.#v.context;if(e?.type==="success"){this.#g.onSuccess?.(e.data,t,r);this.#g.onSettled?.(e.data,null,t,r)}else if(e?.type==="error"){this.#g.onError?.(e.error,t,r);this.#g.onSettled?.(void 0,e.error,t,r)}}this.listeners.forEach(e=>{e(this.#v)})})}};//# sourceMappingURL=mutationObserver.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/QueryClientProvider.js
var c=r(7933);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/utils.js
var l=r(4078);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useMutation.js
"use client";// src/useMutation.ts
function f(e,t){const r=(0,c/* .useQueryClient */.jE)(t);const[a]=n.useState(()=>new u(r,e));n.useEffect(()=>{a.setOptions(e)},[a,e]);const o=n.useSyncExternalStore(n.useCallback(e=>a.subscribe(i/* .notifyManager.batchCalls */.j.batchCalls(e)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult());const s=n.useCallback((e,t)=>{a.mutate(e,t).catch(l/* .noop */.l)},[a]);if(o.error&&(0,l/* .shouldThrowError */.G)(a.options.throwOnError,[o.error])){throw o.error}return{...o,mutate:s,mutateAsync:o.mutate}}//# sourceMappingURL=useMutation.js.map
},3819:function(e,t,r){"use strict";// EXPORTS
r.d(t,{I:()=>/* binding */F});// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/focusManager.js
var n=r(5465);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var a=r(3276);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/query.js
var i=r(860);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/subscribable.js
var o=r(6887);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/thenable.js
var s=r(6449);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/utils.js
var u=r(9005);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/queryObserver.js
// src/queryObserver.ts
var c=class extends o/* .Subscribable */.Q{constructor(e,t){super();this.options=t;this.#p=e;this.#_=null;this.#w=(0,s/* .pendingThenable */.T)();if(!this.options.experimental_prefetchInRender){this.#w.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))}this.bindMethods();this.setOptions(t)}#p;#x=void 0;#E=void 0;#v=void 0;#O;#S;#w;#_;#A;#T;// This property keeps track of the last query with defined data.
// It will be used to pass the previous data and query to the placeholder function between renders.
#R;#k;#C;#I;#P=/* @__PURE__ */new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){if(this.listeners.size===1){this.#x.addObserver(this);if(f(this.#x,this.options)){this.#D()}else{this.updateResult()}this.#M()}}onUnsubscribe(){if(!this.hasListeners()){this.destroy()}}shouldFetchOnReconnect(){return d(this.#x,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.#x,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=/* @__PURE__ */new Set;this.#L();this.#F();this.#x.removeObserver(this)}setOptions(e,t){const r=this.options;const n=this.#x;this.options=this.#p.defaultQueryOptions(e);if(this.options.enabled!==void 0&&typeof this.options.enabled!=="boolean"&&typeof this.options.enabled!=="function"&&typeof(0,u/* .resolveEnabled */.Eh)(this.options.enabled,this.#x)!=="boolean"){throw new Error("Expected enabled to be a boolean or a callback that returns a boolean")}this.#N();this.#x.setOptions(this.options);if(r._defaulted&&!(0,u/* .shallowEqualObjects */.f8)(this.options,r)){this.#p.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#x,observer:this})}const a=this.hasListeners();if(a&&h(this.#x,n,this.options,r)){this.#D()}this.updateResult(t);if(a&&(this.#x!==n||(0,u/* .resolveEnabled */.Eh)(this.options.enabled,this.#x)!==(0,u/* .resolveEnabled */.Eh)(r.enabled,this.#x)||(0,u/* .resolveStaleTime */.d2)(this.options.staleTime,this.#x)!==(0,u/* .resolveStaleTime */.d2)(r.staleTime,this.#x))){this.#j()}const i=this.#U();if(a&&(this.#x!==n||(0,u/* .resolveEnabled */.Eh)(this.options.enabled,this.#x)!==(0,u/* .resolveEnabled */.Eh)(r.enabled,this.#x)||i!==this.#I)){this.#H(i)}}getOptimisticResult(e){const t=this.#p.getQueryCache().build(this.#p,e);const r=this.createResult(t,e);if(v(this,r)){this.#v=r;this.#S=this.options;this.#O=this.#x.state}return r}getCurrentResult(){return this.#v}trackResult(e,t){const r={};Object.keys(e).forEach(n=>{Object.defineProperty(r,n,{configurable:false,enumerable:true,get:()=>{this.trackProp(n);t?.(n);return e[n]}})});return r}trackProp(e){this.#P.add(e)}getCurrentQuery(){return this.#x}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#p.defaultQueryOptions(e);const r=this.#p.getQueryCache().build(this.#p,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#D({...e,cancelRefetch:e.cancelRefetch??true}).then(()=>{this.updateResult();return this.#v})}#D(e){this.#N();let t=this.#x.fetch(this.options,e);if(!e?.throwOnError){t=t.catch(u/* .noop */.lQ)}return t}#j(){this.#L();const e=(0,u/* .resolveStaleTime */.d2)(this.options.staleTime,this.#x);if(u/* .isServer */.S$||this.#v.isStale||!(0,u/* .isValidTimeout */.gn)(e)){return}const t=(0,u/* .timeUntilStale */.j3)(this.#v.dataUpdatedAt,e);const r=t+1;this.#k=setTimeout(()=>{if(!this.#v.isStale){this.updateResult()}},r)}#U(){return(typeof this.options.refetchInterval==="function"?this.options.refetchInterval(this.#x):this.options.refetchInterval)??false}#H(e){this.#F();this.#I=e;if(u/* .isServer */.S$||(0,u/* .resolveEnabled */.Eh)(this.options.enabled,this.#x)===false||!(0,u/* .isValidTimeout */.gn)(this.#I)||this.#I===0){return}this.#C=setInterval(()=>{if(this.options.refetchIntervalInBackground||n/* .focusManager.isFocused */.m.isFocused()){this.#D()}},this.#I)}#M(){this.#j();this.#H(this.#U())}#L(){if(this.#k){clearTimeout(this.#k);this.#k=void 0}}#F(){if(this.#C){clearInterval(this.#C);this.#C=void 0}}createResult(e,t){const r=this.#x;const n=this.options;const a=this.#v;const o=this.#O;const c=this.#S;const l=e!==r;const d=l?e.state:this.#E;const{state:v}=e;let m={...v};let g=false;let y;if(t._optimisticResults){const a=this.hasListeners();const o=!a&&f(e,t);const s=a&&h(e,r,t,n);if(o||s){m={...m,...(0,i/* .fetchState */.k)(v.data,e.options)}}if(t._optimisticResults==="isRestoring"){m.fetchStatus="idle"}}let{error:b,errorUpdatedAt:_,status:w}=m;if(t.select&&m.data!==void 0){if(a&&m.data===o?.data&&t.select===this.#A){y=this.#T}else{try{this.#A=t.select;y=t.select(m.data);y=(0,u/* .replaceData */.pl)(a?.data,y,t);this.#T=y;this.#_=null}catch(e){this.#_=e}}}else{y=m.data}if(t.placeholderData!==void 0&&y===void 0&&w==="pending"){let e;if(a?.isPlaceholderData&&t.placeholderData===c?.placeholderData){e=a.data}else{e=typeof t.placeholderData==="function"?t.placeholderData(this.#R?.state.data,this.#R):t.placeholderData;if(t.select&&e!==void 0){try{e=t.select(e);this.#_=null}catch(e){this.#_=e}}}if(e!==void 0){w="success";y=(0,u/* .replaceData */.pl)(a?.data,e,t);g=true}}if(this.#_){b=this.#_;y=this.#T;_=Date.now();w="error"}const x=m.fetchStatus==="fetching";const E=w==="pending";const O=w==="error";const S=E&&x;const A=y!==void 0;const T={status:w,fetchStatus:m.fetchStatus,isPending:E,isSuccess:w==="success",isError:O,isInitialLoading:S,isLoading:S,data:y,dataUpdatedAt:m.dataUpdatedAt,error:b,errorUpdatedAt:_,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>d.dataUpdateCount||m.errorUpdateCount>d.errorUpdateCount,isFetching:x,isRefetching:x&&!E,isLoadingError:O&&!A,isPaused:m.fetchStatus==="paused",isPlaceholderData:g,isRefetchError:O&&A,isStale:p(e,t),refetch:this.refetch,promise:this.#w};const R=T;if(this.options.experimental_prefetchInRender){const t=e=>{if(R.status==="error"){e.reject(R.error)}else if(R.data!==void 0){e.resolve(R.data)}};const n=()=>{const e=this.#w=R.promise=(0,s/* .pendingThenable */.T)();t(e)};const a=this.#w;switch(a.status){case"pending":if(e.queryHash===r.queryHash){t(a)}break;case"fulfilled":if(R.status==="error"||R.data!==a.value){n()}break;case"rejected":if(R.status!=="error"||R.error!==a.reason){n()}break}}return R}updateResult(e){const t=this.#v;const r=this.createResult(this.#x,this.options);this.#O=this.#x.state;this.#S=this.options;if(this.#O.data!==void 0){this.#R=this.#x}if((0,u/* .shallowEqualObjects */.f8)(r,t)){return}this.#v=r;const n={};const a=()=>{if(!t){return true}const{notifyOnChangeProps:e}=this.options;const r=typeof e==="function"?e():e;if(r==="all"||!r&&!this.#P.size){return true}const n=new Set(r??this.#P);if(this.options.throwOnError){n.add("error")}return Object.keys(this.#v).some(e=>{const r=e;const a=this.#v[r]!==t[r];return a&&n.has(r)})};if(e?.listeners!==false&&a()){n.listeners=true}this.#b({...n,...e})}#N(){const e=this.#p.getQueryCache().build(this.#p,this.options);if(e===this.#x){return}const t=this.#x;this.#x=e;this.#E=e.state;if(this.hasListeners()){t?.removeObserver(this);e.addObserver(this)}}onQueryUpdate(){this.updateResult();if(this.hasListeners()){this.#M()}}#b(e){a/* .notifyManager.batch */.j.batch(()=>{if(e.listeners){this.listeners.forEach(e=>{e(this.#v)})}this.#p.getQueryCache().notify({query:this.#x,type:"observerResultsUpdated"})})}};function l(e,t){return(0,u/* .resolveEnabled */.Eh)(t.enabled,e)!==false&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===false)}function f(e,t){return l(e,t)||e.state.data!==void 0&&d(e,t,t.refetchOnMount)}function d(e,t,r){if((0,u/* .resolveEnabled */.Eh)(t.enabled,e)!==false){const n=typeof r==="function"?r(e):r;return n==="always"||n!==false&&p(e,t)}return false}function h(e,t,r,n){return(e!==t||(0,u/* .resolveEnabled */.Eh)(n.enabled,e)===false)&&(!r.suspense||e.state.status!=="error")&&p(e,r)}function p(e,t){return(0,u/* .resolveEnabled */.Eh)(t.enabled,e)!==false&&e.isStaleByTime((0,u/* .resolveStaleTime */.d2)(t.staleTime,e))}function v(e,t){if(!(0,u/* .shallowEqualObjects */.f8)(e.getCurrentResult(),t)){return true}return false}//# sourceMappingURL=queryObserver.js.map
// EXTERNAL MODULE: external "React"
var m=r(1594);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/QueryClientProvider.js
var g=r(7933);// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var y=r(6070);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/QueryErrorResetBoundary.js
"use client";// src/QueryErrorResetBoundary.tsx
function b(){let e=false;return{clearReset:()=>{e=false},reset:()=>{e=true},isReset:()=>{return e}}}var _=m.createContext(b());var w=()=>m.useContext(_);var x=({children:e})=>{const[t]=React.useState(()=>b());return /* @__PURE__ */jsx(_.Provider,{value:t,children:typeof e==="function"?e(t):e})};//# sourceMappingURL=QueryErrorResetBoundary.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/utils.js
var E=r(4078);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/errorBoundaryUtils.js
"use client";// src/errorBoundaryUtils.ts
var O=(e,t)=>{if(e.suspense||e.throwOnError||e.experimental_prefetchInRender){if(!t.isReset()){e.retryOnMount=false}}};var S=e=>{m.useEffect(()=>{e.clearReset()},[e])};var A=({result:e,errorResetBoundary:t,throwOnError:r,query:n})=>{return e.isError&&!t.isReset()&&!e.isFetching&&n&&(0,E/* .shouldThrowError */.G)(r,[e.error,n])};//# sourceMappingURL=errorBoundaryUtils.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/isRestoring.js
"use client";// src/isRestoring.ts
var T=m.createContext(false);var R=()=>m.useContext(T);var k=T.Provider;//# sourceMappingURL=isRestoring.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/suspense.js
// src/suspense.ts
var C=(e,t)=>t.state.data===void 0;var I=e=>{const t=e.staleTime;if(e.suspense){e.staleTime=typeof t==="function"?(...e)=>Math.max(t(...e),1e3):Math.max(t??1e3,1e3);if(typeof e.gcTime==="number"){e.gcTime=Math.max(e.gcTime,1e3)}}};var P=(e,t)=>e.isLoading&&e.isFetching&&!t;var D=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending;var M=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});//# sourceMappingURL=suspense.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useBaseQuery.js
"use client";// src/useBaseQuery.ts
function L(e,t,r){var n,i,o,s,c;if(false){}const l=(0,g/* .useQueryClient */.jE)(r);const f=R();const d=w();const h=l.defaultQueryOptions(e);(i=(n=l.getDefaultOptions().queries)==null?void 0:n._experimental_beforeQuery)==null?void 0:i.call(n,h);h._optimisticResults=f?"isRestoring":"optimistic";I(h);O(h,d);S(d);const p=!l.getQueryCache().get(h.queryHash);const[v]=m.useState(()=>new t(l,h));const y=v.getOptimisticResult(h);m.useSyncExternalStore(m.useCallback(e=>{const t=f?E/* .noop */.l:v.subscribe(a/* .notifyManager.batchCalls */.j.batchCalls(e));v.updateResult();return t},[v,f]),()=>v.getCurrentResult(),()=>v.getCurrentResult());m.useEffect(()=>{v.setOptions(h,{listeners:false})},[h,v]);if(D(h,y)){throw M(h,v,d)}if(A({result:y,errorResetBoundary:d,throwOnError:h.throwOnError,query:l.getQueryCache().get(h.queryHash)})){throw y.error};(s=(o=l.getDefaultOptions().queries)==null?void 0:o._experimental_afterQuery)==null?void 0:s.call(o,h,y);if(h.experimental_prefetchInRender&&!u/* .isServer */.S$&&P(y,f)){const e=p?// Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
M(h,v,d):// subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
(c=l.getQueryCache().get(h.queryHash))==null?void 0:c.promise;e==null?void 0:e.catch(E/* .noop */.l).finally(()=>{v.updateResult()})}return!h.notifyOnChangeProps?v.trackResult(y):y}//# sourceMappingURL=useBaseQuery.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useQuery.js
"use client";// src/useQuery.ts
function F(e,t){return L(e,c,t)}//# sourceMappingURL=useQuery.js.map
},4078:function(e,t,r){"use strict";r.d(t,{G:()=>n,l:()=>a});// src/utils.ts
function n(e,t){if(typeof e==="function"){return e(...t)}return!!e}function a(){}//# sourceMappingURL=utils.js.map
},5830:function(e,t,r){"use strict";r.d(t,{Cg:()=>c,_P:()=>A,my:()=>s,s0:()=>l,w4:()=>u});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const a=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const i=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const o=/* unused pure expression or super */null&&-i;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const s=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const u=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const c=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const l=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const f=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const d=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const h=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const v=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const m=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const g=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const y=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const b=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const _=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&b*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const E=/* unused pure expression or super */null&&w*a;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const O=/* unused pure expression or super */null&&E/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const S=/* unused pure expression or super */null&&O*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const A=Symbol.for("constructDateFrom")},5054:function(e,t,r){"use strict";r.d(t,{w:()=>a});/* import */var n=r(5830);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function a(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */._P in e)return e[n/* .constructFromSymbol */._P](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},4421:function(e,t,r){"use strict";// EXPORTS
r.d(t,{GP:()=>/* binding */eB});// UNUSED EXPORTS: default, longFormatters, formatters, formatDate
;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const i=n[e];if(typeof i==="string"){a=i}else if(t===1){a=i.one}else{a=i.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function i(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatLong.js
const o={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const s={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const u={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const c={date:i({formats:o,defaultWidth:"full"}),time:i({formats:s,defaultWidth:"full"}),dateTime:i({formats:u,defaultWidth:"full"})};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
const l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const f=(e,t,r,n)=>l[e];// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function d(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const i=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[i]}};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/localize.js
const h={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const p={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const v={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const m={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const g={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const y={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const b=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const _={ordinalNumber:b,era:d({values:h,defaultWidth:"wide"}),quarter:d({values:p,defaultWidth:"wide",argumentCallback:e=>e-1}),month:d({values:v,defaultWidth:"wide"}),day:d({values:m,defaultWidth:"wide"}),dayPeriod:d({values:g,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function w(e){return(t,r={})=>{const n=r.width;const a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const i=t.match(a);if(!i){return null}const o=i[0];const s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const u=Array.isArray(s)?E(s,e=>e.test(o)):x(s,e=>e.test(o));let c;c=e.valueCallback?e.valueCallback(u):u;c=r.valueCallback?r.valueCallback(c):c;const l=t.slice(o.length);return{value:c,rest:l}}}function x(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function E(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function O(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];// [TODO] I challenge you to fix the type
o=r.valueCallback?r.valueCallback(o):o;const s=t.slice(a.length);return{value:o,rest:s}}};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/match.js
const S=/^(\d+)(th|st|nd|rd)?/i;const A=/\d+/i;const T={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const R={any:[/^b/i,/^(a|c)/i]};const k={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const C={any:[/1/i,/2/i,/3/i,/4/i]};const I={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const P={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const D={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const M={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const F={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const N={ordinalNumber:O({matchPattern:S,parsePattern:A,valueCallback:e=>parseInt(e,10)}),era:w({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),quarter:w({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:e=>e+1}),month:w({matchPatterns:I,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),day:w({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:F,defaultParseWidth:"any"})};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js
/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const j={code:"en-US",formatDistance:a,formatLong:c,formatRelative:f,localize:_,match:N,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* export default */const U=/* unused pure expression or super */null&&j;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
let H={};function B(){return H}function Y(e){H=e}// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var z=r(4350);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function V(e){const t=(0,z/* .toDate */.a)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var q=r(5054);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
function W(e,...t){const r=q/* .constructFrom.bind */.w.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var $=r(5830);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var G=r(5758);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function K(e,t,r){const[n,a]=W(r?.in,e,t);const i=(0,G/* .startOfDay */.o)(n);const o=(0,G/* .startOfDay */.o)(a);const s=+i-V(i);const u=+o-V(o);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((s-u)/$/* .millisecondsInDay */.w4)}// Fallback for modularized imports:
/* export default */const Q=/* unused pure expression or super */null&&K;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function X(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const J=/* unused pure expression or super */null&&X;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function Z(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);const n=K(r,X(r));const a=n+1;return a}// Fallback for modularized imports:
/* export default */const ee=/* unused pure expression or super */null&&Z;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function et(e,t){const r=B();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const a=(0,z/* .toDate */.a)(e,t?.in);const i=a.getDay();const o=(i<n?7:0)+i-n;a.setDate(a.getDate()-o);a.setHours(0,0,0,0);return a}// Fallback for modularized imports:
/* export default */const er=/* unused pure expression or super */null&&et;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function en(e,t){return et(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const ea=/* unused pure expression or super */null&&en;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function ei(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);const n=r.getFullYear();const a=(0,q/* .constructFrom */.w)(r,0);a.setFullYear(n+1,0,4);a.setHours(0,0,0,0);const i=en(a);const o=(0,q/* .constructFrom */.w)(r,0);o.setFullYear(n,0,4);o.setHours(0,0,0,0);const s=en(o);if(r.getTime()>=i.getTime()){return n+1}else if(r.getTime()>=s.getTime()){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const eo=/* unused pure expression or super */null&&ei;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function es(e,t){const r=ei(e,t);const n=(0,q/* .constructFrom */.w)(t?.in||e,0);n.setFullYear(r,0,4);n.setHours(0,0,0,0);return en(n)}// Fallback for modularized imports:
/* export default */const eu=/* unused pure expression or super */null&&es;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function ec(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);const n=+en(r)-+es(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/$/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* export default */const el=/* unused pure expression or super */null&&ec;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function ef(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);const n=r.getFullYear();const a=B();const i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1;const o=(0,q/* .constructFrom */.w)(t?.in||e,0);o.setFullYear(n+1,0,i);o.setHours(0,0,0,0);const s=et(o,t);const u=(0,q/* .constructFrom */.w)(t?.in||e,0);u.setFullYear(n,0,i);u.setHours(0,0,0,0);const c=et(u,t);if(+r>=+s){return n+1}else if(+r>=+c){return n}else{return n-1}}// Fallback for modularized imports:
/* export default */const ed=/* unused pure expression or super */null&&ef;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function eh(e,t){const r=B();const n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const a=ef(e,t);const i=(0,q/* .constructFrom */.w)(t?.in||e,0);i.setFullYear(a,0,n);i.setHours(0,0,0,0);const o=et(i,t);return o}// Fallback for modularized imports:
/* export default */const ep=/* unused pure expression or super */null&&eh;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function ev(e,t){const r=(0,z/* .toDate */.a)(e,t?.in);const n=+et(r,t)-+eh(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(n/$/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* export default */const em=/* unused pure expression or super */null&&ev;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function eg(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const ey={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=r>0?r:1-r;return eg(t==="yy"?n%100:n,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):eg(r+1,2)},// Day of the month
d(e,t){return eg(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return eg(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return eg(e.getHours(),t.length)},// Minute
m(e,t){return eg(e.getMinutes(),t.length)},// Second
s(e,t){return eg(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const n=e.getMilliseconds();const a=Math.trunc(n*Math.pow(10,r-3));return eg(a,t.length)}};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/formatters.js
const eb={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const e_={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return ey.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=ef(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const i=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=i%100;return eg(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(i,{unit:"year"})}// Padding
return eg(i,t.length)},// ISO week-numbering year
R:function(e,t){const r=ei(e);// Padding
return eg(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return eg(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return eg(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return eg(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return ey.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return eg(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=ev(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return eg(a,t.length)},// ISO week of year
I:function(e,t,r){const n=ec(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return eg(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return ey.d(e,t)},// Day of year
D:function(e,t,r){const n=Z(e);if(t==="Do"){return r.ordinalNumber(n,{unit:"dayOfYear"})}return eg(n,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(i);// Padded numerical value
case"ee":return eg(i,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(i);// Padded numerical value
case"cc":return eg(i,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return eg(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=eb.noon}else if(n===0){a=eb.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=eb.evening}else if(n>=12){a=eb.afternoon}else if(n>=4){a=eb.morning}else{a=eb.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return ey.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return ey.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return eg(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return eg(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return ey.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return ey.s(e,t)},// Fraction of second
S:function(e,t){return ey.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return ex(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return eE(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return eE(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return ex(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return eE(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return eE(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+ew(n,":");// Long
case"OOOO":default:return"GMT"+eE(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+ew(n,":");// Long
case"zzzz":default:return"GMT"+eE(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return eg(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return eg(+e,t.length)}};function ew(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const i=n%60;if(i===0){return r+String(a)}return r+String(a)+t+eg(i,2)}function ex(e,t){if(e%60===0){const t=e>0?"-":"+";return t+eg(Math.abs(e)/60,2)}return eE(e,t)}function eE(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=eg(Math.trunc(n/60),2);const i=eg(n%60,2);return r+a+t+i};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
const eO=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const eS=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const eA=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const n=r[1];const a=r[2];if(!a){return eO(e,t)}let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",eO(n,t)).replace("{{time}}",eS(a,t))};const eT={p:eS,P:eA};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/protectedTokens.js
const eR=/^D+$/;const ek=/^Y+$/;const eC=["D","DD","YY","YYYY"];function eI(e){return eR.test(e)}function eP(e){return ek.test(e)}function eD(e,t,r){const n=eM(e,t,r);console.warn(n);if(eC.includes(e))throw new RangeError(n)}function eM(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js + 1 modules
var eL=r(6741);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const eF=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const eN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const ej=/^'([^]*?)'?$/;const eU=/''/g;const eH=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function eB(e,t,r){const n=B();const a=r?.locale??n.locale??j;const i=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1;const o=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0;const s=(0,z/* .toDate */.a)(e,r?.in);if(!(0,eL/* .isValid */.f)(s)){throw new RangeError("Invalid time value")}let u=t.match(eN).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=eT[t];return r(e,a.formatLong)}return e}).join("").match(eF).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:eY(e)}}if(e_[t]){return{isToken:true,value:e}}if(t.match(eH)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(a.localize.preprocessor){u=a.localize.preprocessor(s,u)}const c={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return u.map(n=>{if(!n.isToken)return n.value;const i=n.value;if(!r?.useAdditionalWeekYearTokens&&eP(i)||!r?.useAdditionalDayOfYearTokens&&eI(i)){eD(i,t,String(e))}const o=e_[i[0]];return o(s,i,a.localize,c)}).join("")}function eY(e){const t=e.match(ej);if(!t){return e}return t[1].replace(eU,"'")}// Fallback for modularized imports:
/* export default */const ez=/* unused pure expression or super */null&&eB},1736:function(e,t,r){"use strict";r.d(t,{Y:()=>a});/* import */var n=r(4350);/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function a(e,t){return+(0,n/* .toDate */.a)(e)<+(0,n/* .toDate */.a)(t)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},6741:function(e,t,r){"use strict";// EXPORTS
r.d(t,{f:()=>/* binding */o});// UNUSED EXPORTS: default
;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* export default */const a=/* unused pure expression or super */null&&n;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var i=r(4350);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function o(e){return!(!n(e)&&typeof e!=="number"||isNaN(+(0,i/* .toDate */.a)(e)))}// Fallback for modularized imports:
/* export default */const s=/* unused pure expression or super */null&&o},6219:function(e,t,r){"use strict";r.d(t,{H:()=>o});/* import */var n=r(5830);/* import */var a=r(5054);/* import */var i=r(4350);/**
 * The {@link parseISO} function options.
 *//**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */function o(e,t){const r=()=>(0,a/* .constructFrom */.w)(t?.in,NaN);const n=t?.additionalDigits??2;const o=f(e);let s;if(o.date){const e=d(o.date,n);s=h(e.restDateString,e.year)}if(!s||isNaN(+s))return r();const u=+s;let c=0;let l;if(o.time){c=v(o.time);if(isNaN(c))return r()}if(o.timezone){l=g(o.timezone);if(isNaN(l))return r()}else{const e=new Date(u+c);const r=(0,i/* .toDate */.a)(0,t?.in);r.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());r.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return r}return(0,i/* .toDate */.a)(u+c+l,t?.in)}const s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/};const u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;const c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;const l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e){const t={};const r=e.split(s.dateTimeDelimiter);let n;// The regex match should only return at maximum two array elements.
// [date], [time], or [date, time].
if(r.length>2){return t}if(/:/.test(r[0])){n=r[0]}else{t.date=r[0];n=r[1];if(s.timeZoneDelimiter.test(t.date)){t.date=e.split(s.timeZoneDelimiter)[0];n=e.substr(t.date.length,e.length)}}if(n){const e=s.timezone.exec(n);if(e){t.time=n.replace(e[1],"");t.timezone=e[1]}else{t.time=n}}return t}function d(e,t){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)");const n=e.match(r);// Invalid ISO-formatted year
if(!n)return{year:NaN,restDateString:""};const a=n[1]?parseInt(n[1]):null;const i=n[2]?parseInt(n[2]):null;// either year or century is null, not both
return{year:i===null?a:i*100,restDateString:e.slice((n[1]||n[2]).length)}}function h(e,t){// Invalid ISO-formatted year
if(t===null)return new Date(NaN);const r=e.match(u);// Invalid ISO-formatted string
if(!r)return new Date(NaN);const n=!!r[4];const a=p(r[1]);const i=p(r[2])-1;const o=p(r[3]);const s=p(r[4]);const c=p(r[5])-1;if(n){if(!E(t,s,c)){return new Date(NaN)}return y(t,s,c)}else{const e=new Date(0);if(!w(t,i,o)||!x(t,a)){return new Date(NaN)}e.setUTCFullYear(t,i,Math.max(a,o));return e}}function p(e){return e?parseInt(e):1}function v(e){const t=e.match(c);if(!t)return NaN;// Invalid ISO-formatted time
const r=m(t[1]);const a=m(t[2]);const i=m(t[3]);if(!O(r,a,i)){return NaN}return r*n/* .millisecondsInHour */.s0+a*n/* .millisecondsInMinute */.Cg+i*1e3}function m(e){return e&&parseFloat(e.replace(",","."))||0}function g(e){if(e==="Z")return 0;const t=e.match(l);if(!t)return 0;const r=t[1]==="+"?-1:1;const a=parseInt(t[2]);const i=t[3]&&parseInt(t[3])||0;if(!S(a,i)){return NaN}return r*(a*n/* .millisecondsInHour */.s0+i*n/* .millisecondsInMinute */.Cg)}function y(e,t,r){const n=new Date(0);n.setUTCFullYear(e,0,4);const a=n.getUTCDay()||7;const i=(t-1)*7+r+1-a;n.setUTCDate(n.getUTCDate()+i);return n}// Validation functions
// February is null to handle the leap year (using ||)
const b=[31,null,31,30,31,30,31,31,30,31,30,31];function _(e){return e%400===0||e%4===0&&e%100!==0}function w(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(b[t]||(_(e)?29:28))}function x(e,t){return t>=1&&t<=(_(e)?366:365)}function E(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function O(e,t,r){if(e===24){return t===0&&r===0}return r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function S(e,t){return t>=0&&t<=59}// Fallback for modularized imports:
/* unused export default */var A=/* unused pure expression or super */null&&o},5758:function(e,t,r){"use strict";r.d(t,{o:()=>a});/* import */var n=r(4350);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},4350:function(e,t,r){"use strict";r.d(t,{a:()=>a});/* import */var n=r(5054);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function a(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.w)(t||e,e)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},8346:function(e,t,r){"use strict";r.d(t,{FH:()=>L,Op:()=>T,jz:()=>eV,mN:()=>eq,xI:()=>N,xW:()=>A});/* import */var n=r(1594);var a=e=>e.type==="checkbox";var i=e=>e instanceof Date;var o=e=>e==null;const s=e=>typeof e==="object";var u=e=>!o(e)&&!Array.isArray(e)&&s(e)&&!i(e);var c=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e;var l=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e;var f=(e,t)=>e.has(l(t));var d=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")};var h=typeof window!=="undefined"&&typeof window.HTMLElement!=="undefined"&&typeof document!=="undefined";function p(e){let t;const r=Array.isArray(e);const n=typeof FileList!=="undefined"?e instanceof FileList:false;if(e instanceof Date){t=new Date(e)}else if(!(h&&(e instanceof Blob||n))&&(r||u(e))){t=r?[]:Object.create(Object.getPrototypeOf(e));if(!r&&!d(e)){t=e}else{for(const r in e){if(e.hasOwnProperty(r)){t[r]=p(e[r])}}}}else{return e}return t}var v=e=>/^\w*$/.test(e);var m=e=>e===undefined;var g=e=>Array.isArray(e)?e.filter(Boolean):[];var y=e=>g(e.replace(/["|']|\]/g,"").split(/\.|\[/));var b=(e,t,r)=>{if(!t||!u(e)){return r}const n=(v(t)?[t]:y(t)).reduce((e,t)=>o(e)?e:e[t],e);return m(n)||n===e?m(e[t])?r:e[t]:n};var _=e=>typeof e==="boolean";var w=(e,t,r)=>{let n=-1;const a=v(t)?[t]:y(t);const i=a.length;const o=i-1;while(++n<i){const t=a[n];let i=r;if(n!==o){const r=e[t];i=u(r)||Array.isArray(r)?r:!isNaN(+a[n+1])?[]:{}}if(t==="__proto__"||t==="constructor"||t==="prototype"){return}e[t]=i;e=e[t]}};const x={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"};const E={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"};const O={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};const S=n.createContext(null);S.displayName="HookFormContext";/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */const A=()=>n.useContext(S);/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */const T=e=>{const{children:t,...r}=e;return n.createElement(S.Provider,{value:r},t)};var R=(e,t,r,n=true)=>{const a={defaultValues:t._defaultValues};for(const i in e){Object.defineProperty(a,i,{get:()=>{const a=i;if(t._proxyFormState[a]!==E.all){t._proxyFormState[a]=!n||E.all}r&&(r[a]=true);return e[a]}})}return a};const k=typeof window!=="undefined"?n.useLayoutEffect:n.useEffect;/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */function C(e){const t=A();const{control:r=t.control,disabled:a,name:i,exact:o}=e||{};const[s,u]=n.useState(r._formState);const c=n.useRef({isDirty:false,isLoading:false,dirtyFields:false,touchedFields:false,validatingFields:false,isValidating:false,isValid:false,errors:false});k(()=>r._subscribe({name:i,formState:c.current,exact:o,callback:e=>{!a&&u({...r._formState,...e})}}),[i,a,o]);n.useEffect(()=>{c.current.isValid&&r._setValid(true)},[r]);return n.useMemo(()=>R(s,r,c.current,false),[s,r])}var I=e=>typeof e==="string";var P=(e,t,r,n,a)=>{if(I(e)){n&&t.watch.add(e);return b(r,e,a)}if(Array.isArray(e)){return e.map(e=>(n&&t.watch.add(e),b(r,e)))}n&&(t.watchAll=true);return r};var D=e=>o(e)||!s(e);function M(e,t,r=new WeakSet){if(D(e)||D(t)){return Object.is(e,t)}if(i(e)&&i(t)){return e.getTime()===t.getTime()}const n=Object.keys(e);const a=Object.keys(t);if(n.length!==a.length){return false}if(r.has(e)||r.has(t)){return true}r.add(e);r.add(t);for(const o of n){const n=e[o];if(!a.includes(o)){return false}if(o!=="ref"){const e=t[o];if(i(n)&&i(e)||u(n)&&u(e)||Array.isArray(n)&&Array.isArray(e)?!M(n,e,r):!Object.is(n,e)){return false}}}return true}/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */function L(e){const t=A();const{control:r=t.control,name:a,defaultValue:i,disabled:o,exact:s,compute:u}=e||{};const c=n.useRef(i);const l=n.useRef(u);const f=n.useRef(undefined);const d=n.useRef(r);const h=n.useRef(a);l.current=u;const[p,v]=n.useState(()=>{const e=r._getWatch(a,c.current);return l.current?l.current(e):e});const m=n.useCallback(e=>{const t=P(a,r._names,e||r._formValues,false,c.current);return l.current?l.current(t):t},[r._formValues,r._names,a]);const g=n.useCallback(e=>{if(!o){const t=P(a,r._names,e||r._formValues,false,c.current);if(l.current){const e=l.current(t);if(!M(e,f.current)){v(e);f.current=e}}else{v(t)}}},[r._formValues,r._names,o,a]);k(()=>{if(d.current!==r||!M(h.current,a)){d.current=r;h.current=a;g()}return r._subscribe({name:a,formState:{values:true},exact:s,callback:e=>{g(e.values)}})},[r,s,a,g]);n.useEffect(()=>r._removeUnmounted());// If name or control changed for this render, synchronously reflect the
// latest value so callers (like useController) see the correct value
// immediately on the same render.
// Optimize: Check control reference first before expensive deepEqual
const y=d.current!==r;const b=h.current;// Cache the computed output to avoid duplicate calls within the same render
// We include shouldReturnImmediate in deps to ensure proper recomputation
const _=n.useMemo(()=>{if(o){return null}const e=!y&&!M(b,a);const t=y||e;return t?m():null},[o,y,a,b,m]);return _!==null?_:p}/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */function F(e){const t=A();const{name:r,disabled:a,control:i=t.control,shouldUnregister:o,defaultValue:s,exact:u=true}=e;const l=f(i._names.array,r);const d=n.useMemo(()=>b(i._formValues,r,b(i._defaultValues,r,s)),[i,r,s]);const h=L({control:i,name:r,defaultValue:d,exact:u});const v=C({control:i,name:r,exact:u});const g=n.useRef(e);const y=n.useRef(undefined);const E=n.useRef(i.register(r,{...e.rules,value:h,..._(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const O=n.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:true,get:()=>!!b(v.errors,r)},isDirty:{enumerable:true,get:()=>!!b(v.dirtyFields,r)},isTouched:{enumerable:true,get:()=>!!b(v.touchedFields,r)},isValidating:{enumerable:true,get:()=>!!b(v.validatingFields,r)},error:{enumerable:true,get:()=>b(v.errors,r)}}),[v,r]);const S=n.useCallback(e=>E.current.onChange({target:{value:c(e),name:r},type:x.CHANGE}),[r]);const T=n.useCallback(()=>E.current.onBlur({target:{value:b(i._formValues,r),name:r},type:x.BLUR}),[r,i._formValues]);const R=n.useCallback(e=>{const t=b(i._fields,r);if(t&&e){t._f.ref={focus:()=>e.focus&&e.focus(),select:()=>e.select&&e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()}}},[i._fields,r]);const k=n.useMemo(()=>({name:r,value:h,..._(a)||v.disabled?{disabled:v.disabled||a}:{},onChange:S,onBlur:T,ref:R}),[r,a,v.disabled,S,T,R,h]);n.useEffect(()=>{const e=i._options.shouldUnregister||o;const t=y.current;if(t&&t!==r&&!l){i.unregister(t)}i.register(r,{...g.current.rules,..._(g.current.disabled)?{disabled:g.current.disabled}:{}});const n=(e,t)=>{const r=b(i._fields,e);if(r&&r._f){r._f.mount=t}};n(r,true);if(e){const e=p(b(i._options.defaultValues,r,g.current.defaultValue));w(i._defaultValues,r,e);if(m(b(i._formValues,r))){w(i._formValues,r,e)}}!l&&i.register(r);y.current=r;return()=>{(l?e&&!i._state.action:e)?i.unregister(r):n(r,false)}},[r,i,l,o]);n.useEffect(()=>{i._setDisabledField({disabled:a,name:r})},[a,r,i]);return n.useMemo(()=>({field:k,formState:v,fieldState:O}),[k,v,O])}/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */const N=e=>e.render(F(e));const j=e=>{const t={};for(const r of Object.keys(e)){if(s(e[r])&&e[r]!==null){const n=j(e[r]);for(const e of Object.keys(n)){t[`${r}.${e}`]=n[e]}}else{t[r]=e[r]}}return t};const U="post";/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */function H(e){const t=A();const[r,n]=React.useState(false);const{control:a=t.control,onSubmit:i,children:o,action:s,method:u=U,headers:c,encType:l,onError:f,render:d,onSuccess:h,validateStatus:p,...v}=e;const m=async t=>{let r=false;let n="";await a.handleSubmit(async e=>{const o=new FormData;let d="";try{d=JSON.stringify(e)}catch(e){}const v=j(a._formValues);for(const e in v){o.append(e,v[e])}if(i){await i({data:e,event:t,method:u,formData:o,formDataJson:d})}if(s){try{const e=[c&&c["Content-Type"],l].some(e=>e&&e.includes("json"));const t=await fetch(String(s),{method:u,headers:{...c,...l&&l!=="multipart/form-data"?{"Content-Type":l}:{}},body:e?d:o});if(t&&(p?!p(t.status):t.status<200||t.status>=300)){r=true;f&&f({response:t});n=String(t.status)}else{h&&h({response:t})}}catch(e){r=true;f&&f({error:e})}}})(t);if(r&&e.control){e.control._subjects.state.next({isSubmitSuccessful:false});e.control.setError("root.server",{type:n})}};React.useEffect(()=>{n(true)},[]);return d?React.createElement(React.Fragment,null,d({submit:m})):React.createElement("form",{noValidate:r,action:s,method:u,encType:l,onSubmit:m,...v},o)}var B=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||true}}:{};var Y=e=>Array.isArray(e)?e:[e];var z=()=>{let e=[];const t=t=>{for(const r of e){r.next&&r.next(t)}};const r=t=>{e.push(t);return{unsubscribe:()=>{e=e.filter(e=>e!==t)}}};const n=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:n}};function V(e,t){const r={};for(const n in e){if(e.hasOwnProperty(n)){const a=e[n];const i=t[n];if(a&&u(a)&&i){const e=V(a,i);if(u(e)){r[n]=e}}else if(e[n]){r[n]=i}}}return r}var q=e=>u(e)&&!Object.keys(e).length;var W=e=>e.type==="file";var $=e=>typeof e==="function";var G=e=>{if(!h){return false}const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)};var K=e=>e.type===`select-multiple`;var Q=e=>e.type==="radio";var X=e=>Q(e)||a(e);var J=e=>G(e)&&e.isConnected;function Z(e,t){const r=t.slice(0,-1).length;let n=0;while(n<r){e=m(e)?n++:e[t[n++]]}return e}function ee(e){for(const t in e){if(e.hasOwnProperty(t)&&!m(e[t])){return false}}return true}function et(e,t){const r=Array.isArray(t)?t:v(t)?[t]:y(t);const n=r.length===1?e:Z(e,r);const a=r.length-1;const i=r[a];if(n){delete n[i]}if(a!==0&&(u(n)&&q(n)||Array.isArray(n)&&ee(n))){et(e,r.slice(0,-1))}return e}var er=e=>{for(const t in e){if($(e[t])){return true}}return false};function en(e){return Array.isArray(e)||u(e)&&!er(e)}function ea(e,t={}){for(const r in e){const n=e[r];if(en(n)){t[r]=Array.isArray(n)?[]:{};ea(n,t[r])}else if(!m(n)){t[r]=true}}return t}function ei(e,t,r){if(!r){r=ea(t)}for(const n in e){const a=e[n];if(en(a)){if(m(t)||D(r[n])){r[n]=ea(a,Array.isArray(a)?[]:{})}else{ei(a,o(t)?{}:t[n],r[n])}}else{const e=t[n];r[n]=!M(a,e)}}return r}const eo={value:false,isValid:false};const es={value:true,isValid:true};var eu=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||e[0].value===""?es:{value:e[0].value,isValid:true}:es:eo}return eo};var ec=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>m(e)?e:t?e===""?NaN:e?+e:e:r&&I(e)?new Date(e):n?n(e):e;const el={isValid:false,value:null};var ef=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:true,value:t.value}:e,el):el;function ed(e){const t=e.ref;if(W(t)){return t.files}if(Q(t)){return ef(e.refs).value}if(K(t)){return[...t.selectedOptions].map(({value:e})=>e)}if(a(t)){return eu(e.refs).value}return ec(m(t.value)?e.ref.value:t.value,e)}var eh=(e,t,r,n)=>{const a={};for(const r of e){const e=b(t,r);e&&w(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}};var ep=e=>e instanceof RegExp;var ev=e=>m(e)?e:ep(e)?e.source:u(e)?ep(e.value)?e.value.source:e.value:e;var em=e=>({isOnSubmit:!e||e===E.onSubmit,isOnBlur:e===E.onBlur,isOnChange:e===E.onChange,isOnAll:e===E.all,isOnTouch:e===E.onTouched});const eg="AsyncFunction";var ey=e=>!!e&&!!e.validate&&!!($(e.validate)&&e.validate.constructor.name===eg||u(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===eg));var eb=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);var e_=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const ew=(e,t,r,n)=>{for(const a of r||Object.keys(e)){const r=b(e,a);if(r){const{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!n){return true}else if(e.ref&&t(e.ref,e.name)&&!n){return true}else{if(ew(i,t)){break}}}else if(u(i)){if(ew(i,t)){break}}}}return};function ex(e,t,r){const n=b(e,r);if(n||v(r)){return{error:n,name:r}}const a=r.split(".");while(a.length){const n=a.join(".");const i=b(t,n);const o=b(e,n);if(i&&!Array.isArray(i)&&r!==n){return{name:r}}if(o&&o.type){return{name:n,error:o}}if(o&&o.root&&o.root.type){return{name:`${n}.root`,error:o.root}}a.pop()}return{name:r}}var eE=(e,t,r,n)=>{r(e);const{name:a,...i}=e;return q(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!n||E.all))};var eO=(e,t,r)=>!e||!t||e===t||Y(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));var eS=(e,t,r,n,a)=>{if(a.isOnAll){return false}else if(!r&&a.isOnTouch){return!(t||e)}else if(r?n.isOnBlur:a.isOnBlur){return!e}else if(r?n.isOnChange:a.isOnChange){return e}return true};var eA=(e,t)=>!g(b(e,t)).length&&et(e,t);var eT=(e,t,r)=>{const n=Y(b(e,r));w(n,"root",t[r]);w(e,r,n);return e};function eR(e,t,r="validate"){if(I(e)||Array.isArray(e)&&e.every(I)||_(e)&&!e){return{type:r,message:I(e)?e:"",ref:t}}}var ek=e=>u(e)&&!ep(e)?e:{value:e,message:""};var eC=async(e,t,r,n,i,s)=>{const{ref:c,refs:l,required:f,maxLength:d,minLength:h,min:p,max:v,pattern:g,validate:y,name:w,valueAsNumber:x,mount:E}=e._f;const S=b(r,w);if(!E||t.has(w)){return{}}const A=l?l[0]:c;const T=e=>{if(i&&A.reportValidity){A.setCustomValidity(_(e)?"":e||"");A.reportValidity()}};const R={};const k=Q(c);const C=a(c);const P=k||C;const D=(x||W(c))&&m(c.value)&&m(S)||G(c)&&c.value===""||S===""||Array.isArray(S)&&!S.length;const M=B.bind(null,w,n,R);const L=(e,t,r,n=O.maxLength,a=O.minLength)=>{const i=e?t:r;R[w]={type:e?n:a,message:i,ref:c,...M(e?n:a,i)}};if(s?!Array.isArray(S)||!S.length:f&&(!P&&(D||o(S))||_(S)&&!S||C&&!eu(l).isValid||k&&!ef(l).isValid)){const{value:e,message:t}=I(f)?{value:!!f,message:f}:ek(f);if(e){R[w]={type:O.required,message:t,ref:A,...M(O.required,t)};if(!n){T(t);return R}}}if(!D&&(!o(p)||!o(v))){let e;let t;const r=ek(v);const a=ek(p);if(!o(S)&&!isNaN(S)){const n=c.valueAsNumber||(S?+S:S);if(!o(r.value)){e=n>r.value}if(!o(a.value)){t=n<a.value}}else{const n=c.valueAsDate||new Date(S);const i=e=>new Date(new Date().toDateString()+" "+e);const o=c.type=="time";const s=c.type=="week";if(I(r.value)&&S){e=o?i(S)>i(r.value):s?S>r.value:n>new Date(r.value)}if(I(a.value)&&S){t=o?i(S)<i(a.value):s?S<a.value:n<new Date(a.value)}}if(e||t){L(!!e,r.message,a.message,O.max,O.min);if(!n){T(R[w].message);return R}}}if((d||h)&&!D&&(I(S)||s&&Array.isArray(S))){const e=ek(d);const t=ek(h);const r=!o(e.value)&&S.length>+e.value;const a=!o(t.value)&&S.length<+t.value;if(r||a){L(r,e.message,t.message);if(!n){T(R[w].message);return R}}}if(g&&!D&&I(S)){const{value:e,message:t}=ek(g);if(ep(e)&&!S.match(e)){R[w]={type:O.pattern,message:t,ref:c,...M(O.pattern,t)};if(!n){T(t);return R}}}if(y){if($(y)){const e=await y(S,r);const t=eR(e,A);if(t){R[w]={...t,...M(O.validate,t.message)};if(!n){T(t.message);return R}}}else if(u(y)){let e={};for(const t in y){if(!q(e)&&!n){break}const a=eR(await y[t](S,r),A,t);if(a){e={...a,...M(t,a.message)};T(a.message);if(n){R[w]=e}}}if(!q(e)){R[w]={ref:A,...e};if(!n){return R}}}}T(true);return R};const eI={mode:E.onSubmit,reValidateMode:E.onChange,shouldFocusError:true};function eP(e={}){let t={...eI,...e};let r={submitCount:0,isDirty:false,isReady:false,isLoading:$(t.defaultValues),isValidating:false,isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||false};let n={};let s=u(t.defaultValues)||u(t.values)?p(t.defaultValues||t.values)||{}:{};let l=t.shouldUnregister?{}:p(s);let d={action:false,mount:false,watch:false};let v={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set};let y;let O=0;const S={isDirty:false,dirtyFields:false,validatingFields:false,touchedFields:false,isValidating:false,isValid:false,errors:false};let A={...S};const T={array:z(),state:z()};const R=t.criteriaMode===E.all;const k=e=>t=>{clearTimeout(O);O=setTimeout(e,t)};const C=async e=>{if(!t.disabled&&(S.isValid||A.isValid||e)){const e=t.resolver?q((await B()).errors):await Z(n,true);if(e!==r.isValid){T.state.next({isValid:e})}}};const D=(e,n)=>{if(!t.disabled&&(S.isValidating||S.validatingFields||A.isValidating||A.validatingFields)){(e||Array.from(v.mount)).forEach(e=>{if(e){n?w(r.validatingFields,e,n):et(r.validatingFields,e)}});T.state.next({validatingFields:r.validatingFields,isValidating:!q(r.validatingFields)})}};const L=(e,a=[],i,o,u=true,c=true)=>{if(o&&i&&!t.disabled){d.action=true;if(c&&Array.isArray(b(n,e))){const t=i(b(n,e),o.argA,o.argB);u&&w(n,e,t)}if(c&&Array.isArray(b(r.errors,e))){const t=i(b(r.errors,e),o.argA,o.argB);u&&w(r.errors,e,t);eA(r.errors,e)}if((S.touchedFields||A.touchedFields)&&c&&Array.isArray(b(r.touchedFields,e))){const t=i(b(r.touchedFields,e),o.argA,o.argB);u&&w(r.touchedFields,e,t)}if(S.dirtyFields||A.dirtyFields){r.dirtyFields=ei(s,l)}T.state.next({name:e,isDirty:er(e,a),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else{w(l,e,a)}};const F=(e,t)=>{w(r.errors,e,t);T.state.next({errors:r.errors})};const N=e=>{r.errors=e;T.state.next({errors:r.errors,isValid:false})};const j=(e,t,r,a)=>{const i=b(n,e);if(i){const n=b(l,e,m(r)?b(s,e):r);m(n)||a&&a.defaultChecked||t?w(l,e,t?n:ed(i._f)):eo(e,n);d.mount&&!d.action&&C()}};const U=(e,n,a,i,o)=>{let u=false;let c=false;const l={name:e};if(!t.disabled){if(!a||i){if(S.isDirty||A.isDirty){c=r.isDirty;r.isDirty=l.isDirty=er();u=c!==l.isDirty}const t=M(b(s,e),n);c=!!b(r.dirtyFields,e);t?et(r.dirtyFields,e):w(r.dirtyFields,e,true);l.dirtyFields=r.dirtyFields;u=u||(S.dirtyFields||A.dirtyFields)&&c!==!t}if(a){const t=b(r.touchedFields,e);if(!t){w(r.touchedFields,e,a);l.touchedFields=r.touchedFields;u=u||(S.touchedFields||A.touchedFields)&&t!==a}}u&&o&&T.state.next(l)}return u?l:{}};const H=(e,n,a,i)=>{const o=b(r.errors,e);const s=(S.isValid||A.isValid)&&_(n)&&r.isValid!==n;if(t.delayError&&a){y=k(()=>F(e,a));y(t.delayError)}else{clearTimeout(O);y=null;a?w(r.errors,e,a):et(r.errors,e)}if((a?!M(o,a):o)||!q(i)||s){const t={...i,...s&&_(n)?{isValid:n}:{},errors:r.errors,name:e};r={...r,...t};T.state.next(t)}};const B=async e=>{D(e,true);const r=await t.resolver(l,t.context,eh(e||v.mount,n,t.criteriaMode,t.shouldUseNativeValidation));D(e);return r};const Q=async e=>{const{errors:t}=await B(e);if(e){for(const n of e){const e=b(t,n);e?w(r.errors,n,e):et(r.errors,n)}}else{r.errors=t}return t};const Z=async(e,n,a={valid:true})=>{for(const i in e){const o=e[i];if(o){const{_f:e,...i}=o;if(e){const i=v.array.has(e.name);const s=o._f&&ey(o._f);if(s&&S.validatingFields){D([e.name],true)}const u=await eC(o,v.disabled,l,R,t.shouldUseNativeValidation&&!n,i);if(s&&S.validatingFields){D([e.name])}if(u[e.name]){a.valid=false;if(n){break}}!n&&(b(u,e.name)?i?eT(r.errors,u,e.name):w(r.errors,e.name,u[e.name]):et(r.errors,e.name))}!q(i)&&await Z(i,n,a)}}return a.valid};const ee=()=>{for(const e of v.unMount){const t=b(n,e);t&&(t._f.refs?t._f.refs.every(e=>!J(e)):!J(t._f.ref))&&eN(e)}v.unMount=new Set};const er=(e,r)=>!t.disabled&&(e&&r&&w(l,e,r),!M(eg(),s));const en=(e,t,r)=>P(e,v,{...d.mount?l:m(t)?s:I(e)?{[e]:t}:t},r,t);const ea=e=>g(b(d.mount?l:s,e,t.shouldUnregister?b(s,e,[]):[]));const eo=(e,t,r={})=>{const i=b(n,e);let s=t;if(i){const r=i._f;if(r){!r.disabled&&w(l,e,ec(t,r));s=G(r.ref)&&o(t)?"":t;if(K(r.ref)){[...r.ref.options].forEach(e=>e.selected=s.includes(e.value))}else if(r.refs){if(a(r.ref)){r.refs.forEach(e=>{if(!e.defaultChecked||!e.disabled){if(Array.isArray(s)){e.checked=!!s.find(t=>t===e.value)}else{e.checked=s===e.value||!!s}}})}else{r.refs.forEach(e=>e.checked=e.value===s)}}else if(W(r.ref)){r.ref.value=""}else{r.ref.value=s;if(!r.ref.type){T.state.next({name:e,values:p(l)})}}}}(r.shouldDirty||r.shouldTouch)&&U(e,s,r.shouldTouch,r.shouldDirty,true);r.shouldValidate&&ep(e)};const es=(e,t,r)=>{for(const a in t){if(!t.hasOwnProperty(a)){return}const o=t[a];const s=e+"."+a;const c=b(n,s);(v.array.has(e)||u(o)||c&&!c._f)&&!i(o)?es(s,o,r):eo(s,o,r)}};const eu=(e,t,a={})=>{const i=b(n,e);const u=v.array.has(e);const c=p(t);w(l,e,c);if(u){T.array.next({name:e,values:p(l)});if((S.isDirty||S.dirtyFields||A.isDirty||A.dirtyFields)&&a.shouldDirty){T.state.next({name:e,dirtyFields:ei(s,l),isDirty:er(e,c)})}}else{i&&!i._f&&!o(c)?es(e,c,a):eo(e,c,a)}e_(e,v)&&T.state.next({...r,name:e});T.state.next({name:d.mount?e:undefined,values:p(l)})};const el=async e=>{d.mount=true;const a=e.target;let o=a.name;let s=true;const u=b(n,o);const f=e=>{s=Number.isNaN(e)||i(e)&&isNaN(e.getTime())||M(e,b(l,o,e))};const h=em(t.mode);const m=em(t.reValidateMode);if(u){let i;let d;const g=a.type?ed(u._f):c(e);const _=e.type===x.BLUR||e.type===x.FOCUS_OUT;const E=!eb(u._f)&&!t.resolver&&!b(r.errors,o)&&!u._f.deps||eS(_,b(r.touchedFields,o),r.isSubmitted,m,h);const O=e_(o,v,_);w(l,o,g);if(_){if(!a||!a.readOnly){u._f.onBlur&&u._f.onBlur(e);y&&y(0)}}else if(u._f.onChange){u._f.onChange(e)}const k=U(o,g,_);const I=!q(k)||O;!_&&T.state.next({name:o,type:e.type,values:p(l)});if(E){if(S.isValid||A.isValid){if(t.mode==="onBlur"){if(_){C()}}else if(!_){C()}}return I&&T.state.next({name:o,...O?{}:k})}!_&&O&&T.state.next({...r});if(t.resolver){const{errors:e}=await B([o]);f(g);if(s){const t=ex(r.errors,n,o);const a=ex(e,n,t.name||o);i=a.error;o=a.name;d=q(e)}}else{D([o],true);i=(await eC(u,v.disabled,l,R,t.shouldUseNativeValidation))[o];D([o]);f(g);if(s){if(i){d=false}else if(S.isValid||A.isValid){d=await Z(n,true)}}}if(s){u._f.deps&&(!Array.isArray(u._f.deps)||u._f.deps.length>0)&&ep(u._f.deps);H(o,d,i,k)}}};const ef=(e,t)=>{if(b(r.errors,t)&&e.focus){e.focus();return 1}return};const ep=async(e,a={})=>{let i;let o;const s=Y(e);if(t.resolver){const t=await Q(m(e)?e:s);i=q(t);o=e?!s.some(e=>b(t,e)):i}else if(e){o=(await Promise.all(s.map(async e=>{const t=b(n,e);return await Z(t&&t._f?{[e]:t}:t)}))).every(Boolean);!(!o&&!r.isValid)&&C()}else{o=i=await Z(n)}T.state.next({...!I(e)||(S.isValid||A.isValid)&&i!==r.isValid?{}:{name:e},...t.resolver||!e?{isValid:i}:{},errors:r.errors});a.shouldFocus&&!o&&ew(n,ef,e?s:v.mount);return o};const eg=(e,t)=>{let n={...d.mount?l:s};if(t){n=V(t.dirtyFields?r.dirtyFields:r.touchedFields,n)}return m(e)?n:I(e)?b(n,e):e.map(e=>b(n,e))};const eR=(e,t)=>({invalid:!!b((t||r).errors,e),isDirty:!!b((t||r).dirtyFields,e),error:b((t||r).errors,e),isValidating:!!b(r.validatingFields,e),isTouched:!!b((t||r).touchedFields,e)});const ek=e=>{e&&Y(e).forEach(e=>et(r.errors,e));T.state.next({errors:e?r.errors:{}})};const eD=(e,t,a)=>{const i=(b(n,e,{_f:{}})._f||{}).ref;const o=b(r.errors,e)||{};// Don't override existing error messages elsewhere in the object tree.
const{ref:s,message:u,type:c,...l}=o;w(r.errors,e,{...l,...t,ref:i});T.state.next({name:e,errors:r.errors,isValid:false});a&&a.shouldFocus&&i&&i.focus&&i.focus()};const eM=(e,t)=>$(e)?T.state.subscribe({next:r=>"values"in r&&e(en(undefined,t),r)}):en(e,t,true);const eL=e=>T.state.subscribe({next:t=>{if(eO(e.name,t.name,e.exact)&&eE(t,e.formState||S,e$,e.reRenderRoot)){e.callback({values:{...l},...r,...t,defaultValues:s})}}}).unsubscribe;const eF=e=>{d.mount=true;A={...A,...e.formState};return eL({...e,formState:A})};const eN=(e,a={})=>{for(const i of e?Y(e):v.mount){v.mount.delete(i);v.array.delete(i);if(!a.keepValue){et(n,i);et(l,i)}!a.keepError&&et(r.errors,i);!a.keepDirty&&et(r.dirtyFields,i);!a.keepTouched&&et(r.touchedFields,i);!a.keepIsValidating&&et(r.validatingFields,i);!t.shouldUnregister&&!a.keepDefaultValue&&et(s,i)}T.state.next({values:p(l)});T.state.next({...r,...!a.keepDirty?{}:{isDirty:er()}});!a.keepIsValid&&C()};const ej=({disabled:e,name:t})=>{if(_(e)&&d.mount||!!e||v.disabled.has(t)){e?v.disabled.add(t):v.disabled.delete(t)}};const eU=(e,r={})=>{let a=b(n,e);const i=_(r.disabled)||_(t.disabled);w(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:true,...r}});v.mount.add(e);if(a){ej({disabled:_(r.disabled)?r.disabled:t.disabled,name:e})}else{j(e,true,r.value)}return{...i?{disabled:r.disabled||t.disabled}:{},...t.progressive?{required:!!r.required,min:ev(r.min),max:ev(r.max),minLength:ev(r.minLength),maxLength:ev(r.maxLength),pattern:ev(r.pattern)}:{},name:e,onChange:el,onBlur:el,ref:i=>{if(i){eU(e,r);a=b(n,e);const t=m(i.value)?i.querySelectorAll?i.querySelectorAll("input,select,textarea")[0]||i:i:i;const o=X(t);const u=a._f.refs||[];if(o?u.find(e=>e===t):t===a._f.ref){return}w(n,e,{_f:{...a._f,...o?{refs:[...u.filter(J),t,...Array.isArray(b(s,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}});j(e,false,undefined,t)}else{a=b(n,e,{});if(a._f){a._f.mount=false}(t.shouldUnregister||r.shouldUnregister)&&!(f(v.array,e)&&d.action)&&v.unMount.add(e)}}}};const eH=()=>t.shouldFocusError&&ew(n,ef,v.mount);const eB=e=>{if(_(e)){T.state.next({disabled:e});ew(n,(t,r)=>{const a=b(n,r);if(a){t.disabled=a._f.disabled||e;if(Array.isArray(a._f.refs)){a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e})}}},0,false)}};const eY=(e,a)=>async i=>{let o=undefined;if(i){i.preventDefault&&i.preventDefault();i.persist&&i.persist()}let s=p(l);T.state.next({isSubmitting:true});if(t.resolver){const{errors:e,values:t}=await B();r.errors=e;s=p(t)}else{await Z(n)}if(v.disabled.size){for(const e of v.disabled){et(s,e)}}et(r.errors,"root");if(q(r.errors)){T.state.next({errors:{}});try{await e(s,i)}catch(e){o=e}}else{if(a){await a({...r.errors},i)}eH();setTimeout(eH)}T.state.next({isSubmitted:true,isSubmitting:false,isSubmitSuccessful:q(r.errors)&&!o,submitCount:r.submitCount+1,errors:r.errors});if(o){throw o}};const ez=(e,t={})=>{if(b(n,e)){if(m(t.defaultValue)){eu(e,p(b(s,e)))}else{eu(e,t.defaultValue);w(s,e,p(t.defaultValue))}if(!t.keepTouched){et(r.touchedFields,e)}if(!t.keepDirty){et(r.dirtyFields,e);r.isDirty=t.defaultValue?er(e,p(b(s,e))):er()}if(!t.keepError){et(r.errors,e);S.isValid&&C()}T.state.next({...r})}};const eV=(e,a={})=>{const i=e?p(e):s;const o=p(i);const u=q(e);const c=u?s:o;if(!a.keepDefaultValues){s=i}if(!a.keepValues){if(a.keepDirtyValues){const e=new Set([...v.mount,...Object.keys(ei(s,l))]);for(const t of Array.from(e)){b(r.dirtyFields,t)?w(c,t,b(l,t)):eu(t,b(c,t))}}else{if(h&&m(e)){for(const e of v.mount){const t=b(n,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(G(e)){const t=e.closest("form");if(t){t.reset();break}}}}}if(a.keepFieldsRef){for(const e of v.mount){eu(e,b(c,e))}}else{n={}}}l=t.shouldUnregister?a.keepDefaultValues?p(s):{}:p(c);T.array.next({values:{...c}});T.state.next({values:{...c}})}v={mount:a.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:false,focus:""};d.mount=!S.isValid||!!a.keepIsValid||!!a.keepDirtyValues||!t.shouldUnregister&&!q(c);d.watch=!!t.shouldUnregister;T.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:u?false:a.keepDirty?r.isDirty:!!(a.keepDefaultValues&&!M(e,s)),isSubmitted:a.keepIsSubmitted?r.isSubmitted:false,dirtyFields:u?{}:a.keepDirtyValues?a.keepDefaultValues&&l?ei(s,l):r.dirtyFields:a.keepDefaultValues&&e?ei(s,e):a.keepDirty?r.dirtyFields:{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?r.isSubmitSuccessful:false,isSubmitting:false,defaultValues:s})};const eq=(e,t)=>eV($(e)?e(l):e,t);const eW=(e,t={})=>{const r=b(n,e);const a=r&&r._f;if(a){const e=a.refs?a.refs[0]:a.ref;if(e.focus){e.focus();t.shouldSelect&&$(e.select)&&e.select()}}};const e$=e=>{r={...r,...e}};const eG=()=>$(t.defaultValues)&&t.defaultValues().then(e=>{eq(e,t.resetOptions);T.state.next({isLoading:false})});const eK={control:{register:eU,unregister:eN,getFieldState:eR,handleSubmit:eY,setError:eD,_subscribe:eL,_runSchema:B,_focusError:eH,_getWatch:en,_getDirty:er,_setValid:C,_setFieldArray:L,_setDisabledField:ej,_setErrors:N,_getFieldArray:ea,_reset:eV,_resetDefaultValues:eG,_removeUnmounted:ee,_disableForm:eB,_subjects:T,_proxyFormState:S,get _fields(){return n},get _formValues(){return l},get _state(){return d},set _state(value){d=value},get _defaultValues(){return s},get _names(){return v},set _names(value){v=value},get _formState(){return r},get _options(){return t},set _options(value){t={...t,...value}}},subscribe:eF,trigger:ep,register:eU,handleSubmit:eY,watch:eM,setValue:eu,getValues:eg,reset:eq,resetField:ez,clearErrors:ek,unregister:eN,setError:eD,setFocus:eW,getFieldState:eR};return{...eK,formControl:eK}}var eD=()=>{if(typeof crypto!=="undefined"&&crypto.randomUUID){return crypto.randomUUID()}const e=typeof performance==="undefined"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})};var eM=(e,t,r={})=>r.shouldFocus||m(r.shouldFocus)?r.focusName||`${e}.${m(r.focusIndex)?t:r.focusIndex}.`:"";var eL=(e,t)=>[...e,...Y(t)];var eF=e=>Array.isArray(e)?e.map(()=>undefined):undefined;function eN(e,t,r){return[...e.slice(0,t),...Y(r),...e.slice(t)]}var ej=(e,t,r)=>{if(!Array.isArray(e)){return[]}if(m(e[r])){e[r]=undefined}e.splice(r,0,e.splice(t,1)[0]);return e};var eU=(e,t)=>[...Y(t),...Y(e)];function eH(e,t){let r=0;const n=[...e];for(const e of t){n.splice(e-r,1);r++}return g(n).length?n:[]}var eB=(e,t)=>m(t)?[]:eH(e,Y(t).sort((e,t)=>e-t));var eY=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};var ez=(e,t,r)=>{e[t]=r;return e};/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */function eV(e){const t=A();const{control:r=t.control,name:a,keyName:i="id",shouldUnregister:o,rules:s}=e;const[u,c]=n.useState(r._getFieldArray(a));const l=n.useRef(r._getFieldArray(a).map(eD));const f=n.useRef(false);r._names.array.add(a);n.useMemo(()=>s&&u.length>=0&&r.register(a,s),[r,a,u.length,s]);k(()=>r._subjects.array.subscribe({next:({values:e,name:t})=>{if(t===a||!t){const t=b(e,a);if(Array.isArray(t)){c(t);l.current=t.map(eD)}}}}).unsubscribe,[r,a]);const d=n.useCallback(e=>{f.current=true;r._setFieldArray(a,e)},[r,a]);const h=(e,t)=>{const n=Y(p(e));const i=eL(r._getFieldArray(a),n);r._names.focus=eM(a,i.length-1,t);l.current=eL(l.current,n.map(eD));d(i);c(i);r._setFieldArray(a,i,eL,{argA:eF(e)})};const v=(e,t)=>{const n=Y(p(e));const i=eU(r._getFieldArray(a),n);r._names.focus=eM(a,0,t);l.current=eU(l.current,n.map(eD));d(i);c(i);r._setFieldArray(a,i,eU,{argA:eF(e)})};const m=e=>{const t=eB(r._getFieldArray(a),e);l.current=eB(l.current,e);d(t);c(t);!Array.isArray(b(r._fields,a))&&w(r._fields,a,undefined);r._setFieldArray(a,t,eB,{argA:e})};const g=(e,t,n)=>{const i=Y(p(t));const o=eN(r._getFieldArray(a),e,i);r._names.focus=eM(a,e,n);l.current=eN(l.current,e,i.map(eD));d(o);c(o);r._setFieldArray(a,o,eN,{argA:e,argB:eF(t)})};const y=(e,t)=>{const n=r._getFieldArray(a);eY(n,e,t);eY(l.current,e,t);d(n);c(n);r._setFieldArray(a,n,eY,{argA:e,argB:t},false)};const _=(e,t)=>{const n=r._getFieldArray(a);ej(n,e,t);ej(l.current,e,t);d(n);c(n);r._setFieldArray(a,n,ej,{argA:e,argB:t},false)};const x=(e,t)=>{const n=p(t);const i=ez(r._getFieldArray(a),e,n);l.current=[...i].map((t,r)=>!t||r===e?eD():l.current[r]);d(i);c([...i]);r._setFieldArray(a,i,ez,{argA:e,argB:n},true,false)};const O=e=>{const t=Y(p(e));l.current=t.map(eD);d([...t]);c([...t]);r._setFieldArray(a,[...t],e=>e,{},true,false)};n.useEffect(()=>{r._state.action=false;e_(a,r._names)&&r._subjects.state.next({...r._formState});if(f.current&&(!em(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!em(r._options.reValidateMode).isOnSubmit){if(r._options.resolver){r._runSchema([a]).then(e=>{const t=b(e.errors,a);const n=b(r._formState.errors,a);if(n?!t&&n.type||t&&(n.type!==t.type||n.message!==t.message):t&&t.type){t?w(r._formState.errors,a,t):et(r._formState.errors,a);r._subjects.state.next({errors:r._formState.errors})}})}else{const e=b(r._fields,a);if(e&&e._f&&!(em(r._options.reValidateMode).isOnSubmit&&em(r._options.mode).isOnSubmit)){eC(e,r._names.disabled,r._formValues,r._options.criteriaMode===E.all,r._options.shouldUseNativeValidation,true).then(e=>!q(e)&&r._subjects.state.next({errors:eT(r._formState.errors,e,a)}))}}}r._subjects.state.next({name:a,values:p(r._formValues)});r._names.focus&&ew(r._fields,(e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus){e.focus();return 1}return});r._names.focus="";r._setValid();f.current=false},[u,a,r]);n.useEffect(()=>{!b(r._formValues,a)&&r._setFieldArray(a);return()=>{const e=(e,t)=>{const n=b(r._fields,e);if(n&&n._f){n._f.mount=t}};r._options.shouldUnregister||o?r.unregister(a):e(a,false)}},[a,r,i,o]);return{swap:n.useCallback(y,[d,a,r]),move:n.useCallback(_,[d,a,r]),prepend:n.useCallback(v,[d,a,r]),append:n.useCallback(h,[d,a,r]),remove:n.useCallback(m,[d,a,r]),insert:n.useCallback(g,[d,a,r]),update:n.useCallback(x,[d,a,r]),replace:n.useCallback(O,[d,a,r]),fields:n.useMemo(()=>u.map((e,t)=>({...e,[i]:l.current[t]||eD()})),[u,i])}}/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */function eq(e={}){const t=n.useRef(undefined);const r=n.useRef(undefined);const[a,i]=n.useState({isDirty:false,isValidating:false,isLoading:$(e.defaultValues),isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||false,isReady:false,defaultValues:$(e.defaultValues)?undefined:e.defaultValues});if(!t.current){if(e.formControl){t.current={...e.formControl,formState:a};if(e.defaultValues&&!$(e.defaultValues)){e.formControl.reset(e.defaultValues,e.resetOptions)}}else{const{formControl:r,...n}=eP(e);t.current={...n,formState:a}}}const o=t.current.control;o._options=e;k(()=>{const e=o._subscribe({formState:o._proxyFormState,callback:()=>i({...o._formState}),reRenderRoot:true});i(e=>({...e,isReady:true}));o._formState.isReady=true;return e},[o]);n.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]);n.useEffect(()=>{if(e.mode){o._options.mode=e.mode}if(e.reValidateMode){o._options.reValidateMode=e.reValidateMode}},[o,e.mode,e.reValidateMode]);n.useEffect(()=>{if(e.errors){o._setErrors(e.errors);o._focusError()}},[o,e.errors]);n.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]);n.useEffect(()=>{if(o._proxyFormState.isDirty){const e=o._getDirty();if(e!==a.isDirty){o._subjects.state.next({isDirty:e})}}},[o,a.isDirty]);n.useEffect(()=>{var t;if(e.values&&!M(e.values,r.current)){o._reset(e.values,{keepFieldsRef:true,...o._options.resetOptions});if(!((t=o._options.resetOptions)===null||t===void 0?void 0:t.keepIsValid)){o._setValid()}r.current=e.values;i(e=>({...e}))}else{o._resetDefaultValues()}},[o,e.values]);n.useEffect(()=>{if(!o._state.mount){o._setValid();o._state.mount=true}if(o._state.watch){o._state.watch=false;o._subjects.state.next({...o._formState})}o._removeUnmounted()});t.current.formState=R(a,o);return t.current}/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param names - Array of field names to watch for changes
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */const eW=({control:e,names:t,render:r})=>r(L({control:e,name:t}));//# sourceMappingURL=index.esm.mjs.map
},8606:function(e,t,r){"use strict";// EXPORTS
r.d(t,{CS:()=>/* binding */nx,le:()=>/* reexport */eC,zh:()=>/* reexport */r$,pn:()=>/* reexport */rJ});// UNUSED EXPORTS: interpolate, SpringContext, inferTo, to, Spring, useSpringValue, Trail, useSprings, a, SpringRef, Interpolation, config, useScroll, useInView, update, useResize, Controller, useIsomorphicLayoutEffect, useTrail, Transition, SpringValue, useChain, Any, FrameValue, BailSignal, useSpringRef, createInterpolator, useReducedMotion, Globals
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@react-spring+rafz@9.7.5/node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs
// src/index.ts
var n=_();var a=e=>v(e,n);var i=_();a.write=e=>v(e,i);var o=_();a.onStart=e=>v(e,o);var s=_();a.onFrame=e=>v(e,s);var u=_();a.onFinish=e=>v(e,u);var c=[];a.setTimeout=(e,t)=>{const r=a.now()+t;const n=()=>{const e=c.findIndex(e=>e.cancel==n);if(~e)c.splice(e,1);h-=~e?1:0};const i={time:r,handler:e,cancel:n};c.splice(l(r),0,i);h+=1;m();return i};var l=e=>~(~c.findIndex(t=>t.time>e)||~c.length);a.cancel=e=>{o.delete(e);s.delete(e);u.delete(e);n.delete(e);i.delete(e)};a.sync=e=>{p=true;a.batchedUpdates(e);p=false};a.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e;a.onStart(r)}n.handler=e;n.cancel=()=>{o.delete(r);t=null};return n};var f=typeof window!="undefined"?window.requestAnimationFrame:// eslint-disable-next-line @typescript-eslint/no-empty-function
()=>{};a.use=e=>f=e;a.now=typeof performance!="undefined"?()=>performance.now():Date.now;a.batchedUpdates=e=>e();a.catch=console.error;a.frameLoop="always";a.advance=()=>{if(a.frameLoop!=="demand"){console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand")}else{b()}};var d=-1;var h=0;var p=false;function v(e,t){if(p){t.delete(e);e(0)}else{t.add(e);m()}}function m(){if(d<0){d=0;if(a.frameLoop!=="demand"){f(y)}}}function g(){d=-1}function y(){if(~d){f(y);a.batchedUpdates(b)}}function b(){const e=d;d=a.now();const t=l(d);if(t){w(c.splice(0,t),e=>e.handler());h-=t}if(!h){g();return}o.flush();n.flush(e?Math.min(64,d-e):16.667);s.flush();i.flush();u.flush()}function _(){let e=/* @__PURE__ */new Set;let t=e;return{add(r){h+=t==e&&!e.has(r)?1:0;e.add(r)},delete(r){h-=t==e&&e.has(r)?1:0;return e.delete(r)},flush(r){if(t.size){e=/* @__PURE__ */new Set;h-=t.size;w(t,t=>t(r)&&e.add(t));h+=e.size;t=e}}}}function w(e,t){e.forEach(e=>{try{t(e)}catch(e){a.catch(e)}})}var x=/* unused pure expression or super */null&&{/** The number of pending tasks */count(){return h},/** Whether there's a raf update loop running */isRunning(){return d>=0},/** Clear internal state. Never call from update loop! */clear(){d=-1;c=[];o=_();n=_();s=_();i=_();u=_();h=0}};//# sourceMappingURL=react-spring_rafz.modern.mjs.map
// EXTERNAL MODULE: external "React"
var E=r(1594);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@react-spring+shared@9.7.5_react@18.3.1/node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs
var O=Object.defineProperty;var S=(e,t)=>{for(var r in t)O(e,r,{get:t[r],enumerable:true})};// src/globals.ts
var A={};S(A,{assign:()=>Y,colors:()=>U,createStringInterpolator:()=>N,skipAnimation:()=>H,to:()=>j,willAdvance:()=>B});// src/helpers.ts
function T(){}var R=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:true,configurable:true});var k={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e==="function",str:e=>typeof e==="string",num:e=>typeof e==="number",und:e=>e===void 0};function C(e,t){if(k.arr(e)){if(!k.arr(t)||e.length!==t.length)return false;for(let r=0;r<e.length;r++){if(e[r]!==t[r])return false}return true}return e===t}var I=(e,t)=>e.forEach(t);function P(e,t,r){if(k.arr(e)){for(let n=0;n<e.length;n++){t.call(r,e[n],`${n}`)}return}for(const n in e){if(e.hasOwnProperty(n)){t.call(r,e[n],n)}}}var D=e=>k.und(e)?[]:k.arr(e)?e:[e];function M(e,t){if(e.size){const r=Array.from(e);e.clear();I(r,t)}}var L=(e,...t)=>M(e,e=>e(...t));var F=()=>typeof window==="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);// src/globals.ts
var N;var j;var U=null;var H=false;var B=T;var Y=e=>{if(e.to)j=e.to;if(e.now)a.now=e.now;if(e.colors!==void 0)U=e.colors;if(e.skipAnimation!=null)H=e.skipAnimation;if(e.createStringInterpolator)N=e.createStringInterpolator;if(e.requestAnimationFrame)a.use(e.requestAnimationFrame);if(e.batchedUpdates)a.batchedUpdates=e.batchedUpdates;if(e.willAdvance)B=e.willAdvance;if(e.frameLoop)a.frameLoop=e.frameLoop};// src/FrameLoop.ts
var z=/* @__PURE__ */new Set;var V=[];var q=[];var W=0;var $={get idle(){return!z.size&&!V.length},/** Advance the given animation on every frame until idle. */start(e){if(W>e.priority){z.add(e);a.onStart(G)}else{K(e);a(X)}},/** Advance all animations by the given time. */advance:X,/** Call this when an animation's priority changes. */sort(e){if(W){a.onFrame(()=>$.sort(e))}else{const t=V.indexOf(e);if(~t){V.splice(t,1);Q(e)}}},/**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */clear(){V=[];z.clear()}};function G(){z.forEach(K);z.clear();a(X)}function K(e){if(!V.includes(e))Q(e)}function Q(e){V.splice(J(V,t=>t.priority>e.priority),0,e)}function X(e){const t=q;for(let r=0;r<V.length;r++){const n=V[r];W=n.priority;if(!n.idle){B(n);n.advance(e);if(!n.idle){t.push(n)}}}W=0;q=V;q.length=0;V=t;return V.length>0}function J(e,t){const r=e.findIndex(t);return r<0?e.length:r}// src/clamp.ts
var Z=(e,t,r)=>Math.min(Math.max(r,e),t);// src/colors.ts
var ee={transparent:0,aliceblue:0xf0f8ffff,antiquewhite:0xfaebd7ff,aqua:0xffffff,aquamarine:0x7fffd4ff,azure:0xf0ffffff,beige:0xf5f5dcff,bisque:0xffe4c4ff,black:255,blanchedalmond:0xffebcdff,blue:65535,blueviolet:0x8a2be2ff,brown:0xa52a2aff,burlywood:0xdeb887ff,burntsienna:0xea7e5dff,cadetblue:0x5f9ea0ff,chartreuse:0x7fff00ff,chocolate:0xd2691eff,coral:0xff7f50ff,cornflowerblue:0x6495edff,cornsilk:0xfff8dcff,crimson:0xdc143cff,cyan:0xffffff,darkblue:35839,darkcyan:9145343,darkgoldenrod:0xb8860bff,darkgray:0xa9a9a9ff,darkgreen:6553855,darkgrey:0xa9a9a9ff,darkkhaki:0xbdb76bff,darkmagenta:0x8b008bff,darkolivegreen:0x556b2fff,darkorange:0xff8c00ff,darkorchid:0x9932ccff,darkred:0x8b0000ff,darksalmon:0xe9967aff,darkseagreen:0x8fbc8fff,darkslateblue:0x483d8bff,darkslategray:0x2f4f4fff,darkslategrey:0x2f4f4fff,darkturquoise:0xced1ff,darkviolet:0x9400d3ff,deeppink:0xff1493ff,deepskyblue:0xbfffff,dimgray:0x696969ff,dimgrey:0x696969ff,dodgerblue:0x1e90ffff,firebrick:0xb22222ff,floralwhite:0xfffaf0ff,forestgreen:0x228b22ff,fuchsia:0xff00ffff,gainsboro:0xdcdcdcff,ghostwhite:0xf8f8ffff,gold:0xffd700ff,goldenrod:0xdaa520ff,gray:0x808080ff,green:8388863,greenyellow:0xadff2fff,grey:0x808080ff,honeydew:0xf0fff0ff,hotpink:0xff69b4ff,indianred:0xcd5c5cff,indigo:0x4b0082ff,ivory:0xfffff0ff,khaki:0xf0e68cff,lavender:0xe6e6faff,lavenderblush:0xfff0f5ff,lawngreen:0x7cfc00ff,lemonchiffon:0xfffacdff,lightblue:0xadd8e6ff,lightcoral:0xf08080ff,lightcyan:0xe0ffffff,lightgoldenrodyellow:0xfafad2ff,lightgray:0xd3d3d3ff,lightgreen:0x90ee90ff,lightgrey:0xd3d3d3ff,lightpink:0xffb6c1ff,lightsalmon:0xffa07aff,lightseagreen:0x20b2aaff,lightskyblue:0x87cefaff,lightslategray:0x778899ff,lightslategrey:0x778899ff,lightsteelblue:0xb0c4deff,lightyellow:0xffffe0ff,lime:0xff00ff,limegreen:0x32cd32ff,linen:0xfaf0e6ff,magenta:0xff00ffff,maroon:0x800000ff,mediumaquamarine:0x66cdaaff,mediumblue:52735,mediumorchid:0xba55d3ff,mediumpurple:0x9370dbff,mediumseagreen:0x3cb371ff,mediumslateblue:0x7b68eeff,mediumspringgreen:0xfa9aff,mediumturquoise:0x48d1ccff,mediumvioletred:0xc71585ff,midnightblue:0x191970ff,mintcream:0xf5fffaff,mistyrose:0xffe4e1ff,moccasin:0xffe4b5ff,navajowhite:0xffdeadff,navy:33023,oldlace:0xfdf5e6ff,olive:0x808000ff,olivedrab:0x6b8e23ff,orange:0xffa500ff,orangered:0xff4500ff,orchid:0xda70d6ff,palegoldenrod:0xeee8aaff,palegreen:0x98fb98ff,paleturquoise:0xafeeeeff,palevioletred:0xdb7093ff,papayawhip:0xffefd5ff,peachpuff:0xffdab9ff,peru:0xcd853fff,pink:0xffc0cbff,plum:0xdda0ddff,powderblue:0xb0e0e6ff,purple:0x800080ff,rebeccapurple:0x663399ff,red:0xff0000ff,rosybrown:0xbc8f8fff,royalblue:0x4169e1ff,saddlebrown:0x8b4513ff,salmon:0xfa8072ff,sandybrown:0xf4a460ff,seagreen:0x2e8b57ff,seashell:0xfff5eeff,sienna:0xa0522dff,silver:0xc0c0c0ff,skyblue:0x87ceebff,slateblue:0x6a5acdff,slategray:0x708090ff,slategrey:0x708090ff,snow:0xfffafaff,springgreen:0xff7fff,steelblue:0x4682b4ff,tan:0xd2b48cff,teal:8421631,thistle:0xd8bfd8ff,tomato:0xff6347ff,turquoise:0x40e0d0ff,violet:0xee82eeff,wheat:0xf5deb3ff,white:0xffffffff,whitesmoke:0xf5f5f5ff,yellow:0xffff00ff,yellowgreen:0x9acd32ff};// src/colorMatchers.ts
var et="[-+]?\\d*\\.?\\d+";var er=et+"%";function en(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ea=new RegExp("rgb"+en(et,et,et));var ei=new RegExp("rgba"+en(et,et,et,et));var eo=new RegExp("hsl"+en(et,er,er));var es=new RegExp("hsla"+en(et,er,er,et));var eu=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;var ec=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;var el=/^#([0-9a-fA-F]{6})$/;var ef=/^#([0-9a-fA-F]{8})$/;// src/normalizeColor.ts
function ed(e){let t;if(typeof e==="number"){return e>>>0===e&&e>=0&&e<=0xffffffff?e:null}if(t=el.exec(e))return parseInt(t[1]+"ff",16)>>>0;if(U&&U[e]!==void 0){return U[e]}if(t=ea.exec(e)){return(ev(t[1])<<24|// r
ev(t[2])<<16|// g
ev(t[3])<<8|// b
255)>>>// a
0}if(t=ei.exec(e)){return(ev(t[1])<<24|// r
ev(t[2])<<16|// g
ev(t[3])<<8|// b
eg(t[4]))>>>// a
0}if(t=eu.exec(e)){return parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
"ff",// a
16)>>>0}if(t=ef.exec(e))return parseInt(t[1],16)>>>0;if(t=ec.exec(e)){return parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
t[4]+t[4],// a
16)>>>0}if(t=eo.exec(e)){return(ep(em(t[1]),// h
ey(t[2]),// s
ey(t[3]))|255)>>>// a
0}if(t=es.exec(e)){return(ep(em(t[1]),// h
ey(t[2]),// s
ey(t[3]))|eg(t[4]))>>>// a
0}return null}function eh(e,t,r){if(r<0)r+=1;if(r>1)r-=1;if(r<1/6)return e+(t-e)*6*r;if(r<1/2)return t;if(r<2/3)return e+(t-e)*(2/3-r)*6;return e}function ep(e,t,r){const n=r<.5?r*(1+t):r+t-r*t;const a=2*r-n;const i=eh(a,n,e+1/3);const o=eh(a,n,e);const s=eh(a,n,e-1/3);return Math.round(i*255)<<24|Math.round(o*255)<<16|Math.round(s*255)<<8}function ev(e){const t=parseInt(e,10);if(t<0)return 0;if(t>255)return 255;return t}function em(e){const t=parseFloat(e);return(t%360+360)%360/360}function eg(e){const t=parseFloat(e);if(t<0)return 0;if(t>1)return 255;return Math.round(t*255)}function ey(e){const t=parseFloat(e);if(t<0)return 0;if(t>100)return 1;return t/100}// src/colorToRgba.ts
function eb(e){let t=ed(e);if(t===null)return e;t=t||0;const r=(t&0xff000000)>>>24;const n=(t&0xff0000)>>>16;const a=(t&65280)>>>8;const i=(t&255)/255;return`rgba(${r}, ${n}, ${a}, ${i})`}// src/createInterpolator.ts
var e_=(e,t,r)=>{if(k.fun(e)){return e}if(k.arr(e)){return e_({range:e,output:t,extrapolate:r})}if(k.str(e.output[0])){return N(e)}const n=e;const a=n.output;const i=n.range||[0,1];const o=n.extrapolateLeft||n.extrapolate||"extend";const s=n.extrapolateRight||n.extrapolate||"extend";const u=n.easing||(e=>e);return e=>{const t=ex(e,i);return ew(e,i[t],i[t+1],a[t],a[t+1],u,o,s,n.map)}};function ew(e,t,r,n,a,i,o,s,u){let c=u?u(e):e;if(c<t){if(o==="identity")return c;else if(o==="clamp")c=t}if(c>r){if(s==="identity")return c;else if(s==="clamp")c=r}if(n===a)return n;if(t===r)return e<=t?n:a;if(t===-Infinity)c=-c;else if(r===Infinity)c=c-t;else c=(c-t)/(r-t);c=i(c);if(n===-Infinity)c=-c;else if(a===Infinity)c=c+n;else c=c*(a-n)+n;return c}function ex(e,t){for(var r=1;r<t.length-1;++r)if(t[r]>=e)break;return r-1}// src/easings.ts
var eE=(e,t="end")=>r=>{r=t==="end"?Math.min(r,.999):Math.max(r,.001);const n=r*e;const a=t==="end"?Math.floor(n):Math.ceil(n);return Z(0,1,a/e)};var eO=1.70158;var eS=eO*1.525;var eA=eO+1;var eT=2*Math.PI/3;var eR=2*Math.PI/4.5;var ek=e=>{const t=7.5625;const r=2.75;if(e<1/r){return t*e*e}else if(e<2/r){return t*(e-=1.5/r)*e+.75}else if(e<2.5/r){return t*(e-=2.25/r)*e+.9375}else{return t*(e-=2.625/r)*e+.984375}};var eC={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>eA*e*e*e-eO*e*e,easeOutBack:e=>1+eA*Math.pow(e-1,3)+eO*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((eS+1)*2*e-eS)/2:(Math.pow(2*e-2,2)*((eS+1)*(e*2-2)+eS)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*eT),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*eT)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*eR))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*eR)/2+1,easeInBounce:e=>1-ek(1-e),easeOutBounce:ek,easeInOutBounce:e=>e<.5?(1-ek(1-2*e))/2:(1+ek(2*e-1))/2,steps:eE};// src/fluids.ts
var eI=Symbol.for("FluidValue.get");var eP=Symbol.for("FluidValue.observers");var eD=e=>Boolean(e&&e[eI]);var eM=e=>e&&e[eI]?e[eI]():e;var eL=e=>e[eP]||null;function eF(e,t){if(e.eventObserved){e.eventObserved(t)}else{e(t)}}function eN(e,t){const r=e[eP];if(r){r.forEach(e=>{eF(e,t)})}}var ej=class{constructor(e){if(!e&&!(e=this.get)){throw Error("Unknown getter")}eU(this,e)}};eI,eP;var eU=(e,t)=>eY(e,eI,t);function eH(e,t){if(e[eI]){let r=e[eP];if(!r){eY(e,eP,r=/* @__PURE__ */new Set)}if(!r.has(t)){r.add(t);if(e.observerAdded){e.observerAdded(r.size,t)}}}return t}function eB(e,t){const r=e[eP];if(r&&r.has(t)){const n=r.size-1;if(n){r.delete(t)}else{e[eP]=null}if(e.observerRemoved){e.observerRemoved(n,t)}}}var eY=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:true,configurable:true});// src/regexs.ts
var ez=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var eV=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;var eq=new RegExp(`(${ez.source})(%|[a-z]+)`,"i");var eW=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;var e$=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;// src/variableToRgba.ts
var eG=e=>{const[t,r]=eK(e);if(!t||F()){return e}const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n){return n.trim()}else if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(t){return t}else{return e}}else if(r&&e$.test(r)){return eG(r)}else if(r){return r}return e};var eK=e=>{const t=e$.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};// src/stringInterpolation.ts
var eQ;var eX=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`;var eJ=e=>{if(!eQ)eQ=U?// match color names, ignore partial matches
new RegExp(`(${Object.keys(U).join("|")})(?!\\w)`,"g"):// never match
/^\b$/;const t=e.output.map(e=>{return eM(e).replace(e$,eG).replace(eV,eb).replace(eQ,eb)});const r=t.map(e=>e.match(ez).map(Number));const n=r[0].map((e,t)=>r.map(e=>{if(!(t in e)){throw Error('The arity of each "output" value must be equal')}return e[t]}));const a=n.map(t=>e_({...e,output:t}));return e=>{const r=!eq.test(t[0])&&t.find(e=>eq.test(e))?.replace(ez,"");let n=0;return t[0].replace(ez,()=>`${a[n++](e)}${r||""}`).replace(eW,eX)}};// src/deprecations.ts
var eZ="react-spring: ";var e0=e=>{const t=e;let r=false;if(typeof t!="function"){throw new TypeError(`${eZ}once requires a function parameter`)}return(...e)=>{if(!r){t(...e);r=true}}};var e1=e0(console.warn);function e2(){e1(`${eZ}The "interpolate" function is deprecated in v9 (use "to" instead)`)}var e6=e0(console.warn);function e5(){e6(`${eZ}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}// src/isAnimatedString.ts
function e4(e){return k.str(e)&&(e[0]=="#"||/\d/.test(e)||// Do not identify a CSS variable as an AnimatedString if its SSR
!F()&&e$.test(e)||e in(U||{}))}// src/dom-events/scroll/index.ts
// src/dom-events/resize/resizeElement.ts
var e3;var e7=/* @__PURE__ */new WeakMap;var e8=e=>e.forEach(({target:e,contentRect:t})=>{return e7.get(e)?.forEach(e=>e(t))});function e9(e,t){if(!e3){if(typeof ResizeObserver!=="undefined"){e3=new ResizeObserver(e8)}}let r=e7.get(t);if(!r){r=/* @__PURE__ */new Set;e7.set(t,r)}r.add(e);if(e3){e3.observe(t)}return()=>{const r=e7.get(t);if(!r)return;r.delete(e);if(!r.size&&e3){e3.unobserve(t)}}}// src/dom-events/resize/resizeWindow.ts
var te=/* @__PURE__ */new Set;var tt;var tr=()=>{const e=()=>{te.forEach(e=>e({width:window.innerWidth,height:window.innerHeight}))};window.addEventListener("resize",e);return()=>{window.removeEventListener("resize",e)}};var tn=e=>{te.add(e);if(!tt){tt=tr()}return()=>{te.delete(e);if(!te.size&&tt){tt();tt=void 0}}};// src/dom-events/resize/index.ts
var ta=(e,{container:t=document.documentElement}={})=>{if(t===document.documentElement){return tn(e)}else{return e9(e,t)}};// src/progress.ts
var ti=(e,t,r)=>t-e===0?1:(r-e)/(t-e);// src/dom-events/scroll/ScrollHandler.ts
var to=/* unused pure expression or super */null&&{x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};var ts=class{constructor(e,t){this.createAxis=()=>({current:0,progress:0,scrollLength:0});this.updateAxis=e=>{const t=this.info[e];const{length:r,position:n}=to[e];t.current=this.container[`scroll${n}`];t.scrollLength=this.container[`scroll${r}`]-this.container[`client${r}`];t.progress=ti(0,t.scrollLength,t.current)};this.update=()=>{this.updateAxis("x");this.updateAxis("y")};this.sendEvent=()=>{this.callback(this.info)};this.advance=()=>{this.update();this.sendEvent()};this.callback=e;this.container=t;this.info={time:0,x:this.createAxis(),y:this.createAxis()}}};// src/dom-events/scroll/index.ts
var tu=/* @__PURE__ */new WeakMap;var tc=/* @__PURE__ */new WeakMap;var tl=/* @__PURE__ */new WeakMap;var tf=e=>e===document.documentElement?window:e;var td=(e,{container:t=document.documentElement}={})=>{let r=tl.get(t);if(!r){r=/* @__PURE__ */new Set;tl.set(t,r)}const n=new ts(e,t);r.add(n);if(!tu.has(t)){const e=()=>{r?.forEach(e=>e.advance());return true};tu.set(t,e);const n=tf(t);window.addEventListener("resize",e,{passive:true});if(t!==document.documentElement){tc.set(t,ta(e,{container:t}))}n.addEventListener("scroll",e,{passive:true})}const a=tu.get(t);raf3(a);return()=>{raf3.cancel(a);const e=tl.get(t);if(!e)return;e.delete(n);if(e.size)return;const r=tu.get(t);tu.delete(t);if(r){tf(t).removeEventListener("scroll",r);window.removeEventListener("resize",r);tc.get(t)?.()}}};// src/hooks/useConstant.ts
function th(e){const t=useRef(null);if(t.current===null){t.current=e()}return t.current}// src/hooks/useForceUpdate.ts
// src/hooks/useIsMounted.ts
// src/hooks/useIsomorphicLayoutEffect.ts
var tp=F()?E.useEffect:E.useLayoutEffect;// src/hooks/useIsMounted.ts
var tv=()=>{const e=(0,E.useRef)(false);tp(()=>{e.current=true;return()=>{e.current=false}},[]);return e};// src/hooks/useForceUpdate.ts
function tm(){const e=(0,E.useState)()[1];const t=tv();return()=>{if(t.current){e(Math.random())}}}// src/hooks/useMemoOne.ts
function tg(e,t){const[r]=(0,E.useState)(()=>({inputs:t,result:e()}));const n=(0,E.useRef)();const a=n.current;let i=a;if(i){const r=Boolean(t&&i.inputs&&ty(t,i.inputs));if(!r){i={inputs:t,result:e()}}}else{i=r}(0,E.useEffect)(()=>{n.current=i;if(a==r){r.inputs=r.result=void 0}},[i]);return i.result}function ty(e,t){if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}// src/hooks/useOnce.ts
var tb=e=>(0,E.useEffect)(e,t_);var t_=[];// src/hooks/usePrev.ts
function tw(e){const t=(0,E.useRef)();(0,E.useEffect)(()=>{t.current=e});return t.current}// src/hooks/useReducedMotion.ts
var tx=()=>{const[e,t]=useState3(null);tp(()=>{const e=window.matchMedia("(prefers-reduced-motion)");const r=e=>{t(e.matches);Y({skipAnimation:e.matches})};r(e);if(e.addEventListener){e.addEventListener("change",r)}else{e.addListener(r)}return()=>{if(e.removeEventListener){e.removeEventListener("change",r)}else{e.removeListener(r)}}},[]);return e};// src/index.ts
//# sourceMappingURL=react-spring_shared.modern.mjs.map
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@react-spring+animated@9.7.5_react@18.3.1/node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs
// src/Animated.ts
var tE=Symbol.for("Animated:node");var tO=e=>!!e&&e[tE]===e;var tS=e=>e&&e[tE];var tA=(e,t)=>R(e,tE,t);var tT=e=>e&&e[tE]&&e[tE].getPayload();var tR=class{constructor(){tA(this,this)}/** Get every `AnimatedValue` used by this node. */getPayload(){return this.payload||[]}};// src/AnimatedValue.ts
var tk=class extends tR{constructor(e){super();this._value=e;this.done=true;this.durationProgress=0;if(k.num(this._value)){this.lastPosition=this._value}}/** @internal */static create(e){return new tk(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){if(k.num(e)){this.lastPosition=e;if(t){e=Math.round(e/t)*t;if(this.done){this.lastPosition=e}}}if(this._value===e){return false}this._value=e;return true}reset(){const{done:e}=this;this.done=false;if(k.num(this._value)){this.elapsedTime=0;this.durationProgress=0;this.lastPosition=this._value;if(e)this.lastVelocity=null;this.v0=null}}};// src/AnimatedString.ts
var tC=class extends tk{constructor(e){super(0);this._string=null;this._toString=e_({output:[e,e]})}/** @internal */static create(e){return new tC(e)}getValue(){const e=this._string;return e==null?this._string=this._toString(this._value):e}setValue(e){if(k.str(e)){if(e==this._string){return false}this._string=e;this._value=1}else if(super.setValue(e)){this._string=null}else{return false}return true}reset(e){if(e){this._toString=e_({output:[this.getValue(),e]})}this._value=0;super.reset()}};// src/AnimatedArray.ts
// src/AnimatedObject.ts
// src/context.ts
var tI={dependencies:null};// src/AnimatedObject.ts
var tP=class extends tR{constructor(e){super();this.source=e;this.setValue(e)}getValue(e){const t={};P(this.source,(r,n)=>{if(tO(r)){t[n]=r.getValue(e)}else if(eD(r)){t[n]=eM(r)}else if(!e){t[n]=r}});return t}/** Replace the raw object data */setValue(e){this.source=e;this.payload=this._makePayload(e)}reset(){if(this.payload){I(this.payload,e=>e.reset())}}/** Create a payload set. */_makePayload(e){if(e){const t=/* @__PURE__ */new Set;P(e,this._addToPayload,t);return Array.from(t)}}/** Add to a payload set. */_addToPayload(e){if(tI.dependencies&&eD(e)){tI.dependencies.add(e)}const t=tT(e);if(t){I(t,e=>this.add(e))}}};// src/AnimatedArray.ts
var tD=class extends tP{constructor(e){super(e)}/** @internal */static create(e){return new tD(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();if(e.length==t.length){return t.map((t,r)=>t.setValue(e[r])).some(Boolean)}super.setValue(e.map(tM));return true}};function tM(e){const t=e4(e)?tC:tk;return t.create(e)}// src/getAnimatedType.ts
function tL(e){const t=tS(e);return t?t.constructor:k.arr(e)?tD:e4(e)?tC:tk}// src/createHost.ts
// src/withAnimated.tsx
var tF=(e,t)=>{const r=// Function components must use "forwardRef" to avoid being
// re-rendered on every animation frame.
!k.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,E.forwardRef)((n,i)=>{const o=(0,E.useRef)(null);const s=r&&// eslint-disable-next-line react-hooks/rules-of-hooks
(0,E.useCallback)(e=>{o.current=tU(i,e)},[i]);const[u,c]=tj(n,t);const l=tm();const f=()=>{const e=o.current;if(r&&!e){return}const n=e?t.applyAnimatedValues(e,u.getValue(true)):false;if(n===false){l()}};const d=new tN(f,c);const h=(0,E.useRef)();tp(()=>{h.current=d;I(c,e=>eH(e,d));return()=>{if(h.current){I(h.current.deps,e=>eB(e,h.current));a.cancel(h.current.update)}}});(0,E.useEffect)(f,[]);tb(()=>()=>{const e=h.current;I(e.deps,t=>eB(t,e))});const p=t.getComponentProps(u.getValue());return /* @__PURE__ */E.createElement(e,{...p,ref:s})})};var tN=class{constructor(e,t){this.update=e;this.deps=t}eventObserved(e){if(e.type=="change"){a.write(this.update)}}};function tj(e,t){const r=/* @__PURE__ */new Set;tI.dependencies=r;if(e.style)e={...e,style:t.createAnimatedStyle(e.style)};e=new tP(e);tI.dependencies=null;return[e,r]}function tU(e,t){if(e){if(k.fun(e))e(t);else e.current=t}return t}// src/createHost.ts
var tH=Symbol.for("AnimatedComponent");var tB=(e,{applyAnimatedValues:t=()=>false,createAnimatedStyle:r=e=>new tP(e),getComponentProps:n=e=>e}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n};const i=e=>{const t=tY(e)||"Anonymous";if(k.str(e)){e=i[e]||(i[e]=tF(e,a))}else{e=e[tH]||(e[tH]=tF(e,a))}e.displayName=`Animated(${t})`;return e};P(e,(t,r)=>{if(k.arr(e)){r=tY(t)}i[r]=i(t)});return{animated:i}};var tY=e=>k.str(e)?e:e&&k.str(e.displayName)?e.displayName:k.fun(e)&&e.name||null;//# sourceMappingURL=react-spring_animated.modern.mjs.map
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@react-spring+core@9.7.5_react@18.3.1/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
// src/hooks/useChain.ts
// src/helpers.ts
function tz(e,...t){return k.fun(e)?e(...t):e}var tV=(e,t)=>e===true||!!(t&&e&&(k.fun(e)?e(t):D(e).includes(t)));var tq=(e,t)=>k.obj(e)?t&&e[t]:e;var tW=(e,t)=>e.default===true?e[t]:e.default?e.default[t]:void 0;var t$=e=>e;var tG=(e,t=t$)=>{let r=tK;if(e.default&&e.default!==true){e=e.default;r=Object.keys(e)}const n={};for(const a of r){const r=t(e[a],a);if(!k.und(r)){n[a]=r}}return n};var tK=["config","onProps","onStart","onChange","onPause","onResume","onRest"];var tQ={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,// Transition props
items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,// Internal props
keys:1,callId:1,parentId:1};function tX(e){const t={};let r=0;P(e,(e,n)=>{if(!tQ[n]){t[n]=e;r++}});if(r){return t}}function tJ(e){const t=tX(e);if(t){const r={to:t};P(e,(e,n)=>n in t||(r[n]=e));return r}return{...e}}function tZ(e){e=eM(e);return k.arr(e)?e.map(tZ):e4(e)?A.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function t0(e){for(const t in e)return true;return false}function t1(e){return k.fun(e)||k.arr(e)&&k.obj(e[0])}function t2(e,t){e.ref?.delete(e);t?.delete(e)}function t6(e,t){if(t&&e.ref!==t){e.ref?.delete(e);t.add(e);e.ref=t}}// src/hooks/useChain.ts
function t5(e,t,r=1e3){useIsomorphicLayoutEffect(()=>{if(t){let n=0;each(e,(e,a)=>{const i=e.current;if(i.length){let o=r*t[a];if(isNaN(o))o=n;else n=o;each(i,e=>{each(e.queue,e=>{const t=e.delay;e.delay=e=>o+tz(t||0,e)})});e.start()}})}else{let t=Promise.resolve();each(e,e=>{const r=e.current;if(r.length){const n=r.map(e=>{const t=e.queue;e.queue=[];return t});t=t.then(()=>{each(r,(e,t)=>each(n[t]||[],t=>e.queue.push(t)));return Promise.all(e.start())})}})}})}// src/hooks/useSpring.ts
// src/hooks/useSprings.ts
// src/SpringValue.ts
// src/AnimationConfig.ts
// src/constants.ts
var t4={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}};// src/AnimationConfig.ts
var t3={...t4.default,mass:1,damping:1,easing:eC.linear,clamp:false};var t7=class{constructor(){/**
     * The initial velocity of one or more values.
     *
     * @default 0
     */this.velocity=0;Object.assign(this,t3)}};function t8(e,t,r){if(r){r={...r};t9(r,t);t={...r,...t}}t9(e,t);Object.assign(e,t);for(const t in t3){if(e[t]==null){e[t]=t3[t]}}let{frequency:n,damping:a}=e;const{mass:i}=e;if(!k.und(n)){if(n<.01)n=.01;if(a<0)a=0;e.tension=Math.pow(2*Math.PI/n,2)*i;e.friction=4*Math.PI*a*i/n}return e}function t9(e,t){if(!k.und(t.decay)){e.duration=void 0}else{const r=!k.und(t.tension)||!k.und(t.friction);if(r||!k.und(t.frequency)||!k.und(t.damping)||!k.und(t.mass)){e.duration=void 0;e.decay=void 0}if(r){e.frequency=void 0}}}// src/Animation.ts
var re=[];var rt=class{constructor(){this.changed=false;this.values=re;this.toValues=null;this.fromValues=re;this.config=new t7;this.immediate=false}};// src/scheduleProps.ts
function rr(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise((s,u)=>{let c;let l;let f=tV(r.cancel??n?.cancel,t);if(f){p()}else{if(!k.und(r.pause)){i.paused=tV(r.pause,t)}let e=n?.pause;if(e!==true){e=i.paused||tV(e,t)}c=tz(r.delay||0,t);if(e){i.resumeQueue.add(h);o.pause()}else{o.resume();h()}}function d(){i.resumeQueue.add(h);i.timeouts.delete(l);l.cancel();c=l.time-a.now()}function h(){if(c>0&&!A.skipAnimation){i.delayed=true;l=a.setTimeout(p,c);i.pauseQueue.add(d);i.timeouts.add(l)}else{p()}}function p(){if(i.delayed){i.delayed=false}i.pauseQueue.delete(d);i.timeouts.delete(l);if(e<=(i.cancelId||0)){f=true}try{o.start({...r,callId:e,cancel:f},s)}catch(e){u(e)}}})}// src/runAsync.ts
// src/AnimationResult.ts
var rn=(e,t)=>t.length==1?t[0]:t.some(e=>e.cancelled)?ro(e.get()):t.every(e=>e.noop)?ra(e.get()):ri(e.get(),t.every(e=>e.finished));var ra=e=>({value:e,noop:true,finished:true,cancelled:false});var ri=(e,t,r=false)=>({value:e,finished:t,cancelled:r});var ro=e=>({value:e,cancelled:true,finished:false});// src/runAsync.ts
function rs(e,t,r,n){const{callId:i,parentId:o,onRest:s}=t;const{asyncTo:u,promise:c}=r;if(!o&&e===u&&!t.reset){return c}return r.promise=(async()=>{r.asyncId=i;r.asyncTo=e;const l=tG(t,(e,t)=>// The `onRest` prop is only called when the `runAsync` promise is resolved.
    t==="onRest"?void 0:e);let f;let d;const h=new Promise((e,t)=>(f=e,d=t));const p=e=>{const t=// The `cancel` prop or `stop` method was used.
i<=(r.cancelId||0)&&ro(n)||// The async `to` prop was replaced.
i!==r.asyncId&&ri(n,false);if(t){e.result=t;d(e);throw e}};const v=(e,t)=>{const a=new rc;const o=new rl;return(async()=>{if(A.skipAnimation){ru(r);o.result=ri(n,false);d(o);throw o}p(a);const s=k.obj(e)?{...e}:{...t,to:e};s.parentId=i;P(l,(e,t)=>{if(k.und(s[t])){s[t]=e}});const u=await n.start(s);p(a);if(r.paused){await new Promise(e=>{r.resumeQueue.add(e)})}return u})()};let m;if(A.skipAnimation){ru(r);return ri(n,false)}try{let t;if(k.arr(e)){t=(async e=>{for(const t of e){await v(t)}})(e)}else{t=Promise.resolve(e(v,n.stop.bind(n)))}await Promise.all([t.then(f),h]);m=ri(n.get(),true,false)}catch(e){if(e instanceof rc){m=e.result}else if(e instanceof rl){m=e.result}else{throw e}}finally{if(i==r.asyncId){r.asyncId=o;r.asyncTo=o?u:void 0;r.promise=o?c:void 0}}if(k.fun(s)){a.batchedUpdates(()=>{s(m,n,n.item)})}return m})()}function ru(e,t){M(e.timeouts,e=>e.cancel());e.pauseQueue.clear();e.resumeQueue.clear();e.asyncId=e.asyncTo=e.promise=void 0;if(t)e.cancelId=t}var rc=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}};var rl=class extends Error{constructor(){super("SkipAnimationSignal")}};// src/FrameValue.ts
var rf=e=>e instanceof rh;var rd=1;var rh=class extends ej{constructor(){super(...arguments);this.id=rd++;this._priority=0}get priority(){return this._priority}set priority(e){if(this._priority!=e){this._priority=e;this._onPriorityChange(e)}}/** Get the current value */get(){const e=tS(this);return e&&e.getValue()}/** Create a spring that maps our value to another value */to(...e){return A.to(this,e)}/** @deprecated Use the `to` method instead. */interpolate(...e){e2();return A.to(this,e)}toJSON(){return this.get()}observerAdded(e){if(e==1)this._attach()}observerRemoved(e){if(e==0)this._detach()}/** Called when the first child is added. */_attach(){}/** Called when the last child is removed. */_detach(){}/** Tell our children about our new value */_onChange(e,t=false){eN(this,{type:"change",parent:this,value:e,idle:t})}/** Tell our children about our new priority */_onPriorityChange(e){if(!this.idle){$.sort(this)}eN(this,{type:"priority",parent:this,priority:e})}};// src/SpringPhase.ts
var rp=Symbol.for("SpringPhase");var rv=1;var rm=2;var rg=4;var ry=e=>(e[rp]&rv)>0;var rb=e=>(e[rp]&rm)>0;var r_=e=>(e[rp]&rg)>0;var rw=(e,t)=>t?e[rp]|=rm|rv:e[rp]&=~rm;var rx=(e,t)=>t?e[rp]|=rg:e[rp]&=~rg;// src/SpringValue.ts
var rE=class extends rh{constructor(e,t){super();/** The animation state */this.animation=new rt;/** Some props have customizable default values */this.defaultProps={};/** The state for `runAsync` calls */this._state={paused:false,delayed:false,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set};/** The promise resolvers of pending `start` calls */this._pendingCalls=/* @__PURE__ */new Set;/** The counter for tracking `scheduleProps` calls */this._lastCallId=0;/** The last `scheduleProps` call that changed the `to` prop */this._lastToId=0;this._memoizedDuration=0;if(!k.und(e)||!k.und(t)){const r=k.obj(e)?{...e}:{...t,from:e};if(k.und(r.default)){r.default=true}this.start(r)}}/** Equals true when not advancing on each frame. */get idle(){return!(rb(this)||this._state.asyncTo)||r_(this)}get goal(){return eM(this.animation.to)}get velocity(){const e=tS(this);return e instanceof tk?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}/**
   * When true, this value has been animated at least once.
   */get hasAnimated(){return ry(this)}/**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */get isAnimating(){return rb(this)}/**
   * When true, all current and future animations are paused.
   */get isPaused(){return r_(this)}/**
   *
   *
   */get isDelayed(){return this._state.delayed}/** Advance the current animation by a number of milliseconds */advance(e){let t=true;let r=false;const n=this.animation;let{toValues:a}=n;const{config:i}=n;const o=tT(n.to);if(!o&&eD(n.to)){a=D(eM(n.to))}n.values.forEach((s,u)=>{if(s.done)return;const c=// Animated strings always go from 0 to 1.
s.constructor==tC?1:o?o[u].lastPosition:a[u];let l=n.immediate;let f=c;if(!l){f=s.lastPosition;if(i.tension<=0){s.done=true;return}let t=s.elapsedTime+=e;const r=n.fromValues[u];const a=s.v0!=null?s.v0:s.v0=k.arr(i.velocity)?i.velocity[u]:i.velocity;let o;const d=i.precision||(r==c?.005:Math.min(1,Math.abs(c-r)*.001));if(!k.und(i.duration)){let n=1;if(i.duration>0){if(this._memoizedDuration!==i.duration){this._memoizedDuration=i.duration;if(s.durationProgress>0){s.elapsedTime=i.duration*s.durationProgress;t=s.elapsedTime+=e}}n=(i.progress||0)+t/this._memoizedDuration;n=n>1?1:n<0?0:n;s.durationProgress=n}f=r+i.easing(n)*(c-r);o=(f-s.lastPosition)/e;l=n==1}else if(i.decay){const e=i.decay===true?.998:i.decay;const n=Math.exp(-(1-e)*t);f=r+a/(1-e)*(1-n);l=Math.abs(s.lastPosition-f)<=d;o=a*n}else{o=s.lastVelocity==null?a:s.lastVelocity;const t=i.restVelocity||d/10;const n=i.clamp?0:i.bounce;const u=!k.und(n);const h=r==c?s.v0>0:r<c;let p;let v=false;const m=1;const g=Math.ceil(e/m);for(let e=0;e<g;++e){p=Math.abs(o)>t;if(!p){l=Math.abs(c-f)<=d;if(l){break}}if(u){v=f==c||f>c==h;if(v){o=-o*n;f=c}}const e=-i.tension*1e-6*(f-c);const r=-i.friction*.001*o;const a=(e+r)/i.mass;o=o+a*m;f=f+o*m}}s.lastVelocity=o;if(Number.isNaN(f)){console.warn(`Got NaN while animating:`,this);l=true}}if(o&&!o[u].done){l=false}if(l){s.done=true}else{t=false}if(s.setValue(f,i.round)){r=true}});const s=tS(this);const u=s.getValue();if(t){const e=eM(n.to);if((u!==e||r)&&!i.decay){s.setValue(e);this._onChange(e)}else if(r&&i.decay){this._onChange(u)}this._stop()}else if(r){this._onChange(u)}}/** Set the current value, while stopping the current animation */set(e){a.batchedUpdates(()=>{this._stop();this._focus(e);this._set(e)});return this}/**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */pause(){this._update({pause:true})}/** Resume the animation if paused. */resume(){this._update({pause:false})}/** Skip to the end of the current animation. */finish(){if(rb(this)){const{to:e,config:t}=this.animation;a.batchedUpdates(()=>{this._onStart();if(!t.decay){this._set(e,false)}this._stop()})}return this}/** Push props into the pending queue. */update(e){const t=this.queue||(this.queue=[]);t.push(e);return this}start(e,t){let r;if(!k.und(e)){r=[k.obj(e)?e:{...t,to:e}]}else{r=this.queue||[];this.queue=[]}return Promise.all(r.map(e=>{const t=this._update(e);return t})).then(e=>rn(this,e))}/**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */stop(e){const{to:t}=this.animation;this._focus(this.get());ru(this._state,e&&this._lastCallId);a.batchedUpdates(()=>this._stop(t,e));return this}/** Restart the animation. */reset(){this._update({reset:true})}/** @internal */eventObserved(e){if(e.type=="change"){this._start()}else if(e.type=="priority"){this.priority=e.priority+1}}/**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=k.obj(r)?r[t]:r;if(r==null||t1(r)){r=void 0}n=k.obj(n)?n[t]:n;if(n==null){n=void 0}const a={to:r,from:n};if(!ry(this)){if(e.reverse)[r,n]=[n,r];n=eM(n);if(!k.und(n)){this._set(n)}else if(!tS(this)){this._set(r)}}return a}/** Every update is processed by this method before merging. */_update({...e},t){const{key:r,defaultProps:n}=this;if(e.default)Object.assign(n,tG(e,(e,t)=>/^on/.test(t)?tq(e,r):e));rC(this,e,"onProps");rI(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this)){throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?")}const i=this._state;return rr(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{if(!r_(this)){rx(this,true);L(i.pauseQueue);rI(this,"onPause",ri(this,rO(this,this.animation.to)),this)}},resume:()=>{if(r_(this)){rx(this,false);if(rb(this)){this._resume()}L(i.resumeQueue);rI(this,"onResume",ri(this,rO(this,this.animation.to)),this)}},start:this._merge.bind(this,a)}}).then(r=>{if(e.loop&&r.finished&&!(t&&r.noop)){const t=rS(e);if(t){return this._update(t,true)}}return r})}/** Merge props into the current animation */_merge(e,t,r){if(t.cancel){this.stop(true);return r(ro(this))}const n=!k.und(e.to);const i=!k.und(e.from);if(n||i){if(t.callId>this._lastToId){this._lastToId=t.callId}else{return r(ro(this))}}const{key:o,defaultProps:s,animation:u}=this;const{to:c,from:l}=u;let{to:f=c,from:d=l}=e;if(i&&!n&&(!t.default||k.und(f))){f=d}if(t.reverse)[f,d]=[d,f];const h=!C(d,l);if(h){u.from=d}d=eM(d);const p=!C(f,c);if(p){this._focus(f)}const v=t1(t.to);const{config:m}=u;const{decay:g,velocity:y}=m;if(n||i){m.velocity=0}if(t.config&&!v){t8(m,tz(t.config,o),// Avoid calling the same "config" prop twice.
t.config!==s.config?tz(s.config,o):void 0)}let b=tS(this);if(!b||k.und(f)){return r(ri(this,true))}const _=// When `reset` is undefined, the `from` prop implies `reset: true`,
// except for declarative updates. When `reset` is defined, there
// must exist a value to animate from.
k.und(t.reset)?i&&!t.default:!k.und(d)&&tV(t.reset,o);const w=_?d:this.get();const x=tZ(f);const E=k.num(x)||k.arr(x)||e4(x);const O=!v&&(!E||tV(s.immediate||t.immediate,o));if(p){const e=tL(f);if(e!==b.constructor){if(O){b=this._set(x)}else throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`)}}const S=b.constructor;let A=eD(f);let T=false;if(!A){const e=_||!ry(this)&&h;if(p||e){T=C(tZ(w),x);A=!T}if(!C(u.immediate,O)&&!O||!C(m.decay,g)||!C(m.velocity,y)){A=true}}if(T&&rb(this)){if(u.changed&&!_){A=true}else if(!A){this._stop(c)}}if(!v){if(A||eD(c)){u.values=b.getPayload();u.toValues=eD(f)?null:S==tC?[1]:D(x)}if(u.immediate!=O){u.immediate=O;if(!O&&!_){this._set(c)}}if(A){const{onRest:e}=u;I(rk,e=>rC(this,t,e));const n=ri(this,rO(this,c));L(this._pendingCalls,n);this._pendingCalls.add(r);if(u.changed)a.batchedUpdates(()=>{u.changed=!_;e?.(n,this);if(_){tz(s.onRest,n)}else{u.onStart?.(n,this)}})}}if(_){this._set(w)}if(v){r(rs(t.to,t,this._state,this))}else if(A){this._start()}else if(rb(this)&&!p){this._pendingCalls.add(r)}else{r(ra(w))}}/** Update the `animation.to` value, which might be a `FluidValue` */_focus(e){const t=this.animation;if(e!==t.to){if(eL(this)){this._detach()}t.to=e;if(eL(this)){this._attach()}}}_attach(){let e=0;const{to:t}=this.animation;if(eD(t)){eH(t,this);if(rf(t)){e=t.priority+1}}this.priority=e}_detach(){const{to:e}=this.animation;if(eD(e)){eB(e,this)}}/**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */_set(e,t=true){const r=eM(e);if(!k.und(r)){const e=tS(this);if(!e||!C(r,e.getValue())){const n=tL(r);if(!e||e.constructor!=n){tA(this,n.create(r))}else{e.setValue(r)}if(e){a.batchedUpdates(()=>{this._onChange(r,t)})}}}return tS(this)}_onStart(){const e=this.animation;if(!e.changed){e.changed=true;rI(this,"onStart",ri(this,rO(this,e.to)),this)}}_onChange(e,t){if(!t){this._onStart();tz(this.animation.onChange,e,this)}tz(this.defaultProps.onChange,e,this);super._onChange(e,t)}// This method resets the animation state (even if already animating) to
// ensure the latest from/to range is used, and it also ensures this spring
// is added to the frameloop.
_start(){const e=this.animation;tS(this).reset(eM(e.to));if(!e.immediate){e.fromValues=e.values.map(e=>e.lastPosition)}if(!rb(this)){rw(this,true);if(!r_(this)){this._resume()}}}_resume(){if(A.skipAnimation){this.finish()}else{$.start(this)}}/**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */_stop(e,t){if(rb(this)){rw(this,false);const r=this.animation;I(r.values,e=>{e.done=true});if(r.toValues){r.onChange=r.onPause=r.onResume=void 0}eN(this,{type:"idle",parent:this});const n=t?ro(this.get()):ri(this.get(),rO(this,e??r.to));L(this._pendingCalls,n);if(r.changed){r.changed=false;rI(this,"onRest",n,this)}}}};function rO(e,t){const r=tZ(t);const n=tZ(e.get());return C(n,r)}function rS(e,t=e.loop,r=e.to){const n=tz(t);if(n){const a=n!==true&&tJ(n);const i=(a||e).reverse;const o=!a||a.reset;return rA({...e,loop:t,// Avoid updating default props when looping.
default:false,// Never loop the `pause` prop.
pause:void 0,// For the "reverse" prop to loop as expected, the "to" prop
// must be undefined. The "reverse" prop is ignored when the
// "to" prop is an array or function.
to:!i||t1(r)?r:void 0,// Ignore the "from" prop except on reset.
from:o?e.from:void 0,reset:o,// The "loop" prop can return a "useSpring" props object to
// override any of the original props.
...a})}}function rA(e){const{to:t,from:r}=e=tJ(e);const n=/* @__PURE__ */new Set;if(k.obj(t))rR(t,n);if(k.obj(r))rR(r,n);e.keys=n.size?Array.from(n):null;return e}function rT(e){const t=rA(e);if(k.und(t.default)){t.default=tG(t)}return t}function rR(e,t){P(e,(e,r)=>e!=null&&t.add(r))}var rk=["onStart","onRest","onChange","onPause","onResume"];function rC(e,t,r){e.animation[r]=t[r]!==tW(t,r)?tq(t[r],e.key):void 0}function rI(e,t,...r){e.animation[t]?.(...r);e.defaultProps[t]?.(...r)}// src/Controller.ts
var rP=["onStart","onChange","onRest"];var rD=1;var rM=class{constructor(e,t){this.id=rD++;/** The animated values */this.springs={};/** The queue of props passed to the `update` method. */this.queue=[];/** The counter for tracking `scheduleProps` calls */this._lastAsyncId=0;/** The values currently being animated */this._active=/* @__PURE__ */new Set;/** The values that changed recently */this._changed=/* @__PURE__ */new Set;/** Equals false when `onStart` listeners can be called */this._started=false;/** State used by the `runAsync` function */this._state={paused:false,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set};/** The event queues that are flushed once per frame maximum */this._events={onStart:/* @__PURE__ */new Map,onChange:/* @__PURE__ */new Map,onRest:/* @__PURE__ */new Map};this._onFrame=this._onFrame.bind(this);if(t){this._flush=t}if(e){this.start({default:true,...e})}}/**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>{return e.idle&&!e.isDelayed&&!e.isPaused})}get item(){return this._item}set item(e){this._item=e}/** Get the current values of our springs */get(){const e={};this.each((t,r)=>e[r]=t.get());return e}/** Set the current values without animating. */set(e){for(const t in e){const r=e[t];if(!k.und(r)){this.springs[t].set(r)}}}/** Push an update onto the queue of each value. */update(e){if(e){this.queue.push(rA(e))}return this}/**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */start(e){let{queue:t}=this;if(e){t=D(e).map(rA)}else{this.queue=[]}if(this._flush){return this._flush(this,t)}rB(this,t);return rL(this,t)}/** @internal */stop(e,t){if(e!==!!e){t=e}if(t){const r=this.springs;I(D(t),t=>r[t].stop(!!e))}else{ru(this._state,this._lastAsyncId);this.each(t=>t.stop(!!e))}return this}/** Freeze the active animation in time */pause(e){if(k.und(e)){this.start({pause:true})}else{const t=this.springs;I(D(e),e=>t[e].pause())}return this}/** Resume the animation if paused. */resume(e){if(k.und(e)){this.start({pause:false})}else{const t=this.springs;I(D(e),e=>t[e].resume())}return this}/** Call a function once per spring value */each(e){P(this.springs,e)}/** @internal Called at the end of every animation frame */_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events;const n=this._active.size>0;const a=this._changed.size>0;if(n&&!this._started||a&&!this._started){this._started=true;M(e,([e,t])=>{t.value=this.get();e(t,this,this._item)})}const i=!n&&this._started;const o=a||i&&r.size?this.get():null;if(a&&t.size){M(t,([e,t])=>{t.value=o;e(t,this,this._item)})}if(i){this._started=false;M(r,([e,t])=>{t.value=o;e(t,this,this._item)})}}/** @internal */eventObserved(e){if(e.type=="change"){this._changed.add(e.parent);if(!e.idle){this._active.add(e.parent)}}else if(e.type=="idle"){this._active.delete(e.parent)}else return;a.onFrame(this._onFrame)}};function rL(e,t){return Promise.all(t.map(t=>rF(e,t))).then(t=>rn(e,t))}async function rF(e,t,r){const{keys:n,to:i,from:o,loop:s,onRest:u,onResolve:c}=t;const l=k.obj(t.default)&&t.default;if(s){t.loop=false}if(i===false)t.to=null;if(o===false)t.from=null;const f=k.arr(i)||k.fun(i)?i:void 0;if(f){t.to=void 0;t.onRest=void 0;if(l){l.onRest=void 0}}else{I(rP,r=>{const n=t[r];if(k.fun(n)){const a=e["_events"][r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);if(r){if(!e)r.finished=false;if(t)r.cancelled=true}else{a.set(n,{value:null,finished:e||false,cancelled:t||false})}};if(l){l[r]=t[r]}}})}const d=e["_state"];if(t.pause===!d.paused){d.paused=t.pause;L(t.pause?d.pauseQueue:d.resumeQueue)}else if(d.paused){t.pause=true}const h=(n||Object.keys(e.springs)).map(r=>e.springs[r].start(t));const p=t.cancel===true||tW(t,"cancel")===true;if(f||p&&d.asyncId){h.push(rr(++e["_lastAsyncId"],{props:t,state:d,actions:{pause:T,resume:T,start(t,r){if(p){ru(d,e["_lastAsyncId"]);r(ro(e))}else{t.onRest=u;r(rs(f,t,d,e))}}}}))}if(d.paused){await new Promise(e=>{d.resumeQueue.add(e)})}const v=rn(e,await Promise.all(h));if(s&&v.finished&&!(r&&v.noop)){const r=rS(t,s,i);if(r){rB(e,[r]);return rF(e,r,true)}}if(c){a.batchedUpdates(()=>c(v,e,e.item))}return v}function rN(e,t){const r={...e.springs};if(t){I(D(t),e=>{if(k.und(e.keys)){e=rA(e)}if(!k.obj(e.to)){e={...e,to:void 0}}rH(r,e,e=>{return rU(e)})})}rj(e,r);return r}function rj(e,t){P(t,(t,r)=>{if(!e.springs[r]){e.springs[r]=t;eH(t,e)}})}function rU(e,t){const r=new rE;r.key=e;if(t){eH(r,t)}return r}function rH(e,t,r){if(t.keys){I(t.keys,n=>{const a=e[n]||(e[n]=r(n));a["_prepareNode"](t)})}}function rB(e,t){I(t,t=>{rH(e.springs,t,t=>{return rU(t,e)})})}// src/SpringContext.tsx
var rY=({children:e,...t})=>{const r=(0,E.useContext)(rz);const n=t.pause||!!r.pause,a=t.immediate||!!r.immediate;t=tg(()=>({pause:n,immediate:a}),[n,a]);const{Provider:i}=rz;return /* @__PURE__ */E.createElement(i,{value:t},e)};var rz=rV(rY,{});rY.Provider=rz.Provider;rY.Consumer=rz.Consumer;function rV(e,t){Object.assign(e,E.createContext(t));e.Provider._context=e;e.Consumer._context=e;return e}// src/SpringRef.ts
var rq=()=>{const e=[];const t=function(t){e5();const n=[];I(e,(e,a)=>{if(k.und(t)){n.push(e.start())}else{const i=r(t,e,a);if(i){n.push(e.start(i))}}});return n};t.current=e;t.add=function(t){if(!e.includes(t)){e.push(t)}};t.delete=function(t){const r=e.indexOf(t);if(~r)e.splice(r,1)};t.pause=function(){I(e,e=>e.pause(...arguments));return this};t.resume=function(){I(e,e=>e.resume(...arguments));return this};t.set=function(t){I(e,(e,r)=>{const n=k.fun(t)?t(r,e):t;if(n){e.set(n)}})};t.start=function(t){const r=[];I(e,(e,n)=>{if(k.und(t)){r.push(e.start())}else{const a=this._getProps(t,e,n);if(a){r.push(e.start(a))}}});return r};t.stop=function(){I(e,e=>e.stop(...arguments));return this};t.update=function(t){I(e,(e,r)=>e.update(this._getProps(t,e,r)));return this};const r=function(e,t,r){return k.fun(e)?e(r,t):e};t._getProps=r;return t};// src/hooks/useSprings.ts
function rW(e,t,r){const n=k.fun(t)&&t;if(n&&!r)r=[];const a=(0,E.useMemo)(()=>n||arguments.length==3?rq():void 0,[]);const i=(0,E.useRef)(0);const o=tm();const s=(0,E.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){const r=rN(e,t);const n=i.current>0&&!s.queue.length&&!Object.keys(r).some(t=>!e.springs[t]);return n?rL(e,t):new Promise(n=>{rj(e,r);s.queue.push(()=>{n(rL(e,t))});o()})}}),[]);const u=(0,E.useRef)([...s.ctrls]);const c=[];const l=tw(e)||0;(0,E.useMemo)(()=>{I(u.current.slice(e,l),e=>{t2(e,a);e.stop(true)});u.current.length=e;f(l,e)},[e]);(0,E.useMemo)(()=>{f(0,Math.min(l,e))},r);function f(e,r){for(let a=e;a<r;a++){const e=u.current[a]||(u.current[a]=new rM(null,s.flush));const r=n?n(a,e):t[a];if(r){c[a]=rT(r)}}}const d=u.current.map((e,t)=>rN(e,c[t]));const h=(0,E.useContext)(rY);const p=tw(h);const v=h!==p&&t0(h);tp(()=>{i.current++;s.ctrls=u.current;const{queue:e}=s;if(e.length){s.queue=[];I(e,e=>e())}I(u.current,(e,t)=>{a?.add(e);if(v){e.start({default:h})}const r=c[t];if(r){t6(e,r.ref);if(e.ref){e.queue.push(r)}else{e.start(r)}}})});tb(()=>()=>{I(s.ctrls,e=>e.stop(true))});const m=d.map(e=>({...e}));return a?[m,a]:m}// src/hooks/useSpring.ts
function r$(e,t){const r=k.fun(e);const[[n],a]=rW(1,r?e:[e],r?t||[]:t);return r||arguments.length==2?[n,a]:n}// src/hooks/useSpringRef.ts
var rG=()=>rq();var rK=()=>useState(rG)[0];// src/hooks/useSpringValue.ts
var rQ=(e,t)=>{const r=useConstant(()=>new rE(e,t));useOnce2(()=>()=>{r.stop()});return r};// src/hooks/useTrail.ts
function rX(e,t,r){const n=is10.fun(t)&&t;if(n&&!r)r=[];let a=true;let i=void 0;const o=rW(e,(e,r)=>{const o=n?n(e,r):t;i=o.ref;a=a&&o.reverse;return o},// Ensure the props function is called when no deps exist.
// This works around the 3 argument rule.
r||[{}]);useIsomorphicLayoutEffect3(()=>{each6(o[1].current,(e,t)=>{const r=o[1].current[t+(a?1:-1)];t6(e,i);if(e.ref){if(r){e.update({to:r.springs})}return}if(r){e.start({to:r.springs})}else{e.start()}})},r);if(n||arguments.length==3){const e=i??o[1];e["_getProps"]=(t,r,n)=>{const a=is10.fun(t)?t(n,r):t;if(a){const t=e.current[n+(a.reverse?1:-1)];if(t)a.to=t.springs;return a}};return o}return o[0]}// src/hooks/useTransition.tsx
function rJ(e,t,r){const n=k.fun(t)&&t;const{reset:a,sort:i,trail:o=0,expires:s=true,exitBeforeEnter:u=false,onDestroyed:c,ref:l,config:f}=n?n():t;const d=(0,E.useMemo)(()=>n||arguments.length==3?rq():void 0,[]);const h=D(e);const p=[];const v=(0,E.useRef)(null);const m=a?null:v.current;tp(()=>{v.current=p});tb(()=>{I(p,e=>{d?.add(e.ctrl);e.ctrl.ref=d});return()=>{I(v.current,e=>{if(e.expired){clearTimeout(e.expirationId)}t2(e.ctrl,d);e.ctrl.stop(true)})}});const g=r0(h,n?n():t,m);const y=a&&v.current||[];tp(()=>I(y,({ctrl:e,item:t,key:r})=>{t2(e,d);tz(c,t,r)}));const b=[];if(m)I(m,(e,t)=>{if(e.expired){clearTimeout(e.expirationId);y.push(e)}else{t=b[t]=g.indexOf(e.key);if(~t)p[t]=e}});I(h,(e,t)=>{if(!p[t]){p[t]={key:g[t],item:e,phase:"mount"/* MOUNT */,ctrl:new rM};p[t].ctrl.item=e}});if(b.length){let e=-1;const{leave:r}=n?n():t;I(b,(t,n)=>{const a=m[n];if(~t){e=p.indexOf(a);p[e]={...a,item:h[t]}}else if(r){p.splice(++e,0,a)}})}if(k.fun(i)){p.sort((e,t)=>i(e.item,t.item))}let _=-o;const w=tm();const x=tG(t);const O=/* @__PURE__ */new Map;const S=(0,E.useRef)(/* @__PURE__ */new Map);const A=(0,E.useRef)(false);I(p,(e,r)=>{const a=e.key;const i=e.phase;const c=n?n():t;let d;let h;const p=tz(c.delay||0,a);if(i=="mount"/* MOUNT */){d=c.enter;h="enter"/* ENTER */}else{const e=g.indexOf(a)<0;if(i!="leave"/* LEAVE */){if(e){d=c.leave;h="leave"/* LEAVE */}else if(d=c.update){h="update"/* UPDATE */}else return}else if(!e){d=c.enter;h="enter"/* ENTER */}else return}d=tz(d,e.item,r);d=k.obj(d)?tJ(d):{to:d};if(!d.config){const t=f||x.config;d.config=tz(t,e.item,r,h)}_+=o;const y={...x,// we need to add our props.delay value you here.
delay:p+_,ref:l,immediate:c.immediate,// This prevents implied resets.
reset:false,// Merge any phase-specific props.
...d};if(h=="enter"/* ENTER */&&k.und(y.from)){const a=n?n():t;const i=k.und(a.initial)||m?a.from:a.initial;y.from=tz(i,e.item,r)}const{onResolve:b}=y;y.onResolve=e=>{tz(b,e);const t=v.current;const r=t.find(e=>e.key===a);if(!r)return;if(e.cancelled&&r.phase!="update"/* UPDATE */){return}if(r.ctrl.idle){const e=t.every(e=>e.ctrl.idle);if(r.phase=="leave"/* LEAVE */){const t=tz(s,r.item);if(t!==false){const n=t===true?0:t;r.expired=true;if(!e&&n>0){if(n<=0x7fffffff)r.expirationId=setTimeout(w,n);return}}}if(e&&t.some(e=>e.expired)){S.current.delete(r);if(u){A.current=true}w()}}};const E=rN(e.ctrl,y);if(h==="leave"/* LEAVE */&&u){S.current.set(e,{phase:h,springs:E,payload:y})}else{O.set(e,{phase:h,springs:E,payload:y})}});const T=(0,E.useContext)(rY);const R=tw(T);const C=T!==R&&t0(T);tp(()=>{if(C){I(p,e=>{e.ctrl.start({default:T})})}},[T]);I(O,(e,t)=>{if(S.current.size){const e=p.findIndex(e=>e.key===t.key);p.splice(e,1)}});tp(()=>{I(S.current.size?S.current:O,({phase:e,payload:t},r)=>{const{ctrl:n}=r;r.phase=e;d?.add(n);if(C&&e=="enter"/* ENTER */){n.start({default:T})}if(t){t6(n,t.ref);if((n.ref||d)&&!A.current){n.update(t)}else{n.start(t);if(A.current){A.current=false}}}})},a?void 0:r);const P=e=>/* @__PURE__ */E.createElement(E.Fragment,null,p.map((t,r)=>{const{springs:n}=O.get(t)||t.ctrl;const a=e({...n},t.item,t,r);return a&&a.type?/* @__PURE__ */E.createElement(a.type,{...a.props,key:k.str(t.key)||k.num(t.key)?t.key:t.ctrl.id,ref:a.ref}):a}));return d?[P,d]:P}var rZ=1;function r0(e,{key:t,keys:r=t},n){if(r===null){const t=/* @__PURE__ */new Set;return e.map(e=>{const r=n&&n.find(r=>r.item===e&&r.phase!=="leave"/* LEAVE */&&!t.has(r));if(r){t.add(r);return r.key}return rZ++})}return k.und(r)?e:k.fun(r)?e.map(r):D(r)}// src/hooks/useScroll.ts
var r1=({container:e,...t}={})=>{const[r,n]=r$(()=>({scrollX:0,scrollY:0,scrollXProgress:0,scrollYProgress:0,...t}),[]);useIsomorphicLayoutEffect5(()=>{const t=onScroll(({x:e,y:t})=>{n.start({scrollX:e.current,scrollXProgress:e.progress,scrollY:t.current,scrollYProgress:t.progress})},{container:e?.current||void 0});return()=>{each8(Object.values(r),e=>e.stop());t()}},[]);return r};// src/hooks/useResize.ts
var r2=({container:e,...t})=>{const[r,n]=r$(()=>({width:0,height:0,...t}),[]);useIsomorphicLayoutEffect6(()=>{const t=onResize(({width:e,height:t})=>{n.start({width:e,height:t,immediate:r.width.get()===0||r.height.get()===0})},{container:e?.current||void 0});return()=>{each9(Object.values(r),e=>e.stop());t()}},[]);return r};// src/hooks/useInView.ts
var r6=/* unused pure expression or super */null&&{any:0,all:1};function r5(e,t){const[r,n]=useState2(false);const a=useRef3();const i=is12.fun(e)&&e;const o=i?i():{};const{to:s={},from:u={},...c}=o;const l=i?t:e;const[f,d]=r$(()=>({from:u,...c}),[]);useIsomorphicLayoutEffect7(()=>{const e=a.current;const{root:t,once:i,amount:o="any",...c}=l??{};if(!e||i&&r||typeof IntersectionObserver==="undefined")return;const f=/* @__PURE__ */new WeakMap;const h=()=>{if(s){d.start(s)}n(true);const e=()=>{if(u){d.start(u)}n(false)};return i?void 0:e};const p=e=>{e.forEach(e=>{const t=f.get(e.target);if(e.isIntersecting===Boolean(t)){return}if(e.isIntersecting){const t=h();if(is12.fun(t)){f.set(e.target,t)}else{v.unobserve(e.target)}}else if(t){t();f.delete(e.target)}})};const v=new IntersectionObserver(p,{root:t&&t.current||void 0,threshold:typeof o==="number"||Array.isArray(o)?o:r6[o],...c});v.observe(e);return()=>v.unobserve(e)},[l]);if(i){return[a,f]}return[a,r]}// src/components/Spring.tsx
function r4({children:e,...t}){return e(r$(t))}// src/components/Trail.tsx
function r3({items:e,children:t,...r}){const n=rX(e.length,r);return e.map((e,r)=>{const a=t(e,r);return is13.fun(a)?a(n[r]):a})}// src/components/Transition.tsx
function r7({items:e,children:t,...r}){return rJ(e,r)(t)}// src/interpolate.ts
// src/Interpolation.ts
var r8=class extends rh{constructor(e,t){super();this.source=e;/** Equals false when in the frameloop */this.idle=true;/** The inputs which are currently animating */this._active=/* @__PURE__ */new Set;this.calc=e_(...t);const r=this._get();const n=tL(r);tA(this,n.create(r))}advance(e){const t=this._get();const r=this.get();if(!C(t,r)){tS(this).setValue(t);this._onChange(t,this.idle)}if(!this.idle&&ne(this._active)){nt(this)}}_get(){const e=k.arr(this.source)?this.source.map(eM):D(eM(this.source));return this.calc(...e)}_start(){if(this.idle&&!ne(this._active)){this.idle=false;I(tT(this),e=>{e.done=false});if(A.skipAnimation){a.batchedUpdates(()=>this.advance());nt(this)}else{$.start(this)}}}// Observe our sources only when we're observed.
_attach(){let e=1;I(D(this.source),t=>{if(eD(t)){eH(t,this)}if(rf(t)){if(!t.idle){this._active.add(t)}e=Math.max(e,t.priority+1)}});this.priority=e;this._start()}// Stop observing our sources once we have no observers.
_detach(){I(D(this.source),e=>{if(eD(e)){eB(e,this)}});this._active.clear();nt(this)}/** @internal */eventObserved(e){if(e.type=="change"){if(e.idle){this.advance()}else{this._active.add(e.parent);this._start()}}else if(e.type=="idle"){this._active.delete(e.parent)}else if(e.type=="priority"){this.priority=D(this.source).reduce((e,t)=>Math.max(e,(rf(t)?t.priority:0)+1),0)}}};function r9(e){return e.idle!==false}function ne(e){return!e.size||Array.from(e).every(r9)}function nt(e){if(!e.idle){e.idle=true;I(tT(e),e=>{e.done=true});eN(e,{type:"idle",parent:e})}}// src/interpolate.ts
var nr=(e,...t)=>new r8(e,t);var nn=(e,...t)=>(deprecateInterpolate2(),new r8(e,t));// src/globals.ts
A.assign({createStringInterpolator:eJ,to:(e,t)=>new r8(e,t)});var na=$.advance;// src/index.ts
//# sourceMappingURL=react-spring_core.modern.mjs.map
// EXTERNAL MODULE: external "ReactDOM"
var ni=r(5206);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
// src/index.ts
// src/applyAnimatedValues.ts
var no=/^--/;function ns(e,t){if(t==null||typeof t==="boolean"||t==="")return"";if(typeof t==="number"&&t!==0&&!no.test(e)&&!(nl.hasOwnProperty(e)&&nl[e]))return t+"px";return(""+t).trim()}var nu={};function nc(e,t){if(!e.nodeType||!e.setAttribute){return false}const r=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter";const{className:n,style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:u,...c}=t;const l=Object.values(c);const f=Object.keys(c).map(t=>r||e.hasAttribute(t)?t:nu[t]||(nu[t]=t.replace(/([A-Z])/g,// Attributes are written in dash case
    e=>"-"+e.toLowerCase())));if(i!==void 0){e.textContent=i}for(const t in a){if(a.hasOwnProperty(t)){const r=ns(t,a[t]);if(no.test(t)){e.style.setProperty(t,r)}else{e.style[t]=r}}}f.forEach((t,r)=>{e.setAttribute(t,l[r])});if(n!==void 0){e.className=n}if(o!==void 0){e.scrollTop=o}if(s!==void 0){e.scrollLeft=s}if(u!==void 0){e.setAttribute("viewBox",u)}}var nl={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};var nf=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1);var nd=["Webkit","Ms","Moz","O"];nl=Object.keys(nl).reduce((e,t)=>{nd.forEach(r=>e[nf(r,t)]=e[t]);return e},nl);// src/AnimatedStyle.ts
var nh=/^(matrix|translate|scale|rotate|skew)/;var np=/^(translate)/;var nv=/^(rotate|skew)/;var nm=(e,t)=>k.num(e)&&e!==0?e+t:e;var ng=(e,t)=>k.arr(e)?e.every(e=>ng(e,t)):k.num(e)?e===t:parseFloat(e)===t;var ny=class extends tP{constructor({x:e,y:t,z:r,...n}){const a=[];const i=[];if(e||t||r){a.push([e||0,t||0,r||0]);i.push(e=>[`translate3d(${e.map(e=>nm(e,"px")).join(",")})`,// prettier-ignore
    ng(e,0)])}P(n,(e,t)=>{if(t==="transform"){a.push([e||""]);i.push(e=>[e,e===""])}else if(nh.test(t)){delete n[t];if(k.und(e))return;const r=np.test(t)?"px":nv.test(t)?"deg":"";a.push(D(e));i.push(t==="rotate3d"?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${nm(a,r)})`,ng(a,0)]:e=>[`${t}(${e.map(e=>nm(e,r)).join(",")})`,ng(e,t.startsWith("scale")?1:0)])}});if(a.length){n.transform=new nb(a,i)}super(n)}};var nb=class extends ej{constructor(e,t){super();this.inputs=e;this.transforms=t;this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="";let t=true;I(this.inputs,(r,n)=>{const a=eM(r[0]);const[i,o]=this.transforms[n](k.arr(a)?a:r.map(eM));e+=" "+i;t=t&&o});return t?"none":e}// Start observing our inputs once we have an observer.
observerAdded(e){if(e==1)I(this.inputs,e=>I(e,e=>eD(e)&&eH(e,this)))}// Stop observing our inputs once we have no observers.
observerRemoved(e){if(e==0)I(this.inputs,e=>I(e,e=>eD(e)&&eB(e,this)))}eventObserved(e){if(e.type=="change"){this._value=null}eN(this,e)}};// src/primitives.ts
var n_=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr",// SVG
"circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];// src/index.ts
A.assign({batchedUpdates:ni.unstable_batchedUpdates,createStringInterpolator:eJ,colors:ee});var nw=tB(n_,{applyAnimatedValues:nc,createAnimatedStyle:e=>new ny(e),// eslint-disable-next-line @typescript-eslint/no-unused-vars
getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r});var nx=nw.animated;//# sourceMappingURL=react-spring_web.modern.mjs.map
},33:function(e,t,r){"use strict";// EXPORTS
r.d(t,{_:()=>/* binding */a});// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_define_property.js
function n(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else e[t]=r;return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};var a=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}a.forEach(function(t){n(e,t,r[t])})}return e}},1303:function(e,t,r){"use strict";r.d(t,{_:()=>a});function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t){n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,n)}return r}function a(e,t){t=t!=null?t:{};if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(t));else{n(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}},2473:function(e,t,r){"use strict";// EXPORTS
r.d(t,{_:()=>/* binding */a});// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties_loose.js
function n(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,i;for(i=0;i<n.length;i++){a=n[i];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js
function a(e,t){if(e==null)return{};var r=n(e,t);var a,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++){a=o[i];if(t.indexOf(a)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,a))continue;r[a]=e[a]}}return r}},690:function(e,t,r){"use strict";r.d(t,{_:()=>n});function n(e,t){if(!t)t=e.slice(0);return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},2698:function(e,t,r){"use strict";r.d(t,{q:()=>a});let n={};function a(){return n}function i(e){n=e}},1159:function(e,t,r){"use strict";r.d(t,{x:()=>a});/* import */var n=r(7443);function a(e,...t){const r=n/* .constructFrom.bind */.w.bind(null,e||t.find(e=>typeof e==="object"));return t.map(r)}},9872:function(e,t,r){"use strict";r.d(t,{z:()=>i});/* import */var n=r(1779);/* import */var a=r(2901);/**
 * The {@link addMinutes} function options.
 *//**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 * @param options - An object with options
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);i.setTime(i.getTime()+t*n/* .millisecondsInMinute */.Cg);return i}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},1779:function(e,t,r){"use strict";r.d(t,{Cg:()=>c,_P:()=>A,my:()=>s,w4:()=>u});/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 *//**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */const n=7;/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */const a=365.2425;/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */const i=Math.pow(10,8)*24*60*60*1e3;/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */const o=/* unused pure expression or super */null&&-i;/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */const s=6048e5;/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */const u=864e5;/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */const c=6e4;/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */const l=36e5;/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */const f=1e3;/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */const d=525600;/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */const h=43200;/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */const p=1440;/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */const v=60;/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */const m=3;/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */const g=12;/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */const y=4;/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */const b=3600;/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */const _=60;/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */const w=/* unused pure expression or super */null&&b*24;/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */const x=/* unused pure expression or super */null&&w*7;/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */const E=/* unused pure expression or super */null&&w*a;/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */const O=/* unused pure expression or super */null&&E/12;/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */const S=/* unused pure expression or super */null&&O*3;/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */const A=Symbol.for("constructDateFrom")},7443:function(e,t,r){"use strict";r.d(t,{w:()=>a});/* import */var n=r(1779);/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */function a(e,t){if(typeof e==="function")return e(t);if(e&&typeof e==="object"&&n/* .constructFromSymbol */._P in e)return e[n/* .constructFromSymbol */._P](t);if(e instanceof Date)return new e.constructor(t);return new Date(t)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},5215:function(e,t,r){"use strict";// EXPORTS
r.d(t,{m:()=>/* binding */u});// UNUSED EXPORTS: default
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var n=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function a(e){const t=(0,n/* .toDate */.a)(e);const r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));r.setUTCFullYear(t.getFullYear());return+e-+r}// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
var i=r(1159);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var o=r(1779);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var s=r(8673);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
/**
 * The {@link differenceInCalendarDays} function options.
 *//**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */function u(e,t,r){const[n,u]=(0,i/* .normalizeDates */.x)(r?.in,e,t);const c=(0,s/* .startOfDay */.o)(n);const l=(0,s/* .startOfDay */.o)(u);const f=+c-a(c);const d=+l-a(l);// Round the number of days to the nearest integer because the number of
// milliseconds in a day is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round((f-d)/o/* .millisecondsInDay */.w4)}// Fallback for modularized imports:
/* export default */const c=/* unused pure expression or super */null&&u},8956:function(e,t,r){"use strict";// EXPORTS
r.d(t,{GP:()=>/* binding */j});// UNUSED EXPORTS: default, longFormatters, formatters, formatDate
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js + 9 modules
var n=r(8795);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var a=r(2698);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js + 1 modules
var i=r(5215);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
var o=r(3766);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var s=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
/**
 * The {@link getDayOfYear} function options.
 *//**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */function u(e,t){const r=(0,s/* .toDate */.a)(e,t?.in);const n=(0,i/* .differenceInCalendarDays */.m)(r,(0,o/* .startOfYear */.D)(r));const a=n+1;return a}// Fallback for modularized imports:
/* export default */const c=/* unused pure expression or super */null&&u;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js + 1 modules
var l=r(305);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
var f=r(5556);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js + 1 modules
var d=r(150);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
var h=r(8435);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function p(e,t){const r=e<0?"-":"";const n=Math.abs(e).toString().padStart(t,"0");return r+n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */const v={// Year
y(e,t){// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
const r=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=r>0?r:1-r;return p(t==="yy"?n%100:n,t.length)},// Month
M(e,t){const r=e.getMonth();return t==="M"?String(r+1):p(r+1,2)},// Day of the month
d(e,t){return p(e.getDate(),t.length)},// AM or PM
a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},// Hour [1-12]
h(e,t){return p(e.getHours()%12||12,t.length)},// Hour [0-23]
H(e,t){return p(e.getHours(),t.length)},// Minute
m(e,t){return p(e.getMinutes(),t.length)},// Second
s(e,t){return p(e.getSeconds(),t.length)},// Fraction of second
S(e,t){const r=t.length;const n=e.getMilliseconds();const a=Math.trunc(n*Math.pow(10,r-3));return p(a,t.length)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/formatters.js
const m={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */const g={// Era
G:function(e,t,r){const n=e.getFullYear()>0?1:0;switch(t){// AD, BC
case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});// A, B
case"GGGGG":return r.era(n,{width:"narrow"});// Anno Domini, Before Christ
case"GGGG":default:return r.era(n,{width:"wide"})}},// Year
y:function(e,t,r){// Ordinal number
if(t==="yo"){const t=e.getFullYear();// Returns 1 for 1 BC (which is year 0 in JavaScript)
const n=t>0?t:1-t;return r.ordinalNumber(n,{unit:"year"})}return v.y(e,t)},// Local week-numbering year
Y:function(e,t,r,n){const a=(0,h/* .getWeekYear */.h)(e,n);// Returns 1 for 1 BC (which is year 0 in JavaScript)
const i=a>0?a:1-a;// Two digit year
if(t==="YY"){const e=i%100;return p(e,2)}// Ordinal number
if(t==="Yo"){return r.ordinalNumber(i,{unit:"year"})}// Padding
return p(i,t.length)},// ISO week-numbering year
R:function(e,t){const r=(0,f/* .getISOWeekYear */.p)(e);// Padding
return p(r,t.length)},// Extended year. This is a single number designating the year of this calendar system.
// The main difference between `y` and `u` localizers are B.C. years:
// | Year | `y` | `u` |
// |------|-----|-----|
// | AC 1 |   1 |   1 |
// | BC 1 |   1 |   0 |
// | BC 2 |   2 |  -1 |
// Also `yy` always returns the last two digits of a year,
// while `uu` pads single digit years to 2 characters and returns other years unchanged.
u:function(e,t){const r=e.getFullYear();return p(r,t.length)},// Quarter
Q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"Q":return String(n);// 01, 02, 03, 04
case"QQ":return p(n,2);// 1st, 2nd, 3rd, 4th
case"Qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});// 1st quarter, 2nd quarter, ...
case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},// Stand-alone quarter
q:function(e,t,r){const n=Math.ceil((e.getMonth()+1)/3);switch(t){// 1, 2, 3, 4
case"q":return String(n);// 01, 02, 03, 04
case"qq":return p(n,2);// 1st, 2nd, 3rd, 4th
case"qo":return r.ordinalNumber(n,{unit:"quarter"});// Q1, Q2, Q3, Q4
case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});// 1, 2, 3, 4 (narrow quarter; could be not numerical)
case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});// 1st quarter, 2nd quarter, ...
case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},// Month
M:function(e,t,r){const n=e.getMonth();switch(t){case"M":case"MM":return v.M(e,t);// 1st, 2nd, ..., 12th
case"Mo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});// J, F, ..., D
case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});// January, February, ..., December
case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},// Stand-alone month
L:function(e,t,r){const n=e.getMonth();switch(t){// 1, 2, ..., 12
case"L":return String(n+1);// 01, 02, ..., 12
case"LL":return p(n+1,2);// 1st, 2nd, ..., 12th
case"Lo":return r.ordinalNumber(n+1,{unit:"month"});// Jan, Feb, ..., Dec
case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});// J, F, ..., D
case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});// January, February, ..., December
case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},// Local week of year
w:function(e,t,r,n){const a=(0,d/* .getWeek */.N)(e,n);if(t==="wo"){return r.ordinalNumber(a,{unit:"week"})}return p(a,t.length)},// ISO week of year
I:function(e,t,r){const n=(0,l/* .getISOWeek */.s)(e);if(t==="Io"){return r.ordinalNumber(n,{unit:"week"})}return p(n,t.length)},// Day of the month
d:function(e,t,r){if(t==="do"){return r.ordinalNumber(e.getDate(),{unit:"date"})}return v.d(e,t)},// Day of year
D:function(e,t,r){const n=u(e);if(t==="Do"){return r.ordinalNumber(n,{unit:"dayOfYear"})}return p(n,t.length)},// Day of week
E:function(e,t,r){const n=e.getDay();switch(t){// Tue
case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},// Local day of week
e:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (Nth day of week with current locale or weekStartsOn)
case"e":return String(i);// Padded numerical value
case"ee":return p(i,2);// 1st, 2nd, ..., 7th
case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});// T
case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});// Tu
case"eeeeee":return r.day(a,{width:"short",context:"formatting"});// Tuesday
case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},// Stand-alone local day of week
c:function(e,t,r,n){const a=e.getDay();const i=(a-n.weekStartsOn+8)%7||7;switch(t){// Numerical value (same as in `e`)
case"c":return String(i);// Padded numerical value
case"cc":return p(i,t.length);// 1st, 2nd, ..., 7th
case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});// T
case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});// Tu
case"cccccc":return r.day(a,{width:"short",context:"standalone"});// Tuesday
case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},// ISO day of week
i:function(e,t,r){const n=e.getDay();const a=n===0?7:n;switch(t){// 2
case"i":return String(a);// 02
case"ii":return p(a,t.length);// 2nd
case"io":return r.ordinalNumber(a,{unit:"day"});// Tue
case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});// T
case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});// Tu
case"iiiiii":return r.day(n,{width:"short",context:"formatting"});// Tuesday
case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},// AM or PM
a:function(e,t,r){const n=e.getHours();const a=n/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// AM, PM, midnight, noon
b:function(e,t,r){const n=e.getHours();let a;if(n===12){a=m.noon}else if(n===0){a=m.midnight}else{a=n/12>=1?"pm":"am"}switch(t){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// in the morning, in the afternoon, in the evening, at night
B:function(e,t,r){const n=e.getHours();let a;if(n>=17){a=m.evening}else if(n>=12){a=m.afternoon}else if(n>=4){a=m.morning}else{a=m.night}switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},// Hour [1-12]
h:function(e,t,r){if(t==="ho"){let t=e.getHours()%12;if(t===0)t=12;return r.ordinalNumber(t,{unit:"hour"})}return v.h(e,t)},// Hour [0-23]
H:function(e,t,r){if(t==="Ho"){return r.ordinalNumber(e.getHours(),{unit:"hour"})}return v.H(e,t)},// Hour [0-11]
K:function(e,t,r){const n=e.getHours()%12;if(t==="Ko"){return r.ordinalNumber(n,{unit:"hour"})}return p(n,t.length)},// Hour [1-24]
k:function(e,t,r){let n=e.getHours();if(n===0)n=24;if(t==="ko"){return r.ordinalNumber(n,{unit:"hour"})}return p(n,t.length)},// Minute
m:function(e,t,r){if(t==="mo"){return r.ordinalNumber(e.getMinutes(),{unit:"minute"})}return v.m(e,t)},// Second
s:function(e,t,r){if(t==="so"){return r.ordinalNumber(e.getSeconds(),{unit:"second"})}return v.s(e,t)},// Fraction of second
S:function(e,t){return v.S(e,t)},// Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
X:function(e,t,r){const n=e.getTimezoneOffset();if(n===0){return"Z"}switch(t){// Hours and optional minutes
case"X":return b(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XX`
case"XXXX":case"XX":return _(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `XXX`
case"XXXXX":case"XXX":default:return _(n,":")}},// Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
x:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Hours and optional minutes
case"x":return b(n);// Hours, minutes and optional seconds without `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xx`
case"xxxx":case"xx":return _(n);// Hours, minutes and optional seconds with `:` delimiter
// Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
// so this token always has the same output as `xxx`
case"xxxxx":case"xxx":default:return _(n,":")}},// Timezone (GMT)
O:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"O":case"OO":case"OOO":return"GMT"+y(n,":");// Long
case"OOOO":default:return"GMT"+_(n,":")}},// Timezone (specific non-location)
z:function(e,t,r){const n=e.getTimezoneOffset();switch(t){// Short
case"z":case"zz":case"zzz":return"GMT"+y(n,":");// Long
case"zzzz":default:return"GMT"+_(n,":")}},// Seconds timestamp
t:function(e,t,r){const n=Math.trunc(+e/1e3);return p(n,t.length)},// Milliseconds timestamp
T:function(e,t,r){return p(+e,t.length)}};function y(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=Math.trunc(n/60);const i=n%60;if(i===0){return r+String(a)}return r+String(a)+t+p(i,2)}function b(e,t){if(e%60===0){const t=e>0?"-":"+";return t+p(Math.abs(e)/60,2)}return _(e,t)}function _(e,t=""){const r=e>0?"-":"+";const n=Math.abs(e);const a=p(Math.trunc(n/60),2);const i=p(n%60,2);return r+a+t+i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
const w=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}};const x=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}};const E=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[];const n=r[1];const a=r[2];if(!a){return w(e,t)}let i;switch(n){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",w(n,t)).replace("{{time}}",x(a,t))};const O={p:x,P:E};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/protectedTokens.js
const S=/^D+$/;const A=/^Y+$/;const T=["D","DD","YY","YYYY"];function R(e){return S.test(e)}function k(e){return A.test(e)}function C(e,t,r){const n=I(e,t,r);console.warn(n);if(T.includes(e))throw new RangeError(n)}function I(e,t,r){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
var P=r(856);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const D=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const M=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;const L=/^'([^]*?)'?$/;const F=/''/g;const N=/[a-zA-Z]/;/**
 * The {@link format} function options.
 *//**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */function j(e,t,r){const i=(0,a/* .getDefaultOptions */.q)();const o=r?.locale??i.locale??n/* .enUS */.c;const u=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1;const c=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0;const l=(0,s/* .toDate */.a)(e,r?.in);if(!(0,P/* .isValid */.f)(l)){throw new RangeError("Invalid time value")}let f=t.match(M).map(e=>{const t=e[0];if(t==="p"||t==="P"){const r=O[t];return r(e,o.formatLong)}return e}).join("").match(D).map(e=>{// Replace two single quote characters with one single quote character
if(e==="''"){return{isToken:false,value:"'"}}const t=e[0];if(t==="'"){return{isToken:false,value:U(e)}}if(g[t]){return{isToken:true,value:e}}if(t.match(N)){throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`")}return{isToken:false,value:e}});// invoke localize preprocessor (only for french locales at the moment)
if(o.localize.preprocessor){f=o.localize.preprocessor(l,f)}const d={firstWeekContainsDate:u,weekStartsOn:c,locale:o};return f.map(n=>{if(!n.isToken)return n.value;const a=n.value;if(!r?.useAdditionalWeekYearTokens&&k(a)||!r?.useAdditionalDayOfYearTokens&&R(a)){C(a,t,String(e))}const i=g[a[0]];return i(l,a,o.localize,d)}).join("")}function U(e){const t=e.match(L);if(!t){return e}return t[1].replace(F,"'")}// Fallback for modularized imports:
/* export default */const H=/* unused pure expression or super */null&&j},305:function(e,t,r){"use strict";// EXPORTS
r.d(t,{s:()=>/* binding */l});// UNUSED EXPORTS: default
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var n=r(1779);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
var a=r(5698);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var i=r(7443);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
var o=r(5556);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
/**
 * The {@link startOfISOWeekYear} function options.
 *//**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */function s(e,t){const r=(0,o/* .getISOWeekYear */.p)(e,t);const n=(0,i/* .constructFrom */.w)(t?.in||e,0);n.setFullYear(r,0,4);n.setHours(0,0,0,0);return(0,a/* .startOfISOWeek */.b)(n)}// Fallback for modularized imports:
/* export default */const u=/* unused pure expression or super */null&&s;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var c=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
/**
 * The {@link getISOWeek} function options.
 *//**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */function l(e,t){const r=(0,c/* .toDate */.a)(e,t?.in);const i=+(0,a/* .startOfISOWeek */.b)(r)-+s(r);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(i/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* export default */const f=/* unused pure expression or super */null&&l},5556:function(e,t,r){"use strict";r.d(t,{p:()=>o});/* import */var n=r(7443);/* import */var a=r(5698);/* import */var i=r(2901);/**
 * The {@link getISOWeekYear} function options.
 *//**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */function o(e,t){const r=(0,i/* .toDate */.a)(e,t?.in);const o=r.getFullYear();const s=(0,n/* .constructFrom */.w)(r,0);s.setFullYear(o+1,0,4);s.setHours(0,0,0,0);const u=(0,a/* .startOfISOWeek */.b)(s);const c=(0,n/* .constructFrom */.w)(r,0);c.setFullYear(o,0,4);c.setHours(0,0,0,0);const l=(0,a/* .startOfISOWeek */.b)(c);if(r.getTime()>=u.getTime()){return o+1}else if(r.getTime()>=l.getTime()){return o}else{return o-1}}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},150:function(e,t,r){"use strict";// EXPORTS
r.d(t,{N:()=>/* binding */f});// UNUSED EXPORTS: default
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var n=r(1779);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
var a=r(3431);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var i=r(2698);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var o=r(7443);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
var s=r(8435);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
/**
 * The {@link startOfWeekYear} function options.
 *//**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */function u(e,t){const r=(0,i/* .getDefaultOptions */.q)();const n=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1;const u=(0,s/* .getWeekYear */.h)(e,t);const c=(0,o/* .constructFrom */.w)(t?.in||e,0);c.setFullYear(u,0,n);c.setHours(0,0,0,0);const l=(0,a/* .startOfWeek */.k)(c,t);return l}// Fallback for modularized imports:
/* export default */const c=/* unused pure expression or super */null&&u;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var l=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
/**
 * The {@link getWeek} function options.
 *//**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */function f(e,t){const r=(0,l/* .toDate */.a)(e,t?.in);const i=+(0,a/* .startOfWeek */.k)(r,t)-+u(r,t);// Round the number of weeks to the nearest integer because the number of
// milliseconds in a week is not constant (e.g. it's different in the week of
// the daylight saving time clock shift).
return Math.round(i/n/* .millisecondsInWeek */.my)+1}// Fallback for modularized imports:
/* export default */const d=/* unused pure expression or super */null&&f},8435:function(e,t,r){"use strict";r.d(t,{h:()=>s});/* import */var n=r(2698);/* import */var a=r(7443);/* import */var i=r(3431);/* import */var o=r(2901);/**
 * The {@link getWeekYear} function options.
 *//**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */function s(e,t){const r=(0,o/* .toDate */.a)(e,t?.in);const s=r.getFullYear();const u=(0,n/* .getDefaultOptions */.q)();const c=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??u.firstWeekContainsDate??u.locale?.options?.firstWeekContainsDate??1;const l=(0,a/* .constructFrom */.w)(t?.in||e,0);l.setFullYear(s+1,0,c);l.setHours(0,0,0,0);const f=(0,i/* .startOfWeek */.k)(l,t);const d=(0,a/* .constructFrom */.w)(t?.in||e,0);d.setFullYear(s,0,c);d.setHours(0,0,0,0);const h=(0,i/* .startOfWeek */.k)(d,t);if(+r>=+f){return s+1}else if(+r>=+h){return s}else{return s-1}}// Fallback for modularized imports:
/* unused export default */var u=/* unused pure expression or super */null&&s},1936:function(e,t,r){"use strict";r.d(t,{$:()=>n});/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */function n(e){return e instanceof Date||typeof e==="object"&&Object.prototype.toString.call(e)==="[object Date]"}// Fallback for modularized imports:
/* unused export default */var a=/* unused pure expression or super */null&&n},856:function(e,t,r){"use strict";r.d(t,{f:()=>i});/* import */var n=r(1936);/* import */var a=r(2901);/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */function i(e){return!(!(0,n/* .isDate */.$)(e)&&typeof e!=="number"||isNaN(+(0,a/* .toDate */.a)(e)))}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},8795:function(e,t,r){"use strict";// EXPORTS
r.d(t,{c:()=>/* binding */j});// UNUSED EXPORTS: default
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
const n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const a=(e,t,r)=>{let a;const i=n[e];if(typeof i==="string"){a=i}else if(t===1){a=i.one}else{a=i.other.replace("{{count}}",t.toString())}if(r?.addSuffix){if(r.comparison&&r.comparison>0){return"in "+a}else{return a+" ago"}}return a};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function i(e){return (t={})=>{// TODO: Remove String()
const r=t.width?String(t.width):e.defaultWidth;const n=e.formats[r]||e.formats[e.defaultWidth];return n}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatLong.js
const o={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"};const s={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};const u={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};const c={date:i({formats:o,defaultWidth:"full"}),time:i({formats:s,defaultWidth:"full"}),dateTime:i({formats:u,defaultWidth:"full"})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
const l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const f=(e,t,r,n)=>l[e];// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 *//**
 * The map of localized values for each width.
 *//**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 *//**
 * Converts the unit value to the tuple of values.
 *//**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 *//**
 * The tuple of localized quarter values. The first element represents Q1.
 *//**
 * The tuple of localized day values. The first element represents Sunday.
 *//**
 * The tuple of localized month values. The first element represents January.
 */function d(e){return(t,r)=>{const n=r?.context?String(r.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth;const n=r?.width?String(r.width):t;a=e.formattingValues[n]||e.formattingValues[t]}else{const t=e.defaultWidth;const n=r?.width?String(r.width):e.defaultWidth;a=e.values[n]||e.values[t]}const i=e.argumentCallback?e.argumentCallback(t):t;// @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
return a[i]}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/localize.js
const h={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]};const p={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]};// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const v={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]};const m={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]};const g={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}};const y={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};const b=(e,t)=>{const r=Number(e);// If ordinal numbers depend on context, for example,
// if they are different for different grammatical genders,
// use `options.unit`.
//
// `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
// 'day', 'hour', 'minute', 'second'.
const n=r%100;if(n>20||n<10){switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}}return r+"th"};const _={ordinalNumber:b,era:d({values:h,defaultWidth:"wide"}),quarter:d({values:p,defaultWidth:"wide",argumentCallback:e=>e-1}),month:d({values:v,defaultWidth:"wide"}),day:d({values:m,defaultWidth:"wide"}),dayPeriod:d({values:g,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function w(e){return(t,r={})=>{const n=r.width;const a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth];const i=t.match(a);if(!i){return null}const o=i[0];const s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth];const u=Array.isArray(s)?E(s,e=>e.test(o)):x(s,e=>e.test(o));let c;c=e.valueCallback?e.valueCallback(u):u;c=r.valueCallback?r.valueCallback(c):c;const l=t.slice(o.length);return{value:c,rest:l}}}function x(e,t){for(const r in e){if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r])){return r}}return undefined}function E(e,t){for(let r=0;r<e.length;r++){if(t(e[r])){return r}}return undefined};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function O(e){return(t,r={})=>{const n=t.match(e.matchPattern);if(!n)return null;const a=n[0];const i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];// [TODO] I challenge you to fix the type
o=r.valueCallback?r.valueCallback(o):o;const s=t.slice(a.length);return{value:o,rest:s}}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/match.js
const S=/^(\d+)(th|st|nd|rd)?/i;const A=/\d+/i;const T={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i};const R={any:[/^b/i,/^(a|c)/i]};const k={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i};const C={any:[/1/i,/2/i,/3/i,/4/i]};const I={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i};const P={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};const D={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i};const M={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]};const L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i};const F={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}};const N={ordinalNumber:O({matchPattern:S,parsePattern:A,valueCallback:e=>parseInt(e,10)}),era:w({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),quarter:w({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any",valueCallback:e=>e+1}),month:w({matchPatterns:I,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),day:w({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:M,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:F,defaultParseWidth:"any"})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js
/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */const j={code:"en-US",formatDistance:a,formatLong:c,formatRelative:f,localize:_,match:N,options:{weekStartsOn:0/* Sunday */,firstWeekContainsDate:1}};// Fallback for modularized imports:
/* export default */const U=/* unused pure expression or super */null&&j},8673:function(e,t,r){"use strict";r.d(t,{o:()=>a});/* import */var n=r(2901);/**
 * The {@link startOfDay} function options.
 *//**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},5698:function(e,t,r){"use strict";r.d(t,{b:()=>a});/* import */var n=r(3431);/**
 * The {@link startOfISOWeek} function options.
 *//**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){return(0,n/* .startOfWeek */.k)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},3431:function(e,t,r){"use strict";r.d(t,{k:()=>i});/* import */var n=r(2698);/* import */var a=r(2901);/**
 * The {@link startOfWeek} function options.
 *//**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.q)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.a)(e,t?.in);const s=o.getDay();const u=(s<i?7:0)+s-i;o.setDate(o.getDate()-u);o.setHours(0,0,0,0);return o}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},3766:function(e,t,r){"use strict";r.d(t,{D:()=>a});/* import */var n=r(2901);/**
 * The {@link startOfYear} function options.
 *//**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setFullYear(r.getFullYear(),0,1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},2901:function(e,t,r){"use strict";r.d(t,{a:()=>a});/* import */var n=r(7443);/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */function a(e,t){// [TODO] Get rid of `toDate` or `constructFrom`?
return(0,n/* .constructFrom */.w)(t||e,e)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a}};// The module cache
var t={};// The require function
function r(n){// Check if module is in cache
var a=t[n];if(a!==undefined){return a.exports}// Create a new module (and put it into the cache)
var i=t[n]={id:n,exports:{}};// Execute the module function
e[n](i,i.exports,r);// Return the exports of the module
return i.exports}// expose the modules object (__webpack_modules__)
r.m=e;// webpack/runtime/compat_get_default_export
(()=>{// getDefaultExport function for compatibility with non-ESM modules
r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;r.d(t,{a:t});return t}})();// webpack/runtime/define_property_getters
(()=>{r.d=(e,t)=>{for(var n in t){if(r.o(t,n)&&!r.o(e,n)){Object.defineProperty(e,n,{enumerable:true,get:t[n]})}}}})();// webpack/runtime/ensure_chunk
(()=>{r.f={};// This file contains only the entry chunk.
// The chunk loading function for additional chunks
r.e=e=>{return Promise.all(Object.keys(r.f).reduce((t,n)=>{r.f[n](e,t);return t},[]))}})();// webpack/runtime/get javascript chunk filename
(()=>{// This function allow to reference chunks
r.u=e=>{// return url for filenames not based on template
// return url for filenames based on template
return"lazy-chunks/"+({"421":"bundle-builder-basic","626":"bundle-builder-additional"})[e]+".js?ver=4.0.7"}})();// webpack/runtime/get mini-css chunk filename
(()=>{// This function allow to reference chunks
r.miniCssF=e=>{// return url for filenames not based on template
// return url for filenames based on template
return""+e+".css"}})();// webpack/runtime/global
(()=>{r.g=(()=>{if(typeof globalThis==="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window==="object")return window}})()})();// webpack/runtime/has_own_property
(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();// webpack/runtime/load_script
(()=>{var e={};var t="tutor-pro:";// loadScript function to load a script via script tag
r.l=function(n,a,i,o){if(e[n]){e[n].push(a);return}var s,u;if(i!==undefined){var c=document.getElementsByTagName("script");for(var l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){s=f;break}}}if(!s){u=true;s=document.createElement("script");s.timeout=120;if(r.nc){s.setAttribute("nonce",r.nc)}s.setAttribute("data-webpack",t+i);s.src=n}e[n]=[a];var d=function(t,r){s.onerror=s.onload=null;clearTimeout(h);var a=e[n];delete e[n];s.parentNode&&s.parentNode.removeChild(s);a&&a.forEach(function(e){return e(r)});if(t)return t(r)};var h=setTimeout(d.bind(null,undefined,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror);s.onload=d.bind(null,s.onload);u&&document.head.appendChild(s)}})();// webpack/runtime/make_namespace_object
(()=>{// define __esModule on exports
r.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();// webpack/runtime/nonce
(()=>{r.nc=undefined})();// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/auto_public_path
(()=>{var e;if(r.g.importScripts)e=r.g.location+"";var t=r.g.document;if(!e&&t){// Technically we could use `document.currentScript instanceof window.HTMLScriptElement`,
// but an attacker could try to inject `<script>HTMLScriptElement = HTMLImageElement</script>`
// and use `<img name="currentScript" src="https://attacker.controlled.server/"></img>`
if(t.currentScript&&t.currentScript.tagName.toUpperCase()==="SCRIPT")e=t.currentScript.src;if(!e){var n=t.getElementsByTagName("script");if(n.length){var a=n.length-1;while(a>-1&&(!e||!/^http(s?):/.test(e)))e=n[a--].src}}}// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration",
// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.',
if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/");r.p=e})();// webpack/runtime/jsonp_chunk_loading
(()=>{// object to store loaded and loading chunks
// undefined = chunk not loaded, null = chunk preloaded/prefetched
// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
var e={"410":0};r.f.j=function(t,n){// JSONP chunk loading for javascript
var a=r.o(e,t)?e[t]:undefined;if(a!==0){// 0 means "already installed".
// a Promise means "currently loading".
if(a){n.push(a[2])}else{if(true){// setup Promise in chunk cache
var i=new Promise((r,n)=>a=e[t]=[r,n]);n.push(a[2]=i);// start chunk loading
var o=r.p+r.u(t);// create error before stack unwound to get useful stacktrace later
var s=new Error;var u=function(n){if(r.o(e,t)){a=e[t];if(a!==0)e[t]=undefined;if(a){var i=n&&(n.type==="load"?"missing":n.type);var o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")";s.name="ChunkLoadError";s.type=i;s.request=o;a[1](s)}}};r.l(o,u,"chunk-"+t,t)}}}};// install a JSONP callback for chunk loading
var t=(t,n)=>{var[a,i,o]=n;// add "moreModules" to the modules object,
// then flag all "chunkIds" as loaded and fire callback
var s,u,c=0;if(a.some(t=>e[t]!==0)){for(s in i){if(r.o(i,s)){r.m[s]=i[s]}}if(o)var l=o(r)}if(t)t(n);for(;c<a.length;c++){u=a[c];if(r.o(e,u)&&e[u]){e[u][0]()}e[u]=0}};var n=self["webpackChunktutor_pro"]=self["webpackChunktutor_pro"]||[];n.forEach(t.bind(null,0));n.push=t.bind(null,n.push.bind(n))})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();var n={};// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(()=>{"use strict";// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var e=r(2025);// EXTERNAL MODULE: external "React"
var t=r(1594);var n=/*#__PURE__*/r.n(t);// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
var a=r(9576);// EXTERNAL MODULE: external "ReactDOM"
var i=r(5206);// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.30.1_react@18.3.1/node_modules/react-router/dist/index.js
var o=r(3021);// EXTERNAL MODULE: ./node_modules/.pnpm/@remix-run+router@1.23.0/node_modules/@remix-run/router/dist/router.js
var s=r(4969);// CONCATENATED MODULE: ./node_modules/.pnpm/react-router-dom@6.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function u(){u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return u.apply(this,arguments)}function c(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,i;for(i=0;i<n.length;i++){a=n[i];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}const l="get";const f="application/x-www-form-urlencoded";function d(e){return e!=null&&typeof e.tagName==="string"}function h(e){return d(e)&&e.tagName.toLowerCase()==="button"}function p(e){return d(e)&&e.tagName.toLowerCase()==="form"}function v(e){return d(e)&&e.tagName.toLowerCase()==="input"}function m(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function g(e,t){return e.button===0&&// Ignore everything but left clicks
(!t||t==="_self")&&// Let browser handle "target=_blank" etc.
!m(e)// Ignore clicks with modifier keys
}/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */function y(e){if(e===void 0){e=""}return new URLSearchParams(typeof e==="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(e=>[r,e]):[[r,n]])},[]))}function b(e,t){let r=y(e);if(t){// Use `defaultSearchParams.forEach(...)` here instead of iterating of
// `defaultSearchParams.keys()` to work-around a bug in Firefox related to
// web extensions. Relevant Bugzilla tickets:
// https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
// https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
t.forEach((e,n)=>{if(!r.has(n)){t.getAll(n).forEach(e=>{r.append(n,e)})}})}return r}// One-time check for submitter support
let _=null;function w(){if(_===null){try{new FormData(document.createElement("form"),// @ts-expect-error if FormData supports the submitter parameter, this will throw
0);_=false}catch(e){_=true}}return _}const x=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function E(e){if(e!=null&&!x.has(e)){false?0:void 0;return null}return e}function O(e,t){let r;let n;let a;let i;let o;if(p(e)){// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let o=e.getAttribute("action");n=o?stripBasename(o,t):null;r=e.getAttribute("method")||l;a=E(e.getAttribute("enctype"))||f;i=new FormData(e)}else if(h(e)||v(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null){throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')}// <button>/<input type="submit"> may override attributes of <form>
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let s=e.getAttribute("formaction")||o.getAttribute("action");n=s?stripBasename(s,t):null;r=e.getAttribute("formmethod")||o.getAttribute("method")||l;a=E(e.getAttribute("formenctype"))||E(o.getAttribute("enctype"))||f;// Build a FormData object populated from a form and submitter
i=new FormData(o,e);// If this browser doesn't support the `FormData(el, submitter)` format,
// then tack on the submitter value at the end.  This is a lightweight
// solution that is not 100% spec compliant.  For complete support in older
// browsers, consider using the `formdata-submitter-polyfill` package
if(!w()){let{name:t,type:r,value:n}=e;if(r==="image"){let e=t?t+".":"";i.append(e+"x","0");i.append(e+"y","0")}else if(t){i.append(t,n)}}}else if(d(e)){throw new Error("Cannot submit element that is not <form>, <button>, or "+'<input type="submit|image">')}else{r=l;n=null;a=f;o=e}// Send body for <Form encType="text/plain" so we encode it into text
if(i&&a==="text/plain"){o=i;i=undefined}return{action:n,method:r.toLowerCase(),encType:a,formData:i,body:o}}const S=/* unused pure expression or super */null&&["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A=/* unused pure expression or super */null&&["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],T=/* unused pure expression or super */null&&["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"];// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const R="6";try{window.__reactRouterVersion=R}catch(e){// no-op
}function k(e,t){return createRouter({basename:t==null?void 0:t.basename,future:u({},t==null?void 0:t.future,{v7_prependBasename:true}),history:createBrowserHistory({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||I(),routes:e,mapRouteProperties:UNSAFE_mapRouteProperties,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function C(e,t){return createRouter({basename:t==null?void 0:t.basename,future:u({},t==null?void 0:t.future,{v7_prependBasename:true}),history:createHashHistory({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||I(),routes:e,mapRouteProperties:UNSAFE_mapRouteProperties,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function I(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;if(t&&t.errors){t=u({},t,{errors:P(t.errors)})}return t}function P(e){if(!e)return null;let t=Object.entries(e);let r={};for(let[e,n]of t){// Hey you!  If you change this, please change the corresponding logic in
// serializeErrors in react-router-dom/server.tsx :)
if(n&&n.__type==="RouteErrorResponse"){r[e]=new UNSAFE_ErrorResponseImpl(n.status,n.statusText,n.data,n.internal===true)}else if(n&&n.__type==="Error"){// Attempt to reconstruct the right type of Error (i.e., ReferenceError)
if(n.__subType){let t=window[n.__subType];if(typeof t==="function"){try{// @ts-expect-error
let a=new t(n.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
a.stack="";r[e]=a}catch(e){// no-op - fall through and create a normal Error
}}}if(r[e]==null){let t=new Error(n.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
t.stack="";r[e]=t}}else{r[e]=n}}return r}const D=/*#__PURE__*//* unused pure expression or super */null&&React.createContext({isTransitioning:false});if(false){}const M=/*#__PURE__*/t.createContext(new Map);if(false){}//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/const L="startTransition";const F=t[L];const N="flushSync";const j=i[N];const U="useId";const H=t[U];function B(e){if(F){F(e)}else{e()}}function Y(e){if(j){j(e)}else{e()}}class z{constructor(){this.status="pending";this.promise=new Promise((e,t)=>{this.resolve=t=>{if(this.status==="pending"){this.status="resolved";e(t)}};this.reject=e=>{if(this.status==="pending"){this.status="rejected";t(e)}}})}}/**
 * Given a Remix Router instance, render the appropriate UI
 */function V(e){let{fallbackElement:t,router:r,future:n}=e;let[a,i]=React.useState(r.state);let[o,s]=React.useState();let[u,c]=React.useState({isTransitioning:false});let[l,f]=React.useState();let[d,h]=React.useState();let[p,v]=React.useState();let m=React.useRef(new Map);let{v7_startTransition:g}=n||{};let y=React.useCallback(e=>{if(g){B(e)}else{e()}},[g]);let b=React.useCallback((e,t)=>{let{deletedFetchers:n,flushSync:a,viewTransitionOpts:o}=t;e.fetchers.forEach((e,t)=>{if(e.data!==undefined){m.current.set(t,e.data)}});n.forEach(e=>m.current.delete(e));let u=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!=="function";// If this isn't a view transition or it's not available in this browser,
// just update and be done with it
if(!o||u){if(a){Y(()=>i(e))}else{y(()=>i(e))}return}// flushSync + startViewTransition
if(a){// Flush through the context to mark DOM elements as transition=ing
Y(()=>{// Cancel any pending transitions
if(d){l&&l.resolve();d.skipTransition()}c({isTransitioning:true,flushSync:true,currentLocation:o.currentLocation,nextLocation:o.nextLocation})});// Update the DOM
let t=r.window.document.startViewTransition(()=>{Y(()=>i(e))});// Clean up after the animation completes
t.finished.finally(()=>{Y(()=>{f(undefined);h(undefined);s(undefined);c({isTransitioning:false})})});Y(()=>h(t));return}// startTransition + startViewTransition
if(d){// Interrupting an in-progress transition, cancel and let everything flush
// out, and then kick off a new transition from the interruption state
l&&l.resolve();d.skipTransition();v({state:e,currentLocation:o.currentLocation,nextLocation:o.nextLocation})}else{// Completed navigation update with opted-in view transitions, let 'er rip
s(e);c({isTransitioning:true,flushSync:false,currentLocation:o.currentLocation,nextLocation:o.nextLocation})}},[r.window,d,l,m,y]);// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
React.useLayoutEffect(()=>r.subscribe(b),[r,b]);// When we start a view transition, create a Deferred we can use for the
// eventual "completed" render
React.useEffect(()=>{if(u.isTransitioning&&!u.flushSync){f(new z)}},[u]);// Once the deferred is created, kick off startViewTransition() to update the
// DOM and then wait on the Deferred to resolve (indicating the DOM update has
// happened)
React.useEffect(()=>{if(l&&o&&r.window){let e=o;let t=l.promise;let n=r.window.document.startViewTransition(async()=>{y(()=>i(e));await t});n.finished.finally(()=>{f(undefined);h(undefined);s(undefined);c({isTransitioning:false})});h(n)}},[y,o,l,r.window]);// When the new location finally renders and is committed to the DOM, this
// effect will run to resolve the transition
React.useEffect(()=>{if(l&&o&&a.location.key===o.location.key){l.resolve()}},[l,d,a.location,o]);// If we get interrupted with a new navigation during a transition, we skip
// the active transition, let it cleanup, then kick it off again here
React.useEffect(()=>{if(!u.isTransitioning&&p){s(p.state);c({isTransitioning:true,flushSync:false,currentLocation:p.currentLocation,nextLocation:p.nextLocation});v(undefined)}},[u.isTransitioning,p]);React.useEffect(()=>{false?0:void 0;// Only log this once on initial mount
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);let _=React.useMemo(()=>{return{createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:n==null?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:true,state:t,preventScrollReset:n==null?void 0:n.preventScrollReset})}},[r]);let w=r.basename||"/";let x=React.useMemo(()=>({router:r,navigator:_,static:false,basename:w}),[r,_,w]);let E=React.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);React.useEffect(()=>UNSAFE_logV6DeprecationWarnings(n,r.future),[n,r.future]);// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag
return /*#__PURE__*/React.createElement(React.Fragment,null,/*#__PURE__*/React.createElement(UNSAFE_DataRouterContext.Provider,{value:x},/*#__PURE__*/React.createElement(UNSAFE_DataRouterStateContext.Provider,{value:a},/*#__PURE__*/React.createElement(M.Provider,{value:m.current},/*#__PURE__*/React.createElement(D.Provider,{value:u},/*#__PURE__*/React.createElement(Router,{basename:w,location:a.location,navigationType:a.historyAction,navigator:_,future:E},a.initialized||r.future.v7_partialHydration?/*#__PURE__*/React.createElement(q,{routes:r.routes,future:r.future,state:a}):t))))),null)}// Memoize to avoid re-renders when updating `ViewTransitionContext`
const q=/*#__PURE__*//* unused pure expression or super */null&&React.memo(W);function W(e){let{routes:t,future:r,state:n}=e;return UNSAFE_useRoutesImpl(t,undefined,n,r)}/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */function $(e){let{basename:t,children:r,future:n,window:a}=e;let i=React.useRef();if(i.current==null){i.current=createBrowserHistory({window:a,v5Compat:true})}let o=i.current;let[s,u]=React.useState({action:o.action,location:o.location});let{v7_startTransition:c}=n||{};let l=React.useCallback(e=>{c&&F?F(()=>u(e)):u(e)},[u,c]);React.useLayoutEffect(()=>o.listen(l),[o,l]);React.useEffect(()=>UNSAFE_logV6DeprecationWarnings(n),[n]);return /*#__PURE__*/React.createElement(Router,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */function G(e){let{basename:r,children:n,future:a,window:i}=e;let u=t.useRef();if(u.current==null){u.current=(0,s/* .createHashHistory */.TM)({window:i,v5Compat:true})}let c=u.current;let[l,f]=t.useState({action:c.action,location:c.location});let{v7_startTransition:d}=a||{};let h=t.useCallback(e=>{d&&F?F(()=>f(e)):f(e)},[f,d]);t.useLayoutEffect(()=>c.listen(h),[c,h]);t.useEffect(()=>(0,o/* .UNSAFE_logV6DeprecationWarnings */.V8)(a),[a]);return /*#__PURE__*/t.createElement(o/* .Router */.Ix,{basename:r,children:n,location:l.location,navigationType:l.action,navigator:c,future:a})}/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */function K(e){let{basename:t,children:r,future:n,history:a}=e;let[i,o]=React.useState({action:a.action,location:a.location});let{v7_startTransition:s}=n||{};let u=React.useCallback(e=>{s&&F?F(()=>o(e)):o(e)},[o,s]);React.useLayoutEffect(()=>a.listen(u),[a,u]);React.useEffect(()=>UNSAFE_logV6DeprecationWarnings(n),[n]);return /*#__PURE__*/React.createElement(Router,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:a,future:n})}if(false){}const Q=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";const X=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;/**
 * The public API for rendering a history-aware `<a>`.
 */const J=/*#__PURE__*//* unused pure expression or super */null&&React.forwardRef(function e(e,t){let{onClick:r,relative:n,reloadDocument:a,replace:i,state:o,target:s,to:l,preventScrollReset:f,viewTransition:d}=e,h=c(e,S);let{basename:p}=React.useContext(UNSAFE_NavigationContext);// Rendered into <a href> for absolute URLs
let v;let m=false;if(typeof l==="string"&&X.test(l)){// Render the absolute href server- and client-side
v=l;// Only check for external origins client-side
if(Q){try{let e=new URL(window.location.href);let t=l.startsWith("//")?new URL(e.protocol+l):new URL(l);let r=stripBasename(t.pathname,p);if(t.origin===e.origin&&r!=null){// Strip the protocol/origin/basename for same-origin absolute URLs
l=r+t.search+t.hash}else{m=true}}catch(e){// We can't do external URL detection without a valid URL
false?0:void 0}}}// Rendered into <a href> for relative URLs
let g=useHref(l,{relative:n});let y=es(l,{replace:i,state:o,target:s,preventScrollReset:f,relative:n,viewTransition:d});function b(e){if(r)r(e);if(!e.defaultPrevented){y(e)}}return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/anchor-has-content
React.createElement("a",u({},h,{href:v||g,onClick:m||a?r:b,ref:t,target:s})))});if(false){}/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */const Z=/*#__PURE__*//* unused pure expression or super */null&&React.forwardRef(function e(e,t){let{"aria-current":r="page",caseSensitive:n=false,className:a="",end:i=false,style:o,to:s,viewTransition:l,children:f}=e,d=c(e,A);let h=useResolvedPath(s,{relative:d.relative});let p=useLocation();let v=React.useContext(UNSAFE_DataRouterStateContext);let{navigator:m,basename:g}=React.useContext(UNSAFE_NavigationContext);let y=v!=null&&// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
ex(h)&&l===true;let b=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname;let _=p.pathname;let w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;if(!n){_=_.toLowerCase();w=w?w.toLowerCase():null;b=b.toLowerCase()}if(w&&g){w=stripBasename(w,g)||w}// If the `to` has a trailing slash, look at that exact spot.  Otherwise,
// we're looking for a slash _after_ what's in `to`.  For example:
//
// <NavLink to="/users"> and <NavLink to="/users/">
// both want to look for a / at index 6 to match URL `/users/matt`
const x=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let E=_===b||!i&&_.startsWith(b)&&_.charAt(x)==="/";let O=w!=null&&(w===b||!i&&w.startsWith(b)&&w.charAt(b.length)==="/");let S={isActive:E,isPending:O,isTransitioning:y};let T=E?r:undefined;let R;if(typeof a==="function"){R=a(S)}else{// If the className prop is not a function, we use a default `active`
// class for <NavLink />s that are active. In v5 `active` was the default
// value for `activeClassName`, but we are removing that API and can still
// use the old default behavior for a cleaner upgrade path and keep the
// simple styling rules working as they currently do.
R=[a,E?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ")}let k=typeof o==="function"?o(S):o;return /*#__PURE__*/React.createElement(J,u({},d,{"aria-current":T,className:R,ref:t,style:k,to:s,viewTransition:l}),typeof f==="function"?f(S):f)});if(false){}/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */const ee=/*#__PURE__*//* unused pure expression or super */null&&React.forwardRef((e,t)=>{let{fetcherKey:r,navigate:n,reloadDocument:a,replace:i,state:o,method:s=l,action:f,onSubmit:d,relative:h,preventScrollReset:p,viewTransition:v}=e,m=c(e,T);let g=ed();let y=eh(f,{relative:h});let b=s.toLowerCase()==="get"?"get":"post";let _=e=>{d&&d(e);if(e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter;let a=(t==null?void 0:t.getAttribute("formmethod"))||s;g(t||e.currentTarget,{fetcherKey:r,method:a,navigate:n,replace:i,state:o,relative:h,preventScrollReset:p,viewTransition:v})};return /*#__PURE__*/React.createElement("form",u({ref:t,method:b,action:y,onSubmit:a?d:_},m))});if(false){}/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */function et(e){let{getKey:t,storageKey:r}=e;ey({getKey:t,storageKey:r});return null}if(false){}//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var er;(function(e){e["UseScrollRestoration"]="useScrollRestoration";e["UseSubmit"]="useSubmit";e["UseSubmitFetcher"]="useSubmitFetcher";e["UseFetcher"]="useFetcher";e["useViewTransitionState"]="useViewTransitionState"})(er||(er={}));var en;(function(e){e["UseFetcher"]="useFetcher";e["UseFetchers"]="useFetchers";e["UseScrollRestoration"]="useScrollRestoration"})(en||(en={}));// Internal hooks
function ea(e){return e+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}function ei(e){let t=React.useContext(UNSAFE_DataRouterContext);!t?false?0:UNSAFE_invariant(false):void 0;return t}function eo(e){let t=React.useContext(UNSAFE_DataRouterStateContext);!t?false?0:UNSAFE_invariant(false):void 0;return t}// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */function es(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:s}=t===void 0?{}:t;let u=useNavigate();let c=useLocation();let l=useResolvedPath(e,{relative:o});return React.useCallback(t=>{if(g(t,r)){t.preventDefault();// If the URL hasn't changed, a regular <a> will do a replace instead of
// a push, so do the same here unless the replace prop is explicitly set
let r=n!==undefined?n:createPath(c)===createPath(l);u(e,{replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:s})}},[c,u,l,n,a,r,e,i,o,s])}/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */function eu(e){false?0:void 0;let t=React.useRef(y(e));let r=React.useRef(false);let n=useLocation();let a=React.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    b(n.search,r.current?null:t.current),[n.search]);let i=useNavigate();let o=React.useCallback((e,t)=>{const n=y(typeof e==="function"?e(a):e);r.current=true;i("?"+n,t)},[i,a]);return[a,o]}function ec(){if(typeof document==="undefined"){throw new Error("You are calling submit during the server render. "+"Try calling submit within a `useEffect` or callback instead.")}}let el=0;let ef=()=>"__"+String(++el)+"__";/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */function ed(){let{router:e}=ei(er.UseSubmit);let{basename:t}=React.useContext(UNSAFE_NavigationContext);let r=UNSAFE_useRouteId();return React.useCallback(function(n,a){if(a===void 0){a={}}ec();let{action:i,method:o,encType:s,formData:u,body:c}=O(n,t);if(a.navigate===false){let t=a.fetcherKey||ef();e.fetch(t,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||o,formEncType:a.encType||s,flushSync:a.flushSync})}else{e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||o,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})}},[e,t,r])}// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function eh(e,t){let{relative:r}=t===void 0?{}:t;let{basename:n}=React.useContext(UNSAFE_NavigationContext);let a=React.useContext(UNSAFE_RouteContext);!a?false?0:UNSAFE_invariant(false):void 0;let[i]=a.matches.slice(-1);// Shallow clone path so we can modify it below, otherwise we modify the
// object referenced by useMemo inside useResolvedPath
let o=u({},useResolvedPath(e?e:".",{relative:r}));// If no action was specified, browsers will persist current search params
// when determining the path, so match that behavior
// https://github.com/remix-run/remix/issues/927
let s=useLocation();if(e==null){// Safe to write to this directly here since if action was undefined, we
// would have called useResolvedPath(".") which will never include a search
o.search=s.search;// When grabbing search params from the URL, remove any included ?index param
// since it might not apply to our contextual route.  We add it back based
// on match.route.index below
let e=new URLSearchParams(o.search);let t=e.getAll("index");let r=t.some(e=>e==="");if(r){e.delete("index");t.filter(e=>e).forEach(t=>e.append("index",t));let r=e.toString();o.search=r?"?"+r:""}}if((!e||e===".")&&i.route.index){o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"}// If we're operating within a basename, prepend it to the pathname prior
// to creating the form action.  If this is a root navigation, then just use
// the raw basename which allows the basename to have full control over the
// presence of a trailing slash on root actions
if(n!=="/"){o.pathname=o.pathname==="/"?n:joinPaths([n,o.pathname])}return createPath(o)}// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */function ep(e){var t;let{key:r}=e===void 0?{}:e;let{router:n}=ei(er.UseFetcher);let a=eo(en.UseFetcher);let i=React.useContext(M);let o=React.useContext(UNSAFE_RouteContext);let s=(t=o.matches[o.matches.length-1])==null?void 0:t.route.id;!i?false?0:UNSAFE_invariant(false):void 0;!o?false?0:UNSAFE_invariant(false):void 0;!(s!=null)?false?0:UNSAFE_invariant(false):void 0;// Fetcher key handling
// OK to call conditionally to feature detect `useId`
// eslint-disable-next-line react-hooks/rules-of-hooks
let c=H?H():"";let[l,f]=React.useState(r||c);if(r&&r!==l){f(r)}else if(!l){// We will only fall through here when `useId` is not available
f(ef())}// Registration/cleanup
React.useEffect(()=>{n.getFetcher(l);return()=>{// Tell the router we've unmounted - if v7_fetcherPersist is enabled this
// will not delete immediately but instead queue up a delete after the
// fetcher returns to an `idle` state
n.deleteFetcher(l)}},[n,l]);// Fetcher additions
let d=React.useCallback((e,t)=>{!s?false?0:UNSAFE_invariant(false):void 0;n.fetch(l,s,e,t)},[l,s,n]);let h=ed();let p=React.useCallback((e,t)=>{h(e,u({},t,{navigate:false,fetcherKey:l}))},[l,h]);let v=React.useMemo(()=>{let e=/*#__PURE__*/React.forwardRef((e,t)=>{return /*#__PURE__*/React.createElement(ee,u({},e,{navigate:false,fetcherKey:l,ref:t}))});if(false){}return e},[l]);// Exposed FetcherWithComponents
let m=a.fetchers.get(l)||IDLE_FETCHER;let g=i.get(l);let y=React.useMemo(()=>u({Form:v,submit:p,load:d},m,{data:g}),[v,p,d,m,g]);return y}/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */function ev(){let e=eo(en.UseFetchers);return Array.from(e.fetchers.entries()).map(e=>{let[t,r]=e;return u({},r,{key:t})})}const em="react-router-scroll-positions";let eg=/* unused pure expression or super */null&&{};/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */function ey(e){let{getKey:t,storageKey:r}=e===void 0?{}:e;let{router:n}=ei(er.UseScrollRestoration);let{restoreScrollPosition:a,preventScrollReset:i}=eo(en.UseScrollRestoration);let{basename:o}=React.useContext(UNSAFE_NavigationContext);let s=useLocation();let c=useMatches();let l=useNavigation();// Trigger manual scroll restoration while we're active
React.useEffect(()=>{window.history.scrollRestoration="manual";return()=>{window.history.scrollRestoration="auto"}},[]);// Save positions on pagehide
e_(React.useCallback(()=>{if(l.state==="idle"){let e=(t?t(s,c):null)||s.key;eg[e]=window.scrollY}try{sessionStorage.setItem(r||em,JSON.stringify(eg))}catch(e){false?0:void 0}window.history.scrollRestoration="auto"},[r,t,l.state,s,c]));// Read in any saved scroll locations
if(typeof document!=="undefined"){// eslint-disable-next-line react-hooks/rules-of-hooks
React.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(r||em);if(e){eg=JSON.parse(e)}}catch(e){// no-op, use default empty object
}},[r]);// Enable scroll restoration in the router
// eslint-disable-next-line react-hooks/rules-of-hooks
React.useLayoutEffect(()=>{let e=t&&o!=="/"?(e,r)=>t(u({},e,{pathname:stripBasename(e.pathname,o)||e.pathname}),r):t;let r=n==null?void 0:n.enableScrollRestoration(eg,()=>window.scrollY,e);return()=>r&&r()},[n,o,t]);// Restore scrolling when state.restoreScrollPosition changes
// eslint-disable-next-line react-hooks/rules-of-hooks
React.useLayoutEffect(()=>{// Explicit false means don't do anything (used for submissions)
if(a===false){return}// been here before, scroll to it
if(typeof a==="number"){window.scrollTo(0,a);return}// try to scroll to the hash
if(s.hash){let e=document.getElementById(decodeURIComponent(s.hash.slice(1)));if(e){e.scrollIntoView();return}}// Don't reset if this navigation opted out
if(i===true){return}// otherwise go to the top on new locations
window.scrollTo(0,0)},[s,a,i])}}/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */function eb(e,t){let{capture:r}=t||{};React.useEffect(()=>{let t=r!=null?{capture:r}:undefined;window.addEventListener("beforeunload",e,t);return()=>{window.removeEventListener("beforeunload",e,t)}},[e,r])}/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */function e_(e,t){let{capture:r}=t||{};React.useEffect(()=>{let t=r!=null?{capture:r}:undefined;window.addEventListener("pagehide",e,t);return()=>{window.removeEventListener("pagehide",e,t)}},[e,r])}/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */function ew(e){let{when:t,message:r}=e;let n=useBlocker(t);React.useEffect(()=>{if(n.state==="blocked"){let e=window.confirm(r);if(e){// This timeout is needed to avoid a weird "race" on POP navigations
// between the `window.history` revert navigation and the result of
// `window.confirm`
setTimeout(n.proceed,0)}else{n.reset()}}},[n,r]);React.useEffect(()=>{if(n.state==="blocked"&&!t){n.reset()}},[n,t])}/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */function ex(e,t){if(t===void 0){t={}}let r=React.useContext(D);!(r!=null)?false?0:UNSAFE_invariant(false):void 0;let{basename:n}=ei(er.useViewTransitionState);let a=useResolvedPath(e,{relative:t.relative});if(!r.isTransitioning){return false}let i=stripBasename(r.currentLocation.pathname,n)||r.currentLocation.pathname;let o=stripBasename(r.nextLocation.pathname,n)||r.nextLocation.pathname;// Transition is active if we're going to or coming from the indicated
// destination.  This ensures that other PUSH navigations that reverse
// an indicated transition apply.  I.e., on the list view you have:
//
//   <NavLink to="/details/1" viewTransition>
//
// If you click the breadcrumb back to the list view:
//
//   <NavLink to="/list" viewTransition>
//
// We should apply the transition because it's indicated as active going
// from /list -> /details/1 and therefore should be active on the reverse
// (even though this isn't strictly a POP reverse)
return matchPath(a.pathname,o)!=null||matchPath(a.pathname,i)!=null}//#endregion
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/ErrorBoundary.tsx
var eE=r(2506);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var eO=r(5757);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/utils.js
var eS=r(9005);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/query.js
var eA=r(860);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var eT=r(3276);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/subscribable.js
var eR=r(6887);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/queryCache.js
// src/queryCache.ts
var ek=class extends eR/* .Subscribable */.Q{constructor(e={}){super();this.config=e;this.#B=/* @__PURE__ */new Map}#B;build(e,t,r){const n=t.queryKey;const a=t.queryHash??(0,eS/* .hashQueryKeyByOptions */.F$)(n,t);let i=this.get(a);if(!i){i=new eA/* .Query */.X({cache:this,queryKey:n,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)});this.add(i)}return i}add(e){if(!this.#B.has(e.queryHash)){this.#B.set(e.queryHash,e);this.notify({type:"added",query:e})}}remove(e){const t=this.#B.get(e.queryHash);if(t){e.destroy();if(t===e){this.#B.delete(e.queryHash)}this.notify({type:"removed",query:e})}}clear(){eT/* .notifyManager.batch */.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#B.get(e)}getAll(){return[...this.#B.values()]}find(e){const t={exact:true,...e};return this.getAll().find(e=>(0,eS/* .matchQuery */.MK)(t,e))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,eS/* .matchQuery */.MK)(e,t)):t}notify(e){eT/* .notifyManager.batch */.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){eT/* .notifyManager.batch */.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){eT/* .notifyManager.batch */.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}};//# sourceMappingURL=queryCache.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/mutation.js
var eC=r(9609);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/mutationCache.js
// src/mutationCache.ts
var eI=class extends eR/* .Subscribable */.Q{constructor(e={}){super();this.config=e;this.#Y=/* @__PURE__ */new Set;this.#z=/* @__PURE__ */new Map;this.#V=0}#Y;#z;#V;build(e,t,r){const n=new eC/* .Mutation */.s({mutationCache:this,mutationId:++this.#V,options:e.defaultMutationOptions(t),state:r});this.add(n);return n}add(e){this.#Y.add(e);const t=eP(e);if(typeof t==="string"){const r=this.#z.get(t);if(r){r.push(e)}else{this.#z.set(t,[e])}}this.notify({type:"added",mutation:e})}remove(e){if(this.#Y.delete(e)){const t=eP(e);if(typeof t==="string"){const r=this.#z.get(t);if(r){if(r.length>1){const t=r.indexOf(e);if(t!==-1){r.splice(t,1)}}else if(r[0]===e){this.#z.delete(t)}}}}this.notify({type:"removed",mutation:e})}canRun(e){const t=eP(e);if(typeof t==="string"){const r=this.#z.get(t);const n=r?.find(e=>e.state.status==="pending");return!n||n===e}else{return true}}runNext(e){const t=eP(e);if(typeof t==="string"){const r=this.#z.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}else{return Promise.resolve()}}clear(){eT/* .notifyManager.batch */.j.batch(()=>{this.#Y.forEach(e=>{this.notify({type:"removed",mutation:e})});this.#Y.clear();this.#z.clear()})}getAll(){return Array.from(this.#Y)}find(e){const t={exact:true,...e};return this.getAll().find(e=>(0,eS/* .matchMutation */.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,eS/* .matchMutation */.nJ)(e,t))}notify(e){eT/* .notifyManager.batch */.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(e=>e.state.isPaused);return eT/* .notifyManager.batch */.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(eS/* .noop */.lQ))))}};function eP(e){return e.options.scope?.id}//# sourceMappingURL=mutationCache.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/focusManager.js
var eD=r(5465);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/onlineManager.js
var eM=r(4030);// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
// src/infiniteQueryBehavior.ts
function eL(e){return{onFetch:(t,r)=>{const n=t.options;const a=t.fetchOptions?.meta?.fetchMore?.direction;const i=t.state.data?.pages||[];const o=t.state.data?.pageParams||[];let s={pages:[],pageParams:[]};let u=0;const c=async()=>{let r=false;const c=e=>{Object.defineProperty(e,"signal",{enumerable:true,get:()=>{if(t.signal.aborted){r=true}else{t.signal.addEventListener("abort",()=>{r=true})}return t.signal}})};const l=(0,eS/* .ensureQueryFn */.ZM)(t.options,t.fetchOptions);const f=async(e,n,a)=>{if(r){return Promise.reject()}if(n==null&&e.pages.length){return Promise.resolve(e)}const i={queryKey:t.queryKey,pageParam:n,direction:a?"backward":"forward",meta:t.options.meta};c(i);const o=await l(i);const{maxPages:s}=t.options;const u=a?eS/* .addToStart */.ZZ:eS/* .addToEnd */.y9;return{pages:u(e.pages,o,s),pageParams:u(e.pageParams,n,s)}};if(a&&i.length){const e=a==="backward";const t=e?eN:eF;const r={pages:i,pageParams:o};const u=t(n,r);s=await f(r,u,e)}else{const t=e??i.length;do{const e=u===0?o[0]??n.initialPageParam:eF(n,s);if(u>0&&e==null){break}s=await f(s,e);u++}while(u<t)}return s};if(t.options.persister){t.fetchFn=()=>{return t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r)}}else{t.fetchFn=c}}}}function eF(e,{pages:t,pageParams:r}){const n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}function eN(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}function ej(e,t){if(!t)return false;return eF(e,t)!=null}function eU(e,t){if(!t||!e.getPreviousPageParam)return false;return eN(e,t)!=null}//# sourceMappingURL=infiniteQueryBehavior.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/queryClient.js
// src/queryClient.ts
var eH=class{#q;#a;#f;#W;#$;#G;#K;#Q;constructor(e={}){this.#q=e.queryCache||new ek;this.#a=e.mutationCache||new eI;this.#f=e.defaultOptions||{};this.#W=/* @__PURE__ */new Map;this.#$=/* @__PURE__ */new Map;this.#G=0}mount(){this.#G++;if(this.#G!==1)return;this.#K=eD/* .focusManager.subscribe */.m.subscribe(async e=>{if(e){await this.resumePausedMutations();this.#q.onFocus()}});this.#Q=eM/* .onlineManager.subscribe */.t.subscribe(async e=>{if(e){await this.resumePausedMutations();this.#q.onOnline()}})}unmount(){this.#G--;if(this.#G!==0)return;this.#K?.();this.#K=void 0;this.#Q?.();this.#Q=void 0}isFetching(e){return this.#q.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#q.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e);const r=this.#q.build(this,t);const n=r.state.data;if(n===void 0){return this.fetchQuery(e)}if(e.revalidateIfStale&&r.isStaleByTime((0,eS/* .resolveStaleTime */.d2)(t.staleTime,r))){void this.prefetchQuery(t)}return Promise.resolve(n)}getQueriesData(e){return this.#q.findAll(e).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(e,t,r){const n=this.defaultQueryOptions({queryKey:e});const a=this.#q.get(n.queryHash);const i=a?.state.data;const o=(0,eS/* .functionalUpdate */.Zw)(t,i);if(o===void 0){return void 0}return this.#q.build(this,n).setData(o,{...r,manual:true})}setQueriesData(e,t,r){return eT/* .notifyManager.batch */.j.batch(()=>this.#q.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#q.get(t.queryHash)?.state}removeQueries(e){const t=this.#q;eT/* .notifyManager.batch */.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){const r=this.#q;const n={type:"active",...e};return eT/* .notifyManager.batch */.j.batch(()=>{r.findAll(e).forEach(e=>{e.reset()});return this.refetchQueries(n,t)})}cancelQueries(e,t={}){const r={revert:true,...t};const n=eT/* .notifyManager.batch */.j.batch(()=>this.#q.findAll(e).map(e=>e.cancel(r)));return Promise.all(n).then(eS/* .noop */.lQ).catch(eS/* .noop */.lQ)}invalidateQueries(e,t={}){return eT/* .notifyManager.batch */.j.batch(()=>{this.#q.findAll(e).forEach(e=>{e.invalidate()});if(e?.refetchType==="none"){return Promise.resolve()}const r={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e,t={}){const r={...t,cancelRefetch:t.cancelRefetch??true};const n=eT/* .notifyManager.batch */.j.batch(()=>this.#q.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);if(!r.throwOnError){t=t.catch(eS/* .noop */.lQ)}return e.state.fetchStatus==="paused"?Promise.resolve():t}));return Promise.all(n).then(eS/* .noop */.lQ)}fetchQuery(e){const t=this.defaultQueryOptions(e);if(t.retry===void 0){t.retry=false}const r=this.#q.build(this,t);return r.isStaleByTime((0,eS/* .resolveStaleTime */.d2)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(eS/* .noop */.lQ).catch(eS/* .noop */.lQ)}fetchInfiniteQuery(e){e.behavior=eL(e.pages);return this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(eS/* .noop */.lQ).catch(eS/* .noop */.lQ)}ensureInfiniteQueryData(e){e.behavior=eL(e.pages);return this.ensureQueryData(e)}resumePausedMutations(){if(eM/* .onlineManager.isOnline */.t.isOnline()){return this.#a.resumePausedMutations()}return Promise.resolve()}getQueryCache(){return this.#q}getMutationCache(){return this.#a}getDefaultOptions(){return this.#f}setDefaultOptions(e){this.#f=e}setQueryDefaults(e,t){this.#W.set((0,eS/* .hashKey */.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#W.values()];const r={};t.forEach(t=>{if((0,eS/* .partialMatchKey */.Cp)(e,t.queryKey)){Object.assign(r,t.defaultOptions)}});return r}setMutationDefaults(e,t){this.#$.set((0,eS/* .hashKey */.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#$.values()];let r={};t.forEach(t=>{if((0,eS/* .partialMatchKey */.Cp)(e,t.mutationKey)){r={...r,...t.defaultOptions}}});return r}defaultQueryOptions(e){if(e._defaulted){return e}const t={...this.#f.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:true};if(!t.queryHash){t.queryHash=(0,eS/* .hashQueryKeyByOptions */.F$)(t.queryKey,t)}if(t.refetchOnReconnect===void 0){t.refetchOnReconnect=t.networkMode!=="always"}if(t.throwOnError===void 0){t.throwOnError=!!t.suspense}if(!t.networkMode&&t.persister){t.networkMode="offlineFirst"}if(t.queryFn===eS/* .skipToken */.hT){t.enabled=false}return t}defaultMutationOptions(e){if(e?._defaulted){return e}return{...this.#f.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:true}}clear(){this.#q.clear();this.#a.clear()}};//# sourceMappingURL=queryClient.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/QueryClientProvider.js
var eB=r(7933);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Toast.tsx
var eY=r(3833);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/Modal.tsx
var ez=r(2580);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var eV=false;/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/function eq(e){if(e.sheet){return e.sheet}// this weirdness brought to you by firefox
/* istanbul ignore next */for(var t=0;t<document.styleSheets.length;t++){if(document.styleSheets[t].ownerNode===e){return document.styleSheets[t]}}// this function should always return with a value
// TS can't understand it though so we make it stop complaining here
return undefined}function eW(e){var t=document.createElement("style");t.setAttribute("data-emotion",e.key);if(e.nonce!==undefined){t.setAttribute("nonce",e.nonce)}t.appendChild(document.createTextNode(""));t.setAttribute("data-s","");return t}var e$=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function e(e){var t=this;this._insertTag=function(e){var r;if(t.tags.length===0){if(t.insertionPoint){r=t.insertionPoint.nextSibling}else if(t.prepend){r=t.container.firstChild}else{r=t.before}}else{r=t.tags[t.tags.length-1].nextSibling}t.container.insertBefore(e,r);t.tags.push(e)};this.isSpeedy=e.speedy===undefined?!eV:e.speedy;this.tags=[];this.ctr=0;this.nonce=e.nonce;// key is the value of the data-emotion attribute, it's used to identify different sheets
this.key=e.key;this.container=e.container;this.prepend=e.prepend;this.insertionPoint=e.insertionPoint;this.before=null}var t=e.prototype;t.hydrate=function e(e){e.forEach(this._insertTag)};t.insert=function e(e){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65e3:1)===0){this._insertTag(eW(this))}var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=eq(t);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
r.insertRule(e,r.cssRules.length)}catch(e){}}else{t.appendChild(document.createTextNode(e))}this.ctr++};t.flush=function e(){this.tags.forEach(function(e){var t;return(t=e.parentNode)==null?void 0:t.removeChild(e)});this.tags=[];this.ctr=0};return e}();// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */var eG=Math.abs;/**
 * @param {number}
 * @return {string}
 */var eK=String.fromCharCode;/**
 * @param {object}
 * @return {object}
 */var eQ=Object.assign;/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */function eX(e,t){return e2(e,0)^45?(((t<<2^e2(e,0))<<2^e2(e,1))<<2^e2(e,2))<<2^e2(e,3):0}/**
 * @param {string} value
 * @return {string}
 */function eJ(e){return e.trim()}/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */function eZ(e,t){return(e=t.exec(e))?e[0]:e}/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */function e0(e,t,r){return e.replace(t,r)}/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */function e1(e,t){return e.indexOf(t)}/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */function e2(e,t){return e.charCodeAt(t)|0}/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function e6(e,t,r){return e.slice(t,r)}/**
 * @param {string} value
 * @return {number}
 */function e5(e){return e.length}/**
 * @param {any[]} value
 * @return {number}
 */function e4(e){return e.length}/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */function e3(e,t){return t.push(e),e}/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */function e7(e,t){return e.map(t).join("")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var e8=1;var e9=1;var te=0;var tt=0;var tr=0;var tn="";/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */function ta(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:e8,column:e9,length:o,return:""}}/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */function ti(e,t){return eQ(ta("",null,null,"",null,null,0),e,{length:-e.length},t)}/**
 * @return {number}
 */function to(){return tr}/**
 * @return {number}
 */function ts(){tr=tt>0?e2(tn,--tt):0;if(e9--,tr===10)e9=1,e8--;return tr}/**
 * @return {number}
 */function tu(){tr=tt<te?e2(tn,tt++):0;if(e9++,tr===10)e9=1,e8++;return tr}/**
 * @return {number}
 */function tc(){return e2(tn,tt)}/**
 * @return {number}
 */function tl(){return tt}/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function tf(e,t){return e6(tn,e,t)}/**
 * @param {number} type
 * @return {number}
 */function td(e){switch(e){// \0 \t \n \r \s whitespace token
case 0:case 9:case 10:case 13:case 32:return 5;// ! + , / > @ ~ isolate token
case 33:case 43:case 44:case 47:case 62:case 64:case 126:// ; { } breakpoint token
case 59:case 123:case 125:return 4;// : accompanied token
case 58:return 3;// " ' ( [ opening delimit token
case 34:case 39:case 40:case 91:return 2;// ) ] closing delimit token
case 41:case 93:return 1}return 0}/**
 * @param {string} value
 * @return {any[]}
 */function th(e){return e8=e9=1,te=e5(tn=e),tt=0,[]}/**
 * @param {any} value
 * @return {any}
 */function tp(e){return tn="",e}/**
 * @param {number} type
 * @return {string}
 */function tv(e){return eJ(tf(tt-1,t_(e===91?e+2:e===40?e+1:e)))}/**
 * @param {string} value
 * @return {string[]}
 */function tm(e){return tp(ty(th(e)))}/**
 * @param {number} type
 * @return {string}
 */function tg(e){while(tr=tc())if(tr<33)tu();else break;return td(e)>2||td(tr)>3?"":" "}/**
 * @param {string[]} children
 * @return {string[]}
 */function ty(e){while(tu())switch(td(tr)){case 0:append(tx(tt-1),e);break;case 2:append(tv(tr),e);break;default:append(from(tr),e)}return e}/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */function tb(e,t){while(--t&&tu())// not 0-9 A-F a-f
if(tr<48||tr>102||tr>57&&tr<65||tr>70&&tr<97)break;return tf(e,tl()+(t<6&&tc()==32&&tu()==32))}/**
 * @param {number} type
 * @return {number}
 */function t_(e){while(tu())switch(tr){// ] ) " '
case e:return tt;// " '
case 34:case 39:if(e!==34&&e!==39)t_(tr);break;// (
case 40:if(e===41)t_(e);break;// \
case 92:tu();break}return tt}/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */function tw(e,t){while(tu())// //
if(e+tr===47+10)break;else if(e+tr===42+42&&tc()===47)break;return"/*"+tf(t,tt-1)+"*"+eK(e===47?e:tu())}/**
 * @param {number} index
 * @return {string}
 */function tx(e){while(!td(tc()))tu();return tf(e,tt)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var tE="-ms-";var tO="-moz-";var tS="-webkit-";var tA="comm";var tT="rule";var tR="decl";var tk="@page";var tC="@media";var tI="@import";var tP="@charset";var tD="@viewport";var tM="@supports";var tL="@document";var tF="@namespace";var tN="@keyframes";var tj="@font-face";var tU="@counter-style";var tH="@font-feature-values";var tB="@layer";// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function tY(e,t){var r="";var n=e4(e);for(var a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function tz(e,t,r,n){switch(e.type){case tB:if(e.children.length)break;case tI:case tR:return e.return=e.return||e.value;case tA:return"";case tN:return e.return=e.value+"{"+tY(e.children,n)+"}";case tT:e.value=e.props.join(",")}return e5(r=tY(e.children,n))?e.return=e.value+"{"+r+"}":""};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
/**
 * @param {function[]} collection
 * @return {function}
 */function tV(e){var t=e4(e);return function(r,n,a,i){var o="";for(var s=0;s<t;s++)o+=e[s](r,n,a,i)||"";return o}}/**
 * @param {function} callback
 * @return {function}
 */function tq(e){return function(t){if(!t.root){if(t=t.return)e(t)}}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */function tW(e,t,r,n){if(e.length>-1){if(!e.return)switch(e.type){case DECLARATION:e.return=prefix(e.value,e.length,r);return;case KEYFRAMES:return serialize([copy(e,{value:replace(e.value,"@","@"+WEBKIT)})],n);case RULESET:if(e.length)return combine(e.props,function(t){switch(match(t,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case":read-only":case":read-write":return serialize([copy(e,{props:[replace(t,/:(read-\w+)/,":"+MOZ+"$1")]})],n);// :placeholder
case"::placeholder":return serialize([copy(e,{props:[replace(t,/:(plac\w+)/,":"+WEBKIT+"input-$1")]}),copy(e,{props:[replace(t,/:(plac\w+)/,":"+MOZ+"$1")]}),copy(e,{props:[replace(t,/:(plac\w+)/,MS+"input-$1")]})],n)}return""})}}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */function t$(e){switch(e.type){case RULESET:e.props=e.props.map(function(t){return combine(tokenize(t),function(t,r,n){switch(charat(t,0)){// \f
case 12:return substr(t,1,strlen(t));// \0 ( + > ~
case 0:case 40:case 43:case 62:case 126:return t;// :
case 58:if(n[++r]==="global")n[r]="",n[++r]="\f"+substr(n[r],r=1,-1);// \s
case 32:return r===1?"":t;default:switch(r){case 0:e=t;return sizeof(n)>1?"":t;case r=sizeof(n)-1:case 2:return r===2?t+e+e:t+e;default:return t}}})})}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
/**
 * @param {string} value
 * @return {object[]}
 */function tG(e){return tp(tK("",null,null,null,[""],e=th(e),0,[0],e))}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */function tK(e,t,r,n,a,i,o,s,u){var c=0;var l=0;var f=o;var d=0;var h=0;var p=0;var v=1;var m=1;var g=1;var y=0;var b="";var _=a;var w=i;var x=n;var E=b;while(m)switch(p=y,y=tu()){// (
case 40:if(p!=108&&e2(E,f-1)==58){if(e1(E+=e0(tv(y),"&","&\f"),"&\f")!=-1)g=-1;break}// " ' [
case 34:case 39:case 91:E+=tv(y);break;// \t \n \r \s
case 9:case 10:case 13:case 32:E+=tg(p);break;// \
case 92:E+=tb(tl()-1,7);continue;// /
case 47:switch(tc()){case 42:case 47:e3(tX(tw(tu(),tl()),t,r),u);break;default:E+="/"}break;// {
case 123*v:s[c++]=e5(E)*g;// } ; \0
case 125*v:case 59:case 0:switch(y){// \0 }
case 0:case 125:m=0;// ;
case 59+l:if(g==-1)E=e0(E,/\f/g,"");if(h>0&&e5(E)-f)e3(h>32?tJ(E+";",n,r,f-1):tJ(e0(E," ","")+";",n,r,f-2),u);break;// @ ;
case 59:E+=";";// { rule/at-rule
default:e3(x=tQ(E,t,r,c,l,a,s,b,_=[],w=[],f),i);if(y===123)if(l===0)tK(E,t,x,x,_,i,f,s,w);else switch(d===99&&e2(E,3)===110?100:d){// d l m s
case 100:case 108:case 109:case 115:tK(e,x,x,n&&e3(tQ(e,x,x,0,0,a,s,b,a,_=[],f),w),a,w,f,s,n?_:w);break;default:tK(E,x,x,x,[""],w,0,s,w)}}c=l=h=0,v=g=1,b=E="",f=o;break;// :
case 58:f=1+e5(E),h=p;default:if(v<1){if(y==123)--v;else if(y==125&&v++==0&&ts()==125)continue}switch(E+=eK(y),y*v){// &
case 38:g=l>0?1:(E+="\f",-1);break;// ,
case 44:s[c++]=(e5(E)-1)*g,g=1;break;// @
case 64:// -
if(tc()===45)E+=tv(tu());d=tc(),l=f=e5(b=E+=tx(tl())),y++;break;// -
case 45:if(p===45&&e5(E)==2)v=0}}return i}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */function tQ(e,t,r,n,a,i,o,s,u,c,l){var f=a-1;var d=a===0?i:[""];var h=e4(d);for(var p=0,v=0,m=0;p<n;++p)for(var g=0,y=e6(e,f+1,f=eG(v=o[p])),b=e;g<h;++g)if(b=eJ(v>0?d[g]+" "+y:e0(y,/&\f/g,d[g])))u[m++]=b;return ta(e,t,r,a===0?tT:s,u,c,l)}/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */function tX(e,t,r){return ta(e,t,r,tA,eK(to()),e6(e,2,-2),0)}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */function tJ(e,t,r,n){return ta(e,t,r,tR,e6(e,0,n),e6(e,n+1,-1),n)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var tZ=function e(e,t,r){var n=0;var a=0;while(true){n=a;a=tc();// &\f
if(n===38&&a===12){t[r]=1}if(td(a)){break}tu()}return tf(e,tt)};var t0=function e(e,t){// pretend we've started with a comma
var r=-1;var n=44;do{switch(td(n)){case 0:// &\f
if(n===38&&tc()===12){// this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
t[r]=1}e[r]+=tZ(tt-1,t,r);break;case 2:e[r]+=tv(n);break;case 4:// comma
if(n===44){// colon
e[++r]=tc()===58?"&\f":"";t[r]=e[r].length;break}// fallthrough
default:e[r]+=eK(n)}}while(n=tu())return e};var t1=function e(e,t){return tp(t0(th(e),t))};// WeakSet would be more appropriate, but only WeakMap is supported in IE11
var t2=/* #__PURE__ */new WeakMap;var t6=function e(e){if(e.type!=="rule"||!e.parent||// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
e.length<1){return}var t=e.value;var r=e.parent;var n=e.column===r.column&&e.line===r.line;while(r.type!=="rule"){r=r.parent;if(!r)return}// short-circuit for the simplest case
if(e.props.length===1&&t.charCodeAt(0)!==58&&!t2.get(r)){return}// if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
// then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
if(n){return}t2.set(e,true);var a=[];var i=t1(t,a);var o=r.props;for(var s=0,u=0;s<i.length;s++){for(var c=0;c<o.length;c++,u++){e.props[u]=a[s]?i[s].replace(/&\f/g,o[c]):o[c]+" "+i[s]}}};var t5=function e(e){if(e.type==="decl"){var t=e.value;if(t.charCodeAt(0)===108&&// charcode for b
t.charCodeAt(2)===98){// this ignores label
e["return"]="";e.value=""}}};/* eslint-disable no-fallthrough */function t4(e,t){switch(eX(e,t)){// color-adjust
case 5103:return tS+"print-"+e+e;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tS+e+e;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return tS+e+tO+e+tE+e+e;// flex, flex-direction
case 6828:case 4268:return tS+e+tE+e+e;// order
case 6165:return tS+e+tE+"flex-"+e+e;// align-items
case 5187:return tS+e+e0(e,/(\w+).+(:[^]+)/,tS+"box-$1$2"+tE+"flex-$1$2")+e;// align-self
case 5443:return tS+e+tE+"flex-item-"+e0(e,/flex-|-self/,"")+e;// align-content
case 4675:return tS+e+tE+"flex-line-pack"+e0(e,/align-content|flex-|-self/,"")+e;// flex-shrink
case 5548:return tS+e+tE+e0(e,"shrink","negative")+e;// flex-basis
case 5292:return tS+e+tE+e0(e,"basis","preferred-size")+e;// flex-grow
case 6060:return tS+"box-"+e0(e,"-grow","")+tS+e+tE+e0(e,"grow","positive")+e;// transition
case 4554:return tS+e0(e,/([^-])(transform)/g,"$1"+tS+"$2")+e;// cursor
case 6187:return e0(e0(e0(e,/(zoom-|grab)/,tS+"$1"),/(image-set)/,tS+"$1"),e,"")+e;// background, background-image
case 5495:case 3959:return e0(e,/(image-set\([^]*)/,tS+"$1"+"$`$1");// justify-content
case 4968:return e0(e0(e,/(.+:)(flex-)?(.*)/,tS+"box-pack:$3"+tE+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tS+e+e;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return e0(e,/(.+)-inline(.+)/,tS+"$1$2")+e;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(e5(e)-1-t>6)switch(e2(e,t+1)){// (m)ax-content, (m)in-content
case 109:// -
if(e2(e,t+4)!==45)break;// (f)ill-available, (f)it-content
case 102:return e0(e,/(.+:)(.+)-([^]+)/,"$1"+tS+"$2-$3"+"$1"+tO+(e2(e,t+3)==108?"$3":"$2-$3"))+e;// (s)tretch
case 115:return~e1(e,"stretch")?t4(e0(e,"stretch","fill-available"),t)+e:e}break;// position: sticky
case 4949:// (s)ticky?
if(e2(e,t+1)!==115)break;// display: (flex|inline-flex)
case 6444:switch(e2(e,e5(e)-3-(~e1(e,"!important")&&10))){// stic(k)y
case 107:return e0(e,":",":"+tS)+e;// (inline-)?fl(e)x
case 101:return e0(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+tS+(e2(e,14)===45?"inline-":"")+"box$3"+"$1"+tS+"$2$3"+"$1"+tE+"$2box$3")+e}break;// writing-mode
case 5936:switch(e2(e,t+11)){// vertical-l(r)
case 114:return tS+e+tE+e0(e,/[svh]\w+-[tblr]{2}/,"tb")+e;// vertical-r(l)
case 108:return tS+e+tE+e0(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;// horizontal(-)tb
case 45:return tS+e+tE+e0(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return tS+e+tE+e+e}return e}var t3=function e(e,t,r,n){if(e.length>-1){if(!e["return"])switch(e.type){case tR:e["return"]=t4(e.value,e.length);break;case tN:return tY([ti(e,{value:e0(e.value,"@","@"+tS)})],n);case tT:if(e.length)return e7(e.props,function(t){switch(eZ(t,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case":read-only":case":read-write":return tY([ti(e,{props:[e0(t,/:(read-\w+)/,":"+tO+"$1")]})],n);// :placeholder
case"::placeholder":return tY([ti(e,{props:[e0(t,/:(plac\w+)/,":"+tS+"input-$1")]}),ti(e,{props:[e0(t,/:(plac\w+)/,":"+tO+"$1")]}),ti(e,{props:[e0(t,/:(plac\w+)/,tE+"input-$1")]})],n)}return""})}}};var t7=[t3];var t8=function e(e){var t=e.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(r,function(e){// we want to only move elements which have a space in the data-emotion attribute value
// because that indicates that it is an Emotion 11 server-side rendered style elements
// while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
// Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
// so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
// will not result in the Emotion 10 styles being destroyed
var t=e.getAttribute("data-emotion");if(t.indexOf(" ")===-1){return}document.head.appendChild(e);e.setAttribute("data-s","")})}var n=e.stylisPlugins||t7;var a={};var i;var o=[];{i=e.container||document.head;Array.prototype.forEach.call(// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){var t=e.getAttribute("data-emotion").split(" ");for(var r=1;r<t.length;r++){a[t[r]]=true}o.push(e)})}var s;var u=[t6,t5];{var c;var l=[tz,tq(function(e){c.insert(e)})];var f=tV(u.concat(n,l));var d=function e(e){return tY(tG(e),f)};s=function e(e,t,r,n){c=r;d(e?e+"{"+t.styles+"}":t.styles);if(n){h.inserted[t.name]=true}}}var h={key:t,sheet:new e$({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:s};h.sheet.hydrate(o);return h};// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-d59e098f.esm.js
var t9=r(2517);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/cssjanus@2.3.0/node_modules/cssjanus/src/cssjanus.js
var re=r(234);var rt=/*#__PURE__*/r.n(re);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/stylis-plugin-rtl@2.1.1_stylis@4.2.0/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js
function rr(e,t,r){switch(e.type){case tI:case tR:case tA:return e.return=e.return||e.value;case tT:{e.value=Array.isArray(e.props)?e.props.join(","):e.props;if(Array.isArray(e.children)){e.children.forEach(function(e){if(e.type===tA)e.children=e.value})}}}var n=tY(Array.prototype.concat(e.children),rr);return e5(n)?e.return=e.value+"{"+n+"}":""}function rn(e,t,r,n){if(e.type===tN||e.type===tM||e.type===tT&&(!e.parent||e.parent.type===tC||e.parent.type===tT)){var a=rt().transform(rr(e,t,r));e.children=a?tG(a)[0].children:[];e.return=""}}// stable identifier that will not be dropped by minification unless the whole module
// is unused
Object.defineProperty(rn,"name",{value:"stylisRTLPlugin"});/* export default */const ra=rn;//# sourceMappingURL=stylis-rtl.js.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/constants.ts
var ri=r(7461);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/RTLProvider.tsx
var ro=t8({stylisPlugins:[ra],key:"rtl"});var rs=t=>{var{children:r}=t;if(ri/* .isRTL */.V8){return/*#__PURE__*/(0,e/* .jsx */.Y)(t9.C,{value:ro,children:r})}return/*#__PURE__*/(0,e/* .jsx */.Y)(e/* .Fragment */.FK,{children:r})};/* export default */const ru=rs;// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/contexts/SVGIconConfigContext.tsx
var rc=r(9612);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/style-utils.ts
var rl=r(4958);// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/config/routes.tsx + 11 modules
var rf=r(2868);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/App.tsx
var rd=()=>{var[r]=(0,t.useState)(()=>new eH({defaultOptions:{queries:{retry:false,refetchOnWindowFocus:false,networkMode:"always"},mutations:{retry:false,networkMode:"always"}}}));var n=(0,o/* .useRoutes */.Ye)(rf/* ["default"] */.A);return/*#__PURE__*/(0,e/* .jsx */.Y)(ru,{children:/*#__PURE__*/(0,e/* .jsx */.Y)(eB/* .QueryClientProvider */.Ht,{client:r,children:/*#__PURE__*/(0,e/* .jsx */.Y)(rc/* .SVGIconConfigProvider */.j,{children:/*#__PURE__*/(0,e/* .jsx */.Y)(eY/* ["default"] */.A,{position:"bottom-center",children:/*#__PURE__*/(0,e/* .jsxs */.FD)(ez/* .ModalProvider */.Z,{children:[/*#__PURE__*/(0,e/* .jsx */.Y)(eO/* .Global */.mL,{styles:[(0,rl/* .createGlobalCss */.v)()]}),n]})})})})})};/* export default */const rh=rd;// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder.tsx
var rp=a.createRoot(document.getElementById("tutor-course-bundle-builder-root"));rp.render(/*#__PURE__*/(0,e/* .jsx */.Y)(n().StrictMode,{children:/*#__PURE__*/(0,e/* .jsx */.Y)(G,{children:/*#__PURE__*/(0,e/* .jsx */.Y)(eE/* ["default"] */.A,{children:/*#__PURE__*/(0,e/* .jsx */.Y)(rh,{})})})}))})()})();