import { default as page } from './lib/page.mjs';
import { showWelcome } from './views/welcome.js';

page('/index.html', '/');
page('/', showWelcome);
page.start();