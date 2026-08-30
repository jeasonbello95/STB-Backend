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
 */function l(e){if(!e){return""}if(e.key&&e.key!=="Unidentified"){return e.key}var t={37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",33:"PageUp",34:"PageDown",36:"Home",35:"End"};return t[e.keyCode]||""}/**
 * Whether a key should be handled exclusively by a quiz interaction control.
 *
 * @param {string} key Normalized key from normalizeKey().
 * @return {boolean}
 */function s(e){return e==="ArrowLeft"||e==="ArrowRight"||e==="ArrowUp"||e==="ArrowDown"||e==="PageUp"||e==="PageDown"||e==="Home"||e==="End"}/**
 * Resolve the next slider value from a keyboard step key.
 *
 * @param {number} currentValue Current slider value.
 * @param {string} key          Normalized key.
 * @param {{ step: number, largeStep?: number, min: number, max: number }} options Step config.
 * @return {number|null} Next value, or null when the key is not handled.
 */function f(e,t,r){var n=typeof r.step==="number"&&r.step>0?r.step:1;var i=typeof r.largeStep==="number"&&r.largeStep>0?r.largeStep:n*10;var a=typeof r.min==="number"?r.min:0;var o=typeof r.max==="number"?r.max:100;if(t==="ArrowRight"||t==="ArrowUp"){return e+n}if(t==="ArrowLeft"||t==="ArrowDown"){return e-n}if(t==="PageUp"){return e+i}if(t==="PageDown"){return e-i}if(t==="Home"){return a}if(t==="End"){return o}return null}/**
 * Whether a key moves a grid cursor.
 *
 * @param {string} key Normalized key.
 * @return {boolean}
 */function c(e){return e==="ArrowLeft"||e==="ArrowRight"||e==="ArrowUp"||e==="ArrowDown"}/**
 * Move an integer grid cursor by one unit using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current cursor position.
 * @param {string}                    key    Normalized key.
 * @param {{ min: number, max: number }} bounds Axis bounds.
 * @return {{ x: number, y: number }|null} Updated cursor or null when key is not handled.
 */function v(e,t,r){if(!e||!r){return null}var n=r.min;var i=r.max;var a=e.x;var o=e.y;if(t==="ArrowLeft"){a-=1}else if(t==="ArrowRight"){a+=1}else if(t==="ArrowUp"){o+=1}else if(t==="ArrowDown"){o-=1}else{return null}a=Math.max(n,Math.min(i,a));o=Math.max(n,Math.min(i,o));return{x:a,y:o}}/**
 * Move a normalized (0–1) cursor using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function d(e,t,r){if(!e||!c(t)){return null}var n=r||{};var i=typeof n.step==="number"&&n.step>0?n.step:.01;var a=typeof n.largeStep==="number"&&n.largeStep>0?n.largeStep:.05;var o=n.shiftKey?a:i;var u=e.x;var l=e.y;if(t==="ArrowLeft"){u-=o}else if(t==="ArrowRight"){u+=o}else if(t==="ArrowUp"){l-=o}else if(t==="ArrowDown"){l+=o}else{return null}u=Math.max(0,Math.min(1,u));l=Math.max(0,Math.min(1,l));return{x:u,y:l}}/**
 * Move a pixel cursor within canvas bounds using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ width: number, height: number }} bounds Canvas size in pixels.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function h(e,t,r,n){if(!e||!r||!c(t)){return null}var i=n||{};var a=typeof i.step==="number"&&i.step>0?i.step:5;var o=typeof i.largeStep==="number"&&i.largeStep>0?i.largeStep:20;var u=i.shiftKey?o:a;var l=Math.max(0,r.width);var s=Math.max(0,r.height);var f=e.x;var v=e.y;if(t==="ArrowLeft"){f-=u}else if(t==="ArrowRight"){f+=u}else if(t==="ArrowUp"){v-=u}else if(t==="ArrowDown"){v+=u}else{return null}f=Math.max(0,Math.min(l,f));v=Math.max(0,Math.min(s,v));return{x:f,y:v}}/**
 * Format normalized pin coordinates for screen-reader announcements.
 *
 * @param {number} x Horizontal position (0–1).
 * @param {number} y Vertical position (0–1).
 * @return {string}
 */function g(e,t){var r=Math.max(0,Math.min(1,typeof e==="number"?e:parseFloat(e,10)||0));var n=Math.max(0,Math.min(1,typeof t==="number"?t:parseFloat(t,10)||0));return r.toFixed(2)+", "+n.toFixed(2)};// CONCATENATED MODULE: ./assets/src/js/quiz-type/shared/draw-on-image.js
/**
 * Shared "Draw on Image" core – canvas overlay, pointer events, base64 mask export.
 *
 * Used by draw-image-question.js (student quiz) and can be reused by other
 * quiz-type UIs. Exports init and constants; draw-image-question bundles this
 * and attaches window.TutorCore.drawOnImage for external use.
 *
 * @package TutorPro
 * @since 4.0.0
 */var p=1;var w="rgba(0, 0, 255, 0.9)";/**
 * Initialize draw-on-image for one image + canvas (and optional hidden input).
 * Returns a destroy function to remove listeners (for React cleanup).
 *
 * @param {Object}   options
 * @param {HTMLImageElement}  options.image       Background image element.
 * @param {HTMLCanvasElement} options.canvas       Overlay canvas element.
 * @param {HTMLInputElement}  [options.hiddenInput] Optional hidden input to write base64 PNG into.
 * @param {number}            [options.brushSize=1] Brush size in pixels.
 * @param {string}            [options.strokeStyle] Stroke/fill style (default blue).
 * @param {function(string)} [options.onMaskChange] Callback(base64OrEmpty) when mask changes.
 * @param {string}            [options.initialMaskUrl] Optional data URL or URL of mask to draw on init.
 * @param {HTMLElement}       [options.interactionRoot] Container (e.g. image wrapper) for hover-to-draw; see activateOnHover.
 * @param {boolean}           [options.activateOnHover] When true and the device supports hover, the canvas is inactive until pointer enters interactionRoot (same pattern as Pin on Image learning area).
 * @param {boolean}           [options.clearOnDrawStart] When true, each new draw gesture clears any previous mask first.
 * @param {function():boolean} [options.canStartDrawing] Optional guard called before drawing starts; return false to block drawing.
 * @param {function()}         [options.onDrawStart] Optional callback fired when a drawing gesture starts.
 * @returns {{ destroy: function, clear: function }} Object with destroy() to remove listeners and clear() to reset mask.
 */function m(e){if(!e||!e.image||!e.canvas){return{destroy:function e(){}}}var t=e.image;var r=e.canvas;var n=e.hiddenInput||null;var i=e.interactionRoot||null;var a=e.activateOnHover===true;var o=typeof e.brushSize==="number"?e.brushSize:p;var u=typeof e.strokeStyle==="string"?e.strokeStyle:w;var l=typeof e.onMaskChange==="function"?e.onMaskChange:null;var s=e.clearOnDrawStart===true;var f=typeof e.canStartDrawing==="function"?e.canStartDrawing:null;var c=typeof e.onDrawStart==="function"?e.onDrawStart:null;var v={isDrawing:false,activePointerId:null,brushSize:o,lastX:0,lastY:0,pathStarted:false,hasMoved:false,lastMaskValue:""};var d=a&&i&&typeof window!=="undefined"&&window.matchMedia&&window.matchMedia("(hover: hover)").matches;var h=false;var g=null;var m=null;function y(){r.style.touchAction="none";if(!d){r.style.pointerEvents="auto";r.style.cursor="crosshair";return}var e=h||v.isDrawing;r.style.pointerEvents=e?"auto":"none";r.style.cursor=e?"crosshair":"default"}function S(){if(!t||!t.complete){return}var e=t.getBoundingClientRect();var n=e.width||t.naturalWidth;var i=e.height||t.naturalHeight;if(!n||!i){return}r.width=n;r.height=i;r.style.width=n+"px";r.style.height=i+"px";var a=r.getContext("2d");if(!a){return}a.clearRect(0,0,n,i);a.strokeStyle=u;a.fillStyle=u;a.lineCap="round";a.lineJoin="round";a.lineWidth=v.brushSize;// Keep existing mask aligned after responsive resizes (common on mobile).
if(v.lastMaskValue){var o=new Image;o.crossOrigin="anonymous";o.onload=function(){var e=r.getContext("2d");if(e&&r.width&&r.height){e.drawImage(o,0,0,r.width,r.height)}};o.src=v.lastMaskValue}}function D(){if(!r||!r.width||!r.height){return""}var e=document.createElement("canvas");e.width=r.width;e.height=r.height;return r.toDataURL("image/png")!==e.toDataURL("image/png")?r.toDataURL("image/png"):""}function E(){var e=D();v.lastMaskValue=e;if(n){n.value=e;if(typeof Event==="function"){// Some form libraries/watchers listen to `input`, not `change`.
// Also set `composed: true` to avoid event encapsulation issues.
n.dispatchEvent(new Event("input",{bubbles:true,composed:true}));n.dispatchEvent(new Event("change",{bubbles:true,composed:true}))}}if(l){l(e)}}function b(){var e=r.getContext("2d");if(!e||!r.width||!r.height){if(n){n.value=""}v.lastMaskValue="";if(l){l("")}return}e.clearRect(0,0,r.width,r.height);v.lastMaskValue="";E()}function L(e){e.strokeStyle=u;e.fillStyle=u;e.lineCap="round";e.lineJoin="round";e.lineWidth=v.brushSize}function M(e,n){if(!t||!t.complete){return false}if(v.isDrawing){return false}if(f&&!f()){return false}var i=r.getContext("2d");if(!i){return false}if(s&&r.width&&r.height){// Match course-builder behavior: each new lasso replaces previous one.
i.clearRect(0,0,r.width,r.height)}v.isDrawing=true;v.lastX=e;v.lastY=n;v.pathStarted=true;v.hasMoved=false;L(i);i.beginPath();i.moveTo(e,n);if(c){c()}return true}function k(e,t){if(!v.isDrawing){return false}var n=r.getContext("2d");if(!n){return false}L(n);if(!v.pathStarted){n.beginPath();n.moveTo(e,t);v.pathStarted=true}else{n.lineTo(e,t);// Draw a thin preview stroke so users can see the lasso while tracing.
n.stroke()}v.hasMoved=true;v.lastX=e;v.lastY=t;return true}function x(){if(!v.isDrawing){return false}v.isDrawing=false;v.activePointerId=null;var e=r.getContext("2d");if(!e){v.pathStarted=false;return false}if(v.pathStarted){L(e);if(v.hasMoved){e.closePath();e.fill()}else{// Single click/tap: paint a dot.
e.beginPath();e.arc(v.lastX,v.lastY,v.brushSize/2,0,Math.PI*2);e.fill()}}v.pathStarted=false;E();y();return true}function A(){if(!v.isDrawing){return false}v.isDrawing=false;v.pathStarted=false;v.hasMoved=false;v.activePointerId=null;S();y();return true}function C(e){if(!r.width||!r.height){S()}var t=r.getContext("2d");if(!t||!r.width||!r.height){return}t.clearRect(0,0,r.width,r.height);var n=function n(){if(typeof e==="function"){e(t,r.width,r.height)}};if(v.lastMaskValue){var i=new Image;i.crossOrigin="anonymous";i.onload=function(){t.drawImage(i,0,0,r.width,r.height);n()};i.src=v.lastMaskValue;return}n()}function I(){C(null)}function P(e){var t=r.getBoundingClientRect();var n=r.width/t.width;var i=r.height/t.height;var a=e.clientX;var o=e.clientY;return{x:Math.max(0,Math.min(r.width,(a-t.left)*n)),y:Math.max(0,Math.min(r.height,(o-t.top)*i))}}function q(e){if(e.pointerType==="mouse"&&e.button!==0){return}if(!t||!t.complete){return}e.preventDefault();var n=P(e);if(!M(n.x,n.y)){return}v.activePointerId=typeof e.pointerId==="number"?e.pointerId:null;if(typeof r.setPointerCapture==="function"&&v.activePointerId!==null){try{r.setPointerCapture(v.activePointerId)}catch(e){}}}function U(e){if(!v.isDrawing){return}if(v.activePointerId!==null&&e.pointerId!==v.activePointerId){return}e.preventDefault();var t=P(e);k(t.x,t.y)}function R(e){if(!v.isDrawing){return}if(v.activePointerId!==null&&e.pointerId!==v.activePointerId){return}e.preventDefault();if(v.activePointerId!==null&&typeof r.hasPointerCapture==="function"&&r.hasPointerCapture(v.activePointerId)&&typeof r.releasePointerCapture==="function"){try{r.releasePointerCapture(v.activePointerId)}catch(e){}}x()}var z=function e(){S()};function O(){r.addEventListener("pointerdown",q);r.addEventListener("pointermove",U);r.addEventListener("pointerup",R);r.addEventListener("pointercancel",R);r.addEventListener("pointerleave",R)}function T(){r.removeEventListener("pointerdown",q);r.removeEventListener("pointermove",U);r.removeEventListener("pointerup",R);r.removeEventListener("pointercancel",R);r.removeEventListener("pointerleave",R)}function B(){if(t&&t.complete){S()}if(t){t.addEventListener("load",S)}if(d){var n=function e(){h=true;y()};var a=function e(){h=false;y()};i.addEventListener("pointerenter",n);i.addEventListener("pointerleave",a);g=function e(){i.removeEventListener("pointerenter",n);i.removeEventListener("pointerleave",a)}}y();O();window.addEventListener("resize",z);m=new ResizeObserver(function(){S()});if(i){m.observe(i)}m.observe(t);// Optional: draw initial mask (e.g. saved instructor mask in course builder).
if(e.initialMaskUrl&&typeof e.initialMaskUrl==="string"&&e.initialMaskUrl.trim()!==""){v.lastMaskValue=e.initialMaskUrl;var o=new Image;o.crossOrigin="anonymous";o.onload=function(){var e=r.getContext("2d");if(e&&r.width&&r.height){e.drawImage(o,0,0,r.width,r.height);E()}};o.onerror=function(){};o.src=e.initialMaskUrl}}B();return{clear:function e(){b()},isDrawing:function e(){return v.isDrawing},startStrokeAt:function e(e,t){return M(e,t)},continueStrokeAt:function e(e,t){return k(e,t)},finishStroke:function e(){return x()},cancelStroke:function e(){return A()},renderWithOverlay:function e(e){C(e)},restoreSavedMask:function e(){I()},syncCanvas:function e(){S()},destroy:function e(){T();window.removeEventListener("resize",z);if(m){m.disconnect();m=null}if(g){g();g=null}if(t){t.removeEventListener("load",S)}}}};// CONCATENATED MODULE: ./assets/src/js/quiz-type/draw-image-question.js
/**
 * Frontend behaviour for "Draw on Image" quiz questions (Tutor Pro).
 *
 * Finds all `.tutor-draw-image-question` wrappers rendered by
 * Tutor Pro `templates/learning-area/quiz/questions/draw-image.php` and wires them using the shared
 * draw-on-image core from quiz-type/shared/draw-on-image.js.
 *
 * @package TutorPro
 * @since 4.0.0
 */var y=".tutor-draw-image-question";var S=".tutor-draw-image-wrapper";var D='img[id^="tutor-draw-image-bg-"]';var E='canvas[id^="tutor-draw-image-canvas-"]';var b='input[type="hidden"][id^="tutor-draw-image-mask-"]';var L=".tutor-draw-image-clear-button";var M=".tutor-draw-image-actions";var k=".tutor-quiz-a11y-live-region";var x="tutor-hidden";var A=".tutor-quiz-question";var C="tutor-quiz-question-header";var I="tutor-quiz-question-header--draw-image";var P="rgba(0, 0, 255, 0.65)";var q="_tutorDrawImageTeardown";// Expose for external use (e.g. other scripts) on TutorCore.
if(typeof window!=="undefined"){window.TutorCore=window.TutorCore||{};window.TutorCore.drawOnImage={init:m,DEFAULT_BRUSH_SIZE:p,DEFAULT_STROKE_STYLE:w}}function U(e){if(!e){return}if(typeof e[q]==="function"){e[q]()}var t=e.querySelector(D)||e.querySelector("img");var r=e.querySelector(E)||e.querySelector("canvas");var n=e.querySelector(b)||e.querySelector('input[type="hidden"]');var i=e.querySelector(S)||e;var a=e.querySelector(k);if(!r||!n){return}var s=e.querySelector(M);var f=e.closest(A);var v=null;if(f&&f.children){for(var d=0;d<f.children.length;d++){var g=f.children[d];if(g&&g.classList&&g.classList.contains(C)){v=g;break}}}if(!s&&v){s=v.querySelector(M)}var y=s&&s.querySelector(L)||e.querySelector(L);var U=false;var R={x:0,y:0};var z=false;var O=false;function T(e){o(a,e)}if(s&&v&&s.parentElement!==v){v.classList.add(I);v.appendChild(s)}function B(){if(!y){return}var e=typeof n.value==="string"&&n.value.trim()!=="";y.classList.toggle(x,!(U||e))}var V=m({image:t||null,canvas:r,hiddenInput:n,brushSize:p,strokeStyle:w,interactionRoot:i,activateOnHover:true,clearOnDrawStart:true,onDrawStart:function e(){U=true;z=false;B()},onMaskChange:function e(e){if(!(typeof e==="string"&&e.trim()!=="")){U=false}B()}});function F(){return{width:r.width||0,height:r.height||0}}function H(){var e=F();R={x:e.width/2,y:e.height/2}}function Y(){if(!z||V.isDrawing()){return}V.renderWithOverlay(function(e){e.fillStyle=P;e.beginPath();e.arc(R.x,R.y,5,0,Math.PI*2);e.fill()})}function _(){if(V.isDrawing()){V.finishStroke();z=true;Y();T("Selection completed.");return}if(V.startStrokeAt(R.x,R.y)){U=true;B();T("Drawing started. Use arrow keys to trace, then Space or Enter to finish.")}}function K(){O=true;z=false;U=true;B()}function W(){O=true;z=false;U=true;B()}function X(e){e.preventDefault();if(V.isDrawing()){V.cancelStroke()}V.clear();U=false;B();if(z){Y()}T("Selection cleared.")}function J(){var t=e.getAttribute("data-question-id")||"";var n=t?"tutor-draw-image-instruction-"+t:"";var i=a?a.id:"";u(r,[n,i].filter(Boolean));if(O){O=false;return}V.syncCanvas();H();z=true;Y()}function N(){z=false;if(V.isDrawing()){V.finishStroke()}}function j(e){var t=l(e);if(t===" "||t==="Spacebar"||t==="Enter"){e.preventDefault();_();return}if(t==="Escape"){if(!V.isDrawing()){return}e.preventDefault();V.cancelStroke();z=true;Y();T("Drawing cancelled.");return}if(t==="Backspace"||t==="Delete"){if(!V.isDrawing()){T("Nothing to cancel.");return}e.preventDefault();V.cancelStroke();z=true;Y();T("Drawing cancelled.");return}if(t==="c"||t==="C"){e.preventDefault();if(V.isDrawing()){V.cancelStroke()}V.clear();z=true;U=false;B();Y();T("Selection cleared.");return}if(!c(t)){return}e.preventDefault();var r=h(R,t,F(),{shiftKey:e.shiftKey});if(!r){return}R=r;if(V.isDrawing()){V.continueStrokeAt(R.x,R.y);return}z=true;Y()}r.addEventListener("mousedown",K);r.addEventListener("touchstart",W,{passive:true});r.addEventListener("focus",J);r.addEventListener("blur",N);r.addEventListener("keydown",j);if(y){y.addEventListener("click",X)}B();e[q]=function(){V.destroy();r.removeEventListener("mousedown",K);r.removeEventListener("touchstart",W);r.removeEventListener("focus",J);r.removeEventListener("blur",N);r.removeEventListener("keydown",j);if(y){y.removeEventListener("click",X)}if(s&&v&&s.parentElement===v){v.classList.remove(I);e.insertBefore(s,e.firstChild)}delete e[q]}}function R(){var e=document.querySelectorAll(y);if(!e||!e.length){return}for(var t=0;t<e.length;t++){U(e[t])}}// Course-builder iframe preview re-init (see Tutor core DrawImagePreview.tsx).
window._tutorDrawImageInitAll=function(){R()};if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",R)}else{R()}})();