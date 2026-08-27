<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'M=G@o,;R)Y#TJ-iu#{~z@5R1.1n4%UQ#blCcTlN6E#2McIe$S6^stzRzZX@C=7Vg' );
define( 'SECURE_AUTH_KEY',   '#&:$NV+Q8h49IW|JAV7jZ.22HSq*dLjRn,%4qo::fS_[kEx6dV~@r[-/b dhI4{8' );
define( 'LOGGED_IN_KEY',     '/W`uTMW/{6v4:VFQ{/2;KKn=f>C.)>:fm-vE[<>]/L75VE}XSnDy~OL3~D^T$^55' );
define( 'NONCE_KEY',         'Fk})yS]nUo0jZ,qrQMx7_!Ye7EMZ`_X!GWuB]wYtp61im i+7Pno-[x$nOM}7zI+' );
define( 'AUTH_SALT',         'Ie3kvly3Bko,fC`E*ucnt.R[bJ.*=-8w79xSy2L!8zE#s&fa9p<wGx5;G-*YqesG' );
define( 'SECURE_AUTH_SALT',  '2Xn>1PxFZBrLN*P/Z7IOU9$72M!^2aB_!jNTW_fICrg<Qu+qq7o<j)X:*tI3jcrm' );
define( 'LOGGED_IN_SALT',    'U1ZDA~kEckoeXYyq%+~BA*bZFRoljagp_WlIzTwt<TQYBYT!I5DMZ>1R7^si_:uW' );
define( 'NONCE_SALT',        'p?[j6:m uW[Ui&Z}cBMr}HWfpgc u+^+,*)2];=yY#bv]|Ow{My?eS^VLbg=mK&c' );
define( 'WP_CACHE_KEY_SALT', 'sLbs6<cP4xojgv>gLDt)PlM^J{@CX6A{0hP7Cgjn`CpAHKq:YJVcF:CDt2!*BWl(' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
