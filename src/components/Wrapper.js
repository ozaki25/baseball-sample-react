import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap-component';
import { Routes } from '../router';

function Wrapper({ children }) {
  return (
    <>
      <Navbar
        title={{ text: 'Baseball Sample', tag: Link, to: Routes.playerList }}
        links={[{ text: '新規登録', tag: Link, to: Routes.newPlayer }]}
      />
      <Container>{children}</Container>
    </>
  );
}

export default Wrapper;
