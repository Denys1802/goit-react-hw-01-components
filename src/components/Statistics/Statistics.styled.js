import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: #fff;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgb(150, 150, 150);
`;

export const StatisticsTitel = styled.h2`
  padding: 20px 0;
  text-align: center;
  color: grey;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const StatisticsItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 20%;
  background-color: ${({ backgrounds }) => backgrounds};
  padding: 10px 0;
  font-weight: 500;
`;
