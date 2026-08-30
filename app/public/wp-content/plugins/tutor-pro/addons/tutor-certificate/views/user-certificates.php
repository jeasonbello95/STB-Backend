<?php
/**
 * Certificates list page for student dashboard account.
 *
 * @package TutorPro\Addons\Certificate
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR_CERT\Certificate;
use Tutor\Components\EmptyState;

$certificates = ( new Certificate( true ) )->get_user_certificates( get_current_user_id() );
?>
<div class="tutor-user-certificates">
	<?php require_once tutor_get_template( 'account-header' ); ?>
	<div class="tutor-account-container" role="main">
		<div class="tutor-flex tutor-flex-column tutor-gap-5 tutor-my-9 tutor-sm-my-6">
			<?php if ( tutor_utils()->count( $certificates ) ) : ?>
				<?php foreach ( $certificates as $certificate ) : ?>
					<?php include TUTOR_CERT()->path . 'views/certificate-card.php'; ?>
				<?php endforeach; ?>
			<?php else : ?>
				<?php
					EmptyState::make()
						->attr( 'class', 'tutor-card' )
						->title( __( 'No Certificate Earned Yet!', 'tutor-pro' ) )
						->icon( tutor_utils()->get_themed_svg( 'images/illustrations/gradebook-empty.svg' ) )
						->render();
				?>
			<?php endif; ?>
		</div>
	</div>
</div>
