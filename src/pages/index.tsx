import {NextPage} from "next";
import FrontSection from "@/src/components/FrontSection/FrontSection";
import Head from "next/head";


const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pizzeria Bei Toni</title>
            </Head>
            <FrontSection />
        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
