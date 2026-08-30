(()=>{"use strict";var e={};// The module cache
var t={};// The require function
function r(n){// Check if module is in cache
var i=t[n];if(i!==undefined){return i.exports}// Create a new module (and put it into the cache)
var a=t[n]={exports:{}};// Execute the module function
e[n](a,a.exports,r);// Return the exports of the module
return a.exports}// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./assets/src/js/quiz-type/shared/quiz-a11y.js
/**
 * Shared accessibility helpers for quiz interaction question types.
 *
 * Live announcements, aria-describedby wiring, and keyboard step utilities.
 *
 * @package TutorPro
 * @since 4.0.0
 */var n="tutor-quiz-a11y-live-region";var i="tutor-quiz-a11y-sr-only";/**
 * Ensure a polite live region exists (creates one when missing).
 *
 * @param {HTMLElement|null} container Parent to append the region under.
 * @param {string}           id       Unique element id.
 * @return {HTMLElement|null}
 */function a(e,t){if(!e||!t){return null}var r=document.getElementById(t);if(!r){r=document.createElement("div");r.id=t;r.className=n+" "+i;r.setAttribute("aria-live","polite");r.setAttribute("aria-atomic","true");r.setAttribute("role","status");e.appendChild(r)}return r}/**
 * Announce text through a polite live region.
 *
 * @param {HTMLElement|null} region  Live region element.
 * @param {string}           message Message to announce.
 * @return {void}
 */function o(e,t){if(!e||typeof t!=="string"){return}var r=t.trim();if(!r){return}e.textContent="";if(typeof window.requestAnimationFrame==="function"){window.requestAnimationFrame(function(){e.textContent=r});return}e.textContent=r}/**
 * Merge unique id references into aria-describedby.
 *
 * @param {HTMLElement|null} controlEl Focusable control.
 * @param {string[]}         ids       Element ids to describe the control.
 * @return {void}
 */function u(e,t){if(!e||!Array.isArray(t)||!t.length){return}var r=t.filter(function(e){return typeof e==="string"&&e.length>0&&document.getElementById(e)});if(!r.length){return}var n=(e.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean);var i=[];var a={};for(var o=0;o<n.length;o++){if(!a[n[o]]){a[n[o]]=true;i.push(n[o])}}for(var u=0;u<r.length;u++){if(!a[r[u]]){a[r[u]]=true;i.push(r[u])}}e.setAttribute("aria-describedby",i.join(" "))}/**
 * Normalize a keyboard event key (with legacy keyCode fallback).
 *
 * @param {KeyboardEvent|null} event Keyboard event.
 * @return {string}
 */function f(e){if(!e){return""}if(e.key&&e.key!=="Unidentified"){return e.key}var t={37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",33:"PageUp",34:"PageDown",36:"Home",35:"End"};return t[e.keyCode]||""}/**
 * Whether a key should be handled exclusively by a quiz interaction control.
 *
 * @param {string} key Normalized key from normalizeKey().
 * @return {boolean}
 */function l(e){return e==="ArrowLeft"||e==="ArrowRight"||e==="ArrowUp"||e==="ArrowDown"||e==="PageUp"||e==="PageDown"||e==="Home"||e==="End"}/**
 * Resolve the next slider value from a keyboard step key.
 *
 * @param {number} currentValue Current slider value.
 * @param {string} key          Normalized key.
 * @param {{ step: number, largeStep?: number, min: number, max: number }} options Step config.
 * @return {number|null} Next value, or null when the key is not handled.
 */function v(e,t,r){var n=typeof r.step==="number"&&r.step>0?r.step:1;var i=typeof r.largeStep==="number"&&r.largeStep>0?r.largeStep:n*10;var a=typeof r.min==="number"?r.min:0;var o=typeof r.max==="number"?r.max:100;if(t==="ArrowRight"||t==="ArrowUp"){return e+n}if(t==="ArrowLeft"||t==="ArrowDown"){return e-n}if(t==="PageUp"){return e+i}if(t==="PageDown"){return e-i}if(t==="Home"){return a}if(t==="End"){return o}return null}/**
 * Whether a key moves a grid cursor.
 *
 * @param {string} key Normalized key.
 * @return {boolean}
 */function s(e){return e==="ArrowLeft"||e==="ArrowRight"||e==="ArrowUp"||e==="ArrowDown"}/**
 * Move an integer grid cursor by one unit using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current cursor position.
 * @param {string}                    key    Normalized key.
 * @param {{ min: number, max: number }} bounds Axis bounds.
 * @return {{ x: number, y: number }|null} Updated cursor or null when key is not handled.
 */function p(e,t,r){if(!e||!r){return null}var n=r.min;var i=r.max;var a=e.x;var o=e.y;if(t==="ArrowLeft"){a-=1}else if(t==="ArrowRight"){a+=1}else if(t==="ArrowUp"){o+=1}else if(t==="ArrowDown"){o-=1}else{return null}a=Math.max(n,Math.min(i,a));o=Math.max(n,Math.min(i,o));return{x:a,y:o}}/**
 * Move a normalized (0–1) cursor using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function d(e,t,r){if(!e||!s(t)){return null}var n=r||{};var i=typeof n.step==="number"&&n.step>0?n.step:.01;var a=typeof n.largeStep==="number"&&n.largeStep>0?n.largeStep:.05;var o=n.shiftKey?a:i;var u=e.x;var f=e.y;if(t==="ArrowLeft"){u-=o}else if(t==="ArrowRight"){u+=o}else if(t==="ArrowUp"){f-=o}else if(t==="ArrowDown"){f+=o}else{return null}u=Math.max(0,Math.min(1,u));f=Math.max(0,Math.min(1,f));return{x:u,y:f}}/**
 * Move a pixel cursor within canvas bounds using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ width: number, height: number }} bounds Canvas size in pixels.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function c(e,t,r,n){if(!e||!r||!s(t)){return null}var i=n||{};var a=typeof i.step==="number"&&i.step>0?i.step:5;var o=typeof i.largeStep==="number"&&i.largeStep>0?i.largeStep:20;var u=i.shiftKey?o:a;var f=Math.max(0,r.width);var l=Math.max(0,r.height);var v=e.x;var p=e.y;if(t==="ArrowLeft"){v-=u}else if(t==="ArrowRight"){v+=u}else if(t==="ArrowUp"){p-=u}else if(t==="ArrowDown"){p+=u}else{return null}v=Math.max(0,Math.min(f,v));p=Math.max(0,Math.min(l,p));return{x:v,y:p}}/**
 * Format normalized pin coordinates for screen-reader announcements.
 *
 * @param {number} x Horizontal position (0–1).
 * @param {number} y Vertical position (0–1).
 * @return {string}
 */function m(e,t){var r=Math.max(0,Math.min(1,typeof e==="number"?e:parseFloat(e,10)||0));var n=Math.max(0,Math.min(1,typeof t==="number"?t:parseFloat(t,10)||0));return r.toFixed(2)+", "+n.toFixed(2)};// CONCATENATED MODULE: ./assets/src/js/quiz-type/pin-image-question.js
/**
 * Frontend behaviour for "Pin on Image" quiz questions (Tutor Pro).
 *
 * Finds all `.tutor-pin-image-question` wrappers rendered by
 * `tutor-pro/templates/learning-area/quiz/questions/pin-image.php` and wires click-to-place-pin:
 * normalized (x, y) in 0–1 are written to hidden inputs [answers][pin][x] and [y].
 *
 * @package TutorPro
 * @since 4.0.0
 */var w=".tutor-pin-image-question";var y=".tutor-pin-image-wrapper";var g=".tutor-pin-image-marker";var h='input[id^="tutor-pin-image-x-"]';var x='input[id^="tutor-pin-image-y-"]';var A=".tutor-quiz-a11y-live-region";var b="tutor-pin-image-wrapper-has-pin";var E="tutor-pin-image-marker-keyboard-preview";var L="_tutorPinImageTeardown";var M=(()=>{var e=new Set;var t=false;function r(t){e.forEach(e=>e.handleMove(t))}function n(t){e.forEach(e=>e.handleEnd(t))}function i(){if(t){return}window.addEventListener("pointermove",r);window.addEventListener("pointerup",n);window.addEventListener("pointercancel",n);t=true}function a(){if(!t||e.size>0){return}window.removeEventListener("pointermove",r);window.removeEventListener("pointerup",n);window.removeEventListener("pointercancel",n);t=false}return{register(t){e.add(t);i()},unregister(t){e.delete(t);a()}}})();function D(e){return Math.max(0,Math.min(1,typeof e==="number"?e:parseFloat(e,10)||0))}function S(e){return e&&e.classList.contains(b)}function k(e){if(!e){return}if(typeof e[L]==="function"){e[L]()}var t=e.querySelector(y);var r=e.querySelector(g);var n=e.querySelector(h);var i=e.querySelector(x);var a=e.querySelector(A);if(!t||!n||!i){return}var l={x:.5,y:.5};var v=false;var p=false;function c(e){o(a,e)}function w(e,t,n){var i=n||{};if(!r){return}r.style.left=e*100+"%";r.style.top=t*100+"%";r.style.display="block";if(i.preview){r.classList.add(E)}else{r.classList.remove(E)}}function k(){if(!r){return}r.style.display="none";r.classList.remove(E)}function q(e,r,a){var o=t.getBoundingClientRect();var u=o.width;var f=o.height;if(!u||!f){return}var v=(e-o.left)/u;var s=(r-o.top)/f;v=D(v);s=D(s);n.value=String(v);i.value=String(s);n.dispatchEvent(new Event("input",{bubbles:true}));i.dispatchEvent(new Event("input",{bubbles:true}));w(v,s,a);t.classList.add(b);l={x:v,y:s}}function P(e,r,n){var i=t.getBoundingClientRect();var a=i.width;var o=i.height;if(!a||!o){return}var u=D(e);var f=D(r);q(i.left+u*a,i.top+f*o,n)}function U(){n.value="";i.value="";n.dispatchEvent(new Event("input",{bubbles:true}));i.dispatchEvent(new Event("input",{bubbles:true}));t.classList.remove(b);k();l={x:.5,y:.5}}function C(){if(S(t)){return}w(l.x,l.y,{preview:true})}function R(){if(S(t)){if(r){r.classList.remove(E)}return}k()}function I(e,t,r){var n=r?r+" ":"";c(n+m(e,t)+".")}function B(){var e=t.getBoundingClientRect();var r=D(n.value);var a=D(i.value);return{x:e.left+r*e.width,y:e.top+a*e.height}}var F=false;var z=null;var K=0;var X=0;var Y=false;function H(){F=false;z=null;K=0;X=0;window.setTimeout(function(){Y=false},0)}function T(e){if(!F||e.pointerId!==z){return}e.preventDefault();Y=true;q(e.clientX-K,e.clientY-X)}function _(e){if(!F||e.pointerId!==z){return}e.preventDefault();q(e.clientX-K,e.clientY-X);H()}function j(){p=true;v=false;R()}function N(e){if(Y){e.preventDefault();return}e.preventDefault();q(e.clientX,e.clientY);I(D(n.value),D(i.value),"Pin placed at")}function O(){var r=e.getAttribute("data-question-id")||"";var o=r?"tutor-pin-image-instruction-"+r:"";var f=a?a.id:"";u(t,[o,f].filter(Boolean));if(p){p=false;return}v=true;if(S(t)){l={x:D(n.value),y:D(i.value)};w(l.x,l.y)}else{C()}}function G(){v=false;R()}function J(e){var r=f(e);if(r==="Enter"){e.preventDefault();P(l.x,l.y);I(l.x,l.y,"Pin placed at");return}if(r==="c"||r==="C"){if(!S(t)){return}e.preventDefault();U();c("Pin cleared.");if(v){C()}return}if(!s(r)){return}e.preventDefault();if(S(t)){l={x:D(n.value),y:D(i.value)}}var a=d(l,r,{shiftKey:e.shiftKey});if(!a){return}l=a;if(S(t)){P(l.x,l.y);I(l.x,l.y,"Pin moved to");return}C();I(l.x,l.y,"Position")}function Q(){t.removeEventListener("mousedown",j);t.removeEventListener("click",N);t.removeEventListener("focus",O);t.removeEventListener("blur",G);t.removeEventListener("keydown",J)}t.addEventListener("mousedown",j);t.addEventListener("click",N);t.addEventListener("focus",O);t.addEventListener("blur",G);t.addEventListener("keydown",J);if(!r){e[L]=function(){Q();delete e[L]};return}function V(e){// Drag should only be possible after first placement.
if(!S(t)){return}e.preventDefault();var r=B();F=true;z=e.pointerId;K=e.clientX-r.x;X=e.clientY-r.y;Y=false}r.addEventListener("pointerdown",V);var W={handleMove:T,handleEnd:_};M.register(W);e[L]=function(){Q();r.removeEventListener("pointerdown",V);M.unregister(W);delete e[L]}}function q(){var e=document.querySelectorAll(w);if(!e||!e.length){return}for(var t=0;t<e.length;t++){k(e[t])}}// Course-builder iframe preview re-init (see Tutor core PinImagePreview.tsx).
window._tutorPinImageInitAll=function(){q()};if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",q)}else{q()}})();