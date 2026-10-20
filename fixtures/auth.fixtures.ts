import {test as base, Page} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type authFixture={
    loginPage: LoginPage;
    loggedPage: Page;
};

export const test = base.extend<authFixture>({
    loginPage: async ({page}, use)=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },

    loggedPage: async({page}, use)=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await LoginPage.login('admin@system.com','AdminPassword123');
        await page.waitForURL(/painel\.html/);
        await use(page);
    }
});

export {expect} from "@playwright/test";
