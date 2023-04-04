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

            <LandingImage
                src="https://scontent-fra3-1.xx.fbcdn.net/v/t31.18172-8/1115940_1405112989713343_1405720748_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2jIBg9Jynv4AX_Rvc1m&_nc_ht=scontent-fra3-1.xx&oh=00_AfCTUUGGttgk6rWFa6eoMVhzJs9LFdYOAHnA-3uFK5QRow&oe=64527400"
            />

            <HoursTable />

        </Context>
    );
}


// noinspection JSUnusedGlobalSymbols
export default Zeiten;