(()=>{"use strict";var t={};// The module cache
var e={};// The require function
function i(a){// Check if module is in cache
var r=e[a];if(r!==undefined){return r.exports}// Create a new module (and put it into the cache)
var s=e[a]={exports:{}};// Execute the module function
t[a](s,s.exports,i);// Return the exports of the module
return s.exports}// webpack/runtime/rspack_version
(()=>{i.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{i.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./assets/src/js/quiz-type/shared/quiz-a11y.js
/**
 * Shared accessibility helpers for quiz interaction question types.
 *
 * Live announcements, aria-describedby wiring, and keyboard step utilities.
 *
 * @package TutorPro
 * @since 4.0.0
 */var a="tutor-quiz-a11y-live-region";var r="tutor-quiz-a11y-sr-only";/**
 * Ensure a polite live region exists (creates one when missing).
 *
 * @param {HTMLElement|null} container Parent to append the region under.
 * @param {string}           id       Unique element id.
 * @return {HTMLElement|null}
 */function s(t,e){if(!t||!e){return null}var i=document.getElementById(e);if(!i){i=document.createElement("div");i.id=e;i.className=a+" "+r;i.setAttribute("aria-live","polite");i.setAttribute("aria-atomic","true");i.setAttribute("role","status");t.appendChild(i)}return i}/**
 * Announce text through a polite live region.
 *
 * @param {HTMLElement|null} region  Live region element.
 * @param {string}           message Message to announce.
 * @return {void}
 */function n(t,e){if(!t||typeof e!=="string"){return}var i=e.trim();if(!i){return}t.textContent="";if(typeof window.requestAnimationFrame==="function"){window.requestAnimationFrame(function(){t.textContent=i});return}t.textContent=i}/**
 * Merge unique id references into aria-describedby.
 *
 * @param {HTMLElement|null} controlEl Focusable control.
 * @param {string[]}         ids       Element ids to describe the control.
 * @return {void}
 */function l(t,e){if(!t||!Array.isArray(e)||!e.length){return}var i=e.filter(function(t){return typeof t==="string"&&t.length>0&&document.getElementById(t)});if(!i.length){return}var a=(t.getAttribute("aria-describedby")||"").split(/\s+/).filter(Boolean);var r=[];var s={};for(var n=0;n<a.length;n++){if(!s[a[n]]){s[a[n]]=true;r.push(a[n])}}for(var l=0;l<i.length;l++){if(!s[i[l]]){s[i[l]]=true;r.push(i[l])}}t.setAttribute("aria-describedby",r.join(" "))}/**
 * Normalize a keyboard event key (with legacy keyCode fallback).
 *
 * @param {KeyboardEvent|null} event Keyboard event.
 * @return {string}
 */function h(t){if(!t){return""}if(t.key&&t.key!=="Unidentified"){return t.key}var e={37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",33:"PageUp",34:"PageDown",36:"Home",35:"End"};return e[t.keyCode]||""}/**
 * Whether a key should be handled exclusively by a quiz interaction control.
 *
 * @param {string} key Normalized key from normalizeKey().
 * @return {boolean}
 */function u(t){return t==="ArrowLeft"||t==="ArrowRight"||t==="ArrowUp"||t==="ArrowDown"||t==="PageUp"||t==="PageDown"||t==="Home"||t==="End"}/**
 * Resolve the next slider value from a keyboard step key.
 *
 * @param {number} currentValue Current slider value.
 * @param {string} key          Normalized key.
 * @param {{ step: number, largeStep?: number, min: number, max: number }} options Step config.
 * @return {number|null} Next value, or null when the key is not handled.
 */function o(t,e,i){var a=typeof i.step==="number"&&i.step>0?i.step:1;var r=typeof i.largeStep==="number"&&i.largeStep>0?i.largeStep:a*10;var s=typeof i.min==="number"?i.min:0;var n=typeof i.max==="number"?i.max:100;if(e==="ArrowRight"||e==="ArrowUp"){return t+a}if(e==="ArrowLeft"||e==="ArrowDown"){return t-a}if(e==="PageUp"){return t+r}if(e==="PageDown"){return t-r}if(e==="Home"){return s}if(e==="End"){return n}return null}/**
 * Whether a key moves a grid cursor.
 *
 * @param {string} key Normalized key.
 * @return {boolean}
 */function c(t){return t==="ArrowLeft"||t==="ArrowRight"||t==="ArrowUp"||t==="ArrowDown"}/**
 * Move an integer grid cursor by one unit using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current cursor position.
 * @param {string}                    key    Normalized key.
 * @param {{ min: number, max: number }} bounds Axis bounds.
 * @return {{ x: number, y: number }|null} Updated cursor or null when key is not handled.
 */function d(t,e,i){if(!t||!i){return null}var a=i.min;var r=i.max;var s=t.x;var n=t.y;if(e==="ArrowLeft"){s-=1}else if(e==="ArrowRight"){s+=1}else if(e==="ArrowUp"){n+=1}else if(e==="ArrowDown"){n-=1}else{return null}s=Math.max(a,Math.min(r,s));n=Math.max(a,Math.min(r,n));return{x:s,y:n}}/**
 * Move a normalized (0–1) cursor using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function f(t,e,i){if(!t||!c(e)){return null}var a=i||{};var r=typeof a.step==="number"&&a.step>0?a.step:.01;var s=typeof a.largeStep==="number"&&a.largeStep>0?a.largeStep:.05;var n=a.shiftKey?s:r;var l=t.x;var h=t.y;if(e==="ArrowLeft"){l-=n}else if(e==="ArrowRight"){l+=n}else if(e==="ArrowUp"){h-=n}else if(e==="ArrowDown"){h+=n}else{return null}l=Math.max(0,Math.min(1,l));h=Math.max(0,Math.min(1,h));return{x:l,y:h}}/**
 * Move a pixel cursor within canvas bounds using arrow keys.
 *
 * @param {{ x: number, y: number }} cursor Current position.
 * @param {string}                    key    Normalized key.
 * @param {{ width: number, height: number }} bounds Canvas size in pixels.
 * @param {{ step?: number, largeStep?: number, shiftKey?: boolean }} options Step config.
 * @return {{ x: number, y: number }|null}
 */function m(t,e,i,a){if(!t||!i||!c(e)){return null}var r=a||{};var s=typeof r.step==="number"&&r.step>0?r.step:5;var n=typeof r.largeStep==="number"&&r.largeStep>0?r.largeStep:20;var l=r.shiftKey?n:s;var h=Math.max(0,i.width);var u=Math.max(0,i.height);var o=t.x;var d=t.y;if(e==="ArrowLeft"){o-=l}else if(e==="ArrowRight"){o+=l}else if(e==="ArrowUp"){d-=l}else if(e==="ArrowDown"){d+=l}else{return null}o=Math.max(0,Math.min(h,o));d=Math.max(0,Math.min(u,d));return{x:o,y:d}}/**
 * Format normalized pin coordinates for screen-reader announcements.
 *
 * @param {number} x Horizontal position (0–1).
 * @param {number} y Vertical position (0–1).
 * @return {string}
 */function v(t,e){var i=Math.max(0,Math.min(1,typeof t==="number"?t:parseFloat(t,10)||0));var a=Math.max(0,Math.min(1,typeof e==="number"?e:parseFloat(e,10)||0));return i.toFixed(2)+", "+a.toFixed(2)};// CONCATENATED MODULE: ./assets/src/js/quiz-type/scale-question.js
/**
 * Frontend behaviour for "Scale" quiz questions (Tutor Pro).
 *
 * Finds all .tutor-scale-question wrappers and provides an interactive scale slider.
 * Student drags the scale to select a value; the selected value is written to
 * hidden input [answers][scale][value].
 *
 * @package TutorPro
 * @since 4.0.0
 */var p=".tutor-scale-question";var b=".tutor-scale-container";var y=".tutor-scale";var g=".tutor-scale-bubble-value";var w='input[id^="tutor-scale-value-"]';var x=".quiz-attempt-single-question";var M=(()=>{var t=new Set;var e=false;function i(e){t.forEach(t=>{t.handleDragMoveBound(e)})}function a(e){t.forEach(t=>{t.handleDragEndBound(e)})}function r(e){t.forEach(t=>{t.handleDragMoveBound(e)})}function s(e){t.forEach(t=>{t.handleDragEndBound(e)})}function n(){if(e){return}document.addEventListener("mousemove",i);document.addEventListener("mouseup",a);document.addEventListener("touchmove",r,{passive:false});document.addEventListener("touchend",s);e=true}function l(){if(!e||t.size>0){return}document.removeEventListener("mousemove",i);document.removeEventListener("mouseup",a);document.removeEventListener("touchmove",r);document.removeEventListener("touchend",s);e=false}return{register(e){t.add(e);n()},unregister(e){t.delete(e);l()}}})();/**
 * Interactive Scale Slider Component
 * A high-fidelity slider where users drag the scale, not the bubble
 */class V{init(){if(!this.scaleContainer||!this.scale||!this.bubbleValue||!this.input){return}this.setupAccessibility();this.generateTicks();this.updateValue(this.currentValue);this.setupLayoutSync();this.setupVisibilitySync();if(!this.readOnly||this.summaryMode){this.attachEventListeners()}// Ensure bubble is positioned correctly on initialization
setTimeout(()=>{this.updateBubblePosition()},50)}setupAccessibility(){if(!this.scaleContainer){return}this.scaleContainer.setAttribute("role","slider");this.scaleContainer.setAttribute("tabindex","0");this.scaleContainer.setAttribute("aria-valuemin",String(this.min));this.scaleContainer.setAttribute("aria-valuemax",String(this.max));this.updateAriaValue(this.currentValue);var t=this.wrapper.getAttribute("data-question-id")||"";var e=t?"tutor-scale-instruction-"+t:"";l(this.scaleContainer,e?[e]:[])}updateAriaValue(t){if(!this.scaleContainer){return}var e=this.formatValue(t);this.scaleContainer.setAttribute("aria-valuenow",String(t));this.scaleContainer.setAttribute("aria-valuetext",e)}announceValue(t,e){if(!this.liveRegion){return}var i=this.formatValue(t);var a=e?e+" "+i:i;n(this.liveRegion,a)}setupLayoutSync(){if(!this.scaleContainer||typeof window==="undefined"){return}// Keep slider/value alignment correct when question blocks become visible
// after initial hidden render (single-page quiz with multiple questions).
this.lastKnownContainerWidth=this.scaleContainer.offsetWidth||0;var t=()=>{var t=this.scaleContainer?this.scaleContainer.offsetWidth||0:0;if(!t||t===this.lastKnownContainerWidth){return}this.lastKnownContainerWidth=t;this.updateValue(this.currentValue)};this.layoutResizeObserver=new ResizeObserver(()=>{if(this.layoutSyncRafId){window.cancelAnimationFrame(this.layoutSyncRafId)}this.layoutSyncRafId=window.requestAnimationFrame(t)});this.layoutResizeObserver.observe(this.scaleContainer)}setupVisibilitySync(){if(!this.wrapper||typeof window==="undefined"){return}var t=()=>{if(!this.wrapper||!this.scaleContainer){return}var t=this.wrapper.offsetParent!==null||this.wrapper.getClientRects().length>0;var e=this.scaleContainer.offsetWidth>0;if(!t||!e){return}this.updateValue(this.currentValue)};if(typeof IntersectionObserver==="function"){this.visibilityObserver=new IntersectionObserver(e=>{for(var i=0;i<e.length;i++){if(!e[i].isIntersecting){continue}if(typeof window.requestAnimationFrame==="function"){window.requestAnimationFrame(t)}else{t()}}},{threshold:0});this.visibilityObserver.observe(this.wrapper);return}// Fallback for older environments.
this.visibilitySyncIntervalId=window.setInterval(t,300)}generateTicks(){// Calculate the range we need to cover
var t=this.max-this.min;var e=t*this.pxPerUnit;// Clear existing ticks
this.scale.innerHTML="";// Create a container for all ticks
var i=document.createElement("div");i.className="ticks-container";i.style.position="relative";i.style.width=e+"px";i.style.height="100%";// Optimization: Use windowing for large ranges
var a=t>1e3;if(a){// Store tick generation parameters for dynamic rendering
this.ticksContainer=i;this.windowedTickNodeMap=new Map;this.visibleTickKeys=new Set;this.scale.appendChild(i);this.scale.style.width=e+"px";this.renderVisibleTicks()}else{// Generate all ticks for smaller ranges
this.generateTicksInRange(this.min,this.max,i);this.scale.appendChild(i);this.scale.style.width=e+"px"}}generateTicksInRange(t,e,i){// Generate tick marks within a specific range
for(var a=t;a<=e;a+=this.step){// Round value to avoid floating point precision issues
var r=this.precision>0?parseFloat(a.toFixed(this.precision)):Math.round(a);// Determine tick type hierarchy using more reliable modulo check.
// Always show labels at range endpoints: modulo-based majors skip min when
// min is not a multiple of labelEvery (e.g. min=1, labelEvery=10 → first label was 10).
var s=Math.abs(r%this.labelEvery);var n=Math.abs(r%this.minorTickEvery);var l=Math.abs(r-this.min)<1e-6||Math.abs(r-this.max)<1e-6;var h=l||s<1e-4||Math.abs(s-this.labelEvery)<1e-4;var u=!h&&(n<1e-4||Math.abs(n-this.minorTickEvery)<1e-4);var o=!h&&!u;var c=document.createElement("div");c.className="tick";c.dataset.value=r;if(this.tickMatchesReference(r,this.correctValue)){c.classList.add("tick-correct")}if(this.tickMatchesReference(r,this.selectedValue)){c.classList.add("tick-selected")}if(h){c.classList.add("major");// Add label for major ticks
var d=document.createElement("div");d.className="tick-label";d.textContent=this.formatValue(r);c.appendChild(d)}else if(u){c.classList.add("minor")}else if(o){c.classList.add("micro")}// Add tick line
var f=document.createElement("div");f.className="tick-line";c.appendChild(f);// Position the tick
var m=(r-this.min)*this.pxPerUnit;c.style.left=m+"px";i.appendChild(c)}}getTickMeta(t){var e=Math.abs(t%this.labelEvery);var i=Math.abs(t%this.minorTickEvery);var a=Math.abs(t-this.min)<1e-6||Math.abs(t-this.max)<1e-6;var r=a||e<1e-4||Math.abs(e-this.labelEvery)<1e-4;var s=!r&&(i<1e-4||Math.abs(i-this.minorTickEvery)<1e-4);return{isMajor:r,isMinor:s,isMicro:!r&&!s}}ensureTickNode(t){var e=String(t);var i=this.windowedTickNodeMap.get(e);if(!i){i=document.createElement("div");i.className="tick";var a=document.createElement("div");a.className="tick-line";i.appendChild(a);this.windowedTickNodeMap.set(e,i)}this.updateTickNode(i,t);return i}updateTickNode(t,e){if(!t){return}var i=this.getTickMeta(e);t.dataset.value=String(e);t.classList.remove("major","minor","micro","tick-correct","tick-selected");if(i.isMajor){t.classList.add("major")}else if(i.isMinor){t.classList.add("minor")}else{t.classList.add("micro")}if(this.tickMatchesReference(e,this.correctValue)){t.classList.add("tick-correct")}if(this.tickMatchesReference(e,this.selectedValue)){t.classList.add("tick-selected")}var a=t.querySelector(".tick-label");if(i.isMajor){if(!a){a=document.createElement("div");a.className="tick-label";t.insertBefore(a,t.firstChild)}a.textContent=this.formatValue(e)}else if(a){a.remove()}var r=(e-this.min)*this.pxPerUnit;t.style.left=r+"px"}renderVisibleTicks(){if(!this.ticksContainer||typeof window.requestAnimationFrame!=="function"){this.renderVisibleTicksNow();return}if(this.tickRenderRafId){return}this.tickRenderRafId=window.requestAnimationFrame(()=>{this.tickRenderRafId=null;this.renderVisibleTicksNow()})}renderVisibleTicksNow(){// Windowing technique: only render ticks in visible area
if(!this.ticksContainer){return}var t=this.scaleContainer.offsetWidth;// Calculate visible range based on current position
var e=-this.currentTranslateX-this.windowBuffer;var i=-this.currentTranslateX+t+this.windowBuffer;// Convert pixel positions to values
var a=Math.floor(this.min+e/this.pxPerUnit);var r=Math.ceil(this.min+i/this.pxPerUnit);// Clamp to actual range
var s=Math.max(this.min,a);var n=Math.min(this.max,r);var l=this.step>0?this.step:1;var h=Math.ceil((s-this.min)/l);var u=Math.floor((n-this.min)/l);var o=new Set;for(var c=h;c<=u;c++){var d=this.min+c*l;d=this.precision>0?parseFloat(d.toFixed(this.precision)):Math.round(d);if(d<this.min-1e-9||d>this.max+1e-9){continue}var f=this.ensureTickNode(d);var m=String(d);o.add(m);if(f.parentElement!==this.ticksContainer){this.ticksContainer.appendChild(f)}}this.visibleTickKeys.forEach(t=>{if(o.has(t)){return}var e=this.windowedTickNodeMap.get(t);if(e&&e.parentElement===this.ticksContainer){this.ticksContainer.removeChild(e)}});this.visibleTickKeys=o}formatValue(t){return this.precision>0?t.toFixed(this.precision):Math.round(t).toString()}/**
     * Snap a reference value to the same step grid as generated ticks (avoids float mismatch vs strict ===).
     *
     * @param {number} ref Raw config value (e.g. correct or selected answer).
     * @return {number} Value aligned to step/precision.
     */snapToTickGrid(t){var e=Math.round(t/this.step)*this.step;if(this.precision>0){e=parseFloat(e.toFixed(this.precision))}return e}/**
     * Whether a tick's rounded value matches a reference (correct/selected) for styling.
     *
     * @param {number} roundedValue Tick value from the generator loop.
     * @param {number|null|undefined} ref Reference from config.
     * @return {boolean} True if this tick should show correct/selected styling.
     */tickMatchesReference(t,e){if(e===null||e===undefined||typeof e!=="number"||isNaN(e)){return false}var i=this.snapToTickGrid(e);return Math.abs(t-i)<1e-9}updateValue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:false;// Clamp value to min/max boundaries
t=Math.max(this.min,Math.min(this.max,t));// Round to nearest step with precision
if(this.precision>0){t=Math.round(t/this.step)*this.step;t=parseFloat(t.toFixed(this.precision))}else{t=Math.round(t/this.step)*this.step}this.currentValue=t;// Update bubble display
this.bubbleValue.textContent=this.formatValue(t);this.updateAriaValue(t);// Keep quiz progress aligned with real interaction: hidden input stays empty until the learner finishes a drag (see handleDragEnd).
this.input.value=this.userInteracted?JSON.stringify({value:t}):"";try{var i=new Event("input",{bubbles:true});this.input.dispatchEvent(i)}catch(t){// Ignore if dispatch fails; form state will still have DOM value.
}// Check if at boundaries
this.atMinBoundary=t<=this.min;this.atMaxBoundary=t>=this.max;// Update boundary visual feedback
if(!e){this.updateBoundaryFeedback()}// Calculate the translation needed for the scale
var a=this.scaleContainer.offsetWidth;var r=a/2;// Position formula: translateX = centerOffset - (value - min) * pxPerUnit
var s=(t-this.min)*this.pxPerUnit;this.currentTranslateX=r-s;// Apply transform to scale
this.scale.style.transform="translateX(".concat(this.currentTranslateX,"px)");// Update bubble position to align with the current value
this.updateBubblePosition();// Update visible ticks if using windowing
if(this.ticksContainer&&this.max-this.min>1e3){this.renderVisibleTicks()}}updateBoundaryFeedback(){// Add visual feedback when hitting boundaries
if(this.atMinBoundary){this.scaleContainer.classList.add("at-min-boundary")}else{this.scaleContainer.classList.remove("at-min-boundary")}if(this.atMaxBoundary){this.scaleContainer.classList.add("at-max-boundary")}else{this.scaleContainer.classList.remove("at-max-boundary")}}updateBubblePosition(){if(this.summaryMode){this.updateSummaryBubbleVisibility()}}/**
     * Value shown in the attempt-details bubble (matches PHP: correct answer, else student).
     *
     * @return {number|null} Reference value or null when neither is set.
     */getBubbleReferenceValue(){if(this.correctValue!==null&&this.correctValue!==undefined&&typeof this.correctValue==="number"&&!isNaN(this.correctValue)){return this.correctValue}if(this.selectedValue!==null&&this.selectedValue!==undefined&&typeof this.selectedValue==="number"&&!isNaN(this.selectedValue)){return this.selectedValue}return null}/**
     * Whether the tick for the bubble reference is inside the scale viewport (after panning).
     *
     * @return {boolean} True if the bubble should stay visible.
     */isBubbleReferenceTickInViewport(){var t=this.getBubbleReferenceValue();if(t===null){return true}if(t<this.min||t>this.max){return false}var e=this.snapToTickGrid(Math.max(this.min,Math.min(this.max,t)));var i=this.currentTranslateX+(e-this.min)*this.pxPerUnit;var a=this.scaleContainer.offsetWidth||0;var r=10;return i+r>=0&&i-r<=a}/**
     * Hide the summary bubble when the reference tick is scrolled out of the visible track.
     */updateSummaryBubbleVisibility(){if(!this.summaryMode||!this.bubbleValue||!this.bubbleValue.parentElement||!this.scaleContainer){return}var t=this.bubbleValue.parentElement;if(this.isBubbleReferenceTickInViewport()){t.classList.remove("tutor-scale-bubble-hidden")}else{t.classList.add("tutor-scale-bubble-hidden")}}attachEventListeners(){// Mouse events
this.scaleContainer.addEventListener("mousedown",this.handleDragStartBound);// Touch events
this.scaleContainer.addEventListener("touchstart",this.handleDragStartBound,{passive:false});this.scaleContainer.addEventListener("keydown",this.handleKeyDownBound);M.register(this);// Prevent default drag behavior
this.scaleContainer.addEventListener("dragstart",this.handleDragPreventDefault);// Window resize
window.addEventListener("resize",this.handleResizeBound)}destroy(){if(this.layoutResizeObserver&&typeof this.layoutResizeObserver.disconnect==="function"){this.layoutResizeObserver.disconnect()}if(this.visibilityObserver&&typeof this.visibilityObserver.disconnect==="function"){this.visibilityObserver.disconnect()}if(this.visibilitySyncIntervalId){window.clearInterval(this.visibilitySyncIntervalId);this.visibilitySyncIntervalId=null}if(this.layoutSyncRafId){window.cancelAnimationFrame(this.layoutSyncRafId);this.layoutSyncRafId=null}if(this.tickRenderRafId){window.cancelAnimationFrame(this.tickRenderRafId);this.tickRenderRafId=null}if(this.scaleContainer){this.scaleContainer.removeEventListener("mousedown",this.handleDragStartBound);this.scaleContainer.removeEventListener("touchstart",this.handleDragStartBound);this.scaleContainer.removeEventListener("keydown",this.handleKeyDownBound);this.scaleContainer.removeEventListener("dragstart",this.handleDragPreventDefault)}M.unregister(this);window.removeEventListener("resize",this.handleResizeBound)}handleDragStart(t){this.isDragging=true;this.scale.classList.add("dragging");this.scale.classList.remove("snapping");var e=t.type==="touchstart"?t.touches[0].clientX:t.clientX;this.startX=e;this.startTranslateX=this.currentTranslateX;this.lastX=e;this.lastTime=Date.now();this.velocity=0;// Track bubble offset separately in summary mode so it can move with the scale.
if(this.summaryMode&&this.bubbleValue&&this.bubbleValue.parentElement){var i=this.bubbleValue.parentElement;var a=window.getComputedStyle?window.getComputedStyle(i):i.style;var r=parseFloat(a.marginLeft||"0");this.summaryBubbleStartMarginLeft=isNaN(r)?0:r}if(t.type==="touchstart"){t.preventDefault()}}handleDragMove(t){if(!this.isDragging)return;var e=t.type==="touchmove"?t.touches[0].clientX:t.clientX;var i=e-this.startX;// Summary mode: pan the scale horizontally without changing value or bubble.
if(this.summaryMode){var a=this.startTranslateX+i;var r=this.scaleContainer.offsetWidth;var s=r/2;var n=(this.max-this.min)*this.pxPerUnit;var l=s-n;// max value under center marker.
var h=s;// min value under center marker.
a=Math.max(l,Math.min(h,a));this.currentTranslateX=a;this.scale.style.transform="translateX(".concat(this.currentTranslateX,"px)");// Move the bubble horizontally with the scale so it stays over the same tick.
if(this.bubbleValue&&this.bubbleValue.parentElement&&typeof this.summaryBubbleStartMarginLeft==="number"){var u=this.bubbleValue.parentElement;var o=this.currentTranslateX-this.startTranslateX;u.style.marginLeft=this.summaryBubbleStartMarginLeft+o+"px"}this.updateSummaryBubbleVisibility();if(t.type==="touchmove"){t.preventDefault()}return}// Interactive mode (normal quiz attempt).
// Calculate velocity for momentum
var c=Date.now();var d=c-this.lastTime;if(d>0){this.velocity=(e-this.lastX)/d}this.lastX=e;this.lastTime=c;// Calculate proposed translate position
var f=this.startTranslateX+i;// Calculate the corresponding value
var m=this.scaleContainer.offsetWidth;var v=m/2;var p=this.min+(v-f)/this.pxPerUnit;// Apply hard clamping at boundaries
var b=Math.max(this.min,Math.min(this.max,p));// **FIX: Snap to step during drag to match displayed value**
if(this.precision>0){b=Math.round(b/this.step)*this.step;b=parseFloat(b.toFixed(this.precision))}else{b=Math.round(b/this.step)*this.step}// **Recalculate translateX based on snapped value**
var y=(b-this.min)*this.pxPerUnit;f=v-y;// If we hit a boundary, physically stop the scale from moving further
if(b===this.min&&p<this.min){f=v;this.velocity=0}else if(b===this.max&&p>this.max){var g=(this.max-this.min)*this.pxPerUnit;f=v-g;this.velocity=0}this.currentTranslateX=f;this.currentValue=b;// Check boundaries
this.atMinBoundary=b<=this.min;this.atMaxBoundary=b>=this.max;this.updateBoundaryFeedback();// Update display
this.bubbleValue.textContent=this.formatValue(b);this.scale.style.transform="translateX(".concat(this.currentTranslateX,"px)");// Update bubble position during drag
this.updateBubblePosition();// Update visible ticks if using windowing
if(this.ticksContainer&&this.max-this.min>1e3){this.renderVisibleTicks()}if(t.type==="touchmove"){t.preventDefault()}}handleDragEnd(t){if(!this.isDragging)return;// In summary mode we only pan the scale; do not snap or update value/bubble.
if(this.summaryMode){this.isDragging=false;this.scale.classList.remove("dragging");this.updateSummaryBubbleVisibility();return}this.isDragging=false;this.scale.classList.remove("dragging");this.scale.classList.add("snapping");// Apply momentum (optional - for a premium feel)
var e=this.currentValue-this.velocity*100;// Clamp momentum to boundaries
e=Math.max(this.min,Math.min(this.max,e));// Snap to nearest step with precision
var i;if(this.precision>0){i=Math.round(e/this.step)*this.step;i=parseFloat(i.toFixed(this.precision))}else{i=Math.round(e/this.step)*this.step}// Final boundary check
i=Math.max(this.min,Math.min(this.max,i));// Animate to snapped value
setTimeout(()=>{this.userInteracted=true;this.updateValue(i);// Remove snapping class after animation
setTimeout(()=>{this.scale.classList.remove("snapping")},300)},50)}handleKeyDown(t){if(this.readOnly||this.summaryMode){return}var e=h(t);if(!u(e)){return}t.preventDefault();var i=o(this.currentValue,e,{step:this.step,largeStep:this.largeStep,min:this.min,max:this.max});if(i===null){return}var a=Math.max(this.min,Math.min(this.max,i));this.userInteracted=true;this.updateValue(a);this.announceValue(a,"Selected value")}// Public API
getValue(){return this.currentValue}setValue(t){this.updateValue(t)}constructor(t,e={}){this.wrapper=t;// Configuration
this.min=e.min!==undefined?e.min:0;this.max=e.max!==undefined?e.max:100;this.defaultValue=e.defaultValue!==undefined?e.defaultValue:(this.min+this.max)/2;this.step=e.step!==undefined?e.step:1;this.pxPerUnit=e.pxPerUnit!==undefined?e.pxPerUnit:10;this.labelEvery=e.labelEvery!==undefined?e.labelEvery:Math.max(1,(this.max-this.min)/10);this.minorTickEvery=e.minorTickEvery!==undefined?e.minorTickEvery:Math.max(1,(this.max-this.min)/50);this.precision=e.precision!==undefined?e.precision:0;this.windowBuffer=e.windowBuffer||200;this.readOnly=!!e.readOnly;this.correctValue=e.correctValue!==undefined?e.correctValue:null;this.selectedValue=e.selectedValue!==undefined?e.selectedValue:null;this.summaryMode=!!e.summaryMode;// State
this.currentValue=Math.max(this.min,Math.min(this.max,this.defaultValue));this.isDragging=false;this.startX=0;this.startTranslateX=0;this.currentTranslateX=0;this.velocity=0;this.lastX=0;this.lastTime=0;this.atMinBoundary=false;this.atMaxBoundary=false;this.userInteracted=false;this.windowedTickNodeMap=new Map;this.visibleTickKeys=new Set;this.tickRenderRafId=null;// Keep stable listener references for proper cleanup.
this.handleDragStartBound=this.handleDragStart.bind(this);this.handleDragMoveBound=this.handleDragMove.bind(this);this.handleDragEndBound=this.handleDragEnd.bind(this);this.handleKeyDownBound=this.handleKeyDown.bind(this);this.handleDragPreventDefault=t=>t.preventDefault();this.handleResizeBound=()=>{this.updateValue(this.currentValue);// Ensure bubble repositions correctly after resize.
setTimeout(()=>{this.updateBubblePosition()},100)};// DOM Elements
this.scaleContainer=t.querySelector(b);this.scale=t.querySelector(y);this.bubbleValue=t.querySelector(g);this.input=t.querySelector(w);this.liveRegion=t.querySelector(".tutor-quiz-a11y-live-region");this.largeStep=Math.max(this.step,Math.round((this.max-this.min)/10/this.step)*this.step||this.step);// Initialize
this.init()}}function k(t,e){if(!t){return}if(e&&t.getAttribute("data-tutor-scale-init")==="1"){var i=t._tutorScaleSlider;if(i&&typeof i.updateValue==="function"){i.updateValue(i.currentValue);// Re-run once on next frame to ensure layout-dependent width is final.
if(typeof window.requestAnimationFrame==="function"){window.requestAnimationFrame(()=>{i.updateValue(i.currentValue)})}}return}// Get scale configuration from data attribute
var a=t.getAttribute("data-scale-config");var r={};if(a){try{r=JSON.parse(a)}catch(t){console.warn("Failed to parse scale config:",t)}}// Destroy prior instance before creating a new one for the same wrapper.
if(t._tutorScaleSlider&&typeof t._tutorScaleSlider.destroy==="function"){t._tutorScaleSlider.destroy()}// Create and initialize the scale slider
var s=new V(t,r);// Store reference for potential future use
t._tutorScaleSlider=s;t.setAttribute("data-tutor-scale-init","1")}function S(t){var e=document.querySelectorAll(p);if(!e||!e.length){return}for(var i=0;i<e.length;i++){k(e[i],t)}}function C(t){if(!t)return false;var e=window.getComputedStyle?window.getComputedStyle(t):t.style;return e&&e.display!=="none"}function E(){S(false);// When a question block becomes visible, reinitialize the scale
var t=document.getElementById("tutor-quiz-attempt-questions-wrap");if(t&&!t._tutorScaleObserving){t._tutorScaleObserving=true;var e=new MutationObserver(function(){var e=t.querySelectorAll(x);for(var i=0;i<e.length;i++){if(!C(e[i]))continue;var a=e[i].querySelector(p);if(a&&a.getAttribute("data-tutor-scale-init")==="1"){var r=a._tutorScaleSlider;if(r&&typeof r.updateValue==="function"){r.updateValue(r.currentValue)}}}});e.observe(t,{attributes:true,attributeFilter:["style"],subtree:true});// Redraw after a short delay so scale is drawn when question was hidden on load
setTimeout(function(){S(true)},100);setTimeout(function(){S(true)},500)}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",E)}else{E()}window.addEventListener("load",function(){S(true)})})();