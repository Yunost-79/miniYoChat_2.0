import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import io, { Socket } from 'socket.io-client';
import { useDataStore } from '../zustand/dataStore/useDataStore';

interface ISocketContext {
  socket: Socket | null;
  onlineUsers: { userId: string; socketId: string }[];
  isConnected: boolean;
}

interface ISocketContextProviderProps {
  children: ReactNode;
}

const SocketContext = createContext<ISocketContext | undefined>(undefined);

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocketContext must be used within a SocketContextProvider');
  }
  return context;
};

export const SocketContextProvider = ({ children }: ISocketContextProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<{ userId: string; socketId: string }[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const { userData } = useDataStore();

  console.log(userData);

  useEffect(() => {
    if (userData?._id) {
      const newSocket = io('http://localhost:7000', {
        query: {
          userId: userData._id,
        },
      });

      setSocket(newSocket);

      newSocket.on('connect', () => {
        setIsConnected(true);
        newSocket.emit('addUser', userData._id);
      });

      newSocket.on('disconnect', () => {
        setIsConnected(false);
      });

      newSocket.on('get-users', (users: { userId: string; socketId: string }[]) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.off('connect');
        newSocket.off('disconnect');
        newSocket.off('get-users');
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [userData?._id]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
