<?php
namespace Tutor\Cache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Quiz Attempts Cache
 */
class QuizAttempts {

	public function delete_cache() {
		TutorCache::delete( 'tutor_quiz_attempts' );
	}
}
