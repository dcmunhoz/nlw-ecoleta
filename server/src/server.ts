import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

//Rota: Endereço completo da nossa requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar um usuário
// GET http://localhost:3333/users/5 = Buscar dados do usuário com id 5

// Request Param: Parâmetros que vem na própria rota que indetificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais 
// Request Body: Parâmetros para criação/atualização de dados

const app = express();
app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes); 

app.listen(3333);