import {styled} from "@mui/material";


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

export const Header = styled('span')`
  font-size: 2rem;
  font-family: "Cormorant Garamond", serif;
  color: ${props => props.theme.palette.primary.main};
  font-style: italic;
  margin-bottom: 40px;
`;

export const Box = styled('div')`
  width: 500px;
  max-width: 100%;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/////////////////////////////////////////////////////////////////////////////////////

export const HourItemContext = styled('div')`
  display: flex;
  * {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.3rem;
  }
`;

export const HourItemDay = styled('div')`
  width: 50%;
  text-align: left;
  color: ${props => props.theme.palette.primary.main};
`;

export const HourItemHours = styled('div')`
  width: 50%;
  text-align: right;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;