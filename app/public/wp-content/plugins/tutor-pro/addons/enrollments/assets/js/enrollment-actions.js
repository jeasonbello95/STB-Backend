(()=>{"use strict";var t={};// The module cache
var r={};// The require function
function e(o){// Check if module is in cache
var a=r[o];if(a!==undefined){return a.exports}// Create a new module (and put it into the cache)
var n=r[o]={exports:{}};// Execute the module function
t[o](n,n.exports,e);// Return the exports of the module
return n.exports}// webpack/runtime/rspack_version
(()=>{e.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{e.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function o(t,r,e,o,a,n,i){try{var s=t[n](i);var u=s.value}catch(t){e(t);return}if(s.done)r(u);else Promise.resolve(u).then(o,a)}function a(t){return function(){var r=this,e=arguments;return new Promise(function(a,n){var i=t.apply(r,e);function s(t){o(i,a,n,s,u,"next",t)}function u(t){o(i,a,n,s,u,"throw",t)}s(undefined)})}};// CONCATENATED MODULE: ./assets/src/js/utils.js
/**
 * Converts a local date to GMT (Greenwich Mean Time).
 * 
 * @param {Date} date - The local date to convert to GMT
 * @param {string} [dateFormat='yyyy-MM-dd HH:mm:ss'] - The format string for the output date
 * @returns {string} The formatted GMT date string
 * 
 * @since v3.8.0
 */var n=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"yyyy-MM-dd HH:mm:ss";var e=t.getTimezoneOffset();var o=addMinutes(t,e);return format(o,r)};/**
 * Converts a GMT date to local date based on the user's timezone.
 * 
 * @param {string|Date} date - The GMT date to convert to local time
 * @returns {Date} The converted local date object
 * 
 * @since v3.8.0
 */var i=t=>{var r=new Date(t);var e=r.getTimezoneOffset();return addMinutes(r,-e)};/**
 * Validates if a string is a valid email address format.
 * 
 * @param {string} email - The email string to validate
 * @returns {boolean} True if the email format is valid, false otherwise
 * 
 * @since v3.8.1
 */var s=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);/**
 * Creates a FormData object from a data object and automatically adds security nonce.
 * 
 * @param {Object} [data={}] - The data object to convert to FormData
 * @returns {FormData} A FormData object with the provided data and security nonce
 * 
 * @example
 * const formData = tutorFormData({
 *   action: 'save_lesson_note',
 *   lesson_id: 123,
 *   note_text: 'My note content'
 * });
 * 
 * @since v3.9.0
 */function u(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var r=new FormData;Object.keys(t).forEach(e=>r.set(e,t[e]));r.set(window.tutor_get_nonce_data(true).key,window.tutor_get_nonce_data(true).value);return r}/**
 * Handles AJAX requests to the WordPress admin-ajax.php endpoint.
 * 
 * @param {FormData} formData - The FormData object containing the request data
 * @returns {Promise<Response|undefined>} The fetch Response object, or undefined if an error occurs
 * 
 * @example
 * const formData = tutorFormData({ action: 'get_lesson_data', lesson_id: 123 });
 * const response = await ajaxHandler(formData);
 * const data = await response.json();
 * 
 * @since v3.9.0
 */function d(t){return a(function*(){try{var r=yield fetch(window._tutorobject.ajaxurl,{method:"POST",body:t});return r}catch(t){tutor_toast(__("Operation failed","tutor-pro"),t,"error")}})()}var c=(t,r)=>{var{__:e}=wp.i18n;var{data:o={}}=t||{};var{message:a=r||e("Something Went Wrong!","tutor-pro")}=o;return a};// CONCATENATED MODULE: ./addons/enrollments/assets/src/js/enrollment-actions.js
document.addEventListener("DOMContentLoaded",function(){var{__}=wp.i18n;var t=["is-loading","tutor-btn-loading"];var r=__("Something went wrong!","tutor-pro");/**
     * Handle mark as complete submit
     *
     * @since 4.0.0
     */var e=document.querySelectorAll(".tutor-confirm-mark-as-complete");e.forEach(e=>{e.addEventListener("click",o=>a(function*(){o.preventDefault();var a=JSON.parse(e.getAttribute("data-modal-data"));var n=u({action:"tutor_enrolled_course_complete",course_id:a.course_id,student_id:a.student_id});try{e.disabled=true;e.classList.add(...t);var i=yield d(n);var{status_code:s,message:c}=yield i.json();if(s===200){tutor_toast(__("Success","tutor-pro"),c,"success");window.location.reload()}else{tutor_toast(__("Failed","tutor-pro"),c,"error")}}catch(t){tutor_toast(__("Operation failed","tutor-pro"),r,"error")}finally{e.classList.remove(...t);e.disabled=false}})())});/**
     * Handle reset progress submit
     *
     * @since 4.0.0
     */var o=document.querySelectorAll(".tutor-reset-progress-action");o.forEach(e=>{e.addEventListener("click",o=>a(function*(){o.preventDefault();var a=JSON.parse(e.getAttribute("data-modal-data"));var n=u({action:"tutor_reset_student_course_progress",course_id:a.course_id,student_id:a.student_id});try{e.classList.add(...t);e.disabled=true;var i=yield d(n);var{status_code:s,message:c}=yield i.json();if(s===200){tutor_toast(__("Success","tutor-pro"),c,"success");window.location.reload()}else{tutor_toast(__("Failed","tutor-pro"),c,"error")}}catch(t){tutor_toast(__("Operation failed","tutor-pro"),r,"error")}finally{e.classList.remove(...t);e.disabled=false}})())});/**
     * Handle download course certificate submit
     *
     * @since 4.0.0
     */var n=document.querySelectorAll(".tutor-download-course-certificate");n.forEach(e=>{e.addEventListener("click",o=>a(function*(){o.preventDefault();var a=JSON.parse(e.getAttribute("data-modal-data"));var n=u({action:"tutor_download_course_certificate",course_id:a.course_id,student_id:a.student_id});try{e.classList.add(...t);e.disabled=true;var i=yield d(n);var{status_code:s,message:c,data:l}=yield i.json();if(s===200){tutor_toast(__("Success","tutor-pro"),c,"success");window.location.href=l.certificate_url}else{tutor_toast(__("Failed","tutor-pro"),c,"error")}}catch(t){tutor_toast(__("Operation failed","tutor-pro"),r,"error")}finally{e.classList.remove(...t);e.disabled=false}})())})})})();