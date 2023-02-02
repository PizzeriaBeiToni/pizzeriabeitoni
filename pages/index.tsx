import styles from "styles/Index.module.sass";
import {NextPage} from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar/Sidebar";
import FrontSection from "@/components/FrontSection/FrontSection";
import MenuSection from "@/components/MenuSection/MenuSection";


const Index: NextPage = () => {
    return (
        <div className={styles.context}>

            <Head>
                <title>Pizzeria Bei Toni</title>
                <link rel="icon" href="/img/favicon.png" />
            </Head>

            <Sidebar />

            <div className={styles.content}>
                <FrontSection />
                <MenuSection />
            </div>

        </div>
    );
}


export default Index;
