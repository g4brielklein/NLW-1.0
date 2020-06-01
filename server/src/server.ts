import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    response.json([ 
        'Diego',
        'Cleiton',
        'Robson',
        'Gabriel'
     ]);
});

app.listen(3333);