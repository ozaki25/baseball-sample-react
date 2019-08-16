import React, { useState } from 'react';
import { Panel, Form } from 'react-bootstrap-component';
import useReactRouter from 'use-react-router';
import { usePlayerContext } from '../context/PlayerContext';
import { Routes } from '../router';

function EditPlayer() {
  const { history, location } = useReactRouter();
  const { updatePlayer, findPlayer } = usePlayerContext();

  const { id } = location.state;
  const defaultPlayer = findPlayer(id);

  const [name, setName] = useState(defaultPlayer.name);
  const [age, setAge] = useState(defaultPlayer.age);
  const [team, setTeam] = useState(defaultPlayer.team);
  const [position, setPosition] = useState(defaultPlayer.position);

  const items = [
    {
      label: '名前',
      name: 'name',
      defaultValue: name,
      onChange: e => setName(e.target.value),
    },
    {
      label: '年齢',
      name: 'age',
      defaultValue: age,
      onChange: e => setAge(e.target.value),
    },
    {
      label: 'チーム',
      name: 'team',
      defaultValue: team,
      onChange: e => setTeam(e.target.value),
    },
    {
      label: '守備位置',
      name: 'position',
      defaultValue: position,
      onChange: e => setPosition(e.target.value),
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    const player = {
      id,
      name,
      age,
      team,
      position,
    };
    updatePlayer(player);
    history.push(Routes.playerList);
  };

  return (
    <Panel title="編集">
      <Form
        items={items}
        buttonProps={{ label: '更新', primary: true }}
        onSubmit={onSubmit}
      />
    </Panel>
  );
}

export default EditPlayer;
