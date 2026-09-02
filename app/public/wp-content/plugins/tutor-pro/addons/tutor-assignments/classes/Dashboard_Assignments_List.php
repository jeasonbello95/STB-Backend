<?php
/**
 * Frontend dashboard assignment list.
 *
 * @package TutorPro/Addons
 * @subpackage Assignment
 * @author Themeum <support@themeum.com>
 * @since 4.0.0
 */

namespace TUTOR_ASSIGNMENTS;

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Badge;
use Tutor\Components\Button;
use Tutor\Components\Constants\Positions;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\Popover;
use Tutor\Components\PreviewTrigger;
use Tutor\Components\SvgIcon;
use Tutor\Helpers\DateTimeHelper;
use Tutor\Helpers\UrlHelper;
use TUTOR\Icon;

/**
 * Dashboard assignment list renderer.
 *
 * @since 4.0.0
 */
class Dashboard_Assignments_List {

	/**
	 * Cache for all assignment options, keyed by post ID.
	 *
	 * @since 4.0.0
	 *
	 * @var array
	 */
	private array $assignment_options_cache = array();

	/**
	 * Get status filter options for the dropdown.
	 *
	 * @since 4.0.0
	 *
	 * @param array  $status_counts  Tab counts from Assignments_List::tabs_data().
	 * @param string $status_filter  Currently active status filter.
	 * @param string $filter_url     Base URL for filter links.
	 * @param int    $total_count    Total assignment count.
	 *
	 * @return array
	 */
	public function get_status_filter_options( array $status_counts, string $status_filter, string $filter_url, int $total_count ): array {
		return array(
			'type'    => 'dropdown',
			'active'  => true,
			'count'   => $total_count,
			'options' => array(
				array(
					'label'  => __( 'All', 'tutor-pro' ),
					'count'  => isset( $status_counts[ Assignments_List::TAB_ALL ] ) ? $status_counts[ Assignments_List::TAB_ALL ] : 0,
					'url'    => remove_query_arg( 'status', $filter_url ),
					'active' => '' === $status_filter,
				),
				array(
					'label'  => __( 'Pending', 'tutor-pro' ),
					'count'  => isset( $status_counts[ Assignments_List::TAB_PENDING ] ) ? $status_counts[ Assignments_List::TAB_PENDING ] : 0,
					'url'    => UrlHelper::add_query_params( $filter_url, array( 'status' => Assignments_List::TAB_PENDING ) ),
					'active' => Assignments_List::TAB_PENDING === $status_filter,
				),
				array(
					'label'  => __( 'Failed', 'tutor-pro' ),
					'count'  => isset( $status_counts[ Assignments_List::TAB_FAIL ] ) ? $status_counts[ Assignments_List::TAB_FAIL ] : 0,
					'url'    => UrlHelper::add_query_params( $filter_url, array( 'status' => Assignments_List::TAB_FAIL ) ),
					'active' => Assignments_List::TAB_FAIL === $status_filter,
				),
				array(
					'label'  => __( 'Passed', 'tutor-pro' ),
					'count'  => isset( $status_counts[ Assignments_List::TAB_PASS ] ) ? $status_counts[ Assignments_List::TAB_PASS ] : 0,
					'url'    => UrlHelper::add_query_params( $filter_url, array( 'status' => Assignments_List::TAB_PASS ) ),
					'active' => Assignments_List::TAB_PASS === $status_filter,
				),
			),
		);
	}

	/**
	 * Render assignment column.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return void
	 */
	public function column_assignment( $item ) {
		?>
		<div class="tutor-flex tutor-flex-column tutor-gap-2">
			<a href="<?php echo esc_url( $this->get_review_url( $item ) ); ?>" class="tutor-assignment-title tutor-medium tutor-font-semibold">
				<?php echo esc_html( get_the_title( $item->comment_post_ID ) ); ?>
			</a>
			<div class="tutor-small tutor-text-secondary tutor-flex tutor-gap-1">
				<span><?php esc_html_e( 'Course:', 'tutor-pro' ); ?></span>
				<?php PreviewTrigger::make()->id( $item->comment_parent )->render(); ?>
			</div>
			<div class="tutor-tiny tutor-text-secondary">
				<?php
				/* translators: %s: student name */
				printf( esc_html__( 'Student: %s', 'tutor-pro' ), esc_html( $item->comment_author ) );
				?>
			</div>
		</div>
		<?php
	}

	/**
	 * Get a cached assignment option value.
	 *
	 * @since 4.0.0
	 *
	 * Fetches all options for the post ID in a single call and caches the full
	 * array, so subsequent key lookups within the same request are free.
	 *
	 * @param int    $post_id Assignment post ID.
	 * @param string $key     Option key (dot-notation supported).
	 *
	 * @return mixed
	 */
	private function get_cached_assignment_option( int $post_id, string $key ) {
		if ( ! isset( $this->assignment_options_cache[ $post_id ] ) ) {
			$options = tutor_utils()->get_assignment_option( $post_id );

			$this->assignment_options_cache[ $post_id ] = $options ? $options : array();
		}

		if ( '' === $key ) {
			return $this->assignment_options_cache[ $post_id ];
		}

		return tutor_utils()->avalue_dot( $key, $this->assignment_options_cache[ $post_id ] );
	}

	/**
	 * Render mark column.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return void
	 */
	public function column_mark( $item ) {
		$given_mark = get_comment_meta( $item->comment_ID, 'assignment_mark', true );
		$max_mark   = (int) $this->get_cached_assignment_option( $item->comment_post_ID, 'total_mark' );
		$pass_mark  = (int) $this->get_cached_assignment_option( $item->comment_post_ID, 'pass_mark' );
		$status     = $this->get_status( $item );
		?>
		<div class="tutor-flex tutor-flex-column tutor-gap-1">
			<div class="tutor-small">
				<?php echo '' !== $given_mark ? esc_html( $given_mark ) . '/' . esc_html( $max_mark ) : '-/' . esc_html( $max_mark ); ?>
			</div>
			<div class="tutor-tiny tutor-text-subdued">
				<?php
				/* translators: %d: pass mark */
				printf( esc_html__( 'Pass mark: %d', 'tutor-pro' ), esc_html( $pass_mark ) );
				?>
			</div>
		</div>
		<?php
		$this->render_status_badge( $status, 'tutor-hidden tutor-sm-block' );
	}

	/**
	 * Render time column.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return void
	 */
	public function column_time( $item ) {
		$options  = $this->get_cached_assignment_option( $item->comment_post_ID, '' );
		$deadline = tutor_utils()->get_assignment_deadline_date_in_gmt( $item->comment_post_ID, null, $item->user_id, $item->comment_parent, $options );
		$value    = (int) tutor_utils()->avalue_dot( 'time_duration.value', $options );
		$unit     = (string) tutor_utils()->avalue_dot( 'time_duration.time', $options );
		$time_map = Assignments::get_time_map( $value );
		$duration = $value ? $value . ' ' . ( isset( $time_map[ $unit ] ) ? $time_map[ $unit ] : $unit ) : __( 'No Limit', 'tutor-pro' );
		?>
		<div class="tutor-flex tutor-flex-column tutor-gap-1">
			<div class="tutor-tiny">
				<span class="tutor-text-subdued"><?php esc_html_e( 'Duration:', 'tutor-pro' ); ?></span>
				<?php echo esc_html( $duration ); ?>
			</div>
			<div class="tutor-tiny">
				<span class="tutor-text-subdued"><?php esc_html_e( 'Submitted:', 'tutor-pro' ); ?></span>
				<?php echo esc_html( tutor_utils()->convert_date_into_wp_timezone( $item->comment_date_gmt ) ); ?>
			</div>
			<div class="tutor-tiny">
				<span class="tutor-text-subdued"><?php esc_html_e( 'Deadline:', 'tutor-pro' ); ?></span>
				<?php echo esc_html( $deadline ? DateTimeHelper::get_gmt_to_user_timezone_date( $deadline ) : __( 'No Limit', 'tutor-pro' ) ); ?>
			</div>
		</div>
		<?php
	}

	/**
	 * Render status column.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return void
	 */
	public function column_status( $item ) {
		$status = $this->get_status( $item );
		?>
		<div class="tutor-assignment-actions tutor-sm-hidden">
			<?php
			$this->render_status_badge( $status, 'tutor-assignment-status' );
			$this->render_action_popover( $item, $status );
			?>
		</div>
		<div class="tutor-hidden tutor-sm-flex tutor-items-center tutor-justify-between tutor-gap-5">
			<?php $this->render_mobile_actions( $item, $status ); ?>
		</div>
		<?php
	}

	/**
	 * Render action popover.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 * @param string $status Assignment status.
	 *
	 * @return void
	 */
	public function render_action_popover( $item, string $status ) {
		echo '<div class="tutor-assignment-action-menu">';
		Popover::make()
			->trigger( $this->get_kebab_button() )
			->placement( Positions::BOTTOM )
			->menu_min_width( '130px' )
			->menu_item( $this->get_action_item( $item, $status ) )
			->menu_item(
				array(
					'tag'     => 'button',
					'content' => __( 'Delete', 'tutor-pro' ),
					'icon'    => SvgIcon::make()->name( Icon::DELETE_2 )->size( 20 )->get(),
					'attr'    => array(
						'@click' => sprintf(
							'hide(); TutorCore.modal.showModal("tutor-assignment-delete-modal", { assignmentID: %d });',
							$item->comment_ID
						),
					),
				)
			)
			->render();
		echo '</div>';
	}

	/**
	 * Render status badge.
	 *
	 * @since 4.0.0
	 *
	 * @param string $status Assignment status.
	 * @param string $class Optional class name.
	 *
	 * @return void
	 */
	public function render_status_badge( string $status, string $class = '' ) {
		Badge::make()
			->label( tutor_utils()->translate_dynamic_text( $status, false ) )
			->variant( $this->get_badge_variant( $status ) )
			->rounded()
			->attr( 'class', $class )
			->render();
	}

	/**
	 * Render mobile actions.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 * @param string $status Assignment status.
	 *
	 * @return void
	 */
	public function render_mobile_actions( $item, string $status ) {
		Button::make()
			->label( $this->get_primary_action_label( $status ) )
			->tag( 'a' )
			->attr( 'href', $this->get_review_url( $item ) )
			->attr( 'class', 'tutor-flex-1' )
			->render();

		Button::make()
			->label( __( 'Delete', 'tutor-pro' ) )
			->variant( Variant::SECONDARY )
			->icon( Icon::DELETE_2, 20 )
			->icon_only()
			->attr(
				'@click',
				sprintf(
					'TutorCore.modal.showModal("tutor-assignment-delete-modal", { assignmentID: %d });',
					$item->comment_ID
				)
			)
			->render();
	}

	/**
	 * Get assignment status.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return string
	 */
	public function get_status( $item ): string {
		$given_mark = get_comment_meta( $item->comment_ID, 'assignment_mark', true );
		$pass_mark  = (int) $this->get_cached_assignment_option( $item->comment_post_ID, 'pass_mark' );

		if ( '' === $given_mark ) {
			return Assignments::PENDING;
		}

		return (int) $given_mark >= $pass_mark ? Assignments::PASSED : Assignments::FAILED;
	}

	/**
	 * Map assignment status to badge variant.
	 *
	 * @since 4.0.0
	 *
	 * @param string $status Assignment status.
	 *
	 * @return string
	 */
	public function get_badge_variant( string $status ): string {
		switch ( $status ) {
			case Assignments::PASSED:
				return Badge::SUCCESS;

			case Assignments::FAILED:
				return Badge::ERROR;

			case Assignments::PENDING:
			default:
				return Badge::WARNING;
		}
	}

	/**
	 * Get kebab button for assignment action popover.
	 *
	 * @since 4.0.0
	 *
	 * @return string
	 */
	private function get_kebab_button(): string {
		return Button::make()
			->icon( Icon::ELLIPSES )
			->attr( 'x-ref', 'trigger' )
			->attr( '@click', 'toggle()' )
			->variant( 'secondary' )
			->size( Size::X_SMALL )
			->get();
	}

	/**
	 * Get action item for assignment popover.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 * @param string $status Assignment status.
	 *
	 * @return array
	 */
	private function get_action_item( $item, string $status ): array {
		return array(
			'tag'     => 'a',
			'content' => $this->get_primary_action_label( $status ),
			'icon'    => SvgIcon::make()->name( Icon::RESOURCES )->size( 20 )->get(),
			'attr'    => array(
				'href' => $this->get_review_url( $item ),
			),
		);
	}

	/**
	 * Get primary action label for assignment.
	 *
	 * @param string $status Assignment status.
	 *
	 * @return string
	 */
	private function get_primary_action_label( string $status ): string {
		return Assignments::PENDING === $status ? __( 'Evaluate', 'tutor-pro' ) : __( 'Details', 'tutor-pro' );
	}

	/**
	 * Get review url.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return string
	 */
	public function get_review_url( $item ): string {
		return UrlHelper::add_query_params(
			tutor_utils()->get_tutor_dashboard_page_permalink( 'assignments/review' ),
			array(
				'view_assignment' => $item->comment_ID,
				'assignment'      => $item->comment_post_ID,
			)
		);
	}

	/**
	 * Get submitted url.
	 *
	 * @since 4.0.0
	 *
	 * @param object $item Submitted assignment item.
	 *
	 * @return string
	 */
	public function get_submitted_url( $item ): string {
		return UrlHelper::add_query_params(
			tutor_utils()->get_tutor_dashboard_page_permalink( 'assignments/submitted' ),
			array(
				'assignment' => $item->comment_post_ID,
			)
		);
	}
}
