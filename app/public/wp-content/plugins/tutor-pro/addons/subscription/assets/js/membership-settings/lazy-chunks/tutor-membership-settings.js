"use strict";(self["webpackChunktutor_pro"]=self["webpackChunktutor_pro"]||[]).push([["745"],{4634:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(8491);/* import */var o=/*#__PURE__*/r.n(n);/* import */var a=r(3988);/* import */var i=/*#__PURE__*/r.n(a);// Imports
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
t.i=function e(e,r,n,o,a){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){i[l]=true}}}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);if(n&&i[c[0]]){continue}if(typeof a!=="undefined"){if(typeof c[5]==="undefined"){c[5]=a}else{c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}");c[5]=a}}if(r){if(!c[2]){c[2]=r}else{c[1]="@media ".concat(c[2]," {").concat(c[1],"}");c[2]=r}}if(o){if(!c[4]){c[4]="".concat(o)}else{c[1]="@supports (".concat(c[4],") {").concat(c[1],"}");c[4]=o}}t.push(c)}};return t}},8491:function(e){e.exports=function(e){return e[1]}},6615:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var a={};var i=[];for(var s=0;s<e.length;s++){var l=e[s];var d=n.base?l[0]+n.base:l[0];var c=a[d]||0;var u="".concat(d," ").concat(c);a[d]=c+1;var f=r(u);var p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var h=o(p,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,o){o=o||{};e=e||[];var a=n(e,o);return function e(e){e=e||[];for(var i=0;i<a.length;i++){var s=a[i];var l=r(s);t[l].references--}var d=n(e,o);for(var c=0;c<a.length;c++){var u=a[c];var f=r(u);if(t[f].references===0){t[f].updater();t.splice(f,1)}}a=d}}},8840:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},9619:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},879:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},8612:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var o=typeof r.layer!=="undefined";if(o){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(o){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var a=r.sourceMap;if(a&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},1536:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},7351:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */lk});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
var n={};r.r(n);r.d(n,{Button:()=>ty,CaptionLabel:()=>t_,Chevron:()=>tw,Day:()=>tx,DayButton:()=>tC,Dropdown:()=>tk,DropdownNav:()=>tA,Footer:()=>tY,Month:()=>tI,MonthCaption:()=>tD,MonthGrid:()=>tM,Months:()=>tS,MonthsDropdown:()=>tE,Nav:()=>tH,NextMonthButton:()=>tN,Option:()=>tO,PreviousMonthButton:()=>tV,Root:()=>tL,Select:()=>tK,Week:()=>tW,WeekNumber:()=>tP,WeekNumberHeader:()=>tR,Weekday:()=>tB,Weekdays:()=>tj,Weeks:()=>tz,YearsDropdown:()=>tU});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
var o={};r.r(o);r.d(o,{formatCaption:()=>tQ,formatDay:()=>tJ,formatMonthCaption:()=>t$,formatMonthDropdown:()=>tX,formatWeekNumber:()=>t1,formatWeekNumberHeader:()=>t2,formatWeekdayName:()=>t0,formatYearCaption:()=>t6,formatYearDropdown:()=>t5});// NAMESPACE OBJECT: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
var a={};r.r(a);r.d(a,{labelCaption:()=>rn,labelDay:()=>rt,labelDayButton:()=>re,labelGrid:()=>rr,labelGridcell:()=>ro,labelMonthDropdown:()=>ra,labelNav:()=>ri,labelNext:()=>rs,labelPrevious:()=>rl,labelWeekNumber:()=>rc,labelWeekNumberHeader:()=>ru,labelWeekday:()=>rd,labelYearDropdown:()=>rf});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var i=r(31);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var s=r(4206);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.esm.js
var l=r(2025);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var d=r(8346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.esm.js
var c=r(5757);// EXTERNAL MODULE: external "wp.i18n"
var u=r(2470);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/SVGIcon.tsx
var f=r(4485);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js + 1 modules
var p=r(33);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var h=r(1303);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var v=r(2473);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var g=r(690);// EXTERNAL MODULE: external "React"
var m=r(1594);var b=/*#__PURE__*/r.n(m);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/styles.ts
var y=r(7764);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/typography.ts
var _=r(983);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/util.ts + 4 modules
var w=r(2927);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/CheckBox.tsx
function x(){var e=(0,g._)(["\n      cursor: not-allowed;\n    "]);x=function t(){return e};return e}function C(){var e=(0,g._)(["\n      color: ",";\n    "]);C=function t(){return e};return e}function k(){var e=(0,g._)(["\n        margin-right: ",";\n      "]);k=function t(){return e};return e}function A(){var e=(0,g._)(["\n        background-color: ",";\n      "]);A=function t(){return e};return e}function Y(){var e=(0,g._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);Y=function t(){return e};return e}function I(){var e=(0,g._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);I=function t(){return e};return e}var D=/*#__PURE__*/b().forwardRef((e,t)=>{var{id:r=(0,w/* .nanoid */.Ak)(),name:n,labelCss:o,inputCss:a,label:i="",checked:s,value:d,disabled:c=false,onChange:u,onBlur:f,isIndeterminate:v=false}=e;var g=e=>{u===null||u===void 0?void 0:u(!v?e.target.checked:true,e)};var m=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/b().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:r,css:[M.container({disabled:c}),o],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},e),{ref:t,id:r,name:n,type:"checkbox",value:d,checked:!!s,disabled:c,"aria-invalid":e["aria-invalid"],onChange:g,onBlur:f,css:[a,M.checkbox({label:!!i,isIndeterminate:v,disabled:c})]})),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:[M.label({isDisabled:c}),o],title:m(i),children:i})]})});var M={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",y/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(x()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",y/* .colorTokens.text.title */.I6.text.title,";",t&&(0,c/* .css */.AH)(C(),y/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;display:none !important;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,c/* .css */.AH)(k(),y/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",y/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",y/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",y/* .borderRadius["4"] */.Vq["4"],";",n&&(0,c/* .css */.AH)(A(),y/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,c/* .css */.AH)(Y(),y/* .colorTokens.brand.blue */.I6.brand.blue,y/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,c/* .css */.AH)(I(),y/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",y/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const S=D;// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Tooltip.tsx + 56 modules
var F=r(3909);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var T=r(2147);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var E=e=>{var{field:t,fieldState:r,disabled:n,value:o,onChange:a,label:i,description:s,helpText:d,isHidden:c,labelCss:u}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{field:t,fieldState:r,isHidden:c,children:e=>{var{css:r}=e,c=(0,v._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:N.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S,(0,h._)((0,p._)({},t,c),{inputCss:r,labelCss:u,value:o,disabled:n,checked:t.value,label:i,onChange:()=>{t.onChange(!t.value);if(a){a(!t.value)}}})),d&&/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{content:d,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"info",width:20,height:20})})]}),s&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:N.description,children:s})]})}})};/* export default */const H=E;var N={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",y/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),"    color:",y/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",y/* .spacing["6"] */.YK["6"],";")};// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js + 9 modules
var O=r(8795);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/constants/index.js
/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const V=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzName/index.js
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
 */function L(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzOffset/index.js
const K={};const W={};/**
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
 */function B(e,t){try{const r=K[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const n=r(t).split("GMT")[1];if(n in W)return W[n];return P(n,n.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in W)return W[e];const t=e?.match(j);if(t)return P(e,t.slice(1));return NaN}}const j=/([+-]\d\d):?(\d\d)?/;function P(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return W[e]=r*60+n>0?r*60+n+o:r*60-n-o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/mini.js
class R extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN(B(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));Z(this,NaN);U(this)}}}static tz(e,...t){return t.length?new R(...t,e):new R(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new R(+this,e)}getTimezoneOffset(){const e=-B(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);U(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new R(+new Date(e),this.timeZone)}}// Assign getters and setters
const z=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!z.test(e))return;const t=e.replace(z,"$1UTC");// Filter out methods without UTC counterparts
if(!R.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
R.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
R.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);q(this);return+this};// Assign UTC setter
R.prototype[t]=function(){Date.prototype[t].apply(this,arguments);U(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function U(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-B(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function q(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
Z(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function Z(e){// Save the time zone offset before all the adjustments
const t=B(e.timeZone,e);// Remove the seconds offset
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
const d=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
d.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const c=o>0?d.getSeconds():(d.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const u=Math.round(-(B(e.timeZone,e)*60))%60;if(u||c){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+u);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+u+c)}//#endregion
//#region Post-adjustment DST fix
const f=B(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const h=-new Date(+e).getTimezoneOffset();const v=h-p;const g=p!==r;const m=v-l;if(g&&m){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+m);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=B(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const n=p-r;if(n){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+n);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}}//#endregion
};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/index.js
class G extends R{//#region static
static tz(e,...t){return t.length?new G(...t,e):new G(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,n]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${n} (${L(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new G(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new G(+new Date(e),this.timeZone)}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tz/index.js
/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const Q=e=>t=>TZDate.tz(e,+new Date(t));// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/index.js
// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var $=r(7443);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var J=r(2901);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js
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
 */function X(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,$/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return n;n.setDate(n.getDate()+t);return n}// Fallback for modularized imports:
/* export default */const ee=/* unused pure expression or super */null&&X;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js
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
 */function et(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,$/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return n}const o=n.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const a=(0,$/* .constructFrom */.w)(r?.in||e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const i=a.getDate();if(o>=i){// If we're already at the end of the month, then this is the correct date
// and we're done.
return a}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
n.setFullYear(a.getFullYear(),a.getMonth(),o);return n}}// Fallback for modularized imports:
/* export default */const er=/* unused pure expression or super */null&&et;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js
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
 */function en(e,t,r){return X(e,t*7,r)}// Fallback for modularized imports:
/* export default */const eo=/* unused pure expression or super */null&&en;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js
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
 */function ea(e,t,r){return et(e,t*12,r)}// Fallback for modularized imports:
/* export default */const ei=/* unused pure expression or super */null&&ea;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js + 1 modules
var es=r(5215);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
var el=r(1159);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarMonths.js
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
 */function ed(e,t,r){const[n,o]=(0,el/* .normalizeDates */.x)(r?.in,e,t);const a=n.getFullYear()-o.getFullYear();const i=n.getMonth()-o.getMonth();return a*12+i}// Fallback for modularized imports:
/* export default */const ec=/* unused pure expression or super */null&&ed;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeInterval.js
function eu(e,t){const[r,n]=(0,el/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:n}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMonthOfInterval.js
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
 */function ef(e,t){const{start:r,end:n}=eu(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setDate(1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,$/* .constructFrom */.w)(r,i));i.setMonth(i.getMonth()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const ep=/* unused pure expression or super */null&&ef;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachYearOfInterval.js
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
 */function eh(e,t){const{start:r,end:n}=eu(t?.in,e);let o=+r>+n;const a=o?+r:+n;const i=o?n:r;i.setHours(0,0,0,0);i.setMonth(0,1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,$/* .constructFrom */.w)(r,i));i.setFullYear(i.getFullYear()+s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const ev=/* unused pure expression or super */null&&eh;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var eg=r(2698);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js
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
 */function em(e,t){const r=(0,eg/* .getDefaultOptions */.q)();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,J/* .toDate */.a)(e,t?.in);const a=o.getDay();const i=(a<n?-7:0)+6-(a-n);o.setDate(o.getDate()+i);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* export default */const eb=/* unused pure expression or super */null&&em;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfISOWeek.js
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
 */function ey(e,t){return em(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const e_=/* unused pure expression or super */null&&ey;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js
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
 */function ew(e,t){const r=(0,J/* .toDate */.a)(e,t?.in);const n=r.getMonth();r.setFullYear(r.getFullYear(),n+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const ex=/* unused pure expression or super */null&&ew;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfYear.js
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
 */function eC(e,t){const r=(0,J/* .toDate */.a)(e,t?.in);const n=r.getFullYear();r.setFullYear(n+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const ek=/* unused pure expression or super */null&&eC;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js + 6 modules
var eA=r(8956);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js + 1 modules
var eY=r(305);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMonth.js
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
 */function eI(e,t){return(0,J/* .toDate */.a)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* export default */const eD=/* unused pure expression or super */null&&eI;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
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
 */function eM(e,t){return(0,J/* .toDate */.a)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* export default */const eS=/* unused pure expression or super */null&&eM;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js + 1 modules
var eF=r(150);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isAfter.js
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
 */function eT(e,t){return+(0,J/* .toDate */.a)(e)>+(0,J/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const eE=/* unused pure expression or super */null&&eT;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
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
 */function eH(e,t){return+(0,J/* .toDate */.a)(e)<+(0,J/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const eN=/* unused pure expression or super */null&&eH;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
var eO=r(1936);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var eV=r(8673);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameDay.js
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
 */function eL(e,t,r){const[n,o]=(0,el/* .normalizeDates */.x)(r?.in,e,t);return+(0,eV/* .startOfDay */.o)(n)===+(0,eV/* .startOfDay */.o)(o)}// Fallback for modularized imports:
/* export default */const eK=/* unused pure expression or super */null&&eL;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMonth.js
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
 */function eW(e,t,r){const[n,o]=(0,el/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* export default */const eB=/* unused pure expression or super */null&&eW;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameYear.js
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
 */function ej(e,t,r){const[n,o]=(0,el/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* export default */const eP=/* unused pure expression or super */null&&ej;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/max.js
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
 */function eR(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=$/* .constructFrom.bind */.w.bind(null,e);const t=(0,J/* .toDate */.a)(e,n);if(!r||r<t||isNaN(+t))r=t});return(0,$/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const ez=/* unused pure expression or super */null&&eR;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/min.js
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
 */function eU(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=$/* .constructFrom.bind */.w.bind(null,e);const t=(0,J/* .toDate */.a)(e,n);if(!r||r>t||isNaN(+t))r=t});return(0,$/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const eq=/* unused pure expression or super */null&&eU;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDaysInMonth.js
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
 */function eZ(e,t){const r=(0,J/* .toDate */.a)(e,t?.in);const n=r.getFullYear();const o=r.getMonth();const a=(0,$/* .constructFrom */.w)(r,0);a.setFullYear(n,o+1,0);a.setHours(0,0,0,0);return a.getDate()}// Fallback for modularized imports:
/* export default */const eG=/* unused pure expression or super */null&&eZ;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMonth.js
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
 */function eQ(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);const o=n.getFullYear();const a=n.getDate();const i=(0,$/* .constructFrom */.w)(r?.in||e,0);i.setFullYear(o,t,15);i.setHours(0,0,0,0);const s=eZ(i);// Set the earlier date, allows to wrap Jan 31 to Feb 28
n.setMonth(t,Math.min(a,s));return n}// Fallback for modularized imports:
/* export default */const e$=/* unused pure expression or super */null&&eQ;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setYear.js
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
 */function eJ(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+n))return(0,$/* .constructFrom */.w)(r?.in||e,NaN);n.setFullYear(t);return n}// Fallback for modularized imports:
/* export default */const eX=/* unused pure expression or super */null&&eJ;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
var e0=r(5698);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js
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
 */function e1(e,t){const r=(0,J/* .toDate */.a)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const e2=/* unused pure expression or super */null&&e1;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
var e5=r(3431);// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
var e6=r(3766);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
const e9=5;const e8=4;/**
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
 */function e3(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const n=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-n+1);const a=t.addDays(o,e9*7-1);const i=t.getMonth(e)===t.getMonth(a)?e9:e8;return i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
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
 */function e7(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
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
 */function e4(e,t){const r=e7(e,t);const n=e3(e,t);const o=t.addDays(r,n*7-1);return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class te{/**
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
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return G.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new G(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):X(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):et(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):en(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):ea(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,es/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):ed(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):ef(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):eh(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):e4(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):ey(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):ew(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):em(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):eC(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,eA/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,eY/* .getISOWeek */.s)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):eI(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):eM(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,eF/* .getWeek */.N)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):eT(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):eH(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,eO/* .isDate */.$)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):eL(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):eW(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):ej(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):eR(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):eU(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):eQ(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):eJ(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):e7(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,eV/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,e0/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):e1(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,e5/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,e6/* .startOfYear */.D)(e)};this.options={locale:O/* .enUS */.c,...e};this.overrides=t}/**
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
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return te.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const o=t?.code;if(o&&te.yearFirstLocales.has(o)){try{const t=new Intl.DateTimeFormat(o,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const a=t.format(e);return a}catch{// Fallback to date-fns formatting below.
}}const a=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,a)}}te.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const tt=new te;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const tr=/* unused pure expression or super */null&&tt;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/UI.js
/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var tn;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
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
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(tn||(tn={}));/** Enum representing flags for the {@link UI.Day} element. */var to;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(to||(to={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var ta;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(ta||(ta={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var ti;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(ti||(ti={}));// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
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
 */function ts(e,t,r=false,n=tt){let{from:o,to:a}=e;const{differenceInCalendarDays:i,isSameDay:s}=n;if(o&&a){const e=i(a,o)<0;if(e){[o,a]=[a,o]}const n=i(t,o)>=(r?1:0)&&i(a,t)>=(r?1:0);return n}if(!r&&a){return s(a,t)}if(!r&&o){return s(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const tl=(e,t)=>ts(e,t,false,defaultDateLib);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function td(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function tc(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function tu(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function tf(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function tp(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function th(e,t){return Array.isArray(e)&&e.every(t.isDate)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function tv(e,t,r=tt){const n=!Array.isArray(t)?[t]:t;const{isSameDay:o,differenceInCalendarDays:a,isAfter:i}=r;return n.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return o(e,t)}if(th(t,r)){return t.includes(e)}if(tc(t)){return ts(t,e,false,r)}if(tp(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if(td(t)){const r=a(t.before,e);const n=a(t.after,e);const o=r>0;const s=n<0;const l=i(t.before,t.after);if(l){return s&&o}else{return o||s}}if(tu(t)){return a(e,t.after)>0}if(tf(t)){return a(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const tg=/* unused pure expression or super */null&&tv;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
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
 */function tm(e,t,r,n,o){const{disabled:a,hidden:i,modifiers:s,showOutsideDays:l,broadcastCalendar:d,today:c=o.today()}=t;const{isSameDay:u,isSameMonth:f,startOfMonth:p,isBefore:h,endOfMonth:v,isAfter:g}=o;const m=r&&p(r);const b=n&&v(n);const y={[to.focused]:[],[to.outside]:[],[to.disabled]:[],[to.hidden]:[],[to.today]:[]};const _={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const p=Boolean(m&&h(e,m));const v=Boolean(b&&g(e,b));const w=Boolean(a&&tv(e,a,o));const x=Boolean(i&&tv(e,i,o))||p||v||// Broadcast calendar will show outside days as default
!d&&!l&&n||d&&l===false&&n;const C=u(e,c);if(n)y.outside.push(t);if(w)y.disabled.push(t);if(x)y.hidden.push(t);if(C)y.today.push(t);// Add custom modifiers
if(s){Object.keys(s).forEach(r=>{const n=s?.[r];const a=n?tv(e,n,o):false;if(!a)return;if(_[r]){_[r].push(t)}else{_[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[to.focused]:false,[to.disabled]:false,[to.hidden]:false,[to.outside]:false,[to.today]:false};const r={};// Find the modifiers for the given day
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
 */function tb(e,t,r={}){const n=Object.entries(e).filter(([,e])=>e===true).reduce((e,[n])=>{if(r[n]){e.push(r[n])}else if(t[to[n]]){e.push(t[to[n]])}else if(t[ta[n]]){e.push(t[ta[n]])}return e},[t[tn.Day]]);return n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Button.js
/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function ty(e){return m.createElement("button",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function t_(e){return m.createElement("span",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tw(e){const{size:t=24,orientation:r="left",className:n}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
m.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&m.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&m.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&m.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&m.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Day.js
/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tx(e){const{day:t,modifiers:r,...n}=e;return m.createElement("td",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tC(e){const{day:t,modifiers:r,...n}=e;const o=m.useRef(null);m.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return m.createElement("button",{ref:o,...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tk(e){const{options:t,className:r,components:n,classNames:o,...a}=e;const i=[o[tn.Dropdown],r].join(" ");const s=t?.find(({value:e})=>e===a.value);return m.createElement("span",{"data-disabled":a.disabled,className:o[tn.DropdownRoot]},m.createElement(n.Select,{className:i,...a},t?.map(({value:e,label:t,disabled:r})=>m.createElement(n.Option,{key:e,value:e,disabled:r},t))),m.createElement("span",{className:o[tn.CaptionLabel],"aria-hidden":true},s?.label,m.createElement(n.Chevron,{orientation:"down",size:18,className:o[tn.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tA(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Footer.js
/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tY(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Month.js
/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tI(e){const{calendarMonth:t,displayIndex:r,...n}=e;return m.createElement("div",{...n},e.children)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tD(e){const{calendarMonth:t,displayIndex:r,...n}=e;return m.createElement("div",{...n})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tM(e){return m.createElement("table",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Months.js
/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tS(e){return m.createElement("div",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */const tF=(0,m.createContext)(undefined);/**
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
 */function tT(){const e=(0,m.useContext)(tF);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tE(e){const{components:t}=tT();return m.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Nav.js
/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tH(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:o,...a}=e;const{components:i,classNames:s,labels:{labelPrevious:l,labelNext:d}}=tT();const c=(0,m.useCallback)(e=>{if(o){r?.(e)}},[o,r]);const u=(0,m.useCallback)(e=>{if(n){t?.(e)}},[n,t]);return m.createElement("nav",{...a},m.createElement(i.PreviousMonthButton,{type:"button",className:s[tn.PreviousMonthButton],tabIndex:n?undefined:-1,"aria-disabled":n?undefined:true,"aria-label":l(n),onClick:u},m.createElement(i.Chevron,{disabled:n?undefined:true,className:s[tn.Chevron],orientation:"left"})),m.createElement(i.NextMonthButton,{type:"button",className:s[tn.NextMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":d(o),onClick:c},m.createElement(i.Chevron,{disabled:o?undefined:true,orientation:"right",className:s[tn.Chevron]})))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tN(e){const{components:t}=tT();return m.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Option.js
/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tO(e){return m.createElement("option",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tV(e){const{components:t}=tT();return m.createElement(t.Button,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Root.js
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tL(e){const{rootRef:t,...r}=e;return m.createElement("div",{...r,ref:t})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Select.js
/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tK(e){return m.createElement("select",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Week.js
/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tW(e){const{week:t,...r}=e;return m.createElement("tr",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tB(e){return m.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tj(e){return m.createElement("thead",{"aria-hidden":true},m.createElement("tr",{...e}))};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tP(e){const{week:t,...r}=e;return m.createElement("th",{...r})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tR(e){return m.createElement("th",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tz(e){return m.createElement("tbody",{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function tU(e){const{components:t}=tT();return m.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
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
 */function tq(e){return{...n,...e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function tZ(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function tG(){const e={};for(const t in tn){e[tn[t]]=`rdp-${tn[t]}`}for(const t in to){e[to[t]]=`rdp-${to[t]}`}for(const t in ta){e[ta[t]]=`rdp-${ta[t]}`}for(const t in ti){e[ti[t]]=`rdp-${ti[t]}`}return e};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
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
 */function tQ(e,t,r){const n=r??new te(t);return n.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const t$=tQ;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
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
 */function tJ(e,t,r){return(r??new te(t)).format(e,"d")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
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
 */function tX(e,t=tt){return t.format(e,"LLLL")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
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
 */function t0(e,t,r){return(r??new te(t)).format(e,"cccccc")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
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
 */function t1(e,t=tt){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function t2(){return``};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function t5(e,t=tt){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const t6=t5;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function t9(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...o,...e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
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
 */function t8(e,t,r,n,o){const{startOfMonth:a,startOfYear:i,endOfYear:s,eachMonthOfInterval:l,getMonth:d}=o;const c=l({start:i(e),end:s(e)});const u=c.map(e=>{const i=n.formatMonthDropdown(e,o);const s=d(e);const l=t&&e<a(t)||r&&e>a(r)||false;return{value:s,label:i,disabled:l}});return u};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
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
 */function t3(e,t={},r={}){let n={...t?.[tn.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{n={...n,...r?.[e]}});return n};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function t7(e,t,r,n){const o=n??e.today();const a=r?e.startOfBroadcastWeek(o,e):t?e.startOfISOWeek(o):e.startOfWeek(o);const i=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);i.push(r)}return i};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
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
 */function t4(e,t,r,n,o=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:i,eachYearOfInterval:s,getYear:l}=n;const d=a(e);const c=i(t);const u=s({start:d,end:c});if(o)u.reverse();return u.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
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
 */function re(e,t,r,n){let o=(n??new te(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const rt=re;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
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
 */function rr(e,t,r){const n=r??new te(t);return n.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const rn=rr;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
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
 */function ro(e,t,r,n){let o=(n??new te(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ra(e){return"Choose the Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ri(){return""};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNext.js
/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function rs(e){return"Go to the Next Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function rl(e){return"Go to the Previous Month"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
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
 */function rd(e,t,r){return(r??new te(t)).format(e,"cccc")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function rc(e,t){return`Week ${e}`};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function ru(e){return"Week Number"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function rf(e){return"Choose the Year"};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useAnimation.js
const rp=e=>{if(e instanceof HTMLElement)return e;return null};const rh=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const rv=e=>rp(e.querySelector("[data-animated-month]"));const rg=e=>rp(e.querySelector("[data-animated-caption]"));const rm=e=>rp(e.querySelector("[data-animated-weeks]"));const rb=e=>rp(e.querySelector("[data-animated-nav]"));const ry=e=>rp(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function r_(e,t,{classNames:r,months:n,focused:o,dateLib:a}){const i=(0,m.useRef)(null);const s=(0,m.useRef)(n);const l=(0,m.useRef)(false);(0,m.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const d=s.current;// update previous months ref for next effect trigger
s.current=n;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
n.length===0||d.length===0||n.length!==d.length){return}const c=a.isSameMonth(n[0].date,d[0].date);const u=a.isAfter(n[0].date,d[0].date);const f=u?r[ti.caption_after_enter]:r[ti.caption_before_enter];const p=u?r[ti.weeks_after_enter]:r[ti.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const h=i.current;// update snapshot for next effect trigger
const v=e.current.cloneNode(true);if(v instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=rh(v);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=rv(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=rg(e);if(r){r.classList.remove(f)}const n=rm(e);if(n){n.classList.remove(p)}});i.current=v}else{i.current=null}if(l.current||c||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
o){return}const g=h instanceof HTMLElement?rh(h):[];const m=rh(e.current);if(m?.every(e=>e instanceof HTMLElement)&&g&&g.every(e=>e instanceof HTMLElement)){l.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=rb(e.current);if(n){n.style.zIndex="1"}m.forEach((o,a)=>{const i=g[a];if(!i){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const s=rg(o);if(s){s.classList.add(f)}const d=rm(o);if(d){d.classList.add(p)}// animate new displayed month end
const c=()=>{l.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(s){s.classList.remove(f)}if(d){d.classList.remove(p)}o.style.position="";o.style.overflow="";if(o.contains(i)){o.removeChild(i)}};t.push(c);// animate old displayed month
i.style.pointerEvents="none";i.style.position="absolute";i.style.overflow="hidden";i.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const h=ry(i);if(h){h.style.opacity="0"}const v=rg(i);if(v){v.classList.add(u?r[ti.caption_before_exit]:r[ti.caption_after_exit]);v.addEventListener("animationend",c)}const m=rm(i);if(m){m.classList.add(u?r[ti.weeks_before_exit]:r[ti.weeks_after_exit])}o.insertBefore(i,o.firstChild)})}})};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDates.js
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
 */function rw(e,t,r,n){const o=e[0];const a=e[e.length-1];const{ISOWeek:i,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:d,differenceInCalendarDays:c,differenceInCalendarMonths:u,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:h,endOfWeek:v,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:y}=n;const _=l?m(o,n):i?b(o):y(o);const w=l?f(a):i?p(h(a)):v(h(a));// If maxDate is set, clamp the grid to the end of that week.
const x=t&&(l?f(t):i?p(t):v(t));// Pick the earliest week end between the displayed months and the constraint.
const C=x&&g(w,x)?x:w;const k=c(C,_);const A=u(a,o)+1;const Y=[];for(let e=0;e<=k;e++){const t=d(_,e);Y.push(t)}// If fixed weeks is enabled, add the extra dates to the array
const I=l?35:42;const D=I*A;if(s&&Y.length<D){const e=D-Y.length;for(let t=0;t<e;t++){const e=d(Y[Y.length-1],1);Y.push(e)}}return Y};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function rx(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function rC(e,t,r,n){const{numberOfMonths:o=1}=r;const a=[];for(let r=0;r<o;r++){const o=n.addMonths(e,r);if(t&&o>t){break}a.push(o)}return a};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
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
 */function rk(e,t,r,n){const{month:o,defaultMonth:a,today:i=n.today(),numberOfMonths:s=1}=e;let l=o||a||i;const{differenceInCalendarMonths:d,addMonths:c,startOfMonth:u}=n;if(r&&d(r,l)<s-1){const e=-1*(s-1);l=c(r,e)}if(t&&d(l,t)<0){l=t}return u(l)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class rA{constructor(e,t,r=tt){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r;this.isoDate=r.format(e,"yyyy-MM-dd");this.displayMonthId=r.format(t,"yyyy-MM");this.dateMonthId=r.format(e,"yyyy-MM")}/**
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
 */class rY{constructor(e,t){this.days=t;this.weekNumber=e}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class rI{constructor(e,t){this.date=e;this.weeks=t}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
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
 */function rD(e,t,r,n){const{addDays:o,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:s,endOfWeek:l,getISOWeek:d,getWeek:c,startOfBroadcastWeek:u,startOfISOWeek:f,startOfWeek:p}=n;const h=e.reduce((e,h)=>{const v=r.broadcastCalendar?u(h,n):r.ISOWeek?f(h):p(h);const g=r.broadcastCalendar?a(h):r.ISOWeek?i(s(h)):l(s(h));/** The dates to display in the month. */const m=t.filter(e=>{return e>=v&&e<=g});const b=r.broadcastCalendar?35:42;if(r.fixedWeeks&&m.length<b){const e=t.filter(e=>{const t=b-m.length;return e>g&&e<=o(g,t)});m.push(...e)}const y=m.reduce((e,t)=>{const o=r.ISOWeek?d(t):c(t);const a=e.find(e=>e.weekNumber===o);const i=new rA(t,h,n);if(!a){e.push(new rY(o,[i]))}else{a.days.push(i)}return e},[]);const _=new rI(h,y);e.push(_);return e},[]);if(!r.reverseMonths){return h}else{return h.reverse()}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function rM(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:o,startOfDay:a,startOfMonth:i,endOfMonth:s,addYears:l,endOfYear:d,newDate:c,today:u}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:h,toMonth:v}=e;if(!r&&h){r=h}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&v){n=v}if(!n&&p){n=c(p,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=c(f,0,1)}else if(!r&&g){r=o(l(e.today??u(),-100))}if(n){n=s(n)}else if(p){n=c(p,11,31)}else if(!n&&g){n=d(e.today??u())}return[r?a(r):r,n?a(n):n]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
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
 */function rS(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a=1}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const d=o?a:1;const c=i(e);if(!t){return s(c,d)}const u=l(t,e);if(u<a){return undefined}return s(c,d)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
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
 */function rF(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:o,numberOfMonths:a}=r;const{startOfMonth:i,addMonths:s,differenceInCalendarMonths:l}=n;const d=o?a??1:1;const c=i(e);if(!t){return s(c,-d)}const u=l(c,t);if(u<=0){return undefined}return s(c,-d)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function rT(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
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
 */function rE(e,t){const[r,n]=(0,m.useState)(e);const o=t===undefined?r:t;return[o,n]};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useCalendar.js
/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function rH(e,t){const[r,n]=rM(e,t);const{startOfMonth:o,endOfMonth:a}=t;const i=rk(e,r,n,t);const[s,l]=rE(i,// initialMonth is always computed from props.month if provided
e.month?i:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,m.useEffect)(()=>{const o=rk(e,r,n,t);l(o)},[e.timeZone]);/** The months displayed in the calendar. */// biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
const{months:d,weeks:c,days:u,previousMonth:f,nextMonth:p}=(0,m.useMemo)(()=>{const o=rC(s,n,{numberOfMonths:e.numberOfMonths},t);const i=rw(o,e.endMonth?a(e.endMonth):undefined,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t);const l=rD(o,i,{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);const d=rT(l);const c=rx(l);const u=rF(s,r,e,t);const f=rS(s,n,e,t);return{months:l,weeks:d,days:c,previousMonth:u,nextMonth:f}},[t,s.getTime(),n?.getTime(),r?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]);const{disableNavigation:h,onMonthChange:v}=e;const g=e=>c.some(t=>t.days.some(t=>t.isEqualTo(e)));const b=e=>{if(h){return}let t=o(e);// if month is before start, use the first month instead
if(r&&t<o(r)){t=o(r)}// if month is after endMonth, use the last month instead
if(n&&t>o(n)){t=o(n)}l(t);v?.(t)};const y=e=>{// is this check necessary?
if(g(e)){return}b(e.date)};const _={months:d,weeks:c,days:u,navStart:r,navEnd:n,previousMonth:f,nextMonth:p,goToMonth:b,goToDay:y};return _};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var rN;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(rN||(rN={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function rO(e){return!e[to.disabled]&&!e[to.hidden]&&!e[to.outside]}/**
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
 */function rV(e,t,r,n){let o;let a=-1;for(const i of e){const e=t(i);if(rO(e)){if(e[to.focused]&&a<rN.FocusedModifier){o=i;a=rN.FocusedModifier}else if(n?.isEqualTo(i)&&a<rN.LastFocused){o=i;a=rN.LastFocused}else if(r(i.date)&&a<rN.Selected){o=i;a=rN.Selected}else if(e[to.today]&&a<rN.Today){o=i;a=rN.Today}}}if(!o){// Return the first day that is focusable
o=e.find(e=>rO(t(e)))}return o};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
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
 */function rL(e,t,r,n,o,a,i){const{ISOWeek:s,broadcastCalendar:l}=a;const{addDays:d,addMonths:c,addWeeks:u,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:h,endOfWeek:v,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:y,startOfWeek:_}=i;const w={day:d,week:u,month:c,year:f,startOfWeek:e=>l?b(e,i):s?y(e):_(e),endOfWeek:e=>l?p(e):s?h(e):v(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&o){x=m([o,x])}return x};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
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
 */function rK(e,t,r,n,o,a,i,s=0){if(s>365){// Limit the recursion to 365 attempts
return undefined}const l=rL(e,t,r.date,n,o,a,i);const d=Boolean(a.disabled&&tv(l,a.disabled,i));const c=Boolean(a.hidden&&tv(l,a.hidden,i));const u=l;const f=new rA(l,u,i);if(!d&&!c){return f}// Recursively attempt to find the next focusable date
return rK(e,t,f,n,o,a,i,s+1)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useFocus.js
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
 */function rW(e,t,r,n,o){const{autoFocus:a}=e;const[i,s]=(0,m.useState)();const l=rV(t.days,r,n||(()=>false),i);const[d,c]=(0,m.useState)(a?l:undefined);const u=()=>{s(d);c(undefined)};const f=(r,n)=>{if(!d)return;const a=rK(r,n,d,t.navStart,t.navEnd,e,o);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);c(a)};const p=e=>{return Boolean(l?.isEqualTo(e))};const h={isFocusTarget:p,setFocused:c,focused:d,blur:u,moveFocus:f};return h};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function rB(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=rE(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const d=e=>{return s?.some(t=>l(t,e))??false};const{min:c,max:u}=e;const f=(e,t,r)=>{let a=[...s??[]];if(d(e)){if(s?.length===c){// Min value reached, do nothing
return}if(n&&s?.length===1){// Required value already selected do nothing
return}a=s?.filter(t=>!l(t,e))}else{if(s?.length===u){// Max value reached, reset the selection to date
a=[e]}else{// Add the date to the selection
a=[...a,e]}}if(!o){i(a)}o?.(a,e,t,r);return a};return{selected:s,select:f,isSelected:d}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/addToRange.js
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
 */function rj(e,t,r=0,n=0,o=false,a=tt){const{from:i,to:s}=t||{};const{isSameDay:l,isAfter:d,isBefore:c}=a;let u;if(!i&&!s){// the range is empty, add the date
u={from:e,to:r>0?undefined:e}}else if(i&&!s){// adding date to an incomplete range
if(l(i,e)){// adding a date equal to the start of the range
if(r===0){u={from:i,to:e}}else if(o){u={from:i,to:undefined}}else{u=undefined}}else if(c(e,i)){// adding a date before the start of the range
u={from:e,to:i}}else{// adding a date after the start of the range
u={from:i,to:e}}}else if(i&&s){// adding date to a complete range
if(l(i,e)&&l(s,e)){// adding a date that is equal to both start and end of the range
if(o){u={from:i,to:s}}else{u=undefined}}else if(l(i,e)){// adding a date equal to the the start of the range
u={from:i,to:r>0?undefined:e}}else if(l(s,e)){// adding a dare equal to the end of the range
u={from:e,to:r>0?undefined:e}}else if(c(e,i)){// adding a date before the start of the range
u={from:e,to:s}}else if(d(e,i)){// adding a date after the start of the range
u={from:i,to:e}}else if(d(e,s)){// adding a date after the end of the range
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
 */function rP(e,t,r=tt){const n=!Array.isArray(t)?[t]:t;let o=e.from;const a=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
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
 */function rR(e,t,r=tt){return ts(e,t.from,false,r)||ts(e,t.to,false,r)||ts(t,e.from,false,r)||ts(t,e.to,false,r)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function rz(e,t,r=tt){const n=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const o=n.filter(e=>typeof e!=="function");const a=o.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return ts(e,t,false,r)}if(th(t,r)){return t.some(t=>ts(e,t,false,r))}if(tc(t)){if(t.from&&t.to){return rR(e,{from:t.from,to:t.to},r)}return false}if(tp(t)){return rP(e,t.dayOfWeek,r)}if(td(t)){const n=r.isAfter(t.before,t.after);if(n){return rR(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return tv(e.from,t,r)||tv(e.to,t,r)}if(tu(t)||tf(t)){return tv(e.from,t,r)||tv(e.to,t,r)}return false});if(a){return true}const i=n.filter(e=>typeof e==="function");if(i.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(i.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function rU(e,t){const{disabled:r,excludeDisabled:n,selected:o,required:a,onSelect:i}=e;const[s,l]=rE(o,i?o:undefined);const d=!i?s:o;const c=e=>d&&ts(d,e,false,t);const u=(o,s,c)=>{const{min:u,max:f}=e;const p=o?rj(o,d,u,f,a,t):undefined;if(n&&r&&p?.from&&p.to){if(rz({from:p.from,to:p.to},r,t)){// if a disabled days is found, the range is reset
p.from=o;p.to=undefined}}if(!i){l(p)}i?.(p,o,s,c);return p};return{selected:d,select:u,isSelected:c}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function rq(e,t){const{selected:r,required:n,onSelect:o}=e;const[a,i]=rE(r,o?r:undefined);const s=!o?a:r;const{isSameDay:l}=t;const d=e=>{return s?l(s,e):false};const c=(e,t,r)=>{let a=e;if(!n&&s&&s&&l(e,s)){// If the date is the same, clear the selection.
a=undefined}if(!o){i(a)}if(n){o?.(a,e,t,r)}else{o?.(a,e,t,r)}return a};return{selected:s,select:c,isSelected:d}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useSelection.js
/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function rZ(e,t){const r=rq(e,t);const n=rB(e,t);const o=rU(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return o;default:return undefined}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
/**
 * Convert a {@link Date} or {@link TZDate} instance to the given time zone.
 * Reuses the same instance when it is already a {@link TZDate} using the target
 * time zone to avoid extra allocations.
 */function rG(e,t){if(e instanceof G&&e.timeZone===t){return e}return new G(e,t)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function rQ(e,t){if(typeof e==="boolean"||typeof e==="function"){return e}if(e instanceof Date){return rG(e,t)}if(Array.isArray(e)){return e.map(e=>e instanceof Date?rG(e,t):e)}if(tc(e)){return{...e,from:e.from?rG(e.from,t):e.from,to:e.to?rG(e.to,t):e.to}}if(td(e)){return{before:rG(e.before,t),after:rG(e.after,t)}}if(tu(e)){return{after:rG(e.after,t)}}if(tf(e)){return{before:rG(e.before,t)}}return e}/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */function r$(e,t){if(!e){return e}if(Array.isArray(e)){return e.map(e=>rQ(e,t))}return rQ(e,t)};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/DayPicker.js
/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function rJ(e){let t=e;const r=t.timeZone;if(r){t={...e,timeZone:r};if(t.today){t.today=rG(t.today,r)}if(t.month){t.month=rG(t.month,r)}if(t.defaultMonth){t.defaultMonth=rG(t.defaultMonth,r)}if(t.startMonth){t.startMonth=rG(t.startMonth,r)}if(t.endMonth){t.endMonth=rG(t.endMonth,r)}if(t.mode==="single"&&t.selected){t.selected=rG(t.selected,r)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>rG(e,r))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?rG(t.selected.from,r):t.selected.from,to:t.selected.to?rG(t.selected.to,r):t.selected.to}}if(t.disabled!==undefined){t.disabled=r$(t.disabled,r)}if(t.hidden!==undefined){t.hidden=r$(t.hidden,r)}if(t.modifiers){const e={};Object.keys(t.modifiers).forEach(n=>{e[n]=r$(t.modifiers?.[n],r)});t.modifiers=e}}const{components:n,formatters:o,labels:i,dateLib:s,locale:l,classNames:d}=(0,m.useMemo)(()=>{const e={...O/* .enUS */.c,...t.locale};const r=new te({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:tq(t.components),formatters:t9(t.formatters),labels:{...a,...t.labels},locale:e,classNames:{...tG(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);if(!t.today){t={...t,today:s.today()}}const{captionLayout:c,mode:u,navLayout:f,numberOfMonths:p=1,onDayBlur:h,onDayClick:v,onDayFocus:g,onDayKeyDown:b,onDayMouseEnter:y,onDayMouseLeave:_,onNextClick:w,onPrevClick:x,showWeekNumber:C,styles:k}=t;const{formatCaption:A,formatDay:Y,formatMonthDropdown:I,formatWeekNumber:D,formatWeekNumberHeader:M,formatWeekdayName:S,formatYearDropdown:F}=o;const T=rH(t,s);const{days:E,months:H,navStart:N,navEnd:V,previousMonth:L,nextMonth:K,goToMonth:W}=T;const B=tm(E,t,N,V,s);const{isSelected:j,select:P,selected:R}=rZ(t,s)??{};const{blur:z,focused:U,isFocusTarget:q,moveFocus:Z,setFocused:G}=rW(t,T,B,j??(()=>false),s);const{labelDayButton:Q,labelGridcell:$,labelGrid:J,labelMonthDropdown:X,labelNav:ee,labelPrevious:et,labelNext:er,labelWeekday:en,labelWeekNumber:eo,labelWeekNumberHeader:ea,labelYearDropdown:ei}=i;const es=(0,m.useMemo)(()=>t7(s,t.ISOWeek,t.broadcastCalendar,t.today),[s,t.ISOWeek,t.broadcastCalendar,t.today]);const el=u!==undefined||v!==undefined;const ed=(0,m.useCallback)(()=>{if(!L)return;W(L);x?.(L)},[L,W,x]);const ec=(0,m.useCallback)(()=>{if(!K)return;W(K);w?.(K)},[W,K,w]);const eu=(0,m.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();G(e);if(t.disabled){return}P?.(e.date,t,r);v?.(e.date,t,r)},[P,v,G]);const ef=(0,m.useCallback)((e,t)=>r=>{G(e);g?.(e.date,t,r)},[g,G]);const ep=(0,m.useCallback)((e,t)=>r=>{z();h?.(e.date,t,r)},[z,h]);const eh=(0,m.useCallback)((e,r)=>n=>{const o={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(o[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=o[n.key];Z(e,t)}b?.(e.date,r,n)},[Z,b,t.dir]);const ev=(0,m.useCallback)((e,t)=>r=>{y?.(e.date,t,r)},[y]);const eg=(0,m.useCallback)((e,t)=>r=>{_?.(e.date,t,r)},[_]);const em=(0,m.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setMonth(s.startOfMonth(e),r);W(n)},[s,W]);const eb=(0,m.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setYear(s.startOfMonth(e),r);W(n)},[s,W]);const{className:ey,style:e_}=(0,m.useMemo)(()=>({className:[d[tn.Root],t.className].filter(Boolean).join(" "),style:{...k?.[tn.Root],...t.style}}),[d,t.className,t.style,k]);const ew=tZ(t);const ex=(0,m.useRef)(null);r_(ex,Boolean(t.animate),{classNames:d,months:H,focused:U,dateLib:s});const eC={dayPickerProps:t,selected:R,select:P,isSelected:j,months:H,nextMonth:K,previousMonth:L,goToMonth:W,getModifiers:B,components:n,classNames:d,styles:k,labels:i,formatters:o};return m.createElement(tF.Provider,{value:eC},m.createElement(n.Root,{rootRef:t.animate?ex:undefined,className:ey,style:e_,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...ew},m.createElement(n.Months,{className:d[tn.Months],style:k?.[tn.Months]},!t.hideNavigation&&!f&&m.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:d[tn.Nav],style:k?.[tn.Nav],"aria-label":ee(),onPreviousClick:ed,onNextClick:ec,previousMonth:L,nextMonth:K}),H.map((e,r)=>{return m.createElement(n.Month,{"data-animated-month":t.animate?"true":undefined,className:d[tn.Month],style:k?.[tn.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:r,displayIndex:r,calendarMonth:e},f==="around"&&!t.hideNavigation&&r===0&&m.createElement(n.PreviousMonthButton,{type:"button",className:d[tn.PreviousMonthButton],tabIndex:L?undefined:-1,"aria-disabled":L?undefined:true,"aria-label":et(L),onClick:ed,"data-animated-button":t.animate?"true":undefined},m.createElement(n.Chevron,{disabled:L?undefined:true,className:d[tn.Chevron],orientation:t.dir==="rtl"?"right":"left"})),m.createElement(n.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:d[tn.MonthCaption],style:k?.[tn.MonthCaption],calendarMonth:e,displayIndex:r},c?.startsWith("dropdown")?m.createElement(n.DropdownNav,{className:d[tn.Dropdowns],style:k?.[tn.Dropdowns]},(()=>{const r=c==="dropdown"||c==="dropdown-months"?m.createElement(n.MonthsDropdown,{key:"month",className:d[tn.MonthsDropdown],"aria-label":X(),classNames:d,components:n,disabled:Boolean(t.disableNavigation),onChange:em(e.date),options:t8(e.date,N,V,o,s),style:k?.[tn.Dropdown],value:s.getMonth(e.date)}):m.createElement("span",{key:"month"},I(e.date,s));const a=c==="dropdown"||c==="dropdown-years"?m.createElement(n.YearsDropdown,{key:"year",className:d[tn.YearsDropdown],"aria-label":ei(s.options),classNames:d,components:n,disabled:Boolean(t.disableNavigation),onChange:eb(e.date),options:t4(N,V,o,s,Boolean(t.reverseYears)),style:k?.[tn.Dropdown],value:s.getYear(e.date)}):m.createElement("span",{key:"year"},F(e.date,s));const i=s.getMonthYearOrder()==="year-first"?[a,r]:[r,a];return i})(),m.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},A(e.date,s.options,s))):m.createElement(n.CaptionLabel,{className:d[tn.CaptionLabel],role:"status","aria-live":"polite"},A(e.date,s.options,s))),f==="around"&&!t.hideNavigation&&r===p-1&&m.createElement(n.NextMonthButton,{type:"button",className:d[tn.NextMonthButton],tabIndex:K?undefined:-1,"aria-disabled":K?undefined:true,"aria-label":er(K),onClick:ec,"data-animated-button":t.animate?"true":undefined},m.createElement(n.Chevron,{disabled:K?undefined:true,className:d[tn.Chevron],orientation:t.dir==="rtl"?"left":"right"})),r===p-1&&f==="after"&&!t.hideNavigation&&m.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:d[tn.Nav],style:k?.[tn.Nav],"aria-label":ee(),onPreviousClick:ed,onNextClick:ec,previousMonth:L,nextMonth:K}),m.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":u==="multiple"||u==="range","aria-label":J(e.date,s.options,s)||undefined,className:d[tn.MonthGrid],style:k?.[tn.MonthGrid]},!t.hideWeekdays&&m.createElement(n.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:d[tn.Weekdays],style:k?.[tn.Weekdays]},C&&m.createElement(n.WeekNumberHeader,{"aria-label":ea(s.options),className:d[tn.WeekNumberHeader],style:k?.[tn.WeekNumberHeader],scope:"col"},M()),es.map(e=>m.createElement(n.Weekday,{"aria-label":en(e,s.options,s),className:d[tn.Weekday],key:String(e),style:k?.[tn.Weekday],scope:"col"},S(e,s.options,s)))),m.createElement(n.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:d[tn.Weeks],style:k?.[tn.Weeks]},e.weeks.map(e=>{return m.createElement(n.Week,{className:d[tn.Week],key:e.weekNumber,style:k?.[tn.Week],week:e},C&&m.createElement(n.WeekNumber,{week:e,style:k?.[tn.WeekNumber],"aria-label":eo(e.weekNumber,{locale:l}),className:d[tn.WeekNumber],scope:"row",role:"rowheader"},D(e.weekNumber,s)),e.days.map(e=>{const{date:r}=e;const o=B(e);o[to.focused]=!o.hidden&&Boolean(U?.isEqualTo(e));o[ta.selected]=j?.(r)||o.selected;if(tc(R)){// add range modifiers
const{from:e,to:t}=R;o[ta.range_start]=Boolean(e&&t&&s.isSameDay(r,e));o[ta.range_end]=Boolean(e&&t&&s.isSameDay(r,t));o[ta.range_middle]=ts(R,r,true,s)}const a=t3(o,k,t.modifiersStyles);const i=tb(o,d,t.modifiersClassNames);const l=!el&&!o.hidden?$(r,o,s.options,s):undefined;return m.createElement(n.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:o,className:i.join(" "),style:a,role:"gridcell","aria-selected":o.selected||undefined,"aria-label":l,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:undefined,"data-selected":o.selected||undefined,"data-disabled":o.disabled||undefined,"data-hidden":o.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":o.focused||undefined,"data-today":o.today||undefined},!o.hidden&&el?m.createElement(n.DayButton,{className:d[tn.DayButton],style:k?.[tn.DayButton],type:"button",day:e,modifiers:o,disabled:!o.focused&&o.disabled||undefined,"aria-disabled":o.focused&&o.disabled||undefined,tabIndex:q(e)?0:-1,"aria-label":Q(r,o,s.options,s),onClick:eu(e,o),onBlur:ep(e,o),onFocus:ef(e,o),onKeyDown:eh(e,o),onMouseEnter:ev(e,o),onMouseLeave:eg(e,o)},Y(r,s.options,s)):!o.hidden&&Y(e.date,s.options,s))}))}))))})),t.footer&&m.createElement(n.Footer,{className:d[tn.Footer],style:k?.[tn.Footer],role:"status","aria-live":"polite"},t.footer)))}// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
var rX=r(856);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Button.tsx
var r0=r(9878);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/constants.ts
var r1=r(7461);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var r2=r(2554);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePrefersReducedMotion.ts
var r5="data-tutor-motion";var r6=()=>{if(typeof document==="undefined"){return null}return document.documentElement.getAttribute(r5)};var r9=()=>{if(typeof window==="undefined"||!window.matchMedia){return false}return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var r8=()=>{var e=r6();// Explicit override always wins.
if(e==="reduce")return true;// 'auto' (or unset) defers to the OS/browser setting.
return r9()};/**
 * Resolves whether motion should be reduced, honoring:
 * - data-tutor-motion="reduce" on <html>  -> always reduce
 * - data-tutor-motion="auto" (or absent)  -> defer to prefers-reduced-motion
 */var r3=()=>{var[e,t]=(0,m.useState)(r8);(0,m.useEffect)(()=>{if(typeof window==="undefined"||!window.matchMedia){return}var e=window.matchMedia("(prefers-reduced-motion: reduce)");var r=()=>t(r8());r();e.addEventListener("change",r);// In case data-tutor-motion is toggled at runtime (e.g. a settings panel)
var n=new MutationObserver(r);n.observe(document.documentElement,{attributes:true,attributeFilter:[r5]});return()=>{e.removeEventListener("change",r);n.disconnect()}},[]);return e};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/style-utils.ts
var r7=r(4958);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var r4=r(6615);var ne=/*#__PURE__*/r.n(r4);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var nt=r(8612);var nr=/*#__PURE__*/r.n(nt);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var nn=r(8840);var no=/*#__PURE__*/r.n(nn);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var na=r(879);var ni=/*#__PURE__*/r.n(na);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var ns=r(9619);var nl=/*#__PURE__*/r.n(ns);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var nd=r(1536);var nc=/*#__PURE__*/r.n(nd);// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.6.5_@swc+helpers@0.5.17__webpack@5.101.1/node_modules/css-loader/dist/cjs.js!../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var nu=r(4634);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var nf={};nf.styleTagTransform=nc();nf.setAttributes=ni();nf.insert=no().bind(null,"head");nf.domAPI=nr();nf.insertStyleElement=nl();var np=ne()(nu/* ["default"] */.A,nf);/* export default */const nh=nu/* ["default"] */.A&&nu/* ["default"].locals */.A.locals?nu/* ["default"].locals */.A.locals:undefined;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormDateInput.tsx
// Create DayPicker formatters based on WordPress locale
var nv=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var ng=e=>{if(!e)return undefined;return(0,rX/* .isValid */.f)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var nm=e=>{var{label:t,field:r,fieldState:n,disabled:o,disabledBefore:a,disabledAfter:i,loading:s,placeholder:d,helpText:c,isClearable:g=true,onChange:b,dateFormat:y=r1/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var _=r3();var w=(0,m.useRef)(null);var[x,C]=(0,m.useState)(false);var k=ng(r.value);var A=typeof window!=="undefined"&&window.wp&&window.wp.date;var Y=k?A?window.wp.date.format("F j, Y",k):(0,eA/* .format */.GP)(k,y):"";var{triggerRef:I,position:D,popoverRef:M}=(0,r2/* .usePortalPopover */.tP)({isOpen:x,placement:r2/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var S=()=>{var e;C(false);(e=w.current)===null||e===void 0?void 0:e.focus()};var F=ng(a);var E=ng(i);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:o,loading:s,placeholder:d,helpText:c,children:e=>{var{css:t}=e,n=(0,v._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ny.wrapper,ref:I,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},n),{css:[t,ny.input],title:Y,ref:e=>{r.ref(e);// @ts-ignore
w.current=e},type:"text",value:Y,onClick:e=>{e.stopPropagation();C(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();C(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:ny.icon}),g&&r.value&&/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,u.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:r7/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(r2/* .Portal */.ZL,{isOpen:x,onClickOutside:S,onEscape:S,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ny.pickerWrapper,style:{left:D.left,top:D.top},ref:M,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rJ,{dir:r1/* .isRTL */.V8?"rtl":"ltr",animate:!_,mode:"single",formatters:nv(),disabled:[!!F&&{before:F},!!E&&{after:E}],selected:k,onSelect:e=>{if(e){var t=(0,eA/* .format */.GP)(e,r1/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);S();if(b){b(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:k||new Date,startMonth:F||new Date(new Date().getFullYear()-10,0),endMonth:E||new Date(new Date().getFullYear()+10,11),weekStartsOn:A?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const nb=nm;var ny={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",y/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",y/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",y/* .colorTokens.background.white */.I6.background.white,";box-shadow:",y/* .shadow.popover */.r7.popover,";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",y/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",y/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",y/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",y/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",y/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",y/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",y/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",y/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",y/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",y/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";color:",y/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",y/* .colorTokens.text.white */.I6.text.white,";background-color:",y/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",y/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",y/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",y/* .borderRadius.circle */.Vq.circle,";font-weight:",y/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",y/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",y/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function n_(e,t,r,n,o,a,i){try{var s=e[a](i);var l=s.value}catch(e){r(e);return}if(s.done)t(l);else Promise.resolve(l).then(n,o)}function nw(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){n_(a,n,o,i,s,"next",e)}function s(e){n_(a,n,o,i,s,"throw",e)}i(undefined)})}};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var nx=e=>e.type==="checkbox";var nC=e=>e instanceof Date;var nk=e=>e==null;const nA=e=>typeof e==="object";var nY=e=>!nk(e)&&!Array.isArray(e)&&nA(e)&&!nC(e);var nI=e=>nY(e)&&e.target?nx(e.target)?e.target.checked:e.target.value:e;var nD=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e;var nM=(e,t)=>e.has(nD(t));var nS=e=>{const t=e.constructor&&e.constructor.prototype;return nY(t)&&t.hasOwnProperty("isPrototypeOf")};var nF=typeof window!=="undefined"&&typeof window.HTMLElement!=="undefined"&&typeof document!=="undefined";function nT(e){let t;const r=Array.isArray(e);const n=typeof FileList!=="undefined"?e instanceof FileList:false;if(e instanceof Date){t=new Date(e)}else if(!(nF&&(e instanceof Blob||n))&&(r||nY(e))){t=r?[]:Object.create(Object.getPrototypeOf(e));if(!r&&!nS(e)){t=e}else{for(const r in e){if(e.hasOwnProperty(r)){t[r]=nT(e[r])}}}}else{return e}return t}var nE=e=>/^\w*$/.test(e);var nH=e=>e===undefined;var nN=e=>Array.isArray(e)?e.filter(Boolean):[];var nO=e=>nN(e.replace(/["|']|\]/g,"").split(/\.|\[/));var nV=(e,t,r)=>{if(!t||!nY(e)){return r}const n=(nE(t)?[t]:nO(t)).reduce((e,t)=>nk(e)?e:e[t],e);return nH(n)||n===e?nH(e[t])?r:e[t]:n};var nL=e=>typeof e==="boolean";var nK=(e,t,r)=>{let n=-1;const o=nE(t)?[t]:nO(t);const a=o.length;const i=a-1;while(++n<a){const t=o[n];let a=r;if(n!==i){const r=e[t];a=nY(r)||Array.isArray(r)?r:!isNaN(+o[n+1])?[]:{}}if(t==="__proto__"||t==="constructor"||t==="prototype"){return}e[t]=a;e=e[t]}};const nW={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"};const nB={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"};const nj={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};const nP=m.createContext(null);nP.displayName="HookFormContext";/**
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
 */const nR=()=>m.useContext(nP);/**
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
 */const nz=e=>{const{children:t,...r}=e;return React.createElement(nP.Provider,{value:r},t)};var nU=(e,t,r,n=true)=>{const o={defaultValues:t._defaultValues};for(const a in e){Object.defineProperty(o,a,{get:()=>{const o=a;if(t._proxyFormState[o]!==nB.all){t._proxyFormState[o]=!n||nB.all}r&&(r[o]=true);return e[o]}})}return o};const nq=typeof window!=="undefined"?m.useLayoutEffect:m.useEffect;/**
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
 */function nZ(e){const t=nR();const{control:r=t.control,disabled:n,name:o,exact:a}=e||{};const[i,s]=m.useState(r._formState);const l=m.useRef({isDirty:false,isLoading:false,dirtyFields:false,touchedFields:false,validatingFields:false,isValidating:false,isValid:false,errors:false});nq(()=>r._subscribe({name:o,formState:l.current,exact:a,callback:e=>{!n&&s({...r._formState,...e})}}),[o,n,a]);m.useEffect(()=>{l.current.isValid&&r._setValid(true)},[r]);return m.useMemo(()=>nU(i,r,l.current,false),[i,r])}var nG=e=>typeof e==="string";var nQ=(e,t,r,n,o)=>{if(nG(e)){n&&t.watch.add(e);return nV(r,e,o)}if(Array.isArray(e)){return e.map(e=>(n&&t.watch.add(e),nV(r,e)))}n&&(t.watchAll=true);return r};var n$=e=>nk(e)||!nA(e);function nJ(e,t,r=new WeakSet){if(n$(e)||n$(t)){return Object.is(e,t)}if(nC(e)&&nC(t)){return e.getTime()===t.getTime()}const n=Object.keys(e);const o=Object.keys(t);if(n.length!==o.length){return false}if(r.has(e)||r.has(t)){return true}r.add(e);r.add(t);for(const a of n){const n=e[a];if(!o.includes(a)){return false}if(a!=="ref"){const e=t[a];if(nC(n)&&nC(e)||nY(n)&&nY(e)||Array.isArray(n)&&Array.isArray(e)?!nJ(n,e,r):!Object.is(n,e)){return false}}}return true}/**
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
 */function nX(e){const t=nR();const{control:r=t.control,name:n,defaultValue:o,disabled:a,exact:i,compute:s}=e||{};const l=m.useRef(o);const d=m.useRef(s);const c=m.useRef(undefined);const u=m.useRef(r);const f=m.useRef(n);d.current=s;const[p,h]=m.useState(()=>{const e=r._getWatch(n,l.current);return d.current?d.current(e):e});const v=m.useCallback(e=>{const t=nQ(n,r._names,e||r._formValues,false,l.current);return d.current?d.current(t):t},[r._formValues,r._names,n]);const g=m.useCallback(e=>{if(!a){const t=nQ(n,r._names,e||r._formValues,false,l.current);if(d.current){const e=d.current(t);if(!nJ(e,c.current)){h(e);c.current=e}}else{h(t)}}},[r._formValues,r._names,a,n]);nq(()=>{if(u.current!==r||!nJ(f.current,n)){u.current=r;f.current=n;g()}return r._subscribe({name:n,formState:{values:true},exact:i,callback:e=>{g(e.values)}})},[r,i,n,g]);m.useEffect(()=>r._removeUnmounted());// If name or control changed for this render, synchronously reflect the
// latest value so callers (like useController) see the correct value
// immediately on the same render.
// Optimize: Check control reference first before expensive deepEqual
const b=u.current!==r;const y=f.current;// Cache the computed output to avoid duplicate calls within the same render
// We include shouldReturnImmediate in deps to ensure proper recomputation
const _=m.useMemo(()=>{if(a){return null}const e=!b&&!nJ(y,n);const t=b||e;return t?v():null},[a,b,n,y,v]);return _!==null?_:p}/**
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
 */function n0(e){const t=nR();const{name:r,disabled:n,control:o=t.control,shouldUnregister:a,defaultValue:i,exact:s=true}=e;const l=nM(o._names.array,r);const d=m.useMemo(()=>nV(o._formValues,r,nV(o._defaultValues,r,i)),[o,r,i]);const c=nX({control:o,name:r,defaultValue:d,exact:s});const u=nZ({control:o,name:r,exact:s});const f=m.useRef(e);const p=m.useRef(undefined);const h=m.useRef(o.register(r,{...e.rules,value:c,...nL(e.disabled)?{disabled:e.disabled}:{}}));f.current=e;const v=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:true,get:()=>!!nV(u.errors,r)},isDirty:{enumerable:true,get:()=>!!nV(u.dirtyFields,r)},isTouched:{enumerable:true,get:()=>!!nV(u.touchedFields,r)},isValidating:{enumerable:true,get:()=>!!nV(u.validatingFields,r)},error:{enumerable:true,get:()=>nV(u.errors,r)}}),[u,r]);const g=m.useCallback(e=>h.current.onChange({target:{value:nI(e),name:r},type:nW.CHANGE}),[r]);const b=m.useCallback(()=>h.current.onBlur({target:{value:nV(o._formValues,r),name:r},type:nW.BLUR}),[r,o._formValues]);const y=m.useCallback(e=>{const t=nV(o._fields,r);if(t&&e){t._f.ref={focus:()=>e.focus&&e.focus(),select:()=>e.select&&e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()}}},[o._fields,r]);const _=m.useMemo(()=>({name:r,value:c,...nL(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:g,onBlur:b,ref:y}),[r,n,u.disabled,g,b,y,c]);m.useEffect(()=>{const e=o._options.shouldUnregister||a;const t=p.current;if(t&&t!==r&&!l){o.unregister(t)}o.register(r,{...f.current.rules,...nL(f.current.disabled)?{disabled:f.current.disabled}:{}});const n=(e,t)=>{const r=nV(o._fields,e);if(r&&r._f){r._f.mount=t}};n(r,true);if(e){const e=nT(nV(o._options.defaultValues,r,f.current.defaultValue));nK(o._defaultValues,r,e);if(nH(nV(o._formValues,r))){nK(o._formValues,r,e)}}!l&&o.register(r);p.current=r;return()=>{(l?e&&!o._state.action:e)?o.unregister(r):n(r,false)}},[r,o,l,a]);m.useEffect(()=>{o._setDisabledField({disabled:n,name:r})},[n,r,o]);return m.useMemo(()=>({field:_,formState:u,fieldState:v}),[_,u,v])}/**
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
 */const n1=e=>e.render(n0(e));const n2=e=>{const t={};for(const r of Object.keys(e)){if(nA(e[r])&&e[r]!==null){const n=n2(e[r]);for(const e of Object.keys(n)){t[`${r}.${e}`]=n[e]}}else{t[r]=e[r]}}return t};const n5="post";/**
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
 */function n6(e){const t=nR();const[r,n]=React.useState(false);const{control:o=t.control,onSubmit:a,children:i,action:s,method:l=n5,headers:d,encType:c,onError:u,render:f,onSuccess:p,validateStatus:h,...v}=e;const g=async t=>{let r=false;let n="";await o.handleSubmit(async e=>{const i=new FormData;let f="";try{f=JSON.stringify(e)}catch(e){}const v=n2(o._formValues);for(const e in v){i.append(e,v[e])}if(a){await a({data:e,event:t,method:l,formData:i,formDataJson:f})}if(s){try{const e=[d&&d["Content-Type"],c].some(e=>e&&e.includes("json"));const t=await fetch(String(s),{method:l,headers:{...d,...c&&c!=="multipart/form-data"?{"Content-Type":c}:{}},body:e?f:i});if(t&&(h?!h(t.status):t.status<200||t.status>=300)){r=true;u&&u({response:t});n=String(t.status)}else{p&&p({response:t})}}catch(e){r=true;u&&u({error:e})}}})(t);if(r&&e.control){e.control._subjects.state.next({isSubmitSuccessful:false});e.control.setError("root.server",{type:n})}};React.useEffect(()=>{n(true)},[]);return f?React.createElement(React.Fragment,null,f({submit:g})):React.createElement("form",{noValidate:r,action:s,method:l,encType:c,onSubmit:g,...v},i)}var n9=(e,t,r,n,o)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:o||true}}:{};var n8=e=>Array.isArray(e)?e:[e];var n3=()=>{let e=[];const t=t=>{for(const r of e){r.next&&r.next(t)}};const r=t=>{e.push(t);return{unsubscribe:()=>{e=e.filter(e=>e!==t)}}};const n=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:n}};function n7(e,t){const r={};for(const n in e){if(e.hasOwnProperty(n)){const o=e[n];const a=t[n];if(o&&nY(o)&&a){const e=n7(o,a);if(nY(e)){r[n]=e}}else if(e[n]){r[n]=a}}}return r}var n4=e=>nY(e)&&!Object.keys(e).length;var oe=e=>e.type==="file";var ot=e=>typeof e==="function";var or=e=>{if(!nF){return false}const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)};var on=e=>e.type===`select-multiple`;var oo=e=>e.type==="radio";var oa=e=>oo(e)||nx(e);var oi=e=>or(e)&&e.isConnected;function os(e,t){const r=t.slice(0,-1).length;let n=0;while(n<r){e=nH(e)?n++:e[t[n++]]}return e}function ol(e){for(const t in e){if(e.hasOwnProperty(t)&&!nH(e[t])){return false}}return true}function od(e,t){const r=Array.isArray(t)?t:nE(t)?[t]:nO(t);const n=r.length===1?e:os(e,r);const o=r.length-1;const a=r[o];if(n){delete n[a]}if(o!==0&&(nY(n)&&n4(n)||Array.isArray(n)&&ol(n))){od(e,r.slice(0,-1))}return e}var oc=e=>{for(const t in e){if(ot(e[t])){return true}}return false};function ou(e){return Array.isArray(e)||nY(e)&&!oc(e)}function of(e,t={}){for(const r in e){const n=e[r];if(ou(n)){t[r]=Array.isArray(n)?[]:{};of(n,t[r])}else if(!nH(n)){t[r]=true}}return t}function op(e,t,r){if(!r){r=of(t)}for(const n in e){const o=e[n];if(ou(o)){if(nH(t)||n$(r[n])){r[n]=of(o,Array.isArray(o)?[]:{})}else{op(o,nk(t)?{}:t[n],r[n])}}else{const e=t[n];r[n]=!nJ(o,e)}}return r}const oh={value:false,isValid:false};const ov={value:true,isValid:true};var og=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!nH(e[0].attributes.value)?nH(e[0].value)||e[0].value===""?ov:{value:e[0].value,isValid:true}:ov:oh}return oh};var om=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>nH(e)?e:t?e===""?NaN:e?+e:e:r&&nG(e)?new Date(e):n?n(e):e;const ob={isValid:false,value:null};var oy=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:true,value:t.value}:e,ob):ob;function o_(e){const t=e.ref;if(oe(t)){return t.files}if(oo(t)){return oy(e.refs).value}if(on(t)){return[...t.selectedOptions].map(({value:e})=>e)}if(nx(t)){return og(e.refs).value}return om(nH(t.value)?e.ref.value:t.value,e)}var ow=(e,t,r,n)=>{const o={};for(const r of e){const e=nV(t,r);e&&nK(o,r,e._f)}return{criteriaMode:r,names:[...e],fields:o,shouldUseNativeValidation:n}};var ox=e=>e instanceof RegExp;var oC=e=>nH(e)?e:ox(e)?e.source:nY(e)?ox(e.value)?e.value.source:e.value:e;var ok=e=>({isOnSubmit:!e||e===nB.onSubmit,isOnBlur:e===nB.onBlur,isOnChange:e===nB.onChange,isOnAll:e===nB.all,isOnTouch:e===nB.onTouched});const oA="AsyncFunction";var oY=e=>!!e&&!!e.validate&&!!(ot(e.validate)&&e.validate.constructor.name===oA||nY(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===oA));var oI=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);var oD=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const oM=(e,t,r,n)=>{for(const o of r||Object.keys(e)){const r=nV(e,o);if(r){const{_f:e,...a}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],o)&&!n){return true}else if(e.ref&&t(e.ref,e.name)&&!n){return true}else{if(oM(a,t)){break}}}else if(nY(a)){if(oM(a,t)){break}}}}return};function oS(e,t,r){const n=nV(e,r);if(n||nE(r)){return{error:n,name:r}}const o=r.split(".");while(o.length){const n=o.join(".");const a=nV(t,n);const i=nV(e,n);if(a&&!Array.isArray(a)&&r!==n){return{name:r}}if(i&&i.type){return{name:n,error:i}}if(i&&i.root&&i.root.type){return{name:`${n}.root`,error:i.root}}o.pop()}return{name:r}}var oF=(e,t,r,n)=>{r(e);const{name:o,...a}=e;return n4(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!n||nB.all))};var oT=(e,t,r)=>!e||!t||e===t||n8(e).some(e=>e&&(r?e===t:e.startsWith(t)||t.startsWith(e)));var oE=(e,t,r,n,o)=>{if(o.isOnAll){return false}else if(!r&&o.isOnTouch){return!(t||e)}else if(r?n.isOnBlur:o.isOnBlur){return!e}else if(r?n.isOnChange:o.isOnChange){return e}return true};var oH=(e,t)=>!nN(nV(e,t)).length&&od(e,t);var oN=(e,t,r)=>{const n=n8(nV(e,r));nK(n,"root",t[r]);nK(e,r,n);return e};function oO(e,t,r="validate"){if(nG(e)||Array.isArray(e)&&e.every(nG)||nL(e)&&!e){return{type:r,message:nG(e)?e:"",ref:t}}}var oV=e=>nY(e)&&!ox(e)?e:{value:e,message:""};var oL=async(e,t,r,n,o,a)=>{const{ref:i,refs:s,required:l,maxLength:d,minLength:c,min:u,max:f,pattern:p,validate:h,name:v,valueAsNumber:g,mount:m}=e._f;const b=nV(r,v);if(!m||t.has(v)){return{}}const y=s?s[0]:i;const _=e=>{if(o&&y.reportValidity){y.setCustomValidity(nL(e)?"":e||"");y.reportValidity()}};const w={};const x=oo(i);const C=nx(i);const k=x||C;const A=(g||oe(i))&&nH(i.value)&&nH(b)||or(i)&&i.value===""||b===""||Array.isArray(b)&&!b.length;const Y=n9.bind(null,v,n,w);const I=(e,t,r,n=nj.maxLength,o=nj.minLength)=>{const a=e?t:r;w[v]={type:e?n:o,message:a,ref:i,...Y(e?n:o,a)}};if(a?!Array.isArray(b)||!b.length:l&&(!k&&(A||nk(b))||nL(b)&&!b||C&&!og(s).isValid||x&&!oy(s).isValid)){const{value:e,message:t}=nG(l)?{value:!!l,message:l}:oV(l);if(e){w[v]={type:nj.required,message:t,ref:y,...Y(nj.required,t)};if(!n){_(t);return w}}}if(!A&&(!nk(u)||!nk(f))){let e;let t;const r=oV(f);const o=oV(u);if(!nk(b)&&!isNaN(b)){const n=i.valueAsNumber||(b?+b:b);if(!nk(r.value)){e=n>r.value}if(!nk(o.value)){t=n<o.value}}else{const n=i.valueAsDate||new Date(b);const a=e=>new Date(new Date().toDateString()+" "+e);const s=i.type=="time";const l=i.type=="week";if(nG(r.value)&&b){e=s?a(b)>a(r.value):l?b>r.value:n>new Date(r.value)}if(nG(o.value)&&b){t=s?a(b)<a(o.value):l?b<o.value:n<new Date(o.value)}}if(e||t){I(!!e,r.message,o.message,nj.max,nj.min);if(!n){_(w[v].message);return w}}}if((d||c)&&!A&&(nG(b)||a&&Array.isArray(b))){const e=oV(d);const t=oV(c);const r=!nk(e.value)&&b.length>+e.value;const o=!nk(t.value)&&b.length<+t.value;if(r||o){I(r,e.message,t.message);if(!n){_(w[v].message);return w}}}if(p&&!A&&nG(b)){const{value:e,message:t}=oV(p);if(ox(e)&&!b.match(e)){w[v]={type:nj.pattern,message:t,ref:i,...Y(nj.pattern,t)};if(!n){_(t);return w}}}if(h){if(ot(h)){const e=await h(b,r);const t=oO(e,y);if(t){w[v]={...t,...Y(nj.validate,t.message)};if(!n){_(t.message);return w}}}else if(nY(h)){let e={};for(const t in h){if(!n4(e)&&!n){break}const o=oO(await h[t](b,r),y,t);if(o){e={...o,...Y(t,o.message)};_(o.message);if(n){w[v]=e}}}if(!n4(e)){w[v]={ref:y,...e};if(!n){return w}}}}_(true);return w};const oK={mode:nB.onSubmit,reValidateMode:nB.onChange,shouldFocusError:true};function oW(e={}){let t={...oK,...e};let r={submitCount:0,isDirty:false,isReady:false,isLoading:ot(t.defaultValues),isValidating:false,isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||false};let n={};let o=nY(t.defaultValues)||nY(t.values)?nT(t.defaultValues||t.values)||{}:{};let a=t.shouldUnregister?{}:nT(o);let i={action:false,mount:false,watch:false};let s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set};let l;let d=0;const c={isDirty:false,dirtyFields:false,validatingFields:false,touchedFields:false,isValidating:false,isValid:false,errors:false};let u={...c};const f={array:n3(),state:n3()};const p=t.criteriaMode===nB.all;const h=e=>t=>{clearTimeout(d);d=setTimeout(e,t)};const v=async e=>{if(!t.disabled&&(c.isValid||u.isValid||e)){const e=t.resolver?n4((await C()).errors):await A(n,true);if(e!==r.isValid){f.state.next({isValid:e})}}};const g=(e,n)=>{if(!t.disabled&&(c.isValidating||c.validatingFields||u.isValidating||u.validatingFields)){(e||Array.from(s.mount)).forEach(e=>{if(e){n?nK(r.validatingFields,e,n):od(r.validatingFields,e)}});f.state.next({validatingFields:r.validatingFields,isValidating:!n4(r.validatingFields)})}};const m=(e,s=[],l,d,p=true,h=true)=>{if(d&&l&&!t.disabled){i.action=true;if(h&&Array.isArray(nV(n,e))){const t=l(nV(n,e),d.argA,d.argB);p&&nK(n,e,t)}if(h&&Array.isArray(nV(r.errors,e))){const t=l(nV(r.errors,e),d.argA,d.argB);p&&nK(r.errors,e,t);oH(r.errors,e)}if((c.touchedFields||u.touchedFields)&&h&&Array.isArray(nV(r.touchedFields,e))){const t=l(nV(r.touchedFields,e),d.argA,d.argB);p&&nK(r.touchedFields,e,t)}if(c.dirtyFields||u.dirtyFields){r.dirtyFields=op(o,a)}f.state.next({name:e,isDirty:I(e,s),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else{nK(a,e,s)}};const b=(e,t)=>{nK(r.errors,e,t);f.state.next({errors:r.errors})};const y=e=>{r.errors=e;f.state.next({errors:r.errors,isValid:false})};const _=(e,t,r,s)=>{const l=nV(n,e);if(l){const n=nV(a,e,nH(r)?nV(o,e):r);nH(n)||s&&s.defaultChecked||t?nK(a,e,t?n:o_(l._f)):S(e,n);i.mount&&!i.action&&v()}};const w=(e,n,a,i,s)=>{let l=false;let d=false;const p={name:e};if(!t.disabled){if(!a||i){if(c.isDirty||u.isDirty){d=r.isDirty;r.isDirty=p.isDirty=I();l=d!==p.isDirty}const t=nJ(nV(o,e),n);d=!!nV(r.dirtyFields,e);t?od(r.dirtyFields,e):nK(r.dirtyFields,e,true);p.dirtyFields=r.dirtyFields;l=l||(c.dirtyFields||u.dirtyFields)&&d!==!t}if(a){const t=nV(r.touchedFields,e);if(!t){nK(r.touchedFields,e,a);p.touchedFields=r.touchedFields;l=l||(c.touchedFields||u.touchedFields)&&t!==a}}l&&s&&f.state.next(p)}return l?p:{}};const x=(e,n,o,a)=>{const i=nV(r.errors,e);const s=(c.isValid||u.isValid)&&nL(n)&&r.isValid!==n;if(t.delayError&&o){l=h(()=>b(e,o));l(t.delayError)}else{clearTimeout(d);l=null;o?nK(r.errors,e,o):od(r.errors,e)}if((o?!nJ(i,o):i)||!n4(a)||s){const t={...a,...s&&nL(n)?{isValid:n}:{},errors:r.errors,name:e};r={...r,...t};f.state.next(t)}};const C=async e=>{g(e,true);const r=await t.resolver(a,t.context,ow(e||s.mount,n,t.criteriaMode,t.shouldUseNativeValidation));g(e);return r};const k=async e=>{const{errors:t}=await C(e);if(e){for(const n of e){const e=nV(t,n);e?nK(r.errors,n,e):od(r.errors,n)}}else{r.errors=t}return t};const A=async(e,n,o={valid:true})=>{for(const i in e){const l=e[i];if(l){const{_f:e,...i}=l;if(e){const i=s.array.has(e.name);const d=l._f&&oY(l._f);if(d&&c.validatingFields){g([e.name],true)}const u=await oL(l,s.disabled,a,p,t.shouldUseNativeValidation&&!n,i);if(d&&c.validatingFields){g([e.name])}if(u[e.name]){o.valid=false;if(n){break}}!n&&(nV(u,e.name)?i?oN(r.errors,u,e.name):nK(r.errors,e.name,u[e.name]):od(r.errors,e.name))}!n4(i)&&await A(i,n,o)}}return o.valid};const Y=()=>{for(const e of s.unMount){const t=nV(n,e);t&&(t._f.refs?t._f.refs.every(e=>!oi(e)):!oi(t._f.ref))&&P(e)}s.unMount=new Set};const I=(e,r)=>!t.disabled&&(e&&r&&nK(a,e,r),!nJ(O(),o));const D=(e,t,r)=>nQ(e,s,{...i.mount?a:nH(t)?o:nG(e)?{[e]:t}:t},r,t);const M=e=>nN(nV(i.mount?a:o,e,t.shouldUnregister?nV(o,e,[]):[]));const S=(e,t,r={})=>{const o=nV(n,e);let i=t;if(o){const r=o._f;if(r){!r.disabled&&nK(a,e,om(t,r));i=or(r.ref)&&nk(t)?"":t;if(on(r.ref)){[...r.ref.options].forEach(e=>e.selected=i.includes(e.value))}else if(r.refs){if(nx(r.ref)){r.refs.forEach(e=>{if(!e.defaultChecked||!e.disabled){if(Array.isArray(i)){e.checked=!!i.find(t=>t===e.value)}else{e.checked=i===e.value||!!i}}})}else{r.refs.forEach(e=>e.checked=e.value===i)}}else if(oe(r.ref)){r.ref.value=""}else{r.ref.value=i;if(!r.ref.type){f.state.next({name:e,values:nT(a)})}}}}(r.shouldDirty||r.shouldTouch)&&w(e,i,r.shouldTouch,r.shouldDirty,true);r.shouldValidate&&N(e)};const F=(e,t,r)=>{for(const o in t){if(!t.hasOwnProperty(o)){return}const a=t[o];const i=e+"."+o;const l=nV(n,i);(s.array.has(e)||nY(a)||l&&!l._f)&&!nC(a)?F(i,a,r):S(i,a,r)}};const T=(e,t,l={})=>{const d=nV(n,e);const p=s.array.has(e);const h=nT(t);nK(a,e,h);if(p){f.array.next({name:e,values:nT(a)});if((c.isDirty||c.dirtyFields||u.isDirty||u.dirtyFields)&&l.shouldDirty){f.state.next({name:e,dirtyFields:op(o,a),isDirty:I(e,h)})}}else{d&&!d._f&&!nk(h)?F(e,h,l):S(e,h,l)}oD(e,s)&&f.state.next({...r,name:e});f.state.next({name:i.mount?e:undefined,values:nT(a)})};const E=async e=>{i.mount=true;const o=e.target;let d=o.name;let h=true;const m=nV(n,d);const b=e=>{h=Number.isNaN(e)||nC(e)&&isNaN(e.getTime())||nJ(e,nV(a,d,e))};const y=ok(t.mode);const _=ok(t.reValidateMode);if(m){let i;let k;const Y=o.type?o_(m._f):nI(e);const I=e.type===nW.BLUR||e.type===nW.FOCUS_OUT;const D=!oI(m._f)&&!t.resolver&&!nV(r.errors,d)&&!m._f.deps||oE(I,nV(r.touchedFields,d),r.isSubmitted,_,y);const M=oD(d,s,I);nK(a,d,Y);if(I){if(!o||!o.readOnly){m._f.onBlur&&m._f.onBlur(e);l&&l(0)}}else if(m._f.onChange){m._f.onChange(e)}const S=w(d,Y,I);const F=!n4(S)||M;!I&&f.state.next({name:d,type:e.type,values:nT(a)});if(D){if(c.isValid||u.isValid){if(t.mode==="onBlur"){if(I){v()}}else if(!I){v()}}return F&&f.state.next({name:d,...M?{}:S})}!I&&M&&f.state.next({...r});if(t.resolver){const{errors:e}=await C([d]);b(Y);if(h){const t=oS(r.errors,n,d);const o=oS(e,n,t.name||d);i=o.error;d=o.name;k=n4(e)}}else{g([d],true);i=(await oL(m,s.disabled,a,p,t.shouldUseNativeValidation))[d];g([d]);b(Y);if(h){if(i){k=false}else if(c.isValid||u.isValid){k=await A(n,true)}}}if(h){m._f.deps&&(!Array.isArray(m._f.deps)||m._f.deps.length>0)&&N(m._f.deps);x(d,k,i,S)}}};const H=(e,t)=>{if(nV(r.errors,t)&&e.focus){e.focus();return 1}return};const N=async(e,o={})=>{let a;let i;const l=n8(e);if(t.resolver){const t=await k(nH(e)?e:l);a=n4(t);i=e?!l.some(e=>nV(t,e)):a}else if(e){i=(await Promise.all(l.map(async e=>{const t=nV(n,e);return await A(t&&t._f?{[e]:t}:t)}))).every(Boolean);!(!i&&!r.isValid)&&v()}else{i=a=await A(n)}f.state.next({...!nG(e)||(c.isValid||u.isValid)&&a!==r.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:r.errors});o.shouldFocus&&!i&&oM(n,H,e?l:s.mount);return i};const O=(e,t)=>{let n={...i.mount?a:o};if(t){n=n7(t.dirtyFields?r.dirtyFields:r.touchedFields,n)}return nH(e)?n:nG(e)?nV(n,e):e.map(e=>nV(n,e))};const V=(e,t)=>({invalid:!!nV((t||r).errors,e),isDirty:!!nV((t||r).dirtyFields,e),error:nV((t||r).errors,e),isValidating:!!nV(r.validatingFields,e),isTouched:!!nV((t||r).touchedFields,e)});const L=e=>{e&&n8(e).forEach(e=>od(r.errors,e));f.state.next({errors:e?r.errors:{}})};const K=(e,t,o)=>{const a=(nV(n,e,{_f:{}})._f||{}).ref;const i=nV(r.errors,e)||{};// Don't override existing error messages elsewhere in the object tree.
const{ref:s,message:l,type:d,...c}=i;nK(r.errors,e,{...c,...t,ref:a});f.state.next({name:e,errors:r.errors,isValid:false});o&&o.shouldFocus&&a&&a.focus&&a.focus()};const W=(e,t)=>ot(e)?f.state.subscribe({next:r=>"values"in r&&e(D(undefined,t),r)}):D(e,t,true);const B=e=>f.state.subscribe({next:t=>{if(oT(e.name,t.name,e.exact)&&oF(t,e.formState||c,X,e.reRenderRoot)){e.callback({values:{...a},...r,...t,defaultValues:o})}}}).unsubscribe;const j=e=>{i.mount=true;u={...u,...e.formState};return B({...e,formState:u})};const P=(e,i={})=>{for(const l of e?n8(e):s.mount){s.mount.delete(l);s.array.delete(l);if(!i.keepValue){od(n,l);od(a,l)}!i.keepError&&od(r.errors,l);!i.keepDirty&&od(r.dirtyFields,l);!i.keepTouched&&od(r.touchedFields,l);!i.keepIsValidating&&od(r.validatingFields,l);!t.shouldUnregister&&!i.keepDefaultValue&&od(o,l)}f.state.next({values:nT(a)});f.state.next({...r,...!i.keepDirty?{}:{isDirty:I()}});!i.keepIsValid&&v()};const R=({disabled:e,name:t})=>{if(nL(e)&&i.mount||!!e||s.disabled.has(t)){e?s.disabled.add(t):s.disabled.delete(t)}};const z=(e,r={})=>{let a=nV(n,e);const l=nL(r.disabled)||nL(t.disabled);nK(n,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:true,...r}});s.mount.add(e);if(a){R({disabled:nL(r.disabled)?r.disabled:t.disabled,name:e})}else{_(e,true,r.value)}return{...l?{disabled:r.disabled||t.disabled}:{},...t.progressive?{required:!!r.required,min:oC(r.min),max:oC(r.max),minLength:oC(r.minLength),maxLength:oC(r.maxLength),pattern:oC(r.pattern)}:{},name:e,onChange:E,onBlur:E,ref:l=>{if(l){z(e,r);a=nV(n,e);const t=nH(l.value)?l.querySelectorAll?l.querySelectorAll("input,select,textarea")[0]||l:l:l;const i=oa(t);const s=a._f.refs||[];if(i?s.find(e=>e===t):t===a._f.ref){return}nK(n,e,{_f:{...a._f,...i?{refs:[...s.filter(oi),t,...Array.isArray(nV(o,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}});_(e,false,undefined,t)}else{a=nV(n,e,{});if(a._f){a._f.mount=false}(t.shouldUnregister||r.shouldUnregister)&&!(nM(s.array,e)&&i.action)&&s.unMount.add(e)}}}};const U=()=>t.shouldFocusError&&oM(n,H,s.mount);const q=e=>{if(nL(e)){f.state.next({disabled:e});oM(n,(t,r)=>{const o=nV(n,r);if(o){t.disabled=o._f.disabled||e;if(Array.isArray(o._f.refs)){o._f.refs.forEach(t=>{t.disabled=o._f.disabled||e})}}},0,false)}};const Z=(e,o)=>async i=>{let l=undefined;if(i){i.preventDefault&&i.preventDefault();i.persist&&i.persist()}let d=nT(a);f.state.next({isSubmitting:true});if(t.resolver){const{errors:e,values:t}=await C();r.errors=e;d=nT(t)}else{await A(n)}if(s.disabled.size){for(const e of s.disabled){od(d,e)}}od(r.errors,"root");if(n4(r.errors)){f.state.next({errors:{}});try{await e(d,i)}catch(e){l=e}}else{if(o){await o({...r.errors},i)}U();setTimeout(U)}f.state.next({isSubmitted:true,isSubmitting:false,isSubmitSuccessful:n4(r.errors)&&!l,submitCount:r.submitCount+1,errors:r.errors});if(l){throw l}};const G=(e,t={})=>{if(nV(n,e)){if(nH(t.defaultValue)){T(e,nT(nV(o,e)))}else{T(e,t.defaultValue);nK(o,e,nT(t.defaultValue))}if(!t.keepTouched){od(r.touchedFields,e)}if(!t.keepDirty){od(r.dirtyFields,e);r.isDirty=t.defaultValue?I(e,nT(nV(o,e))):I()}if(!t.keepError){od(r.errors,e);c.isValid&&v()}f.state.next({...r})}};const Q=(e,l={})=>{const d=e?nT(e):o;const u=nT(d);const p=n4(e);const h=p?o:u;if(!l.keepDefaultValues){o=d}if(!l.keepValues){if(l.keepDirtyValues){const e=new Set([...s.mount,...Object.keys(op(o,a))]);for(const t of Array.from(e)){nV(r.dirtyFields,t)?nK(h,t,nV(a,t)):T(t,nV(h,t))}}else{if(nF&&nH(e)){for(const e of s.mount){const t=nV(n,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(or(e)){const t=e.closest("form");if(t){t.reset();break}}}}}if(l.keepFieldsRef){for(const e of s.mount){T(e,nV(h,e))}}else{n={}}}a=t.shouldUnregister?l.keepDefaultValues?nT(o):{}:nT(h);f.array.next({values:{...h}});f.state.next({values:{...h}})}s={mount:l.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:false,focus:""};i.mount=!c.isValid||!!l.keepIsValid||!!l.keepDirtyValues||!t.shouldUnregister&&!n4(h);i.watch=!!t.shouldUnregister;f.state.next({submitCount:l.keepSubmitCount?r.submitCount:0,isDirty:p?false:l.keepDirty?r.isDirty:!!(l.keepDefaultValues&&!nJ(e,o)),isSubmitted:l.keepIsSubmitted?r.isSubmitted:false,dirtyFields:p?{}:l.keepDirtyValues?l.keepDefaultValues&&a?op(o,a):r.dirtyFields:l.keepDefaultValues&&e?op(o,e):l.keepDirty?r.dirtyFields:{},touchedFields:l.keepTouched?r.touchedFields:{},errors:l.keepErrors?r.errors:{},isSubmitSuccessful:l.keepIsSubmitSuccessful?r.isSubmitSuccessful:false,isSubmitting:false,defaultValues:o})};const $=(e,t)=>Q(ot(e)?e(a):e,t);const J=(e,t={})=>{const r=nV(n,e);const o=r&&r._f;if(o){const e=o.refs?o.refs[0]:o.ref;if(e.focus){e.focus();t.shouldSelect&&ot(e.select)&&e.select()}}};const X=e=>{r={...r,...e}};const ee=()=>ot(t.defaultValues)&&t.defaultValues().then(e=>{$(e,t.resetOptions);f.state.next({isLoading:false})});const et={control:{register:z,unregister:P,getFieldState:V,handleSubmit:Z,setError:K,_subscribe:B,_runSchema:C,_focusError:U,_getWatch:D,_getDirty:I,_setValid:v,_setFieldArray:m,_setDisabledField:R,_setErrors:y,_getFieldArray:M,_reset:Q,_resetDefaultValues:ee,_removeUnmounted:Y,_disableForm:q,_subjects:f,_proxyFormState:c,get _fields(){return n},get _formValues(){return a},get _state(){return i},set _state(value){i=value},get _defaultValues(){return o},get _names(){return s},set _names(value){s=value},get _formState(){return r},get _options(){return t},set _options(value){t={...t,...value}}},subscribe:j,trigger:N,register:z,handleSubmit:Z,watch:W,setValue:T,getValues:O,reset:$,resetField:G,clearErrors:L,unregister:P,setError:K,setFocus:J,getFieldState:V};return{...et,formControl:et}}var oB=()=>{if(typeof crypto!=="undefined"&&crypto.randomUUID){return crypto.randomUUID()}const e=typeof performance==="undefined"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})};var oj=(e,t,r={})=>r.shouldFocus||nH(r.shouldFocus)?r.focusName||`${e}.${nH(r.focusIndex)?t:r.focusIndex}.`:"";var oP=(e,t)=>[...e,...n8(t)];var oR=e=>Array.isArray(e)?e.map(()=>undefined):undefined;function oz(e,t,r){return[...e.slice(0,t),...n8(r),...e.slice(t)]}var oU=(e,t,r)=>{if(!Array.isArray(e)){return[]}if(nH(e[r])){e[r]=undefined}e.splice(r,0,e.splice(t,1)[0]);return e};var oq=(e,t)=>[...n8(t),...n8(e)];function oZ(e,t){let r=0;const n=[...e];for(const e of t){n.splice(e-r,1);r++}return nN(n).length?n:[]}var oG=(e,t)=>nH(t)?[]:oZ(e,n8(t).sort((e,t)=>e-t));var oQ=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};var o$=(e,t,r)=>{e[t]=r;return e};/**
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
 */function oJ(e){const t=nR();const{control:r=t.control,name:n,keyName:o="id",shouldUnregister:a,rules:i}=e;const[s,l]=React.useState(r._getFieldArray(n));const d=React.useRef(r._getFieldArray(n).map(oB));const c=React.useRef(false);r._names.array.add(n);React.useMemo(()=>i&&s.length>=0&&r.register(n,i),[r,n,s.length,i]);nq(()=>r._subjects.array.subscribe({next:({values:e,name:t})=>{if(t===n||!t){const t=nV(e,n);if(Array.isArray(t)){l(t);d.current=t.map(oB)}}}}).unsubscribe,[r,n]);const u=React.useCallback(e=>{c.current=true;r._setFieldArray(n,e)},[r,n]);const f=(e,t)=>{const o=n8(nT(e));const a=oP(r._getFieldArray(n),o);r._names.focus=oj(n,a.length-1,t);d.current=oP(d.current,o.map(oB));u(a);l(a);r._setFieldArray(n,a,oP,{argA:oR(e)})};const p=(e,t)=>{const o=n8(nT(e));const a=oq(r._getFieldArray(n),o);r._names.focus=oj(n,0,t);d.current=oq(d.current,o.map(oB));u(a);l(a);r._setFieldArray(n,a,oq,{argA:oR(e)})};const h=e=>{const t=oG(r._getFieldArray(n),e);d.current=oG(d.current,e);u(t);l(t);!Array.isArray(nV(r._fields,n))&&nK(r._fields,n,undefined);r._setFieldArray(n,t,oG,{argA:e})};const v=(e,t,o)=>{const a=n8(nT(t));const i=oz(r._getFieldArray(n),e,a);r._names.focus=oj(n,e,o);d.current=oz(d.current,e,a.map(oB));u(i);l(i);r._setFieldArray(n,i,oz,{argA:e,argB:oR(t)})};const g=(e,t)=>{const o=r._getFieldArray(n);oQ(o,e,t);oQ(d.current,e,t);u(o);l(o);r._setFieldArray(n,o,oQ,{argA:e,argB:t},false)};const m=(e,t)=>{const o=r._getFieldArray(n);oU(o,e,t);oU(d.current,e,t);u(o);l(o);r._setFieldArray(n,o,oU,{argA:e,argB:t},false)};const b=(e,t)=>{const o=nT(t);const a=o$(r._getFieldArray(n),e,o);d.current=[...a].map((t,r)=>!t||r===e?oB():d.current[r]);u(a);l([...a]);r._setFieldArray(n,a,o$,{argA:e,argB:o},true,false)};const y=e=>{const t=n8(nT(e));d.current=t.map(oB);u([...t]);l([...t]);r._setFieldArray(n,[...t],e=>e,{},true,false)};React.useEffect(()=>{r._state.action=false;oD(n,r._names)&&r._subjects.state.next({...r._formState});if(c.current&&(!ok(r._options.mode).isOnSubmit||r._formState.isSubmitted)&&!ok(r._options.reValidateMode).isOnSubmit){if(r._options.resolver){r._runSchema([n]).then(e=>{const t=nV(e.errors,n);const o=nV(r._formState.errors,n);if(o?!t&&o.type||t&&(o.type!==t.type||o.message!==t.message):t&&t.type){t?nK(r._formState.errors,n,t):od(r._formState.errors,n);r._subjects.state.next({errors:r._formState.errors})}})}else{const e=nV(r._fields,n);if(e&&e._f&&!(ok(r._options.reValidateMode).isOnSubmit&&ok(r._options.mode).isOnSubmit)){oL(e,r._names.disabled,r._formValues,r._options.criteriaMode===nB.all,r._options.shouldUseNativeValidation,true).then(e=>!n4(e)&&r._subjects.state.next({errors:oN(r._formState.errors,e,n)}))}}}r._subjects.state.next({name:n,values:nT(r._formValues)});r._names.focus&&oM(r._fields,(e,t)=>{if(r._names.focus&&t.startsWith(r._names.focus)&&e.focus){e.focus();return 1}return});r._names.focus="";r._setValid();c.current=false},[s,n,r]);React.useEffect(()=>{!nV(r._formValues,n)&&r._setFieldArray(n);return()=>{const e=(e,t)=>{const n=nV(r._fields,e);if(n&&n._f){n._f.mount=t}};r._options.shouldUnregister||a?r.unregister(n):e(n,false)}},[n,r,o,a]);return{swap:React.useCallback(g,[u,n,r]),move:React.useCallback(m,[u,n,r]),prepend:React.useCallback(p,[u,n,r]),append:React.useCallback(f,[u,n,r]),remove:React.useCallback(h,[u,n,r]),insert:React.useCallback(v,[u,n,r]),update:React.useCallback(b,[u,n,r]),replace:React.useCallback(y,[u,n,r]),fields:React.useMemo(()=>s.map((e,t)=>({...e,[o]:d.current[t]||oB()})),[s,o])}}/**
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
 */function oX(e={}){const t=m.useRef(undefined);const r=m.useRef(undefined);const[n,o]=m.useState({isDirty:false,isValidating:false,isLoading:ot(e.defaultValues),isSubmitted:false,isSubmitting:false,isSubmitSuccessful:false,isValid:false,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||false,isReady:false,defaultValues:ot(e.defaultValues)?undefined:e.defaultValues});if(!t.current){if(e.formControl){t.current={...e.formControl,formState:n};if(e.defaultValues&&!ot(e.defaultValues)){e.formControl.reset(e.defaultValues,e.resetOptions)}}else{const{formControl:r,...o}=oW(e);t.current={...o,formState:n}}}const a=t.current.control;a._options=e;nq(()=>{const e=a._subscribe({formState:a._proxyFormState,callback:()=>o({...a._formState}),reRenderRoot:true});o(e=>({...e,isReady:true}));a._formState.isReady=true;return e},[a]);m.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]);m.useEffect(()=>{if(e.mode){a._options.mode=e.mode}if(e.reValidateMode){a._options.reValidateMode=e.reValidateMode}},[a,e.mode,e.reValidateMode]);m.useEffect(()=>{if(e.errors){a._setErrors(e.errors);a._focusError()}},[a,e.errors]);m.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]);m.useEffect(()=>{if(a._proxyFormState.isDirty){const e=a._getDirty();if(e!==n.isDirty){a._subjects.state.next({isDirty:e})}}},[a,n.isDirty]);m.useEffect(()=>{var t;if(e.values&&!nJ(e.values,r.current)){a._reset(e.values,{keepFieldsRef:true,...a._options.resetOptions});if(!((t=a._options.resetOptions)===null||t===void 0?void 0:t.keepIsValid)){a._setValid()}r.current=e.values;o(e=>({...e}))}else{a._resetDefaultValues()}},[a,e.values]);m.useEffect(()=>{if(!a._state.mount){a._setValid();a._state.mount=true}if(a._state.watch){a._state.watch=false;a._subjects.state.next({...a._formState})}a._removeUnmounted()});t.current.formState=nU(n,a);return t.current}/**
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
 */const o0=({control:e,names:t,render:r})=>r(nX({control:e,name:t}));//# sourceMappingURL=index.esm.mjs.map
// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/create-variation.ts
var o1=r(7367);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var o2=r(3757);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/MagicButton.tsx
var o5=/*#__PURE__*/b().forwardRef((e,t)=>{var{className:r,variant:n,size:o,children:a,type:i="button",disabled:s=false,roundedFull:d=true,loading:c}=e,u=(0,v._)(e,["className","variant","size","children","type","disabled","roundedFull","loading"]);return/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,h._)((0,p._)({type:i,ref:t,css:o8({variant:n,size:o,rounded:d?"true":"false"}),className:r,disabled:s},u),{children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:o9.buttonSpan,children:c?/*#__PURE__*/(0,l/* .jsx */.Y)(o2/* ["default"] */.Ay,{size:24}):a})}))});/* export default */const o6=o5;var o9={buttonSpan:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.flexCenter */.x.flexCenter(),";z-index:",y/* .zIndex.positive */.fE.positive,";"),base:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small("medium"),";display:flex;gap:",y/* .spacing["4"] */.YK["4"],";width:100%;justify-content:center;align-items:center;white-space:nowrap;position:relative;overflow:hidden;transition:box-shadow 0.5s ease;&:focus-visible{outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{cursor:not-allowed;background:",y/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";pointer-events:none;color:",y/* .colorTokens.text.disable */.I6.text.disable,";border-color:",y/* .colorTokens.stroke.disable */.I6.stroke.disable,";}"),default:e=>/*#__PURE__*/(0,c/* .css */.AH)("background:",!e?y/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1:y/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";color:",y/* .colorTokens.text.white */.I6.text.white,";&::before{content:'';position:absolute;inset:0;background:",!e?y/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:y/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";opacity:0;transition:opacity 0.5s ease;}&:hover::before{opacity:1;}"),secondary:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",y/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",y/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";&:hover{background-color:",y/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}"),outline:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&::before{content:'';position:absolute;inset:0;background:",y/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";color:",y/* .colorTokens.text.primary */.I6.text.primary,";border:1px solid transparent;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;}&:hover{&::before{background:",y/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2,";}}"),primaryOutline:/*#__PURE__*/(0,c/* .css */.AH)("border:1px solid ",y/* .colorTokens.brand.blue */.I6.brand.blue,";color:",y/* .colorTokens.brand.blue */.I6.brand.blue,";&:hover{background-color:",y/* .colorTokens.brand.blue */.I6.brand.blue,";color:",y/* .colorTokens.text.white */.I6.text.white,";}"),primary:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",y/* .colorTokens.brand.blue */.I6.brand.blue,";color:",y/* .colorTokens.text.white */.I6.text.white,";"),ghost:/*#__PURE__*/(0,c/* .css */.AH)("background-color:transparent;color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";border-radius:",y/* .borderRadius["4"] */.Vq["4"],";&:hover{color:",y/* .colorTokens.text.primary */.I6.text.primary,";}"),plain:/*#__PURE__*/(0,c/* .css */.AH)("span{background:",!r1/* .isRTL */.V8?y/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient:y/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&:hover{background:",!r1/* .isRTL */.V8?y/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:y/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}}"),size:{default:/*#__PURE__*/(0,c/* .css */.AH)("height:32px;padding-inline:",y/* .spacing["12"] */.YK["12"],";padding-block:",y/* .spacing["4"] */.YK["4"],";"),sm:/*#__PURE__*/(0,c/* .css */.AH)("height:24px;padding-inline:",y/* .spacing["10"] */.YK["10"],";"),icon:/*#__PURE__*/(0,c/* .css */.AH)("width:32px;height:32px;")},rounded:{true:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:",y/* .borderRadius["54"] */.Vq["54"],";&::before{border-radius:",y/* .borderRadius["54"] */.Vq["54"],";}"),false:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:",y/* .borderRadius["4"] */.Vq["4"],";&::before{border-radius:",y/* .borderRadius["4"] */.Vq["4"],";}")}};var o8=(0,o1/* .createVariation */.s)({variants:{variant:{default:o9.default(r1/* .isRTL */.V8),primary:o9.primary,secondary:o9.secondary,outline:o9.outline,primary_outline:o9.primaryOutline,ghost:o9.ghost,plain:o9.plain},size:{default:o9.size.default,sm:o9.size.sm,icon:o9.size.icon},rounded:{true:o9.rounded.true,false:o9.rounded.false}},defaultVariants:{variant:"default",size:"default",rounded:"true"}},o9.base);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hoc/withVisibilityControl.tsx + 1 modules
var o3=r(9586);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
function o7(){var e=(0,g._)(["\n        resize: vertical;\n      "]);o7=function t(){return e};return e}var o4=6;var ae=e=>{var{label:t,rows:r=o4,columns:n,maxLimit:o,field:a,fieldState:i,disabled:s,readOnly:d,loading:c,placeholder:u,helpText:f,onChange:v,onKeyDown:g,isHidden:b,enableResize:y=true,isSecondary:_=false,isMagicAi:w=false,inputCss:x,maxHeight:C,autoResize:k=false}=e;var A;var Y=(A=a.value)!==null&&A!==void 0?A:"";var I=(0,m.useRef)(null);var D=undefined;if(o){D={maxLimit:o,inputCharacter:Y.toString().length}}var M=()=>{if(I.current){if(C){I.current.style.maxHeight="".concat(C,"px")}I.current.style.height="auto";I.current.style.height="".concat(I.current.scrollHeight,"px")}};(0,m.useLayoutEffect)(()=>{if(k){M()}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{label:t,field:a,fieldState:i,disabled:s,readOnly:d,loading:c,placeholder:u,helpText:f,isHidden:b,characterCount:D,isSecondary:_,isMagicAi:w,children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ar.container(y,x),children:/*#__PURE__*/(0,l/* .jsx */.Y)("textarea",(0,h._)((0,p._)({},a,e),{ref:e=>{a.ref(e);// @ts-ignore
I.current=e;// this is not ideal but it is the only way to set ref to the input element
},style:{maxHeight:C?"".concat(C,"px"):"none"},className:"tutor-input-field",value:Y,onChange:e=>{var{value:t}=e.target;if(o&&t.trim().length>o){return}a.onChange(t);if(v){v(t)}if(k){M()}},onKeyDown:e=>{g===null||g===void 0?void 0:g(e.key)},autoComplete:"off",rows:r,cols:n}))})})}})};/* export default */const at=(0,o3/* .withVisibilityControl */.M)(ae);var ar={container:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false,t=arguments.length>1?arguments[1]:void 0;return/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;textarea{",_/* .typography.body */.I.body(),";height:auto;padding:",y/* .spacing["8"] */.YK["8"]," ",y/* .spacing["12"] */.YK["12"],";resize:none;",r7/* .styleUtils.overflowYAuto */.x.overflowYAuto,";&.tutor-input-field{",t,";}",e&&(0,c/* .css */.AH)(o7()),"}")}};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/For.tsx
var an=r(7073);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/OptionList.tsx
var ao=e=>{var{options:t,onChange:r}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:aa.wrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(an/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>r(e.value),css:aa.item,children:e.label},t)}})})};var aa={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;padding-block:",y/* .spacing["8"] */.YK["8"],";max-height:400px;overflow-y:auto;"),item:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.caption */.I.caption(),";width:100%;padding:",y/* .spacing["4"] */.YK["4"]," ",y/* .spacing["16"] */.YK["16"],";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;align-items:center;&:hover{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";color:",y/* .colorTokens.text.title */.I6.text.title,";}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/controls/Show.tsx
var ai=r(6025);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/hooks/useAnimation.tsx + 1 modules
var as=r(203);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useSelectKeyboardNavigation.ts
var al=e=>{var{options:t,isOpen:r,onSelect:n,onClose:o,selectedValue:a}=e;var[i,s]=(0,m.useState)(-1);var l=(0,m.useCallback)(e=>{if(!r)return;var a=(e,r)=>{var n;var o=e;var a=r==="down"?1:-1;do{o+=a;if(o<0)o=t.length-1;if(o>=t.length)o=0}while(o>=0&&o<t.length&&t[o].disabled)if((n=t[o])===null||n===void 0?void 0:n.disabled){return e}return o};switch(e.key){case"ArrowDown":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"down");return t});break;case"ArrowUp":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"up");return t});break;case"Enter":e.preventDefault();e.stopPropagation();if(i>=0&&i<t.length){var l=t[i];if(!l.disabled){o();n(l)}}break;case"Escape":e.preventDefault();e.stopPropagation();o();break;default:break}},[r,t,i,n,o]);(0,m.useEffect)(()=>{if(r){if(i===-1){var e=t.findIndex(e=>e.value===a);var n=e>=0?e:t.findIndex(e=>!e.disabled);s(n)}document.addEventListener("keydown",l,true);return()=>document.removeEventListener("keydown",l,true)}},[r,l,t,a,i]);(0,m.useEffect)(()=>{if(!r){s(-1)}},[r]);var d=(0,m.useCallback)(e=>{var r;if(!((r=t[e])===null||r===void 0?void 0:r.disabled)){s(e)}},[t]);return{activeIndex:i,setActiveIndex:d}};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/molecules/Popover.tsx
var ad=r(370);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/types.ts
var ac=r(8638);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
function au(){var e=(0,g._)(["\n      &::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: ",";\n        color: ",";\n        border: 1px solid transparent;\n        -webkit-mask:\n          linear-gradient(#fff 0 0) padding-box,\n          linear-gradient(#fff 0 0);\n        -webkit-mask-composite: xor;\n        mask-composite: exclude;\n        border-radius: 6px;\n      }\n    "]);au=function t(){return e};return e}function af(){var e=(0,g._)(["\n        height: 32px;\n        padding-top: ",";\n        padding-bottom: ",";\n      "]);af=function t(){return e};return e}function ap(){var e=(0,g._)(["\n        padding-left: ",";\n      "]);ap=function t(){return e};return e}function ah(){var e=(0,g._)(["\n          height: 48px;\n          padding-bottom: ",";\n        "]);ah=function t(){return e};return e}function av(){var e=(0,g._)(["\n        height: 56px;\n        padding-bottom: ",";\n\n        ","\n      "]);av=function t(){return e};return e}function ag(){var e=(0,g._)(["\n        background-color: ",";\n      "]);ag=function t(){return e};return e}function am(){var e=(0,g._)(["\n        position: relative;\n        border: none;\n        background: transparent;\n      "]);am=function t(){return e};return e}function ab(){var e=(0,g._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);ab=function t(){return e};return e}function ay(){var e=(0,g._)(["\n          border-color: ",";\n          background-color: ",";\n        "]);ay=function t(){return e};return e}function a_(){var e=(0,g._)(["\n      bottom: ",";\n    "]);a_=function t(){return e};return e}function aw(){var e=(0,g._)(["\n      padding-left: calc("," + 1px);\n    "]);aw=function t(){return e};return e}function ax(){var e=(0,g._)(["\n        color: ",";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "]);ax=function t(){return e};return e}function aC(){var e=(0,g._)(["\n      min-width: 200px;\n    "]);aC=function t(){return e};return e}function ak(){var e=(0,g._)(["\n      background-color: ",";\n    "]);ak=function t(){return e};return e}function aA(){var e=(0,g._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);aA=function t(){return e};return e}function aY(){var e=(0,g._)(["\n      transform: rotate(180deg);\n    "]);aY=function t(){return e};return e}var aI=e=>{var{size:t="regular",leftIconPadding:r=48,wrapperCss:n,options:o,field:a,fieldState:i,onChange:s=w/* .noop */.lQ,label:d,placeholder:c="",disabled:g,readOnly:b,loading:y,isSearchable:_=false,isInlineLabel:x,hideCaret:C,listLabel:k,isClearable:A=false,helpText:Y,removeOptionsMinWidth:I=false,leftIcon:D,iconSize:M,removeBorder:S,dataAttribute:F,isSecondary:E=false,isMagicAi:H=false,isAiOutline:N=false,selectOnFocus:O,optionItemCss:V}=e;var L;var K=M!==null&&M!==void 0?M:t==="small"?20:32;var W=(0,m.useCallback)(()=>o.find(e=>e.value===a.value)||{label:"",value:"",description:""},[a.value,o]);var B=(0,m.useMemo)(()=>o.some(e=>(0,ac/* .isDefined */.O9)(e.description)),[o]);var[j,P]=(0,m.useState)((L=W())===null||L===void 0?void 0:L.label);var[R,z]=(0,m.useState)(false);var[U,q]=(0,m.useState)("");var[Z,G]=(0,m.useState)(false);var Q=(0,m.useRef)(null);var $=(0,m.useRef)(null);var J=(0,m.useRef)(null);var X=(0,m.useRef)(null);var ee=(0,m.useMemo)(()=>{if(_){return o.filter(e=>{var{label:t}=e;return t.toLowerCase().includes(U.toLowerCase())})}return o},[U,_,o]);var et=(0,m.useMemo)(()=>{return o.find(e=>e.value===a.value)},[a.value,o]);var er=(0,p._)({},(0,ac/* .isDefined */.O9)(F)&&{[F]:true});(0,m.useEffect)(()=>{var e;P((e=W())===null||e===void 0?void 0:e.label)},[a.value,W]);(0,m.useEffect)(()=>{if(Z){var e;P((e=W())===null||e===void 0?void 0:e.label)}},[W,Z]);var en=(e,t)=>{t===null||t===void 0?void 0:t.stopPropagation();if(!e.disabled){G(false);z(false);q("");a.onChange(e.value);s(e)}};var{activeIndex:eo,setActiveIndex:ea}=al({options:ee,isOpen:Z,selectedValue:a.value,onSelect:en,onClose:()=>{G(false);z(false);q("")}});(0,m.useEffect)(()=>{if(Z&&eo>=0&&X.current){X.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[Z,eo]);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{fieldState:i,field:a,label:d,disabled:g||o.length===0,readOnly:b,loading:y,isInlineLabel:x,helpText:Y,removeBorder:S,isSecondary:E,isMagicAi:H,children:e=>{var s,d;var{css:m}=e,w=(0,v._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aM.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aM.inputWrapper(N),ref:$,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aM.leftIcon,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:D,children:D}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:et===null||et===void 0?void 0:et.icon,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:e,width:K,height:K})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:{width:"100%"},children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},w,er),{ref:e=>{a.ref(e);// @ts-ignore
Q.current=e;// this is not ideal but it is the only way to set ref to the input element
},className:"tutor-input-field",css:[m,n,aM.input({hasLeftIcon:!!D||!!(et===null||et===void 0?void 0:et.icon),leftIconPadding:r,hasDescription:B,hasError:!!i.error,isMagicAi:H,isAiOutline:N,size:t})],autoComplete:"off",readOnly:b||!_,placeholder:c,value:R?U:j,title:j,onClick:e=>{var t;e.stopPropagation();G(e=>!e);(t=Q.current)===null||t===void 0?void 0:t.focus()},onKeyDown:e=>{if(e.key==="Enter"){var t;e.preventDefault();G(e=>!e);(t=Q.current)===null||t===void 0?void 0:t.focus()}if(e.key==="Tab"){G(false)}},onFocus:O&&_?e=>{e.target.select()}:undefined,onChange:e=>{P(e.target.value);if(_){z(true);q(e.target.value)}},"data-select":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:B,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:aM.description({hasLeftIcon:!!D,leftIconPadding:r,size:t}),title:(s=W())===null||s===void 0?void 0:s.description,children:(d=W())===null||d===void 0?void 0:d.description})})]}),!C&&!y&&/*#__PURE__*/(0,l/* .jsx */.Y)("button",{tabIndex:-1,type:"button",css:aM.caretButton({isOpen:Z}),onClick:()=>{var e;G(e=>!e);(e=Q.current)===null||e===void 0?void 0:e.focus()},disabled:g||b||o.length===0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"chevronDown",width:t==="small"?16:20,height:t==="small"?16:20})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{triggerRef:$,isOpen:Z,dependencies:[ee.length],animationType:as/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{G(false);z(false);q("")},children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[aM.options(I)],children:[!!k&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:aM.listLabel,children:k}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:ee.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:aM.emptyState,children:(0,u.__)("No options available","tutor-pro")}),children:ee.map((e,t)=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{ref:e.value===a.value?J:eo===t?X:null,css:[aM.optionItem({isSelected:e.value===a.value,isActive:t===eo,isDisabled:!!e.disabled}),V],children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:aM.label,onClick:t=>{if(!e.disabled){en(e,t)}},disabled:e.disabled,title:e.label,onMouseOver:()=>ea(t),onMouseLeave:()=>t!==eo&&ea(-1),onFocus:()=>ea(t),"aria-selected":eo===t,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:e.icon,width:K,height:K})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))}),A&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:aM.clearButton({isDisabled:j===""}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",disabled:j==="",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"delete"}),onClick:()=>{a.onChange(null);P("");q("");G(false)},children:(0,u.__)("Clear","tutor-pro")})})]})})]})}})};/* export default */const aD=aI;var aM={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;",e&&(0,c/* .css */.AH)(au(),y/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,y/* .colorTokens.text.primary */.I6.text.primary))},leftIcon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;left:",y/* .spacing["8"] */.YK["8"],";",r7/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;height:100%;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";z-index:",y/* .zIndex.positive */.fE.positive,";"),input:e=>{var{hasLeftIcon:t,leftIconPadding:r,hasDescription:n,hasError:o=false,isMagicAi:a=false,isAiOutline:i=false,size:s}=e;return/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",_/* .typography.body */.I.body(),";width:100%;cursor:pointer;padding-right:",y/* .spacing["32"] */.YK["32"],";",r7/* .styleUtils.textEllipsis */.x.textEllipsis,";background-color:transparent;background-color:",y/* .colorTokens.background.white */.I6.background.white,";",s==="small"&&(0,c/* .css */.AH)(af(),y/* .spacing["6"] */.YK["6"],y/* .spacing["6"] */.YK["6"])," ",t&&(0,c/* .css */.AH)(ap(),y/* .spacing */.YK[r])," ",n&&(0,c/* .css */.AH)(av(),y/* .spacing["24"] */.YK["24"],s==="small"&&(0,c/* .css */.AH)(ah(),y/* .spacing["20"] */.YK["20"]))," ",o&&(0,c/* .css */.AH)(ag(),y/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",i&&(0,c/* .css */.AH)(am()),":focus{",r7/* .styleUtils.inputFocus */.x.inputFocus,";",a&&(0,c/* .css */.AH)(ab(),y/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,y/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",o&&(0,c/* .css */.AH)(ay(),y/* .colorTokens.stroke.danger */.I6.stroke.danger,y/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),"}}")},description:e=>{var{hasLeftIcon:t,leftIconPadding:r,size:n}=e;return/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";",r7/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    color:",y/* .colorTokens.text.hints */.I6.text.hints,";position:absolute;bottom:",y/* .spacing["8"] */.YK["8"],";padding-inline:calc(",y/* .spacing["16"] */.YK["16"]," + 1px) ",y/* .spacing["32"] */.YK["32"],";",n==="small"&&(0,c/* .css */.AH)(a_(),y/* .spacing["4"] */.YK["4"])," ",t&&(0,c/* .css */.AH)(aw(),y/* .spacing */.YK[r]))},listLabel:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";min-height:40px;display:flex;align-items:center;padding-left:",y/* .spacing["16"] */.YK["16"],";"),clearButton:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["4"] */.YK["4"]," ",y/* .spacing["8"] */.YK["8"],";border-top:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";& > button{padding:0;width:100%;font-size:",y/* .fontSize["12"] */.J["12"],";> span{justify-content:center;}",!t&&(0,c/* .css */.AH)(ax(),y/* .colorTokens.text.title */.I6.text.title),"}")},options:e=>/*#__PURE__*/(0,c/* .css */.AH)("z-index:",y/* .zIndex.dropdown */.fE.dropdown,";background-color:",y/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",y/* .shadow.popover */.r7.popover,";padding:",y/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",y/* .borderRadius["6"] */.Vq["6"],";",r7/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,c/* .css */.AH)(aC())),optionItem:e=>{var{isSelected:t=false,isActive:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:",n?"not-allowed":"pointer",";opacity:",n?.5:1,";",r&&(0,c/* .css */.AH)(ak(),y/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",!n&&y/* .colorTokens.background.hover */.I6.background.hover,";}",!n&&t&&(0,c/* .css */.AH)(aA(),y/* .colorTokens.background.active */.I6.background.active,y/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],y/* .borderRadius["6"] */.Vq["6"],y/* .borderRadius["6"] */.Vq["6"]))},label:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",r7/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",y/* .colorTokens.text.title */.I6.text.title,";width:100%;height:100%;display:flex;align-items:center;gap:",y/* .spacing["8"] */.YK["8"],";margin:0 ",y/* .spacing["12"] */.YK["12"],";padding:",y/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",y/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background-color:transparent;color:",y/* .colorTokens.text.title */.I6.text.title,";}span{flex-shrink:0;",r7/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"      width:100%;}svg{flex-shrink:0;}"),arrowUpDown:/*#__PURE__*/(0,c/* .css */.AH)("color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;justify-content:center;align-items:center;margin-top:",y/* .spacing["2"] */.YK["2"],";"),optionsContainer:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;max-width:calc(100% - 32px);"),caretButton:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";position:absolute;right:",y/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",y/* .borderRadius["4"] */.Vq["4"],";padding:",y/* .spacing["6"] */.YK["6"],";height:100%;&:focus,&:active,&:hover{background:none;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,c/* .css */.AH)(aY()))},emptyState:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.flexCenter */.x.flexCenter(),";padding:",y/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/config/magic-ai.ts
var aS=[{label:"English",value:"english"},{label:"简体中文",value:"simplified-chinese"},{label:"繁體中文",value:"traditional-chinese"},{label:"Español",value:"spanish"},{label:"Français",value:"french"},{label:"日本語",value:"japanese"},{label:"Deutsch",value:"german"},{label:"Português",value:"portuguese"},{label:"العربية",value:"arabic"},{label:"Русский",value:"russian"},{label:"Italiano",value:"italian"},{label:"한국어",value:"korean"},{label:"हिन्दी",value:"hindi"},{label:"Nederlands",value:"dutch"},{label:"Polski",value:"polish"},{label:"አማርኛ",value:"amharic"},{label:"Български",value:"bulgarian"},{label:"বাংলা",value:"bengali"},{label:"Čeština",value:"czech"},{label:"Dansk",value:"danish"},{label:"Ελληνικά",value:"greek"},{label:"Eesti",value:"estonian"},{label:"فارسی",value:"persian"},{label:"Filipino",value:"filipino"},{label:"Hrvatski",value:"croatian"},{label:"Magyar",value:"hungarian"},{label:"Bahasa Indonesia",value:"indonesian"},{label:"Lietuvių",value:"lithuanian"},{label:"Latviešu",value:"latvian"},{label:"Melayu",value:"malay"},{label:"Norsk",value:"norwegian"},{label:"Română",value:"romanian"},{label:"Slovenčina",value:"slovak"},{label:"Slovenščina",value:"slovenian"},{label:"Српски",value:"serbian"},{label:"Svenska",value:"swedish"},{label:"ภาษาไทย",value:"thai"},{label:"Türkçe",value:"turkish"},{label:"Українська",value:"ukrainian"},{label:"اردو",value:"urdu"},{label:"Tiếng Việt",value:"vietnamese"}];var aF=[{label:(0,u.__)("Formal","tutor-pro"),value:"formal"},{label:(0,u.__)("Casual","tutor-pro"),value:"casual"},{label:(0,u.__)("Professional","tutor-pro"),value:"professional"},{label:(0,u.__)("Enthusiastic","tutor-pro"),value:"enthusiastic"},{label:(0,u.__)("Informational","tutor-pro"),value:"informational"},{label:(0,u.__)("Funny","tutor-pro"),value:"funny"}];var aT=[{label:(0,u.__)("Title","tutor-pro"),value:"title"},{label:(0,u.__)("Essay","tutor-pro"),value:"essay"},{label:(0,u.__)("Paragraph","tutor-pro"),value:"paragraph"},{label:(0,u.__)("Outline","tutor-pro"),value:"outline"}];// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/PromptControls.tsx
var aE=e=>{var{form:t}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aH.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:t.control,name:"characters",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,h._)((0,p._)({},e),{isMagicAi:true,label:(0,u.__)("Character Limit","tutor-pro"),type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:t.control,name:"language",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(aD,(0,h._)((0,p._)({},e),{isMagicAi:true,label:(0,u.__)("Language","tutor-pro"),options:aS}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:t.control,name:"tone",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(aD,(0,h._)((0,p._)({},e),{isMagicAi:true,options:aF,label:(0,u.__)("Tone","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:t.control,name:"format",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(aD,(0,h._)((0,p._)({},e),{isMagicAi:true,label:(0,u.__)("Format","tutor-pro"),options:aT}))})]})};var aH={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:repeat(2,1fr);gap:",y/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Skeleton.tsx
function aN(){var e=(0,g._)(["\n      border-radius: ",";\n    "]);aN=function t(){return e};return e}function aO(){var e=(0,g._)(["\n          background: linear-gradient(89.17deg, #fef4ff 0.2%, #f9d3ff 50.09%, #fef4ff 96.31%);\n        "]);aO=function t(){return e};return e}function aV(){var e=(0,g._)(["\n      :after {\n        content: '';\n        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);\n        position: absolute;\n        transform: translateX(-100%);\n        inset: 0;\n        ","\n\n        animation: ","s linear 0.5s infinite normal none running ",";\n      }\n    "]);aV=function t(){return e};return e}var aL=/*#__PURE__*/(0,m.forwardRef)((e,t)=>{var{width:r="100%",height:n=16,animation:o=false,isMagicAi:a=false,isRound:i=false,animationDuration:s=1.6,className:d}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("span",{ref:t,css:aB.skeleton(r,n,o,a,i,s),className:d})});/* export default */const aK=aL;var aW={wave:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{transform:translateX(-100%);}50%{transform:translateX(0%);}100%{transform:translateX(100%);}")};var aB={skeleton:(e,t,r,n,o,a)=>/*#__PURE__*/(0,c/* .css */.AH)("display:block;width:",(0,ac/* .isNumber */.Et)(e)?"".concat(e,"px"):e,";height:",(0,ac/* .isNumber */.Et)(t)?"".concat(t,"px"):t,";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";background-color:",!n?"rgba(0, 0, 0, 0.11)":y/* .colorTokens.background.magicAi.skeleton */.I6.background.magicAi.skeleton,";position:relative;-webkit-mask-image:-webkit-radial-gradient(center,white,black);overflow:hidden;",o&&(0,c/* .css */.AH)(aN(),y/* .borderRadius.circle */.Vq.circle)," ",r&&(0,c/* .css */.AH)(aV(),n&&(0,c/* .css */.AH)(aO()),a,aW.wave))};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/magic-ai-content/SkeletonLoader.tsx
var aj=()=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aR.container,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aR.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"20%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"40%",height:"12px"})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:aR.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"80%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,isMagicAi:true,width:"80%",height:"12px"})]})]})};/* export default */const aP=aj;var aR={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",y/* .spacing["8"] */.YK["8"],";"),container:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",y/* .spacing["32"] */.YK["32"],";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useFormWithGlobalError.ts
var az=e=>{var[t,r]=(0,m.useState)();var n=oX(e);return(0,h._)((0,p._)({},n),{submitError:t,setSubmitError:r})};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useMutation.js + 1 modules
var aU=r(7947);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/atoms/Toast.tsx
var aq=r(3833);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/api.ts + 50 modules
var aZ=r(6243);// EXTERNAL MODULE: ../tutor/assets/core/ts/utils/endpoints.ts
var aG=r(7152);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/magic-ai.ts
var aQ=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_IMAGE,e)};var a$=()=>{return useMutation({mutationFn:aQ})};var aJ=e=>{return wpAjaxInstance.post(endpoints.MAGIC_FILL_AI_IMAGE,e).then(e=>e.data.data[0].b64_json)};var aX=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:aJ,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var a0=e=>{return aZ/* .wpAjaxInstance.post */.b.post(aG/* ["default"].MAGIC_TEXT_GENERATION */.A.MAGIC_TEXT_GENERATION,e)};var a1=()=>{var{showToast:e}=(0,aq/* .useToast */.d)();return(0,aU/* .useMutation */.n)({mutationFn:a0,onError:t=>{e({type:"danger",message:(0,w/* .convertToErrorMessage */.EL)(t)})}})};var a2=e=>{return aZ/* .wpAjaxInstance.post */.b.post(aG/* ["default"].MAGIC_AI_MODIFY_CONTENT */.A.MAGIC_AI_MODIFY_CONTENT,e)};var a5=()=>{var{showToast:e}=(0,aq/* .useToast */.d)();return(0,aU/* .useMutation */.n)({mutationFn:a2,onError:t=>{e({type:"danger",message:(0,w/* .convertToErrorMessage */.EL)(t)})}})};var a6=e=>{return wpAjaxInstance.post(endpoints.USE_AI_GENERATED_IMAGE,e)};var a9=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:a6,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var a8=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var a3=e=>{var{showToast:t}=useToast();return useMutation({mutationKey:["GenerateCourseContent",e],mutationFn:a8,onError:e=>{t({type:"danger",message:convertToErrorMessage(e)})}})};var a7=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var a4=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:a7,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var ie=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_TOPIC_CONTENT,e,{signal:e.signal})};var it=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:ie,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var ir=e=>{return wpAjaxInstance.post(endpoints.SAVE_AI_GENERATED_COURSE_CONTENT,e)};var io=()=>{var{showToast:e}=useToast();var t=useQueryClient();return useMutation({mutationFn:ir,onSuccess(){t.invalidateQueries({queryKey:["CourseDetails"]})},onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var ia=e=>{return wpAjaxInstance.post(endpoints.GENERATE_QUIZ_QUESTIONS,e,{signal:e.signal})};var ii=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:ia,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var is=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_QUIZ_QUESTIONS,e,{signal:e.signal})};var il=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:is,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var id=e=>{return aZ/* .wpAjaxInstance.post */.b.post(aG/* ["default"].OPEN_AI_SAVE_SETTINGS */.A.OPEN_AI_SAVE_SETTINGS,(0,p._)({},e))};var ic=()=>{var{showToast:e}=(0,aq/* .useToast */.d)();return(0,aU/* .useMutation */.n)({mutationFn:id,onSuccess:t=>{e({type:"success",message:t.message})},onError:t=>{e({type:"danger",message:(0,w/* .convertToErrorMessage */.EL)(t)})}})};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/BasicModalWrapper.tsx
var iu=r(3241);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/AITextModal.tsx
var ip=[(0,u.__)("Mastering Digital Marketing: A Complete Guide","tutor-pro"),(0,u.__)("The Ultimate Photoshop Course for Beginners","tutor-pro"),(0,u.__)("Python Programming: From Zero to Hero","tutor-pro"),(0,u.__)("Creative Writing Essentials: Unlock Your Storytelling Potential","tutor-pro"),(0,u.__)("The Complete Guide to Web Development with React","tutor-pro"),(0,u.__)("Master Public Speaking: Deliver Powerful Presentations","tutor-pro"),(0,u.__)("Excel for Business: From Basics to Advanced Analytics","tutor-pro"),(0,u.__)("Fitness Fundamentals: Build Strength and Confidence","tutor-pro"),(0,u.__)("Photography Made Simple: Capture Stunning Shots","tutor-pro"),(0,u.__)("Financial Freedom: Learn the Basics of Investing","tutor-pro")];var ih=e=>{var{title:t,icon:r,closeModal:n,field:o,format:a="essay",characters:i=250,is_html:s=false,fieldLabel:d="",fieldPlaceholder:v=""}=e;var g=az({defaultValues:{prompt:"",characters:i,language:"english",tone:"formal",format:a}});var b=a1();var _=a5();var[x,C]=(0,m.useState)([]);var[k,A]=(0,m.useState)(0);var[Y,I]=(0,m.useState)(false);var[D,M]=(0,m.useState)(null);var S=(0,m.useRef)(null);var F=(0,m.useRef)(null);var T=(0,m.useMemo)(()=>{return x[k]},[x,k]);var E=g.watch("prompt");function H(e){C(t=>[e,...t]);A(0)}function N(e,t){return nw(function*(){if(x.length===0){return}var r=x[k];if(e==="translation"&&!!t){var n=yield _.mutateAsync({type:"translation",content:r,language:t,is_html:s});if(n.data){H(n.data)}return}if(e==="change_tone"&&!!t){var o=yield _.mutateAsync({type:"change_tone",content:r,tone:t,is_html:s});if(o.data){H(o.data)}return}var a=yield _.mutateAsync({type:e,content:r,is_html:s});if(a.data){H(a.data)}})()}(0,m.useEffect)(()=>{g.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(iu/* ["default"] */.A,{onClose:n,title:t,icon:r,maxWidth:524,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("form",{onSubmit:g.handleSubmit(e=>nw(function*(){var t=yield b.mutateAsync((0,h._)((0,p._)({},e),{is_html:s}));if(t.data){H(t.data)}})()),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ig.container,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ig.fieldsWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:g.control,name:"prompt",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(at,(0,h._)((0,p._)({},e),{label:d||(0,u.__)("Craft Your Course Description","tutor-pro"),placeholder:v||(0,u.__)("Provide a brief overview of your course topic, target audience, and key takeaways","tutor-pro"),rows:4,isMagicAi:true}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:ig.inspireButton,onClick:()=>{var e=ip.length;var t=Math.floor(Math.random()*e);g.reset((0,h._)((0,p._)({},g.getValues()),{prompt:ip[t]}))},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"bulbLine"}),(0,u.__)("Inspire Me","tutor-pro")]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:!b.isPending&&!_.isPending,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(aP,{}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(ai/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(aE,{form:g}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ig.actionBar,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ig.navigation,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(ai/* ["default"] */.A,{when:x.length>1,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",onClick:()=>A(e=>Math.max(0,e-1)),disabled:k===0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:!r1/* .isRTL */.V8?"chevronLeft":"chevronRight",width:20,height:20})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ig.pageInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:k+1})," / ",x.length]}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",onClick:()=>A(e=>Math.min(x.length-1,e+1)),disabled:k===x.length-1,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:!r1/* .isRTL */.V8?"chevronRight":"chevronLeft",width:20,height:20})})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",onClick:()=>nw(function*(){if(x.length===0){return}var e=x[k];yield(0,w/* .copyToClipboard */.lW)(e);I(true);setTimeout(()=>{I(false)},1500)})(),children:/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:Y,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"copy",width:20,height:20}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"checkFilled",width:20,height:20,style:/*#__PURE__*/(0,c/* .css */.AH)("color:",y/* .colorTokens.text.success */.I6.text.success," !important;")})})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ig.content,dangerouslySetInnerHTML:{__html:T}})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ig.otherActions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",roundedFull:false,onClick:()=>N("rephrase"),children:(0,u.__)("Rephrase","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",roundedFull:false,onClick:()=>N("make_shorter"),children:(0,u.__)("Make Shorter","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)(o6,{variant:"outline",roundedFull:false,ref:S,onClick:()=>M("tone"),children:[(0,u.__)("Change Tone","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)(o6,{variant:"outline",roundedFull:false,ref:F,onClick:()=>M("translate"),children:[(0,u.__)("Translate to","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",roundedFull:false,onClick:()=>N("write_as_bullets"),children:(0,u.__)("Write as Bullets","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",roundedFull:false,onClick:()=>N("make_longer"),children:(0,u.__)("Make Longer","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",roundedFull:false,onClick:()=>N("simplify_language"),children:(0,u.__)("Simplify Language","tutor-pro")})]})]})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{isOpen:D==="tone",triggerRef:S,arrow:true,closePopover:()=>M(null),maxWidth:"160px",animationType:as/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ao,{options:aF,onChange:e=>nw(function*(){M(null);yield N("change_tone",e)})()})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{isOpen:D==="translate",triggerRef:F,closePopover:()=>M(null),maxWidth:"160px",animationType:as/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ao,{options:aS,onChange:e=>nw(function*(){M(null);yield N("translation",e)})()})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ig.footer,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(ai/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)(o6,{type:"submit",disabled:b.isPending||!E||_.isPending,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,u.__)("Generate Now","tutor-pro")]}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"outline",type:"submit",disabled:b.isPending||!E||_.isPending,children:(0,u.__)("Generate Again","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(o6,{variant:"primary",disabled:b.isPending||x.length===0||_.isPending,onClick:()=>{o.onChange(x[k]);n()},children:(0,u.__)("Use This","tutor-pro")})]})})]})})};/* export default */const iv=ih;var ig={container:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",y/* .spacing["16"] */.YK["16"],";"),fieldsWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;textarea{padding-bottom:",y/* .spacing["40"] */.YK["40"]," !important;}"),footer:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["12"] */.YK["12"]," ",y/* .spacing["16"] */.YK["16"],";display:flex;align-items:center;justify-content:end;gap:",y/* .spacing["10"] */.YK["10"],";box-shadow:0px 1px 0px 0px #e4e5e7 inset;button{width:fit-content;}"),pageInfo:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";color:",y/* .colorTokens.text.hints */.I6.text.hints,";& > span{font-weight:",y/* .fontWeight.medium */.Wy.medium,";color:",y/* .colorTokens.text.primary */.I6.text.primary,";}"),inspireButton:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",y/* .spacing["12"] */.YK["12"],";left:",y/* .spacing["12"] */.YK["12"],";border:1px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",y/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",y/* .spacing["4"] */.YK["4"],";color:",y/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",y/* .spacing["12"] */.YK["12"],";background-color:",y/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",y/* .colorTokens.background.brand */.I6.background.brand,";color:",y/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",y/* .colorTokens.background.disable */.I6.background.disable,";color:",y/* .colorTokens.text.disable */.I6.text.disable,";}"),navigation:/*#__PURE__*/(0,c/* .css */.AH)("margin-left:-",y/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;"),content:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";height:180px;overflow-y:auto;background-color:",y/* .colorTokens.background.magicAi["default"] */.I6.background.magicAi["default"],";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";padding:",y/* .spacing["6"] */.YK["6"]," ",y/* .spacing["12"] */.YK["12"],";color:",y/* .colorTokens.text.magicAi */.I6.text.magicAi,";"),actionBar:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),otherActions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;gap:",y/* .spacing["10"] */.YK["10"],";flex-wrap:wrap;& > button{width:fit-content;}")};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/modals/Modal.tsx
var im=r(2580);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/config/config.ts
var ib=r(4336);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/ProIdentifierModal.tsx
var iy={title:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[(0,u.__)("Upgrade to Tutor LMS Pro today and experience the power of ","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:r7/* .styleUtils.aiGradientText */.x.aiGradientText,children:(0,u.__)("AI Studio","tutor-pro")})]}),message:(0,u.__)("Upgrade your plan to access the AI feature","tutor-pro"),featuresTitle:(0,u.__)("Don’t miss out on this game-changing feature!","tutor-pro"),features:[(0,u.__)("Generate a complete course outline in seconds!","tutor-pro"),(0,u.__)("Let the AI Studio create Quizzes on your behalf and give your brain a well-deserved break.","tutor-pro"),(0,u.__)("Generate images, customize backgrounds, and even remove unwanted objects with ease.","tutor-pro"),(0,u.__)("Say goodbye to typos and grammar errors with AI-powered copy editing.","tutor-pro")],footer:/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{onClick:()=>window.open(ib/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"crown",width:24,height:24}),children:(0,u.__)("Get Tutor LMS Pro","tutor-pro")})};var i_=e=>{var{title:t=iy.title,message:r=iy.message,featuresTitle:n=iy.featuresTitle,features:o=iy.features,closeModal:a,image:i,image2x:s,footer:d=iy.footer}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(iu/* ["default"] */.A,{onClose:a,entireHeader:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:ix.message,children:r}),maxWidth:496,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ix.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsx */.Y)("h4",{css:ix.title,children:t})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("img",{css:ix.image,src:i,alt:typeof t==="string"?t:(0,u.__)("Illustration","tutor-pro"),srcSet:s?"".concat(i," ").concat(s," 2x"):undefined})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:ix.featuresTiTle,children:n})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:o.length,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ix.features,children:/*#__PURE__*/(0,l/* .jsx */.Y)(an/* ["default"] */.A,{each:o,children:(e,t)=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ix.feature,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:ix.checkIcon}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e})]},t)})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:d,children:d})]})})};/* export default */const iw=i_;var ix={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("padding:0 ",y/* .spacing["24"] */.YK["24"]," ",y/* .spacing["32"] */.YK["32"]," ",y/* .spacing["24"] */.YK["24"],";",r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["16"] */.YK["16"],";"),message:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";padding-left:",y/* .spacing["8"] */.YK["8"],";padding-top:",y/* .spacing["24"] */.YK["24"],";padding-bottom:",y/* .spacing["4"] */.YK["4"],";"),title:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.heading6 */.I.heading6("medium"),";color:",y/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),image:/*#__PURE__*/(0,c/* .css */.AH)("height:270px;width:100%;object-fit:cover;object-position:center;border-radius:",y/* .borderRadius["8"] */.Vq["8"],";"),featuresTiTle:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body("medium"),";color:",y/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),features:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["4"] */.YK["4"],";padding-right:",y/* .spacing["48"] */.YK["48"],";"),feature:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex(),";gap:",y/* .spacing["12"] */.YK["12"],";",_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.title */.I6.text.title,";span{text-wrap:pretty;}"),checkIcon:/*#__PURE__*/(0,c/* .css */.AH)("flex-shrink:0;color:",y/* .colorTokens.text.success */.I6.text.success,";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Alert.tsx
var iC={text:{warning:"#D47E00",success:"#D47E00",danger:"#f44337",info:"#D47E00",primary:"#D47E00"},icon:{warning:"#FAB000",success:"#FAB000",danger:"#f55e53",info:"#FAB000",primary:"#FAB000"},background:{warning:"#FBFAE9",success:"#FBFAE9",danger:"#fdd9d7",info:"#FBFAE9",primary:"#FBFAE9"}};var ik=e=>{var{children:t,type:r="warning",icon:n}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:iY.wrapper({type:r}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{style:iY.icon({type:r}),name:e,height:24,width:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:t})]})};/* export default */const iA=ik;var iY={wrapper:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";display:flex;align-items:start;padding:",y/* .spacing["8"] */.YK["8"]," ",y/* .spacing["12"] */.YK["12"],";width:100%;border-radius:",y/* .borderRadius.card */.Vq.card,";gap:",y/* .spacing["4"] */.YK["4"],";background-color:",iC.background[t],";color:",iC.text[t],";")},icon:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("color:",iC.icon[t],";flex-shrink:0;")}};// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormSwitch.tsx + 1 modules
var iI=r(978);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/utils/validation.ts
var iD=()=>({required:{value:true,message:(0,u.__)("This field is required","tutor-pro")}});var iM=e=>{var{maxValue:t,message:r}=e;return{maxLength:{value:t,message:r||__("Max. value should be ".concat(t),"tutor-pro")}}};var iS=()=>({validate:e=>{if((e===null||e===void 0?void 0:e.amount)===undefined){return __("The field is required","tutor-pro")}return undefined}});var iF=e=>{if(!isValid(new Date(e||""))){return __("Invalid date entered!","tutor-pro")}return undefined};var iT=e=>({validate:t=>{if(t&&e<t.length){return __("Maximum ".concat(e," character supported"),"tutor-pro")}return undefined}});var iE=e=>{if(!e){return undefined}var t=__("Invalid time entered!","tutor-pro");var[r,n]=e.split(":");if(!r||!n){return t}var[o,a]=n.split(" ");if(!o||!a){return t}if(r.length!==2||o.length!==2){return t}if(Number(r)<1||Number(r)>12){return t}if(Number(o)<0||Number(o)>59){return t}if(!["am","pm"].includes(a.toLowerCase())){return t}return undefined};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/SetupOpenAiModal.tsx
function iH(){var e=(0,g._)(["\n      padding: ",";\n      padding-top: ",";\n    "]);iH=function t(){return e};return e}var iN,iO;var iV=((iN=ib/* .tutorConfig.settings */.P.settings)===null||iN===void 0?void 0:iN.chatgpt_enable)==="on";var iL=(iO=ib/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||iO===void 0?void 0:iO.includes(r1/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var iK=e=>{var{closeModal:t,image:r,image2x:n}=e;var o=az({defaultValues:{openAIApiKey:"",enable_open_ai:iV},shouldFocusError:true});var a=ic();var i=e=>nw(function*(){var r=yield a.mutateAsync({chatgpt_api_key:e.openAIApiKey,chatgpt_enable:e.enable_open_ai?1:0});if(r.status_code===200){t({action:"CONFIRM"});window.location.reload()}})();(0,m.useEffect)(()=>{o.setFocus("openAIApiKey");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,l/* .jsx */.Y)(iu/* ["default"] */.A,{onClose:()=>t({action:"CLOSE"}),title:iL?(0,u.__)("Set OpenAI API key","tutor-pro"):undefined,entireHeader:iL?undefined:/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:" "}),maxWidth:560,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:iB.wrapper({isCurrentUserAdmin:iL}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:iL,fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{css:iB.image,src:r,srcSet:n?"".concat(r," 1x, ").concat(n," 2x"):"".concat(r," 1x"),alt:(0,u.__)("Connect API KEY","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:iB.message,children:(0,u.__)("API is not connected","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:iB.title,children:(0,u.__)("Please, ask your Admin to connect the API with Tutor LMS Pro.","tutor-pro")})]})]}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("form",{css:iB.formWrapper,onSubmit:o.handleSubmit(i),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:iB.infoText,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{dangerouslySetInnerHTML:{/* translators: %1$s and %2$s are opening and closing anchor tags for the "OpenAI User settings" link */__html:(0,u.sprintf)((0,u.__)("Find your Secret API key in your %1$sOpenAI User settings%2$s and paste it here to connect OpenAI with your Tutor LMS website.","tutor-pro"),'<a href="'.concat(ib/* ["default"].CHATGPT_PLATFORM_URL */.A.CHATGPT_PLATFORM_URL,'" target="_blank" rel="noopener noreferrer">'),"</a>")}}),/*#__PURE__*/(0,l/* .jsx */.Y)(iA,{type:"info",icon:"warning",children:(0,u.__)("The page will reload after submission. Make sure to save the course information.","tutor-pro")})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{name:"openAIApiKey",control:o.control,rules:iD(),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,h._)((0,p._)({},e),{type:"password",isPassword:true,label:(0,u.__)("OpenAI API key","tutor-pro"),placeholder:(0,u.__)("Enter your OpenAI API key","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{name:"enable_open_ai",control:o.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iI/* ["default"] */.A,(0,h._)((0,p._)({},e),{label:(0,u.__)("Enable OpenAI","tutor-pro")}))})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:iB.formFooter,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{onClick:()=>t({action:"CLOSE"}),variant:"text",size:"small",children:(0,u.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{size:"small",onClick:o.handleSubmit(i),loading:a.isPending,children:(0,u.__)("Save","tutor-pro")})]})]})})})})};/* export default */const iW=iK;var iB={wrapper:e=>{var{isCurrentUserAdmin:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["20"] */.YK["20"],";",!t&&(0,c/* .css */.AH)(iH(),y/* .spacing["24"] */.YK["24"],y/* .spacing["6"] */.YK["6"]))},formWrapper:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["20"] */.YK["20"],";padding:",y/* .spacing["16"] */.YK["16"]," ",y/* .spacing["16"] */.YK["16"]," 0 ",y/* .spacing["16"] */.YK["16"],";"),infoText:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";",r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["8"] */.YK["8"],";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";a{",r7/* .styleUtils.resetButton */.x.resetButton,"      color:",y/* .colorTokens.text.brand */.I6.text.brand,";}"),formFooter:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",y/* .spacing["16"] */.YK["16"],";border-top:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",y/* .spacing["16"] */.YK["16"],";"),image:/*#__PURE__*/(0,c/* .css */.AH)("height:310px;width:100%;object-fit:cover;object-position:center;border-radius:",y/* .borderRadius["8"] */.Vq["8"],";"),message:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";"),title:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.heading4 */.I.heading4("medium"),";color:",y/* .colorTokens.text.primary */.I6.text.primary,";margin-top:",y/* .spacing["4"] */.YK["4"],";text-wrap:pretty;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-text.webp
const ij=r.p+"images/generate-text-269f7e17.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/pro-placeholders/generate-text-2x.webp
const iP=r.p+"images/generate-text-2x-45983f4c.webp";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInput.tsx
function iR(){var e=(0,g._)(["\n        height: 32px;\n        padding: "," ",";\n      "]);iR=function t(){return e};return e}function iz(){var e=(0,g._)(["\n      svg {\n        color: ",";\n      }\n    "]);iz=function t(){return e};return e}var iU;var iq=!!ib/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var iZ=(iU=ib/* .tutorConfig.settings */.P.settings)===null||iU===void 0?void 0:iU.chatgpt_key_exist;var iG=e=>{var{size:t="regular",label:r,type:n="text",maxLimit:o,field:a,fieldState:i,disabled:s,readOnly:d,loading:c,placeholder:v,helpText:g,onChange:b,onKeyDown:y,isHidden:_,isClearable:x=false,isSecondary:C=false,removeBorder:k,dataAttribute:A,isInlineLabel:Y=false,isPassword:I=false,style:D,formFieldWrapperCss:M,inputContainerCss:S,selectOnFocus:F=false,autoFocus:E=false,generateWithAi:H=false,isMagicAi:N=false,allowNegative:O=false,onClickAiButton:V}=e;var[L,K]=(0,m.useState)(n);var{showModal:W}=(0,im/* .useModal */.h)();var B=(0,m.useRef)(null);var j;var P=(j=a.value)!==null&&j!==void 0?j:"";var R=undefined;if(L==="number"){P=(0,w/* .parseNumberOnly */.TW)("".concat(P),O).replace(/(\..*)\./g,"$1")}if(o){R={maxLimit:o,inputCharacter:P.toString().length}}var z=(0,p._)({},(0,ac/* .isDefined */.O9)(A)&&{[A]:true});var U=()=>{if(!iq){W({component:iw,props:{image:ij,image2x:iP}})}else if(!iZ){W({component:iW,props:{image:ij,image2x:iP}})}else{W({component:iv,isMagicAi:true,props:{title:(0,u.__)("AI Studio","tutor-pro"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:120,field:a,fieldState:i,format:"title",is_html:false,fieldLabel:(0,u.__)("Create a Compelling Title","tutor-pro"),fieldPlaceholder:(0,u.__)("Describe the main focus of your course in a few words","tutor-pro")}});V===null||V===void 0?void 0:V()}};return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{label:r,field:a,fieldState:i,disabled:s,readOnly:d,loading:c,placeholder:v,helpText:g,isHidden:_,characterCount:R,isSecondary:C,removeBorder:k,isInlineLabel:Y,inputStyle:D,wrapperCss:M,inputContainerCss:S,generateWithAi:H,onClickAiButton:U,isMagicAi:N,children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(l/* .Fragment */.FK,{children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:i$.container(x||I),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},a,e,z),{css:[e.css,i$.input(t)],type:L==="number"?"text":L,value:P,autoFocus:E,onChange:e=>{var{value:t}=e.target;var r=L==="number"?(0,w/* .parseNumberOnly */.TW)(t):t;a.onChange(r);if(b){b(r)}},onClick:e=>{e.stopPropagation()},onKeyDown:e=>{e.stopPropagation();y===null||y===void 0?void 0:y(e.key)},autoComplete:"off",ref:e=>{a.ref(e);// @ts-ignore
B.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!F||!B.current){return}B.current.select()}})),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:I,children:/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>K(e=>e==="password"?"text":"password"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"eye",width:24,height:24}),"aria-label":(0,u.__)("Show/Hide Password","tutor-pro"),buttonCss:i$.eyeButton({type:L})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:x&&!!a.value&&L!=="password",children:/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>a.onChange(""),buttonCss:r7/* .styleUtils.inputClearButton */.x.inputClearButton,icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"cross",width:24,height:24}),"aria-label":(0,u.__)("Clear","tutor-pro")})})]})})}})};/* export default */const iQ=(0,o3/* .withVisibilityControl */.M)(iG);var i$={input:e=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){min-height:auto;",e==="small"&&(0,c/* .css */.AH)(iR(),y/* .spacing["6"] */.YK["6"],y/* .spacing["12"] */.YK["12"]),"}"),container:e=>/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;input{&.tutor-input-field{",e&&"padding-right: ".concat(y/* .spacing["36"] */.YK["36"],";"),";}}"),eyeButton:e=>{var{type:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.inputClearButton */.x.inputClearButton,";",t!=="password"&&(0,c/* .css */.AH)(iz(),y/* .colorTokens.icon.brand */.I6.icon.brand))}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInputWithContent.tsx
function iJ(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);iJ=function t(){return e};return e}function iX(){var e=(0,g._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);iX=function t(){return e};return e}function i0(){var e=(0,g._)(["\n        border-color: ",";\n      "]);i0=function t(){return e};return e}function i1(){var e=(0,g._)(["\n          padding-",": ",";\n        "]);i1=function t(){return e};return e}function i2(){var e=(0,g._)(["\n            padding-",": ",";\n          "]);i2=function t(){return e};return e}function i5(){var e=(0,g._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);i5=function t(){return e};return e}function i6(){var e=(0,g._)(["\n            padding-",": ",";\n          "]);i6=function t(){return e};return e}function i9(){var e=(0,g._)(["\n          font-size: ",";\n          height: 32px;\n          ",";\n        "]);i9=function t(){return e};return e}function i8(){var e=(0,g._)(["\n      ","\n    "]);i8=function t(){return e};return e}function i3(){var e=(0,g._)(["\n      min-width: 32px;\n      height: 32px;\n      padding-inline: ",";\n    "]);i3=function t(){return e};return e}function i7(){var e=(0,g._)(["\n      border-right: 1px solid ",";\n    "]);i7=function t(){return e};return e}function i4(){var e=(0,g._)(["\n      ","\n    "]);i4=function t(){return e};return e}function se(){var e=(0,g._)(["\n      height: 32px;\n      min-width: 32px;\n      padding-inline: ",";\n    "]);se=function t(){return e};return e}function st(){var e=(0,g._)(["\n      border-left: 1px solid ",";\n    "]);st=function t(){return e};return e}var sr=e=>{var{label:t,content:r,contentPosition:n="left",showVerticalBar:o=true,size:a="regular",type:i="text",field:s,fieldState:d,disabled:c,readOnly:u,loading:f,placeholder:g,helpText:b,onChange:y,onKeyDown:_,isHidden:w,wrapperCss:x,contentCss:C,removeBorder:k=false,selectOnFocus:A=false,isInlineLabel:Y=false}=e;var I=(0,m.useRef)(null);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{label:t,field:s,fieldState:d,disabled:c,readOnly:u,loading:f,placeholder:g,helpText:b,isHidden:w,removeBorder:k,isInlineLabel:Y,children:e=>{var{css:t}=e,c=(0,v._)(e,["css"]);var u;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[so.inputWrapper(!!d.error,k),x],children:[n==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[so.inputLeftContent(o,a),C],children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},s,c),{type:"text",value:(u=s.value)!==null&&u!==void 0?u:"",onChange:e=>{var t=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;s.onChange(t);if(y){y(t)}},onKeyDown:e=>_===null||_===void 0?void 0:_(e.key),css:[t,so.input(n,o,a)],autoComplete:"off",ref:e=>{s.ref(e);// @ts-ignore
I.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!A||!I.current){return}I.current.select()},"data-input":true})),n==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[so.inputRightContent(o,a),C],children:r})]})}})};/* export default */const sn=(0,o3/* .withVisibilityControl */.M)(sr);var so={inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(iJ(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"],y/* .borderRadius["6"] */.Vq["6"],y/* .shadow.input */.r7.input,y/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(iX(),y/* .colorTokens.stroke.danger */.I6.stroke.danger,y/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",r7/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(i0(),y/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",_/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,c/* .css */.AH)(i1(),e,y/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(i5(),y/* .fontSize["24"] */.J["24"],y/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(i2(),e,y/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,c/* .css */.AH)(i9(),y/* .fontSize["16"] */.J["16"],t&&(0,c/* .css */.AH)(i6(),e,y/* .spacing["4"] */.YK["4"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small()," ",r7/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",y/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",y/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(i8(),_/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(i3(),y/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(i7(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small()," ",r7/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",y/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",y/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(i4(),_/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(se(),y/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(st(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormInputWithPresets.tsx
function sa(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);sa=function t(){return e};return e}function si(){var e=(0,g._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);si=function t(){return e};return e}function ss(){var e=(0,g._)(["\n        border-color: ",";\n      "]);ss=function t(){return e};return e}function sl(){var e=(0,g._)(["\n          padding-",": ",";\n        "]);sl=function t(){return e};return e}function sd(){var e=(0,g._)(["\n              padding-",": ",";\n            "]);sd=function t(){return e};return e}function sc(){var e=(0,g._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);sc=function t(){return e};return e}function su(){var e=(0,g._)(["\n          padding-",": ",";\n        "]);su=function t(){return e};return e}function sf(){var e=(0,g._)(["\n        height: 32px;\n        ",";\n      "]);sf=function t(){return e};return e}function sp(){var e=(0,g._)(["\n      min-width: 200px;\n    "]);sp=function t(){return e};return e}function sh(){var e=(0,g._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);sh=function t(){return e};return e}function sv(){var e=(0,g._)(["\n      ","\n    "]);sv=function t(){return e};return e}function sg(){var e=(0,g._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);sg=function t(){return e};return e}function sm(){var e=(0,g._)(["\n      border-right: 1px solid ",";\n    "]);sm=function t(){return e};return e}function sb(){var e=(0,g._)(["\n      ","\n    "]);sb=function t(){return e};return e}function sy(){var e=(0,g._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);sy=function t(){return e};return e}function s_(){var e=(0,g._)(["\n      border-left: 1px solid ",";\n    "]);s_=function t(){return e};return e}var sw=e=>{var{field:t,fieldState:r,content:n,contentPosition:o="left",showVerticalBar:a=true,type:i="text",size:s="regular",label:d,placeholder:c="",disabled:u,readOnly:g,loading:b,helpText:y,removeOptionsMinWidth:_=true,onChange:w,presetOptions:x=[],selectOnFocus:C=false,wrapperCss:k,contentCss:A,formFieldWrapperCss:Y,removeBorder:I=false}=e;var D;var M=(D=t.value)!==null&&D!==void 0?D:"";var S=(0,m.useRef)(null);var F=(0,m.useRef)(null);var[E,H]=(0,m.useState)(false);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{fieldState:r,field:t,label:d,disabled:u,readOnly:g,loading:b,helpText:y,removeBorder:I,wrapperCss:Y,placeholder:c,children:e=>{var{css:d}=e,c=(0,v._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[sC.inputWrapper(!!r.error,I),k],ref:F,children:[n&&o==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[sC.inputLeftContent(a,s),A],children:n}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},c),{css:[d,sC.input(o,a,s)],onClick:()=>H(true),autoComplete:"off",readOnly:g,ref:e=>{t.ref(e);// @ts-ignore
S.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!C||!S.current){return}S.current.select()},value:M,onChange:e=>{var r=i==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(w){w(r)}},"data-input":true})),n&&o==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:sC.inputRightContent(a,s),children:n})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:x.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{triggerRef:F,isOpen:E,closePopover:()=>H(false),animationType:as/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[sC.options(_)],children:x.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:sC.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:sC.label,onClick:()=>{t.onChange(e.value);w===null||w===void 0?void 0:w(e.value);H(false)},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* export default */const sx=sw;var sC={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(sa(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"],y/* .borderRadius["6"] */.Vq["6"],y/* .shadow.input */.r7.input,y/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(si(),y/* .colorTokens.stroke.danger */.I6.stroke.danger,y/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",r7/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(ss(),y/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",_/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,c/* .css */.AH)(sl(),e,y/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(sc(),y/* .fontSize["24"] */.J["24"],y/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(sd(),e,y/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,c/* .css */.AH)(sf(),t&&(0,c/* .css */.AH)(su(),e,y/* .spacing["4"] */.YK["4"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",y/* .spacing["8"] */.YK["8"],";margin:0 ",y/* .spacing["12"] */.YK["12"],";padding:",y/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",y/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),options:e=>/*#__PURE__*/(0,c/* .css */.AH)("z-index:",y/* .zIndex.dropdown */.fE.dropdown,";background-color:",y/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",y/* .shadow.popover */.r7.popover,";padding:",y/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",y/* .borderRadius["6"] */.Vq["6"],";",r7/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,c/* .css */.AH)(sp())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";}",t&&(0,c/* .css */.AH)(sh(),y/* .colorTokens.background.active */.I6.background.active,y/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],y/* .borderRadius["6"] */.Vq["6"],y/* .borderRadius["6"] */.Vq["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small()," ",r7/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",y/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",y/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(sv(),_/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(sg(),y/* .spacing["6"] */.YK["6"])," ",e&&(0,c/* .css */.AH)(sm(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small()," ",r7/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",y/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",y/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(sb(),_/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(sy(),y/* .spacing["6"] */.YK["6"])," ",e&&(0,c/* .css */.AH)(s_(),y/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/atoms/Radio.tsx
function sk(){var e=(0,g._)(["\n      color: ",";\n    "]);sk=function t(){return e};return e}function sA(){var e=(0,g._)(["\n        margin-right: ",";\n      "]);sA=function t(){return e};return e}var sY=/*#__PURE__*/b().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:o,disabled:a=false,labelCss:i,label:s,icon:d,value:c,onChange:u,onBlur:f,description:p}=e;var h=(0,w/* .nanoid */.Ak)();return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sI.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:h,css:[sI.container(a),i],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",{ref:t,id:h,name:r,type:"radio",checked:n,readOnly:o,value:c,disabled:a,onChange:u,onBlur:f,css:[sI.radio(s)]}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{}),d,s]}),p&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:sI.description,children:p})]})});var sI={wrapper:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",y/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,c/* .css */.AH)(sk(),y/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",y/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,c/* .css */.AH)(sA(),y/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",y/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",y/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",y/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const sD=sY;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormRadioGroup.tsx
var sM=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:a,wrapperCss:i,onSelect:s,onSelectRender:d}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:a,children:e=>{var{css:r}=e,n=(0,v._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:i,children:o.map((e,o)=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(sD,(0,h._)((0,p._)({},n),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||a,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(s){s(e)}}})),d&&t.value===e.value&&d(e),e.legend&&/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:sF.radioLegend,children:e.legend})]},o))})}})};/* export default */const sS=sM;var sF={radioLegend:/*#__PURE__*/(0,c/* .css */.AH)("margin-left:",y/* .spacing["28"] */.YK["28"],";",_/* .typography.body */.I.body(),";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";")};// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMinutes.js
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
 */function sT(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);n.setMinutes(t);return n}// Fallback for modularized imports:
/* export default */const sE=/* unused pure expression or super */null&&sT;// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setHours.js
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
 */function sH(e,t,r){const n=(0,J/* .toDate */.a)(e,r?.in);n.setHours(t);return n}// Fallback for modularized imports:
/* export default */const sN=/* unused pure expression or super */null&&sH;// EXTERNAL MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMinutes.js
var sO=r(9872);// CONCATENATED MODULE: ../tutor/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMinuteOfInterval.js
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
 */function sV(e,t){const{start:r,end:n}=eu(t?.in,e);// Set to the start of the minute
r.setSeconds(0,0);let o=+r>+n;const a=o?+r:+n;let i=o?n:r;let s=t?.step??1;if(!s)return[];if(s<0){s=-s;o=!o}const l=[];while(+i<=a){l.push((0,$/* .constructFrom */.w)(r,i));i=(0,sO/* .addMinutes */.z)(i,s)}return o?l.reverse():l}// Fallback for modularized imports:
/* export default */const sL=/* unused pure expression or super */null&&sV;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var sK=e=>{var{label:t,field:r,fieldState:n,interval:o=30,disabled:a,loading:i,placeholder:s,helpText:d,isClearable:c=true}=e;var[g,b]=(0,m.useState)(false);var y=(0,m.useRef)(null);var _=(0,m.useRef)(null);var w=(0,m.useMemo)(()=>{var e=sT(sH(new Date,0),0);var t=sT(sH(new Date,23),59);var r=sV({start:e,end:t},{step:o});return r.map(e=>(0,eA/* .format */.GP)(e,r1/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[o]);var{activeIndex:x,setActiveIndex:C}=al({options:w.map(e=>({label:e,value:e})),isOpen:g,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);b(false)},onClose:()=>b(false)});(0,m.useEffect)(()=>{if(g&&x>=0&&_.current){_.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[g,x]);return/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:a,loading:i,placeholder:s,helpText:d,children:e=>{var{css:t}=e,n=(0,v._)(e,["css"]);var o;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sB.wrapper,ref:y,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,h._)((0,p._)({},n),{ref:r.ref,css:[t,sB.input],type:"text",onClick:e=>{e.stopPropagation();b(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();b(e=>!e)}if(e.key==="Tab"){b(false)}},value:(o=r.value)!==null&&o!==void 0?o:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"clock",width:32,height:32,style:sB.icon}),c&&r.value&&/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,u.__)("Clear","tutor-pro"),size:"small",variant:"text",buttonCss:r7/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{triggerRef:y,isOpen:g,closePopover:()=>b(false),animationType:as/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:sB.list,children:w.map((e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:sB.listItem,ref:x===t?_:null,"data-active":x===t,children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:sB.itemButton,onClick:()=>{r.onChange(e);b(false)},onMouseOver:()=>C(t),onMouseLeave:()=>t!==x&&C(-1),onFocus:()=>C(t),children:e})},t)})})})]})}})};/* export default */const sW=sK;var sB={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",y/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",y/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,c/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",r7/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";margin:",y/* .spacing["4"] */.YK["4"]," ",y/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",y/* .colorTokens.text.primary */.I6.text.primary,";}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/usePaginatedTable.ts
var sj=function(){var{limit:e=r1/* .ITEMS_PER_PAGE */.re}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var[t,r]=(0,m.useState)({page:1,sortProperty:"",sortDirection:undefined,filter:{}});var n=t;var o=e*Math.max(0,n.page-1);var a=(0,m.useCallback)(e=>{r(t=>(0,p._)({},t,e))},[r]);var i=e=>a({page:e});var s=(0,m.useCallback)(e=>a({page:1,filter:e}),[a]);var l=e=>{var t={};if(e!==n.sortProperty){t={sortDirection:"asc",sortProperty:e}}else{t={sortDirection:n.sortDirection==="asc"?"desc":"asc",sortProperty:e}}a(t)};return{pageInfo:n,onPageChange:i,onColumnSort:l,offset:o,itemsPerPage:e,onFilterItems:s}};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/Paginator.tsx
var sP=e=>{var{currentPage:t,onPageChange:r,totalItems:n,itemsPerPage:o}=e;var a=Math.max(Math.ceil(n/o),1);var[i,s]=(0,m.useState)("");(0,m.useEffect)(()=>{s(t.toString())},[t]);var d=e=>{if(e<1||e>a){return}r(e)};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sz.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sz.pageStatus,children:[(0,u.__)("Page","tutor-pro"),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",css:sz.paginationInput,value:i,onChange:e=>{var{value:t}=e.currentTarget;var n=t.replace(/[^0-9]/g,"");var o=Number(n);if(o>0&&o<=a){s(n);r(o)}else if(!n){s(n)}},autoComplete:"off"})}),(0,u.__)("of","tutor-pro")," ",/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:a})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:sz.pageController,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:sz.paginationButton,onClick:()=>d(t-1),disabled:t===1,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:!r1/* .isRTL */.V8?"chevronLeft":"chevronRight",width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:sz.paginationButton,onClick:()=>d(t+1),disabled:t===a,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:!r1/* .isRTL */.V8?"chevronRight":"chevronLeft",width:32,height:32})})]})]})};/* export default */const sR=sP;var sz={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:end;align-items:center;flex-wrap:wrap;gap:",y/* .spacing["8"] */.YK["8"],";height:36px;"),pageStatus:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),"    color:",y/* .colorTokens.text.title */.I6.text.title,";min-width:100px;"),paginationInput:/*#__PURE__*/(0,c/* .css */.AH)("outline:0;border:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";margin:0 ",y/* .spacing["8"] */.YK["8"],";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";padding:8px 12px;width:72px;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:",y/* .spacing["0"] */.YK["0"],";}&[type='number']{-moz-appearance:textfield;}"),pageController:/*#__PURE__*/(0,c/* .css */.AH)("gap:",y/* .spacing["8"] */.YK["8"],";display:flex;justify-content:center;align-items:center;height:100%;"),paginationButton:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";background:",y/* .colorTokens.background.white */.I6.background.white,";color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";height:32px;width:32px;display:grid;place-items:center;transition:background-color 0.2s ease-in-out,color 0.3s ease-in-out;svg{color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background:",y/* .colorTokens.background["default"] */.I6.background["default"],";& > svg{color:",y/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:disabled{background:",y/* .colorTokens.background.white */.I6.background.white,";& > svg{color:",y/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/molecules/Table.tsx
function sU(){var e=(0,g._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);sU=function t(){return e};return e}function sq(){var e=(0,g._)(["\n      border-bottom: 1px solid ",";\n    "]);sq=function t(){return e};return e}function sZ(){var e=(0,g._)(["\n      &:nth-of-type(even) {\n        background-color: ",";\n      }\n    "]);sZ=function t(){return e};return e}function sG(){var e=(0,g._)(["\n        background-color: ",";\n      "]);sG=function t(){return e};return e}function sQ(){var e=(0,g._)(["\n        background-color: ",";\n      "]);sQ=function t(){return e};return e}function s$(){var e=(0,g._)(["\n        :last-of-type {\n          border-bottom: none;\n        }\n      "]);s$=function t(){return e};return e}var sJ={bodyRowSelected:y/* .colorTokens.background.active */.I6.background.active,bodyRowHover:y/* .colorTokens.background.hover */.I6.background.hover};var sX=e=>{var{columns:t,data:r,entireHeader:n=null,headerHeight:o=60,noHeader:a=false,isStriped:i=false,isRounded:s=false,stripedBySelectedIndex:d=[],colors:u={},isBordered:p=true,loading:h=false,itemsPerPage:v=1,querySortProperties:g,querySortDirections:m={},onSortClick:b,renderInLastRow:y,rowStyle:_,sortIcons:x={asc:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"sortAsc",height:16,width:16}),desc:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"sortDesc",height:16,width:16})}}=e;var C=(e,r)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:[s1.tableRow({isBordered:p,isStriped:i}),s1.bodyTr({colors:u,isSelected:d.includes(e),isRounded:s}),_],children:t.map((e,t)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("td",{css:[s1.td,{width:e.width}],children:r(e)},t)})},e)};var k=e=>{var t=null;var r=e.sortProperty;if(!r){return e.Header}if(g===null||g===void 0?void 0:g.includes(r)){if((m===null||m===void 0?void 0:m[r])==="asc"){t=x.asc}else{t=x.desc}}return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:s1.headerWithIcon,onClick:()=>b===null||b===void 0?void 0:b(r),children:[e.Header,t&&t]})};var A=()=>{if(n){return/*#__PURE__*/(0,l/* .jsx */.Y)("th",{css:s1.th,colSpan:t.length,children:n})}return t.map((e,t)=>{if(e.Header!==null){return/*#__PURE__*/(0,l/* .jsx */.Y)("th",{css:[s1.th,e.css,{width:e.width}],colSpan:e.headerColSpan,children:k(e)},t)}})};var Y=()=>{if(h){return(0,w/* .range */.y1)(v).map(e=>C(e,()=>/*#__PURE__*/(0,l/* .jsx */.Y)(aK,{animation:true,height:20,width:"".concat((0,w/* .getRandom */.G0)(40,80),"%")})))}if(!r.length){return/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:s1.tableRow({isBordered:false,isStriped:false}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("td",{colSpan:t.length,css:[s1.td,/*#__PURE__*/(0,c/* .css */.AH)("text-align:center;")],children:"No Data!"})})}var e=r.map((e,t)=>{return C(t,r=>{return"Cell"in r?r.Cell(e,t):r.accessor(e,t)})});if(y){y=/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("td",{css:s1.td,children:y})},e.length);e.push(y)}return e};return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:s1.tableContainer({isRounded:s}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("table",{css:s1.table,children:[!a&&/*#__PURE__*/(0,l/* .jsx */.Y)("thead",{children:/*#__PURE__*/(0,l/* .jsx */.Y)("tr",{css:[s1.tableRow({isBordered:p,isStriped:i}),{height:o}],children:A()})}),/*#__PURE__*/(0,l/* .jsx */.Y)("tbody",{children:Y()})]})})};/* export default */const s0=sX;var s1={tableContainer:e=>{var{isRounded:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:block;width:100%;overflow-x:auto;",t&&(0,c/* .css */.AH)(sU(),y/* .colorTokens.stroke.divider */.I6.stroke.divider,y/* .borderRadius["6"] */.Vq["6"]))},headerWithIcon:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.body */.I.body(),";color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;gap:",y/* .spacing["8"] */.YK["8"],";align-items:center;svg{color:",y/* .colorTokens.text.primary */.I6.text.primary,";}"),table:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;border-collapse:collapse;border:none;"),tableRow:e=>{var{isBordered:t,isStriped:r}=e;return/*#__PURE__*/(0,c/* .css */.AH)(t&&(0,c/* .css */.AH)(sq(),y/* .colorTokens.stroke.divider */.I6.stroke.divider)," ",r&&(0,c/* .css */.AH)(sZ(),y/* .colorTokens.background.active */.I6.background.active))},th:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";background-color:",y/* .colorTokens.background.white */.I6.background.white,";color:",y/* .colorTokens.text.primary */.I6.text.primary,";padding:0 ",y/* .spacing["16"] */.YK["16"],";border:none;"),bodyTr:e=>{var{colors:t,isSelected:r,isRounded:n}=e;var{bodyRowDefault:o,bodyRowSelectedHover:a,bodyRowHover:i=sJ.bodyRowHover,bodyRowSelected:s=sJ.bodyRowSelected}=t;return/*#__PURE__*/(0,c/* .css */.AH)(o&&(0,c/* .css */.AH)(sG(),o),"      &:hover{background-color:",r&&a?a:i,";}",r&&(0,c/* .css */.AH)(sQ(),s)," ",n&&(0,c/* .css */.AH)(s$()))},td:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";padding:",y/* .spacing["16"] */.YK["16"],";border:none;")};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/legacy/useQuery.js + 6 modules
var s2=r(3819);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.62.15/node_modules/@tanstack/query-core/build/modern/utils.js
var s5=r(9005);// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/services/course_category.ts
var s6=e=>{return aZ/* .wpAjaxInstance.get */.b.get(aG/* ["default"].COUPON_APPLIES_TO */.A.COUPON_APPLIES_TO,{params:(0,p._)({},e)})};var s9=e=>{return(0,s2/* .useQuery */.I)({queryKey:["CourseCategory",e],placeholderData:s5/* .keepPreviousData */.rX,queryFn:()=>{return s6(e).then(e=>{return e.data})}})};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/public/images/course-placeholder.png
const s8=r.p+"images/course-placeholder-3ae4bdaf.png";// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/hooks/useDebounce.ts
var s3=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,n]=(0,m.useState)(e);(0,m.useEffect)(()=>{var r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/CourseCategorySelectModal/SearchField.tsx
var s7=e=>{var{onFilterItems:t}=e;var r=az({defaultValues:{search:""}});var n=s3(r.watch("search"));(0,m.useEffect)(()=>{t((0,p._)({},n.length>0&&{search:n}))},[t,n]);return/*#__PURE__*/(0,l/* .jsx */.Y)(n1,{control:r.control,name:"search",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,h._)((0,p._)({},e),{content:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"search",width:24,height:24}),placeholder:(0,u.__)("Search...","tutor-pro"),showVerticalBar:false}))})};/* export default */const s4=s7;// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/CourseCategorySelectModal/CategoryListTable.tsx
var le=e=>{var{form:t}=e;var r,n;var o;var a=(o=t.watch("categories"))!==null&&o!==void 0?o:[];var{pageInfo:i,onPageChange:s,itemsPerPage:d,offset:c,onFilterItems:f}=sj();var p=s9({applies_to:"specific_category",offset:c,limit:d,filter:i.filter});var h;var v=(h=(r=p.data)===null||r===void 0?void 0:r.results)!==null&&h!==void 0?h:[];function g(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var r=a.map(e=>e.id);var n=v.map(e=>e.id);if(e){var o=v.filter(e=>!r.includes(e.id));t.setValue("categories",[...a,...o]);return}var i=a.filter(e=>!n.includes(e.id));t.setValue("categories",i)}function m(){return v.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((n=p.data)===null||n===void 0?void 0:n.results.length)?/*#__PURE__*/(0,l/* .jsx */.Y)(S,{onChange:g,checked:p.isLoading||p.isRefetching?false:m(),label:(0,u.__)("Category","tutor-pro")}):(0,u.__)("Category","tutor-pro"),Cell:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lr.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S,{onChange:()=>{var r=a.filter(t=>t.id!==e.id);var n=(r===null||r===void 0?void 0:r.length)===a.length;if(n){t.setValue("categories",[...r,e])}else{t.setValue("categories",r)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.image||s8,css:lr.thumbnail,alt:(0,u.__)("category item","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lr.courseItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:"".concat(e.total_courses," ").concat((0,u.__)("Courses","tutor-pro"))})]})]})},width:"720px"}];if(p.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(o2/* .LoadingSection */.YE,{})}if(!p.data){return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lr.errorMessage,children:(0,u.__)("Something went wrong","tutor-pro")})}var y;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lr.tableActions,children:/*#__PURE__*/(0,l/* .jsx */.Y)(s4,{onFilterItems:f})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lr.tableWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(s0,{columns:b,data:(y=p.data.results)!==null&&y!==void 0?y:[],itemsPerPage:d,loading:p.isFetching||p.isRefetching})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lr.paginatorWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(sR,{currentPage:i.page,onPageChange:s,totalItems:p.data.total_items,itemsPerPage:d})})]})};/* export default */const lt=le;var lr={tableActions:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,c/* .css */.AH)("margin:",y/* .spacing["20"] */.YK["20"]," ",y/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",y/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";margin-left:",y/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:48px;height:48px;border-radius:",y/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),errorMessage:/*#__PURE__*/(0,c/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/CourseCategorySelectModal/CourseListTable.tsx
var ln=e=>{var{type:t,form:r}=e;var n,o;var a=r.watch(t)||[];var{pageInfo:i,onPageChange:s,itemsPerPage:d,offset:c,onFilterItems:f}=sj();var p=s9({applies_to:t==="courses"?"specific_courses":"specific_bundles",offset:c,limit:d,filter:i.filter});var h;var v=(h=(n=p.data)===null||n===void 0?void 0:n.results)!==null&&h!==void 0?h:[];function g(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=a.map(e=>e.id);var o=v.map(e=>e.id);if(e){var i=v.filter(e=>!n.includes(e.id));r.setValue(t,[...a,...i]);return}var s=a.filter(e=>!o.includes(e.id));r.setValue(t,s)}function m(){return v.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((o=p.data)===null||o===void 0?void 0:o.results.length)?/*#__PURE__*/(0,l/* .jsx */.Y)(S,{onChange:g,checked:p.isLoading||p.isRefetching?false:m(),label:t==="courses"?(0,u.__)("Courses","tutor-pro"):(0,u.__)("Bundles","tutor-pro"),labelCss:la.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:la.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S,{onChange:()=>{var n=a.filter(t=>t.id!==e.id);var o=(n===null||n===void 0?void 0:n.length)===a.length;if(o){r.setValue(t,[...n,e])}else{r.setValue(t,n)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.image||s8,css:la.thumbnail,alt:(0,u.__)("course item","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:la.courseItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:e.author})]})]})}},{Header:(0,u.__)("Price","tutor-pro"),Cell:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:la.price,children:e.plan_start_price?/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:la.startingFrom,children:/* translators: %s is the starting price. */(0,u.sprintf)((0,u.__)("Starting from %s","tutor-pro"),e.plan_start_price)}):/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:la.discountPrice,children:e.regular_price})]})})}}];if(p.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(o2/* .LoadingSection */.YE,{})}if(!p.data){return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:la.errorMessage,children:(0,u.__)("Something went wrong","tutor-pro")})}var y;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:la.tableActions,children:/*#__PURE__*/(0,l/* .jsx */.Y)(s4,{onFilterItems:f})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:la.tableWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(s0,{columns:b,data:(y=p.data.results)!==null&&y!==void 0?y:[],itemsPerPage:d,loading:p.isFetching||p.isRefetching})}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:la.paginatorWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(sR,{currentPage:i.page,onPageChange:s,totalItems:p.data.total_items,itemsPerPage:d})})]})};/* export default */const lo=ln;var la={tableActions:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,c/* .css */.AH)("margin:",y/* .spacing["20"] */.YK["20"]," ",y/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",y/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";margin-left:",y/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:76px;height:48px;border-radius:",y/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),checkboxLabel:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body(),";color:",y/* .colorTokens.text.primary */.I6.text.primary,";"),price:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;gap:",y/* .spacing["4"] */.YK["4"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,c/* .css */.AH)("text-decoration:line-through;color:",y/* .colorTokens.text.subdued */.I6.text.subdued,";"),errorMessage:/*#__PURE__*/(0,c/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;"),startingFrom:/*#__PURE__*/(0,c/* .css */.AH)("color:",y/* .colorTokens.text.hints */.I6.text.hints,";")};// CONCATENATED MODULE: ../tutor/assets/src/js/v3/shared/components/modals/CourseCategorySelectModal/index.tsx
function li(e){var{title:t,closeModal:r,actions:n,form:o,type:a,onSelect:i}=e;var s=az({defaultValues:o.getValues()});var d=s.watch(a)||[];function c(){o.setValue(a,d,{shouldDirty:true});i===null||i===void 0?void 0:i(d);r({action:"CONFIRM"})}return/*#__PURE__*/(0,l/* .jsxs */.FD)(iu/* ["default"] */.A,{onClose:()=>r({action:"CLOSE"}),title:d.length?(0,u.sprintf)((0,u.__)("%d Selected","tutor-pro"),d.length):t,actions:n,maxWidth:720,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:a==="categories",fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(lo,{form:s,type:a==="bundles"?"bundles":"courses"}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(lt,{form:s})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ll.footer,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{size:"small",variant:"text",onClick:()=>r({action:"CLOSE"}),children:(0,u.__)("Cancel","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{size:"small",variant:"primary",onClick:c,children:(0,u.__)("Apply","tutor-pro")})]})]})}/* export default */const ls=li;var ll={footer:/*#__PURE__*/(0,c/* .css */.AH)("box-shadow:0px 1px 0px 0px #e4e5e7 inset;height:56px;display:flex;align-items:center;justify-content:end;gap:",y/* .spacing["16"] */.YK["16"],";padding-inline:",y/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/components/CategoryItem.tsx
function ld(e){var{image:t,title:r,subTitle:n,handleDeleteClick:o}=e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lc.selectedItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lc.selectedThumb,children:/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:t||s8,css:lc.thumbnail,alt:"course item"})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lc.selectedContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lc.selectedTitle,children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lc.selectedSubTitle,children:n})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",onClick:o,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"delete",width:24,height:24})})})]})}var lc={selectedItem:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["12"] */.YK["12"],";display:flex;align-items:center;gap:",y/* .spacing["16"] */.YK["16"],";&:not(:last-child){border-bottom:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),selectedContent:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),selectedTitle:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.primary */.I6.text.primary,";margin-bottom:",y/* .spacing["4"] */.YK["4"],";"),selectedSubTitle:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.small */.I.small(),";color:",y/* .colorTokens.text.hints */.I6.text.hints,";"),selectedThumb:/*#__PURE__*/(0,c/* .css */.AH)("height:48px;"),thumbnail:/*#__PURE__*/(0,c/* .css */.AH)("width:48px;height:48px;border-radius:",y/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;")};// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/components/Categories.tsx
function lu(e){var{form:t}=e;var{showModal:r}=(0,im/* .useModal */.h)();var n=t.watch("categories");return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:n.length,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lf.categoriesWrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)(an/* ["default"] */.A,{each:n,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ld,{title:e.title,subTitle:(0,u.sprintf)((0,u.__)("%s Courses","tutor-pro"),e.total_courses),image:e.image,handleDeleteClick:()=>{t.setValue("categories",n.filter(t=>t.id!==e.id),{shouldDirty:true})}})})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"tertiary",isOutlined:true,buttonCss:lf.addCategoriesButton,icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:25}),onClick:()=>{r({component:ls,props:{title:(0,u.__)("Selected items","tutor-pro"),type:"categories",form:t},closeOnOutsideClick:true,depthIndex:y/* .zIndex.highest */.fE.highest})},children:(0,u.__)("Add Categories","tutor-pro")})]})}var lf={categoriesWrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",y/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";"),addCategoriesButton:/*#__PURE__*/(0,c/* .css */.AH)("width:fit-content;background-color:",y/* .colorTokens.background.white */.I6.background.white,";color:",y/* .colorTokens.text.brand */.I6.text.brand,";svg,:active svg{color:",y/* .colorTokens.text.brand */.I6.text.brand," !important;}")};// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var lp=r(6115);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+modifiers@9.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var lh=r(7313);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var lv=r(905);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@18.3.1/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var lg=r(7893);// EXTERNAL MODULE: ../tutor/assets/src/js/v3/shared/utils/dndkit.ts
var lm=r(1697);// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/config/constants.ts
var lb={tick_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',cross_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5306 9.53063L13.0603 12L15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',tick:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.059 8.833 19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',cross:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.47032 5.46934C5.61094 5.32889 5.80157 5.25 6.00032 5.25C6.19907 5.25 6.38969 5.32889 6.53032 5.46934L18.5303 17.4693C18.604 17.538 18.6631 17.6208 18.7041 17.7128C18.7451 17.8048 18.7671 17.9041 18.7689 18.0048C18.7707 18.1055 18.7522 18.2055 18.7144 18.2989C18.6767 18.3923 18.6206 18.4772 18.5494 18.5484C18.4781 18.6196 18.3933 18.6757 18.2999 18.7135C18.2065 18.7512 18.1065 18.7697 18.0058 18.7679C17.9051 18.7662 17.8058 18.7441 17.7138 18.7031C17.6218 18.6621 17.539 18.603 17.4703 18.5293L5.47032 6.52934C5.32987 6.38871 5.25098 6.19809 5.25098 5.99934C5.25098 5.80059 5.32987 5.60997 5.47032 5.46934Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5298 5.46934C18.6703 5.60997 18.7492 5.80059 18.7492 5.99934C18.7492 6.19809 18.6703 6.38871 18.5298 6.52934L6.52985 18.5293C6.38767 18.6618 6.19963 18.7339 6.00532 18.7305C5.81102 18.7271 5.62564 18.6484 5.48822 18.511C5.35081 18.3735 5.2721 18.1882 5.26867 17.9939C5.26524 17.7996 5.33737 17.6115 5.46985 17.4693L17.4698 5.46934C17.6105 5.32889 17.8011 5.25 17.9998 5.25C18.1986 5.25 18.3892 5.32889 18.5298 5.46934Z" fill="currentColor"/></svg>',plus_square:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V4.5H19.5V19.5ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',minus_square:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 19.5H4.5V4.5H19.5V19.5ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',plus_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12Z" fill="currentColor"/></svg>',minus_circle:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" fill="currentColor"/></svg>',tick_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.2891 9.14969 15.3718 9.09442 15.4628 9.0567C15.5539 9.01899 15.6515 8.99958 15.75 8.99958C15.8486 8.99958 15.9461 9.01899 16.0372 9.0567C16.1282 9.09442 16.2109 9.14969 16.2806 9.21937C16.3503 9.28906 16.4056 9.37178 16.4433 9.46283C16.481 9.55387 16.5004 9.65145 16.5004 9.75C16.5004 9.84855 16.481 9.94613 16.4433 10.0372C16.4056 10.1282 16.3503 10.2109 16.2806 10.2806Z" fill="currentColor"/></svg>',cross_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063L13.0603 12L15.5306 14.4694Z" fill="currentColor"/></svg>',plus_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7468 9.41513 20.7185 6.93705 18.8907 5.10927C17.063 3.28149 14.5849 2.25323 12 2.25ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',minus_circle_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.75 12.75H8.25C8.05109 12.75 7.86033 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86033 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',plus_square_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 12.75H12.75V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H11.25V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>',minus_square_fill:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15.75C15.9489 11.25 16.1397 11.329 16.2803 11.4697C16.421 11.6103 16.5 11.8011 16.5 12C16.5 12.1989 16.421 12.3897 16.2803 12.5303C16.1397 12.671 15.9489 12.75 15.75 12.75Z" fill="currentColor"/></svg>'};// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/components/fields/FormFeatureItem.tsx
function ly(e){var{id:t,field:r,fieldState:n,handleDeleteClick:o}=e;var[a,d]=(0,m.useState)(false);var c=(0,m.useRef)(null);var{attributes:p,listeners:h,setNodeRef:v,transform:g,transition:b,isDragging:y}=(0,lv/* .useSortable */.gl)({id:t,animateLayoutChanges:lm/* .animateLayoutChanges */.J});var _={transform:lg/* .CSS.Transform.toString */.Ks.Transform.toString(g?(0,s._)((0,i._)({},g),{scaleX:1,scaleY:1}):null),transition:b,zIndex:y?1:0};function w(e){var t;var n=(t=r.value)!==null&&t!==void 0?t:{icon:"",content:""};r.onChange((0,s._)((0,i._)({},n),{icon:e}))}function x(e){var t;var n=(t=r.value)!==null&&t!==void 0?t:{icon:"",content:""};r.onChange((0,s._)((0,i._)({},n),{content:e}))}return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:v,style:_,children:/*#__PURE__*/(0,l/* .jsx */.Y)(T/* ["default"] */.A,{field:r,fieldState:n,inputStyle:l_.input,children:e=>{var t,n;var v,g,m;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:l_.featureItem,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,s._)((0,i._)({type:"button"},p,h),{css:l_.dragButton,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"dragVertical",width:24,height:24})})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{ref:c,type:"button",css:l_.iconSelector,onClick:()=>d(!a),dangerouslySetInnerHTML:{__html:(g=lb[(v=(t=r.value)===null||t===void 0?void 0:t.icon)!==null&&v!==void 0?v:""])!==null&&g!==void 0?g:""}}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,s._)((0,i._)({},e),{value:(m=(n=r.value)===null||n===void 0?void 0:n.content)!==null&&m!==void 0?m:"",onChange:e=>x(e.target.value)})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:l_.deleteButton,type:"button",onClick:o,"data-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"delete",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ad/* ["default"] */.A,{triggerRef:c,isOpen:a,closePopover:()=>{d(false)},maxWidth:"208px",children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:l_.popoverWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:l_.popoverHeader,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Icons","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"text",size:"small",isIconOnly:true,"aria-label":(0,u.__)("Close","tutor-pro"),onClick:()=>d(false),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"cross",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:l_.popoverContent,children:/*#__PURE__*/(0,l/* .jsx */.Y)(an/* ["default"] */.A,{each:Object.getOwnPropertyNames(lb),children:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:l_.popoverContentButton,type:"button",onClick:()=>{w(e);d(false)},dangerouslySetInnerHTML:{__html:lb[e]}})}})})]})})]})}})})}var l_={featureItem:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;display:flex;&:hover{button[data-delete-button]{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field{border-top-left-radius:0;border-bottom-left-radius:0;padding:",y/* .spacing["4"] */.YK["4"]," ",y/* .spacing["36"] */.YK["36"]," ",y/* .spacing["4"] */.YK["4"]," ",y/* .spacing["8"] */.YK["8"],";&:focus{border-radius:",y/* .borderRadius["6"] */.Vq["6"],";}}"),iconSelector:/*#__PURE__*/(0,c/* .css */.AH)("height:40px;display:flex;align-items:center;background-color:",y/* .colorTokens.background.white */.I6.background.white,";color:",y/* .colorTokens.icon.hover */.I6.icon.hover,";border:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-right:none;border-top-left-radius:",y/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",y/* .borderRadius["6"] */.Vq["6"],";cursor:pointer;transition:background-color 0.25s;:hover{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";}:focus-visible{border-radius:",y/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;z-index:1;}"),dragButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;padding:0;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";background:transparent;border:none;cursor:grab;:focus-visible{border-radius:",y/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),deleteButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;position:absolute;right:",y/* .spacing["12"] */.YK["12"],";top:",y/* .spacing["8"] */.YK["8"],";padding:0;color:",y/* .colorTokens.icon["default"] */.I6.icon["default"],";background:transparent;border:none;cursor:pointer;opacity:0;transition:opacity 0.25s;:focus-visible{border-radius:",y/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;opacity:1;}",y/* .Breakpoint.mobile */.EA.mobile,"{opacity:1;}"),popoverWrapper:/*#__PURE__*/(0,c/* .css */.AH)("max-height:300px;overflow-y:auto;"),popoverHeader:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",y/* .spacing["8"] */.YK["8"],";label{",_/* .typography.caption */.I.caption("medium"),";color:",y/* .colorTokens.text.title */.I6.text.title,";}button{padding:0px;}"),popoverContent:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-wrap:wrap;gap:",y/* .spacing["8"] */.YK["8"],";padding:",y/* .spacing["12"] */.YK["12"],";"),popoverContentButton:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;background-color:",y/* .colorTokens.background["default"] */.I6.background["default"],";color:",y/* .colorTokens.icon.hover */.I6.icon.hover,";border:none;border-radius:",y/* .borderRadius["4"] */.Vq["4"],";padding:",y/* .spacing["8"] */.YK["8"],";cursor:pointer;transition:background-color 0.25s,box-shadow 0.25s;:hover{background-color:",y/* .colorTokens.background.hover */.I6.background.hover,";box-shadow:inset 0px 0px 0px 1px ",y/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";}:focus-visible{border-radius:",y/* .borderRadius["6"] */.Vq["6"],";outline:2px solid ",y/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:2px;z-index:1;}")};// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/components/IconsAndFeatures.tsx
function lw(){var e=(0,d/* .useFormContext */.xW)();var{fields:t,append:r,remove:n,move:o}=(0,d/* .useFieldArray */.jz)({control:e.control,name:"features"});var a=(0,lp/* .useSensors */.FR)((0,lp/* .useSensor */.MS)(lp/* .PointerSensor */.AN),(0,lp/* .useSensor */.MS)(lp/* .KeyboardSensor */.uN,{coordinateGetter:lv/* .sortableKeyboardCoordinates */.JR}));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lx.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lx.header,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Features","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(r0/* ["default"] */.A,{variant:"tertiary",size:"small","aria-label":(0,u.__)("Add Feature","tutor-pro"),isIconOnly:true,onClick:()=>r({id:(0,w/* .nanoid */.Ak)(),icon:"tick_circle_fill",content:""}),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"plus",width:24,height:24})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:t.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lx.features,children:/*#__PURE__*/(0,l/* .jsx */.Y)(lp/* .DndContext */.Mp,{sensors:a,modifiers:[lh/* .restrictToParentElement */.gj],onDragEnd:e=>{var{active:r,over:n}=e;if(!n){return}if(r.id!==n.id){var a=t.findIndex(e=>e.id===r.id);var i=t.findIndex(e=>e.id===n.id);o(a,i)}},children:/*#__PURE__*/(0,l/* .jsx */.Y)(lv/* .SortableContext */.gB,{items:t,strategy:lv/* .verticalListSortingStrategy */._G,children:/*#__PURE__*/(0,l/* .jsx */.Y)(an/* ["default"] */.A,{each:t,children:(t,r)=>/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:e.control,name:"features.".concat(r),rules:{validate:e=>!!(e===null||e===void 0?void 0:e.content)||(0,u.__)("Content is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ly,(0,s._)((0,i._)({id:t.id},e),{handleDeleteClick:()=>n(r)}))},t.id)})})})})})]})}var lx={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",y/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";padding:",y/* .spacing["12"] */.YK["12"]," ",y/* .spacing["16"] */.YK["16"],";"),header:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;label{",_/* .typography.caption */.I.caption(),";color:",y/* .colorTokens.text.title */.I6.text.title,";}"),features:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",y/* .spacing["8"] */.YK["8"],";padding:",y/* .spacing["12"] */.YK["12"]," 0 ",y/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./addons/subscription/assets/src/js/membership-settings/components/MembershipFormFields.tsx
var{tutor_currency:lC}=ib/* .tutorConfig */.P;function lk(e){var{hasIndividualTaxControl:t}=e;var r,n;var o=(0,d/* .useFormContext */.xW)();var a=o.watch("charge_enrollment_fee");var c=o.watch("offer_sale_price");var p=o.watch("regular_price");var h=!!o.watch("schedule_sale_price");var v=!!o.watch("is_featured");var g=!!o.watch("enable_trial");var m=!!o.watch("tax_collection");var b=[3,6,9,12];var y=[...b.map(e=>({label:(0,u.sprintf)((0,u.__)("%s times","tutor-pro"),e.toString()),value:String(e)})),{label:(0,u.__)("Until cancelled","tutor-pro"),value:"Until cancelled"}];var _=o.watch("plan_type");var w=[{label:(0,u.__)("Full Site","tutor-pro"),value:"full_site"},{label:(0,u.__)("Specific Categories","tutor-pro"),value:"category"}];var x=!!((r=ib/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.enable_tax);var C=!!((n=ib/* .tutorConfig.settings */.P.settings)===null||n===void 0?void 0:n.is_tax_included_in_price);var k=()=>{if(!x){return false}if(!C){return false}return!m};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.container,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"plan_name",rules:(0,s._)((0,i._)({},iD()),{maxLength:{value:100,message:(0,u.__)("Plan name should be less than 100 characters","tutor-pro")}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,s._)((0,i._)({},e),{label:(0,u.__)("Title","tutor-pro"),placeholder:(0,u.__)("e.g., Silver Membership","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"short_description",rules:(0,s._)((0,i._)({},iD()),{maxLength:{value:200,message:(0,u.__)("Short description should be less than 200 characters","tutor-pro")}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,s._)((0,i._)({},e),{label:(0,u.__)("Short Description","tutor-pro"),placeholder:(0,u.__)("e.g., Perfect for beginners looking for weekly classes","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.inputGroup({numberOfColumn:4}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"regular_price",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(Number(e)<1){return(0,u.__)("This value must be equal to or greater than 1","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,s._)((0,i._)({},e),{label:(0,u.__)("Price","tutor-pro"),content:(lC===null||lC===void 0?void 0:lC.symbol)||"$",placeholder:(0,u.__)("Plan price","tutor-pro"),selectOnFocus:true,contentCss:r7/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"recurring_value",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(Number(e)<1){return(0,u.__)("This value must be equal to or greater than 1","tutor-pro")}if(Number(e)%1!==0){return(0,u.__)("This value can not be fractional","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,s._)((0,i._)({},e),{label:(0,u.__)("Billing Interval","tutor-pro"),placeholder:(0,u.__)("12","tutor-pro"),selectOnFocus:true,type:"number",onChange:t=>{var r=String(t).includes(".");if(r){e.field.onChange(String(t).replace(".",""))}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(aD,(0,s._)((0,i._)({},e),{label:r1/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:" "}):(0,u.__)("Recurring Options","tutor-pro"),options:[{label:(0,u.__)("Day(s)","tutor-pro"),value:"day"},{label:(0,u.__)("Week(s)","tutor-pro"),value:"week"},{label:(0,u.__)("Month(s)","tutor-pro"),value:"month"},{label:(0,u.__)("Year(s)","tutor-pro"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"recurring_limit",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(e==="Until cancelled"){return true}if(Number(e)<=0){return(0,u.__)("Renew plan must be greater than 0","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sx,(0,s._)((0,i._)({},e),{label:(0,u.__)("Billing Cycles","tutor-pro"),placeholder:(0,u.__)("Select or type times to renewing the plan","tutor-pro"),content:e.field.value!=="Until cancelled"&&(0,u.__)("Times","tutor-pro"),contentPosition:"right",type:"number",presetOptions:y,selectOnFocus:true}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.taxWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.taxFieldWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Tax Collection","tutor-pro")}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"tax_collection",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Charge tax on this plan","tutor-pro")}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:k(),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.taxAlert,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.alertTitle,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{name:"warning",width:24,height:24}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,u.__)("Tax is Disabled.","tutor-pro")})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:lA.alertDescription,children:(0,u.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor-pro")})]})})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"plan_type",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sS,(0,s._)((0,i._)({},e),{label:(0,u.__)("Membership Type","tutor-pro"),options:w,wrapperCss:lA.planTypeWrapper}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:_==="category",children:/*#__PURE__*/(0,l/* .jsx */.Y)(lu,{form:o})}),/*#__PURE__*/(0,l/* .jsx */.Y)(lw,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Charge enrollment fee","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"enrollment_fee",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Enrollment fee must be greater than 0","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,s._)((0,i._)({},e),{label:(0,u.__)("Enrollment Fee","tutor-pro"),content:(lC===null||lC===void 0?void 0:lC.symbol)||"$",placeholder:(0,u.__)("Enter enrollment fee","tutor-pro"),selectOnFocus:true,contentCss:r7/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"enable_trial",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Offer a trial period","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:g,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.inputGroup({numberOfColumn:2}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"trial_value",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(Number(e)<=0){return(0,u.__)("Trial duration must be greater than 0","tutor-pro")}if(Number(e)%1!==0){return(0,u.__)("Trial duration can not be fractional","tutor-pro")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,s._)((0,i._)({},e),{label:(0,u.__)("Length of Trial","tutor-pro"),placeholder:(0,u.__)("Enter trial duration","tutor-pro"),selectOnFocus:true,type:"number",contentPosition:"right",showVerticalBar:false,content:Number(e.field.value)>1?(0,u.__)("Days","tutor-pro"):(0,u.__)("Day","tutor-pro"),onChange:t=>{var r=String(t).includes(".");if(r){e.field.onChange(String(t).replace(".",""))}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"trial_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,s._)((0,i._)({},e),{label:(0,u.__)("Price","tutor-pro"),placeholder:(0,u.__)("Price","tutor-pro"),contentPosition:Number(e.field.value)>0?"left":"right",content:Number(e.field.value)>0?(lC===null||lC===void 0?void 0:lC.symbol)||"$":"Free",selectOnFocus:true,contentCss:Number(e.field.value)>0?r7/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle:undefined,showVerticalBar:Number(e.field.value)>0,type:"number"}))})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Do not provide certificate","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"is_featured",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Mark as featured","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:v,children:/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"featured_text",rules:{maxLength:{value:100,message:(0,u.__)("Feature text should be less than 100 characters","tutor-pro")}},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iQ,(0,s._)((0,i._)({},e),{label:(0,u.__)("Feature Text","tutor-pro")}))})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.salePriceWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(iI/* ["default"] */.A,(0,s._)((0,i._)({},e),{label:(0,u.__)("Offer sale price","tutor-pro")}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(ai/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.salePriceInputs,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"sale_price",rules:(0,s._)((0,i._)({},iD()),{validate:e=>{if(e&&p&&Number(e)>=Number(p)){return(0,u.__)("Sale price should be less than regular price","tutor-pro")}if(e&&p&&Number(e)<=0){return(0,u.__)("Sale price should be greater than 0","tutor-pro")}return undefined}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sn,(0,s._)((0,i._)({},e),{type:"number",label:(0,u.__)("Sale Price","tutor-pro"),content:(lC===null||lC===void 0?void 0:lC.symbol)||"$",selectOnFocus:true,contentCss:r7/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:o.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(H,(0,s._)((0,i._)({},e),{label:(0,u.__)("Schedule the sale price","tutor-pro")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(ai/* ["default"] */.A,{when:h,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Sale Starts From","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:r7/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{name:"sale_price_from_date",control:o.control,rules:{required:(0,u.__)("Schedule date is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(nb,(0,s._)((0,i._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{name:"sale_price_from_time",control:o.control,rules:{required:(0,u.__)("Schedule time is required","tutor-pro")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sW,(0,s._)((0,i._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:lA.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,u.__)("Sale Ends To","tutor-pro")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:r7/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{name:"sale_price_to_date",control:o.control,rules:{required:(0,u.__)("Schedule date is required","tutor-pro"),validate:{checkEndDate:e=>{var t=o.watch("sale_price_from_date");var r=e;if(t&&r){return new Date(t)>new Date(r)?(0,u.__)("Sales End date should be greater than start date","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(nb,(0,s._)((0,i._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:o.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{name:"sale_price_to_time",control:o.control,rules:{required:(0,u.__)("Schedule time is required","tutor-pro"),validate:{checkEndTime:e=>{var t=o.watch("sale_price_from_date");var r=o.watch("sale_price_from_time");var n=o.watch("sale_price_to_date");var a=e;if(t&&n&&r&&a){return new Date("".concat(t," ").concat(r))>new Date("".concat(n," ").concat(a))?(0,u.__)("Sales End time should be greater than start time","tutor-pro"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(sW,(0,s._)((0,i._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})]})}var lA={container:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;max-width:640px;margin:0 auto;border:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",y/* .borderRadius.card */.Vq.card,";padding:",y/* .spacing["16"] */.YK["16"],";",r7/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",y/* .spacing["12"] */.YK["12"],";"),salePriceWrapper:/*#__PURE__*/(0,c/* .css */.AH)("background-color:",y/* .colorTokens.background.white */.I6.background.white,";",r7/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",y/* .spacing["20"] */.YK["20"],";padding:",y/* .spacing["12"] */.YK["12"],";border:1px solid ",y/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",y/* .borderRadius.card */.Vq.card,";"),salePriceInputs:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",y/* .spacing["8"] */.YK["8"],";"),inputGroup:e=>{var{numberOfColumn:t=4}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:",t===4?"1fr 0.7fr 1fr 1fr":"repeat(".concat(t,", 1fr)"),";align-items:start;gap:",y/* .spacing["8"] */.YK["8"],";",y/* .Breakpoint.mobile */.EA.mobile,"{grid-template-columns:1fr;}")},datetimeWrapper:/*#__PURE__*/(0,c/* .css */.AH)("label{",_/* .typography.caption */.I.caption(),";color:",y/* .colorTokens.text.title */.I6.text.title,";}"),planTypeWrapper:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex(),"    gap:",y/* .spacing["8"] */.YK["8"],";"),taxWrapper:/*#__PURE__*/(0,c/* .css */.AH)("padding:",y/* .spacing["12"] */.YK["12"],";border:1px solid ",y/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",y/* .borderRadius.card */.Vq.card,";background-color:",y/* .colorTokens.background.white */.I6.background.white,";label{",_/* .typography.body */.I.body(),";color:",y/* .colorTokens.text.title */.I6.text.title,";}"),taxFieldWrapper:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",y/* .spacing["8"] */.YK["8"],";"),taxAlert:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",y/* .spacing["8"] */.YK["8"],";margin-top:",y/* .spacing["8"] */.YK["8"],";padding:",y/* .spacing["12"] */.YK["12"],";background-color:",y/* .colorTokens.color.warning["40"] */.I6.color.warning["40"],";border:1px solid ",y/* .colorTokens.color.warning["50"] */.I6.color.warning["50"],";border-radius:",y/* .borderRadius["6"] */.Vq["6"],";"),alertTitle:/*#__PURE__*/(0,c/* .css */.AH)(r7/* .styleUtils.display.flex */.x.display.flex(),"    gap:",y/* .spacing["4"] */.YK["4"],";align-items:center;",_/* .typography.caption */.I.caption("medium"),";color:",y/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";svg{color:",y/* .colorTokens.design.warning */.I6.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),"    color:",y/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";")}}}]);