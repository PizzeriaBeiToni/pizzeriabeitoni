import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Image = styled(motion.img)`
  width: 100%;
  padding: 5px;
  object-fit: cover;
`;

export const Context = styled('div')`
  width: 100%;
  height: fit-content;
  display: flex;
  padding: 5px;
  @media (max-width: 600px) {
    flex-wrap: wrap
  }
`;

export const Column = styled(motion.div)`
  width: 50%;
  height: fit-content;
  margin: 0 2px 0 2px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }  
`;