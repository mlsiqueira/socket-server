import express, { Application } from 'express';
import { environment } from '../environment/environment';

export default class Server {

  app: Application;
  port: number;

  constructor() {
    this.app = express();
    this.port = environment.SERVER_PORT;
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }

}
