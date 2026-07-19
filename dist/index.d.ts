import { QuartzTransformerPlugin } from '@quartz-community/types';
import { RelatedOptions } from './types.js';
export { Related } from './components/index.js';

declare const RelatedTransformer: QuartzTransformerPlugin<RelatedOptions>;

export { RelatedOptions, RelatedTransformer };
