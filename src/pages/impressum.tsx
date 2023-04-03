import {NextPage} from "next";
import {PrimaryHeadline} from "@/src/styles/presets.styles";
import {Paragraph} from "@/src/styles/impressum.styles";
import {Context} from "@/src/styles/impressum.styles";
import Head from "next/head";


const Impressum: NextPage = () => {
    return (
        <Context>

            <Head>
                <title>Pizzeria Bei Toni | Impressum</title>
            </Head>

            <PrimaryHeadline>
                Impressum
            </PrimaryHeadline>

            <Paragraph>
                <span>Antonio Vitale</span>
                <span>Mathmeckestraße 4</span>
                <span>59889 Eslohe, Deutschland</span>
                <span>Telefon: (02973) 451</span>
                <span>Email: pizzeriabeitoni57@gmail.com</span>
            </Paragraph>

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Impressum;