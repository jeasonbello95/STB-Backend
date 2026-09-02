(()=>{"use strict";var e={};// The module cache
var t={};// The require function
function r(a){// Check if module is in cache
var n=t[a];if(n!==undefined){return n.exports}// Create a new module (and put it into the cache)
var o=t[a]={exports:{}};// Execute the module function
e[a](o,o.exports,r);// Return the exports of the module
return o.exports}// webpack/runtime/rspack_version
(()=>{r.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{r.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./assets/src/js/utils.js
/**
 * Converts a local date to GMT (Greenwich Mean Time).
 * 
 * @param {Date} date - The local date to convert to GMT
 * @param {string} [dateFormat='yyyy-MM-dd HH:mm:ss'] - The format string for the output date
 * @returns {string} The formatted GMT date string
 * 
 * @since v3.8.0
 */var a=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"yyyy-MM-dd HH:mm:ss";var r=e.getTimezoneOffset();var a=addMinutes(e,r);return format(a,t)};/**
 * Converts a GMT date to local date based on the user's timezone.
 * 
 * @param {string|Date} date - The GMT date to convert to local time
 * @returns {Date} The converted local date object
 * 
 * @since v3.8.0
 */var n=e=>{var t=new Date(e);var r=t.getTimezoneOffset();return addMinutes(t,-r)};/**
 * Validates if a string is a valid email address format.
 * 
 * @param {string} email - The email string to validate
 * @returns {boolean} True if the email format is valid, false otherwise
 * 
 * @since v3.8.1
 */var o=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);/**
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
 */function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var t=new FormData;Object.keys(e).forEach(r=>t.set(r,e[r]));t.set(window.tutor_get_nonce_data(true).key,window.tutor_get_nonce_data(true).value);return t}/**
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
 */function c(e){return _async_to_generator(function*(){try{var t=yield fetch(window._tutorobject.ajaxurl,{method:"POST",body:e});return t}catch(e){tutor_toast(__("Operation failed","tutor-pro"),e,"error")}})()}var d=(e,t)=>{var{__:r}=wp.i18n;var{data:a={}}=e||{};var{message:n=t||r("Something Went Wrong!","tutor-pro")}=a;return n};// CONCATENATED MODULE: ./addons/tutor-certificate/assets/src/js/_html-to-image.js
jQuery(document).ready(function(e){var t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);var r=t?parseInt(t[1]):0;var a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);var n=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);var{__,_x:o,_n:i,_nx:c}=wp.i18n;e("body").append('<svg id="tutor_svg_font_id" width="0" height="0" style="background-color:white;"></svg>');var s=(t,r)=>{var a=new XMLHttpRequest;a.open("get","?tutor_action=get_fonts&course_id="+t);a.responseType="text";a.send();a.onloadend=()=>{//(2)find all font urls.
var t=a.response;var n=t.match(/https?:\/\/[^ \)]+/g);var o=0;n.forEach(a=>{//(3)get each font binary.
var i=new XMLHttpRequest;i.open("get",a);i.responseType="blob";i.onloadend=()=>{//(4)conver font blob to binary string.
var c=new FileReader;c.onloadend=()=>{//(5)replace font url by binary string.
t=t.replace(new RegExp(a),c.result);o++;//check all fonts are replaced.
if(o==n.length){e("#tutor_svg_font_id").prepend("<style>".concat(t,"</style>"));r()}};c.readAsDataURL(i.response)};i.send()})}};var u=e=>{// Create canvas
var t=document.createElement("canvas");var r=t.getContext("2d");// Set width and height
t.width=e.naturalWidth;t.height=e.naturalHeight;// Draw the image
r.drawImage(e,0,0);return t.toDataURL("image/png")};var l=function e(e,t){var r=e.getElementsByTagName("img");var a=0;function n(){if(a>=r.length){t();return}r[a].onload=n;r[a].src=u(r[a]);a=a+1}n()};// HTML to Images related functionalities
var v=function t(t,o,i){this.reload=function(){window.location.reload()};this.dataURItoBlob=(e,t)=>{// convert base64 to raw binary data held in a string
var r=atob(e.split(",")[1]);// write the bytes of the string to an ArrayBuffer
var a=new ArrayBuffer(r.length);var n=new Uint8Array(a);for(var o=0;o<r.length;o++){n[o]=r.charCodeAt(o)}return new Blob([a],{type:t})};this.store_certificate=(t,r)=>{var a=tutor_get_nonce_data(true);var n=new FormData;n.append("action","tutor_store_certificate_image");n.append("cert_hash",o);n.append("certificate_image",this.dataURItoBlob(t,"image/jpeg"),"certificate.jpg");n.append(a.key,a.value);e.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:n,processData:false,contentType:false,success:function e(e){var t=(e.data||{}).message;r(e&&e.success,t)},error:function e(){r(false)}})};// Call various method like image converter and after action
this.dispatch_conversion_methods=(e,t)=>{var r=e.getElementsByTagName("body")[0];var a=e.getElementById("watermark");var o=a.offsetWidth;var i=a.offsetHeight;// Now set this dimension body
r.style.display="inline-block";r.style.overflow="hidden";r.style.width=o+"px";r.style.height=i+"px";r.style.padding="0px";r.style.margin="0px";// Now capture the iframe using library
var c=e.getElementsByTagName("body")[0];var d={scale:3,letterRendering:true,logging:true,foreignObjectRendering:n,allowTaint:true,useCORS:true,x:0,y:0,width:o,height:i,windowWidth:o,windowHeight:i};l(e,()=>{html2canvas(c,d).then(e=>{var r=e.toDataURL("image/jpeg",1);// Store the blob on server
this.store_certificate(r,(e,r)=>{console.log("Store cert image");// Show error if fails
!e?alert(r||__("Something Went Wrong","tutor-pro")):0;// Execute callback if callable
typeof t=="function"?t(e):0})})})};this.load_certificate_builder=e=>{var t=document.createElement("iframe");t.width="1920";t.height="1080";t.style.position="absolute";t.style.left="-999999px";t.src=e;document.getElementsByTagName("body")[0].appendChild(t)};// Fetch certificate html from server
// and initialize converters
this.init_render_certificate=n=>{var i={action:"tutor_generate_course_certificate",course_id:t,certificate_hash:o||"",_tutor_nonce:window._tutorobject._tutor_nonce};// Get the HTML from server
e.ajax({url:window._tutorobject.ajaxurl,type:"POST",data:i,success:o=>{if(!o.success){tutor_toast(__("Error","tutor-pro"),d(o),"error");return}// Open certificate builder if made by builder
var{certificate_builder_url:i}=o.data;if(i){window.tutor_certificate_after_build=()=>n(true);this.load_certificate_builder(i);return}// Backward compatibile certificate rendering
var c=o.success?o.data.html:"";// We need to put the html into iframe to make the certificate styles isolated from parent document
// Otherwise style might be overridden/influenced
var u=document.createElement("iframe");var l=function t(t){t.write(c);t.write(e("<div></div>").append(e("#tutor_svg_font_id").clone()).html());if(r){// Increase word spacing, other wise firefox compresses texts.
var a=window.document.createElement("style");a.innerHTML="*{word-spacing:3px !important; letter-spacing:2px !important;}";t.getElementsByTagName("head")[0].appendChild(a)}};if(r||a){u.addEventListener("load",()=>{var e=u.contentWindow||u.contentDocument.document||u.contentDocument;e=e.document;l(e);// Load font and then call dispatcher
s(t,()=>this.dispatch_conversion_methods(e,n))})}else{s(t,()=>{var e=u.contentWindow||u.contentDocument.document||u.contentDocument;e=e.document;// Render the html in iframe
e.open();l(e);e.close();u.onload=()=>this.dispatch_conversion_methods(e,n)})}u.style.position="absolute";u.style.left="-999999px";document.getElementsByTagName("body")[0].appendChild(u)}})}};// Download PDF certificate
var p=e(".tutor-certificate-pdf");p.click(function(t){t.preventDefault();var r=e("#tutor-pro-certificate-preview");var a=r.attr("src");var n=r.data("orientation")==="landscape"?"l":"p";var o=r.data("size")||"letter";var i=new jspdf.jsPDF(n,"px",o,true);i.addImage(a,"PNG",0,0,i.internal.pageSize.getWidth(),i.internal.pageSize.getHeight(),undefined,"NONE");i.save("certificate-".concat(new Date().getTime(),".pdf"))});// Download image directly without further processing (in individual certificate page)
var g=e(".tutor-certificate-image");g.click(function(t){t.preventDefault();var r=e("#tutor-pro-certificate-preview");var a=document.createElement("A");a.href=r.attr("src");a.download="certificate-"+new Date().getTime()+".jpg";document.body.appendChild(a);a.click();document.body.removeChild(a)});// Instantiate image processor for this scope
var f=e("#tutor-pro-certificate-preview");var h=f.data("course_id");var m=f.data("cert_hash");var _=new v(h,m);// Regenerate certificate image (in individual page)
if(f.data("is_generated")==="no"){_.init_render_certificate(function(){window.location.replace(f.data("certificate_url"))})}// Print certificate.
this.PrintDiv=()=>{var e=document.querySelector("#div-to-print");if(!e){return}var t=window.open("","_blank","width=800,height=500");var r=t.document;var a=r.createElement("body");a.append(...e.cloneNode(true).childNodes);r.body.replaceWith(a);setTimeout(()=>{t.print();t.close()},100)}})})();