<?php
/**
 * Statement Table Template
 *
 * @package TutorPro\Report
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Ecommerce\Tax;
use Tutor\Helpers\ComponentHelper;

$statement                = $data['statement'];
$wc_order                 = function_exists( 'wc_get_order' ) ? wc_get_order( $statement->order_id ) : false;
$customer                 = $wc_order ? $wc_order->get_user() : null;
$is_inclusive_tax         = Tax::TYPE_INCLUSIVE === $statement->order_tax_type;
$course_price_grand_total = $is_inclusive_tax ? max( $statement->course_price_grand_total - $statement->order_tax_amount, 0 ) : $statement->course_price_grand_total;
$instructor_amount        = $is_inclusive_tax ? ( $course_price_grand_total * ( $statement->instructor_rate / 100 ) ) : $statement->instructor_amount;
$admin_amount             = $is_inclusive_tax ? ( $course_price_grand_total * ( $statement->admin_rate / 100 ) ) : $statement->admin_amount;
?>

<!-- Statement Info -->
<?php if ( 'statement_info' === $data['template'] ) : ?>
	<div class="td-statement-info">
		<div class="tutor-flex tutor-align-center">
			<?php ComponentHelper::render_status_badge( $statement->order_status ); ?>
		</div>

		<div class="tutor-mt-4 tutor-font-medium tutor-tiny tutor-text-primary">
			<?php echo esc_html( $statement->course_title ); ?>
		</div>

		<div class="tutor-mt-4">
			<span>
				<span class="tutor-surface-l2 tutor-p-1 tutor-font-regular tutor-tiny">
					<?php echo esc_html( '#' . $statement->order_id ); ?>
				</span>
			</span>

			<span class="tutor-ml-4 tutor-font-regular tutor-tiny">
				<?php echo esc_html( tutor_get_formated_date( get_option( 'date_format' ), $statement->created_at ) ); ?>
			</span>

			<?php if ( is_a( $customer, 'WP_User' ) ) : ?>
			<span>
				<span><?php esc_html_e( 'Purchaser:', 'tutor-pro' ); ?></span>
				<span><?php echo esc_html( tutils()->get_user_name( $customer ) ); ?></span>
			</span>
			<?php endif; ?>
		</div>
	</div>
<?php endif; ?>
<!-- End OF Statement Info -->

<!-- Statement Breakdown -->
<?php if ( 'statement_breakdown' === $data['template'] ) : ?>
	<!-- Order Amount -->
	<div class="tutor-gap-2">
		<span >
			<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
				<?php esc_html_e( 'Order Amount: ', 'tutor-pro' ); ?>
			</span>
			<span class="tutor-font-regular tutor-tiny tutor-text-primary">
				<?php echo wp_kses( tutor_utils()->tutor_price( $statement->order_total_price ), tutor_price_allowed_html() ); ?>
			</span>
		</span>
	</div>

	<!-- Tax Amount -->
	<?php if ( tutor_utils()->is_monetize_by_tutor() ) : ?>
	<div class="tutor-mt-1">
		<span>
			<span class="tutor-text-subdued tutor-font-regular tutor-tiny">											
				<?php
				/* translators: %s: Order Tax Type. */
				echo wp_kses( sprintf( __( 'Tax Amount (%s): ', 'tutor-pro' ), tutor_utils()->translate_dynamic_text( $statement->order_tax_type ?? '' ) ), tutor_price_allowed_html() );
				?>
			</span>
			<span class="tutor-font-regular tutor-tiny tutor-text-primary tutor-tiny">
				<?php echo wp_kses( tutor_utils()->tutor_price( $statement->order_tax_amount ), tutor_price_allowed_html() ); ?>
			</span>
		</span>
	</div>
	<?php endif; ?>

	<!-- Deducted Fees -->
	<div class="tutor-mt-1">
		<span>
			<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
				<?php
				$label      = empty( $statement->deduct_fees_name ) ? __( 'Maintenance Fees: ', 'tutor-pro' ) : $statement->deduct_fees_name;
				$label_type = empty( $statement->deduct_fees_type ) ? '' : sprintf( ' (%s)', ucfirst( $statement->deduct_fees_type ) );

				printf( '%s %s', esc_html( $label ), esc_html( $label_type ) );
				?>
			</span>
			<span class="tutor-font-regular tutor-tiny tutor-text-primary tutor-tiny">
				<?php echo wp_kses( tutor_utils()->tutor_price( $statement->deduct_fees_amount ), tutor_price_allowed_html() ); ?>
			</span>
		</span>
	</div>

	<!-- Net Amount -->
	<div class="tutor-mt-1">
		<span>
			<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
				<?php esc_html_e( 'Net Amount: ', 'tutor-pro' ); ?>
			</span>
			<span class="tutor-font-regular tutor-tiny tutor-text-primary tutor-tiny">
				<?php echo wp_kses( tutor_utils()->tutor_price( $course_price_grand_total ), tutor_price_allowed_html() ); ?>
			</span>
		</span>
	</div>
<?php endif; ?>
<!-- End OF Statement Breakdown -->

<!-- Instructor Earnings -->
<?php if ( 'instructor_earnings' === $data['template'] ) : ?>
	<?php $instructor_commission_type = 'percent' === $statement->commission_type ? '%' : ''; ?>
	<span class="tutor-font-regular tutor-tiny tutor-text-primary">
		<?php echo wp_kses( tutor_utils()->tutor_price( $instructor_amount ), tutor_price_allowed_html() ); ?>
	</span>
	<br>
	<span class="tutor-font-regular tutor-tiny tutor-text-subdued">
		<?php
		/* translators: 1: instructor rate 2: instructor commision 3: total price */
		echo wp_kses( sprintf( __( '%1$s%2$s of %3$s', 'tutor-pro' ), $statement->instructor_rate, $instructor_commission_type, tutor_utils()->tutor_price( $course_price_grand_total ) ), tutor_price_allowed_html() );
		?>
	</span>
<?php endif; ?>

<!-- Instructor Earnings -->
<?php if ( 'admin_earnings' === $data['template'] ) : ?>
	<?php $admin_rate_type = 'percent' === $statement->commission_type ? '%' : ''; ?>
	<div class="tutor-font-regular tutor-tiny tutor-text-primary">
		<?php echo wp_kses( tutor_utils()->tutor_price( $admin_amount ), tutor_price_allowed_html() ); ?> <br />
		<span class="tutor-font-regular tutor-tiny tutor-text-subdued">
			<?php
				/* translators: 1: rate 2: rate type */
				echo esc_html( sprintf( __( 'As per %1$d%2$s', 'tutor-pro' ), $statement->admin_rate, $admin_rate_type ) );
			?>
		</span>
	</div>
<?php endif; ?>
