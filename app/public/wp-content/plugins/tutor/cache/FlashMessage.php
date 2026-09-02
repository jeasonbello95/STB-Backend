<?php
namespace Tutor\Cache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Tutor Flash Message
 */
class FlashMessage {

	public $data = array();

	public function set_cache() {
		if ( ! empty( $this->data ) ) {
			set_transient( 'tutor_flash_msg_' . get_current_user_id(), $this->data, 60 );
		}
	}

	public function show() {
		$key = 'tutor_flash_msg_' . get_current_user_id();
		$msg = get_transient( $key );
		if ( $msg && is_array( $msg ) ) {
			delete_transient( $key );
			$alert = isset( $msg['alert'] ) ? esc_attr( $msg['alert'] ) : 'info';
			$css   = isset( $msg['css_class'] ) ? esc_attr( $msg['css_class'] ) : '';
			$text  = isset( $msg['message'] ) ? esc_html( $msg['message'] ) : '';
			echo "<div class='tutor-alert tutor-alert-{$alert} {$css}'><div class='tutor-alert-text'>{$text}</div></div>";
		}
	}
}
