import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Logo = styled(motion.img)`
  width: 400px;
  max-width: 85vw;
`;