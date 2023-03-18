import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 600px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgb(150, 150, 150);
  margin-bottom: 30px;
  thead {
    background-color: #00b5ff;
    color: #fff;
  }
  th {
    width: 200px;
    padding: 10px;
  }
  th:not(:last-child) {
    border: solid 1px rgb(224, 224, 224);
  }
`;

export const TransactionTbody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: #f4f4f4;
  }
  td {
    padding: 10px 15px;
    text-align: center;
    border: 1px solid rgb(224, 224, 224);
  }
`;
