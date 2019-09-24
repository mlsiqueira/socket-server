import Server from './models/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// basicamente: o que me enviar transforme em um JSON:
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json()) // agora posso pegar os dados com: req.body.<lorem>

server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', router);

server.start(() => {
  console.log(`Running on port ${server.port}.`)
});
