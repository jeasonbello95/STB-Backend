<?php
/**
 * Live Meeting Template
 *
 * Data is passed from the controller following the following format:
 *
 * - id: int
 * - title: string
 * - description: string
 * - countdown_date: string
 * - start_at: string
 * - end_at: string
 * - duration: int (in minutes)
 * - host_email: string
 * - timezone: string
 * - url: string
 * - is_started: bool
 * - is_expired: bool
 *
 * @package TutorPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\Table;
use Tutor\Components\Button;
use Tutor\Components\Constants\Variant;

$default_meeting_data = array(
	'id'             => 0,
	'title'          => '',
	'description'    => '',
	'countdown_date' => '',
	'start_at'       => '',
	'end_at'         => '',
	'duration'       => 0,
	'host_email'     => '',
	'timezone'       => '',
	'url'            => '',
	'is_started'     => false,
	'is_expired'     => false,
);

if ( empty( $meeting_data ) ) {
	$meeting_data = array();
}

$meeting_data        = array_merge( $default_meeting_data, $meeting_data );
$next_prev_content   = tutor_utils()->get_course_prev_next_contents_by_id( get_the_ID() );
$current_content_url = get_the_permalink( get_the_ID() );
$next_content_url    = get_the_permalink( $next_prev_content->next_id ?? 0 );
$is_completed_lesson = tutor_utils()->is_completed_lesson( get_the_ID(), get_current_user_id() );

// $table_content is passed from the controller.
if ( empty( $table_content ) ) {
	$table_content = array();
}

$countdown_units = array(
	'days'    => __( 'Days', 'tutor-pro' ),
	'hours'   => __( 'Hours', 'tutor-pro' ),
	'minutes' => __( 'Minutes', 'tutor-pro' ),
	'seconds' => __( 'Seconds', 'tutor-pro' ),
);

/**
 * Render countdown part
 *
 * @since 4.0.0
 *
 * @param int    $digit_index digit index.
 * @param string $unit_key unit key.
 *
 * @return void
 */
$render_countdown_part = function ( $digit_index, $unit_key ) {
	?>
	<div class="tutor-countdown-digit-wrapper">
		<div class="tutor-countdown-reel" :style="'transform: translateY(-' + (time.<?php echo esc_attr( $unit_key ); ?>.charAt(<?php echo esc_attr( $digit_index ); ?>) * 1.25) + 'em)'">
			<?php for ( $i = 0; $i < 10; $i++ ) : ?>
				<span><?php echo esc_html( $i ); ?></span>
			<?php endfor; ?>
		</div>
	</div>
	<?php
}
?>
<div class="tutor-pt-4 tutor-pb-8">
	<div
		class="tutor-card tutor-meeting"
		x-data="tutorMeeting({ 
			startDate: '<?php echo esc_attr( $meeting_data['start_at'] ); ?>',
			duration: <?php echo esc_js( $meeting_data['duration'] ); ?>,
			isStarted: <?php echo $meeting_data['is_started'] ? 'true' : 'false'; ?>,
			isExpired: <?php echo $meeting_data['is_expired'] ? 'true' : 'false'; ?>,
		})"
		x-cloak
	>
		<div class="tutor-meeting-hero-wrapper tutor-mb-9 tutor-sm-mb-5">
			<!-- Hero Section for Live/Expired -->
			<template x-if="isStarted || isExpired">
				<div class="tutor-meeting-hero">
					<div x-show="isStarted && !isExpired" x-cloak>
						<?php tutor_utils()->render_themed_svg( 'images/illustrations/meeting-live.svg' ); ?>
					</div>
					<div x-show="isExpired" x-cloak>
						<?php tutor_utils()->render_themed_svg( 'images/illustrations/meeting-expired.svg' ); ?>
					</div>
					<div class="tutor-meeting-hero-content">
						<h3 class="tutor-h3 tutor-sm-text-medium" x-text="(isStarted && !isExpired) ? '<?php esc_attr_e( 'Meeting is Live', 'tutor-pro' ); ?>' : '<?php esc_attr_e( 'The Meeting has expired', 'tutor-pro' ); ?>'"></h3>
						<p
							class="tutor-sm-text-p3 tutor-text-p1 tutor-text-secondary tutor-mt-2 tutor-mb-none" 
							x-text="(isStarted && !isExpired) ? '<?php esc_attr_e( 'The session has started and is currently in progress', 'tutor-pro' ); ?>' : '<?php esc_attr_e( 'Please contact your instructor for further information', 'tutor-pro' ); ?>'"
						>
						</p>

						<template x-if="(isStarted && !isExpired)">
							<div class="tutor-mt-6">
								<?php
									Button::make()
										->label( esc_html__( 'Join Meeting Now', 'tutor-pro' ) )
										->tag( 'a' )
										->icon( Icon::LINK_EXTERNAL, 'left', 20 )
										->attr( 'href', esc_url( $meeting_data['url'] ) )
										->render();
								?>
							</div>
						</template>
					</div>
				</div>
			</template>

			<!-- Countdown (Hidden when Live or Expired) -->
			<div class="tutor-meeting-countdown-wrapper" x-show="!isStarted && !isExpired" x-cloak>
				<div class="tutor-sm-text-small tutor-text-medium tutor-text-subdued">
					<?php esc_html_e( 'Meeting Starts in', 'tutor-pro' ); ?>
				</div>

				<div class="tutor-meeting-countdown">
					<span data-bars data-bar-left></span>
					<span data-bars data-bar-right></span>

					<?php
					$index = 0;
					foreach ( $countdown_units as $unit => $label ) :
						++$index;
						?>
						<div data-digits>
							<div class="tutor-countdown-digits-group">
								<?php if ( 'days' === $unit ) : ?>
									<div class="tutor-countdown-digit-wrapper tutor-countdown-digit-plain">
										<span x-text="time.days"></span>
									</div>
								<?php else : ?>
									<?php
									foreach ( range( 0, 1 ) as $digit_index ) {
										$render_countdown_part( $digit_index, $unit );
									}
									?>
								<?php endif; ?>
							</div>

							<span data-label>
								<?php echo esc_html( $label ); ?>
							</span>
						</div>

						<?php if ( $index < count( $countdown_units ) ) : ?>
							<span data-separator>
								:
							</span>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="tutor-meeting-content">
				<div class="tutor-text-h3 tutor-sm-text-h5 tutor-text-primary tutor-font-semibold">
					<?php echo esc_html( $meeting_data['title'] ); ?>
				</div>

				<div class="tutor-text-p1 tutor-sm-text-p2 tutor-text-secondary">
					<?php echo esc_html( $meeting_data['description'] ); ?>
				</div>
			</div>
		</div>

		<!-- Details -->
		<div class="tutor-meeting-details tutor-table-wrapper tutor-table-bordered tutor-table-column-borders">
			<?php Table::make()->contents( $table_content )->render(); ?>
		</div>

		<template x-if="!isExpired">
			<div class="tutor-learning-area-footer">
				<?php if ( $next_prev_content->next_id ) : ?>
				<template x-if="!isStarted">
					<?php
						Button::make()
							->tag( 'a' )
							->label( esc_html__( 'Skip Meeting', 'tutor-pro' ) )
							->variant( Variant::GHOST )
							->attr( 'href', esc_url( $next_content_url ) )
							->render();
					?>
				</template>

				<template x-if="isStarted">
					<div>
						<?php
							Button::make()
								->tag( 'a' )
								->label( esc_html__( 'Skip Meeting', 'tutor-pro' ) )
								->variant( Variant::SECONDARY )
								->attr( 'href', esc_url( $next_content_url ) )
								->render();
						?>
					</div>
				</template>
				<?php endif; ?>

				<template x-if="!isStarted">
					<?php
						Button::make()
							->label( esc_html__( 'Join Meeting', 'tutor-pro' ) )
							->tag( 'a' )
							->attr( 'href', esc_url( $meeting_data['url'] ) )
							->attr( 'target', '_blank' )
							->render();
					?>
				</template>
			</div>
		</template>

		<template x-if="isExpired">
			<div class="tutor-learning-area-footer">
				<?php if ( ! $is_completed_lesson ) : ?>
					<form method="post" class="tutor-mb-none">
						<?php wp_nonce_field( tutor()->nonce_action, tutor()->nonce, false ); ?>
						<input type="hidden" value="<?php echo esc_attr( get_the_ID() ); ?>" name="lesson_id" />
						<input type="hidden" value="tutor_complete_lesson" name="tutor_action" />

						<?php
							Button::make()
								->variant( Variant::SECONDARY )
								->icon( Icon::COMPLETED, 'right', 20 )
								->attr( 'class', 'tutor-meeting-complete-button' )
								->label( esc_html__( 'Mark as complete', 'tutor-pro' ) )
								->attr( 'type', 'submit' )
								->render();
						?>
					</form>
				<?php endif; ?>
				<?php
					Button::make()
						->tag( 'a' )
						->attr( 'href', esc_url( $next_content_url ) )
						->label( esc_html__( 'Continue Lesson', 'tutor-pro' ) )
						->render();
				?>
			</div>
		</template>
	</div>
</div>
