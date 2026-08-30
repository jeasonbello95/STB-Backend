<?php
/**
 * Google event API setup frontend credential form template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\FileUploader;
use TUTOR\Icon;

?>

<div class="tutor-p-6 tutor-google-meet-frontend-upload">
	<form 
		id="set-api-upload-form"
		x-data="tutorForm({ 
			id: 'set-api-upload-form', 
		})"
		x-bind="getFormBindings()"
	>
		<?php
		FileUploader::make()
			->name( 'google_meet_credential_upload' )
			->uploader_title( __( 'Drag & Drop your JSON File here, or', 'tutor-pro' ) )
			->accept( '.json' )
			->uploader_icon( Icon::JSON )
			->uploader_icon_size( 40 )
			->uploader_subtitle( '' )
			->variant( '' )
			->attr( 'onFileSelect', 'handleUploadCredentials' )
			->uploader_button_text( __( 'Select Files', 'tutor-pro' ) )
			->render();
		?>
	</form>
</div>