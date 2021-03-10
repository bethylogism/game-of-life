import React from 'react';
import styled from 'styled-components';

import { blinkerGrid, CellStatus } from './grids';

export default function Board() {
  return (
    <Container>
      {blinkerGrid.map((row) => (
        <Row cells={row} />
      ))}
    </Container>
  );
}

const Row = ({ cells }: { cells: CellStatus[] }) => (
  <RowWrap>
    {cells.map((cell) => (
      <Cell style={{ backgroundColor: cell ? 'black' : 'white' }} />
    ))}
  </RowWrap>
);

const Cell = styled.div`
  border: 2px dotted rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 25px;
  width: 25px;
  margin: 1px;
`;

const Container = styled.div`
  margin: 1em auto;
  /* display: flex;
  flex-direction: column; */
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: row;
  border-radius: 4px;
`;
