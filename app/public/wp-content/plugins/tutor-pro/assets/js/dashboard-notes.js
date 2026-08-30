(()=>{"use strict";var e={};// The module cache
var t={};// The require function
function o(n){// Check if module is in cache
var r=t[n];if(r!==undefined){return r.exports}// Create a new module (and put it into the cache)
var i=t[n]={exports:{}};// Execute the module function
e[n](i,i.exports,o);// Return the exports of the module
return i.exports}// webpack/runtime/rspack_version
(()=>{o.rv=()=>"1.6.5"})();// webpack/runtime/rspack_unique_id
(()=>{o.ruid="bundler=rspack@1.6.5"})();// CONCATENATED MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
function n(e,t,o,n,r,i,u){try{var s=e[i](u);var d=s.value}catch(e){o(e);return}if(s.done)t(d);else Promise.resolve(d).then(n,r)}function r(e){return function(){var t=this,o=arguments;return new Promise(function(r,i){var u=e.apply(t,o);function s(e){n(u,r,i,s,d,"next",e)}function d(e){n(u,r,i,s,d,"throw",e)}s(undefined)})}};// CONCATENATED MODULE: external "wp.i18n"
const i=wp.i18n;// CONCATENATED MODULE: ./assets/src/js/notes/dashboard-notes.ts
var u="tutor-dashboard-note-delete-modal";var s="tutor-note-content-";var d="tutor-note-input-";/**
 * Dashboard Notes Page Component
 * Handles note actions using HTTP and Query services
 */var a=()=>{var{query:e,toast:t,modal:o}=window.TutorCore;var{wpPost:n}=window.TutorCore.api;var{convertToErrorMessage:a}=window.TutorCore.error;return{query:e,editingId:null,deleteMutation:null,updateMutation:null,init(){// Setup delete mutation
this.deleteMutation=this.query.useMutation(this.deleteNoteRequest,{onSuccess:e=>{o.closeModal(u);t.success(e.message||(0,i.__)("Note deleted successfully","tutor-pro"));window.location.reload()},onError:e=>{o.closeModal(u);t.error(a(e))}});// Setup update mutation
this.updateMutation=this.query.useMutation(this.updateNoteRequest,{onSuccess:(e,o)=>{t.success(e.message||(0,i.__)("Note updated successfully","tutor-pro"));this.editingId=null;// Update UI
var n=document.getElementById(s+o.note_id);if(n){n.innerHTML=o.note_text}},onError:e=>{t.error(a(e))}})},deleteNoteRequest(e){return n("tutor_pro_delete_lesson_note",e)},updateNoteRequest(e){return n("tutor_pro_update_lesson_note",e)},deleteNote(e,t){o.showModal(u,{noteId:e,lessonId:t})},handleDeleteNote(e,t){return r(function*(){var o;yield(o=this.deleteMutation)===null||o===void 0?void 0:o.mutate({note_id:e,lesson_id:t})}).call(this)},editNote(e){this.editingId=e;this.$nextTick(()=>{var t=document.getElementById(d+e);if(t){t.focus();var o=t.value.length;t.setSelectionRange(o,o)}})},saveNote(e){return r(function*(){var t,o;if((t=this.updateMutation)===null||t===void 0?void 0:t.isPending){return}var n=document.getElementById(d+e);var r=n?n.value:"";yield(o=this.updateMutation)===null||o===void 0?void 0:o.mutate({note_id:e,note_text:r})}).call(this)}}};var l=()=>{window.TutorComponentRegistry.register({type:"component",meta:{name:"dashboardNotes",component:a}});window.TutorComponentRegistry.initWithAlpine(window.Alpine)};document.addEventListener("alpine:init",l)})();