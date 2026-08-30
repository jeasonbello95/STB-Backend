<?php
/**
 * Zoom Addon - Meetings Page.
 *
 * @package TutorPro\Addons
 * @subpackage Zoom\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\ConfirmationModal;
use Tutor\Components\Constants\Positions;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\CourseFilter;
use Tutor\Components\DateFilter;
use Tutor\Components\EmptyState;
use Tutor\Components\Modal;
use Tutor\Components\Pagination;
use Tutor\Components\SearchFilter;
use Tutor\Components\Sorting;
use Tutor\Helpers\QueryHelper;
use Tutor\Helpers\UrlHelper;
use TUTOR\Icon;
use TUTOR\Input;
use TUTOR_PRO\Webinar;

// Pagination.
$current_page   = max( 1, Input::get( 'current_page', 1, Input::TYPE_INT ) );
$items_per_page = tutor_utils()->get_option( 'pagination_per_page' );


// Filters.
$course_id     = Input::get( 'course-id', 0, Input::TYPE_INT );
$search_filter = Input::get( 'search', '' );
$order_filter  = QueryHelper::get_valid_sort_order( Input::get( 'order', 'DESC' ) );
$date_filter   = Input::get( 'date', '' );
$user_id       = get_current_user_id();

$current_tab = Input::get( 'tab', 'active' );

$zoom_meetings = $data['zoom_obj']->get_meetings(
	$items_per_page,
	$current_page,
	'meetings' === $current_tab ? 'active' : $current_tab,
	array(
		'course_id' => $course_id,
		'search'    => $search_filter,
		'order'     => $order_filter,
		'date'      => $date_filter,
		'author'    => $user_id,
	)
);

$edit_meeting_form_id = 'tutor-zoom-meeting-edit-form';

$total_items = count(
	$data['zoom_obj']->get_meetings(
		null,
		null,
		'meetings' === $current_tab ? 'active' : $current_tab,
		array(
			'course_id' => $course_id,
			'search'    => $search_filter,
			'order'     => $order_filter,
			'date'      => $date_filter,
			'author'    => $user_id,
		)
	)
);

$current_page_url = UrlHelper::add_query_params(
	$data['dashboard_url'],
	array(
		'nav' => 'zoom',
		'tab' => $current_tab,
	)
);

$query_items = array( 'search', 'date', 'order', 'course-id' );

?>


<div class="tutor-zoom-frontend-meeting-list">
	<div class="tutor-zoom-frontend-meeting-list-filters">
		<div class="filter-item">
			<?php CourseFilter::make()->variant( Variant::LINK )->count( $total_items )->render(); ?>
		</div>
		<div class="filter-item">
		<?php
		if ( Input::has_any( $query_items, Input::GET_REQUEST ) ) {
			Button::make()
				->tag( 'a' )
				->attr( 'href', $current_page_url )
				->attr( 'class', 'tutor-text-brand' )
				->label( __( 'Clear all', 'tutor-pro' ) )
				->variant( Variant::LINK )
				->render();
		}
		?>
		</div>
		<div class="filter-item">
			<?php
			SearchFilter::make()
				->form_id( 'zoom-search-form' )
				->placeholder( __( 'Search...', 'tutor-pro' ) )
				->hidden_inputs(
					array(
						'nav'       => 'zoom',
						'tab'       => $current_tab,
						'order'     => $order_filter,
						'course-id' => $course_id,
						'date'      => $date_filter,
					)
				)
				->action( $data['dashboard_url'] )
				->placeholder( __( 'Search...', 'tutor-pro' ) )
				->size( Size::SMALL )
				->render();
			?>
		</div>
		<div class="filter-item">
			<?php
			DateFilter::make()
				->type( DateFilter::TYPE_SINGLE )
				->placement( DateFilter::PLACEMENT_BOTTOM_END )
				->trigger_size( Size::X_SMALL )
				->render();
			?>
		</div>
		<div class="filter-item">
			<?php
			Sorting::make()
				->order( 'DESC' )
				->render();
			?>
		</div>
	</div>
	<div class="tutor-zoom-frontend-meeting-list-body">
		<?php
		if ( ! tutor_utils()->count( $zoom_meetings ) ) {
			EmptyState::make()
				->title( __( 'No Meetings Found!', 'tutor-pro' ) )
				->render();
		} else {
			foreach ( $zoom_meetings as $meeting ) {
				$zoom_meeting_details = get_post_meta( $meeting->ID, '_tutor_zm_data', true );
				$zoom_meeting_details = json_decode( $zoom_meeting_details, true );
				$course_id            = tutor_utils()->get_course_id_by_content( $meeting );
				$zoom_info_card       = $data['zoom_obj']->get_zoom_info_card( $zoom_meeting_details['start_url'], $zoom_meeting_details['host_email'], $zoom_meeting_details['password'] );

				tutor_load_template_from_custom_path(
					TUTOR_ZOOM()->path . 'views/template/zoom-lesson-card.php',
					array(
						'post_id'           => $meeting->ID,
						'event_id'          => $zoom_meeting_details['host_id'] ?? '',
						'date_text'         => Webinar::get_start_date( $zoom_meeting_details['start_time'] ),
						'time_text'         => tutor_i18n_get_formated_date( $zoom_meeting_details['start_time'], 'g:i A' ),
						'lesson_title'      => $meeting->post_title,
						'course_id'         => $course_id,
						'show_live_tag'     => true,
						'event_tag_text'    => 'expired' === $current_tab ? __( 'Expired', 'tutor-pro' ) : __( 'Live Session', 'tutor-pro' ),
						'event_tag_icon'    => 'expired' === $current_tab ? '' : Icon::ZOOM_COLORIZE,
						'event_tag_variant' => 'expired' === $current_tab ? 'expired' : '',
						'action_text'       => 'expired' === $current_tab ? __( 'Details', 'tutor-pro' ) : __( 'Start Meeting', 'tutor-pro' ),
						'action_url'        => 'expired' === $current_tab ? get_post_permalink( $meeting->ID ) : $zoom_meeting_details['start_url'],
						'info_card'         => $zoom_info_card,
						'current_tab'       => $current_tab,
						'edit_modal_id'     => $data['edit_modal_id'],
						'delete_modal_id'   => $data['delete_modal_id'],
						'zoom_obj'          => $data['zoom_obj'],
					),
					false
				);
			}
		}
		?>
	</div>
	<?php
	Pagination::make()
		->current( $current_page )
		->total( $total_items )
		->limit( $items_per_page )
		->attr( 'class', 'tutor-pb-6 tutor-px-6' )
		->render();
	?>
</div>

<?php
	ConfirmationModal::make()
		->id( $data['delete_modal_id'] )
		->title( __( 'Do You Want to Delete This?', 'tutor-pro' ) )
		->message( __( 'Are you sure you want to delete this meeting permanently? Please confirm your choice.', 'tutor-pro' ) )
		->mutation_state( 'deleteMutation' )
		->confirm_handler( 'handleDeleteZoomMeeting(payload?.postId)' )
		->render();


	Modal::make()
		->id( $data['edit_modal_id'] )
		->title(
			sprintf( '<h5 class="tutor-h5">%s</h5>', __( 'Zoom', 'tutor-pro' ) ),
			'wp_kses_post'
		)
		->title_icon( Icon::ZOOM_COLORIZE )
		->template( TUTOR_ZOOM()->path . 'views/template/zoom-edit-modal-template.php', array( 'edit_meeting_form_id' => $edit_meeting_form_id ) )
		->footer_buttons(
			sprintf(
				'%s %s',
				Button::make()
					->variant( Variant::SECONDARY )
					->label( __( 'Cancel', 'tutor-pro' ) )
					->attr( '@click', sprintf( "TutorCore.modal.closeModal('%s')", $data['edit_modal_id'] ) )
					->get(),
				Button::make()
					->variant( Variant::PRIMARY )
					->label( __( 'Update Meeting', 'tutor-pro' ) )
					->attr( ':class', "updateMutation?.isPending ? 'tutor-btn-loading' : ''" )
					->attr( 'type', 'submit' )
					->attr( 'form', $edit_meeting_form_id )
					->get(),
			)
		)
		->footer_alignment( Positions::RIGHT )
		->render();
	?>
