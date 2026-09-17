import {test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test ('Metodo POST para criar um novo post', async() =>{
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            usedId: 1,
            title: 'Meu novo post',
            body: 'Conteudo do meu novo post'
        })
    });
        // Testa status code
            expect(res.status).toBe(201);
        // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe('Meu novo post');
            expect(dados.body).toBe('Conteudo do meu novo post');
});

test ('Metodo PUT para atualizar um post', async() =>{  //(texto)
    const res = await fetch(`${BASE_URL}/posts/1`, {  //(/1)
        method: 'PUT',  //(method)
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            usedId: 1,
            title: 'Meu título atualizado',    //(texto alterado para o PIT)
            body: 'Conteúdo do meu novo post'
        })
    });
        // Testa status code
            expect(res.status).toBe(200);  //(status atualizado)
        // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe('Meu título atualizado');   //(repete o texto)
            expect(dados.body).toBe('Conteúdo do meu novo post');
});

test ('Metodo PATCH para atualizar um post', async() =>{  //(texto)
    const res = await fetch(`${BASE_URL}/posts/1`, {  //(/1)
        method: 'PATCH',  //(method alterado)
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            usedId: 1,
            title: 'Meu título super atualizado',    //(texto alterado para o PATCH)
            body: 'Conteúdo do meu novo post'
        })
    });
        // Testa status code
            expect(res.status).toBe(200);  //(status atualizado)
        // Testa se o retorno é um objeto JSON
            const dados = await res.json();
            expect(dados.title).toBe('Meu título super atualizado');   //(repete o texto)
            expect(dados.body).toBe('Conteúdo do meu novo post');
});

test ('Metodo DELETE para deletar um post', async() =>{
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method:'DELETE',
    });
    // Testa status code
        expect(res.status).toBe(200);
});