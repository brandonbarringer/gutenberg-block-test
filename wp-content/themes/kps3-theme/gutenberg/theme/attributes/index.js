export function title(selector = 'h1') {
  return {
    type: 'string',
    src: 'text',
    selector
  }
}

export function text(selector = 'p') {
  return {
    type: 'string',
    src: 'text',
    selector
  }
}

export function href() {
  return {
    type: 'string',
    source: attribute,
    selector: 'a',
    attribute: 'href'
  }
}

export function target() {
  return {
    type: 'string',
    source: attribute,
    selector: 'a',
    attribute: 'rel'
  }
}

export function rel() {
  return {
    type: 'string',
    source: attribute,
    selector: 'a',
    attribute: 'target'
  }
}

export function url() {
  return {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  }
}

export function content(selector = '.text-content') {
  return {
    type: 'string',
    source: 'html',
    multiline: 'p',
    selector
  }
}

// aliases
export function image() {
  return url();
}

export function heading(selector) {
  return title(selector);
}

