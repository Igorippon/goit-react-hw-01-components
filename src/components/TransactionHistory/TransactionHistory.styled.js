import styled from 'styled-components';

export const TableHeader = styled.th`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.11;
  text-transform: uppercase;
  padding: 10px;
  border: 1px Solid hwb(240 86% 11%); 
  background-color: #16e9ec;
  color: ${props => props.theme.colors.white};
`;

export const Table = styled.table`
   border-collapse: collapse;
   `;