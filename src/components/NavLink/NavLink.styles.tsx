import {styled} from "@mui/material";


export const Context = styled('div')`
  font-size: 1.1rem;
  line-height: 1.9rem;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  color: ${props => props.theme.palette.primary.main};
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.palette.primary.main};
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;