import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayerList from './pages/PlayerList.js';
import NewPlayer from './pages/NewPlayer';
import EditPlayer from './pages/EditPlayer';
import Wrapper from './components/Wrapper';

export const Routes = {
  playerList: '/players',
  newPlayer: '/players/new',
  editPlayer: '/players/edit',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Wrapper>
          <Route path="/" exact component={PlayerList} />
          <Route path={Routes.playerList} exact component={PlayerList} />
          <Route path={Routes.newPlayer} exact component={NewPlayer} />
          <Route path={Routes.editPlayer} exact component={EditPlayer} />
        </Wrapper>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
