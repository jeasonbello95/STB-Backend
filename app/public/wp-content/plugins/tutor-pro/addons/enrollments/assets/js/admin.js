(()=>{"use strict";var t={};// The module cache
var e={};// The require function
function r(n){// Check if module is in cache
var o=e[n];if(o!==undefined){return o.exports}// Create a new module (and put it into the cache)
var a=e[n]={exports:{}};// Execute the module function
t[n](a,a.exports,r);// Return the exports of the module
return a.exports}// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function n(t,e,r,n,o,a,u){try{var d=t[a](u);var i=d.value}catch(t){r(t);return}if(d.done)e(i);else Promise.resolve(i).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var u=t.apply(e,r);function d(t){n(u,o,a,d,i,"next",t)}function i(t){n(u,o,a,d,i,"throw",t)}d(undefined)})}};// CONCATENATED MODULE: ./assets/src/js/utils.js
/**
 * Converts a local date to GMT (Greenwich Mean Time).
 * 
 * @param {Date} date - The local date to convert to GMT
 * @param {string} [dateFormat='yyyy-MM-dd HH:mm:ss'] - The format string for the output date
 * @returns {string} The formatted GMT date string
 * 
 * @since v3.8.0
 */var a=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"yyyy-MM-dd HH:mm:ss";var r=t.getTimezoneOffset();var n=addMinutes(t,r);return format(n,e)};/**
 * Converts a GMT date to local date based on the user's timezone.
 * 
 * @param {string|Date} date - The GMT date to convert to local time
 * @returns {Date} The converted local date object
 * 
 * @since v3.8.0
 */var u=t=>{var e=new Date(t);var r=e.getTimezoneOffset();return addMinutes(e,-r)};/**
 * Validates if a string is a valid email address format.
 * 
 * @param {string} email - The email string to validate
 * @returns {boolean} True if the email format is valid, false otherwise
 * 
 * @since v3.8.1
 */var d=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);/**
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
 */function i(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var e=new FormData;Object.keys(t).forEach(r=>e.set(r,t[r]));e.set(window.tutor_get_nonce_data(true).key,window.tutor_get_nonce_data(true).value);return e}/**
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
 */function c(t){return o(function*(){try{var e=yield fetch(window._tutorobject.ajaxurl,{method:"POST",body:t});return e}catch(t){tutor_toast(__("Operation failed","tutor-pro"),t,"error")}})()}var l=(t,e)=>{var{__:r}=wp.i18n;var{data:n={}}=t||{};var{message:o=e||r("Something Went Wrong!","tutor-pro")}=n;return o};// CONCATENATED MODULE: ./addons/enrollments/assets/src/js/admin.js
document.addEventListener("DOMContentLoaded",function(){var{__}=wp.i18n;var t=__("Something went wrong!","tutor-pro");/**
     * Open enrollment extend modal
     * 
     * @since v.3.3.0
     */var e=document.querySelectorAll(".tutor-extend-enrollment");e.forEach(t=>{t.addEventListener("click",function(){var e=document.querySelector("#tutor-enrollment-extend-modal");var r=e.querySelector(".tutor-extend-modal-course");var n=e.querySelector(".tutor-extend-modal-user");var o=e.querySelector(".tutor-extend-modal-enroll-expire");var a=JSON.parse(t.getAttribute("data-modal-data"));r.innerHTML='\n                <div class="tutor-extend-modal-course-thumb">\n                    <img src="'.concat(a.course_thumb,'" />\n                </div>\n                <div class="tutor-extend-modal-course-title">\n                    <a href="').concat(a.course_url,'" target="_blank">\n                        ').concat(a.course_title,"\n                    </a>\n                </div>\n            ");n.innerHTML='\n                <div class="tutor-d-flex align-items-center tutor-gap-1">\n                    <img class="tutor-avatar tutor-avatar-sm" src="'.concat(a.user_avatar,'" alt="').concat(a.user_name,'" />\n                    <div>\n                        <div class="tutor-fs-6 tutor-fw-medium tutor-color-black">').concat(a.user_name,'</div>\n                        <div class="tutor-color-subdued tutor-fs-7">').concat(a.user_email,"</div>\n                    </div>\n                </div>    \n            ");o.innerHTML='\n                <input type="hidden" name="enrollment_id" value="'.concat(a.enrol_id,'" />\n                <div class="tutor-color-secondary tutor-mb-4">\n                    ').concat(a.is_expired?__("Enrollment Expired On","tutor-pro"):__("Enrollment Expires On","tutor-pro"),'\n                </div>\n                <div class="tutor-color-danger tutor-mb-12">').concat(a.expiry_date_readable,'</div>\n                <label class="tutor-color-secondary tutor-mb-4 tutor-d-block">\n                    ').concat(__("Extend Until","tutor-pro"),'\n                </label>\n                <div class="tutor-v2-date-picker" data-prevent_redirect="1" data-input_name="enroll_extend_date" data-input_value="').concat(a.expiry_date,'" data-disable_past_date="1"></div>\n            ');window.dispatchEvent(new Event("tutor_content_changed_event"));e.classList.add("tutor-is-active");document.querySelector("body").classList.add("tutor-modal-open")})});/**
     * Handle enrollment extend submit
     *
     * @since v.3.3.0
     */var r=document.querySelector("#tutor-enrollment-extend-submit-btn");r===null||r===void 0?void 0:r.addEventListener("click",function(){return o(function*(){r.classList.add("is-loading");var e=document.querySelector("#tutor-enrollment-extend-modal");var n=e.querySelector("input[name='enroll_extend_date']").value;var o=e.querySelector("input[name='enrollment_id']").value;var a=i({action:"tutor_pro_enrollment_extend",enrollment_id:o,extend_date:n});try{var u=yield c(a);var{status_code:d,message:l}=yield u.json();if(d===200){tutor_toast(__("Success","tutor-pro"),l,"success");window.location.reload()}else{tutor_toast(__("Failed","tutor-pro"),l,"error")}}catch(e){tutor_toast(__("Operation failed","tutor-pro"),t,"error")}finally{r.classList.remove("is-loading")}})()})})})();