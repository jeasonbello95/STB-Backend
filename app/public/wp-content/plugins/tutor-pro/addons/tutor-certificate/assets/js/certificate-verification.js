(()=>{"use strict";var e={};// The module cache
var r={};// The require function
function t(i){// Check if module is in cache
var n=r[i];if(n!==undefined){return n.exports}// Create a new module (and put it into the cache)
var o=r[i]={exports:{}};// Execute the module function
e[i](o,o.exports,t);// Return the exports of the module
return o.exports}// webpack/runtime/rspack_version
(()=>{t.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{t.ruid="bundler=rspack@1.6.5"})();// UNUSED EXPORTS: initCertificateVerification
;// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function i(e,r,t,i,n,o,a){try{var u=e[o](a);var c=u.value}catch(e){t(e);return}if(u.done)r(c);else Promise.resolve(c).then(i,n)}function n(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(undefined)})}};// CONCATENATED MODULE: external "wp.i18n"
const o=wp.i18n;// CONCATENATED MODULE: ./addons/tutor-certificate/assets/src/js/certificate-verification.ts
/**
 * Certificate Verification
 *
 * @since 4.0.0
 */var a=()=>{var{query:e,toast:r,endpoints:t}=window.TutorCore;var{wpPost:i}=window.TutorCore.api;var{convertToErrorMessage:a}=window.TutorCore.error;return{errors:{},query:e,verifyCertificateMutation:null,init(){/** Verify Certificate */this.verifyCertificateMutation=this.query.useMutation(this.verifyCertificate,{onSuccess:e=>{r.success(e.message);setTimeout(()=>{window.location.href=e.data.certificate_url},1e3)},onError:e=>{r.error(a(e))}})},/* --------------------
     * API Methods
     * -------------------- */verifyCertificate(e){return i(t.VERIFY_CERTIFICATE,e)},/* --------------------
     * UI Handlers
     * -------------------- */handleVerifyCertificate(){return n(function*(){var e;var t=document.querySelector("input[name=certificate_id]");if(t.value.trim()===""){r.error((0,o.__)("Certificate ID is required","tutor-pro"));return}yield(e=this.verifyCertificateMutation)===null||e===void 0?void 0:e.mutate({certificate_id:t.value})}).call(this)}}};/**
 * Register Component to available in frontend.
 * Use x-data="tutorCertificateVerification()" in your template.
 *
 * @returns {void}
 */var u=()=>{window.TutorComponentRegistry.register({type:"component",meta:{name:"certificateVerification",component:a}});window.TutorComponentRegistry.initWithAlpine(window.Alpine)};document.addEventListener("alpine:init",u)})();