<?php
/**
 * Order Filters
 *
 * @package TutorPro\Subscription
 * @subpackage Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\DateFilter;
use Tutor\Components\DropdownFilter;
use Tutor\Components\Sorting;
use TUTOR\Input;

$filter_options = array_map(
	function ( $item ) {
		return array(
			'label' => $item['title'],
			'value' => $item['key'],
			'count' => $item['value'],
		);
	},
	$controller->tabs_key_value()
);

foreach ( $filter_options as $index => $item ) {
	if ( 'trash' === $item['value'] ) {
		unset( $filter_options[ $index ] );
		break;
	}
}
?>
	<?php
	DropdownFilter::make()
		->options( $filter_options )
		->query_param( 'data' )
		->render();
	?>
	<div>
		<div class="tutor-flex tutor-items-center tutor-gap-3">
			<?php
			$query_params = array( 'data', 'order', 'start_date', 'end_date' );
			if ( Input::has_any( $query_params, Input::GET_REQUEST ) ) {
				Button::make()->tag( 'a' )
					->attr( 'href', $page_link )
					->attr( 'class', 'tutor-text-brand' )
					->variant( Variant::LINK )
					->label( __( 'Clear all', 'tutor-pro' ) )
					->render();
			}

			DateFilter::make()
				->type( DateFilter::TYPE_RANGE )
				->placement( DateFilter::PLACEMENT_BOTTOM_END )
				->trigger_size( Size::X_SMALL )
				->hide_initial_label()
				->render();

			Sorting::make()->order( $order_filter )->render();
			?>
		</div>
	</div>
