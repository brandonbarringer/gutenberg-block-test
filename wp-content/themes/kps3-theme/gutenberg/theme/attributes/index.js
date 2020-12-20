export function title(selector = 'h1') {
  return {
    title: {
      default: 'Your Title Here',
      type: 'string',
      src: 'text',
      selector
    }
  }
}

export function text(selector = 'p') {
  return {
    text: {
      default: 'Place Your Text Here',
      type: 'string',
      src: 'text',
      selector
    }
  }
}

export function href() {
  return {
    href: {
      default: '//example.com',
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    }
  }
}

export function target() {
  return {
    target: {
      default: '_self',
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'rel'
    }
  }
}

export function rel() {
  return {
    rel: {
      default: '',
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'target'
    }
  }
}

export function src() {
  return {
    src: {
      default: '//example.com',
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
      }
  }
}

export function content(selector = '.text-content') {
  return {
    content: {
      default: 'Place Your Content Here',
      type: 'string',
      source: 'html',
      multiline: 'p',
      selector
    }
  }
}

export function color() {
  return {
    title: {
      default: 'red',
      type: 'string',
    }
  }
}

// aliases
export function image() {
  return src();
}

export function heading(selector) {
  return title(selector);
}

