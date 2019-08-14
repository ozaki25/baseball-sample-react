import React from 'react';
import {
  Button,
  Panel,
  Table,
  TableHead,
  TableData,
} from 'react-bootstrap-component';
import useReactRouter from 'use-react-router';
import { Routes } from '../router';
import usePlayer from '../hooks/usePlayer';

function PlayerList() {
  const { history } = useReactRouter();
  const { players, deletePlayer } = usePlayer();
  const onClickEdit = id => {
    history.push({
      pathname: Routes.editPlayer,
      state: { id },
    });
  };
  const onClickDelete = id => {
    deletePlayer(id);
  };
  return (
    <Panel title="Player一覧" withTable>
      <Table withPanel>
        <thead>
          <tr>
            <TableHead>名前</TableHead>
            <TableHead>年齢</TableHead>
            <TableHead>チーム名</TableHead>
            <TableHead>守備位置</TableHead>
            <TableHead />
            <TableHead />
          </tr>
        </thead>
        <tbody>
          {players.map(({ id, name, age, team, position }) => {
            return (
              <tr key={id}>
                <TableData>{name}</TableData>
                <TableData>{age}</TableData>
                <TableData>{team}</TableData>
                <TableData>{position}</TableData>
                <TableData>
                  <Button
                    label="編集"
                    size="xs"
                    onClick={() => onClickEdit(id)}
                  />
                </TableData>
                <TableData>
                  <Button
                    label="削除"
                    size="xs"
                    onClick={() => onClickDelete(id)}
                  />
                </TableData>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Panel>
  );
}

export default PlayerList;
