<?php
/**
 * Certificate template.
 *
 * @package TutorPro\Addons
 * @subpackage Certificate\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\Size;
use Tutor\Components\Button;
use Tutor\Components\Badge;
use Tutor\Components\Constants\Positions;
use Tutor\Components\Modal;
use Tutor\Components\Popover;
use Tutor\Helpers\DateTimeHelper;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;
use TUTOR\Input;
use TUTOR_CERT\Certificate;
use Tutor\Models\CourseModel;


$cert_hash = Input::get( 'cert_hash' );
if ( empty( $cert_hash ) ) {
	return;
}

$cert_obj = new Certificate( true );

$completed = $cert_obj->completed_course( $cert_hash );
$course_id = $completed->course_id;
$course    = get_post( $course_id );
$student   = get_userdata( $completed->completed_user_id ?? 0 );

$student_name     = tutor_utils()->display_name( $student->ID );
$progress_percent = tutor_utils()->get_course_completed_percent( $course_id, $completed->completed_user_id ?? 0 );
$course_duration  = CourseModel::get_total_course_duration( $course_id );

$duration_hours          = (int) $course_duration['hours'];
$duration_time_string    = sprintf( '%02d:00:00', $duration_hours ); // Only hours are used.
$duration_human_readable = human_readable_duration( $duration_time_string );
$duration_human_readable = $duration_human_readable ? trim( strtok( $duration_human_readable, ',' ) ) : '';
$time_taken_text         = $duration_hours > 0 && $duration_human_readable ? '~ ' . $duration_human_readable : '';

$instructors     = tutor_utils()->get_instructors_by_course( $course_id );
$completed       = $cert_obj->completed_course( $cert_hash );
$issued_by       = tutor_utils()->get_option( 'tutor_cert_authorised_name' );
$course_benefits = tutor_course_benefits( $course_id );


$upload_dir = wp_upload_dir();
$template   = $cert_obj->get_course_certificate_template( $course->ID );

$certificate_dir_url  = $upload_dir['baseurl'] . '/' . $cert_obj->certificates_dir_name;
$certificate_dir_path = $upload_dir['basedir'] . '/' . $cert_obj->certificates_dir_name;
$rand_string          = get_comment_meta( $completed->certificate_id, $cert_obj->certificate_stored_key, true );

$cert_path = '/' . $rand_string . '-' . $cert_hash . '.jpg';
$cert_file = $certificate_dir_path . $cert_path;

if ( ! file_exists( $cert_file ) ) {
	$cert_file = null;
}

$generate_cert = ! $cert_file || ( is_user_logged_in() && 1 === Input::get( 'regenerate', 0, Input::TYPE_INT ) );
if ( $generate_cert ) {
	$cert_file = null;
}

$cert_img = $generate_cert ? get_admin_url() . 'images/loading.gif' : $certificate_dir_url . $cert_path;
$cert_url = $cert_obj->tutor_certificate_public_url( $cert_hash );
?>
<!-- TODO: responsive design should check both on learning area and single certificate page. -->
<div class="tutor-certificate-wrapper">
	<h4 class="tutor-h4 tutor-my-none tutor-flex tutor-items-center tutor-gap-4">
		<?php SvgIcon::make()->name( Icon::CERTIFICATE_2 )->size( 24 )->render(); ?>
		<?php esc_html_e( 'Certificate', 'tutor-pro' ); ?>
	</h4>
	<div class="tutor-certificate-header tutor-z-positive">
		<div class="tutor-certificate-header-left tutor-sm-hidden">
			<button 
				type="button" 
				class="tutor-btn tutor-btn-secondary tutor-btn-x-small tutor-btn-icon" 
				aria-label="<?php esc_attr_e( 'Share Certificate', 'tutor-pro' ); ?>"
				onclick="TutorCore.modal.showModal('tutor-certificate-share-modal')">
				<?php SvgIcon::make()->name( Icon::SHARE )->render(); ?>
			</button>
			<button 
				onClick="PrintDiv()" 
				type="button" 
				class="tutor-btn tutor-btn-secondary tutor-btn-x-small tutor-btn-icon" 
				aria-label="<?php esc_attr_e( 'Print Certificate', 'tutor-pro' ); ?>">
				<?php SvgIcon::make()->name( Icon::PRINTER )->render(); ?>
			</button>
		</div>
		<?php
		Modal::make()
		->id( 'tutor-certificate-share-modal' )
		->width( '332px' )
		->template(
			TUTOR_CERT()->path . 'templates/share-modal.php',
			array(
				'cert_url'     => $cert_url,
				'course_title' => $course->post_title,
				'cert_img'     => $cert_img,
			)
		)
		->render();
		?>
		<div class="tutor-flex tutor-items-center tutor-sm-items-stretch tutor-sm-gap-2">
			<div class="tutor-certificate-download-btn-group">
				<?php
				Button::make()
					->size( Size::X_SMALL )
					->attr( 'class', 'tutor-default-certificate-download-btn tutor-certificate-pdf' )
					->icon( Icon::DOWNLOAD_3 )
					->label( esc_html__( 'Download Certificate', 'tutor-pro' ) )
					->render();

				$trigger_button = Button::make()
					->label( esc_html__( 'Download Certificate', 'tutor-pro' ) )
					->icon( Icon::CHEVRON_DOWN )
					->icon_only()
					->size( Size::X_SMALL )
					->attr( 'x-ref', 'trigger' )
					->attr( '@click', 'toggle()' )
					->get();

				Popover::make()
					->trigger( $trigger_button )
					->menu_item(
						array(
							'tag'     => 'button',
							'class'   => 'tutor-certificate-pdf',
							'content' => esc_html__( 'PDF', 'tutor-pro' ),
							'attr'    => array( 'type' => 'button' ),
						)
					)
					->menu_item(
						array(
							'tag'     => 'button',
							'class'   => 'tutor-certificate-image',
							'content' => esc_html__( 'JPG', 'tutor-pro' ),
							'attr'    => array( 'type' => 'button' ),
						)
					)
					->placement( Positions::BOTTOM_END )
					->menu_min_width( '130px' )
					->render();
				?>
			</div>
		</div>
	</div>
	<div class="tutor-pro-certificate-preview-container tutor-surface-l1 tutor-border tutor-rounded-2xl tutor-p-4">
		<div class="tutor-pro-certificate-preview-wrapper <?php echo $generate_cert ? 'tutor-pro-certificate-preview-loader' : ''; ?>">
			<img
			id="tutor-pro-certificate-preview"
			src="<?php echo esc_url( $cert_img ); ?>"
			alt="<?php echo esc_attr( $course->post_title ); ?>"
			style="<?php echo ! $cert_file ? 'width:auto;height:auto;' : ''; ?>"
			data-is_generated="<?php echo esc_attr( $cert_file ? 'yes' : 'no' ); ?>"
			data-certificate_url="<?php echo remove_query_arg( 'regenerate', tutor()->current_url );//phpcs:ignore ?>"
			data-course_id="<?php echo esc_attr( $course->ID ); ?>"
			data-cert_hash="<?php echo esc_attr( $cert_hash ); ?>" 
			data-orientation="<?php echo esc_attr( isset( $template['orientation'] ) ? $template['orientation'] : '' ); ?>"
			data-size="<?php echo esc_attr( isset( $template['size'] ) ? $template['size'] : 'letter' ); ?>"
			/>
		</div>
	</div>

	<!--Printable area-->
	<div id="div-to-print" style="display:none;max-width:730px;height:auto;overflow:hidden;">
		<span class="tutor-dc-demo-img">
			<img
				style="width: 100%;"
				src="<?php echo esc_url( $cert_img ); ?>"
				alt="<?php echo esc_attr( $course->post_title ); ?>"
				data-is_generated="<?php echo esc_attr( $cert_file ? 'yes' : 'no' ); ?>"
			/>
		</span>
	</div>
	<!--End printable area-->

	<div class="tutor-certificate-info">
		<div class="tutor-certificate-card">
			<div class="tutor-certificate-card-head">
				<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Course completed by', 'tutor-pro' ); ?></div>
				<h4 class="tutor-h4 tutor-font-medium"><?php echo esc_html( $student_name ); ?></h4>
			</div>

			<hr class="tutor-section-separator" />

			<div class="tutor-certificate-meta">
				<div class="tutor-flex tutor-flex-column tutor-gap-1">
					<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Course', 'tutor-pro' ); ?></div>
					<div class="tutor-tiny tutor-font-medium"><?php echo esc_html( $course->post_title ); ?></div>
				</div>
				<div class="tutor-flex tutor-flex-column tutor-gap-1">
					<div class="tutor-tiny tutor-text-secondary">
						<?php echo esc_html( _n( 'Instructor', 'Instructors', count( $instructors ?? array() ), 'tutor-pro' ) ); ?>
					</div>
					<div class="tutor-tiny tutor-font-medium">
						<?php
						$instructor_names = array_map( fn( $instructor ) => $instructor->display_name, $instructors ?? array() );
						echo esc_html( implode( ', ', $instructor_names ) );
						?>
					</div>
				</div>
			</div>

			<div class="tutor-certificate-stats">
				<?php do_action( 'tutor_pro/certificate_info/after_course_name', $course_id, $course ); ?>

				<?php if ( $time_taken_text ) : ?>
					<div class="tutor-p-6 tutor-surface-l1">
						<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Course Duration', 'tutor-pro' ); ?></div>
						<div class="tutor-p1 tutor-font-bold"><?php echo esc_html( $time_taken_text ); ?></div>
					</div>
				<?php endif; ?>
				<div class="tutor-p-6 tutor-surface-l1">
					<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Issued', 'tutor-pro' ); ?></div>
					<div class="tutor-p1 tutor-font-bold">
						<?php echo esc_html( DateTimeHelper::create( $completed->completion_date ?? '' )->format( get_option( 'date_format' ) ) ); ?>
					</div>
				</div>
				<div class="tutor-p-6 tutor-surface-l1">
					<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Certificate ID', 'tutor-pro' ); ?></div>
					<div class="tutor-p1 tutor-font-bold"><?php echo esc_html( $completed->completed_hash ?? '' ); ?></div>
				</div>
			</div>

			<div class="tutor-flex tutor-flex-column tutor-gap-2 tutor-p-6">
				<div class="tutor-tiny tutor-text-secondary"><?php esc_html_e( 'Skills', 'tutor-pro' ); ?></div>
				<div class="tutor-flex tutor-flex-wrap tutor-gap-2">
					<?php foreach ( $course_benefits as $benefit ) : ?>
						<?php
							Badge::make()
								->label( $benefit )
								->render();
						?>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</div>
