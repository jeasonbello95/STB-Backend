<?php
/**
 * Change Email Modal Template
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.8.2
 * @since 4.0.0 Updated modal style
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\Color;
use Tutor\Components\Modal;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;


$modal_title = sprintf(
	'<div class="tutor-flex tutor-items-center tutor-gap-4 tutor-pt-2 tutor-pb-7">%s%s</div>',
	SvgIcon::make()->name( Icon::EDIT_2 )->size( 24 )->color( Color::SECONDARY )->get(),
	esc_html__( 'Update Email', 'tutor-pro' )
);

?>

<?php

Modal::make()
	->id( 'change-email-modal' )
	->title( $modal_title, 'tutor_kses_html' )
	->template( __DIR__ . '/change-email-form.php' )
	->footer_buttons( '' )
	->footer_alignment( 'right' )
	->width( '478px' )
	->render();


