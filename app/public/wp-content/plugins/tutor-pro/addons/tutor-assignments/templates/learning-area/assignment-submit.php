<?php
/**
 * Tutor learning area assignment submission page.
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\FileUploader;
use Tutor\Components\Modal;
use Tutor\Components\WPEditor;
use TUTOR\Input;

$modal_id              = 'assignment-confirm-submission-modal';
$back_url              = get_permalink( $assignment_id );
$assignment_comment_id = Input::get( 'id', 0, Input::TYPE_INT );
$assignment_title      = get_the_title( $assignment_id );

if ( ! $assignment_comment_id ) {
	$assignment_comment_id = $is_updating; // Assignment comment id from upper level.
}

$attached_files = get_comment_meta( $assignment_comment_id, 'uploaded_attachments', true ) ?? '';

if ( $attached_files ) {
	$attached_files = json_decode( $attached_files, true );
	foreach ( $attached_files as $key => $file ) {
		$upload_dir             = wp_get_upload_dir();
		$file_path              = trailingslashit( $upload_dir['basedir'] ) . $file['uploaded_path'];
		$file['size']           = filesize( $file_path );
		$attached_files[ $key ] = (object) $file;
	}
}

$file_count_limit          = (int) tutor_utils()->get_assignment_option( $assignment_id, 'upload_files_limit' );
$file_size_limit           = (int) tutor_utils()->get_assignment_option( $assignment_id, 'upload_file_size_limit' );
$file_size_limit          *= ( 1 << 20 ); // convert to bytes.
$file_uploader_config      = array(
	'multiple'    => true,
	'accept'      => '.pdf,.doc,.docx,.jpg,.jpeg,.png',
	'icon'        => Icon::FILE_ATTACHEMENT,
	'title'       => __( 'Drop files here or click to upload', 'tutor-pro' ),
	'subtitle'    => sprintf(
			/* translators: %1$d: Max file count, %2$s: Max file size */
		_n(
			'PDF, DOC, DOCX, JPG, PNG Formats (Max: %1$d file, Total file size: Max %2$s )',
			'PDF, DOC, DOCX, JPG, PNG Formats (Max: %1$d files, Total file size: Max %2$s )',
			$file_count_limit,
			'tutor-pro'
		),
		$file_count_limit,
		size_format( $file_size_limit )
	),
	'button_text' => __( 'Select Files', 'tutor-pro' ),
);
$content                   = $assignment_comment_id ? get_comment( $assignment_comment_id ) : '';
$args                      = tutor_utils()->text_editor_config();
$args['tinymce']           = array(
	'toolbar1' => 'formatselect,bold,italic,underline,forecolor,bullist,numlist,alignleft,aligncenter,alignright,alignjustify,undo,redo',
);
$args['editor_height']     = '140';
$assignment_submit_form_id = 'tutor-assignment-submit-form';
$assignment_error          = __( 'Assignment answer is required', 'tutor-pro' );
?>
<div class="tutor-mt-4 tutor-pb-7" x-data="<?php printf( "tutorAssignment('%s')", esc_attr( $modal_id ) ); ?>">
	<form 
		x-data='tutorForm({ 
					id: "<?php echo esc_attr( $assignment_submit_form_id ); ?>", 
					mode: "onBlur", 
					shouldFocusError: true,
					defaultValues:{
						"attached_assignment_files" : <?php printf( '%s', wp_json_encode( $attached_files ) ); ?>,
						"assignment_content" : <?php printf( '%s', wp_json_encode( $content->comment_content, JSON_HEX_APOS ) ); ?>
					}
				})'
		id="<?php echo esc_attr( $assignment_submit_form_id ); ?>" 
		x-bind="getFormBindings()"
		@submit="<?php printf( "handleSubmit((data) => handleAssignmentSubmit({ assignment_id: %s, 'update-assignment': %s, ...data}))(\$event)", esc_attr( $assignment_id ), esc_attr( $assignment_comment_id ) ); ?>">
		<div class="tutor-assignment-edit">
			<div class="tutor-assignment-form">
				<div>
					<?php
					$back_btn = Button::make()
						->variant( Variant::SECONDARY )
						->size( Size::SMALL )
						->icon( Icon::ARROW_LEFT_2 )
						->flip_rtl()
						->label( __( 'Back', 'tutor-pro' ) )
						->attr( 'type', 'button' );
					if ( $is_updating ) {
						$back_btn->tag( 'a' )->attr( 'href', esc_url( $back_url ) );
					} else {
						$back_btn->attr(
							'@click',
							sprintf(
								'handleRemoveAssignmentAttempt({ comment_id: %s, assignment_id: %s })',
								esc_attr( $assignment_comment_id ),
								esc_attr( $assignment_id )
							)
						);
					}

					$back_btn->render();
					?>
				</div>
				<div class="tutor-assignment-form-header">
					<div class="tutor-small tutor-text-brand tutor-sm-text-tiny">
						<?php echo esc_html( $assignment_title ); ?>
					</div>

					<h4 class="tutor-h4 tutor-sm-text-medium">
						<?php esc_html_e( 'Submit Assignment', 'tutor-pro' ); ?>
					</h4>
				</div>

				<div class="tutor-assignment-form-content">
				<?php
					WPEditor::make()
						->name( 'assignment_content' )
						->placeholder( __( 'Please share your response with any explanations or relevant information.', 'tutor-pro' ) )
						->content( $content->comment_content ?? '' )
						->editor_config( $args )
						->attr( 'x-bind', "register('assignment_content', { required: '$assignment_error' })" )
						->wrapper_attr( ':class', "errors?.assignment_content?.message ? 'tutor-input-field-error' : ''" )
						->render();
				?>
				</div>

				<div class="tutor-assignment-file-uploader">
					<div class="tutor-medium tutor-sm-text-small">
						<?php esc_html_e( 'Attachments', 'tutor-pro' ); ?>
					</div>
					<?php
					$assignment_status = get_comment( $assignment_comment_id )->comment_approved ?? '';
					FileUploader::make()
						->name( 'attached_assignment_files' )
						->multiple()
						->accept( $file_uploader_config['accept'] )
						->uploader_title( $file_uploader_config['title'] )
						->uploader_subtitle( $file_uploader_config['subtitle'] )
						->uploader_icon( $file_uploader_config['icon'] )
						->max_size( $file_size_limit )
						->max_files( $file_count_limit )
						->attr( 'x-bind', "register('attached_assignment_files')" )
						->attr( 'onFileRemove', sprintf( '(file)=>handleRemoveAssignmentAttachment({assignment_comment_id:%s,file_name:file?.name,status:"%s"})', esc_attr( $assignment_comment_id ), $assignment_status ) )
						->render();
					?>
				</div>
			</div>
		</div>

		<div class="tutor-learning-area-footer">
			<?php
			Button::make()
				->variant( Variant::PRIMARY )
				->size( Size::MEDIUM )
				->label( __( 'Submit Assignment', 'tutor-pro' ) )
				->attr( 'type', 'button' )
				->attr( ':disabled', "!watch('assignment_content')" )
				->attr(
					'@click',
					sprintf(
						"
						const assignmentContent = watch('assignment_content');
						const fileCount = watch('attached_assignment_files');
						TutorCore.modal.showModal('%s',
							{ 
								assignment_content: assignmentContent,
								file_count: fileCount.length
							}
						)",
						esc_attr( $modal_id )
					)
				)
				->render();
			?>
		</div>
	</form>
<?php
Modal::make()
	->id( $modal_id )
	->title( __( 'Confirm Submission', 'tutor-pro' ) )
	->subtitle( __( "Are you sure you want to submit this assignment? You won't be able to make changes after submission.", 'tutor-pro' ) )
	->template(
		__DIR__ . '/confirmation-modal.php',
		array(
			'modal_id'                  => $modal_id,
			'assignment_submit_form_id' => $assignment_submit_form_id,
		)
	)
	->width( '450px' )
	->render();
?>
</div>

