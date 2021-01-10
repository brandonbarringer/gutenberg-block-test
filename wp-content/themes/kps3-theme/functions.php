<?php

require_once( get_template_directory() . '/gutenberg/blocks/Button/index.php' );
require_once( get_template_directory() . '/gutenberg/theme/colors.php' );

add_action( 'init', 'create_button_block' );
add_action( 'after_setup_theme', 'color_setup' );
