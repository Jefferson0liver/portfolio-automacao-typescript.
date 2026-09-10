// importando função utilitária de aguardar tempo(delay)
import { aguardar } from "../../utils/helpers";

function simularLogin (usuario:string, senha:string):Promise<string>{    //SIMULANDO UMA API DE LOGIN
    return new Promise((resolve,reject) => {
        if(usuario ==='admin' && senha ==='123456'){
            resolve('token-secreto-aprovado-123');
        }else{
            reject('ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS!');
        }
    });
}

async function executarCT() {    //FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT
    console.log('INICIANDO CENÁRIO DE TESTE')
    try{
        console.log('passo 1: abrindo tela de login...');
        await aguardar(2000);
        console.log('passo 2: inserindo credenciais...');
        await aguardar(3000);

        const token = await simularLogin('admin','123456');
        console.log(`SUCESSO! USUÁRIO LOGADO TOKEN RECEBIDO: ${token}\n`);
    }catch(erro){
        console.error(`FALHA NO TESTE: ${erro}\n`);
    }finally{
        console.log('Passo final:  Fechando navegador e limpando dados.');
    }
}
executarCT();
