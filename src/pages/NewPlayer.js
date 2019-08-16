import React, { useState } from 'react';
import { Panel, Form } from 'react-bootstrap-component';
import useReactRouter from 'use-react-router';
import { usePlayerContext } from '../context/PlayerContext';
import { Routes } from '../router';

function NewPlayer() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');

  const { history } = useReactRouter();
  const { addPlayer } = usePlayerContext();

  const items = [
    { label: '名前', name: 'name', onChange: e => setName(e.target.value) },
    { label: '年齢', name: 'age', onChange: e => setAge(e.target.value) },
    { label: 'チーム', name: 'team', onChange: e => setTeam(e.target.value) },
    {
      label: '守備位置',
      name: 'position',
      onChange: e => setPosition(e.target.value),
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const player = {
      name,
      age,
      team,
      position,
    };
    addPlayer(player);
    history.push(Routes.playerList);
  };

  return (
    <Panel title="新規作成">
      <Form
        items={items}
        buttonProps={{ label: '作成', primary: true }}
        onSubmit={onSubmit}
      />
    </Panel>
  );
}

export default NewPlayer;
