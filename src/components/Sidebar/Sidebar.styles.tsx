import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const AddressSection = styled('div')`
  width: 100%;
  padding: 20px 0 20px 0;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.46);
  border-left: none;
  border-right: none;
  text-align: center;
`;

export const AddressLink = styled('a')`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  font-size: 15px;
  font-family: "Aboreto", serif;
  line-height: 25px;
`;

/////////////////////////////////////////////////////////////////////////////

export const LinksSection = styled('div')`
  padding: 20px 0 20px 0;
  gap: 10px;
  display: flex;
  flex-direction: column;
  a {
    color: ${props => props.theme.palette.primary.main};
    font-family: "Merriweather", serif;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
  }
`;

export const FacebookLink = styled('a')`
  margin-top: 20px;
  font-size: 25px !important;
`;

/////////////////////////////////////////////////////////////////////////////

export const Context = styled(motion.div)`
  width: 300px;
  max-width: 20vw;
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  background: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.primary.main};
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.23);
`;

export const Logo = styled('img')`
  width: 200px;
  object-fit: contain;
  z-index: 200;
`;

export const ContextSmall = styled(Context)`
  width: 100vw;
  max-width: none;
  height: 75px;
  padding: 0;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
`;

export const LogoSmall = styled(Logo)`
  width: unset;
  height: 60px;
`;

export const MenuButton = styled(motion.div)`
  justify-self: right;
  overflow: hidden;
  margin: 20px;
  font-size: 25px;
  z-index: 200;
`;

export const MenuContent = styled(motion.div)`
  width: 100vw;
  height: fit-content;
  padding: 90px 0 50px 0;
  position: fixed;
  top: 0;
  z-index: 100;
  background: #fff4f4;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14);
`;