import http from 'http';
import express, { Application } from 'express';
import { environment } from '../environment/environment';

import socketIo from 'socket.io';

export default class Server {

  private static server: Server;
  app: Application;
  port: number;
  io: socketIo.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = environment.SERVER_PORT;
    // não funcionou com Application do Express
    this.httpServer = new http.Server(this.app);
    this.io = socketIo(this.httpServer);
    this.listenSockets();
  }

  static get instance() {
    return this.server || (this.server = new this());
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }


  private listenSockets() {
    console.log('Escutando conexões...');
    this.io.on('connection', client => {
      console.log('Novo cliente conectado: ', client);
    })
  }

}
