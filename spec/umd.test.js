import { describe, test } from 'node:test';
import '../lib/index.umd.js';

describe('marked-image-manager umd', () => {
  test('test umd global', (t) => {
    t.assert.equal(typeof markedImageManager, 'function');
  });
});
