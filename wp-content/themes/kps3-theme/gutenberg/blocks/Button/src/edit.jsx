const {
  RichText,
  useBlockProps,
  InspectorControls,
  BlockControls
} = wp.blockEditor;

const {
  PanelBody,
  PanelRow,
  ColorPicker,
  TextControl,
  SelectControl,
  ToolbarButton,
  Toolbar,
  Placeholder,
  Disabled
} = wp.components;

const { Component, Fragment } = wp.element;

export default class _Edit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editMode: true
    }
  }

  getBlockControls() {
    const { setAttributes } = this.props;
    return (
      <BlockControls>
        <Toolbar label="Edit">
          <ToolbarButton
            label={ this.state.editMode ? "Preview" : "Edit" }
            icon={ this.state.editMode ? "format-image" : "edit" }
            onClick={() => this.setState({ editMode: !this.state.editMode })}
          />
        </Toolbar>
      </BlockControls>
    );
  }

  getInspectorControls() {
    const { attributes, setAttributes } = this.props;
    const { href, target, color } = attributes;

    return (
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
                { label: "Same Window", value: '_self' },
                { label: "New Tab", value: '_blank' },
              ]}
              onChange={ (value) => setAttributes({ target: value }) }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }

  render() {
    const { attributes, setAttributes } = this.props;
    const { text } = attributes;

    return ([
      this.getInspectorControls(),
      this.getBlockControls(),
      <a class="button">
        { this.state.editMode &&
          <Fragment>
            <RichText
              tagName="span"
              placeholder={ text.default }
              value={ text }
              onChange={ (value) => setAttributes({ text: value }) }
            />
          </Fragment>
        }
        { !this.state.editMode &&
          <Placeholder isColumnLayout={ true }>
            <Disabled>
              <RichText
                tagName="span"
                value={ text }
              />
            </Disabled>
          </Placeholder>
        }
      </a>
    ]);
  }
}
