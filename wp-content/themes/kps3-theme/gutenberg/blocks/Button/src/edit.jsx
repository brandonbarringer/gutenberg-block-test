const { RichText, useBlockProps, InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ColorPicker, TextControl, SelectControl } = wp.components;

export default function edit(props) {
    const { attributes, setAttributes } = props;
    const { text, href, target, color } = attributes;

    return (
      <a class="button">
        <InspectorControls>
          <PanelBody title="Button Settings" initialOpen={ true }>
            <PanelRow>
              <ColorPicker
                color={ color }
                onChangeComplete={ (value) => setAttributes({ color: value.hex }) }
                disableAlpha
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                label="Button URL"
                value={ href }
                onChange={ ( value ) => setAttributes({ href: value }) }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Link Target"
                value={ target }
                options={[
                  {label: "Same Window", value: '_self'},
                  {label: "New Tab", value: '_blank'},
                ]}
                onChange={ (value) => setAttributes({ target: value }) }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <RichText
          tagName="span"
          placeholder={ text.default }
          KeepPlaceholderOnFocus={ false }
          value={ text }
          onChange={ (value) => setAttributes({ text: value }) }
        />
      </a>
    );
}
