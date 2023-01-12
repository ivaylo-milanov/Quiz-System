import { default as page } from './lib/page.mjs';
import { preparingTopicsAndQuizzes, getQuizById, loader } from './middlewares/preload.js';
import { middleWare } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { navUpdate } from './middlewares/updateNav.js';

import { getUserData } from './utils.js';

import { showBrowser } from './views/browse.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { onLogout } from './views/logout.js';
import { navTemplate } from './views/nav.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';
import { showWelcome } from './views/welcome.js';

page(middleWare(document.querySelector('main'), document.querySelector('nav')));
page(addSession(getUserData));
page(loader());
page(navUpdate(navTemplate));
page(preparingTopicsAndQuizzes());
page('/index.html', '/');
page('/', showWelcome);
page('/login', showLogin);
page('/register', showRegister);
page('/browse', showBrowser);
page('/create', showCreate);
page('/me', showProfile);
page('/logout', onLogout);
page('/details/:id', getQuizById(), showDetails);
page('/edit/:id', getQuizById(), showEdit);
page.start();
