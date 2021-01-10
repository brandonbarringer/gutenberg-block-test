// Includes
import _Edit from './edit.jsx';
import save from './save.jsx';
import attributes from './attributes.js';
import supports from './supports.js';

/*
 * Mostly Created From a Tutorial
 * @see https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-block-part-1-development-environment/
*/

// Assets
// import beard from './images/beard.png';

const { registerBlockType } = wp.blocks;

// Components
// import Image from 'blocks/Image';

registerBlockType('kps3/button', {
    title: 'Kps3 Button',
    description: 'A Fancy Button',
    category: 'widgets',
    icon: 'smiley',
    attributes,
    supports,
    edit: _Edit ,
    save,
});
