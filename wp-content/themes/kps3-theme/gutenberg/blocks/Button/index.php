<?php

function create_button_block() {
  $dir = get_stylesheet_directory_uri() . '/gutenberg/blocks/button';
  $dist_path = $dir . '/dist/';

  /*
   * @TODO
   * Figure out how to create auto dependencies based on imports
  */
  $script = $dist_path . 'index.js';
  wp_register_script(
    'kps3_button',
    $script,
    ['wp-block-editor', 'wp-components', 'wp-element'],
    1
  );

  $editor_style = $dist_path . 'css/editor.css';
  wp_register_style(
    'kps3_button_editor',
    $editor_style,
    [],
    1
  );

  $style = $dist_path . 'css/style.css';
  wp_register_style(
    'kps3_button_style',
    $style,
    [],
    1
  );

  register_block_type('kps3/button', [
    'editor_script' => 'kps3_button',
    'editor_style'  => 'kps3_button_editor',
    'style'         => 'kps3_button_style'
  ]);
}
