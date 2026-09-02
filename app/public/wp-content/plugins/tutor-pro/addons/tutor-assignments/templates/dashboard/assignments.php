<?php
/**
 * Template for displaying Assignments
 *
 * @package Tutor\Templates
 * @subpackage Dashboard
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\Positions;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\CourseFilter;
use Tutor\Components\DateFilter;
use Tutor\Components\DropdownFilter;
use Tutor\Components\EmptyState;
use Tutor\Components\ConfirmationModal;
use Tutor\Components\Pagination;
use Tutor\Components\SearchFilter;
use Tutor\Components\Sorting;
use Tutor\Helpers\QueryHelper;
use TUTOR\Input;
use TUTOR_ASSIGNMENTS\Dashboard_Assignments_List;
use TUTOR_ASSIGNMENTS\Assignments_List;

$url           = get_pagenum_link( 1, false );
$item_per_page = tutor_utils()->get_option( 'pagination_per_page', 10 );
$current_page  = max( 1, Input::get( 'current_page', 1, Input::TYPE_INT ) );
$offset        = ( $current_page - 1 ) * $item_per_page;

$course_id     = Input::get( 'course-id', 0, Input::TYPE_INT );
$status_filter = Input::get( 'status', '' );
$start_date    = Input::get( 'start_date', '' );
$end_date      = Input::get( 'end_date', '' );
$search_filter = Input::get( 'search', '' );
$order_filter  = QueryHelper::get_valid_sort_order( Input::get( 'order', 'DESC' ) );

$assignments_list = new Assignments_List();
$assignments      = Assignments_List::get_submitted_assignment_list( $status_filter, $course_id, $start_date, $end_date, $search_filter, $offset, $item_per_page, $order_filter, 0 );
$list             = new Dashboard_Assignments_List();

$status_counts = $assignments_list->tabs_data( $course_id, $start_date, $end_date, $search_filter );
$filter_url    = remove_query_arg( 'current_page', $url );
$hidden_inputs = array(
	'order'      => $order_filter,
	'start_date' => $start_date,
	'end_date'   => $end_date,
	'status'     => $status_filter,
	'course-id'  => $course_id,
);

$status_options = $list->get_status_filter_options( $status_counts, $status_filter, $filter_url, $assignments->total_count );

?>

<div class="tutor-dashboard-assignments" x-data="tutorAssignments()">
	<h4 class="tutor-h4 tutor-mb-5 tutor-hidden tutor-sm-block">
		<?php esc_html_e( 'Assignments', 'tutor-pro' ); ?>
	</h4>
	<div class="tutor-surface-l1 tutor-border tutor-rounded-2xl tutor-overflow-hidden">
		<div class="tutor-assignment-filters">
			<div class="tutor-flex tutor-justify-between tutor-px-6 tutor-py-5 tutor-border-b">
				<?php
				CourseFilter::make()
				->variant( Variant::PRIMARY_SOFT )
				->size( Size::SMALL )
				->count( $assignments->total_count )
				->render();

				DropdownFilter::make()
					->size( Size::SMALL )
					->options( $status_options['options'] )
					->query_param( 'status' )
					->variant( Variant::OUTLINE )
					->position( Positions::BOTTOM_END )
					->render();
				?>
			</div>
			<div class="tutor-flex tutor-gap-4 tutor-justify-between tutor-px-6 tutor-py-5 tutor-border-b">
				<?php
				SearchFilter::make()
				->form_id( 'tutor-my-courses-search-form' )
				->hidden_inputs( $hidden_inputs )
				->placeholder( __( 'Search assignments...', 'tutor-pro' ) )
				->action( $filter_url )
				->size( Size::SMALL )
				->render();
				?>

				<div class="tutor-flex tutor-gap-3">
					<?php
					DateFilter::make()
						->type( DateFilter::TYPE_RANGE )
						->placement( Positions::BOTTOM_END )
						->hide_initial_label()
						->render();

					Sorting::make()->order( $order_filter )->size( Size::SMALL )->render();
					?>
				</div>
			</div>
		</div>

		<?php if ( empty( $assignments->results ) ) : ?>
			<?php
				EmptyState::make()
				->title( __( 'No Assignments Found!', 'tutor-pro' ) )
				->icon( tutor_utils()->get_themed_svg( 'images/illustrations/lesson-empty.svg' ) )
				->render();
			?>
		<?php else : ?>
				<div class="tutor-table-wrapper tutor-assignments">
					<table class="tutor-table">
					<thead>
						<tr>
							<th>
								<?php esc_html_e( 'Assignment Info', 'tutor-pro' ); ?>
							</th>
							<th>
								<?php esc_html_e( 'Marks', 'tutor-pro' ); ?>
							</th>
							<th>
								<?php esc_html_e( 'Time', 'tutor-pro' ); ?>
							</th>
							<th class="tutor-assignment-actions-heading">
								<?php esc_html_e( 'Status', 'tutor-pro' ); ?>
							</th>
						</tr>
					</thead>

						<tbody>
							<?php foreach ( $assignments->results as $item ) : ?>
								<tr>
									<td><?php $list->column_assignment( $item ); ?></td>
									<td><?php $list->column_mark( $item ); ?></td>
									<td><?php $list->column_time( $item ); ?></td>
									<td><?php $list->column_status( $item ); ?></td>
								</tr>
							<?php endforeach; ?>
						</tbody>
				</table>
			</div>
		<?php endif; ?>

		<?php
			Pagination::make()
			->current( $current_page )
			->total( $assignments->total_count )
			->limit( $item_per_page )
			->attr( 'class', 'tutor-p-6 tutor-sm-p-5 tutor-border-t' )
			->render();

			ConfirmationModal::make()
			->id( 'tutor-assignment-delete-modal' )
			->title( __( 'Do You Want to Delete This?', 'tutor-pro' ) )
			->message( __( 'Would you like to delete this assignment submission permanently? We suggest you proceed with caution.', 'tutor-pro' ) )
			->confirm_handler( 'handleDeleteAssignment(payload?.assignmentID)' )
			->mutation_state( 'deleteMutation' )
			->render();
		?>
	</div>
</div>
