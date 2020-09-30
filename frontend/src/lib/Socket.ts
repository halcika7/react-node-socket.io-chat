import socketClient from 'socket.io-client';

export class ClientSocket {
  private static instance: ClientSocket;
  private readonly _url = process.env.REACT_APP_BACKEND_URL_SOCKET as string;
  private readonly _client: SocketIOClient.Socket;

  private constructor(id: string) {
    this._client = socketClient(this._url, { query: { id } });
    this._client.connect();
  }

  public static getClient(id: string): SocketIOClient.Socket {
    if (!ClientSocket.instance) {
      ClientSocket.instance = new ClientSocket(id);
    }

    return ClientSocket.instance._client;
  }
}
