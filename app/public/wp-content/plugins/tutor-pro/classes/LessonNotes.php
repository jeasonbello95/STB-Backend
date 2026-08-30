<?php
/**
 * Handle Lesson Notes
 *
 * @package TutorPro\Classes
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.9.0
 */

namespace TUTOR_PRO;

defined( 'ABSPATH' ) || exit;

use Tutor\Helpers\HttpHelper;
use Tutor\Helpers\QueryHelper;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;
use TUTOR\Input;
use Tutor\Options_V2;
use Tutor\Traits\JsonResponse;

/**
 * Class Lesson Notes
 */
class LessonNotes {
	use JsonResponse;

	/**
	 * Lesson Notes Meta Key
	 *
	 * @since 3.9.0
	 */
	const COMMENT_TYPE = 'lesson_note';

	const TYPE_REGULAR   = 'regular';
	const TYPE_HIGHLIGHT = 'highlight';
	const TYPE_VIDEO     = 'video';

	const PARAM_NOTES       = 'notes';
	const PARAM_VIDEO_NOTES = 'video-notes';

	const NOTE_META_KEY = '_tutor_note_info';

	/**
	 * Determine if legacy mode is enabled or not
	 *
	 * @since 4.0.0
	 *
	 * @var bool
	 */
	private $is_legacy_learning_mode = false;

	/**
	 * Register hooks.
	 */
	public function __construct() {
		$this->is_legacy_learning_mode = Options_V2::LEARNING_MODE_LEGACY === tutor_utils()->get_option( 'learning_mode' );

		add_filter( 'tutor/options/attr', array( $this, 'add_options' ) );

		if ( ! self::is_enabled() ) {
			return;
		}

		/**
		 * Lesson Notes feature
		 *
		 * @since 3.3.0
		 */
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_note_scripts' ) );
		add_filter( 'tutor_lesson_single_nav_items', array( $this, 'filter_lesson_single_nav_item' ) );
		add_action( 'tutor_lesson_single_after_nav_items', array( $this, 'load_lesson_notes_nav_button' ), 10, 2 );
		add_action( 'wp_ajax_tutor_pro_save_lesson_note', array( $this, 'ajax_save_lesson_note' ) );
		add_action( 'wp_ajax_tutor_pro_update_lesson_note', array( $this, 'ajax_update_lesson_note' ) );
		add_action( 'wp_ajax_tutor_pro_delete_lesson_note', array( $this, 'ajax_delete_lesson_note' ) );
		add_action( 'wp_ajax_tutor_pro_get_lesson_notes_html', array( $this, 'ajax_get_lesson_notes_html' ) );
		add_action( 'wp_ajax_tutor_pro_get_single_lesson_note_html', array( $this, 'ajax_get_single_lesson_note_html' ) );
		add_action( 'wp_ajax_tutor_pro_lesson_notes_load_more', array( $this, 'ajax_lesson_notes_load_more' ) );

		add_filter( 'tutor_student_dashboard_nav', array( $this, 'register_dashboard_menu' ) );
		add_action( 'load_dashboard_template_part_from_other_location', array( $this, 'load_dashboard_template' ) );
	}

	/**
	 * Add Enable/Disable lesson note settings option.
	 *
	 * @since 4.0.0
	 *
	 * @param array $options the default options.
	 *
	 * @return array the modified options.
	 */
	public function add_options( $options ) {
		$options['course']['blocks']['block_lesson']['fields'][] = array(
			'key'         => 'enable_lesson_notes',
			'type'        => 'toggle_switch',
			'label'       => __( 'Enable Lesson Notes', 'tutor-pro' ),
			'label_title' => '',
			'default'     => 'on',
			'desc'        => __( 'Enable/disable lesson notes.', 'tutor-pro' ),
		);
		return $options;
	}

	/**
	 * Check if lesson note is enabled in settings.
	 *
	 * @since 4.0.0
	 *
	 * @return bool
	 */
	public static function is_enabled() {
		return tutor_utils()->get_option( 'enable_lesson_notes', true );
	}

	/**
	 * Enqueue lesson notes js and css
	 *
	 * @since 3.9.0
	 */
	public function enqueue_note_scripts() {
		if ( is_single() && tutor()->lesson_post_type === get_post_type() ) {
			wp_enqueue_script( 'tutor-pro-lesson-notes', tutor_pro()->url . 'assets/js/lesson-notes.js', array( 'jquery', 'wp-i18n' ), TUTOR_PRO_VERSION, true );

			if ( ! $this->is_legacy_learning_mode ) {
				wp_enqueue_script( 'tutor-pro-learning-area-notes', tutor_pro()->url . 'assets/js/learning-area-notes.js', array( 'tutor-core', 'wp-i18n' ), TUTOR_PRO_VERSION, true );
			}

			$lesson_notes = $this->get_lesson_notes( get_the_ID(), get_current_user_id(), 0, 1000 );

			$lesson_notes = $this->lesson_decode_unicode_sequences( $lesson_notes );

			wp_localize_script( 'tutor-pro-lesson-notes', 'lesson_notes', $lesson_notes );

			if ( $this->is_legacy_learning_mode ) {
				wp_enqueue_style( 'tutor-pro-lesson-notes', tutor_pro()->url . 'assets/css/lesson-notes.css', array(), TUTOR_PRO_VERSION );
			} else {
				wp_enqueue_style( 'tutor-pro-learning-area-notes', tutor_pro()->url . 'assets/css/learning-area-notes.css', array(), TUTOR_PRO_VERSION );
			}
		}

		if ( tutor_utils()->is_tutor_frontend_dashboard( 'notes' ) ) {
			wp_enqueue_script( 'tutor-pro-dashboard-notes', tutor_pro()->url . 'assets/js/dashboard-notes.js', array( 'tutor-core', 'wp-i18n' ), TUTOR_PRO_VERSION, true );
			wp_enqueue_style( 'tutor-pro-dashboard-notes', tutor_pro()->url . 'assets/css/dashboard-notes.css', array(), TUTOR_PRO_VERSION );
		}
	}

	/**
	 * Lesson decode unicode sequences.
	 *
	 * @param array $lesson_notes Lesson notes to decode.
	 *
	 * @return array Decoded lesson notes.
	 */
	public function lesson_decode_unicode_sequences( $lesson_notes ) {
		foreach ( $lesson_notes as $note ) {
			$note->highlight_text = tutor_decode_unicode_sequences( $note->highlight_text );
			if ( 'highlight' === $note->type && ! empty( $note->highlight_serialized['text'] ) ) {
				$note->highlight_serialized['text'] = tutor_decode_unicode_sequences( $note->highlight_serialized['text'] );
			}
		}
		return $lesson_notes;
	}

	/**
	 * Add Lesson Notes Nav Item
	 *
	 * @since 3.9.0
	 *
	 * @param array $nav_items Nav Items.
	 *
	 * @return array
	 */
	public function filter_lesson_single_nav_item( $nav_items ) {
		if ( ! self::is_notes_tab_available() ) {
			return $nav_items;
		}

		if ( $this->is_legacy_learning_mode ) {
			$notes_tab = array(
				'label'     => esc_html__( 'Notes', 'tutor-pro' ),
				'value'     => 'notes',
				'icon'      => Icon::CALENDAR_LINES,
				'icon_type' => 'svg',
				'template'  => 'lesson-notes.tab-content',
				'is_pro'    => true,
			);

			$new_nav_items = array();
			$inserted      = false;

			foreach ( $nav_items as $key => $item ) {
				// Insert before comments tab if it exists.
				if ( isset( $item['value'] ) && 'comments' === $item['value'] && ! $inserted ) {
					$new_nav_items['notes'] = $notes_tab;
					$inserted               = true;
				}

				$new_nav_items[ $key ] = $item;
			}

			// If 'comments' wasn't found, append at the end.
			if ( ! $inserted ) {
				$new_nav_items['notes'] = $notes_tab;
			}
		} else {
			$notes_tab = array(
				'id'       => 'notes',
				'label'    => esc_html__( 'Notes', 'tutor-pro' ),
				'icon'     => Icon::NOTES,
				'template' => 'lesson-notes.learning-area.tab-content',
				'is_pro'   => true,
			);

			$new_nav_items = array();
			$inserted      = false;

			foreach ( $nav_items as $key => $item ) {
				// Insert before comments tab if it exists.
				if ( isset( $item['id'] ) && 'comments' === $item['id'] && ! $inserted ) {
					$new_nav_items['notes'] = $notes_tab;
					$inserted               = true;
				}

				$new_nav_items[ $key ] = $item;
			}

			// If 'comments' wasn't found, append at the end.
			if ( ! $inserted ) {
				$new_nav_items['notes'] = $notes_tab;
			}
		}

		return $new_nav_items;
	}

	/**
	 * Load Lesson Notes Nav Button
	 *
	 * @since 3.9.0
	 *
	 * @param int    $lesson_id Lesson ID.
	 * @param string $active_tab Active Page Tab.
	 */
	public function load_lesson_notes_nav_button( $lesson_id, $active_tab ) {
		if ( ! self::is_notes_tab_available() ) {
			return;
		}

		if ( $this->is_legacy_learning_mode ) {
			?>
			<button id="tutor-lesson-nav-take-note-btn" class="tutor-btn tutor-btn-sm <?php echo esc_attr( ( 'notes' === $active_tab ) ? 'tutor-d-none' : '' ); ?>">
				<?php SvgIcon::make()->name( Icon::FEATHER )->size( 20 )->render(); ?>
				<?php esc_html_e( 'Take Note', 'tutor-pro' ); ?>
			</button>
			<?php
		} else {
			?>
			<button id="tutor-lesson-nav-take-note-btn" class="tutor-btn tutor-btn-x-small tutor-btn-ghost-brand <?php echo esc_attr( ( 'notes' === $active_tab ) ? 'tutor-d-none' : '' ); ?>">
				<?php SvgIcon::make()->name( Icon::QUILL )->render(); ?>
				<span class="tutor-sm-hidden">
					<?php esc_html_e( 'Take Note', 'tutor-pro' ); ?>
				</span>
			</button>
			<?php
		}
	}

	/**
	 * Save Lesson Note
	 *
	 * @since 3.9.0
	 */
	public function ajax_save_lesson_note() {
		tutor_utils()->check_nonce();

		$current_user         = wp_get_current_user();
		$lesson_id            = Input::post( 'lesson_id', 0, Input::TYPE_INT );
		$note_text            = Input::post( 'note_text', '', Input::TYPE_TEXTAREA );
		$highlight_text       = Input::post( 'highlight_text', '', Input::TYPE_KSES_POST );
		$highlight_serialized = Input::post( 'highlight_serialized', '', Input::TYPE_KSES_POST );
		$video_start          = Input::post( 'video_start_time', '' );
		$video_end            = Input::post( 'video_end_time', '' );

		if ( empty( $lesson_id ) || empty( $note_text ) ) {
			$this->response_bad_request( __( 'Invalid lesson or note text', 'tutor-pro' ) );
		}

		$lesson = get_post( $lesson_id );
		if ( ! $lesson || tutor()->lesson_post_type !== $lesson->post_type ) {
			$this->response_bad_request( __( 'Lesson not found', 'tutor-pro' ) );
		}

		if ( ! tutor_utils()->has_enrolled_content_access( 'lesson', $lesson_id ) ) {
			$this->json_response( __( 'You do not have access to this lesson', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		$comment_data = array(
			'comment_post_ID'      => $lesson_id,
			'comment_content'      => $note_text,
			'comment_type'         => self::COMMENT_TYPE,
			'comment_agent'        => 'TutorLMSPlugin',
			'comment_approved'     => 1,
			'user_id'              => $current_user->ID,
			'comment_author'       => $current_user->user_login,
			'comment_author_email' => $current_user->user_email,
			'comment_author_url'   => $current_user->user_url,
		);

		$comment_id = wp_insert_comment( $comment_data );
		if ( is_wp_error( $comment_id ) ) {
			$this->json_response( __( 'Failed to save note', 'tutor-pro' ), null, HttpHelper::STATUS_INTERNAL_SERVER_ERROR );
		}

		$note_type = self::TYPE_REGULAR;
		if ( $highlight_serialized ) {
			$note_type = self::TYPE_HIGHLIGHT;
		}
		if ( self::has_video_time( $video_start ) ) {
			$note_type = self::TYPE_VIDEO;
		}

		// Save meta data.
		$note_meta = array();

		if ( self::TYPE_HIGHLIGHT === $note_type ) {
			$note_meta = array(
				'type'       => $note_type,
				'text'       => $highlight_text,
				'serialized' => json_decode( $highlight_serialized ),
			);
		}

		if ( self::TYPE_VIDEO === $note_type ) {
			$note_meta = array(
				'type'        => $note_type,
				'video_start' => $video_start,
				'video_end'   => $video_end,
			);
		}

		if ( ! empty( $note_meta ) ) {
			update_comment_meta( $comment_id, self::NOTE_META_KEY, wp_json_encode( $note_meta ) );
		}

		$html = '';

		if ( ! $this->is_legacy_learning_mode ) {
			$note = $this->get_single_lesson_note( $comment_id );

			ob_start();
			tutor_load_template(
				'lesson-notes.learning-area.note-card',
				array(
					'note' => $note,
				),
				true
			);
			$html = ob_get_clean();
		}

		$data = array(
			'comment_ID'           => $comment_id,
			'comment_post_ID'      => $lesson_id,
			'comment_content'      => $note_text,
			'highlight_text'       => $highlight_text,
			'highlight_serialized' => $highlight_serialized,
			'video_start_time'     => $video_start,
			'video_end_time'       => $video_end,
			'html'                 => $html,
		);

		$this->json_response( __( 'Note saved successfully', 'tutor-pro' ), $data );
	}

	/**
	 * Update Lesson Note
	 *
	 * @since 3.9.0
	 */
	public function ajax_update_lesson_note() {
		tutor_utils()->check_nonce();

		$note_id   = Input::post( 'note_id', 0, Input::TYPE_INT );
		$note_text = Input::post( 'note_text', '', Input::TYPE_TEXTAREA );

		if ( empty( $note_id ) || empty( $note_text ) ) {
			$this->response_bad_request( __( 'Invalid comment or note text', 'tutor-pro' ) );
		}

		$comment = get_comment( $note_id );
		if ( ! $comment || get_current_user_id() !== (int) $comment->user_id ) {
			$this->json_response( __( 'You are not authorized to update this note', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		$updated = wp_update_comment(
			array(
				'comment_ID'      => $note_id,
				'comment_content' => $note_text,
			)
		);

		if ( is_wp_error( $updated ) ) {
			$this->json_response( __( 'Failed to update note', 'tutor-pro' ), null, HttpHelper::STATUS_INTERNAL_SERVER_ERROR );
		}

		$this->json_response( __( 'Note updated successfully', 'tutor-pro' ), array( 'note_id' => $note_id ) );
	}

	/**
	 * Delete Lesson Note
	 *
	 * @since 3.9.0
	 */
	public function ajax_delete_lesson_note() {
		tutor_utils()->check_nonce();

		$note_id = Input::post( 'note_id', 0, Input::TYPE_INT );

		if ( empty( $note_id ) ) {
			$this->response_bad_request( __( 'Invalid comment', 'tutor-pro' ) );
		}

		$comment = get_comment( $note_id );
		if ( ! $comment || self::COMMENT_TYPE !== $comment->comment_type ) {
			$this->json_response( __( 'Note not found', 'tutor-pro' ), null, HttpHelper::STATUS_NOT_FOUND );
		}

		if ( get_current_user_id() !== (int) $comment->user_id ) {
			$this->json_response( __( 'You are not authorized to delete this note', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		$deleted = wp_delete_comment( $note_id, true );

		if ( ! $deleted ) {
			$this->json_response( __( 'Failed to delete note', 'tutor-pro' ), null, HttpHelper::STATUS_INTERNAL_SERVER_ERROR );
		}

		$this->json_response( __( 'Note deleted successfully', 'tutor-pro' ), array( 'note_id' => $note_id ) );
	}

	/**
	 * Get Lesson Notes HTML
	 *
	 * @since 3.9.0
	 */
	public function ajax_get_lesson_notes_html() {
		tutor_utils()->check_nonce();

		$lesson_id = Input::post( 'lesson_id', 0, Input::TYPE_INT );

		if ( empty( $lesson_id ) ) {
			$this->response_bad_request( __( 'Invalid lesson', 'tutor-pro' ) );
		}

		if ( ! tutor_utils()->has_enrolled_content_access( 'lesson', $lesson_id ) ) {
			$this->json_response( __( 'You do not have access to this lesson', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		ob_start();
		tutor_load_template(
			'lesson-notes/note-list',
			array(
				'lesson_id' => $lesson_id,
			),
			true
		);
		$html = ob_get_clean();

		$this->json_response( __( 'Notes fetched successfully', 'tutor-pro' ), array( 'html' => $html ) );
	}

	/**
	 * Get Single Lesson Note HTML
	 *
	 * @since 3.9.0
	 */
	public function ajax_get_single_lesson_note_html() {
		tutor_utils()->check_nonce();

		$lesson_id = Input::post( 'lesson_id', 0, Input::TYPE_INT );
		$note_id   = Input::post( 'note_id', 0, Input::TYPE_INT );
		if ( empty( $lesson_id ) || empty( $note_id ) ) {
			$this->response_bad_request( __( 'Invalid lesson or comment', 'tutor-pro' ) );
		}

		if ( ! tutor_utils()->has_enrolled_content_access( 'lesson', $lesson_id ) ) {
			$this->json_response( __( 'You do not have access to this lesson', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		$note = $this->get_single_lesson_note( $note_id );
		if ( ! $note ) {
			$this->json_response( __( 'Note not found', 'tutor-pro' ), null, HttpHelper::STATUS_NOT_FOUND );
		}

		ob_start();
		tutor_load_template(
			'lesson-notes/note-item',
			array(
				'lesson_id' => $lesson_id,
				'note'      => $note,
			),
			true
		);
		$html = ob_get_clean();
		$this->json_response( __( 'Note fetched successfully', 'tutor-pro' ), array( 'html' => $html ) );
	}

	/**
	 * Lesson Notes Load More
	 *
	 * @since 3.9.0
	 */
	public function ajax_lesson_notes_load_more() {
		tutor_utils()->check_nonce();

		$lesson_id = Input::post( 'lesson_id', 0, Input::TYPE_INT );
		$offset    = Input::post( 'offset', 0, Input::TYPE_INT );
		$order     = QueryHelper::get_valid_sort_order( Input::post( 'order', 'DESC' ) );
		$type      = Input::post( 'type', '' );

		if ( empty( $lesson_id ) ) {
			$this->response_bad_request( __( 'Invalid lesson', 'tutor-pro' ) );
		}

		if ( ! tutor_utils()->has_enrolled_content_access( 'lesson', $lesson_id ) ) {
			$this->json_response( __( 'You do not have access to this lesson', 'tutor-pro' ), null, HttpHelper::STATUS_FORBIDDEN );
		}

		$items_per_page = tutor_utils()->get_option( 'pagination_per_page', 10 );

		$note_list = $this->get_lesson_notes( $lesson_id, get_current_user_id(), $offset, $items_per_page, $order, $type );

		$total_notes    = $this->get_lesson_notes_count( $lesson_id, get_current_user_id() );
		$filtered_total = $this->get_lesson_notes_count( $lesson_id, get_current_user_id(), $type );
		$has_more       = $filtered_total > ( $offset + count( $note_list ) );

		$note_card_template = 'lesson-notes.note-item';

		if ( ! $this->is_legacy_learning_mode ) {
			$note_card_template = 'lesson-notes.learning-area.note-card';
		}

		ob_start();
		foreach ( $note_list as $note ) {
			tutor_load_template(
				$note_card_template,
				array(
					'lesson_id' => $lesson_id,
					'note'      => $note,
				),
				true
			);
		}
		$html = ob_get_clean();
		$this->json_response(
			__( 'Notes fetched successfully', 'tutor-pro' ),
			array(
				'html'        => $html,
				'notes_count' => count( $note_list ),
				'total_notes' => $total_notes,
				'has_more'    => $has_more,
			)
		);
	}

	/**
	 * Get Lesson Notes
	 *
	 * @since 3.9.0
	 *
	 * @param int    $lesson_id     Lesson ID.
	 * @param int    $user_id       User ID.
	 * @param int    $offset        Offset.
	 * @param int    $item_per_page Items Per Page.
	 * @param string $order         Order.
	 * @param string $type          Note type.
	 */
	public function get_lesson_notes( $lesson_id, $user_id, $offset = 0, $item_per_page = 20, $order = 'DESC', $type = '' ) {
		if ( ! $lesson_id || ! $user_id ) {
			return array();
		}

		$paged = $offset > 0 ? (int) floor( $offset / $item_per_page ) + 1 : 1;

		$args = array(
			'post_id' => $lesson_id,
			'user_id' => $user_id,
			'type'    => self::COMMENT_TYPE,
			'status'  => 'approve',
			'number'  => $item_per_page,
			'offset'  => $offset,
			'paged'   => $paged,
			'order'   => $order,
		);

		if ( 'video-note' === $type ) {
			$args['meta_query'] = array(
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'LIKE',
				),
			);
		} elseif ( 'note' === $type ) {
			$args['meta_query'] = array(
				'relation' => 'OR',
				array(
					'key'     => self::NOTE_META_KEY,
					'compare' => 'NOT EXISTS',
				),
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'NOT LIKE',
				),
			);
		}

		$comments = get_comments( $args );

		return array_map( array( $this, 'add_note_meta_to_comment' ), $comments );
	}

	/**
	 * Get Single Lesson Note
	 *
	 * @since 3.9.0
	 *
	 * @param int $note_id Note ID.
	 *
	 * @return object|null Comment object or null if not found.
	 */
	public function get_single_lesson_note( $note_id ) {
		$comment = get_comment( $note_id );
		if ( ! $comment || self::COMMENT_TYPE !== $comment->comment_type ) {
			return null;
		}
		return self::add_note_meta_to_comment( $comment );
	}

	/**
	 * Add note meta to comment
	 *
	 * @since 3.9.0
	 *
	 * @param object $comment Note comment.
	 *
	 * @return object The note.
	 */
	private static function add_note_meta_to_comment( $comment ) {
		$highlight_data_json = get_comment_meta( $comment->comment_ID, self::NOTE_META_KEY, true );

		if ( ! empty( $highlight_data_json ) ) {
			$highlight_data = json_decode( $highlight_data_json, true );

			if ( is_array( $highlight_data ) ) {
				$comment->type                 = $highlight_data['type'] ?? '';
				$comment->highlight_text       = $highlight_data['text'] ?? '';
				$comment->highlight_serialized = $highlight_data['serialized'] ?? '';
				$comment->video_start_time     = $highlight_data['video_start'] ?? '';
				$comment->video_end_time       = $highlight_data['video_end'] ?? '';
			}
		}

		return $comment;
	}

	/**
	 * Get Lesson Notes Count
	 *
	 * @since 3.9.0
	 *
	 * @param int    $lesson_id Lesson ID.
	 * @param int    $user_id   User ID.
	 * @param string $type      Note type.
	 *
	 * @return int Number of notes taken for a lesson by a user.
	 */
	public function get_lesson_notes_count( $lesson_id, $user_id, $type = '' ) {
		$args = array(
			'post_id' => $lesson_id,
			'user_id' => $user_id,
			'type'    => self::COMMENT_TYPE,
			'status'  => 'approve',
			'count'   => true,
		);

		if ( 'video-note' === $type ) {
			$args['meta_query'] = array(
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'LIKE',
				),
			);
		} elseif ( 'note' === $type ) {
			$args['meta_query'] = array(
				'relation' => 'OR',
				array(
					'key'     => self::NOTE_META_KEY,
					'compare' => 'NOT EXISTS',
				),
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'NOT LIKE',
				),
			);
		}

		return get_comments( $args );
	}

	/**
	 * Get learning-area filter options for lesson notes.
	 *
	 * @since 4.0.0
	 *
	 * @param int $lesson_id Lesson ID.
	 * @param int $user_id   User ID.
	 *
	 * @return array Filter options.
	 */
	public function get_learning_area_filter_options( $lesson_id, $user_id ) {
		$note_count = $this->get_lesson_notes_count( $lesson_id, $user_id );

		return array(
			array(
				'label' => __( 'All', 'tutor-pro' ),
				'value' => '',
				'count' => $note_count,
			),
			array(
				'label' => __( 'Notes', 'tutor-pro' ),
				'value' => 'note',
				'count' => $this->get_lesson_notes_count( $lesson_id, $user_id, 'note' ),
			),
			array(
				'label' => __( 'Video Notes', 'tutor-pro' ),
				'value' => 'video-note',
				'count' => $this->get_lesson_notes_count( $lesson_id, $user_id, 'video-note' ),
			),
		);
	}

	/**
	 * Check if video time is valid
	 *
	 * @since 3.9.0
	 *
	 * @param string|null $time Video time.
	 *
	 * @return bool True if time is valid, false otherwise.
	 */
	public static function has_video_time( $time ) {
		return null !== $time && '' !== $time;
	}

	/**
	 * Check if notes tab is available for current user
	 *
	 * @since 3.9.0
	 *
	 * @return bool True if notes tab is available, false otherwise.
	 */
	public static function is_notes_tab_available() {
		$is_user_logged_in = is_user_logged_in();

		if ( ! $is_user_logged_in ) {
			return false;
		}

		$user_id                     = get_current_user_id();
		$lesson_id                   = get_the_ID();
		$course_id                   = tutor_utils()->get_course_id_by_lesson( $lesson_id );
		$is_public_course            = 'yes' === get_post_meta( $course_id, '_tutor_is_public_course', true );
		$has_enrolled_content_access = tutor_utils()->has_enrolled_content_access( 'lesson', $lesson_id, $user_id );

		return $is_public_course || $has_enrolled_content_access;
	}

	/**
	 * Register notes menu item in dashboard navigation
	 *
	 * @since 4.0.0
	 *
	 * @param array $nav_items existing navigation items.
	 *
	 * @return array modified navigation items with calendar menu added.
	 */
	public function register_dashboard_menu( $nav_items ) {
		$new_items = array();

		foreach ( $nav_items as $key => $item ) {
			$new_items[ $key ] = $item;

			// Insert after quiz attempts.
			if ( 'courses' === $key ) {
				$new_items['notes'] = array(
					'title'       => __( 'Notes', 'tutor-pro' ),
					'icon'        => Icon::NOTES,
					'active_icon' => Icon::NOTES_FILL,
				);
			}
		}

		return $new_items;
	}

	/**
	 * Get courses that have notes by user
	 *
	 * @since 4.0.0
	 *
	 * @param int    $user_id User ID.
	 * @param string $type    Note type.
	 * @param string $search  Search term.
	 *
	 * @return array List of courses.
	 */
	public static function get_courses_with_notes_by_user( $user_id, $type = '', $search = '' ) {
		$notes = self::get_dashboard_notes(
			array(
				'user_id' => $user_id,
				'limit'   => -1,
				'type'    => $type,
				'search'  => $search,
			)
		);

		if ( empty( $notes ) ) {
			return array();
		}

		$course_ids = array();
		foreach ( $notes as $note ) {
			$course_id = tutor_utils()->get_course_id_by_lesson( $note->comment_post_ID );
			if ( $course_id ) {
				$course_ids[] = $course_id;
			}
		}

		if ( empty( $course_ids ) ) {
			return array();
		}

		$course_ids = array_unique( $course_ids );

		$courses = get_posts(
			array(
				'post_type'   => tutor()->course_post_type,
				'post__in'    => $course_ids,
				'numberposts' => -1,
				'orderby'     => 'post_title',
				'order'       => 'ASC',
			)
		);

		return $courses;
	}

	/**
	 * Get Dashboard Notes
	 *
	 * @since 4.0.0
	 *
	 * @param array $args {
	 *     Optional. Array of query arguments.
	 *
	 *     @type int    $user_id   User ID. Required.
	 *     @type int    $offset    Offset for pagination. Default 0.
	 *     @type int    $limit     Number of notes to retrieve. Default 10. Set to -1 for all.
	 *     @type string $type      Note type filter. Accepts 'notes', 'video-notes', or empty for all. Default ''.
	 *     @type string $search    Search term. Default ''.
	 *     @type int    $course_id Course ID to filter by. Default 0.
	 *     @type string $order     Order direction. Accepts 'ASC' or 'DESC'. Default 'DESC'.
	 *     @type bool   $count     Whether to return count only. Default false.
	 * }
	 *
	 * @return array|int List of notes or count if $args['count'] is true.
	 */
	public static function get_dashboard_notes( $args = array() ) {
		$defaults = array(
			'user_id'   => tutor_utils()->get_user_id(),
			'offset'    => 0,
			'limit'     => 10,
			'type'      => '',
			'search'    => '',
			'course_id' => 0,
			'order'     => 'DESC',
			'count'     => false,
		);

		$args = wp_parse_args( $args, $defaults );

		$query_args = array(
			'user_id' => (int) $args['user_id'],
			'type'    => self::COMMENT_TYPE,
			'status'  => 'approve',
			'order'   => 'ASC' === $args['order'] ? 'ASC' : 'DESC',
		);

		if ( $args['count'] ) {
			$query_args['count'] = true;
		} else {
			$query_args['number'] = -1 === $args['limit'] ? '' : (int) $args['limit'];
			$query_args['offset'] = (int) $args['offset'];
		}

		// Filter by note type.
		if ( self::PARAM_VIDEO_NOTES === $args['type'] ) {
			$query_args['meta_query'] = array(
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'LIKE',
				),
			);
		} elseif ( self::PARAM_NOTES === $args['type'] ) {
			$query_args['meta_query'] = array(
				'relation' => 'OR',
				array(
					'key'     => self::NOTE_META_KEY,
					'compare' => 'NOT EXISTS',
				),
				array(
					'key'     => self::NOTE_META_KEY,
					'value'   => '"type":"' . self::TYPE_VIDEO . '"',
					'compare' => 'NOT LIKE',
				),
			);
		}

		// Filter by search term.
		if ( ! empty( $args['search'] ) ) {
			$query_args['search'] = Input::sanitize( $args['search'] );
		}

		// Filter by course.
		if ( ! empty( $args['course_id'] ) ) {
			$lesson_ids = tutor_utils()->get_course_content_ids_by(
				tutor()->lesson_post_type,
				tutor()->course_post_type,
				(int) $args['course_id']
			);

			if ( ! empty( $lesson_ids ) ) {
				$query_args['post__in'] = $lesson_ids;
			} else {
				return $args['count'] ? 0 : array();
			}
		}

		$result = get_comments( $query_args );

		// Return count or mapped results.
		if ( $args['count'] ) {
			return $result;
		}

		return array_map( array( __CLASS__, 'add_note_meta_to_comment' ), $result );
	}

	/**
	 * Load notes template for dashboard
	 *
	 * @since 4.0.0
	 *
	 * @param string $template current template path.
	 *
	 * @return string template path for notes or original template.
	 */
	public function load_dashboard_template( $template ) {
		global $wp_query;
		$query_vars = $wp_query->query_vars;
		if ( isset( $query_vars['tutor_dashboard_page'] ) && 'notes' === $query_vars['tutor_dashboard_page'] ) {
			$dashboard_template = tutor_pro()->path . 'templates/lesson-notes/dashboard/notes.php';
			if ( file_exists( $dashboard_template ) ) {
				return $dashboard_template;
			}
		}
		return $template;
	}
}
