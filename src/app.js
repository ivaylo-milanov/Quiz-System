import { default as page } from './lib/page.mjs';
import { middleWare, navUpdate } from './nav.js';
import { showBrowser } from './views/browse.js';
import { showCreate } from './views/create.js';
import { showLogin } from './views/login.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';
import { showWelcome } from './views/welcome.js';

page(middleWare);
page(navUpdate);
page('/index.html', '/');
page('/', showWelcome);
page('/login', showLogin);
page('/register', showRegister);
page('/browse', showBrowser);
page('/create', showCreate);
page('/me', showProfile);
page.start();
