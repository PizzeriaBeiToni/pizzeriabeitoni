import {styled} from "@mui/material";
import {PrimaryHeadline} from "@/src/styles/presets.styles";


export const Title = styled(PrimaryHeadline)`
  width: 100%;
  max-width: 100%;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled('h2')`

`;

export const Section = styled('p')`
  text-align: justify;
`;