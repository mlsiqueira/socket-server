import Server from './src/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// basicamente: o que me enviar transforme em um json
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json())

server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', router);

server.start(() => {
  console.log(`Running on port ${server.port}.`)
});
