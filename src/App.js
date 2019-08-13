import React from 'react';
import { Container, Navbar } from 'react-bootstrap-component';
import Router, { Routes } from './router';

function App() {
  return (
    <>
      <Navbar
        title="Baseball Sample"
        titleLink={Routes.playerList}
        links={[{ text: '新規登録', href: Routes.newPlayer }]}
      />
      <Container>
        <Router />
      </Container>
    </>
  );
}

export default App;
