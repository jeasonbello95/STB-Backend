<?php
/**
 * Certificate share modal template.
 *
 * @package TutorPro\Addons
 * @subpackage Certificate\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;

$cert_url     = $data['cert_url'] ?? '';
$course_title = $data['course_title'] ?? '';
$cert_img     = $data['cert_img'] ?? '';

// Translators: %s is the course title.
$share_text   = sprintf( 'My course completion certificate for %s', $course_title );
$share_config = array(
	'title' => __( 'Course Completion Certificate', 'tutor-pro' ),
	'text'  => $share_text,
	'image' => $cert_img,
);
?>
<div class="tutor-certificate-share-modal">
	<div class="tutor-modal-header">
		<div class="tutor-modal-title">
			<?php SvgIcon::make()->name( Icon::LINK )->size( 24 )->render(); ?>
			<span><?php esc_html_e( 'Quick Share', 'tutor-pro' ); ?></span>
		</div>
	</div>
	<div class="tutor-modal-body">
		<div class="tutor-certificate-link-wrapper">
			<input type="text" value="<?php echo esc_url( $cert_url ); ?>" readonly/>
			<?php
			Button::make()
			->variant( 'ghost' )
			->icon( Icon::COPY_2 )
			->icon_only()
			->attr( 'class', 'tutor-certificate-copy-btn' )
			->attr( 'x-data', 'tutorCopyToClipboard()' )
			->attr( '@click', 'copy("' . esc_url( $cert_url ) . '")' )
			->render();
			?>
		</div>
		<div class="tutor-certificate-social-shares">
			<div class="tutor-certificate-social-shares-header">
				<?php esc_html_e( 'Share To', 'tutor-pro' ); ?>
			</div>

			<div class="tutor-certificate-social-shares-icons tutor-social-share-wrap" data-social-share-config="<?php echo esc_attr( wp_json_encode( $share_config ) ); ?>">
				<button class="tutor_share s_facebook">
					<?php SvgIcon::make()->name( Icon::FACEBOOK )->size( 32 )->render(); ?>
					<span>
						<?php esc_html_e( 'Facebook', 'tutor-pro' ); ?>
					</span>
				</button>
				<button class="tutor_share s_twitter">
					<?php SvgIcon::make()->name( Icon::X )->size( 32 )->render(); ?>
					<span>
						<?php esc_html_e( 'X', 'tutor-pro' ); ?>
					</span>
				</button>
				<button class="tutor_share s_linkedin">
					<?php SvgIcon::make()->name( Icon::LINKEDIN )->size( 32 )->render(); ?>
					<span>
						<?php esc_html_e( 'LinkedIn', 'tutor-pro' ); ?>
					</span>
				</button>
				<button class="tutor_share s_email">
					<?php SvgIcon::make()->name( Icon::EMAIL )->size( 32 )->render(); ?>
					<span>
						<?php esc_html_e( 'Email', 'tutor-pro' ); ?>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
