import { text, href, target, color } from 'theme/attributes';

export default {
  ...text('a'),
  ...href(),
  ...target(),
  ...color(),
}

