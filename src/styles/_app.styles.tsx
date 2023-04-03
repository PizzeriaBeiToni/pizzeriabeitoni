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
  @media (max-width: 1150px) {
    padding: 120px 15px 0 15px;
  }
`;