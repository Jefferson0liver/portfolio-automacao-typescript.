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

    test('Verificar botão de login desativado quando email incorreto', async({page}) => {   //testar com email errado
        await page.goto(`${BASE_URL}/login.html`);
        await page.fill('#email', 'nulo.nulo@hotmail.com');
        await page.fill('#password', '123456--');
        await expect(page.locator('#loginBtn')).toBeDisabled();
    });
});

test.describe('ATO 3 criar usuários e validar cadastro e login', async () => {   //atividade da sala 
    test('Criar usuários de cliente e lojista', async ({page}) => {
      await page.goto(`${BASE_URL}/login.html`);
      await expect (page.getByRole('Criar conta')).toBeEnabled();
      await page.getByRole('Criar conta');
      await expect(page).toHaveURL(/criar-conta\.html/);
      await page.fill('#nome', 'Jefferson Aragão');
      await page.fill('#email', 'jeff.aragao@hotmail.com');
      await page.fill('#password', '123456--');
      await page.click('#registerBtn');
    });
});
