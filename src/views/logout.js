import { removeUserData } from "../utils.js";

export async function onLogout(ctx) {
    removeUserData();
    ctx.page.redirect('/');
}