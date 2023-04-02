import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const AddressSection = styled('div')`
  width: 100%;
  padding: 20px 0 20px 0;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.28);
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
  text-align: center;
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
  pointer-events: none;
  user-select: none;
`;