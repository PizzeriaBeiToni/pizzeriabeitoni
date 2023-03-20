import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const Content = styled('div')`
  width: 100%;
  height: unset;
  padding: 10px 10px 10px 30px;
  overflow: scroll;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    margin-top: 75px;
    padding: 5px;
  }
`;