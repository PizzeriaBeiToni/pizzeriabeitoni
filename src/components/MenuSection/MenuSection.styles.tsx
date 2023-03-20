import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.div)`
  width: 100%;
  margin: 70px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const About = styled('span')`
  width: 950px;
  max-width: 100%;
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-size: 2rem;
  line-height: 2.8rem;
  margin-bottom: 80px;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
`;

export const Section = styled('div')`
  width: 100%;
  height: 500px;
  display: flex;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 50px;
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    height: fit-content;
    flex-direction: column-reverse;
    padding: 10px;
  }
  div, img {
    width: 100%;
  }
  div {
    margin-top: 50px;
    padding: 10px;
  }
`;