import React from 'react';
import Router from './router';
import PlayerContext from './context/PlayerContext';

function App() {
  return (
    <PlayerContext>
      <Router />
    </PlayerContext>
  );
}

export default App;
