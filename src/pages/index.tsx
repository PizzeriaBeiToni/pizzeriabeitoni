import {NextPage} from "next";
import Head from "next/head";
import Sidebar from "@/src/components/Sidebar/Sidebar";
import FrontSection from "@/src/components/FrontSection/FrontSection";
import MenuSection from "@/src/components/MenuSection/MenuSection";
import MapsSection from "@/src/components/MapsSection/MapsSection";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import HoursSection from "@/src/components/HoursSection/HoursSection";
import {Context, Content} from "@/src/styles/Index.styles";


const Index: NextPage = () => {
    return (
        <Context>

            <Head>
                <title>Pizzeria Bei Toni</title>
                <link rel="icon" href="/img/favicon.png" />
            </Head>

            <Sidebar />

            <Content id="content">
                <FrontSection />
                <MenuSection />
                <MapsSection />
                <HoursSection />
                <ContactSection />
            </Content>

        </Context>
    );
}

// noinspection JSUnusedGlobalSymbols
export default Index;
