import React, { createContext, useContext } from 'react';
import usePlayer from '../hooks/usePlayer';

export const PlayerContext = createContext();

const Provider = ({ children }) => {
  const { players, addPlayer, updatePlayer, deletePlayer } = usePlayer();
  return (
    <PlayerContext.Provider
      value={{ players, addPlayer, updatePlayer, deletePlayer }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default Provider;

export const usePlayerContext = () => useContext(PlayerContext);
