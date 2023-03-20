import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  height: fit-content;
  padding: 20px;
  margin: 50px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled('span')`
  font-size: 2rem;
  font-family: "Cormorant Garamond", serif;
  color: ${props => props.theme.palette.primary.main};
  font-style: italic;
  margin-bottom: 40px;
`;

export const Paragraph = styled('p')`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  color: black;
`;

export const ContactItem = styled(Paragraph.withComponent('span'))`
    margin: 0 0 7px 20px;
    color: ${props => props.theme.palette.primary.main};
    display: flex;
    align-items: center;
    gap: 20px;
`;