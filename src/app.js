import { default as page } from './lib/page.mjs';
import { showWelcome } from './views/welcome.js';

page('/', showWelcome);
page.start();