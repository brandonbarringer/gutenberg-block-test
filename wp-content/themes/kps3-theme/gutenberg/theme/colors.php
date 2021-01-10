<?php

function color_setup() {
  // Disable Custom Colors
  add_theme_support('disable-custom-colors');

  // Editor Color Palette
  add_theme_support('editor-color-palette', [
    [
      'name'  => 'Blue',
      'slug'  => 'blue',
      'color' => '#59BACC',
    ],
    [
      'name'  => 'Green',
      'slug'  => 'green',
      'color' => '#58AD69',
    ],
    [
      'name'  => 'Orange',
      'slug'  => 'orange',
      'color' => '#FFBC49',
    ],
    [
      'name'  => 'Red',
      'slug'  => 'red',
      'color' => '#E2574C',
    ],
    [
      'name'  => 'White',
      'slug'  => 'white',
      'color' => '#FFFFFF',
    ],
    [
      'name'  => 'Black',
      'slug'  => 'black',
      'color' => '#000000',
    ],
  ]);
}
