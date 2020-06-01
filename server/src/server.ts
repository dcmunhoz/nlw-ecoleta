import express from 'express';

const app = express();

app.get('/users', (request, respose) => {
    console.log("listagem de usuário");

    respose.json([
        'Daniel',
        'Diego',
        'Filipe',
        'Claiton'
    ]);
});

app.listen(3333);