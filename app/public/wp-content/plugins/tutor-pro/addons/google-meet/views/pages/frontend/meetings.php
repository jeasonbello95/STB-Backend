<?php
/**
 * Google meet meetings page
 *
 * @since v4.0.0
 *
 * @package TutorPro\GoogleMeet\views
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
use TutorPro\GoogleMeet\Models\EventsModel;
use TutorPro\GoogleMeet\Utilities\Utilities;


$current_tab = Input::get( 'tab', 'active-meeting' );
$context     = 'active-meeting' === $current_tab ? 'active' : $current_tab;

$current_page         = max( 1, Input::get( 'current_page', 1, Input::TYPE_INT ) );
$items_per_page       = tutor_utils()->get_option( 'pagination_per_page' );
$order_filter         = QueryHelper::get_valid_sort_order( Input::get( 'order', 'DESC' ) );
$search_filter        = Input::get( 'search', '' );
$course_id            = Input::get( 'course-id', 0, Input::TYPE_INT );
$offset               = ( $items_per_page * $current_page ) - $items_per_page;
$date                 = Input::get( 'date', '' );
$edit_meeting_form_id = 'tutor-google-meet-meeting-edit-form';
$sorting_args         = array(
	'course_id'   => $course_id,
	'search_term' => $search_filter,
	'order'       => $order_filter,
	'author_id'   => get_current_user_id(),
	'date'        => '' !== $date ? tutor_get_formated_date( 'Y-m-d', $date ) : '',
);
$paging_args          = array(
	'limit'  => $items_per_page,
	'offset' => $offset,
);
$meetings             = EventsModel::get( $context, $sorting_args, $paging_args ) ?? array();
$total_found          = (int) $meetings['total_found'] ?? 0;
$current_page_url     = UrlHelper::add_query_params(
	tutor_utils()->tutor_dashboard_url( 'live-classes' ),
	array(
		'nav' => 'google-meet',
		'tab' => $current_tab,
	)
);

$query_items = array( 'search', 'date', 'order', 'course-id' );
?>

<div class="tutor-google-meetings-list">
	<div class="tutor-google-meetings-list-filter">
		<div class="filter-item">
			<?php CourseFilter::make()->variant( Variant::LINK )->count( $total_found )->render(); ?>
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
		<div class="filter-item" x-data="<?php printf( '{searchOpen: %s}', empty( $search_filter ) ? 'false' : 'true' ); ?>">
			<?php
			SearchFilter::make()
				->form_id( 'google-meet-search-form' )
				->placeholder( __( 'Search...', 'tutor-pro' ) )
				->hidden_inputs(
					array(
						'nav'       => 'google-meet',
						'tab'       => $current_tab,
						'order'     => $order_filter,
						'course-id' => $course_id,
						'date'      => $date,
					)
				)
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
				->order( $order_filter )
				->render();
			?>
		</div>
	</div>
	<div class="tutor-google-meetings-list-body">
		<?php
		if ( ! $total_found ) {
			EmptyState::make()->render();
		} else {
			foreach ( $meetings['meetings'] as $meet ) {
				$course_id    = tutor_utils()->get_course_id_by_content( $meet );
				$parent_obj   = get_post_parent( $meet->ID );
				$even_details = json_decode( $meet->event_details );
				$info_card    = Utilities::get_google_meeting_info_card( $even_details->meet_link, $even_details->organizer->email );
				tutor_load_template_from_custom_path(
					$data['templates'] . 'google-meet-lesson-card.php',
					array(
						'post_id'           => $meet->ID,
						'event_id'          => $even_details->id,
						'date_text'         => Webinar::get_start_date( $meet->meta_value ),
						'time_text'         => tutor_i18n_get_formated_date( $meet->meta_value, 'g:i A' ),
						'lesson_title'      => $meet->post_title,
						'course_id'         => $course_id,
						'object_id'         => $parent_obj ? $parent_obj->ID : 0,
						'show_live_tag'     => true,
						'event_tag_text'    => 'expired' === $current_tab ? __( 'Expired', 'tutor-pro' ) : __( 'Live Session', 'tutor-pro' ),
						'event_tag_icon'    => 'expired' === $current_tab ? '' : Icon::GOOGLE_MEET_COLORIZE,
						'event_tag_variant' => 'expired' === $current_tab ? 'expired' : '',
						'action_text'       => 'expired' === $current_tab ? __( 'Details', 'tutor-pro' ) : __( 'Start Meeting', 'tutor-pro' ),
						'action_url'        => 'expired' === $current_tab ? get_post_permalink( $meet->ID ) : $even_details->meet_link,
						'current_tab'       => $current_tab,
						'info_card'         => $info_card,
						'delete_modal_id'   => $data['delete_modal_id'] ?? '',
						'edit_modal_id'     => $data['edit_modal_id'] ?? '',
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
			->total( $total_found )
			->limit( $items_per_page )
			->attr( 'class', 'tutor-pb-6 tutor-px-6' )
			->render();
	?>
</div>
<?php
	ConfirmationModal::make()
		->id( $data['delete_modal_id'] ?? '' )
		->title( __( 'Do You Want to Delete This?', 'tutor-pro' ) )
		->message( __( 'Do you want to delete? Google event will be deleted permanently.', 'tutor-pro' ) )
		->confirm_handler( 'handleGoogleMeetDeleteMeeting(payload)' )
		->mutation_state( 'deleteMutation' )
		->render();

	Modal::make()
		->id( $data['edit_modal_id'] )
		->title(
			sprintf( '<h5 class="tutor-h5">%s</h5>', __( 'Google Meet', 'tutor-pro' ) ),
			'wp_kses_post'
		)
		->title_icon( Icon::GOOGLE_MEET_COLORIZE )
		->template( $data['templates'] . 'google-meet-edit-modal-template.php', array( 'edit_meeting_form_id' => $edit_meeting_form_id ) )
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
