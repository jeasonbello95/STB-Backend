(()=>{"use strict";var t={};// The module cache
var e={};// The require function
function r(n){// Check if module is in cache
var a=e[n];if(a!==undefined){return a.exports}// Create a new module (and put it into the cache)
var i=e[n]={exports:{}};// Execute the module function
t[n](i,i.exports,r);// Return the exports of the module
return i.exports}// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./assets/src/js/quiz-type/shared/quiz-a11y.js
/**
 * Shared accessibility helpers for quiz interaction question types.
 *
 * Live announcements, aria-describedby wiring, and keyboard step utilities.
 *
 * @package TutorPro
 * @since 4.0.0
 */var n="tutor-quiz-a11y-live-region";var a="tutor-quiz-a11y-sr-only";/**
 * Ensure a polite live region exists (creates one when missing).
 *
 * @param {HTMLElement|null} container Parent to append the region under.
 * @param {string}           id       Unique element id.
 * @return {HTMLElement|null}
 */function i(t,e){if(!t||!e){return null}var r=document.getElementById(e);if(!r){r=document.createElement("div");r.id=e;r.className=n+" "+a;r.setAttribute("aria-live","polite");r.setAttribute("aria-atomic","true");r.setAttribute("role","status");t.appendChild(r)}return r}/**
 * Announce text through a polite live region.
 *
 * @param {HTMLElement|null} region  Live region element.
 * @param {string}           message Message to announce.
 * @return {void}
 */function o(t,e){if(!t||typeof e!=="string"){return}var r=e.trim();if(!r){return}t.textContent="";if(typeof window.requestAnimationFrame==="function"){window.requestAnimationFrame(function(){t.textContent=r});return}t.textContent=r}/**
 * Merge unique id references into aria-describedby.
 *
 * @param {HTMLElement|null} controlEl Focusable control.
 * @param {string[]}         ids       Element ids to describe the control.
 * @return {void}
 */function u(t,e){if(!t||!Array.isArray(e)||!e.length){return}var r=e.filter(function(t){return typeof t==="string"&&t.length>0&&document.getElementById(t)});if(!r.length){return}var n=(t.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean);var a=[];var i={};for(var o=0;o<n.length;o++){if(!i[n[o]]){i[n[o]]=true;a.push(n[o])}}for(var u=0;u<r.length;u++){if(!i[r[u]]){i[r[u]]=true;a.push(r[u])}}t.setAttribute("aria-describedby",a.join(" "))}/**
 * Normalize a keyboard event key (with legacy keyCode fallback).
 *
 * @param {KeyboardEvent|null} event Keyboard event.
 * @return {string}
 */function l(t){if(!t){return""}if(t.key&&t.key!=="Unidentified"){return t.key}var e={37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",33:"PageUp",34:"PageDown",36:"Home",35:"End"};return e[t.keyCode]||""}/**
 * Whether a key should be handled exclusively by a quiz interaction control.
 *
 * @param {string} key Normalized key from normalizeKey().
 * @return {boolean}
 */function v(t){return t==="ArrowLeft"||t==="ArrowRight"||t==="ArrowUp"||t==="ArrowDown"||t==="PageUp"||t==="PageDown"||t==="Home"||t==="End"}/**
 * Resolve the next slider value from a keyboard step key.
 *
 * @param {number} currentValue Current slider value.
 * @param {string} key          Normalized key.
 * @param {{ step: number, largeStep?: number, min: number, max: number }} options Step config.
 * @return {number|null} Next value, or null when the key is not handled.
 */function s(t,e,r){var n=typeof r.step==="number"&&r.step>0?r.step:1;var a=typeof r.largeStep==="number"&&r.largeStep>0?r.largeStep:n*10;var i=typeof r.min==="number"?r.min:0;var o=typeof r.max==="number"?r.max:100;if(e==="ArrowRight"||e==="ArrowUp"){return t+n}if(e==="ArrowLeft"||e==="ArrowDown"){return t-n}if(e==="PageUp"){return t+a}if(e==="PageDown"){return t-a}if(e==="Home"){return i}if(e==="End"){return o}return null}/**
 * Whether a key moves a grid cursor.
 *
 * @param {string} key Normalized key.
 * @return {boolean}
 */function f(t){return t==="ArrowLeft"||t==="ArrowRight"||t==="ArrowUp"||t==="ArrowDown"}/**
 * Move an integer grid cursor by one unit using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current cursor position.
 * @param {string}                    key    Normalized key.
 * @param {{ min: number, max: number }} bounds Axis bounds.
 * @return {{ x: number, y: number }|null} Updated cursor or null when key is not handled.
 */function d(t,e,r){if(!t||!r){return null}var n=r.min;var a=r.max;var i=t.x;var o=t.y;if(e==="ArrowLeft"){i-=1}else if(e==="ArrowRight"){i+=1}else if(e==="ArrowUp"){o+=1}else if(e==="ArrowDown"){o-=1}else{return null}i=Math.max(n,Math.min(a,i));o=Math.max(n,Math.min(a,o));return{x:i,y:o}}/**
 * Move a normalized (0–1) cursor using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function c(t,e,r){if(!t||!f(e)){return null}var n=r||{};var a=typeof n.step==="number"&&n.step>0?n.step:.01;var i=typeof n.largeStep==="number"&&n.largeStep>0?n.largeStep:.05;var o=n.shiftKey?i:a;var u=t.x;var l=t.y;if(e==="ArrowLeft"){u-=o}else if(e==="ArrowRight"){u+=o}else if(e==="ArrowUp"){l-=o}else if(e==="ArrowDown"){l+=o}else{return null}u=Math.max(0,Math.min(1,u));l=Math.max(0,Math.min(1,l));return{x:u,y:l}}/**
 * Move a pixel cursor within canvas bounds using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ width: number, height: number }} bounds Canvas size in pixels.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function h(t,e,r,n){if(!t||!r||!f(e)){return null}var a=n||{};var i=typeof a.step==="number"&&a.step>0?a.step:5;var o=typeof a.largeStep==="number"&&a.largeStep>0?a.largeStep:20;var u=a.shiftKey?o:i;var l=Math.max(0,r.width);var v=Math.max(0,r.height);var s=t.x;var d=t.y;if(e==="ArrowLeft"){s-=u}else if(e==="ArrowRight"){s+=u}else if(e==="ArrowUp"){d-=u}else if(e==="ArrowDown"){d+=u}else{return null}s=Math.max(0,Math.min(l,s));d=Math.max(0,Math.min(v,d));return{x:s,y:d}}/**
 * Format normalized pin coordinates for screen-reader announcements.
 *
 * @param {number} x Horizontal position (0–1).
 * @param {number} y Vertical position (0–1).
 * @return {string}
 */function p(t,e){var r=Math.max(0,Math.min(1,typeof t==="number"?t:parseFloat(t,10)||0));var n=Math.max(0,Math.min(1,typeof e==="number"?e:parseFloat(e,10)||0));return r.toFixed(2)+", "+n.toFixed(2)};// CONCATENATED MODULE: ./assets/src/js/quiz-type/coordinates-question.js
/**
 * Frontend behaviour for "Coordinates" quiz questions (Tutor Pro).
 *
 * Finds all .tutor-coordinates-question wrappers and provides a coordinate grid.
 * Student clicks grid intersections; selected points in range [-10, 10] are written
 * to hidden input [answers][coordinates][points] as JSON.
 *
 * @package TutorPro
 * @since 4.0.0
 */var y=".tutor-coordinates-question";var g=".tutor-coordinates-canvas";var m='input[id^="tutor-coordinates-points-"]';var x=".tutor-coordinates-clear-prev";var w=".tutor-coordinates-actions";var b=".tutor-coordinates-hover-display";var A="tutor-hidden";var C=".tutor-quiz-question";var M="tutor-quiz-question-header";var q="tutor-quiz-question-header-coordinates";/** Attempt details: read-only graph with student + correct points. */var S='[data-tutor-coordinates-review="1"]';var L=".tutor-coordinates-review-tooltip";/** Legacy single-quiz layout, learning-area, and attempt-details question wrappers. */var R=".quiz-attempt-single-question, .tutor-quiz-question-wrapper, .tutor-quiz-question";var E=8;var k=-10;var D=10;var z=.3;/** Larger than SNAP_THRESHOLD — keeps hover marker stable when the cursor sits on the snap edge (avoids flicker). */var N=.52;/** Chebyshev distance to nearest lattice point for picking hover target (interaction only; clicks still use SNAP_THRESHOLD). */var _=.46;var B=5;var F=14;var O=2;var T=24;var P=20;/** Marker overlay is a square 27×27 in the same logical units as the canvas (not the SVG file’s native 27×28 viewBox). */var U=27;var G="tutor-coordinates-marker-layer";var j="#e0e0e0";var H="#000000";var I="#666666";function X(t){return t===0||Math.abs(t%O)===0}/**
 * Resolve theme-aware graph colors from CSS custom properties.
 *
 * @param {HTMLElement|null} sourceEl Coordinates question/review wrapper.
 * @return {{ gridLineColor: string, axisLineColor: string, axisLabelColor: string }}
 */function Y(t){var e={gridLineColor:j,axisLineColor:H,axisLabelColor:I};if(!t||typeof window.getComputedStyle!=="function"){return e}var r=window.getComputedStyle(t);var n=function t(t,e){var n=r.getPropertyValue(t);var a=typeof n==="string"?n.trim():"";return a||e};return{gridLineColor:n("--tutor-coordinates-grid-line-color",e.gridLineColor),axisLineColor:n("--tutor-coordinates-axis-line-color",e.axisLineColor),axisLabelColor:n("--tutor-coordinates-axis-label-color",e.axisLabelColor)}}function J(t){var e=t?Number(t.getAttribute("data-axis-range")):NaN;var r=e===20?20:10;return{minCoord:-1*r,maxCoord:r}}/**
 * @param {HTMLElement|null} container `.tutor-quiz-question` (or compatible) wrapper.
 * @return {HTMLElement|null} First direct child header element.
 */function K(t){if(!t||!t.children){return null}for(var e=0;e<t.children.length;e++){var r=t.children[e];if(r&&r.classList&&r.classList.contains(M)){return r}}return null}/**
 * Read marker icon URLs from wrapper data attributes.
 *
 * @param {HTMLElement|null} sourceEl Coordinates question/review wrapper.
 * @return {{ hover?: string, selected?: string, correct?: string, wrong?: string }|null}
 */function W(t){if(!t||typeof t.getAttribute!=="function"){return null}var e=t.getAttribute("data-marker-hover")||"";var r=t.getAttribute("data-marker-selected")||"";var n=t.getAttribute("data-marker-correct")||"";var a=t.getAttribute("data-marker-wrong")||"";if(!e&&!r&&!n&&!a){return null}return{hover:e,selected:r,correct:n,wrong:a}}/**
 * @param {HTMLElement|null} gridContainer .tutor-coordinates-grid-container
 * @return {HTMLElement|null}
 */function V(t){if(!t){return null}var e=t.querySelector("."+G);if(!e){e=document.createElement("div");e.className=G;e.setAttribute("aria-hidden","true");t.appendChild(e)}return e}/**
 * Renders marker `<img>` overlays; canvas draws only the grid.
 *
 * @param {HTMLElement|null} gridContainer Parent of the canvas.
 * @param {{ px: number, py: number, kind: 'hover'|'selected'|'correct'|'wrong', opacity?: number, scale?: number }[]} items
 * @param {number}           logicalSize    Same logical width/height used for `drawCoordinateGridLines`.
 * @param {HTMLElement|null} sourceEl       Coordinates question/review wrapper.
 * @return {void}
 */function Q(t,e,r,n){var a=V(t);if(!a){return}var i=W(n);a.innerHTML="";if(!i){return}var o=Math.max(1,r);var u=U/o*100;for(var l=0;l<e.length;l++){var v=e[l];var s=i[v.kind];if(!s){continue}var f=document.createElement("img");f.src=s;f.alt="";f.className="tutor-coordinates-marker-img";f.style.left=v.px/o*100+"%";f.style.top=v.py/o*100+"%";f.style.width=u+"%";f.style.height=u+"%";f.style.objectFit="contain";f.style.opacity=v.opacity!==undefined&&v.opacity!==null?String(v.opacity):"1";var d=v.scale!==undefined&&v.scale!==null?v.scale:1;f.style.transform="translate(-50%, -50%) scale("+d+")";a.appendChild(f)}}/**
 * Parse and normalize points payload from review data attributes.
 *
 * @param {string|null} raw Raw JSON payload.
 * @return {{x: number, y: number}[]}
 */function Z(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:D;if(!t){return[]}var n=null;try{n=JSON.parse(t)}catch(t){return[]}if(!Array.isArray(n)){return[]}var a=[];var i={};for(var o=0;o<n.length;o++){var u=n[o];if(!u||typeof u!=="object"){continue}var l=Number(u.x);var v=Number(u.y);if(!Number.isFinite(l)||!Number.isFinite(v)){continue}var s=Math.max(e,Math.min(r,Math.round(l)));var f=Math.max(e,Math.min(r,Math.round(v)));var d=s+","+f;if(i[d]){continue}i[d]=true;a.push({x:s,y:f})}return a}/**
 * Draw the coordinate grid (shared with initOne and attempt review).
 *
 * @param {CanvasRenderingContext2D} ctx   Context.
 * @param {number}                     width  Canvas width.
 * @param {number}                     height Canvas height.
 * @param {function(number, number): {x: number, y: number}} graphToPixel Map graph to pixel.
 * @param {number}                     centerX  Pixel X of origin.
 * @param {number}                     centerY  Pixel Y of origin.
 * @param {number}                     leftEdge Grid left.
 * @param {number}                     rightEdge Grid right.
 * @param {number}                     topEdge Grid top.
 * @param {number}                     bottomEdge Grid bottom.
 * @return {void}
 */function $(t,e,r,n,a,i,o,u,l,v,s,f,d){var c=d||{gridLineColor:j,axisLineColor:H,axisLabelColor:I};t.clearRect(0,0,e,r);t.strokeStyle=c.gridLineColor;t.lineWidth=.5;for(var h=s;h<=f;h++){if(h===0)continue;var p=n(h,0);t.beginPath();t.moveTo(p.x,l);t.lineTo(p.x,v);t.stroke();p=n(0,h);t.beginPath();t.moveTo(o,p.y);t.lineTo(u,p.y);t.stroke()}t.strokeStyle=c.axisLineColor;t.lineWidth=1.5;t.beginPath();t.moveTo(o,i);t.lineTo(u,i);t.stroke();t.beginPath();t.moveTo(a,l);t.lineTo(a,v);t.stroke();t.fillStyle=c.axisLabelColor;t.font="11px Arial";t.textAlign="center";t.textBaseline="top";for(var y=s;y<=f;y++){if(y===0||!X(y))continue;var g=n(y,0);t.fillText(String(y),g.x,i+5)}t.textAlign="right";t.textBaseline="middle";for(var m=s;m<=f;m++){if(m===0||!X(m))continue;var x=n(0,m);t.fillText(String(m),a-5,x.y)}t.textAlign="right";t.textBaseline="top";t.fillText("0",a-5,i+5)}/**
 * Drop listeners/observers so initOne can run again on the same wrapper (e.g. course-builder iframe preview).
 *
 * @param {HTMLElement} wrapper Coordinates question wrapper.
 * @return {void}
 */function tt(t){if(!t||typeof t._tutorCoordinatesDrawGrid!=="function"){return}var e=t._tutorCoordinatesDrawGrid;window.removeEventListener("resize",e);if(t._tutorCoordinatesResizeObserver&&typeof t._tutorCoordinatesResizeObserver.disconnect==="function"){t._tutorCoordinatesResizeObserver.disconnect()}t._tutorCoordinatesResizeObserver=null;t._tutorCoordinatesDrawGrid=null;var r=t.closest(C);var n=K(r);var a=t.querySelector(w);if(!a&&n){a=n.querySelector(w)}if(a&&n&&a.parentElement===n){n.classList.remove(q);t.insertBefore(a,t.firstChild)}var i=t.querySelector(g);if(i&&i.parentNode){var o=i.cloneNode(false);i.parentNode.replaceChild(o,i)}var u=t.querySelector(x);if(u&&u.parentNode){var l=u.cloneNode(true);u.parentNode.replaceChild(l,u)}t.removeAttribute("data-tutor-coordinates-init")}function te(t,e){if(!t){return}if(e&&t.getAttribute("data-tutor-coordinates-init")==="1"){var r=t._tutorCoordinatesDrawGrid;if(typeof r==="function"){r()}return}if(!e){tt(t)}var n=t.querySelector(g);var a=J(t);var i=a.minCoord;var v=a.maxCoord;var s=t.closest(C);var c=K(s);var h=t.querySelector(w);if(!h&&c){h=c.querySelector(w)}var p=t.querySelector(m);var y=h&&h.querySelector(x)||t.querySelector(x);var M=t.querySelector(b);if(!n||!p){return}var S=n.getContext("2d");if(!S){return}if(h&&c&&h.parentElement!==c){c.classList.add(q);c.appendChild(h)}var L=Z(p.value,i,v);if(L.length>B){L=L.slice(0,B)}var R=null;var k=false;var D={x:0,y:0};var F=false;var O=0;var U=.85;var G=false;var j=0;/** @type {function(number, number): {x: number, y: number}} */var H=function t(){return{x:0,y:0}};/** @type {function(number, number): {x: number, y: number}} */var I=function t(){return{x:0,y:0}};function X(t,e){var r=Math.round(t);var n=Math.round(e);var a=Math.abs(t-r);var o=Math.abs(e-n);if(a<=z&&o<=z&&r>=i&&r<=v&&n>=i&&n<=v){return{x:r,y:n,snapped:true}}return{x:t,y:e,snapped:false}}/**
	 * Hover indicator only: hysteresis + Chebyshev pick distance so tiny pointer jitter
	 * cannot toggle hover on/off at the snap boundary (see SNAP_THRESHOLD vs hover thresholds).
	 *
	 * @param {number}               gx Graph x.
	 * @param {number}               gy Graph y.
	 * @param {{x: number, y: number}|null} prev Previously shown hover intersection.
	 * @return {{x: number, y: number}|null}
	 */function W(t,e,r){var n=(t,e)=>t>=i&&t<=v&&e>=i&&e<=v;if(r&&n(r.x,r.y)){var a=Math.max(Math.abs(t-r.x),Math.abs(e-r.y));if(a<=N){return r}}var o=Math.round(t);var u=Math.round(e);if(!n(o,u)){return null}var l=Math.max(Math.abs(t-o),Math.abs(e-u));if(l<=_){return{x:o,y:u}}return null}function V(e){// Let CSS (width: 100%, aspect-ratio) size the canvas before measuring. Inline px from the
// previous draw would otherwise lock the box and break responsive layouts (e.g. preview mobile).
n.style.width="";n.style.height="";var r=n.getBoundingClientRect();var a=r.width||0;var o=Math.max(1,a);if(a<T){if(e!==false&&j<P){j++;requestAnimationFrame(function(){V(true)})}return}j=0;var u=window.devicePixelRatio||1;var l=Math.max(1,Math.round(o*u));var s=Math.max(1,Math.round(o*u));if(l>0&&s>0&&(n.width!==l||n.height!==s)){n.width=l;n.height=s}var f=n.width/o;var d=n.height/o;n.style.width=o+"px";n.style.height=o+"px";S.setTransform(f,0,0,d,0,0);var c=o;var h=o;var p=c-2*E;var y=h-2*E;var g=E+p/2;var m=E+y/2;var x=Math.min(p,y)/(v-i);I=function t(t,e){return{x:g+t*x,y:m-e*x}};H=function t(t,e){return{x:(t-g)/x,y:(m-e)/x}};var w=I(i,0).x;var b=I(v,0).x;var A=I(0,v).y;var C=I(0,i).y;var M=Y(t);$(S,c,h,I,g,m,w,b,A,C,i,v,M);var q=n.parentElement;var z=[];for(var N=0;N<L.length;N++){var _=L[N];var B=I(_.x,_.y);z.push({px:B.x,py:B.y,kind:"selected"})}var F=k?D:R;if(F&&O>.01){var G=I(F.x,F.y);z.push({px:G.x,py:G.y,kind:"hover",opacity:Math.max(0,Math.min(1,O)),scale:Math.max(.8,U)})}Q(q,z,c,t)}function te(t,e){var r=t+","+e;for(var n=0;n<L.length;n++){var a=L[n];if(a.x+","+a.y===r){tu("Point already selected.");return false}}if(L.length>=B){tu("Maximum 5 points can be selected.");return false}L.push({x:t,y:e});tl();tv();V();return true}function tr(){if(!L.length){tu("No point to clear.");return false}var t=L.pop();tl();tv();V();if(t){tu("Removed point at ("+t.x+", "+t.y+").")}return true}function tn(){k=true;R=null;O=1;U=1;V()}function ta(){k=false;if(R){to();return}O=0;V()}function ti(){var t=R?1:0;var e=R?1:.85;O+=(t-O)*.28;U+=(e-U)*.28;if(Math.abs(t-O)<.01){O=t}if(Math.abs(e-U)<.01){U=e}V();if(O!==t||U!==e){requestAnimationFrame(ti)}else{G=false}}function to(){if(G){return}G=true;requestAnimationFrame(ti)}function tu(t){if(M){o(M,t)}}function tl(){p.value=L.length?JSON.stringify(L):"";p.dispatchEvent(new Event("input",{bubbles:true}))}function tv(){if(!y){return}y.classList.toggle(A,!L.length)}n.addEventListener("mousedown",function(){F=true;if(k){ta()}});n.addEventListener("click",function(t){t.stopPropagation();V();var e=n.getBoundingClientRect();// pointer coordinates must stay in CSS pixel space to match graph math.
var r=t.clientX-e.left;var a=t.clientY-e.top;var i=H(r,a);var o=X(i.x,i.y);if(o.snapped){te(o.x,o.y)}else{tu("Click on a grid intersection.")}});n.addEventListener("mousemove",function(t){if(k){ta()}var e=n.getBoundingClientRect();var r=t.clientX-e.left;var a=t.clientY-e.top;var i=H(r,a);var o=W(i.x,i.y,R);if(!o){if(R){R=null;to()}return}if(!R||R.x!==o.x||R.y!==o.y){R={x:o.x,y:o.y};to()}});n.addEventListener("mouseleave",function(){if(k){return}if(R){R=null;to()}});n.addEventListener("focus",function(){var e=t.getAttribute("data-question-id")||"";var r=e?"tutor-coordinates-instruction-"+e:"";var a=M?M.id:"";u(n,[r,a].filter(Boolean));if(F){F=false;return}tn()});n.addEventListener("blur",function(){ta()});n.addEventListener("keydown",function(t){var e=l(t);if(e==="Enter"){t.preventDefault();if(!k){tn()}te(D.x,D.y);return}if(e==="Backspace"||e==="Delete"){t.preventDefault();tr();return}if(!f(e)){return}t.preventDefault();if(!k){tn()}var r=d(D,e,{min:i,max:v});if(!r){return}D=r;tn()});if(y){y.addEventListener("click",function(t){t.preventDefault();t.stopPropagation();tr()})}tv();V();window.addEventListener("resize",V);if(window.ResizeObserver){var ts=new ResizeObserver(function(){V()});var tf=n.parentElement||n;ts.observe(tf);t._tutorCoordinatesResizeObserver=ts}t._tutorCoordinatesDrawGrid=V;t.setAttribute("data-tutor-coordinates-init","1")}function tr(t){var e=document.querySelectorAll(y);if(!e||!e.length){return}for(var r=0;r<e.length;r++){te(e[r],t)}}/**
 * Attempt details: show given and/or correct points; hover shows (x, y). One marker when both match.
 *
 * @param {HTMLElement} wrapper Review graph wrapper.
 * @return {void}
 */function tn(t){if(!t){return}if(t.getAttribute("data-tutor-coordinates-review-init")==="1"){var e=t._tutorCoordinatesReviewDraw;if(typeof e==="function"){e()}return}var r=t.querySelector(g);var n=J(t);var a=n.minCoord;var i=n.maxCoord;var o=t.querySelector(L);if(!r){return}var u=r.getContext("2d");if(!u){return}var l=t.getAttribute("data-show-student")==="1";var v=t.getAttribute("data-show-correct")==="1";var s=l?Z(t.getAttribute("data-student-points"),a,i):[];var f=v?Z(t.getAttribute("data-correct-points"),a,i):[];/** @type {{ gx: number, gy: number, label: string, kind: 'correct'|'wrong' }[]} */var d=[];var c={};if(l){for(var h=0;h<s.length;h++){var p=s[h];var y=p.x+","+p.y;c[y]=c[y]||{gx:p.x,gy:p.y,hasStudent:false,hasCorrect:false};c[y].hasStudent=true}}if(v){for(var m=0;m<f.length;m++){var x=f[m];var w=x.x+","+x.y;c[w]=c[w]||{gx:x.x,gy:x.y,hasStudent:false,hasCorrect:false};c[w].hasCorrect=true}}for(var b in c){if(!Object.prototype.hasOwnProperty.call(c,b)){continue}var A=c[b];var C=A.hasCorrect?"correct":"wrong";d.push({gx:A.gx,gy:A.gy,label:"("+A.gx+", "+A.gy+")",kind:C})}if(!d.length){return}/** @type {{ gx: number, gy: number, label: string, kind: 'correct'|'wrong', px: number, py: number }[]} */var M=[];var q=0;function S(e){// Responsive square canvas: match container width and keep crisp rendering.
r.style.width="";r.style.height="";var n=r.getBoundingClientRect();var o=n.width||0;var l=Math.max(1,o);if(o<T){if(e!==false&&q<P){q++;requestAnimationFrame(function(){S(true)})}return}q=0;var v=window.devicePixelRatio||1;var s=Math.max(1,Math.round(l*v));var f=Math.max(1,Math.round(l*v));if(s>0&&f>0&&(r.width!==s||r.height!==f)){r.width=s;r.height=f}var c=r.width/l;var h=r.height/l;r.style.width=l+"px";r.style.height=l+"px";u.setTransform(c,0,0,h,0,0);// Recompute the grid math using logical pixels.
var p=l;var y=l;var g=p-2*E;var m=y-2*E;var x=E+g/2;var w=E+m/2;var b=Math.min(g,m)/(i-a);function A(t,e){return{x:x+t*b,y:w-e*b}}var C=A(a,0).x;var L=A(i,0).x;var R=A(0,i).y;var k=A(0,a).y;var D=Y(t);$(u,p,y,A,x,w,C,L,R,k,a,i,D);M=[];var z=[];var N=r.parentElement;for(var _=0;_<d.length;_++){var B=d[_];var F=A(B.gx,B.gy);M.push({gx:B.gx,gy:B.gy,label:B.label,kind:B.kind,px:F.x,py:F.y});z.push({px:F.x,py:F.y,kind:B.kind})}Q(N,z,p,t)}function R(){if(o){o.textContent="";o.hidden=true}}function k(e,r,n){if(!o){return}o.textContent=e;o.hidden=false;var a=t.getBoundingClientRect();var i=r-a.left+12;var u=n-a.top+12;o.style.left=i+"px";o.style.top=u+"px";requestAnimationFrame(function(){if(!o||o.hidden){return}var e=o.getBoundingClientRect();var r=t.getBoundingClientRect();var n=parseFloat(o.style.left)||i;var a=parseFloat(o.style.top)||u;if(n+e.width>r.width-8){n=Math.max(8,r.width-e.width-8)}if(a+e.height>r.height-8){a=Math.max(8,r.height-e.height-8)}o.style.left=n+"px";o.style.top=a+"px"})}r.addEventListener("mousemove",function(t){var e=r.getBoundingClientRect();var n=t.clientX-e.left;var a=t.clientY-e.top;var i=null;var o=F+1;for(var u=0;u<M.length;u++){var l=M[u];var v=n-l.px;var s=a-l.py;var f=Math.sqrt(v*v+s*s);if(f<=F&&f<o){o=f;i=l}}if(i){r.style.cursor="pointer";k(i.label,t.clientX,t.clientY)}else{r.style.cursor="default";R()}});r.addEventListener("mouseleave",function(){r.style.cursor="default";R()});S();window.addEventListener("resize",S);if(window.ResizeObserver){var D=new ResizeObserver(function(){S()});var z=r.parentElement||r;D.observe(z);t._tutorCoordinatesReviewResizeObserver=D}t._tutorCoordinatesReviewDraw=S;t.setAttribute("data-tutor-coordinates-review-init","1")}function ta(){var t=document.querySelectorAll(S);if(!t||!t.length){return}for(var e=0;e<t.length;e++){tn(t[e])}}function ti(t){if(!t)return false;var e=window.getComputedStyle?window.getComputedStyle(t):t.style;return e&&e.display!=="none"}/**
 * True when every mutation is a style-only update on our graph canvases (drawGrid / drawReview).
 * Without this filter, observing subtree `style` causes feedback: observer → redraw → canvas.style → observer,
 * which can freeze the main thread so quiz navigation (e.g. Next) stops responding.
 *
 * @param {MutationRecord[]} mutations MutationObserver callback batch.
 * @returns {boolean} True when this batch can be ignored for visibility-driven redraws.
 */function to(t){if(!t||!t.length){return false}for(var e=0;e<t.length;e++){var r=t[e];if(r.type!=="attributes"||r.attributeName!=="style"){return false}var n=r.target;if(!n||typeof n.matches!=="function"||!n.matches(g)){return false}}return true}function tu(){tr(false);ta();// When a question block becomes visible, redraw the grid (canvas may not have painted while hidden).
var t=document.getElementById("tutor-quiz-attempt-questions-wrap")||document.querySelector(".tutor-quiz-questions");if(t&&!t._tutorCoordinatesObserving){t._tutorCoordinatesObserving=true;var e=null;var r=function r(){e=null;var r=t.querySelectorAll(R);for(var n=0;n<r.length;n++){if(!ti(r[n]))continue;var a=r[n].querySelector(y);if(a&&a.getAttribute("data-tutor-coordinates-init")==="1"){var i=a._tutorCoordinatesDrawGrid;if(typeof i==="function"){i()}}var o=r[n].querySelector(S);if(o&&o.getAttribute("data-tutor-coordinates-review-init")==="1"){var u=o._tutorCoordinatesReviewDraw;if(typeof u==="function"){u()}}}};var n=new MutationObserver(function(t){if(to(t)){return}if(e!==null){return}e=window.requestAnimationFrame(r)});n.observe(t,{attributes:true,attributeFilter:["style","class"],subtree:true});// Redraw after a short delay so grid is drawn when question was hidden on load.
setTimeout(function(){tr(true);ta()},100);setTimeout(function(){tr(true);ta()},500);setTimeout(function(){tr(true);ta()},1e3);setTimeout(function(){tr(true);ta()},1500)}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",tu)}else{tu()}window.addEventListener("load",function(){tr(true);ta()});// Course-builder iframe preview re-init (see Tutor core CoordinatesPreview.tsx). Bundled scope hides initAll from global.
window._tutorCoordinatesInitAll=function(){tr(false)};window._tutorCoordinatesRedrawAll=function(){tr(true)}})();