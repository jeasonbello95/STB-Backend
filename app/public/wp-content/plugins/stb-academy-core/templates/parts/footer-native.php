<?php
/**
 * Footer nativo de STB Academy
 * Estilizado en modo oscuro con la estética Cyber / Neon de React.
 */
if (!defined('ABSPATH')) {
    exit;
}
?>
<footer class="stb-native-footer relative bg-[#070A0F] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
    <!-- Luces ambientales de fondo -->
    <div class="pointer-events-none absolute left-1/4 bottom-0 h-64 w-96 rounded-full bg-primary-500/10 blur-[120px]"></div>
    <div class="pointer-events-none absolute right-1/4 top-0 h-64 w-96 rounded-full bg-cyan-500/10 blur-[120px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <!-- Columna Marca -->
            <div class="md:col-span-1 space-y-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-flex items-center gap-2" style="text-decoration:none;">
                    <img src="<?php echo esc_url(home_url('/imagenes/LOGO-STB-ACADEMY--BLANCO.png')); ?>" alt="STB Academy" class="h-9 w-auto object-contain" />
                </a>
                <p class="text-xs text-slate-400 leading-relaxed">
                    Academia líder en robótica, programación, trading cuantitativo y tecnologías emergentes con proyectos prácticos reales.
                </p>
                <div class="flex items-center gap-3 pt-2">
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 px-3 py-1 text-[11px] font-semibold text-primary-300">
                        <span class="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse"></span>
                        Plataforma Activa
                    </span>
                </div>
            </div>

            <!-- Columna Navegación -->
            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Navegación</h4>
                <ul class="space-y-2.5 text-xs text-slate-400 list-none p-0 m-0">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Inicio</a></li>
                    <li><a href="<?php echo esc_url(home_url('/cursos')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Catálogo de Cursos</a></li>
                    <li><a href="<?php echo esc_url(home_url('/eventos')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Eventos & Talleres</a></li>
                    <li><a href="<?php echo esc_url(home_url('/stblock')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Entorno STBlock</a></li>
                </ul>
            </div>

            <!-- Columna Recursos & Alumnos -->
            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Estudiantes</h4>
                <ul class="space-y-2.5 text-xs text-slate-400 list-none p-0 m-0">
                    <li><a href="<?php echo esc_url(home_url('/dashboard/')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Mi Panel de Aprendizaje</a></li>
                    <li><a href="<?php echo esc_url(home_url('/cart')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Carrito de Compras</a></li>
                    <li><a href="<?php echo esc_url(home_url('/registro')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Crear Cuenta Gratis</a></li>
                    <li><a href="<?php echo esc_url(home_url('/login')); ?>" class="hover:text-primary-400 transition-colors" style="text-decoration:none;">Acceso Alumnos</a></li>
                </ul>
            </div>

            <!-- Columna Seguridad & Garantía -->
            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Seguridad</h4>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
                    <div class="flex items-center gap-2 text-xs font-semibold text-white">
                        <svg class="h-4 w-4 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Pagos 100% Protegidos</span>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-normal">
                        Transacciones seguras y encriptadas. Acceso instantáneo e ilimitado a todo el material educativo.
                    </p>
                </div>
            </div>
        </div>

        <!-- Barra inferior de copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© <?php echo date('Y'); ?> STB Academy. Todos los derechos reservados.</p>
            <div class="flex items-center gap-6">
                <a href="<?php echo esc_url(home_url('/politica-privacidad')); ?>" class="hover:text-slate-300 transition-colors" style="text-decoration:none;">Privacidad</a>
                <a href="<?php echo esc_url(home_url('/terminos')); ?>" class="hover:text-slate-300 transition-colors" style="text-decoration:none;">Términos</a>
            </div>
        </div>
    </div>
</footer>
