import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

export const ProfileListContainer = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const ProfileListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
