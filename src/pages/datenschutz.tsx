import {NextPage} from "next";
import {Container} from "@mui/material";
import {Section, SectionTitle, Title} from "@/src/styles/datenschutz.styles";
import Head from "next/head";


const Datenschutz: NextPage = () => {
    return (
        <Container maxWidth="lg">

            <Head>
                <title>Pizzeria Bei Toni | Datenschutz</title>
            </Head>

            <Title>
                Datenschutzerklärung
            </Title>

            <SectionTitle>Drittinhalte</SectionTitle>
            <Section>
                Diese Seite enthält Links zu Webseiten dritter. Wenn Sie einem Link zu einer
                dieser Webseiten (die außerhalb unserer Verantwortung liegen) folgen, weisen
                wir Sie darauf hin, dass diese Webseiten ihre eigenen Datenschutzrichtlinien
                haben und dass wir für diese Richtlinien keine Verantwortung oder Haftung
                übernehmen. Bitte überprüfen Sie diese Datenschutzrichtlinien, bevor Sie
                personenbezogene Daten an diese Webseiten weitergeben.
            </Section>

            <SectionTitle>Copyrights und Markennamen</SectionTitle>
            <Section>
                Die Copyrights und Markenrechte der einzelnen Produktnamen und Herstellernamen
                liegen bei den jeweiligen Rechteinhabern. Diese Links, Logos und Bilder dienen
                zur reinen Kundeninformation und stellen keine Werbung dar.
            </Section>

        </Container>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Datenschutz;