import styled from 'styled-components';

export const HeaderCell = styled.th`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.11;
  text-transform: uppercase;
  padding: 10px;
  border: 1px Solid hwb(240 86% 11%); 
  background-color: #16e9ec;
  color: ${props => props.theme.colors.white};
`;

export const Cell = styled.td`
    font-weight: 300;
    font-size: 24px;
    line-height: 1.11;
    text-transform: capitalize;
    padding: 10px;
    border: 1px Solid hwb(240 86% 11%); 
`;

export const Line = styled.tr`
  text-align:center;
  &:nth-child(even) {
  background-color: rgba(229, 236, 231, 0.741)
  };
`;

export const Table = styled.table`
   border-collapse: collapse;
   `;