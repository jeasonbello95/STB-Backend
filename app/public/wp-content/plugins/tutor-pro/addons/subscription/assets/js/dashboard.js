(()=>{"use strict";var e={};// The module cache
var r={};// The require function
function t(n){// Check if module is in cache
var i=r[n];if(i!==undefined){return i.exports}// Create a new module (and put it into the cache)
var o=r[n]={exports:{}};// Execute the module function
e[n](o,o.exports,t);// Return the exports of the module
return o.exports}// webpack/runtime/rspack_version
(()=>{t.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{t.ruid="bundler=rspack@1.6.5"})();// UNUSED EXPORTS: initDashboardSubscriptions
;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function n(e,r,t,n,i,o,u){try{var c=e[o](u);var s=c.value}catch(e){t(e);return}if(c.done)r(s);else Promise.resolve(s).then(n,i)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(i,o){var u=e.apply(r,t);function c(e){n(u,i,o,c,s,"next",e)}function s(e){n(u,i,o,c,s,"throw",e)}c(undefined)})}};// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_define_property.js
function o(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else e[r]=t;return e};// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
function u(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};var n=Object.keys(t);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))}n.forEach(function(r){o(e,r,t[r])})}return e};// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(r){n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})}t.push.apply(t,n)}return t}function s(e,r){r=r!=null?r:{};if(Object.getOwnPropertyDescriptors)Object.defineProperties(e,Object.getOwnPropertyDescriptors(r));else{c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e};// CONCATENATED MODULE: external "wp.i18n"
const a=wp.i18n;// CONCATENATED MODULE: ./addons/subscription/assets/src/js/dashboard.ts
/**
 * Subscription Actions (Frontend Dashboard)
 * Handles subscription actions
 *
 * @since 4.0.0
 */var l=()=>{var{query:e,toast:r,endpoints:t}=window.TutorCore;var{wpPost:n}=window.TutorCore.api;var{convertToErrorMessage:o}=window.TutorCore.error;return{query:e,cancelSubscriptionMutation:null,resumeSubscriptionMutation:null,earlyRenewSubscriptionMutation:null,init(){/** Cancel Subscription */this.cancelSubscriptionMutation=this.query.useMutation(this.cancelSubscription,{onSuccess:()=>{r.success((0,a.__)("Subscription cancelled successfully!","tutor-pro"));window.location.reload()},onError:e=>{r.error(o(e))}});/** Resume Subscription */this.resumeSubscriptionMutation=this.query.useMutation(this.resumeSubscription,{onSuccess:e=>{r.success(e===null||e===void 0?void 0:e.message);window.location.reload()},onError:e=>{r.error(o(e))}});/** Early Renew Subscription */this.earlyRenewSubscriptionMutation=this.query.useMutation(this.earlyRenewSubscription,{onSuccess:e=>{r.success(e.message);window.location.reload()},onError:e=>{r.error(o(e))}})},/* --------------------
     * API Methods
     * -------------------- */cancelSubscription(e){return n(t.UPDATE_SUBSCRIPTION_STATUS,s(u({},e),{context:"frontend_dashboard",status:"cancelled"}))},resumeSubscription(e){return n(t.RESUME_SUBSCRIPTION,e)},earlyRenewSubscription(e){return n(t.EARLY_RENEW_SUBSCRIPTION,e)},/* --------------------
     * UI Handlers
     * -------------------- */handleCancelSubscription(e){return i(function*(){var r;yield(r=this.cancelSubscriptionMutation)===null||r===void 0?void 0:r.mutate({subscription_id:e})}).call(this)},handleResumeSubscription(e){return i(function*(){var r;yield(r=this.resumeSubscriptionMutation)===null||r===void 0?void 0:r.mutate({subscription_id:e})}).call(this)},handleEarlyRenewSubscription(e){return i(function*(){var r;yield(r=this.earlyRenewSubscriptionMutation)===null||r===void 0?void 0:r.mutate({subscription_id:e})}).call(this)}}};/**
 * Register Component to available in frontend.
 * Use x-data="tutorDashboardSubscriptions()" in your template.
 *
 * @returns {void}
 */var p=()=>{window.TutorComponentRegistry.register({type:"component",meta:{name:"dashboardSubscriptions",component:l}});window.TutorComponentRegistry.initWithAlpine(window.Alpine)};document.addEventListener("alpine:init",p)})();