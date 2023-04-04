import {NextPage} from "next";
import {LandingImage} from "@/src/styles/presets.styles";
import HoursTable from "@/src/components/HoursTable/HoursTable";
import {Context} from "@/src/styles/zeiten.styles";
import Head from "next/head";


const Zeiten: NextPage = () => {
    return (
        <Context>

            <Head>
                <title>Pizzeria Bei Toni | Zeiten</title>
            </Head>

            <LandingImage src="/img/zeiten/biergarten.webp" alt="Biergarten" />

            <HoursTable />

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Zeiten;