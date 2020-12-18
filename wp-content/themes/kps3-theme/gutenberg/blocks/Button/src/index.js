// Wordpress
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

// Includes
import edit from './edit.jsx';
import save from './save.jsx';
import attributes from './attributes';
import supports from './supports';

// Assets
import style from './scss/index.scss';
import beard from './images/beard.png';

// Components
// import Image from 'blocks/Image';

registerBlockType('kps3/Button', {
    title: __( 'Button', 'kps3' ),
    description: __('A Fancy Button', 'kps3'),
    category: 'text',
    icon: 'editor-button',
    attributes,
    supports,
    edit,
    save,
});
