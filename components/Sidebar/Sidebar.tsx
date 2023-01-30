import styles from "./Sidebar.module.sass";
import React from "react";
import {useMaxWidth} from "@/dimensions";


const Sidebar: React.FC = () => {
    const isSmallScreen = useMaxWidth("small");

    if (isSmallScreen) {
        return (
            <div className={styles.context}>

                {/* Header (Title) */}
                <div className={styles.header}>
                    <h1>Pizzeria bei Toni</h1>
                </div>

            </div>
        );
    }

    return (
        <div className={styles.context}>

            {/* Header (Title) */}
            <div className={styles.header}>
                <h1>Pizzeria bei Toni</h1>
            </div>

            {/* Address */}
            <div className={styles.address}>
                <a href="https://goo.gl/maps/WtdewpnyvgqJamHG6">
                    Mathmeckestraße 4 <br />
                    59889 Eslohe
                </a>
            </div>

            {/* Links */}
            <div className={styles.links}>
                <a>
                    Fotos
                </a>
                <a>
                    Menü
                </a>
                <a>
                    Kontakt
                </a>
            </div>

        </div>
    );
}


export default Sidebar;
