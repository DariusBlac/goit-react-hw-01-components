import styled from 'styled-components';

export const ListContainerFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const ListItemFriends = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ $online }) => ($online ? 'green' : 'red')};
  }
`;
