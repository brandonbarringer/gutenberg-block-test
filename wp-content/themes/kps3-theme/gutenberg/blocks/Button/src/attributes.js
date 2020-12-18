import { text, href, target, rel } from 'theme/attributes';

export default attributes = {
  ...text('a'),
  ...href(),
  ...rel(),
  ...target()
}
