import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  height: 500px;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    height: fit-content;
    flex-direction: column;
    padding: 10px;
  }
`;

export const Section = styled('div')`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  div {
    width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
  }
`;

export const EmbeddedMap = styled('iframe')`
  width: 50%;
  height: 100%;
  min-height: 300px;
  border: none;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    width: 100%;
    margin-top: 50px;
  }
`;