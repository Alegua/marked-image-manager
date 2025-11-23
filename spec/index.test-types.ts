import { Marked } from 'marked';
import markedImageManager from 'marked-image-manager';

const marked = new Marked();

const options = {
  // default options
};

marked.use(markedImageManager(options));

const html: string = marked.parse('example markdown', { async: false });
console.log(html);
