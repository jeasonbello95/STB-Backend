<?php
/**
 * Tutor learning area certificate.
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;
?>
<div class="tutor-learning-area-certificate">
	<?php tutor_load_template_from_custom_path( TUTOR_CERT()->path . 'templates/certificate.php' ); ?>
</div>
