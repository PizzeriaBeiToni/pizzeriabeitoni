import styles from "styles/Index.module.sass";
import {NextPage} from "next";
import Head from "next/head";
import Sidebar from "@/components/Sidebar/Sidebar";


const Index: NextPage = () => {
    return (
        <div className={styles.context}>

            <Head>
                <title>Pizzeria bei Toni</title>
            </Head>

            <Sidebar />

            <div className={styles.content}>

            </div>

        </div>
    );
}


export default Index;
