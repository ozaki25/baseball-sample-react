import { useState } from 'react';
const defaultPlayers = [
  { id: 1, name: '大谷翔平', age: 25, team: 'エンゼルス', position: '投手' },
  { id: 2, name: 'ダルビッシュ有', age: 32, team: 'カブス', position: '投手' },
  { id: 3, name: '杉谷拳士', age: 29, team: '日本ハム', position: '外野手' },
];

function usePlayer() {
  const [players, setPlayers] = useState(defaultPlayers);
  const addPlayer = player => {
    const id = players.slice(-1)[0].id + 1;
    setPlayers([...players, { id, ...player }]);
  };
  const updatePlayer = player => {
    setPlayers(players.map(p => (p.id === player.id ? player : p)));
  };
  const deletePlayer = id => {
    setPlayers(players.filter(p => p.id !== id));
  };
  const findPlayer = id => {
    return players.find(p => p.id === id);
  };
  return {
    players,
    addPlayer,
    updatePlayer,
    deletePlayer,
    findPlayer,
  };
}

export default usePlayer;
