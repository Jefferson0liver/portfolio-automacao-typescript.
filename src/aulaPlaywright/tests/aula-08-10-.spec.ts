import {test, expect} from "@playwright/test";

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test ('Página de LOGIN', async({page}) =>{
    await page.goto(`${BASE_URL}/login.html`);
    await page.getByRole('textbox', {name: 'E-mail'}).fill('admin@system.com');
    await page.getByRole('textbox', {name: 'Senha'}).fill('AdminPassword123');
    await page.getByRole('button', {name: 'Entrar'}).click();
    await expect(page).toHaveURL(`${BASE_URL}/painel.html`);
    await page.getByRole('button', {name: 'Usuários'});
    await page.getByPlaceholder('Buscar por nome ou e-mail...').fill('Administrador');
    await page.getByRole('button', {name: 'Administrador'}).click();
    await page.getByRole('button', {name: 'Produtos'}).click();
    await page.getByPlaceholder('Buscar por ID do produto (#...), nome ou categoria...').click();
    await page.getByRole('button', {name: 'class="user-card-toggle"'}).click();

})


