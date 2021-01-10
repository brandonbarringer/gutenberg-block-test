const { RichText } = wp.blockEditor;

export default function save(props) {
  const { attributes } = props;
  const { text, href, target, color } = attributes;
  const NS = 'button';
  const colorName = `${NS}--${color}`
  const classes = `${NS} ${colorName}`;

  return (
      <div class={ classes }>
        <RichText.Content
          tagName="a"
          className="button__link"
          value={ text }
          href={ href }
          target={ target }
        />
      </div>
  );
}

