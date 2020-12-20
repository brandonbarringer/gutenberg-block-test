// Includes
import edit from './edit.jsx';
import save from './save.jsx';
import attributes from './attributes.js';
import supports from './supports.js';

// Assets
// import style from './scss/index.scss';
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
    edit,
    save,
});
