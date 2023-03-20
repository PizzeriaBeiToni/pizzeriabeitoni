import {styled} from "@mui/material";


export const ButtonLink = styled('a')`
  width: fit-content;
  height: fit-content;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border: 1px solid ${props => props.theme.palette.primary.main};
  background: transparent;
  color: ${props => props.theme.palette.primary.main};
  font-size: 1.1rem;
  font-family: "Merriweather", serif;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: ${props => props.theme.palette.primary.main};
    color: white;
    transition: 0.3s;
  }
`;