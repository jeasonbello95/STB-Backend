/**
 * STB Academy - Course Builder In-Person / Event Block
 * Inyecta el bloque nativo de "Modalidad Presencial y Horario" en la vista
 * #/basics del Course Builder de Tutor LMS.
 */
(function() {
    'use strict';

    var currentCourseId = 0;
    var eventData = {
        location: '',
        days: '',
        date: '',
        schedule: '',
        is_presencial: false
    };

    var isSaving = false;
    var saveTimeout = null;
    var hasInitializedData = false;

    // Obtener el ID del curso actual
    function getCourseId() {
        var params = new URLSearchParams(window.location.search);
        var id = params.get('course_id');
        if (id) return parseInt(id, 10);

        if (window._tutorobject && window._tutorobject.stb_event_data && window._tutorobject.stb_event_data.course_id) {
            return parseInt(window._tutorobject.stb_event_data.course_id, 10);
        }
        if (window.stbCourseBuilderData && window.stbCourseBuilderData.course_id) {
            return parseInt(window.stbCourseBuilderData.course_id, 10);
        }
        return 0;
    }

    // Inicializar datos del curso
    function initData() {
        currentCourseId = getCourseId();

        // 1. Datos localizados previamente por PHP
        if (window.stbCourseBuilderData) {
            var sd = window.stbCourseBuilderData;
            if (sd.location !== undefined && sd.location !== '') eventData.location = sd.location;
            if (sd.days !== undefined && sd.days !== '') eventData.days = sd.days;
            if (sd.date !== undefined && sd.date !== '') eventData.date = sd.date;
            if (sd.schedule !== undefined && sd.schedule !== '') eventData.schedule = sd.schedule;
            if (sd.is_presencial !== undefined) eventData.is_presencial = !!sd.is_presencial;
        }

        if (window._tutorobject && window._tutorobject.stb_event_data) {
            var td = window._tutorobject.stb_event_data;
            if (td.location !== undefined && td.location !== '') eventData.location = td.location;
            if (td.days !== undefined && td.days !== '') eventData.days = td.days;
            if (td.date !== undefined && td.date !== '') eventData.date = td.date;
            if (td.schedule !== undefined && td.schedule !== '') eventData.schedule = td.schedule;
            if (td.is_presencial !== undefined) eventData.is_presencial = !!td.is_presencial;
        }

        // 2. Fetch asíncrono para asegurar valores actualizados desde la base de datos
        if (currentCourseId) {
            fetchEventDetails();
        }
    }

    function fetchEventDetails() {
        if (!currentCourseId) return;
        var ajaxUrl = (window.stbCourseBuilderData && window.stbCourseBuilderData.ajax_url) ||
                      (window._tutorobject && window._tutorobject.ajaxurl) ||
                      '/wp-admin/admin-ajax.php';

        var url = ajaxUrl + '?action=stb_get_builder_event_details&course_id=' + currentCourseId;

        fetch(url, { credentials: 'same-origin' })
            .then(function(res) { return res.json(); })
            .then(function(res) {
                if (res && res.success && res.data) {
                    if (res.data.location !== undefined) eventData.location = res.data.location || '';
                    if (res.data.days !== undefined) eventData.days = res.data.days || '';
                    if (res.data.date !== undefined) eventData.date = res.data.date || '';
                    if (res.data.schedule !== undefined) eventData.schedule = res.data.schedule || '';
                    if (res.data.is_presencial !== undefined) eventData.is_presencial = !!res.data.is_presencial;
                    hasInitializedData = true;
                    updateFormFieldsFromState();
                }
            })
            .catch(function(err) {
                console.warn('[STB Event Block] Error al cargar detalles:', err);
            });
    }

    // Actualizar campos en el DOM según el estado en memoria
    function updateFormFieldsFromState() {
        var card = document.getElementById('stb-course-builder-event-card');
        if (!card) return;

        var switchEl = card.querySelector('#stb_input_is_presencial');
        var locEl = card.querySelector('#stb_input_location');
        var daysEl = card.querySelector('#stb_input_days');
        var dateEl = card.querySelector('#stb_input_date');
        var schedEl = card.querySelector('#stb_input_schedule');
        var fieldsWrapper = card.querySelector('#stb-presencial-fields-wrapper');

        // Si ya hay ubicación o días definidos, marcar presencial como true por defecto
        if (eventData.location || eventData.days || eventData.date || eventData.schedule) {
            eventData.is_presencial = true;
        }

        if (switchEl) {
            switchEl.checked = !!eventData.is_presencial;
        }
        if (fieldsWrapper) {
            if (eventData.is_presencial) {
                fieldsWrapper.classList.remove('stb-fields-disabled');
            } else {
                fieldsWrapper.classList.add('stb-fields-disabled');
            }
        }

        if (locEl && document.activeElement !== locEl) locEl.value = eventData.location || '';
        if (daysEl && document.activeElement !== daysEl) daysEl.value = eventData.days || '';
        if (dateEl && document.activeElement !== dateEl) dateEl.value = eventData.date || '';
        if (schedEl && document.activeElement !== schedEl) schedEl.value = eventData.schedule || '';
    }

    // Actualizar el estado visual de guardado
    function setSaveStatus(status) {
        var statusEl = document.getElementById('stb-save-status');
        if (!statusEl) return;

        statusEl.className = 'stb-save-status';

        var textEl = statusEl.querySelector('.stb-status-text');
        if (status === 'saving') {
            statusEl.classList.add('stb-status-saving');
            if (textEl) textEl.textContent = 'Guardando...';
        } else if (status === 'saved') {
            statusEl.classList.add('stb-status-saved');
            if (textEl) textEl.textContent = 'Guardado';
        } else if (status === 'error') {
            statusEl.classList.add('stb-status-error');
            if (textEl) textEl.textContent = 'Error al guardar';
        }
    }

    // Guardar los datos en WordPress
    function saveEventDetails(callback) {
        if (!currentCourseId) {
            currentCourseId = getCourseId();
            if (!currentCourseId) return;
        }

        setSaveStatus('saving');
        isSaving = true;

        var ajaxUrl = (window.stbCourseBuilderData && window.stbCourseBuilderData.ajax_url) ||
                      (window._tutorobject && window._tutorobject.ajaxurl) ||
                      '/wp-admin/admin-ajax.php';
        var nonce = (window.stbCourseBuilderData && window.stbCourseBuilderData.nonce) ||
                    (window._tutorobject && window._tutorobject._tutor_nonce) || '';

        var formData = new FormData();
        formData.append('action', 'stb_save_builder_event_details');
        formData.append('course_id', currentCourseId);
        formData.append('location', eventData.location || '');
        formData.append('days', eventData.days || '');
        formData.append('date', eventData.date || '');
        formData.append('schedule', eventData.schedule || '');
        formData.append('is_presencial', eventData.is_presencial ? '1' : '0');
        if (nonce) {
            formData.append('nonce', nonce);
        }

        fetch(ajaxUrl, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(res) { return res.json(); })
        .then(function(res) {
            isSaving = false;
            if (res && res.success) {
                setSaveStatus('saved');
            } else {
                setSaveStatus('error');
            }
            if (typeof callback === 'function') callback(res);
        })
        .catch(function(err) {
            isSaving = false;
            setSaveStatus('error');
            console.error('[STB Event Block] Error al guardar:', err);
            if (typeof callback === 'function') callback(null);
        });
    }

    // Programar guardado automático debounced
    function scheduleAutoSave() {
        setSaveStatus('saving');
        if (saveTimeout) {
            clearTimeout(saveTimeout);
        }
        saveTimeout = setTimeout(function() {
            saveEventDetails();
        }, 600);
    }

    // Construir el HTML del bloque de configuración
    function createEventCardElement() {
        var card = document.createElement('div');
        card.id = 'stb-course-builder-event-card';

        card.innerHTML = [
            '<div class="stb-card-header">',
                '<div class="stb-header-left">',
                    '<div class="stb-header-icon-wrap">',
                        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
                            '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>',
                            '<line x1="16" y1="2" x2="16" y2="6"></line>',
                            '<line x1="8" y1="2" x2="8" y2="6"></line>',
                            '<line x1="3" y1="10" x2="21" y2="10"></line>',
                            '<circle cx="12" cy="15" r="2"></circle>',
                        '</svg>',
                    '</div>',
                    '<div>',
                        '<h4 class="stb-card-title">Modalidad Presencial y Horarios</h4>',
                        '<p class="stb-card-subtitle">Configura dónde se impartirá el curso, qué días se dictará y el horario específico.</p>',
                    '</div>',
                '</div>',
                '<div class="stb-header-right">',
                    '<span class="stb-brand-badge">STB Academy</span>',
                    '<div id="stb-save-status" class="stb-save-status" title="Estado de guardado">',
                        '<span class="stb-status-dot"></span>',
                        '<span class="stb-status-text">Guardado</span>',
                    '</div>',
                '</div>',
            '</div>',

            '<div class="stb-card-body">',
                '<!-- Switch de activación -->',
                '<div class="stb-switch-row">',
                    '<div class="stb-switch-info">',
                        '<span class="stb-switch-title">Habilitar Modalidad Presencial / Evento</span>',
                        '<span class="stb-switch-desc">Al activar esta opción, el curso se etiquetará automáticamente como <strong>presencial</strong> y se publicará en el catálogo de Cursos y en el Calendario de Eventos.</span>',
                    '</div>',
                    '<label class="stb-switch-label">',
                        '<input type="checkbox" id="stb_input_is_presencial"' + (eventData.is_presencial ? ' checked' : '') + ' />',
                        '<span class="stb-switch-slider"></span>',
                    '</label>',
                '</div>',

                '<!-- Contenedor de campos -->',
                '<div id="stb-presencial-fields-wrapper" class="stb-fields-wrapper' + (!eventData.is_presencial ? ' stb-fields-disabled' : '') + '">',
                    
                    '<!-- Campo 1: Ubicación -->',
                    '<div class="stb-form-group">',
                        '<label for="stb_input_location" class="stb-field-label">',
                            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stb-field-icon">',
                                '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>',
                                '<circle cx="12" cy="10" r="3"></circle>',
                            '</svg>',
                            '¿Dónde se hará el curso? (Ubicación física / Sede)',
                        '</label>',
                        '<input type="text" id="stb_input_location" class="stb-text-input" placeholder="ej. CC La Redoma de los Robles, Local 50 — Porlamar, Nueva Esparta" value="' + escapeHtml(eventData.location) + '" />',
                        '<span class="stb-field-help">Indica la dirección física completa, aula o sede donde los alumnos asistirán presencialmente.</span>',
                    '</div>',

                    '<!-- Campo 2: Días del curso -->',
                    '<div class="stb-form-group">',
                        '<label for="stb_input_days" class="stb-field-label">',
                            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stb-field-icon">',
                                '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>',
                                '<line x1="16" y1="2" x2="16" y2="6"></line>',
                                '<line x1="8" y1="2" x2="8" y2="6"></line>',
                                '<line x1="3" y1="10" x2="21" y2="10"></line>',
                            '</svg>',
                            'Días en los que se hará el curso',
                        '</label>',
                        '<input type="text" id="stb_input_days" class="stb-text-input" placeholder="ej. Sábados (12, 19 y 26 de Septiembre) o Lunes a Viernes" value="' + escapeHtml(eventData.days) + '" />',
                        
                        '<div class="stb-chips-container" data-target="stb_input_days">',
                            '<span class="stb-chips-title">Sugerencias rápidas:</span>',
                            '<button type="button" class="stb-chip" data-val="Sábados">Sábados</button>',
                            '<button type="button" class="stb-chip" data-val="Lunes a Viernes">Lunes a Viernes</button>',
                            '<button type="button" class="stb-chip" data-val="Martes y Jueves">Martes y Jueves</button>',
                            '<button type="button" class="stb-chip" data-val="Fines de Semana">Fines de Semana</button>',
                            '<button type="button" class="stb-chip" data-val="Viernes y Sábados">Viernes y Sábados</button>',
                        '</div>',

                        '<div class="stb-subgroup" style="margin-top: 10px;">',
                            '<label for="stb_input_date" class="stb-field-sublabel">',
                                'Fecha de inicio del evento (para ubicar en el Calendario):',
                            '</label>',
                            '<input type="date" id="stb_input_date" class="stb-text-input stb-date-input" value="' + escapeHtml(eventData.date) + '" />',
                            '<span class="stb-field-help">Esta fecha marcará el día correspondiente en el Calendario Interactivo de Eventos de la web.</span>',
                        '</div>',
                    '</div>',

                    '<!-- Campo 3: Horario específico -->',
                    '<div class="stb-form-group">',
                        '<label for="stb_input_schedule" class="stb-field-label">',
                            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stb-field-icon">',
                                '<circle cx="12" cy="12" r="10"></circle>',
                                '<polyline points="12 6 12 12 16 14"></polyline>',
                            '</svg>',
                            'Horario específico',
                        '</label>',
                        '<input type="text" id="stb_input_schedule" class="stb-text-input" placeholder="ej. 09:00 AM – 01:00 PM (Hora de Venezuela)" value="' + escapeHtml(eventData.schedule) + '" />',
                        
                        '<div class="stb-chips-container" data-target="stb_input_schedule">',
                            '<span class="stb-chips-title">Horarios comunes:</span>',
                            '<button type="button" class="stb-chip" data-val="09:00 AM – 01:00 PM">09:00 AM – 01:00 PM</button>',
                            '<button type="button" class="stb-chip" data-val="02:00 PM – 06:00 PM">02:00 PM – 06:00 PM</button>',
                            '<button type="button" class="stb-chip" data-val="08:30 AM – 12:30 PM">08:30 AM – 12:30 PM</button>',
                            '<button type="button" class="stb-chip" data-val="06:00 PM – 09:00 PM">06:00 PM – 09:00 PM</button>',
                        '</div>',
                        '<span class="stb-field-help">Rango horario específico en el que se dictarán las sesiones de clase.</span>',
                    '</div>',

                '</div>',

                '<!-- Footer con botón de guardado manual y aviso de sincronización -->',
                '<div class="stb-card-footer">',
                    '<span class="stb-sync-notice">',
                        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
                        'Guardado automático activo. Se sincroniza con el catálogo y calendario.',
                    '</span>',
                    '<button type="button" id="stb-btn-save-event" class="stb-btn-save">',
                        'Guardar Cambios',
                    '</button>',
                '</div>',
            '</div>'
        ].join('');

        // Vincular eventos interactivos
        bindCardEvents(card);

        return card;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Vincular listeners a los campos del bloque
    function bindCardEvents(card) {
        var switchEl = card.querySelector('#stb_input_is_presencial');
        var locEl = card.querySelector('#stb_input_location');
        var daysEl = card.querySelector('#stb_input_days');
        var dateEl = card.querySelector('#stb_input_date');
        var schedEl = card.querySelector('#stb_input_schedule');
        var saveBtn = card.querySelector('#stb-btn-save-event');
        var fieldsWrapper = card.querySelector('#stb-presencial-fields-wrapper');

        // Toggle presencial
        if (switchEl) {
            switchEl.addEventListener('change', function() {
                eventData.is_presencial = switchEl.checked;
                if (fieldsWrapper) {
                    if (eventData.is_presencial) {
                        fieldsWrapper.classList.remove('stb-fields-disabled');
                    } else {
                        fieldsWrapper.classList.add('stb-fields-disabled');
                    }
                }
                saveEventDetails();
            });
        }

        // Ubicación
        if (locEl) {
            locEl.addEventListener('input', function() {
                eventData.location = locEl.value;
                scheduleAutoSave();
            });
            locEl.addEventListener('blur', function() {
                eventData.location = locEl.value;
                saveEventDetails();
            });
        }

        // Días
        if (daysEl) {
            daysEl.addEventListener('input', function() {
                eventData.days = daysEl.value;
                scheduleAutoSave();
            });
            daysEl.addEventListener('blur', function() {
                eventData.days = daysEl.value;
                saveEventDetails();
            });
        }

        // Fecha
        if (dateEl) {
            dateEl.addEventListener('change', function() {
                eventData.date = dateEl.value;
                saveEventDetails();
            });
        }

        // Horario
        if (schedEl) {
            schedEl.addEventListener('input', function() {
                eventData.schedule = schedEl.value;
                scheduleAutoSave();
            });
            schedEl.addEventListener('blur', function() {
                eventData.schedule = schedEl.value;
                saveEventDetails();
            });
        }

        // Sugerencias rápidas (Chips)
        var chips = card.querySelectorAll('.stb-chip');
        chips.forEach(function(chip) {
            chip.addEventListener('click', function(e) {
                e.preventDefault();
                var container = chip.closest('.stb-chips-container');
                if (!container) return;
                var targetId = container.getAttribute('data-target');
                var targetInput = card.querySelector('#' + targetId);
                var val = chip.getAttribute('data-val');
                if (targetInput && val) {
                    targetInput.value = val;
                    if (targetId === 'stb_input_days') {
                        eventData.days = val;
                    } else if (targetId === 'stb_input_schedule') {
                        eventData.schedule = val;
                    }
                    saveEventDetails();
                }
            });
        });

        // Botón de guardado manual
        if (saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                saveEventDetails(function() {
                    saveBtn.textContent = '¡Guardado!';
                    setTimeout(function() {
                        saveBtn.textContent = 'Guardar Cambios';
                    }, 1500);
                });
            });
        }
    }

    // Verificar si estamos en la ruta #/basics
    function isBasicsRoute() {
        var hash = window.location.hash || '';
        // Si no hay hash o contiene basics, o la URL no tiene otro hash como #/curriculum o #/additional
        return hash === '' || hash === '#/' || hash.indexOf('basics') !== -1;
    }

    // Encontrar el contenedor donde inyectar el bloque dentro de Basics
    function findInsertionTarget() {
        // Opción 1: Directamente después del bloque "Opciones" (CourseSettings: data-cy="course-settings")
        var settingsBlock = document.querySelector('div[data-cy="course-settings"]');
        if (settingsBlock && settingsBlock.parentElement) {
            return {
                parent: settingsBlock.parentElement.parentElement || settingsBlock.parentElement,
                reference: settingsBlock.parentElement.nextSibling
            };
        }

        // Opción 2: Dentro de la columna principal de campos (fieldsWrapper)
        var fieldsWrappers = document.querySelectorAll('div[class*="fieldsWrapper"], div[class*="mainForm"] > div:first-child');
        for (var i = 0; i < fieldsWrappers.length; i++) {
            var fw = fieldsWrappers[i];
            if (fw.children.length >= 2) {
                return {
                    parent: fw,
                    reference: null // Append al final de los campos principales
                };
            }
        }

        // Opción 3: Después del editor de descripción
        var descWrapper = document.querySelector('.wp-editor-wrap') || document.querySelector('#post_content');
        if (descWrapper) {
            var cardWrap = descWrapper.closest('div[class*="fieldsWrapper"] > div') || descWrapper.parentElement;
            if (cardWrap && cardWrap.parentElement) {
                return {
                    parent: cardWrap.parentElement,
                    reference: cardWrap.nextSibling
                };
            }
        }

        return null;
    }

    // Inyectar o verificar la presencia del bloque
    function checkAndMountBlock() {
        if (!isBasicsRoute()) {
            // Si navegamos a #/curriculum o #/additional, el bloque puede removerse si React no lo hizo
            var existing = document.getElementById('stb-course-builder-event-card');
            if (existing) {
                existing.remove();
            }
            return;
        }

        // Si ya está montado en el DOM, sincronizar valores
        var currentCard = document.getElementById('stb-course-builder-event-card');
        if (currentCard) {
            // Comprobar que siga dentro de un contenedor conectado
            if (document.body.contains(currentCard)) {
                return;
            }
        }

        var target = findInsertionTarget();
        if (target && target.parent) {
            var newCard = createEventCardElement();
            if (target.reference) {
                target.parent.insertBefore(newCard, target.reference);
            } else {
                target.parent.appendChild(newCard);
            }
            updateFormFieldsFromState();
        }
    }

    // Sincronizar automáticamente cuando Tutor LMS envía peticiones de guardado
    function setupTutorSaveHook() {
        // Interceptar fetch de guardado de curso
        var originalFetch = window.fetch;
        window.fetch = function() {
            var args = arguments;
            try {
                if (args && args[1] && args[1].body && typeof args[1].body === 'object') {
                    var body = args[1].body;
                    if (body instanceof FormData) {
                        var action = body.get('action');
                        if (action === 'tutor_update_course' || action === 'tutor_create_new_draft_course') {
                            // Añadir nuestros datos al payload de Tutor
                            body.append('stb_event_location', eventData.location || '');
                            body.append('stb_event_days', eventData.days || '');
                            body.append('stb_event_date', eventData.date || '');
                            body.append('stb_event_schedule', eventData.schedule || '');
                            body.append('stb_is_presencial', eventData.is_presencial ? '1' : '0');
                        }
                    }
                }
            } catch(e) {}
            return originalFetch.apply(this, args);
        };
    }

    // Iniciar observación y montaje
    function start() {
        initData();
        setupTutorSaveHook();

        // Intento inmediato
        checkAndMountBlock();

        // Escuchar cambios de ruta en React Router hash
        window.addEventListener('hashchange', function() {
            setTimeout(checkAndMountBlock, 150);
        });

        // MutationObserver para detectar cuando React monta o desmonta vistas
        if (typeof MutationObserver !== 'undefined') {
            var builderRoot = document.getElementById('tutor-course-builder') || document.body;
            var observer = new MutationObserver(function() {
                checkAndMountBlock();
            });
            observer.observe(builderRoot, {
                childList: true,
                subtree: true
            });
        }

        // Reintentos periódicos al inicio para garantizar montaje
        var attempts = 0;
        var interval = setInterval(function() {
            attempts++;
            checkAndMountBlock();
            if (attempts > 20 || document.getElementById('stb-course-builder-event-card')) {
                clearInterval(interval);
            }
        }, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
