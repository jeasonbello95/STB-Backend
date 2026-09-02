<?php
/**
 * Student Table Template
 *
 * @package TutorPro\Report
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Avatar;
use Tutor\Components\Constants\Size;

$student    = $data['student'];
$first_name = get_user_meta( $student->ID, 'first_name', true );
$last_name  = get_user_meta( $student->ID, 'last_name', true );
$name       = esc_html( empty( $student->display_name ) ? $first_name . ' ' . $last_name : $student->display_name );
?>

<!-- Student Info -->
<?php if ( 'student_info' === $data['template'] ) : ?>
	<div class="tutor-flex tutor-flex-row tutor-items-center tutor-gap-4">
		<?php Avatar::make()->user( $student->ID )->size( Size::SIZE_40 )->render(); ?>
		<div class="tutor-flex tutor-flex-column tutor-items-start tutor-gap-1">
			<div class="tutor-text-primary tutor-font-medium tutor-text-p3">
				<?php echo esc_html( $name ); ?>
			</div>
			<div class="tutor-text-subdued tutor-font-regular tutor-tiny">
				<?php echo esc_html( $student->user_email ); ?>
			</div>
		</div>
	</div>
<?php endif; ?>
