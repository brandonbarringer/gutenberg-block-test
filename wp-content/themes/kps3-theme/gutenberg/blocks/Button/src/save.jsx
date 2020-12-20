const { RichText } = wp.blockEditor;

export default function save(props) {
  const { attributes } = props;
  const { text, href, target, color } = attributes;
  return (
      <a class="button">
        <RichText.Content
          tagName="span"
          value={ text }
        />
      </a>
  );
}
