import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayerList from './pages/PlayerList.js';
import NewPlayer from './pages/NewPlayer';
import EditPlayer from './pages/EditPlayer';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route path="/" exact component={PlayerList} />
          <Route path="/players" exact component={PlayerList} />
          <Route path="/players/new" exact component={NewPlayer} />
          <Route path="/players/edit" exact component={EditPlayer} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
