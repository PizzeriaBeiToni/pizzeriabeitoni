import {styled} from "@mui/material";
import {ButtonLink, PrimaryHeadline} from "@/src/styles/presets.styles";


export const Context = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const MenuImage = styled('img')`
  width: 100%;
  height: calc(100vh - 20px);
  object-fit: cover;
`;

export const MenuHeader = styled(PrimaryHeadline)`
  margin: 70px 0 5px 0;
`;

export const MenuDescription = styled('p')`
  max-width: 950px;
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

export const MenuLink = styled(ButtonLink)`
  margin-top: 30px;
`;