import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100vw;
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.primary.main};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
  z-index: 100;
`;

export const Logo = styled('img')`
  height: 100%;
  padding: 10px;
  object-fit: contain;
  z-index: 200;
  pointer-events: none;
  user-select: none;
`;

export const MenuButton = styled('div')<{ open: boolean }>`
  justify-self: right;
  overflow: hidden;
  margin: 20px;
  font-size: 25px;
  z-index: 200;
  transform: rotate(${props => !props.open? '0deg' : '-180deg'});
  transition: 0.6s;
`;

export const MenuContent = styled('div')<{ open: boolean }>`
  width: 100vw;
  height: fit-content;
  padding: 90px 0 50px 0;
  position: fixed;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.palette.background.paper};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14);
  transform: translateY(${props => !props.open? '-100vh' : '0'});
  transition: 0.6s;
`;