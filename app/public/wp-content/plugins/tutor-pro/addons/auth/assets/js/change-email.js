(()=>{"use strict";var e={};// The module cache
var n={};// The require function
function r(t){// Check if module is in cache
var i=n[t];if(i!==undefined){return i.exports}// Create a new module (and put it into the cache)
var o=n[t]={exports:{}};// Execute the module function
e[t](o,o.exports,r);// Return the exports of the module
return o.exports}// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function t(e,n,r,t,i,o,a){try{var u=e[o](a);var l=u.value}catch(e){r(e);return}if(u.done)n(l);else Promise.resolve(l).then(t,i)}function i(e){return function(){var n=this,r=arguments;return new Promise(function(i,o){var a=e.apply(n,r);function u(e){t(a,i,o,u,l,"next",e)}function l(e){t(a,i,o,u,l,"throw",e)}u(undefined)})}};// CONCATENATED MODULE: external "wp.i18n"
const o=wp.i18n;// CONCATENATED MODULE: ./addons/auth/assets/src/js/change-email.ts
var a=()=>{var{query:e,toast:n,form:r,modal:t}=window.TutorCore;var{wpPost:a}=window.TutorCore.api;var{convertToErrorMessage:u}=window.TutorCore.error;return{changeEmailMutation:null,init(){if(this.changeEmailMutation){return}this.changeEmailMutation=e.useMutation(this.changeEmailRequest,{onSuccess:e=>{var r;n.success((r=e===null||e===void 0?void 0:e.message)!==null&&r!==void 0?r:(0,o.__)("Email change request sent successfully","tutor-pro"));t.closeModal("change-email-modal");window.location.reload()},onError:e=>{n.error(u(e))}})},changeEmailRequest(e){return i(function*(){return a("tutor_change_email",e)})()},handleChangeEmail(e,t){return i(function*(){var i;if(e.new_email!==e.new_email_confirmation){n.error((0,o.__)("New email and confirm new email do not match","tutor-pro"));return}yield(i=this.changeEmailMutation)===null||i===void 0?void 0:i.mutate(e);r.reset(t,e)}).call(this)}}};var u=()=>{window.TutorComponentRegistry.register({type:"component",meta:{name:"changeEmail",component:a}});window.TutorComponentRegistry.initWithAlpine(window.Alpine)};document.addEventListener("alpine:init",u)})();