<?php

require_once( get_template_directory() . '/gutenberg/blocks/Button/index.php' );
require_once( get_template_directory() . '/gutenberg/theme/colors.php' );

add_action( 'init', 'create_button_block' );
add_action( 'after_setup_theme', 'color_setup' );

// Remove Gutenberg defaults

/*
 * @TODO
 * Figure out how to remove wp defualt blocks styles in admin
*/

add_action( 'wp_enqueue_scripts', function() {
  wp_dequeue_style( 'wp-block-library' );
  wp_dequeue_style( 'wp-block-library-theme' );
}, 100);

add_filter( 'allowed_block_types', function($allowed_blocks) {
  return ['kps3/button'];
});
