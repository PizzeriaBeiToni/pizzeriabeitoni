import {styled} from "@mui/material";


export const SectionHeader = styled('span')`
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 20px;
  color: ${props => props.theme.palette.primary.main};
`;

export const SectionParagraph = styled('p')`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  margin-bottom: 40px;
`;