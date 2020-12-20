import { text, href, target, rel, color } from 'theme/attributes';

export default {
  ...text('a'),
  ...href(),
  ...target(),
  ...color()
}
