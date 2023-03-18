import styled from '@emotion/styled';
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 20px;
  margin-top: 20px;
  overflow: hidden;
  background-color: #ffff;
  box-shadow: 5px 5px 10px rgb(150, 150, 150);
  div {
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  wigth: 200px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
`;
export const Tag = styled.p`
  margin-bottom: 0px;
`;

export const Location = styled.p`
  margin-bottom: 0px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(240, 240, 240);
  margin-bottom: 0px;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
  border-top: 2px solid rgb(217, 217, 217);
  width: 33%;
  &:not(:last-child) {
    border-right: 2px solid rgb(217, 217, 217);
  }
  span:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StatsInfo = styled.span`
  font-weight: bold;
`;
