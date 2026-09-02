<?php
/**
 * Certificate locked modal.
 *
 * @package TutorPro\Addons\Certificate
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\SvgIcon;

global $tutor_course_id;
if ( ! $tutor_course_id ) {
	return;
}

$course_completed_percentage = tutor_utils()->get_course_completed_percent( $tutor_course_id );
?>
<div x-data="tutorModal({ id: 'certificate-modal' })" x-cloak>
	<template x-teleport="body">
		<div x-bind="getModalBindings()">
			<div x-bind="getBackdropBindings()"></div>
			<div x-bind="getModalContentBindings()" class="tutor-certificate-locked-modal">
				<div class="tutor-flex tutor-justify-center tutor-mb-6">
					<span class="tutor-certificate-locked-badge">
						<?php SvgIcon::make()->name( Icon::LOCK_FILL )->size( 20 )->render(); ?>
						<?php esc_html_e( 'Certificate Locked', 'tutor-pro' ); ?>
					</span>
				</div>
				<div class="tutor-certificate-modal-preview">
					<img src="<?php echo esc_attr( tutor()->url . 'assets/images/certificate-preview.png' ); ?>" alt="<?php esc_attr_e( 'Certificate preview', 'tutor-pro' ); ?>" class="tutor-w-full" />
					<div class="tutor-certificate-preview-effect">
						<div class="tutor-certificate-preview-lock">
							<?php SvgIcon::make()->name( Icon::LOCK_FILL )->size( 32 )->render(); ?>
						</div>
					</div>
				</div>
				<h4 class="tutor-h4 tutor-font-medium tutor-sm-text-medium tutor-mb-6 tutor-sm-mb-4"><?php echo esc_html__( 'Complete the course to unlock the certificate', 'tutor-pro' ); ?></h4>
				<div class="tutor-flex tutor-flex-column tutor-gap-4 tutor-mb-8 tutor-sm-mb-6">
					<div class="tutor-flex tutor-items-center tutor-justify-between tutor-medium tutor-sm-text-small tutor-text-secondary">
						<div><span class="tutor-font-semibold tutor-text-primary"><?php echo esc_html( $course_completed_percentage ); ?>%</span> <?php echo esc_html__( 'Completed', 'tutor-pro' ); ?></div>
						<div><?php echo esc_html__( 'Required', 'tutor-pro' ); ?> <span class="tutor-font-semibold tutor-text-primary"><?php esc_html_e( '100%', 'tutor-pro' ); ?></span></div>
					</div>
					<div class="tutor-progress-bar" data-tutor-animated>
						<div class="tutor-progress-bar-fill" style="--tutor-progress-width: <?php echo esc_attr( $course_completed_percentage ); ?>%;"></div>
					</div>
				</div>
				<button type="button" class="tutor-btn tutor-btn-primary tutor-btn-block" onclick="TutorCore.modal.closeModal('certificate-modal')">
					<?php esc_html_e( 'Okay, I Understand', 'tutor-pro' ); ?>
				</button>
			</div>
		</div>
	</template>
</div>
