import styles from "./MenuSection.module.sass";
import React from "react";
import { HiOutlineBookOpen as OpenIcon, HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import { motion } from "framer-motion";


const MenuSection: React.FC = () => {
    return (
        <motion.div
            id="menu"
            className={styles.context}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >

            <span className={styles.header}>
                Besuchen Sie unser leckeres Menü
            </span>

            <div className={styles.buttonGroup}>
                <a href="/menu.pdf" target="_blank">
                    Öffnen <OpenIcon />
                </a>
                <a href="/menu.pdf" download="Pizzeria_Bei_Toni_Menü">
                    Download <DownloadIcon />
                </a>
            </div>

        </motion.div>
    );
}

export default MenuSection;
