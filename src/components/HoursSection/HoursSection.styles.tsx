import {styled, TableCell} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin: 100px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    margin-top: 50px;
  }
`;

export const TableCellHeader = styled(TableCell)`
  color: #ffffff;
  background: ${props => props.theme.palette.primary.main};
  font-family: "Cormorant Garamond", serif;
  font-size: 1.6rem;
  text-align: center;
`;

export const TableCellDay = styled(TableCell)`
  color: ${props => props.theme.palette.primary.main};
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
`;

export const TableCellHours = styled(TableCell)`
  text-align: right;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
`;
