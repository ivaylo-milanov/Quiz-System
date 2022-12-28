import { page } from './lib.js';
import { middleWare } from './nav.js';
import { showWelcome } from './views/welcome.js';

const appId = 'fKI0J7nzgCo7WUi5in6zOApnK0tqr3fRMWCvOnUO';
const jsId = '4dJCyhdUE83T3kjcXzQgV2N8KgPBH9IXV1u1wv9v';
Parse.initialize(appId, jsId); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

page(middleWare);
page('/index.html', '/');
page('/', showWelcome);
page.start();