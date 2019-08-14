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

function PlayerList() {
  const { history } = useReactRouter();
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
          <tr>
            <TableData>杉谷</TableData>
            <TableData>29</TableData>
            <TableData>日本ハム</TableData>
            <TableData>外野手</TableData>
            <TableData>
              <Button
                label="編集"
                onClick={() => history.push(Routes.editPlayer)}
                size="xs"
              />
            </TableData>
            <TableData>
              <Button label="削除" size="xs" />
            </TableData>
          </tr>
        </tbody>
      </Table>
    </Panel>
  );
}

export default PlayerList;
