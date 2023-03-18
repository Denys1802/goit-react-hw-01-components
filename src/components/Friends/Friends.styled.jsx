import styled from '@emotion/styled';

export const FriendListWrap = styled.ul`
  max-width: 250px;
  margin: 0 auto;
  margin-bottom: 40px;
  list-style: none;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgb(150, 150, 150);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const IsOnline = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
