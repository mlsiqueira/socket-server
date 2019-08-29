import { Socket } from 'socket.io';

namespace sockets {

  export const onDisconnect = (client: Socket) => {
    client.on('disconnect', () => {
      console.log('Já se foi o disco voador...')
    });
  }

  export const message = (client: Socket) => {
    client.on('message', (payload) => {
      console.log('Msg recebida: ', payload);
    })
  }
}

export default sockets;