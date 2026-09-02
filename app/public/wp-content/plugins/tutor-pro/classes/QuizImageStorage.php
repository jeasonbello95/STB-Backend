<?php
/**
 * Quiz image file storage helpers (tutor/quiz-images masks, snapshots).
 *
 * Used by quiz builder, attempts, export/import, duplication, and deletion flows.
 *
 * @package TUTOR_PRO
 * @since   4.0.0
 */

namespace TUTOR_PRO;

defined( 'ABSPATH' ) || exit;

/**
 * Class QuizImageStorage
 */
class QuizImageStorage {

	/**
	 * Upload subdirectory for quiz draw/pin/puzzle image files.
	 *
	 * @since 4.0.0
	 */
	const QUIZ_IMAGES_SUBDIR = 'tutor/quiz-images';

	/**
	 * Sanitize a quiz-images filename (basename only).
	 *
	 * Requires draw-mask-/pin-mask-/puzzle- prefix, safe characters, and a single alphanumeric extension.
	 *
	 * @since 4.0.0
	 *
	 * @param string $filename Raw filename.
	 *
	 * @return string Empty string when invalid.
	 */
	public static function sanitize_quiz_image_filename( $filename ) {
		$filename = is_string( $filename ) ? trim( $filename ) : '';
		if ( '' === $filename ) {
			return '';
		}

		$name = wp_basename( str_replace( '\\', '/', $filename ) );
		if ( false !== strpos( $filename, '/' ) || false !== strpos( $filename, '\\' ) ) {
			return '';
		}

		if ( ! preg_match( '/^[a-zA-Z0-9._-]+$/', $name ) ) {
			return '';
		}

		if ( ! preg_match( '/\.[a-zA-Z0-9]{1,20}$/', $name ) ) {
			return '';
		}

		if ( ! preg_match( '/^(?:draw-mask-|pin-mask-|puzzle-)/i', $name ) ) {
			return '';
		}

		return $name;
	}

	/**
	 * Public URL for a file under tutor/quiz-images stored by basename.
	 *
	 * @since 4.0.0
	 *
	 * @param string $filename Sanitized or raw basename.
	 *
	 * @return string
	 */
	public static function quiz_image_filename_to_url( $filename ) {
		$filename = self::sanitize_quiz_image_filename( $filename );
		if ( '' === $filename ) {
			return '';
		}

		$upload_dir = wp_upload_dir();
		if ( ! empty( $upload_dir['error'] ) ) {
			return '';
		}

		return trailingslashit( $upload_dir['baseurl'] ) . self::QUIZ_IMAGES_SUBDIR . '/' . $filename;
	}

	/**
	 * Normalize a path segment relative to the uploads directory (no leading slash, no ..).
	 *
	 * @since 4.0.0
	 *
	 * @param string $path Relative path.
	 *
	 * @return string
	 */
	public static function normalize_uploads_relative_store_value( $path ) {
		$path = is_string( $path ) ? trim( str_replace( '\\', '/', $path ) ) : '';
		if ( '' === $path ) {
			return '';
		}

		$path = ltrim( $path, '/' );
		if ( preg_match( '#(^|/)\.\.(/|$)#', $path ) ) {
			return '';
		}

		if ( ! preg_match( '/^[a-zA-Z0-9._\/-]+$/', $path ) ) {
			return '';
		}

		return $path;
	}

	/**
	 * Resolve a stored mask/path value to a public URL (quiz basename, uploads-relative path, or data URI).
	 *
	 * @since 4.0.0
	 *
	 * @param string $stored Value from DB.
	 *
	 * @return string
	 */
	public static function quiz_image_stored_value_to_url( $stored ) {
		$stored = is_string( $stored ) ? trim( $stored ) : '';
		if ( '' === $stored ) {
			return '';
		}

		if ( 0 === strpos( $stored, 'data:image/' ) && false !== strpos( $stored, ';base64,' ) ) {
			return $stored;
		}

		// Public URL already (e.g. re-saved or passed through expansion); rebuild from basename for consistency.
		if ( preg_match( '#^https?://#i', $stored ) ) {
			$basename_from_url = wp_basename( str_replace( '\\', '/', $stored ) );
			$url_from_basename = self::quiz_image_filename_to_url( $basename_from_url );
			if ( '' !== $url_from_basename ) {
				return $url_from_basename;
			}
		}

		$url = self::quiz_image_filename_to_url( $stored );
		if ( '' !== $url ) {
			return $url;
		}

		$rel = self::normalize_uploads_relative_store_value( $stored );
		if ( '' === $rel ) {
			return '';
		}

		$upload_dir = wp_upload_dir();
		if ( ! empty( $upload_dir['error'] ) ) {
			return '';
		}

		return trailingslashit( $upload_dir['baseurl'] ) . $rel;
	}

	/**
	 * Resolve stored quiz-image or uploads-relative value to a local file path if the file exists.
	 *
	 * @since 4.0.0
	 *
	 * @param string $stored Value from DB.
	 *
	 * @return string Absolute path or empty.
	 */
	public static function quiz_image_stored_value_to_path( $stored ) {
		$stored = is_string( $stored ) ? trim( $stored ) : '';
		if ( '' === $stored ) {
			return '';
		}

		$upload_dir = wp_upload_dir();
		if ( ! empty( $upload_dir['error'] ) ) {
			return '';
		}

		$base_dir = trailingslashit( $upload_dir['basedir'] );
		$name     = self::sanitize_quiz_image_filename( $stored );
		if ( '' !== $name ) {
			$path = $base_dir . self::QUIZ_IMAGES_SUBDIR . '/' . $name;
			return ( is_file( $path ) && is_readable( $path ) ) ? $path : '';
		}

		/*
		 * Basename-only sanitize rejects strings that still contain slashes (e.g. full upload URLs).
		 * `tutor_quiz_question_answers` expands stored basenames to URLs for display/API; grading must
		 * still resolve the same file on disk.
		 */
		$basename_from_url = wp_basename( str_replace( '\\', '/', $stored ) );
		$name_from_url     = self::sanitize_quiz_image_filename( $basename_from_url );
		if ( '' !== $name_from_url ) {
			$path = $base_dir . self::QUIZ_IMAGES_SUBDIR . '/' . $name_from_url;
			return ( is_file( $path ) && is_readable( $path ) ) ? $path : '';
		}

		$base_url = trailingslashit( (string) ( $upload_dir['baseurl'] ?? '' ) );
		if ( '' !== $base_url && 0 === strpos( $stored, $base_url ) ) {
			$tail = ltrim( substr( $stored, strlen( $base_url ) ), '/' );
			$rel  = self::normalize_uploads_relative_store_value( $tail );
			if ( '' !== $rel ) {
				$path = $base_dir . $rel;
				return ( is_file( $path ) && is_readable( $path ) ) ? $path : '';
			}
		}

		$rel = self::normalize_uploads_relative_store_value( $stored );
		if ( '' === $rel ) {
			return '';
		}

		$path = $base_dir . $rel;
		return ( is_file( $path ) && is_readable( $path ) ) ? $path : '';
	}
}
