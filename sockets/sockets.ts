import { Socket, Server } from 'socket.io';

namespace sockets {

  export const onDisconnect = (client: Socket) => {
    client.on('disconnect', () => {
      console.log('Já se foi o disco voador...')
    });
  }

  export const message = (client: Socket, server: Server) => {
    client.on('message', (payload) => {
      console.log('Msg recebida: ', payload);

      const { body } = payload;
      server.emit('new-message', { body, from: 'server'})
    })

  }
}

export default sockets;