import styles from "./MenuSection.module.sass";
import React from "react";
import { HiOutlineBookOpen as OpenIcon, HiOutlineDownload as DownloadIcon } from "react-icons/hi";


const MenuSection: React.FC = () => {
    return (
        <div id="menu" className={styles.context}>

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

        </div>
    );
}

export default MenuSection;
