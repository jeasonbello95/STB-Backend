<?php
/**
 * Bundle Course Card Template
 *
 * @package TutorPro\CourseBundle
 * @subpackage Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Color;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;
use Tutor\Models\CourseModel;
use TutorPro\CourseBundle\Models\BundleModel;

$bundle_id        = isset( $course_id ) ? $course_id : get_the_ID();
$bundle_permalink = get_permalink( $bundle_id );
$bundle_title     = get_the_title( $bundle_id );
$bundle_img       = get_tutor_course_thumbnail_src( $bundle_id );

$bundle_progress = tutor_utils()->get_course_completed_percent( $bundle_id, 0, true );

$bundle_categories = get_the_terms( $bundle_id, CourseModel::COURSE_CATEGORY );
$category_names    = is_array( $bundle_categories ) ? wp_list_pluck( $bundle_categories, 'name' ) : array();
$category          = implode( ', ', $category_names );

// Get courses in this bundle.
$bundle_courses = BundleModel::get_bundle_courses( $bundle_id );
$total_courses  = count( $bundle_courses );

?>
<div
	class="tutor-progress-card tutor-bundle-progress-card"
	:class="expanded && 'tutor-active'"
	role="link"
	tabindex="0"
	data-url="<?php echo esc_url( $bundle_permalink ); ?>"
	x-data="{
		expanded: true,
		navigate() {
			window.location.href = $el.dataset.url;
		}
	}"
	@click="
		if ($event.target.closest('a, button')) return;
		expanded = !expanded;
	"
	:aria-expanded="expanded ? 'true' : 'false'"
>
	<div class="tutor-progress-card-inner">
		<?php tutor_load_template( 'dashboard.courses.course-card-thumbnail', array( 'thumbnail_img' => $bundle_img, 'post_id' => $bundle_id ) ); ?>

		<div class="tutor-progress-card-content">
			<!-- bundle header  -->
			<?php tutor_load_template( 'dashboard.courses.course-card-header', array( 'category' => $category ) ); ?>

			<!-- bundle progress  -->
			<?php
			tutor_load_template(
				'dashboard.courses.course-card-progress',
				array(
					'course_progress'        => $bundle_progress,
					'progress_message_label' => _n( 'course', 'courses', (int) $bundle_progress['total_count'], 'tutor-pro' ),
				)
			);
			?>
		</div>
	</div>

	<!-- Collapsible courses section -->
	<?php if ( ! empty( $bundle_courses ) ) : ?>
		<div class="tutor-dashboard-bundle-courses-wrapper" x-show="expanded" x-collapse>
			<?php
			global $post;
			foreach ( $bundle_courses as $course ) {
				// Set up global post context for the course.
				$post = $course; // phpcs:ignore
				setup_postdata( $post );
				tutor_load_template( 'dashboard.courses.course-card' );
			}
			wp_reset_postdata();
			?>
		</div>
	<?php endif; ?>

	<div class="tutor-progress-card-actions">
		<?php do_action( 'tutor_dashboard_bundle_card_actions', $bundle_id ); ?>

		<!-- Expand/Collapse toggle button -->
		<?php if ( ! empty( $bundle_courses ) ) : ?>
		<div x-data="tutorPopover({ placement: 'bottom-end' })" class="tutor-dashboard-bundle-action">
			<?php
			Button::make()
				->label( __( 'More options', 'tutor-pro' ) )
				->variant( Variant::SECONDARY )
				->size( Size::X_SMALL )
				->icon( Icon::ELLIPSES, 'left', Size::SIZE_16, Color::SECONDARY )
				->icon_only()
				->attr( 'x-ref', 'trigger' )
				->attr( '@click', 'toggle()' )
				->attr( 'class', 'tutor-dashboard-bundle-action-button' )
				->render();
			?>
			<div x-ref="content" x-show="open" x-cloak @click.outside="handleClickOutside()" class="tutor-popover">
				<div class="tutor-popover-menu" style="min-width: 104px;">
					<button class="tutor-popover-menu-item tutor-gap-5" @click="expanded = !expanded">
						<span :class="expanded && 'tutor-rotate-180'" class="tutor-flex tutor-transition-all">
							<?php SvgIcon::make()->name( Icon::CHEVRON_DOWN_2 )->size( 20 )->render(); ?>
						</span>
						<span x-text="expanded ? '<?php esc_html_e( 'Hide Courses', 'tutor-pro' ); ?>' : '<?php esc_html_e( 'Show Courses', 'tutor-pro' ); ?>'"></span>
					</button>
					<button class="tutor-popover-menu-item tutor-gap-5" @click="navigate()">
						<?php SvgIcon::make()->name( Icon::INFO_OCTAGON )->size( 20 )->render(); ?>
						<?php esc_html_e( 'See Bundle Info', 'tutor-pro' ); ?>
					</button>
				</div>
			</div>
		</div>
		<?php endif; ?>
	</div>
</div>
