<?php

add_action('after_setup_theme', function() {
  add_theme_support( 'post-thumbnails' );
  add_theme_support('editor-color-palette', [
    [
      'name' => __( 'strong magenta', 'kps3' ),
      'slug' => 'strong-magenta',
      'color' => '#a156b4',
    ],
    [
      'name' => __( 'very dark gray', 'kps3' ),
      'slug' => 'very-dark-gray',
      'color' => '#444',
    ],
  ]);
  add_theme_support( 'wp-block-styles' );
  add_theme_support( 'align-wide' );
});

require_once( get_template_directory() . '/gutenberg/blocks/Button/index.php' );
add_action('init', 'create_button_block');
