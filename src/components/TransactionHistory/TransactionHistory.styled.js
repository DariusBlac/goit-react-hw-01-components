import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  text-align: center;
  thead {
    background-color: bisque;
  }
  tbody {
    tr {
      background-color: aquamarine;
    }
    tr:nth-child(even) {
      background-color: aqua;
    }
  }
`;
