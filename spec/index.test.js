import { describe, test } from 'node:test';
import { Marked } from 'marked';
import markedImageManager from '../src/index.ts';

describe('marked-image-manager', () => {
  test('no options', (t) => {
    const marked = new Marked();
    marked.use(markedImageManager());
    t.assert.snapshot(marked.parse('example markdown'));
  });

  test('markdown not using this extension', (t) => {
    const marked = new Marked();
    marked.use(markedImageManager());
    t.assert.snapshot(marked.parse('not example markdown'));
  });
});
