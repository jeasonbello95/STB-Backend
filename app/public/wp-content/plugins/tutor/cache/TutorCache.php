<?php
namespace Tutor\Cache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Tutor Cache Manager
 */
class TutorCache {

	public static function get( $key, $default = false ) {
		$cached = wp_cache_get( $key, 'tutor_cache' );
		return false !== $cached ? $cached : $default;
	}

	public static function set( $key, $data, $expire = 0 ) {
		return wp_cache_set( $key, $data, 'tutor_cache', $expire );
	}

	public static function delete( $key ) {
		return wp_cache_delete( $key, 'tutor_cache' );
	}
}
