const { registerBlockType } = wp.blocks;

registerBlockType('kps3/kps3', {
  title: 'kps3',
  category: 'text',
  icon: 'smiley',
  edit: () => {
    return <div>:)</div>
  },
  save: () => {
    return <div>:)</div>
  }
});
