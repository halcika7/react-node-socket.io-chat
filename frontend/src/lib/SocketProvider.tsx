import React, { useContext, useEffect, useState } from 'react';
import { ClientSocket } from './Socket';

const SocketContext = React.createContext<SocketIOClient.Socket | null>(null);

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({
  children,
  id,
  token,
}: {
  children: React.ReactNode;
  id: string;
  token: string;
}) {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const client = ClientSocket.getClient(id, token);
    setSocket(client);

    return () => {
      client.close();
    };
  }, [id, token]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
