<?php
/**
 * Tutor learning area single attempt list.
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR_ASSIGNMENTS\Assignments;

$total_attempts = is_array( $submitted_assignment ) ? count( $submitted_assignment ) : 0;
?>

<div class="tutor-assignment-attempts" x-data="tutorAssignment">
	<div class="tutor-assignment-attempts-table">
		<?php
			$render_status = function ( $status ) {
				$variant = '';

				if ( 'passed' === $status ) {
					$variant = 'success';
				} elseif ( 'failed' === $status ) {
					$variant = 'error';
				} elseif ( 'pending' === $status ) {
					$variant = 'warning';
				}

				return $variant;
			};
			?>

		<div class="tutor-table-wrapper tutor-table-bordered tutor-sm-hidden">
			<table class="tutor-table">
				<thead>
					<tr>
						<th><?php esc_html_e( 'Attempt Date', 'tutor-pro' ); ?></th>
						<th><?php esc_html_e( 'Total Marks', 'tutor-pro' ); ?></th>
						<th><?php esc_html_e( 'Pass Marks', 'tutor-pro' ); ?></th>
						<th><?php esc_html_e( 'Earned Marks', 'tutor-pro' ); ?></th>
						<th><?php esc_html_e( 'Result', 'tutor-pro' ); ?></th>
					</tr>
				</thead>
				<tbody>
					<?php
					foreach ( $submitted_assignment as $attempt ) :
						$is_evaluated  = get_comment_meta( $attempt->comment_ID, 'evaluate_time', true );
						$assignment_id = $attempt->comment_post_ID;
						$submit_id     = $attempt->comment_ID;

						$total_mark = (float) tutor_utils()->get_assignment_option( $assignment_id, 'total_mark' );
						$pass_mark  = (float) tutor_utils()->get_assignment_option( $assignment_id, 'pass_mark' );
						$given_mark = (float) get_comment_meta( $submit_id, 'assignment_mark', true );
						$update_url = add_query_arg( 'update-assignment', $attempt->comment_ID, get_permalink( $assignment_id ) );
						?>
						<tr>
							<td>
								<?php if ( $is_evaluated ) : ?>
									<span class="tutor-text-subdued"><?php echo esc_html( tutor_i18n_get_formated_date( $attempt->comment_date ) ); ?></span>
									<?php else : ?>
									<a href="<?php echo esc_url( $update_url ); ?>" class="tutor-text-brand">
										<?php echo esc_html( tutor_i18n_get_formated_date( $attempt->comment_date ) ); ?>
									</a>
								<?php endif; ?>
							</td>
							<td><?php echo esc_html( $total_mark ); ?></td>
							<td><?php echo esc_html( $pass_mark ); ?></td>
							<td><?php echo esc_html( $given_mark ); ?></td>
							<td><div class="tutor-w-max"><?php Assignments::print_assignment_result_badge( $is_evaluated, $pass_mark, $given_mark ); ?></div></td>
						</tr>
					<?php endforeach; ?>
				</tbody>
			</table>
		</div>

		<!-- Below sm breakpoint, show table as a list -->
		<div class="tutor-assignment-attempts-list tutor-hidden tutor-sm-block">
			<?php
			foreach ( $submitted_assignment as $attempt ) :
				$is_evaluated  = get_comment_meta( $attempt->comment_ID, 'evaluate_time', true );
				$assignment_id = $attempt->comment_post_ID;
				$submit_id     = $attempt->comment_ID;

				$total_mark = (float) tutor_utils()->get_assignment_option( $assignment_id, 'total_mark' );
				$pass_mark  = (float) tutor_utils()->get_assignment_option( $assignment_id, 'pass_mark' );
				$given_mark = (float) get_comment_meta( $submit_id, 'assignment_mark', true );
				?>
				<div class="tutor-assignment-attempts-list-item">
					<div class="tutor-flex tutor-items-center tutor-justify-between">
						<div class="tutor-small tutor-font-medium">
							<?php echo esc_html( tutor_i18n_get_formated_date( $attempt->comment_date ) ); ?>
						</div>
						<div class="tutor-w-max">
							<?php Assignments::print_assignment_result_badge( $is_evaluated, $pass_mark, $given_mark ); ?>
						</div>
					</div>

					<div class="tutor-assignment-attempts-list-card">
						<div class="tutor-flex tutor-flex-column tutor-gap-3">
							<span class="tutor-small tutor-text-subdued">
								<?php esc_html_e( 'Total Marks', 'tutor-pro' ); ?>
							</span>
							<span class="tutor-p1 tutor-font-medium tutor-text-secondary">
								<?php echo esc_html( $total_mark ); ?>
							</span>
						</div>

						<div class="tutor-flex tutor-flex-column tutor-gap-3">
							<span class="tutor-small tutor-text-subdued">
								<?php esc_html_e( 'Pass Marks', 'tutor-pro' ); ?>
							</span>
							<span class="tutor-p1 tutor-font-medium tutor-text-secondary">
								<?php echo esc_html( $pass_mark ); ?>
							</span>
						</div>

						<div class="tutor-flex tutor-flex-column tutor-gap-3">
							<span class="tutor-small tutor-text-subdued">
								<?php esc_html_e( 'Earned Marks', 'tutor-pro' ); ?>
							</span>
							<span class="tutor-p1 tutor-font-medium tutor-text-secondary">
								<?php echo esc_html( $given_mark ); ?>
							</span>
						</div>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>
