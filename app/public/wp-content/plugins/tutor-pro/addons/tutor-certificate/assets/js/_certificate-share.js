(()=>{var r={};// The module cache
var e={};// The require function
function t(a){// Check if module is in cache
var i=e[a];if(i!==undefined){return i.exports}// Create a new module (and put it into the cache)
var n=e[a]={exports:{}};// Execute the module function
r[a](n,n.exports,t);// Return the exports of the module
return n.exports}// webpack/runtime/rspack_version
(()=>{t.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{t.ruid="bundler=rspack@1.6.5"})();window.jQuery(document).ready(r=>{/**
     * Share Certificate
     *
     * @since 4.0.0
     */if(r.fn.ShareLink){var e=r(".tutor-social-share-wrap");if(e.length){var t=JSON.parse(e.attr("data-social-share-config"));e.find(".tutor_share").ShareLink({title:t.title,text:t.text,image:t.image,class_prefix:"s_",width:640,height:480})}}})})();