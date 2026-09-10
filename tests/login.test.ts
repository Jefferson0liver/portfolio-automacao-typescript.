import{test, expect, vi} from 'vitest';    //simulando login lento
function loginLento(usuario:string):Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`BEM-VINDO, ${usuario}!`);
        },5000);
    });
}

test('Simular login usando fake timers', async() => {
    vi.useFakeTimers();
    console.log('INICIANDO CENÁRIO DE TESTE');

    const promessaLogin = loginLento('Dona Redonda');    //chamando promisse de usuário sem await 

    vi.advanceTimersByTime(5000);    //configura avanço de segundos

    const resultado = await promessaLogin;

    expect(resultado).toBe('BEM-VINDO, Dona Redonda!');    //verificar resultado

    console.log('sucesso teste realizado na velocidade da luz');

    vi.useRealTimers();
 
})