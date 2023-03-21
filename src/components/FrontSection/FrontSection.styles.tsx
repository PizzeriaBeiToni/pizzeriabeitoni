import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled('div')`
  width: 100%;
  height: fit-content;
`;

export const GridWrapper = styled(motion.div)`

`;

export const Image = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;