"use strict";(self["webpackChunktutor_pro"]=self["webpackChunktutor_pro"]||[]).push([["421"],{4634:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(8491);/* import */var o=/*#__PURE__*/r.n(n);/* import */var a=r(3988);/* import */var i=/*#__PURE__*/r.n(a);// Imports
var s=i()(o());// Module
s.push([e.id,`/* Variables declaration */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */

  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */

  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */

  --rdp-dropdown-gap: 0.5rem; /* The gap between the dropdowns used in the month captons. */

  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */

  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */

  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit; /* The color of the range text. */

  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(
    var(--rdp-gradient-direction),
    transparent 50%,
    var(--rdp-range_middle-background-color) 50%
  ); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */

  --rdp-range_end-background: linear-gradient(
    var(--rdp-gradient-direction),
    var(--rdp-range_middle-background-color) 50%,
    transparent 50%
  ); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white; /* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */

  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */

  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  /* biome-ignore lint/suspicious/noDuplicateProperties: backward compatibility */
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled:not(.rdp-selected) {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* export default */const l=s},3988:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,o,a){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){i[l]=true}}}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);if(n&&i[d[0]]){continue}if(typeof a!=="undefined"){if(typeof d[5]==="undefined"){d[5]=a}else{d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}");d[5]=a}}if(r){if(!d[2]){d[2]=r}else{d[1]="@media ".concat(d[2]," {").concat(d[1],"}");d[2]=r}}if(o){if(!d[4]){d[4]="".concat(o)}else{d[1]="@supports (".concat(d[4],") {").concat(d[1],"}");d[4]=o}}t.push(d)}};return t}},8491:function(e){e.exports=function(e){return e[1]}},6615:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var a={};var i=[];for(var s=0;s<e.length;s++){var l=e[s];var c=n.base?l[0]+n.base:l[0];var d=a[c]||0;var u="".concat(c," ").concat(d);a[c]=d+1;var f=r(u);var p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var h=o(p,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,o){o=o||{};e=e||[];var a=n(e,o);return function e(e){e=e||[];for(var i=0;i<a.length;i++){var s=a[i];var l=r(s);t[l].references--}var c=n(e,o);for(var d=0;d<a.length;d++){var u=a[d];var f=r(u);if(t[f].references===0){t[f].updater();t.splice(f,1)}}a=c}}},8840:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},9619:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},879:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},8612:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var o=typeof r.layer!=="undefined";if(o){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(o){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var a=r.sourceMap;if(a&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},1536:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},875:function(e,t,r){t.__esModule=true;t["default"]=v;var n=i(r(4489));var o=i(r(7261));var a=i(r(8675));function i(e){return e&&e.__esModule?e:{"default":e}}var s=/^#[a-fA-F0-9]{6}$/;var l=/^#[a-fA-F0-9]{8}$/;var c=/^#[a-fA-F0-9]{3}$/;var d=/^#[a-fA-F0-9]{4}$/;var u=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;var f=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;var p=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;var h=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */function v(e){if(typeof e!=="string"){throw new a["default"](3)}var t=(0,o["default"])(e);if(t.match(s)){return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)}}if(t.match(l)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(c)){return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)}}if(t.match(d)){var i=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:i}}var v=u.exec(t);if(v){return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var g=f.exec(t.substring(0,50));if(g){return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}var m=p.exec(t);if(m){var b=parseInt(""+m[1],10);var y=parseInt(""+m[2],10)/100;var _=parseInt(""+m[3],10)/100;var w="rgb("+(0,n["default"])(b,y,_)+")";var x=u.exec(w);if(!x){throw new a["default"](4,t,w)}return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10)}}var A=h.exec(t.substring(0,50));if(A){var k=parseInt(""+A[1],10);var Y=parseInt(""+A[2],10)/100;var I=parseInt(""+A[3],10)/100;var D="rgb("+(0,n["default"])(k,Y,I)+")";var C=u.exec(D);if(!C){throw new a["default"](4,t,D)}return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+A[4])>1?parseFloat(""+A[4])/100:parseFloat(""+A[4])}}throw new a["default"](5)}e.exports=t["default"]},4299:function(e,t,r){t.__esModule=true;t["default"]=s;var n=i(r(2084));var o=i(r(3355));var a=i(r(8675));function i(e){return e&&e.__esModule?e:{"default":e}}/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */function s(e,t,r){if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"){return(0,n["default"])("#"+(0,o["default"])(e)+(0,o["default"])(t)+(0,o["default"])(r))}else if(typeof e==="object"&&t===undefined&&r===undefined){return(0,n["default"])("#"+(0,o["default"])(e.red)+(0,o["default"])(e.green)+(0,o["default"])(e.blue))}throw new a["default"](6)}e.exports=t["default"]},8212:function(e,t,r){t.__esModule=true;t["default"]=s;var n=i(r(875));var o=i(r(4299));var a=i(r(8675));function i(e){return e&&e.__esModule?e:{"default":e}}/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */function s(e,t,r,i){if(typeof e==="string"&&typeof t==="number"){var s=(0,n["default"])(e);return"rgba("+s.red+","+s.green+","+s.blue+","+t+")"}else if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"&&typeof i==="number"){return i>=1?(0,o["default"])(e,t,r):"rgba("+e+","+t+","+r+","+i+")"}else if(typeof e==="object"&&t===undefined&&r===undefined&&i===undefined){return e.alpha>=1?(0,o["default"])(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new a["default"](7)}e.exports=t["default"]},8675:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function n(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;l(e,t)}function o(e){var t=typeof Map==="function"?new Map:undefined;o=function e(e){if(e===null||!s(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof t!=="undefined"){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,c(this).constructor)}r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return l(r,e)};return o(e)}function a(e,t,r){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&l(o,r.prototype),o}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(i=function t(){return!!e})()}function s(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(t){return typeof e==="function"}}function l(e,t){l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(e,t){e.__proto__=t;return e};return l(e,t)}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(e){return e.__proto__||Object.getPrototypeOf(e)};return c(e)}// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */var d=/* unused pure expression or super */null&&{"1":"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n","2":"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n","3":"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n","4":"Couldn't generate valid rgb string from %s, it returned %s.\n\n","5":"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n","6":"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n","7":"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n","8":"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n","9":"Please provide a number of steps to the modularScale helper.\n\n","10":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","11":'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',"12":'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',"13":'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',"14":'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"15":'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"16":"You must provide a template to this method.\n\n","17":"You passed an unsupported selector state to this method.\n\n","18":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","19":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","20":"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","21":"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n","22":"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n","23":"fontFace expects a name of a font-family.\n\n","24":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","25":"fontFace expects localFonts to be an array.\n\n","26":"fontFace expects fileFormats to be an array.\n\n","27":"radialGradient requries at least 2 color-stops to properly render.\n\n","28":"Please supply a filename to retinaImage() as the first argument.\n\n","29":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","30":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","31":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n","32":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n","33":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n","34":"borderRadius expects a radius value as a string or number as the second argument.\n\n","35":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"36":"Property must be a string value.\n\n","37":"Syntax Error at %s.\n\n","38":"Formula contains a function that needs parentheses at %s.\n\n","39":"Formula is missing closing parenthesis at %s.\n\n","40":"Formula has too many closing parentheses at %s.\n\n","41":"All values in a formula must have the same unit or be unitless.\n\n","42":"Please provide a number of steps to the modularScale helper.\n\n","43":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","44":"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n","45":"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n","46":"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n","47":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","48":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","49":"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","50":"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n","51":"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n","52":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","53":"fontFace expects localFonts to be an array.\n\n","54":"fontFace expects fileFormats to be an array.\n\n","55":"fontFace expects a name of a font-family.\n\n","56":"linearGradient requries at least 2 color-stops to properly render.\n\n","57":"radialGradient requries at least 2 color-stops to properly render.\n\n","58":"Please supply a filename to retinaImage() as the first argument.\n\n","59":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","60":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","61":"Property must be a string value.\n\n","62":"borderRadius expects a radius value as a string or number as the second argument.\n\n","63":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"64":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n","65":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n","66":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n","67":"You must provide a template to this method.\n\n","68":"You passed an unsupported selector state to this method.\n\n","69":'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',"70":'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',"71":'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',"72":'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',"73":"Please provide a valid CSS variable.\n\n","74":"CSS variable not found and no default was provided.\n\n","75":"important requires a valid style object, got a %s instead.\n\n","76":"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n","77":'remToPx expects a value in "rem" but you provided it in "%s".\n\n',"78":'base must be set in "px" or "%" but you set it in "%s".\n'};/**
 * super basic version of sprintf
 * @private
 */function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=t[0];var o=[];var a;for(a=1;a<t.length;a+=1){o.push(t[a])}o.forEach(function(e){n=n.replace(/%[a-z]/,e)});return n}/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */var f=t["default"]=/*#__PURE__*/function(e){n(t,e);function t(t){var n;if(true){n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this}else{var o,a,i}return r(n)}return t}(/*#__PURE__*/o(Error));e.exports=t["default"]},4489:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){return Math.round(e*255)}function n(e,t,n){return r(e)+","+r(t)+","+r(n)}function o(e,t,r,o){if(o===void 0){o=n}if(t===0){// achromatic
return o(r,r,r)}// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
var a=(e%360+360)%360/60;var i=(1-Math.abs(2*r-1))*t;var s=i*(1-Math.abs(a%2-1));var l=0;var c=0;var d=0;if(a>=0&&a<1){l=i;c=s}else if(a>=1&&a<2){l=s;c=i}else if(a>=2&&a<3){c=i;d=s}else if(a>=3&&a<4){c=s;d=i}else if(a>=4&&a<5){l=s;d=i}else if(a>=5&&a<6){l=i;d=s}var u=r-i/2;var f=l+u;var p=c+u;var h=d+u;return o(f,p,h)}var a=t["default"]=o;e.exports=t["default"]},7261:function(e,t){t.__esModule=true;t["default"]=void 0;var r={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */function n(e){if(typeof e!=="string")return e;var t=e.toLowerCase();return r[t]?"#"+r[t]:e}var o=t["default"]=n;e.exports=t["default"]},3355:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){var t=e.toString(16);return t.length===1?"0"+t:t}var n=t["default"]=r;e.exports=t["default"]},2084:function(e,t){t.__esModule=true;t["default"]=void 0;/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */var r=function e(e){if(e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]){return"#"+e[1]+e[3]+e[5]}return e};var n=t["default"]=r;e.exports=t["default"]},1814:function(e,t,r){r.d(t,{A:()=>_});/* import */var n=r(31);/* import */var o=r(4206);/* import */var a=r(2025);/* import */var i=r(8346);/* import */var s=r(3021);/* import */var l=r(5757);/* import */var c=r(2470);/* import */var d=/*#__PURE__*/r.n(c);/* import */var u=r(9878);/* import */var f=r(4485);/* import */var p=r(7461);/* import */var h=r(7764);/* import */var v=r(6025);/* import */var g=r(1231);/* import */var m=r(2868);/* import */var b=r(2353);var y=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:d}=(0,b/* .useBundleNavigator */.h)();var y=(0,s/* .useNavigate */.Zp)();var _=(0,g/* .useCurrentPath */.G)(m/* ["default"] */.A);var x=(0,i/* .useFormContext */.xW)();var A=r.findIndex(e=>e.path===_);var k=Math.max(-1,A-1);var Y=Math.min(r.length,A+1);var I=r[k];var D=r[Y];var C=x.watch("post_title");var S=()=>{d(e=>{return e.map((e,t)=>{if(t===A){return(0,o._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,o._)((0,n._)({},e),{isActive:true})}return e})});y(I.path)};var M=()=>{d(e=>{return e.map((e,t)=>{if(t===A){return(0,o._)((0,n._)({},e),{isActive:false})}if(t===Y){return(0,o._)((0,n._)({},e),{isActive:true})}return e})});y(D.path)};return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:A>0,children:/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronLeft":"chevronRight",height:24,width:24}),iconPosition:"left",size:"small",onClick:S,buttonCss:/*#__PURE__*/(0,l/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["4"] */.YK["4"],";svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:k<0,children:(0,c.__)("Back","tutor-pro")})}),/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:A<r.length-1&&C,children:/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,l/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["12"] */.YK["12"],";svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:!C||Y>=r.length,children:(0,c.__)("Next","tutor-pro")})})]})};/* export default */const _=y;var w={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",h/* .spacing["16"] */.YK["16"],";")}},8523:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */gM});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
var n={};r.r(n);r.d(n,{Button:()=>aA,CaptionLabel:()=>ak,Chevron:()=>aY,Day:()=>aI,DayButton:()=>aD,Dropdown:()=>aC,DropdownNav:()=>aS,Footer:()=>aM,Month:()=>aE,MonthCaption:()=>aF,MonthGrid:()=>aH,Months:()=>aT,MonthsDropdown:()=>aN,Nav:()=>aP,NextMonthButton:()=>aL,Option:()=>aR,PreviousMonthButton:()=>aB,Root:()=>az,Select:()=>aV,Week:()=>aW,WeekNumber:()=>aU,WeekNumberHeader:()=>aG,Weekday:()=>aj,Weekdays:()=>aq,Weeks:()=>aQ,YearsDropdown:()=>a$});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
var o={};r.r(o);r.d(o,{formatCaption:()=>a0,formatDay:()=>a6,formatMonthCaption:()=>a1,formatMonthDropdown:()=>a2,formatWeekNumber:()=>a3,formatWeekNumberHeader:()=>a5,formatWeekdayName:()=>a4,formatYearCaption:()=>a7,formatYearDropdown:()=>a8});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
var a={};r.r(a);r.d(a,{labelCaption:()=>il,labelDay:()=>ii,labelDayButton:()=>ia,labelGrid:()=>is,labelGridcell:()=>ic,labelMonthDropdown:()=>id,labelNav:()=>iu,labelNext:()=>ip,labelPrevious:()=>ih,labelWeekNumber:()=>ig,labelWeekNumberHeader:()=>im,labelWeekday:()=>iv,labelYearDropdown:()=>ib});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var i=r(3640);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var s=r(31);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var l=r(4206);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var c=r(599);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var d=r(2025);// EXTERNAL MODULE: external "React"
var u=r(1594);var f=/*#__PURE__*/r.n(u);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var p=r(8346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var h=r(5757);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/QueryClientProvider.js
var v=r(7933);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useIsFetching.js
var g=r(6988);// EXTERNAL MODULE: external "wp.i18n"
var m=r(2470);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var b=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var y=r(1303);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Button.tsx
var _=r(9878);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/SVGIcon.tsx
var w=r(4485);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/styles.ts
var x=r(7764);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/typography.ts
var A=r(983);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/style-utils.ts
var k=r(4958);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/util.ts + 4 modules
var Y=r(2927);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var I=r(2147);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormEditableAlias.tsx
var D=e=>{var{field:t,fieldState:r,label:n="",baseURL:o,onChange:a}=e;var{value:i=""}=t;var s="".concat(o,"/").concat(i);var[l,c]=(0,u.useState)(false);var[f,p]=(0,u.useState)(s);var h="".concat(o,"/");var[v,g]=(0,u.useState)(i);(0,u.useEffect)(()=>{if(o){p("".concat(o,"/").concat(i))}if(i){g(i)}},[o,i]);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{field:t,fieldState:r,children:e=>{return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:C.aliasWrapper,children:[n&&/*#__PURE__*/(0,d/* .jsxs */.FD)("label",{css:C.label,children:[n,": "]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:C.linkWrapper,children:!l?/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("a",{"data-cy":"course-slug",href:f,target:"_blank",css:C.link,title:f,rel:"noreferrer",children:f}),/*#__PURE__*/(0,d/* .jsx */.Y)("button",{css:C.iconWrapper,type:"button",onClick:()=>c(e=>!e),children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"edit",width:24,height:24,style:C.editIcon})})]}):/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:C.prefix,title:h,children:h}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:C.editWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},e),{className:"tutor-input-field",css:C.editable,type:"text",value:v,onChange:e=>g(e.target.value),autoComplete:"off"})),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"secondary",isOutlined:true,size:"small",buttonCss:C.saveBtn,onClick:()=>{c(false);t.onChange((0,Y/* .convertToSlug */.qz)(v.replace(o,"")));a===null||a===void 0?void 0:a((0,Y/* .convertToSlug */.qz)(v.replace(o,"")))},children:(0,m.__)("Save","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{buttonContentCss:C.cancelButton,variant:"text",size:"small",onClick:()=>{c(false);g(i)},children:(0,m.__)("Cancel","tutor-pro")})]})]})})]})}})};var C={aliasWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;min-height:32px;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{flex-direction:column;gap:",x/* .spacing["4"] */.YK["4"],";align-items:flex-start;}"),label:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";margin:0px;"),linkWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;width:fit-content;font-size:",x/* .fontSize["14"] */.J["14"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{gap:",x/* .spacing["4"] */.YK["4"],";flex-wrap:wrap;}"),link:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";text-decoration:none;",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    max-width:fit-content;word-break:break-all;"),iconWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,"    margin-left:",x/* .spacing["8"] */.YK["8"],";height:24px;width:24px;background-color:",x/* .colorTokens.background.white */.I6.background.white,";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";:focus{",k/* .styleUtils.inputFocus */.x.inputFocus,"}"),editIcon:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";:hover{color:",x/* .colorTokens.icon.brand */.I6.icon.brand,";}"),prefix:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),"    color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    word-break:break-all;max-width:fit-content;"),editWrapper:/*#__PURE__*/(0,h/* .css */.AH)("margin-left:",x/* .spacing["2"] */.YK["2"],";display:flex;align-items:center;width:fit-content;"),editable:/*#__PURE__*/(0,h/* .css */.AH)("&.tutor-input-field{",A/* .typography.caption */.I.caption(),"      background:",x/* .colorTokens.background.white */.I6.background.white,";width:208px;height:32px;border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["12"] */.YK["12"],";border-radius:",x/* .borderRadius.input */.Vq.input,";margin-right:",x/* .spacing["8"] */.YK["8"],";outline:none;&:focus{border-color:",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";box-shadow:none;outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}"),saveBtn:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;margin-right:",x/* .spacing["8"] */.YK["8"],";"),cancelButton:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.text.brand */.I6.text.brand,";")};/* export default */const S=D;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var M=r(690);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function E(e,t,r,n,o,a,i){try{var s=e[a](i);var l=s.value}catch(e){r(e);return}if(s.done)t(l);else Promise.resolve(l).then(n,o)}function F(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,s,"next",e)}function s(e){E(a,n,o,i,s,"throw",e)}i(undefined)})}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var H=e=>e.type==="checkbox";var T=e=>e instanceof Date;var K=e=>e==null;const O=e=>typeof e==="object";var N=e=>!K(e)&&!Array.isArray(e)&&O(e)&&!T(e);var P=e=>N(e)&&e.target?H(e.target)?e.target.checked:e.target.value:e;var L=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e;var R=(e,t)=>e.has(L(t));var B=e=>{const t=e.constructor&&e.constructor.prototype;return N(t)&&t.hasOwnProperty("isPrototypeOf")};var z=typeof window!=="undefined"&&typeof window.HTMLElement!=="undefined"&&typeof document!=="undefined";function V(e){let t;const r=Array.isArray(e);const n=typeof FileList!=="undefined"?e instanceof FileList:false;if(e instanceof Date){t=new Date(e)}else if(!(z&&(e instanceof Blob||n))&&(r||N(e))){t=r?[]:Object.create(Object.getPrototypeOf(e));if(!r&&!B(e)){t=e}else{for(const r in e){if(e.hasOwnProperty(r)){t[r]=V(e[r])}}}}else{return e}return t}var W=e=>/^\w*$/.test(e);var j=e=>e===undefined;var q=e=>Array.isArray(e)?e.filter(Boolean):[];var U=e=>q(e.replace(/["|']|\]/g,"").split(/\.|\[/));var G=(e,t,r)=>{if(!t||!N(e)){return r}const n=(W(t)?[t]:U(t)).reduce((e,t)=>K(e)?e:e[t],e);return j(n)||n===e?j(e[t])?r:e[t]:n};var Q=e=>typeof e==="boolean";var $=(e,t,r)=>{let n=-1;const o=W(t)?[t]:U(t);const a=o.length;const i=a-1;while(++n<a){const t=o[n];let a=r;if(n!==i){const r=e[t];a=N(r)||Array.isArray(r)?r:!isNaN(+o[n+1])?[]:{}}if(t==="__proto__"||t==="constructor"||t==="prototype"){return}e[t]=a;e=e[t]}};const Z={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"};const X={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"};const J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};const ee=u.createContext(null);ee.displayName="HookFormContext";/**
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
 */const et=()=>u.useContext(ee);/**
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
 */const er=e=>{const{children:t,...r}=e;return u.createElement(ee.Provider,{value:r},t)};var en=(e,t,r,n=true)=>{const o={defaultValues:t._defaultValues};for(const a in e){Object.defineProperty(o,a,{get:()=>{const o=a;if(t._proxyFormState[o]!==X.all){t._proxyFormState[o]=!n||X.all}r&&(r[o]=true);return e[o]}})}return o};const eo=typeof window!=="undefined"?u.useLayoutEffect:u.useEffect;/**
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
 */function ea(e){const t=et();const{control:r=t.control,disabled:n,name:o,exact:a}=e||{};const[i,s]=u.useState(r._formState);const l=u.useRef({isDirty:false,isLoading:false,dirtyFields:false,touchedFields:false,validatingFields:false,isValidating:false,isValid:false,errors:false});eo(()=>r._subscribe({name:o,formState:l.current,exact:a,callback:e=>{!n&&s({...r._formState,...e})}}),[o,n,a]);u.useEffect(()=>{l.current.isValid&&r._setValid(true)},[r]);return u.useMemo(()=>en(i,r,l.current,false),[i,r])}var ei=e=>typeof e==="string";var es=(e,t,r,n,o)=>{if(ei(e)){n&&t.watch.add(e);return G(r,e,o)}if(Array.isArray(e)){return e.map(e=>(n&&t.watch.add(e),G(r,e)))}n&&(t.watchAll=true);return r};var el=e=>K(e)||!O(e);function ec(e,t,r=new WeakSet){if(el(e)||el(t)){return Object.is(e,t)}if(T(e)&&T(t)){return e.getTime()===t.getTime()}const n=Object.keys(e);const o=Object.keys(t);if(n.length!==o.length){return false}if(r.has(e)||r.has(t)){return true}r.add(e);r.add(t);for(const a of n){const n=e[a];if(!o.includes(a)){return false}if(a!=="ref"){const e=t[a];if(T(n)&&T(e)||N(n)&&N(e)||Array.isArray(n)&&Array.isArray(e)?!ec(n,e,r):!Object.is(n,e)){return false}}}return true}/**
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
 */function ed(e){const t=et();const{control:r=t.control,name:n,defaultValue:o,disabled:a,exact:i,compute:s}=e||{};const l=u.useRef(o);const c=u.useRef(s);const d=u.useRef(undefined);const f=u.useRef(r);const p=u.useRef(n);c.current=s;const[h,v]=u.useState(()=>{const e=r._getWatch(n,l.current);return c.current?c.current(e):e});const g=u.useCallback(e=>{const t=es(n,r._names,e||r._formValues,false,l.current);return c.current?c.current(t):t},[r._formValues,r._names,n]);const m=u.useCallback(e=>{if(!a){const t=es(n,r._names,e||r._formValues,false,l.current);if(c.current){const e=c.current(t);if(!ec(e,d.current)){v(e);d.current=e}}else{v(t)}}},[r._formValues,r._names,a,n]);eo(()=>{if(f.current!==r||!ec(p.current,n)){f.current=r;p.current=n;m()}return r._subscribe({name:n,formState:{values:true},exact:i,callback:e=>{m(e.values)}})},[r,i,n,m]);u.useEffect(()=>r._removeUnmounted());// If name or control changed for this render, synchronously reflect the
// latest value so callers (like useController) see the correct value
// immediately on the same render.
// Optimize: Check control reference first before expensive deepEqual
const b=f.current!==r;const y=p.current;// Cache the computed output to avoid duplicate calls within the same render
// We include shouldReturnImmediate in deps to ensure proper recomputation
const _=u.useMemo(()=>{if(a){return null}const e=!b&&!ec(y,n);const t=b||e;return t?g():null},[a,b,n,y,g]);return _!==null?_:h}/**
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
 */function eu(e){const t=et();const{name:r,disabled:n,control:o=t.control,shouldUnregister:a,defaultValue:i,exact:s=true}=e;const l=R(o._names.array,r);const c=u.useMemo(()=>G(o._formValues,r,G(o._defaultValues,r,i)),[o,r,i]);const d=ed({control:o,name:r,defaultValue:c,exact:s});const f=ea({control:o,name:r,exact:s});const p=u.useRef(e);const h=u.useRef(undefined);const v=u.useRef(o.register(r,{...e.rules,value:d,...Q(e.disabled)?{disabled:e.disabled}:{}}));p.current=e;const g=u.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:true,get:()=>!!G(f.errors,r)},isDirty:{enumerable:true,get:()=>!!G(f.dirtyFields,r)},isTouched:{enumerable:true,get:()=>!!G(f.touchedFields,r)},isValidating:{enumerable:true,get:()=>!!G(f.validatingFields,r)},error:{enumerable:true,get:()=>G(f.errors,r)}}),[f,r]);const m=u.useCallback(e=>v.current.onChange({target:{value:P(e),name:r},type:Z.CHANGE}),[r]);const b=u.useCallback(()=>v.current.onBlur({target:{value:G(o._formValues,r),name:r},type:Z.BLUR}),[r,o._formValues]);const y=u.useCallback(e=>{const t=G(o._fields,r);if(t&&e){t._f.ref={focus:()=>e.focus&&e.focus(),select:()=>e.select&&e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()}}},[o._fields,r]);const _=u.useMemo(()=>({name:r,value:d,...Q(n)||f.disabled?{disabled:f.disabled||n}:{},onChange:m,onBlur:b,ref:y}),[r,n,f.disabled,m,b,y,d]);u.useEffect(()=>{const e=o._options.shouldUnregister||a;const t=h.current;if(t&&t!==r&&!l){o.unregister(t)}o.register(r,{...p.current.rules,...Q(p.current.disabled)?{disabled:p.current.disabled}:{}});const n=(e,t)=>{const r=G(o._fields,e);if(r&&r._f){r._f.mount=t}};n(r,true);if(e){const e=V(G(o._options.defaultValues,r,p.current.defaultValue));$(o._defaultValues,r,e);if(j(G(o._formValues,r))){$(o._formValues,r,e)}}!l&&o.register(r);h.current=r;return()=>{(l?e&&!o._state.action:e)?o.unregister(r):n(r,false)}},[r,o,l,a]);u.useEffect(()=>{o._setDisabledField({disabled:n,name:r})},[n,r,o]);return u.useMemo(()=>({field:_,formState:f,fieldState:g}),[_,f,g])}/**
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
 */const ef=e=>e.render(eu(e));const ep=e=>{const t={};for(const r of Object.keys(e)){if(O(e[r])&&e[r]!==null){const n=ep(e[r]);for(const e of Object.keys(n)){t[`${r}.${e}`]=n[e]}}else{t[r]=e[r]}}return t};const eh="post";/**
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
 */function ev(e){const t=et();const[r,n]=React.useState(false);const{control:o=t.control,onSubmit:a,children:i,action:s,method:l=eh,headers:c,encType:d,onError:u,render:f,onSuccess:p,validateStatus:h,...v}=e;const g=async t=>{let r=false;let n="";await o.handleSubmit(async e=>{const i=new FormData;let f="";try{f=JSON.stringify(e)}catch(e){}const v=ep(o._formValues);for(const e in v){i.append(e,v[e])}if(a){await a({data:e,event:t,method:l,formData:i,formDataJson:f})}if(s){try{const e=[c&&c["Content-Type"],d].some(e=>e&&e.includes("json"));const t=await fetch(String(s),{method:l,headers:{...c,...d&&d!=="multipart/form-data"?{"Content-Type":d}:{}},body:e?f:i});if(t&&(h?!h(t.status):t.status<200||t.status>=300)){r=true;u&&u({response:t});n=String(t.status)}else{p&&p({response:t})}}catch(e){r=true;u&&u({error:e})}}})(t);if(r&&e.control){e.control._subjects.state.next({isSubmitSuccessful:false});e.control.setError("root.server",{type:n})}};React.useEffect(()=>{n(true)},[]);return f?React.createElement(React.Fragment,null,f({submit:g})):React.createElement("form",{noValidate:r,action:s,method:l,encType:d,onSubmit:g,...v},i)}var eg=(e,t,r,n,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||true}}:{};var em=e=>Array.isArray(e)?e:[e];var eb=()=>{let e=[];const t=t=>{for(const r of e){r.next&&r.next(t)}};const r=t=>{e.push(t);return{unsubscribe:()=>{e=e.filter(e=>e!==t)}}};const n=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:n}};function ey(e,t){const r={};for(const n in e){if(e.hasOwnProperty(n)){const o=e[n];const a=t[n];if(o&&N(o)&&a){const e=ey(o,a);if(N(e)){r[n]=e}}else if(e[n]){r[n]=a}}}return r}var e_=e=>N(e)&&!Object.keys(e).length;var ew=e=>e.type==="file";var ex=e=>typeof e==="function";var eA=e=>{if(!z){return false}const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)};var ek=e=>e.type===`select-multiple`;var eY=e=>e.type==="radio";var eI=e=>eY(e)||H(e);var eD=e=>eA(e)&&e.isConnected;function eC(e,t){const r=t.slice(0,-1).length;let n=0;while(n<r){e=j(e)?n++:e[t[n++]]}return e}function eS(e){for(const t in e){if(e.hasOwnProperty(t)&&!j(e[t])){return false}}return true}function eM(e,t){const r=Array.isArray(t)?t:W(t)?[t]:U(t);const n=r.length===1?e:eC(e,r);const o=r.length-1;const a=r[o];if(n){delete n[a]}if(o!==0&&(N(n)&&e_(n)||Array.isArray(n)&&eS(n))){eM(e,r.slice(0,-1))}return e}var eE=e=>{for(const t in e){if(ex(e[t])){return true}}return false};function eF(e){return Array.isArray(e)||N(e)&&!eE(e)}function eH(e,t={}){for(const r in e){const n=e[r];if(eF(n)){t[r]=Array.isArray(n)?[]:{};eH(n,t[r])}else if(!j(n)){t[r]=true}}return t}function eT(e,t,r){if(!r){r=eH(t)}for(const n in e){const o=e[n];if(eF(o)){if(j(t)||el(r[n])){r[n]=eH(o,Array.isArray(o)?[]:{})}else{eT(o,K(t)?{}:t[n],r[n])}}else{const e=t[n];r[n]=!ec(o,e)}}return r}const eK={value:false,isValid:false};const eO={value:true,isValid:true};var eN=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!j(e[0].attributes.value)?j(e[0].value)||e[0].value===""?eO:{value:e[0].value,isValid:true}:eO:eK}return eK};var eP=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>j(e)?e:t?e===""?NaN:e?+e:e:r&&ei(e)?new Date(e):n?n(e):e;const eL={isValid:false,value:null};var eR=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:true,value:t.value}:e,eL):eL;function eB(e){const t=e.ref;if(ew(t)){return t.files}if(eY(t)){return eR(e.refs).value}if(ek(t)){return[...t.selectedOptions].map(({value:e})=>e)}if(H(t)){return eN(e.refs).value}return eP(j(t.value)?e.ref.value:t.value,e)}var ez=(e,t,r,n)=>{const o={};for(const r of e){const e=G(t,r);e&&$(o,r,e._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}};var eV=e=>e instanceof RegExp;var eW=e=>j(e)?e:eV(e)?e.source:N(e)?eV(e.value)?e.value.source:e.value:e;var ej=e=>({isOnSubmit:!e||e===X.onSubmit,isOnBlur:e===X.onBlur,isOnChange:e===X.onChange,isOnAll:e===X.all,isOnTouch:e===X.onTouched});const eq="AsyncFunction";var eU=e=>!!e&&!!e.validate&&!!(ex(e.validate)&&e.validate.constructor.name===eq||N(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===eq));var eG=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);var eQ=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const e$=(e,t,r,n)=>{for(const o of r||Object.keys(e)){const r=G(e,o);if(r){const{_f:e,...a}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],o)&&!n){return true}else if(e.ref&&t(e.ref,e.name)&&!n){return true}else{if(e$(a,t)){break}}}else if(N(a)){if(e$(a,t)){break}}}}return};function eZ(e,t,r){const n=G(e,r);if(n||W(r)){return{error:n,name:r}}const o=r.split(".");while(o.length){const n=o.join(".");const a=G(t,n);const i=G(e,n);if(a&&!Array.isArray(a)&&r!==n){return{name:r}}if(i&&i.type){return{name:n,error:i}}if(i&&i.root&&i.root.type){return{name:`${n}.root`,error:i.root}}o.pop()}return{name:r}}var eX=(e,t,r,n)=>{r(e);const{name:o,...a}=e;return e_(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!n||X.all))};var eJ=(e,t,r)=>!e||!t||e===t||em(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));var e0=(e,t,r,n,o)=>{if(o.isOnAll){return false}else if(!r&&o.isOnTouch){return!(t||e)}else if(r?n.isOnBlur:o.isOnBlur){return!e}else if(r?n.isOnChange:o.isOnChange){return e}return true};var e1=(e,t)=>!q(G(e,t)).length&&eM(e,t);var e6=(e,t,r)=>{const n=em(G(e,r));$(n,"root",t[r]);$(e,r,n);return e};function e2(e,t,r="validate"){if(ei(e)||Array.isArray(e)&&e.every(ei)||Q(e)&&!e){return{type:r,message:ei(e)?e:"",ref:t}}}var e4=e=>N(e)&&!eV(e)?e:{value:e,message:""};var e3=async(e,t,r,n,o,a)=>{const{ref:i,refs:s,required:l,maxLength:c,minLength:d,min:u,max:f,pattern:p,validate:h,name:v,valueAsNumber:g,mount:m}=e._f;const b=G(r,v);if(!m||t.has(v)){return{}}const y=s?s[0]:i;const _=e=>{if(o&&y.reportValidity){y.setCustomValidity(Q(e)?"":e||"");y.reportValidity()}};const w={};const x=eY(i);const A=H(i);const k=x||A;const Y=(g||ew(i))&&j(i.value)&&j(b)||eA(i)&&i.value===""||b===""||Array.isArray(b)&&!b.length;const I=eg.bind(null,v,n,w);const D=(e,t,r,n=J.maxLength,o=J.minLength)=>{const a=e?t:r;w[v]={type:e?n:o,message:a,ref:i,...I(e?n:o,a)}};if(a?!Array.isArray(b)||!b.length:l&&(!k&&(Y||K(b))||Q(b)&&!b||A&&!eN(s).isValid||x&&!eR(s).isValid)){const{value:e,message:t}=ei(l)?{value:!!l,message:l}:e4(l);if(e){w[v]={type:J.required,message:t,ref:y,...I(J.required,t)};if(!n){_(t);return w}}}if(!Y&&(!K(u)||!K(f))){let e;let t;const r=e4(f);const o=e4(u);if(!K(b)&&!isNaN(b)){const n=i.valueAsNumber||(b?+b:b);if(!K(r.value)){e=n>r.value}if(!K(o.value)){t=n<o.value}}else{const n=i.valueAsDate||new Date(b);const a=e=>new Date(new Date().toDateString()+" "+e);const s=i.type=="time";const l=i.type=="week";if(ei(r.value)&&b){e=s?a(b)>a(r.value):l?b>r.value:n>new Date(r.value)}if(ei(o.value)&&b){t=s?a(b)<a(o.value):l?b<o.value:n<new Date(o.value)}}if(e||t){D(!!e,r.message,o.message,J.max,J.min);if(!n){_(w[v].message);return w}}}if((c||d)&&!Y&&(ei(b)||a&&Array.isArray(b))){const e=e4(c);const t=e4(d);const r=!K(e.value)&&b.length>+e.value;const o=!K(t.value)&&b.length<+t.value;if(r||o){D(r,e.message,t.message);if(!n){_(w[v].message);return w}}}if(p&&!Y&&ei(b)){const{value:e,message:t}=e4(p);if(eV(e)&&!b.match(e)){w[v]={type:J.pattern,message:t,ref:i,...I(J.pattern,t)};if(!n){_(t);return w}}}if(h){if(ex(h)){const e=await h(b,r);const t=e2(e,y);if(t){w[v]={...t,...I(J.validate,t.message)};if(!n){_(t.message);return w}}}else if(N(h)){let e={};for(const t in h){if(!e_(e)&&!n){break}const o=e2(await h[t](b,r),y,t);if(o){e={...o,...I(t,o.message)};_(o.message);if(n){w[v]=e}}}if(!e_(e)){w[v]={ref:y,...e};if(!n){return w}}}}_(true);return w};const e5={mode:X.onSubmit,reValidateMode:X.onChange,shouldFocusError:true};function e8(e={}){let t={...e5,...e};let r={submitCount:0,isDirty:false,isReady:false,isLoading:ex(t.defaultValues),isValidating:false,isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||false};let n={};let o=N(t.defaultValues)||N(t.values)?V(t.defaultValues||t.values)||{}:{};let a=t.shouldUnregister?{}:V(o);let i={action:false,mount:false,watch:false};let s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set};let l;let c=0;const d={isDirty:false,dirtyFields:false,validatingFields:false,touchedFields:false,isValidating:false,isValid:false,errors:false};let u={...d};const f={array:eb(),state:eb()};const p=t.criteriaMode===X.all;const h=e=>t=>{clearTimeout(c);c=setTimeout(e,t)};const v=async e=>{if(!t.disabled&&(d.isValid||u.isValid||e)){const e=t.resolver?e_((await A()).errors):await Y(n,true);if(e!==r.isValid){f.state.next({isValid:e})}}};const g=(e,n)=>{if(!t.disabled&&(d.isValidating||d.validatingFields||u.isValidating||u.validatingFields)){(e||Array.from(s.mount)).forEach(e=>{if(e){n?$(r.validatingFields,e,n):eM(r.validatingFields,e)}});f.state.next({validatingFields:r.validatingFields,isValidating:!e_(r.validatingFields)})}};const m=(e,s=[],l,c,p=true,h=true)=>{if(c&&l&&!t.disabled){i.action=true;if(h&&Array.isArray(G(n,e))){const t=l(G(n,e),c.argA,c.argB);p&&$(n,e,t)}if(h&&Array.isArray(G(r.errors,e))){const t=l(G(r.errors,e),c.argA,c.argB);p&&$(r.errors,e,t);e1(r.errors,e)}if((d.touchedFields||u.touchedFields)&&h&&Array.isArray(G(r.touchedFields,e))){const t=l(G(r.touchedFields,e),c.argA,c.argB);p&&$(r.touchedFields,e,t)}if(d.dirtyFields||u.dirtyFields){r.dirtyFields=eT(o,a)}f.state.next({name:e,isDirty:D(e,s),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else{$(a,e,s)}};const b=(e,t)=>{$(r.errors,e,t);f.state.next({errors:r.errors})};const y=e=>{r.errors=e;f.state.next({errors:r.errors,isValid:false})};const _=(e,t,r,s)=>{const l=G(n,e);if(l){const n=G(a,e,j(r)?G(o,e):r);j(n)||s&&s.defaultChecked||t?$(a,e,t?n:eB(l._f)):M(e,n);i.mount&&!i.action&&v()}};const w=(e,n,a,i,s)=>{let l=false;let c=false;const p={name:e};if(!t.disabled){if(!a||i){if(d.isDirty||u.isDirty){c=r.isDirty;r.isDirty=p.isDirty=D();l=c!==p.isDirty}const t=ec(G(o,e),n);c=!!G(r.dirtyFields,e);t?eM(r.dirtyFields,e):$(r.dirtyFields,e,true);p.dirtyFields=r.dirtyFields;l=l||(d.dirtyFields||u.dirtyFields)&&c!==!t}if(a){const t=G(r.touchedFields,e);if(!t){$(r.touchedFields,e,a);p.touchedFields=r.touchedFields;l=l||(d.touchedFields||u.touchedFields)&&t!==a}}l&&s&&f.state.next(p)}return l?p:{}};const x=(e,n,o,a)=>{const i=G(r.errors,e);const s=(d.isValid||u.isValid)&&Q(n)&&r.isValid!==n;if(t.delayError&&o){l=h(()=>b(e,o));l(t.delayError)}else{clearTimeout(c);l=null;o?$(r.errors,e,o):eM(r.errors,e)}if((o?!ec(i,o):i)||!e_(a)||s){const t={...a,...s&&Q(n)?{isValid:n}:{},errors:r.errors,name:e};r={...r,...t};f.state.next(t)}};const A=async e=>{g(e,true);const r=await t.resolver(a,t.context,ez(e||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));g(e);return r};const k=async e=>{const{errors:t}=await A(e);if(e){for(const n of e){const e=G(t,n);e?$(r.errors,n,e):eM(r.errors,n)}}else{r.errors=t}return t};const Y=async(e,n,o={valid:true})=>{for(const i in e){const l=e[i];if(l){const{_f:e,...i}=l;if(e){const i=s.array.has(e.name);const c=l._f&&eU(l._f);if(c&&d.validatingFields){g([e.name],true)}const u=await e3(l,s.disabled,a,p,t.shouldUseNativeValidation&&!n,i);if(c&&d.validatingFields){g([e.name])}if(u[e.name]){o.valid=false;if(n){break}}!n&&(G(u,e.name)?i?e6(r.errors,u,e.name):$(r.errors,e.name,u[e.name]):eM(r.errors,e.name))}!e_(i)&&await Y(i,n,o)}}return o.valid};const I=()=>{for(const e of s.unMount){const t=G(n,e);t&&(t._f.refs?t._f.refs.every(e=>!eD(e)):!eD(t._f.ref))&&eo(e)}s.unMount=new Set};const D=(e,r)=>!t.disabled&&(e&&r&&$(a,e,r),!ec(W(),o));const C=(e,t,r)=>es(e,s,{...i.mount?a:j(t)?o:ei(e)?{[e]:t}:t},r,t);const S=e=>q(G(i.mount?a:o,e,t.shouldUnregister?G(o,e,[]):[]));const M=(e,t,r={})=>{const o=G(n,e);let i=t;if(o){const r=o._f;if(r){!r.disabled&&$(a,e,eP(t,r));i=eA(r.ref)&&K(t)?"":t;if(ek(r.ref)){[...r.ref.options].forEach(e=>e.selected=i.includes(e.value))}else if(r.refs){if(H(r.ref)){r.refs.forEach(e=>{if(!e.defaultChecked||!e.disabled){if(Array.isArray(i)){e.checked=!!i.find(t=>t===e.value)}else{e.checked=i===e.value||!!i}}})}else{r.refs.forEach(e=>e.checked=e.value===i)}}else if(ew(r.ref)){r.ref.value=""}else{r.ref.value=i;if(!r.ref.type){f.state.next({name:e,values:V(a)})}}}}(r.shouldDirty||r.shouldTouch)&&w(e,i,r.shouldTouch,r.shouldDirty,true);r.shouldValidate&&B(e)};const E=(e,t,r)=>{for(const o in t){if(!t.hasOwnProperty(o)){return}const a=t[o];const i=e+"."+o;const l=G(n,i);(s.array.has(e)||N(a)||l&&!l._f)&&!T(a)?E(i,a,r):M(i,a,r)}};const F=(e,t,l={})=>{const c=G(n,e);const p=s.array.has(e);const h=V(t);$(a,e,h);if(p){f.array.next({name:e,values:V(a)});if((d.isDirty||d.dirtyFields||u.isDirty||u.dirtyFields)&&l.shouldDirty){f.state.next({name:e,dirtyFields:eT(o,a),isDirty:D(e,h)})}}else{c&&!c._f&&!K(h)?E(e,h,l):M(e,h,l)}eQ(e,s)&&f.state.next({...r,name:e});f.state.next({name:i.mount?e:undefined,values:V(a)})};const O=async e=>{i.mount=true;const o=e.target;let c=o.name;let h=true;const m=G(n,c);const b=e=>{h=Number.isNaN(e)||T(e)&&isNaN(e.getTime())||ec(e,G(a,c,e))};const y=ej(t.mode);const _=ej(t.reValidateMode);if(m){let i;let k;const I=o.type?eB(m._f):P(e);const D=e.type===Z.BLUR||e.type===Z.FOCUS_OUT;const C=!eG(m._f)&&!t.resolver&&!G(r.errors,c)&&!m._f.deps||e0(D,G(r.touchedFields,c),r.isSubmitted,_,y);const S=eQ(c,s,D);$(a,c,I);if(D){if(!o||!o.readOnly){m._f.onBlur&&m._f.onBlur(e);l&&l(0)}}else if(m._f.onChange){m._f.onChange(e)}const M=w(c,I,D);const E=!e_(M)||S;!D&&f.state.next({name:c,type:e.type,values:V(a)});if(C){if(d.isValid||u.isValid){if(t.mode==="onBlur"){if(D){v()}}else if(!D){v()}}return E&&f.state.next({name:c,...S?{}:M})}!D&&S&&f.state.next({...r});if(t.resolver){const{errors:e}=await A([c]);b(I);if(h){const t=eZ(r.errors,n,c);const o=eZ(e,n,t.name||c);i=o.error;c=o.name;k=e_(e)}}else{g([c],true);i=(await e3(m,s.disabled,a,p,t.shouldUseNativeValidation))[c];g([c]);b(I);if(h){if(i){k=false}else if(d.isValid||u.isValid){k=await Y(n,true)}}}if(h){m._f.deps&&(!Array.isArray(m._f.deps)||m._f.deps.length>0)&&B(m._f.deps);x(c,k,i,M)}}};const L=(e,t)=>{if(G(r.errors,t)&&e.focus){e.focus();return 1}return};const B=async(e,o={})=>{let a;let i;const l=em(e);if(t.resolver){const t=await k(j(e)?e:l);a=e_(t);i=e?!l.some(e=>G(t,e)):a}else if(e){i=(await Promise.all(l.map(async e=>{const t=G(n,e);return await Y(t&&t._f?{[e]:t}:t)}))).every(Boolean);!(!i&&!r.isValid)&&v()}else{i=a=await Y(n)}f.state.next({...!ei(e)||(d.isValid||u.isValid)&&a!==r.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:r.errors});o.shouldFocus&&!i&&e$(n,L,e?l:s.mount);return i};const W=(e,t)=>{let n={...i.mount?a:o};if(t){n=ey(t.dirtyFields?r.dirtyFields:r.touchedFields,n)}return j(e)?n:ei(e)?G(n,e):e.map(e=>G(n,e))};const U=(e,t)=>({invalid:!!G((t||r).errors,e),isDirty:!!G((t||r).dirtyFields,e),error:G((t||r).errors,e),isValidating:!!G(r.validatingFields,e),isTouched:!!G((t||r).touchedFields,e)});const J=e=>{e&&em(e).forEach(e=>eM(r.errors,e));f.state.next({errors:e?r.errors:{}})};const ee=(e,t,o)=>{const a=(G(n,e,{_f:{}})._f||{}).ref;const i=G(r.errors,e)||{};// Don't override existing error messages elsewhere in the object tree.
const{ref:s,message:l,type:c,...d}=i;$(r.errors,e,{...d,...t,ref:a});f.state.next({name:e,errors:r.errors,isValid:false});o&&o.shouldFocus&&a&&a.focus&&a.focus()};const et=(e,t)=>ex(e)?f.state.subscribe({next:r=>"values"in r&&e(C(undefined,t),r)}):C(e,t,true);const er=e=>f.state.subscribe({next:t=>{if(eJ(e.name,t.name,e.exact)&&eX(t,e.formState||d,eY,e.reRenderRoot)){e.callback({values:{...a},...r,...t,defaultValues:o})}}}).unsubscribe;const en=e=>{i.mount=true;u={...u,...e.formState};return er({...e,formState:u})};const eo=(e,i={})=>{for(const l of e?em(e):s.mount){s.mount.delete(l);s.array.delete(l);if(!i.keepValue){eM(n,l);eM(a,l)}!i.keepError&&eM(r.errors,l);!i.keepDirty&&eM(r.dirtyFields,l);!i.keepTouched&&eM(r.touchedFields,l);!i.keepIsValidating&&eM(r.validatingFields,l);!t.shouldUnregister&&!i.keepDefaultValue&&eM(o,l)}f.state.next({values:V(a)});f.state.next({...r,...!i.keepDirty?{}:{isDirty:D()}});!i.keepIsValid&&v()};const ea=({disabled:e,name:t})=>{if(Q(e)&&i.mount||!!e||s.disabled.has(t)){e?s.disabled.add(t):s.disabled.delete(t)}};const el=(e,r={})=>{let a=G(n,e);const l=Q(r.disabled)||Q(t.disabled);$(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:true,...r}});s.mount.add(e);if(a){ea({disabled:Q(r.disabled)?r.disabled:t.disabled,name:e})}else{_(e,true,r.value)}return{...l?{disabled:r.disabled||t.disabled}:{},...t.progressive?{required:!!r.required,min:eW(r.min),max:eW(r.max),minLength:eW(r.minLength),maxLength:eW(r.maxLength),pattern:eW(r.pattern)}:{},name:e,onChange:O,onBlur:O,ref:l=>{if(l){el(e,r);a=G(n,e);const t=j(l.value)?l.querySelectorAll?l.querySelectorAll("input,select,textarea")[0]||l:l:l;const i=eI(t);const s=a._f.refs||[];if(i?s.find(e=>e===t):t===a._f.ref){return}$(n,e,{_f:{...a._f,...i?{refs:[...s.filter(eD),t,...Array.isArray(G(o,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}});_(e,false,undefined,t)}else{a=G(n,e,{});if(a._f){a._f.mount=false}(t.shouldUnregister||r.shouldUnregister)&&!(R(s.array,e)&&i.action)&&s.unMount.add(e)}}}};const ed=()=>t.shouldFocusError&&e$(n,L,s.mount);const eu=e=>{if(Q(e)){f.state.next({disabled:e});e$(n,(t,r)=>{const o=G(n,r);if(o){t.disabled=o._f.disabled||e;if(Array.isArray(o._f.refs)){o._f.refs.forEach(t=>{t.disabled=o._f.disabled||e})}}},0,false)}};const ef=(e,o)=>async i=>{let l=undefined;if(i){i.preventDefault&&i.preventDefault();i.persist&&i.persist()}let c=V(a);f.state.next({isSubmitting:true});if(t.resolver){const{errors:e,values:t}=await A();r.errors=e;c=V(t)}else{await Y(n)}if(s.disabled.size){for(const e of s.disabled){eM(c,e)}}eM(r.errors,"root");if(e_(r.errors)){f.state.next({errors:{}});try{await e(c,i)}catch(e){l=e}}else{if(o){await o({...r.errors},i)}ed();setTimeout(ed)}f.state.next({isSubmitted:true,isSubmitting:false,isSubmitSuccessful:e_(r.errors)&&!l,submitCount:r.submitCount+1,errors:r.errors});if(l){throw l}};const ep=(e,t={})=>{if(G(n,e)){if(j(t.defaultValue)){F(e,V(G(o,e)))}else{F(e,t.defaultValue);$(o,e,V(t.defaultValue))}if(!t.keepTouched){eM(r.touchedFields,e)}if(!t.keepDirty){eM(r.dirtyFields,e);r.isDirty=t.defaultValue?D(e,V(G(o,e))):D()}if(!t.keepError){eM(r.errors,e);d.isValid&&v()}f.state.next({...r})}};const eh=(e,l={})=>{const c=e?V(e):o;const u=V(c);const p=e_(e);const h=p?o:u;if(!l.keepDefaultValues){o=c}if(!l.keepValues){if(l.keepDirtyValues){const e=new Set([...s.mount,...Object.keys(eT(o,a))]);for(const t of Array.from(e)){G(r.dirtyFields,t)?$(h,t,G(a,t)):F(t,G(h,t))}}else{if(z&&j(e)){for(const e of s.mount){const t=G(n,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(eA(e)){const t=e.closest("form");if(t){t.reset();break}}}}}if(l.keepFieldsRef){for(const e of s.mount){F(e,G(h,e))}}else{n={}}}a=t.shouldUnregister?l.keepDefaultValues?V(o):{}:V(h);f.array.next({values:{...h}});f.state.next({values:{...h}})}s={mount:l.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:false,focus:""};i.mount=!d.isValid||!!l.keepIsValid||!!l.keepDirtyValues||!t.shouldUnregister&&!e_(h);i.watch=!!t.shouldUnregister;f.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:p?false:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!ec(e,o)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:false,dirtyFields:p?{}:l.keepDirtyValues?l.keepDefaultValues&&a?eT(o,a):r.dirtyFields:l.keepDefaultValues&&e?eT(o,e):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:false,isSubmitting:false,defaultValues:o})};const ev=(e,t)=>eh(ex(e)?e(a):e,t);const eg=(e,t={})=>{const r=G(n,e);const o=r&&r._f;if(o){const e=o.refs?o.refs[0]:o.ref;if(e.focus){e.focus();t.shouldSelect&&ex(e.select)&&e.select()}}};const eY=e=>{r={...r,...e}};const eC=()=>ex(t.defaultValues)&&t.defaultValues().then(e=>{ev(e,t.resetOptions);f.state.next({isLoading:false})});const eS={control:{register:el,unregister:eo,getFieldState:U,handleSubmit:ef,setError:ee,_subscribe:er,_runSchema:A,_focusError:ed,_getWatch:C,_getDirty:D,_setValid:v,_setFieldArray:m,_setDisabledField:ea,_setErrors:y,_getFieldArray:S,_reset:eh,_resetDefaultValues:eC,_removeUnmounted:I,_disableForm:eu,_subjects:f,_proxyFormState:d,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(value){i=value},get _defaultValues(){return o},get _names(){return s},set _names(value){s=value},get _formState(){return r},get _options(){return t},set _options(value){t={...t,...value}}},subscribe:en,trigger:B,register:el,handleSubmit:ef,watch:et,setValue:F,getValues:W,reset:ev,resetField:ep,clearErrors:J,unregister:eo,setError:ee,setFocus:eg,getFieldState:U};return{...eS,formControl:eS}}var e7=()=>{if(typeof crypto!=="undefined"&&crypto.randomUUID){return crypto.randomUUID()}const e=typeof performance==="undefined"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})};var e9=(e,t,r={})=>r.shouldFocus||j(r.shouldFocus)?r.focusName||`${e}.${j(r.focusIndex)?t:r.focusIndex}.`:"";var te=(e,t)=>[...e,...em(t)];var tt=e=>Array.isArray(e)?e.map(()=>undefined):undefined;function tr(e,t,r){return[...e.slice(0,t),...em(r),...e.slice(t)]}var tn=(e,t,r)=>{if(!Array.isArray(e)){return[]}if(j(e[r])){e[r]=undefined}e.splice(r,0,e.splice(t,1)[0]);return e};var to=(e,t)=>[...em(t),...em(e)];function ta(e,t){let r=0;const n=[...e];for(const e of t){n.splice(e-r,1);r++}return q(n).length?n:[]}var ti=(e,t)=>j(t)?[]:ta(e,em(t).sort((e,t)=>e-t));var ts=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};var tl=(e,t,r)=>{e[t]=r;return e};/**
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
 */function tc(e){const t=et();const{control:r=t.control,name:n,keyName:o="id",shouldUnregister:a,rules:i}=e;const[s,l]=u.useState(r._getFieldArray(n));const c=u.useRef(r._getFieldArray(n).map(e7));const d=u.useRef(false);r._names.array.add(n);u.useMemo(()=>i&&s.length>=0&&r.register(n,i),[r,n,s.length,i]);eo(()=>r._subjects.array.subscribe({next:({values:e,name:t})=>{if(t===n||!t){const t=G(e,n);if(Array.isArray(t)){l(t);c.current=t.map(e7)}}}}).unsubscribe,[r,n]);const f=u.useCallback(e=>{d.current=true;r._setFieldArray(n,e)},[r,n]);const p=(e,t)=>{const o=em(V(e));const a=te(r._getFieldArray(n),o);r._names.focus=e9(n,a.length-1,t);c.current=te(c.current,o.map(e7));f(a);l(a);r._setFieldArray(n,a,te,{argA:tt(e)})};const h=(e,t)=>{const o=em(V(e));const a=to(r._getFieldArray(n),o);r._names.focus=e9(n,0,t);c.current=to(c.current,o.map(e7));f(a);l(a);r._setFieldArray(n,a,to,{argA:tt(e)})};const v=e=>{const t=ti(r._getFieldArray(n),e);c.current=ti(c.current,e);f(t);l(t);!Array.isArray(G(r._fields,n))&&$(r._fields,n,undefined);r._setFieldArray(n,t,ti,{argA:e})};const g=(e,t,o)=>{const a=em(V(t));const i=tr(r._getFieldArray(n),e,a);r._names.focus=e9(n,e,o);c.current=tr(c.current,e,a.map(e7));f(i);l(i);r._setFieldArray(n,i,tr,{argA:e,argB:tt(t)})};const m=(e,t)=>{const o=r._getFieldArray(n);ts(o,e,t);ts(c.current,e,t);f(o);l(o);r._setFieldArray(n,o,ts,{argA:e,argB:t},false)};const b=(e,t)=>{const o=r._getFieldArray(n);tn(o,e,t);tn(c.current,e,t);f(o);l(o);r._setFieldArray(n,o,tn,{argA:e,argB:t},false)};const y=(e,t)=>{const o=V(t);const a=tl(r._getFieldArray(n),e,o);c.current=[...a].map((t,r)=>!t||r===e?e7():c.current[r]);f(a);l([...a]);r._setFieldArray(n,a,tl,{argA:e,argB:o},true,false)};const _=e=>{const t=em(V(e));c.current=t.map(e7);f([...t]);l([...t]);r._setFieldArray(n,[...t],e=>e,{},true,false)};u.useEffect(()=>{r._state.action=false;eQ(n,r._names)&&r._subjects.state.next({...r._formState});if(d.current&&(!ej(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!ej(r._options.reValidateMode).isOnSubmit){if(r._options.resolver){r._runSchema([n]).then(e=>{const t=G(e.errors,n);const o=G(r._formState.errors,n);if(o?!t&&o.type||t&&(o.type!==t.type||o.message!==t.message):t&&t.type){t?$(r._formState.errors,n,t):eM(r._formState.errors,n);r._subjects.state.next({errors:r._formState.errors})}})}else{const e=G(r._fields,n);if(e&&e._f&&!(ej(r._options.reValidateMode).isOnSubmit&&ej(r._options.mode).isOnSubmit)){e3(e,r._names.disabled,r._formValues,r._options.criteriaMode===X.all,r._options.shouldUseNativeValidation,true).then(e=>!e_(e)&&r._subjects.state.next({errors:e6(r._formState.errors,e,n)}))}}}r._subjects.state.next({name:n,values:V(r._formValues)});r._names.focus&&e$(r._fields,(e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus){e.focus();return 1}return});r._names.focus="";r._setValid();d.current=false},[s,n,r]);u.useEffect(()=>{!G(r._formValues,n)&&r._setFieldArray(n);return()=>{const e=(e,t)=>{const n=G(r._fields,e);if(n&&n._f){n._f.mount=t}};r._options.shouldUnregister||a?r.unregister(n):e(n,false)}},[n,r,o,a]);return{swap:u.useCallback(m,[f,n,r]),move:u.useCallback(b,[f,n,r]),prepend:u.useCallback(h,[f,n,r]),append:u.useCallback(p,[f,n,r]),remove:u.useCallback(v,[f,n,r]),insert:u.useCallback(g,[f,n,r]),update:u.useCallback(y,[f,n,r]),replace:u.useCallback(_,[f,n,r]),fields:u.useMemo(()=>s.map((e,t)=>({...e,[o]:c.current[t]||e7()})),[s,o])}}/**
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
 */function td(e={}){const t=u.useRef(undefined);const r=u.useRef(undefined);const[n,o]=u.useState({isDirty:false,isValidating:false,isLoading:ex(e.defaultValues),isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||false,isReady:false,defaultValues:ex(e.defaultValues)?undefined:e.defaultValues});if(!t.current){if(e.formControl){t.current={...e.formControl,formState:n};if(e.defaultValues&&!ex(e.defaultValues)){e.formControl.reset(e.defaultValues,e.resetOptions)}}else{const{formControl:r,...o}=e8(e);t.current={...o,formState:n}}}const a=t.current.control;a._options=e;eo(()=>{const e=a._subscribe({formState:a._proxyFormState,callback:()=>o({...a._formState}),reRenderRoot:true});o(e=>({...e,isReady:true}));a._formState.isReady=true;return e},[a]);u.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]);u.useEffect(()=>{if(e.mode){a._options.mode=e.mode}if(e.reValidateMode){a._options.reValidateMode=e.reValidateMode}},[a,e.mode,e.reValidateMode]);u.useEffect(()=>{if(e.errors){a._setErrors(e.errors);a._focusError()}},[a,e.errors]);u.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]);u.useEffect(()=>{if(a._proxyFormState.isDirty){const e=a._getDirty();if(e!==n.isDirty){a._subjects.state.next({isDirty:e})}}},[a,n.isDirty]);u.useEffect(()=>{var t;if(e.values&&!ec(e.values,r.current)){a._reset(e.values,{keepFieldsRef:true,...a._options.resetOptions});if(!((t=a._options.resetOptions)===null||t===void 0?void 0:t.keepIsValid)){a._setValid()}r.current=e.values;o(e=>({...e}))}else{a._resetDefaultValues()}},[a,e.values]);u.useEffect(()=>{if(!a._state.mount){a._setValid();a._state.mount=true}if(a._state.watch){a._state.watch=false;a._subjects.state.next({...a._formState})}a._removeUnmounted()});t.current.formState=en(n,a);return t.current}/**
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
 */const tu=({control:e,names:t,render:r})=>r(ed({control:e,name:t}));//# sourceMappingURL=index.esm.mjs.map
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var tf=r(2473);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/constants.ts
var tp=r(7461);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/create-variation.ts
var th=r(7367);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var tv=r(3757);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/MagicButton.tsx
var tg=/*#__PURE__*/f().forwardRef((e,t)=>{var{className:r,variant:n,size:o,children:a,type:i="button",disabled:s=false,roundedFull:l=true,loading:c}=e,u=(0,tf._)(e,["className","variant","size","children","type","disabled","roundedFull","loading"]);return/*#__PURE__*/(0,d/* .jsx */.Y)("button",(0,y._)((0,b._)({type:i,ref:t,css:ty({variant:n,size:o,rounded:l?"true":"false"}),className:r,disabled:s},u),{children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:tb.buttonSpan,children:c?/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* ["default"] */.Ay,{size:24}):a})}))});/* export default */const tm=tg;var tb={buttonSpan:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.flexCenter */.x.flexCenter(),";z-index:",x/* .zIndex.positive */.fE.positive,";"),base:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.small */.I.small("medium"),";display:flex;gap:",x/* .spacing["4"] */.YK["4"],";width:100%;justify-content:center;align-items:center;white-space:nowrap;position:relative;overflow:hidden;transition:box-shadow 0.5s ease;&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{cursor:not-allowed;background:",x/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";pointer-events:none;color:",x/* .colorTokens.text.disable */.I6.text.disable,";border-color:",x/* .colorTokens.stroke.disable */.I6.stroke.disable,";}"),default:e=>/*#__PURE__*/(0,h/* .css */.AH)("background:",!e?x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1:x/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";color:",x/* .colorTokens.text.white */.I6.text.white,";&::before{content:'';position:absolute;inset:0;background:",!e?x/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:x/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";opacity:0;transition:opacity 0.5s ease;}&:hover::before{opacity:1;}"),secondary:/*#__PURE__*/(0,h/* .css */.AH)("background-color:",x/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",x/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";&:hover{background-color:",x/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}"),outline:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;&::before{content:'';position:absolute;inset:0;background:",x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";color:",x/* .colorTokens.text.primary */.I6.text.primary,";border:1px solid transparent;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;}&:hover{&::before{background:",x/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2,";}}"),primaryOutline:/*#__PURE__*/(0,h/* .css */.AH)("border:1px solid ",x/* .colorTokens.brand.blue */.I6.brand.blue,";color:",x/* .colorTokens.brand.blue */.I6.brand.blue,";&:hover{background-color:",x/* .colorTokens.brand.blue */.I6.brand.blue,";color:",x/* .colorTokens.text.white */.I6.text.white,";}"),primary:/*#__PURE__*/(0,h/* .css */.AH)("background-color:",x/* .colorTokens.brand.blue */.I6.brand.blue,";color:",x/* .colorTokens.text.white */.I6.text.white,";"),ghost:/*#__PURE__*/(0,h/* .css */.AH)("background-color:transparent;color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";&:hover{color:",x/* .colorTokens.text.primary */.I6.text.primary,";}"),plain:/*#__PURE__*/(0,h/* .css */.AH)("span{background:",!tp/* .isRTL */.V8?x/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient:x/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&:hover{background:",!tp/* .isRTL */.V8?x/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:x/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}}"),size:{default:/*#__PURE__*/(0,h/* .css */.AH)("height:32px;padding-inline:",x/* .spacing["12"] */.YK["12"],";padding-block:",x/* .spacing["4"] */.YK["4"],";"),sm:/*#__PURE__*/(0,h/* .css */.AH)("height:24px;padding-inline:",x/* .spacing["10"] */.YK["10"],";"),icon:/*#__PURE__*/(0,h/* .css */.AH)("width:32px;height:32px;")},rounded:{true:/*#__PURE__*/(0,h/* .css */.AH)("border-radius:",x/* .borderRadius["54"] */.Vq["54"],";&::before{border-radius:",x/* .borderRadius["54"] */.Vq["54"],";}"),false:/*#__PURE__*/(0,h/* .css */.AH)("border-radius:",x/* .borderRadius["4"] */.Vq["4"],";&::before{border-radius:",x/* .borderRadius["4"] */.Vq["4"],";}")}};var ty=(0,th/* .createVariation */.s)({variants:{variant:{default:tb.default(tp/* .isRTL */.V8),primary:tb.primary,secondary:tb.secondary,outline:tb.outline,primary_outline:tb.primaryOutline,ghost:tb.ghost,plain:tb.plain},size:{default:tb.size.default,sm:tb.size.sm,icon:tb.size.icon},rounded:{true:tb.rounded.true,false:tb.rounded.false}},defaultVariants:{variant:"default",size:"default",rounded:"true"}},tb.base);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var t_=r(2162);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/For.tsx
var tw=r(7073);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/OptionList.tsx
var tx=e=>{var{options:t,onChange:r}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:tA.wrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",onClick:()=>r(e.value),css:tA.item,children:e.label},t)}})})};var tA={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;padding-block:",x/* .spacing["8"] */.YK["8"],";max-height:400px;overflow-y:auto;"),item:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.caption */.I.caption(),";width:100%;padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["16"] */.YK["16"],";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;align-items:center;&:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";color:",x/* .colorTokens.text.title */.I6.text.title,";}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/Show.tsx
var tk=r(6025);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/useAnimation.tsx + 1 modules
var tY=r(203);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useSelectKeyboardNavigation.ts
var tI=e=>{var{options:t,isOpen:r,onSelect:n,onClose:o,selectedValue:a}=e;var[i,s]=(0,u.useState)(-1);var l=(0,u.useCallback)(e=>{if(!r)return;var a=(e,r)=>{var n;var o=e;var a=r==="down"?1:-1;do{o+=a;if(o<0)o=t.length-1;if(o>=t.length)o=0}while(o>=0&&o<t.length&&t[o].disabled)if((n=t[o])===null||n===void 0?void 0:n.disabled){return e}return o};switch(e.key){case"ArrowDown":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"down");return t});break;case"ArrowUp":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"up");return t});break;case"Enter":e.preventDefault();e.stopPropagation();if(i>=0&&i<t.length){var l=t[i];if(!l.disabled){o();n(l)}}break;case"Escape":e.preventDefault();e.stopPropagation();o();break;default:break}},[r,t,i,n,o]);(0,u.useEffect)(()=>{if(r){if(i===-1){var e=t.findIndex(e=>e.value===a);var n=e>=0?e:t.findIndex(e=>!e.disabled);s(n)}document.addEventListener("keydown",l,true);return()=>document.removeEventListener("keydown",l,true)}},[r,l,t,a,i]);(0,u.useEffect)(()=>{if(!r){s(-1)}},[r]);var c=(0,u.useCallback)(e=>{var r;if(!((r=t[e])===null||r===void 0?void 0:r.disabled)){s(e)}},[t]);return{activeIndex:i,setActiveIndex:c}};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/molecules/Popover.tsx
var tD=r(370);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/types.ts
var tC=r(8638);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
function tS(){var e=(0,M._)(["\n      &::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: ",";\n        color: ",";\n        border: 1px solid transparent;\n        -webkit-mask:\n          linear-gradient(#fff 0 0) padding-box,\n          linear-gradient(#fff 0 0);\n        -webkit-mask-composite: xor;\n        mask-composite: exclude;\n        border-radius: 6px;\n      }\n    "]);tS=function t(){return e};return e}function tM(){var e=(0,M._)(["\n        height: 32px;\n        padding-top: ",";\n        padding-bottom: ",";\n      "]);tM=function t(){return e};return e}function tE(){var e=(0,M._)(["\n        padding-left: ",";\n      "]);tE=function t(){return e};return e}function tF(){var e=(0,M._)(["\n          height: 48px;\n          padding-bottom: ",";\n        "]);tF=function t(){return e};return e}function tH(){var e=(0,M._)(["\n        height: 56px;\n        padding-bottom: ",";\n\n        ","\n      "]);tH=function t(){return e};return e}function tT(){var e=(0,M._)(["\n        background-color: ",";\n      "]);tT=function t(){return e};return e}function tK(){var e=(0,M._)(["\n        position: relative;\n        border: none;\n        background: transparent;\n      "]);tK=function t(){return e};return e}function tO(){var e=(0,M._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);tO=function t(){return e};return e}function tN(){var e=(0,M._)(["\n          border-color: ",";\n          background-color: ",";\n        "]);tN=function t(){return e};return e}function tP(){var e=(0,M._)(["\n      bottom: ",";\n    "]);tP=function t(){return e};return e}function tL(){var e=(0,M._)(["\n      padding-left: calc("," + 1px);\n    "]);tL=function t(){return e};return e}function tR(){var e=(0,M._)(["\n        color: ",";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "]);tR=function t(){return e};return e}function tB(){var e=(0,M._)(["\n      min-width: 200px;\n    "]);tB=function t(){return e};return e}function tz(){var e=(0,M._)(["\n      background-color: ",";\n    "]);tz=function t(){return e};return e}function tV(){var e=(0,M._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);tV=function t(){return e};return e}function tW(){var e=(0,M._)(["\n      transform: rotate(180deg);\n    "]);tW=function t(){return e};return e}var tj=e=>{var{size:t="regular",leftIconPadding:r=48,wrapperCss:n,options:o,field:a,fieldState:i,onChange:s=Y/* .noop */.lQ,label:l,placeholder:c="",disabled:f,readOnly:p,loading:h,isSearchable:v=false,isInlineLabel:g,hideCaret:x,listLabel:A,isClearable:k=false,helpText:D,removeOptionsMinWidth:C=false,leftIcon:S,iconSize:M,removeBorder:E,dataAttribute:F,isSecondary:H=false,isMagicAi:T=false,isAiOutline:K=false,selectOnFocus:O,optionItemCss:N}=e;var P;var L=M!==null&&M!==void 0?M:t==="small"?20:32;var R=(0,u.useCallback)(()=>o.find(e=>e.value===a.value)||{label:"",value:"",description:""},[a.value,o]);var B=(0,u.useMemo)(()=>o.some(e=>(0,tC/* .isDefined */.O9)(e.description)),[o]);var[z,V]=(0,u.useState)((P=R())===null||P===void 0?void 0:P.label);var[W,j]=(0,u.useState)(false);var[q,U]=(0,u.useState)("");var[G,Q]=(0,u.useState)(false);var $=(0,u.useRef)(null);var Z=(0,u.useRef)(null);var X=(0,u.useRef)(null);var J=(0,u.useRef)(null);var ee=(0,u.useMemo)(()=>{if(v){return o.filter(e=>{var{label:t}=e;return t.toLowerCase().includes(q.toLowerCase())})}return o},[q,v,o]);var et=(0,u.useMemo)(()=>{return o.find(e=>e.value===a.value)},[a.value,o]);var er=(0,b._)({},(0,tC/* .isDefined */.O9)(F)&&{[F]:true});(0,u.useEffect)(()=>{var e;V((e=R())===null||e===void 0?void 0:e.label)},[a.value,R]);(0,u.useEffect)(()=>{if(G){var e;V((e=R())===null||e===void 0?void 0:e.label)}},[R,G]);var en=(e,t)=>{t===null||t===void 0?void 0:t.stopPropagation();if(!e.disabled){Q(false);j(false);U("");a.onChange(e.value);s(e)}};var{activeIndex:eo,setActiveIndex:ea}=tI({options:ee,isOpen:G,selectedValue:a.value,onSelect:en,onClose:()=>{Q(false);j(false);U("")}});(0,u.useEffect)(()=>{if(G&&eo>=0&&J.current){J.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[G,eo]);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{fieldState:i,field:a,label:l,disabled:f||o.length===0,readOnly:p,loading:h,isInlineLabel:g,helpText:D,removeBorder:E,isSecondary:H,isMagicAi:T,children:e=>{var s,l;var{css:u}=e,g=(0,tf._)(e,["css"]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:tU.mainWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:tU.inputWrapper(K),ref:Z,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:tU.leftIcon,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:S,children:S}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:et===null||et===void 0?void 0:et.icon,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:e,width:L,height:L})})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:{width:"100%"},children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},g,er),{ref:e=>{a.ref(e);// @ts-ignore
$.current=e;// this is not ideal but it is the only way to set ref to the input element
},className:"tutor-input-field",css:[u,n,tU.input({hasLeftIcon:!!S||!!(et===null||et===void 0?void 0:et.icon),leftIconPadding:r,hasDescription:B,hasError:!!i.error,isMagicAi:T,isAiOutline:K,size:t})],autoComplete:"off",readOnly:p||!v,placeholder:c,value:W?q:z,title:z,onClick:e=>{var t;e.stopPropagation();Q(e=>!e);(t=$.current)===null||t===void 0?void 0:t.focus()},onKeyDown:e=>{if(e.key==="Enter"){var t;e.preventDefault();Q(e=>!e);(t=$.current)===null||t===void 0?void 0:t.focus()}if(e.key==="Tab"){Q(false)}},onFocus:O&&v?e=>{e.target.select()}:undefined,onChange:e=>{V(e.target.value);if(v){j(true);U(e.target.value)}},"data-select":true})),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:B,children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:tU.description({hasLeftIcon:!!S,leftIconPadding:r,size:t}),title:(s=R())===null||s===void 0?void 0:s.description,children:(l=R())===null||l===void 0?void 0:l.description})})]}),!x&&!h&&/*#__PURE__*/(0,d/* .jsx */.Y)("button",{tabIndex:-1,type:"button",css:tU.caretButton({isOpen:G}),onClick:()=>{var e;Q(e=>!e);(e=$.current)===null||e===void 0?void 0:e.focus()},disabled:f||p||o.length===0,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"chevronDown",width:t==="small"?16:20,height:t==="small"?16:20})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:Z,isOpen:G,dependencies:[ee.length],animationType:tY/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{Q(false);j(false);U("")},children:/*#__PURE__*/(0,d/* .jsxs */.FD)("ul",{css:[tU.options(C)],children:[!!A&&/*#__PURE__*/(0,d/* .jsx */.Y)("li",{css:tU.listLabel,children:A}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:ee.length>0,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("li",{css:tU.emptyState,children:(0,m.__)("No options available","tutor-pro")}),children:ee.map((e,t)=>/*#__PURE__*/(0,d/* .jsx */.Y)("li",{ref:e.value===a.value?X:eo===t?J:null,css:[tU.optionItem({isSelected:e.value===a.value,isActive:t===eo,isDisabled:!!e.disabled}),N],children:/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:tU.label,onClick:t=>{if(!e.disabled){en(e,t)}},disabled:e.disabled,title:e.label,onMouseOver:()=>ea(t),onMouseLeave:()=>t!==eo&&ea(-1),onFocus:()=>ea(t),"aria-selected":eo===t,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:e.icon,width:L,height:L})}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))}),k&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:tU.clearButton({isDisabled:z===""}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",disabled:z==="",icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"delete"}),onClick:()=>{a.onChange(null);V("");U("");Q(false)},children:(0,m.__)("Clear","tutor-pro")})})]})})]})}})};/* export default */const tq=tj;var tU={mainWrapper:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;"),inputWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,h/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;",e&&(0,h/* .css */.AH)(tS(),x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,x/* .colorTokens.text.primary */.I6.text.primary))},leftIcon:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;left:",x/* .spacing["8"] */.YK["8"],";",k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;height:100%;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";z-index:",x/* .zIndex.positive */.fE.positive,";"),input:e=>{var{hasLeftIcon:t,leftIconPadding:r,hasDescription:n,hasError:o=false,isMagicAi:a=false,isAiOutline:i=false,size:s}=e;return/*#__PURE__*/(0,h/* .css */.AH)("&.tutor-input-field:not(textarea){",A/* .typography.body */.I.body(),";width:100%;cursor:pointer;padding-right:",x/* .spacing["32"] */.YK["32"],";",k/* .styleUtils.textEllipsis */.x.textEllipsis,";background-color:transparent;background-color:",x/* .colorTokens.background.white */.I6.background.white,";",s==="small"&&(0,h/* .css */.AH)(tM(),x/* .spacing["6"] */.YK["6"],x/* .spacing["6"] */.YK["6"])," ",t&&(0,h/* .css */.AH)(tE(),x/* .spacing */.YK[r])," ",n&&(0,h/* .css */.AH)(tH(),x/* .spacing["24"] */.YK["24"],s==="small"&&(0,h/* .css */.AH)(tF(),x/* .spacing["20"] */.YK["20"]))," ",o&&(0,h/* .css */.AH)(tT(),x/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",i&&(0,h/* .css */.AH)(tK()),":focus{",k/* .styleUtils.inputFocus */.x.inputFocus,";",a&&(0,h/* .css */.AH)(tO(),x/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,x/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",o&&(0,h/* .css */.AH)(tN(),x/* .colorTokens.stroke.danger */.I6.stroke.danger,x/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),"}}")},description:e=>{var{hasLeftIcon:t,leftIconPadding:r,size:n}=e;return/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    color:",x/* .colorTokens.text.hints */.I6.text.hints,";position:absolute;bottom:",x/* .spacing["8"] */.YK["8"],";padding-inline:calc(",x/* .spacing["16"] */.YK["16"]," + 1px) ",x/* .spacing["32"] */.YK["32"],";",n==="small"&&(0,h/* .css */.AH)(tP(),x/* .spacing["4"] */.YK["4"])," ",t&&(0,h/* .css */.AH)(tL(),x/* .spacing */.YK[r]))},listLabel:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";min-height:40px;display:flex;align-items:center;padding-left:",x/* .spacing["16"] */.YK["16"],";"),clearButton:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["8"] */.YK["8"],";border-top:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";& > button{padding:0;width:100%;font-size:",x/* .fontSize["12"] */.J["12"],";> span{justify-content:center;}",!t&&(0,h/* .css */.AH)(tR(),x/* .colorTokens.text.title */.I6.text.title),"}")},options:e=>/*#__PURE__*/(0,h/* .css */.AH)("z-index:",x/* .zIndex.dropdown */.fE.dropdown,";background-color:",x/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",x/* .shadow.popover */.r7.popover,";padding:",x/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",x/* .borderRadius["6"] */.Vq["6"],";",k/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,h/* .css */.AH)(tB())),optionItem:e=>{var{isSelected:t=false,isActive:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:",n?"not-allowed":"pointer",";opacity:",n?.5:1,";",r&&(0,h/* .css */.AH)(tz(),x/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",!n&&x/* .colorTokens.background.hover */.I6.background.hover,";}",!n&&t&&(0,h/* .css */.AH)(tV(),x/* .colorTokens.background.active */.I6.background.active,x/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],x/* .borderRadius["6"] */.Vq["6"],x/* .borderRadius["6"] */.Vq["6"]))},label:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",x/* .colorTokens.text.title */.I6.text.title,";width:100%;height:100%;display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";margin:0 ",x/* .spacing["12"] */.YK["12"],";padding:",x/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",x/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background-color:transparent;color:",x/* .colorTokens.text.title */.I6.text.title,";}span{flex-shrink:0;",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"      width:100%;}svg{flex-shrink:0;}"),arrowUpDown:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;justify-content:center;align-items:center;margin-top:",x/* .spacing["2"] */.YK["2"],";"),optionsContainer:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;max-width:calc(100% - 32px);"),caretButton:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";position:absolute;right:",x/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";padding:",x/* .spacing["6"] */.YK["6"],";height:100%;&:focus,&:active,&:hover{background:none;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,h/* .css */.AH)(tW()))},emptyState:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.flexCenter */.x.flexCenter(),";padding:",x/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/config/magic-ai.ts
var tG=[{label:"English",value:"english"},{label:"简体中文",value:"simplified-chinese"},{label:"繁體中文",value:"traditional-chinese"},{label:"Español",value:"spanish"},{label:"Français",value:"french"},{label:"日本語",value:"japanese"},{label:"Deutsch",value:"german"},{label:"Português",value:"portuguese"},{label:"العربية",value:"arabic"},{label:"Русский",value:"russian"},{label:"Italiano",value:"italian"},{label:"한국어",value:"korean"},{label:"हिन्दी",value:"hindi"},{label:"Nederlands",value:"dutch"},{label:"Polski",value:"polish"},{label:"አማርኛ",value:"amharic"},{label:"Български",value:"bulgarian"},{label:"বাংলা",value:"bengali"},{label:"Čeština",value:"czech"},{label:"Dansk",value:"danish"},{label:"Ελληνικά",value:"greek"},{label:"Eesti",value:"estonian"},{label:"فارسی",value:"persian"},{label:"Filipino",value:"filipino"},{label:"Hrvatski",value:"croatian"},{label:"Magyar",value:"hungarian"},{label:"Bahasa Indonesia",value:"indonesian"},{label:"Lietuvių",value:"lithuanian"},{label:"Latviešu",value:"latvian"},{label:"Melayu",value:"malay"},{label:"Norsk",value:"norwegian"},{label:"Română",value:"romanian"},{label:"Slovenčina",value:"slovak"},{label:"Slovenščina",value:"slovenian"},{label:"Српски",value:"serbian"},{label:"Svenska",value:"swedish"},{label:"ภาษาไทย",value:"thai"},{label:"Türkçe",value:"turkish"},{label:"Українська",value:"ukrainian"},{label:"اردو",value:"urdu"},{label:"Tiếng Việt",value:"vietnamese"}];var tQ=[{label:(0,m.__)("Formal","tutor-pro"),value:"formal"},{label:(0,m.__)("Casual","tutor-pro"),value:"casual"},{label:(0,m.__)("Professional","tutor-pro"),value:"professional"},{label:(0,m.__)("Enthusiastic","tutor-pro"),value:"enthusiastic"},{label:(0,m.__)("Informational","tutor-pro"),value:"informational"},{label:(0,m.__)("Funny","tutor-pro"),value:"funny"}];var t$=[{label:(0,m.__)("Title","tutor-pro"),value:"title"},{label:(0,m.__)("Essay","tutor-pro"),value:"essay"},{label:(0,m.__)("Paragraph","tutor-pro"),value:"paragraph"},{label:(0,m.__)("Outline","tutor-pro"),value:"outline"}];// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/PromptControls.tsx
var tZ=e=>{var{form:t}=e;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:tX.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:t.control,name:"characters",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,y._)((0,b._)({},e),{isMagicAi:true,label:(0,m.__)("Character Limit","tutor-pro"),type:"number"}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:t.control,name:"language",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,y._)((0,b._)({},e),{isMagicAi:true,label:(0,m.__)("Language","tutor-pro"),options:tG}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:t.control,name:"tone",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,y._)((0,b._)({},e),{isMagicAi:true,options:tQ,label:(0,m.__)("Tone","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:t.control,name:"format",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,y._)((0,b._)({},e),{isMagicAi:true,label:(0,m.__)("Format","tutor-pro"),options:t$}))})]})};var tX={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:repeat(2,1fr);gap:",x/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Skeleton.tsx
function tJ(){var e=(0,M._)(["\n      border-radius: ",";\n    "]);tJ=function t(){return e};return e}function t0(){var e=(0,M._)(["\n          background: linear-gradient(89.17deg, #fef4ff 0.2%, #f9d3ff 50.09%, #fef4ff 96.31%);\n        "]);t0=function t(){return e};return e}function t1(){var e=(0,M._)(["\n      :after {\n        content: '';\n        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);\n        position: absolute;\n        transform: translateX(-100%);\n        inset: 0;\n        ","\n\n        animation: ","s linear 0.5s infinite normal none running ",";\n      }\n    "]);t1=function t(){return e};return e}var t6=/*#__PURE__*/(0,u.forwardRef)((e,t)=>{var{width:r="100%",height:n=16,animation:o=false,isMagicAi:a=false,isRound:i=false,animationDuration:s=1.6,className:l}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)("span",{ref:t,css:t3.skeleton(r,n,o,a,i,s),className:l})});/* export default */const t2=t6;var t4={wave:/*#__PURE__*/(0,h/* .keyframes */.i7)("0%{transform:translateX(-100%);}50%{transform:translateX(0%);}100%{transform:translateX(100%);}")};var t3={skeleton:(e,t,r,n,o,a)=>/*#__PURE__*/(0,h/* .css */.AH)("display:block;width:",(0,tC/* .isNumber */.Et)(e)?"".concat(e,"px"):e,";height:",(0,tC/* .isNumber */.Et)(t)?"".concat(t,"px"):t,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";background-color:",!n?"rgba(0, 0, 0, 0.11)":x/* .colorTokens.background.magicAi.skeleton */.I6.background.magicAi.skeleton,";position:relative;-webkit-mask-image:-webkit-radial-gradient(center,white,black);overflow:hidden;",o&&(0,h/* .css */.AH)(tJ(),x/* .borderRadius.circle */.Vq.circle)," ",r&&(0,h/* .css */.AH)(t1(),n&&(0,h/* .css */.AH)(t0()),a,t4.wave))};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/SkeletonLoader.tsx
var t5=()=>{return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:t7.container,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:t7.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"20%",height:"12px"}),/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"40%",height:"12px"})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:t7.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"80%",height:"12px"}),/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,isMagicAi:true,width:"80%",height:"12px"})]})]})};/* export default */const t8=t5;var t7={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";"),container:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["32"] */.YK["32"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useFormWithGlobalError.ts
var t9=e=>{var[t,r]=(0,u.useState)();var n=td(e);return(0,y._)((0,b._)({},n),{submitError:t,setSubmitError:r})};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useMutation.js + 1 modules
var re=r(7947);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Toast.tsx
var rt=r(3833);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/api.ts + 50 modules
var rr=r(6243);// EXTERNAL MODULE: ../tutor/assets/core/ts/utils/endpoints.ts
var rn=r(7152);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/magic-ai.ts
var ro=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].GENERATE_AI_IMAGE */.A.GENERATE_AI_IMAGE,e)};var ra=()=>{return(0,re/* .useMutation */.n)({mutationFn:ro})};var ri=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].MAGIC_FILL_AI_IMAGE */.A.MAGIC_FILL_AI_IMAGE,e).then(e=>e.data.data[0].b64_json)};var rs=()=>{var{showToast:e}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:ri,onError:t=>{e({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(t)})}})};var rl=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].MAGIC_TEXT_GENERATION */.A.MAGIC_TEXT_GENERATION,e)};var rc=()=>{var{showToast:e}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:rl,onError:t=>{e({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(t)})}})};var rd=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].MAGIC_AI_MODIFY_CONTENT */.A.MAGIC_AI_MODIFY_CONTENT,e)};var ru=()=>{var{showToast:e}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:rd,onError:t=>{e({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(t)})}})};var rf=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].USE_AI_GENERATED_IMAGE */.A.USE_AI_GENERATED_IMAGE,e)};var rp=()=>{var{showToast:e}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:rf,onError:t=>{e({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(t)})}})};var rh=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var rv=e=>{var{showToast:t}=useToast();return useMutation({mutationKey:["GenerateCourseContent",e],mutationFn:rh,onError:e=>{t({type:"danger",message:convertToErrorMessage(e)})}})};var rg=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var rm=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:rg,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var rb=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_TOPIC_CONTENT,e,{signal:e.signal})};var ry=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:rb,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var r_=e=>{return wpAjaxInstance.post(endpoints.SAVE_AI_GENERATED_COURSE_CONTENT,e)};var rw=()=>{var{showToast:e}=useToast();var t=useQueryClient();return useMutation({mutationFn:r_,onSuccess(){t.invalidateQueries({queryKey:["CourseDetails"]})},onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var rx=e=>{return wpAjaxInstance.post(endpoints.GENERATE_QUIZ_QUESTIONS,e,{signal:e.signal})};var rA=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:rx,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var rk=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_QUIZ_QUESTIONS,e,{signal:e.signal})};var rY=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:rk,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var rI=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].OPEN_AI_SAVE_SETTINGS */.A.OPEN_AI_SAVE_SETTINGS,(0,b._)({},e))};var rD=()=>{var{showToast:e}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:rI,onSuccess:t=>{e({type:"success",message:t.message})},onError:t=>{e({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(t)})}})};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/BasicModalWrapper.tsx
var rC=r(3241);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/AITextModal.tsx
var rS=[(0,m.__)("Mastering Digital Marketing: A Complete Guide","tutor-pro"),(0,m.__)("The Ultimate Photoshop Course for Beginners","tutor-pro"),(0,m.__)("Python Programming: From Zero to Hero","tutor-pro"),(0,m.__)("Creative Writing Essentials: Unlock Your Storytelling Potential","tutor-pro"),(0,m.__)("The Complete Guide to Web Development with React","tutor-pro"),(0,m.__)("Master Public Speaking: Deliver Powerful Presentations","tutor-pro"),(0,m.__)("Excel for Business: From Basics to Advanced Analytics","tutor-pro"),(0,m.__)("Fitness Fundamentals: Build Strength and Confidence","tutor-pro"),(0,m.__)("Photography Made Simple: Capture Stunning Shots","tutor-pro"),(0,m.__)("Financial Freedom: Learn the Basics of Investing","tutor-pro")];var rM=e=>{var{title:t,icon:r,closeModal:n,field:o,format:a="essay",characters:i=250,is_html:s=false,fieldLabel:l="",fieldPlaceholder:c=""}=e;var f=t9({defaultValues:{prompt:"",characters:i,language:"english",tone:"formal",format:a}});var p=rc();var v=ru();var[g,A]=(0,u.useState)([]);var[k,I]=(0,u.useState)(0);var[D,C]=(0,u.useState)(false);var[S,M]=(0,u.useState)(null);var E=(0,u.useRef)(null);var H=(0,u.useRef)(null);var T=(0,u.useMemo)(()=>{return g[k]},[g,k]);var K=f.watch("prompt");function O(e){A(t=>[e,...t]);I(0)}function N(e,t){return F(function*(){if(g.length===0){return}var r=g[k];if(e==="translation"&&!!t){var n=yield v.mutateAsync({type:"translation",content:r,language:t,is_html:s});if(n.data){O(n.data)}return}if(e==="change_tone"&&!!t){var o=yield v.mutateAsync({type:"change_tone",content:r,tone:t,is_html:s});if(o.data){O(o.data)}return}var a=yield v.mutateAsync({type:e,content:r,is_html:s});if(a.data){O(a.data)}})()}(0,u.useEffect)(()=>{f.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,d/* .jsx */.Y)(rC/* ["default"] */.A,{onClose:n,title:t,icon:r,maxWidth:524,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("form",{onSubmit:f.handleSubmit(e=>F(function*(){var t=yield p.mutateAsync((0,y._)((0,b._)({},e),{is_html:s}));if(t.data){O(t.data)}})()),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rF.container,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rF.fieldsWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:f.control,name:"prompt",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(t_/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:l||(0,m.__)("Craft Your Course Description","tutor-pro"),placeholder:c||(0,m.__)("Provide a brief overview of your course topic, target audience, and key takeaways","tutor-pro"),rows:4,isMagicAi:true}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:rF.inspireButton,onClick:()=>{var e=rS.length;var t=Math.floor(Math.random()*e);f.reset((0,y._)((0,b._)({},f.getValues()),{prompt:rS[t]}))},children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"bulbLine"}),(0,m.__)("Inspire Me","tutor-pro")]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!p.isPending&&!v.isPending,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(t8,{}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:g.length>0,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(tZ,{form:f}),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rF.actionBar,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:rF.navigation,children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:g.length>1,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.max(0,e-1)),disabled:k===0,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:!tp/* .isRTL */.V8?"chevronLeft":"chevronRight",width:20,height:20})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rF.pageInfo,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:k+1})," / ",g.length]}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.min(g.length-1,e+1)),disabled:k===g.length-1,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:!tp/* .isRTL */.V8?"chevronRight":"chevronLeft",width:20,height:20})})]})}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",onClick:()=>F(function*(){if(g.length===0){return}var e=g[k];yield(0,Y/* .copyToClipboard */.lW)(e);C(true);setTimeout(()=>{C(false)},1500)})(),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:D,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"copy",width:20,height:20}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"checkFilled",width:20,height:20,style:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.text.success */.I6.text.success," !important;")})})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:rF.content,dangerouslySetInnerHTML:{__html:T}})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rF.otherActions,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",roundedFull:false,onClick:()=>N("rephrase"),children:(0,m.__)("Rephrase","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",roundedFull:false,onClick:()=>N("make_shorter"),children:(0,m.__)("Make Shorter","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{variant:"outline",roundedFull:false,ref:E,onClick:()=>M("tone"),children:[(0,m.__)("Change Tone","tutor-pro"),/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{variant:"outline",roundedFull:false,ref:H,onClick:()=>M("translate"),children:[(0,m.__)("Translate to","tutor-pro"),/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",roundedFull:false,onClick:()=>N("write_as_bullets"),children:(0,m.__)("Write as Bullets","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",roundedFull:false,onClick:()=>N("make_longer"),children:(0,m.__)("Make Longer","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",roundedFull:false,onClick:()=>N("simplify_language"),children:(0,m.__)("Simplify Language","tutor-pro")})]})]})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{isOpen:S==="tone",triggerRef:E,arrow:true,closePopover:()=>M(null),maxWidth:"160px",animationType:tY/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tx,{options:tQ,onChange:e=>F(function*(){M(null);yield N("change_tone",e)})()})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{isOpen:S==="translate",triggerRef:H,closePopover:()=>M(null),maxWidth:"160px",animationType:tY/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tx,{options:tG,onChange:e=>F(function*(){M(null);yield N("translation",e)})()})}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:rF.footer,children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:g.length>0,fallback:/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{type:"submit",disabled:p.isPending||!K||v.isPending,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,m.__)("Generate Now","tutor-pro")]}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"outline",type:"submit",disabled:p.isPending||!K||v.isPending,children:(0,m.__)("Generate Again","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"primary",disabled:p.isPending||g.length===0||v.isPending,onClick:()=>{o.onChange(g[k]);n()},children:(0,m.__)("Use This","tutor-pro")})]})})]})})};/* export default */const rE=rM;var rF={container:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",x/* .spacing["16"] */.YK["16"],";"),fieldsWrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;textarea{padding-bottom:",x/* .spacing["40"] */.YK["40"]," !important;}"),footer:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["12"] */.YK["12"]," ",x/* .spacing["16"] */.YK["16"],";display:flex;align-items:center;justify-content:end;gap:",x/* .spacing["10"] */.YK["10"],";box-shadow:0px 1px 0px 0px #e4e5e7 inset;button{width:fit-content;}"),pageInfo:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.hints */.I6.text.hints,";& > span{font-weight:",x/* .fontWeight.medium */.Wy.medium,";color:",x/* .colorTokens.text.primary */.I6.text.primary,";}"),inspireButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",x/* .spacing["12"] */.YK["12"],";left:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";color:",x/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",x/* .spacing["12"] */.YK["12"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",x/* .colorTokens.background.brand */.I6.background.brand,";color:",x/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",x/* .colorTokens.background.disable */.I6.background.disable,";color:",x/* .colorTokens.text.disable */.I6.text.disable,";}"),navigation:/*#__PURE__*/(0,h/* .css */.AH)("margin-left:-",x/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;"),content:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";height:180px;overflow-y:auto;background-color:",x/* .colorTokens.background.magicAi["default"] */.I6.background.magicAi["default"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";padding:",x/* .spacing["6"] */.YK["6"]," ",x/* .spacing["12"] */.YK["12"],";color:",x/* .colorTokens.text.magicAi */.I6.text.magicAi,";"),actionBar:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),otherActions:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;gap:",x/* .spacing["10"] */.YK["10"],";flex-wrap:wrap;& > button{width:fit-content;}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/Modal.tsx
var rH=r(2580);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var rT=r(4336);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/ProIdentifierModal.tsx
var rK={title:/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[(0,m.__)("Upgrade to Tutor LMS Pro today and experience the power of ","tutor-pro"),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:k/* .styleUtils.aiGradientText */.x.aiGradientText,children:(0,m.__)("AI Studio","tutor-pro")})]}),message:(0,m.__)("Upgrade your plan to access the AI feature","tutor-pro"),featuresTitle:(0,m.__)("Don’t miss out on this game-changing feature!","tutor-pro"),features:[(0,m.__)("Generate a complete course outline in seconds!","tutor-pro"),(0,m.__)("Let the AI Studio create Quizzes on your behalf and give your brain a well-deserved break.","tutor-pro"),(0,m.__)("Generate images, customize backgrounds, and even remove unwanted objects with ease.","tutor-pro"),(0,m.__)("Say goodbye to typos and grammar errors with AI-powered copy editing.","tutor-pro")],footer:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{onClick:()=>window.open(rT/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"crown",width:24,height:24}),children:(0,m.__)("Get Tutor LMS Pro","tutor-pro")})};var rO=e=>{var{title:t=rK.title,message:r=rK.message,featuresTitle:n=rK.featuresTitle,features:o=rK.features,closeModal:a,image:i,image2x:s,footer:l=rK.footer}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)(rC/* ["default"] */.A,{onClose:a,entireHeader:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:rP.message,children:r}),maxWidth:496,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rP.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,d/* .jsx */.Y)("h4",{css:rP.title,children:t})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,d/* .jsx */.Y)("img",{css:rP.image,src:i,alt:typeof t==="string"?t:(0,m.__)("Illustration","tutor-pro"),srcSet:s?"".concat(i," ").concat(s," 2x"):undefined})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,d/* .jsx */.Y)("h6",{css:rP.featuresTiTle,children:n})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:o.length,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:rP.features,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:o,children:(e,t)=>/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rP.feature,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:rP.checkIcon}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e})]},t)})})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:l,children:l})]})})};/* export default */const rN=rO;var rP={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("padding:0 ",x/* .spacing["24"] */.YK["24"]," ",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["24"] */.YK["24"],";",k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["16"] */.YK["16"],";"),message:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";padding-left:",x/* .spacing["8"] */.YK["8"],";padding-top:",x/* .spacing["24"] */.YK["24"],";padding-bottom:",x/* .spacing["4"] */.YK["4"],";"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.heading6 */.I.heading6("medium"),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),image:/*#__PURE__*/(0,h/* .css */.AH)("height:270px;width:100%;object-fit:cover;object-position:center;border-radius:",x/* .borderRadius["8"] */.Vq["8"],";"),featuresTiTle:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body("medium"),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),features:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["4"] */.YK["4"],";padding-right:",x/* .spacing["48"] */.YK["48"],";"),feature:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";gap:",x/* .spacing["12"] */.YK["12"],";",A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.title */.I6.text.title,";span{text-wrap:pretty;}"),checkIcon:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;color:",x/* .colorTokens.text.success */.I6.text.success,";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Alert.tsx
var rL={text:{warning:"#D47E00",success:"#D47E00",danger:"#f44337",info:"#D47E00",primary:"#D47E00"},icon:{warning:"#FAB000",success:"#FAB000",danger:"#f55e53",info:"#FAB000",primary:"#FAB000"},background:{warning:"#FBFAE9",success:"#FBFAE9",danger:"#fdd9d7",info:"#FBFAE9",primary:"#FBFAE9"}};var rR=e=>{var{children:t,type:r="warning",icon:n}=e;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rz.wrapper({type:r}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{style:rz.icon({type:r}),name:e,height:24,width:24})}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:t})]})};/* export default */const rB=rR;var rz={wrapper:e=>{var{type:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";display:flex;align-items:start;padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["12"] */.YK["12"],";width:100%;border-radius:",x/* .borderRadius.card */.Vq.card,";gap:",x/* .spacing["4"] */.YK["4"],";background-color:",rL.background[t],";color:",rL.text[t],";")},icon:e=>{var{type:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("color:",rL.icon[t],";flex-shrink:0;")}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Switch.tsx
function rV(){var e=(0,M._)(["\n        width: 26px;\n        height: 16px;\n      "]);rV=function t(){return e};return e}function rW(){var e=(0,M._)(["\n          top: 2px;\n          left: 3px;\n          width: 12px;\n          height: 12px;\n        "]);rW=function t(){return e};return e}function rj(){var e=(0,M._)(["\n            left: 11px;\n          "]);rj=function t(){return e};return e}function rq(){var e=(0,M._)(["\n      right: 3px;\n    "]);rq=function t(){return e};return e}function rU(){var e=(0,M._)(["\n      left: 3px;\n    "]);rU=function t(){return e};return e}var rG={switchStyles:e=>/*#__PURE__*/(0,h/* .css */.AH)("&[data-input]{all:unset;appearance:none;border:0;width:40px;height:24px;background:",x/* .colorTokens.color.black["10"] */.I6.color.black["10"],";border-radius:12px;position:relative;display:inline-block;vertical-align:middle;cursor:pointer;transition:background-color 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,h/* .css */.AH)(rV()),"      &::before{display:none !important;}&:focus{border:none;outline:none;box-shadow:none;}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:after{content:'';position:absolute;top:3px;left:",x/* .spacing["4"] */.YK["4"],";width:18px;height:18px;background:",x/* .colorTokens.background.white */.I6.background.white,";border-radius:",x/* .borderRadius.circle */.Vq.circle,";box-shadow:",x/* .shadow["switch"] */.r7["switch"],";transition:left 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,h/* .css */.AH)(rW()),"}&:checked{background:",x/* .colorTokens.primary.main */.I6.primary.main,";&:after{left:18px;",e==="small"&&(0,h/* .css */.AH)(rj()),"}}&:disabled{pointer-events:none;filter:none;opacity:0.5;}}"),labelStyles:e=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",e?x/* .colorTokens.text.title */.I6.text.title:x/* .colorTokens.text.subdued */.I6.text.subdued,";"),wrapperStyle:e=>/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:fit-content;flex-direction:",e==="left"?"row":"row-reverse",";column-gap:",x/* .spacing["12"] */.YK["12"],";position:relative;"),spinner:e=>/*#__PURE__*/(0,h/* .css */.AH)("display:flex;position:absolute;top:50%;transform:translateY(-50%);",e&&(0,h/* .css */.AH)(rq())," ",!e&&(0,h/* .css */.AH)(rU()))};var rQ=/*#__PURE__*/f().forwardRef((e,t)=>{var{id:r=(0,Y/* .nanoid */.Ak)(),name:n,label:o,value:a,checked:i,disabled:s,loading:l,onChange:c,labelPosition:u="left",labelCss:f,size:p="regular"}=e;var h=e=>{c===null||c===void 0?void 0:c(e.target.checked,e)};return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:rG.wrapperStyle(u),children:[o&&/*#__PURE__*/(0,d/* .jsx */.Y)("label",{css:[rG.labelStyles(i||false),f],htmlFor:r,children:o}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",{ref:t,value:a?String(a):undefined,type:"checkbox",name:n,id:r,checked:!!i,disabled:s,css:rG.switchStyles(p),onChange:h,"data-input":true}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:l,children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:rG.spinner(!!i),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* ["default"] */.Ay,{size:p==="small"?12:20})})})]})});/* export default */const r$=rQ;// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hoc/withVisibilityControl.tsx + 1 modules
var rZ=r(9586);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormSwitch.tsx
var rX=e=>{var{field:t,fieldState:r,label:n,disabled:o,loading:a,labelPosition:i="left",helpText:s,isHidden:l,labelCss:c,onChange:u}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:n,field:t,fieldState:r,loading:a,helpText:s,isHidden:l,isInlineLabel:true,children:e=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:r0.wrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(r$,(0,y._)((0,b._)({},t,e),{disabled:o,checked:t.value,labelCss:c,labelPosition:i,onChange:()=>{t.onChange(!t.value);u===null||u===void 0?void 0:u(!t.value)}}))})}})};/* export default */const rJ=(0,rZ/* .withVisibilityControl */.M)(rX);var r0={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;gap:",x/* .spacing["40"] */.YK["40"],";")};// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
var r1=r(856);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/validation.ts
var r6=()=>({required:{value:true,message:(0,m.__)("This field is required","tutor-pro")}});var r2=e=>{var{maxValue:t,message:r}=e;return{maxLength:{value:t,message:r||__("Max. value should be ".concat(t),"tutor-pro")}}};var r4=()=>({validate:e=>{if((e===null||e===void 0?void 0:e.amount)===undefined){return __("The field is required","tutor-pro")}return undefined}});var r3=e=>{if(!(0,r1/* .isValid */.f)(new Date(e||""))){return(0,m.__)("Invalid date entered!","tutor-pro")}return undefined};var r5=e=>({validate:t=>{if(t&&e<t.length){return __("Maximum ".concat(e," character supported"),"tutor-pro")}return undefined}});var r8=e=>{if(!e){return undefined}var t=(0,m.__)("Invalid time entered!","tutor-pro");var[r,n]=e.split(":");if(!r||!n){return t}var[o,a]=n.split(" ");if(!o||!a){return t}if(r.length!==2||o.length!==2){return t}if(Number(r)<1||Number(r)>12){return t}if(Number(o)<0||Number(o)>59){return t}if(!["am","pm"].includes(a.toLowerCase())){return t}return undefined};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/SetupOpenAiModal.tsx
function r7(){var e=(0,M._)(["\n      padding: ",";\n      padding-top: ",";\n    "]);r7=function t(){return e};return e}var r9,ne;var nt=((r9=rT/* .tutorConfig.settings */.P.settings)===null||r9===void 0?void 0:r9.chatgpt_enable)==="on";var nr=(ne=rT/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||ne===void 0?void 0:ne.includes(tp/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var nn=e=>{var{closeModal:t,image:r,image2x:n}=e;var o=t9({defaultValues:{openAIApiKey:"",enable_open_ai:nt},shouldFocusError:true});var a=rD();var i=e=>F(function*(){var r=yield a.mutateAsync({chatgpt_api_key:e.openAIApiKey,chatgpt_enable:e.enable_open_ai?1:0});if(r.status_code===200){t({action:"CONFIRM"});window.location.reload()}})();(0,u.useEffect)(()=>{o.setFocus("openAIApiKey");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,d/* .jsx */.Y)(rC/* ["default"] */.A,{onClose:()=>t({action:"CLOSE"}),title:nr?(0,m.__)("Set OpenAI API key","tutor-pro"):undefined,entireHeader:nr?undefined:/*#__PURE__*/(0,d/* .jsx */.Y)(d/* .Fragment */.FK,{children:" "}),maxWidth:560,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:na.wrapper({isCurrentUserAdmin:nr}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:nr,fallback:/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{css:na.image,src:r,srcSet:n?"".concat(r," 1x, ").concat(n," 2x"):"".concat(r," 1x"),alt:(0,m.__)("Connect API KEY","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:na.message,children:(0,m.__)("API is not connected","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:na.title,children:(0,m.__)("Please, ask your Admin to connect the API with Tutor LMS Pro.","tutor-pro")})]})]}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("form",{css:na.formWrapper,onSubmit:o.handleSubmit(i),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:na.infoText,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{dangerouslySetInnerHTML:{/* translators: %1$s and %2$s are opening and closing anchor tags for the "OpenAI User settings" link */__html:(0,m.sprintf)((0,m.__)("Find your Secret API key in your %1$sOpenAI User settings%2$s and paste it here to connect OpenAI with your Tutor LMS website.","tutor-pro"),'<a href="'.concat(rT/* ["default"].CHATGPT_PLATFORM_URL */.A.CHATGPT_PLATFORM_URL,'" target="_blank" rel="noopener noreferrer">'),"</a>")}}),/*#__PURE__*/(0,d/* .jsx */.Y)(rB,{type:"info",icon:"warning",children:(0,m.__)("The page will reload after submission. Make sure to save the course information.","tutor-pro")})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"openAIApiKey",control:o.control,rules:r6(),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,y._)((0,b._)({},e),{type:"password",isPassword:true,label:(0,m.__)("OpenAI API key","tutor-pro"),placeholder:(0,m.__)("Enter your OpenAI API key","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"enable_open_ai",control:o.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(rJ,(0,y._)((0,b._)({},e),{label:(0,m.__)("Enable OpenAI","tutor-pro")}))})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:na.formFooter,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{onClick:()=>t({action:"CLOSE"}),variant:"text",size:"small",children:(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{size:"small",onClick:o.handleSubmit(i),loading:a.isPending,children:(0,m.__)("Save","tutor-pro")})]})]})})})})};/* export default */const no=nn;var na={wrapper:e=>{var{isCurrentUserAdmin:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["20"] */.YK["20"],";",!t&&(0,h/* .css */.AH)(r7(),x/* .spacing["24"] */.YK["24"],x/* .spacing["6"] */.YK["6"]))},formWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["20"] */.YK["20"],";padding:",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["16"] */.YK["16"]," 0 ",x/* .spacing["16"] */.YK["16"],";"),infoText:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";",k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["8"] */.YK["8"],";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";a{",k/* .styleUtils.resetButton */.x.resetButton,"      color:",x/* .colorTokens.text.brand */.I6.text.brand,";}"),formFooter:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",x/* .spacing["16"] */.YK["16"],";border-top:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",x/* .spacing["16"] */.YK["16"],";"),image:/*#__PURE__*/(0,h/* .css */.AH)("height:310px;width:100%;object-fit:cover;object-position:center;border-radius:",x/* .borderRadius["8"] */.Vq["8"],";"),message:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.heading4 */.I.heading4("medium"),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";margin-top:",x/* .spacing["4"] */.YK["4"],";text-wrap:pretty;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-text.webp
const ni=r.p+"images/generate-text-269f7e17.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-text-2x.webp
const ns=r.p+"images/generate-text-2x-45983f4c.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInput.tsx
function nl(){var e=(0,M._)(["\n        height: 32px;\n        padding: "," ",";\n      "]);nl=function t(){return e};return e}function nc(){var e=(0,M._)(["\n      svg {\n        color: ",";\n      }\n    "]);nc=function t(){return e};return e}var nd;var nu=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var nf=(nd=rT/* .tutorConfig.settings */.P.settings)===null||nd===void 0?void 0:nd.chatgpt_key_exist;var np=e=>{var{size:t="regular",label:r,type:n="text",maxLimit:o,field:a,fieldState:i,disabled:s,readOnly:l,loading:c,placeholder:f,helpText:p,onChange:h,onKeyDown:v,isHidden:g,isClearable:x=false,isSecondary:A=false,removeBorder:D,dataAttribute:C,isInlineLabel:S=false,isPassword:M=false,style:E,formFieldWrapperCss:F,inputContainerCss:H,selectOnFocus:T=false,autoFocus:K=false,generateWithAi:O=false,isMagicAi:N=false,allowNegative:P=false,onClickAiButton:L}=e;var[R,B]=(0,u.useState)(n);var{showModal:z}=(0,rH/* .useModal */.h)();var V=(0,u.useRef)(null);var W;var j=(W=a.value)!==null&&W!==void 0?W:"";var q=undefined;if(R==="number"){j=(0,Y/* .parseNumberOnly */.TW)("".concat(j),P).replace(/(\..*)\./g,"$1")}if(o){q={maxLimit:o,inputCharacter:j.toString().length}}var U=(0,b._)({},(0,tC/* .isDefined */.O9)(C)&&{[C]:true});var G=()=>{if(!nu){z({component:rN,props:{image:ni,image2x:ns}})}else if(!nf){z({component:no,props:{image:ni,image2x:ns}})}else{z({component:rE,isMagicAi:true,props:{title:(0,m.__)("AI Studio","tutor-pro"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:120,field:a,fieldState:i,format:"title",is_html:false,fieldLabel:(0,m.__)("Create a Compelling Title","tutor-pro"),fieldPlaceholder:(0,m.__)("Describe the main focus of your course in a few words","tutor-pro")}});L===null||L===void 0?void 0:L()}};return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:r,field:a,fieldState:i,disabled:s,readOnly:l,loading:c,placeholder:f,helpText:p,isHidden:g,characterCount:q,isSecondary:A,removeBorder:D,isInlineLabel:S,inputStyle:E,wrapperCss:F,inputContainerCss:H,generateWithAi:O,onClickAiButton:G,isMagicAi:N,children:e=>{return/*#__PURE__*/(0,d/* .jsx */.Y)(d/* .Fragment */.FK,{children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:nv.container(x||M),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},a,e,U),{css:[e.css,nv.input(t)],type:R==="number"?"text":R,value:j,autoFocus:K,onChange:e=>{var{value:t}=e.target;var r=R==="number"?(0,Y/* .parseNumberOnly */.TW)(t):t;a.onChange(r);if(h){h(r)}},onClick:e=>{e.stopPropagation()},onKeyDown:e=>{e.stopPropagation();v===null||v===void 0?void 0:v(e.key)},autoComplete:"off",ref:e=>{a.ref(e);// @ts-ignore
V.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!T||!V.current){return}V.current.select()}})),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:M,children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>B(e=>e==="password"?"text":"password"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"eye",width:24,height:24}),"aria-label":(0,m.__)("Show/Hide Password","tutor-pro"),buttonCss:nv.eyeButton({type:R})})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:x&&!!a.value&&R!=="password",children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>a.onChange(""),buttonCss:k/* .styleUtils.inputClearButton */.x.inputClearButton,icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"cross",width:24,height:24}),"aria-label":(0,m.__)("Clear","tutor-pro")})})]})})}})};/* export default */const nh=(0,rZ/* .withVisibilityControl */.M)(np);var nv={input:e=>/*#__PURE__*/(0,h/* .css */.AH)("&.tutor-input-field:not(textarea){min-height:auto;",e==="small"&&(0,h/* .css */.AH)(nl(),x/* .spacing["6"] */.YK["6"],x/* .spacing["12"] */.YK["12"]),"}"),container:e=>/*#__PURE__*/(0,h/* .css */.AH)("position:relative;display:flex;input{&.tutor-input-field{",e&&"padding-right: ".concat(x/* .spacing["36"] */.YK["36"],";"),";}}"),eyeButton:e=>{var{type:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.inputClearButton */.x.inputClearButton,";",t!=="password"&&(0,h/* .css */.AH)(nc(),x/* .colorTokens.icon.brand */.I6.icon.brand))}};// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/polished@4.3.1/node_modules/polished/lib/color/rgba.js
var ng=r(8212);var nm=/*#__PURE__*/r.n(ng);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Tooltip.tsx + 56 modules
var nb=r(3909);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/WPEditor.tsx
function ny(){var e=(0,M._)(["\n        ","\n      "]);ny=function t(){return e};return e}function n_(){var e=(0,M._)(["\n        border-top-right-radius: ",";\n      "]);n_=function t(){return e};return e}function nw(){var e=(0,M._)(["\n          ","\n        "]);nw=function t(){return e};return e}function nx(){var e=(0,M._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);nx=function t(){return e};return e}var nA=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function nk(e,t,r,n,o,a,i,s,l,c,d,u,f){var p=u!==null&&u!==void 0?u:n?"bold italic underline | image | ".concat(nA?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(nA?" codesample":""," | wp_adv");var h=f!==null&&f!==void 0?f:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen";p=d?p:p.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:l||200,autoresize_max_height:c||500,wp_autoresize_on:true,browser_spellcheck:!s,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(nA?",codesample":""),skin:"light",skin_url:"".concat(rT/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!s,toolbar1:p,toolbar2:n?false:h,content_css:"".concat(rT/* .tutorConfig.site_url */.P.site_url,"/wp-includes/css/dashicons.min.css,").concat(rT/* .tutorConfig.site_url */.P.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(rT/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!s,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:n=>{n.on("init",()=>{if(e&&!s){n.getBody().focus()}if(s){n.setMode("readonly");var t=n.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){n.iframeElement.style.height="".concat(e,"px")}},500)}});n.on("change keyup paste",()=>{t(n.getContent())});n.on("focus",()=>{r(true)});n.on("blur",()=>r(false));n.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}i===null||i===void 0?void 0:i(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!o&&!n&&!s,drag_drop_upload:true,quicktags:a||n||s?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var nY=e=>{var{value:t="",onChange:r,isMinimal:n,hideMediaButtons:o,hideQuickTags:a,autoFocus:i=false,onFullScreenChange:s,readonly:l=false,min_height:c,max_height:f,toolbar1:p,toolbar2:h}=e;var v=(0,u.useRef)(null);var{current:g}=(0,u.useRef)((0,Y/* .nanoid */.Ak)());var[m,_]=(0,u.useState)(i);var w=e=>{var t=e.target;r(t.value)};var x=(0,u.useCallback)(e=>{var{tinymce:t}=window;if(!t||m){return}var r=window.tinymce.get(g);if(r){if(e!==r.getContent()){r.setContent(e)}}},[g,m]);(0,u.useEffect)(()=>{x(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,u.useEffect)(()=>{var e=v.current;if(typeof window.wp!=="undefined"&&window.wp.editor){var i=nk(m,r,_,n,o,a,s,l,c,f,tp/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile,p,h);// When rendered inside an iframe (e.g., via createPortal),
// wp.editor.initialize() fails because it uses document.getElementById()
// which only searches the parent document. Additionally, standard TinyMCE
// mode creates a content iframe internally using parent document DOM APIs,
// causing editor.getBody() to return undefined in cross-document contexts.
// Using inline mode with the `target` option avoids both issues:
// TinyMCE renders directly into the target element without a content iframe.
var d=e&&e.ownerDocument!==document;if(d){var u,x;var A=window.tinymce.get(g);if(A){A.remove()}// TinyMCE inline mode requires a block-level element (not textarea).
// Create a div in the iframe's document to serve as the inline editor target.
var k=e.ownerDocument;var Y=k.createElement("div");Y.id=g;Y.innerHTML=t;// Hide textarea and transfer its id to the div (TinyMCE uses element id for registration)
e.removeAttribute("id");e.style.display="none";(u=e.parentNode)===null||u===void 0?void 0:u.insertBefore(Y,e.nextSibling);// Filter out plugins that require TinyMCE's content iframe (unavailable in inline mode)
var I=["wpautoresize","fullscreen","tabfocus"];var D=(x=i.tinymce.plugins)===null||x===void 0?void 0:x.split(",").map(e=>e.trim()).filter(e=>!I.includes(e)).join(",");window.tinymce.init((0,y._)((0,b._)({},i.tinymce),{target:Y,inline:true,plugins:D,// Simplified setup: inline mode has no iframeElement or contentDocument
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:e=>{e.on("init",()=>{if(l){e.setMode("readonly")}var t=e.getBody();if(t){t.style.backgroundColor="transparent"}if(m&&!l){t===null||t===void 0?void 0:t.focus()}});e.on("change keyup paste",()=>{r(e.getContent())});e.on("focus",()=>_(true));e.on("blur",()=>_(false))}}));return()=>{var t=window.tinymce.get(g);if(t){t.remove()}Y.remove();// Restore textarea
if(e){e.id=g;e.style.display=""}}}window.wp.editor.remove(g);window.wp.editor.initialize(g,i);e===null||e===void 0?void 0:e.addEventListener("change",w);e===null||e===void 0?void 0:e.addEventListener("input",w);return()=>{window.wp.editor.remove(g);e===null||e===void 0?void 0:e.removeEventListener("change",w);e===null||e===void 0?void 0:e.removeEventListener("input",w)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[l]);return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:nD.wrapper({hideQuickTags:a,isMinimal:n,isFocused:m,isReadOnly:l}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("textarea",{"data-cy":"tutor-tinymce",ref:v,id:g,defaultValue:t})})};/* export default */const nI=nY;var nD={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:o}=e;return/*#__PURE__*/(0,h/* .css */.AH)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",x/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",x/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",x/* .borderRadius["6"] */.Vq["6"],";",n&&!o&&(0,h/* .css */.AH)(ny(),k/* .styleUtils.inputFocus */.x.inputFocus),":focus-within{",!o&&k/* .styleUtils.inputFocus */.x.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",x/* .borderRadius["4"] */.Vq["4"],";border-top-right-radius:",x/* .borderRadius["4"] */.Vq["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",x/* .borderRadius["6"] */.Vq["6"],";",(t||r)&&(0,h/* .css */.AH)(n_(),x/* .borderRadius["6"] */.Vq["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",x/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",x/* .borderRadius["6"] */.Vq["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,h/* .css */.AH)(nx(),!o?"1px solid ".concat(x/* .colorTokens.stroke["default"] */.I6.stroke["default"]):"none",x/* .borderRadius["6"] */.Vq["6"],n&&!o&&(0,h/* .css */.AH)(nw(),k/* .styleUtils.inputFocus */.x.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",x/* .spacing["10"] */.YK["10"],";}")}};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/ConfirmationModal.tsx
var nC=r(4937);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormWPEditor.tsx
function nS(){var e=(0,M._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);nS=function t(){return e};return e}var nM;var nE={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var nF=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var nH=(nM=rT/* .tutorConfig.settings */.P.settings)===null||nM===void 0?void 0:nM.chatgpt_key_exist;var nT=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:n}=e;var{showModal:o}=(0,rH/* .useModal */.h)();var[a,i]=(0,u.useState)("");return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:nN.editorOverlay,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:nN.editWithButton,icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"arrowLeft",height:24,width:24}),loading:a==="back_to",onClick:()=>F(function*(){var{action:e}=yield o({component:nC/* ["default"] */.A,props:{title:(0,m.__)("Back to WordPress Editor","tutor-pro"),description:/*#__PURE__*/(0,d/* .jsx */.Y)(rB,{type:"warning",icon:"warning",children:(0,m.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor-pro")}),confirmButtonText:(0,m.__)("Confirm","tutor-pro"),confirmButtonVariant:"primary"},depthIndex:x/* .zIndex.highest */.fE.highest});if(e==="CONFIRM"){try{i("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{i("")}}})(),children:(0,m.__)("Back to WordPress Editor","tutor-pro")})}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:nN.editWithButton,loading:a==="edit_with",icon:nE[t.name]&&/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:nE[t.name],height:24,width:24}),onClick:()=>F(function*(){try{i("edit_with");yield n===null||n===void 0?void 0:n(t);window.location.href=t.link}finally{i("")}})(),children:/* translators: %s is the editor name */(0,m.sprintf)((0,m.__)("Edit with %s","tutor-pro"),t===null||t===void 0?void 0:t.label)})]})};var nK=e=>{var{label:t,field:r,fieldState:n,disabled:o,readOnly:a,loading:i,placeholder:s,helpText:l,onChange:c,generateWithAi:f=false,onClickAiButton:p,hasCustomEditorSupport:h=false,isMinimal:v=false,hideMediaButtons:g=false,hideQuickTags:b=false,editors:y=[],editorUsed:_={name:"classic",label:"Classic Editor",link:""},isMagicAi:A=false,autoFocus:Y=false,onCustomEditorButtonClick:D,onBackToWPEditorClick:C,onFullScreenChange:S,min_height:M,max_height:E,toolbar1:H,toolbar2:T}=e;var K,O,N,P,L;var{showModal:R}=(0,rH/* .useModal */.h)();var B=((K=rT/* .tutorConfig.settings */.P.settings)===null||K===void 0?void 0:K.hide_admin_bar_for_users)==="off";var z=(N=rT/* .tutorConfig.current_user */.P.current_user)===null||N===void 0?void 0:(O=N.roles)===null||O===void 0?void 0:O.includes(tp/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var V=(L=rT/* .tutorConfig.current_user */.P.current_user)===null||L===void 0?void 0:(P=L.roles)===null||P===void 0?void 0:P.includes(tp/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var[W,j]=(0,u.useState)(null);var q=y.filter(e=>z||V&&B||e.name==="droip");var U=h&&q.length>0;var G=U&&_.name!=="classic";var Q=()=>{if(!nF){R({component:rN,props:{image:ni,image2x:ns}})}else if(!nH){R({component:no,props:{image:ni,image2x:ns}})}else{R({component:rE,isMagicAi:true,props:{title:(0,m.__)("AI Studio","tutor-pro"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:n,is_html:true}});p===null||p===void 0?void 0:p()}};var $=/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:nN.editorLabel,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("span",{css:nN.labelWithAi,children:[t,/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:f,children:/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:nN.aiButton,onClick:Q,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:nN.editorsButtonWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:(0,m.__)("Edit with","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:nN.customEditorButtons,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:q,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nb/* ["default"] */.A,{content:e.label,delay:200,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:nN.customEditorButton,disabled:W===e.name,onClick:()=>F(function*(){try{j(e.name);yield D===null||D===void 0?void 0:D(e);window.location.href=e.link}finally{j(null)}})(),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:W===e.name,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingOverlay */.p8,{})}),/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:nE[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:U?$:t,field:r,fieldState:n,disabled:o,readOnly:a,placeholder:s,helpText:l,isMagicAi:A,generateWithAi:!U&&f,onClickAiButton:Q,replaceEntireLabel:U,children:()=>{if(i){return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:k/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* ["default"] */.Ay,{size:20,color:x/* .colorTokens.icon["default"] */.I6.icon["default"]})})}var e;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:nN.wrapper({isOverlayVisible:G}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:G,children:/*#__PURE__*/(0,d/* .jsx */.Y)(nT,{editorUsed:_,onBackToWPEditorClick:C,onCustomEditorButtonClick:D})}),/*#__PURE__*/(0,d/* .jsx */.Y)(nI,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(c){c(e)}},isMinimal:v,hideMediaButtons:g,hideQuickTags:b,autoFocus:Y,onFullScreenChange:S,readonly:a,min_height:M,max_height:E,toolbar1:H,toolbar2:T})]})}})};/* export default */const nO=nK;var nN={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)("position:relative;",t&&(0,h/* .css */.AH)(nS(),x/* .borderRadius["6"] */.Vq["6"]))},editorLabel:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",k/* .styleUtils.flexCenter */.x.flexCenter(),";width:32px;height:32px;border-radius:",x/* .borderRadius["4"] */.Vq["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";color:",x/* .colorTokens.text.hints */.I6.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";"),customEditorButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",x/* .borderRadius.circle */.Vq.circle,";&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;height:100%;width:100%;",k/* .styleUtils.flexCenter */.x.flexCenter(),";gap:",x/* .spacing["8"] */.YK["8"],";background-color:",nm()(x/* .colorTokens.background.modal */.I6.background.modal,.6),";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";z-index:",x/* .zIndex.positive */.fE.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,h/* .css */.AH)("background:",x/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",x/* .colorTokens.text.primary */.I6.text.primary,";box-shadow:inset 0 -1px 0 0 ",nm()("#1112133D",.24),",0 1px 0 0 ",nm()("#1112133D",.8),";")};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useQuery.js + 6 modules
var nP=r(3819);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/utils.js
var nL=r(9005);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/course.ts
var nR=e=>{return rr/* .wpAjaxInstance.get */.b.get(rn/* ["default"].GET_COURSE_LIST */.A.GET_COURSE_LIST,{params:e})};var nB=e=>{var{params:t,isEnabled:r}=e;return(0,nP/* .useQuery */.I)({queryKey:["PrerequisiteCourses",t],queryFn:()=>nR((0,b._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:nL/* .keepPreviousData */.rX,enabled:r})};var nz=e=>{var{courseId:t,builder:r}=e;return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.A.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var nV=()=>{return(0,re/* .useMutation */.n)({mutationFn:nz})};var nW=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var nj=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>nW(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/molecules/Tabs.tsx
var nq=r(9153);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
var nU=r(1736);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var nG=r(5758);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var nQ=r(7581);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js + 9 modules
var n$=r(8795);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/constants/index.js
/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const nZ=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzName/index.js
/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function nX(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzOffset/index.js
const nJ={};const n0={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function n1(e,t){try{const r=nJ[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const n=r(t).split("GMT")[1];if(n in n0)return n0[n];return n2(n,n.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in n0)return n0[e];const t=e?.match(n6);if(t)return n2(e,t.slice(1));return NaN}}const n6=/([+-]\d\d):?(\d\d)?/;function n2(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return n0[e]=r*60+n>0?r*60+n+o:r*60-n-o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/mini.js
class n4 extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN(n1(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));n7(this,NaN);n5(this)}}}static tz(e,...t){return t.length?new n4(...t,e):new n4(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new n4(+this,e)}getTimezoneOffset(){const e=-n1(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);n5(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new n4(+new Date(e),this.timeZone)}}// Assign getters and setters
const n3=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!n3.test(e))return;const t=e.replace(n3,"$1UTC");// Filter out methods without UTC counterparts
if(!n4.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
n4.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
n4.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);n8(this);return+this};// Assign UTC setter
n4.prototype[t]=function(){Date.prototype[t].apply(this,arguments);n5(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function n5(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-n1(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function n8(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
n7(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function n7(e){// Save the time zone offset before all the adjustments
const t=n1(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const n=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
n.setUTCHours(n.getUTCHours()-1);// Calculate if we are on the system DST hour.
const o=-new Date(+e).getTimezoneOffset();const a=-new Date(+n).getTimezoneOffset();const i=o-a;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(i&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+i);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=o-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const d=o>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const u=Math.round(-(n1(e.timeZone,e)*60))%60;if(u||d){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+u);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+u+d)}//#endregion
//#region Post-adjustment DST fix
const f=n1(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const v=h-p;const g=p!==r;const m=v-l;if(g&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=n1(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const n=p-r;if(n){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+n);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}}//#endregion
};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/index.js
class n9 extends n4{//#region static
static tz(e,...t){return t.length?new n9(...t,e):new n9(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,n]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${n} (${nX(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new n9(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new n9(+new Date(e),this.timeZone)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tz/index.js
/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const oe=e=>t=>TZDate.tz(e,+new Date(t));// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/index.js
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var ot=r(7443);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var or=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js
/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function on(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,ot/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return n;n.setDate(n.getDate()+t);return n}// Fallback for modularized imports:
/* export default */const oo=/* unused pure expression or super */null&&on;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js
/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function oa(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,ot/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return n}const o=n.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const a=(0,ot/* .constructFrom */.w)(r?.in||e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();if(o>=i){// If we're already at the end of the month, then this is the correct date
// and we're done.
return a}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
n.setFullYear(a.getFullYear(),a.getMonth(),o);return n}}// Fallback for modularized imports:
/* export default */const oi=/* unused pure expression or super */null&&oa;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js
/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function os(e,t,r){return on(e,t*7,r)}// Fallback for modularized imports:
/* export default */const ol=/* unused pure expression or super */null&&os;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js
/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function oc(e,t,r){return oa(e,t*12,r)}// Fallback for modularized imports:
/* export default */const od=/* unused pure expression or super */null&&oc;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js + 1 modules
var ou=r(5215);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
var of=r(1159);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarMonths.js
/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function op(e,t,r){const[n,o]=(0,of/* .normalizeDates */.x)(r?.in,e,t);const a=n.getFullYear()-o.getFullYear();const i=n.getMonth()-o.getMonth();return a*12+i}// Fallback for modularized imports:
/* export default */const oh=/* unused pure expression or super */null&&op;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeInterval.js
function ov(e,t){const[r,n]=(0,of/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:n}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMonthOfInterval.js
/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function og(e,t){const{start:r,end:n}=ov(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setDate(1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,ot/* .constructFrom */.w)(r,i));i.setMonth(i.getMonth()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const om=/* unused pure expression or super */null&&og;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachYearOfInterval.js
/**
 * The {@link eachYearOfInterval} function options.
 *//**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */function ob(e,t){const{start:r,end:n}=ov(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setMonth(0,1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,ot/* .constructFrom */.w)(r,i));i.setFullYear(i.getFullYear()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const oy=/* unused pure expression or super */null&&ob;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var o_=r(2698);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js
/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function ow(e,t){const r=(0,o_/* .getDefaultOptions */.q)();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,or/* .toDate */.a)(e,t?.in);const a=o.getDay();const i=(a<n?-7:0)+6-(a-n);o.setDate(o.getDate()+i);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* export default */const ox=/* unused pure expression or super */null&&ow;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfISOWeek.js
/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
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
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function oA(e,t){return ow(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const ok=/* unused pure expression or super */null&&oA;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js
/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function oY(e,t){const r=(0,or/* .toDate */.a)(e,t?.in);const n=r.getMonth();r.setFullYear(r.getFullYear(),n+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const oI=/* unused pure expression or super */null&&oY;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfYear.js
/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function oD(e,t){const r=(0,or/* .toDate */.a)(e,t?.in);const n=r.getFullYear();r.setFullYear(n+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const oC=/* unused pure expression or super */null&&oD;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 6 modules
var oS=r(8956);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js + 1 modules
var oM=r(305);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMonth.js
/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function oE(e,t){return(0,or/* .toDate */.a)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* export default */const oF=/* unused pure expression or super */null&&oE;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function oH(e,t){return(0,or/* .toDate */.a)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* export default */const oT=/* unused pure expression or super */null&&oH;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js + 1 modules
var oK=r(150);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isAfter.js
/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function oO(e,t){return+(0,or/* .toDate */.a)(e)>+(0,or/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const oN=/* unused pure expression or super */null&&oO;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
/**
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
 */function oP(e,t){return+(0,or/* .toDate */.a)(e)<+(0,or/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const oL=/* unused pure expression or super */null&&oP;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
var oR=r(1936);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var oB=r(8673);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameDay.js
/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function oz(e,t,r){const[n,o]=(0,of/* .normalizeDates */.x)(r?.in,e,t);return+(0,oB/* .startOfDay */.o)(n)===+(0,oB/* .startOfDay */.o)(o)}// Fallback for modularized imports:
/* export default */const oV=/* unused pure expression or super */null&&oz;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMonth.js
/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function oW(e,t,r){const[n,o]=(0,of/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* export default */const oj=/* unused pure expression or super */null&&oW;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameYear.js
/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function oq(e,t,r){const[n,o]=(0,of/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* export default */const oU=/* unused pure expression or super */null&&oq;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/max.js
/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function oG(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=ot/* .constructFrom.bind */.w.bind(null,e);const t=(0,or/* .toDate */.a)(e,n);if(!r||r<t||isNaN(+t))r=t});return(0,ot/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const oQ=/* unused pure expression or super */null&&oG;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/min.js
/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function o$(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=ot/* .constructFrom.bind */.w.bind(null,e);const t=(0,or/* .toDate */.a)(e,n);if(!r||r>t||isNaN(+t))r=t});return(0,ot/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const oZ=/* unused pure expression or super */null&&o$;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDaysInMonth.js
/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function oX(e,t){const r=(0,or/* .toDate */.a)(e,t?.in);const n=r.getFullYear();const o=r.getMonth();const a=(0,ot/* .constructFrom */.w)(r,0);a.setFullYear(n,o+1,0);a.setHours(0,0,0,0);return a.getDate()}// Fallback for modularized imports:
/* export default */const oJ=/* unused pure expression or super */null&&oX;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMonth.js
/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function o0(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);const o=n.getFullYear();const a=n.getDate();const i=(0,ot/* .constructFrom */.w)(r?.in||e,0);i.setFullYear(o,t,15);i.setHours(0,0,0,0);const s=oX(i);// Set the earlier date, allows to wrap Jan 31 to Feb 28
n.setMonth(t,Math.min(a,s));return n}// Fallback for modularized imports:
/* export default */const o1=/* unused pure expression or super */null&&o0;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setYear.js
/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function o6(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+n))return(0,ot/* .constructFrom */.w)(r?.in||e,NaN);n.setFullYear(t);return n}// Fallback for modularized imports:
/* export default */const o2=/* unused pure expression or super */null&&o6;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
var o4=r(5698);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js
/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function o3(e,t){const r=(0,or/* .toDate */.a)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const o5=/* unused pure expression or super */null&&o3;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
var o8=r(3431);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
var o7=r(3766);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
const o9=5;const ae=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function at(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const n=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-n+1);const a=t.addDays(o,o9*7-1);const i=t.getMonth(e)===t.getMonth(a)?o9:ae;return i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function ar(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function an(e,t){const r=ar(e,t);const n=at(e,t);const o=t.addDays(r,n*7-1);return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class ao{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n9.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n9(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):on(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):oa(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):os(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):oc(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,ou/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):op(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):og(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):ob(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):an(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):oA(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):oY(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):ow(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):oD(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,oS/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,oM/* .getISOWeek */.s)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):oE(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):oH(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,oK/* .getWeek */.N)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):oO(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):oP(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,oR/* .isDate */.$)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):oz(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):oW(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):oq(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):oG(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):o$(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):o0(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):o6(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):ar(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,oB/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,o4/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):o3(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,o8/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,o7/* .startOfYear */.D)(e)};this.options={locale:n$/* .enUS */.c,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}/**
     * Returns the preferred ordering for month and year labels for the current
     * locale.
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return ao.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const o=t?.code;if(o&&ao.yearFirstLocales.has(o)){try{const t=new Intl.DateTimeFormat(o,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const a=t.format(e);return a}catch{// Fallback to date-fns formatting below.
}}const a=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,a)}}ao.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const aa=new ao;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const ai=/* unused pure expression or super */null&&aa;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/UI.js
/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var as;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(as||(as={}));/** Enum representing flags for the {@link UI.Day} element. */var al;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(al||(al={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var ac;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(ac||(ac={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var ad;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(ad||(ad={}));// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function au(e,t,r=false,n=aa){let{from:o,to:a}=e;const{differenceInCalendarDays:i,isSameDay:s}=n;if(o&&a){const e=i(a,o)<0;if(e){[o,a]=[a,o]}const n=i(t,o)>=(r?1:0)&&i(a,t)>=(r?1:0);return n}if(!r&&a){return s(a,t)}if(!r&&o){return s(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const af=(e,t)=>au(e,t,false,defaultDateLib);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function ap(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function ah(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function av(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function ag(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function am(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function ab(e,t){return Array.isArray(e)&&e.every(t.isDate)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function ay(e,t,r=aa){const n=!Array.isArray(t)?[t]:t;const{isSameDay:o,differenceInCalendarDays:a,isAfter:i}=r;return n.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return o(e,t)}if(ab(t,r)){return t.includes(e)}if(ah(t)){return au(t,e,false,r)}if(am(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if(ap(t)){const r=a(t.before,e);const n=a(t.after,e);const o=r>0;const s=n<0;const l=i(t.before,t.after);if(l){return s&&o}else{return o||s}}if(av(t)){return a(e,t.after)>0}if(ag(t)){return a(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const a_=/* unused pure expression or super */null&&ay;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function aw(e,t,r,n,o){const{disabled:a,hidden:i,modifiers:s,showOutsideDays:l,broadcastCalendar:c,today:d=o.today()}=t;const{isSameDay:u,isSameMonth:f,startOfMonth:p,isBefore:h,endOfMonth:v,isAfter:g}=o;const m=r&&p(r);const b=n&&v(n);const y={[al.focused]:[],[al.outside]:[],[al.disabled]:[],[al.hidden]:[],[al.today]:[]};const _={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const p=Boolean(m&&h(e,m));const v=Boolean(b&&g(e,b));const w=Boolean(a&&ay(e,a,o));const x=Boolean(i&&ay(e,i,o))||p||v||// Broadcast calendar will show outside days as default
!c&&!l&&n||c&&l===false&&n;const A=u(e,d);if(n)y.outside.push(t);if(w)y.disabled.push(t);if(x)y.hidden.push(t);if(A)y.today.push(t);// Add custom modifiers
if(s){Object.keys(s).forEach(r=>{const n=s?.[r];const a=n?ay(e,n,o):false;if(!a)return;if(_[r]){_[r].push(t)}else{_[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[al.focused]:false,[al.disabled]:false,[al.hidden]:false,[al.outside]:false,[al.today]:false};const r={};// Find the modifiers for the given day
for(const r in y){const n=y[r];t[r]=n.some(t=>t===e)}for(const t in _){r[t]=_[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function ax(e,t,r={}){const n=Object.entries(e).filter(([,e])=>e===true).reduce((e,[n])=>{if(r[n]){e.push(r[n])}else if(t[al[n]]){e.push(t[al[n]])}else if(t[ac[n]]){e.push(t[ac[n]])}return e},[t[as.Day]]);return n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Button.js
/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function aA(e){return u.createElement("button",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ak(e){return u.createElement("span",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aY(e){const{size:t=24,orientation:r="left",className:n}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
u.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&u.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&u.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&u.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&u.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Day.js
/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aI(e){const{day:t,modifiers:r,...n}=e;return u.createElement("td",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aD(e){const{day:t,modifiers:r,...n}=e;const o=u.useRef(null);u.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return u.createElement("button",{ref:o,...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aC(e){const{options:t,className:r,components:n,classNames:o,...a}=e;const i=[o[as.Dropdown],r].join(" ");const s=t?.find(({value:e})=>e===a.value);return u.createElement("span",{"data-disabled":a.disabled,className:o[as.DropdownRoot]},u.createElement(n.Select,{className:i,...a},t?.map(({value:e,label:t,disabled:r})=>u.createElement(n.Option,{key:e,value:e,disabled:r},t))),u.createElement("span",{className:o[as.CaptionLabel],"aria-hidden":true},s?.label,u.createElement(n.Chevron,{orientation:"down",size:18,className:o[as.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aS(e){return u.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Footer.js
/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aM(e){return u.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Month.js
/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aE(e){const{calendarMonth:t,displayIndex:r,...n}=e;return u.createElement("div",{...n},e.children)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aF(e){const{calendarMonth:t,displayIndex:r,...n}=e;return u.createElement("div",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aH(e){return u.createElement("table",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Months.js
/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aT(e){return u.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */const aK=(0,u.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function aO(){const e=(0,u.useContext)(aK);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aN(e){const{components:t}=aO();return u.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Nav.js
/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aP(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:o,...a}=e;const{components:i,classNames:s,labels:{labelPrevious:l,labelNext:c}}=aO();const d=(0,u.useCallback)(e=>{if(o){r?.(e)}},[o,r]);const f=(0,u.useCallback)(e=>{if(n){t?.(e)}},[n,t]);return u.createElement("nav",{...a},u.createElement(i.PreviousMonthButton,{type:"button",className:s[as.PreviousMonthButton],tabIndex:n?undefined:-1,"aria-disabled":n?undefined:true,"aria-label":l(n),onClick:f},u.createElement(i.Chevron,{disabled:n?undefined:true,className:s[as.Chevron],orientation:"left"})),u.createElement(i.NextMonthButton,{type:"button",className:s[as.NextMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":c(o),onClick:d},u.createElement(i.Chevron,{disabled:o?undefined:true,orientation:"right",className:s[as.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aL(e){const{components:t}=aO();return u.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Option.js
/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aR(e){return u.createElement("option",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aB(e){const{components:t}=aO();return u.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Root.js
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function az(e){const{rootRef:t,...r}=e;return u.createElement("div",{...r,ref:t})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Select.js
/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aV(e){return u.createElement("select",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Week.js
/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aW(e){const{week:t,...r}=e;return u.createElement("tr",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aj(e){return u.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aq(e){return u.createElement("thead",{"aria-hidden":true},u.createElement("tr",{...e}))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aU(e){const{week:t,...r}=e;return u.createElement("th",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aG(e){return u.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function aQ(e){return u.createElement("tbody",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a$(e){const{components:t}=aO();return u.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getComponents.js
/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function aZ(e){return{...n,...e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function aX(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function aJ(){const e={};for(const t in as){e[as[t]]=`rdp-${as[t]}`}for(const t in al){e[al[t]]=`rdp-${al[t]}`}for(const t in ac){e[ac[t]]=`rdp-${ac[t]}`}for(const t in ad){e[ad[t]]=`rdp-${ad[t]}`}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a0(e,t,r){const n=r??new ao(t);return n.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const a1=a0;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a6(e,t,r){return(r??new ao(t)).format(e,"d")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a2(e,t=aa){return t.format(e,"LLLL")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a4(e,t,r){return(r??new ao(t)).format(e,"cccccc")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a3(e,t=aa){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a5(){return``};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a8(e,t=aa){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const a7=a8;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function a9(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...o,...e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function ie(e,t,r,n,o){const{startOfMonth:a,startOfYear:i,endOfYear:s,eachMonthOfInterval:l,getMonth:c}=o;const d=l({start:i(e),end:s(e)});const u=d.map(e=>{const i=n.formatMonthDropdown(e,o);const s=c(e);const l=t&&e<a(t)||r&&e>a(r)||false;return{value:s,label:i,disabled:l}});return u};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function it(e,t={},r={}){let n={...t?.[as.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{n={...n,...r?.[e]}});return n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function ir(e,t,r,n){const o=n??e.today();const a=r?e.startOfBroadcastWeek(o,e):t?e.startOfISOWeek(o):e.startOfWeek(o);const i=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);i.push(r)}return i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @param reverse If true, reverses the order of the years (descending).
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function io(e,t,r,n,o=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:i,eachYearOfInterval:s,getYear:l}=n;const c=a(e);const d=i(t);const u=s({start:c,end:d});if(o)u.reverse();return u.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ia(e,t,r,n){let o=(n??new ao(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const ii=ia;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function is(e,t,r){const n=r??new ao(t);return n.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const il=is;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ic(e,t,r,n){let o=(n??new ao(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function id(e){return"Choose the Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function iu(){return""};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNext.js
/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ip(e){return"Go to the Next Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ih(e){return"Go to the Previous Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function iv(e,t,r){return(r??new ao(t)).format(e,"cccc")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ig(e,t){return`Week ${e}`};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function im(e){return"Week Number"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ib(e){return"Choose the Year"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useAnimation.js
const iy=e=>{if(e instanceof HTMLElement)return e;return null};const i_=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const iw=e=>iy(e.querySelector("[data-animated-month]"));const ix=e=>iy(e.querySelector("[data-animated-caption]"));const iA=e=>iy(e.querySelector("[data-animated-weeks]"));const ik=e=>iy(e.querySelector("[data-animated-nav]"));const iY=e=>iy(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function iI(e,t,{classNames:r,months:n,focused:o,dateLib:a}){const i=(0,u.useRef)(null);const s=(0,u.useRef)(n);const l=(0,u.useRef)(false);(0,u.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const c=s.current;// update previous months ref for next effect trigger
s.current=n;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
n.length===0||c.length===0||n.length!==c.length){return}const d=a.isSameMonth(n[0].date,c[0].date);const u=a.isAfter(n[0].date,c[0].date);const f=u?r[ad.caption_after_enter]:r[ad.caption_before_enter];const p=u?r[ad.weeks_after_enter]:r[ad.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const h=i.current;// update snapshot for next effect trigger
const v=e.current.cloneNode(true);if(v instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=i_(v);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=iw(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=ix(e);if(r){r.classList.remove(f)}const n=iA(e);if(n){n.classList.remove(p)}});i.current=v}else{i.current=null}if(l.current||d||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
o){return}const g=h instanceof HTMLElement?i_(h):[];const m=i_(e.current);if(m?.every(e=>e instanceof HTMLElement)&&g&&g.every(e=>e instanceof HTMLElement)){l.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=ik(e.current);if(n){n.style.zIndex="1"}m.forEach((o,a)=>{const i=g[a];if(!i){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const s=ix(o);if(s){s.classList.add(f)}const c=iA(o);if(c){c.classList.add(p)}// animate new displayed month end
const d=()=>{l.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(s){s.classList.remove(f)}if(c){c.classList.remove(p)}o.style.position="";o.style.overflow="";if(o.contains(i)){o.removeChild(i)}};t.push(d);// animate old displayed month
i.style.pointerEvents="none";i.style.position="absolute";i.style.overflow="hidden";i.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const h=iY(i);if(h){h.style.opacity="0"}const v=ix(i);if(v){v.classList.add(u?r[ad.caption_before_exit]:r[ad.caption_after_exit]);v.addEventListener("animationend",d)}const m=iA(i);if(m){m.classList.add(u?r[ad.weeks_before_exit]:r[ad.weeks_after_exit])}o.insertBefore(i,o.firstChild)})}})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDates.js
/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function iD(e,t,r,n){const o=e[0];const a=e[e.length-1];const{ISOWeek:i,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:c,differenceInCalendarDays:d,differenceInCalendarMonths:u,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:h,endOfWeek:v,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:y}=n;const _=l?m(o,n):i?b(o):y(o);const w=l?f(a):i?p(h(a)):v(h(a));// If maxDate is set, clamp the grid to the end of that week.
const x=t&&(l?f(t):i?p(t):v(t));// Pick the earliest week end between the displayed months and the constraint.
const A=x&&g(w,x)?x:w;const k=d(A,_);const Y=u(a,o)+1;const I=[];for(let e=0;e<=k;e++){const t=c(_,e);I.push(t)}// If fixed weeks is enabled, add the extra dates to the array
const D=l?35:42;const C=D*Y;if(s&&I.length<C){const e=C-I.length;for(let t=0;t<e;t++){const e=c(I[I.length-1],1);I.push(e)}}return I};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function iC(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function iS(e,t,r,n){const{numberOfMonths:o=1}=r;const a=[];for(let r=0;r<o;r++){const o=n.addMonths(e,r);if(t&&o>t){break}a.push(o)}return a};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function iM(e,t,r,n){const{month:o,defaultMonth:a,today:i=n.today(),numberOfMonths:s=1}=e;let l=o||a||i;const{differenceInCalendarMonths:c,addMonths:d,startOfMonth:u}=n;if(r&&c(r,l)<s-1){const e=-1*(s-1);l=d(r,e)}if(t&&c(l,t)<0){l=t}return u(l)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class iE{constructor(e,t,r=aa){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r;this.isoDate=r.format(e,"yyyy-MM-dd");this.displayMonthId=r.format(t,"yyyy-MM");this.dateMonthId=r.format(e,"yyyy-MM")}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class iF{constructor(e,t){this.days=t;this.weekNumber=e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class iH{constructor(e,t){this.date=e;this.weeks=t}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function iT(e,t,r,n){const{addDays:o,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:s,endOfWeek:l,getISOWeek:c,getWeek:d,startOfBroadcastWeek:u,startOfISOWeek:f,startOfWeek:p}=n;const h=e.reduce((e,h)=>{const v=r.broadcastCalendar?u(h,n):r.ISOWeek?f(h):p(h);const g=r.broadcastCalendar?a(h):r.ISOWeek?i(s(h)):l(s(h));/** The dates to display in the month. */const m=t.filter(e=>{return e>=v&&e<=g});const b=r.broadcastCalendar?35:42;if(r.fixedWeeks&&m.length<b){const e=t.filter(e=>{const t=b-m.length;return e>g&&e<=o(g,t)});m.push(...e)}const y=m.reduce((e,t)=>{const o=r.ISOWeek?c(t):d(t);const a=e.find(e=>e.weekNumber===o);const i=new iE(t,h,n);if(!a){e.push(new iF(o,[i]))}else{a.days.push(i)}return e},[]);const _=new iH(h,y);e.push(_);return e},[]);if(!r.reverseMonths){return h}else{return h.reverse()}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function iK(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:o,startOfDay:a,startOfMonth:i,endOfMonth:s,addYears:l,endOfYear:c,newDate:d,today:u}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:h,toMonth:v}=e;if(!r&&h){r=h}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&v){n=v}if(!n&&p){n=d(p,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=d(f,0,1)}else if(!r&&g){r=o(l(e.today??u(),-100))}if(n){n=s(n)}else if(p){n=d(p,11,31)}else if(!n&&g){n=c(e.today??u())}return[r?a(r):r,n?a(n):n]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function iO(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a=1}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a:1;const d=i(e);if(!t){return s(d,c)}const u=l(t,e);if(u<a){return undefined}return s(d,c)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function iN(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const c=o?a??1:1;const d=i(e);if(!t){return s(d,-c)}const u=l(d,t);if(u<=0){return undefined}return s(d,-c)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function iP(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function iL(e,t){const[r,n]=(0,u.useState)(e);const o=t===undefined?r:t;return[o,n]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useCalendar.js
/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function iR(e,t){const[r,n]=iK(e,t);const{startOfMonth:o,endOfMonth:a}=t;const i=iM(e,r,n,t);const[s,l]=iL(i,// initialMonth is always computed from props.month if provided
e.month?i:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,u.useEffect)(()=>{const o=iM(e,r,n,t);l(o)},[e.timeZone]);/** The months displayed in the calendar. */// biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
const{months:c,weeks:d,days:f,previousMonth:p,nextMonth:h}=(0,u.useMemo)(()=>{const o=iS(s,n,{numberOfMonths:e.numberOfMonths},t);const i=iD(o,e.endMonth?a(e.endMonth):undefined,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t);const l=iT(o,i,{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);const c=iP(l);const d=iC(l);const u=iN(s,r,e,t);const f=iO(s,n,e,t);return{months:l,weeks:c,days:d,previousMonth:u,nextMonth:f}},[t,s.getTime(),n?.getTime(),r?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]);const{disableNavigation:v,onMonthChange:g}=e;const m=e=>d.some(t=>t.days.some(t=>t.isEqualTo(e)));const b=e=>{if(v){return}let t=o(e);// if month is before start, use the first month instead
if(r&&t<o(r)){t=o(r)}// if month is after endMonth, use the last month instead
if(n&&t>o(n)){t=o(n)}l(t);g?.(t)};const y=e=>{// is this check necessary?
if(m(e)){return}b(e.date)};const _={months:c,weeks:d,days:f,navStart:r,navEnd:n,previousMonth:p,nextMonth:h,goToMonth:b,goToDay:y};return _};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var iB;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(iB||(iB={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function iz(e){return!e[al.disabled]&&!e[al.hidden]&&!e[al.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function iV(e,t,r,n){let o;let a=-1;for(const i of e){const e=t(i);if(iz(e)){if(e[al.focused]&&a<iB.FocusedModifier){o=i;a=iB.FocusedModifier}else if(n?.isEqualTo(i)&&a<iB.LastFocused){o=i;a=iB.LastFocused}else if(r(i.date)&&a<iB.Selected){o=i;a=iB.Selected}else if(e[al.today]&&a<iB.Today){o=i;a=iB.Today}}}if(!o){// Return the first day that is focusable
o=e.find(e=>iz(t(e)))}return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function iW(e,t,r,n,o,a,i){const{ISOWeek:s,broadcastCalendar:l}=a;const{addDays:c,addMonths:d,addWeeks:u,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:h,endOfWeek:v,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:y,startOfWeek:_}=i;const w={day:c,week:u,month:d,year:f,startOfWeek:e=>l?b(e,i):s?y(e):_(e),endOfWeek:e=>l?p(e):s?h(e):v(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&o){x=m([o,x])}return x};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function ij(e,t,r,n,o,a,i,s=0){if(s>365){// Limit the recursion to 365 attempts
return undefined}const l=iW(e,t,r.date,n,o,a,i);const c=Boolean(a.disabled&&ay(l,a.disabled,i));const d=Boolean(a.hidden&&ay(l,a.hidden,i));const u=l;const f=new iE(l,u,i);if(!c&&!d){return f}// Recursively attempt to find the next focusable date
return ij(e,t,f,n,o,a,i,s+1)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useFocus.js
/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function iq(e,t,r,n,o){const{autoFocus:a}=e;const[i,s]=(0,u.useState)();const l=iV(t.days,r,n||(()=>false),i);const[c,d]=(0,u.useState)(a?l:undefined);const f=()=>{s(c);d(undefined)};const p=(r,n)=>{if(!c)return;const a=ij(r,n,c,t.navStart,t.navEnd,e,o);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);d(a)};const h=e=>{return Boolean(l?.isEqualTo(e))};const v={isFocusTarget:h,setFocused:d,focused:c,blur:f,moveFocus:p};return v};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function iU(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=iL(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const c=e=>{return s?.some(t=>l(t,e))??false};const{min:d,max:u}=e;const f=(e,t,r)=>{let a=[...s??[]];if(c(e)){if(s?.length===d){// Min value reached, do nothing
return}if(n&&s?.length===1){// Required value already selected do nothing
return}a=s?.filter(t=>!l(t,e))}else{if(s?.length===u){// Max value reached, reset the selection to date
a=[e]}else{// Add the date to the selection
a=[...a,e]}}if(!o){i(a)}o?.(a,e,t,r);return a};return{selected:s,select:f,isSelected:c}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/addToRange.js
/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function iG(e,t,r=0,n=0,o=false,a=aa){const{from:i,to:s}=t||{};const{isSameDay:l,isAfter:c,isBefore:d}=a;let u;if(!i&&!s){// the range is empty, add the date
u={from:e,to:r>0?undefined:e}}else if(i&&!s){// adding date to an incomplete range
if(l(i,e)){// adding a date equal to the start of the range
if(r===0){u={from:i,to:e}}else if(o){u={from:i,to:undefined}}else{u=undefined}}else if(d(e,i)){// adding a date before the start of the range
u={from:e,to:i}}else{// adding a date after the start of the range
u={from:i,to:e}}}else if(i&&s){// adding date to a complete range
if(l(i,e)&&l(s,e)){// adding a date that is equal to both start and end of the range
if(o){u={from:i,to:s}}else{u=undefined}}else if(l(i,e)){// adding a date equal to the the start of the range
u={from:i,to:r>0?undefined:e}}else if(l(s,e)){// adding a dare equal to the end of the range
u={from:e,to:r>0?undefined:e}}else if(d(e,i)){// adding a date before the start of the range
u={from:e,to:s}}else if(c(e,i)){// adding a date after the start of the range
u={from:i,to:e}}else if(c(e,s)){// adding a date after the end of the range
u={from:i,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(u?.from&&u?.to){const t=a.differenceInCalendarDays(u.to,u.from);if(n>0&&t>n){u={from:e,to:undefined}}else if(r>1&&t<r){u={from:e,to:undefined}}}return u};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function iQ(e,t,r=aa){const n=!Array.isArray(t)?[t]:t;let o=e.from;const a=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const i=Math.min(a,6);for(let e=0;e<=i;e++){if(n.includes(o.getDay())){return true}o=r.addDays(o,1)}return false};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function i$(e,t,r=aa){return au(e,t.from,false,r)||au(e,t.to,false,r)||au(t,e.from,false,r)||au(t,e.to,false,r)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function iZ(e,t,r=aa){const n=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const o=n.filter(e=>typeof e!=="function");const a=o.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return au(e,t,false,r)}if(ab(t,r)){return t.some(t=>au(e,t,false,r))}if(ah(t)){if(t.from&&t.to){return i$(e,{from:t.from,to:t.to},r)}return false}if(am(t)){return iQ(e,t.dayOfWeek,r)}if(ap(t)){const n=r.isAfter(t.before,t.after);if(n){return i$(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return ay(e.from,t,r)||ay(e.to,t,r)}if(av(t)||ag(t)){return ay(e.from,t,r)||ay(e.to,t,r)}return false});if(a){return true}const i=n.filter(e=>typeof e==="function");if(i.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(i.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function iX(e,t){const{disabled:r,excludeDisabled:n,selected:o,required:a,onSelect:i}=e;const[s,l]=iL(o,i?o:undefined);const c=!i?s:o;const d=e=>c&&au(c,e,false,t);const u=(o,s,d)=>{const{min:u,max:f}=e;const p=o?iG(o,c,u,f,a,t):undefined;if(n&&r&&p?.from&&p.to){if(iZ({from:p.from,to:p.to},r,t)){// if a disabled days is found, the range is reset
p.from=o;p.to=undefined}}if(!i){l(p)}i?.(p,o,s,d);return p};return{selected:c,select:u,isSelected:d}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function iJ(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=iL(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const c=e=>{return s?l(s,e):false};const d=(e,t,r)=>{let a=e;if(!n&&s&&s&&l(e,s)){// If the date is the same, clear the selection.
a=undefined}if(!o){i(a)}if(n){o?.(a,e,t,r)}else{o?.(a,e,t,r)}return a};return{selected:s,select:d,isSelected:c}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useSelection.js
/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function i0(e,t){const r=iJ(e,t);const n=iU(e,t);const o=iX(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return o;default:return undefined}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
/**
 * Convert a {@link Date} or {@link TZDate} instance to the given time zone.
 * Reuses the same instance when it is already a {@link TZDate} using the target
 * time zone to avoid extra allocations.
 */function i1(e,t){if(e instanceof n9&&e.timeZone===t){return e}return new n9(e,t)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function i6(e,t){if(typeof e==="boolean"||typeof e==="function"){return e}if(e instanceof Date){return i1(e,t)}if(Array.isArray(e)){return e.map(e=>e instanceof Date?i1(e,t):e)}if(ah(e)){return{...e,from:e.from?i1(e.from,t):e.from,to:e.to?i1(e.to,t):e.to}}if(ap(e)){return{before:i1(e.before,t),after:i1(e.after,t)}}if(av(e)){return{after:i1(e.after,t)}}if(ag(e)){return{before:i1(e.before,t)}}return e}/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */function i2(e,t){if(!e){return e}if(Array.isArray(e)){return e.map(e=>i6(e,t))}return i6(e,t)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/DayPicker.js
/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function i4(e){let t=e;const r=t.timeZone;if(r){t={...e,timeZone:r};if(t.today){t.today=i1(t.today,r)}if(t.month){t.month=i1(t.month,r)}if(t.defaultMonth){t.defaultMonth=i1(t.defaultMonth,r)}if(t.startMonth){t.startMonth=i1(t.startMonth,r)}if(t.endMonth){t.endMonth=i1(t.endMonth,r)}if(t.mode==="single"&&t.selected){t.selected=i1(t.selected,r)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>i1(e,r))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?i1(t.selected.from,r):t.selected.from,to:t.selected.to?i1(t.selected.to,r):t.selected.to}}if(t.disabled!==undefined){t.disabled=i2(t.disabled,r)}if(t.hidden!==undefined){t.hidden=i2(t.hidden,r)}if(t.modifiers){const e={};Object.keys(t.modifiers).forEach(n=>{e[n]=i2(t.modifiers?.[n],r)});t.modifiers=e}}const{components:n,formatters:o,labels:i,dateLib:s,locale:l,classNames:c}=(0,u.useMemo)(()=>{const e={...n$/* .enUS */.c,...t.locale};const r=new ao({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:aZ(t.components),formatters:a9(t.formatters),labels:{...a,...t.labels},locale:e,classNames:{...aJ(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);if(!t.today){t={...t,today:s.today()}}const{captionLayout:d,mode:f,navLayout:p,numberOfMonths:h=1,onDayBlur:v,onDayClick:g,onDayFocus:m,onDayKeyDown:b,onDayMouseEnter:y,onDayMouseLeave:_,onNextClick:w,onPrevClick:x,showWeekNumber:A,styles:k}=t;const{formatCaption:Y,formatDay:I,formatMonthDropdown:D,formatWeekNumber:C,formatWeekNumberHeader:S,formatWeekdayName:M,formatYearDropdown:E}=o;const F=iR(t,s);const{days:H,months:T,navStart:K,navEnd:O,previousMonth:N,nextMonth:P,goToMonth:L}=F;const R=aw(H,t,K,O,s);const{isSelected:B,select:z,selected:V}=i0(t,s)??{};const{blur:W,focused:j,isFocusTarget:q,moveFocus:U,setFocused:G}=iq(t,F,R,B??(()=>false),s);const{labelDayButton:Q,labelGridcell:$,labelGrid:Z,labelMonthDropdown:X,labelNav:J,labelPrevious:ee,labelNext:et,labelWeekday:er,labelWeekNumber:en,labelWeekNumberHeader:eo,labelYearDropdown:ea}=i;const ei=(0,u.useMemo)(()=>ir(s,t.ISOWeek,t.broadcastCalendar,t.today),[s,t.ISOWeek,t.broadcastCalendar,t.today]);const es=f!==undefined||g!==undefined;const el=(0,u.useCallback)(()=>{if(!N)return;L(N);x?.(N)},[N,L,x]);const ec=(0,u.useCallback)(()=>{if(!P)return;L(P);w?.(P)},[L,P,w]);const ed=(0,u.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();G(e);if(t.disabled){return}z?.(e.date,t,r);g?.(e.date,t,r)},[z,g,G]);const eu=(0,u.useCallback)((e,t)=>r=>{G(e);m?.(e.date,t,r)},[m,G]);const ef=(0,u.useCallback)((e,t)=>r=>{W();v?.(e.date,t,r)},[W,v]);const ep=(0,u.useCallback)((e,r)=>n=>{const o={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(o[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=o[n.key];U(e,t)}b?.(e.date,r,n)},[U,b,t.dir]);const eh=(0,u.useCallback)((e,t)=>r=>{y?.(e.date,t,r)},[y]);const ev=(0,u.useCallback)((e,t)=>r=>{_?.(e.date,t,r)},[_]);const eg=(0,u.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setMonth(s.startOfMonth(e),r);L(n)},[s,L]);const em=(0,u.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setYear(s.startOfMonth(e),r);L(n)},[s,L]);const{className:eb,style:ey}=(0,u.useMemo)(()=>({className:[c[as.Root],t.className].filter(Boolean).join(" "),style:{...k?.[as.Root],...t.style}}),[c,t.className,t.style,k]);const e_=aX(t);const ew=(0,u.useRef)(null);iI(ew,Boolean(t.animate),{classNames:c,months:T,focused:j,dateLib:s});const ex={dayPickerProps:t,selected:V,select:z,isSelected:B,months:T,nextMonth:P,previousMonth:N,goToMonth:L,getModifiers:R,components:n,classNames:c,styles:k,labels:i,formatters:o};return u.createElement(aK.Provider,{value:ex},u.createElement(n.Root,{rootRef:t.animate?ew:undefined,className:eb,style:ey,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...e_},u.createElement(n.Months,{className:c[as.Months],style:k?.[as.Months]},!t.hideNavigation&&!p&&u.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:c[as.Nav],style:k?.[as.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:N,nextMonth:P}),T.map((e,r)=>{return u.createElement(n.Month,{"data-animated-month":t.animate?"true":undefined,className:c[as.Month],style:k?.[as.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:r,displayIndex:r,calendarMonth:e},p==="around"&&!t.hideNavigation&&r===0&&u.createElement(n.PreviousMonthButton,{type:"button",className:c[as.PreviousMonthButton],tabIndex:N?undefined:-1,"aria-disabled":N?undefined:true,"aria-label":ee(N),onClick:el,"data-animated-button":t.animate?"true":undefined},u.createElement(n.Chevron,{disabled:N?undefined:true,className:c[as.Chevron],orientation:t.dir==="rtl"?"right":"left"})),u.createElement(n.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:c[as.MonthCaption],style:k?.[as.MonthCaption],calendarMonth:e,displayIndex:r},d?.startsWith("dropdown")?u.createElement(n.DropdownNav,{className:c[as.Dropdowns],style:k?.[as.Dropdowns]},(()=>{const r=d==="dropdown"||d==="dropdown-months"?u.createElement(n.MonthsDropdown,{key:"month",className:c[as.MonthsDropdown],"aria-label":X(),classNames:c,components:n,disabled:Boolean(t.disableNavigation),onChange:eg(e.date),options:ie(e.date,K,O,o,s),style:k?.[as.Dropdown],value:s.getMonth(e.date)}):u.createElement("span",{key:"month"},D(e.date,s));const a=d==="dropdown"||d==="dropdown-years"?u.createElement(n.YearsDropdown,{key:"year",className:c[as.YearsDropdown],"aria-label":ea(s.options),classNames:c,components:n,disabled:Boolean(t.disableNavigation),onChange:em(e.date),options:io(K,O,o,s,Boolean(t.reverseYears)),style:k?.[as.Dropdown],value:s.getYear(e.date)}):u.createElement("span",{key:"year"},E(e.date,s));const i=s.getMonthYearOrder()==="year-first"?[a,r]:[r,a];return i})(),u.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},Y(e.date,s.options,s))):u.createElement(n.CaptionLabel,{className:c[as.CaptionLabel],role:"status","aria-live":"polite"},Y(e.date,s.options,s))),p==="around"&&!t.hideNavigation&&r===h-1&&u.createElement(n.NextMonthButton,{type:"button",className:c[as.NextMonthButton],tabIndex:P?undefined:-1,"aria-disabled":P?undefined:true,"aria-label":et(P),onClick:ec,"data-animated-button":t.animate?"true":undefined},u.createElement(n.Chevron,{disabled:P?undefined:true,className:c[as.Chevron],orientation:t.dir==="rtl"?"left":"right"})),r===h-1&&p==="after"&&!t.hideNavigation&&u.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:c[as.Nav],style:k?.[as.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:N,nextMonth:P}),u.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":f==="multiple"||f==="range","aria-label":Z(e.date,s.options,s)||undefined,className:c[as.MonthGrid],style:k?.[as.MonthGrid]},!t.hideWeekdays&&u.createElement(n.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:c[as.Weekdays],style:k?.[as.Weekdays]},A&&u.createElement(n.WeekNumberHeader,{"aria-label":eo(s.options),className:c[as.WeekNumberHeader],style:k?.[as.WeekNumberHeader],scope:"col"},S()),ei.map(e=>u.createElement(n.Weekday,{"aria-label":er(e,s.options,s),className:c[as.Weekday],key:String(e),style:k?.[as.Weekday],scope:"col"},M(e,s.options,s)))),u.createElement(n.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:c[as.Weeks],style:k?.[as.Weeks]},e.weeks.map(e=>{return u.createElement(n.Week,{className:c[as.Week],key:e.weekNumber,style:k?.[as.Week],week:e},A&&u.createElement(n.WeekNumber,{week:e,style:k?.[as.WeekNumber],"aria-label":en(e.weekNumber,{locale:l}),className:c[as.WeekNumber],scope:"row",role:"rowheader"},C(e.weekNumber,s)),e.days.map(e=>{const{date:r}=e;const o=R(e);o[al.focused]=!o.hidden&&Boolean(j?.isEqualTo(e));o[ac.selected]=B?.(r)||o.selected;if(ah(V)){// add range modifiers
const{from:e,to:t}=V;o[ac.range_start]=Boolean(e&&t&&s.isSameDay(r,e));o[ac.range_end]=Boolean(e&&t&&s.isSameDay(r,t));o[ac.range_middle]=au(V,r,true,s)}const a=it(o,k,t.modifiersStyles);const i=ax(o,c,t.modifiersClassNames);const l=!es&&!o.hidden?$(r,o,s.options,s):undefined;return u.createElement(n.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:o,className:i.join(" "),style:a,role:"gridcell","aria-selected":o.selected||undefined,"aria-label":l,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:undefined,"data-selected":o.selected||undefined,"data-disabled":o.disabled||undefined,"data-hidden":o.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":o.focused||undefined,"data-today":o.today||undefined},!o.hidden&&es?u.createElement(n.DayButton,{className:c[as.DayButton],style:k?.[as.DayButton],type:"button",day:e,modifiers:o,disabled:!o.focused&&o.disabled||undefined,"aria-disabled":o.focused&&o.disabled||undefined,tabIndex:q(e)?0:-1,"aria-label":Q(r,o,s.options,s),onClick:ed(e,o),onBlur:ef(e,o),onFocus:eu(e,o),onKeyDown:ep(e,o),onMouseEnter:eh(e,o),onMouseLeave:ev(e,o)},I(r,s.options,s)):!o.hidden&&I(e.date,s.options,s))}))}))))})),t.footer&&u.createElement(n.Footer,{className:c[as.Footer],style:k?.[as.Footer],role:"status","aria-live":"polite"},t.footer)))}// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var i3=r(2554);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePrefersReducedMotion.ts
var i5="data-tutor-motion";var i8=()=>{if(typeof document==="undefined"){return null}return document.documentElement.getAttribute(i5)};var i7=()=>{if(typeof window==="undefined"||!window.matchMedia){return false}return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var i9=()=>{var e=i8();// Explicit override always wins.
if(e==="reduce")return true;// 'auto' (or unset) defers to the OS/browser setting.
return i7()};/**
 * Resolves whether motion should be reduced, honoring:
 * - data-tutor-motion="reduce" on <html>  -> always reduce
 * - data-tutor-motion="auto" (or absent)  -> defer to prefers-reduced-motion
 */var se=()=>{var[e,t]=(0,u.useState)(i9);(0,u.useEffect)(()=>{if(typeof window==="undefined"||!window.matchMedia){return}var e=window.matchMedia("(prefers-reduced-motion: reduce)");var r=()=>t(i9());r();e.addEventListener("change",r);// In case data-tutor-motion is toggled at runtime (e.g. a settings panel)
var n=new MutationObserver(r);n.observe(document.documentElement,{attributes:true,attributeFilter:[i5]});return()=>{e.removeEventListener("change",r);n.disconnect()}},[]);return e};// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var st=r(6615);var sr=/*#__PURE__*/r.n(st);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var sn=r(8612);var so=/*#__PURE__*/r.n(sn);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var sa=r(8840);var si=/*#__PURE__*/r.n(sa);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var ss=r(879);var sl=/*#__PURE__*/r.n(ss);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var sc=r(9619);var sd=/*#__PURE__*/r.n(sc);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var su=r(1536);var sf=/*#__PURE__*/r.n(su);// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.6.5_@swc+helpers@0.5.17__webpack@5.101.1/node_modules/css-loader/dist/cjs.js!../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var sp=r(4634);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var sh={};sh.styleTagTransform=sf();sh.setAttributes=sl();sh.insert=si().bind(null,"head");sh.domAPI=so();sh.insertStyleElement=sd();var sv=sr()(sp/* ["default"] */.A,sh);/* export default */const sg=sp/* ["default"] */.A&&sp/* ["default"].locals */.A.locals?sp/* ["default"].locals */.A.locals:undefined;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormDateInput.tsx
// Create DayPicker formatters based on WordPress locale
var sm=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var sb=e=>{if(!e)return undefined;return(0,r1/* .isValid */.f)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var sy=e=>{var{label:t,field:r,fieldState:n,disabled:o,disabledBefore:a,disabledAfter:i,loading:s,placeholder:l,helpText:c,isClearable:f=true,onChange:p,dateFormat:h=tp/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var v=se();var g=(0,u.useRef)(null);var[x,A]=(0,u.useState)(false);var Y=sb(r.value);var D=typeof window!=="undefined"&&window.wp&&window.wp.date;var C=Y?D?window.wp.date.format("F j, Y",Y):(0,oS/* .format */.GP)(Y,h):"";var{triggerRef:S,position:M,popoverRef:E}=(0,i3/* .usePortalPopover */.tP)({isOpen:x,placement:i3/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var F=()=>{var e;A(false);(e=g.current)===null||e===void 0?void 0:e.focus()};var H=sb(a);var T=sb(i);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:o,loading:s,placeholder:l,helpText:c,children:e=>{var{css:t}=e,n=(0,tf._)(e,["css"]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sw.wrapper,ref:S,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},n),{css:[t,sw.input],title:C,ref:e=>{r.ref(e);// @ts-ignore
g.current=e},type:"text",value:C,onClick:e=>{e.stopPropagation();A(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();A(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:sw.icon}),f&&r.value&&/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,m.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:k/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(i3/* .Portal */.ZL,{isOpen:x,onClickOutside:F,onEscape:F,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:sw.pickerWrapper,style:{left:M.left,top:M.top},ref:E,children:/*#__PURE__*/(0,d/* .jsx */.Y)(i4,{dir:tp/* .isRTL */.V8?"rtl":"ltr",animate:!v,mode:"single",formatters:sm(),disabled:[!!H&&{before:H},!!T&&{after:T}],selected:Y,onSelect:e=>{if(e){var t=(0,oS/* .format */.GP)(e,tp/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);F();if(p){p(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:Y||new Date,startMonth:H||new Date(new Date().getFullYear()-10,0),endMonth:T||new Date(new Date().getFullYear()+10,11),weekStartsOn:D?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const s_=sy;var sw={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,h/* .css */.AH)("&[data-input]{padding-left:",x/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;top:50%;left:",x/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body("regular"),";position:absolute;background-color:",x/* .colorTokens.background.white */.I6.background.white,";box-shadow:",x/* .shadow.popover */.r7.popover,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",x/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",x/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",x/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",x/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",x/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",x/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",x/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",x/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",x/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",x/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";color:",x/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",x/* .colorTokens.text.white */.I6.text.white,";background-color:",x/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",x/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",x/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",x/* .borderRadius.circle */.Vq.circle,";font-weight:",x/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",x/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",x/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMinutes.js
/**
 * The {@link setMinutes} function options.
 *//**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 * @param options - An object with options
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function sx(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);n.setMinutes(t);return n}// Fallback for modularized imports:
/* export default */const sA=/* unused pure expression or super */null&&sx;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setHours.js
/**
 * The {@link setHours} function options.
 *//**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 * @param options - An object with options
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function sk(e,t,r){const n=(0,or/* .toDate */.a)(e,r?.in);n.setHours(t);return n}// Fallback for modularized imports:
/* export default */const sY=/* unused pure expression or super */null&&sk;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMinutes.js
var sI=r(9872);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMinuteOfInterval.js
/**
 * The {@link eachMinuteOfInterval} function options.
 *//**
 * The {@link eachMinuteOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function sD(e,t){const{start:r,end:n}=ov(t?.in,e);// Set to the start of the minute
r.setSeconds(0,0);let o=+r>+n;const a=o?+r:+n;let i=o?n:r;let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,ot/* .constructFrom */.w)(r,i));i=(0,sI/* .addMinutes */.z)(i,s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const sC=/* unused pure expression or super */null&&sD;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var sS=e=>{var{label:t,field:r,fieldState:n,interval:o=30,disabled:a,loading:i,placeholder:s,helpText:l,isClearable:c=true}=e;var[f,p]=(0,u.useState)(false);var h=(0,u.useRef)(null);var v=(0,u.useRef)(null);var g=(0,u.useMemo)(()=>{var e=sx(sk(new Date,0),0);var t=sx(sk(new Date,23),59);var r=sD({start:e,end:t},{step:o});return r.map(e=>(0,oS/* .format */.GP)(e,tp/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[o]);var{activeIndex:x,setActiveIndex:A}=tI({options:g.map(e=>({label:e,value:e})),isOpen:f,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);p(false)},onClose:()=>p(false)});(0,u.useEffect)(()=>{if(f&&x>=0&&v.current){v.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[f,x]);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:a,loading:i,placeholder:s,helpText:l,children:e=>{var{css:t}=e,n=(0,tf._)(e,["css"]);var o;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sE.wrapper,ref:h,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},n),{ref:r.ref,css:[t,sE.input],type:"text",onClick:e=>{e.stopPropagation();p(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();p(e=>!e)}if(e.key==="Tab"){p(false)}},value:(o=r.value)!==null&&o!==void 0?o:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"clock",width:32,height:32,style:sE.icon}),c&&r.value&&/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,m.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:k/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:h,isOpen:f,closePopover:()=>p(false),animationType:tY/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,d/* .jsx */.Y)("ul",{css:sE.list,children:g.map((e,t)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("li",{css:sE.listItem,ref:x===t?v:null,"data-active":x===t,children:/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:sE.itemButton,onClick:()=>{r.onChange(e);p(false)},onMouseOver:()=>A(t),onMouseLeave:()=>t!==x&&A(-1),onFocus:()=>A(t),children:e})},t)})})})]})}})};/* export default */const sM=sS;var sE={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,h/* .css */.AH)("&[data-input]{padding-left:",x/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;top:50%;left:",x/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,h/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",k/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.body */.I.body(),";margin:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",x/* .colorTokens.text.primary */.I6.text.primary,";}")};// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/utils/utils.ts
var sF=r(81);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/BundleEnrollmentSettings.tsx
function sH(){var e=(0,c._)(["\n      padding-bottom: ",";\n    "]);sH=function t(){return e};return e}var sT=(0,sF/* .getBundleId */.w)();var sK=()=>{var e,t;var r=(0,p/* .useFormContext */.xW)();var n=(0,g/* .useIsFetching */.C)({queryKey:["CourseBundle",sT]});var o=(0,p/* .useWatch */.FH)({control:r.control,name:"course_enrollment_period"});var a=(0,p/* .useWatch */.FH)({control:r.control,name:"enrollment_starts_date"});var i=(0,p/* .useWatch */.FH)({control:r.control,name:"enrollment_starts_time"});var c=(0,p/* .useWatch */.FH)({control:r.control,name:"enrollment_ends_date"});var[f,h]=(0,u.useState)(false);var v=(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((e=rT/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.membership_only_mode);var b=(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.ENROLLMENT */.oW.ENROLLMENT);return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sN.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"maximum_students",control:r.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,l._)((0,s._)({},e),{label:(0,m.__)("Maximum Student","tutor-pro"),helpText:(0,m.__)("Number of students that can enrol in this bundle. Set 0 for no limits.","tutor-pro"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!n&&!e.field.value}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:b,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!v&&((t=rT/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enrollment_expiry_enabled)==="on",children:/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"enrollment_expiry",control:r.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,l._)((0,s._)({},e),{label:(0,m.__)("Enrollment Expiration","tutor-pro"),helpText:(0,m.__)("Student's enrollment will be removed after this number of days. Set 0 for lifetime enrollment.","tutor-pro"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!n&&!e.field.value}))})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sN.enrollmentPeriod({isEnabled:o}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"course_enrollment_period",control:r.control,rules:{deps:[...a?["enrollment_starts_date"]:[],...i?["enrollment_starts_time"]:[],"enrollment_ends_date","enrollment_ends_time"]},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(rJ,(0,l._)((0,s._)({},e),{label:(0,m.__)("Bundle Enrollment Period","tutor-pro"),loading:!!n&&!e.field.value,onChange:e=>{if(!e){r.clearErrors(["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"])}}}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sN.enrollmentDateWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sN.enrollmentDate,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{htmlFor:"enrollment_starts_at",children:(0,m.__)("Start Date","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{id:"enrollment_starts_at",css:k/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"enrollment_starts_date",control:r.control,rules:(0,l._)((0,s._)({},r6()),{validate:{invalidDate:r3},deps:["enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(s_,(0,l._)((0,s._)({},e),{loading:!!n&&!e.field.value,placeholder:(0,m.__)("Start Date","tutor-pro"),dateFormat:tp/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"enrollment_starts_time",control:r.control,rules:(0,l._)((0,s._)({},r6()),{validate:{invalidTime:r8},deps:["enrollment_starts_date","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(sM,(0,l._)((0,s._)({},e),{loading:!!n&&!e.field.value,placeholder:(0,m.__)("hh:mm a","tutor-pro")}))})]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:f||c,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"secondary",size:"small",onClick:()=>h(true),disabled:!!n||!a||!i,children:(0,m.__)("Add End Date","tutor-pro")})}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:sN.enrollmentDate,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("label",{htmlFor:"enrollment_ends_at",children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:(0,m.__)("End Date","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{h(false);r.setValue("enrollment_ends_date","");r.setValue("enrollment_ends_time","")},css:sN.removeButton,children:(0,m.__)("Remove","tutor-pro")})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{id:"enrollment_ends_at",css:k/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"enrollment_ends_date",control:r.control,rules:(0,l._)((0,s._)({},r6()),{validate:{invalidDate:r3,checkEndDate:e=>{if((0,nU/* .isBefore */.Y)((0,nG/* .startOfDay */.o)(new Date(e)),(0,nG/* .startOfDay */.o)(new Date(a)))){return(0,m.__)("End date should be after the start date","tutor-pro")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(s_,(0,l._)((0,s._)({},e),{loading:!!n&&!e.field.value,placeholder:(0,m.__)("End Date","tutor-pro"),disabledBefore:a,dateFormat:tp/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"enrollment_ends_time",control:r.control,rules:(0,l._)((0,s._)({},r6()),{validate:{invalidTime:r8,checkEndTime:e=>{if(a&&c&&i&&!(0,nU/* .isBefore */.Y)(new Date("".concat(a," ").concat(i)),new Date("".concat(c," ").concat(e)))){return(0,m.__)("End time should be after the start time","tutor-pro")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(sM,(0,l._)((0,s._)({},e),{loading:!!n&&!e.field.value,placeholder:(0,m.__)("hh:mm a","tutor-pro")}))})]})]})})]})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"pause_enrollment",control:r.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,l._)((0,s._)({},e),{label:(0,m.__)("Pause Enrollment","tutor-pro"),description:(0,m.__)("If you pause enrolment, students will no longer be able to enroll in the bundle.","tutor-pro")}))})]})]})};/* export default */const sO=sK;var sN={wrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["16"] */.YK["16"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";padding:",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["24"] */.YK["24"]," ",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["32"] */.YK["32"],";min-height:400px;",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",x/* .spacing["16"] */.YK["16"],";}"),enrollmentPeriod:e=>{var{isEnabled:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";background-color:",x/* .colorTokens.bg.white */.I6.bg.white,";",t&&(0,h/* .css */.AH)(sH(),x/* .spacing["16"] */.YK["16"]))},enrollmentDateWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["8"] */.YK["8"],";margin-top:",x/* .spacing["16"] */.YK["16"],";"),enrollmentDate:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["4"] */.YK["4"],";label{",k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:space-between;",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.title */.I6.text.title,";}"),removeButton:/*#__PURE__*/(0,h/* .css */.AH)("margin-left:auto;padding:0;")};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/BundleSettings.tsx
var sP=()=>{var e;var t=[{label:(0,m.__)("Enrollment","tutor-pro"),value:"enrollment",icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"update",width:24,height:24})}].filter(Boolean);var[r,n]=(0,u.useState)(((e=t[0])===null||e===void 0?void 0:e.value)||"general");if(!t.length){return null}var o=tp/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?t:t.map(e=>(0,l._)((0,s._)({},e),{label:r===e.value?e.label:""}));return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{css:A/* .typography.caption */.I.caption(),children:(0,m.__)("Options","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{"data-cy":"course-settings",css:sR.bundleSettings,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(nq/* ["default"] */.A,{tabList:o,activeTab:r,onChange:n,orientation:!tp/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?"horizontal":"vertical",wrapperCss:/*#__PURE__*/(0,h/* .css */.AH)("button{min-width:auto;}")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:{borderLeft:"1px solid ".concat(x/* .colorTokens.stroke.divider */.I6.stroke.divider)},children:r==="enrollment"&&/*#__PURE__*/(0,d/* .jsx */.Y)(sO,{})})]})]})};/* export default */const sL=sP;var sR={bundleSettings:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:200px 1fr;margin-top:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";background-color:",x/* .colorTokens.background["default"] */.I6.background["default"],";overflow:hidden;",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}"),settingsOptions:/*#__PURE__*/(0,h/* .css */.AH)("min-height:400px;display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";padding:",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["48"] */.YK["48"]," ",x/* .spacing["32"] */.YK["32"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",x/* .spacing["16"] */.YK["16"],";}")};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 29 modules
var sB=r(4421);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/immer@10.2.0/node_modules/immer/dist/immer.mjs
// src/utils/env.ts
var sz=Symbol.for("immer-nothing");var sV=Symbol.for("immer-draftable");var sW=Symbol.for("immer-state");// src/utils/errors.ts
var sj=false?0:[];function sq(e,...t){if(false){}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}// src/utils/common.ts
var sU=Object.getPrototypeOf;function sG(e){return!!e&&!!e[sW]}function sQ(e){if(!e)return false;return sX(e)||Array.isArray(e)||!!e[sV]||!!e.constructor?.[sV]||s5(e)||s8(e)}var s$=Object.prototype.constructor.toString();var sZ=/* @__PURE__ */new WeakMap;function sX(e){if(!e||typeof e!=="object")return false;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return true;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(r===Object)return true;if(typeof r!=="function")return false;let n=sZ.get(r);if(n===void 0){n=Function.toString.call(r);sZ.set(r,n)}return n===s$}function sJ(e){if(!sG(e))sq(15,e);return e[sW].base_}function s0(e,t,r=true){if(s1(e)===0/* Object */){const n=r?Reflect.ownKeys(e):Object.keys(e);n.forEach(r=>{t(r,e[r],e)})}else{e.forEach((r,n)=>t(n,r,e))}}function s1(e){const t=e[sW];return t?t.type_:Array.isArray(e)?1/* Array */:s5(e)?2/* Map */:s8(e)?3/* Set */:0/* Object */}function s6(e,t){return s1(e)===2/* Map */?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function s2(e,t){return s1(e)===2/* Map */?e.get(t):e[t]}function s4(e,t,r){const n=s1(e);if(n===2/* Map */)e.set(t,r);else if(n===3/* Set */){e.add(r)}else e[t]=r}function s3(e,t){if(e===t){return e!==0||1/e===1/t}else{return e!==e&&t!==t}}function s5(e){return e instanceof Map}function s8(e){return e instanceof Set}function s7(e){return e.copy_||e.base_}function s9(e,t){if(s5(e)){return new Map(e)}if(s8(e)){return new Set(e)}if(Array.isArray(e))return Array.prototype.slice.call(e);const r=sX(e);if(t===true||t==="class_only"&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[sW];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n];const a=t[o];if(a.writable===false){a.writable=true;a.configurable=true}if(a.get||a.set)t[o]={configurable:true,writable:true,// could live with !!desc.set as well here...
enumerable:a.enumerable,value:e[o]}}return Object.create(sU(e),t)}else{const t=sU(e);if(t!==null&&r){return{...e}}const n=Object.create(t);return Object.assign(n,e)}}function le(e,t=false){if(ln(e)||sG(e)||!sQ(e))return e;if(s1(e)>1){Object.defineProperties(e,{set:lr,add:lr,clear:lr,delete:lr})}Object.freeze(e);if(t)Object.values(e).forEach(e=>le(e,true));return e}function lt(){sq(2)}var lr={value:lt};function ln(e){if(e===null||typeof e!=="object")return true;return Object.isFrozen(e)}// src/utils/plugins.ts
var lo={};function la(e){const t=lo[e];if(!t){sq(0,e)}return t}function li(e,t){if(!lo[e])lo[e]=t}// src/core/scope.ts
var ls;function ll(){return ls}function lc(e,t){return{drafts_:[],parent_:e,immer_:t,// Whenever the modified draft contains a draft from another scope, we
// need to prevent auto-freezing so the unowned draft can be finalized.
canAutoFreeze_:true,unfinalizedDrafts_:0}}function ld(e,t){if(t){la("Patches");e.patches_=[];e.inversePatches_=[];e.patchListener_=t}}function lu(e){lf(e);e.drafts_.forEach(lh);e.drafts_=null}function lf(e){if(e===ls){ls=e.parent_}}function lp(e){return ls=lc(ls,e)}function lh(e){const t=e[sW];if(t.type_===0/* Object */||t.type_===1/* Array */)t.revoke_();else t.revoked_=true}// src/core/finalize.ts
function lv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];const n=e!==void 0&&e!==r;if(n){if(r[sW].modified_){lu(t);sq(4)}if(sQ(e)){e=lg(t,e);if(!t.parent_)lb(t,e)}if(t.patches_){la("Patches").generateReplacementPatches_(r[sW].base_,e,t.patches_,t.inversePatches_)}}else{e=lg(t,r,[])}lu(t);if(t.patches_){t.patchListener_(t.patches_,t.inversePatches_)}return e!==sz?e:void 0}function lg(e,t,r){if(ln(t))return t;const n=e.immer_.shouldUseStrictIteration();const o=t[sW];if(!o){s0(t,(n,a)=>lm(e,o,t,n,a,r),n);return t}if(o.scope_!==e)return t;if(!o.modified_){lb(e,o.base_,true);return o.base_}if(!o.finalized_){o.finalized_=true;o.scope_.unfinalizedDrafts_--;const t=o.copy_;let a=t;let i=false;if(o.type_===3/* Set */){a=new Set(t);t.clear();i=true}s0(a,(n,a)=>lm(e,o,t,n,a,r,i),n);lb(e,t,false);if(r&&e.patches_){la("Patches").generatePatches_(o,r,e.patches_,e.inversePatches_)}}return o.copy_}function lm(e,t,r,n,o,a,i){if(o==null){return}if(typeof o!=="object"&&!i){return}const s=ln(o);if(s&&!i){return}if(false){}if(sG(o)){const i=a&&t&&t.type_!==3/* Set */&&// Set objects are atomic since they have no keys.
!s6(t.assigned_,n)?a.concat(n):void 0;const s=lg(e,o,i);s4(r,n,s);if(sG(s)){e.canAutoFreeze_=false}else return}else if(i){r.add(o)}if(sQ(o)&&!s){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1){return}if(t&&t.base_&&t.base_[n]===o&&s){return}lg(e,o);if((!t||!t.scope_.parent_)&&typeof n!=="symbol"&&(s5(r)?r.has(n):Object.prototype.propertyIsEnumerable.call(r,n)))lb(e,o)}}function lb(e,t,r=false){if(!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_){le(t,r)}}// src/core/proxy.ts
function ly(e,t){const r=Array.isArray(e);const n={type_:r?1/* Array */:0/* Object */,// Track which produce call this is associated with.
scope_:t?t.scope_:ll(),// True for both shallow and deep changes.
modified_:false,// Used during finalization.
finalized_:false,// Track which properties have been assigned (true) or deleted (false).
assigned_:{},// The parent draft state.
parent_:t,// The base state.
base_:e,// The base proxy.
draft_:null,// set below
// The base copy with any updated values.
copy_:null,// Called by the `produce` function.
revoke_:null,isManual_:false};let o=n;let a=l_;if(r){o=[n];a=lw}const{revoke:i,proxy:s}=Proxy.revocable(o,a);n.draft_=s;n.revoke_=i;return s}var l_={get(e,t){if(t===sW)return e;const r=s7(e);if(!s6(r,t)){return lA(e,r,t)}const n=r[t];if(e.finalized_||!sQ(n)){return n}if(n===lx(e.base_,t)){lI(e);return e.copy_[t]=lC(n,e)}return n},has(e,t){return t in s7(e)},ownKeys(e){return Reflect.ownKeys(s7(e))},set(e,t,r){const n=lk(s7(e),t);if(n?.set){n.set.call(e.draft_,r);return true}if(!e.modified_){const n=lx(s7(e),t);const o=n?.[sW];if(o&&o.base_===r){e.copy_[t]=r;e.assigned_[t]=false;return true}if(s3(r,n)&&(r!==void 0||s6(e.base_,t)))return true;lI(e);lY(e)}if(e.copy_[t]===r&&// special case: handle new props with value 'undefined'
(r!==void 0||t in e.copy_)||// special case: NaN
Number.isNaN(r)&&Number.isNaN(e.copy_[t]))return true;e.copy_[t]=r;e.assigned_[t]=true;return true},deleteProperty(e,t){if(lx(e.base_,t)!==void 0||t in e.base_){e.assigned_[t]=false;lI(e);lY(e)}else{delete e.assigned_[t]}if(e.copy_){delete e.copy_[t]}return true},// Note: We never coerce `desc.value` into an Immer draft, because we can't make
// the same guarantee in ES5 mode.
getOwnPropertyDescriptor(e,t){const r=s7(e);const n=Reflect.getOwnPropertyDescriptor(r,t);if(!n)return n;return{writable:true,configurable:e.type_!==1/* Array */||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){sq(11)},getPrototypeOf(e){return sU(e.base_)},setPrototypeOf(){sq(12)}};var lw={};s0(l_,(e,t)=>{lw[e]=function(){arguments[0]=arguments[0][0];return t.apply(this,arguments)}});lw.deleteProperty=function(e,t){if(false){}return lw.set.call(this,e,t,void 0)};lw.set=function(e,t,r){if(false){}return l_.set.call(this,e[0],t,r,e[0])};function lx(e,t){const r=e[sW];const n=r?s7(r):e;return n[t]}function lA(e,t,r){const n=lk(t,r);return n?`value`in n?n.value:// This is a very special case, if the prop is a getter defined by the
// prototype, we should invoke it with the draft as context!
n.get?.call(e.draft_):void 0}function lk(e,t){if(!(t in e))return void 0;let r=sU(e);while(r){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=sU(r)}return void 0}function lY(e){if(!e.modified_){e.modified_=true;if(e.parent_){lY(e.parent_)}}}function lI(e){if(!e.copy_){e.copy_=s9(e.base_,e.scope_.immer_.useStrictShallowCopy_)}}// src/core/immerClass.ts
var lD=class{constructor(e){this.autoFreeze_=true;this.useStrictShallowCopy_=false;this.useStrictIteration_=true;/**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */this.produce=(e,t,r)=>{if(typeof e==="function"&&typeof t!=="function"){const r=t;t=e;const n=this;return function e(o=r,...a){return n.produce(o,e=>t.call(this,e,...a))}}if(typeof t!=="function")sq(6);if(r!==void 0&&typeof r!=="function")sq(7);let n;if(sQ(e)){const o=lp(this);const a=lC(e,void 0);let i=true;try{n=t(a);i=false}finally{if(i)lu(o);else lf(o)}ld(o,r);return lv(n,o)}else if(!e||typeof e!=="object"){n=t(e);if(n===void 0)n=e;if(n===sz)n=void 0;if(this.autoFreeze_)le(n,true);if(r){const t=[];const o=[];la("Patches").generateReplacementPatches_(e,n,t,o);r(t,o)}return n}else sq(1,e)};this.produceWithPatches=(e,t)=>{if(typeof e==="function"){return(t,...r)=>this.produceWithPatches(t,t=>e(t,...r))}let r,n;const o=this.produce(e,t,(e,t)=>{r=e;n=t});return[o,r,n]};if(typeof e?.autoFreeze==="boolean")this.setAutoFreeze(e.autoFreeze);if(typeof e?.useStrictShallowCopy==="boolean")this.setUseStrictShallowCopy(e.useStrictShallowCopy);if(typeof e?.useStrictIteration==="boolean")this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){if(!sQ(e))sq(8);if(sG(e))e=lS(e);const t=lp(this);const r=lC(e,void 0);r[sW].isManual_=true;lf(t);return r}finishDraft(e,t){const r=e&&e[sW];if(!r||!r.isManual_)sq(9);const{scope_:n}=r;ld(n,t);return lv(void 0,n)}/**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */setAutoFreeze(e){this.autoFreeze_=e}/**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}/**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(n.path.length===0&&n.op==="replace"){e=n.value;break}}if(r>-1){t=t.slice(r+1)}const n=la("Patches").applyPatches_;if(sG(e)){return n(e,t)}return this.produce(e,e=>n(e,t))}};function lC(e,t){const r=s5(e)?la("MapSet").proxyMap_(e,t):s8(e)?la("MapSet").proxySet_(e,t):ly(e,t);const n=t?t.scope_:ll();n.drafts_.push(r);return r}// src/core/current.ts
function lS(e){if(!sG(e))sq(10,e);return lM(e)}function lM(e){if(!sQ(e)||ln(e))return e;const t=e[sW];let r;let n=true;if(t){if(!t.modified_)return t.base_;t.finalized_=true;r=s9(e,t.scope_.immer_.useStrictShallowCopy_);n=t.scope_.immer_.shouldUseStrictIteration()}else{r=s9(e,true)}s0(r,(e,t)=>{s4(r,e,lM(t))},n);if(t){t.finalized_=false}return r}// src/plugins/patches.ts
function lE(){const e=16;if(false){}const t="replace";const r="add";const n="remove";function o(e,t,r,n){switch(e.type_){case 0/* Object */:case 2/* Map */:return i(e,t,r,n);case 1/* Array */:return a(e,t,r,n);case 3/* Set */:return s(e,t,r,n)}}function a(e,o,a,i){let{base_:s,assigned_:l}=e;let c=e.copy_;if(c.length<s.length){;[s,c]=[c,s];[a,i]=[i,a]}for(let e=0;e<s.length;e++){if(l[e]&&c[e]!==s[e]){const r=o.concat([e]);a.push({op:t,path:r,// Need to maybe clone it, as it can in fact be the original value
// due to the base/copy inversion at the start of this function
value:u(c[e])});i.push({op:t,path:r,value:u(s[e])})}}for(let e=s.length;e<c.length;e++){const t=o.concat([e]);a.push({op:r,path:t,// Need to maybe clone it, as it can in fact be the original value
// due to the base/copy inversion at the start of this function
value:u(c[e])})}for(let e=c.length-1;s.length<=e;--e){const t=o.concat([e]);i.push({op:n,path:t})}}function i(e,o,a,i){const{base_:s,copy_:l}=e;s0(e.assigned_,(e,c)=>{const d=s2(s,e);const f=s2(l,e);const p=!c?n:s6(s,e)?t:r;if(d===f&&p===t)return;const h=o.concat(e);a.push(p===n?{op:p,path:h}:{op:p,path:h,value:f});i.push(p===r?{op:n,path:h}:p===n?{op:r,path:h,value:u(d)}:{op:t,path:h,value:u(d)})})}function s(e,t,o,a){let{base_:i,copy_:s}=e;let l=0;i.forEach(e=>{if(!s.has(e)){const i=t.concat([l]);o.push({op:n,path:i,value:e});a.unshift({op:r,path:i,value:e})}l++});l=0;s.forEach(e=>{if(!i.has(e)){const i=t.concat([l]);o.push({op:r,path:i,value:e});a.unshift({op:n,path:i,value:e})}l++})}function l(e,r,n,o){n.push({op:t,path:[],value:r===sz?void 0:r});o.push({op:t,path:[],value:e})}function c(o,a){a.forEach(a=>{const{path:i,op:s}=a;let l=o;for(let t=0;t<i.length-1;t++){const r=s1(l);let n=i[t];if(typeof n!=="string"&&typeof n!=="number"){n=""+n}if((r===0/* Object */||r===1/* Array */)&&(n==="__proto__"||n==="constructor"))sq(e+3);if(typeof l==="function"&&n==="prototype")sq(e+3);l=s2(l,n);if(typeof l!=="object")sq(e+2,i.join("/"))}const c=s1(l);const u=d(a.value);const f=i[i.length-1];switch(s){case t:switch(c){case 2/* Map */:return l.set(f,u);case 3/* Set */:sq(e);default:return l[f]=u}case r:switch(c){case 1/* Array */:return f==="-"?l.push(u):l.splice(f,0,u);case 2/* Map */:return l.set(f,u);case 3/* Set */:return l.add(u);default:return l[f]=u}case n:switch(c){case 1/* Array */:return l.splice(f,1);case 2/* Map */:return l.delete(f);case 3/* Set */:return l.delete(a.value);default:return delete l[f]}default:sq(e+1,s)}});return o}function d(e){if(!sQ(e))return e;if(Array.isArray(e))return e.map(d);if(s5(e))return new Map(Array.from(e.entries()).map(([e,t])=>[e,d(t)]));if(s8(e))return new Set(Array.from(e).map(d));const t=Object.create(sU(e));for(const r in e)t[r]=d(e[r]);if(s6(e,sV))t[sV]=e[sV];return t}function u(e){if(sG(e)){return d(e)}else return e}li("Patches",{applyPatches_:c,generatePatches_:o,generateReplacementPatches_:l})}// src/plugins/mapset.ts
function lF(){class e extends Map{constructor(e,t){super();this[sW]={type_:2/* Map */,parent_:t,scope_:t?t.scope_:ll(),modified_:false,finalized_:false,copy_:void 0,assigned_:void 0,base_:e,draft_:this,isManual_:false,revoked_:false}}get size(){return s7(this[sW]).size}has(e){return s7(this[sW]).has(e)}set(e,t){const n=this[sW];i(n);if(!s7(n).has(e)||s7(n).get(e)!==t){r(n);lY(n);n.assigned_.set(e,true);n.copy_.set(e,t);n.assigned_.set(e,true)}return this}delete(e){if(!this.has(e)){return false}const t=this[sW];i(t);r(t);lY(t);if(t.base_.has(e)){t.assigned_.set(e,false)}else{t.assigned_.delete(e)}t.copy_.delete(e);return true}clear(){const e=this[sW];i(e);if(s7(e).size){r(e);lY(e);e.assigned_=/* @__PURE__ */new Map;s0(e.base_,t=>{e.assigned_.set(t,false)});e.copy_.clear()}}forEach(e,t){const r=this[sW];s7(r).forEach((r,n,o)=>{e.call(t,this.get(n),n,this)})}get(e){const t=this[sW];i(t);const n=s7(t).get(e);if(t.finalized_||!sQ(n)){return n}if(n!==t.base_.get(e)){return n}const o=lC(n,t);r(t);t.copy_.set(e,o);return o}keys(){return s7(this[sW]).keys()}values(){const e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:false,value:r}}}}entries(){const e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:false,value:[t.value,r]}}}}[(sW,Symbol.iterator)](){return this.entries()}}function t(t,r){return new e(t,r)}function r(e){if(!e.copy_){e.assigned_=/* @__PURE__ */new Map;e.copy_=new Map(e.base_)}}class n extends Set{constructor(e,t){super();this[sW]={type_:3/* Set */,parent_:t,scope_:t?t.scope_:ll(),modified_:false,finalized_:false,copy_:void 0,base_:e,draft_:this,drafts_:/* @__PURE__ */new Map,revoked_:false,isManual_:false}}get size(){return s7(this[sW]).size}has(e){const t=this[sW];i(t);if(!t.copy_){return t.base_.has(e)}if(t.copy_.has(e))return true;if(t.drafts_.has(e)&&t.copy_.has(t.drafts_.get(e)))return true;return false}add(e){const t=this[sW];i(t);if(!this.has(e)){a(t);lY(t);t.copy_.add(e)}return this}delete(e){if(!this.has(e)){return false}const t=this[sW];i(t);a(t);lY(t);return t.copy_.delete(e)||(t.drafts_.has(e)?t.copy_.delete(t.drafts_.get(e)):/* istanbul ignore next */false)}clear(){const e=this[sW];i(e);if(s7(e).size){a(e);lY(e);e.copy_.clear()}}values(){const e=this[sW];i(e);a(e);return e.copy_.values()}entries(){const e=this[sW];i(e);a(e);return e.copy_.entries()}keys(){return this.values()}[(sW,Symbol.iterator)](){return this.values()}forEach(e,t){const r=this.values();let n=r.next();while(!n.done){e.call(t,n.value,n.value,this);n=r.next()}}}function o(e,t){return new n(e,t)}function a(e){if(!e.copy_){e.copy_=/* @__PURE__ */new Set;e.base_.forEach(t=>{if(sQ(t)){const r=lC(t,e);e.drafts_.set(t,r);e.copy_.add(r)}else{e.copy_.add(t)}})}}function i(e){if(e.revoked_)sq(3,JSON.stringify(s7(e)))}li("MapSet",{proxyMap_:t,proxySet_:o})}// src/immer.ts
var lH=new lD;var lT=lH.produce;var lK=/* @__PURE__ *//* unused pure expression or super */null&&lH.produceWithPatches.bind(lH);var lO=/* @__PURE__ *//* unused pure expression or super */null&&lH.setAutoFreeze.bind(lH);var lN=/* @__PURE__ *//* unused pure expression or super */null&&lH.setUseStrictShallowCopy.bind(lH);var lP=/* @__PURE__ *//* unused pure expression or super */null&&lH.setUseStrictIteration.bind(lH);var lL=/* @__PURE__ *//* unused pure expression or super */null&&lH.applyPatches.bind(lH);var lR=/* @__PURE__ *//* unused pure expression or super */null&&lH.createDraft.bind(lH);var lB=/* @__PURE__ *//* unused pure expression or super */null&&lH.finishDraft.bind(lH);function lz(e){return e}function lV(e){return e}//# sourceMappingURL=immer.mjs.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/CheckBox.tsx
var lW=r(6721);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useDebounce.ts
var lj=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,n]=(0,u.useState)(e);(0,u.useEffect)(()=>{var r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useIsScrolling.ts
var lq={defaultValue:false};var lU=e=>{var t=(0,u.useRef)(null);var r=(0,b._)({},lq,e);var[n,o]=(0,u.useState)(r.defaultValue);(0,u.useEffect)(()=>{if(!(0,tC/* .isDefined */.O9)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){o(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){o(false);return}o(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:n}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/category.ts
var lG=e=>{return rr/* .wpAuthApiInstance.get */.v.get(rn/* ["default"].CATEGORIES */.A.CATEGORIES,e?{params:{per_page:100,search:e}}:{params:{per_page:100}})};var lQ=e=>{return(0,nP/* .useQuery */.I)({queryKey:["CategoryList",e],queryFn:()=>lG(e).then(e=>e.data)})};var l$=e=>{return rr/* .wpAuthApiInstance.post */.v.post(rn/* ["default"].CATEGORIES */.A.CATEGORIES,e)};var lZ=()=>{var e=(0,v/* .useQueryClient */.jE)();var{showToast:t}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:l$,onSuccess:()=>{e.invalidateQueries({queryKey:["CategoryList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(e)})}})};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormMultiLevelSelect.tsx
function lX(){var e=(0,M._)(["\n      transform: rotate(180deg);\n    "]);lX=function t(){return e};return e}var lJ=e=>{var{label:t,field:r,fieldState:n,disabled:o,loading:a,placeholder:i,helpText:s,isInlineLabel:l,clearable:c,listItemsLabel:f,optionsWrapperStyle:p}=e;var h=(0,u.useRef)(null);var[v,g]=(0,u.useState)(false);var[x,A]=(0,u.useState)("");var k=lj(x,300);var D=lQ(k);var C;var S=(0,Y/* .generateTree */.ww)((C=D.data)!==null&&C!==void 0?C:[]);(0,u.useEffect)(()=>{if(!v){A("")}},[v]);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:o||S.length===0,loading:a,placeholder:i,helpText:s,isInlineLabel:l,children:e=>{var t,n;return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l6.inputWrapper,ref:h,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},e),{type:"text",onClick:e=>{e.stopPropagation();g(true)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();g(true)}if(e.key==="Tab"){g(false)}},autoComplete:"off",readOnly:true,disabled:o||S.length===0,value:r.value?(n=D.data)===null||n===void 0?void 0:(t=n.find(e=>e.id===r.value))===null||t===void 0?void 0:t.name:"",placeholder:i})),/*#__PURE__*/(0,d/* .jsx */.Y)("button",{tabIndex:-1,type:"button",disabled:o||S.length===0,"aria-label":(0,m.__)("Toggle options","tutor-pro"),css:l6.toggleIcon(v),onClick:()=>{g(e=>!e)},children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:h,isOpen:v,closePopover:()=>g(false),dependencies:[S.length],animationType:tY/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l6.categoryWrapper,children:[!!f&&/*#__PURE__*/(0,d/* .jsx */.Y)("p",{css:l6.listItemLabel,children:f}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l6.searchInput,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:l6.searchIcon,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",{type:"text",placeholder:(0,m.__)("Search","tutor-pro"),value:x,onChange:e=>{A(e.target.value)}})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:S.length>0,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:l6.notFound,children:(0,m.__)("No categories found.","tutor-pro")}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:[l6.options,p],children:S.map(e=>/*#__PURE__*/(0,d/* .jsx */.Y)(l1,{option:e,onChange:e=>{r.onChange(e);g(false)}},e.id))})}),c&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:l6.clearButton,children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",onClick:()=>{r.onChange(null);g(false)},children:(0,m.__)("Clear selection","tutor-pro")})})]})})]})}})};/* export default */const l0=lJ;var l1=e=>{var{option:t,onChange:r,level:n=0}=e;var o=t.children.length>0;var a=()=>{if(!o){return null}return t.children.map(e=>{return/*#__PURE__*/(0,d/* .jsx */.Y)(l1,{option:e,onChange:r,level:n+1},e.id)})};return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l6.branchItem(n),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",onClick:()=>r(t.id),title:t.name,children:(0,Y/* .decodeHtmlEntities */.jT)(t.name)}),a()]})};var l6={categoryWrapper:/*#__PURE__*/(0,h/* .css */.AH)("background-color:",x/* .colorTokens.background.white */.I6.background.white,";box-shadow:",x/* .shadow.popover */.r7.popover,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",x/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",x/* .spacing["8"] */.YK["8"]," 0;min-width:275px;"),options:/*#__PURE__*/(0,h/* .css */.AH)("max-height:455px;",k/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),notFound:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",A/* .typography.caption */.I.caption("regular"),";padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["16"] */.YK["16"],";color:",x/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,h/* .css */.AH)("position:sticky;top:0;padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["16"] */.YK["16"],";input{",A/* .typography.body */.I.body("regular"),";width:100%;border-radius:",x/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["32"] */.YK["32"],";color:",x/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",k/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;left:",x/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),branchItem:e=>/*#__PURE__*/(0,h/* .css */.AH)("position:relative;z-index:",x/* .zIndex.positive */.fE.positive,";button{",k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.body */.I.body("regular"),";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",x/* .colorTokens.text.title */.I6.text.title,";padding-left:calc(",x/* .spacing["24"] */.YK["24"]," + ",x/* .spacing["24"] */.YK["24"]," * ",e,");line-height:",x/* .lineHeight["36"] */.K_["36"],";padding-right:",x/* .spacing["16"] */.YK["16"],";width:100%;&:hover,&:focus,&:active{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";color:",x/* .colorTokens.text.title */.I6.text.title,";}}"),toggleIcon:e=>/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";position:absolute;top:",x/* .spacing["4"] */.YK["4"],";right:",x/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";padding:",x/* .spacing["6"] */.YK["6"],";&:focus,&:active,&:hover{background:none;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}",e&&(0,h/* .css */.AH)(lX())),inputWrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;input:read-only{background-color:inherit;}"),clearButton:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["24"] */.YK["24"],";box-shadow:",x/* .shadow.dividerTop */.r7.dividerTop,";& > button{padding:0;}"),listItemLabel:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";font-weight:",x/* .fontWeight.medium */.Wy.medium,";background-color:",x/* .colorTokens.background.white */.I6.background.white,";color:",x/* .colorTokens.text.hints */.I6.text.hints,";padding:",x/* .spacing["10"] */.YK["10"]," ",x/* .spacing["16"] */.YK["16"],";"),radioLabel:/*#__PURE__*/(0,h/* .css */.AH)("line-height:",x/* .lineHeight["32"] */.K_["32"],";padding-left:",x/* .spacing["2"] */.YK["2"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormCategoriesInput.tsx
function l2(){var e=(0,M._)(["\n      &:before {\n        content: '';\n        position: absolute;\n        height: 1px;\n        width: 10px;\n        left: -10px;\n        top: ",";\n\n        background-color: ",";\n        z-index: ",";\n      }\n    "]);l2=function t(){return e};return e}function l4(){var e=(0,M._)(["\n      box-shadow: ",";\n    "]);l4=function t(){return e};return e}var l3=e=>{var{label:t,field:r,fieldState:n,disabled:o,loading:a,placeholder:i,helpText:s,optionsWrapperStyle:l}=e;var c=t9({shouldFocusError:true});var f=c.watch("search");var p=lj(f,300);var h=lQ(p);var v=lZ();var[g,x]=(0,u.useState)(false);var[A,k]=(0,u.useState)(false);var{ref:D,isScrolling:C}=lU();(0,u.useEffect)(()=>{if(!h.isLoading&&(h.data||[]).length>0){k(true)}},[h.isLoading,h.data]);(0,u.useEffect)(()=>{if(g){var e=setTimeout(()=>{c.setFocus("name")},250);return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[g]);var{triggerRef:S,position:M,popoverRef:E}=(0,i3/* .usePortalPopover */.tP)({isOpen:g});var F;var H=(0,Y/* .generateTree */.ww)((F=h.data)!==null&&F!==void 0?F:[]);var T=()=>{x(false);c.reset({name:"",parent:null,search:f})};var K=e=>{if(e.name){v.mutate((0,b._)({name:e.name},e.parent&&{parent:e.parent}));T()}};return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:t,field:r,fieldState:n,loading:a,placeholder:i,helpText:s,children:()=>{return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:[l9.options,l],children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l9.categoryListWrapper,ref:D,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!o&&(A||p),children:/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"search",control:c.control,render:e=>/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l9.searchInput,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:l9.searchIcon,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",{type:"text",placeholder:(0,m.__)("Search","tutor-pro"),value:f,disabled:o||a,onChange:t=>{e.field.onChange(t.target.value)}})]})})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!h.isLoading&&!a,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:H.length>0,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:l9.notFound,children:(0,m.__)("No categories found.","tutor-pro")}),children:H.map((e,t)=>/*#__PURE__*/(0,d/* .jsx */.Y)(l7,{disabled:o,option:e,value:r.value||[],isLastChild:t===H.length-1,onChange:e=>{r.onChange(lT(r.value||[],t=>{if(Array.isArray(t)){return t.includes(e)?t.filter(t=>t!==e):[...t,e]}return[e]}))}},e.id))})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!o,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{ref:S,css:l9.addButtonWrapper({isActive:C,hasCategories:h.isLoading||H.length>0}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{disabled:o||a,type:"button",css:l9.addNewButton,onClick:()=>x(true),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{width:24,height:24,name:"plus"})," ",(0,m.__)("Add","tutor-pro")]})})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(i3/* .Portal */.ZL,{isOpen:g,onClickOutside:T,onEscape:T,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l9.categoryFormWrapper,style:{left:M.left,top:M.top},ref:E,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"name",control:c.control,rules:{required:(0,m.__)("Category name is required","tutor-pro")},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,y._)((0,b._)({},e),{placeholder:(0,m.__)("Category name","tutor-pro"),selectOnFocus:true}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"parent",control:c.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(l0,(0,y._)((0,b._)({},e),{placeholder:(0,m.__)("Select parent","tutor-pro"),clearable:!!e.field.value}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l9.categoryFormButtons,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",size:"small",onClick:T,children:(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"secondary",size:"small",loading:v.isPending,onClick:c.handleSubmit(K),children:(0,m.__)("Ok","tutor-pro")})]})]})})]})}})};/* export default */const l5=(0,rZ/* .withVisibilityControl */.M)(l3);var l8=e=>{return e.children.reduce((e,t)=>e+l8(t),e.children.length)};var l7=e=>{var{option:t,value:r,onChange:n,isLastChild:o,disabled:a}=e;var i=l8(t);var s=i>0;var l=(0,Y/* .getCategoryLeftBarHeight */.oj)(o,i);var c=()=>{if(!s){return null}return t.children.map((e,o)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)(l7,{option:e,value:r,onChange:n,isLastChild:o===t.children.length-1,disabled:a},e.id)})};return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:l9.branchItem({leftBarHeight:l,hasParent:t.parent!==0}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(lW/* ["default"] */.A,{checked:Array.isArray(r)?r.includes(t.id):r===t.id,label:(0,Y/* .decodeHtmlEntities */.jT)(t.name),onChange:()=>{n(t.id)},labelCss:l9.checkboxLabel,disabled:a}),c()]})};var l9={options:/*#__PURE__*/(0,h/* .css */.AH)("border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";padding:",x/* .spacing["8"] */.YK["8"]," 0;background-color:",x/* .colorTokens.bg.white */.I6.bg.white,";"),categoryListWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.overflowYAuto */.x.overflowYAuto,";max-height:208px;"),notFound:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",A/* .typography.caption */.I.caption("regular"),";padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["16"] */.YK["16"],";color:",x/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,h/* .css */.AH)("position:sticky;top:0;padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["16"] */.YK["16"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";z-index:",x/* .zIndex.dropdown */.fE.dropdown,";input{",A/* .typography.body */.I.body("regular"),";width:100%;border-radius:",x/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["32"] */.YK["32"],";color:",x/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",k/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;left:",x/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),checkboxLabel:/*#__PURE__*/(0,h/* .css */.AH)("line-height:1.88rem !important;span:last-of-type{",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"}"),branchItem:e=>{var{leftBarHeight:t,hasParent:r}=e;return/*#__PURE__*/(0,h/* .css */.AH)("line-height:",x/* .spacing["32"] */.YK["32"],";position:relative;z-index:",x/* .zIndex.positive */.fE.positive,";margin-inline:",x/* .spacing["20"] */.YK["20"]," ",x/* .spacing["16"] */.YK["16"],";&:after{content:'';position:absolute;height:",t,";width:1px;left:9px;top:25px;background-color:",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";z-index:",x/* .zIndex.level */.fE.level,";}",r&&(0,h/* .css */.AH)(l2(),x/* .spacing["16"] */.YK["16"],x/* .colorTokens.stroke.divider */.I6.stroke.divider,x/* .zIndex.level */.fE.level))},addNewButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.small */.I.small("medium"),";color:",x/* .colorTokens.brand.blue */.I6.brand.blue,";padding:0 ",x/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;border-radius:",x/* .borderRadius["2"] */.Vq["2"],";&:focus,&:active,&:hover{background:none;color:",x/* .colorTokens.brand.blue */.I6.brand.blue,";}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{color:",x/* .colorTokens.text.disable */.I6.text.disable,";}"),categoryFormWrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;background-color:",x/* .colorTokens.background.white */.I6.background.white,";box-shadow:",x/* .shadow.popover */.r7.popover,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",x/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",x/* .spacing["16"] */.YK["16"],";min-width:306px;display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";"),categoryFormButtons:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;justify-content:end;gap:",x/* .spacing["8"] */.YK["8"],";"),addButtonWrapper:e=>{var{isActive:t=false,hasCategories:r=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)("transition:box-shadow 0.3s ease-in-out;padding-inline:",x/* .spacing["8"] */.YK["8"],";padding-block:",r?x/* .spacing["4"] */.YK["4"]:"0px",";",t&&(0,h/* .css */.AH)(l4(),x/* .shadow.scrollable */.r7.scrollable))}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/ImageInput.tsx
function ce(){var e=(0,M._)(["\n      width: 168px;\n    "]);ce=function t(){return e};return e}function ct(){var e=(0,M._)(["\n      width: 168px;\n    "]);ct=function t(){return e};return e}var cr={large:"regular",regular:"small",small:"small"};var cn=e=>{var{buttonText:t=(0,m.__)("Upload Media","tutor-pro"),infoText:r,size:n="regular",value:o,uploadHandler:a,clearHandler:i,emptyImageCss:s,previewImageCss:l,overlayCss:c,replaceButtonText:u,loading:f,disabled:p=false,isClearAble:v=true}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!f,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:ca.emptyMedia({size:n,isDisabled:p}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:o===null||o===void 0?void 0:o.url,fallback:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{"aria-disabled":p,css:[ca.emptyMedia({size:n,isDisabled:p}),s],onClick:e=>{e.stopPropagation();if(p){return}a()},onKeyDown:e=>{if(!p&&e.key==="Enter"){e.preventDefault();a()}},children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{disabled:p,size:cr[n],variant:"secondary",buttonContentCss:ca.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,d/* .jsx */.Y)("p",{css:ca.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:[ca.previewWrapper({size:n,isDisabled:p}),l],"data-cy":"media-preview",children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:e,alt:o===null||o===void 0?void 0:o.title,css:ca.imagePreview}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:[ca.hoverPreview,c],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{disabled:p,variant:"secondary",size:cr[n],buttonCss:/*#__PURE__*/(0,h/* .css */.AH)("margin-top:",v&&x/* .spacing["16"] */.YK["16"],";"),onClick:e=>{e.stopPropagation();a()},"data-cy":"replace-media",children:u||(0,m.__)("Replace Image","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:v,children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{disabled:p,variant:"text",size:cr[n],onClick:e=>{e.stopPropagation();i()},"data-cy":"clear-media",children:(0,m.__)("Remove","tutor-pro")})})]})]})}})})};/* export default */const co=cn;var ca={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,h/* .css */.AH)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",x/* .spacing["8"] */.YK["8"],";border:1px dashed ",x/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";background-color:",x/* .colorTokens.bg.white */.I6.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,h/* .css */.AH)(ce()),"    svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover svg{color:",!r&&x/* .colorTokens.brand.blue */.I6.brand.blue,";}")},buttonText:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.text.brand */.I6.text.brand,";"),infoTexts:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.tiny */.I.tiny(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,h/* .css */.AH)("width:100%;height:168px;border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;position:relative;background-color:",x/* .colorTokens.bg.white */.I6.bg.white,";",t==="small"&&(0,h/* .css */.AH)(ct()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,h/* .css */.AH)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";opacity:0;position:absolute;inset:0;background-color:",nm()(x/* .colorTokens.color.black.main */.I6.color.black.main,.6),";button:first-of-type{box-shadow:",x/* .shadow.button */.r7.button,";}button:last-of-type:not(:only-of-type){color:",x/* .colorTokens.text.white */.I6.text.white,";box-shadow:none;}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/ImageContext.tsx
var ci=[(0,m.__)("A serene classroom setting with books and a chalkboard","tutor-pro"),(0,m.__)("An abstract representation of innovation and creativity","tutor-pro"),(0,m.__)("A vibrant workspace with a laptop and coffee cup","tutor-pro"),(0,m.__)("A modern design with digital learning icons","tutor-pro"),(0,m.__)("A futuristic cityscape with a glowing pathway","tutor-pro"),(0,m.__)("A peaceful nature scene with soft colors","tutor-pro"),(0,m.__)("A professional boardroom with sleek visuals","tutor-pro"),(0,m.__)("A stack of books with warm, inviting lighting","tutor-pro"),(0,m.__)("A dynamic collage of technology and education themes","tutor-pro"),(0,m.__)("A bold and minimalistic design with striking colors","tutor-pro")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var cs=/*#__PURE__*/f().createContext(null);var cl=()=>{var e=(0,u.useContext)(cs);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var cc=e=>{var{children:t,field:r,fieldState:n,onCloseModal:o}=e;var a=t9({defaultValues:{prompt:"",style:"none"}});var[i,s]=(0,u.useState)("generation");var[l,c]=(0,u.useState)("");var[f,p]=(0,u.useState)([null,null,null,null]);var h=(0,u.useCallback)(e=>{s(e)},[]);return/*#__PURE__*/(0,d/* .jsx */.Y)(cs.Provider,{value:{state:i,onDropdownMenuChange:h,images:f,setImages:p,currentImage:l,setCurrentImage:c,field:r,fieldState:n,onCloseModal:o},children:/*#__PURE__*/(0,d/* .jsx */.Y)(er,(0,y._)((0,b._)({},a),{children:t}))})};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormImageRadioGroup.tsx
function cd(){var e=(0,M._)(["\n        img {\n          border-color: ",";\n        }\n      "]);cd=function t(){return e};return e}function cu(){var e=(0,M._)(["\n        outline-color: ",";\n      "]);cu=function t(){return e};return e}var cf=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:a}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:a,children:()=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:ch.wrapper,children:o.map((e,r)=>/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:ch.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:a,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,d/* .jsx */.Y)("p",{children:e.label})]},r))})}})};/* export default */const cp=cf;var ch={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",x/* .spacing["12"] */.YK["12"],";margin-top:",x/* .spacing["4"] */.YK["4"],";"),item:e=>/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";display:flex;flex-direction:column;gap:",x/* .spacing["4"] */.YK["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",A/* .typography.small */.I.small(),";width:100%;",k/* .styleUtils.textEllipsis */.x.textEllipsis,";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,h/* .css */.AH)(cd(),x/* .colorTokens.stroke.hover */.I6.stroke.hover),"}img{border-radius:",x/* .borderRadius["6"] */.Vq["6"],";border:2px solid ",x/* .colorTokens.stroke.border */.I6.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,h/* .css */.AH)(cu(),x/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi),"}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/3d.png
const cv=r.p+"images/3d-d74232c4.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/black-and-white.png
const cg=r.p+"images/black-and-white-a1d197c0.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/concept.png
const cm=r.p+"images/concept-ad427b25.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/dreamy.png
const cb=r.p+"images/dreamy-72eab497.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/filmic.png
const cy=r.p+"images/filmic-91db8802.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/illustration.png
const c_=r.p+"images/illustration-19074f05.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/neon.png
const cw=r.p+"images/neon-bfde2ac7.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/none.jpg
const cx=r.p+"images/none-2088b52b.jpg";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/painting.png
const cA=r.p+"images/painting-db63dd8a.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/photo.png
const ck=r.p+"images/photo-7d69e05e.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/retro.png
const cY=r.p+"images/retro-bcc8eda3.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/ai-types/sketch.png
const cI=r.p+"images/sketch-319bbedf.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/magic-ai.ts
function cD(e,t){e.lineTo(t.x,t.y);e.stroke()}function cC(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function cS(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var o=new Uint8Array(n);for(var a=0;a<t.length;a++){o[a]=t.charCodeAt(a)}return new Blob([n],{type:r})}function cM(e,t){var r=cS(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function cE(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var cF=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var cH=e=>{return e.toDataURL("image/png")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/ImageItem.tsx
function cT(){var e=(0,M._)(["\n      background-position: top left;\n    "]);cT=function t(){return e};return e}function cK(){var e=(0,M._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);cK=function t(){return e};return e}function cO(){var e=(0,M._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);cO=function t(){return e};return e}function cN(){var e=(0,M._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);cN=function t(){return e};return e}function cP(){var e=(0,M._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);cP=function t(){return e};return e}var cL=[{label:(0,m.__)("Magic Fill","tutor-pro"),value:"magic-fill",icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', __TUTOR_TEXT_DOMAIN__),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', __TUTOR_TEXT_DOMAIN__),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,m.__)("Download","tutor-pro"),value:"download",icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"download",width:24,height:24})}];var cR=e=>{var{src:t,loading:r,index:n}=e;var o=(0,u.useRef)(null);var[a,i]=(0,u.useState)(false);var{onDropdownMenuChange:s,setCurrentImage:l,onCloseModal:c,field:f}=cl();var p=rp();if(r||!t){return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cz.loader(n+1)})}return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:cz.image({isActive:p.isPending}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:t,alt:(0,m.__)("Generated Image","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{"data-actions":true,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cz.useButton,children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{variant:"primary",disabled:p.isPending,onClick:()=>F(function*(){if(!t){return}var e=yield p.mutateAsync({image:t});if(e.data){f.onChange(e.data);c()}})(),loading:p.isPending,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"download",width:24,height:24}),(0,m.__)("Use This","tutor-pro")]})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"primary",size:"icon",css:cz.threeDots,ref:o,onClick:()=>i(true),children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:o,isOpen:a,arrow:true,closePopover:()=>{i(false)},animationType:tY/* .AnimationType.slideDown */.J6.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cz.dropdownOptions,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:cL,children:(e,r)=>/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:cz.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{l(t);s(e.value);break}case"download":{var r="".concat((0,Y/* .nanoid */.Ak)(),".png");cM(t,r);break}default:break}i(false)},children:[e.icon,e.label]},r)})})})]})};var cB=/*#__PURE__*/(0,h/* .keyframes */.i7)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var cz={loader:e=>/*#__PURE__*/(0,h/* .css */.AH)("border-radius:",x/* .borderRadius["12"] */.Vq["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",cB," 2s linear infinite;",e===1&&(0,h/* .css */.AH)(cT())," ",e===2&&(0,h/* .css */.AH)(cK()),"		",e===3&&(0,h/* .css */.AH)(cO()),"		",e===4&&(0,h/* .css */.AH)(cN())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("width:100%;height:100%;overflow:hidden;border-radius:",x/* .borderRadius["12"] */.Vq["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,h/* .css */.AH)(cP(),x/* .colorTokens.stroke.brand */.I6.stroke.brand),"    &:hover,&:focus-within{outline-color:",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;top:",x/* .spacing["8"] */.YK["8"],";right:",x/* .spacing["8"] */.YK["8"],";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";"),useButton:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;left:50%;bottom:",x/* .spacing["12"] */.YK["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";}"),dropdownOptions:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;padding-block:",x/* .spacing["8"] */.YK["8"],";"),dropdownItem:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";",k/* .styleUtils.resetButton */.x.resetButton,";height:40px;display:flex;gap:",x/* .spacing["10"] */.YK["10"],";align-items:center;transition:background-color 0.3s ease;color:",x/* .colorTokens.text.title */.I6.text.title,";padding-inline:",x/* .spacing["8"] */.YK["8"],";cursor:pointer;svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/styles.ts
var cV={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",x/* .Breakpoint.tablet */.EA.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",x/* .zIndex.level */.fE.level,";"),right:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",x/* .zIndex.positive */.fE.positive,";"),rightFooter:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";margin-top:auto;padding-top:80px;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/ImageGeneration.tsx
var cW=[{label:(0,m.__)("None","tutor-pro"),value:"none",image:cx},{label:(0,m.__)("Photo","tutor-pro"),value:"photo",image:ck},{label:(0,m.__)("Neon","tutor-pro"),value:"neon",image:cw},{label:(0,m.__)("3D","tutor-pro"),value:"3d",image:cv},{label:(0,m.__)("Painting","tutor-pro"),value:"painting",image:cA},{label:(0,m.__)("Sketch","tutor-pro"),value:"sketch",image:cI},{label:(0,m.__)("Concept","tutor-pro"),value:"concept_art",image:cm},{label:(0,m.__)("Illustration","tutor-pro"),value:"illustration",image:c_},{label:(0,m.__)("Dreamy","tutor-pro"),value:"dreamy",image:cb},{label:(0,m.__)("Filmic","tutor-pro"),value:"filmic",image:cy},{label:(0,m.__)("Retro","tutor-pro"),value:"retrowave",image:cY},{label:(0,m.__)("Black & White","tutor-pro"),value:"black-and-white",image:cg}];var cj=()=>{var e=td({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=cl();var n=ra();var{showToast:o}=(0,rt/* .useToast */.d)();var[a,i]=(0,u.useState)(t.every(e=>e===null));var[s,l]=(0,u.useState)([false,false,false,false]);var c=e.watch("style");var f=e.watch("prompt");var p=!c||!f;var h=t.some(tC/* .isDefined */.O9);(0,u.useEffect)(()=>{if(n.isError){o({type:"danger",message:n.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[n.isError]);(0,u.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("form",{css:cV.wrapper,onSubmit:e.handleSubmit(e=>F(function*(){l([true,true,true,true]);i(false);try{yield Promise.all(Array.from({length:4}).map((t,o)=>{return n.mutateAsync(e).then(e=>{r(t=>{var r,n;var a=[...t];var i;a[o]=(i=(n=e.data.data)===null||n===void 0?void 0:(r=n[0])===null||r===void 0?void 0:r.b64_json)!==null&&i!==void 0?i:null;return a});l(e=>{var t=[...e];t[o]=false;return t})}).catch(e=>{l(e=>{var t=[...e];t[o]=false;return t});throw e})}))}catch(e){l([false,false,false,false]);i(true)}})()),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cV.left,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!a,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cq.images,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)(cR,{src:e,loading:s[t],index:t},t)}})})})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:cV.right,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:cq.fields,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:cq.promptWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(t_/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Visualize Your Course","tutor-pro"),placeholder:(0,m.__)("Describe the image you want for your course thumbnail","tutor-pro"),rows:4,isMagicAi:true,disabled:n.isPending,enableResize:false}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:cq.inspireButton,onClick:()=>{var t=ci.length;var r=Math.floor(Math.random()*t);e.reset((0,y._)((0,b._)({},e.getValues()),{prompt:ci[r]}))},disabled:n.isPending,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"bulbLine"}),(0,m.__)("Inspire Me","tutor-pro")]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(cp,(0,y._)((0,b._)({},e),{label:(0,m.__)("Styles","tutor-pro"),options:cW,disabled:n.isPending}))})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cV.rightFooter,children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{type:"submit",disabled:n.isPending||p,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:h?"reload":"magicAi",width:24,height:24}),h?(0,m.__)("Generate Again","tutor-pro"):(0,m.__)("Generate Now","tutor-pro")]})})]})]})};var cq={images:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",x/* .spacing["12"] */.YK["12"],";align-self:start;padding:",x/* .spacing["24"] */.YK["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";"),promptWrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;textarea{padding-bottom:",x/* .spacing["40"] */.YK["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",x/* .spacing["12"] */.YK["12"],";left:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";color:",x/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",x/* .spacing["12"] */.YK["12"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",x/* .colorTokens.background.brand */.I6.background.brand,";color:",x/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",x/* .colorTokens.background.disable */.I6.background.disable,";color:",x/* .colorTokens.text.disable */.I6.text.disable,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Separator.tsx
var cU=/*#__PURE__*/f().forwardRef((e,t)=>{var{className:r,variant:n}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{className:r,ref:t,css:cQ({variant:n})})});cU.displayName="Separator";var cG={horizontal:/*#__PURE__*/(0,h/* .css */.AH)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,h/* .css */.AH)("height:100%;width:1px;"),base:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;background-color:",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";")};var cQ=(0,th/* .createVariation */.s)({variants:{variant:{horizontal:cG.horizontal,vertical:cG.vertical}},defaultVariants:{variant:"horizontal"}},cG.base);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormRangeSliderField.tsx
function c$(){var e=(0,M._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);c$=function t(){return e};return e}function cZ(){var e=(0,M._)(["\n      background: ",";\n    "]);cZ=function t(){return e};return e}function cX(e,t,r,n){if(!t.current){return 0}var o=t.current.getBoundingClientRect();var a=o.width;var i=e-o.left;var s=Math.max(0,Math.min(i,a));var l=s/a*100;var c=Math.floor(r+l/100*(n-r));return c}var cJ=e=>{var{field:t,fieldState:r,label:n,min:o=0,max:a=100,isMagicAi:i=false,hasBorder:s=false}=e;var l=(0,u.useRef)(null);var c;var[f,p]=(0,u.useState)((c=t.value)!==null&&c!==void 0?c:0);var h=(0,u.useRef)(null);var v=(0,u.useRef)(null);var g=lj(f);(0,u.useEffect)(()=>{t.onChange(g);// eslint-disable-next-line react-hooks/exhaustive-deps
},[g,t.onChange]);(0,u.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==v.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!h.current){return}p(cX(t.clientX,h,o,a))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[o,a]);var m=(0,u.useMemo)(()=>{return Math.floor((f-o)/(a-o)*100)},[f,o,a]);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{field:t,fieldState:r,label:n,isMagicAi:i,children:()=>/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c1.wrapper(s),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c1.track,ref:h,onKeyDown:Y/* .noop */.lQ,onClick:e=>{p(cX(e.clientX,h,o,a))},children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:c1.fill,style:{width:"".concat(m,"%")}}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:c1.thumb(i),style:{left:"".concat(m,"%")},ref:v})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",{type:"text",css:c1.input,value:String(f),onChange:e=>{p(Number(e.target.value))},ref:l,onFocus:()=>{var e;(e=l.current)===null||e===void 0?void 0:e.select()}})]})})};/* export default */const c0=cJ;var c1={wrapper:e=>/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 45px;gap:",x/* .spacing["20"] */.YK["20"],";align-items:center;",e&&(0,h/* .css */.AH)(c$(),x/* .colorTokens.stroke.disable */.I6.stroke.disable,x/* .borderRadius["6"] */.Vq["6"],x/* .spacing["12"] */.YK["12"],x/* .spacing["10"] */.YK["10"],x/* .spacing["12"] */.YK["12"],x/* .spacing["16"] */.YK["16"])),track:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;height:4px;background-color:",x/* .colorTokens.bg.gray20 */.I6.bg.gray20,";border-radius:",x/* .borderRadius["50"] */.Vq["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;left:0;top:0;height:100%;background:",x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";width:50%;border-radius:",x/* .borderRadius["50"] */.Vq["50"],";"),thumb:e=>/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",x/* .borderRadius.circle */.Vq.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",x/* .borderRadius.circle */.Vq.circle,";background-color:",x/* .colorTokens.background.white */.I6.background.white,";cursor:pointer;}",e&&(0,h/* .css */.AH)(cZ(),x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1)),input:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption("medium"),";height:32px;border:1px solid ",x/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";text-align:center;color:",x/* .colorTokens.text.primary */.I6.text.primary,";&:focus-visible{",k/* .styleUtils.inputFocus */.x.inputFocus,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/DrawingCanvas.tsx
var c6=/*#__PURE__*/f().forwardRef((e,t)=>{var{src:r,width:n,height:o,brushSize:a,trackStack:i,pointer:s,setTrackStack:l,setPointer:c}=e;var[f,p]=(0,u.useState)(false);var[h,v]=(0,u.useState)({x:0,y:0});var g=(0,u.useRef)(null);var m=e=>{var{canvas:r,context:n}=cF(t);if(!r||!n){return}var o=r.getBoundingClientRect();var a=(e.clientX-o.left)*(r.width/o.width);var i=(e.clientY-o.top)*(r.height/o.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(a,i);p(true);v({x:a,y:i})};var b=e=>{var{canvas:r,context:n}=cF(t);if(!r||!n||!g.current){return}var o=r.getBoundingClientRect();var a={x:(e.clientX-o.left)*(r.width/o.width),y:(e.clientY-o.top)*(r.height/o.height)};if(f){cD(n,a)}g.current.style.left="".concat(a.x,"px");g.current.style.top="".concat(a.y,"px")};var y=e=>{var{canvas:r,context:n}=cF(t);if(!n||!r){return}p(false);n.closePath();var o=r.getBoundingClientRect();var a={x:(e.clientX-o.left)*(r.width/o.width),y:(e.clientY-o.top)*(r.height/o.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if(cC(h,a)===0){cD(n,{x:a.x+1,y:a.y+1})}l(e=>{var t=e.slice(0,s);return[...t,n.getImageData(0,0,1024,1024)]});c(e=>e+1)};var _=()=>{var{canvas:e,context:n}=cF(t);if(!e||!n){return}var o=new Image;o.src=r;o.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=o.width/o.height;var r=e.width/e.height;var a;var s;if(r>t){s=e.height;a=e.height*t}else{a=e.width;s=e.width/t}var c=(e.width-a)/2;var d=(e.height-s)/2;n.drawImage(o,c,d,a,s);if(i.length===0){l([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var w=()=>{if(!g.current){return}document.body.style.cursor="none";g.current.style.display="block"};var x=()=>{if(!g.current){return}document.body.style.cursor="auto";g.current.style.display="none"};(0,u.useEffect)(()=>{_();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c2.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("canvas",{ref:t,width:n,height:o,onMouseDown:m,onMouseMove:b,onMouseUp:y,onMouseEnter:w,onMouseLeave:x}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{ref:g,css:c2.customCursor(a)})]})});var c2={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",x/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",x/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",x/* .zIndex.highest */.fE.highest,";display:none;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-image/MagicFill.tsx
var c4=620;var c3=620;var c5=()=>{var e=t9({defaultValues:{brush_size:40,prompt:""}});var t=rs();var r=(0,u.useRef)(null);var{onDropdownMenuChange:n,currentImage:o,field:a,onCloseModal:i}=cl();var s=rp();var l=lj(e.watch("brush_size",40));var[c,f]=(0,u.useState)([]);var[p,v]=(0,u.useState)(1);var g=(0,u.useCallback)((e,t)=>{var n;var o=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!o){return}for(var a of t.slice(0,e)){o.putImageData(a,0,0)}},[]);(0,u.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=l},[l]);(0,u.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){g(p+1,c);v(e=>Math.min(e+1,c.length));return}if(e.key.toUpperCase()==="Z"){g(p-1,c);v(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[p,c,g]);if(!o){return null}return/*#__PURE__*/(0,d/* .jsxs */.FD)("form",{css:cV.wrapper,onSubmit:e.handleSubmit(e=>F(function*(){var n=r.current;var o=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!o){return}var a={prompt:e.prompt,image:cH(n)};var i=yield t.mutateAsync(a);if(i){var s=new Image;s.onload=()=>{n.width=c4;n.height=c3;o.drawImage(s,0,0,n.width,n.height);o.lineWidth=l;o.lineJoin="round";o.lineCap="round"};s.src=i}})()),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:cV.left,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.leftWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.actionBar,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.backButtonWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:c9.backButton,onClick:()=>n("generation"),children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"arrowLeft"})}),(0,m.__)("Magic Fill","tutor-pro")]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.actions,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"ghost",disabled:c.length===0,onClick:()=>{g(1,c);f(c.slice(0,1));v(1)},children:(0,m.__)("Revert to Original","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(cU,{variant:"vertical",css:/*#__PURE__*/(0,h/* .css */.AH)("min-height:16px;")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.undoRedo,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"ghost",size:"icon",disabled:p<=1,onClick:()=>{g(p-1,c);v(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"ghost",size:"icon",disabled:p===c.length,onClick:()=>{g(p+1,c);v(e=>Math.min(e+1,c.length))},children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.canvasAndLoading,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(c6,{ref:r,width:c4,height:c3,src:o,brushSize:l,trackStack:c,pointer:p,setTrackStack:f,setPointer:v}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.isPending,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:c9.loading})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:c9.footerActions,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:c9.footerActionsLeft,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"secondary",onClick:()=>{var e="".concat((0,Y/* .nanoid */.Ak)(),".png");var{canvas:t}=cF(r);if(!t)return;cM(cH(t),e)},children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:cV.right,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.fields,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(c0,(0,y._)((0,b._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(t_/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Describe the Fill","tutor-pro"),placeholder:(0,m.__)("Write 5 words to describe...","tutor-pro"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:[cV.rightFooter,/*#__PURE__*/(0,h/* .css */.AH)("margin-top:auto;")],children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:c9.footerButtons,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)(tm,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,m.__)("Generative Erase","tutor-pro")]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tm,{variant:"primary_outline",disabled:t.isPending,loading:s.isPending,onClick:()=>F(function*(){var{canvas:e}=cF(r);if(!e)return;var t=yield s.mutateAsync({image:cH(e)});if(t.data){a.onChange(t.data);i()}})(),children:(0,m.__)("Use Image","tutor-pro")})]})})]})]})};/* export default */const c8=c5;var c7={loading:/*#__PURE__*/(0,h/* .keyframes */.i7)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,h/* .keyframes */.i7)("0%{left:0%;}100%{left:100%;}")};var c9={canvasAndLoading:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;z-index:",x/* .zIndex.positive */.fE.positive,";"),loading:/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;top:0;left:0;width:100%;height:100%;background:",x/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",c7.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",c7.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";"),leftWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";padding-block:",x/* .spacing["16"] */.YK["16"],";"),footerButtons:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";"),footerActions:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["12"] */.YK["12"],";"),actions:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["16"] */.YK["16"],";"),undoRedo:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["12"] */.YK["12"],";"),backButtonWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";",A/* .typography.body */.I.body("medium"),";color:",x/* .colorTokens.text.title */.I6.text.title,";"),backButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";width:24px;height:24px;border-radius:",x/* .borderRadius["4"] */.Vq["4"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,h/* .css */.AH)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,h/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,h/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",x/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",x/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",x/* .zIndex.highest */.fE.highest,";display:none;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/AiImageModal.tsx
function de(){var{state:e}=cl();switch(e){case"generation":return/*#__PURE__*/(0,d/* .jsx */.Y)(cj,{});case"magic-fill":return/*#__PURE__*/(0,d/* .jsx */.Y)(c8,{});default:return null}}var dt=e=>{var{title:t,icon:r,closeModal:n,field:o,fieldState:a}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)(rC/* ["default"] */.A,{onClose:n,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,d/* .jsx */.Y)(cc,{field:o,fieldState:a,onCloseModal:n,children:/*#__PURE__*/(0,d/* .jsx */.Y)(de,{})})})};/* export default */const dr=dt;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useWpMedia.ts
var dn=e=>{var{options:t={},onChange:r,initialFiles:n}=e;var{showToast:o}=(0,rt/* .useToast */.d)();var a=(0,u.useMemo)(()=>n?Array.isArray(n)?n:[n]:[],[n]);var i=(0,u.useMemo)(()=>(0,y._)((0,b._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[s,l]=(0,u.useState)(a);(0,u.useEffect)(()=>{if(a&&!s.length){l(a)}},[s,a]);var c=(0,u.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(i);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();s.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=s.filter(e=>n.has(e.id));var c=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(i.maxFileSize&&t.filesizeInBytes>i.maxFileSize){o({// translators: %s is the file title
message:(0,m.sprintf)((0,m.__)("%s size exceeds the maximum allowed size","tutor-pro"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var d=i.multiple?[...a,...c]:c.slice(0,1);if(i.maxFiles&&d.length>i.maxFiles){o({// translators: %d is the maximum number of files allowed.
message:(0,m.sprintf)((0,m.__)("Cannot select more than %d files","tutor-pro"),i.maxFiles),type:"warning"});return}l(d);r===null||r===void 0?void 0:r(i.multiple?d:d[0]||null);t.close()});t.open()},[i,r,s,o]);var d=(0,u.useCallback)(()=>{l([]);r===null||r===void 0?void 0:r(i.multiple?[]:null)},[i.multiple,r]);return{openMediaLibrary:c,existingFiles:s,resetFiles:d}};/* export default */const da=dn;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-image.webp
const di=r.p+"images/generate-image-3e5f50a6.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-image-2x.webp
const ds=r.p+"images/generate-image-2x-7d387dcf.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormImageInput.tsx
var dl;var dc=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var dd=(dl=rT/* .tutorConfig.settings */.P.settings)===null||dl===void 0?void 0:dl.chatgpt_key_exist;var du=e=>{var{field:t,fieldState:r,label:n,size:o,helpText:a,buttonText:i=(0,m.__)("Upload Media","tutor-pro"),infoText:s,onChange:l,generateWithAi:c=false,previewImageCss:u,loading:f,onClickAiButton:p}=e;var{showModal:h}=(0,rH/* .useModal */.h)();var{openMediaLibrary:v,resetFiles:g}=da({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:o}=e;t.onChange({id:r,url:n,title:o});if(l){l({id:r,url:n,title:o})}}},initialFiles:t.value});var b;var y=(b=t.value)!==null&&b!==void 0?b:null;var _=()=>{v()};var x=()=>{g();t.onChange(null);if(l){l(null)}};var A=()=>{if(!dc){h({component:rN,props:{image:di,image2x:ds}})}else if(!dd){h({component:no,props:{image:di,image2x:ds}})}else{h({component:dr,isMagicAi:true,props:{title:(0,m.__)("AI Studio","tutor-pro"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});p===null||p===void 0?void 0:p()}};return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:n,field:t,fieldState:r,helpText:a,onClickAiButton:A,generateWithAi:c,children:()=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,d/* .jsx */.Y)(co,{size:o,value:y,uploadHandler:_,clearHandler:x,buttonText:i,infoText:s,previewImageCss:u,loading:f})})}})};/* export default */const df=(0,rZ/* .withVisibilityControl */.M)(du);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInputWithContent.tsx
function dp(){var e=(0,M._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);dp=function t(){return e};return e}function dh(){var e=(0,M._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);dh=function t(){return e};return e}function dv(){var e=(0,M._)(["\n        border-color: ",";\n      "]);dv=function t(){return e};return e}function dg(){var e=(0,M._)(["\n          padding-",": ",";\n        "]);dg=function t(){return e};return e}function dm(){var e=(0,M._)(["\n            padding-",": ",";\n          "]);dm=function t(){return e};return e}function db(){var e=(0,M._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);db=function t(){return e};return e}function dy(){var e=(0,M._)(["\n            padding-",": ",";\n          "]);dy=function t(){return e};return e}function d_(){var e=(0,M._)(["\n          font-size: ",";\n          height: 32px;\n          ",";\n        "]);d_=function t(){return e};return e}function dw(){var e=(0,M._)(["\n      ","\n    "]);dw=function t(){return e};return e}function dx(){var e=(0,M._)(["\n      min-width: 32px;\n      height: 32px;\n      padding-inline: ",";\n    "]);dx=function t(){return e};return e}function dA(){var e=(0,M._)(["\n      border-right: 1px solid ",";\n    "]);dA=function t(){return e};return e}function dk(){var e=(0,M._)(["\n      ","\n    "]);dk=function t(){return e};return e}function dY(){var e=(0,M._)(["\n      height: 32px;\n      min-width: 32px;\n      padding-inline: ",";\n    "]);dY=function t(){return e};return e}function dI(){var e=(0,M._)(["\n      border-left: 1px solid ",";\n    "]);dI=function t(){return e};return e}var dD=e=>{var{label:t,content:r,contentPosition:n="left",showVerticalBar:o=true,size:a="regular",type:i="text",field:s,fieldState:l,disabled:c,readOnly:f,loading:p,placeholder:h,helpText:v,onChange:g,onKeyDown:m,isHidden:_,wrapperCss:w,contentCss:x,removeBorder:A=false,selectOnFocus:k=false,isInlineLabel:Y=false}=e;var D=(0,u.useRef)(null);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{label:t,field:s,fieldState:l,disabled:c,readOnly:f,loading:p,placeholder:h,helpText:v,isHidden:_,removeBorder:A,isInlineLabel:Y,children:e=>{var{css:t}=e,c=(0,tf._)(e,["css"]);var u;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:[dS.inputWrapper(!!l.error,A),w],children:[n==="left"&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:[dS.inputLeftContent(o,a),x],children:r}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},s,c),{type:"text",value:(u=s.value)!==null&&u!==void 0?u:"",onChange:e=>{var t=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;s.onChange(t);if(g){g(t)}},onKeyDown:e=>m===null||m===void 0?void 0:m(e.key),css:[t,dS.input(n,o,a)],autoComplete:"off",ref:e=>{s.ref(e);// @ts-ignore
D.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!k||!D.current){return}D.current.select()},"data-input":true})),n==="right"&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:[dS.inputRightContent(o,a),x],children:r})]})}})};/* export default */const dC=(0,rZ/* .withVisibilityControl */.M)(dD);var dS={inputWrapper:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;",!t&&(0,h/* .css */.AH)(dp(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"],x/* .borderRadius["6"] */.Vq["6"],x/* .shadow.input */.r7.input,x/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,h/* .css */.AH)(dh(),x/* .colorTokens.stroke.danger */.I6.stroke.danger,x/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",k/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,h/* .css */.AH)(dv(),x/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,h/* .css */.AH)("&.tutor-input-field:not(textarea){",A/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,h/* .css */.AH)(dg(),e,x/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,h/* .css */.AH)(db(),x/* .fontSize["24"] */.J["24"],x/* .fontWeight.medium */.Wy.medium,t&&(0,h/* .css */.AH)(dm(),e,x/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,h/* .css */.AH)(d_(),x/* .fontSize["16"] */.J["16"],t&&(0,h/* .css */.AH)(dy(),e,x/* .spacing["4"] */.YK["4"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small()," ",k/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",x/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",x/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,h/* .css */.AH)(dw(),A/* .typography.body */.I.body())," ",t==="small"&&(0,h/* .css */.AH)(dx(),x/* .spacing["4"] */.YK["4"])," ",e&&(0,h/* .css */.AH)(dA(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small()," ",k/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",x/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",x/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,h/* .css */.AH)(dk(),A/* .typography.body */.I.body())," ",t==="small"&&(0,h/* .css */.AH)(dY(),x/* .spacing["4"] */.YK["4"])," ",e&&(0,h/* .css */.AH)(dI(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// EXTERNAL MODULE: external "ReactDOM"
var dM=r(5206);// CONCATENATED MODULE: ./node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@18.3.1/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
function dE(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,u.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const dF=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";function dH(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||// In Electron context the Window object serializes to [object global]
t==="[object global]"}function dT(e){return"nodeType"in e}function dK(e){var t,r;if(!e){return window}if(dH(e)){return e}if(!dT(e)){return window}return(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window}function dO(e){const{Document:t}=dK(e);return e instanceof t}function dN(e){if(dH(e)){return false}return e instanceof dK(e).HTMLElement}function dP(e){return e instanceof dK(e).SVGElement}function dL(e){if(!e){return document}if(dH(e)){return e.document}if(!dT(e)){return document}if(dO(e)){return e}if(dN(e)||dP(e)){return e.ownerDocument}return document}/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */const dR=dF?u.useLayoutEffect:u.useEffect;function dB(e){const t=(0,u.useRef)(e);dR(()=>{t.current=e});return(0,u.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}return t.current==null?void 0:t.current(...r)},[])}function dz(){const e=(0,u.useRef)(null);const t=(0,u.useCallback)((t,r)=>{e.current=setInterval(t,r)},[]);const r=(0,u.useCallback)(()=>{if(e.current!==null){clearInterval(e.current);e.current=null}},[]);return[t,r]}function dV(e,t){if(t===void 0){t=[e]}const r=(0,u.useRef)(e);dR(()=>{if(r.current!==e){r.current=e}},t);return r}function dW(e,t){const r=(0,u.useRef)();return(0,u.useMemo)(()=>{const t=e(r.current);r.current=t;return t},[...t])}function dj(e){const t=dB(e);const r=(0,u.useRef)(null);const n=(0,u.useCallback)(e=>{if(e!==r.current){t==null?void 0:t(e,r.current)}r.current=e},[]);return[r,n]}function dq(e){const t=(0,u.useRef)();(0,u.useEffect)(()=>{t.current=e},[e]);return t.current}let dU={};function dG(e,t){return(0,u.useMemo)(()=>{if(t){return t}const r=dU[e]==null?0:dU[e]+1;dU[e]=r;return e+"-"+r},[e,t])}function dQ(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}return n.reduce((t,r)=>{const n=Object.entries(r);for(const[r,o]of n){const n=t[r];if(n!=null){t[r]=n+e*o}}return t},{...t})}}const d$=/*#__PURE__*/dQ(1);const dZ=/*#__PURE__*/dQ(-1);function dX(e){return"clientX"in e&&"clientY"in e}function dJ(e){if(!e){return false}const{KeyboardEvent:t}=dK(e.target);return t&&e instanceof t}function d0(e){if(!e){return false}const{TouchEvent:t}=dK(e.target);return t&&e instanceof t}/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */function d1(e){if(d0(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}if(dX(e)){return{x:e.clientX,y:e.clientY}}return null}const d6=/*#__PURE__*/Object.freeze({Translate:{toString(e){if(!e){return}const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e){return}const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(!e){return}return[d6.Translate.toString(e),d6.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}});const d2="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function d4(e){if(e.matches(d2)){return e}return e.querySelector(d2)}//# sourceMappingURL=utilities.esm.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@dnd-kit+accessibility@3.1.1_react@18.3.1/node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
const d3={display:"none"};function d5(e){let{id:t,value:r}=e;return f().createElement("div",{id:t,style:d3},r)}function d8(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;// Hide element visually but keep it readable by screen readers
const o={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return f().createElement("div",{id:t,style:o,role:"status","aria-live":n,"aria-atomic":true},r)}function d7(){const[e,t]=(0,u.useState)("");const r=(0,u.useCallback)(e=>{if(e!=null){t(e)}},[]);return{announce:r,announcement:e}}//# sourceMappingURL=accessibility.esm.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js
const d9=/*#__PURE__*/(0,u.createContext)(null);function ue(e){const t=(0,u.useContext)(d9);(0,u.useEffect)(()=>{if(!t){throw new Error("useDndMonitor must be used within a children of <DndContext>")}const r=t(e);return r},[e,t])}function ut(){const[e]=(0,u.useState)(()=>new Set);const t=(0,u.useCallback)(t=>{e.add(t);return()=>e.delete(t)},[e]);const r=(0,u.useCallback)(t=>{let{type:r,event:n}=t;e.forEach(e=>{var t;return(t=e[r])==null?void 0:t.call(e,n)})},[e]);return[r,t]}const ur={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "};const un={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was moved over droppable area "+r.id+"."}return"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was dropped over droppable area "+r.id}return"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function uo(e){let{announcements:t=un,container:r,hiddenTextDescribedById:n,screenReaderInstructions:o=ur}=e;const{announce:a,announcement:i}=d7();const s=dG("DndLiveRegion");const[l,c]=(0,u.useState)(false);(0,u.useEffect)(()=>{c(true)},[]);ue((0,u.useMemo)(()=>({onDragStart(e){let{active:r}=e;a(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;if(t.onDragMove){a(t.onDragMove({active:r,over:n}))}},onDragOver(e){let{active:r,over:n}=e;a(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;a(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;a(t.onDragCancel({active:r,over:n}))}}),[a,t]));if(!l){return null}const d=f().createElement(f().Fragment,null,f().createElement(d5,{id:n,value:o.draggable}),f().createElement(d8,{id:s,announcement:i}));return r?(0,dM.createPortal)(d,r):d}var ua;(function(e){e["DragStart"]="dragStart";e["DragMove"]="dragMove";e["DragEnd"]="dragEnd";e["DragCancel"]="dragCancel";e["DragOver"]="dragOver";e["RegisterDroppable"]="registerDroppable";e["SetDroppableDisabled"]="setDroppableDisabled";e["UnregisterDroppable"]="unregisterDroppable"})(ua||(ua={}));function ui(){}function us(e,t){return(0,u.useMemo)(()=>({sensor:e,options:t!=null?t:{}}),[e,t])}function ul(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,u.useMemo)(()=>[...t].filter(e=>e!=null),[...t])}const uc=/*#__PURE__*/Object.freeze({x:0,y:0});/**
 * Returns the distance between two points
 */function ud(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function uu(e,t){const r=d1(e);if(!r){return"0 0"}const n={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return n.x+"% "+n.y+"%"}/**
 * Sort collisions from smallest to greatest value
 */function uf(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return r-n}/**
 * Sort collisions from greatest to smallest value
 */function up(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return n-r}/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */function uh(e){let{left:t,top:r,height:n,width:o}=e;return[{x:t,y:r},{x:t+o,y:r},{x:t,y:r+n},{x:t+o,y:r+n}]}function uv(e,t){if(!e||e.length===0){return null}const[r]=e;return t?r[t]:r}/**
 * Returns the coordinates of the center of a given ClientRect
 */function ug(e,t,r){if(t===void 0){t=e.left}if(r===void 0){r=e.top}return{x:t+e.width*.5,y:r+e.height*.5}}/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */const um=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=ug(t,t.left,t.top);const a=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=ud(ug(n),o);a.push({id:t,data:{droppableContainer:e,value:r}})}}return a.sort(uf)};/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */const ub=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=uh(t);const a=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=uh(n);const i=o.reduce((e,t,n)=>{return e+ud(r[n],t)},0);const s=Number((i/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(uf)};/**
 * Returns the intersecting rectangle area between two rectangles
 */function uy(e,t){const r=Math.max(t.top,e.top);const n=Math.max(t.left,e.left);const o=Math.min(t.left+t.width,e.left+e.width);const a=Math.min(t.top+t.height,e.top+e.height);const i=o-n;const s=a-r;if(n<o&&r<a){const r=t.width*t.height;const n=e.width*e.height;const o=i*s;const a=o/(r+n-o);return Number(a.toFixed(4))}// Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
return 0}/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */const u_=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const o=[];for(const e of n){const{id:n}=e;const a=r.get(n);if(a){const r=uy(a,t);if(r>0){o.push({id:n,data:{droppableContainer:e,value:r}})}}}return o.sort(up)};/**
 * Check if a given point is contained within a bounding rectangle
 */function uw(e,t){const{top:r,left:n,bottom:o,right:a}=t;return r<=e.y&&e.y<=o&&n<=e.x&&e.x<=a}/**
 * Returns the rectangles that the pointer is hovering over
 */const ux=e=>{let{droppableContainers:t,droppableRects:r,pointerCoordinates:n}=e;if(!n){return[]}const o=[];for(const e of t){const{id:t}=e;const a=r.get(t);if(a&&uw(n,a)){/* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */const r=uh(a);const i=r.reduce((e,t)=>{return e+ud(n,t)},0);const s=Number((i/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(uf)};function uA(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function uk(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:uc}function uY(e){return function t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++){n[o-1]=arguments[o]}return n.reduce((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x}),{...t})}}const uI=/*#__PURE__*/uY(1);function uD(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function uC(e,t,r){const n=uD(t);if(!n){return e}const{scaleX:o,scaleY:a,x:i,y:s}=n;const l=e.left-i-(1-o)*parseFloat(r);const c=e.top-s-(1-a)*parseFloat(r.slice(r.indexOf(" ")+1));const d=o?e.width/o:e.width;const u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}const uS={ignoreTransform:false};/**
 * Returns the bounding client rect of an element relative to the viewport.
 */function uM(e,t){if(t===void 0){t=uS}let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=dK(e).getComputedStyle(e);if(t){r=uC(r,t,n)}}const{top:n,left:o,width:a,height:i,bottom:s,right:l}=r;return{top:n,left:o,width:a,height:i,bottom:s,right:l}}/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */function uE(e){return uM(e,{ignoreTransform:true})}function uF(e){const t=e.innerWidth;const r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function uH(e,t){if(t===void 0){t=dK(e).getComputedStyle(e)}return t.position==="fixed"}function uT(e,t){if(t===void 0){t=dK(e).getComputedStyle(e)}const r=/(auto|scroll|overlay)/;const n=["overflow","overflowX","overflowY"];return n.some(e=>{const n=t[e];return typeof n==="string"?r.test(n):false})}function uK(e,t){const r=[];function n(o){if(t!=null&&r.length>=t){return r}if(!o){return r}if(dO(o)&&o.scrollingElement!=null&&!r.includes(o.scrollingElement)){r.push(o.scrollingElement);return r}if(!dN(o)||dP(o)){return r}if(r.includes(o)){return r}const a=dK(e).getComputedStyle(o);if(o!==e){if(uT(o,a)){r.push(o)}}if(uH(o,a)){return r}return n(o.parentNode)}if(!e){return r}return n(e)}function uO(e){const[t]=uK(e,1);return t!=null?t:null}function uN(e){if(!dF||!e){return null}if(dH(e)){return e}if(!dT(e)){return null}if(dO(e)||e===dL(e).scrollingElement){return window}if(dN(e)){return e}return null}function uP(e){if(dH(e)){return e.scrollX}return e.scrollLeft}function uL(e){if(dH(e)){return e.scrollY}return e.scrollTop}function uR(e){return{x:uP(e),y:uL(e)}}var uB;(function(e){e[e["Forward"]=1]="Forward";e[e["Backward"]=-1]="Backward"})(uB||(uB={}));function uz(e){if(!dF||!e){return false}return e===document.scrollingElement}function uV(e){const t={x:0,y:0};const r=uz(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth};const n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};const o=e.scrollTop<=t.y;const a=e.scrollLeft<=t.x;const i=e.scrollTop>=n.y;const s=e.scrollLeft>=n.x;return{isTop:o,isLeft:a,isBottom:i,isRight:s,maxScroll:n,minScroll:t}}const uW={x:.2,y:.2};function uj(e,t,r,n,o){let{top:a,left:i,right:s,bottom:l}=r;if(n===void 0){n=10}if(o===void 0){o=uW}const{isTop:c,isBottom:d,isLeft:u,isRight:f}=uV(e);const p={x:0,y:0};const h={x:0,y:0};const v={height:t.height*o.y,width:t.width*o.x};if(!c&&a<=t.top+v.height){// Scroll Up
p.y=uB.Backward;h.y=n*Math.abs((t.top+v.height-a)/v.height)}else if(!d&&l>=t.bottom-v.height){// Scroll Down
p.y=uB.Forward;h.y=n*Math.abs((t.bottom-v.height-l)/v.height)}if(!f&&s>=t.right-v.width){// Scroll Right
p.x=uB.Forward;h.x=n*Math.abs((t.right-v.width-s)/v.width)}else if(!u&&i<=t.left+v.width){// Scroll Left
p.x=uB.Backward;h.x=n*Math.abs((t.left+v.width-i)/v.width)}return{direction:p,speed:h}}function uq(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:o}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:o,width:e.clientWidth,height:e.clientHeight}}function uU(e){return e.reduce((e,t)=>{return d$(e,uR(t))},uc)}function uG(e){return e.reduce((e,t)=>{return e+uP(t)},0)}function uQ(e){return e.reduce((e,t)=>{return e+uL(t)},0)}function u$(e,t){if(t===void 0){t=uM}if(!e){return}const{top:r,left:n,bottom:o,right:a}=t(e);const i=uO(e);if(!i){return}if(o<=0||a<=0||r>=window.innerHeight||n>=window.innerWidth){e.scrollIntoView({block:"center",inline:"center"})}}const uZ=[["x",["left","right"],uG],["y",["top","bottom"],uQ]];class uX{constructor(e,t){this.rect=void 0;this.width=void 0;this.height=void 0;this.top=void 0;this.bottom=void 0;this.right=void 0;this.left=void 0;const r=uK(t);const n=uU(r);this.rect={...e};this.width=e.width;this.height=e.height;for(const[e,t,o]of uZ){for(const a of t){Object.defineProperty(this,a,{get:()=>{const t=o(r);const i=n[e]-t;return this.rect[a]+i},enumerable:true})}}Object.defineProperty(this,"rect",{enumerable:false})}}class uJ{constructor(e){this.target=void 0;this.listeners=[];this.removeAll=()=>{this.listeners.forEach(e=>{var t;return(t=this.target)==null?void 0:t.removeEventListener(...e)})};this.target=e}add(e,t,r){var n;(n=this.target)==null?void 0:n.addEventListener(e,t,r);this.listeners.push([e,t,r])}}function u0(e){// If the `event.target` element is removed from the document events will still be targeted
// at it, and hence won't always bubble up to the window or document anymore.
// If there is any risk of an element being removed while it is being dragged,
// the best practice is to attach the event listeners directly to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const{EventTarget:t}=dK(e);return e instanceof t?e:dL(e)}function u1(e,t){const r=Math.abs(e.x);const n=Math.abs(e.y);if(typeof t==="number"){return Math.sqrt(r**2+n**2)>t}if("x"in t&&"y"in t){return r>t.x&&n>t.y}if("x"in t){return r>t.x}if("y"in t){return n>t.y}return false}var u6;(function(e){e["Click"]="click";e["DragStart"]="dragstart";e["Keydown"]="keydown";e["ContextMenu"]="contextmenu";e["Resize"]="resize";e["SelectionChange"]="selectionchange";e["VisibilityChange"]="visibilitychange"})(u6||(u6={}));function u2(e){e.preventDefault()}function u4(e){e.stopPropagation()}var u3;(function(e){e["Space"]="Space";e["Down"]="ArrowDown";e["Right"]="ArrowRight";e["Left"]="ArrowLeft";e["Up"]="ArrowUp";e["Esc"]="Escape";e["Enter"]="Enter";e["Tab"]="Tab"})(u3||(u3={}));const u5={start:[u3.Space,u3.Enter],cancel:[u3.Esc],end:[u3.Space,u3.Enter,u3.Tab]};const u8=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case u3.Right:return{...r,x:r.x+25};case u3.Left:return{...r,x:r.x-25};case u3.Down:return{...r,y:r.y+25};case u3.Up:return{...r,y:r.y-25}}return undefined};class u7{constructor(e){this.props=void 0;this.autoScrollEnabled=false;this.referenceCoordinates=void 0;this.listeners=void 0;this.windowListeners=void 0;this.props=e;const{event:{target:t}}=e;this.props=e;this.listeners=new uJ(dL(t));this.windowListeners=new uJ(dK(t));this.handleKeyDown=this.handleKeyDown.bind(this);this.handleCancel=this.handleCancel.bind(this);this.attach()}attach(){this.handleStart();this.windowListeners.add(u6.Resize,this.handleCancel);this.windowListeners.add(u6.VisibilityChange,this.handleCancel);setTimeout(()=>this.listeners.add(u6.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props;const r=e.node.current;if(r){u$(r)}t(uc)}handleKeyDown(e){if(dJ(e)){const{active:t,context:r,options:n}=this.props;const{keyboardCodes:o=u5,coordinateGetter:a=u8,scrollBehavior:i="smooth"}=n;const{code:s}=e;if(o.end.includes(s)){this.handleEnd(e);return}if(o.cancel.includes(s)){this.handleCancel(e);return}const{collisionRect:l}=r.current;const c=l?{x:l.left,y:l.top}:uc;if(!this.referenceCoordinates){this.referenceCoordinates=c}const d=a(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=dZ(d,c);const n={x:0,y:0};const{scrollableAncestors:o}=r.current;for(const r of o){const o=e.code;const{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=uV(r);const p=uq(r);const h={x:Math.min(o===u3.Right?p.right-p.width/2:p.right,Math.max(o===u3.Right?p.left:p.left+p.width/2,d.x)),y:Math.min(o===u3.Down?p.bottom-p.height/2:p.bottom,Math.max(o===u3.Down?p.top:p.top+p.height/2,d.y))};const v=o===u3.Right&&!s||o===u3.Left&&!l;const g=o===u3.Down&&!c||o===u3.Up&&!a;if(v&&h.x!==d.x){const e=r.scrollLeft+t.x;const a=o===u3.Right&&e<=u.x||o===u3.Left&&e>=f.x;if(a&&!t.y){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({left:e,behavior:i});return}if(a){n.x=r.scrollLeft-e}else{n.x=o===u3.Right?r.scrollLeft-u.x:r.scrollLeft-f.x}if(n.x){r.scrollBy({left:-n.x,behavior:i})}break}else if(g&&h.y!==d.y){const e=r.scrollTop+t.y;const a=o===u3.Down&&e<=u.y||o===u3.Up&&e>=f.y;if(a&&!t.x){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({top:e,behavior:i});return}if(a){n.y=r.scrollTop-e}else{n.y=o===u3.Down?r.scrollTop-u.y:r.scrollTop-f.y}if(n.y){r.scrollBy({top:-n.y,behavior:i})}break}}this.handleMove(e,d$(dZ(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault();r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault();this.detach();t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault();this.detach();t()}detach(){this.listeners.removeAll();this.windowListeners.removeAll()}}u7.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=u5,onActivation:o}=t;let{active:a}=r;const{code:i}=e.nativeEvent;if(n.start.includes(i)){const t=a.activatorNode.current;if(t&&e.target!==t){return false}e.preventDefault();o==null?void 0:o({event:e.nativeEvent});return true}return false}}];function u9(e){return Boolean(e&&"distance"in e)}function fe(e){return Boolean(e&&"delay"in e)}class ft{constructor(e,t,r){var n;if(r===void 0){r=u0(e.event.target)}this.props=void 0;this.events=void 0;this.autoScrollEnabled=true;this.document=void 0;this.activated=false;this.initialCoordinates=void 0;this.timeoutId=null;this.listeners=void 0;this.documentListeners=void 0;this.windowListeners=void 0;this.props=e;this.events=t;const{event:o}=e;const{target:a}=o;this.props=e;this.events=t;this.document=dL(a);this.documentListeners=new uJ(this.document);this.listeners=new uJ(r);this.windowListeners=new uJ(dK(a));this.initialCoordinates=(n=d1(o))!=null?n:uc;this.handleStart=this.handleStart.bind(this);this.handleMove=this.handleMove.bind(this);this.handleEnd=this.handleEnd.bind(this);this.handleCancel=this.handleCancel.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.removeTextSelection=this.removeTextSelection.bind(this);this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;this.listeners.add(e.move.name,this.handleMove,{passive:false});this.listeners.add(e.end.name,this.handleEnd);if(e.cancel){this.listeners.add(e.cancel.name,this.handleCancel)}this.windowListeners.add(u6.Resize,this.handleCancel);this.windowListeners.add(u6.DragStart,u2);this.windowListeners.add(u6.VisibilityChange,this.handleCancel);this.windowListeners.add(u6.ContextMenu,u2);this.documentListeners.add(u6.Keydown,this.handleKeydown);if(t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options})){return this.handleStart()}if(fe(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);this.handlePending(t);return}if(u9(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll();this.windowListeners.removeAll();// Wait until the next event loop before removing document listeners
// This is necessary because we listen for `click` and `selection` events on the document
setTimeout(this.documentListeners.removeAll,50);if(this.timeoutId!==null){clearTimeout(this.timeoutId);this.timeoutId=null}}handlePending(e,t){const{active:r,onPending:n}=this.props;n(r,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this;const{onStart:t}=this.props;if(e){this.activated=true;// Stop propagation of click events once activation constraints are met
this.documentListeners.add(u6.Click,u4,{capture:true});// Remove any text selection from the document
this.removeTextSelection();// Prevent further text selection while dragging
this.documentListeners.add(u6.SelectionChange,this.removeTextSelection);t(e)}}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:o}=this;const{onMove:a,options:{activationConstraint:i}}=o;if(!n){return}const s=(t=d1(e))!=null?t:uc;const l=dZ(n,s);// Constraint validation
if(!r&&i){if(u9(i)){if(i.tolerance!=null&&u1(l,i.tolerance)){return this.handleCancel()}if(u1(l,i.distance)){return this.handleStart()}}if(fe(i)){if(u1(l,i.tolerance)){return this.handleCancel()}}this.handlePending(i,l);return}if(e.cancelable){e.preventDefault()}a(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleKeydown(e){if(e.code===u3.Esc){this.handleCancel()}}removeTextSelection(){var e;(e=this.document.getSelection())==null?void 0:e.removeAllRanges()}}const fr={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class fn extends ft{constructor(e){const{event:t}=e;// Pointer events stop firing if the target is unmounted while dragging
// Therefore we attach listeners to the owner document instead
const r=dL(t.target);super(e,fr,r)}}fn.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(!r.isPrimary||r.button!==0){return false}n==null?void 0:n({event:r});return true}}];const fo={move:{name:"mousemove"},end:{name:"mouseup"}};var fa;(function(e){e[e["RightClick"]=2]="RightClick"})(fa||(fa={}));class fi extends ft{constructor(e){super(e,fo,dL(e.event.target))}}fi.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(r.button===fa.RightClick){return false}n==null?void 0:n({event:r});return true}}];const fs={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class fl extends ft{constructor(e){super(e,fs)}static setup(){// Adding a non-capture and non-passive `touchmove` listener in order
// to force `event.preventDefault()` calls to work in dynamically added
// touchmove event handlers. This is required for iOS Safari.
window.addEventListener(fs.move.name,e,{capture:false,passive:false});return function t(){window.removeEventListener(fs.move.name,e)};// We create a new handler because the teardown function of another sensor
// could remove our event listener if we use a referentially equal listener.
function e(){}}}fl.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;const{touches:o}=r;if(o.length>1){return false}n==null?void 0:n({event:r});return true}}];var fc;(function(e){e[e["Pointer"]=0]="Pointer";e[e["DraggableRect"]=1]="DraggableRect"})(fc||(fc={}));var fd;(function(e){e[e["TreeOrder"]=0]="TreeOrder";e[e["ReversedTreeOrder"]=1]="ReversedTreeOrder"})(fd||(fd={}));function fu(e){let{acceleration:t,activator:r=fc.Pointer,canScroll:n,draggingRect:o,enabled:a,interval:i=5,order:s=fd.TreeOrder,pointerCoordinates:l,scrollableAncestors:c,scrollableAncestorRects:d,delta:f,threshold:p}=e;const h=fp({delta:f,disabled:!a});const[v,g]=dz();const m=(0,u.useRef)({x:0,y:0});const b=(0,u.useRef)({x:0,y:0});const y=(0,u.useMemo)(()=>{switch(r){case fc.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case fc.DraggableRect:return o}},[r,o,l]);const _=(0,u.useRef)(null);const w=(0,u.useCallback)(()=>{const e=_.current;if(!e){return}const t=m.current.x*b.current.x;const r=m.current.y*b.current.y;e.scrollBy(t,r)},[]);const x=(0,u.useMemo)(()=>s===fd.TreeOrder?[...c].reverse():c,[s,c]);(0,u.useEffect)(()=>{if(!a||!c.length||!y){g();return}for(const e of x){if((n==null?void 0:n(e))===false){continue}const r=c.indexOf(e);const o=d[r];if(!o){continue}const{direction:a,speed:s}=uj(e,o,y,t,p);for(const e of["x","y"]){if(!h[e][a[e]]){s[e]=0;a[e]=0}}if(s.x>0||s.y>0){g();_.current=e;v(w,i);m.current=s;b.current=a;return}}m.current={x:0,y:0};b.current={x:0,y:0};g()},[t,w,n,g,a,i,JSON.stringify(y),JSON.stringify(h),v,c,x,d,JSON.stringify(p)])}const ff={x:{[uB.Backward]:false,[uB.Forward]:false},y:{[uB.Backward]:false,[uB.Forward]:false}};function fp(e){let{delta:t,disabled:r}=e;const n=dq(t);return dW(e=>{if(r||!n||!e){// Reset scroll intent tracking when auto-scrolling is disabled
return ff}const o={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};// Keep track of the user intent to scroll in each direction for both axis
return{x:{[uB.Backward]:e.x[uB.Backward]||o.x===-1,[uB.Forward]:e.x[uB.Forward]||o.x===1},y:{[uB.Backward]:e.y[uB.Backward]||o.y===-1,[uB.Forward]:e.y[uB.Forward]||o.y===1}}},[r,t,n])}function fh(e,t){const r=t!=null?e.get(t):undefined;const n=r?r.node.current:null;return dW(e=>{var r;if(t==null){return null}// In some cases, the draggable node can unmount while dragging
// This is the case for virtualized lists. In those situations,
// we fall back to the last known value for that node.
return(r=n!=null?n:e)!=null?r:null},[n,t])}function fv(e,t){return(0,u.useMemo)(()=>e.reduce((e,r)=>{const{sensor:n}=r;const o=n.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,r)}));return[...e,...o]},[]),[e,t])}var fg;(function(e){e[e["Always"]=0]="Always";e[e["BeforeDragging"]=1]="BeforeDragging";e[e["WhileDragging"]=2]="WhileDragging"})(fg||(fg={}));var fm;(function(e){e["Optimized"]="optimized"})(fm||(fm={}));const fb=/*#__PURE__*/new Map;function fy(e,t){let{dragging:r,dependencies:n,config:o}=t;const[a,i]=(0,u.useState)(null);const{frequency:s,measure:l,strategy:c}=o;const d=(0,u.useRef)(e);const f=m();const p=dV(f);const h=(0,u.useCallback)(function(e){if(e===void 0){e=[]}if(p.current){return}i(t=>{if(t===null){return e}return t.concat(e.filter(e=>!t.includes(e)))})},[p]);const v=(0,u.useRef)(null);const g=dW(t=>{if(f&&!r){return fb}if(!t||t===fb||d.current!==e||a!=null){const t=new Map;for(let r of e){if(!r){continue}if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){// This container does not need to be re-measured
t.set(r.id,r.rect.current);continue}const e=r.node.current;const n=e?new uX(l(e),e):null;r.rect.current=n;if(n){t.set(r.id,n)}}return t}return t},[e,a,r,f,l]);(0,u.useEffect)(()=>{d.current=e},[e]);(0,u.useEffect)(()=>{if(f){return}h()},[r,f]);(0,u.useEffect)(()=>{if(a&&a.length>0){i(null)}},[JSON.stringify(a)]);(0,u.useEffect)(()=>{if(f||typeof s!=="number"||v.current!==null){return}v.current=setTimeout(()=>{h();v.current=null},s)},[s,f,h,...n]);return{droppableRects:g,measureDroppableContainers:h,measuringScheduled:a!=null};function m(){switch(c){case fg.Always:return false;case fg.BeforeDragging:return r;default:return!r}}}function f_(e,t){return dW(r=>{if(!e){return null}if(r){return r}return typeof t==="function"?t(e):e},[t,e])}function fw(e,t){return f_(e,t)}/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */function fx(e){let{callback:t,disabled:r}=e;const n=dB(t);const o=(0,u.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.MutationObserver==="undefined"){return undefined}const{MutationObserver:e}=window;return new e(n)},[n,r]);(0,u.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */function fA(e){let{callback:t,disabled:r}=e;const n=dB(t);const o=(0,u.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.ResizeObserver==="undefined"){return undefined}const{ResizeObserver:e}=window;return new e(n)},[r]);(0,u.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}function fk(e){return new uX(uM(e),e)}function fY(e,t,r){if(t===void 0){t=fk}const[n,o]=(0,u.useState)(null);function a(){o(n=>{if(!e){return null}if(e.isConnected===false){var o;// Fall back to last rect we measured if the element is
// no longer connected to the DOM.
return(o=n!=null?n:r)!=null?o:null}const a=t(e);if(JSON.stringify(n)===JSON.stringify(a)){return n}return a})}const i=fx({callback(t){if(!e){return}for(const r of t){const{type:t,target:n}=r;if(t==="childList"&&n instanceof HTMLElement&&n.contains(e)){a();break}}}});const s=fA({callback:a});dR(()=>{a();if(e){s==null?void 0:s.observe(e);i==null?void 0:i.observe(document.body,{childList:true,subtree:true})}else{s==null?void 0:s.disconnect();i==null?void 0:i.disconnect()}},[e]);return n}function fI(e){const t=f_(e);return uk(e,t)}const fD=[];function fC(e){const t=(0,u.useRef)(e);const r=dW(r=>{if(!e){return fD}if(r&&r!==fD&&e&&t.current&&e.parentNode===t.current.parentNode){return r}return uK(e)},[e]);(0,u.useEffect)(()=>{t.current=e},[e]);return r}function fS(e){const[t,r]=(0,u.useState)(null);const n=(0,u.useRef)(e);// To-do: Throttle the handleScroll callback
const o=(0,u.useCallback)(e=>{const t=uN(e.target);if(!t){return}r(e=>{if(!e){return null}e.set(t,uR(t));return new Map(e)})},[]);(0,u.useEffect)(()=>{const t=n.current;if(e!==t){a(t);const i=e.map(e=>{const t=uN(e);if(t){t.addEventListener("scroll",o,{passive:true});return[t,uR(t)]}return null}).filter(e=>e!=null);r(i.length?new Map(i):null);n.current=e}return()=>{a(e);a(t)};function a(e){e.forEach(e=>{const t=uN(e);t==null?void 0:t.removeEventListener("scroll",o)})}},[o,e]);return(0,u.useMemo)(()=>{if(e.length){return t?Array.from(t.values()).reduce((e,t)=>d$(e,t),uc):uU(e)}return uc},[e,t])}function fM(e,t){if(t===void 0){t=[]}const r=(0,u.useRef)(null);(0,u.useEffect)(()=>{r.current=null},t);(0,u.useEffect)(()=>{const t=e!==uc;if(t&&!r.current){r.current=e}if(!t&&r.current){r.current=null}},[e]);return r.current?dZ(e,r.current):uc}function fE(e){(0,u.useEffect)(()=>{if(!dF){return}const t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(const e of t){e==null?void 0:e()}}},// eslint-disable-next-line react-hooks/exhaustive-deps
e.map(e=>{let{sensor:t}=e;return t}))}function fF(e,t){return(0,u.useMemo)(()=>{return e.reduce((e,r)=>{let{eventName:n,handler:o}=r;e[n]=e=>{o(e,t)};return e},{})},[e,t])}function fH(e){return(0,u.useMemo)(()=>e?uF(e):null,[e])}const fT=[];function fK(e,t){if(t===void 0){t=uM}const[r]=e;const n=fH(r?dK(r):null);const[o,a]=(0,u.useState)(fT);function i(){a(()=>{if(!e.length){return fT}return e.map(e=>uz(e)?n:new uX(t(e),e))})}const s=fA({callback:i});dR(()=>{s==null?void 0:s.disconnect();i();e.forEach(e=>s==null?void 0:s.observe(e))},[e]);return o}function fO(e){if(!e){return null}if(e.children.length>1){return e}const t=e.children[0];return dN(t)?t:e}function fN(e){let{measure:t}=e;const[r,n]=(0,u.useState)(null);const o=(0,u.useCallback)(e=>{for(const{target:r}of e){if(dN(r)){n(e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n});break}}},[t]);const a=fA({callback:o});const i=(0,u.useCallback)(e=>{const r=fO(e);a==null?void 0:a.disconnect();if(r){a==null?void 0:a.observe(r)}n(r?t(r):null)},[t,a]);const[s,l]=dj(i);return(0,u.useMemo)(()=>({nodeRef:s,rect:r,setRef:l}),[r,s,l])}const fP=[{sensor:fn,options:{}},{sensor:u7,options:{}}];const fL={current:{}};const fR={draggable:{measure:uE},droppable:{measure:uE,strategy:fg.WhileDragging,frequency:fm.Optimized},dragOverlay:{measure:uM}};class fB extends Map{get(e){var t;return e!=null?(t=super.get(e))!=null?t:undefined:undefined}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,r;return(t=(r=this.get(e))==null?void 0:r.node.current)!=null?t:undefined}}const fz={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:/*#__PURE__*/new Map,droppableRects:/*#__PURE__*/new Map,droppableContainers:/*#__PURE__*/new fB,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ui},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:fR,measureDroppableContainers:ui,windowRect:null,measuringScheduled:false};const fV={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ui,draggableNodes:/*#__PURE__*/new Map,over:null,measureDroppableContainers:ui};const fW=/*#__PURE__*/(0,u.createContext)(fV);const fj=/*#__PURE__*/(0,u.createContext)(fz);function fq(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new fB}}}function fU(e,t){switch(t.type){case ua.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case ua.DragMove:if(e.draggable.active==null){return e}return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case ua.DragEnd:case ua.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ua.RegisterDroppable:{const{element:r}=t;const{id:n}=r;const o=new fB(e.droppable.containers);o.set(n,r);return{...e,droppable:{...e.droppable,containers:o}}}case ua.SetDroppableDisabled:{const{id:r,key:n,disabled:o}=t;const a=e.droppable.containers.get(r);if(!a||n!==a.key){return e}const i=new fB(e.droppable.containers);i.set(r,{...a,disabled:o});return{...e,droppable:{...e.droppable,containers:i}}}case ua.UnregisterDroppable:{const{id:r,key:n}=t;const o=e.droppable.containers.get(r);if(!o||n!==o.key){return e}const a=new fB(e.droppable.containers);a.delete(r);return{...e,droppable:{...e.droppable,containers:a}}}default:{return e}}}function fG(e){let{disabled:t}=e;const{active:r,activatorEvent:n,draggableNodes:o}=(0,u.useContext)(fW);const a=dq(n);const i=dq(r==null?void 0:r.id);// Restore keyboard focus on the activator node
(0,u.useEffect)(()=>{if(t){return}if(!n&&a&&i!=null){if(!dJ(a)){return}if(document.activeElement===a.target){// No need to restore focus
return}const e=o.get(i);if(!e){return}const{activatorNode:t,node:r}=e;if(!t.current&&!r.current){return}requestAnimationFrame(()=>{for(const e of[t.current,r.current]){if(!e){continue}const t=d4(e);if(t){t.focus();break}}})}},[n,t,o,i,a]);return null}function fQ(e,t){let{transform:r,...n}=t;return e!=null&&e.length?e.reduce((e,t)=>{return t({transform:e,...n})},r):r}function f$(e){return(0,u.useMemo)(()=>({draggable:{...fR.draggable,...e==null?void 0:e.draggable},droppable:{...fR.droppable,...e==null?void 0:e.droppable},dragOverlay:{...fR.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function fZ(e){let{activeNode:t,measure:r,initialRect:n,config:o=true}=e;const a=(0,u.useRef)(false);const{x:i,y:s}=typeof o==="boolean"?{x:o,y:o}:o;dR(()=>{const e=!i&&!s;if(e||!t){a.current=false;return}if(a.current||!n){// Return early if layout shift scroll compensation was already attempted
// or if there is no initialRect to compare to.
return}// Get the most up to date node ref for the active draggable
const o=t==null?void 0:t.node.current;if(!o||o.isConnected===false){// Return early if there is no attached node ref or if the node is
// disconnected from the document.
return}const l=r(o);const c=uk(l,n);if(!i){c.x=0}if(!s){c.y=0}// Only perform layout shift scroll compensation once
a.current=true;if(Math.abs(c.x)>0||Math.abs(c.y)>0){const e=uO(o);if(e){e.scrollBy({top:c.y,left:c.x})}}},[t,i,s,n,r])}const fX=/*#__PURE__*/(0,u.createContext)({...uc,scaleX:1,scaleY:1});var fJ;(function(e){e[e["Uninitialized"]=0]="Uninitialized";e[e["Initializing"]=1]="Initializing";e[e["Initialized"]=2]="Initialized"})(fJ||(fJ={}));const f0=/*#__PURE__*/(0,u.memo)(function e(e){var t,r,n,o;let{id:a,accessibility:i,autoScroll:s=true,children:l,sensors:c=fP,collisionDetection:d=u_,measuring:p,modifiers:h,...v}=e;const g=(0,u.useReducer)(fU,undefined,fq);const[m,b]=g;const[y,_]=ut();const[w,x]=(0,u.useState)(fJ.Uninitialized);const A=w===fJ.Initialized;const{draggable:{active:k,nodes:Y,translate:I},droppable:{containers:D}}=m;const C=k!=null?Y.get(k):null;const S=(0,u.useRef)({initial:null,translated:null});const M=(0,u.useMemo)(()=>{var e;return k!=null?{id:k,// It's possible for the active node to unmount while dragging
data:(e=C==null?void 0:C.data)!=null?e:fL,rect:S}:null},[k,C]);const E=(0,u.useRef)(null);const[F,H]=(0,u.useState)(null);const[T,K]=(0,u.useState)(null);const O=dV(v,Object.values(v));const N=dG("DndDescribedBy",a);const P=(0,u.useMemo)(()=>D.getEnabled(),[D]);const L=f$(p);const{droppableRects:R,measureDroppableContainers:B,measuringScheduled:z}=fy(P,{dragging:A,dependencies:[I.x,I.y],config:L.droppable});const V=fh(Y,k);const W=(0,u.useMemo)(()=>T?d1(T):null,[T]);const j=ek();const q=fw(V,L.draggable.measure);fZ({activeNode:k!=null?Y.get(k):null,config:j.layoutShiftCompensation,initialRect:q,measure:L.draggable.measure});const U=fY(V,L.draggable.measure,q);const G=fY(V?V.parentElement:null);const Q=(0,u.useRef)({activatorEvent:null,active:null,activeNode:V,collisionRect:null,collisions:null,droppableRects:R,draggableNodes:Y,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null});const $=D.getNodeFor((t=Q.current.over)==null?void 0:t.id);const Z=fN({measure:L.dragOverlay.measure});// Use the rect of the drag overlay if it is mounted
const X=(r=Z.nodeRef.current)!=null?r:V;const J=A?(n=Z.rect)!=null?n:U:null;const ee=Boolean(Z.nodeRef.current&&Z.rect);// The delta between the previous and new position of the draggable node
// is only relevant when there is no drag overlay
const et=fI(ee?null:U);// Get the window rect of the dragging node
const er=fH(X?dK(X):null);// Get scrollable ancestors of the dragging node
const en=fC(A?$!=null?$:V:null);const eo=fK(en);// Apply modifiers
const ea=fQ(h,{transform:{x:I.x-et.x,y:I.y-et.y,scaleX:1,scaleY:1},activatorEvent:T,active:M,activeNodeRect:U,containerNodeRect:G,draggingNodeRect:J,over:Q.current.over,overlayNodeRect:Z.rect,scrollableAncestors:en,scrollableAncestorRects:eo,windowRect:er});const ei=W?d$(W,I):null;const es=fS(en);// Represents the scroll delta since dragging was initiated
const el=fM(es);// Represents the scroll delta since the last time the active node rect was measured
const ec=fM(es,[U]);const ed=d$(ea,el);const eu=J?uI(J,ea):null;const ef=M&&eu?d({active:M,collisionRect:eu,droppableRects:R,droppableContainers:P,pointerCoordinates:ei}):null;const ep=uv(ef,"id");const[eh,ev]=(0,u.useState)(null);// When there is no drag overlay used, we need to account for the
// window scroll delta
const eg=ee?ea:d$(ea,ec);const em=uA(eg,(o=eh==null?void 0:eh.rect)!=null?o:null,U);const eb=(0,u.useRef)(null);const ey=(0,u.useCallback)((e,t)=>{let{sensor:r,options:n}=t;if(E.current==null){return}const o=Y.get(E.current);if(!o){return}const a=e.nativeEvent;const i=new r({active:E.current,activeNode:o,event:a,options:n,// Sensors need to be instantiated with refs for arguments that change over time
// otherwise they are frozen in time with the stale arguments
context:Q,onAbort(e){const t=Y.get(e);if(!t){return}const{onDragAbort:r}=O.current;const n={id:e};r==null?void 0:r(n);y({type:"onDragAbort",event:n})},onPending(e,t,r,n){const o=Y.get(e);if(!o){return}const{onDragPending:a}=O.current;const i={id:e,constraint:t,initialCoordinates:r,offset:n};a==null?void 0:a(i);y({type:"onDragPending",event:i})},onStart(e){const t=E.current;if(t==null){return}const r=Y.get(t);if(!r){return}const{onDragStart:n}=O.current;const o={activatorEvent:a,active:{id:t,data:r.data,rect:S}};(0,dM.unstable_batchedUpdates)(()=>{n==null?void 0:n(o);x(fJ.Initializing);b({type:ua.DragStart,initialCoordinates:e,active:t});y({type:"onDragStart",event:o});H(eb.current);K(a)})},onMove(e){b({type:ua.DragMove,coordinates:e})},onEnd:s(ua.DragEnd),onCancel:s(ua.DragCancel)});eb.current=i;function s(e){return async function t(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:o}=Q.current;let i=null;if(t&&o){const{cancelDrop:s}=O.current;i={activatorEvent:a,active:t,collisions:r,delta:o,over:n};if(e===ua.DragEnd&&typeof s==="function"){const t=await Promise.resolve(s(i));if(t){e=ua.DragCancel}}}E.current=null;(0,dM.unstable_batchedUpdates)(()=>{b({type:e});x(fJ.Uninitialized);ev(null);H(null);K(null);eb.current=null;const t=e===ua.DragEnd?"onDragEnd":"onDragCancel";if(i){const e=O.current[t];e==null?void 0:e(i);y({type:t,event:i})}})}}},[Y]);const e_=(0,u.useCallback)((e,t)=>{return(r,n)=>{const o=r.nativeEvent;const a=Y.get(n);if(E.current!==null||// No active draggable
!a||// Event has already been captured
o.dndKit||o.defaultPrevented){return}const i={active:a};const s=e(r,t.options,i);if(s===true){o.dndKit={capturedBy:t.sensor};E.current=n;ey(r,t)}}},[Y,ey]);const ew=fv(c,e_);fE(c);dR(()=>{if(U&&w===fJ.Initializing){x(fJ.Initialized)}},[U,w]);(0,u.useEffect)(()=>{const{onDragMove:e}=O.current;const{active:t,activatorEvent:r,collisions:n,over:o}=Q.current;if(!t||!r){return}const a={active:t,activatorEvent:r,collisions:n,delta:{x:ed.x,y:ed.y},over:o};(0,dM.unstable_batchedUpdates)(()=>{e==null?void 0:e(a);y({type:"onDragMove",event:a})})},[ed.x,ed.y]);(0,u.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:o}=Q.current;if(!e||E.current==null||!t||!o){return}const{onDragOver:a}=O.current;const i=n.get(ep);const s=i&&i.rect.current?{id:i.id,rect:i.rect.current,data:i.data,disabled:i.disabled}:null;const l={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:s};(0,dM.unstable_batchedUpdates)(()=>{ev(s);a==null?void 0:a(l);y({type:"onDragOver",event:l})})},[ep]);dR(()=>{Q.current={activatorEvent:T,active:M,activeNode:V,collisionRect:eu,collisions:ef,droppableRects:R,draggableNodes:Y,draggingNode:X,draggingNodeRect:J,droppableContainers:D,over:eh,scrollableAncestors:en,scrollAdjustedTranslate:ed};S.current={initial:J,translated:eu}},[M,V,ef,eu,Y,X,J,R,D,eh,en,ed]);fu({...j,delta:I,draggingRect:eu,pointerCoordinates:ei,scrollableAncestors:en,scrollableAncestorRects:eo});const ex=(0,u.useMemo)(()=>{const e={active:M,activeNode:V,activeNodeRect:U,activatorEvent:T,collisions:ef,containerNodeRect:G,dragOverlay:Z,draggableNodes:Y,droppableContainers:D,droppableRects:R,over:eh,measureDroppableContainers:B,scrollableAncestors:en,scrollableAncestorRects:eo,measuringConfiguration:L,measuringScheduled:z,windowRect:er};return e},[M,V,U,T,ef,G,Z,Y,D,R,eh,B,en,eo,L,z,er]);const eA=(0,u.useMemo)(()=>{const e={activatorEvent:T,activators:ew,active:M,activeNodeRect:U,ariaDescribedById:{draggable:N},dispatch:b,draggableNodes:Y,over:eh,measureDroppableContainers:B};return e},[T,ew,M,U,b,N,Y,eh,B]);return f().createElement(d9.Provider,{value:_},f().createElement(fW.Provider,{value:eA},f().createElement(fj.Provider,{value:ex},f().createElement(fX.Provider,{value:em},l)),f().createElement(fG,{disabled:(i==null?void 0:i.restoreFocus)===false})),f().createElement(uo,{...i,hiddenTextDescribedById:N}));function ek(){const e=(F==null?void 0:F.autoScrollEnabled)===false;const t=typeof s==="object"?s.enabled===false:s===false;const r=A&&!e&&!t;if(typeof s==="object"){return{...s,enabled:r}}return{enabled:r}}});const f1=/*#__PURE__*/(0,u.createContext)(null);const f6="button";const f2="Draggable";function f4(e){let{id:t,data:r,disabled:n=false,attributes:o}=e;const a=dG(f2);const{activators:i,activatorEvent:s,active:l,activeNodeRect:c,ariaDescribedById:d,draggableNodes:f,over:p}=(0,u.useContext)(fW);const{role:h=f6,roleDescription:v="draggable",tabIndex:g=0}=o!=null?o:{};const m=(l==null?void 0:l.id)===t;const b=(0,u.useContext)(m?fX:f1);const[y,_]=dj();const[w,x]=dj();const A=fF(i,t);const k=dV(r);dR(()=>{f.set(t,{id:t,key:a,node:y,activatorNode:w,data:k});return()=>{const e=f.get(t);if(e&&e.key===a){f.delete(t)}}},[f,t]);const Y=(0,u.useMemo)(()=>({role:h,tabIndex:g,"aria-disabled":n,"aria-pressed":m&&h===f6?true:undefined,"aria-roledescription":v,"aria-describedby":d.draggable}),[n,h,g,m,v,d.draggable]);return{active:l,activatorEvent:s,activeNodeRect:c,attributes:Y,isDragging:m,listeners:n?undefined:A,node:y,over:p,setNodeRef:_,setActivatorNodeRef:x,transform:b}}function f3(){return(0,u.useContext)(fj)}const f5="Droppable";const f8={timeout:25};function f7(e){let{data:t,disabled:r=false,id:n,resizeObserverConfig:o}=e;const a=dG(f5);const{active:i,dispatch:s,over:l,measureDroppableContainers:c}=(0,u.useContext)(fW);const d=(0,u.useRef)({disabled:r});const f=(0,u.useRef)(false);const p=(0,u.useRef)(null);const h=(0,u.useRef)(null);const{disabled:v,updateMeasurementsFor:g,timeout:m}={...f8,...o};const b=dV(g!=null?g:n);const y=(0,u.useCallback)(()=>{if(!f.current){// ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
// assuming the element is rendered and displayed.
f.current=true;return}if(h.current!=null){clearTimeout(h.current)}h.current=setTimeout(()=>{c(Array.isArray(b.current)?b.current:[b.current]);h.current=null},m)},[m]);const _=fA({callback:y,disabled:v||!i});const w=(0,u.useCallback)((e,t)=>{if(!_){return}if(t){_.unobserve(t);f.current=false}if(e){_.observe(e)}},[_]);const[x,A]=dj(w);const k=dV(t);(0,u.useEffect)(()=>{if(!_||!x.current){return}_.disconnect();f.current=false;_.observe(x.current)},[x,_]);(0,u.useEffect)(()=>{s({type:ua.RegisterDroppable,element:{id:n,key:a,disabled:r,node:x,rect:p,data:k}});return()=>s({type:ua.UnregisterDroppable,key:a,id:n})},[n]);(0,u.useEffect)(()=>{if(r!==d.current.disabled){s({type:ua.SetDroppableDisabled,id:n,key:a,disabled:r});d.current.disabled=r}},[n,a,r,s]);return{active:i,rect:p,isOver:(l==null?void 0:l.id)===n,node:x,over:l,setNodeRef:A}}function f9(e){let{animation:t,children:r}=e;const[n,o]=(0,u.useState)(null);const[a,i]=(0,u.useState)(null);const s=dq(r);if(!r&&!n&&s){o(s)}dR(()=>{if(!a){return}const e=n==null?void 0:n.key;const r=n==null?void 0:n.props.id;if(e==null||r==null){o(null);return}Promise.resolve(t(r,a)).then(()=>{o(null)})},[t,n,a]);return f().createElement(f().Fragment,null,r,n?(0,u.cloneElement)(n,{ref:i}):null)}const pe={x:0,y:0,scaleX:1,scaleY:1};function pt(e){let{children:t}=e;return f().createElement(fW.Provider,{value:fV},f().createElement(fX.Provider,{value:pe},t))}const pr={position:"fixed",touchAction:"none"};const pn=e=>{const t=dJ(e);return t?"transform 250ms ease":undefined};const po=/*#__PURE__*/(0,u.forwardRef)((e,t)=>{let{as:r,activatorEvent:n,adjustScale:o,children:a,className:i,rect:s,style:l,transform:c,transition:d=pn}=e;if(!s){return null}const u=o?c:{...c,scaleX:1,scaleY:1};const p={...pr,width:s.width,height:s.height,top:s.top,left:s.left,transform:d6.Transform.toString(u),transformOrigin:o&&n?uu(n,s):undefined,transition:typeof d==="function"?d(n):d,...l};return f().createElement(r,{className:i,style:p,ref:t},a)});const pa=e=>t=>{let{active:r,dragOverlay:n}=t;const o={};const{styles:a,className:i}=e;if(a!=null&&a.active){for(const[e,t]of Object.entries(a.active)){if(t===undefined){continue}o[e]=r.node.style.getPropertyValue(e);r.node.style.setProperty(e,t)}}if(a!=null&&a.dragOverlay){for(const[e,t]of Object.entries(a.dragOverlay)){if(t===undefined){continue}n.node.style.setProperty(e,t)}}if(i!=null&&i.active){r.node.classList.add(i.active)}if(i!=null&&i.dragOverlay){n.node.classList.add(i.dragOverlay)}return function e(){for(const[e,t]of Object.entries(o)){r.node.style.setProperty(e,t)}if(i!=null&&i.active){r.node.classList.remove(i.active)}}};const pi=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:d6.Transform.toString(t)},{transform:d6.Transform.toString(r)}]};const ps={duration:250,easing:"ease",keyframes:pi,sideEffects:/*#__PURE__*/pa({styles:{active:{opacity:"0"}}})};function pl(e){let{config:t,draggableNodes:r,droppableContainers:n,measuringConfiguration:o}=e;return dB((e,a)=>{if(t===null){return}const i=r.get(e);if(!i){return}const s=i.node.current;if(!s){return}const l=fO(a);if(!l){return}const{transform:c}=dK(a).getComputedStyle(a);const d=uD(c);if(!d){return}const u=typeof t==="function"?t:pc(t);u$(s,o.draggable.measure);return u({active:{id:e,data:i.data,node:s,rect:o.draggable.measure(s)},draggableNodes:r,dragOverlay:{node:a,rect:o.dragOverlay.measure(l)},droppableContainers:n,measuringConfiguration:o,transform:d})})}function pc(e){const{duration:t,easing:r,sideEffects:n,keyframes:o}={...ps,...e};return e=>{let{active:a,dragOverlay:i,transform:s,...l}=e;if(!t){// Do not animate if animation duration is zero.
return}const c={x:i.rect.left-a.rect.left,y:i.rect.top-a.rect.top};const d={scaleX:s.scaleX!==1?a.rect.width*s.scaleX/i.rect.width:1,scaleY:s.scaleY!==1?a.rect.height*s.scaleY/i.rect.height:1};const u={x:s.x-c.x,y:s.y-c.y,...d};const f=o({...l,active:a,dragOverlay:i,transform:{initial:s,final:u}});const[p]=f;const h=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(h)){// The start and end keyframes are the same, infer that there is no animation needed.
return}const v=n==null?void 0:n({active:a,dragOverlay:i,...l});const g=i.node.animate(f,{duration:t,easing:r,fill:"forwards"});return new Promise(e=>{g.onfinish=()=>{v==null?void 0:v();e()}})}}let pd=0;function pu(e){return(0,u.useMemo)(()=>{if(e==null){return}pd++;return pd},[e])}const pf=/*#__PURE__*/f().memo(e=>{let{adjustScale:t=false,children:r,dropAnimation:n,style:o,transition:a,modifiers:i,wrapperElement:s="div",className:l,zIndex:c=999}=e;const{activatorEvent:d,active:p,activeNodeRect:h,containerNodeRect:v,draggableNodes:g,droppableContainers:m,dragOverlay:b,over:y,measuringConfiguration:_,scrollableAncestors:w,scrollableAncestorRects:x,windowRect:A}=f3();const k=(0,u.useContext)(fX);const Y=pu(p==null?void 0:p.id);const I=fQ(i,{activatorEvent:d,active:p,activeNodeRect:h,containerNodeRect:v,draggingNodeRect:b.rect,over:y,overlayNodeRect:b.rect,scrollableAncestors:w,scrollableAncestorRects:x,transform:k,windowRect:A});const D=f_(h);const C=pl({config:n,draggableNodes:g,droppableContainers:m,measuringConfiguration:_});// We need to wait for the active node to be measured before connecting the drag overlay ref
// otherwise collisions can be computed against a mispositioned drag overlay
const S=D?b.setRef:undefined;return f().createElement(pt,null,f().createElement(f9,{animation:C},p&&Y?f().createElement(po,{key:Y,id:p.id,ref:S,as:s,activatorEvent:d,adjustScale:t,className:l,transition:a,rect:D,style:{zIndex:c,...o},transform:I},r):null))});//# sourceMappingURL=core.esm.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@dnd-kit+modifiers@9.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
function pp(e){return t=>{let{transform:r}=t;return{...r,x:Math.ceil(r.x/e)*e,y:Math.ceil(r.y/e)*e}}}const ph=e=>{let{transform:t}=e;return{...t,y:0}};function pv(e,t,r){const n={...e};if(t.top+e.y<=r.top){n.y=r.top-t.top}else if(t.bottom+e.y>=r.top+r.height){n.y=r.top+r.height-t.bottom}if(t.left+e.x<=r.left){n.x=r.left-t.left}else if(t.right+e.x>=r.left+r.width){n.x=r.left+r.width-t.right}return n}const pg=e=>{let{containerNodeRect:t,draggingNodeRect:r,transform:n}=e;if(!r||!t){return n}return pv(n,r,t)};const pm=e=>{let{draggingNodeRect:t,transform:r,scrollableAncestorRects:n}=e;const o=n[0];if(!t||!o){return r}return pv(r,t,o)};const pb=e=>{let{transform:t}=e;return{...t,x:0}};const py=e=>{let{transform:t,draggingNodeRect:r,windowRect:n}=e;if(!r||!n){return t}return pv(t,r,n)};const p_=e=>{let{activatorEvent:t,draggingNodeRect:r,transform:n}=e;if(r&&t){const e=getEventCoordinates(t);if(!e){return n}const o=e.x-r.left;const a=e.y-r.top;return{...n,x:n.x+o-r.width/2,y:n.y+a-r.height/2}}return n};//# sourceMappingURL=modifiers.esm.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */function pw(e,t,r){const n=e.slice();n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]);return n}/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */function px(e,t,r){const n=e.slice();n[t]=e[r];n[r]=e[t];return n}function pA(e,t){return e.reduce((e,r,n)=>{const o=t.get(r);if(o){e[n]=o}return e},Array(e.length))}function pk(e){return e!==null&&e>=0}function pY(e,t){if(e===t){return true}if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}function pI(e){if(typeof e==="boolean"){return{draggable:e,droppable:e}}return e}// To-do: We should be calculating scale transformation
const pD=/* unused pure expression or super */null&&{scaleX:1,scaleY:1};const pC=e=>{var t;let{rects:r,activeNodeRect:n,activeIndex:o,overIndex:a,index:i}=e;const s=(t=r[o])!=null?t:n;if(!s){return null}const l=pS(r,i,o);if(i===o){const e=r[a];if(!e){return null}return{x:o<a?e.left+e.width-(s.left+s.width):e.left-s.left,y:0,...pD}}if(i>o&&i<=a){return{x:-s.width-l,y:0,...pD}}if(i<o&&i>=a){return{x:s.width+l,y:0,...pD}}return{x:0,y:0,...pD}};function pS(e,t,r){const n=e[t];const o=e[t-1];const a=e[t+1];if(!n||!o&&!a){return 0}if(r<t){return o?n.left-(o.left+o.width):a.left-(n.left+n.width)}return a?a.left-(n.left+n.width):n.left-(o.left+o.width)}const pM=e=>{let{rects:t,activeIndex:r,overIndex:n,index:o}=e;const a=pw(t,n,r);const i=t[o];const s=a[o];if(!s||!i){return null}return{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}};const pE=e=>{let{activeIndex:t,index:r,rects:n,overIndex:o}=e;let a;let i;if(r===t){a=n[r];i=n[o]}if(r===o){a=n[r];i=n[t]}if(!i||!a){return null}return{x:i.left-a.left,y:i.top-a.top,scaleX:i.width/a.width,scaleY:i.height/a.height}};// To-do: We should be calculating scale transformation
const pF={scaleX:1,scaleY:1};const pH=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:o,rects:a,overIndex:i}=e;const s=(t=a[r])!=null?t:n;if(!s){return null}if(o===r){const e=a[i];if(!e){return null}return{x:0,y:r<i?e.top+e.height-(s.top+s.height):e.top-s.top,...pF}}const l=pT(a,o,r);if(o>r&&o<=i){return{x:0,y:-s.height-l,...pF}}if(o<r&&o>=i){return{x:0,y:s.height+l,...pF}}return{x:0,y:0,...pF}};function pT(e,t,r){const n=e[t];const o=e[t-1];const a=e[t+1];if(!n){return 0}if(r<t){return o?n.top-(o.top+o.height):a?a.top-(n.top+n.height):0}return a?a.top-(n.top+n.height):o?n.top-(o.top+o.height):0}const pK="Sortable";const pO=/*#__PURE__*/f().createContext({activeIndex:-1,containerId:pK,disableTransforms:false,items:[],overIndex:-1,useDragOverlay:false,sortedRects:[],strategy:pM,disabled:{draggable:false,droppable:false}});function pN(e){let{children:t,id:r,items:n,strategy:o=pM,disabled:a=false}=e;const{active:i,dragOverlay:s,droppableRects:l,over:c,measureDroppableContainers:d}=f3();const p=dG(pK,r);const h=Boolean(s.rect!==null);const v=(0,u.useMemo)(()=>n.map(e=>typeof e==="object"&&"id"in e?e.id:e),[n]);const g=i!=null;const m=i?v.indexOf(i.id):-1;const b=c?v.indexOf(c.id):-1;const y=(0,u.useRef)(v);const _=!pY(v,y.current);const w=b!==-1&&m===-1||_;const x=pI(a);dR(()=>{if(_&&g){d(v)}},[_,v,g,d]);(0,u.useEffect)(()=>{y.current=v},[v]);const A=(0,u.useMemo)(()=>({activeIndex:m,containerId:p,disabled:x,disableTransforms:w,items:v,overIndex:b,useDragOverlay:h,sortedRects:pA(v,l),strategy:o}),[m,p,x.draggable,x.droppable,w,v,b,l,h,o]);return f().createElement(pO.Provider,{value:A},t)}const pP=e=>{let{id:t,items:r,activeIndex:n,overIndex:o}=e;return pw(r,n,o).indexOf(t)};const pL=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:o,items:a,newIndex:i,previousItems:s,previousContainerId:l,transition:c}=e;if(!c||!n){return false}if(s!==a&&o===i){return false}if(r){return true}return i!==o&&t===l};const pR={duration:200,easing:"ease"};const pB="transform";const pz=/*#__PURE__*/d6.Transition.toString({property:pB,duration:0,easing:"linear"});const pV={roleDescription:"sortable"};/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */function pW(e){let{disabled:t,index:r,node:n,rect:o}=e;const[a,i]=(0,u.useState)(null);const s=(0,u.useRef)(r);dR(()=>{if(!t&&r!==s.current&&n.current){const e=o.current;if(e){const t=uM(n.current,{ignoreTransform:true});const r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};if(r.x||r.y){i(r)}}}if(r!==s.current){s.current=r}},[t,r,n,o]);(0,u.useEffect)(()=>{if(a){i(null)}},[a]);return a}function pj(e){let{animateLayoutChanges:t=pL,attributes:r,disabled:n,data:o,getNewIndex:a=pP,id:i,strategy:s,resizeObserverConfig:l,transition:c=pR}=e;const{items:d,containerId:f,activeIndex:p,disabled:h,disableTransforms:v,sortedRects:g,overIndex:m,useDragOverlay:b,strategy:y}=(0,u.useContext)(pO);const _=pq(n,h);const w=d.indexOf(i);const x=(0,u.useMemo)(()=>({sortable:{containerId:f,index:w,items:d},...o}),[f,o,w,d]);const A=(0,u.useMemo)(()=>d.slice(d.indexOf(i)),[d,i]);const{rect:k,node:Y,isOver:I,setNodeRef:D}=f7({id:i,data:x,disabled:_.droppable,resizeObserverConfig:{updateMeasurementsFor:A,...l}});const{active:C,activatorEvent:S,activeNodeRect:M,attributes:E,setNodeRef:F,listeners:H,isDragging:T,over:K,setActivatorNodeRef:O,transform:N}=f4({id:i,data:x,attributes:{...pV,...r},disabled:_.draggable});const P=dE(D,F);const L=Boolean(C);const R=L&&!v&&pk(p)&&pk(m);const B=!b&&T;const z=B&&R?N:null;const V=s!=null?s:y;const W=R?z!=null?z:V({rects:g,activeNodeRect:M,activeIndex:p,overIndex:m,index:w}):null;const j=pk(p)&&pk(m)?a({id:i,items:d,activeIndex:p,overIndex:m}):w;const q=C==null?void 0:C.id;const U=(0,u.useRef)({activeId:q,items:d,newIndex:j,containerId:f});const G=d!==U.current.items;const Q=t({active:C,containerId:f,isDragging:T,isSorting:L,id:i,index:w,items:d,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:c,wasDragging:U.current.activeId!=null});const $=pW({disabled:!Q,index:w,node:Y,rect:k});(0,u.useEffect)(()=>{if(L&&U.current.newIndex!==j){U.current.newIndex=j}if(f!==U.current.containerId){U.current.containerId=f}if(d!==U.current.items){U.current.items=d}},[L,j,f,d]);(0,u.useEffect)(()=>{if(q===U.current.activeId){return}if(q!=null&&U.current.activeId==null){U.current.activeId=q;return}const e=setTimeout(()=>{U.current.activeId=q},50);return()=>clearTimeout(e)},[q]);return{active:C,activeIndex:p,attributes:E,data:x,rect:k,index:w,newIndex:j,items:d,isOver:I,isSorting:L,isDragging:T,listeners:H,node:Y,overIndex:m,over:K,setNodeRef:P,setActivatorNodeRef:O,setDroppableNodeRef:D,setDraggableNodeRef:F,transform:$!=null?$:W,transition:Z()};function Z(){if($||// Or to prevent items jumping to back to their "new" position when items change
G&&U.current.newIndex===w){return pz}if(B&&!dJ(S)||!c){return undefined}if(L||Q){return d6.Transition.toString({...c,property:pB})}return undefined}}function pq(e,t){var r,n;if(typeof e==="boolean"){return{draggable:e,// Backwards compatibility
droppable:false}}return{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(n=e==null?void 0:e.droppable)!=null?n:t.droppable}}function pU(e){if(!e){return false}const t=e.data.current;if(t&&"sortable"in t&&typeof t.sortable==="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable){return true}return false}const pG=[u3.Down,u3.Right,u3.Up,u3.Left];const pQ=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:o,droppableContainers:a,over:i,scrollableAncestors:s}}=t;if(pG.includes(e.code)){e.preventDefault();if(!r||!n){return}const t=[];a.getEnabled().forEach(r=>{if(!r||r!=null&&r.disabled){return}const a=o.get(r.id);if(!a){return}switch(e.code){case u3.Down:if(n.top<a.top){t.push(r)}break;case u3.Up:if(n.top>a.top){t.push(r)}break;case u3.Left:if(n.left>a.left){t.push(r)}break;case u3.Right:if(n.left<a.left){t.push(r)}break}});const l=ub({active:r,collisionRect:n,droppableRects:o,droppableContainers:t,pointerCoordinates:null});let c=uv(l,"id");if(c===(i==null?void 0:i.id)&&l.length>1){c=l[1].id}if(c!=null){const e=a.get(r.id);const t=a.get(c);const i=t?o.get(t.id):null;const l=t==null?void 0:t.node.current;if(l&&i&&e&&t){const r=uK(l);const o=r.some((e,t)=>s[t]!==e);const a=p$(e,t);const c=pZ(e,t);const d=o||!a?{x:0,y:0}:{x:c?n.width-i.width:0,y:c?n.height-i.height:0};const u={x:i.left,y:i.top};const f=d.x&&d.y?u:dZ(u,d);return f}}}return undefined};function p$(e,t){if(!pU(e)||!pU(t)){return false}return e.data.current.sortable.containerId===t.data.current.sortable.containerId}function pZ(e,t){if(!pU(e)||!pU(t)){return false}if(!p$(e,t)){return false}return e.data.current.sortable.index<t.data.current.sortable.index}//# sourceMappingURL=sortable.esm.js.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/ErrorBoundary.tsx
var pX=r(2506);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/FocusTrap.tsx
var pJ=r(3979);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/useScrollLock.ts
var p0=r(6039);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/ModalWrapper.tsx
function p1(){var e=(0,M._)(["\n      max-width: 100vw;\n      width: 100vw;\n      height: 100vh;\n      margin-top: ",";\n    "]);p1=function t(){return e};return e}function p6(){var e=(0,M._)(["\n      height: calc(100% - ","px);\n    "]);p6=function t(){return e};return e}var p2=e=>{var{children:t,onClose:r,title:n,subtitle:o,icon:a,headerChildren:i,entireHeader:s,actions:l,maxWidth:c=1218,blurTriggerElement:u=true,fullScreen:f=false}=e;(0,p0/* .useScrollLock */.K$)();return/*#__PURE__*/(0,d/* .jsx */.Y)(pJ/* ["default"] */.A,{blurPrevious:u,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:p3.container({maxWidth:c,isFullScreen:f}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:p3.header({hasHeaderChildren:!!i}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:s,fallback:/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:p3.headerContent,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:p3.iconWithTitle,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:a,children:a}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,d/* .jsx */.Y)("h6",{css:p3.title,title:typeof n==="string"?n:"",children:n})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:p3.subtitle,children:o})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:p3.headerChildren,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:i,children:i})}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:p3.actionsWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:l,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:p3.closeButton,onClick:r,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"times",width:14,height:14})}),children:l})})]}),children:s})}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:p3.content({isFullScreen:f}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(pX/* ["default"] */.A,{children:t})})]})})};/* export default */const p4=p2;var p3={container:e=>{var{maxWidth:t,isFullScreen:r}=e;return/*#__PURE__*/(0,h/* .css */.AH)("position:relative;background:",x/* .colorTokens.background.white */.I6.background.white,";margin:",tp/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px auto ",x/* .spacing["24"] */.YK["24"],";height:100%;max-width:",t,"px;box-shadow:",x/* .shadow.modal */.r7.modal,";border-radius:",x/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;bottom:0;z-index:",x/* .zIndex.modal */.fE.modal,";width:100%;",r&&(0,h/* .css */.AH)(p1(),tp/* .WP_ADMIN_BAR_HEIGHT */.I4)," ",x/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasHeaderChildren:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:",t?"1fr auto 1fr":"1fr auto auto",";gap:",x/* .spacing["8"] */.YK["8"],";align-items:center;width:100%;height:",tp/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT,"px;background:",x/* .colorTokens.background.white */.I6.background.white,";border-bottom:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";position:sticky;")},headerContent:/*#__PURE__*/(0,h/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",x/* .spacing["12"] */.YK["12"],";padding-left:",x/* .spacing["24"] */.YK["24"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-left:",x/* .spacing["16"] */.YK["16"],";}"),headerChildren:/*#__PURE__*/(0,h/* .css */.AH)("place-self:center center;"),iconWithTitle:/*#__PURE__*/(0,h/* .css */.AH)("display:inline-flex;align-items:center;gap:",x/* .spacing["4"] */.YK["4"],";flex-shrink:0;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.heading6 */.I.heading6("medium"),";color:",x/* .colorTokens.text.title */.I6.text.title,";text-transform:none;letter-spacing:normal;"),subtitle:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.hints */.I6.text.hints,";padding-left:",x/* .spacing["12"] */.YK["12"],";border-left:1px solid ",x/* .colorTokens.icon.hints */.I6.icon.hints,";"),actionsWrapper:/*#__PURE__*/(0,h/* .css */.AH)("place-self:center end;display:inline-flex;gap:",x/* .spacing["16"] */.YK["16"],";padding-right:",x/* .spacing["24"] */.YK["24"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-right:",x/* .spacing["16"] */.YK["16"],";}"),closeButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",x/* .borderRadius.circle */.Vq.circle,";background:",x/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",x/* .colorTokens.background.white */.I6.background.white,";}svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",x/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",x/* .shadow.focus */.r7.focus,";}"),content:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("height:calc(100% - ",tp/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT+tp/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px);background-color:",x/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";overflow-x:hidden;",k/* .styleUtils.overflowYAuto */.x.overflowYAuto," ",t&&(0,h/* .css */.AH)(p6(),tp/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT))}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInputWithPresets.tsx
function p5(){var e=(0,M._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);p5=function t(){return e};return e}function p8(){var e=(0,M._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);p8=function t(){return e};return e}function p7(){var e=(0,M._)(["\n        border-color: ",";\n      "]);p7=function t(){return e};return e}function p9(){var e=(0,M._)(["\n          padding-",": ",";\n        "]);p9=function t(){return e};return e}function he(){var e=(0,M._)(["\n              padding-",": ",";\n            "]);he=function t(){return e};return e}function ht(){var e=(0,M._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);ht=function t(){return e};return e}function hr(){var e=(0,M._)(["\n          padding-",": ",";\n        "]);hr=function t(){return e};return e}function hn(){var e=(0,M._)(["\n        height: 32px;\n        ",";\n      "]);hn=function t(){return e};return e}function ho(){var e=(0,M._)(["\n      min-width: 200px;\n    "]);ho=function t(){return e};return e}function ha(){var e=(0,M._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);ha=function t(){return e};return e}function hi(){var e=(0,M._)(["\n      ","\n    "]);hi=function t(){return e};return e}function hs(){var e=(0,M._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);hs=function t(){return e};return e}function hl(){var e=(0,M._)(["\n      border-right: 1px solid ",";\n    "]);hl=function t(){return e};return e}function hc(){var e=(0,M._)(["\n      ","\n    "]);hc=function t(){return e};return e}function hd(){var e=(0,M._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);hd=function t(){return e};return e}function hu(){var e=(0,M._)(["\n      border-left: 1px solid ",";\n    "]);hu=function t(){return e};return e}var hf=e=>{var{field:t,fieldState:r,content:n,contentPosition:o="left",showVerticalBar:a=true,type:i="text",size:s="regular",label:l,placeholder:c="",disabled:f,readOnly:p,loading:h,helpText:v,removeOptionsMinWidth:g=true,onChange:m,presetOptions:_=[],selectOnFocus:x=false,wrapperCss:A,contentCss:k,formFieldWrapperCss:Y,removeBorder:D=false}=e;var C;var S=(C=t.value)!==null&&C!==void 0?C:"";var M=(0,u.useRef)(null);var E=(0,u.useRef)(null);var[F,H]=(0,u.useState)(false);return/*#__PURE__*/(0,d/* .jsx */.Y)(I/* ["default"] */.A,{fieldState:r,field:t,label:l,disabled:f,readOnly:p,loading:h,helpText:v,removeBorder:D,wrapperCss:Y,placeholder:c,children:e=>{var{css:l}=e,c=(0,tf._)(e,["css"]);return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:[hh.inputWrapper(!!r.error,D),A],ref:E,children:[n&&o==="left"&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:[hh.inputLeftContent(a,s),k],children:n}),/*#__PURE__*/(0,d/* .jsx */.Y)("input",(0,y._)((0,b._)({},c),{css:[l,hh.input(o,a,s)],onClick:()=>H(true),autoComplete:"off",readOnly:p,ref:e=>{t.ref(e);// @ts-ignore
M.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!x||!M.current){return}M.current.select()},value:S,onChange:e=>{var r=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(m){m(r)}},"data-input":true})),n&&o==="right"&&/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:hh.inputRightContent(a,s),children:n})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:_.length>0,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:E,isOpen:F,closePopover:()=>H(false),animationType:tY/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,d/* .jsx */.Y)("ul",{css:[hh.options(g)],children:_.map(e=>/*#__PURE__*/(0,d/* .jsx */.Y)("li",{css:hh.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:hh.label,onClick:()=>{t.onChange(e.value);m===null||m===void 0?void 0:m(e.value);H(false)},children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* export default */const hp=hf;var hh={mainWrapper:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;",!t&&(0,h/* .css */.AH)(p5(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"],x/* .borderRadius["6"] */.Vq["6"],x/* .shadow.input */.r7.input,x/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,h/* .css */.AH)(p8(),x/* .colorTokens.stroke.danger */.I6.stroke.danger,x/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",k/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,h/* .css */.AH)(p7(),x/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,h/* .css */.AH)("&.tutor-input-field:not(textarea){",A/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,h/* .css */.AH)(p9(),e,x/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,h/* .css */.AH)(ht(),x/* .fontSize["24"] */.J["24"],x/* .fontWeight.medium */.Wy.medium,t&&(0,h/* .css */.AH)(he(),e,x/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,h/* .css */.AH)(hn(),t&&(0,h/* .css */.AH)(hr(),e,x/* .spacing["4"] */.YK["4"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";margin:0 ",x/* .spacing["12"] */.YK["12"],";padding:",x/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",x/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),options:e=>/*#__PURE__*/(0,h/* .css */.AH)("z-index:",x/* .zIndex.dropdown */.fE.dropdown,";background-color:",x/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",x/* .shadow.popover */.r7.popover,";padding:",x/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",x/* .borderRadius["6"] */.Vq["6"],";",k/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,h/* .css */.AH)(ho())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";}",t&&(0,h/* .css */.AH)(ha(),x/* .colorTokens.background.active */.I6.background.active,x/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],x/* .borderRadius["6"] */.Vq["6"],x/* .borderRadius["6"] */.Vq["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small()," ",k/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",x/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",x/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,h/* .css */.AH)(hi(),A/* .typography.body */.I.body())," ",t==="small"&&(0,h/* .css */.AH)(hs(),x/* .spacing["6"] */.YK["6"])," ",e&&(0,h/* .css */.AH)(hl(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small()," ",k/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",x/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",x/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,h/* .css */.AH)(hc(),A/* .typography.body */.I.body())," ",t==="small"&&(0,h/* .css */.AH)(hd(),x/* .spacing["6"] */.YK["6"])," ",e&&(0,h/* .css */.AH)(hu(),x/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/subscription/OfferSalePrice.tsx
var{tutor_currency:hv}=rT/* .tutorConfig */.P;function hg(){var e=et();var t=e.watch("offer_sale_price");var r=e.watch("regular_price");var n=!!e.watch("schedule_sale_price");return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hm.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(rJ,(0,y._)((0,b._)({},e),{label:(0,m.__)("Offer sale price","tutor-pro")}))})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hm.inputWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"sale_price",rules:(0,y._)((0,b._)({},r6()),{validate:e=>{if(e&&r&&Number(e)>=Number(r)){return(0,m.__)("Sale price should be less than regular price","tutor-pro")}if(e&&r&&Number(e)<=0){return(0,m.__)("Sale price should be greater than 0","tutor-pro")}return undefined}}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(dC,(0,y._)((0,b._)({},e),{type:"number",label:(0,m.__)("Sale Price","tutor-pro"),content:(hv===null||hv===void 0?void 0:hv.symbol)||"$",selectOnFocus:true,contentCss:k/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Schedule the sale price","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:n,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hm.datetimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{children:(0,m.__)("Sale starts from","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:k/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"sale_price_from_date",control:e.control,rules:{required:(0,m.__)("Schedule date is required","tutor-pro")},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(s_,(0,y._)((0,b._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"sale_price_from_time",control:e.control,rules:{required:(0,m.__)("Schedule time is required","tutor-pro")},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(sM,(0,y._)((0,b._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hm.datetimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{children:(0,m.__)("Sale ends to","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:k/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"sale_price_to_date",control:e.control,rules:{required:(0,m.__)("Schedule date is required","tutor-pro"),validate:{checkEndDate:t=>{var r=e.watch("sale_price_from_date");var n=t;if(r&&n){return new Date(r)>new Date(n)?(0,m.__)("Sales End date should be greater than start date","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date"]},render:t=>/*#__PURE__*/(0,d/* .jsx */.Y)(s_,(0,y._)((0,b._)({},t),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:e.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{name:"sale_price_to_time",control:e.control,rules:{required:(0,m.__)("Schedule time is required","tutor-pro"),validate:{checkEndTime:t=>{var r=e.watch("sale_price_from_date");var n=e.watch("sale_price_from_time");var o=e.watch("sale_price_to_date");var a=t;if(r&&o&&n&&a){return new Date("".concat(r," ").concat(n))>new Date("".concat(o," ").concat(a))?(0,m.__)("Sales End time should be greater than start time","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(sM,(0,y._)((0,b._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})}var hm={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("background-color:",x/* .colorTokens.background.white */.I6.background.white,";padding:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";display:flex;flex-direction:column;gap:",x/* .spacing["20"] */.YK["20"],";"),inputWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";padding:",x/* .spacing["4"] */.YK["4"],";margin:-",x/* .spacing["4"] */.YK["4"],";"),datetimeWrapper:/*#__PURE__*/(0,h/* .css */.AH)("label{",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.title */.I6.text.title,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/subscription.ts
var hb=[3,6,9,12];var hy={untilCancelled:(0,m.__)("Until cancelled","tutor-pro"),noRenewal:(0,m.__)("No Renewal","tutor-pro")};var h_={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,m.__)("Until cancelled","tutor-pro"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var hw=e=>{var t=()=>{if(e.recurring_limit==="0"){return hy.untilCancelled}if(e.recurring_limit==="-1"){return hy.noRenewal}return e.recurring_limit||""};var r,n,o,a,i,s,l,c,d,u,f;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(o=e.plan_name)!==null&&o!==void 0?o:"",plan_order:(a=e.plan_order)!==null&&a!==void 0?a:"0",recurring_value:(i=e.recurring_value)!==null&&i!==void 0?i:"0",recurring_interval:(s=e.recurring_interval)!==null&&s!==void 0?s:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(l=e.regular_price)!==null&&l!==void 0?l:"0",recurring_limit:t(),enrollment_fee:(c=e.enrollment_fee)!==null&&c!==void 0?c:"0",trial_value:(d=e.trial_value)!==null&&d!==void 0?d:"0",trial_interval:(u=e.trial_interval)!==null&&u!==void 0?u:"day",sale_price:(f=e.sale_price)!==null&&f!==void 0?f:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?(0,oS/* .format */.GP)((0,Y/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),tp/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_from_time:e.sale_price_from?(0,oS/* .format */.GP)((0,Y/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),tp/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",sale_price_to_date:e.sale_price_to?(0,oS/* .format */.GP)((0,Y/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),tp/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_to_time:e.sale_price_to?(0,oS/* .format */.GP)((0,Y/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),tp/* .DateFormats.hoursMinutes */.UA.hoursMinutes):""}};var hx=e=>{var t=()=>{if(e.recurring_limit===hy.untilCancelled){return"0"}if(e.recurring_limit===hy.noRenewal){return"-1"}return e.recurring_limit};return(0,y._)((0,b._)((0,y._)((0,b._)((0,y._)((0,b._)((0,y._)((0,b._)({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:(0,Y/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:(0,Y/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var hA=e=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].GET_SUBSCRIPTIONS_LIST */.A.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var hk=e=>{return(0,nP/* .useQuery */.I)({queryKey:["SubscriptionsList",e],queryFn:()=>hA(e).then(e=>e.data)})};var hY=(e,t)=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].SAVE_SUBSCRIPTION */.A.SAVE_SUBSCRIPTION,(0,b._)({object_id:e},t.id&&{id:t.id},t))};var hI=e=>{var t=(0,v/* .useQueryClient */.jE)();var{showToast:r}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:t=>hY(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(e)})}})};var hD=(e,t)=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].DELETE_SUBSCRIPTION */.A.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var hC=e=>{var t=(0,v/* .useQueryClient */.jE)();var{showToast:r}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:t=>hD(e,t),onSuccess:(n,o)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(o))})}},onError:e=>{r({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(e)})}})};var hS=(e,t)=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].DUPLICATE_SUBSCRIPTION */.A.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var hM=e=>{var t=(0,v/* .useQueryClient */.jE)();var{showToast:r}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:t=>hS(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(e)})}})};var hE=(e,t)=>{return rr/* .wpAjaxInstance.post */.b.post(rn/* ["default"].SORT_SUBSCRIPTION */.A.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var hF=e=>{var t=(0,v/* .useQueryClient */.jE)();var{showToast:r}=(0,rt/* .useToast */.d)();return(0,re/* .useMutation */.n)({mutationFn:t=>hE(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:(0,Y/* .convertToErrorMessage */.EL)(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var hH=()=>{return wpAjaxInstance.get(endpoints.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var hT=()=>{return useQuery({queryKey:["MembershipPlans"],queryFn:hH})};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/subscription/SubscriptionItem.tsx
var hK=250;// this is hack to fix layout shifting while animating.
var{tutor_currency:hO}=rT/* .tutorConfig */.P;function hN(){var e=et();(0,u.useEffect)(()=>{var t=setTimeout(()=>{e.setFocus("plan_name")},hK);return()=>{clearTimeout(t)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var t=e.watch("charge_enrollment_fee");// @TODO: Will be added after confirmation
// const enableTrial = form.watch(`subscriptions.${index}.enable_free_trial` as `subscriptions.0.enable_free_trial`);
var r=Object.values(hy);var n=[...hb.map(e=>({/* translators: %s: number of times. */label:(0,m.sprintf)((0,m.__)("%s times","tutor-pro"),e.toString()),value:String(e)})),...r.map(e=>({label:e,value:e}))];return/*#__PURE__*/(0,d/* .jsx */.Y)("form",{css:hP.subscription,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:k/* .styleUtils.display.flex */.x.display.flex("column"),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hP.subscriptionContent,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"plan_name",rules:r6(),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,y._)((0,b._)({},e),{placeholder:(0,m.__)("Enter plan name","tutor-pro"),label:(0,m.__)("Plan Name","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:hP.inputGroup,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"regular_price",rules:(0,y._)((0,b._)({},r6()),{validate:e=>{if(Number(e)<=0){return(0,m.__)("Price must be greater than 0","tutor-pro")}}}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(dC,(0,y._)((0,b._)({},e),{label:(0,m.__)("Price","tutor-pro"),content:(hO===null||hO===void 0?void 0:hO.symbol)||"$",placeholder:(0,m.__)("Plan price","tutor-pro"),selectOnFocus:true,contentCss:k/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"recurring_value",rules:(0,y._)((0,b._)({},r6()),{validate:e=>{if(Number(e)<1){return(0,m.__)("This value must be equal to or greater than 1","tutor-pro")}}}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,y._)((0,b._)({},e),{label:(0,m.__)("Billing Interval","tutor-pro"),placeholder:(0,m.__)("12","tutor-pro"),selectOnFocus:true,type:"number"}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,y._)((0,b._)({},e),{label:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{children:" "}),options:[{label:(0,m.__)("Day(s)","tutor-pro"),value:"day"},{label:(0,m.__)("Week(s)","tutor-pro"),value:"week"},{label:(0,m.__)("Month(s)","tutor-pro"),value:"month"},{label:(0,m.__)("Year(s)","tutor-pro"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"recurring_limit",rules:(0,y._)((0,b._)({},r6()),{validate:e=>{if(r.includes(e)){return true}if(Number(e)<=0){return(0,m.__)("Renew plan must be greater than 0","tutor-pro")}return true}}),render:e=>{var t;return/*#__PURE__*/(0,d/* .jsx */.Y)(hp,(0,y._)((0,b._)({},e),{label:(0,m.__)("Billing Cycles","tutor-pro"),placeholder:(0,m.__)("Select or type times to renewing the plan","tutor-pro"),content:!r.includes((t=e.field.value)!==null&&t!==void 0?t:"")&&(0,m.__)("Times","tutor-pro"),contentPosition:"right",type:"number",presetOptions:n,selectOnFocus:true}))}})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Charge enrollment fee","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"enrollment_fee",rules:(0,y._)((0,b._)({},r6()),{validate:e=>{if(Number(e)<=0){return(0,m.__)("Enrollment fee must be greater than 0","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(dC,(0,y._)((0,b._)({},e),{label:(0,m.__)("Enrollment fee","tutor-pro"),content:(hO===null||hO===void 0?void 0:hO.symbol)||"$",placeholder:(0,m.__)("Enter enrollment fee","tutor-pro"),selectOnFocus:true,contentCss:k/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Do not provide certificate","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(ef,{control:e.control,name:"is_featured",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,y._)((0,b._)({},e),{label:(0,m.__)("Mark as featured","tutor-pro")}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(hg,{})]})})})}var hP={trialWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:",x/* .spacing["8"] */.YK["8"],";"),subscription:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius.card */.Vq.card,";overflow:hidden;transition:border-color 0.3s ease;"),subscriptionContent:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["16"] */.YK["16"],";display:flex;flex-direction:column;gap:",x/* .spacing["12"] */.YK["12"],";"),inputGroup:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 0.7fr 1fr 1fr;align-items:start;gap:",x/* .spacing["8"] */.YK["8"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/SubscriptionModal.tsx
function hL(e){var{courseId:t,isBundle:r=false,icon:n,closeModal:o,subscription:a}=e;var i=t9({defaultValues:a||h_,mode:"onChange"});var s=hI(t);var l=i.formState.isDirty;var c=a.isSaved;var u=e=>F(function*(){var n=hx((0,y._)((0,b._)({},e),{id:e.isSaved?e.id:"0",assign_id:String(t),plan_type:r?"bundle":"course"}));var a=yield s.mutateAsync(n);if(a.status_code===200||a.status_code===201){o({action:"CONFIRM"})}})();return/*#__PURE__*/(0,d/* .jsx */.Y)(er,(0,y._)((0,b._)({},i),{children:/*#__PURE__*/(0,d/* .jsx */.Y)(p4,{onClose:()=>o({action:"CLOSE"}),icon:l?/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"warning",width:24,height:24}):n,title:l?tp/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?(0,m.__)("Unsaved Changes","tutor-pro"):"":(0,m.__)("Subscription Plan","tutor-pro"),subtitle:a.isSaved?(0,m.__)("Update plan","tutor-pro"):(0,m.__)("Create plan","tutor-pro"),maxWidth:1218,actions:l&&/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>c?i.reset():o({action:"CLOSE"}),children:c?(0,m.__)("Discard Changes","tutor-pro"):(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{"data-cy":"save-subscription",loading:s.isPending,variant:"primary",size:"small",onClick:i.handleSubmit(u),children:c?(0,m.__)("Update","tutor-pro"):(0,m.__)("Save","tutor-pro")})]}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:hR.wrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:hR.container,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:hR.content,children:/*#__PURE__*/(0,d/* .jsx */.Y)(hN,{},a.id)})})})})}))}var hR={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;height:100%;"),container:/*#__PURE__*/(0,h/* .css */.AH)("max-width:640px;width:100%;padding-block:",x/* .spacing["40"] */.YK["40"],";margin-inline:auto;display:flex;flex-direction:column;gap:",x/* .spacing["32"] */.YK["32"],";",x/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-block:",x/* .spacing["24"] */.YK["24"],";padding-inline:",x/* .spacing["8"] */.YK["8"],";}"),content:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/TutorBadge.tsx
var hB={default:{background:x/* .colorTokens.background.status.drip */.I6.background.status.drip,foreground:x/* .colorTokens.text.status.primary */.I6.text.status.primary,border:x/* .colorTokens.stroke.neutral */.I6.stroke.neutral},secondary:{background:x/* .colorTokens.background.status.cancelled */.I6.background.status.cancelled,foreground:x/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:x/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled},critical:{background:x/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,foreground:x/* .colorTokens.text.status.failed */.I6.text.status.failed,border:x/* .colorTokens.stroke.status.fail */.I6.stroke.status.fail},warning:{background:x/* .colorTokens.background.status.warning */.I6.background.status.warning,foreground:x/* .colorTokens.text.status.pending */.I6.text.status.pending,border:x/* .colorTokens.stroke.status.warning */.I6.stroke.status.warning},success:{background:x/* .colorTokens.background.status.success */.I6.background.status.success,foreground:x/* .colorTokens.text.status.completed */.I6.text.status.completed,border:x/* .colorTokens.stroke.status.success */.I6.stroke.status.success},outline:{background:x/* .colorTokens.background.white */.I6.background.white,foreground:x/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:x/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled}};var hz=/*#__PURE__*/f().forwardRef((e,t)=>{var{className:r,children:n,variant:o="default"}=e;return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{ref:t,className:r,css:hV.badge(o),children:n})});hz.displayName="TutorBadge";var hV={badge:e=>/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small("medium"),";display:inline-flex;align-items:center;border-radius:",x/* .borderRadius["30"] */.Vq["30"],";padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["8"] */.YK["8"],";max-height:24px;",k/* .styleUtils.textEllipsis */.x.textEllipsis,";border:1px solid ",hB[e].border,";background-color:",hB[e].background,";color:",hB[e].foreground,";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/ThreeDots.tsx
function hW(){var e=(0,M._)(["\n      padding-block: ",";\n    "]);hW=function t(){return e};return e}function hj(){var e=(0,M._)(["\n      padding: "," ",";\n      ",";\n    "]);hj=function t(){return e};return e}function hq(){var e=(0,M._)(["\n      color: ",";\n      svg {\n        color: ",";\n      }\n\n      &:hover:not(:disabled) {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n\n      &:active {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n    "]);hq=function t(){return e};return e}function hU(){var e=(0,M._)(["\n      background-color: ",";\n      svg {\n        color: ",";\n      }\n    "]);hU=function t(){return e};return e}function hG(){var e=(0,M._)(["\n      background-color: ",";\n      :hover {\n        background-color: ",";\n        svg {\n          color: ",";\n        }\n      }\n    "]);hG=function t(){return e};return e}var hQ=e=>{var{text:t,icon:r,onClick:n,onClosePopover:o,isTrash:a=false,size:i="medium",buttonCss:s,disabled:l}=e,c=(0,tf._)(e,["text","icon","onClick","onClosePopover","isTrash","size","buttonCss","disabled"]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("button",(0,y._)((0,b._)({type:"button",css:[hX.option({isTrash:a,size:i}),s],onClick:e=>{if(n){n(e)}if(o){o()}},disabled:l},c),{children:[r&&r,/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:t})]}))};var h$=e=>{var{onClick:t,isOpen:r,disabled:n=false,closePopover:o,placement:a=i3/* .POPOVER_PLACEMENTS.BOTTOM_RIGHT */.zA.BOTTOM_RIGHT,children:i,animationType:s=tY/* .AnimationType.slideLeft */.J6.slideLeft,dotsOrientation:l="horizontal",maxWidth:c="148px",isInverse:p=false,arrow:h=false,size:v="medium",closeOnEscape:g=true,wrapperCss:m}=e,_=(0,tf._)(e,["onClick","isOpen","disabled","closePopover","placement","children","animationType","dotsOrientation","maxWidth","isInverse","arrow","size","closeOnEscape","wrapperCss"]);var x=(0,u.useRef)(null);return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",(0,y._)((0,b._)({type:"button",ref:x,onClick:t,css:[hX.button({isOpen:r,isInverse:p,isDisabled:n}),m],disabled:n},_),{children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:l==="horizontal"?"threeDots":"threeDotsVertical",width:32,height:32})})),/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{gap:13,maxWidth:c,placement:a,triggerRef:x,isOpen:r,closePopover:o,animationType:s,arrow:h,closeOnEscape:g,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:hX.wrapper({size:v}),children:f().Children.map(i,e=>{if(/*#__PURE__*/f().isValidElement(e)){var t={size:v};return /*#__PURE__*/f().cloneElement(e,t)}return e})})})]})};h$.Option=hQ;/* export default */const hZ=h$;var hX={wrapper:e=>{var{size:t="medium"}=e;return/*#__PURE__*/(0,h/* .css */.AH)("padding-block:",x/* .spacing["8"] */.YK["8"],";position:relative;",t==="small"&&(0,h/* .css */.AH)(hW(),x/* .spacing["4"] */.YK["4"]))},option:e=>{var{isTrash:t=false,size:r="medium"}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.body */.I.body(),";width:100%;padding:",x/* .spacing["10"] */.YK["10"]," ",x/* .spacing["20"] */.YK["20"],";transition:background-color 0.3s ease-in-out;cursor:pointer;display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",x/* .colorTokens.text.primary */.I6.text.primary,";}svg{flex-shrink:0;color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="small"&&(0,h/* .css */.AH)(hj(),x/* .spacing["8"] */.YK["8"],x/* .spacing["16"] */.YK["16"],A/* .typography.small */.I.small("medium")),":hover:not(:disabled){background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";color:",x/* .colorTokens.text.title */.I6.text.title,";svg{color:",x/* .colorTokens.icon.hover */.I6.icon.hover,";filter:grayscale(0%);}}:disabled{cursor:not-allowed;color:",x/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",x/* .colorTokens.icon.disable.background */.I6.icon.disable.background,";}}",t&&(0,h/* .css */.AH)(hq(),x/* .colorTokens.text.error */.I6.text.error,x/* .colorTokens.icon.error */.I6.icon.error,x/* .colorTokens.text.error */.I6.text.error,nm()(x/* .colorTokens.bg.error */.I6.bg.error,.1),x/* .colorTokens.icon.error */.I6.icon.error,x/* .colorTokens.text.error */.I6.text.error,x/* .colorTokens.color.danger["40"] */.I6.color.danger["40"],x/* .colorTokens.icon.error */.I6.icon.error),":focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-4px;border-radius:",x/* .borderRadius.input */.Vq.input,";}")},button:e=>{var{isOpen:t=false,isInverse:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",x/* .borderRadius.circle */.Vq.circle,";display:flex;justify-content:center;align-items:center;transition:background-color 0.3s ease-in-out;svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;}:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}}&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,h/* .css */.AH)(hU(),x/* .colorTokens.background.hover */.I6.background.hover,x/* .colorTokens.icon.brand */.I6.icon.brand)," ",r&&(0,h/* .css */.AH)(hG(),x/* .colorTokens.background.white */.I6.background.white,x/* .colorTokens.background.white */.I6.background.white,!n&&x/* .colorTokens.icon.brand */.I6.icon.brand),":disabled{cursor:not-allowed;}")}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/dndkit.ts
var hJ=e=>pL((0,y._)((0,b._)({},e),{wasDragging:true}));var h0={droppable:{strategy:fg.Always}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/subscription/PreviewItem.tsx
function h1(){var e=(0,M._)(["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        min-width: 0;\n      "]);h1=function t(){return e};return e}function h6(){var e=(0,M._)(["\n          overflow: unset;\n          text-overflow: unset;\n          animation: marquee-slide ","s ease-out forwards;\n          will-change: transform;\n\n          @keyframes marquee-slide {\n            0% {\n              transform: translateX(0);\n            }\n            100% {\n              transform: translateX(-","px);\n            }\n          }\n        "]);h6=function t(){return e};return e}function h2(){var e=(0,M._)(["\n      border-radius: ",";\n      box-shadow: ",";\n\n      [data-grabber] {\n        cursor: grabbing;\n      }\n    "]);h2=function t(){return e};return e}function h4(){var e=(0,M._)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n      min-width: 0;\n    "]);h4=function t(){return e};return e}var h3=60;var h5=(e,t)=>{switch(e){case"hour":return t>1?(0,m.__)("Hours","tutor-pro"):(0,m.__)("Hour","tutor-pro");case"day":return t>1?(0,m.__)("Days","tutor-pro"):(0,m.__)("Day","tutor-pro");case"week":return t>1?(0,m.__)("Weeks","tutor-pro"):(0,m.__)("Week","tutor-pro");case"month":return t>1?(0,m.__)("Months","tutor-pro"):(0,m.__)("Month","tutor-pro");case"year":return t>1?(0,m.__)("Years","tutor-pro"):(0,m.__)("Year","tutor-pro");case"until_cancellation":return(0,m.__)("Until Cancellation","tutor-pro")}};var h8=e=>{var{subscription:t,courseId:r,isBundle:n,isOverlay:o}=e;var a;var[i,s]=(0,u.useState)(false);var[l,c]=(0,u.useState)(0);var[f,p]=(0,u.useState)(0);var{showModal:h,updateModal:v,closeModal:g}=(0,rH/* .useModal */.h)();var _=hI(r);var A=hC(r);var k=hM(r);var Y=(0,u.useRef)(null);var I=(0,u.useRef)(null);var{attributes:D,listeners:C,setNodeRef:S,transform:M,transition:E,isDragging:H}=pj({id:t.id||"",animateLayoutChanges:hJ});var T={transform:d6.Transform.toString(M),transition:E,opacity:H?.3:undefined,background:H?x/* .colorTokens.stroke.hover */.I6.stroke.hover:undefined};var K=(0,u.useMemo)(()=>{var e="".concat(t.recurring_limit.toString().padStart(2,"0")," ").concat((0,m.__)("Billing Cycles","tutor-pro"));if(t.recurring_limit===hy.untilCancelled){e=(0,m.__)("Until Cancellation","tutor-pro")}if(t.recurring_limit===hy.noRenewal){e=(0,m.__)("No Renewal","tutor-pro")}return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:"•"}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e})]})},[t.recurring_limit]);var O=(0,u.useMemo)(()=>/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.payment_type==="recurring",fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:(0,m.__)("Lifetime","tutor-pro")}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.recurring_limit!==hy.noRenewal,fallback:"".concat(t.recurring_value.toString().padStart(2,"0")," ").concat(h5(t.recurring_interval,Number(t.recurring_value))),children:(0,m.sprintf)((0,m.__)("Renew every %1$s %2$s","tutor-pro"),t.recurring_value.toString().padStart(2,"0"),h5(t.recurring_interval,Number(t.recurring_value)))})})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.payment_type!=="onetime",children:K})]}),[t.payment_type,t.recurring_limit,t.recurring_interval,t.recurring_value,K]);var N=(0,u.useCallback)(e=>{var r=hx(t);_.mutate((0,y._)((0,b._)({},r),{is_enabled:e?"1":"0"}))},[t,_]);var P=(0,u.useCallback)(()=>{var e=(0,y._)((0,b._)({},t),{isSaved:true});h({component:hL,props:{icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:e,courseId:r,isBundle:n}});s(false)},[t,h,r,n]);var L=(0,u.useCallback)(()=>F(function*(){v("subscription-delete-modal",{isLoading:true});var e=yield A.mutateAsync(Number(t.id));if(e.status_code===200){g()}})(),[v,A,t.id,g]);var R=(0,u.useCallback)(()=>F(function*(){var e=yield k.mutateAsync(Number(t.id));if(e.data){s(false)}})(),[k,t.id]);var B=(0,u.useCallback)(e=>{if(e.key==="Enter"||e.key===" "){P()}},[P]);var z=(0,u.useCallback)(()=>{s(false);h({id:"subscription-delete-modal",component:nC/* ["default"] */.A,props:{title:(0,m.sprintf)((0,m.__)('Delete "%s"',"tutor-pro"),t.plan_name),description:(0,m.__)("Are you sure you want to delete this plan? This cannot be undone.","tutor-pro"),onConfirm:L,confirmButtonVariant:"danger"}})},[h,t.plan_name,L]);(0,u.useEffect)(()=>{var e=Y.current;var t=I.current;if(!e||!t){return}var r=t.scrollWidth>e.clientWidth;if(r){var n=t.scrollWidth-e.clientWidth;p(n);c(n/h3)}},[t.plan_name,t.payment_type,t.recurring_value,t.recurring_interval,t.recurring_limit]);var V;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{"data-cy":"subscription-preview-item",css:h7.wrapper({isActionButtonVisible:i||_.isPending,isOverlay:o,marqueeDuration:l,marqueeDistance:f}),style:T,ref:S,"aria-label":(0,m.__)("Subscription plan item","tutor-pro"),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,(0,y._)((0,b._)({},C,D),{"data-grabber":true,name:"threeDotsVerticalDouble",width:20,height:20})),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:h7.item,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:h7.header,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("p",{css:h7.title,onClick:P,onKeyDown:B,tabIndex:0,"aria-label":(0,m.__)("Edit subscription plan","tutor-pro"),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-plan-name":true,title:t.plan_name,children:t.plan_name}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.is_featured,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{style:h7.featuredIcon,name:"starFill",height:16,width:16})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!t.is_enabled,children:/*#__PURE__*/(0,d/* .jsx */.Y)(hz,{css:h7.badge,variant:"secondary",title:(0,m.__)("Inactive","tutor-pro"),children:(0,m.__)("Inactive","tutor-pro")})})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:h7.actionButtons,"data-action-buttons":true,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(r$,{checked:t.is_enabled,onChange:N,loading:_.isPending,size:"small"}),/*#__PURE__*/(0,d/* .jsxs */.FD)(hZ,{isOpen:i,closePopover:()=>s(false),onClick:()=>s(!i),dotsOrientation:"vertical",size:"small",arrow:true,"data-three-dot":true,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(hZ.Option,{icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"edit",width:16,height:16}),text:(0,m.__)("Edit","tutor-pro"),"data-cy":"edit-subscription",onClick:P}),/*#__PURE__*/(0,d/* .jsx */.Y)(hZ.Option,{icon:k.isPending?/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* ["default"] */.Ay,{size:16}):/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"duplicate",width:16,height:16}),text:(0,m.__)("Duplicate","tutor-pro"),onClick:R}),/*#__PURE__*/(0,d/* .jsx */.Y)(hZ.Option,{icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"delete",width:16,height:16}),text:(0,m.__)("Delete","tutor-pro"),isTrash:true,onClick:z})]})]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)("p",{css:h7.information,ref:Y,"aria-label":(0,m.__)("Subscription plan details","tutor-pro"),title:(V=(a=Y.current)===null||a===void 0?void 0:a.textContent)!==null&&V!==void 0?V:undefined,children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:h7.marqueeSlide,ref:I,"data-marquee-content":true,children:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:O})})})]})]})};var h7={wrapper:e=>{var{isActionButtonVisible:t=false,isOverlay:r=false,marqueeDuration:n=0,marqueeDistance:o=0}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";gap:",x/* .spacing["4"] */.YK["4"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["12"] */.YK["12"]," ",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["4"] */.YK["4"],";min-width:0;[data-grabber]{align-self:flex-start;margin-top:",x/* .spacing["2"] */.YK["2"],";color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;cursor:grab;&:focus-visible{border-radius:",x/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";}}[data-three-dot]{height:20px;width:20px;svg{height:24px;width:24px;flex-shrink:0;}}[data-action-buttons]{opacity:",t?1:0,";background-color:inherit;}[data-marquee-content]{",o>0&&(0,h/* .css */.AH)(h1()),"}&:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";[data-action-buttons]{opacity:1;}[data-marquee-content]{",o>0&&(0,h/* .css */.AH)(h6(),n,o),"}}&:not(:last-of-type){border-bottom:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";}&:focus-within{[data-action-buttons]{opacity:1;}}",r&&(0,h/* .css */.AH)(h2(),x/* .borderRadius.card */.Vq.card,x/* .shadow.drag */.r7.drag))},item:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;min-height:48px;",k/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;gap:",x/* .spacing["4"] */.YK["4"],";min-width:0;"),header:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;gap:",x/* .spacing["8"] */.YK["8"],";min-width:0;"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption("medium"),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";display:flex;align-items:center;cursor:pointer;[data-plan-name]{",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";}&:focus-visible{border-radius:",x/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",x/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),information:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;max-width:100%;min-width:0;",A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.hints */.I6.text.hints,";display:flex;align-items:center;flex-grow:1;overflow:hidden;position:relative;white-space:nowrap;"),marqueeContent:e=>{var{shouldEllipsis:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",x/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}",t&&(0,h/* .css */.AH)(h4()))},marqueeSlide:/*#__PURE__*/(0,h/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",x/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}"),featuredIcon:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;color:",x/* .colorTokens.icon.brand */.I6.icon.brand,";"),actionButtons:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";height:100%;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";"),badge:/*#__PURE__*/(0,h/* .css */.AH)("flex-shrink:0;margin-left:",x/* .spacing["8"] */.YK["8"],";font-size:",x/* .fontSize["11"] */.J["11"],";padding:0 ",x/* .spacing["6"] */.YK["6"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/subscription/SubscriptionPreview.tsx
function h9(){var e=(0,M._)(["\n      border: none;\n    "]);h9=function t(){return e};return e}var ve=e=>{var{courseId:t,isBundle:r=false}=e;var n=hk(t);var o=hF(t);var{showModal:a}=(0,rH/* .useModal */.h)();var[i,s]=(0,u.useState)(null);var l=ul(us(fn,{activationConstraint:{distance:10}}),us(u7,{coordinateGetter:pQ}));var c=t9({defaultValues:{subscriptions:[]},mode:"onChange"});var{move:f,fields:p}=tc({control:c.control,name:"subscriptions",keyName:"_id"});var h=n.data;(0,u.useEffect)(()=>{if(!h){return}if(p.length===0){return c.reset({subscriptions:h.map(e=>(0,y._)((0,b._)({},hw(e)),{isSaved:true}))})}var e=h.map(e=>{var t=p.find(t=>t.id===e.id);if(t){return(0,b._)({},t,(0,y._)((0,b._)({},hw(e)),{isSaved:true}))}return(0,y._)((0,b._)({},hw(e)),{isSaved:true})});c.reset({subscriptions:e});// eslint-disable-next-line react-hooks/exhaustive-deps
},[h,n.isLoading]);if(n.isLoading){return/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingSection */.YE,{})}if(!n.data){return null}return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vr.outer,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:p.length>0,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vr.header,children:(0,m.__)("Subscriptions","tutor-pro")})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vr.inner({hasSubscriptions:p.length>0}),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)(f0,{sensors:l,collisionDetection:um,measuring:h0,modifiers:[py],onDragStart:e=>{s(e.active.id)},onDragEnd:e=>F(function*(){var{active:t,over:r}=e;if(!r){s(null);return}if(t.id!==r.id){var n=p.findIndex(e=>e.id===t.id);var a=p.findIndex(e=>e.id===r.id);var i=(0,Y/* .moveTo */.tw)(p,n,a);f(n,a);o.mutateAsync(i.map(e=>Number(e.id)))}s(null)})(),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(pN,{items:p,strategy:pH,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:p,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(h8,{subscription:e,courseId:t,isBundle:r},e.id)})}),/*#__PURE__*/(0,dM.createPortal)(/*#__PURE__*/(0,d/* .jsx */.Y)(pf,{children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:i,children:e=>{var n=p.find(t=>t.id===e);if(!n){return null}return/*#__PURE__*/(0,d/* .jsx */.Y)(h8,{subscription:n,courseId:t,isBundle:r,isOverlay:true},e)}})}),document.body)]}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vr.emptyState({hasSubscriptions:p.length>0}),children:/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{"data-cy":"add-subscription",variant:"secondary",icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),onClick:()=>{a({component:hL,props:{title:(0,m.__)("Manage Subscription Plans","tutor-pro"),icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:(0,y._)((0,b._)({},h_),{plan_order:String(p.length+1),isSaved:false}),courseId:t,isBundle:r}})},children:(0,m.__)("Add Subscription","tutor-pro")})})]})]})};/* export default */const vt=ve;var vr={outer:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";"),inner:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("background:",x/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius.card */.Vq.card,";width:100%;overflow:hidden;",!t&&(0,h/* .css */.AH)(h9()))},header:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;",A/* .typography.body */.I.body(),";color:",x/* .colorTokens.text.title */.I6.text.title,";"),emptyState:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("padding:",t?"".concat(x/* .spacing["8"] */.YK["8"]," ").concat(x/* .spacing["12"] */.YK["12"]):0,";width:100%;& > button{width:100%;}")}};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/BundlePricing.tsx
var vn,vo,va,vi;var vs=(0,sF/* .getBundleId */.w)();var{tutor_currency:vl}=rT/* .tutorConfig */.P;var vc=!!((vn=rT/* .tutorConfig.settings */.P.settings)===null||vn===void 0?void 0:vn.enable_tax);var vd=!!((vo=rT/* .tutorConfig.settings */.P.settings)===null||vo===void 0?void 0:vo.enable_individual_tax_control);var vu=!!((va=rT/* .tutorConfig.settings */.P.settings)===null||va===void 0?void 0:va.is_tax_included_in_price);var vf=(vi=rT/* .tutorConfig.settings */.P.settings)===null||vi===void 0?void 0:vi.monetize_by;var vp=()=>{var e,t,r;var n=(0,p/* .useFormContext */.xW)();var o=(0,g/* .useIsFetching */.C)({queryKey:["CourseBundle",vs]});var a=Number(n.getValues("details.subtotal_raw_price")).toFixed(2)||0;var i=(0,p/* .useWatch */.FH)({control:n.control,name:"course_selling_option"});var c=[{label:(0,m.__)("One-time purchase only","tutor-pro"),value:"one_time"},{label:(0,m.__)("Subscription only","tutor-pro"),value:"subscription"},{label:(0,m.__)("Subscription & one-time purchase","tutor-pro"),value:"both"}];// prettier-ignore
var u=(0,m.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor-pro");return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((e=rT/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.monetize_by)==="tutor",children:/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"course_selling_option",control:n.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,l._)((0,s._)({},e),{label:(0,m.__)("Purchase Options","tutor-pro"),options:c}))})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!["subscription"].includes(i)||((t=rT/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.monetize_by)==="wc",children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vv.coursePriceWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vv.regularPrice,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{children:(0,m.__)("Regular Price","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[(vl===null||vl===void 0?void 0:vl.symbol)||"$"," ",a]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"details.subtotal_raw_sale_price",control:n.control,rules:{validate:e=>{if(!e){return true}if(Number(e)>=Number(a)){return(0,m.__)("Sale price must be less than regular price","tutor-pro")}return true}},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(dC,(0,l._)((0,s._)({},e),{label:(0,m.__)("Sale Price","tutor-pro"),content:(vl===null||vl===void 0?void 0:vl.symbol)||"$",placeholder:(0,m.__)("0","tutor-pro"),type:"number",loading:!!o&&!e.field.value,selectOnFocus:true,contentCss:k/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))})]})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((r=rT/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.monetize_by)==="tutor",children:/*#__PURE__*/(0,d/* .jsx */.Y)(vt,{courseId:vs,isBundle:true})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:vf==="tutor"&&vc&&vd,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vv.taxWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{children:(0,m.__)("Tax Collection","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vv.checkboxWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:["one_time","both","all"].includes(i),children:/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"tax_on_single",control:n.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,l._)((0,s._)({},e),{label:(0,m.__)("Charge tax on one-time purchase ","tutor-pro"),helpText:vu&&!e.field.value?u:""}))})}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&["subscription","both","all"].includes(i),children:/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"tax_on_subscription",control:n.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nQ/* ["default"] */.A,(0,l._)((0,s._)({},e),{label:(0,m.__)("Charge tax on subscription","tutor-pro"),helpText:vu&&!e.field.value?u:""}))})})]})]})})]})};/* export default */const vh=vp;var vv={priceRadioGroup:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 1fr;place-items:start;gap:",x/* .spacing["16"] */.YK["16"],";"),regularPrice:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["4"] */.YK["4"],";label{",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.title */.I6.text.title,";}div{",A/* .typography.body */.I.body(),";",k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;color:",x/* .colorTokens.text.title */.I6.text.title,";height:40px;}"),taxWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",x/* .spacing["4"] */.YK["4"],";label{",A/* .typography.body */.I.body(),"      color:",x/* .colorTokens.text.title */.I6.text.title,";}"),checkboxWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",x/* .spacing["4"] */.YK["4"],";"),taxAlert:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",x/* .spacing["8"] */.YK["8"],";margin-top:",x/* .spacing["8"] */.YK["8"],";padding:",x/* .spacing["12"] */.YK["12"],";background-color:",x/* .colorTokens.color.warning["40"] */.I6.color.warning["40"],";border:1px solid ",x/* .colorTokens.color.warning["50"] */.I6.color.warning["50"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";"),alertTitle:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),"    gap:",x/* .spacing["4"] */.YK["4"],";align-items:center;",A/* .typography.caption */.I.caption("medium"),";color:",x/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";svg{color:",x/* .colorTokens.design.warning */.I6.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),"    color:",x/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";")};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var vg=r(5054);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var vm=r(4350);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMilliseconds.js
/**
 * The {@link addMilliseconds} function options.
 *//**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */function vb(e,t,r){return(0,vg/* .constructFrom */.w)(r?.in||e,+(0,vm/* .toDate */.a)(e)+t)}// Fallback for modularized imports:
/* export default */const vy=/* unused pure expression or super */null&&vb;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var v_=r(5830);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addHours.js
/**
 * The {@link addHours} function options.
 *//**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */function vw(e,t,r){return vb(e,t*v_/* .millisecondsInHour */.s0,r)}// Fallback for modularized imports:
/* export default */const vx=/* unused pure expression or super */null&&vw;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js + 1 modules
var vA=r(6741);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js
var vk=r(6219);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMinute.js
/**
 * The {@link startOfMinute} function options.
 *//**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function vY(e,t){const r=(0,vm/* .toDate */.a)(e,t?.in);r.setSeconds(0,0);return r}// Fallback for modularized imports:
/* export default */const vI=/* unused pure expression or super */null&&vY;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMinute.js
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */function vD(e,t){return+vY(e)===+vY(t)}// Fallback for modularized imports:
/* export default */const vC=/* unused pure expression or super */null&&vD;// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/ScheduleOptions.tsx
var vS=()=>{var e=(0,p/* .useFormContext */.xW)();var t=(0,p/* .useWatch */.FH)({name:"post_date"});var r;var n=(r=(0,p/* .useWatch */.FH)({name:"schedule_date"}))!==null&&r!==void 0?r:"";var o;var a=(o=(0,p/* .useWatch */.FH)({name:"schedule_time"}))!==null&&o!==void 0?o:(0,sB/* .format */.GP)(vw(new Date,1),tp/* .DateFormats.hoursMinutes */.UA.hoursMinutes);var i;var c=(i=(0,p/* .useWatch */.FH)({name:"isScheduleEnabled"}))!==null&&i!==void 0?i:false;var f;var h=(f=(0,p/* .useWatch */.FH)({name:"showScheduleForm"}))!==null&&f!==void 0?f:false;var[v,g]=(0,u.useState)(n&&a&&(0,vA/* .isValid */.f)(new Date("".concat(n," ").concat(a)))?(0,sB/* .format */.GP)(new Date("".concat(n," ").concat(a)),tp/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H):"");var b=()=>{e.setValue("schedule_date","",{shouldDirty:true});e.setValue("schedule_time","",{shouldDirty:true});e.setValue("showScheduleForm",true,{shouldDirty:true})};var y=()=>{var r=(0,nU/* .isBefore */.Y)(new Date(t),new Date);e.setValue("schedule_date",r&&v?(0,sB/* .format */.GP)((0,vk/* .parseISO */.H)(v),tp/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",{shouldDirty:true});e.setValue("schedule_time",r&&v?(0,sB/* .format */.GP)((0,vk/* .parseISO */.H)(v),tp/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",{shouldDirty:true})};var x=()=>{if(!n||!a){return}e.setValue("showScheduleForm",false,{shouldDirty:true});g((0,sB/* .format */.GP)(new Date("".concat(n," ").concat(a)),tp/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H))};(0,u.useEffect)(()=>{if(c&&h){e.setFocus("schedule_date")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[h,c]);return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.scheduleOptions,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"isScheduleEnabled",control:e.control,render:t=>/*#__PURE__*/(0,d/* .jsx */.Y)(rJ,(0,l._)((0,s._)({},t),{label:(0,m.__)("Schedule","tutor-pro"),onChange:t=>{if(!t&&n&&a){e.setValue("showScheduleForm",false,{shouldDirty:true})}}}))}),c&&h&&/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.formWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:k/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"schedule_date",control:e.control,rules:{required:(0,m.__)("Schedule date is required.","tutor-pro"),validate:{invalidDateRule:r3,futureDate:e=>{if((0,nU/* .isBefore */.Y)(new Date("".concat(e)),(0,nG/* .startOfDay */.o)(new Date))){return(0,m.__)("Schedule date should be in the future.","tutor-pro")}return true}}},render:t=>/*#__PURE__*/(0,d/* .jsx */.Y)(s_,(0,l._)((0,s._)({},t),{isClearable:false,placeholder:(0,m.__)("Select date","tutor-pro"),disabledBefore:(0,sB/* .format */.GP)(new Date,tp/* .DateFormats.yearMonthDay */.UA.yearMonthDay),onChange:()=>{e.setFocus("schedule_time")},dateFormat:tp/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"schedule_time",control:e.control,rules:{required:(0,m.__)("Schedule time is required.","tutor-pro"),validate:{invalidTimeRule:r8,futureDate:t=>{if((0,nU/* .isBefore */.Y)(new Date("".concat(e.watch("schedule_date")," ").concat(t)),new Date)){return(0,m.__)("Schedule time should be in the future.","tutor-pro")}return true}}},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(sM,(0,l._)((0,s._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.scheduleButtonsWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"tertiary",size:"small",onClick:y,disabled:!n&&!a||(0,vA/* .isValid */.f)(new Date("".concat(n," ").concat(a)))&&vD(new Date("".concat(n," ").concat(a)),new Date(v)),children:(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"secondary",size:"small",onClick:e.handleSubmit(x),disabled:!n||!a,children:(0,m.__)("Ok","tutor-pro")})]})]}),c&&!h&&/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.scheduleInfoWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.scheduledFor,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vE.scheduleLabel,children:(0,m.__)("Scheduled for","tutor-pro")}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vE.scheduleInfoButtons,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:k/* .styleUtils.actionButton */.x.actionButton,onClick:b,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"delete",width:24,height:24})}),/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:k/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e.setValue("showScheduleForm",true,{shouldDirty:true})},children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"edit",width:24,height:24})})]})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:n&&a&&(0,vA/* .isValid */.f)(new Date("".concat(n," ").concat(a))),children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vE.scheduleInfo,children:(0,m.sprintf)((0,m.__)("%1$s at %2$s","tutor-pro"),(0,sB/* .format */.GP)((0,vk/* .parseISO */.H)(n),tp/* .DateFormats.monthDayYear */.UA.monthDayYear),a)})})]})]})};/* export default */const vM=vS;var vE={scheduleOptions:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["12"] */.YK["12"],";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["8"] */.Vq["8"],";gap:",x/* .spacing["8"] */.YK["8"],";background-color:",x/* .colorTokens.bg.white */.I6.bg.white,";"),formWrapper:/*#__PURE__*/(0,h/* .css */.AH)("margin-top:",x/* .spacing["16"] */.YK["16"],";"),scheduleButtonsWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;gap:",x/* .spacing["12"] */.YK["12"],";margin-top:",x/* .spacing["8"] */.YK["8"],";button{width:100%;span{justify-content:center;}}"),scheduleInfoWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";margin-top:",x/* .spacing["12"] */.YK["12"],";"),scheduledFor:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),scheduleLabel:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";"),scheduleInfoButtons:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["8"] */.YK["8"],";"),scheduleInfo:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";background-color:",x/* .colorTokens.background.status.processing */.I6.background.status.processing,";padding:",x/* .spacing["8"] */.YK["8"],";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";text-align:center;")};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/BundleSidebar.tsx
var vF,vH;var vT=(0,sF/* .getBundleId */.w)();var vK=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var vO=((vF=rT/* .tutorConfig.settings */.P.settings)===null||vF===void 0?void 0:vF.chatgpt_enable)==="on";var vN=(0,Y/* .isAddonEnabled */.GR)(tp/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((vH=rT/* .tutorConfig.settings */.P.settings)===null||vH===void 0?void 0:vH.membership_only_mode);var vP=[{label:(0,m.__)("Show Discount % Off","tutor-pro"),value:"in_percentage"},{label:(0,m.sprintf)((0,m.__)("Show Discount Amount (%s)","tutor-pro"),rT/* .tutorConfig.tutor_currency.symbol */.P.tutor_currency.symbol),value:"in_amount"},{label:(0,m.__)("Show None","tutor-pro"),value:"none"}];var vL=()=>{var e=(0,p/* .useFormContext */.xW)();var t=(0,g/* .useIsFetching */.C)({queryKey:["CourseBundle",vT]});var r=e.watch("details.authors");var n=e.watch("post_modified");var o=e.watch("visibility");return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vB.sidebar,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vB.statusAndDate,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"visibility",control:e.control,render:r=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,l._)((0,s._)({},r),{label:(0,m.__)("Visibility","tutor-pro"),placeholder:(0,m.__)("Select visibility status","tutor-pro"),options:tp/* .visibilityStatusOptions */.tv,leftIcon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"eye",width:32,height:32}),loading:!!t&&!r.field.value,onChange:()=>{e.setValue("post_password","")}}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vB.updatedOn,children:(0,m.sprintf)((0,m.__)("Last updated on %s","tutor-pro"),(0,sB/* .format */.GP)(new Date(e),tp/* .DateFormats.dayMonthYear */.UA.dayMonthYear)||"")})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:o==="password_protected",children:/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"post_password",control:e.control,rules:{required:(0,m.__)("Password is required","tutor-pro")},render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,l._)((0,s._)({},e),{label:(0,m.__)("Password","tutor-pro"),placeholder:(0,m.__)("Enter password","tutor-pro"),type:"password",isPassword:true,loading:!!t&&!e.field.value}))})}),/*#__PURE__*/(0,d/* .jsx */.Y)(vM,{}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"thumbnail",control:e.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(df,(0,l._)((0,s._)({},e),{label:(0,m.__)("Featured Image","tutor-pro"),buttonText:(0,m.__)("Upload Thumbnail","tutor-pro"),infoText:(0,m.sprintf)((0,m.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor-pro"),rT/* .tutorConfig.max_upload_size */.P.max_upload_size),generateWithAi:!vK||vO,loading:!!t&&!e.field.value}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!vN,children:/*#__PURE__*/(0,d/* .jsx */.Y)(vh,{})}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"ribbon_type",control:e.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(tq,(0,l._)((0,s._)({},e),{label:(0,m.__)("Select Ribbon to Display","tutor-pro"),placeholder:(0,m.__)("Select ribbon","tutor-pro"),options:vP,loading:!!t&&!e.field.value}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"details.categories",control:e.control,render:e=>{var r;return/*#__PURE__*/(0,d/* .jsx */.Y)(l5,(0,l._)((0,s._)({},e),{field:(0,l._)((0,s._)({},e.field),{value:(r=e.field.value)===null||r===void 0?void 0:r.map(e=>e.term_id)}),label:(0,m.__)("Categories","tutor-pro"),disabled:true,loading:!!t&&!e.field.value}))}}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:r.length>0,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vB.labelWithContent,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{children:(0,m.__)("Instructors","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vB.instructorsWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:r,children:e=>/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vB.instructor,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:e.avatar_url,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{"data-avatar":true,children:e.display_name.charAt(0).toUpperCase()}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:e.avatar_url,alt:e.display_name,"data-avatar":true})}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{"data-name":"instructor-name",children:e.display_name}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{"data-name":"instructor-email",children:e.user_email})]})]},e.user_id)})})]})})]})};/* export default */const vR=vL;var vB={sidebar:/*#__PURE__*/(0,h/* .css */.AH)("border-left:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - ",x/* .headerHeight */.$A,"px);padding-left:",x/* .spacing["32"] */.YK["32"],";padding-block:",x/* .spacing["24"] */.YK["24"],";display:flex;flex-direction:column;gap:",x/* .spacing["16"] */.YK["16"],";",x/* .Breakpoint.smallTablet */.EA.smallTablet,"{border-left:none;border-top:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding-block:",x/* .spacing["16"] */.YK["16"],";padding-left:0;}"),statusAndDate:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["4"] */.YK["4"],";"),updatedOn:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.hints */.I6.text.hints,";"),priceRadioGroup:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",x/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:flex-start;gap:",x/* .spacing["16"] */.YK["16"],";"),labelWithContent:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["4"] */.YK["4"],";label{",A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.title */.I6.text.title,";}"),categoriesWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";gap:",x/* .spacing["8"] */.YK["8"],";"),category:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["8"] */.YK["8"],";border-radius:",x/* .borderRadius["24"] */.Vq["24"],";background-color:",x/* .colorTokens.surface.wordpress */.I6.surface.wordpress,";",A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.title */.I6.text.title,";"),instructorsWrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["8"] */.YK["8"],";"),instructor:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",x/* .spacing["10"] */.YK["10"],";padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["12"] */.YK["12"],";border-radius:",x/* .borderRadius["4"] */.Vq["4"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";[data-avatar]{width:40px;height:40px;",k/* .styleUtils.flexCenter */.x.flexCenter(),";border-radius:",x/* .borderRadius.circle */.Vq.circle,";border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";background-color:",x/* .colorTokens.background["default"] */.I6.background["default"],";}[data-name='instructor-name']{",A/* .typography.caption */.I.caption("medium"),";}[data-name='instructor-email']{",A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Box.tsx
var vz=r(7615);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/CourseSelectionHeader.tsx
var vV=e=>{var{onAddCourse:t,selectedCourses:r}=e;return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vj.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vj.left,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:A/* .typography.body */.I.body("medium"),children:(0,m.sprintf)((0,m._n)("%d Course selected","%d Courses selected",r.length,"tutor-pro"),r.length)})}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{"data-cy":"add-course",variant:"secondary",isOutlined:true,icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:24}),buttonCss:vj.addCourseButton,onClick:t,children:(0,m.__)("Add Courses","tutor-pro")})]})};/* export default */const vW=vV;var vj={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;padding:0 ",x/* .spacing["12"] */.YK["12"]," ",x/* .spacing["12"] */.YK["12"]," ",x/* .spacing["20"] */.YK["20"],";border-bottom:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";"),left:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";"),addCourseButton:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["24"] */.YK["24"],";box-shadow:inset 0px 0px 0px 1px ",x/* .colorTokens.stroke.border */.I6.stroke.border,";&:hover{box-shadow:inset 0px 0px 0px 1px ",x/* .colorTokens.stroke.border */.I6.stroke.border,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/ConfirmationPopover.tsx
function vq(){var e=(0,M._)(["\n      button:last-of-type {\n        color: ",";\n      }\n    "]);vq=function t(){return e};return e}var vU=e=>{var{placement:t,triggerRef:r,isOpen:n,title:o,message:a,onConfirmation:i,onCancel:s,isLoading:l=false,gap:c,maxWidth:u,closePopover:f,animationType:p=tY/* .AnimationType.slideLeft */.J6.slideLeft,arrow:h=false,confirmButton:v,cancelButton:g,positionModifier:b}=e;var y,w,x,A,k;return/*#__PURE__*/(0,d/* .jsx */.Y)(tD/* ["default"] */.A,{triggerRef:r,isOpen:n,arrow:h,placement:t,closePopover:f,animationType:p,maxWidth:u,positionModifier:b,gap:c,children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vQ.content,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vQ.body,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:vQ.title,children:o}),/*#__PURE__*/(0,d/* .jsx */.Y)("p",{css:vQ.description,children:a})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:vQ.footer({isDelete:(y=v===null||v===void 0?void 0:v.isDelete)!==null&&y!==void 0?y:false}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:(w=g===null||g===void 0?void 0:g.variant)!==null&&w!==void 0?w:"text",size:"small",onClick:s!==null&&s!==void 0?s:f,children:(x=g===null||g===void 0?void 0:g.text)!==null&&x!==void 0?x:(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{"data-cy":"confirm-button",variant:(A=v===null||v===void 0?void 0:v.variant)!==null&&A!==void 0?A:"text",onClick:()=>{i();f()},loading:l,size:"small",children:(k=v===null||v===void 0?void 0:v.text)!==null&&k!==void 0?k:(0,m.__)("Ok","tutor-pro")})]})]})})};/* export default */const vG=vU;var vQ={content:/*#__PURE__*/(0,h/* .css */.AH)("background-color:",x/* .colorTokens.surface.tutor */.I6.surface.tutor,";box-shadow:",x/* .shadow.popover */.r7.popover,";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";::-webkit-scrollbar{background-color:",x/* .colorTokens.surface.tutor */.I6.surface.tutor,";width:10px;}::-webkit-scrollbar-thumb{background-color:",x/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";}"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small("medium"),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";"),description:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.small */.I.small(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";"),body:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["20"] */.YK["20"]," ",x/* .spacing["12"] */.YK["12"],";",k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["8"] */.YK["8"],";"),footer:e=>{var{isDelete:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["8"] */.YK["8"],";justify-content:end;gap:",x/* .spacing["10"] */.YK["10"],";",t&&(0,h/* .css */.AH)(vq(),x/* .colorTokens.text.error */.I6.text.error))}};// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/services/bundle.ts
var v$=r(7419);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/CourseItem.tsx
function vZ(){var e=(0,c._)(["\n      box-shadow: ",";\n      border-bottom: none;\n      border-radius: ",";\n      background-color: ",";\n      cursor: grabbing;\n    "]);vZ=function t(){return e};return e}var vX=(0,sF/* .getBundleId */.w)();var vJ=e=>{var{course:t,index:r,isOverlay:n}=e;var{attributes:o,listeners:a,setNodeRef:c,transform:f,transition:h,isDragging:v}=pj({id:t.id});var g=(0,p/* .useFormContext */.xW)();var b=(0,u.useRef)(null);var[y,A]=(0,u.useState)(false);var I=(0,v$/* .useAddRemoveCourseToBundleMutation */.YH)();var D={transform:d6.Transform.toString(f),transition:h,opacity:v?.3:1,background:v?x/* .colorTokens.stroke.hover */.I6.stroke.hover:undefined};var C=e=>(0,i._)(function*(){var t=yield I.mutateAsync({ID:vX,course_ids:[e],user_action:"remove_course"});if(t.data){g.setValue("details",t.data);A(false)}})();return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",(0,l._)((0,s._)({},o),{ref:c,style:D,css:v1.wrapper({isOverlay:n}),children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:v1.left,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",(0,l._)((0,s._)({},a),{"data-drag-button":true,css:k/* .styleUtils.resetButton */.x.resetButton,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"dragVertical",width:24,height:24})})),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-index":true,children:r}),/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:t.image,alt:t.title}),/*#__PURE__*/(0,d/* .jsx */.Y)("p",{children:t.title})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:v1.right,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:t.is_purchasable,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-price":true,css:v1.price({hasSalePrice:false}),children:(0,m.__)("Free","tutor-pro")}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:t.sale_price,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-price":true,css:v1.price({hasSalePrice:false}),children:t.regular_price}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-price":true,css:v1.price({hasSalePrice:true}),children:t.regular_price}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{"data-price":true,css:v1.price({hasSalePrice:false}),children:t.sale_price})]})}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{variant:"text","data-cy":"remove-course","data-remove-bundle-course":true,onClick:()=>A(true),loading:I.isPending,ref:b,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"cross",width:24,height:24})})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(vG,{isOpen:y,triggerRef:b,closePopover:Y/* .noop */.lQ,maxWidth:"258px",title:(0,m.__)("Remove course","tutor-pro"),message:(0,m.__)("Are you sure you want to remove this course?","tutor-pro"),animationType:tY/* .AnimationType.slideUp */.J6.slideUp,isLoading:I.isPending,confirmButton:{text:(0,m.__)("Remove","tutor-pro"),variant:"text",isDelete:true},cancelButton:{text:(0,m.__)("Cancel","tutor-pro"),variant:"text"},onConfirmation:()=>{C(t.id)},onCancel:()=>{A(false)}})]}))};/* export default */const v0=vJ;var v1={wrapper:e=>{var{isOverlay:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;padding:",x/* .spacing["16"] */.YK["16"]," ",x/* .spacing["20"] */.YK["20"],";border-bottom:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";gap:",x/* .spacing["28"] */.YK["28"],";background-color:",x/* .colorTokens.background.white */.I6.background.white,";[data-drag-button]{cursor:grab;display:none;color:",x/* .colorTokens.icon.hints */.I6.icon.hints,";}[data-remove-bundle-course]{display:none;color:",x/* .colorTokens.color.black["50"] */.I6.color.black["50"],";padding:",x/* .spacing["4"] */.YK["4"],";box-shadow:none;transition:color 0.3s ease-in-out;}",t&&(0,h/* .css */.AH)(vZ(),x/* .shadow.drag */.r7.drag,x/* .borderRadius.card */.Vq.card,x/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",x/* .colorTokens.background.hover */.I6.background.hover,";[data-index],[data-price]{display:none;}[data-drag-button],[data-remove-bundle-course]{display:block;}}")},left:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",x/* .spacing["16"] */.YK["16"],";img{width:76px;height:",x/* .spacing["48"] */.YK["48"],";object-fit:cover;object-position:center;border-radius:",x/* .borderRadius["2"] */.Vq["2"],";flex-shrink:0;}p,span{",A/* .typography.caption */.I.caption(),";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(2),";}span{flex-shrink:0;width:",x/* .spacing["24"] */.YK["24"],";",k/* .styleUtils.flexCenter */.x.flexCenter(),";}"),right:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:flex-end;flex-shrink:0;max-width:120px;width:100%;gap:",x/* .spacing["8"] */.YK["8"],";position:relative;"),price:e=>{var{hasSalePrice:t=false}=e;return/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",t?x/* .colorTokens.text.subdued */.I6.text.subdued:x/* .colorTokens.text.primary */.I6.text.primary,";text-decoration:",t?"line-through":"none",";")}};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/SelectedCourseList.tsx
var v6=e=>{var{courses:t,onSort:r}=e;var[n,o]=(0,u.useState)(null);var a=(0,u.useMemo)(()=>{return t.find(e=>e.id===n)},[n,t]);var i=ul(us(fn,{activationConstraint:{distance:10}}),us(u7,{coordinateGetter:pQ}));return/*#__PURE__*/(0,d/* .jsxs */.FD)(f0,{sensors:i,collisionDetection:um,measuring:h0,modifiers:[py],onDragStart:e=>{o(e.active.id)},onDragEnd:e=>{var{active:n,over:a}=e;if(!a||n.id===a.id){o(null);return}var i=t.findIndex(e=>e.id===n.id);var s=t.findIndex(e=>e.id===a.id);r(i,s)},children:[/*#__PURE__*/(0,d/* .jsx */.Y)(pN,{items:t,strategy:pH,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tw/* ["default"] */.A,{each:t,children:(e,t)=>/*#__PURE__*/(0,d/* .jsx */.Y)(v0,{course:e,index:t+1},e.id)})}),/*#__PURE__*/(0,dM.createPortal)(/*#__PURE__*/(0,d/* .jsx */.Y)(pf,{children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:a,children:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(v0,{course:e,index:0,isOverlay:true})})}),document.body)]})};/* export default */const v2=v6;// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/SelectionOverview.tsx
var v4=()=>{var e=(0,p/* .useFormContext */.xW)();var t=e.watch("details.overview");var r={total_duration:"clock",total_quizzes:"questionCircle",total_video_contents:"videoCamera",total_resources:"download"};var n={total_duration:(0,m.__)("Total Duration","tutor-pro"),total_quizzes:(0,m.__)("Quiz Papers","tutor-pro"),total_video_contents:(0,m.__)("Lesson Content","tutor-pro"),total_resources:(0,m.__)("Downloadable Resources","tutor-pro")};return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:v5.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:v5.title,children:(0,m.__)("Selection Overview","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:v5.overview,children:Object.keys(r).map(e=>{var o=t[e];return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:v5.overviewItem,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:r[e],width:32,height:32}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e==="total_duration"?String(o).replace(/:\d{2}$/,""):o}),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:n[e]})]},e)})})]})};/* export default */const v3=v4;var v5={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["12"] */.YK["12"]," ",x/* .spacing["20"] */.YK["20"]," 0 ",x/* .spacing["20"] */.YK["20"],";"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body("medium"),";padding-bottom:",x/* .spacing["12"] */.YK["12"],";"),overview:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 1fr;gap:",x/* .spacing["4"] */.YK["4"],";"),overviewItem:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex(),";gap:",x/* .spacing["8"] */.YK["8"],";align-items:center;",A/* .typography.caption */.I.caption(),";svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;}span:first-of-type:not(:only-of-type){font-weight:",x/* .fontWeight.semiBold */.Wy.semiBold,";flex-shrink:0;}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePaginatedTable.ts
var v8=function(){var{limit:e=tp/* .ITEMS_PER_PAGE */.re}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var[t,r]=(0,u.useState)({page:1,sortProperty:"",sortDirection:undefined,filter:{}});var n=t;var o=e*Math.max(0,n.page-1);var a=(0,u.useCallback)(e=>{r(t=>(0,b._)({},t,e))},[r]);var i=e=>a({page:e});var s=(0,u.useCallback)(e=>a({page:1,filter:e}),[a]);var l=e=>{var t={};if(e!==n.sortProperty){t={sortDirection:"asc",sortProperty:e}}else{t={sortDirection:n.sortDirection==="asc"?"desc":"asc",sortProperty:e}}a(t)};return{pageInfo:n,onPageChange:i,onColumnSort:l,offset:o,itemsPerPage:e,onFilterItems:s}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/Paginator.tsx
var v7=e=>{var{currentPage:t,onPageChange:r,totalItems:n,itemsPerPage:o}=e;var a=Math.max(Math.ceil(n/o),1);var[i,s]=(0,u.useState)("");(0,u.useEffect)(()=>{s(t.toString())},[t]);var l=e=>{if(e<1||e>a){return}r(e)};return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:ge.wrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:ge.pageStatus,children:[(0,m.__)("Page","tutor-pro"),/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,d/* .jsx */.Y)("input",{type:"text",css:ge.paginationInput,value:i,onChange:e=>{var{value:t}=e.currentTarget;var n=t.replace(/[^0-9]/g,"");var o=Number(n);if(o>0&&o<=a){s(n);r(o)}else if(!n){s(n)}},autoComplete:"off"})}),(0,m.__)("of","tutor-pro")," ",/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:a})]}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:ge.pageController,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:ge.paginationButton,onClick:()=>l(t-1),disabled:t===1,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:!tp/* .isRTL */.V8?"chevronLeft":"chevronRight",width:32,height:32})}),/*#__PURE__*/(0,d/* .jsx */.Y)("button",{type:"button",css:ge.paginationButton,onClick:()=>l(t+1),disabled:t===a,children:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:!tp/* .isRTL */.V8?"chevronRight":"chevronLeft",width:32,height:32})})]})]})};/* export default */const v9=v7;var ge={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;justify-content:end;align-items:center;flex-wrap:wrap;gap:",x/* .spacing["8"] */.YK["8"],";height:36px;"),pageStatus:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),"    color:",x/* .colorTokens.text.title */.I6.text.title,";min-width:100px;"),paginationInput:/*#__PURE__*/(0,h/* .css */.AH)("outline:0;border:1px solid ",x/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";margin:0 ",x/* .spacing["8"] */.YK["8"],";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";padding:8px 12px;width:72px;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:",x/* .spacing["0"] */.YK["0"],";}&[type='number']{-moz-appearance:textfield;}"),pageController:/*#__PURE__*/(0,h/* .css */.AH)("gap:",x/* .spacing["8"] */.YK["8"],";display:flex;justify-content:center;align-items:center;height:100%;"),paginationButton:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";background:",x/* .colorTokens.background.white */.I6.background.white,";color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",x/* .borderRadius["6"] */.Vq["6"],";height:32px;width:32px;display:grid;place-items:center;transition:background-color 0.2s ease-in-out,color 0.3s ease-in-out;svg{color:",x/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background:",x/* .colorTokens.background["default"] */.I6.background["default"],";& > svg{color:",x/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:disabled{background:",x/* .colorTokens.background.white */.I6.background.white,";& > svg{color:",x/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/Table.tsx
function gt(){var e=(0,M._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);gt=function t(){return e};return e}function gr(){var e=(0,M._)(["\n      border-bottom: 1px solid ",";\n    "]);gr=function t(){return e};return e}function gn(){var e=(0,M._)(["\n      &:nth-of-type(even) {\n        background-color: ",";\n      }\n    "]);gn=function t(){return e};return e}function go(){var e=(0,M._)(["\n        background-color: ",";\n      "]);go=function t(){return e};return e}function ga(){var e=(0,M._)(["\n        background-color: ",";\n      "]);ga=function t(){return e};return e}function gi(){var e=(0,M._)(["\n        :last-of-type {\n          border-bottom: none;\n        }\n      "]);gi=function t(){return e};return e}var gs={bodyRowSelected:x/* .colorTokens.background.active */.I6.background.active,bodyRowHover:x/* .colorTokens.background.hover */.I6.background.hover};var gl=e=>{var{columns:t,data:r,entireHeader:n=null,headerHeight:o=60,noHeader:a=false,isStriped:i=false,isRounded:s=false,stripedBySelectedIndex:l=[],colors:c={},isBordered:u=true,loading:f=false,itemsPerPage:p=1,querySortProperties:v,querySortDirections:g={},onSortClick:m,renderInLastRow:b,rowStyle:y,sortIcons:_={asc:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"sortAsc",height:16,width:16}),desc:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"sortDesc",height:16,width:16})}}=e;var x=(e,r)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("tr",{css:[gd.tableRow({isBordered:u,isStriped:i}),gd.bodyTr({colors:c,isSelected:l.includes(e),isRounded:s}),y],children:t.map((e,t)=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("td",{css:[gd.td,{width:e.width}],children:r(e)},t)})},e)};var A=e=>{var t=null;var r=e.sortProperty;if(!r){return e.Header}if(v===null||v===void 0?void 0:v.includes(r)){if((g===null||g===void 0?void 0:g[r])==="asc"){t=_.asc}else{t=_.desc}}return/*#__PURE__*/(0,d/* .jsxs */.FD)("button",{type:"button",css:gd.headerWithIcon,onClick:()=>m===null||m===void 0?void 0:m(r),children:[e.Header,t&&t]})};var k=()=>{if(n){return/*#__PURE__*/(0,d/* .jsx */.Y)("th",{css:gd.th,colSpan:t.length,children:n})}return t.map((e,t)=>{if(e.Header!==null){return/*#__PURE__*/(0,d/* .jsx */.Y)("th",{css:[gd.th,e.css,{width:e.width}],colSpan:e.headerColSpan,children:A(e)},t)}})};var I=()=>{if(f){return(0,Y/* .range */.y1)(p).map(e=>x(e,()=>/*#__PURE__*/(0,d/* .jsx */.Y)(t2,{animation:true,height:20,width:"".concat((0,Y/* .getRandom */.G0)(40,80),"%")})))}if(!r.length){return/*#__PURE__*/(0,d/* .jsx */.Y)("tr",{css:gd.tableRow({isBordered:false,isStriped:false}),children:/*#__PURE__*/(0,d/* .jsx */.Y)("td",{colSpan:t.length,css:[gd.td,/*#__PURE__*/(0,h/* .css */.AH)("text-align:center;")],children:"No Data!"})})}var e=r.map((e,t)=>{return x(t,r=>{return"Cell"in r?r.Cell(e,t):r.accessor(e,t)})});if(b){b=/*#__PURE__*/(0,d/* .jsx */.Y)("tr",{children:/*#__PURE__*/(0,d/* .jsx */.Y)("td",{css:gd.td,children:b})},e.length);e.push(b)}return e};return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gd.tableContainer({isRounded:s}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("table",{css:gd.table,children:[!a&&/*#__PURE__*/(0,d/* .jsx */.Y)("thead",{children:/*#__PURE__*/(0,d/* .jsx */.Y)("tr",{css:[gd.tableRow({isBordered:u,isStriped:i}),{height:o}],children:k()})}),/*#__PURE__*/(0,d/* .jsx */.Y)("tbody",{children:I()})]})})};/* export default */const gc=gl;var gd={tableContainer:e=>{var{isRounded:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("display:block;width:100%;overflow-x:auto;",t&&(0,h/* .css */.AH)(gt(),x/* .colorTokens.stroke.divider */.I6.stroke.divider,x/* .borderRadius["6"] */.Vq["6"]))},headerWithIcon:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";",A/* .typography.body */.I.body(),";color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;gap:",x/* .spacing["8"] */.YK["8"],";align-items:center;svg{color:",x/* .colorTokens.text.primary */.I6.text.primary,";}"),table:/*#__PURE__*/(0,h/* .css */.AH)("width:100%;border-collapse:collapse;border:none;"),tableRow:e=>{var{isBordered:t,isStriped:r}=e;return/*#__PURE__*/(0,h/* .css */.AH)(t&&(0,h/* .css */.AH)(gr(),x/* .colorTokens.stroke.divider */.I6.stroke.divider)," ",r&&(0,h/* .css */.AH)(gn(),x/* .colorTokens.background.active */.I6.background.active))},th:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";background-color:",x/* .colorTokens.background.white */.I6.background.white,";color:",x/* .colorTokens.text.primary */.I6.text.primary,";padding:0 ",x/* .spacing["16"] */.YK["16"],";border:none;"),bodyTr:e=>{var{colors:t,isSelected:r,isRounded:n}=e;var{bodyRowDefault:o,bodyRowSelectedHover:a,bodyRowHover:i=gs.bodyRowHover,bodyRowSelected:s=gs.bodyRowSelected}=t;return/*#__PURE__*/(0,h/* .css */.AH)(o&&(0,h/* .css */.AH)(go(),o),"      &:hover{background-color:",r&&a?a:i,";}",r&&(0,h/* .css */.AH)(ga(),s)," ",n&&(0,h/* .css */.AH)(gi()))},td:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";padding:",x/* .spacing["16"] */.YK["16"],";border:none;")};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/modals/CourseListModal/SearchField.tsx
var gu=e=>{var{onFilterItems:t}=e;var r=t9({defaultValues:{search:""}});var n=lj(r.watch("search"));(0,u.useEffect)(()=>{t((0,s._)({},n.length>0&&{search:n}))},[t,n]);return/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{control:r.control,name:"search",render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(dC,(0,l._)((0,s._)({},e),{content:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"search",width:24,height:24}),placeholder:(0,m.__)("Search...","tutor-pro"),showVerticalBar:false}))})};/* export default */const gf=gu;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/course-placeholder.png
const gp=r.p+"images/course-placeholder-3ae4bdaf.png";// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/modals/CourseListModal/CourseListTable.tsx
var gh=e=>{var{form:t,addedCourseIds:r}=e;var n,o;var a=t.watch("courses")||[];var{pageInfo:i,onPageChange:s,itemsPerPage:l,offset:c,onFilterItems:u}=v8();var f=nB({params:{offset:c,limit:l,filter:i.filter,exclude:r},isEnabled:true});var p;var h=(0,sF/* .fixWCMonetizationFormat */.o)((p=(n=f.data)===null||n===void 0?void 0:n.results)!==null&&p!==void 0?p:[]);function v(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var r=a.map(e=>e.id);var n=h.map(e=>e.id);if(e){var o=h.filter(e=>!r.includes(e.id));t.setValue("courses",[...a,...o]);return}var i=a.filter(e=>!n.includes(e.id));t.setValue("courses",i)}function g(){return h.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((o=f.data)===null||o===void 0?void 0:o.results.length)?/*#__PURE__*/(0,d/* .jsx */.Y)(lW/* ["default"] */.A,{onChange:v,checked:f.isLoading||f.isRefetching?false:g(),label:(0,m.__)("Name","tutor-pro"),labelCss:gg.checkboxLabel,"data-cy":"select-all-courses"}):"#",Cell:e=>{return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gg.checkboxWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(lW/* ["default"] */.A,{onChange:()=>{var r=a.filter(t=>t.id!==e.id);var n=(r===null||r===void 0?void 0:r.length)===a.length;if(n){t.setValue("courses",[...r,e])}else{t.setValue("courses",r)}},checked:a.map(e=>e.id).includes(e.id),"data-cy":"select-course"}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gg.courseItemWrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:e.image||gp,css:gg.thumbnail,alt:(0,m.__)("Course item","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.title,children:e.title})]})]})}},{Header:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.tablePriceLabel,children:(0,m.__)("Price","tutor-pro")}),Cell:e=>{return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.priceWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.price,children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:e.is_purchasable,fallback:(0,m.__)("Free","tutor-pro"),children:[/*#__PURE__*/(0,d/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,d/* .jsx */.Y)("span",{css:gg.discountPrice,children:e.regular_price})]})})})}}];if(f.isLoading){return/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingSection */.YE,{})}if(!f.data){return/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.errorMessage,children:(0,m.__)("Something went wrong","tutor-pro")})}var y;return/*#__PURE__*/(0,d/* .jsxs */.FD)(d/* .Fragment */.FK,{children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.tableActions,children:/*#__PURE__*/(0,d/* .jsx */.Y)(gf,{onFilterItems:u})}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.tableWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(gc,{columns:b,data:(y=f.data.results)!==null&&y!==void 0?y:[],itemsPerPage:l,loading:f.isFetching||f.isRefetching})}),/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gg.paginatorWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(v9,{currentPage:i.page,onPageChange:s,totalItems:f.data.total_items,itemsPerPage:l})})]})};/* export default */const gv=gh;var gg={tableLabel:/*#__PURE__*/(0,h/* .css */.AH)("text-align:left;"),tablePriceLabel:/*#__PURE__*/(0,h/* .css */.AH)("text-align:right;"),tableActions:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,h/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),checkboxWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["12"] */.YK["12"],";"),checkboxLabel:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.body */.I.body(),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";"),paginatorWrapper:/*#__PURE__*/(0,h/* .css */.AH)("margin:",x/* .spacing["20"] */.YK["20"]," ",x/* .spacing["16"] */.YK["16"],";"),courseItemWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;align-items:center;gap:",x/* .spacing["16"] */.YK["16"],";"),bundleBadge:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.tiny */.I.tiny(),";display:inline-block;padding:0px ",x/* .spacing["8"] */.YK["8"],";background-color:#9342e7;color:",x/* .colorTokens.text.white */.I6.text.white,";border-radius:",x/* .borderRadius["40"] */.Vq["40"],";"),subscriptionBadge:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.tiny */.I.tiny(),";display:flex;align-items:center;width:fit-content;padding:0px ",x/* .spacing["6"] */.YK["6"]," 0px ",x/* .spacing["4"] */.YK["4"],";background-color:",x/* .colorTokens.color.warning["90"] */.I6.color.warning["90"],";color:",x/* .colorTokens.text.white */.I6.text.white,";border-radius:",x/* .borderRadius["40"] */.Vq["40"],";"),selectedBadge:/*#__PURE__*/(0,h/* .css */.AH)("margin-left:",x/* .spacing["4"] */.YK["4"],";",A/* .typography.tiny */.I.tiny(),";padding:",x/* .spacing["4"] */.YK["4"]," ",x/* .spacing["8"] */.YK["8"],";background-color:",x/* .colorTokens.background.disable */.I6.background.disable,";color:",x/* .colorTokens.text.title */.I6.text.title,";border-radius:",x/* .borderRadius["2"] */.Vq["2"],";white-space:nowrap;"),title:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";color:",x/* .colorTokens.text.primary */.I6.text.primary,";",k/* .styleUtils.text.ellipsis */.x.text.ellipsis(2),";text-wrap:pretty;"),thumbnail:/*#__PURE__*/(0,h/* .css */.AH)("width:76px;height:48px;border-radius:",x/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),priceWrapper:/*#__PURE__*/(0,h/* .css */.AH)("min-width:200px;text-align:right;[data-button]{display:none;}"),price:/*#__PURE__*/(0,h/* .css */.AH)(A/* .typography.caption */.I.caption(),";display:flex;gap:",x/* .spacing["4"] */.YK["4"],";justify-content:end;"),startingFrom:/*#__PURE__*/(0,h/* .css */.AH)("color:",x/* .colorTokens.text.hints */.I6.text.hints,";"),discountPrice:/*#__PURE__*/(0,h/* .css */.AH)("text-decoration:line-through;color:",x/* .colorTokens.text.subdued */.I6.text.subdued,";"),errorMessage:/*#__PURE__*/(0,h/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/modals/CourseListModal/index.tsx
var gm=(0,sF/* .getBundleId */.w)();function gb(e){var{title:t,closeModal:r,actions:n,form:o,addedCourseIds:a}=e;var s=(0,p/* .useForm */.mN)({defaultValues:{courses:[]}});var l=s.watch("courses");var c=(0,v$/* .useAddRemoveCourseToBundleMutation */.YH)();function u(){return(0,i._)(function*(){var e=yield c.mutateAsync({ID:gm,course_ids:l.map(e=>e.id),user_action:"add_course"});if(e.data){o.setValue("details",e.data);r({action:"CONFIRM"})}})()}return/*#__PURE__*/(0,d/* .jsxs */.FD)(rC/* ["default"] */.A,{onClose:()=>r({action:"CLOSE"}),title:t,actions:n,maxWidth:720,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(gv,{form:s,addedCourseIds:a}),/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:g_.footer,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{size:"small",variant:"text",onClick:()=>r({action:"CLOSE"}),children:(0,m.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{size:"small",variant:"primary",onClick:u,loading:c.isPending,disabled:l.length===0,"data-cy":"add-selected-courses",children:(0,m.__)("Add","tutor-pro")})]})]})}/* export default */const gy=gb;var g_={footer:/*#__PURE__*/(0,h/* .css */.AH)("box-shadow:0px 1px 0px 0px #e4e5e7 inset;height:56px;display:flex;align-items:center;justify-content:end;gap:",x/* .spacing["16"] */.YK["16"],";padding-inline:",x/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/bundle-empty-state.webp
const gw=r.p+"images/bundle-empty-state-7f831b6a.webp";// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/course-bundle/CourseSelection.tsx
var gx=e=>{var{loading:t}=e;var r=(0,p/* .useFormContext */.xW)();var{showModal:n}=(0,rH/* .useModal */.h)();var{fields:o,move:a}=(0,p/* .useFieldArray */.jz)({control:r.control,name:"details.courses",keyName:"_id"});return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gk.wrapper,"data-cy":"course-selection",children:[/*#__PURE__*/(0,d/* .jsx */.Y)("label",{css:A/* .typography.caption */.I.caption(),children:(0,m.__)("Courses","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(vz/* .Box */.az,{wrapperCss:gk.boxWrapper,children:/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!t,fallback:/*#__PURE__*/(0,d/* .jsx */.Y)(tv/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)(tk/* ["default"] */.A,{when:o.length>0,fallback:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gk.emptyState,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("img",{src:gw,alt:(0,m.__)("Empty State","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)("p",{children:(0,m.__)("No Courses Added Yet","tutor-pro")}),/*#__PURE__*/(0,d/* .jsx */.Y)(_/* ["default"] */.A,{"data-cy":"add-course",variant:"secondary",isOutlined:true,icon:/*#__PURE__*/(0,d/* .jsx */.Y)(w/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:24}),css:gk.addCourseButton,onClick:()=>{n({component:gy,props:{title:(0,m.__)("Select Courses","tutor-pro"),form:r,addedCourseIds:o.map(e=>e.id)}})},children:(0,m.__)("Add Courses","tutor-pro")})]}),children:[/*#__PURE__*/(0,d/* .jsx */.Y)(vW,{onAddCourse:()=>{n({component:gy,props:{title:(0,m.__)("Select Courses","tutor-pro"),form:r,addedCourseIds:o.map(e=>e.id)}})},selectedCourses:o}),/*#__PURE__*/(0,d/* .jsx */.Y)(v2,{courses:(0,sF/* .fixWCMonetizationFormat */.o)(o),onSort:a}),/*#__PURE__*/(0,d/* .jsx */.Y)(v3,{})]})})})]})};/* export default */const gA=gx;var gk={wrapper:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["6"] */.YK["6"],";"),boxWrapper:/*#__PURE__*/(0,h/* .css */.AH)("padding-inline:0;border:1px solid ",x/* .colorTokens.stroke.divider */.I6.stroke.divider,";"),emptyState:/*#__PURE__*/(0,h/* .css */.AH)(k/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",x/* .spacing["12"] */.YK["12"],";align-items:center;padding-block:",x/* .spacing["32"] */.YK["32"],";img{max-width:60px;width:100%;object-fit:contain;object-position:center;}p{",A/* .typography.body */.I.body("medium"),";}"),addCourseButton:/*#__PURE__*/(0,h/* .css */.AH)("padding:",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["8"] */.YK["8"]," ",x/* .spacing["24"] */.YK["24"],";box-shadow:inset 0px 0px 0px 1px ",x/* .colorTokens.stroke.border */.I6.stroke.border,";&:hover{box-shadow:inset 0px 0px 0px 1px ",x/* .colorTokens.stroke.border */.I6.stroke.border,";}")};// EXTERNAL MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/components/layouts/Navigator.tsx
var gY=r(1814);// CONCATENATED MODULE: ./addons/course-bundle/assets/src/js/bundle-builder/pages/BundleBasic.tsx
function gI(){var e=(0,c._)(["\n      z-index: ",";\n    "]);gI=function t(){return e};return e}var gD=(0,sF/* .getBundleId */.w)();var gC=false;var gS=()=>{var e;var t=(0,p/* .useFormContext */.xW)();var r=(0,v/* .useQueryClient */.jE)();var n=(0,v$/* .useSaveCourseBundleMutation */.BT)();var o=r.getQueryData(["CourseBundle",gD]);var a=nV();var[c,f]=(0,u.useState)(false);var h=(0,g/* .useIsFetching */.C)({queryKey:["CourseBundle",gD]});var b=!!rT/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=((e=rT/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var _=t.watch("post_status");var w=t.watch("editor_used");return/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gE.wrapper,children:[/*#__PURE__*/(0,d/* .jsx */.Y)("div",{css:gE.mainForm({isWpEditorFullScreen:c}),children:/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gE.fieldsWrapper,children:[/*#__PURE__*/(0,d/* .jsxs */.FD)("div",{css:gE.titleAndSlug,children:[/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"post_title",control:t.control,rules:(0,s._)({},r6()),render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nh,(0,l._)((0,s._)({},e),{label:(0,m.__)("Title","tutor-pro"),placeholder:(0,m.__)("ex. Learn Photoshop CS6 from scratch","tutor-pro"),isClearable:true,generateWithAi:!b||y,loading:!!h&&!e.field.value,onChange:e=>{if(_==="draft"&&!gC){t.setValue("post_name",(0,Y/* .convertToSlug */.qz)(String(e)),{shouldValidate:true,shouldDirty:true})}}}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"post_name",control:t.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(S,(0,l._)((0,s._)({},e),{label:(0,m.__)("Bundle URL","tutor-pro"),baseURL:"".concat(rT/* .tutorConfig.home_url */.P.home_url,"/course-bundle"),onChange:()=>gC=true}))})]}),/*#__PURE__*/(0,d/* .jsx */.Y)(p/* .Controller */.xI,{name:"post_content",control:t.control,render:e=>/*#__PURE__*/(0,d/* .jsx */.Y)(nO,(0,l._)((0,s._)({},e),{label:(0,m.__)("Description","tutor-pro"),loading:!!h&&!e.field.value,max_height:280,hasCustomEditorSupport:true,editorUsed:w,editors:o===null||o===void 0?void 0:o.editors,generateWithAi:!b||y,onFullScreenChange:e=>{f(e)},onCustomEditorButtonClick:()=>{return t.handleSubmit(e=>{var r=(0,v$/* .convertBundleFormDataToPayload */.r)(e);return n.mutateAsync((0,l._)((0,s._)({ID:gD},r),{post_status:(0,Y/* .determinePostStatus */.q9)(t.getValues("post_status"),t.getValues("visibility"))}))})()},onBackToWPEditorClick:e=>(0,i._)(function*(){return a.mutateAsync({courseId:gD,builder:e}).then(e=>{t.setValue("editor_used",{name:"classic",label:(0,m.__)("Classic Editor","tutor-pro"),link:""});return e})})()}))}),/*#__PURE__*/(0,d/* .jsx */.Y)(sL,{}),/*#__PURE__*/(0,d/* .jsx */.Y)(gA,{loading:!!h&&!t.getValues("details.courses").length}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:tp/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,d/* .jsx */.Y)(gY/* ["default"] */.A,{})})]})}),/*#__PURE__*/(0,d/* .jsx */.Y)(vR,{}),/*#__PURE__*/(0,d/* .jsx */.Y)(tk/* ["default"] */.A,{when:!tp/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,d/* .jsx */.Y)(gY/* ["default"] */.A,{})})]})};/* export default */const gM=gS;var gE={wrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:grid;grid-template-columns:1fr 338px;gap:",x/* .spacing["32"] */.YK["32"],";width:100%;",x/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr;gap:0;}"),mainForm:e=>{var{isWpEditorFullScreen:t}=e;return/*#__PURE__*/(0,h/* .css */.AH)("padding-block:",x/* .spacing["32"] */.YK["32"]," ",x/* .spacing["24"] */.YK["24"],";align-self:start;top:",x/* .headerHeight */.$A,"px;position:sticky;",t&&(0,h/* .css */.AH)(gI(),x/* .zIndex.header */.fE.header+1)," ",x/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding-top:",x/* .spacing["16"] */.YK["16"],";position:unset;}")},fieldsWrapper:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["24"] */.YK["24"],";"),titleAndSlug:/*#__PURE__*/(0,h/* .css */.AH)("display:flex;flex-direction:column;gap:",x/* .spacing["8"] */.YK["8"],";")}},7615:function(e,t,r){r.d(t,{IF:()=>g,M6:()=>m,az:()=>v});/* import */var n=r(690);/* import */var o=r(2025);/* import */var a=r(1594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var s=r(5757);/* import */var l=r(7764);/* import */var c=r(983);/* import */var d=r(6025);/* import */var u=r(4485);/* import */var f=r(3909);function p(){var e=(0,n._)(["\n      border: 1px solid ",";\n    "]);p=function t(){return e};return e}function h(){var e=(0,n._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);h=function t(){return e};return e}var v=/*#__PURE__*/i().forwardRef((e,t)=>{var{children:r,className:n,bordered:a=false,wrapperCss:i}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{ref:t,className:n,css:[b.wrapper(a),i],children:r})});v.displayName="Box";var g=/*#__PURE__*/i().forwardRef((e,t)=>{var{children:r,className:n,separator:a=false,tooltip:i}=e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{ref:t,className:n,css:b.title(a),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:r}),/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{content:i,children:/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{name:"info",width:20,height:20})})})]})});g.displayName="BoxTitle";var m=/*#__PURE__*/i().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{ref:t,className:n,css:b.subtitle,children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:r})})});m.displayName="BoxSubtitle";var b={wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("background-color:",l/* .colorTokens.background.white */.I6.background.white,";border-radius:",l/* .borderRadius["8"] */.Vq["8"],";padding:",l/* .spacing["12"] */.YK["12"]," ",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["20"] */.YK["20"],";",e&&(0,s/* .css */.AH)(p(),l/* .colorTokens.stroke.divider */.I6.stroke.divider)),title:e=>/*#__PURE__*/(0,s/* .css */.AH)(c/* .typography.body */.I.body("medium"),";color:",l/* .colorTokens.text.title */.I6.text.title,";display:flex;gap:",l/* .spacing["4"] */.YK["4"],";align-items:center;",e&&(0,s/* .css */.AH)(h(),l/* .colorTokens.stroke.divider */.I6.stroke.divider,l/* .spacing["12"] */.YK["12"],l/* .spacing["20"] */.YK["20"]),"    & > div{height:20px;svg{color:",l/* .colorTokens.icon.hints */.I6.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,s/* .css */.AH)(c/* .typography.caption */.I.caption(),";color:",l/* .colorTokens.text.hints */.I6.text.hints,";")}},6721:function(e,t,r){r.d(t,{A:()=>w});/* import */var n=r(33);/* import */var o=r(1303);/* import */var a=r(690);/* import */var i=r(2025);/* import */var s=r(1594);/* import */var l=/*#__PURE__*/r.n(s);/* import */var c=r(5757);/* import */var d=r(7764);/* import */var u=r(983);/* import */var f=r(2927);function p(){var e=(0,a._)(["\n      cursor: not-allowed;\n    "]);p=function t(){return e};return e}function h(){var e=(0,a._)(["\n      color: ",";\n    "]);h=function t(){return e};return e}function v(){var e=(0,a._)(["\n        margin-right: ",";\n      "]);v=function t(){return e};return e}function g(){var e=(0,a._)(["\n        background-color: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,a._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);m=function t(){return e};return e}function b(){var e=(0,a._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var y=/*#__PURE__*/l().forwardRef((e,t)=>{var{id:r=(0,f/* .nanoid */.Ak)(),name:a,labelCss:s,inputCss:c,label:d="",checked:u,value:p,disabled:h=false,onChange:v,onBlur:g,isIndeterminate:m=false}=e;var b=e=>{v===null||v===void 0?void 0:v(!m?e.target.checked:true,e)};var y=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/l().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:r,css:[_.container({disabled:h}),s],children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,o._)((0,n._)({},e),{ref:t,id:r,name:a,type:"checkbox",value:p,checked:!!u,disabled:h,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:g,css:[c,_.checkbox({label:!!d,isIndeterminate:m,disabled:h})]})),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:[_.label({isDisabled:h}),s],title:y(d),children:d})]})});var _={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",d/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(p()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(u/* .typography.caption */.I.caption(),";color:",d/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(h(),d/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;display:none !important;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,c/* .css */.AH)(v(),d/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",d/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",d/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",d/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",d/* .borderRadius["4"] */.Vq["4"],";",n&&(0,c/* .css */.AH)(g(),d/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,c/* .css */.AH)(m(),d/* .colorTokens.brand.blue */.I6.brand.blue,d/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,c/* .css */.AH)(b(),d/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",d/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const w=y},7581:function(e,t,r){r.d(t,{A:()=>v});/* import */var n=r(33);/* import */var o=r(1303);/* import */var a=r(2473);/* import */var i=r(2025);/* import */var s=r(5757);/* import */var l=r(6721);/* import */var c=r(4485);/* import */var d=r(3909);/* import */var u=r(7764);/* import */var f=r(983);/* import */var p=r(2147);var h=e=>{var{field:t,fieldState:r,disabled:s,value:u,onChange:f,label:h,description:v,helpText:m,isHidden:b,labelCss:y}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,p=(0,a._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:g.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(l/* ["default"] */.A,(0,o._)((0,n._)({},t,p),{inputCss:r,labelCss:y,value:u,disabled:s,checked:t.value,label:h,onChange:()=>{t.onChange(!t.value);if(f){f(!t.value)}}})),m&&/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{content:m,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(c/* ["default"] */.A,{name:"info",width:20,height:20})})]}),v&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:g.description,children:v})]})}})};/* export default */const v=h;var g={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",u/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,s/* .css */.AH)(f/* .typography.small */.I.small(),"    color:",u/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",u/* .spacing["6"] */.YK["6"],";")}},2147:function(e,t,r){r.d(t,{A:()=>F});/* import */var n=r(690);/* import */var o=r(2025);/* import */var a=r(5757);/* import */var i=r(2470);/* import */var s=/*#__PURE__*/r.n(i);/* import */var l=r(3757);/* import */var c=r(4485);/* import */var d=r(3909);/* import */var u=r(7764);/* import */var f=r(983);/* import */var p=r(6025);/* import */var h=r(4958);/* import */var v=r(8638);/* import */var g=r(2927);function m(){var e=(0,n._)(["\n      opacity: 0.5;\n    "]);m=function t(){return e};return e}function b(){var e=(0,n._)(["\n      display: none;\n    "]);b=function t(){return e};return e}function y(){var e=(0,n._)(["\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      gap: ",";\n    "]);y=function t(){return e};return e}function _(){var e=(0,n._)(["\n        padding: 0 "," 0 ",";\n      "]);_=function t(){return e};return e}function w(){var e=(0,n._)(["\n        border-radius: 0;\n        border: none;\n        box-shadow: none;\n      "]);w=function t(){return e};return e}function x(){var e=(0,n._)(["\n        border-color: transparent;\n      "]);x=function t(){return e};return e}function A(){var e=(0,n._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);A=function t(){return e};return e}function k(){var e=(0,n._)(["\n          border-color: ",";\n        "]);k=function t(){return e};return e}function Y(){var e=(0,n._)(["\n          color: ",";\n        "]);Y=function t(){return e};return e}function I(){var e=(0,n._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);I=function t(){return e};return e}function D(){var e=(0,n._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);D=function t(){return e};return e}function C(){var e=(0,n._)(["\n      justify-content: end;\n    "]);C=function t(){return e};return e}function S(){var e=(0,n._)(["\n      color: ",";\n    "]);S=function t(){return e};return e}function M(){var e=(0,n._)(["\n      ",";\n    "]);M=function t(){return e};return e}var E=e=>{var{field:t,fieldState:r,children:n,disabled:a=false,readOnly:s=false,label:f,isInlineLabel:h=false,variant:m,loading:b,placeholder:y,helpText:_,isHidden:w=false,removeBorder:x=false,characterCount:A,isSecondary:k=false,inputStyle:Y,wrapperCss:I,inputContainerCss:D,onClickAiButton:C,isMagicAi:S=false,generateWithAi:M=false,replaceEntireLabel:E=false}=e;var F;var T=(0,g/* .nanoid */.Ak)();var K=[H.input({variant:m,hasFieldError:!!r.error,removeBorder:x,readOnly:s,hasHelpText:!!_,isSecondary:k,isMagicAi:S})];if((0,v/* .isDefined */.O9)(Y)){K.push(Y)}var O=/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:H.inputWrapper,children:[n({id:T,name:t.name,css:K,"aria-invalid":r.error?"true":"false",disabled:a,readOnly:s,placeholder:y,className:"tutor-input-field"}),b&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:H.loader,children:/*#__PURE__*/(0,o/* .jsx */.Y)(l/* ["default"] */.Ay,{size:20,color:u/* .colorTokens.icon["default"] */.I6.icon["default"]})})]});return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[H.container({disabled:a,isHidden:w}),I],"data-cy":"form-field-wrapper",children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[H.inputContainer(h),D],children:[(f||_)&&/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:H.labelContainer,children:[f&&/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:T,css:H.label(h,E),children:[f,/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{when:M,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",onClick:()=>{C===null||C===void 0?void 0:C()},css:H.aiButton,children:/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),_&&!E&&/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{content:_,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{name:"info",width:20,height:20})})]}),A?/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,{placement:"right",hideOnClick:false,content:A.maxLimit-A.inputCharacter>=0?A.maxLimit-A.inputCharacter:(0,i.__)("Limit exceeded","tutor-pro"),children:O}):O]}),((F=r.error)===null||F===void 0?void 0:F.message)&&/*#__PURE__*/(0,o/* .jsxs */.FD)("p",{css:H.errorLabel(!!r.error,h),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{style:H.alertIcon,name:"info",width:20,height:20})," ",r.error.message]})]})};/* export default */const F=E;var H={container:e=>{var{disabled:t,isHidden:r}=e;return/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;position:relative;background:inherit;width:100%;",t&&(0,a/* .css */.AH)(m())," ",r&&(0,a/* .css */.AH)(b()))},inputContainer:e=>/*#__PURE__*/(0,a/* .css */.AH)("display:flex;flex-direction:column;gap:",u/* .spacing["4"] */.YK["4"],";width:100%;",e&&(0,a/* .css */.AH)(y(),u/* .spacing["12"] */.YK["12"])),input:e=>/*#__PURE__*/(0,a/* .css */.AH)("&.tutor-input-field{",f/* .typography.body */.I.body("regular"),";width:100%;border-radius:",u/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",u/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",u/* .spacing["8"] */.YK["8"]," ",u/* .spacing["16"] */.YK["16"],";color:",u/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;&:not(textarea){height:40px;}",e.hasHelpText&&(0,a/* .css */.AH)(_(),u/* .spacing["32"] */.YK["32"],u/* .spacing["12"] */.YK["12"])," ",e.removeBorder&&(0,a/* .css */.AH)(w())," ",e.isSecondary&&(0,a/* .css */.AH)(x()),":focus{",h/* .styleUtils.inputFocus */.x.inputFocus,";",e.isMagicAi&&(0,a/* .css */.AH)(A(),u/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,u/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",e.hasFieldError&&(0,a/* .css */.AH)(k(),u/* .colorTokens.stroke.danger */.I6.stroke.danger),"}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}::placeholder{",f/* .typography.caption */.I.caption("regular"),";color:",u/* .colorTokens.text.hints */.I6.text.hints,";",e.isSecondary&&(0,a/* .css */.AH)(Y(),u/* .colorTokens.text.hints */.I6.text.hints),"}",e.hasFieldError&&(0,a/* .css */.AH)(I(),u/* .colorTokens.stroke.danger */.I6.stroke.danger,u/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",e.readOnly&&(0,a/* .css */.AH)(D(),u/* .colorTokens.background.disable */.I6.background.disable,u/* .colorTokens.background.disable */.I6.background.disable),"}"),errorLabel:(e,t)=>/*#__PURE__*/(0,a/* .css */.AH)(f/* .typography.small */.I.small(),";line-height:",u/* .lineHeight["20"] */.K_["20"],";display:flex;align-items:start;margin-top:",u/* .spacing["4"] */.YK["4"],";",t&&(0,a/* .css */.AH)(C())," ",e&&(0,a/* .css */.AH)(S(),u/* .colorTokens.text.status.onHold */.I6.text.status.onHold),"    & svg{margin-right:",u/* .spacing["2"] */.YK["2"],";transform:rotate(180deg);}"),labelContainer:/*#__PURE__*/(0,a/* .css */.AH)("display:flex;align-items:center;gap:",u/* .spacing["4"] */.YK["4"],";> div{display:flex;color:",u/* .colorTokens.color.black["30"] */.I6.color.black["30"],";}"),label:(e,t)=>/*#__PURE__*/(0,a/* .css */.AH)(f/* .typography.caption */.I.caption(),";margin:0px;width:",t?"100%":"auto",";color:",u/* .colorTokens.text.title */.I6.text.title,";display:flex;align-items:center;gap:",u/* .spacing["4"] */.YK["4"],";",e&&(0,a/* .css */.AH)(M(),f/* .typography.caption */.I.caption())),aiButton:/*#__PURE__*/(0,a/* .css */.AH)(h/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",u/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;justify-content:center;:disabled{cursor:not-allowed;}&:focus,&:active,&:hover{background:none;}&:focus-visible{outline:2px solid ",u/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),inputWrapper:/*#__PURE__*/(0,a/* .css */.AH)("position:relative;"),loader:/*#__PURE__*/(0,a/* .css */.AH)("position:absolute;top:50%;right:",u/* .spacing["12"] */.YK["12"],";transform:translateY(-50%);display:flex;"),alertIcon:/*#__PURE__*/(0,a/* .css */.AH)("flex-shrink:0;")}},2162:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(33);/* import */var o=r(1303);/* import */var a=r(690);/* import */var i=r(2025);/* import */var s=r(1594);/* import */var l=/*#__PURE__*/r.n(s);/* import */var c=r(5757);/* import */var d=r(7764);/* import */var u=r(983);/* import */var f=r(9586);/* import */var p=r(4958);/* import */var h=r(2147);function v(){var e=(0,a._)(["\n        resize: vertical;\n      "]);v=function t(){return e};return e}var g=6;var m=e=>{var{label:t,rows:r=g,columns:a,maxLimit:l,field:c,fieldState:d,disabled:u,readOnly:f,loading:p,placeholder:v,helpText:m,onChange:b,onKeyDown:_,isHidden:w,enableResize:x=true,isSecondary:A=false,isMagicAi:k=false,inputCss:Y,maxHeight:I,autoResize:D=false}=e;var C;var S=(C=c.value)!==null&&C!==void 0?C:"";var M=(0,s.useRef)(null);var E=undefined;if(l){E={maxLimit:l,inputCharacter:S.toString().length}}var F=()=>{if(M.current){if(I){M.current.style.maxHeight="".concat(I,"px")}M.current.style.height="auto";M.current.style.height="".concat(M.current.scrollHeight,"px")}};(0,s.useLayoutEffect)(()=>{if(D){F()}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{label:t,field:c,fieldState:d,disabled:u,readOnly:f,loading:p,placeholder:v,helpText:m,isHidden:w,characterCount:E,isSecondary:A,isMagicAi:k,children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(i/* .Fragment */.FK,{children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:y.container(x,Y),children:/*#__PURE__*/(0,i/* .jsx */.Y)("textarea",(0,o._)((0,n._)({},c,e),{ref:e=>{c.ref(e);// @ts-ignore
M.current=e;// this is not ideal but it is the only way to set ref to the input element
},style:{maxHeight:I?"".concat(I,"px"):"none"},className:"tutor-input-field",value:S,onChange:e=>{var{value:t}=e.target;if(l&&t.trim().length>l){return}c.onChange(t);if(b){b(t)}if(D){F()}},onKeyDown:e=>{_===null||_===void 0?void 0:_(e.key)},autoComplete:"off",rows:r,cols:a}))})})}})};/* export default */const b=(0,f/* .withVisibilityControl */.M)(m);var y={container:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false,t=arguments.length>1?arguments[1]:void 0;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;textarea{",u/* .typography.body */.I.body(),";height:auto;padding:",d/* .spacing["8"] */.YK["8"]," ",d/* .spacing["12"] */.YK["12"],";resize:none;",p/* .styleUtils.overflowYAuto */.x.overflowYAuto,";&.tutor-input-field{",t,";}",e&&(0,c/* .css */.AH)(v()),"}")}}},9586:function(e,t,r){// EXPORTS
r.d(t,{M:()=>/* binding */u});// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var n=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var o=r(2473);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var a=r(2025);// EXTERNAL MODULE: external "React"
var i=r(1594);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var s=r(4336);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/types.ts
var l=r(8638);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useVisibilityControl.tsx
/**
 * Custom hook to control the visibility of fields based on the provided visibility key and context.
 *
 * @param {string} visibilityKey - The key used to determine the visibility of the field.
 * @returns {boolean} - Returns true if the field should be visible, false otherwise.
 */var c=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return(0,i.useMemo)(()=>{var t;// If no visibility key provided, always show the field
if(!(0,l/* .isDefined */.O9)(e)){return true}var[r,n]=(e===null||e===void 0?void 0:e.split("."))||[];if(!(0,l/* .isDefined */.O9)(r)||!(0,l/* .isDefined */.O9)(n)){return true}var o=s/* .tutorConfig */.P===null||s/* .tutorConfig */.P===void 0?void 0:(t=s/* .tutorConfig.visibility_control */.P.visibility_control)===null||t===void 0?void 0:t[r];if(!o){return true}var a=s/* .tutorConfig.current_user.roles */.P.current_user.roles;var i=a.includes("administrator")?"admin":"instructor";var c="".concat(n,"_").concat(i);if(!Object.keys(o).includes(c)){return true}return o[c]==="on"},[e])};/* export default */const d=c;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hoc/withVisibilityControl.tsx
var u=e=>{return t=>{var{visibilityKey:r}=t,i=(0,o._)(t,["visibilityKey"]);var s=d(r);if(!s){return null}// @ts-ignore
return/*#__PURE__*/(0,a/* .jsx */.Y)(e,(0,n._)({},i))}}},9153:function(e,t,r){r.d(t,{A:()=>v});/* import */var n=r(690);/* import */var o=r(2025);/* import */var a=r(1594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var s=r(5757);/* import */var l=r(7764);/* import */var c=r(4958);function d(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);d=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function f(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);p=function t(){return e};return e}var h=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:i="horizontal",disabled:s=false,wrapperCss:l}=e;var c=(0,a.useRef)(n.map(()=>/*#__PURE__*/(0,a.createRef)()));var[d,u]=(0,a.useState)();(0,a.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,o,a,i;var s=c.current[r];var l={width:((n=s.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((o=s.current)===null||o===void 0?void 0:o.offsetHeight)||0,left:((a=s.current)===null||a===void 0?void 0:a.offsetLeft)||0,top:((i=s.current)===null||i===void 0?void 0:i.offsetTop)||0};e[t.value]=l;return e},{});u(e)},[n]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:g.container,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:[g.wrapper(i),l],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{onClick:()=>{r(e.value)},css:g.tabButton({isActive:t===e.value,orientation:i}),disabled:s||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:c.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,o/* .jsxs */.FD)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:g.activeBadge})]},n)})}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:g.indicator((d===null||d===void 0?void 0:d[t])||{width:0,height:0,left:0,top:0},i)})]})};/* export default */const v=h;var g={container:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",l/* .shadow.tabs */.r7.tabs,";",e==="vertical"&&(0,s/* .css */.AH)(d())),indicator:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",l/* .colorTokens.brand.blue */.I6.brand.blue,";border-radius:",l/* .borderRadius["4"] */.Vq["4"]," ",l/* .borderRadius["4"] */.Vq["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,s/* .css */.AH)(u(),e.height,e.top,l/* .borderRadius["4"] */.Vq["4"],l/* .borderRadius["4"] */.Vq["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)(c/* .styleUtils.resetButton */.x.resetButton,";font-size:",l/* .fontSize["15"] */.J["15"],";line-height:",l/* .lineHeight["20"] */.K_["20"],";display:flex;justify-content:center;align-items:center;gap:",l/* .spacing["6"] */.YK["6"],";padding:",l/* .spacing["12"] */.YK["12"]," ",l/* .spacing["20"] */.YK["20"],";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";box-shadow:none;}& > svg{color:",l/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="vertical"&&(0,s/* .css */.AH)(f(),l/* .colorTokens.stroke.border */.I6.stroke.border,l/* .colorTokens.stroke.border */.I6.stroke.border)," ",t&&(0,s/* .css */.AH)(p(),l/* .colorTokens.background.white */.I6.background.white,l/* .colorTokens.text.primary */.I6.text.primary,l/* .colorTokens.text.subdued */.I6.text.subdued,l/* .colorTokens.icon.brand */.I6.icon.brand),"    &:disabled{color:",l/* .colorTokens.text.disable */.I6.text.disable,";&::before{background:",l/* .colorTokens.text.disable */.I6.text.disable,";}}&:focus-visible{outline:2px solid ",l/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",l/* .borderRadius["4"] */.Vq["4"],";}")},activeBadge:/*#__PURE__*/(0,s/* .css */.AH)("display:inline-block;height:8px;width:8px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background-color:",l/* .colorTokens.color.success["80"] */.I6.color.success["80"],";")}},6988:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(1594);/* import */var o=r(3276);/* import */var a=r(7933);"use client";// src/useIsFetching.ts
function i(e,t){const r=(0,a/* .useQueryClient */.jE)(t);const i=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>i.subscribe(o/* .notifyManager.batchCalls */.j.batchCalls(e)),[i]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
}}]);