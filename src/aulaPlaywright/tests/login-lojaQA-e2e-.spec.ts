import { test, expect} from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('ato 1 - validar carregamento e visibilidade de elementos', async () => {

    test('Validar titulo e carregamento da pagina', async ({page}) => {
    await page.goto(`${BASE_URL}/login.html`)  //navegar até a página de login
    await expect(page).toHaveTitle(/LojaQA | Entrar/i);  //validar título
    });

    test('Verificar exibicao dos campos do form de login', async ({ page }) => {
    await page.goto(`${BASE_URL}/login.html`)  //navegar até a página de login
    await expect(page.locator('#email')).toBeVisible();   //validar campos
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeDisabled();     //verificar se btn está desativado
    });    
});

test.describe('ATO 2 - Caminho Feliz', ()=>{
    test('validar acesso e redirecionar ao painel', async({page}) =>{
        await page.goto(`${BASE_URL}/login.html`);  //navegar até a página de login  
        await page.fill('#email', 'admin@system.com');  //preencher campos utilizando o fill()
        await page.fill('#password', 'AdminPassword123');
        await expect (page.locator('#loginBtn')).toBeEnabled();  //VALIDAR BOTÃO ATIVO
        await page.click('#loginBtn');  //ação de clique no btn
        await expect(page).toHaveURL(/painel\.html/);  //validar o redirecionamento para a página/painel
    });
});
