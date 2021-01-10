const {
  RichText,
  InspectorControls,
  BlockControls,
  PanelColorSettings,
  withColors,
} = wp.blockEditor;

const {
  PanelBody,
  PanelRow,
  ColorPalette,
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
      editMode: true,
      colors: [
        { name: 'red', color: '#f00' },
        { name: 'blue', color: '#00f' },
        { name: 'white', color: '#fff' },
        { name: 'black', color: '#000' },
      ]
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

  getColorByName(value, colorArray) {
    if (!value.includes('#')) return value;

    return colorArray.find(({ color }) => {
      return color === value
    }).name
  }

  getInspectorControls() {
    const { attributes, setAttributes } = this.props;
    const { href, target, color } = attributes;

    return (
      <InspectorControls>
        <PanelBody title="Background Color" initialOpen={ false }>
          <PanelRow>
            <ColorPalette
              colors={ this.state.colors }
              disableCustomColors={ true }
              value={ color }
              onChange={ ( value ) => setAttributes({
                color: this.getColorByName(value, this.state.colors)
              }) }
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title="Link Settings" initialOpen={ false }>
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
    const { text, color } = attributes;
    const NS = 'button';
    const colorName = `${NS}--${this.getColorByName(color, this.state.colors)}`
    const classes = `${NS} ${colorName}`;

    return ([
      this.getInspectorControls(),
      this.getBlockControls(),
      <div className={ classes }>
        { this.state.editMode &&
          <Fragment>
            <RichText
              tagName="a"
              placeholder={ text.default }
              value={ text }
              className="button__link"
              onChange={ (value) => setAttributes({ text: value }) }
            />
          </Fragment>
        }
        { !this.state.editMode &&
          <Placeholder isColumnLayout={ true }>
            <Disabled>
              <RichText
                tagName="a"
                className="button__link"
                value={ text }
              />
            </Disabled>
          </Placeholder>
        }
      </div>
    ]);
  }
}

